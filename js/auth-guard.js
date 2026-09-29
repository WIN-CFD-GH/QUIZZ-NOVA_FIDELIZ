/**
 * MISIÓN WINNER - NOVA FIDELIZ
 * MÓDULO DE SEGURIDAD Y CONTROL DE ACCESO ADMINISTRATIVO (auth-guard.js)
 * 
 * - Modal Galáctico de Autenticación para Dashboard y Hangar de Preguntas
 * - Protección Estricta contra acceso directo por URL
 * - Sesión Temporal volátil en sessionStorage (cerrar pestaña = requiere re-autenticar)
 * - Contraseña centralizada en WINNER_CONFIG.security.ADMIN_PASSWORD
 */

class AdminAuthGuard {
  constructor() {
    this.modalEl = null;
    this.targetUrl = null;
    this.isProcessing = false;
  }

  get config() {
    return window.WINNER_CONFIG?.security || {
      ADMIN_PASSWORD: "MWFidelizaciones2026",
      sessionStorageKey: "mw_admin_authenticated",
      dashboardWelcomeTitle: "Centro de Control de la Academia Espacial WINNER",
      hangarWelcomeTitle: "Hangar Estratégico de Misiones y Evaluaciones"
    };
  }

  get sessionKey() {
    return this.config.sessionStorageKey || "mw_admin_authenticated";
  }

  /**
   * Verifica si el administrador ya cuenta con sesión activa en la pestaña
   */
  isAuthenticated() {
    return sessionStorage.getItem(this.sessionKey) === 'true';
  }

  /**
   * Valida la contraseña ingresada contra la constante central
   */
  authenticate(password) {
    const expected = (this.config.ADMIN_PASSWORD || "MWFidelizaciones2026").trim();
    const input = (password || "").trim();
    if (input === expected) {
      sessionStorage.setItem(this.sessionKey, 'true');
      return true;
    }
    return false;
  }

  /**
   * Cierra la sesión administrativa y redirige al inicio
   */
  logout() {
    sessionStorage.removeItem(this.sessionKey);
    window.location.href = "index.html";
  }

  /**
   * Protección inmediata para páginas restringidas (Dashboard / Hangar)
   * Si no está autenticado, bloquea renderizado y redirige a index.html
   */
  protectCurrentPage() {
    if (!this.isAuthenticated()) {
      sessionStorage.setItem('mw_admin_denied_toast', '🔒 Se requiere autenticación de administrador para acceder a esta sección.');
      window.location.replace('index.html?denied=true');
    }
  }

  /**
   * Abre el modal espacial solicitando clave de comandante
   */
  requestAccess(targetUrl) {
    if (this.isAuthenticated()) {
      window.location.href = targetUrl;
      return;
    }

    this.targetUrl = targetUrl;
    this.ensureModal();
    this.resetModalState();
    this.showModal();
  }

