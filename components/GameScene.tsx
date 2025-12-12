import React from 'react';
import { GameStatus } from '../types';
import { Character } from './Character';
import { CategoryType } from '../data/gameData';

interface GameSceneProps {
    status: GameStatus;
    title: string;
    description: string;
    category: CategoryType;
    // onBack removed as it is handled by Header/Modal now
}

export const GameScene: React.FC<GameSceneProps> = ({ status, title, description, category }) => {
    
    // Logic update: Only show Faucet/Wudu scene if the title explicitly mentions "Wudu"
    const isWudu = category === 'fiqh' && title.toLowerCase().includes('wudu');
    
    // Dynamic BG Sky Color
    const getBgColor = () => {
        switch(category) {
            case 'tauhid': return 'bg-[#87CEEB]'; // Sky Blue
            case 'sejarah': return 'bg-orange-200';
            default: return 'bg-[#87CEEB]'; // Default Minecraft Sky
        }
    };

    // Render Minecraft Cloud
    const PixelCloud = ({ size, top, left, delay, opacity }: { size: string, top: string, left: string, delay: string, opacity: string }) => (
        <div 
            className={`absolute bg-white ${opacity} animate-cloud select-none`}
            style={{ 
                top, 
                left, 
                width: size, 
                height: `calc(${size} / 2)`,
                animationDelay: delay,
                boxShadow: '8px 8px 0 rgba(0,0,0,0.1)' 
            }}
        >
            {/* Cloud Details to make it blocky */}
            <div className="absolute -top-[50%] left-[15%] w-[70%] h-full bg-white"></div>
        </div>
    );

    return (
        <section className={`
            sticky top-0 z-40 
            w-full md:w-1/2 
            bg-cover bg-center 
            relative p-4 md:p-8
            flex flex-col justify-center items-center 
            overflow-hidden shrink-0
            shadow-md md:shadow-none
            h-[45vh] md:h-auto
        `}>
             {/* Dynamic Overlay */}
             <div className={`absolute inset-0 opacity-90 z-0 ${category === 'sejarah' ? 'bg-orange-100' : 'bg-[#87CEEB]'}`}></div>

            {/* Scene Container - MADE RESPONSIVE */}
            <div className="relative z-10 w-full max-w-sm md:max-w-full aspect-square bg-[#87CEEB] border-4 border-gray-700 shadow-2xl rounded-xl overflow-hidden group mx-auto">
                
                {/* Minecraft Sky & Clouds */}
                <div className={`absolute top-0 w-full h-1/2 ${getBgColor()} overflow-hidden`}>
                     <PixelCloud size="120px" top="15%" left="-20%" delay="0s" opacity="opacity-90" />
                     <PixelCloud size="80px" top="30%" left="-20%" delay="5s" opacity="opacity-70" />
                     <PixelCloud size="160px" top="10%" left="-20%" delay="12s" opacity="opacity-80" />
                </div> 

                {/* Minecraft Grass Block Floor */}
                <div className="absolute bottom-0 w-full h-1/2 bg-[#5d4037] border-t-4 border-[#3e2723]">
                    {/* Grass Top Layer */}
                    <div className="absolute top-0 w-full h-[15%] bg-[#4caf50] border-b-4 border-[#2e7d32]"></div>
                    {/* Random Grass Pixels hanging down */}
                    <div className="absolute top-[15%] w-full h-[5%] bg-transparent"
                         style={{
                             backgroundImage: 'linear-gradient(90deg, #4caf50 50%, transparent 50%)',
                             backgroundSize: '20px 100%'
                         }}
                    ></div>
                    {/* Dirt Texture */}
                    <div className="absolute inset-0 opacity-10" 
                         style={{ backgroundImage: 'radial-gradient(#000 10%, transparent 10%)', backgroundSize: '20px 20px', marginTop: '40px' }}>
                    </div>
                </div>
                
                {/* Modular Character Component */}
                <Character 
                    status={status} 
                    category={category}
                    className={`
                        absolute z-20 transition-all duration-1000 origin-bottom
                        ${isWudu 
                            ? `bottom-[8%] /* LOWERED POSITION to fix clipping */
                               w-[22%] h-auto aspect-[0.6] 
                               ${status === 'success' ? 'left-[45%]' : 'left-[15%]'}` 
                            : `/* Non-Wudu (Salat/Tauhid): Close Up / Center */
                               bottom-[8%] /* LOWERED POSITION */
                               left-1/2 transform -translate-x-1/2
                               w-[32%] h-auto aspect-[0.6]` 
                        }
                    `}
                />

                {/* Faucet Structure (Only for Wudu specific titles) */}
                {isWudu && (
                <div className="absolute bottom-[8%] right-[15%] z-10 w-[15%] h-[40%]">
                    {/* Vertical Pipe Stand */}
                    <div className="w-[25%] h-full bg-gray-500 border-2 border-gray-700 absolute bottom-0 right-0"></div>
                    
                    {/* Faucet Head Assembly */}
                    <div className="absolute top-0 right-0 w-[90%] h-[20%]">
                        <div className="absolute top-0 right-0 w-full h-[50%] bg-gray-500 border-2 border-gray-700"></div>
                        <div className="absolute top-[20%] right-[80%] w-[30%] h-[60%] bg-gray-400 border border-black"></div>
                        
                        {/* Handle */}
                        <div className="absolute -top-[40%] right-[20%] w-[60%] h-[30%] bg-red-600 border border-black rounded-sm"></div>
                        
                        {/* Water Flow */}
                        <div className={`
                            absolute top-[60%] right-[85%] w-[20%] bg-blue-400 z-0
                            transition-all duration-500 ease-in-out opacity-80
                            ${status === 'success' ? 'h-[250%] animate-pulse' : 'h-0'}
                        `}></div>
                    </div>

                    {/* Water Splash */}
                     <div className={`
                        absolute -bottom-[5%] right-[40%] w-[120%] h-[15%] bg-blue-300 rounded-full blur-sm
                        transition-opacity duration-300
                        ${status === 'success' ? 'opacity-100 animate-bounce' : 'opacity-0'}
                    `}></div>
                </div>
                )}
                
                {/* Decorative Prop for Sejarah (Pyramid/Dune) */}
                {category === 'sejarah' && (
                     <div className="absolute bottom-[8%] right-[5%] w-0 h-0 border-l-[6vw] border-l-transparent border-b-[8vw] border-b-yellow-800 border-r-[6vw] border-r-transparent opacity-80"></div>
                )}

            </div>

            {/* Mission Card */}
            <div className="relative z-10 mt-2 md:mt-6 bg-white border-2 md:border-4 border-gray-800 p-2 md:p-4 rounded-lg max-w-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] w-full">
                <h3 className="text-sm md:text-xl text-orange-600 font-bold mb-1 uppercase text-center md:text-left">MISI: {title}</h3>
                <p className="text-xs md:text-base text-gray-700 leading-tight text-center md:text-left">
                    {description}
                </p>
            </div>
        </section>
    );
};