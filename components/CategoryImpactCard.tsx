"use client";

import categories from "@/data/categories.json";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { ChartCard } from "./ChartCard";

const COLORS = ["#2563eb", "#10b981", "#f97316", "#64748b"];

export function CategoryImpactCard() {
    return (
        <ChartCard
            title="אילו סוגי מוצרים מושפעים יותר?"
            description="חלוקה סינתטית של הטווח 75$-150$ לפי קטגוריות מוצר."
            chartClassName="h-80 sm:h-96"
            caption={
                <p className="text-center text-xs text-slate-500">
                    החלוקה לפי סוג מוצר היא הנחת עבודה בלבד, שנועדה להמחיש אילו קטגוריות צפויות להיות מושפעות יותר.
                </p>
            }
        >
            <ResponsiveContainer width="100%" height="100%">
                <PieChart margin={{ top: 16, right: 56, left: 56, bottom: 16 }}>
                    <Pie
                        data={categories}
                        dataKey="share"
                        nameKey="label"
                        cx="50%"
                        cy="50%"
                        outerRadius="68%"
                        innerRadius="44%"
                        stroke="none"
                        label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                        labelLine={false}
                    >
                        {categories.map((entry, index) => (
                            <Cell key={entry.id} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip
                        formatter={(value: number, name: string) => [`${(value * 100).toFixed(0)}%`, name]}
                        contentStyle={{ textAlign: "right", direction: "rtl", borderRadius: "12px", border: "1px solid #e2e8f0" }}
                    />
                </PieChart>
            </ResponsiveContainer>
            <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-slate-600">
                {categories.map((entry, index) => (
                    <div key={entry.id} className="flex items-center gap-2">
                        <span
                            className="inline-block h-2.5 w-2.5 rounded-full"
                            style={{ backgroundColor: COLORS[index % COLORS.length] }}
                        />
                        <span>{entry.label}</span>
                        <span className="text-slate-500">({Math.round(entry.share * 100)}%)</span>
                    </div>
                ))}
            </div>
        </ChartCard>
    );
}
