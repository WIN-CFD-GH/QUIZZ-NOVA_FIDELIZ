/**
 * MISIÓN WINNER - NOVA FIDELIZ
 * SISTEMA DE GAMIFICACIÓN & CARRERA ESPACIAL (gamification.js)
 * Progresión de 12 Niveles (Nivel Inicial 0 + 11 Días de Capacitación Aprobados)
 */

class GamificationEngine {
  constructor() {
    this.config = window.WINNER_CONFIG;
  }

  /**
   * Calcula el rango actual y el progreso hacia el siguiente ascenso
   * Cada quiz aprobado representa exactamente un ascenso dentro de la Academia Espacial
   * @param {Array|number} evalOrCount - Lista de evaluaciones del asesor o conteo directo de aprobados
   * @param {number} totalXP - Puntos de experiencia acumulados (opcional para métricas)
   * @returns {Object} Datos del rango actual, siguiente rango, progreso y recompensas
   */
  calculateCareerProgression(evalOrCount = [], totalXP = 0) {
    const rangos = this.config.carreraEspacial;
    let approvedCount = 0;

    if (Array.isArray(evalOrCount)) {
      // Contar misiones únicas aprobadas (o cantidad de quizzes aprobados)
      const approvedDays = new Set();
      evalOrCount.forEach(e => {
        if (e.metricas?.aprobado) {
          approvedDays.add(e.sesion?.dia || `quiz_${e.id}`);
        }
      });
      approvedCount = approvedDays.size;
    } else if (typeof evalOrCount === 'number') {
      approvedCount = evalOrCount;
    }

    // Nivel clamped entre 0 y 11
    const currentLevelNum = Math.min(11, Math.max(0, approvedCount));
    const currentRank = rangos.find(r => r.nivel === currentLevelNum) || rangos[0];
    const nextRank = currentLevelNum < 11 ? (rangos.find(r => r.nivel === currentLevelNum + 1) || null) : null;

    // Progreso general hacia la graduación máxima (11 días)
    const overallProgressPercent = Math.min(100, Math.round((currentLevelNum / 11) * 100));

    return {
      currentLevelNum,
      currentRank,
      nextRank,
      approvedCount,
      totalQuizzesTarget: 11,
      quizzesNeededForNext: nextRank ? 1 : 0,
      overallProgressPercent,
      progressPercent: overallProgressPercent,
      totalXP,
      isMaxRank: currentLevelNum >= 11
    };
  }

  /**
   * Determina las insignias desbloqueadas por el asesor
   */
  getUnlockedBadges(evaluaciones = [], approvedCount = 0) {
    return this.config.insignias.map(badge => {
      const unlocked = badge.criterio(evaluaciones, approvedCount);
      return {
        ...badge,
        unlocked
      };
    });
  }

