/**
 * MISIÓN WINNER - NOVA FIDELIZ
 * MOTOR ESPACIAL SENSORIAL (space-fx.js)
 * Canvas de Galaxia Dinámica, Sintetizador Web Audio API, Confeti Cósmico y Síntesis de Voz
 */

class SpaceAudioEngine {
  constructor() {
    this.ctx = null;
    this.muted = localStorage.getItem('mw_sound_muted') === 'true';
    this.initContextOnInteraction = this.initContextOnInteraction.bind(this);
    window.addEventListener('click', this.initContextOnInteraction, { once: true });
    window.addEventListener('keydown', this.initContextOnInteraction, { once: true });
  }

  initContextOnInteraction() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
  }

  ensureContext() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) this.ctx = new AudioContext();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    localStorage.setItem('mw_sound_muted', this.muted);
    return this.muted;
  }

  isMuted() {
    return this.muted;
  }

  // Beep de confirmación cósmica
  playBeep(freq = 600, duration = 0.08) {
    if (this.muted) return;
    this.ensureContext();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) { console.warn(e); }
  }

  // Sonido de Acierto / Respuesta Correcta
  playCorrect() {
    if (this.muted) return;
    this.ensureContext();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.12); // G5
      osc.frequency.exponentialRampToValueAtTime(1046.50, now + 0.25); // C6
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.35);
    } catch (e) { console.warn(e); }
  }

  // Sonido de Error / Escudo Comprometido
  playWrong() {
    if (this.muted) return;
    this.ensureContext();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(260, now);
      osc.frequency.linearRampToValueAtTime(120, now + 0.28);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.3);
    } catch (e) { console.warn(e); }
  }

  // Sonido de Propulsión de Cohete / Lanzamiento
  playRocketLaunch() {
    if (this.muted) return;
    this.ensureContext();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      // Ruido blanco filtrado simulando thrusters
      const bufferSize = this.ctx.sampleRate * 2;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(200, now);
      filter.frequency.exponentialRampToValueAtTime(1600, now + 1.8);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.2, now + 0.4);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 2.0);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      noise.start(now);
      noise.stop(now + 2.0);
    } catch (e) { console.warn(e); }
  }

  // Fanfarria Triunfal / Ceremonia de Graduación
  playGraduationFanfare() {
    if (this.muted) return;
    this.ensureContext();
    if (!this.ctx) return;
    try {
      const notes = [440, 554.37, 659.25, 880]; // A4, C#5, E5, A5
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const startTime = this.ctx.currentTime + (idx * 0.16);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, startTime);
        gain.gain.setValueAtTime(0.12, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.6);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(startTime);
        osc.stop(startTime + 0.6);
      });
    } catch (e) { console.warn(e); }
  }

  // Síntesis de Voz (Text-to-Speech) para preguntas
  speakText(text, onStart, onEnd) {
    if (!('speechSynthesis' in window)) {
      alert("Tu navegador no soporta síntesis de voz.");
      return;
    }
    window.speechSynthesis.cancel(); // Cancelar locuciones previas
    const cleanText = text.replace(/<[^>]*>?/gm, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'es-ES';
    utterance.rate = 1.0;
    utterance.pitch = 1.05;

    // Buscar voz en español óptima
    const voices = window.speechSynthesis.getVoices();
    const esVoice = voices.find(v => v.lang.startsWith('es') || v.name.includes('Spanish'));
    if (esVoice) utterance.voice = esVoice;

    if (onStart) utterance.onstart = onStart;
    if (onEnd) utterance.onend = onEnd;
    utterance.onerror = () => { if (onEnd) onEnd(); };

    window.speechSynthesis.speak(utterance);
  }

  stopSpeech() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }
}

// Instancia global del sistema de audio
window.spaceAudio = new SpaceAudioEngine();

// =========================================================================
// CANVAS ESPACIAL: Estrellas 3D, Nebulosas y Partículas
// =========================================================================
class SpaceCanvasVisualizer {
  constructor(canvasId = 'space-canvas') {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) {
      this.canvas = document.createElement('canvas');
      this.canvas.id = canvasId;
      document.body.prepend(this.canvas);
    }
    this.ctx = this.canvas.getContext('2d');
    this.stars = [];
    this.shootingStars = [];
    this.numStars = 180;
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.resize = this.resize.bind(this);
    this.animate = this.animate.bind(this);

