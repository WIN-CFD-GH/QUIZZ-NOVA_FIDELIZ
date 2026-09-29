/**
 * MISIÓN WINNER - NOVA FIDELIZ
 * MOTOR DE CURSOR ESPACIAL INMERSIVO (space-cursor.js)
 * Nave espacial futurista orientable, estela de plasma, partículas estelares,
 * modo hover de energía, explosión de clic y variante dorada de Nave Fidelizaciones.
 */

class SpaceShipCursor {
  constructor() {
    this.enabled = localStorage.getItem('mw_immersive_cursor') !== 'false';
    this.isTouch = window.matchMedia('(pointer: coarse)').matches || ('ontouchstart' in window);
    this.isGoldenMode = false;
    this.isHoveringClickable = false;

    // Posiciones y física suave
    this.targetX = window.innerWidth / 2;
    this.targetY = window.innerHeight / 2;
    this.x = this.targetX;
    this.y = this.targetY;
    this.prevX = this.x;
    this.prevY = this.y;
    this.angle = -Math.PI / 2;
    this.targetAngle = -Math.PI / 2;
    this.speed = 0;

    // Partículas de estela y explosión de clic
    this.trailParticles = [];
    this.sparkParticles = [];
    this.maxTrail = 35; // Límite estricto para óptimo rendimiento

    this.canvas = null;
    this.ctx = null;
    this.animId = null;

    if (!this.isTouch) {
      this.init();
    }
  }

