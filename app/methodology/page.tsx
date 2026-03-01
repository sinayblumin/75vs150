import assumptions from '@/data/assumptions.json';
import { SectionHeading } from '@/components/SectionHeading';
import { HelpCircle, ExternalLink, Database, FileText, Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export const metadata = {
    title: '×ž×ª×•×“×•×œ×•×’×™×” ×•×ž×§×•×¨×•×ª - ×™×‘×•× ××™×©×™',
};

export default function MethodologyPage() {
    return (
        <div className="space-y-12 animate-in fade-in duration-500">
            <section className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-200">
                <SectionHeading title="×ž×ª×•×“×•×œ×•×’×™×” ×•×ž×§×•×¨×•×ª × ×ª×•× ×™×" />
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-4xl">
                    ×”×ž×•×“×œ ×‘××ª×¨ ×ž×‘×•×¡×¡ ×¢×œ ×©×™×œ×•×‘ ×‘×™×Ÿ × ×ª×•× ×™× ×¤×ª×•×—×™×, ×ž×§×•×¨×•×ª ×ž×ž×©×œ×ª×™×™× ×¨×©×ž×™×™× ×¢×œ ×™×‘×•× ××™×©×™,
                    ×“×•×— ×”-OECD ×•×ž×¡×ž×š ×”×ž×—×§×¨ ×©×œ ×”×›× ×¡×ª ×‘× ×•×©× ×”×¢×œ××ª ×ª×§×¨×ª ×”×¤×˜×•×¨. ×”×ž×˜×¨×” ×”×™× ×œ×”×¦×™×’ ×”×©×•×•××ª
                    ×ª×¨×—×™×©×™× ×©×§×•×¤×”, ×¢× ×”× ×—×•×ª ×ž×¤×•×¨×©×•×ª ×•×¤×™×©×•×˜×™× ×™×“×•×¢×™× ×ž×¨××©.
                </p>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 lg:col-span-1">
                    <SectionHeading title="×ž×‘× ×” ×”×ž×•×“×œ" />
                    <div className="text-slate-600 leading-relaxed text-sm space-y-4">
                        <p>
                            ×”×ž×•×“×œ ×ž×©×•×•×” ×‘×™×Ÿ ×©× ×™ ×ª×¨×—×™×©×™×: ×¤×˜×•×¨ ×¢×“ 75 ×“×•×œ×¨ ×ž×•×œ ×¤×˜×•×¨ ×¢×“ 150 ×“×•×œ×¨, ×¢× ×”× ×—×•×ª ×©×§×•×¤×•×ª ×•×ž×›×•×™×œ×•×ª ×œ×¡×“×¨×™ ×”×’×•×“×œ ×”×¨×©×ž×™×™×.
                        </p>
                        <p>
                            ×”-KPI ×ž×—×•×©×‘×™× ×›×š: ×’×‘×™×™×ª ×ž×¢×´×ž ×‘×¤×•×¢×œ ×‘×›×œ ×ª×¨×—×™×©, ×—×™×¡×›×•×Ÿ ×¦×¨×›× ×™× ×ž×ž×¢×´×ž ×‘×™×—×¡ ×œ×ž×¦×‘ ×œ×œ× ×¤×˜×•×¨, ×•××•×‘×“×Ÿ ×ž×—×–×•×¨ ×œ×¢×¡×§×™× ×ž×§×•×ž×™×™×.
                        </p>
                        <p>
                            ×‘×ž×¦×‘ ×´×¢× ×©×™× ×•×™ ×”×ª× ×”×’×•×ª×™×´ ×”×›×ž×•×ª × ×©××¨×ª ×§×‘×•×¢×”, ××š ×”×©×•×•×™ ×”×ž×ž×•×¦×¢ ×œ×—×‘×™×œ×” ×ž×•×›×¤×œ ×‘×›×œ ×¨×¦×•×¢×•×ª ×”×ž×—×™×¨ (×¤×™ 2).
                        </p>
                        <p>
                            ×›×“×™ ×œ×ž×§× ××ª ×”×ž×•×“×œ ×‘×”×§×©×¨ ×¨×—×‘ ×™×•×ª×¨ ×©×œ ×™×•×§×¨ ×”×ž×—×™×”, ×—×•×‘×¨×• ×œ×“×©×‘×•×¨×“ ×’× × ×ª×•× ×™ CPI ×©×œ ×”×œ×ž×´×¡ ×œ×©× ×™× ×”××—×¨×•× ×•×ª.
                            ×”×ž×•×“×œ ×¢×¦×ž×• ××™× ×• ×ž×—×©×‘ ×”×©×¤×¢×” ×™×©×™×¨×” ×¢×œ ×ž×“×“ ×”×ž×—×™×¨×™× ×œ×¦×¨×›×Ÿ, ×•×”×ž×“×“ ×ž×•×¦×’ ×›×”×§×©×¨ ×ž××§×¨×• ×‘×œ×‘×“.
                        </p>
                        <div className="bg-slate-50 p-4 border border-slate-100 text-slate-800 rounded-xl">
                            <strong>×ª×—×œ×™×¤×™×•×ª (Substitution):</strong> ××—×•×– ×ž×”×§× ×™×•×ª ×‘×—×•×´×œ ×‘×˜×•×•×— 75â€“150 ×“×•×œ×¨ ×©×ž×—×œ×™×¤×•×ª ×§× ×™×™×” ×ž×§×•×ž×™×ª, ×•×ž×©×ž×© ×œ×”×¢×¨×›×ª ××•×‘×“×Ÿ ×”×”×›× ×¡×” ×œ×¢×¡×§×™×.
                        </div>
                    </div>
                </section>

                <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 lg:col-span-2 overflow-x-auto">
                    <SectionHeading
                        title="×”×”× ×—×•×ª ×”×ž×¨×›×–×™×•×ª"
                        subtitle="×”×¢×¨×›×™× ×©×œ×ž×˜×” ×”× ×”×¢×¨×›×” ×ª×™××•×¨×˜×™×ª ×œ×¦×•×¨×š ×—×™×©×•×‘ ×›×œ×œ×™. ×‘×”×™× ×ª×Ÿ × ×ª×•× ×™× ×˜×•×‘×™× ×™×•×ª×¨, ×”×ž×•×“×œ ×™×¢×•×“×›×Ÿ ×‘×”×ª××."
                    />
                    <TooltipProvider>
                        <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-sm">
                            <table className="min-w-full divide-y divide-slate-200 text-right text-sm">
                                <thead className="bg-slate-50">
                                    <tr>
                                        <th className="px-6 py-4 font-semibold text-slate-700">×¤×¨×ž×˜×¨</th>
                                        <th className="px-6 py-4 font-semibold text-slate-700">×”× ×—×” ×‘×ž×•×“×œ</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200 bg-white">
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-slate-900 border-l border-slate-100 flex items-center gap-2">
                                            ×¡×š ×”×›×œ ×—×‘×™×œ×•×ª ×‘×©× ×”
                                            <Tooltip>
                                                <TooltipTrigger><HelpCircle className="w-4 h-4 text-slate-400" /></TooltipTrigger>
                                                <TooltipContent>××•×ž×“×Ÿ ×›×•×œ×œ ×©×œ ×›×ž×•×ª ×”×—×‘×™×œ×•×ª ×”×©× ×ª×™×ª ×‘×™×‘×•× ××™×©×™.</TooltipContent>
                                            </Tooltip>
                                        </td>
                                        <td className="px-6 py-4 text-slate-600 font-mono" dir="ltr">{assumptions.annual_parcels_total.toLocaleString()}</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-slate-900 border-l border-slate-100">×—×œ×•×§×” ×œ×¨×¦×•×¢×ª &lt; 75$</td>
                                        <td className="px-6 py-4 text-slate-600 font-mono" dir="ltr">
                                            {(assumptions.share_under_75 * 100).toFixed(0)}% (avg ${assumptions.avg_value_under_75})
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-slate-900 border-l border-slate-100">×—×œ×•×§×” ×œ×¨×¦×•×¢×ª 75$-150$</td>
                                        <td className="px-6 py-4 text-slate-600 font-mono" dir="ltr">
                                            {(assumptions.share_75_to_150 * 100).toFixed(0)}% (avg ${assumptions.avg_value_75_to_150})
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-slate-900 border-l border-slate-100">×—×œ×•×§×” ×œ×¨×¦×•×¢×ª &gt; 150$</td>
                                        <td className="px-6 py-4 text-slate-600 font-mono" dir="ltr">
                                            {(assumptions.share_over_150 * 100).toFixed(0)}% (avg ${assumptions.avg_value_over_150})
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors bg-blue-50/30">
                                        <td className="px-6 py-4 font-bold text-slate-900 border-l border-slate-100 flex items-center gap-2">
                                            ×©×™×¢×•×¨ ×”×—×œ×¤×” (Substitution)
                                            <Tooltip>
                                                <TooltipTrigger><HelpCircle className="w-4 h-4 text-blue-500" /></TooltipTrigger>
                                                <TooltipContent className="max-w-xs text-right">
                                                    ××—×•×– ×ž×”×§× ×™×•×ª ×‘×—×•"×œ ×‘×˜×•×•×— 75$-150$ ×©×ž×—×œ×™×¤×•×ª ×§× ×™×™×” ×ž×§×•×ž×™×ª ×ž×©×•×¢×¨×ª.
                                                </TooltipContent>
                                            </Tooltip>
                                        </td>
                                        <td className="px-6 py-4 text-accent-DEFAULT font-bold font-mono" dir="ltr">
                                            {(assumptions.substitution_rate * 100).toFixed(0)}%
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </TooltipProvider>
                </section>
            </div>

<section className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-200">
                <SectionHeading title="×ž×§×•×¨×•×ª ×”× ×ª×•× ×™×" />
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-700">
                    <li className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                        <Database className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                        <div>
                            <span className="font-bold text-slate-900 block mb-1">×ž××’×¨×™ ×”×ž×™×“×¢ ×”×ž×ž×©×œ×ª×™×™× (data.gov.il)</span>
                            <p className="text-sm mb-2 leading-relaxed">
                                ×ž××’×¨ × ×ª×•× ×™× ×¤×ª×•×— ×©×œ ×ž×©×¨×“×™ ×”×ž×ž×©×œ×” ×•×’×•×¤×™ ×¦×™×‘×•×¨, ×ž×ž× ×• × ×œ×§×—×• ×“×•×’×ž××•×ª ×•×¡×“×¨×™ ×’×•×“×œ ×œ× ×ª×•× ×™ ×¡×—×¨ ×•×™×‘×•×.
                            </p>
                            <a href="https://data.gov.il/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 font-medium group">
                                data.gov.il
                                <ExternalLink className="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </a>
                        </div>
                    </li>

                    <li className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                        <FileText className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                        <div>
                            <span className="font-bold text-slate-900 block mb-1">××ª×¨ ×ž×©×¨×“ ×”×›×œ×›×œ×” - "×™×‘×•× ××™×©×™"</span>
                            <p className="text-sm mb-2 leading-relaxed">
                                ×¤×•×¨×˜×œ ×¨×©×ž×™ ×”×ž×¨×›×– ×”× ×—×™×•×ª ×œ×¦×™×‘×•×¨ ×¢×œ ×™×‘×•× ××™×©×™, ×ª× ××™× ×•×”×™×‘×˜×™× ×ª×¤×¢×•×œ×™×™×.
                            </p>
                            <a href="https://apps.economy.gov.il/Apps/PersonalImport/Home/Digital_Order" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 font-medium group">
                                ×ž×©×¨×“ ×”×›×œ×›×œ×”
                                <ExternalLink className="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </a>
                        </div>
                    </li>

                    <li className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                        <FileText className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                        <div>
                            <span className="font-bold text-slate-900 block mb-1">×¦×• ×™×‘×•× ××™×©×™ - ×ž×”×“×•×¨×” ×“×™×’×™×˜×œ×™×ª</span>
                            <p className="text-sm mb-2 leading-relaxed">
                                ×”×ž×¡×ž×š ×”×ž×©×¤×˜×™ ×”×ž×’×“×™×¨ ×ž×”×• ×™×‘×•× ××™×©×™, ×”×›×ž×•×™×•×ª ×”×ž×•×ª×¨×•×ª ×•×”×”×‘×—× ×” ×ž×•×œ ×™×‘×•× ×ž×¡×—×¨×™.
                            </p>
                            <a href="https://www.gov.il/he/departments/legalInfo/personal_import_order" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 font-medium group">
                                ×§×¨×™××ª ×”×¦×•
                                <ExternalLink className="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </a>
                        </div>
                    </li>

                    <li className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                        <Info className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                        <div>
                            <span className="font-bold text-slate-900 block mb-1">×›×œ-×–×›×•×ª - ×–×›×•×ª×•×Ÿ ×™×‘×•× ××™×©×™</span>
                            <p className="text-sm mb-2 leading-relaxed">
                                ×”×¡×‘×¨ ×™×“×™×“×•×ª×™ ×œ×¦×™×‘×•×¨ ×¢×œ ×’×‘×™×™×ª ×ž×¡×™×, ×ž×¢"×ž ×•×¢×œ×•×™×•×ª × ×œ×•×•×ª ×‘×™×‘×•× ××™×©×™.
                            </p>
                            <a href="https://www.kolzchut.org.il/he/%D7%96%D7%9B%D7%95%D7%AA%D7%95%D7%9F_%D7%91%D7%A0%D7%95%D7%A9%D7%90_%D7%99%D7%91%D7%95%D7%90_%D7%90%D7%99%D7%A9%D7%99_(%D7%97%D7%91%D7%99%D7%9C%D7%95%D7%AA_%D7%9E%D7%97%D7%95%22%D7%9C)" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 font-medium group">
                                ×›×œ-×–×›×•×ª
                                <ExternalLink className="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </a>
                        </div>
                    </li>

                    <li className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                        <FileText className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                        <div>
                            <span className="font-bold text-slate-900 block mb-1">×“×•××¨ ×™×©×¨××œ - ×ž×©×œ×•×—×™× ×•×ž×¡×™×</span>
                            <p className="text-sm mb-2 leading-relaxed">
                                ×ž×™×“×¢ ×ª×¤×¢×•×œ×™ ×¢×œ ×ª×©×œ×•× ×ž×¡×™× ×•×¢×ž×œ×•×ª ×˜×™×¤×•×œ, ×©×™×ž×•×©×™ ×œ×”×‘× ×ª ×¢×œ×•×™×•×ª ×‘×¤×•×¢×œ.
                            </p>
                            <a href="https://doar.israelpost.co.il/content/tax-payments/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 font-medium group">
                                ×“×•××¨ ×™×©×¨××œ
                                <ExternalLink className="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </a>
                        </div>
                    </li>

                    <li className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                        <Database className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                        <div>
                            <span className="font-bold text-slate-900 block mb-1">OECD Economic Survey 2025</span>
                            <p className="text-sm mb-2 leading-relaxed">
                                ×ž×§×•×¨ ×”×§×©×¨ ×›×œ×›×œ×™ ×¨×—×‘ ×¢×œ ×™×•×§×¨ ×”×ž×—×™×” ×‘×™×©×¨××œ.
                            </p>
                            <a href="https://www.oecd.org/en/publications/oecd-economic-surveys-israel-2025_d6dd02bc-en/full-report/addressing-the-high-cost-of-living_bfe408a2.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 font-medium group">
                                ×“×•×— OECD
                                <ExternalLink className="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </a>
                        </div>
                    </li>

                    <li className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                        <FileText className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                        <div>
                            <span className="font-bold text-slate-900 block mb-1">×ž×¨×›×– ×”×ž×—×§×¨ ×•×”×ž×™×“×¢ ×©×œ ×”×›× ×¡×ª - "×ª×™××•×¨ ×•× ×™×ª×•×— ×”×¢×œ××ª ×ª×§×¨×ª ×”×¤×˜×•×¨ ×ž×ž×™×¡×™× ×‘×™×‘×•× ××™×©×™" (2025)</span>
                            <p className="text-sm mb-2 leading-relaxed">
                                ×”×ž×¡×ž×š ×ž×¡×¤×§ ××•×ž×“× ×™× ×¨×©×ž×™×™× ×œ×©×•×•×™ ×•×œ×ž×¡×¤×¨ ×”×—×‘×™×œ×•×ª ×”×¤×˜×•×¨×•×ª ×ž×ž×¡×™× ×¢×“ 75$, ×œ×¢×œ×•×ª ×”×¤×™×¡×§×œ×™×ª
                                ×©×œ ×¤×˜×•×¨ ×”×ž×¢"×ž ×”×§×™×™× (×ž××•×ª ×ž×™×œ×™×•× ×™ ×©"×— ×‘×©× ×”), ×•×œ××•×‘×“×Ÿ ×”×›× ×¡×•×ª ×¦×¤×•×™ ×‘×ž×§×¨×” ×©×œ ×”×¢×œ××ª ×”×ª×§×¨×” ×œ-150$.
                            </p>
                            <a href="https://fs.knesset.gov.il/globaldocs/MMM/51fb27d8-dddf-f011-a866-005056aa9911/2_51fb27d8-dddf-f011-a866-005056aa9911_11_21353.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 font-medium group">
                                ×“×•×— ×ž×ž"×ž ×”×›× ×¡×ª (PDF)
                                <ExternalLink className="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </a>
                        </div>
                    </li>

                    <li className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                        <Info className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                        <div>
                            <span className="font-bold text-slate-900 block mb-1">×¨×©×•×ª ×”×ž×¡×™× - ×ž×™×¡×•×™ ×™×‘×•× ×ž×•×¦×¨×™× ×œ×™×©×¨××œ</span>
                            <p className="text-sm mb-2 leading-relaxed">
                                ×”×¢×ž×•×“ ×”×¨×©×ž×™ ×ž×ª××¨ ××ª ×›×œ×œ×™ ×”×ž×™×¡×•×™ ×‘×™×‘×•× ××™×©×™ ×•××ª ×—×™×©×•×‘ ×”×ž×¡×™× ×•×”×ž×¢"×ž. ×‘×¤×¨×•×™×§×˜ × ×¢×©×” ×©×™×ž×•×©
                                ×‘×’×¨×¡×” ×ž×¤×•×©×˜×ª ×©×œ ×›×œ×œ×™× ××œ×” ×œ×¦×•×¨×š ×‘× ×™×™×ª ×ž× ×’× ×•×Ÿ ×”×—×™×©×•×‘ ×‘×ª×¨×—×™×©×™×.
                            </p>
                            <a href="https://www.gov.il/he/pages/tax-importsofproducts" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 font-medium group">
                                ×¨×©×•×ª ×”×ž×¡×™× (gov.il)
                                <ExternalLink className="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </a>
                        </div>
                    </li>

                    <li className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                        <Database className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                        <div>
                            <span className="font-bold text-slate-900 block mb-1">×”×œ×©×›×” ×”×ž×¨×›×–×™×ª ×œ×¡×˜×˜×™×¡×˜×™×§×” (×”×œ×ž×´×¡) - ×ž×“×“×™ ×ž×—×™×¨×™× ×•-CPI</span>
                            <p className="text-sm mb-2 leading-relaxed">
                                × ×ª×•× ×™ ×ž×“×“ ×”×ž×—×™×¨×™× ×œ×¦×¨×›×Ÿ ×”×ž×•×¦×’×™× ×‘××ª×¨ × ×œ×§×—×• ×ž×˜×‘×œ××•×ª ×”×ž×“×“×™× ×”×¨×©×ž×™×•×ª ×©×œ ×”×œ×ž×´×¡,
                                ×›×¤×™ ×©×”×Ÿ ×ž×•×¤×™×¢×•×ª ×‘×ž××’×¨×™ ×”× ×ª×•× ×™× ×•×‘×“×£ ×”×ž×“×“×™× ×”×¢×™×§×¨×™×™× (Consumer Price Index).
                            </p>
                            <div className="flex flex-col gap-1">
                                <a
                                    href="https://www.cbs.gov.il/he/CBSNewBrand/Pages/siteToolsAndDatabases.aspx"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 font-medium group"
                                >
                                    ×›×œ×™ ×¡×˜×˜×™×¡×˜×™×§×” ×•×ž××’×¨×™ ×ž×™×“×¢ - ×”×œ×ž×´×¡
                                    <ExternalLink className="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                </a>
                                <a
                                    href="https://www.cbs.gov.il/en/Pages/Main%20Price%20Indices.aspx"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 font-medium group"
                                >
                                    Main Price Indices - CBS
                                    <ExternalLink className="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>

                        <section className="bg-amber-50 p-8 rounded-2xl border border-amber-200/60 shadow-sm relative overflow-hidden">
                <SectionHeading title="×ž×’×‘×œ×•×ª ×•××–×”×¨×•×ª" />
                <ul className="text-amber-900 leading-relaxed text-sm md:text-base space-y-3">
                    <li className="flex items-start gap-3">
                        <span className="text-amber-600 mt-1 shrink-0">â– </span>
                        <span><strong>×–×”×• ×ž×•×“×œ ×ª×¨×—×™×©×™×, ×œ× ×ª×—×–×™×ª.</strong> ×”×•× × ×•×¢×“ ×œ×”×ž×—×©×” ×•×œ×“×™×•×Ÿ ×¦×™×‘×•×¨×™.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-amber-600 mt-1 shrink-0">â– </span>
                        <span>×”× ×—×•×ª ×”×”×ª×¤×œ×’×•×ª, ×”×©×•×•×™ ×•×©×™×¢×•×¨ ×”×”×—×œ×¤×” ×”× ××•×ž×“× ×™× ×¤×©×˜× ×™×™×.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-amber-600 mt-1 shrink-0">â– </span>
                        <span>××™×Ÿ ×‘×ž×ž×¦××™× ×™×™×¢×•×¥ ×ž×¡, ×™×™×¢×•×¥ ×ž×©×¤×˜×™ ××• ×”×ž×œ×¦×” ×¨×’×•×œ×˜×•×¨×™×ª.</span>
                    </li>
                </ul>
            </section>

        </div>
    );
}

