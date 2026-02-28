import assumptions from '@/data/assumptions.json';

export const metadata = {
    title: 'מתודולוגיה ומקורות - יבוא אישי',
};

export default function MethodologyPage() {
    return (
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 space-y-12">
            <section>
                <h2 className="text-3xl font-bold mb-6 text-slate-800 border-b pb-4">מקורות נתונים</h2>
                <ul className="list-disc leading-relaxed text-gray-700 pr-6 space-y-4">
                    <li>
                        <strong>מאגר מידע ממשלתי עולמי בישראל (data.gov.il)</strong> – המודל נעזר בהנחות על היקפי היבוא המבוססים על מדגמים של מידע גלוי.{' '}
                        <a
                            href="https://data.gov.il/docs"
                            target="_blank"
                            className="text-blue-600 hover:underline"
                        >
                            לצפייה בנתונים
                        </a>
                    </li>
                    <li>
                        <strong>זכותון יבוא אישי (כל-זכות)</strong> – מתווה את מפרט הטבות המס ואת חוקי המכס, המע״מ ועלויות השילוח של חבילות לישראל.{' '}
                        <a
                            href="https://www.kolzchut.org.il/he/%D7%96%D7%9B%D7%95%D7%AA%D7%95%D7%9F_%D7%91%D7%A0%D7%95%D7%A9%D7%90_%D7%99%D7%91%D7%95%D7%90_%D7%90%D7%99%D7%A9%D7%99_(%D7%97%D7%91%D7%99%D7%9C%D7%95%D7%AA_%D7%9E%D7%97%D7%95%22%D7%9C)"
                            target="_blank"
                            className="text-blue-600 hover:underline"
                        >
                            למדריך כל-זכות
                        </a>
                    </li>
                    <li>
                        <strong>משרד הכלכלה - שער יבוא אישי</strong> – תיעוד מוצרים וסיווג יבוא לטובת משקי בית.{' '}
                        <a
                            href="https://apps.economy.gov.il/Apps/PersonalImport/Home/Digital_Order"
                            target="_blank"
                            className="text-blue-600 hover:underline"
                        >
                            לאתר משרד הכלכלה
                        </a>
                    </li>
                    <li>
                        <strong>דואר ישראל (תשלומי מס מנקודת מבט אופרטיבית)</strong> – תשלומי עמלות למכס בישראל ולמשלוחים נלווים.{' '}
                        <a
                            href="https://doar.israelpost.co.il/content/tax-payments/"
                            target="_blank"
                            className="text-blue-600 hover:underline"
                        >
                            לפרטי דואר ישראל
                        </a>
                    </li>
                    <li>
                        <strong>ה-OECD: הסקר הכלכלי של ישראל 2025</strong> – ממצאים על יוקר המחיה בישראל כהצדקה לתחרות שמעודדת יבוא ומפחיתה מחירים.{' '}
                        <a
                            href="https://www.oecd.org/en/publications/oecd-economic-surveys-israel-2025_d6dd02bc-en/full-report/addressing-the-high-cost-of-living_bfe408a2.html"
                            target="_blank"
                            className="text-blue-600 hover:underline"
                        >
                            לקריאת דוח OECD
                        </a>
                    </li>
                </ul>
            </section>

            <section>
                <h2 className="text-3xl font-bold mb-6 text-slate-800 border-b pb-4">הנחות המודל הבסיסיות</h2>
                <p className="mb-4 text-gray-700 leading-relaxed">
                    מכיוון שאין מידע ציבורי זמין ומדויק על התפלגות כלל החבילות בקנייה אישית, אנו בונים מודל תרחישים (Scenario Model). להלן ההנחות והערכים המובנים במודל:
                </p>
                <div className="overflow-x-auto border rounded-lg shadow-sm">
                    <table className="min-w-full bg-white divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">פרמטר בחישוב</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">ערך שהוכנס למודל</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            <tr>
                                <td className="px-6 py-4 text-sm font-medium text-gray-900 border-b">כמות חבילות שנתית משוערת בישראל</td>
                                <td className="px-6 py-4 text-sm text-gray-500 border-b">{assumptions.annual_parcels_total.toLocaleString()} חבילות</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 text-sm font-medium text-gray-900 border-b">חלוקה: מתחת ל-75$</td>
                                <td className="px-6 py-4 text-sm text-gray-500 border-b">{(assumptions.share_under_75 * 100).toFixed(0)}% (שווי ממוצע: {assumptions.avg_value_under_75}$)</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 text-sm font-medium text-gray-900 border-b">חלוקה: בין 75$ ל-150$</td>
                                <td className="px-6 py-4 text-sm text-gray-500 border-b">{(assumptions.share_75_to_150 * 100).toFixed(0)}% (שווי ממוצע: {assumptions.avg_value_75_to_150}$)</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 text-sm font-medium text-gray-900 border-b">חלוקה: מעל 150$</td>
                                <td className="px-6 py-4 text-sm text-gray-500 border-b">{(assumptions.share_over_150 * 100).toFixed(0)}% (שווי ממוצע: {assumptions.avg_value_over_150}$)</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 text-sm font-medium text-gray-900 border-b">אפקט המרה (קנייה מקומית מוחלפת ליבוא)</td>
                                <td className="px-6 py-4 text-sm text-gray-500 border-b">{(assumptions.substitution_rate * 100).toFixed(0)}% במדרגות שבהן הפטור מורחב</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section>
                <h2 className="text-3xl font-bold mb-6 text-slate-800 border-b pb-4">מגבלות (Limitations) ודיסקליימר</h2>
                <p className="text-gray-700 leading-relaxed space-y-2 mb-6">
                    <strong className="text-red-600 block mb-2">שימו לב: מערכת זו אינה תחזית סופית או רשמית.</strong>
                    המודל משתמש בהנחות קבועות מראש ללא אלסטיות טבעית (כלומר, הוא מניח כי כמות ההזמנות שנתזמת זהה בשני התרחישים למרות הפחתת המס).<br />
                    בפועל, מיסוי מייצר שינוי התנהגותי (Behavioral change). עוד נציין שהמודל מקצה את כל פירות הפטור למגזר הצרכני מבלי להתחשב בעלויות שוליות או שילוח שעלולות להיות מגולגלות חזרה אליהם.<br />
                    מוערך כאן "פדיון מקומי אבוד" כמדד ספקולטיבי (Proxy) לפגיעה בבתי עסק, כדי שניתן יהיה לבצע השוואה מלאה ולחשוב על תעדוף הכלכלי.
                </p>
            </section>

            <section className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h2 className="text-2xl font-bold mb-3 text-blue-900">מדוע יצרנו כלי זה? (BI Perspective)</h2>
                <p className="text-blue-800 leading-relaxed">
                    מדיניות מורכבת של מיסוי משפיעה על יוקר המחיה באופן מובהק. החלטות כגון שינוי רף הפטור ממס משפיעות מצד אחד על הכנסות המדינה, ומצד שני מחזירות מונים דרמטיים לרווחת הפרט בישראל אל מול עסקים מקומיים. כלי מבוסס מודל שקוף נועד להמחיש את סבך ההקשרים הזה לאזרחים ולספק ידע למקבלי החלטות, בדיוק בנקודת המפגש בין צרכנים שדורשים הקלה קהילתית לבין התקציב הציבורי.
                </p>
            </section>
        </div>
    );
}
