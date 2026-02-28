import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function ChartCard({
    title,
    description,
    children,
    className
}: {
    title: string;
    description: string;
    children: ReactNode;
    className?: string;
}) {
    return (
        <div className={cn("bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col h-full", className)}>
            <div className="mb-6">
                <h3 className="text-xl font-heading font-semibold text-slate-800 mb-2">
                    {title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                    {description}
                </p>
            </div>
            <div className="flex-1 min-h-[300px] w-full mt-auto" dir="ltr">
                {children}
            </div>
        </div>
    );
}
