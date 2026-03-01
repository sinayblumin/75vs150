import { HelpCircle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function KpiCard({
    title,
    value,
    valueColorClass,
    tooltipText,
    isPositive,
}: {
    title: string;
    value: string;
    valueColorClass: string;
    tooltipText: string;
    isPositive?: boolean;
}) {
    return (
        <div className="relative flex min-h-[154px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white px-4 py-5 text-center shadow-sm transition-all hover:shadow-md sm:min-h-[172px] sm:px-6 sm:py-6">
            <div className="mb-3 flex items-center justify-center gap-2">
                <h3 className="text-sm font-medium text-slate-600 sm:text-base">{title}</h3>
                <TooltipProvider delayDuration={300}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <button className="text-slate-400 transition-colors hover:text-slate-600 focus:outline-none">
                                <HelpCircle className="w-4 h-4" />
                                <span className="sr-only">מידע נוסף</span>
                            </button>
                        </TooltipTrigger>
                        <TooltipContent align="center" side="top" className="max-w-[200px] text-center bg-slate-800 text-white rounded-lg p-2 text-xs border-none shadow-lg">
                            <p>{tooltipText}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>

            <div dir="ltr" className={`inline-block text-3xl font-semibold tracking-tight sm:text-4xl ${valueColorClass} transition-colors duration-300`}>
                {value}
            </div>

            {isPositive && (
                <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-bl-[100px] -z-10 transition-all duration-300"></div>
            )}
        </div>
    );
}
