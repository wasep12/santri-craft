import React from 'react';
import { GameStatus } from '../types';
import { Character } from './Character';
import { CategoryType } from '../data/gameData';

interface GameSceneProps {
    status: GameStatus;
    title: string;
    description: string;
    category: CategoryType;
}

export const GameScene: React.FC<GameSceneProps> = ({ status, title, description, category }) => {
    
    const isWudu = category === 'fiqh'; 
    
    // Dynamic BG
    const getBgColor = () => {
        switch(category) {
            case 'tauhid': return 'bg-blue-300';
            case 'sejarah': return 'bg-orange-200';
            default: return 'bg-blue-300'; // Fiqh
        }
    };

    const getGroundColor = () => {
        switch(category) {
             case 'tauhid': return 'bg-gray-300'; 
             case 'sejarah': return 'bg-yellow-700'; 
             default: return 'bg-green-600'; 
        }
    };

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
            <div className="relative z-10 w-full max-w-sm md:max-w-full aspect-square bg-green-500 border-4 border-gray-700 shadow-2xl rounded-xl overflow-hidden group mx-auto">
                {/* Background Scenery */}
                <div className={`absolute top-0 w-full h-1/2 ${getBgColor()} overflow-hidden`}>
                     {/* Moving Clouds */}
                     <div className="absolute top-[10%] left-0 text-white text-6xl opacity-60 animate-cloud select-none">☁️</div>
                     <div className="absolute top-[30%] left-0 text-white text-4xl opacity-40 animate-cloud-slow select-none" style={{ animationDelay: '5s' }}>☁️</div>
                     <div className="absolute top-[15%] left-0 text-white text-8xl opacity-30 animate-cloud select-none" style={{ animationDelay: '12s' }}>☁️</div>
                </div> 
                <div className={`absolute bottom-0 w-full h-1/2 ${getGroundColor()}`}></div> 
                
                {/* Modular Character Component */}
                <Character 
                    status={status} 
                    category={category}
                    className={`
                        absolute z-20 transition-all duration-1000 origin-bottom
                        ${isWudu 
                            ? `bottom-[20%] /* Grounded level with Faucet */
                               w-[22%] h-auto aspect-[0.6] 
                               ${status === 'success' ? 'left-[45%]' : 'left-[15%]'}` 
                            : `/* Non-Wudu: Close Up / Center */
                               bottom-[5%] left-1/2 transform -translate-x-1/2
                               w-[32%] h-auto aspect-[0.6]` 
                        }
                    `}
                />

                {/* Faucet Structure (Only for Fiqh/Wudu context) */}
                {isWudu && (
                <div className="absolute bottom-[20%] right-[15%] z-10 w-[15%] h-[40%]">
                    {/* Vertical Pipe Stand - Anchored to bottom of faucet container */}
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
                     <div className="absolute bottom-[20%] right-[5%] w-0 h-0 border-l-[6vw] border-l-transparent border-b-[8vw] border-b-yellow-800 border-r-[6vw] border-r-transparent opacity-80"></div>
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