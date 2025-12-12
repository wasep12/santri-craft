export interface BlockData {
    id: string;
    label: string;
    color: string;
    icon: string;
}

export interface LevelData {
    id: number;
    title: string;
    description: string;
    availableBlocks: string[];
    correctSequence: string[];
    successMsg: string;
    failMsg: string;
}

export type GameStatus = 'idle' | 'success' | 'error';

export type CategoryType = 'fiqh' | 'tauhid' | 'sejarah' | 'quiz' | 'calendar' | 'coming_soon';