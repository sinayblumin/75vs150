import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';
import { cn } from '@/lib/utils';
import '@fontsource/rubik/400.css';
import '@fontsource/rubik/500.css';
import '@fontsource/rubik/600.css';
import '@fontsource/rubik/700.css';
import '@fontsource/rubik/900.css';
import 'fontsource-alef/400.css';
import 'fontsource-alef/700.css';

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
            <body className={cn("antialiased bg-slate-50 text-slate-900 min-h-screen font-sans selection:bg-blue-200 selection:text-blue-900 flex flex-col")}>
                <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
                    <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-0">
                        <div className="flex items-center gap-3">
                            <span className="bg-blue-600 text-white p-2 rounded-lg shadow-sm">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                            </span>
                            <h1 className="text-xl md:text-2xl font-heading font-black tracking-tight text-slate-800">
                                מודל יבוא אישי
                            </h1>
                        </div>
                        <nav className="flex space-x-6 space-x-reverse overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                            <a href="/" className="text-slate-600 hover:text-blue-600 font-semibold text-sm md:text-base whitespace-nowrap transition-colors decoration-2 underline-offset-4 hover:underline">ראשי</a>
                            <a href="/methodology" className="text-slate-600 hover:text-blue-600 font-semibold text-sm md:text-base whitespace-nowrap transition-colors decoration-2 underline-offset-4 hover:underline">מתודולוגיה ומקורות נתונים</a>
                        </nav>
                    </div>
                </header>
                <main className="max-w-6xl mx-auto px-4 md:px-6 w-full py-8 md:py-12 flex-1">
                    {children}
                </main>
                <footer className="mt-auto py-8 text-center text-xs md:text-sm text-slate-400 border-t border-slate-200/60 bg-white/50">
                    <div className="max-w-6xl mx-auto px-6">
                        <p>נבנה כפרויקט נתונים על ידי אנליסט BI. כל הזכויות שמורות.</p>
                    </div>
                </footer>
                <SpeedInsights />
            </body>
        </html>
    );
}
