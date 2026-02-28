"use client";

import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

type ScenarioResult = {
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

type CompareResult = {
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
        { name: 'מע"מ שנגבה ע"י המדינה', value: compareData.baseline.totals.totalVatIls, fill: '#3b82f6' },
        { name: 'עסקאות שעברו לחו"ל (נזק משוער)', value: compareData.baseline.totals.lostDomesticRevenueIls, fill: '#ef4444' },
    ];

    const pieData150 = [
        { name: 'מע"מ שנגבה ע"י המדינה', value: compareData.proposed.totals.totalVatIls, fill: '#3b82f6' },
        { name: 'עסקאות שעברו לחו"ל (נזק משוער)', value: compareData.proposed.totals.lostDomesticRevenueIls, fill: '#ef4444' },
        { name: 'חיסכון לצרכנים (פטור מורחב)', value: compareData.totals.consumerSavingsIls, fill: '#10b981' },
    ];

    const currentPieData = activeScenario === 75 ? pieData75 : pieData150;

    return (
        <div className="space-y-8">
            {/* Intro */}
            <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-3xl font-bold mb-4">האם העלאת פטור המע״מ על יבוא אישי מ-75 ל-150 דולר טובה לציבור הישראלי?</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    מערכת זו מציגה מודל תרחישים המבוסס על נתונים פתוחים והנחות עבודה גלויות.
                    היא נועדה להמחיש את ההשפעות של שינוי רף הפטור על (1) צרכנים, (2) הכנסות המדינה ולבסוף (3) עסקים מקומיים.
                    <br /><strong>זהו כלי המחשה בלבד ואינו מהווה מדד ממשלתי רשמי.</strong>
                </p>

                {/* OECD Context Block */}
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex items-start gap-4">
                    <div className="text-blue-500 font-bold text-2xl">🌍</div>
                    <div>
                        <h3 className="font-semibold text-blue-900 mb-1">הקשר יוקר המחיה בישראל (דוח OECD)</h3>
                        <p className="text-blue-800 text-sm">
                            ישראל נמצאת בין חמש המדינות היקרות ב-OECD לפי רמת מחירים יחסית, במיוחד במזון ודיור. יבוא פטור ממס מהווה בשל כך אפיק חיסכון משמעותי לצרכנים.
                        </p>
                    </div>
                </div>
            </section>

            {/* Toggles */}
            <section className="flex justify-center my-6">
                <div className="inline-flex bg-gray-200 rounded-lg p-1">
                    <button
                        onClick={() => setActiveScenario(75)}
                        className={`px-6 py-3 rounded-md font-medium transition-all ${activeScenario === 75 ? 'bg-white shadow-sm text-blue-700' : 'text-gray-600 hover:text-gray-900'}`}
                    >
                        פטור עד 75$ (המצב הנוכחי)
                    </button>
                    <button
                        onClick={() => setActiveScenario(150)}
                        className={`px-6 py-3 rounded-md font-medium transition-all ${activeScenario === 150 ? 'bg-white shadow-sm text-blue-700' : 'text-gray-600 hover:text-gray-900'}`}
                    >
                        פטור עד 150$ (התרחיש המוצע)
                    </button>
                </div>
            </section>

            {/* KPI Cards */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                    <div className="text-gray-500 text-sm mb-2">סך גביית מע״מ משוערת (בשנה)</div>
                    <div className="text-4xl font-black text-blue-600">
                        {formatMillions(currentScenario.totals.totalVatIls)}
                    </div>
                    <div className="text-sm mt-3 text-gray-400">הכנסות לקופת המדינה</div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center relative overflow-hidden">
                    <div className="text-gray-500 text-sm mb-2">חיסכון שנתי מצרפי לצרכנים</div>
                    <div className={`text-4xl font-black ${activeScenario === 150 ? 'text-green-500' : 'text-gray-300'}`}>
                        {activeScenario === 150 ? formatMillions(compareData.totals.consumerSavingsIls) : "₪0"}
                    </div>
                    <div className="text-sm mt-3 text-gray-400">לעומת המצב הקיים</div>
                    {activeScenario === 150 && (
                        <div className="absolute top-0 right-0 w-16 h-16 bg-green-100 rounded-bl-full -z-10"></div>
                    )}
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                    <div className="text-gray-500 text-sm mb-2">אובדן פדיון מקומי (עסקים בישראל)</div>
                    <div className="text-4xl font-black text-red-500">
                        {formatMillions(currentScenario.totals.lostDomesticRevenueIls)}
                    </div>
                    <div className="text-sm mt-3 text-gray-400">חלק מהקניות עובר לחו״ל</div>
                </div>
            </section>

            {/* Charts */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold mb-6 text-center">גביית מע״מ לפי מדרגות שווי החבילה (במיליוני ₪)</h3>
                    <div className="h-80 w-full" dir="ltr">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={barChartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                                <XAxis dataKey="name" tick={{ fill: '#4B5563' }} />
                                <YAxis
                                    tickFormatter={(val) => `${(val / 1000000).toFixed(0)}M`}
                                    tick={{ fill: '#4B5563' }}
                                />
                                <Tooltip
                                    formatter={(value: number) => [formatILS(value), 'מע"מ שניגבה']}
                                    labelFormatter={(label) => `מדרגת שווי: ${label}`}
                                    contentStyle={{ textAlign: 'right', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                    itemStyle={{ textAlign: 'right' }}
                                />
                                <Legend wrapperStyle={{ paddingTop: '20px' }} />
                                <Bar name="פטור 75$" dataKey="75" fill="#93c5fd" radius={[4, 4, 0, 0]} />
                                <Bar name="פטור 150$" dataKey="150" fill="#2563eb" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold mb-6 text-center">חלוקת ההשפעות הכוללת: מרוויחים מול מפסידים</h3>
                    <div className="h-80 w-full" dir="ltr">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={currentPieData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={({ name, percent }) => percent > 0 ? `${(percent * 100).toFixed(0)}%` : ""}
                                    outerRadius={100}
                                    dataKey="value"
                                >
                                    {currentPieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.fill} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    formatter={(value: number) => formatILS(value)}
                                    contentStyle={{ textAlign: 'right', direction: 'rtl', borderRadius: '8px' }}
                                />
                                <Legend layout="horizontal" verticalAlign="bottom" align="center" wrapperStyle={{ paddingTop: '20px' }} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </section>

            {/* methodology link */}
            <section className="text-center mt-12 mb-6">
                <a
                    href="/methodology"
                    className="inline-flex items-center gap-2 bg-slate-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-700 transition shadow-md"
                >
                    איך חישבנו? לצפייה במתודולוגיה ובמקורות הנתונים
                    <span className="text-xl">←</span>
                </a>
            </section>
        </div>
    );
}
