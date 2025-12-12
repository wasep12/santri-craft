import React, { useMemo } from 'react';
import { BlockData, LevelData, GameStatus } from '../types';
import { BlockItem } from './BlockItem';
import { getBlockData } from '../data/constants';

interface WorkspaceProps {
    levelData: LevelData;
    workspace: BlockData[]; // The list of currently selected blocks in order
    onToggleBlock: (block: BlockData) => void;
    onReset: () => void;
    onRun: () => void;
    status: GameStatus;
}

export const Workspace: React.FC<WorkspaceProps> = ({
    levelData,
    workspace,
    onToggleBlock,
    onReset,
    onRun,
    status
}) => {

    // Helper to find order index
    const getSelectionIndex = (blockId: string) => {
        const index = workspace.findIndex(b => b.id === blockId);
        return index === -1 ? undefined : index + 1;
    };

    // Shuffle blocks logic using useMemo to prevent reshuffling on every render
    const shuffledBlocks = useMemo(() => {
        const blocks = [...levelData.availableBlocks];
        // Fisher-Yates Shuffle Algorithm
        for (let i = blocks.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [blocks[i], blocks[j]] = [blocks[j], blocks[i]];
        }
        return blocks;
    }, [levelData.id]); // Re-shuffle only when level ID changes

    return (
        <section className="w-full md:w-1/2 flex-1 md:h-auto bg-gray-800 border-t-4 md:border-t-0 md:border-l-4 border-gray-900 p-2 md:p-4 flex flex-col gap-2 md:gap-4 text-white overflow-visible md:overflow-hidden z-30 relative">

            {/* Instruction Panel */}
            <div className="bg-gray-700 p-2 md:p-3 rounded border-2 border-gray-500 shadow-inner shrink-0">
                <div className="flex justify-between items-center mb-2 border-b border-gray-600 pb-1">
                    <h2 className="text-gray-300 text-sm md:text-lg">SUSUN ALGORITMA</h2>
                    <span className="text-xs md:text-sm bg-black/30 px-2 py-0.5 rounded text-gray-400">
                        {workspace.length} Langkah
                    </span>
                </div>

                {/* Visual Sequence Summary (Small) */}
                <div className="min-h-[40px] flex gap-1 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-600">
                    {workspace.length === 0 ? (
                        <p className="text-gray-500 italic text-xs md:text-sm w-full text-center py-2">Klik blok di bawah sesuai urutan...</p>
                    ) : (
                        workspace.map((block, i) => (
                            <div key={i} className="shrink-0 w-8 h-8 rounded bg-gray-600 border border-gray-500 flex items-center justify-center text-lg relative" title={block.label}>
                                {block.icon}
                                <span className="absolute -bottom-2 -right-1 text-[10px] bg-orange-500 text-black px-1 rounded-full font-bold leading-none">{i + 1}</span>
                            </div>
                        ))
                    )}
                </div>
            </div>

            {/* Main Selection Grid (Toolbox) */}
            <div
                className="flex-1 bg-gray-900 border-2 md:border-4 border-gray-600 rounded p-2 md:p-4 relative overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 max-h-[calc(100vh-260px)] md:max-h-none"
                style={{ WebkitOverflowScrolling: 'touch' as any, touchAction: 'pan-y', paddingBottom: 'env(safe-area-inset-bottom)' }}
            >
                <div className="absolute top-0 left-0 bg-blue-500 text-white px-2 md:px-3 py-1 text-xs md:text-sm font-bold rounded-br border-b-2 border-r-2 border-blue-700 z-10 shadow-md">
                    PILIH BLOK
                </div>

                {/* Grid Responsif: 2 kolom di mobile, mungkin 3 di tablet besar jika perlu */}
                <div className="mt-6 md:mt-8 grid grid-cols-2 gap-2 md:gap-3 pb-56 md:pb-4">
                    {shuffledBlocks.map(blockId => {
                        const block = getBlockData(blockId);
                        if (!block) return null;
                        const order = getSelectionIndex(blockId);

                        return (
                            <BlockItem
                                key={blockId}
                                block={block}
                                selectionIndex={order}
                                onClick={() => onToggleBlock(block)}
                                disabled={status === 'success'}
                            />
                        );
                    })}
                </div>
            </div>

            {/* Controls */}
            <div className="flex gap-2 md:gap-3 h-14 md:h-16 shrink-0 fixed md:static bottom-0 left-0 right-0 p-2 md:p-0 bg-gray-900 z-50 md:z-auto">
                <button
                    onClick={onReset}
                    className="flex-1 bg-red-500 hover:bg-red-600 border-b-4 border-red-800 rounded text-base md:text-xl font-bold btn-voxel text-white active:translate-y-1 active:border-b-0"
                >
                    ULANG
                </button>
                <button
                    onClick={onRun}
                    disabled={status === 'success'}
                    className={`
                        flex-[2] border-b-4 rounded text-base md:text-2xl font-bold btn-voxel flex items-center justify-center gap-2 text-white transition-all
                        ${status === 'success'
                            ? 'bg-gray-500 border-gray-700 cursor-not-allowed opacity-80'
                            : 'bg-green-500 hover:bg-green-600 border-green-800 active:translate-y-1 active:border-b-0'
                        }
                    `}
                >
                    <span>{status === 'success' ? '✔' : '▶'}</span>
                    {status === 'success' ? 'SELESAI' : 'CEK'}
                </button>
            </div>
        </section>
    );
};