"use client";

import { useState } from "react";
import { calculateScenario } from "@/lib/scenarioModel";
import assumptions from "@/data/assumptions.json";
import { KpiCard } from "./KpiCard";
import { SectionHeading } from "./SectionHeading";
import { ScenarioToggle } from "./ScenarioToggle";
import { StakeholderImpact } from "./StakeholderImpact";
import { StakeholderComparisonTable } from "./StakeholderComparisonTable";
import { SensitivityChart } from "./SensitivityChart";
import { CategoryImpactCard } from "./CategoryImpactCard";

export type ScenarioResult = {
    exemptionThresholdUsd: number;
    bands: {
        label: string;
        parcels: number;
        totalDeclaredValueUsd: number;
        totalDeclaredValueIls: number;
        vatCollectedIls: number;
    }[];
    totals: {
        totalVatIls: number;
        lostDomesticRevenueIls: number;
    };
};

export type CompareResult = {
    baseline: ScenarioResult;
    proposed: ScenarioResult;
    totals: {
        consumerSavingsIls: number;
    };
};

type ScenarioTotals = {
    totalVat: number;
    totalLocalBusinessRevenue: number;
};

type BehaviorMode = "static" | "behavioral";

function getScenarioTotals(scenario: ScenarioResult): ScenarioTotals {
    const totalVat = scenario.bands.reduce((sum, band) => sum + band.vatCollectedIls, 0);

    return {
        totalVat,
        // In this model we proxy local-business impact as revenue retained in Israel (negative when shifted abroad).
        totalLocalBusinessRevenue: -scenario.totals.lostDomesticRevenueIls,
    };
}

function getBehavioralOverrides() {
    // Behavioral showcase mode:
    // keep total parcels fixed, keep >150 share fixed,
    // and set equal parcel volume in the two exempt-relevant bands.
    // We also keep a similar average value in both bands to isolate quantity effect.
    const equalShare = (1 - assumptions.share_over_150) / 2;

    return {
        share_under_75: equalShare,
        share_75_to_150: equalShare,
        share_over_150: assumptions.share_over_150,
        avg_value_75_to_150: assumptions.avg_value_under_75,
        substitution_rate: Math.min(0.6, assumptions.substitution_rate + 0.08),
    };
}

