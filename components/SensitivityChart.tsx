"use client";

import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ChartCard } from "./ChartCard";
import { compareScenarios } from "@/lib/scenarioModel";

const substitutionRates = [0.5, 0.6, 0.7, 0.8];

export function SensitivityChart() {
    const data = substitutionRates.map((rate) => {
        const result = compareScenarios(75, 150, { substitution_rate: rate });
        return {
            rateLabel: `${Math.round(rate * 100)}%`,
            shiftedRevenueIls: result.proposed.totals.lostDomesticRevenueIls,
        };
    });

    return (
        <ChartCard
            title="רגישות להנחות המודל"
            description="איך שינוי בהנחת התחליפיות משפיע על היקף המחזור שעובר מקנייה מקומית לקנייה מחו״ל."
            chartClassName="h-72 sm:h-80"
            caption={
                <p className="text-center text-xs text-slate-500">
                    הגרף מציג איך היקף המחזור שעובר מעסקים בישראל לקניות מחו״ל משתנה כאשר מניחים שיעורי תחליף שונים לקנייה מקומית.
                </p>
            }
        >
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 16, right: 16, left: 16, bottom: 8 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                    <XAxis dataKey="rateLabel" tick={{ fill: "#64748b", fontSize: 12 }} axisLine={false} tickLine={false} />
                    <YAxis
                        tickFormatter={(v) => `${(v / 1000000).toFixed(0)}M`}
                        tick={{ fill: "#64748b", fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                    />
                    <Tooltip
                        formatter={(value: number) => [`₪${value.toLocaleString(undefined, { maximumFractionDigits: 0 })}`, "מחזור שעבר לחו״ל"]}
                        labelFormatter={(label) => `שיעור תחליפיות: ${label}`}
                        contentStyle={{ textAlign: "right", direction: "rtl", borderRadius: "12px", border: "1px solid #e2e8f0" }}
                    />
                    <Line type="monotone" dataKey="shiftedRevenueIls" stroke="#f97316" strokeWidth={3} dot={{ r: 4, fill: "#f97316" }} />
                </LineChart>
            </ResponsiveContainer>
        </ChartCard>
    );
}
