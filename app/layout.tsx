import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
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
    const navLinks = (
        <>
            <a href="/" className="text-sm md:text-base text-slate-600 hover:text-blue-600 font-semibold whitespace-nowrap transition-colors decoration-2 underline-offset-4 hover:underline">ראשי</a>
            <a href="/methodology" className="text-sm md:text-base text-slate-600 hover:text-blue-600 font-semibold whitespace-nowrap transition-colors decoration-2 underline-offset-4 hover:underline">מתודולוגיה ומקורות נתונים</a>
        </>
    );

    const socialLinks = (
        <>
            <a
                href="https://www.linkedin.com/in/sinayblumin/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-slate-600 hover:text-blue-600 transition-colors"
            >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.38 4.27 5.48v6.26zM5.34 7.43a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM7.12 20.45H3.56V9h3.56v11.45z" />
                </svg>
            </a>
            <a
                href="https://github.com/sinayblumin/75vs150"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-slate-600 hover:text-blue-600 transition-colors"
            >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.59 2 12.25c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.38-3.37-1.38-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0112 6.84c.85 0 1.7.12 2.5.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.64 1.03 2.76 0 3.94-2.35 4.81-4.58 5.06.36.32.68.95.68 1.92 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.29 10.29 0 0022 12.25C22 6.59 17.52 2 12 2z" />
                </svg>
            </a>
        </>
    );

    return (
        <html lang="he" dir="rtl">
            <body className={cn("antialiased bg-slate-50 text-slate-900 min-h-screen font-sans selection:bg-blue-200 selection:text-blue-900 flex flex-col")}>
                <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 shadow-sm backdrop-blur-md transition-all">
                    <div className="mx-auto w-full max-w-7xl px-4 py-3 sm:px-6">
                        <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-3">
                                <span className="bg-blue-600 text-white p-2 rounded-lg shadow-sm">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                                </span>
                                <h1 className="text-lg sm:text-xl md:text-2xl font-heading font-bold tracking-tight text-slate-800">
                                    <a href="/" className="hover:text-blue-600 transition-colors">
                                        העלאת פטור המע"מ:
                                        <br />
                                        75$ מול 150$
                                    </a>
                                </h1>
                            </div>
                            <nav className="hidden items-center gap-6 md:flex">
                                {navLinks}
                                <span className="h-5 w-px bg-slate-200" />
                                <div className="flex items-center gap-4">
                                    {socialLinks}
                                </div>
                            </nav>
                            <details className="relative md:hidden">
                                <summary className="flex list-none items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50 [&::-webkit-details-marker]:hidden">
                                    תפריט
                                    <svg className="h-4 w-4 text-slate-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0l-4.25-4.51a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </summary>
                                <div className="absolute left-0 mt-2 w-[min(88vw,20rem)] rounded-xl border border-slate-200 bg-white p-3 shadow-lg">
                                    <div className="space-y-1">
                                        <a href="/" className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">ראשי</a>
                                        <a href="/methodology" className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">מתודולוגיה ומקורות נתונים</a>
                                    </div>
                                    <div className="mt-3 flex items-center gap-4 border-t border-slate-100 pt-3">
                                        <span className="text-xs font-medium text-slate-500">קישורים</span>
                                        <div className="flex items-center gap-4">
                                            {socialLinks}
                                        </div>
                                    </div>
                                </div>
                            </details>
                        </div>
                    </div>
                </header>
                <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 sm:px-6 sm:py-8 md:py-10">
                    {children}
                </main>
                <footer className="mt-auto py-8 text-center text-xs md:text-sm text-slate-400 border-t border-slate-200/60 bg-white/50">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6">
                        <p>
                            פרויקט נתונים בקוד פתוח - נבנה ע"י{" "}
                            <a
                                href="https://sinayblumin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-slate-500 hover:text-blue-600 transition-colors"
                            >
                                סיני בלומין
                            </a>
                        </p>
                    </div>
                </footer>
                <SpeedInsights />
                <Analytics />
            </body>
        </html>
    );
}
