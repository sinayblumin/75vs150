"use client";

import { ChartCard } from "./ChartCard";

type TotalVatChangeCardProps = {
    baselineVatIls: number;
    proposedVatIls: number;
};

export function TotalVatChangeCard({ baselineVatIls, proposedVatIls }: TotalVatChangeCardProps) {
    const lostVatIls = baselineVatIls - proposedVatIls;
    const proposedRatio = baselineVatIls > 0 ? (proposedVatIls / baselineVatIls) * 100 : 0;

    const formatMillionsIls = (value: number) => `${(value / 1_000_000).toFixed(1)}M ₪`;

    return (
        <ChartCard
            title='שינוי בסך גביית המע"מ מיבוא אישי'
            description="השוואה ישירה בין סך גביית המע״מ בשני התרחישים."
            chartClassName="h-auto"
            caption={
                <p className="text-center text-xs text-slate-500">
                    התרשים מציג את הירידה הכוללת בגביית המע״מ כאשר תקרת הפטור ממע״מ עולה מ-75 ל-150 דולר. אין כאן פירוק לפי רצועות מחיר, אלא סך ההכנסות בלבד.
                </p>
            }
        >
            <div className="space-y-5" dir="rtl">
                <div>
                    <div className="flex justify-between text-sm font-medium text-slate-700 mb-2">
                        <span>פטור עד 75$</span>
                        <span>{formatMillionsIls(baselineVatIls)}</span>
                    </div>
                    <div className="h-4 rounded-full bg-slate-100 overflow-hidden">
                        <div className="h-full w-full bg-blue-500" />
                    </div>
                </div>

                <div>
                    <div className="flex justify-between text-sm font-medium text-slate-700 mb-2">
                        <span>פטור עד 150$</span>
                        <span>{formatMillionsIls(proposedVatIls)}</span>
                    </div>
                    <div className="h-4 rounded-full bg-slate-100 overflow-hidden">
                        <div className="h-full bg-blue-300" style={{ width: `${proposedRatio}%` }} />
                    </div>
                </div>

                <div className="bg-red-50 border border-red-100 rounded-xl p-3 text-sm text-red-700 font-semibold text-center">
                    אובדן גביית מע"מ: {formatMillionsIls(lostVatIls)}
                </div>

                <div className="text-xs text-slate-600 space-y-1">
                    <p>סך גביית מע"מ בפטור עד 75$: {formatMillionsIls(baselineVatIls)}</p>
                    <p>סך גביית מע"מ בפטור עד 150$: {formatMillionsIls(proposedVatIls)}</p>
                    <p>אובדן גביית מע"מ: {formatMillionsIls(lostVatIls)}</p>
                </div>
            </div>
        </ChartCard>
    );
}
