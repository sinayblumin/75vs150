"use client";

import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { KpiCard } from './KpiCard';
import { SectionHeading } from './SectionHeading';
import { ChartCard } from './ChartCard';
import { ScenarioToggle } from './ScenarioToggle';

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
    oecdContext
}: {
    compareData: CompareResult,
    oecdContext: any
}) {
    const [activeScenario, setActiveScenario] = useState<75 | 150>(75);

    const currentScenario = activeScenario === 75 ? compareData.baseline : compareData.proposed;

    const formatMillions = (val: number) => `₪${(val / 1000000).toFixed(1)}M`;
    const formatILS = (val: number) => `₪${val.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;

    const barChartData = [
        { name: "עד $75", [75]: compareData.baseline.bands[0].vatCollectedIls, [150]: compareData.proposed.bands[0].vatCollectedIls },
        { name: "$75 - $150", [75]: compareData.baseline.bands[1].vatCollectedIls, [150]: compareData.proposed.bands[1].vatCollectedIls },
        { name: "מעל $150", [75]: compareData.baseline.bands[2].vatCollectedIls, [150]: compareData.proposed.bands[2].vatCollectedIls },
    ];

    const pieData75 = [
        { name: 'מע"מ (מדינה)', value: compareData.baseline.totals.totalVatIls, fill: '#3b82f6' },
        { name: 'נזק לעסקים (משוער)', value: compareData.baseline.totals.lostDomesticRevenueIls, fill: '#ef4444' },
    ];

    const pieData150 = [
        { name: 'מע"מ (מדינה)', value: compareData.proposed.totals.totalVatIls, fill: '#3b82f6' },
        { name: 'נזק לעסקים (משוער)', value: compareData.proposed.totals.lostDomesticRevenueIls, fill: '#ef4444' },
        { name: 'חיסכון (צרכנים)', value: compareData.totals.consumerSavingsIls, fill: '#10b981' },
    ];

    const currentPieData = activeScenario === 75 ? pieData75 : pieData150;

    return (
        <div className="space-y-12 animate-in fade-in duration-500">
            {/* Intro */}
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 lg:p-10">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black mb-6 text-slate-900 leading-tight">
                    האם העלאת פטור המע&quot;מ על יבוא אישי מ‑75 ל‑150 דולר טובה לציבור הישראלי?
                </h1>

                <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100/50 mb-8 max-w-3xl">
                    <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                        <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">?</span>
                        איך לקרוא את הדשבורד
                    </h3>
                    <ul className="space-y-2 text-blue-800 text-sm md:text-base">
                        <li className="flex items-start gap-2">
                            <span className="text-blue-500 mt-1">•</span>
                            <span><strong>בחרו תרחיש:</strong> השוו בין המצב הנוכחי לתרחיש המוצע.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-500 mt-1">•</span>
                            <span><strong>בחנו את המדדים:</strong> שימו לב איך שינוי הפטור מעביר כסף בין המדינה, לעסקים ולצרכנים.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-500 mt-1">•</span>
                            <span><strong>זכרו:</strong> זהו מודל פשוט שנועד להמחשה, מבוסס על אומדנים המפורטים בעמוד המתודולוגיה.</span>
                        </li>
                    </ul>
                </div>

                <div className="text-slate-600 space-y-4 max-w-4xl text-lg leading-relaxed">
                    <p>
                        האתר מציג מודל נתונים שקוף שבוחן מה יקרה אם תקרת הפטור ממע&quot;מ על חבילות מחו&quot;ל תעלה ל‑150 דולר.
                    </p>
                    <p>
                        המטרה היא לא לקבוע מי &quot;צודק&quot;, אלא להראות בצורה כמותית את הוויתורים: כמה הציבור חוסך, כמה המדינה מפסידה בהכנסות ממסים, ומה עשוי להיות האימפקט על עסקים ישראליים.
                    </p>
                </div>
            </section>

            {/* Toggles */}
            <section className="space-y-6">
                <SectionHeading
                    title="תמונת מצב בשני תרחישים"
                    subtitle="בחרו תקרת פטור ותראו כיצד משתנים סך גביית המע&quot;מ, החיסכון לצרכנים והחשיפה של עסקים למקורות יבוא חיצוניים."
                />
                <ScenarioToggle
                    activeScenario={activeScenario}
                    onScenarioChange={setActiveScenario}
                />
            </section>

            {/* KPI Cards */}
            <section className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                    <KpiCard
                        title="מע״מ שנגבה ע״י המדינה"
                        value={formatMillions(currentScenario.totals.totalVatIls)}
                        valueColorClass="text-blue-600"
                        tooltipText="סך כל הכנסות המדינה מגביית מע״מ על חבילות יבוא אישי בכל רצועות המחיר (בהתבסס על מודל ההנחות)"
                    />

                    <KpiCard
                        title="חיסכון שנתי לצרכנים"
                        value={activeScenario === 150 ? formatMillions(compareData.totals.consumerSavingsIls) : "₪0M"}
                        valueColorClass={activeScenario === 150 ? "text-green-500" : "text-slate-300"}
                        tooltipText="הסכום שהצרכנים חוסכים בגין אי-תשלום מע״מ על פריטים שמחירם בין 75$ ל-150$"
                        isPositive={activeScenario === 150}
                    />

                    <KpiCard
                        title="אובדן הכנסה למשק"
                        value={formatMillions(currentScenario.totals.lostDomesticRevenueIls)}
                        valueColorClass="text-red-500"
                        tooltipText="הערכת הסכום שיצא מהמשק הישראלי לטובת אתרי סחר בחו״ל (מחושב לפי שיעור המרה של קניות שהיו מתבצעות בארץ באין פטור)"
                    />
                </div>

                {/* Dynamic Summary Strip */}
                <div className="bg-slate-800 text-slate-200 p-4 rounded-xl text-center text-sm md:text-base shadow-inner">
                    {activeScenario === 75 ? (
                        <p>בתרחיש הנוכחי (פטור עד 75$), המדינה גובה כ־<strong>{formatMillions(compareData.baseline.totals.totalVatIls)}</strong> במע"מ והצרכנים <strong>אינם חוסכים</strong> על חבילות בטווח $75-$150.</p>
                    ) : (
                        <p>בתרחיש המוצע (פטור עד 150$), גביית המע"מ פוחתת לכ־<strong>{formatMillions(compareData.proposed.totals.totalVatIls)}</strong>, והחיסכון לצרכנים מזנק ל־<strong>{formatMillions(compareData.totals.consumerSavingsIls)}</strong>.</p>
                    )}
                </div>
            </section>

            {/* Charts */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 pt-4">
                <ChartCard
                    title="התפלגות גביית המע״מ (לפי שווי חבילה)"
                    description="ראו כיצד העלאת הפטור מוחקת את הכנסות המס מטווח המחירים האמצעי (75-150$). החלל שנוצר מייצג את הוויתור על גביית מסים ישירה בתרחיש של העלאת הפטור."
                >
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={barChartData} margin={{ top: 20, right: 10, left: 10, bottom: 20 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                            <XAxis
                                dataKey="name"
                                tick={{ fill: '#64748b', fontSize: 12, fontWeight: 500 }}
                                axisLine={false}
                                tickLine={false}
                                dy={10}
                            />
                            <YAxis
                                tickFormatter={(val) => `${(val / 1000000).toFixed(0)}M`}
                                tick={{ fill: '#64748b', fontSize: 12 }}
                                axisLine={false}
                                tickLine={false}
                                dx={-10}
                            />
                            <Tooltip
                                formatter={(value: number) => [formatILS(value), 'מע"מ שנגבה']}
                                labelFormatter={(label) => `מדרגת שווי: ${label}`}
                                cursor={{ fill: '#f1f5f9' }}
                                contentStyle={{ textAlign: 'right', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)', padding: '12px' }}
                                itemStyle={{ textAlign: 'right', fontWeight: 600, marginTop: '4px' }}
                                labelStyle={{ color: '#64748b', fontWeight: 500, marginBottom: '8px', borderBottom: '1px solid #e2e8f0', paddingBottom: '4px' }}
                            />
                            <Legend
                                wrapperStyle={{ paddingTop: '20px' }}
                                iconType="circle"
                            />
                            <Bar name="פטור עד $75" dataKey="75" fill="#94a3b8" radius={[6, 6, 0, 0]} maxBarSize={60} />
                            <Bar name="פטור עד $150" dataKey="150" fill="#3b82f6" radius={[6, 6, 0, 0]} maxBarSize={60} />
                        </BarChart>
                    </ResponsiveContainer>
                    <p className="text-center text-xs text-slate-400 mt-2">
                        העלאת הפטור מבטלת גבייה מטווח הביניים מבלי להשפיע על חבילות יקרות יותר.
                    </p>
                </ChartCard>

                <ChartCard
                    title="חלוקת האימפקט: מדינה, עסקים וצרכנים"
                    description="עוגת הערכים מציגה למי הולך הכסף. בתרחיש הפטור הרחב נוסף פלח ירוק של חיסכון ישיר לצרכנים – שמקזז תיאורטית מההפסד לעסקים (באדום) ולמס המדינה (בכחול)."
                >
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={currentPieData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }) => {
                                    if (percent === 0) return null;
                                    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                                    const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
                                    const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);
                                    return (
                                        <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" className="text-sm font-bold drop-shadow-md">
                                            {`${(percent * 100).toFixed(0)}%`}
                                        </text>
                                    );
                                }}
                                outerRadius={120}
                                innerRadius={40}
                                dataKey="value"
                                stroke="none"
                            >
                                {currentPieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.fill} className="hover:opacity-80 transition-opacity outline-none" />
                                ))}
                            </Pie>
                            <Tooltip
                                formatter={(value: number, name: string, props: any) => [
                                    formatILS(value),
                                    `${name} (${(props.payload.percent * 100).toFixed(1)}%)`
                                ]}
                                contentStyle={{ textAlign: 'right', direction: 'rtl', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontWeight: 500 }}
                                itemStyle={{ color: '#0f172a', fontWeight: 700 }}
                            />
                            <Legend
                                layout="horizontal"
                                verticalAlign="bottom"
                                align="center"
                                wrapperStyle={{ paddingTop: '30px' }}
                                iconType="circle"
                            />
                        </PieChart>
                    </ResponsiveContainer>
                    <p className="text-center text-xs text-slate-400 mt-2">
                        התרחיש המרחיב מסיט ערך מהמדינה לחיסכון צרכני ישיר.
                    </p>
                </ChartCard>
            </section>

            {/* Context / Wrap-up */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <section className="bg-slate-50 border border-slate-200 p-8 rounded-2xl relative overflow-hidden">
                    <div className="absolute -right-6 -top-6 text-slate-100 opacity-50 z-0">
                        <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z" /></svg>
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-2xl font-heading font-bold mb-4 text-slate-800">
                            מה אפשר ללמוד מכאן?
                        </h3>
                        <p className="text-slate-600 mb-3 leading-relaxed">
                            הממצאים ממחישים את הדילמה המרכזית: מצד אחד, הגדלת תקרת הפטור מורידה מחירים ישירות לצרכן החשוף ליוקר מחיה קיצוני; מצד שני, היא שוחקת באופן דרמטי את בסיס המס מפריטים קטנים ומטה את תנאי התחרות נגד מסחר מקומי.
                        </p>
                        <p className="text-slate-600 leading-relaxed font-medium">
                            אין כאן פתרון &quot;נכון&quot; אחד אלא שאלה של תעדוף כלכלי במשק.
                        </p>
                    </div>
                </section>

                <section className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 p-8 rounded-2xl flex flex-col justify-center items-center text-center">
                    <h3 className="text-2xl font-heading font-bold mb-3 text-blue-900">
                        מעוניינים לצלול לפרטים?
                    </h3>
                    <p className="text-blue-800 mb-6 leading-relaxed max-w-sm">
                        ראו פירוט מלא של המתודולוגיה, מקורות המידע וההנחות המדויקות שמניעות את המודל הזה.
                    </p>
                    <a
                        href="/methodology"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 text-base font-bold transition-all"
                    >
                        <span>דוח מתודולוגיה ומקורות</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </a>
                </section>
            </div>
        </div>
    );
}
