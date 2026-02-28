export function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
    return (
        <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-800 tracking-tight">
                {title}
            </h2>
            {subtitle && (
                <p className="text-slate-500 mt-2 text-sm md:text-base leading-relaxed">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
