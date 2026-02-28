import assumptions from '@/data/assumptions.json';
import { SectionHeading } from '@/components/SectionHeading';
import { HelpCircle, ExternalLink, Database, FileText, Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export const metadata = {
    title: 'מתודולוגיה ומקורות - יבוא אישי',
};

export default function MethodologyPage() {
    return (
        <div className="space-y-12 animate-in fade-in duration-500">
            <section className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-200">
                <SectionHeading
                    title="מתודולוגיה ומקורות נתונים"
                />
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-4xl">
                    המודל באתר מבוסס על שילוב בין נתונים פתוחים של ממשלת ישראל, מידע רשמי על כללי יבוא אישי, ודוח של ה‑OECD בנושא יוקר המחיה בישראל, יחד עם מספר הנחות פשוטות ומוצהרות. כאן תמצאו פירוט מלא ושקוף של מקורות הנתונים ההנחות וההגבלות.
                </p>
            </section>

            <section className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-200">
                <SectionHeading title="מקורות הנתונים" />
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-700">
                    <li className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                        <Database className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                        <div>
                            <span className="font-bold text-slate-900 block mb-1">מאגרי המידע הממשלתיים (data.gov.il)</span>
                            <p className="text-sm mb-2 leading-relaxed">מאגר נתונים פתוח של משרדי הממשלה וגופי ציבור, ממנו נמשכו דוגמאות נתונים על יבוא וסחר חוץ לצורך כיול סדרי גודל.</p>
                            <a href="https://data.gov.il/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 font-medium group">
                                רשויות ממשלתיות
                                <ExternalLink className="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </a>
                        </div>
                    </li>
                    <li className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                        <FileText className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                        <div>
                            <span className="font-bold text-slate-900 block mb-1">אתר משרד הכלכלה – &quot;יבוא אישי&quot;</span>
                            <p className="text-sm mb-2 leading-relaxed">האתר הרשמי שמרכז מידע והנחיות לציבור על דרישות ליבוא מוצרי צריכה לישראל.</p>
                            <a href="https://apps.economy.gov.il/Apps/PersonalImport/Home/Digital_Order" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 font-medium group">
                                משרד הכלכלה
                                <ExternalLink className="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </a>
                        </div>
                    </li>
                    <li className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                        <FileText className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                        <div>
                            <span className="font-bold text-slate-900 block mb-1">צו יבוא אישי – מהדורה דיגיטלית</span>
                            <p className="text-sm mb-2 leading-relaxed">המסמך המשפטי שמגדיר מהו &quot;יבוא אישי&quot;, הכמויות המותרות והרשויות המעורבות.</p>
                            <a href="https://www.gov.il/he/departments/legalInfo/personal_import_order" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 font-medium group">
                                קריאת הצו
                                <ExternalLink className="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </a>
                        </div>
                    </li>
                    <li className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                        <Info className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                        <div>
                            <span className="font-bold text-slate-900 block mb-1">כל‑זכות – זכותון יבוא אישי</span>
                            <p className="text-sm mb-2 leading-relaxed">הסבר בשפה פשוטה על כללי מסים, מע&quot;מ ועמלות, וההבדל ליבוא מסחרי.</p>
                            <a href="https://www.kolzchut.org.il/he/%D7%96%D7%9B%D7%95%D7%AA%D7%95%D7%9F_%D7%91%D7%A0%D7%95%D7%A9%D7%90_%D7%99%D7%91%D7%95%D7%90_%D7%90%D7%99%D7%A9%D7%99_(%D7%97%D7%91%D7%99%D7%9C%D7%95%D7%AA_%D7%9E%D7%97%D7%95%22%D7%9C)" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 font-medium group">
                                זכותון כל-זכות
                                <ExternalLink className="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </a>
                        </div>
                    </li>
                    <li className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                        <FileText className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                        <div>
                            <span className="font-bold text-slate-900 block mb-1">דואר ישראל – משלוחים ומסים</span>
                            <p className="text-sm mb-2 leading-relaxed">מידע על אופן התשלום והעמלות, המשמש להערכת עלויות טיפול.</p>
                            <a href="https://doar.israelpost.co.il/content/tax-payments/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 font-medium group">
                                דואר ישראל
                                <ExternalLink className="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </a>
                        </div>
                    </li>
                    <li className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                        <Database className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                        <div>
                            <span className="font-bold text-slate-900 block mb-1">OECD Economic Survey 2025</span>
                            <p className="text-sm mb-2 leading-relaxed">דוח הממחיש שרמת המחירים בישראל היא מהגבוהות ב-OECD.</p>
                            <a href="https://www.oecd.org/en/publications/oecd-economic-surveys-israel-2025_d6dd02bc-en/full-report/addressing-the-high-cost-of-living_bfe408a2.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 font-medium group">
                                דוח OECD
                                <ExternalLink className="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </a>
                        </div>
                    </li>
                </ul>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 lg:col-span-1">
                    <SectionHeading title="איך בנינו את המודל?" />
                    <div className="text-slate-600 leading-relaxed text-sm space-y-4">
                        <p>
                            בפועל, אין כיום לציבור נתונים מלאים על הכמות המדויקת של חבילות יבוא אישי, ולכן המודל נבנה כמודל <strong>תרחישים מייצג</strong> המבוסס על שלוש רצועות ערך.
                        </p>
                        <p>
                            פירקנו את אוכלוסיית החבילות כך שחלקן נהנות מפטור כבר היום (עד 75$), וחלקן ייהנו מהרחבתו (75$-150$). המודל מחשב את המע"מ רק עבור אלו שעוברות את התקרה הרלוונטית לתרחיש.
                        </p>
                        <p className="bg-slate-50 p-4 border border-slate-100 text-slate-800 rounded-xl">
                            <strong>תחליפיות (Substitution):</strong> ההנחה החדשנית של המודל היא שכשצרכן קונה פריט עד 150$ בחו"ל בפטור ממס, חלק מהקניות הללו "באות על חשבון" קנייה מקומית שהיתה מניבה מע"מ ותורמת למחזור של עסק ישראלי.
                        </p>
                    </div>
                </section>

                <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 lg:col-span-2 overflow-x-auto">
                    <SectionHeading title="ההנחות המרכזיות" subtitle="הערכים שלמטה הינם הערכה תיאורטית לצורך חישוב כללי. בהינתן נתונים מדויקים המודל יעודכן בהתאם." />
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
                                                <TooltipContent>אומדן כללי של כמות החבילות הנכנסות בשנה ביבוא אישי.</TooltipContent>
                                            </Tooltip>
                                        </td>
                                        <td className="px-6 py-4 text-slate-600 font-mono" dir="ltr">{assumptions.annual_parcels_total.toLocaleString()}</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-slate-900 border-l border-slate-100 flex items-center gap-2">
                                            חלוקה לרצועת &lt; 75$
                                        </td>
                                        <td className="px-6 py-4 text-slate-600 font-mono" dir="ltr">
                                            {(assumptions.share_under_75 * 100).toFixed(0)}% (avg ${assumptions.avg_value_under_75})
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-slate-900 border-l border-slate-100 flex items-center gap-2">
                                            חלוקה לרצועת 75$-150$
                                        </td>
                                        <td className="px-6 py-4 text-slate-600 font-mono" dir="ltr">
                                            {(assumptions.share_75_to_150 * 100).toFixed(0)}% (avg ${assumptions.avg_value_75_to_150})
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-slate-900 border-l border-slate-100 flex items-center gap-2">
                                            חלוקה לרצועת &gt; 150$
                                        </td>
                                        <td className="px-6 py-4 text-slate-600 font-mono" dir="ltr">
                                            {(assumptions.share_over_150 * 100).toFixed(0)}% (avg ${assumptions.avg_value_over_150})
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors bg-blue-50/30">
                                        <td className="px-6 py-4 font-bold text-slate-900 border-l border-slate-100 flex items-center gap-2">
                                            שיעור החלפה (Substitution)
                                            <Tooltip>
                                                <TooltipTrigger><HelpCircle className="w-4 h-4 text-blue-500" /></TooltipTrigger>
                                                <TooltipContent className="max-w-xs text-right">אחוז היבוא האישי שמבטל קניה שהיתה מבוצעת באותה עלות בעסק ישראלי לו לא היה פטור.</TooltipContent>
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

            <section className="bg-amber-50 p-8 rounded-2xl border border-amber-200/60 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-bl-full -z-0 opacity-50 block md:hidden"></div>
                <div className="relative z-10">
                    <SectionHeading title="מגבלות ואזהרות" />
                    <ul className="text-amber-900 leading-relaxed text-sm md:text-base space-y-3">
                        <li className="flex items-start gap-3">
                            <span className="text-amber-600 mt-1 shrink-0">■</span>
                            <span><strong>זהו מודל תרחישים, לא תחזית.</strong> הוא נועד להמחשה ולדיון ציבורי, ולא לשמש בסיס לקבלת החלטות רגולטוריות או עסקיות.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-amber-600 mt-1 shrink-0">■</span>
                            <span>ההנחות על מספר החבילות, התפלגות הערכים ושיעור ההחלפה בין קנייה מקומית לקנייה מחו&quot;ל הן הערכות בלבד.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-amber-600 mt-1 shrink-0">■</span>
                            <span>המודל מניח שכל החיסכון במע&quot;מ עובר לצרכנים, ואינו מתחשב בשינויים אפשריים במחיר שהספקים בחו&quot;ל (או המוכרים המקומיים) גובים בפועל לאורך זמן.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-amber-600 mt-1 shrink-0">■</span>
                            <span>אין בממצאים משום ייעוץ מס, ייעוץ משפטי או המלצה כלכלית כלשהי.</span>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="bg-gradient-to-l from-blue-600 to-blue-800 p-8 md:p-10 rounded-2xl border border-blue-700 shadow-md text-white text-center">
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-white text-center">
                    למה בחרנו להציג את הנתונים כך?
                </h2>
                <div className="leading-relaxed space-y-4 max-w-3xl mx-auto text-blue-50 text-sm md:text-base">
                    <p>
                        מדיניות מס כמו תקרת הפטור ממע&quot;מ משפיעה בו‑זמנית על שלושה צדדים: הצרכנים, עסקים בישראל והכנסות המדינה. הדיון הציבורי נוטה להתמקד רק באחד מהם בכל פעם (למשל, רק ביוקר המחיה או רק בגירעון).
                    </p>
                    <p>
                        הדשבורד מחייב אותנו לראות את כולם על אותו מסך. במקום שאלה חד-מימדית של "האם זה טוב?", המודל מאלץ לשאול שאלות כמותיות: כמה אנחנו מוכנים שהמדינה תפסיד ממסים כדי שהצרכן יחסוך שקל אחד? החשיבה ה-BI-ית מבקשת שקיפות לגבי הטרייד-אוף, ללא שיפוט מוסרי, כך שכל אזרח יוכל לשנות את ההנחות ולהגיע למסקנה משלו.
                    </p>
                </div>
            </section>
        </div>
    );
}
