import { BlockData, LevelData, CategoryType } from '../types';

export { type CategoryType }; // Re-export for convenience if needed

export const CATEGORIES = [
    { id: 'fiqh', label: 'Fiqh Ibadah', icon: '🕌', color: 'bg-green-600', desc: 'Wudu, Salat, & Ibadah Harian.', disabled: false },
    { id: 'tauhid', label: 'Aqidah & Tauhid', icon: '☝️', color: 'bg-blue-600', desc: 'Rukun Iman, Islam & Sifat Allah.', disabled: false },
    { id: 'sejarah', label: 'Sejarah Islam', icon: '📜', color: 'bg-yellow-600', desc: 'Kisah Nabi & Para Sahabat.', disabled: false },
    // New Categories
    { id: 'quiz', label: 'Tebak-tebakan', icon: '❓', color: 'bg-pink-600', desc: 'Asah otak dengan quiz seru!', disabled: false },
    { id: 'calendar', label: 'Kalender Hijriah', icon: '📅', color: 'bg-teal-600', desc: 'Cek tanggal Islam hari ini.', disabled: false },
    
    { id: 'coming_soon', label: 'Coming Soon', icon: '🚀', color: 'bg-purple-600', desc: 'Nantikan materi seru lainnya!', disabled: true },
];

