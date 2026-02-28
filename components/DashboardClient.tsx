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
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    האם העלאת פטור המע&quot;מ על יבוא אישי מ‑75 ל‑150 דולר טובה לציבור הישראלי?
                </h1>
                <p className="text-lg text-gray-700 mb-2">
                    האתר הזה מציג מודל נתונים פשוט ושקוף שבוחן מה יקרה אם תקרת הפטור ממע&quot;מ על חבילות מחו&quot;ל תעלה מ‑75 ל‑150 דולר.
                </p>
                <p className="text-lg text-gray-700 mb-2">
                    המטרה היא לא לקבוע מי &quot;צודק&quot;, אלא להראות בצורה כמותית את הוויתורים: כמה הציבור חוסך, כמה המדינה מפסידה בהכנסות ממסים, ומה עשוי להיות האימפקט על עסקים ישראליים.
                </p>
                <p className="text-sm text-gray-500">
                    המודל מבוסס על נתונים פתוחים של ממשלת ישראל ועל הנחות פשוטות שמתוארות במפורש בעמוד המתודולוגיה. זה אינו כלי רשמי של אף גורם ממשלתי.
                </p>
            </section>

            {/* Toggles */}
            <section className="my-6 space-y-4">
                <h2 className="text-2xl font-semibold mb-2">
                    תמונת מצב בשני תרחישים
                </h2>
                <p className="text-gray-700 mb-4">
                    בחרו תקרת פטור ותראו כיצד משתנים סך גביית המע&quot;מ, החיסכון לצרכנים והחשיפה של עסקים מקומיים לתחרות מיבוא אישי.
                </p>
                <div className="bg-gray-50 p-4 border border-gray-200 rounded-lg">
                    <p className="text-gray-700 mb-2 font-medium">
                        בחרו את תקרת הפטור ממע&quot;מ על יבוא אישי:
                    </p>
                    <ul className="text-sm text-gray-600 mb-4 list-disc pr-4">
                        <li>פטור עד 75&nbsp;$ – המצב הנוכחי</li>
                        <li>פטור עד 150&nbsp;$ – תרחיש מוצע שמקל על הצרכנים אך מקטין הכנסות ממסים ועלול להגדיל את התחרות מול עסקים מקומיים</li>
                    </ul>
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
                </div>
            </section>

            {/* KPI Cards */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center flex flex-col items-center justify-center">
                    <div className="text-gray-700 font-medium mb-3">סך המע״מ השנתי מגביית מס על חבילות יבוא אישי (מיליוני ₪)</div>
                    <div className="text-4xl font-black text-blue-600">
                        {formatMillions(currentScenario.totals.totalVatIls)}
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center relative overflow-hidden flex flex-col items-center justify-center">
                    <div className="text-gray-700 font-medium mb-3">חיסכון שנתי מוערך לצרכנים (מיליוני ₪)</div>
                    <div className={`text-4xl font-black ${activeScenario === 150 ? 'text-green-500' : 'text-gray-300'}`}>
                        {activeScenario === 150 ? formatMillions(compareData.totals.consumerSavingsIls) : "₪0"}
                    </div>
                    {activeScenario === 150 && (
                        <div className="absolute top-0 right-0 w-16 h-16 bg-green-100 rounded-bl-full -z-10"></div>
                    )}
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center flex flex-col items-center justify-center">
                    <div className="text-gray-700 font-medium mb-3">מחזור שנתי מוערך שנע מישראל לקניות בחו״ל (מיליוני ₪)</div>
                    <div className="text-4xl font-black text-red-500">
                        {formatMillions(currentScenario.totals.lostDomesticRevenueIls)}
                    </div>
                </div>
            </section>

            {/* Charts */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col">
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold mb-2">
                            איך המע&quot;מ מתחלק בין סוגי חבילות?
                        </h3>
                        <p className="text-gray-700 text-sm">
                            הגרף מציג כמה מע&quot;מ נגבה בכל תרחיש משלוש קבוצות חבילות: מתחת ל‑75&nbsp;$, בין 75 ל‑150&nbsp;$ ומעל 150&nbsp;$. בתרחיש של פטור עד 150&nbsp;$, הגבייה מהחבילות שבטווח 75–150&nbsp;$ נעלמת, והפער הופך לחיסכון לצרכנים מצד אחד ולאובדן הכנסה למדינה מצד שני.
                        </p>
                    </div>
                    <div className="h-80 w-full mt-auto" dir="ltr">
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

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col">
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold mb-2">
                            מי מרוויח ומי מפסיד?
                        </h3>
                        <p className="text-gray-700 text-sm">
                            כאן אפשר לראות את פיצול האפקט: כמה כסף נשאר בכיס של הצרכנים, כמה הכנסה ממסים המדינה מאבדת, וכמה מההוצאה הקמעונאית עוברת מעסקים מקומיים לקניות באתרים מחו&quot;ל (בהתבסס על הנחת שיעור תחליף פשוט).
                        </p>
                    </div>
                    <div className="h-80 w-full mt-auto" dir="ltr">
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

            {/* Cost of Living */}
            <section className="bg-blue-50 border border-blue-100 p-6 rounded-xl mt-8">
                <h3 className="text-xl font-semibold mb-2 text-blue-900">
                    למה בכלל מדברים על זה?
                </h3>
                <p className="text-blue-800 mb-2">
                    ישראל מדורגת בין המדינות היקרות ביותר ב‑OECD מבחינת רמת מחירים יחסית, מה שמפחית את רמת הרווחה ומגביר מתחים חברתיים.
                </p>
                <p className="text-blue-800 mb-2">
                    יבוא אישי מקוון מאפשר לצרכנים לעקוף חלק מהתיווך המקומי ולהכניס תחרות לשווקים ריכוזיים, במיוחד בתחומים כמו אופנה, אלקטרוניקה קטנה ומוצרי צריכה יומיומיים.
                </p>
                <p className="text-blue-800">
                    מצד שני, ככל שנפח הקניות אונליין מחו&quot;ל גדל, עסקים בישראל נאלצים להתמודד עם שחיקת מחזורים ושולי רווח נמוכים יותר. המודל כאן מציג את שני הצדדים על אותו ציר.
                </p>
            </section>

            {/* methodology link */}
            <section className="text-center mt-12 mb-6 bg-white border border-gray-200 p-8 rounded-xl shadow-sm">
                <p className="text-gray-700 font-medium mb-4">
                    רוצים להבין בדיוק איך חישבנו את המספרים ומה הנחנו בדרך?
                </p>
                <a
                    href="/methodology"
                    className="inline-flex items-center px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 text-sm font-medium transition-colors"
                >
                    מעבר למתודולוגיה ומקורות הנתונים
                </a>
            </section>
        </div>
    );
}
