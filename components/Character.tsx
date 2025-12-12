import React from 'react';
import { GameStatus } from '../types';
import { CategoryType } from '../data/gameData';

interface CharacterProps {
    status: GameStatus;
    className?: string;
    category?: CategoryType;
}

export const Character: React.FC<CharacterProps> = ({ status, className, category = 'fiqh' }) => {
    
    // Theme Colors based on Category
    const getThemeColors = () => {
        switch(category) {
            case 'tauhid':
                return {
                    sarung: '#1e3a8a', // Blue
                    sarungDetail: '#172554',
                    baju: '#f8fafc', // Very White
                    peci: '#ffffff' // White Peci
                };
            case 'sejarah':
                return {
                    sarung: '#78350f', // Brown
                    sarungDetail: '#451a03',
                    baju: '#fff7ed', // Cream
                    peci: '#000000'
                };
            default: // Fiqh
                return {
                    sarung: '#15803d', // Green
                    sarungDetail: '#14532d',
                    baju: '#ffffff', // White
                    peci: '#1e1e1e' // Black
                };
        }
    };

    const colors = getThemeColors();

    return (
        <div 
            className={`
                relative origin-bottom
                transition-all duration-1000 ease-in-out
                ${status === 'success' ? 'animate-jump-happy' : ''}
                ${status === 'error' ? 'animate-shake' : ''}
                /* Default dimensions if not overridden by className */
                ${!className?.includes('w-') ? 'w-24' : ''}
                ${!className?.includes('h-') ? 'h-40' : ''}
                ${className}
            `}
        >
            {/* Status Icons Bubble - Adjusted top position */}
            <div className="absolute -top-[25%] left-1/2 transform -translate-x-1/2 w-full flex justify-center pointer-events-none z-50">
                {status === 'success' ? (
                    <span className="text-4xl md:text-5xl filter drop-shadow-md animate-bounce">💡</span>
                ) : status === 'idle' || status === 'error' ? (
                    <span className="text-4xl md:text-5xl filter drop-shadow-md animate-float opacity-80">❓</span>
                ) : null}
            </div>

            <svg viewBox="0 0 24 40" className="w-full h-full drop-shadow-md" shapeRendering="crispEdges">
                {/* Legs/Feet */}
                <rect x="8" y="36" width="3" height="4" fill="#dcb188" />
                <rect x="13" y="36" width="3" height="4" fill="#dcb188" />
                
                {/* Sarung */}
                <rect x="7" y="24" width="10" height="12" fill={colors.sarung} />
                <rect x="7" y="26" width="10" height="1" fill={colors.sarungDetail} />
                <rect x="7" y="30" width="10" height="1" fill={colors.sarungDetail} />
                <rect x="9" y="24" width="1" height="12" fill={colors.sarungDetail} />
                <rect x="14" y="24" width="1" height="12" fill={colors.sarungDetail} />

                {/* Torso (Baju Koko) */}
                <rect x="6" y="12" width="12" height="12" fill={colors.baju} />
                <rect x="11" y="12" width="2" height="12" fill="#e2e8f0" /> {/* Placket */}
                <rect x="11.5" y="14" width="1" height="1" fill="#94a3b8" /> {/* Button */}
                <rect x="11.5" y="17" width="1" height="1" fill="#94a3b8" /> {/* Button */}
                
                {/* Arms */}
                <rect x="4" y="12" width="2" height="9" fill={colors.baju} />
                <rect x="4" y="21" width="2" height="3" fill="#dcb188" />
                
                <rect x="18" y="12" width="2" height="9" fill={colors.baju} />
                <rect x="18" y="21" width="2" height="3" fill="#dcb188" />

                {/* Head/Neck */}
                <rect x="10" y="10" width="4" height="2" fill="#dcb188" />
                <rect x="8" y="4" width="8" height="7" fill="#dcb188" />
                
                {/* Eyes */}
                {status === 'idle' || status === 'error' ? (
                    // Confused Eyes
                     <>
                        <rect x="9" y="5" width="1" height="2" fill="#000" />
                        <rect x="13" y="6" width="1" height="1" fill="#000" />
                     </>
                ) : (
                    // Normal/Happy Eyes
                    <>
                        <rect x="9" y="6" width="1" height="1" fill="#000" />
                        <rect x="13" y="6" width="1" height="1" fill="#000" />
                    </>
                )}
                
                {/* Mouth */}
                {status === 'success' ? (
                     // Smile
                     <rect x="10" y="9" width="4" height="1" fill="#d23e3e" /> 
                ) : (
                    // Confused/Flat Mouth
                    <rect x="11" y="9" width="2" height="1" fill="#333" /> 
                )}

                {/* Peci */}
                <rect x="8" y="2" width="8" height="3" fill={colors.peci} />
                {colors.peci === '#1e1e1e' && <rect x="9" y="1" width="6" height="1" fill={colors.peci} />}
            </svg>
        </div>
    );
};