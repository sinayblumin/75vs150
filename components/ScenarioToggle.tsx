type ScenarioToggleProps = {
    activeScenario: 75 | 150;
    onScenarioChange: (val: 75 | 150) => void;
};

export function ScenarioToggle({ activeScenario, onScenarioChange }: ScenarioToggleProps) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-6">
            <div className="flex flex-col items-center gap-3 md:flex-row md:items-center md:justify-between md:gap-4">
                <p className="text-center text-sm font-medium text-slate-800 sm:text-base md:text-right">
                    בחרו תרחיש להשוואה:
                </p>
                <div className="inline-flex w-full max-w-2xl flex-col gap-1 overflow-hidden rounded-xl bg-slate-200/60 p-1 shadow-inner sm:w-auto sm:flex-row sm:gap-0">
                    <button
                        onClick={() => onScenarioChange(75)}
                        className={`rounded-lg border-0 px-4 py-3 text-sm font-bold outline-none ring-0 transition-all duration-300 sm:px-8 sm:py-4 sm:text-base ${activeScenario === 75
                                ? 'bg-white shadow-sm text-blue-600 ring-2 ring-blue-500/20'
                                : 'text-slate-500 hover:text-slate-800 hover:bg-white/50'
                            }`}
                        aria-pressed={activeScenario === 75}
                    >
                        פטור עד 75$ (מצב נוכחי)
                    </button>
                    <button
                        onClick={() => onScenarioChange(150)}
                        className={`flex items-center justify-center gap-2 rounded-lg border-0 px-4 py-3 text-sm font-bold outline-none ring-0 transition-all duration-300 sm:px-8 sm:py-4 sm:text-base ${activeScenario === 150
                                ? 'bg-white shadow-sm text-blue-600 ring-2 ring-blue-500/20'
                                : 'text-slate-500 hover:text-slate-800 hover:bg-white/50'
                            }`}
                        aria-pressed={activeScenario === 150}
                    >
                        <span className={activeScenario === 150 ? 'animate-pulse text-accent-DEFAULT' : ''}>✨</span>
                        פטור עד 150$ (תרחיש מוצע)
                    </button>
                </div>
            </div>
        </div>
    );
}