export const BLOCKS_DB: BlockData[] = [
    // --- FIQH (WUDU & TAYAMMUM) ---
    { id: 'basmalah', label: 'Baca Bismillah', color: 'bg-purple-500', icon: '📜' },
    { id: 'telapak', label: 'Basuh Telapak', color: 'bg-blue-300', icon: '🤲' },
    { id: 'kumur', label: 'Berkumur', color: 'bg-blue-400', icon: '🚰' },
    { id: 'hidung', label: 'Basuh Hidung', color: 'bg-blue-400', icon: '👃' },
    { id: 'niat', label: 'Niat', color: 'bg-purple-600', icon: '💭' },
    { id: 'muka', label: 'Basuh Muka', color: 'bg-blue-500', icon: '😊' },
    { id: 'tangan', label: 'Basuh Tangan', color: 'bg-blue-600', icon: '💪' },
    { id: 'kepala', label: 'Usap Kepala', color: 'bg-blue-700', icon: '🙇' },
    { id: 'telinga', label: 'Usap Telinga', color: 'bg-blue-700', icon: '👂' },
    { id: 'kaki', label: 'Basuh Kaki', color: 'bg-blue-800', icon: '🦶' },
    { id: 'doa', label: 'Doa', color: 'bg-purple-700', icon: '🤲' },
    
    // Tayammum
    { id: 'tayamum_niat', label: 'Niat Tayammum', color: 'bg-orange-600', icon: '💭' },
    { id: 'tayamum_tepuk', label: 'Tepuk Debu', color: 'bg-orange-500', icon: '✋' },
    { id: 'tayamum_muka', label: 'Usap Wajah', color: 'bg-orange-400', icon: '😊' },
    { id: 'tayamum_tangan', label: 'Usap Tangan', color: 'bg-orange-400', icon: '💪' },

    // --- FIQH (SALAT & ADZAN) ---
    { id: 'takbir', label: 'Takbiratul Ihram', color: 'bg-green-500', icon: '🤲' },
    { id: 'fatihah', label: 'Membaca Al-Fatihah', color: 'bg-green-400', icon: '📖' },
    { id: 'ruku', label: 'Rukuk', color: 'bg-green-600', icon: '🙇' },
    { id: 'itidal', label: 'Itidal', color: 'bg-green-500', icon: '🧍' },
    { id: 'sujud', label: 'Sujud', color: 'bg-green-700', icon: '🙇‍♂️' },
    { id: 'duduk', label: 'Duduk Antara 2 Sujud', color: 'bg-green-600', icon: '🧘' },
    { id: 'tahiyat', label: 'Tahiyat Akhir', color: 'bg-green-800', icon: '☝️' },
    { id: 'salam', label: 'Salam', color: 'bg-green-900', icon: '👋' },

    { id: 'adzan_allah', label: 'Allahu Akbar', color: 'bg-teal-600', icon: '🔊' },
    { id: 'adzan_syahadat1', label: 'Asyhadu alla ilaha illallah', color: 'bg-teal-500', icon: '☝️' },
    { id: 'adzan_syahadat2', label: 'Asyhadu anna Muhammadar Rasulullah', color: 'bg-teal-500', icon: '👳' },
    { id: 'adzan_sholat', label: 'Hayya alas Salah', color: 'bg-teal-400', icon: '🕌' },
    { id: 'adzan_falah', label: 'Hayya alal Falah', color: 'bg-teal-400', icon: '🏆' },
    { id: 'adzan_lailaha', label: 'La ilaha illallah', color: 'bg-teal-700', icon: '☝️' },

    // Waktu Salat
    { id: 'subuh', label: 'Subuh', color: 'bg-indigo-900', icon: '🌅' },
    { id: 'zuhur', label: 'Zuhur', color: 'bg-yellow-400', icon: '☀️' },
    { id: 'asar', label: 'Asar', color: 'bg-orange-400', icon: '🌤️' },
    { id: 'maghrib', label: 'Maghrib', color: 'bg-orange-600', icon: '🌇' },
    { id: 'isya', label: 'Isya', color: 'bg-indigo-800', icon: '🌌' },
    
    // --- TAUHID (RUKUN & SIFAT) ---
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

    // Sifat Wajib Allah (Top 5)
    { id: 'wujud', label: 'Wujud (Ada)', color: 'bg-cyan-600', icon: '🌌' },
    { id: 'qidam', label: 'Qidam (Terdahulu)', color: 'bg-cyan-600', icon: '⏮️' },
    { id: 'baqa', label: 'Baqa (Kekal)', color: 'bg-cyan-600', icon: '♾️' },
    { id: 'mukhalafatu', label: 'Mukhalafatu Lil Hawaditsi', color: 'bg-cyan-600', icon: '✨' },
    { id: 'qiyamuhu', label: 'Qiyamuhu Binafsihi', color: 'bg-cyan-600', icon: '👑' },

    // Sifat Rasul
    { id: 'siddiq', label: 'Siddiq (Jujur)', color: 'bg-emerald-600', icon: '✅' },
    { id: 'amanah', label: 'Amanah (Terpercaya)', color: 'bg-emerald-600', icon: '🤝' },
    { id: 'tabligh', label: 'Tabligh (Menyampaikan)', color: 'bg-emerald-600', icon: '📢' },
    { id: 'fathonah', label: 'Fathonah (Cerdas)', color: 'bg-emerald-600', icon: '💡' },

    // Asmaul Husna
    { id: 'arrahman', label: 'Ar-Rahman', color: 'bg-violet-600', icon: '❤️' },
    { id: 'arrahim', label: 'Ar-Rahim', color: 'bg-violet-600', icon: '🧡' },
    { id: 'almalik', label: 'Al-Malik', color: 'bg-violet-600', icon: '👑' },
    { id: 'alkudus', label: 'Al-Quddus', color: 'bg-violet-600', icon: '✨' },
    { id: 'assalam', label: 'As-Salam', color: 'bg-violet-600', icon: '🕊️' },

    // --- SEJARAH ---
    // Ulul Azmi
    { id: 'nuh', label: 'Nabi Nuh AS', color: 'bg-amber-600', icon: '🚢' },
    { id: 'ibrahim', label: 'Nabi Ibrahim AS', color: 'bg-amber-600', icon: '🔥' },
    { id: 'musa', label: 'Nabi Musa AS', color: 'bg-amber-600', icon: '🌊' },
    { id: 'isa', label: 'Nabi Isa AS', color: 'bg-amber-600', icon: '✨' },
    { id: 'muhammad', label: 'Nabi Muhammad SAW', color: 'bg-amber-600', icon: '🕌' },

    // Khulafaur Rasyidin
    { id: 'abu_bakar', label: 'Abu Bakar Ash-Shiddiq', color: 'bg-amber-700', icon: '1️⃣' },
    { id: 'umar', label: 'Umar bin Khattab', color: 'bg-amber-700', icon: '2️⃣' },
    { id: 'utsman', label: 'Utsman bin Affan', color: 'bg-amber-700', icon: '3️⃣' },
    { id: 'ali', label: 'Ali bin Abi Thalib', color: 'bg-amber-700', icon: '4️⃣' },

    // Keluarga Nabi
    { id: 'abdullah', label: 'Abdullah (Ayah)', color: 'bg-yellow-700', icon: '👨' },
    { id: 'aminah', label: 'Aminah (Ibu)', color: 'bg-yellow-700', icon: '🧕' },
    { id: 'muthalib', label: 'Abdul Muthalib (Kakek)', color: 'bg-yellow-700', icon: '👴' },
    { id: 'thalib', label: 'Abu Thalib (Paman)', color: 'bg-yellow-700', icon: '🧔' },

    // Peristiwa Nabi
    { id: 'lahir', label: 'Tahun Gajah (Lahir)', color: 'bg-orange-700', icon: '🐘' },
    { id: 'wahyu', label: 'Wahyu Pertama', color: 'bg-orange-700', icon: 'cave' },
    { id: 'isra', label: 'Isra Mi\'raj', color: 'bg-orange-700', icon: '🚀' },
    { id: 'hijrah', label: 'Hijrah ke Madinah', color: 'bg-orange-700', icon: '🐫' },
    { id: 'fathu', label: 'Fathu Makkah', color: 'bg-orange-700', icon: '🏳️' },

    // --- DISTRACTORS ---
    { id: 'sedekah', label: 'Sedekah', color: 'bg-yellow-500', icon: '🤝' },
    { id: 'umrah', label: 'Umrah', color: 'bg-yellow-500', icon: '✈️' },
    { id: 'makan', label: 'Makan', color: 'bg-red-500', icon: '🍔' }, 
    { id: 'tidur', label: 'Tidur', color: 'bg-red-500', icon: '💤' }, 
    { id: 'main', label: 'Main HP', color: 'bg-red-500', icon: '📱' },
    { id: 'adam', label: 'Nabi Adam AS', color: 'bg-amber-800', icon: '🍎' },
    { id: 'yusuf', label: 'Nabi Yusuf AS', color: 'bg-amber-800', icon: '👕' },
    { id: 'duha', label: 'Duha', color: 'bg-indigo-300', icon: '🌤️' },
];

