import assumptions from '@/data/assumptions.json';
import { SectionHeading } from '@/components/SectionHeading';
import { HelpCircle, ExternalLink, Database, FileText, Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { calculateScenario } from '@/lib/scenarioModel';

export const metadata = {
    title: 'מתודולוגיה ומקורות - יבוא אישי',
};

export default function MethodologyPage() {
    const scenarioNoExemption = calculateScenario(0);
    const scenario75 = calculateScenario(75);
    const scenario150 = calculateScenario(150);

    const vatExemptionAt75 = scenarioNoExemption.totals.totalVatIls - scenario75.totals.totalVatIls;
    const incrementalVatLossAt150 = scenario75.totals.totalVatIls - scenario150.totals.totalVatIls;
    const formatMillions = (value: number) => `₪${(value / 1_000_000).toFixed(1)}M`;

    return (
        <div className="space-y-12 animate-in fade-in duration-500">
            <section className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-200">
                <SectionHeading title="מתודולוגיה ומקורות נתונים" />
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-4xl">
                    המודל באתר מבוסס על שלושה מקורות ששימשו בפועל: מסמך המחקר של הכנסת לכיול היקפים,
                    כללי רשות המסים להבנת מנגנון המע״מ, ונתוני הלמ״ס להצגת הקשר מאקרו של יוקר המחיה.
                    המטרה היא להציג השוואת תרחישים שקופה, עם הנחות מפורשות ופישוטים ידועים מראש.
                </p>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 lg:col-span-1">
                    <SectionHeading title="מבנה המודל" />
                    <div className="text-slate-600 leading-relaxed text-sm space-y-4">
                        <p>
                            המודל משווה בין שני תרחישים: פטור עד 75 דולר מול פטור עד 150 דולר, ומכויל לסדרי הגודל שמופיעים במסמך ממ״מ הכנסת (2025) על היקף חבילות ושווי יבוא אישי.
                        </p>
                        <p>
                            ה-KPI כוללים: גביית מע״מ בפועל, חיסכון צרכנים ממע״מ ביחס למצב ללא פטור, אובדן מחזור לעסקים מקומיים, וכן
                            ״סך מע״מ נטו למדינה״ שמחושב כגביית מע״מ ביבוא אישי בניכוי אומדן מע״מ עקיף שאובד ממכירות מקומיות שהוסטו לחו״ל.
                            זהו מודל מע״מ מפושט: הוא לא כולל מס קנייה/מכס לכל מוצר ולא מחשב בנפרד עלויות שילוח וביטוח בכל עסקה.
                        </p>
                        <div className="bg-slate-50 p-4 border border-slate-100 text-slate-800 rounded-xl">
                            <strong>תחליפיות (Substitution):</strong> אחוז מהקניות בחו״ל (בטווח 75–150 דולר) שמחליפות קנייה מקומית, ומשמש להערכת אובדן ההכנסה לעסקים.
                        </div>
                    </div>
                </section>

                <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 lg:col-span-2 overflow-x-auto">
                    <SectionHeading
                        title="ההנחות המרכזיות"
                        subtitle="הערכים שלמטה מכוילים ללוח 3 במסמך הכנסת (2024) עם התאמה מתונה ל-2025, כדי לשמור על סדרי גודל ריאליים ופשוטים להצגה."
                    />
                    <TooltipProvider>
                        <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-sm">
                            <table className="min-w-full divide-y divide-slate-200 text-right text-sm">
                                <thead className="bg-slate-50">
                                    <tr>
                                        <th className="px-6 py-4 font-semibold text-slate-700">פרמטר</th>
                                        <th className="px-6 py-4 font-semibold text-slate-700">הנחה במודל</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200 bg-white">
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-slate-900 border-l border-slate-100 flex items-center gap-2">
                                            סך הכל חבילות בשנה
                                            <Tooltip>
                                                <TooltipTrigger><HelpCircle className="w-4 h-4 text-slate-400" /></TooltipTrigger>
                                                <TooltipContent>אומדן כולל של כמות החבילות השנתית ביבוא אישי.</TooltipContent>
                                            </Tooltip>
                                        </td>
                                        <td className="px-6 py-4 text-slate-600 font-mono" dir="ltr">{assumptions.annual_parcels_total.toLocaleString()}</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-slate-900 border-l border-slate-100">חלוקה לרצועת &lt; 75$</td>
                                        <td className="px-6 py-4 text-slate-600 font-mono" dir="ltr">
                                            {(assumptions.share_under_75 * 100).toFixed(0)}% (avg ${assumptions.avg_value_under_75})
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-slate-900 border-l border-slate-100">חלוקה לרצועת 75$-150$</td>
                                        <td className="px-6 py-4 text-slate-600 font-mono" dir="ltr">
                                            {(assumptions.share_75_to_150 * 100).toFixed(0)}% (avg ${assumptions.avg_value_75_to_150})
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-slate-900 border-l border-slate-100">חלוקה לרצועת &gt; 150$</td>
                                        <td className="px-6 py-4 text-slate-600 font-mono" dir="ltr">
                                            {(assumptions.share_over_150 * 100).toFixed(0)}% (avg ${assumptions.avg_value_over_150})
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors bg-blue-50/30">
                                        <td className="px-6 py-4 font-bold text-slate-900 border-l border-slate-100 flex items-center gap-2">
                                            שיעור החלפה (Substitution)
                                            <Tooltip>
                                                <TooltipTrigger><HelpCircle className="w-4 h-4 text-blue-500" /></TooltipTrigger>
                                                <TooltipContent className="max-w-xs text-right">
                                                    אחוז מהקניות בחו"ל בטווח 75$-150$ שמחליפות קנייה מקומית משוערת.
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

            <section className="bg-blue-50/60 p-8 md:p-10 rounded-2xl shadow-sm border border-blue-100">
                <SectionHeading title="איך לקרוא את הנתונים מול מסמך הכנסת?" />
                <div className="space-y-3 text-sm md:text-base text-slate-700 leading-relaxed">
                    <p>
                        המספרים בדשבורד נבנו לפי סדרי הגודל שמופיעים במסמך הכנסת. בתרחיש פטור עד 75 דולר,
                        היקף הפטור ממע״מ נאמד כאן בכ-<strong>{formatMillions(vatExemptionAt75)}</strong>, קרוב לאומדן של כ-850 מיליון ש״ח במסמך.
                    </p>
                    <p>
                        במעבר מפטור עד 75 דולר לפטור עד 150 דולר, השינוי שמוצג כאן הוא כ-<strong>{formatMillions(incrementalVatLossAt150)}</strong>
                        ברכיב המע״מ בלבד. במסמך הכנסת מופיע אומדן של כ-1 מיליארד ש״ח, משום שהוא כולל גם מסים נוספים מעבר למע״מ.
                    </p>
                    <p>
                        כדי להציג את התמונה בצורה פשוטה וברורה לציבור, הדשבורד מחלק את החבילות לרצועות מחיר
                        עד 75$, 75–150$ ומעל 150$. במסמך הרשמי החלוקה שונה מעט, ולכן יש כאן אומדן תרחישים נגיש,
                        ולא תחליף לחישוב מס משפטי מלא.
                    </p>
                </div>
            </section>

            <section className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-200">
                <SectionHeading title="מקורות הנתונים" />
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-700">
                    <li className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                        <FileText className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                        <div>
                            <span className="font-bold text-slate-900 block mb-1">מרכז המחקר והמידע של הכנסת - "תיאור וניתוח העלאת תקרת הפטור ממיסים ביבוא אישי" (2025)</span>
                            <p className="text-sm mb-2 leading-relaxed">
                                המסמך מספק אומדנים רשמיים לשווי ולמספר החבילות הפטורות ממסים עד 75$, לעלות הפיסקלית
                                של פטור המע"מ הקיים (מאות מיליוני ש"ח בשנה), ולאובדן הכנסות צפוי במקרה של העלאת התקרה ל-150$.
                            </p>
                            <a href="https://fs.knesset.gov.il/globaldocs/MMM/51fb27d8-dddf-f011-a866-005056aa9911/2_51fb27d8-dddf-f011-a866-005056aa9911_11_21353.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 font-medium group">
                                דוח ממ"מ הכנסת (PDF)
                                <ExternalLink className="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </a>
                        </div>
                    </li>

                    <li className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                        <Info className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                        <div>
                            <span className="font-bold text-slate-900 block mb-1">רשות המסים - מיסוי יבוא מוצרים לישראל</span>
                            <p className="text-sm mb-2 leading-relaxed">
                                העמוד הרשמי מתאר את כללי המיסוי ביבוא אישי ואת חישוב המסים והמע"מ. בפרויקט נעשה שימוש
                                בגרסה מפושטת של כללים אלה לצורך בניית מנגנון החישוב בתרחישים.
                            </p>
                            <a href="https://www.gov.il/he/pages/tax-importsofproducts" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 font-medium group">
                                רשות המסים (gov.il)
                                <ExternalLink className="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </a>
                        </div>
                    </li>

                    <li className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                        <Database className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                        <div>
                            <span className="font-bold text-slate-900 block mb-1">הלשכה המרכזית לסטטיסטיקה (הלמ״ס) - מדדי מחירים ו-CPI</span>
                            <p className="text-sm mb-2 leading-relaxed">
                                נתוני מדד המחירים לצרכן המוצגים באתר נלקחו מטבלאות המדדים הרשמיות של הלמ״ס,
                                כפי שהן מופיעות במאגרי הנתונים ובדף המדדים העיקריים (Consumer Price Index).
                            </p>
                            <div className="flex flex-col gap-1">
                                <a
                                    href="https://www.cbs.gov.il/he/CBSNewBrand/Pages/siteToolsAndDatabases.aspx"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 font-medium group"
                                >
                                    כלי סטטיסטיקה ומאגרי מידע - הלמ״ס
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
                <SectionHeading title="מגבלות ואזהרות" />
                <ul className="text-amber-900 leading-relaxed text-sm md:text-base space-y-3">
                    <li className="flex items-start gap-3">
                        <span className="text-amber-600 mt-1 shrink-0">■</span>
                        <span><strong>זהו מודל תרחישים, לא תחזית.</strong> הוא נועד להמחשה ולדיון ציבורי.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-amber-600 mt-1 shrink-0">■</span>
                        <span>הנחות ההתפלגות, השווי ושיעור ההחלפה הם אומדנים פשטניים.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-amber-600 mt-1 shrink-0">■</span>
                        <span>האומדן של ״כמיליארד ש״ח״ במסמך הכנסת מתייחס לכלל המסים, בעוד שבדשבורד מחושב רכיב מע״מ בלבד.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-amber-600 mt-1 shrink-0">■</span>
                        <span>במדד ״סך מע״מ נטו למדינה״, רכיב המע״מ העקיף על המחזור המקומי מחושב כהערכה פשוטה לפי שיעור המע״מ התקני.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-amber-600 mt-1 shrink-0">■</span>
                        <span>אין בממצאים ייעוץ מס, ייעוץ משפטי או המלצה רגולטורית.</span>
                    </li>
                </ul>
            </section>

        </div>
    );
}