  /**
   * Genera el HTML para el HUD y tarjeta de progreso de la Carrera Espacial (12 Niveles)
   */
  renderCareerWidgetHTML(progression) {
    const { currentRank, nextRank, approvedCount, overallProgressPercent, isMaxRank } = progression;

    return `
      <div class="hud-career-widget glass-panel">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3">
          <div class="flex items-center gap-3">
            <span class="text-3xl sm:text-4xl filter drop-shadow animate-float">${currentRank.icono}</span>
            <div>
              <div class="text-[10px] text-sky-400 font-mono font-bold uppercase tracking-wider">
                Nivel ${currentRank.nivel} de 11 • Rango Actual
              </div>
              <div class="hud-font font-bold text-white text-sm sm:text-base ${isMaxRank ? 'glow-gold text-amber-400' : 'glow-cyan'}">
                ${currentRank.rango}
              </div>
            </div>
          </div>

          <div class="text-right self-end sm:self-auto">
            <span class="inline-block px-3 py-1 rounded bg-sky-950/80 border border-sky-400/40 text-xs font-mono text-cyan-300">
              🏅 Quizzes Aprobados: <strong class="text-white">${approvedCount}</strong> / 11
            </span>
          </div>
        </div>

        <!-- Descripción Motivacional del Rango -->
        <p class="text-xs text-slate-300 italic mb-3 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
          "${currentRank.descripcion}"
        </p>

        <!-- Recompensa Visual del Nivel -->
        <div class="flex items-center gap-2 text-[11px] font-mono text-amber-300/90 mb-3">
          <span>✨ Recompensa de Rango:</span>
          <span class="text-slate-200">${currentRank.recompensaVisual}</span>
        </div>

        <!-- Barra de progreso hacia la Nave Fidelizaciones -->
        <div class="career-progress-container mb-2">
          <div class="career-progress-bar" style="width: ${overallProgressPercent}%;"></div>
        </div>

        <div class="flex items-center justify-between text-xs text-slate-400 font-mono">
          <div>
            ${isMaxRank ? 
              '<span class="text-amber-400 font-bold">👑 TRIPULANTE GRADUADO EN NAVE FIDELIZACIONES</span>' : 
              `Siguiente Ascenso: <strong class="text-sky-300">${nextRank?.rango} (Nivel ${nextRank?.nivel})</strong>`}
          </div>
          <div class="text-cyan-400 font-bold">
            ${overallProgressPercent}% completado
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Ejecuta la solemne ceremonia de graduación de la NAVE FIDELIZACIONES (Nivel 11)
   */
  triggerGraduationCeremony(participantData, onCertificateClick) {
    if (window.spaceAudio) {
      window.spaceAudio.playGraduationFanfare();
    }
    launchCosmicConfetti();

    let modal = document.getElementById('graduation-ceremony-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'graduation-ceremony-modal';
      modal.className = 'modal-overlay';
      document.body.appendChild(modal);
    }

    modal.innerHTML = `
      <div class="modal-content-box fidelizaciones-ship-card p-6 sm:p-10 text-center text-white">
        <!-- Corona y Distintivo Supremo -->
        <div class="text-6xl mb-2 animate-bounce">👑</div>
        <span class="inline-block px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-400 text-amber-300 font-mono text-xs uppercase tracking-widest mb-3">
          ⭐ PROTOCOLO DE GRADUACIÓN SUPREMA • DÍA 11 CUMPLIDO ⭐
        </span>
        
        <h2 class="hud-font text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-cyan-400 mb-1">
          TRIPULANTE OFICIAL DE LA MISIÓN WINNER
        </h2>
        <div class="text-lg text-cyan-300 font-bold mb-4 font-mono tracking-widest">
          NAVE FIDELIZACIONES (WINNER-NF-01)
        </div>

        <!-- Ilustración Holográfica de la Nave Insignia Fidelizaciones -->
        <div class="my-5 p-4 rounded-xl bg-slate-950/80 border border-cyan-500/40 relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-purple-500/10 pointer-events-none"></div>
          <svg class="w-full max-w-sm mx-auto h-36 filter drop-shadow-[0_0_22px_#00f0ff]" viewBox="0 0 500 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 100 L200 40 L420 85 L480 100 L420 115 L200 160 Z" fill="#0f172a" stroke="#00f0ff" stroke-width="3"/>
            <polygon points="260,75 380,88 380,112 260,125" fill="#00f0ff" fill-opacity="0.35" stroke="#38bdf8" stroke-width="2"/>
            <path d="M160 50 L120 15 L220 35 Z" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
            <path d="M160 150 L120 185 L220 165 Z" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
            <rect x="40" y="85" width="20" height="30" rx="4" fill="#f59e0b" stroke="#f97316" stroke-width="2"/>
            <polygon points="40,88 5,100 40,112" fill="#00f0ff" fill-opacity="0.8"/>
            <polygon points="35,92 15,100 35,108" fill="#fbbf24"/>
            <text x="220" y="105" fill="#f8fafc" font-family="'Orbitron', sans-serif" font-weight="900" font-size="16" letter-spacing="3">WINNER-NF-01</text>
          </svg>
          <div class="text-[11px] text-cyan-400 font-mono mt-1 uppercase tracking-wider">
            [ASIGNACIÓN OPERATIVA DE FLOTA CONFIRMADA]
          </div>
        </div>

        <!-- Mensaje Oficial Obligatorio -->
        <blockquote class="bg-cyan-950/40 border-l-4 border-amber-400 p-4 rounded text-left my-4 text-slate-200 text-sm sm:text-base leading-relaxed italic">
          "Felicitaciones Tripulante. Has completado tu formación y has sido asignado oficialmente a la nave FIDELIZACIONES de la MISIÓN WINNER. Tu preparación ha concluido. El viaje recién comienza."
        </blockquote>

        <p class="text-xs text-slate-400 mb-6">
          Tripulante: <strong class="text-white">${participantData?.nombreCompleto || 'Asesor Graduado'}</strong> 
          (DNI: ${participantData?.dni || 'N/A'}) - Código Capa: ${participantData?.codigoCapa || 'GENERAL'}
        </p>

        <!-- Botones de Acción -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button id="btn-descargar-cert-ceremonia" class="w-full sm:w-auto btn-space-gold px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2">
            <span>📜</span> DESCARGAR CERTIFICADO OFICIAL TRIPULANTE PDF
          </button>
          <button id="btn-cerrar-ceremonia" class="w-full sm:w-auto px-5 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-600 font-mono text-sm">
            CERRAR TRANSMISIÓN
          </button>
        </div>
      </div>
    `;

    // Activar cursor de la Nave Fidelizaciones dorada durante la graduación
    if (window.spaceShipCursor) {
      window.spaceShipCursor.setGoldenMode(true);
    }

    setTimeout(() => {
      modal.classList.add('active');
    }, 100);

    document.getElementById('btn-cerrar-ceremonia').onclick = () => {
      modal.classList.remove('active');
      if (window.spaceShipCursor) {
        window.spaceShipCursor.setGoldenMode(false);
      }
    };

    document.getElementById('btn-descargar-cert-ceremonia').onclick = () => {
      if (window.spaceShipCursor) {
        window.spaceShipCursor.setGoldenMode(false);
      }
      if (onCertificateClick) {
        onCertificateClick();
      } else {
        window.location.href = `certificado.html?dni=${participantData?.dni}&dia=${encodeURIComponent(participantData?.dia || 'Día 11')}&tipo=graduacion`;
      }
    };
  }
}

window.gamificationEngine = new GamificationEngine();
