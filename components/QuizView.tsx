import React, { useState, useEffect } from 'react';
import { playSound } from '../utils/audio';
import { QUIZ_BANK, QuizQuestion } from '../data/quizData';

interface QuizViewProps {
    onBack?: () => void;
}

export const QuizView: React.FC<QuizViewProps> = ({ onBack }) => {
    const [questions, setQuestions] = useState<QuizQuestion[]>([]);
    const [currentIdx, setCurrentIdx] = useState(0);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    // Initialize random questions on mount
    useEffect(() => {
        startNewQuiz();
    }, []);

    const startNewQuiz = () => {
        // Shuffle the bank and take top 5
        const shuffled = [...QUIZ_BANK].sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 5);

        setQuestions(selected);
        setCurrentIdx(0);
        setScore(0);
        setIsFinished(false);
        setSelectedOpt(null);
        setIsCorrect(null);
    };

    const handleAnswer = (idx: number) => {
        if (selectedOpt !== null) return; // Prevent double click

        setSelectedOpt(idx);
        const correct = idx === questions[currentIdx].ans;
        setIsCorrect(correct);

        if (correct) {
            playSound('success');
            setScore(s => s + 20); // 100 / 5 questions = 20 pts each
        } else {
            playSound('error');
        }

        setTimeout(() => {
            if (currentIdx + 1 < questions.length) {
                setCurrentIdx(c => c + 1);
                setSelectedOpt(null);
                setIsCorrect(null);
            } else {
                setIsFinished(true);
            }
        }, 1500);
    };

    if (questions.length === 0) {
        return <div className="text-white text-center mt-20">Memuat soal...</div>;
    }

    if (isFinished) {
        return (
            <div className="w-full flex-1 flex items-center justify-center p-4">
                <div className="bg-gray-800 border-4 border-white p-6 md:p-10 rounded-lg text-center shadow-2xl animate-in zoom-in w-full max-w-md">
                    <h2 className="text-4xl text-yellow-400 font-bold mb-4">HASIL KUIS</h2>
                    <div className="text-8xl mb-6">
                        {score >= 80 ? '🏆' : score >= 60 ? '👍' : '📚'}
                    </div>
                    <p className="text-white text-2xl mb-2">Skor Kamu:</p>
                    <p className={`text-6xl font-bold mb-8 ${score >= 80 ? 'text-green-400' : 'text-orange-400'}`}>
                        {score}
                    </p>
                    <div className="space-y-3">
                        <button onClick={() => { playSound('click'); startNewQuiz(); }} className="w-full bg-blue-500 hover:bg-blue-600 text-white border-b-4 border-blue-800 py-3 rounded font-bold text-xl btn-voxel">
                            MAIN LAGI (SOAL BARU)
                        </button>

                        <button onClick={() => { playSound('click'); onBack ? onBack() : window.history.back(); }} className="w-full bg-gray-700 hover:bg-gray-600 text-white border-b-4 border-gray-900 py-3 rounded font-bold text-lg btn-voxel">
                            KEMBALI
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    const question = questions[currentIdx];

    return (
        <div className="w-full flex-1 flex flex-col items-center p-4 md:p-8 overflow-y-auto">

            {/* Header / Score */}
            <div className="w-full max-w-2xl flex justify-between items-center mb-6 bg-black/40 p-3 rounded border border-white/20 text-white">
                <span className="text-yellow-300 font-bold text-xl">SOAL {currentIdx + 1}/{questions.length}</span>
                <span className="font-mono text-xl">SKOR: {score}</span>
            </div>

            {/* Question Card */}
            <div className="w-full max-w-2xl bg-white border-4 border-gray-800 p-6 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] mb-6 text-center">
                <h3 className="text-2xl md:text-3xl text-gray-800 font-bold leading-tight">
                    {question.q}
                </h3>
            </div>

            {/* Options Grid */}
            <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-4">
                {question.options.map((opt, i) => {
                    let btnColor = "bg-blue-500 hover:bg-blue-600 border-blue-800";
                    if (selectedOpt !== null) {
                        if (i === question.ans) btnColor = "bg-green-500 border-green-800"; // Show correct answer
                        else if (i === selectedOpt && i !== question.ans) btnColor = "bg-red-500 border-red-800"; // Wrong pick
                        else btnColor = "bg-gray-500 border-gray-700 opacity-50"; // Others
                    }

                    return (
                        <button
                            key={i}
                            onClick={() => handleAnswer(i)}
                            disabled={selectedOpt !== null}
                            className={`
                                ${btnColor} text-white border-b-4 rounded-lg py-4 px-6 font-bold text-xl btn-voxel transition-all flex items-center gap-3 text-left
                            `}
                        >
                            <span className="bg-black/20 w-8 h-8 flex items-center justify-center rounded text-sm">
                                {String.fromCharCode(65 + i)}
                            </span>
                            {opt}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};