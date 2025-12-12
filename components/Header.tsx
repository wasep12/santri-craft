import React from 'react';

interface HeaderProps {
    level: number;
    categoryLabel?: string;
    isMuted: boolean;
    onToggleMute: () => void;
    onHome: () => void;
    onShowInfo: () => void;
    onShowHelp: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
    level, 
    categoryLabel, 
    isMuted, 
    onToggleMute, 
    onHome,
    onShowInfo,
    onShowHelp
}) => {
    
    return (
        <header className="sticky top-0 w-full bg-green-600 p-2 md:p-3 border-b-4 border-green-800 text-white flex justify-between items-center shadow-lg z-50 shrink-0 h-[60px] md:h-auto transition-all">
            {/* Logo Wrapper with Click Event */}
            <div 
                onClick={onHome}
                className="flex items-center gap-2 md:gap-3 cursor-pointer group hover:brightness-110 active:scale-95 transition-transform select-none"
                title="Kembali ke Menu Utama"
            >
                {/* Logo */}
                <div className="w-8 h-8 md:w-10 md:h-10 bg-green-800 border-2 border-yellow-400 flex items-center justify-center shadow-[2px_2px_0_0_rgba(0,0,0,0.5)] rounded-sm relative overflow-hidden">
                    <span className="text-yellow-400 text-xl md:text-3xl font-bold relative z-10 -mt-1" style={{ fontFamily: 'serif' }}>ش</span>
                </div>
                
                <div className="flex flex-col justify-center">
                    <h1 className="text-lg md:text-3xl tracking-widest text-shadow font-bold leading-none">SANTRICRAFT</h1>
                    {categoryLabel && <span className="text-[10px] md:text-sm text-green-200 uppercase tracking-wide leading-none">{categoryLabel}</span>}
                </div>
            </div>
            
            <div className="flex items-center gap-1 md:gap-3">
                
                {/* Info Button */}
                <button 
                    onClick={onShowInfo}
                    className="p-1 md:p-2 rounded hover:bg-green-700 active:translate-y-1 transition-all text-green-100 hover:text-white"
                    title="Tentang Game"
                >
                    <span className="material-icons">info</span>
                </button>

                {/* Help Button */}
                <button 
                    onClick={onShowHelp}
                    className="p-1 md:p-2 rounded hover:bg-green-700 active:translate-y-1 transition-all text-green-100 hover:text-white"
                    title="Panduan Bermain"
                >
                    <span className="material-icons">help_outline</span>
                </button>

                {/* Separator */}
                <div className="w-px h-6 bg-green-800/50 mx-1"></div>

                {/* Mute Button */}
                <button 
                    onClick={onToggleMute}
                    className={`
                        p-1 md:p-2 rounded-full flex items-center justify-center transition-all active:scale-90
                        ${isMuted ? 'text-red-300 hover:text-red-100' : 'text-white hover:text-yellow-300'}
                    `}
                    title={isMuted ? "Unmute Musik" : "Mute Musik"}
                >
                    <span className="material-icons">
                        {isMuted ? 'volume_off' : 'volume_up'}
                    </span>
                </button>

                {categoryLabel && (
                    <div className="hidden md:block bg-black/30 px-2 md:px-4 py-1 rounded text-sm md:text-xl border border-white/20 whitespace-nowrap ml-2">
                        Lvl <span className="text-yellow-300 font-bold">{level}</span>
                    </div>
                )}
            </div>
        </header>
    );
};