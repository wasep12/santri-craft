import React from 'react';
import { CATEGORIES, CategoryType } from '../data/gameData';
import { playSound } from '../utils/audio';

interface MainMenuProps {
    onSelectCategory: (id: CategoryType) => void;
}

export const MainMenu: React.FC<MainMenuProps> = ({ onSelectCategory }) => {
    // Decorative background blocks
    const decos = [
        { size: 'w-16 h-16', color: 'bg-white/5', top: '10%', left: '5%', delay: '0s' },
        { size: 'w-8 h-8', color: 'bg-white/10', top: '20%', right: '10%', delay: '2s' },
        { size: 'w-12 h-12', color: 'bg-white/5', bottom: '30%', left: '15%', delay: '1s' },
        { size: 'w-24 h-24', color: 'bg-white/5', top: '15%', right: '25%', delay: '3s' },
        { size: 'w-10 h-10', color: 'bg-white/5', bottom: '10%', right: '5%', delay: '1.5s' },
    ];

    return (
        <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-6 text-center animate-[fade-in_0.5s] overflow-hidden w-full relative">
            
            {/* Background Floating Pixel Boxes */}
            {decos.map((d, i) => (
                <div 
                    key={i} 
                    className={`absolute ${d.size} ${d.color} animate-float rounded-sm pointer-events-none -z-0 border border-white/10`}
                    style={{ 
                        top: d.top, 
                        left: d.left, 
                        right: d.right, 
                        bottom: d.bottom,
                        animationDelay: d.delay 
                    }}
                />
            ))}

            <div className="mb-4 md:mb-8 relative shrink-0 z-10">
                <h2 className="text-4xl md:text-7xl text-white font-bold text-shadow-lg relative z-10 drop-shadow-xl tracking-wider">
                    PILIH PETUALANGAN
                </h2>
                <div className="inline-block bg-black/30 px-4 py-1 rounded mt-2 backdrop-blur-sm border border-white/10">
                    <p className="text-sm md:text-xl text-yellow-300 font-bold tracking-wide">
                        Belajar Islam Menjadi Lebih Seru!
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl w-full pb-4 z-10 px-4">
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
                            relative overflow-hidden group rounded-lg border-b-8 p-4 md:p-6 flex flex-row md:flex-col items-center gap-4 transition-all w-full
                            ${cat.disabled 
                                ? 'bg-gray-700 border-gray-900 opacity-70 cursor-not-allowed' 
                                : `${cat.color} border-black/30 hover:-translate-y-1 md:hover:-translate-y-2 hover:brightness-110 active:translate-y-1 active:border-b-0`
                            }
                        `}
                    >
                        {/* 3D Box Effect Highlight */}
                        <div className="absolute inset-0 border-t-4 border-l-4 border-white/20 pointer-events-none rounded-lg"></div>
                        <div className="absolute inset-0 border-r-4 border-black/10 pointer-events-none rounded-lg"></div>

                        <span className="text-4xl md:text-6xl filter drop-shadow-md md:group-hover:scale-110 transition-transform duration-300 shrink-0">
                            {cat.icon}
                        </span>
                        <div className="z-10 text-left md:text-center">
                            <h3 className="text-xl md:text-3xl font-bold text-white uppercase tracking-wider text-shadow-sm">{cat.label}</h3>
                            <p className="text-white/90 text-xs md:text-lg leading-tight mt-1 md:mt-2 font-sans">{cat.desc}</p>
                        </div>
                        
                        {/* Decorative Background Pattern */}
                        <div className="absolute -bottom-4 -right-4 text-8xl md:text-9xl opacity-10 rotate-12 select-none pointer-events-none">
                            {cat.icon}
                        </div>
                    </button>
                ))}
            </div>

            <footer className="mt-auto mb-16 md:mb-20 text-white/60 text-xs md:text-sm flex flex-col items-center gap-1 shrink-0 z-10">
                <p className="text-shadow-sm">Versi 1.0 (Beta) - SantriCraft Logic Quest</p>
                <div className="bg-black/50 px-4 py-2 rounded mt-2 border border-white/20 max-w-[90%] break-words backdrop-blur-md shadow-lg">
                    <p className="font-bold text-yellow-400">Developer by :</p>
                    <p className="tracking-wide text-[10px] md:text-sm font-mono">WASEP MAHASISWA UIN SSC NIM 2381130805</p>
                </div>
            </footer>

            {/* Minecraft-style Grass Floor Decoration */}
            <div className="absolute bottom-0 left-0 right-0 h-16 md:h-20 pointer-events-none z-0">
                 {/* Dirt Block Body */}
                 <div className="w-full h-full bg-[#5d4037] relative">
                    {/* Grass Top Layer */}
                    <div className="absolute top-0 left-0 right-0 h-4 md:h-6 bg-[#4caf50]"></div>
                    
                    {/* Random Grass Pixels Dripping Down */}
                    <div className="absolute top-4 md:top-6 left-0 right-0 h-2 md:h-3 w-full opacity-100" 
                         style={{
                             backgroundImage: 'linear-gradient(90deg, #4caf50 50%, transparent 50%)',
                             backgroundSize: '20px 100%'
                         }}>
                    </div>
                    <div className="absolute top-6 md:top-9 left-2 right-0 h-2 md:h-2 w-full opacity-100" 
                         style={{
                             backgroundImage: 'linear-gradient(90deg, #4caf50 25%, transparent 25%)',
                             backgroundSize: '40px 100%'
                         }}>
                    </div>

                    {/* Dirt Texture Dots */}
                    <div className="absolute inset-0 opacity-10" 
                         style={{
                             backgroundImage: 'radial-gradient(#000 10%, transparent 10%)', 
                             backgroundSize: '16px 16px',
                             marginTop: '20px'
                         }}>
                    </div>
                 </div>
            </div>
        </div>
    );
};