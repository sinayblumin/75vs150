import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function ChartCard({
    title,
    description,
    children,
    caption,
    chartClassName,
    className
}: {
    title: string;
    description: string;
    children: ReactNode;
    caption?: ReactNode;
    chartClassName?: string;
    className?: string;
}) {
    return (
        <div className={cn("flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 [&_.recharts-responsive-container]:!h-60 sm:[&_.recharts-responsive-container]:!h-72 lg:[&_.recharts-responsive-container]:!h-80", className)}>
            <div className="mb-4 sm:mb-5">
                <h3 className="mb-2 text-lg font-heading font-semibold text-slate-800 sm:text-xl">
                    {title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
                    {description}
                </p>
            </div>
            <div className={cn("mt-auto w-full", chartClassName)} dir="ltr">
                {children}
            </div>
            {caption ? <div className="mt-3">{caption}</div> : null}
        </div>
    );
}
