import assumptions from '@/data/assumptions.json';

export const metadata = {
    title: 'מתודולוגיה ומקורות - יבוא אישי',
};

export default function MethodologyPage() {
    return (
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 space-y-12">
            <section>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                    מתודולוגיה ומקורות נתונים
                </h1>
                <p className="text-lg text-gray-700 mb-10 border-b pb-8">
                    המודל באתר מבוסס על שילוב בין נתונים פתוחים של ממשלת ישראל, מידע רשמי על כללי יבוא אישי, ודוח של ה‑OECD בנושא יוקר המחיה בישראל, יחד עם מספר הנחות פשוטות ומוצהרות. כאן תמצאו פירוט של מקורות הנתונים, ההנחות וההגבלות.
                </p>

                <h2 className="text-2xl font-semibold mb-4 text-slate-800">
                    מקורות הנתונים
                </h2>
                <ul className="list-disc pr-6 text-gray-700 mb-4 text-sm md:text-base space-y-3 leading-relaxed">
                    <li>
                        <span className="font-semibold text-gray-900">מאגרי המידע הממשלתיים (data.gov.il):</span>
                        &nbsp;מאגר נתונים פתוח של משרדי הממשלה וגופי ציבור, ממנו נמשכו דוגמאות נתונים על יבוא וסחר חוץ לצורך כיול סדרי גודל והפצת ערכים.
                        {' '}<a href="https://data.gov.il/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">למעבר למאגרים</a>
                    </li>
                    <li>
                        <span className="font-semibold text-gray-900">אתר משרד הכלכלה – &quot;יבוא אישי&quot;:</span>
                        &nbsp;האתר הרשמי שמרכז מידע והנחיות לציבור על דרישות ליבוא מוצרי צריכה לישראל, כולל קישורים לצו יבוא אישי ולמדריך ליבוא אישי.
                        {' '}<a href="https://apps.economy.gov.il/Apps/PersonalImport/Home/Digital_Order" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">לאתר משרד הכלכלה</a>
                    </li>
                    <li>
                        <span className="font-semibold text-gray-900">צו יבוא אישי – מהדורה דיגיטלית:</span>
                        &nbsp;המסמך המשפטי שמגדיר מהו &quot;יבוא אישי&quot;, אילו מוצרים מותר לייבא, באילו כמויות, ואילו רשויות מעורבות.
                        {' '}<a href="https://www.gov.il/he/departments/legalInfo/personal_import_order" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">לקריאת צו יבוא אישי</a>
                    </li>
                    <li>
                        <span className="font-semibold text-gray-900">כל‑זכות – זכותון בנושא יבוא אישי:</span>
                        &nbsp;עמוד הסבר לציבור שמפרט בשפה פשוטה את הכללים לגבי פטור ממסים, מע&quot;מ ועמלות על חבילות מחו&quot;ל, וההבדל בין יבוא אישי ליבוא מסחרי.
                        {' '}<a href="https://www.kolzchut.org.il/he/%D7%96%D7%9B%D7%95%D7%AA%D7%95%D7%9F_%D7%91%D7%A0%D7%95%D7%A9%D7%90_%D7%99%D7%91%D7%95%D7%90_%D7%90%D7%99%D7%A9%D7%99_(%D7%97%D7%91%D7%99%D7%9C%D7%95%D7%AA_%D7%9E%D7%97%D7%95%22%D7%9C)" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">לזכותון כל-זכות</a>
                    </li>
                    <li>
                        <span className="font-semibold text-gray-900">דואר ישראל – תשלום מכס ומסי יבוא:</span>
                        &nbsp;מידע על אופן התשלום, העמלות והטיפול בחבילות החייבות במס, המשמש כבסיס להנחה על עמלות טיפול ממוצעות לחבילה.
                        {' '}<a href="https://doar.israelpost.co.il/content/tax-payments/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">למידע בדואר ישראל</a>
                    </li>
                    <li>
                        <span className="font-semibold text-gray-900">OECD Economic Survey: Israel 2025:</span>
                        &nbsp;דוח כלכלי של ה‑OECD שממנו נלקחה העובדה שישראל נמצאת בין המדינות בעלות רמת המחירים הגבוהה ביותר ב‑OECD, מה שממחיש את חשיבות התחרות בשוק המקומי.
                        {' '}<a href="https://www.oecd.org/en/publications/oecd-economic-surveys-israel-2025_d6dd02bc-en/full-report/addressing-the-high-cost-of-living_bfe408a2.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">לקריאת דוח OECD</a>
                    </li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4 text-slate-800 border-b pb-2">
                    איך בנינו את המודל?
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 mb-8">
                    <p>
                        בפועל, אין כיום לציבור נתונים מלאים ומפורטים על מספר החבילות ביבוא אישי לפי ערך מדויק, ולכן בנינו מודל תרחישים שמבוסס על סדרי גודל סבירים, חלוקה לשלוש קבוצות ערך וכללי המס הרשמיים.
                    </p>
                    <p>
                        המודל מניח מספר שנתי מסוים של חבילות ביבוא אישי, מחלק אותן לשלוש רצועות מחיר (מתחת ל‑75&nbsp;$, בין 75 ל‑150&nbsp;$ ומעל 150&nbsp;$), ומחשב עבור כל רצועה את גביית המע&quot;מ בתרחיש של פטור עד 75&nbsp;$ לעומת פטור עד 150&nbsp;$.
                    </p>
                    <p>
                        בנוסף, המודל מניח שחלק מהקניות בטווח 75–150&nbsp;$ &quot;מחליפות&quot; קנייה מעסק ישראלי ברכישה מאתר בחו&quot;ל, וכך מאפשר להעריך בצורה גסה את היקף המחזור שעובר מהמשק המקומי ליבוא אישי מקוון.
                    </p>
                </div>

                <h3 className="text-xl font-semibold mb-2 text-slate-800">
                    ההנחות המרכזיות במודל
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed text-sm md:text-base">
                    הטבלה הבאה מציגה את ההנחות המשמעותיות ביותר ששימשו לחישוב התוצאות בדשבורד. כל הערכים ניתנים לשינוי בקוד, והם מתוארים כאן כדי שהקוראים יוכלו להבין מה עומד מאחורי כל מספר.
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
                <h2 className="text-2xl font-semibold mb-4 text-slate-800 border-b pb-2">
                    מגבלות ואזהרות
                </h2>
                <ul className="list-disc pr-6 text-gray-700 mb-4 text-sm md:text-base space-y-3 leading-relaxed">
                    <li>
                        <strong className="text-red-600">זהו מודל תרחישים, לא תחזית.</strong> הוא נועד להמחשה ולדיון ציבורי, ולא לשמש בסיס לקבלת החלטות רגולטוריות או עסקיות.
                    </li>
                    <li>
                        ההנחות על מספר החבילות, התפלגות הערכים ושיעור ההחלפה בין קנייה מקומית לקנייה מחו&quot;ל הן הערכות בלבד, שנועדו לשקף תמונה סבירה ולא נתונים רשמיים.
                    </li>
                    <li>
                        המודל מניח שכל החיסכון במע&quot;מ עובר לצרכנים, ואינו מתחשב בשינויים אפשריים במחיר שהספקים בחו&quot;ל גובים בפועל.
                    </li>
                    <li>
                        לא נלקחו בחשבון השפעות דינמיות כמו שינוי בהרגלי הקנייה, התאמות מחירים מצד קמעונאים בישראל, או שינויים בתקציב המדינה בעקבות אובדן הכנסות ממסים.
                    </li>
                    <li>
                        אין בממצאים משום ייעוץ מס, ייעוץ משפטי או המלצה כלכלית כלשהי.
                    </li>
                </ul>
            </section>

            <section className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-b border-blue-200 pb-2">
                    למה בחרנו להציג את הנתונים כך?
                </h2>
                <div className="text-blue-900 leading-relaxed space-y-3">
                    <p>
                        מדיניות מס כמו תקרת הפטור ממע&quot;מ על יבוא אישי משפיעה בו‑זמנית על שלושה צדדים: הצרכנים, עסקים בישראל והכנסות המדינה. לעיתים הדיון הציבורי מתמקד רק בצד אחד – למשל ביוקר המחיה – ומתעלם מהאחרים.
                    </p>
                    <p>
                        הפרויקט הזה מנסה להציג על אותו מסך את שלושת האינטרסים: כמה הציבור מרוויח, כמה המדינה מפסידה וכמה פעילות כלכלית עלולה לזוז מעסקים מקומיים לחו&quot;ל. גם אם המודל מבוסס על הנחות, עצם השקיפות מסייעת להבין טוב יותר את גודל הוויתורים.
                    </p>
                    <p>
                        כל המספרים באתר ניתנים להתאמה בקוד, כך שמקבלי החלטות, עיתונאים ואזרחים סקרנים יכולים לשנות את ההנחות, להריץ את המודל מחדש ולהגיע למסקנות שלהם.
                    </p>
                </div>
            </section>
        </div>
    );
}
