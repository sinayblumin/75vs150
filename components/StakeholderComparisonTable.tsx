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
    return `₪${(value / 1_000_000).toFixed(1)}M`;
}

type DeltaMeta = {
    delta: number;
    isPositive: boolean;
    isNegative: boolean;
};

function buildDelta(value75: number, value150: number): DeltaMeta {
    const delta = value150 - value75;
    return {
        delta,
        isPositive: delta > 0,
        isNegative: delta < 0,
    };
}

function DeltaCell({ delta, isPositive, isNegative }: DeltaMeta) {
    const badgeClass = isPositive
        ? "bg-green-50 text-green-700 border-green-200"
        : isNegative
            ? "bg-red-50 text-red-700 border-red-200"
            : "bg-slate-50 text-slate-600 border-slate-200";

    const sign = isPositive ? "+" : isNegative ? "-" : "";
    const absValue = Math.abs(delta);

    return (
        <span className={`inline-flex rounded-md border px-1.5 py-1 text-[11px] font-semibold sm:rounded-lg sm:px-2 sm:text-xs ${badgeClass}`}>
            {sign}
            {formatMillions(absValue)}
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
        },
        {
            stakeholder: "מדינה",
            s75: state75Ils,
            s150: state150Ils,
        },
        {
            stakeholder: "עסקים מקומיים",
            s75: business75Ils,
            s150: business150Ils,
        },
    ].map((row) => ({
        ...row,
        ...buildDelta(row.s75, row.s150),
    }));

    return (
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h3 className="mb-4 text-lg font-heading font-semibold text-slate-900 md:text-xl">השוואת ההשפעה לפי בעלי עניין</h3>
            <div className="overflow-hidden rounded-xl border border-slate-200">
                <table className="w-full table-fixed text-right text-xs sm:text-sm">
                    <thead className="bg-slate-50 text-slate-700">
                        <tr>
                            <th className="px-2 py-3 font-semibold sm:px-4">בעל עניין</th>
                            <th className="px-2 py-3 font-semibold sm:px-4">תרחיש 75$</th>
                            <th className="px-2 py-3 font-semibold sm:px-4">תרחיש 150$</th>
                            <th className="px-2 py-3 font-semibold sm:px-4">שינוי נטו</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                        {rows.map((row) => (
                            <tr key={row.stakeholder} className="hover:bg-slate-50/80">
                                <td className="px-2 py-3 font-medium text-slate-900 sm:px-4">{row.stakeholder}</td>
                                <td className="px-2 py-3 text-slate-700 font-mono break-words sm:px-4">{formatMillions(row.s75)}</td>
                                <td className="px-2 py-3 text-slate-700 font-mono break-words sm:px-4">{formatMillions(row.s150)}</td>
                                <td className="px-2 py-3 sm:px-4">
                                    <DeltaCell delta={row.delta} isPositive={row.isPositive} isNegative={row.isNegative} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <p className="mt-3 text-xs text-slate-500 leading-relaxed">
                הטבלה מסכמת את המדדים בכל אחד מהתרחישים: לצרכנים מוצג חיסכון ממע״מ ביחס למצב ללא פטור,
                למדינה מוצגת גביית מע״מ בפועל, ולעסקים מקומיים מוצג אומדן מחזור שנגרע לשוק החו״ל.
            </p>
        </section>
    );
}
