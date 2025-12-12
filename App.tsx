import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { GameScene } from './components/GameScene';
import { Workspace } from './components/Workspace';
import { MainMenu } from './components/MainMenu';
import { QuizView } from './components/QuizView';
import { CalendarView } from './components/CalendarView';
import { LEVELS, CategoryType, CATEGORIES } from './data/gameData';
import { BlockData, GameStatus } from './types';
import { playSound, startBGM, stopBGM, toggleMute } from './utils/audio';

type AppState = 'MENU' | 'GAME';

export default function App() {
    const [appState, setAppState] = useState<AppState>('MENU');
    const [currentCategory, setCurrentCategory] = useState<CategoryType>('fiqh');
    const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
    const [isMuted, setIsMuted] = useState(false);
    const [showExitModal, setShowExitModal] = useState(false);
    
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

    // Handle Browser Back Button / Mobile Back Button
    useEffect(() => {
        if (appState === 'GAME') {
            // Push a state so that the back button event can be intercepted
            window.history.pushState(null, '', window.location.href);

            const handlePopState = (event: PopStateEvent) => {
                // Prevent default back behavior essentially by staying on page
                // and showing modal
                event.preventDefault();
                setShowExitModal(true);
                // Push state again so user stays "in game" logic wise until confirmed
                window.history.pushState(null, '', window.location.href);
            };

            window.addEventListener('popstate', handlePopState);
            return () => {
                window.removeEventListener('popstate', handlePopState);
            };
        }
    }, [appState]);

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
        setShowExitModal(false);
    };

    const handleAttemptExit = () => {
        if (appState === 'GAME') {
            playSound('click');
            setShowExitModal(true);
        }
    };

    const handleConfirmExit = () => {
        playSound('click');
        
        // CLEANUP STATE: Ensure everything is reset when going back to menu
        setShowExitModal(false);
        setFeedbackMsg(null); // Close the Success/Error modal
        setGameStatus('idle');
        setWorkspace([]);
        
        setAppState('MENU');
        startBGM('menu'); // Switch BGM
    };

    const handleCancelExit = () => {
        playSound('click');
        setShowExitModal(false);
    };

    const handleNextLevel = () => {
        const levels = LEVELS[currentCategory];
        if (levels && currentLevelIndex + 1 < levels.length) {
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

    // RENDER HELPER FOR MAIN CONTENT
    const renderGameContent = () => {
        if (currentCategory === 'quiz') {
            return <QuizView />;
        }
        if (currentCategory === 'calendar') {
            return <CalendarView />;
        }

        if (levelData) {
            return (
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
                </>
            );
        }

        return (
            <div className="flex-1 flex items-center justify-center text-white text-2xl flex-col gap-4">
                <p>Fitur ini sedang dalam pengembangan.</p>
                <button onClick={handleConfirmExit} className="btn-voxel bg-green-500 text-white px-4 py-2 rounded">Kembali</button>
            </div>
        );
    };

    return (
        <div className="flex flex-col h-screen overflow-hidden bg-gray-900 font-['VT323']">
            <Header 
                level={levelData ? currentLevelIndex + 1 : 0} 
                categoryLabel={appState === 'GAME' ? CATEGORIES.find(c => c.id === currentCategory)?.label : undefined}
                isMuted={isMuted}
                onToggleMute={handleMuteToggle}
                onHome={handleAttemptExit}
            />

            <main className="flex-1 flex flex-col md:flex-row overflow-hidden relative bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 to-gray-900">
                
                {appState === 'MENU' && (
                    <MainMenu onSelectCategory={handleCategorySelect} />
                )}

                {appState === 'GAME' && renderGameContent()}

                {/* Exit Confirmation Modal */}
                {showExitModal && (
                     <div className="absolute inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center animate-[fade-in_0.2s]">
                        <div className="bg-gray-800 border-4 border-white p-6 rounded-lg shadow-2xl max-w-sm w-[90%] text-center relative">
                            <h3 className="text-3xl text-yellow-400 font-bold mb-4 text-shadow">KELUAR MENU?</h3>
                            <p className="text-white text-lg mb-6">Kembali ke menu utama.</p>
                            <div className="flex gap-4">
                                <button 
                                    onClick={handleConfirmExit}
                                    className="flex-1 bg-red-500 hover:bg-red-600 text-white border-b-4 border-red-800 py-3 rounded font-bold text-xl btn-voxel"
                                >
                                    YA, KELUAR
                                </button>
                                <button 
                                    onClick={handleCancelExit}
                                    className="flex-1 bg-green-500 hover:bg-green-600 text-white border-b-4 border-green-800 py-3 rounded font-bold text-xl btn-voxel"
                                >
                                    BATAL
                                </button>
                            </div>
                        </div>
                     </div>
                )}

                {/* Feedback Toast / End Game Modal (Only for Game Mode) */}
                {feedbackMsg && appState === 'GAME' && !['quiz', 'calendar'].includes(currentCategory) && (
                    <div className={`
                        absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 
                        px-6 py-6 rounded-lg border-4 shadow-[0px_8px_0px_0px_rgba(0,0,0,0.5)]
                        text-xl font-bold text-center max-w-[90%] md:max-w-md w-full
                        transition-all duration-300 animate-[slide-in-from-top-2_0.5s] flex flex-col gap-4 items-center
                        ${gameStatus === 'success' ? 'bg-green-500 border-green-700 text-white' : 'bg-red-500 border-red-700 text-white'}
                    `}>
                        <p className="text-shadow text-2xl leading-relaxed">{feedbackMsg}</p>
                        
                        <div className="flex flex-col gap-2 w-full mt-2">
                            {/* Success Actions */}
                            {gameStatus === 'success' && (
                                <>
                                    {/* Show Next Level Button if there are more levels */}
                                    {hasNextLevel ? (
                                        <button 
                                            onClick={handleNextLevel}
                                            className="w-full bg-yellow-400 text-black px-6 py-3 rounded border-b-4 border-yellow-600 hover:brightness-110 active:border-b-0 active:translate-y-1 font-bold animate-pulse text-xl shadow-lg"
                                        >
                                            LANJUT LEVEL BERIKUTNYA ▶
                                        </button>
                                    ) : (
                                        /* Only Show "PILIH GAME LAIN" if this is the LAST level */
                                        <button 
                                            onClick={handleConfirmExit}
                                            className="w-full bg-blue-500 text-white px-6 py-3 rounded border-b-4 border-blue-700 hover:brightness-110 active:border-b-0 active:translate-y-1 font-bold text-xl shadow-lg"
                                        >
                                            PILIH GAME LAIN 🎮
                                        </button>
                                    )}
                                </>
                            )}
                        </div>

                        {/* Close Button (X) - Only for errors or manual closing */}
                        <button 
                            onClick={() => setFeedbackMsg(null)}
                            className="absolute -top-4 -right-4 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center hover:scale-110 border-2 border-white shadow-lg text-xl"
                        >
                            ✕
                        </button>
                    </div>
                )}

            </main>
        </div>
    );
}