  /**
   * Construye e inyecta el modal en el DOM si no existe
   */
  ensureModal() {
    if (document.getElementById('admin-auth-modal')) {
      this.modalEl = document.getElementById('admin-auth-modal');
      return;
    }

    // Inyectar estilos específicos de la ventana de seguridad galáctica
    if (!document.getElementById('admin-auth-styles')) {
      const style = document.createElement('style');
      style.id = 'admin-auth-styles';
      style.textContent = `
        @keyframes adminScanLine {
          0% { top: 0%; opacity: 0.8; }
          50% { opacity: 1; }
          100% { top: 100%; opacity: 0.2; }
        }
        @keyframes adminShieldPulse {
          0%, 100% { transform: scale(1); filter: drop-shadow(0 0 10px rgba(0,240,255,0.6)); }
          50% { transform: scale(1.08); filter: drop-shadow(0 0 25px rgba(0,240,255,0.9)); }
        }
        @keyframes adminDeniedShake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-12px); }
          40% { transform: translateX(12px); }
          60% { transform: translateX(-8px); }
          80% { transform: translateX(8px); }
        }
        .admin-scanner-beam {
          position: absolute;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, #00f0ff, #38bdf8, transparent);
          box-shadow: 0 0 15px #00f0ff, 0 0 30deg #00f0ff;
          pointer-events: none;
          animation: adminScanLine 2.2s ease-in-out infinite alternate;
        }
        .admin-scanner-beam.success {
          background: linear-gradient(90deg, transparent, #10b981, #4ade80, transparent);
          box-shadow: 0 0 20px #10b981, 0 0 40px #10b981;
        }
        .admin-scanner-beam.error {
          background: linear-gradient(90deg, transparent, #ef4444, #f87171, transparent);
          box-shadow: 0 0 20px #ef4444, 0 0 40px #ef4444;
        }
        .admin-shield-icon {
          animation: adminShieldPulse 3s ease-in-out infinite;
        }
        .admin-modal-shake {
          animation: adminDeniedShake 0.45s ease-in-out;
        }
      `;
      document.head.appendChild(style);
    }

    const modal = document.createElement('div');
    modal.id = 'admin-auth-modal';
    modal.className = 'fixed inset-0 z-[1000] hidden items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md transition-all duration-300';
    modal.innerHTML = `
      <div id="admin-modal-card" class="relative w-full max-w-md p-6 sm:p-8 rounded-2xl bg-slate-900/95 border-2 border-cyan-500/50 shadow-[0_0_50px_rgba(0,240,255,0.25)] overflow-hidden transition-all duration-300">
        
        <!-- Línea láser de escaneo galáctico -->
        <div id="admin-scan-beam" class="admin-scanner-beam"></div>

        <!-- Escudo Galáctico de Seguridad -->
        <div class="text-center mb-4">
          <div class="relative inline-block">
            <div class="admin-shield-icon text-5xl sm:text-6xl mb-1">
              🛡️
            </div>
            <span class="absolute -bottom-1 -right-1 text-base bg-cyan-950 border border-cyan-400 rounded-full px-1.5 py-0.5 font-mono text-[10px] text-cyan-300">
              SEC-V3
            </span>
          </div>
          
          <h3 class="hud-font font-extrabold text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 mt-2 tracking-wide">
            🔐 ACCESO RESTRINGIDO
          </h3>
          
          <p class="text-xs sm:text-sm text-slate-300 font-mono mt-2 leading-relaxed px-2">
            "Esta sección está reservada para personal autorizado de la Academia Espacial WINNER."
          </p>
        </div>

        <!-- Formulario de Validación de Contraseña -->
        <form id="admin-auth-form" class="space-y-4">
          <div>
            <label for="admin-password-input" class="block text-xs font-mono text-cyan-300 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>Contraseña de Administrador <span class="text-red-400">*</span></span>
              <span class="text-[10px] text-slate-400">Nivel: Comandante</span>
            </label>
            
            <div class="relative">
              <input 
                type="password" 
                id="admin-password-input" 
                required 
                placeholder="Ingresa clave de comandante..."
                autocomplete="current-password"
                class="input-space text-sm sm:text-base font-mono pr-10 border-cyan-500/40 focus:border-cyan-400"
              >
              <button 
                type="button" 
                id="btn-admin-toggle-pwd" 
                class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-cyan-300 text-sm transition"
                title="Mostrar/Ocultar contraseña"
              >
                👁️
              </button>
            </div>
          </div>

          <!-- Mensaje Dinámico de Estado (Alerta o Éxito) -->
          <div id="admin-auth-status" class="hidden p-3 rounded-xl font-mono text-xs leading-relaxed border transition-all duration-300"></div>

          <!-- Botones de Acción -->
          <div class="flex items-center gap-3 pt-2">
            <button 
              type="button" 
              id="btn-admin-cancel" 
              class="w-1/2 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 font-mono text-xs sm:text-sm font-bold transition flex items-center justify-center gap-1.5"
            >
              ✕ Cancelar
            </button>
            
            <button 
              type="submit" 
              id="btn-admin-submit" 
              class="w-1/2 py-2.5 rounded-xl btn-space-primary font-mono text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.4)]"
            >
              <span>Acceder</span> →
            </button>
          </div>
        </form>

        <!-- Indicador de Sesión Volátil -->
        <div class="mt-4 pt-3 border-t border-slate-800/80 text-center">
          <p class="text-[10px] text-slate-500 font-mono">
            🛰️ Sesión temporal de alta seguridad • Cierre automático al salir de la pestaña
          </p>
        </div>

      </div>
    `;

    document.body.appendChild(modal);
    this.modalEl = modal;

    // Listeners del modal
    const form = modal.querySelector('#admin-auth-form');
    const pwdInput = modal.querySelector('#admin-password-input');
    const btnCancel = modal.querySelector('#btn-admin-cancel');
    const btnToggle = modal.querySelector('#btn-admin-toggle-pwd');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleAuthAttempt(pwdInput.value);
    });

    btnCancel.addEventListener('click', () => {
      this.hideModal();
    });

    btnToggle.addEventListener('click', () => {
      if (pwdInput.type === 'password') {
        pwdInput.type = 'text';
        btnToggle.textContent = '🙈';
      } else {
        pwdInput.type = 'password';
        btnToggle.textContent = '👁️';
      }
    });

    // Cerrar con Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !this.modalEl.classList.contains('hidden') && !this.isProcessing) {
        this.hideModal();
      }
    });

    // Clic fuera para cancelar si no está procesando
    modal.addEventListener('click', (e) => {
      if (e.target === modal && !this.isProcessing) {
        this.hideModal();
      }
    });
  }

  showModal() {
    if (!this.modalEl) this.ensureModal();
    this.modalEl.classList.remove('hidden');
    this.modalEl.classList.add('flex');
    const pwdInput = document.getElementById('admin-password-input');
    if (pwdInput) {
      setTimeout(() => pwdInput.focus(), 100);
    }
  }

  hideModal() {
    if (!this.modalEl) return;
    this.modalEl.classList.add('hidden');
    this.modalEl.classList.remove('flex');
    this.resetModalState();
  }

  resetModalState() {
    const card = document.getElementById('admin-modal-card');
    const beam = document.getElementById('admin-scan-beam');
    const statusBox = document.getElementById('admin-auth-status');
    const pwdInput = document.getElementById('admin-password-input');
    const btnSubmit = document.getElementById('btn-admin-submit');

    if (card) {
      card.className = "relative w-full max-w-md p-6 sm:p-8 rounded-2xl bg-slate-900/95 border-2 border-cyan-500/50 shadow-[0_0_50px_rgba(0,240,255,0.25)] overflow-hidden transition-all duration-300";
    }
    if (beam) {
      beam.className = "admin-scanner-beam";
    }
    if (statusBox) {
      statusBox.classList.add('hidden');
      statusBox.innerHTML = '';
      statusBox.className = 'hidden p-3 rounded-xl font-mono text-xs leading-relaxed border transition-all duration-300';
    }
    if (pwdInput) {
      pwdInput.value = '';
      pwdInput.disabled = false;
      pwdInput.classList.remove('border-red-500', 'border-green-500');
    }
    if (btnSubmit) {
      btnSubmit.disabled = false;
      btnSubmit.innerHTML = '<span>Acceder</span> →';
    }
    this.isProcessing = false;
  }

  /**
   * Procesa el intento de contraseña con retroalimentación visual y auditiva
   */
  handleAuthAttempt(inputPassword) {
    if (this.isProcessing) return;
    this.isProcessing = true;

    const card = document.getElementById('admin-modal-card');
    const beam = document.getElementById('admin-scan-beam');
    const statusBox = document.getElementById('admin-auth-status');
    const pwdInput = document.getElementById('admin-password-input');
    const btnSubmit = document.getElementById('btn-admin-submit');

    btnSubmit.disabled = true;
    btnSubmit.innerHTML = '<span>Escaneando...</span> 🛸';

    const isValid = this.authenticate(inputPassword);

    if (isValid) {
      // =====================================================================
      // ACCESO AUTORIZADO (EFECTO VERDE, SONIDO, MENSAJE)
      // =====================================================================
      card.classList.remove('border-cyan-500/50');
      card.classList.add('border-emerald-500', 'shadow-[0_0_60px_rgba(16,185,129,0.5)]');
      beam.classList.add('success');

      statusBox.classList.remove('hidden');
      statusBox.className = 'p-3 rounded-xl font-mono text-xs leading-relaxed border border-emerald-500/60 bg-emerald-950/60 text-emerald-300 animate-pulse';
      statusBox.innerHTML = `
        <div class="font-extrabold text-sm text-emerald-200 flex items-center gap-1.5">
          ✅ Acceso autorizado.
        </div>
        <div class="text-[11px] text-emerald-300/90 mt-0.5">
          Bienvenido Comandante de la Academia WINNER.
        </div>
      `;

      // Efecto sonoro de autorización
      if (window.spaceAudio) {
        window.spaceAudio.playCorrect();
      }

      // Redirigir al módulo solicitado tras animación de bienvenida
      setTimeout(() => {
        window.location.href = this.targetUrl || 'dashboard.html';
      }, 950);

    } else {
      // =====================================================================
      // ACCESO DENEGADO (EFECTO ROJO, ALERTA, SACUDIDA)
      // =====================================================================
      card.classList.remove('border-cyan-500/50');
      card.classList.add('border-red-500', 'shadow-[0_0_60px_rgba(239,68,68,0.5)]', 'admin-modal-shake');
      beam.classList.add('error');

      statusBox.classList.remove('hidden');
      statusBox.className = 'p-3 rounded-xl font-mono text-xs leading-relaxed border border-red-500/60 bg-red-950/60 text-red-300';
      statusBox.innerHTML = `
        <div class="font-extrabold text-sm text-red-200 flex items-center gap-1.5">
          🚫 Acceso denegado.
        </div>
        <div class="text-[11px] text-red-300/90 mt-0.5">
          Credenciales de comandante no válidas.
        </div>
      `;

      // Efecto sonoro de alerta
      if (window.spaceAudio) {
        window.spaceAudio.playWrong();
      }

      setTimeout(() => {
        card.classList.remove('admin-modal-shake');
      }, 500);

      pwdInput.classList.add('border-red-500');
      pwdInput.value = '';
      pwdInput.focus();

      btnSubmit.disabled = false;
      btnSubmit.innerHTML = '<span>Reintentar</span> →';
      this.isProcessing = false;
    }
  }

  /**
   * Intercepta clics en enlaces de administración en la página actual
   */
  attachLinkInterceptors() {
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href*="dashboard.html"], a[href*="hangar_preguntas.html"], a[href*="banco_preguntas.html"], .btn-admin-link');
      if (link) {
        const href = link.getAttribute('href');
        // Si no está autenticado, interceptar y solicitar autorización
        if (!this.isAuthenticated()) {
          e.preventDefault();
          this.requestAccess(href);
        }
      }
    });
  }

  /**
   * Revisa si index.html fue cargado tras un intento de acceso directo denegado
   */
  checkDeniedBanner() {
    const urlParams = new URLSearchParams(window.location.search);
    const hasDeniedParam = urlParams.get('denied') === 'true';
    const deniedMsg = sessionStorage.getItem('mw_admin_denied_toast');

    if (hasDeniedParam || deniedMsg) {
      if (deniedMsg) sessionStorage.removeItem('mw_admin_denied_toast');
      const msg = deniedMsg || '🔒 Se requiere autenticación de administrador para acceder a esta sección.';
      this.showToastAlert(msg);
      
      // Limpiar query param sin recargar para estética visual
      if (hasDeniedParam && window.history && window.history.replaceState) {
        window.history.replaceState({}, document.title, window.location.pathname);
      }
    }
  }

  showToastAlert(msg) {
    const toast = document.createElement('div');
    toast.className = 'fixed top-24 left-1/2 -translate-x-1/2 z-[10000] w-[90%] max-w-lg p-4 rounded-2xl bg-red-950/95 border-2 border-red-500 text-red-200 font-mono text-xs sm:text-sm shadow-[0_0_50px_rgba(239,68,68,0.7)] flex items-center justify-between gap-4 backdrop-blur-md transition-all duration-300 animate-pulse';
    toast.innerHTML = `
      <div class="flex items-center gap-3">
        <span class="text-3xl filter drop-shadow">🛡️</span>
        <div>
          <div class="font-extrabold text-sm text-red-100 uppercase tracking-widest flex items-center gap-1.5">
            ALERTA DE SEGURIDAD ACADÉMICA
          </div>
          <div class="text-xs text-red-200 mt-0.5 leading-snug font-bold">
            ${msg}
          </div>
        </div>
      </div>
      <button class="px-3 py-1.5 rounded-lg bg-red-900/80 hover:bg-red-800 border border-red-400 text-white font-bold text-xs transition" onclick="this.closest('.fixed').remove()">
        Entendido
      </button>
    `;
    document.body.appendChild(toast);

    if (window.spaceAudio) {
      setTimeout(() => window.spaceAudio.playWrong(), 200);
    }

    setTimeout(() => {
      if (toast && toast.parentElement) {
        toast.style.opacity = '0';
        toast.style.transform = 'translate(-50%, -20px)';
        setTimeout(() => toast.remove(), 400);
      }
    }, 8000);
  }
}

// Instanciar singleton global
window.adminAuthGuard = new AdminAuthGuard();

const initAuthGuard = () => {
  window.adminAuthGuard.attachLinkInterceptors();
  window.adminAuthGuard.checkDeniedBanner();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAuthGuard);
} else {
  initAuthGuard();
}
