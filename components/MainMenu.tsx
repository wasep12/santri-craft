import React from 'react';
import { CATEGORIES, CategoryType } from '../data/gameData';
import { playSound } from '../utils/audio';

interface MainMenuProps {
    onSelectCategory: (id: CategoryType) => void;
}

export const MainMenu: React.FC<MainMenuProps> = ({ onSelectCategory }) => {
    return (
        <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-6 text-center animate-[fade-in_0.5s] overflow-y-auto w-full">
            <div className="mb-4 md:mb-8 relative shrink-0">
                <div className="absolute -inset-4 bg-green-500 rounded-full opacity-20 animate-pulse hidden md:block"></div>
                <h2 className="text-3xl md:text-6xl text-white font-bold text-shadow relative z-10">PILIH PETUALANGAN</h2>
                <p className="text-sm md:text-xl text-yellow-200 mt-2">Belajar Islam Menjadi Lebih Seru!</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl w-full pb-4">
                {CATEGORIES.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => {
                            if (!cat.disabled) {
                                playSound('select');
                                onSelectCategory(cat.id as CategoryType);
                            } else {
                                playSound('error');
                            }
                        }}
                        className={`
                            relative overflow-hidden group rounded-xl border-b-4 md:border-b-8 border-black/30 p-4 md:p-6 flex flex-row md:flex-col items-center gap-4 transition-all w-full
                            ${cat.disabled ? 'bg-gray-600 opacity-70 cursor-not-allowed' : `${cat.color} hover:-translate-y-1 md:hover:-translate-y-2 hover:brightness-110 active:translate-y-1 active:border-b-2 md:active:border-b-4`}
                        `}
                    >
                        <span className="text-4xl md:text-6xl filter drop-shadow-md md:group-hover:scale-110 transition-transform duration-300 shrink-0">
                            {cat.icon}
                        </span>
                        <div className="z-10 text-left md:text-center">
                            <h3 className="text-xl md:text-3xl font-bold text-white uppercase tracking-wider">{cat.label}</h3>
                            <p className="text-white/90 text-xs md:text-lg leading-tight mt-1 md:mt-2 font-sans">{cat.desc}</p>
                        </div>
                        
                        {/* Decorative Background Pattern */}
                        <div className="absolute -bottom-4 -right-4 text-8xl md:text-9xl opacity-10 rotate-12 select-none pointer-events-none">
                            {cat.icon}
                        </div>
                    </button>
                ))}
            </div>

            <footer className="mt-4 md:mt-12 text-white/60 text-xs md:text-sm flex flex-col items-center gap-1 shrink-0 pb-4">
                <p>Versi 1.0 (Beta) - SantriCraft Logic Quest</p>
                <div className="bg-black/30 px-4 py-2 rounded-lg mt-2 border border-white/10 max-w-[90%] break-words">
                    <p className="font-bold text-yellow-400">Developer by :</p>
                    <p className="tracking-wide text-[10px] md:text-sm">WASEP MAHASISWA UIN SSC NIM 2381130805</p>
                </div>
            </footer>
        </div>
    );
};