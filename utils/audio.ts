// Simple Audio Synthesizer for Retro/Minecraft-like sounds

let audioCtx: AudioContext | null = null;
let isMuted = false;
let bgmInterval: any = null;
let currentBgmMode: 'menu' | 'game' = 'menu';

const getContext = () => {
    if (!audioCtx) {
        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioContext) audioCtx = new AudioContext();
    }
    return audioCtx;
};

const createOscillator = (type: OscillatorType, freq: number, duration: number, startTime: number, vol: number = 0.1) => {
    const ctx = getContext();
    if (!ctx || isMuted) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = type;
    osc.frequency.setValueAtTime(freq, startTime);
    
    gain.gain.setValueAtTime(vol, startTime);
    gain.gain.exponentialRampToValueAtTime(0.01, startTime + duration);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start(startTime);
    osc.stop(startTime + duration);
};

export const toggleMute = (muted: boolean) => {
    isMuted = muted;
    if (isMuted) {
        stopBGM();
    } else {
        startBGM(currentBgmMode);
    }
};

export const startBGM = (mode: 'menu' | 'game' = 'menu') => {
    // If requesting the same mode and it's already running, do nothing
    if (bgmInterval && currentBgmMode === mode) return;

    // Stop current track before starting new one
    stopBGM(); 
    currentBgmMode = mode;

    if (isMuted) return;
    
    const playLoop = () => {
        const ctx = getContext();
        if (!ctx) return;
        const now = ctx.currentTime;
        
        let sequence: number[] = [];
        let timePerNote = 0.5;
        let noteType: OscillatorType = 'sine';
        let volume = 0.03;

        if (mode === 'menu') {
            // MENU THEME: Calm, Happy, C Major Pentatonic
            // C4, D4, E4, G4, A4, G4, E4, D4
            sequence = [261.63, 293.66, 329.63, 392.00, 440.00, 392.00, 329.63, 293.66];
            timePerNote = 0.4;
            noteType = 'sine'; // Soft
            volume = 0.03;
        } else {
            // GAME THEME: Thinking, slightly more rhythmic, A Minor-ish (Minecraft-like creative mode)
            // A3, C4, E4, B3, E4, G4
            sequence = [220.00, 261.63, 329.63, 246.94, 329.63, 392.00];
            timePerNote = 0.6;
            noteType = 'triangle'; // More presence
            volume = 0.02;
        }

        sequence.forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = noteType;
            osc.frequency.value = freq;
            
            gain.gain.value = volume;
            gain.gain.linearRampToValueAtTime(0, now + (i * timePerNote) + timePerNote);
            
            osc.connect(gain);
            gain.connect(ctx.destination);
            
            osc.start(now + (i * timePerNote));
            osc.stop(now + (i * timePerNote) + timePerNote);
        });
    };

    playLoop();
    // Calculate loop duration based on sequence length
    const loopDuration = mode === 'menu' ? (0.4 * 8 * 1000) : (0.6 * 6 * 1000);
    bgmInterval = setInterval(playLoop, loopDuration); 
};

export const stopBGM = () => {
    if (bgmInterval) {
        clearInterval(bgmInterval);
        bgmInterval = null;
    }
};

export const playSound = (type: 'click' | 'success' | 'error' | 'select') => {
    const ctx = getContext();
    if (!ctx || isMuted) return;

    const now = ctx.currentTime;

    switch (type) {
        case 'click':
            // High "Pop"
            createOscillator('square', 400, 0.05, now, 0.05);
            break;
        case 'select':
            // Soft select
            createOscillator('sine', 600, 0.1, now, 0.05);
            break; 
        case 'error':
            // Low "Buzz" descending
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(150, now);
            osc.frequency.linearRampToValueAtTime(50, now + 0.3); 
            gain.gain.setValueAtTime(0.1, now);
            gain.gain.linearRampToValueAtTime(0, now + 0.3);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now);
            osc.stop(now + 0.3);
            break;
            
        case 'success':
            // Level Up / Success Arpeggio
            createOscillator('square', 523.25, 0.1, now, 0.05);       
            createOscillator('square', 659.25, 0.1, now + 0.1, 0.05); 
            createOscillator('square', 783.99, 0.1, now + 0.2, 0.05); 
            createOscillator('square', 1046.50, 0.4, now + 0.3, 0.05);
            break;
    }
};