export default function DashboardClient({
    compareData,
    oecdContext: _oecdContext,
}: {
    compareData: CompareResult;
    oecdContext: unknown;
}) {
    const [activeScenario, setActiveScenario] = useState<75 | 150>(75);
    const [behaviorMode, setBehaviorMode] = useState<BehaviorMode>("static");

    const formatMillions = (val: number) => `₪${(val / 1_000_000).toFixed(1)}M`;
    const formatSignedMillions = (val: number) => {
        const abs = formatMillions(Math.abs(val));
        if (val > 0) return `+${abs}`;
        if (val < 0) return `-${abs}`;
        return abs;
    };

    // Base scenario values (computed once from model results).
    const baseline75Static = compareData.baseline;
    const proposed150Static = compareData.proposed;
    const behavioralOverrides = getBehavioralOverrides();
    const baseline75Behavioral = calculateScenario(75, behavioralOverrides);
    const proposed150Behavioral = calculateScenario(150, behavioralOverrides);
    const noExemptionStatic = calculateScenario(0);
    const noExemptionBehavioral = calculateScenario(0, behavioralOverrides);

    const activeBaseline75 = behaviorMode === "behavioral" ? baseline75Behavioral : baseline75Static;
    const activeProposed150 = behaviorMode === "behavioral" ? proposed150Behavioral : proposed150Static;
    const activeNoExemption = behaviorMode === "behavioral" ? noExemptionBehavioral : noExemptionStatic;

    const totals75 = getScenarioTotals(activeBaseline75);
    const totals150 = getScenarioTotals(activeProposed150);
    const totals75Static = getScenarioTotals(baseline75Static);
    const totals75Behavioral = getScenarioTotals(baseline75Behavioral);
    const totals150Static = getScenarioTotals(proposed150Static);
    const totals150Behavioral = getScenarioTotals(proposed150Behavioral);
    const totalsNoExemption = getScenarioTotals(activeNoExemption);

    // KPI logic for selected scenario.
    const vatCollectedIls = activeScenario === 75 ? totals75.totalVat : totals150.totalVat;
    // Consumer savings are modeled as VAT-only savings proxy vs a "no exemption" scenario.
    const consumerSavings75 = totalsNoExemption.totalVat - totals75.totalVat;
    const consumerSavings150 = totalsNoExemption.totalVat - totals150.totalVat;
    const consumerSavingsDelta = totals75.totalVat - totals150.totalVat; // extra savings from 75$ to 150$
    const consumerSavingsRatio = consumerSavings75 > 0 ? consumerSavings150 / consumerSavings75 : 0;
    const consumerSavingsIls = activeScenario === 75 ? consumerSavings75 : consumerSavings150;
    const businessDelta = totals150.totalLocalBusinessRevenue - totals75.totalLocalBusinessRevenue; // expected negative
    const businessLossIls = activeScenario === 75 ? 0 : businessDelta;

    // Stakeholder table values (same KPI definitions for consistency):
    // consumer rows are savings vs "no exemption" under each scenario.
    const consumer75Ils = consumerSavings75;
    const consumer150Ils = consumerSavings150;
    const state75Ils = totals75.totalVat;
    const state150Ils = totals150.totalVat;
    const business75Ils = totals75.totalLocalBusinessRevenue;
    const business150Ils = totals150.totalLocalBusinessRevenue;

    const consumerDeltaIls = consumer150Ils - consumer75Ils;
    const stateDeltaIls = state150Ils - state75Ils;
    const businessDeltaIls = business150Ils - business75Ils;

    const staticVatDelta = totals150Static.totalVat - totals75Static.totalVat;
    const behavioralVatDelta = totals150Behavioral.totalVat - totals75Behavioral.totalVat;
    const staticConsumerDelta = totals75Static.totalVat - totals150Static.totalVat;
    const behavioralConsumerDelta = totals75Behavioral.totalVat - totals150Behavioral.totalVat;
    const staticBusinessDelta = totals150Static.totalLocalBusinessRevenue - totals75Static.totalLocalBusinessRevenue;
    const behavioralBusinessDelta =
        totals150Behavioral.totalLocalBusinessRevenue - totals75Behavioral.totalLocalBusinessRevenue;

    return (
        <div className="animate-in fade-in duration-500 space-y-8 md:space-y-10">
            <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50 p-5 shadow-sm sm:p-7 lg:p-10">
                <div className="pointer-events-none absolute -left-16 -top-16 h-44 w-44 rounded-full bg-blue-100/60 blur-2xl" />
                <div className="pointer-events-none absolute -bottom-16 -right-16 h-44 w-44 rounded-full bg-emerald-100/60 blur-2xl" />
                <div className="relative mx-auto max-w-5xl text-center lg:text-right">
                    <span className="mb-4 inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-600">
                        דשבורד תרחישים | יבוא אישי ומע״מ
                    </span>
                    <h1 className="mb-4 text-2xl font-heading font-bold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
                        האם העלאת פטור המע"מ על יבוא אישי מ-75$ ל-150$ טובה לציבור הישראלי?
                    </h1>
                    <div className="mx-auto max-w-4xl space-y-3 text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0">
                        <p>
                            האתר מציג מודל נתונים שקוף שבוחן מה יקרה אם תקרת הפטור ממע"מ על חבילות מחו"ל תעלה ל-150 דולר.
                        </p>
                        <p>
                            המטרה היא להראות בצורה כמותית את הוויתורים: כמה הציבור חוסך, כמה המדינה מפסידה במסים,
                            ומה עשוי להיות האפקט על עסקים מקומיים.
                        </p>
                    </div>
                </div>
            </section>

            <section className="rounded-2xl border border-blue-100 bg-blue-50/70 p-5 sm:p-6">
                <h3 className="font-bold text-blue-900 mb-3">איך לקרוא את הדשבורד?</h3>
                <ul className="grid grid-cols-1 gap-3 text-sm text-blue-800 md:grid-cols-3 md:text-base">
                    <li className="rounded-xl border border-blue-100 bg-white/70 p-3">1. בחרו למעלה את התרחיש - פטור עד 75$ או פטור עד 150$.</li>
                    <li className="rounded-xl border border-blue-100 bg-white/70 p-3">2. הסתכלו על הקלפים כדי לראות מי מרוויח ומי מפסיד בכל תרחיש.</li>
                    <li className="rounded-xl border border-blue-100 bg-white/70 p-3">3. גללו למטה כדי להבין את ההנחות, הרגישות שלהן ואת מקורות הנתונים.</li>
                </ul>
            </section>

            <section className="space-y-6">
                <SectionHeading
                    title="תמונת מצב בשני תרחישים"
                    subtitle="בחרו תקרת פטור וראו כיצד משתנים גביית המע״מ, החיסכון לצרכנים והחשיפה של עסקים מקומיים."
                />
                <ScenarioToggle activeScenario={activeScenario} onScenarioChange={setActiveScenario} />
            </section>

            <section className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
                    <KpiCard
                        title='מע"מ שנגבה ע"י המדינה'
                        value={formatMillions(vatCollectedIls)}
                        valueColorClass="text-blue-600"
                        tooltipText='סך הכנסות המדינה ממע"מ על יבוא אישי לפי התרחיש שנבחר.'
                    />
                    <KpiCard
                        title="חיסכון שנתי לצרכנים ממע״מ"
                        value={formatMillions(consumerSavingsIls)}
                        valueColorClass="text-green-500"
                        tooltipText='זהו אומדן חיסכון ממע״מ בלבד ביחס לתרחיש ללא פטור ממע״מ.'
                        isPositive={consumerSavingsIls > 0}
                    />
                    <KpiCard
                        title="אובדן הכנסה לעסקים מקומיים"
                        value={businessLossIls === 0 ? formatMillions(0) : `-${formatMillions(Math.abs(businessLossIls))}`}
                        valueColorClass="text-red-500"
                        tooltipText='הערכת המחזור שעובר מקנייה מקומית לקנייה מחו"ל לפי הנחת התחליפיות.'
                    />
                </div>

                <div className="rounded-xl bg-slate-800 p-4 text-center text-sm text-slate-200 shadow-inner md:text-base">
                    {activeScenario === 75 ? (
                        <p>
                            בתרחיש פטור עד 75$, המדינה גובה כ-<strong>{formatMillions(totals75.totalVat)}</strong>,
                            והצרכנים חוסכים כ-<strong>{formatMillions(consumerSavings75)}</strong> לעומת מצב ללא פטור ממע״מ.
                        </p>
                    ) : (
                        <p>
                            בתרחיש פטור עד 150$, גביית המע"מ יורדת לכ-<strong>{formatMillions(totals150.totalVat)}</strong>,
                            וחיסכון הצרכנים ממע״מ מגיע לכ-<strong>{formatMillions(consumerSavings150)}</strong> מול מצב ללא פטור
                            (תוספת של כ-<strong>{formatMillions(consumerSavingsDelta)}</strong> לעומת פטור עד 75$).
                        </p>
                    )}
                </div>
                <p className="text-center text-xs text-slate-500">
                    הבהרה: בגרסת המודל הנוכחית, חיסכון הצרכנים מחושב כרכיב מע״מ בלבד וביחס לתרחיש ללא פטור ממע״מ.
                </p>
            </section>

            <section className="mx-auto max-w-3xl space-y-3 text-center">
                <div className="flex justify-center">
                    <div className="inline-flex w-full flex-wrap justify-center gap-2 rounded-xl border border-slate-200 bg-white p-2 shadow-sm sm:w-auto">
                        <button
                            type="button"
                            onClick={() => setBehaviorMode("static")}
                            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                                behaviorMode === "static"
                                    ? "bg-blue-600 text-white"
                                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                            }`}
                        >
                            ללא שינוי התנהגותי
                        </button>
                        <button
                            type="button"
                            onClick={() => setBehaviorMode("behavioral")}
                            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                                behaviorMode === "behavioral"
                                    ? "bg-blue-600 text-white"
                                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                            }`}
                        >
                            עם שינוי התנהגותי
                        </button>
                    </div>
                </div>
                <p className="text-center text-xs leading-relaxed text-slate-500">
                    במצב "עם שינוי התנהגותי" המודל מניח כמות חבילות זהה ושווי ממוצע דומה בין רצועת עד 75$ לרצועת 75$-150$
                    (תוך שמירה על אותו סך חבילות שנתי), כדי להמחיש אפקט כמותי בצורה נקייה.
                    {behaviorMode === "behavioral" ? ` בהנחה זו, החיסכון בתרחיש 150$ הוא בערך פי ${consumerSavingsRatio.toFixed(1)} מהחיסכון בתרחיש 75$.` : ""}
                </p>
            </section>

            <section className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                <SectionHeading
                    title="השוואת הנחות: בלי שינוי התנהגותי מול עם שינוי התנהגותי"
                    subtitle="השפעת העלאת הפטור מ-75$ ל-150$ תחת שתי הנחות שונות."
                />
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2 rounded-xl border border-slate-200 bg-slate-50 p-4">
                        <h4 className="font-semibold text-slate-900">ללא שינוי התנהגותי</h4>
                        <p className="text-sm text-slate-700">שינוי בגביית מע״מ: {formatSignedMillions(staticVatDelta)}</p>
                        <p className="text-sm text-slate-700">חיסכון נוסף לצרכנים (75$→150$): {formatSignedMillions(staticConsumerDelta)}</p>
                        <p className="text-sm text-slate-700">שינוי במחזור עסקים מקומיים: {formatSignedMillions(staticBusinessDelta)}</p>
                    </div>
                    <div className="space-y-2 rounded-xl border border-blue-200 bg-blue-50 p-4">
                        <h4 className="font-semibold text-slate-900">עם שינוי התנהגותי (כמות שווה בין הרצועות)</h4>
                        <p className="text-sm text-slate-700">שינוי בגביית מע״מ: {formatSignedMillions(behavioralVatDelta)}</p>
                        <p className="text-sm text-slate-700">חיסכון נוסף לצרכנים (75$→150$): {formatSignedMillions(behavioralConsumerDelta)}</p>
                        <p className="text-sm text-slate-700">שינוי במחזור עסקים מקומיים: {formatSignedMillions(behavioralBusinessDelta)}</p>
                    </div>
                </div>
            </section>

            <section className="grid grid-cols-1 items-stretch gap-6 pt-2 lg:grid-cols-2 lg:gap-8">
                <StakeholderImpact
                    consumerDeltaIls={consumerDeltaIls}
                    stateDeltaIls={stateDeltaIls}
                    localBusinessDeltaIls={businessDeltaIls}
                />

                <StakeholderComparisonTable
                    consumer75Ils={consumer75Ils}
                    consumer150Ils={consumer150Ils}
                    state75Ils={state75Ils}
                    state150Ils={state150Ils}
                    business75Ils={business75Ils}
                    business150Ils={business150Ils}
                />
            </section>

            <section className="space-y-6">
                <SectionHeading title="רגישות להנחות המודל" subtitle="בדיקת השפעת שינוי שיעור התחליפיות על המחזור שעובר מעסקים בישראל לקניות מחו״ל." />
                <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                    <SensitivityChart />
                    <CategoryImpactCard />
                </div>
            </section>

            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
                <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
                    <h3 className="text-2xl font-heading font-bold mb-4 text-slate-800">מה אפשר ללמוד מכאן?</h3>
                    <p className="text-slate-600 mb-3 leading-relaxed">
                        הממצאים מדגישים את הדילמה: מצד אחד הרחבת הפטור מקלה על חלק מהצרכנים, ומצד שני מצמצמת הכנסות מדינה ומעבירה ביקוש החוצה.
                    </p>
                    <p className="text-slate-600 leading-relaxed font-medium">
                        זהו כלי לחשיבה מבוססת נתונים על הטרייד-אוף, ולא הכרעה ערכית חד-משמעית.
                    </p>
                </section>

                <section className="flex flex-col items-center justify-center rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 text-center sm:p-8">
                    <h3 className="text-2xl font-heading font-bold mb-3 text-blue-900">מעוניינים לצלול לפרטים?</h3>
                    <p className="text-blue-800 mb-6 leading-relaxed max-w-sm">
                        ראו פירוט מלא של המתודולוגיה, מקורות המידע וההנחות המדויקות שמניעות את המודל.
                    </p>
                    <a
                        href="/methodology"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 text-base font-bold transition-all"
                    >
                        <span>דוח מתודולוגיה ומקורות</span>
                    </a>
                </section>
            </div>
        </div>
    );
}