export const LEVELS: Record<string, LevelData[]> = {
    'fiqh': [
        {
            id: 1,
            title: "Wudu Sesuai Sunnah",
            description: "Susun urutan wudu yang benar.",
            availableBlocks: ['niat', 'basmalah', 'telapak', 'kumur', 'hidung', 'muka', 'tangan', 'kepala', 'telinga', 'kaki', 'doa', 'makan'], 
            correctSequence: ['basmalah', 'telapak', 'kumur', 'hidung', 'niat', 'muka', 'tangan', 'kepala', 'telinga', 'kaki', 'doa'],
            successMsg: "Masya Allah! Wudumu sah dan sempurna.",
            failMsg: "Kurang tepat. Ingat Niat dilakukan saat membasuh wajah."
        },
        {
            id: 2,
            title: "Gerakan Salat (Rakaat 1)",
            description: "Susun urutan gerakan salat dari berdiri sampai sujud.",
            availableBlocks: ['takbir', 'fatihah', 'ruku', 'itidal', 'sujud', 'salam', 'main'],
            correctSequence: ['takbir', 'fatihah', 'ruku', 'itidal', 'sujud'],
            successMsg: "Alhamdulillah! Gerakan salatmu sudah urut.",
            failMsg: "Coba lagi. Urutannya: Berdiri, Rukuk, I'tidal, Sujud."
        },
        {
            id: 3,
            title: "Urutan Tayammum",
            description: "Tidak ada air? Lakukan Tayammum. Susun urutannya.",
            availableBlocks: ['tayamum_niat', 'tayamum_tepuk', 'tayamum_muka', 'tayamum_tangan', 'kaki', 'kumur'],
            correctSequence: ['tayamum_niat', 'tayamum_tepuk', 'tayamum_muka', 'tayamum_tangan'],
            successMsg: "Benar! Tayammum pengganti wudu jika darurat.",
            failMsg: "Ingat, Tayammum hanya mengusap wajah dan tangan."
        },
        {
            id: 4,
            title: "Urutan Adzan",
            description: "Susun kalimat Adzan dari awal.",
            availableBlocks: ['adzan_allah', 'adzan_syahadat1', 'adzan_syahadat2', 'adzan_sholat', 'adzan_falah', 'adzan_lailaha', 'takbir'],
            correctSequence: ['adzan_allah', 'adzan_syahadat1', 'adzan_syahadat2', 'adzan_sholat', 'adzan_falah', 'adzan_lailaha'],
            successMsg: "Muadzin cilik! Suaramu merdu memanggil salat.",
            failMsg: "Urutan Adzan belum pas."
        },
        {
            id: 5,
            title: "5 Waktu Salat Wajib",
            description: "Susun waktu salat dari pagi sampai malam.",
            availableBlocks: ['subuh', 'zuhur', 'asar', 'maghrib', 'isya', 'duha', 'tahajud'],
            correctSequence: ['subuh', 'zuhur', 'asar', 'maghrib', 'isya'],
            successMsg: "Tepat sekali! Jangan sampai tinggalkan salat ya.",
            failMsg: "Urutannya: Subuh, Zuhur, Asar, Maghrib, Isya."
        }
    ],
    'tauhid': [
        {
            id: 1,
            title: "Rukun Islam",
            description: "Susun 5 Rukun Islam secara berurutan.",
            availableBlocks: ['syahadat', 'salat', 'zakat', 'puasa', 'haji', 'sedekah', 'umrah'],
            correctSequence: ['syahadat', 'salat', 'zakat', 'puasa', 'haji'],
            successMsg: "Alhamdulillah! Pondasi Islammu kuat.",
            failMsg: "Ingat urutan: Syahadat, Salat, Zakat, Puasa, Haji."
        },
        {
            id: 2,
            title: "Rukun Iman",
            description: "Susun 6 Rukun Iman yang wajib kita yakini.",
            availableBlocks: ['iman_allah', 'iman_malaikat', 'iman_kitab', 'iman_rasul', 'iman_kiamat', 'iman_qada', 'puasa'],
            correctSequence: ['iman_allah', 'iman_malaikat', 'iman_kitab', 'iman_rasul', 'iman_kiamat', 'iman_qada'],
            successMsg: "Hebat! Keimananmu lurus.",
            failMsg: "Coba hafalkan lagi 6 Rukun Iman."
        },
        {
            id: 3,
            title: "Sifat Wajib Allah (1-5)",
            description: "Susun 5 sifat wajib pertama bagi Allah SWT.",
            availableBlocks: ['wujud', 'qidam', 'baqa', 'mukhalafatu', 'qiyamuhu', 'siddiq'],
            correctSequence: ['wujud', 'qidam', 'baqa', 'mukhalafatu', 'qiyamuhu'],
            successMsg: "Subhanallah, Allah Maha Ada dan Kekal.",
            failMsg: "Urutan sifat wajib 20 bagian pertama belum tepat."
        },
        {
            id: 4,
            title: "Sifat Wajib Rasul",
            description: "Nabi dan Rasul memiliki 4 sifat mulia. Susunlah.",
            availableBlocks: ['siddiq', 'amanah', 'tabligh', 'fathonah', 'kizib', 'khianat'],
            correctSequence: ['siddiq', 'amanah', 'tabligh', 'fathonah'],
            successMsg: "Benar! Jujur, Terpercaya, Menyampaikan, Cerdas.",
            failMsg: "Salah satu sifat Rasul tertukar atau salah."
        },
        {
            id: 5,
            title: "Asmaul Husna (1-5)",
            description: "Susun 5 Asmaul Husna pertama.",
            availableBlocks: ['arrahman', 'arrahim', 'almalik', 'alkudus', 'assalam', 'almukmin'],
            correctSequence: ['arrahman', 'arrahim', 'almalik', 'alkudus', 'assalam'],
            successMsg: "Maha Pengasih, Penyayang, Raja, Suci, Sejahtera.",
            failMsg: "Urutan Asmaul Husna belum tepat."
        }
    ],
    'sejarah': [
        {
            id: 1,
            title: "Nabi Ulul Azmi",
            description: "Susun 5 Nabi yang bergelar Ulul Azmi berdasarkan urutan zamannya.",
            availableBlocks: ['nuh', 'ibrahim', 'musa', 'isa', 'muhammad', 'adam', 'yusuf'],
            correctSequence: ['nuh', 'ibrahim', 'musa', 'isa', 'muhammad'],
            successMsg: "Hebat! Mereka adalah Nabi yang memiliki ketabahan luar biasa.",
            failMsg: "Urutan zaman Nabi Ulul Azmi kurang tepat."
        },
        {
            id: 2,
            title: "Khulafaur Rasyidin",
            description: "Siapa pengganti Rasulullah? Susun urutan Khalifah.",
            availableBlocks: ['abu_bakar', 'umar', 'utsman', 'ali', 'muawiyah'],
            correctSequence: ['abu_bakar', 'umar', 'utsman', 'ali'],
            successMsg: "Benar! 4 Sahabat utama pemimpin umat.",
            failMsg: "Ingat urutannya: Abu Bakar, Umar, Utsman, Ali."
        },
        {
            id: 3,
            title: "Keluarga Nabi",
            description: "Susun silsilah Nabi Muhammad SAW ke atas (Ayah -> Kakek).",
            availableBlocks: ['abdullah', 'aminah', 'muthalib', 'thalib', 'abu_bakar'],
            correctSequence: ['abdullah', 'aminah', 'muthalib', 'thalib'],
            successMsg: "Kamu mengenal keluarga Nabi dengan baik.",
            failMsg: "Urutan Ayah, Ibu, Kakek, Paman belum tepat."
        },
        {
            id: 4,
            title: "Nabi Nuh & Kapal",
            description: "Bantu Nabi Nuh membuat kapal (Logic Sequence).",
            availableBlocks: ['niat', 'tangan', 'doa', 'nuh'], // Reuse logic blocks for simple story
            correctSequence: ['niat', 'doa', 'tangan'], // Abstract logic for this example or reuse simpler
            // Re-using correct blocks from DB for Story Logic
            successMsg: "Kapal siap berlayar! (Bonus Level Logika)",
            failMsg: "Mulai dengan Niat dan Doa, lalu bekerja."
        },
        {
            id: 5,
            title: "Peristiwa Penting Nabi",
            description: "Susun perjalanan hidup Rasulullah SAW.",
            availableBlocks: ['lahir', 'wahyu', 'isra', 'hijrah', 'fathu', 'wafat'],
            correctSequence: ['lahir', 'wahyu', 'isra', 'hijrah', 'fathu'],
            successMsg: "Allahumma sholli ala Muhammad! Perjalanan sirah yang agung.",
            failMsg: "Cek lagi urutan sejarah hidup Nabi."
        }
    ]
};

export const getBlockData = (id: string): BlockData | undefined => BLOCKS_DB.find(b => b.id === id);