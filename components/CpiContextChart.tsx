"use client";

import cpiData from "@/data/cpi_israel.json";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ChartCard } from "./ChartCard";

export function CpiContextChart() {
    return (
        <ChartCard
            title="מגמת יוקר המחיה בישראל (מדד המחירים לצרכן)"
            description="סדרת CPI כללית לשנים האחרונות, על בסיס נתוני הלמ״ס (CBS)."
            chartClassName="h-72 sm:h-80"
            caption={
                <div className="space-y-2 text-center text-xs text-slate-500 leading-relaxed">
                    <p>
                        הגרף מציג את מגמת מדד המחירים לצרכן (CPI) בישראל בשנים האחרונות, על פי נתוני הלמ״ס.
                    </p>
                    <p>
                        המדד משקף את מגמת יוקר המחיה הכללית במשק, ולכן הוא מוצג כאן כהקשר מאקרו משלים לצד מודל היבוא האישי.
                    </p>
                    <p>
                        המודל עצמו לא מחשב השפעה ישירה על CPI, והגרף משמש להקשר בלבד.
                    </p>
                </div>
            }
        >
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={cpiData} margin={{ top: 16, right: 16, left: 16, bottom: 8 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                    <XAxis
                        dataKey="year"
                        tick={{ fill: "#64748b", fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                    />
                    <YAxis
                        tick={{ fill: "#64748b", fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                        domain={["dataMin - 1", "dataMax + 1"]}
                        label={{
                            value: "מדד (2019=100)",
                            angle: -90,
                            position: "insideLeft",
                            fill: "#64748b",
                            dx: -8,
                        }}
                    />
                    <Tooltip
                        formatter={(value: number) => [value.toFixed(1), "CPI"]}
                        labelFormatter={(label) => `שנה: ${label}`}
                        contentStyle={{
                            textAlign: "right",
                            direction: "rtl",
                            borderRadius: "12px",
                            border: "1px solid #e2e8f0",
                        }}
                    />
                    <Line
                        type="monotone"
                        dataKey="index"
                        stroke="#0f766e"
                        strokeWidth={3}
                        dot={{ r: 4, fill: "#0f766e" }}
                        activeDot={{ r: 6 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </ChartCard>
    );
}
