"use client";

type StakeholderComparisonTableProps = {
    consumer75Ils: number;
    consumer150Ils: number;
    state75Ils: number;
    state150Ils: number;
    business75Ils: number;
    business150Ils: number;
};

function formatMillions(value: number) {
    return `${(value / 1_000_000).toFixed(1)}M ₪`;
}

function DeltaCell({ value }: { value: number }) {
    const isPositive = value >= 0;
    const badgeClass = isPositive
        ? "bg-green-50 text-green-700 border-green-200"
        : "bg-red-50 text-red-700 border-red-200";

    return (
        <span className={`inline-flex rounded-lg border px-2 py-1 text-xs font-semibold ${badgeClass}`}>
            {isPositive ? "+" : ""}
            {formatMillions(value)}
        </span>
    );
}

export function StakeholderComparisonTable({
    consumer75Ils,
    consumer150Ils,
    state75Ils,
    state150Ils,
    business75Ils,
    business150Ils,
}: StakeholderComparisonTableProps) {
    const rows = [
        {
            stakeholder: "צרכנים",
            s75: consumer75Ils,
            s150: consumer150Ils,
            delta: consumer150Ils - consumer75Ils,
        },
        {
            stakeholder: "מדינה",
            s75: state75Ils,
            s150: state150Ils,
            delta: state150Ils - state75Ils,
        },
        {
            stakeholder: "עסקים מקומיים",
            s75: business75Ils,
            s150: business150Ils,
            delta: business150Ils - business75Ils,
        },
    ];

    return (
        <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-lg md:text-xl font-heading font-semibold text-slate-900 mb-4">השוואת ההשפעה לפי בעלי עניין</h3>
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
                <table className="min-w-full text-sm text-right">
                    <thead className="bg-slate-50 text-slate-700">
                        <tr>
                            <th className="px-4 py-3 font-semibold">בעל עניין</th>
                            <th className="px-4 py-3 font-semibold">תרחיש 75$</th>
                            <th className="px-4 py-3 font-semibold">תרחיש 150$</th>
                            <th className="px-4 py-3 font-semibold">שינוי נטו</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                        {rows.map((row) => (
                            <tr key={row.stakeholder} className="hover:bg-slate-50/80">
                                <td className="px-4 py-3 font-medium text-slate-900">{row.stakeholder}</td>
                                <td className="px-4 py-3 text-slate-700 font-mono">{formatMillions(row.s75)}</td>
                                <td className="px-4 py-3 text-slate-700 font-mono">{formatMillions(row.s150)}</td>
                                <td className="px-4 py-3">
                                    <DeltaCell value={row.delta} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <p className="mt-3 text-xs text-slate-500 leading-relaxed">
                הטבלה מסכמת את השינוי בין שני התרחישים עבור כל אחד משלושת בעלי העניין: כמה הצרכנים מרוויחים,
                וכמה המדינה והעסקים המקומיים מפסידים ביחס לתרחיש פטור עד 75$.
            </p>
        </section>
    );
}
