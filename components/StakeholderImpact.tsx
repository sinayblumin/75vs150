"use client";

import { Bar, BarChart, CartesianGrid, Cell, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ChartCard } from "./ChartCard";

type StakeholderImpactProps = {
    consumerDeltaIls: number;
    stateDeltaIls: number;
    localBusinessDeltaIls: number;
};

export function StakeholderImpact({
    consumerDeltaIls,
    stateDeltaIls,
    localBusinessDeltaIls,
}: StakeholderImpactProps) {
    const data = [
        { name: "צרכנים", value: consumerDeltaIls, fill: "#22c55e" },
        { name: "מדינה", value: stateDeltaIls, fill: "#3b82f6" },
        { name: "עסקים מקומיים", value: localBusinessDeltaIls, fill: "#f97316" },
    ];

    return (
        <ChartCard
            title="מי מרוויח ומי מפסיד?"
            description='שינוי נטו כאשר עוברים מתרחיש פטור עד 75$ לתרחיש פטור עד 150$.'
            caption={
                <p className="text-center text-xs text-slate-500">
                    התרשים מציג את השינוי נטו עבור כל אחד משלושת בעלי העניין כאשר תקרת הפטור ממע״מ עולה מ-75 ל-150 דולר:
                    כמה הצרכנים מרוויחים וכמה המדינה והעסקים המקומיים מפסידים.
                </p>
            }
        >
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 16, right: 8, left: 16, bottom: 18 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                    <ReferenceLine y={0} stroke="#94a3b8" strokeWidth={1.5} />
                    <XAxis dataKey="name" tick={{ fill: "#64748b", fontSize: 12 }} axisLine={false} tickLine={false} />
                    <YAxis
                        tickFormatter={(v) => `${(v / 1_000_000).toFixed(0)}M`}
                        tick={{ fill: "#64748b", fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                        label={{
                            value: "שינוי נטו (₪ בשנה)",
                            angle: -90,
                            position: "insideLeft",
                            fill: "#64748b",
                            dx: -8,
                        }}
                    />
                    <Tooltip
                        formatter={(value: number) => [`₪${value.toLocaleString(undefined, { maximumFractionDigits: 0 })}`, value >= 0 ? "רווח נטו" : "הפסד נטו"]}
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
