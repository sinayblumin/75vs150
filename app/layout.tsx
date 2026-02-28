import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

export const metadata: Metadata = {
    title: 'יבוא אישי - מודל 75$ לעומת 150$',
    description: 'השוואת הפטור ממע״מ על יבוא אישי, מבוסס על נתוני מאפייני יבוא והנחות גלויות.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="he" dir="rtl">
            <body className="antialiased bg-gray-50 text-gray-900 min-h-screen">
                <header className="bg-white border-b border-gray-200">
                    <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                        <h1 className="text-xl font-bold text-blue-600">מודל יבוא אישי</h1>
                        <nav className="flex space-x-6 space-x-reverse">
                            <a href="/" className="text-gray-600 hover:text-blue-600 font-medium">ראשי</a>
                            <a href="/methodology" className="text-gray-600 hover:text-blue-600 font-medium">מתודולוגיה ומקורות</a>
                        </nav>
                    </div>
                </header>
                <main className="max-w-6xl mx-auto px-4 py-8">
                    {children}
                </main>
                <footer className="mt-12 py-6 text-center text-sm text-gray-500 border-t border-gray-200">
                    נבנה כפרויקט קוד פתוח. לא כלי ממשלתי רשמי.
                </footer>
                <SpeedInsights />
            </body>
        </html>
    );
}
