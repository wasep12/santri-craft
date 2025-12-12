import React from 'react';

interface HeaderProps {
    level: number;
    categoryLabel?: string;
    isMuted: boolean;
    onToggleMute: () => void;
    onHome: () => void; // Kept for interface compatibility but unused in UI
}

export const Header: React.FC<HeaderProps> = ({ level, categoryLabel, isMuted, onToggleMute }) => {
    return (
        <header className="sticky top-0 w-full bg-green-600 p-2 md:p-3 border-b-4 border-green-800 text-white flex justify-between items-center shadow-lg z-50 shrink-0 h-[60px] md:h-auto transition-all">
            <div className="flex items-center gap-2 md:gap-3">
                {/* Logo */}
                <div className="w-8 h-8 md:w-10 md:h-10 bg-green-800 border-2 border-yellow-400 flex items-center justify-center shadow-[2px_2px_0_0_rgba(0,0,0,0.5)] rounded-sm relative overflow-hidden">
                    <span className="text-yellow-400 text-xl md:text-3xl font-bold relative z-10 -mt-1" style={{ fontFamily: 'serif' }}>ش</span>
                </div>
                
                <div className="flex flex-col justify-center">
                    <h1 className="text-lg md:text-3xl tracking-widest text-shadow font-bold leading-none">SANTRICRAFT</h1>
                    {categoryLabel && <span className="text-[10px] md:text-sm text-green-200 uppercase tracking-wide leading-none">{categoryLabel}</span>}
                </div>
            </div>
            
            <div className="flex items-center gap-2 md:gap-4">
                <button 
                    onClick={onToggleMute}
                    className="w-8 h-8 md:w-10 md:h-10 bg-black/20 hover:bg-black/40 rounded border border-white/20 flex items-center justify-center text-sm md:text-xl active:scale-95 transition-transform"
                    title={isMuted ? "Unmute Musik" : "Mute Musik"}
                >
                    {isMuted ? '🔇' : '🔊'}
                </button>

                {categoryLabel && (
                    <div className="bg-black/30 px-2 md:px-4 py-1 rounded text-sm md:text-xl border border-white/20 whitespace-nowrap">
                        Lvl <span className="text-yellow-300 font-bold">{level}</span>
                    </div>
                )}
            </div>
        </header>
    );
};