import { BlockData, LevelData } from '../types';

export type CategoryType = 'fiqh' | 'tauhid' | 'sejarah';

export const CATEGORIES = [
    { id: 'fiqh', label: 'Fiqh Ibadah', icon: '🕌', color: 'bg-green-600', desc: 'Pelajari tata cara wudu dan salat.' },
    { id: 'tauhid', label: 'Aqidah & Tauhid', icon: '☝️', color: 'bg-blue-600', desc: 'Mengenal Rukun Islam dan Iman.' },
    { id: 'sejarah', label: 'Sejarah Islam', icon: '📜', color: 'bg-yellow-600', desc: 'Kisah Nabi dan Sahabat (Coming Soon).', disabled: true },
];

export const BLOCKS_DB: BlockData[] = [
    // --- FIQH (WUDU) ---
    { id: 'basmalah', label: 'Baca Bismillah', color: 'bg-purple-500', icon: '📜' },
    { id: 'telapak', label: 'Basuh Telapak', color: 'bg-blue-300', icon: '🤲' },
    { id: 'kumur', label: 'Berkumur', color: 'bg-blue-400', icon: '🚰' },
    { id: 'hidung', label: 'Basuh Hidung', color: 'bg-blue-400', icon: '👃' },
    { id: 'niat', label: 'Niat (Saat Basuh Muka)', color: 'bg-purple-600', icon: '💭' },
    { id: 'muka', label: 'Basuh Muka', color: 'bg-blue-500', icon: '😊' },
    { id: 'tangan', label: 'Basuh Tangan (Siku)', color: 'bg-blue-600', icon: '💪' },
    { id: 'kepala', label: 'Usap Kepala', color: 'bg-blue-700', icon: '🙇' },
    { id: 'telinga', label: 'Usap Telinga', color: 'bg-blue-700', icon: '👂' },
    { id: 'kaki', label: 'Basuh Kaki', color: 'bg-blue-800', icon: '🦶' },
    { id: 'doa', label: 'Doa Setelah Wudu', color: 'bg-purple-700', icon: '🤲' },

    // --- FIQH (SALAT) ---
    { id: 'takbir', label: 'Takbiratul Ihram', color: 'bg-green-500', icon: '🤲' },
    { id: 'fatihah', label: 'Membaca Al-Fatihah', color: 'bg-green-400', icon: '📖' },
    { id: 'ruku', label: 'Rukuk', color: 'bg-green-600', icon: '🙇' },
    { id: 'itidal', label: 'Itidal', color: 'bg-green-500', icon: '🧍' },
    { id: 'sujud', label: 'Sujud', color: 'bg-green-700', icon: '🙇‍♂️' },
    { id: 'duduk', label: 'Duduk Antara 2 Sujud', color: 'bg-green-600', icon: '🧘' },
    { id: 'tahiyat', label: 'Tahiyat Akhir', color: 'bg-green-800', icon: '☝️' },
    { id: 'salam', label: 'Salam', color: 'bg-green-900', icon: '👋' },
    
    // --- TAUHID (RUKUN ISLAM & IMAN) ---
    { id: 'syahadat', label: 'Syahadat', color: 'bg-green-500', icon: '☝️' },
    { id: 'salat', label: 'Salat', color: 'bg-green-600', icon: '🕌' },
    { id: 'zakat', label: 'Zakat', color: 'bg-green-700', icon: '💰' },
    { id: 'puasa', label: 'Puasa', color: 'bg-green-800', icon: '🌙' },
    { id: 'haji', label: 'Haji', color: 'bg-green-900', icon: '🕋' },
    
    { id: 'iman_allah', label: 'Iman Kpd Allah', color: 'bg-blue-500', icon: '☁️' },
    { id: 'iman_malaikat', label: 'Iman Kpd Malaikat', color: 'bg-blue-400', icon: '✨' },
    { id: 'iman_kitab', label: 'Iman Kpd Kitab', color: 'bg-blue-600', icon: '📚' },
    { id: 'iman_rasul', label: 'Iman Kpd Rasul', color: 'bg-blue-700', icon: '👳' },
    { id: 'iman_kiamat', label: 'Iman Hari Kiamat', color: 'bg-purple-800', icon: '⚡' },
    { id: 'iman_qada', label: 'Iman Qada & Qadar', color: 'bg-blue-800', icon: '⚖️' },

    { id: 'sedekah', label: 'Sedekah', color: 'bg-yellow-500', icon: '🤝' }, // Distractor
    { id: 'umrah', label: 'Umrah', color: 'bg-yellow-500', icon: '✈️' }, // Distractor

    // --- DISTRACTORS ---
    { id: 'makan', label: 'Makan', color: 'bg-red-500', icon: '🍔' }, 
    { id: 'tidur', label: 'Tidur', color: 'bg-red-500', icon: '💤' }, 
    { id: 'main', label: 'Main HP', color: 'bg-red-500', icon: '📱' },
];

