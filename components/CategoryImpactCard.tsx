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
            chartClassName="h-72 sm:h-80"
            caption={
                <p className="text-center text-xs text-slate-500">
                    החלוקה לפי סוג מוצר היא הנחת עבודה בלבד, שנועדה להמחיש אילו קטגוריות צפויות להיות מושפעות יותר.
                </p>
            }
        >
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={categories}
                        dataKey="share"
                        nameKey="label"
                        cx="50%"
                        cy="50%"
                        outerRadius="76%"
                        innerRadius="46%"
                        stroke="none"
                        label={({ percent, name }) => `${name} ${(percent * 100).toFixed(0)}%`}
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
        </ChartCard>
    );
}
