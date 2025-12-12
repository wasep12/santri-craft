import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { GameScene } from './components/GameScene';
import { Workspace } from './components/Workspace';
import { MainMenu } from './components/MainMenu';
import { LEVELS, CategoryType, CATEGORIES } from './data/gameData';
import { BlockData, GameStatus } from './types';
import { playSound, startBGM, stopBGM, toggleMute } from './utils/audio';

type AppState = 'MENU' | 'GAME';

export default function App() {
    const [appState, setAppState] = useState<AppState>('MENU');
    const [currentCategory, setCurrentCategory] = useState<CategoryType>('fiqh');
    const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
    const [isMuted, setIsMuted] = useState(false);
    
    // Game State
    const [workspace, setWorkspace] = useState<BlockData[]>([]);
    const [gameStatus, setGameStatus] = useState<GameStatus>('idle');
    const [feedbackMsg, setFeedbackMsg] = useState<string | null>(null);

    // Initial Audio Click Handler - Ensures BGM starts on first interaction
    useEffect(() => {
        const handleInteraction = () => {
             if (!isMuted) startBGM('menu');
             // Remove listener after first successful interaction
             window.removeEventListener('click', handleInteraction);
        };
        window.addEventListener('click', handleInteraction);
        return () => stopBGM();
    }, [isMuted]);

    const handleMuteToggle = () => {
        const newState = !isMuted;
        setIsMuted(newState);
        toggleMute(newState);
    };

    const handleCategorySelect = (cat: CategoryType) => {
        setCurrentCategory(cat);
        setCurrentLevelIndex(0);
        
        // Switch State
        setAppState('GAME');
        startBGM('game'); // Switch BGM
        
        setWorkspace([]);
        setGameStatus('idle');
        setFeedbackMsg(null);
    };

    const handleBackToMenu = () => {
        playSound('click');
        setAppState('MENU');
        startBGM('menu'); // Switch BGM
    };

    const handleNextLevel = () => {
        const levels = LEVELS[currentCategory];
        if (currentLevelIndex + 1 < levels.length) {
            playSound('success');
            setCurrentLevelIndex(prev => prev + 1);
            setWorkspace([]);
            setGameStatus('idle');
            setFeedbackMsg(null);
        }
    };

    // -- Game Logic --
    const levels = LEVELS[currentCategory];
    const levelData = levels ? levels[currentLevelIndex] : null;

    const handleToggleBlock = (block: BlockData) => {
        if (gameStatus === 'success') return;
        
        playSound('click'); 

        setWorkspace((prev) => {
            const exists = prev.find(b => b.id === block.id);
            if (exists) {
                return prev.filter(b => b.id !== block.id);
            } else {
                return [...prev, block];
            }
        });
        
        setGameStatus('idle');
        setFeedbackMsg(null);
    };

    const handleReset = () => {
        playSound('click');
        setWorkspace([]);
        setGameStatus('idle');
        setFeedbackMsg(null);
    };

    const handleRun = () => {
        if (!levelData) return;

        const userSequenceIds = workspace.map(b => b.id);
        const correctSequenceIds = levelData.correctSequence;

        if (userSequenceIds.length !== correctSequenceIds.length) {
            playSound('error');
            setGameStatus('error');
            setFeedbackMsg("Jumlah langkah belum sesuai! Coba cek lagi.");
            return;
        }

        for (let i = 0; i < correctSequenceIds.length; i++) {
            if (userSequenceIds[i] !== correctSequenceIds[i]) {
                playSound('error');
                setGameStatus('error');
                setFeedbackMsg(`Langkah ke-${i + 1} salah! Urutan belum tepat.`);
                return;
            }
        }

        playSound('success');
        setGameStatus('success');
        setFeedbackMsg(levelData.successMsg);
    };

    // Check if there is a next level
    const hasNextLevel = levels && currentLevelIndex + 1 < levels.length;

    return (
        <div className="flex flex-col h-screen overflow-hidden bg-gray-900 font-['VT323']">
            <Header 
                level={currentLevelIndex + 1} 
                categoryLabel={appState === 'GAME' ? CATEGORIES.find(c => c.id === currentCategory)?.label : undefined}
                isMuted={isMuted}
                onToggleMute={handleMuteToggle}
                onHome={handleBackToMenu}
            />

            <main className="flex-1 flex flex-col md:flex-row overflow-hidden relative bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 to-gray-900">
                
                {appState === 'MENU' && (
                    <MainMenu onSelectCategory={handleCategorySelect} />
                )}

                {appState === 'GAME' && levelData && (
                    <>
                        <GameScene 
                            status={gameStatus} 
                            title={levelData.title}
                            description={levelData.description}
                            category={currentCategory}
                        />

                        <Workspace 
                            levelData={levelData}
                            workspace={workspace}
                            onToggleBlock={handleToggleBlock}
                            onReset={handleReset}
                            onRun={handleRun}
                            status={gameStatus}
                        />

                        {/* Floating Back Button (Bottom Left) */}
                        <button 
                            onClick={handleBackToMenu}
                            className="fixed bottom-4 left-4 z-50 bg-red-500 hover:bg-red-600 text-white w-12 h-12 md:w-auto md:h-auto md:px-4 md:py-2 rounded-full md:rounded-lg border-2 border-white shadow-xl flex items-center justify-center gap-2 font-bold animate-[pop_0.5s] active:scale-95 transition-transform"
                            title="Kembali ke Menu"
                        >
                            <span className="text-xl md:text-base">⬅</span> <span className="hidden md:inline">KEMBALI</span>
                        </button>
                    </>
                )}

                {appState === 'GAME' && !levelData && (
                    <div className="flex-1 flex items-center justify-center text-white text-2xl flex-col gap-4">
                        <p>Level untuk kategori ini sedang dibuat.</p>
                        <button onClick={handleBackToMenu} className="btn-voxel bg-green-500 text-white px-4 py-2 rounded">Kembali</button>
                    </div>
                )}

                {/* Feedback Toast */}
                {feedbackMsg && (
                    <div className={`
                        absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 
                        px-6 py-4 rounded-lg border-4 shadow-[0px_8px_0px_0px_rgba(0,0,0,0.5)]
                        text-xl font-bold text-center max-w-[90%] md:max-w-md w-full
                        transition-all duration-300 animate-[slide-in-from-top-2_0.5s] flex flex-col gap-3 items-center
                        ${gameStatus === 'success' ? 'bg-green-500 border-green-700 text-white' : 'bg-red-500 border-red-700 text-white'}
                    `}>
                        <p className="text-shadow">{feedbackMsg}</p>
                        
                        {/* Next Level Button (Only shows on success and if next level exists) */}
                        {gameStatus === 'success' && hasNextLevel && (
                             <button 
                                onClick={handleNextLevel}
                                className="bg-yellow-400 text-black px-6 py-2 rounded border-b-4 border-yellow-600 hover:brightness-110 active:border-b-0 active:translate-y-1 font-bold animate-pulse"
                            >
                                LANJUT LEVEL BERIKUTNYA ▶
                            </button>
                        )}

                        <button 
                            onClick={() => setFeedbackMsg(null)}
                            className="absolute -top-3 -right-3 bg-black text-white rounded-full w-8 h-8 flex items-center justify-center hover:scale-110 border-2 border-white"
                        >
                            ✕
                        </button>
                    </div>
                )}

            </main>
        </div>
    );
}