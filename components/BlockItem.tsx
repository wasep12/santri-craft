import React from 'react';
import { BlockData } from '../types';

interface BlockItemProps {
    block: BlockData;
    onClick?: () => void;
    selectionIndex?: number; // 1-based index, if undefined/null it means not selected
    disabled?: boolean;
}

export const BlockItem: React.FC<BlockItemProps> = ({ block, onClick, selectionIndex, disabled = false }) => {
    const isSelected = selectionIndex !== undefined && selectionIndex !== -1;

    return (
        <div
            onClick={!disabled ? onClick : undefined}
            className={`
                ${block.color} 
                relative
                p-1 md:p-2 
                rounded-lg
                cursor-pointer 
                border-b-4 border-black/30 
                select-none
                transition-all duration-100
                flex items-center gap-1 md:gap-2
                ${disabled ? 'opacity-50 cursor-not-allowed filter grayscale' : 'hover:brightness-110 active:scale-95 active:border-b-0 active:translate-y-1'}
                ${isSelected ? 'ring-4 ring-yellow-400 border-b-0 translate-y-1' : ''}
            `}
        >
            {/* Selection Badge */}
            {isSelected && (
                <div className="absolute -top-2 -right-2 w-6 h-6 md:w-8 md:h-8 bg-orange-500 border-2 border-white text-white font-bold rounded-full flex items-center justify-center shadow-md z-10 animate-[pop_0.2s_ease-out] text-sm md:text-base">
                    {selectionIndex}
                </div>
            )}

            <div className="flex items-center gap-3 w-full">
                <span className="text-xl md:text-2xl bg-black/10 rounded p-1 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center shrink-0">
                    {block.icon}
                </span>
                <span className="font-bold tracking-wide leading-tight text-xs md:text-sm">
                    {block.label}
                </span>
            </div>
        </div>
    );
};