    window.addEventListener('resize', this.resize);
    this.init();
  }

  init() {
    this.resize();
    this.stars = [];
    for (let i = 0; i < this.numStars; i++) {
      this.stars.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        radius: Math.random() * 1.5 + 0.3,
        alpha: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.3 + 0.05,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        color: ['#00f0ff', '#ffffff', '#a855f7', '#38bdf8', '#fbbf24'][Math.floor(Math.random() * 5)]
      });
    }
    requestAnimationFrame(this.animate);
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  maybeAddShootingStar() {
    if (Math.random() < 0.015 && this.shootingStars.length < 3) {
      this.shootingStars.push({
        x: Math.random() * this.width,
        y: Math.random() * (this.height * 0.4),
        length: Math.random() * 80 + 40,
        speed: Math.random() * 8 + 6,
        angle: Math.PI / 4 + (Math.random() * 0.2 - 0.1),
        opacity: 1,
        life: 0
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Gradiente de Nebulosa Profunda de fondo
    const grad = this.ctx.createRadialGradient(
      this.width * 0.7, this.height * 0.2, 50,
      this.width * 0.7, this.height * 0.2, this.width * 0.8
    );
    grad.addColorStop(0, 'rgba(88, 28, 135, 0.18)'); // Púrpura cósmico
    grad.addColorStop(0.5, 'rgba(14, 116, 144, 0.12)'); // Cian profundo
    grad.addColorStop(1, 'rgba(3, 7, 18, 0)');
    this.ctx.fillStyle = grad;
    this.ctx.fillRect(0, 0, this.width, this.height);

    // Dibujar estrellas
    for (let star of this.stars) {
      star.alpha += star.twinkleSpeed;
      if (star.alpha > 1 || star.alpha < 0.2) star.twinkleSpeed = -star.twinkleSpeed;

      star.y -= star.speed;
      if (star.y < 0) {
        star.y = this.height;
        star.x = Math.random() * this.width;
      }

      this.ctx.beginPath();
      this.ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = star.color;
      this.ctx.globalAlpha = Math.max(0, Math.min(1, star.alpha));
      this.ctx.shadowBlur = star.radius > 1 ? 6 : 0;
      this.ctx.shadowColor = star.color;
      this.ctx.fill();
    }
    this.ctx.globalAlpha = 1;
    this.ctx.shadowBlur = 0;

    // Estrellas fugaces
    this.maybeAddShootingStar();
    for (let i = this.shootingStars.length - 1; i >= 0; i--) {
      let s = this.shootingStars[i];
      s.x += Math.cos(s.angle) * s.speed;
      s.y += Math.sin(s.angle) * s.speed;
      s.opacity -= 0.015;

      if (s.opacity <= 0 || s.x > this.width || s.y > this.height) {
        this.shootingStars.splice(i, 1);
        continue;
      }

      this.ctx.beginPath();
      const tailX = s.x - Math.cos(s.angle) * s.length;
      const tailY = s.y - Math.sin(s.angle) * s.length;
      const starGrad = this.ctx.createLinearGradient(s.x, s.y, tailX, tailY);
      starGrad.addColorStop(0, `rgba(0, 240, 255, ${s.opacity})`);
      starGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      this.ctx.strokeStyle = starGrad;
      this.ctx.lineWidth = 2;
      this.ctx.moveTo(s.x, s.y);
      this.ctx.lineTo(tailX, tailY);
      this.ctx.stroke();
    }

    requestAnimationFrame(this.animate);
  }
}

// Inicializar Canvas Automáticamente
document.addEventListener('DOMContentLoaded', () => {
  window.spaceVisualizer = new SpaceCanvasVisualizer();
});

// =========================================================================
// EFECTOS VISUALES: Confeti Cósmico y Cohete
// =========================================================================
function launchCosmicConfetti() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#00f0ff', '#3b82f6', '#a855f7', '#fbbf24', '#ffffff']
    });
  }
}

function launchRocketAnimation(callback) {
  window.spaceAudio.playRocketLaunch();
  const rocket = document.createElement('div');
  rocket.innerHTML = `
    <div style="font-size: 5rem; filter: drop-shadow(0 0 20px #00f0ff); text-align: center;">
      🚀
      <div style="font-size: 1.5rem; color: #f59e0b; margin-top: -10px;">🔥</div>
    </div>
  `;
  rocket.style.position = 'fixed';
  rocket.style.bottom = '10%';
  rocket.style.left = '50%';
  rocket.style.transform = 'translateX(-50%)';
  rocket.style.zIndex = '99999';
  rocket.classList.add('rocket-launching');
  document.body.appendChild(rocket);

  setTimeout(() => {
    rocket.remove();
    if (callback) callback();
  }, 2000);
}
