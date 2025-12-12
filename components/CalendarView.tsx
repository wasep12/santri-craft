import React from 'react';

export const CalendarView: React.FC = () => {
    const today = new Date();
    
    // Format Gregorian
    const dateMasehi = new Intl.DateTimeFormat('id-ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(today);

    // Format Hijri (Using built-in Intl)
    const dateHijri = new Intl.DateTimeFormat('id-ID-u-ca-islamic', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(today);

    // Simple Events List
    const importantDates = [
        { label: "Tahun Baru Islam", date: "1 Muharam" },
        { label: "Maulid Nabi", date: "12 Rabiul Awal" },
        { label: "Isra Mi'raj", date: "27 Rajab" },
        { label: "Awal Puasa", date: "1 Ramadan" },
        { label: "Nuzulul Qur'an", date: "17 Ramadan" },
        { label: "Idul Fitri", date: "1 Syawal" },
        { label: "Idul Adha", date: "10 Zulhijjah" },
    ];

    return (
        <div className="w-full flex-1 flex flex-col items-center p-4 md:p-8 overflow-y-auto">
            
            {/* Main Calendar Card */}
            <div className="w-full max-w-md bg-teal-600 border-4 border-teal-800 rounded-lg p-6 text-center shadow-2xl mb-8 relative group">
                {/* Hole Punch Effect */}
                <div className="absolute -top-4 left-10 w-4 h-8 bg-gray-900 rounded-full border border-gray-700"></div>
                <div className="absolute -top-4 right-10 w-4 h-8 bg-gray-900 rounded-full border border-gray-700"></div>

                <h2 className="text-yellow-300 text-2xl font-bold mb-2 uppercase tracking-widest">HARI INI</h2>
                
                <div className="bg-white text-black p-6 rounded border-2 border-black/20 mb-4">
                    <p className="text-gray-500 text-xl font-bold uppercase">{dateMasehi}</p>
                    <div className="w-full h-1 bg-gray-300 my-2"></div>
                    <p className="text-teal-700 text-4xl md:text-5xl font-bold leading-tight mt-2">{dateHijri}</p>
                    <p className="text-xs text-gray-400 mt-2 italic">*Estimasi tanggal, tergantung rukyatul hilal</p>
                </div>
            </div>

            {/* Events List */}
            <div className="w-full max-w-2xl">
                <h3 className="text-white text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="material-icons text-yellow-400">event</span>
                    HARI BESAR ISLAM
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {importantDates.map((evt, i) => (
                        <div key={i} className="bg-gray-800 border-l-4 border-teal-500 p-4 rounded shadow hover:bg-gray-750 transition-colors flex justify-between items-center">
                            <span className="text-white font-bold">{evt.label}</span>
                            <span className="bg-black/30 text-teal-300 px-2 py-1 rounded text-sm">{evt.date}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};