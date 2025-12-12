import React, { useState } from 'react';
import { CATEGORIES, CategoryType } from '../data/gameData';
import { playSound } from '../utils/audio';

interface MainMenuProps {
    onSelectCategory: (id: CategoryType) => void;
}

export const MainMenu: React.FC<MainMenuProps> = ({ onSelectCategory }) => {
    const [showExtras, setShowExtras] = useState(false);

    // Split Categories
    const mainCats = CATEGORIES.filter(c => ['fiqh', 'tauhid', 'sejarah'].includes(c.id));
    const extraCats = CATEGORIES.filter(c => !['fiqh', 'tauhid', 'sejarah'].includes(c.id));

    // Decorative background blocks
    const decos = [
        { size: 'w-16 h-16', color: 'bg-white/5', top: '10%', left: '5%', delay: '0s' },
        { size: 'w-8 h-8', color: 'bg-white/10', top: '20%', right: '10%', delay: '2s' },
        { size: 'w-12 h-12', color: 'bg-white/5', bottom: '30%', left: '15%', delay: '1s' },
        { size: 'w-24 h-24', color: 'bg-white/5', top: '15%', right: '25%', delay: '3s' },
        { size: 'w-10 h-10', color: 'bg-white/5', bottom: '10%', right: '5%', delay: '1.5s' },
    ];

    const renderCategoryCard = (cat: typeof CATEGORIES[0]) => (
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
                relative overflow-hidden group rounded-lg border-b-8 p-6 md:p-8 flex flex-row md:flex-col items-center gap-6 transition-all w-full text-left md:text-center
                ${cat.disabled
                    ? 'bg-gray-700 border-gray-900 opacity-70 cursor-not-allowed'
                    : `${cat.color} border-black/30 hover:-translate-y-1 md:hover:-translate-y-2 hover:brightness-110 active:translate-y-1 active:border-b-0 shadow-xl`
                }
            `}
        >
            {/* 3D Box Effect Highlight */}
            <div className="absolute inset-0 border-t-4 border-l-4 border-white/20 pointer-events-none rounded-lg"></div>
            <div className="absolute inset-0 border-r-4 border-black/10 pointer-events-none rounded-lg"></div>

            <span className="text-5xl md:text-7xl filter drop-shadow-md md:group-hover:scale-110 transition-transform duration-300 shrink-0 min-w-[60px] text-center">
                {cat.icon}
            </span>
            <div className="z-10 w-full">
                <h3 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-wider text-shadow-sm leading-none mb-2">{cat.label}</h3>
                <p className="text-white/90 text-sm md:text-xl leading-tight font-sans opacity-90">{cat.desc}</p>
            </div>

            {/* Decorative Background Pattern */}
            <div className="absolute -bottom-4 -right-4 text-9xl opacity-10 rotate-12 select-none pointer-events-none">
                {cat.icon}
            </div>
        </button>
    );

    return (
        <div className="flex-1 flex flex-col items-center justify-start relative h-full w-full overflow-hidden">

            {/* Scrollable Content Container - Custom Scrollbar enabled here */}
            <div className="flex-1 w-full overflow-y-auto flex flex-col items-center text-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 to-gray-900 relative">

                {/* Background Floating Pixel Boxes */}
                {decos.map((d, i) => (
                    <div
                        key={i}
                        className={`absolute ${d.size} ${d.color} animate-float rounded-sm pointer-events-none z-0 border border-white/10`}
                        style={{
                            top: d.top,
                            left: d.left,
                            right: d.right,
                            bottom: d.bottom,
                            animationDelay: d.delay
                        }}
                    />
                ))}

                {/* Main Content Wrapper - flex-1 pushes footer down */}
                <div className="w-full max-w-[95%] px-0 md:px-12 pt-10 md:pt-16 pb-32 md:pb-12 flex flex-col items-center z-10 flex-1">

                    {/* HERO SECTION */}
                    <div className="mb-8 md:mb-12 relative shrink-0 mt-4 md:mt-8">
                        <h2 className="text-5xl md:text-8xl text-white font-bold text-shadow-lg relative z-10 drop-shadow-xl tracking-wider">
                            PILIH PETUALANGAN
                        </h2>
                        <div className="inline-block bg-black/30 px-6 py-2 rounded mt-2 backdrop-blur-sm border border-white/10">
                            <p className="text-base md:text-2xl text-yellow-300 font-bold tracking-wide">
                                Belajar Islam Menjadi Lebih Seru!
                            </p>
                        </div>
                    </div>

                    {/* MAIN CATEGORIES GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 w-full mb-8">
                        {mainCats.map(renderCategoryCard)}
                    </div>

                    {/* COLLAPSIBLE SECTION BUTTON */}
                    <button
                        onClick={() => {
                            playSound('click');
                            setShowExtras(!showExtras);
                        }}
                        className="mb-6 bg-gray-700 hover:bg-gray-600 text-white border-b-4 border-gray-900 px-6 py-3 rounded-lg font-bold text-xl flex items-center gap-2 btn-voxel transition-all w-full md:w-auto justify-center"
                    >
                        <span>{showExtras ? '▼' : '▶'}</span>
                        MENU LAINNYA (Quiz & Kalender)
                    </button>

                    {/* EXTRA CATEGORIES GRID (Collapsible) */}
                    {showExtras && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 w-full animate-[fade-in_0.3s]">
                            {extraCats.map(renderCategoryCard)}
                        </div>
                    )}

                    <footer className="mt-auto pt-12 text-white/60 text-xs md:text-sm flex flex-col items-center gap-1 shrink-0 mb-24 md:mb-8">
                        <p className="text-shadow-sm text-lg">Versi 1.0 (Beta) - SantriCraft Logic Quest</p>
                        <div className="bg-black/50 px-6 py-3 rounded mt-2 border border-white/20 max-w-[90%] break-words backdrop-blur-md shadow-lg">
                            <p className="font-bold text-yellow-400 text-base">Developer by :</p>
                            <p className="tracking-wide text-sm md:text-base font-mono">WASEP MAHASISWA UIN SSC NIM 2381130805</p>
                        </div>
                    </footer>
                </div>

                {/* FOOTER GRASS - Static in flow (bottom of scroll), high Z-index to avoid overlap */}
                <div className="w-full h-16 md:h-24 pointer-events-none z-50 shrink-0 mt-0 sm:relative fixed bottom-0 left-0 right-0">
                    {/* Dirt Block Body */}
                    <div className="w-full h-full bg-[#5d4037] relative shadow-[0_-4px_10px_rgba(0,0,0,0.5)]">
                        {/* Grass Top Layer */}
                        <div className="absolute top-0 left-0 right-0 h-4 md:h-6 bg-[#4caf50] border-t-4 border-[#66bb6a]"></div>

                        {/* Grass Pixels (Animated) */}
                        <div className="absolute top-4 md:top-6 left-0 right-0 h-2 md:h-3 w-full"
                            style={{
                                backgroundImage: 'linear-gradient(90deg, #4caf50 50%, transparent 50%)',
                                backgroundSize: '40px 100%',
                                animation: 'move-ground 2s linear infinite'
                            }}>
                        </div>
                        {/* Dirt Texture */}
                        <div className="absolute inset-0 opacity-10"
                            style={{
                                backgroundImage: 'radial-gradient(#000 10%, transparent 10%)',
                                backgroundSize: '40px 40px',
                                marginTop: '20px'
                            }}>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};