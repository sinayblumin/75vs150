import assumptions from "../data/assumptions.json";
import taxRules from "../data/tax_rules.json";

export interface BandResult {
    label: string;
    parcels: number;
    totalDeclaredValueUsd: number;
    totalDeclaredValueIls: number;
    vatCollectedIls: number;
}

export interface ScenarioResult {
    exemptionThresholdUsd: number;
    bands: BandResult[];
    totals: {
        totalVatIls: number;
        lostDomesticRevenueIls: number;
    };
}

export function calculateScenario(exemptionThresholdUsd: number): ScenarioResult {
    const annualParcels = assumptions.annual_parcels_total;

    const bandsConfig = [
        { label: "עד $75", share: assumptions.share_under_75, avgValue: assumptions.avg_value_under_75, minVal: 0, maxVal: 75 },
        { label: "$75 - $150", share: assumptions.share_75_to_150, avgValue: assumptions.avg_value_75_to_150, minVal: 75, maxVal: 150 },
        { label: "מעל $150", share: assumptions.share_over_150, avgValue: assumptions.avg_value_over_150, minVal: 150, maxVal: 999999 }
    ];

    const exRate = taxRules.exchange_rate_usd_ils;
    const vatRate = taxRules.vat_rate;

    const resultBands = bandsConfig.map(band => {
        const parcels = annualParcels * band.share;
        const totalDeclaredValueUsd = parcels * band.avgValue;
        const totalDeclaredValueIls = totalDeclaredValueUsd * exRate;

        let vatCollectedIls = 0;

        // Per spec:
        // Under 75: always 0 (both scenarios).
        // 75-150: Scenario A (vat on full), Scenario B (vat = 0).
        // Over 150: VAT on full in both scenarios.
        if (band.minVal >= exemptionThresholdUsd) {
            vatCollectedIls = totalDeclaredValueIls * vatRate;
        }

        return {
            label: band.label,
            parcels,
            totalDeclaredValueUsd,
            totalDeclaredValueIls,
            vatCollectedIls
        };
    });

    const totalVatIls = resultBands.reduce((sum, b) => sum + b.vatCollectedIls, 0);

    let lostDomesticRevenueIls = 0;
    // Proxy calculated only when threshold is raised, making imported goods cheaper and substituting local retail.
    if (exemptionThresholdUsd >= 150) {
        const band75To150 = bandsConfig.find(b => b.minVal === 75)!;
        const parcels = annualParcels * band75To150.share;
        const valIls = parcels * band75To150.avgValue * exRate;
        lostDomesticRevenueIls = valIls * assumptions.substitution_rate;
    }

    return {
        exemptionThresholdUsd,
        bands: resultBands,
        totals: {
            totalVatIls,
            lostDomesticRevenueIls
        }
    };
}

export function compareScenarios(baselineThreshold: number, proposedThreshold: number) {
    const baseline = calculateScenario(baselineThreshold);
    const proposed = calculateScenario(proposedThreshold);

    const consumerSavingsIls = baseline.totals.totalVatIls - proposed.totals.totalVatIls;

    return { baseline, proposed, totals: { consumerSavingsIls } };
}