export const LEVELS: Record<string, LevelData[]> = {
    'fiqh': [
        {
            id: 1,
            title: "Wudu Sesuai Sunnah & Rukun",
            description: "Susun urutan wudu (Madzhab Syafi'i). Ingat! Niat dilakukan berbarengan saat membasuh muka.",
            availableBlocks: ['niat', 'basmalah', 'telapak', 'kumur', 'hidung', 'muka', 'tangan', 'kepala', 'telinga', 'kaki', 'doa', 'makan'], 
            correctSequence: ['basmalah', 'telapak', 'kumur', 'hidung', 'niat', 'muka', 'tangan', 'kepala', 'telinga', 'kaki', 'doa'],
            successMsg: "Masya Allah! Wudumu sah dan sempurna sesuai tuntunan.",
            failMsg: "Kurang tepat. Ingat, Niat dalam hati itu saat air menyentuh wajah!"
        },
        {
            id: 2,
            title: "Gerakan Salat (Rakaat 1)",
            description: "Susun urutan gerakan salat dari awal sampai sujud pertama.",
            availableBlocks: ['takbir', 'fatihah', 'ruku', 'itidal', 'sujud', 'salam', 'main'],
            correctSequence: ['takbir', 'fatihah', 'ruku', 'itidal', 'sujud'],
            successMsg: "Alhamdulillah! Gerakan salatmu sudah urut.",
            failMsg: "Coba lagi. Ingat urutan dari berdiri tegak sampai sujud."
        }
    ],
    'tauhid': [
        {
            id: 1,
            title: "Pondasi Rukun Islam",
            description: "Susun 5 Rukun Islam secara berurutan dari awal sampai akhir.",
            availableBlocks: ['syahadat', 'salat', 'zakat', 'puasa', 'haji', 'sedekah', 'umrah'],
            correctSequence: ['syahadat', 'salat', 'zakat', 'puasa', 'haji'],
            successMsg: "Alhamdulillah! Kamu hafal Rukun Islam dengan benar.",
            failMsg: "Coba lagi. Ingat urutan: Syahadat, Salat, Zakat, Puasa, Haji."
        },
        {
            id: 2,
            title: "6 Rukun Iman",
            description: "Susun 6 Rukun Iman yang wajib kita yakini.",
            availableBlocks: ['iman_allah', 'iman_malaikat', 'iman_kitab', 'iman_rasul', 'iman_kiamat', 'iman_qada', 'puasa'],
            correctSequence: ['iman_allah', 'iman_malaikat', 'iman_kitab', 'iman_rasul', 'iman_kiamat', 'iman_qada'],
            successMsg: "Hebat! Keimananmu kuat.",
            failMsg: "Urutan Rukun Iman belum tepat."
        }
    ],
    'sejarah': [] // Coming soon
};

export const getBlockData = (id: string): BlockData | undefined => BLOCKS_DB.find(b => b.id === id);