  init() {
    // 1. Crear canvas overlay encima de toda la UI
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'space-cursor-canvas';
    this.canvas.style.position = 'fixed';
    this.canvas.style.top = '0';
    this.canvas.style.left = '0';
    this.canvas.style.width = '100vw';
    this.canvas.style.height = '100vh';
    this.canvas.style.pointerEvents = 'none';
    this.canvas.style.zIndex = '999999';
    this.canvas.style.transition = 'opacity 0.3s ease';
    document.body.appendChild(this.canvas);

    this.ctx = this.canvas.getContext('2d');
    this.resize = this.resize.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.render = this.render.bind(this);

    window.addEventListener('resize', this.resize);
    window.addEventListener('mousemove', this.onMouseMove, { passive: true });
    window.addEventListener('mousedown', this.onMouseDown, { passive: true });
    document.addEventListener('mouseover', this.onMouseOver, { passive: true });
    document.addEventListener('mouseout', this.onMouseOut, { passive: true });

    this.resize();
    this.updateCursorState();
    this.animId = requestAnimationFrame(this.render);
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  onMouseMove(e) {
    this.targetX = e.clientX;
    this.targetY = e.clientY;
  }

  onMouseDown(e) {
    if (!this.enabled || this.isTouch) return;
    // Disparo de chispas cósmicas
    const count = this.isGoldenMode ? 18 : 12;
    const baseColor = this.isGoldenMode ? '#fbbf24' : '#00f0ff';
    const altColor = this.isGoldenMode ? '#f59e0b' : '#a855f7';

    for (let i = 0; i < count; i++) {
      const pAngle = Math.random() * Math.PI * 2;
      const pSpeed = Math.random() * 4 + 2;
      this.sparkParticles.push({
        x: this.x,
        y: this.y,
        vx: Math.cos(pAngle) * pSpeed,
        vy: Math.sin(pAngle) * pSpeed,
        radius: Math.random() * 2.5 + 1,
        alpha: 1,
        color: Math.random() > 0.4 ? baseColor : altColor,
        life: 1
      });
    }

    if (window.spaceAudio && !window.spaceAudio.isMuted()) {
      window.spaceAudio.playBeep(900, 0.03);
    }
  }

  onMouseOver(e) {
    const target = e.target;
    if (
      target.tagName === 'BUTTON' ||
      target.tagName === 'A' ||
      target.tagName === 'INPUT' ||
      target.tagName === 'SELECT' ||
      target.tagName === 'TEXTAREA' ||
      target.closest('button') ||
      target.closest('a') ||
      target.closest('.quiz-option-card') ||
      target.closest('.avatar-choice-card') ||
      target.classList.contains('cursor-pointer') ||
      target.getAttribute('role') === 'button'
    ) {
      this.isHoveringClickable = true;
    }
  }

  onMouseOut(e) {
    this.isHoveringClickable = false;
  }

  toggleImmersiveMode() {
    this.enabled = !this.enabled;
    localStorage.setItem('mw_immersive_cursor', this.enabled);
    this.updateCursorState();
    return this.enabled;
  }

  setGoldenMode(active = true) {
    this.isGoldenMode = active;
  }

  updateCursorState() {
    if (this.enabled && !this.isTouch) {
      document.documentElement.classList.add('space-cursor-active');
      if (this.canvas) this.canvas.style.opacity = '1';
    } else {
      document.documentElement.classList.remove('space-cursor-active');
      if (this.canvas) this.canvas.style.opacity = '0';
    }
  }

  render() {
    if (!this.canvas || !this.ctx) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    if (this.enabled && !this.isTouch) {
      // 1. Suavizado de posición (lerp)
      const dx = this.targetX - this.x;
      const dy = this.targetY - this.y;
      this.speed = Math.hypot(dx, dy);

      this.x += dx * 0.42;
      this.y += dy * 0.42;

      // 2. Cálculo suave del ángulo de orientación de la nave
      if (this.speed > 1.2) {
        // La punta de la nave apunta en la dirección del desplazamiento
        this.targetAngle = Math.atan2(dy, dx) + Math.PI / 2;
        // Interpolación angular más corta
        let diff = this.targetAngle - this.angle;
        while (diff < -Math.PI) diff += Math.PI * 2;
        while (diff > Math.PI) diff -= Math.PI * 2;
        this.angle += diff * 0.28;
      }

      // 3. Generar partículas de estela del propulsor
      if (this.speed > 0.8 || this.isHoveringClickable) {
        const thrusterDist = this.isGoldenMode ? 18 : 14;
        const thrusterX = this.x - Math.sin(this.angle) * thrusterDist;
        const thrusterY = this.y + Math.cos(this.angle) * thrusterDist;

        this.trailParticles.push({
          x: thrusterX + (Math.random() * 4 - 2),
          y: thrusterY + (Math.random() * 4 - 2),
          radius: Math.random() * (this.isGoldenMode ? 4 : 3) + 1.2,
          alpha: 0.9,
          color: this.isGoldenMode
            ? ['#fbbf24', '#f59e0b', '#fde68a'][Math.floor(Math.random() * 3)]
            : ['#00f0ff', '#38bdf8', '#a855f7', '#3b82f6'][Math.floor(Math.random() * 4)]
        });

        if (this.trailParticles.length > this.maxTrail) {
          this.trailParticles.shift();
        }
      }

      // 4. Dibujar estela luminosa
      for (let i = this.trailParticles.length - 1; i >= 0; i--) {
        const p = this.trailParticles[i];
        p.alpha -= 0.035;
        p.radius *= 0.96;

        if (p.alpha <= 0.05 || p.radius <= 0.3) {
          this.trailParticles.splice(i, 1);
          continue;
        }

        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = p.color;
        this.ctx.globalAlpha = p.alpha;
        this.ctx.shadowBlur = 8;
        this.ctx.shadowColor = p.color;
        this.ctx.fill();
      }

      // 5. Dibujar partículas de clic
      for (let i = this.sparkParticles.length - 1; i >= 0; i--) {
        const sp = this.sparkParticles[i];
        sp.x += sp.vx;
        sp.y += sp.vy;
        sp.vx *= 0.92;
        sp.vy *= 0.92;
        sp.alpha -= 0.04;

        if (sp.alpha <= 0) {
          this.sparkParticles.splice(i, 1);
          continue;
        }

        this.ctx.beginPath();
        this.ctx.arc(sp.x, sp.y, sp.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = sp.color;
        this.ctx.globalAlpha = sp.alpha;
        this.ctx.shadowBlur = 10;
        this.ctx.shadowColor = sp.color;
        this.ctx.fill();
      }

      this.ctx.globalAlpha = 1;
      this.ctx.shadowBlur = 0;

      // 6. Dibujar la Nave Espacial orientada
      this.drawSpaceship(this.x, this.y, this.angle);
    }

    this.prevX = this.x;
    this.prevY = this.y;
    this.animId = requestAnimationFrame(this.render);
  }

  drawSpaceship(x, y, angle) {
    this.ctx.save();
    this.ctx.translate(x, y);
    this.ctx.rotate(angle);

    const scale = this.isGoldenMode ? 1.4 : (this.isHoveringClickable ? 1.22 : 1.0);
    this.ctx.scale(scale, scale);

    // Halo energético cuando está en hover o modo dorado
    if (this.isHoveringClickable || this.isGoldenMode) {
      this.ctx.beginPath();
      this.ctx.arc(0, 0, 16, 0, Math.PI * 2);
      this.ctx.strokeStyle = this.isGoldenMode ? 'rgba(251, 191, 36, 0.65)' : 'rgba(0, 240, 255, 0.65)';
      this.ctx.lineWidth = 1.5;
      this.ctx.shadowBlur = 12;
      this.ctx.shadowColor = this.isGoldenMode ? '#fbbf24' : '#00f0ff';
      this.ctx.stroke();
    }

    // Llama del propulsor de plasma
    const flameHeight = (this.speed > 2 || this.isHoveringClickable) ? 14 : 7;
    this.ctx.beginPath();
    this.ctx.moveTo(-3, 8);
    this.ctx.lineTo(0, 8 + flameHeight + (Math.random() * 3));
    this.ctx.lineTo(3, 8);
    this.ctx.fillStyle = this.isGoldenMode ? '#f59e0b' : '#00f0ff';
    this.ctx.shadowBlur = 14;
    this.ctx.shadowColor = this.isGoldenMode ? '#fbbf24' : '#38bdf8';
    this.ctx.fill();

    // Cuerpo de la Nave Espacial (Fuselaje Cyberpunk)
    this.ctx.beginPath();
    this.ctx.moveTo(0, -14);   // Proa / Punta
    this.ctx.lineTo(9, 8);     // Ala derecha
    this.ctx.lineTo(4, 6);     // Quiebre ala der
    this.ctx.lineTo(0, 4);     // Centro popa
    this.ctx.lineTo(-4, 6);    // Quiebre ala izq
    this.ctx.lineTo(-9, 8);    // Ala izquierda
    this.ctx.closePath();

    this.ctx.fillStyle = this.isGoldenMode ? '#1e1b4b' : '#070f26';
    this.ctx.fill();
    this.ctx.lineWidth = 1.8;
    this.ctx.strokeStyle = this.isGoldenMode ? '#fbbf24' : '#00f0ff';
    this.ctx.shadowBlur = 8;
    this.ctx.shadowColor = this.isGoldenMode ? '#fbbf24' : '#00f0ff';
    this.ctx.stroke();

    // Cabina holográfica de mando
    this.ctx.beginPath();
    this.ctx.moveTo(0, -8);
    this.ctx.lineTo(2.5, 0);
    this.ctx.lineTo(-2.5, 0);
    this.ctx.closePath();
    this.ctx.fillStyle = this.isGoldenMode ? '#fde68a' : '#38bdf8';
    this.ctx.shadowBlur = 6;
    this.ctx.shadowColor = '#ffffff';
    this.ctx.fill();

    this.ctx.restore();
  }

  setupToggleUI() {
    const btn = document.getElementById('btn-immersive-toggle');
    const label = document.getElementById('immersive-toggle-status');
    if (!btn) return;

    const updateLabel = () => {
      if (label) {
        label.textContent = this.enabled ? 'ON' : 'OFF';
        label.className = this.enabled ? 'font-bold text-cyan-400' : 'font-bold text-slate-500';
      }
      btn.title = this.enabled ? 'Desactivar modo inmersivo espacial' : 'Activar modo inmersivo espacial';
      btn.style.borderColor = this.enabled ? 'rgba(0, 240, 255, 0.6)' : 'rgba(100, 116, 139, 0.4)';
    };

    updateLabel();
    btn.onclick = () => {
      this.toggleImmersiveMode();
      updateLabel();
    };
  }
}

// Instancia global del cursor espacial
window.spaceShipCursor = new SpaceShipCursor();

document.addEventListener('DOMContentLoaded', () => {
  window.spaceShipCursor.setupToggleUI();
});
