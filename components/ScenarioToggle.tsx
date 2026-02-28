type ScenarioToggleProps = {
    activeScenario: 75 | 150;
    onScenarioChange: (val: 75 | 150) => void;
};

export function ScenarioToggle({ activeScenario, onScenarioChange }: ScenarioToggleProps) {
    return (
        <div className="bg-slate-50 p-6 border border-slate-200 rounded-2xl">
            <p className="text-slate-800 mb-4 font-medium text-center md:text-right">
                בחרו תרחיש להשוואה:
            </p>
            <div className="flex justify-center md:justify-start">
                <div className="inline-flex bg-slate-200/60 rounded-xl p-1 shadow-inner overflow-hidden flex-col sm:flex-row gap-1 sm:gap-0">
                    <button
                        onClick={() => onScenarioChange(75)}
                        className={`px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold transition-all duration-300 text-sm md:text-base outline-none ring-0 border-0 ${activeScenario === 75
                                ? 'bg-white shadow-sm text-blue-600 ring-2 ring-blue-500/20'
                                : 'text-slate-500 hover:text-slate-800 hover:bg-white/50'
                            }`}
                        aria-pressed={activeScenario === 75}
                    >
                        פטור עד 75$ (מצב נוכחי)
                    </button>
                    <button
                        onClick={() => onScenarioChange(150)}
                        className={`px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold transition-all duration-300 text-sm md:text-base outline-none ring-0 border-0 flex items-center justify-center gap-2 ${activeScenario === 150
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
