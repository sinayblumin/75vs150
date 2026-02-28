"use client";

import { useState } from "react";
import { KpiCard } from "./KpiCard";
import { SectionHeading } from "./SectionHeading";
import { ScenarioToggle } from "./ScenarioToggle";
import { StakeholderImpact } from "./StakeholderImpact";
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

export default function DashboardClient({
    compareData,
    oecdContext: _oecdContext,
}: {
    compareData: CompareResult;
    oecdContext: unknown;
}) {
    const [activeScenario, setActiveScenario] = useState<75 | 150>(75);
    const currentScenario = activeScenario === 75 ? compareData.baseline : compareData.proposed;

    const formatMillions = (val: number) => `₪${(val / 1_000_000).toFixed(1)}M`;

    const vatLossIls = compareData.baseline.totals.totalVatIls - compareData.proposed.totals.totalVatIls;

    return (
        <div className="space-y-12 animate-in fade-in duration-500">
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 lg:p-10">
                <h1 className="text-3xl md:text-4xl lg:text-4xl font-heading font-bold mb-6 text-slate-900 leading-tight">
                    האם העלאת פטור המע"מ על יבוא אישי מ-75$ ל-150$ טובה לציבור הישראלי?
                </h1>
                <div className="text-slate-600 space-y-4 max-w-4xl text-lg leading-relaxed">
                    <p>
                        האתר מציג מודל נתונים שקוף שבוחן מה יקרה אם תקרת הפטור ממע"מ על חבילות מחו"ל תעלה ל-150 דולר.
                    </p>
                    <p>
                        המטרה היא להראות בצורה כמותית את הוויתורים: כמה הציבור חוסך, כמה המדינה מפסידה במסים,
                        ומה עשוי להיות האפקט על עסקים מקומיים.
                    </p>
                </div>
            </section>

            <section className="bg-blue-50/50 p-6 rounded-xl border border-blue-100/60">
                <h3 className="font-bold text-blue-900 mb-3">איך לקרוא את הדשבורד?</h3>
                <ul className="space-y-2 text-blue-800 text-sm md:text-base">
                    <li>1. בחרו למעלה את התרחיש - פטור עד 75$ או פטור עד 150$.</li>
                    <li>2. הסתכלו על הקלפים כדי לראות מי מרוויח ומי מפסיד בכל תרחיש.</li>
                    <li>3. גללו למטה כדי להבין את ההנחות, הרגישות שלהן ואת מקורות הנתונים.</li>
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                    <KpiCard
                        title='מע"מ שנגבה ע"י המדינה'
                        value={formatMillions(currentScenario.totals.totalVatIls)}
                        valueColorClass="text-blue-600"
                        tooltipText='סך הכנסות המדינה ממע"מ על יבוא אישי לפי התרחיש שנבחר.'
                    />
                    <KpiCard
                        title="חיסכון שנתי לצרכנים"
                        value={activeScenario === 150 ? formatMillions(compareData.totals.consumerSavingsIls) : "₪0M"}
                        valueColorClass={activeScenario === 150 ? "text-green-500" : "text-slate-300"}
                        tooltipText='החיסכון לצרכנים מאי-תשלום מע"מ על טווח המחיר 75$-150$.'
                        isPositive={activeScenario === 150}
                    />
                    <KpiCard
                        title="אובדן הכנסה לעסקים מקומיים"
                        value={formatMillions(currentScenario.totals.lostDomesticRevenueIls)}
                        valueColorClass="text-red-500"
                        tooltipText='הערכת המחזור שעובר מקנייה מקומית לקנייה מחו"ל לפי הנחת התחליפיות.'
                    />
                </div>

                <div className="bg-slate-800 text-slate-200 p-4 rounded-xl text-center text-sm md:text-base shadow-inner">
                    {activeScenario === 75 ? (
                        <p>
                            בתרחיש הנוכחי (פטור עד 75$), המדינה גובה כ-<strong>{formatMillions(compareData.baseline.totals.totalVatIls)}</strong>,
                            והצרכנים אינם חוסכים בטווח 75$-150$.
                        </p>
                    ) : (
                        <p>
                            בתרחיש המוצע (פטור עד 150$), גביית המע"מ יורדת לכ-<strong>{formatMillions(compareData.proposed.totals.totalVatIls)}</strong>,
                            והחיסכון לצרכנים עולה לכ-<strong>{formatMillions(compareData.totals.consumerSavingsIls)}</strong>.
                        </p>
                    )}
                </div>
            </section>

            <section className="grid grid-cols-1 items-stretch gap-6 pt-4 lg:grid-cols-2 lg:gap-8">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-sm text-slate-600 leading-relaxed">
                    הפירוק המפורט לפי רצועות מחיר הוסר במכוון כדי לשמור על מסר נקי וברור.
                    ההשוואה המרכזית בדשבורד מתמקדת כעת בסך ההשפעה על בעלי העניין: צרכנים, מדינה ועסקים מקומיים.
                </div>

                <StakeholderImpact
                    consumerSavingsIls={compareData.totals.consumerSavingsIls}
                    vatLossIls={vatLossIls}
                    shiftedRevenueIls={compareData.proposed.totals.lostDomesticRevenueIls}
                />
            </section>

            <section className="space-y-6">
                <SectionHeading title="רגישות להנחות המודל" subtitle="בדיקת השפעת שינוי שיעור התחליפיות על המחזור שעובר מעסקים בישראל לקניות מחו״ל." />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <SensitivityChart />
                    <CategoryImpactCard />
                </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <section className="bg-slate-50 border border-slate-200 p-8 rounded-2xl">
                    <h3 className="text-2xl font-heading font-bold mb-4 text-slate-800">מה אפשר ללמוד מכאן?</h3>
                    <p className="text-slate-600 mb-3 leading-relaxed">
                        הממצאים מדגישים את הדילמה: מצד אחד הרחבת הפטור מקלה על חלק מהצרכנים, ומצד שני מצמצמת הכנסות מדינה ומעבירה ביקוש החוצה.
                    </p>
                    <p className="text-slate-600 leading-relaxed font-medium">
                        זהו כלי לחשיבה מבוססת נתונים על הטרייד-אוף, ולא הכרעה ערכית חד-משמעית.
                    </p>
                </section>

                <section className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 p-8 rounded-2xl flex flex-col justify-center items-center text-center">
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
