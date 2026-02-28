import assumptions from "../data/assumptions.json";
import taxRules from "../data/tax_rules.json";

export interface AssumptionOverrides {
    annual_parcels_total?: number;
    share_under_75?: number;
    share_75_to_150?: number;
    share_over_150?: number;
    avg_value_under_75?: number;
    avg_value_75_to_150?: number;
    avg_value_over_150?: number;
    substitution_rate?: number;
}

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

function buildAssumptions(overrides: AssumptionOverrides = {}) {
    return { ...assumptions, ...overrides };
}

export function calculateScenario(
    exemptionThresholdUsd: number,
    assumptionOverrides: AssumptionOverrides = {}
): ScenarioResult {
    const modelAssumptions = buildAssumptions(assumptionOverrides);
    const annualParcels = modelAssumptions.annual_parcels_total;

    const bandsConfig = [
        { label: "עד $75", share: modelAssumptions.share_under_75, avgValue: modelAssumptions.avg_value_under_75, minVal: 0 },
        { label: "$75 - $150", share: modelAssumptions.share_75_to_150, avgValue: modelAssumptions.avg_value_75_to_150, minVal: 75 },
        { label: "מעל $150", share: modelAssumptions.share_over_150, avgValue: modelAssumptions.avg_value_over_150, minVal: 150 },
    ];

    const exRate = taxRules.exchange_rate_usd_ils;
    const vatRate = taxRules.vat_rate;

    const resultBands = bandsConfig.map((band) => {
        const parcels = annualParcels * band.share;
        const totalDeclaredValueUsd = parcels * band.avgValue;
        const totalDeclaredValueIls = totalDeclaredValueUsd * exRate;

        let vatCollectedIls = 0;
        // Under 75: no VAT in both scenarios.
        // 75-150: VAT in baseline only.
        // Over 150: VAT in both scenarios.
        if (band.minVal >= exemptionThresholdUsd) {
            vatCollectedIls = totalDeclaredValueIls * vatRate;
        }

        return {
            label: band.label,
            parcels,
            totalDeclaredValueUsd,
            totalDeclaredValueIls,
            vatCollectedIls,
        };
    });

    const totalVatIls = resultBands.reduce((sum, b) => sum + b.vatCollectedIls, 0);

    let lostDomesticRevenueIls = 0;
    if (exemptionThresholdUsd >= 150) {
        const band75To150 = bandsConfig.find((b) => b.minVal === 75)!;
        const parcels = annualParcels * band75To150.share;
        const valIls = parcels * band75To150.avgValue * exRate;
        lostDomesticRevenueIls = valIls * modelAssumptions.substitution_rate;
    }

    return {
        exemptionThresholdUsd,
        bands: resultBands,
        totals: {
            totalVatIls,
            lostDomesticRevenueIls,
        },
    };
}

export function compareScenarios(
    baselineThreshold: number,
    proposedThreshold: number,
    assumptionOverrides: AssumptionOverrides = {}
) {
    const baseline = calculateScenario(baselineThreshold, assumptionOverrides);
    const proposed = calculateScenario(proposedThreshold, assumptionOverrides);
    const consumerSavingsIls = baseline.totals.totalVatIls - proposed.totals.totalVatIls;

    return { baseline, proposed, totals: { consumerSavingsIls } };
}
