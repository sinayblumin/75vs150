"use client";

import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ChartCard } from "./ChartCard";

type StakeholderImpactProps = {
    consumerSavingsIls: number;
    vatLossIls: number;
    shiftedRevenueIls: number;
};

export function StakeholderImpact({
    consumerSavingsIls,
    vatLossIls,
    shiftedRevenueIls,
}: StakeholderImpactProps) {
    const data = [
        { name: "צרכנים", value: consumerSavingsIls, fill: "#22c55e" },
        { name: "מדינה", value: -vatLossIls, fill: "#3b82f6" },
        { name: "עסקים מקומיים", value: -shiftedRevenueIls, fill: "#f97316" },
    ];

    return (
        <ChartCard
            title="מי מרוויח ומי מפסיד?"
            description="התרשים מסכם את האפקט נטו של העלאת תקרת הפטור ל-150$ על שלושת בעלי העניין המרכזיים."
            caption={
                <p className="text-center text-xs text-slate-500">
                    כמה הצרכנים מרוויחים, וכמה המדינה והעסקים המקומיים מפסידים.
                </p>
            }
        >
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 12, right: 8, left: 8, bottom: 18 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                    <XAxis dataKey="name" tick={{ fill: "#64748b", fontSize: 12 }} axisLine={false} tickLine={false} />
                    <YAxis
                        tickFormatter={(v) => `${(v / 1000000).toFixed(0)}M`}
                        tick={{ fill: "#64748b", fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                    />
                    <Tooltip
                        formatter={(value: number) => [`₪${Math.abs(value).toLocaleString(undefined, { maximumFractionDigits: 0 })}`, value >= 0 ? "רווח" : "הפסד"]}
                        contentStyle={{ textAlign: "right", direction: "rtl", borderRadius: "12px", border: "1px solid #e2e8f0" }}
                    />
                    <Bar dataKey="value" radius={[6, 6, 0, 0]} maxBarSize={70}>
                        {data.map((entry) => (
                            <Cell key={entry.name} fill={entry.fill} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </ChartCard>
    );
}
