import assumptions from '@/data/assumptions.json';
import { SectionHeading } from '@/components/SectionHeading';
import { HelpCircle, ExternalLink, Database, FileText, Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export const metadata = {
    title: 'מתודולוגיה ומקורות - יבוא אישי',
};

export default function MethodologyPage() {
    return (
        <div className="space-y-12 animate-in fade-in duration-500">
            <section className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-200">
                <SectionHeading title="מתודולוגיה ומקורות נתונים" />
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-4xl">
                    המודל באתר מבוסס על שילוב בין נתונים פתוחים, מקורות ממשלתיים רשמיים על יבוא אישי,
                    דוח ה-OECD ומסמך המחקר של הכנסת בנושא העלאת תקרת הפטור. המטרה היא להציג השוואת
                    תרחישים שקופה, עם הנחות מפורשות ופישוטים ידועים מראש.
                </p>
            </section>

            <section className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-200">
                <SectionHeading title="מקורות הנתונים" />
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-700">
                    <li className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                        <Database className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                        <div>
                            <span className="font-bold text-slate-900 block mb-1">מאגרי המידע הממשלתיים (data.gov.il)</span>
                            <p className="text-sm mb-2 leading-relaxed">
                                מאגר נתונים פתוח של משרדי הממשלה וגופי ציבור, ממנו נלקחו דוגמאות וסדרי גודל לנתוני סחר ויבוא.
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
                            <span className="font-bold text-slate-900 block mb-1">אתר משרד הכלכלה - "יבוא אישי"</span>
                            <p className="text-sm mb-2 leading-relaxed">
                                פורטל רשמי המרכז הנחיות לציבור על יבוא אישי, תנאים והיבטים תפעוליים.
                            </p>
                            <a href="https://apps.economy.gov.il/Apps/PersonalImport/Home/Digital_Order" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 font-medium group">
                                משרד הכלכלה
                                <ExternalLink className="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </a>
                        </div>
                    </li>

                    <li className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                        <FileText className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                        <div>
                            <span className="font-bold text-slate-900 block mb-1">צו יבוא אישי - מהדורה דיגיטלית</span>
                            <p className="text-sm mb-2 leading-relaxed">
                                המסמך המשפטי המגדיר מהו יבוא אישי, הכמויות המותרות וההבחנה מול יבוא מסחרי.
                            </p>
                            <a href="https://www.gov.il/he/departments/legalInfo/personal_import_order" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 font-medium group">
                                קריאת הצו
                                <ExternalLink className="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </a>
                        </div>
                    </li>

                    <li className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                        <Info className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                        <div>
                            <span className="font-bold text-slate-900 block mb-1">כל-זכות - זכותון יבוא אישי</span>
                            <p className="text-sm mb-2 leading-relaxed">
                                הסבר ידידותי לציבור על גביית מסים, מע"מ ועלויות נלוות ביבוא אישי.
                            </p>
                            <a href="https://www.kolzchut.org.il/he/%D7%96%D7%9B%D7%95%D7%AA%D7%95%D7%9F_%D7%91%D7%A0%D7%95%D7%A9%D7%90_%D7%99%D7%91%D7%95%D7%90_%D7%90%D7%99%D7%A9%D7%99_(%D7%97%D7%91%D7%99%D7%9C%D7%95%D7%AA_%D7%9E%D7%97%D7%95%22%D7%9C)" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 font-medium group">
                                כל-זכות
                                <ExternalLink className="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </a>
                        </div>
                    </li>

                    <li className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                        <FileText className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                        <div>
                            <span className="font-bold text-slate-900 block mb-1">דואר ישראל - משלוחים ומסים</span>
                            <p className="text-sm mb-2 leading-relaxed">
                                מידע תפעולי על תשלום מסים ועמלות טיפול, שימושי להבנת עלויות בפועל.
                            </p>
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
                            <p className="text-sm mb-2 leading-relaxed">
                                מקור הקשר כלכלי רחב על יוקר המחיה בישראל.
                            </p>
                            <a href="https://www.oecd.org/en/publications/oecd-economic-surveys-israel-2025_d6dd02bc-en/full-report/addressing-the-high-cost-of-living_bfe408a2.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 font-medium group">
                                דוח OECD
                                <ExternalLink className="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </a>
                        </div>
                    </li>

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
                </ul>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 lg:col-span-1">
                    <SectionHeading title="איך בנינו את המודל?" />
                    <div className="text-slate-600 leading-relaxed text-sm space-y-4">
                        <p>
                            זהו מודל תרחישים מייצג. מאחר שאין מאגר ציבורי מלא ואחיד לכל רכיבי יבוא אישי,
                            חילקנו את החבילות לשלוש רצועות ערך: עד 75$, בין 75$ ל-150$, ומעל 150$.
                        </p>
                        <p>
                            המודל בתרחישי 75$ ו-150$ כויל לסדרי הגודל שמופיעים במסמך המחקר של הכנסת:
                            מספר החבילות ושווי החבילות הפטורות עד 75$, וההיקף הכולל של פטור המע"מ.
                            המספרים מדויקים פחות מהמחקר עצמו, אך נשמרים עקביים עם ההיקף הרשמי כדי לשמור על ריאליזם.
                        </p>
                        <p>
                            בהתאם לכללים הכלליים של רשות המסים, מע"מ נגבה על ערך חייב במס (ובדין המלא עשויים להיכלל
                            גם רכיבים נלווים כמו שילוח וביטוח). לצורך פשטות, המודל מתמקד במע"מ בלבד, מתעלם ממכס ומס קנייה,
                            ומקרב את בסיס המס לערך המוצהר של החבילה.
                        </p>
                        <p>
                            לכן תיאור המע"מ במודל הוא פישוט של הכללים המשפטיים המלאים המופיעים באתר רשות המסים.
                        </p>
                        <div className="bg-blue-50/60 p-4 border border-blue-100 rounded-xl text-slate-800 space-y-2">
                            <p>
                                שלושת מדדי ה-KPI בדשבורד מוגדרים כך: ״מע״מ שנגבה ע״י המדינה״ מציג את סך גביית המע״מ בכל תרחיש,
                                ״חיסכון שנתי לצרכנים״ מחושב כהפרש בתשלומי הצרכנים הכוללים בין תרחיש 75$ לתרחיש 150$,
                                ו-״אובדן הכנסה לעסקים מקומיים״ מחושב כהפרש בהכנסה המקומית המשוערת בין שני התרחישים.
                            </p>
                            <p>
                                לצורך פישוט, חיסכון הצרכנים במודל נשען בעיקר על רכיב המע״מ ולכן אינו כולל את כל השפעות המחיר האפשריות בעולם האמיתי.
                            </p>
                        </div>
                        <p className="bg-slate-50 p-4 border border-slate-100 text-slate-800 rounded-xl">
                            <strong>תחליפיות (Substitution):</strong> כאשר צרכן קונה בחו"ל פריט בטווח 75$-150$,
                            אנו מניחים שחלק מהקניות היו מתבצעות אחרת בישראל. שיעור זה משמש כפרוקסי להשפעה על מחזורי מכירה מקומיים.
                        </p>
                    </div>
                </section>

                <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 lg:col-span-2 overflow-x-auto">
                    <SectionHeading
                        title="ההנחות המרכזיות"
                        subtitle="הערכים שלמטה הם הערכה תיאורטית לצורך חישוב כללי. בהינתן נתונים טובים יותר, המודל יעודכן בהתאם."
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
                        <span>אין בממצאים ייעוץ מס, ייעוץ משפטי או המלצה רגולטורית.</span>
                    </li>
                </ul>
            </section>

            <section className="bg-blue-50/60 p-8 rounded-2xl border border-blue-100 shadow-sm">
                <h2 className="text-xl md:text-2xl font-heading font-bold text-slate-900 mb-3">לקריאה נוספת ולהעמקה</h2>
                <p className="text-slate-600 text-sm md:text-base mb-4 leading-relaxed">
                    למי שרוצה להעמיק בהיבטים המשפטיים והכלכליים של הנושא, הנה כמה מקורות רשמיים נוספים.
                </p>
                <ul className="space-y-3 text-sm md:text-base">
                    <li>
                        <a
                            href="https://fs.knesset.gov.il/globaldocs/MMM/51fb27d8-dddf-f011-a866-005056aa9911/2_51fb27d8-dddf-f011-a866-005056aa9911_11_21353.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 font-medium"
                        >
                            מרכז המחקר והמידע של הכנסת: "תיאור וניתוח העלאת תקרת הפטור ממיסים ביבוא אישי" (PDF)
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.gov.il/he/pages/tax-importsofproducts"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 font-medium"
                        >
                            רשות המסים: מיסוי יבוא מוצרים לישראל
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </li>
                </ul>
            </section>

            <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <SectionHeading title="איך אפשר להשתמש במודל הזה?" />
                <div className="text-slate-700 leading-relaxed text-sm md:text-base space-y-3">
                    <p>משרד ממשלתי יכול להזין הנחות אחרות לגבי מספר החבילות והתפלגות הערכים, כדי לבחון תרחישים חלופיים.</p>
                    <p>ארגוני צרכנים יכולים להשתמש במודל כדי להדגיש את ההשפעה היחסית על קבוצות שונות של משקי בית.</p>
                    <p>עיתונאים וכלכלנים יכולים לשנות הנחות ולראות במהירות איך זה משנה את גודל הוויתורים בין הצרכנים, המדינה והעסקים.</p>
                </div>
            </section>
        </div>
    );
}
