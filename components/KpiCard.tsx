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
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-center relative overflow-hidden flex flex-col items-center justify-center transition-all hover:shadow-md">
            <div className="flex items-center justify-center gap-2 mb-3">
                <h3 className="text-slate-600 font-medium text-sm md:text-base">{title}</h3>
                <TooltipProvider delayDuration={300}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <button className="text-slate-400 hover:text-slate-600 focus:outline-none transition-colors">
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

            <div className={`text-3xl md:text-4xl font-semibold ${valueColorClass} transition-colors duration-300`}>
                {value}
            </div>

            {isPositive && (
                <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-bl-[100px] -z-10 transition-all duration-300"></div>
            )}
        </div>
    );
}
