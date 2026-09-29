/**
 * MISIÓN WINNER - NOVA FIDELIZ
 * GESTOR DEL BANCO DE PREGUNTAS (banco-manager.js)
 * CRUD Completo, Filtros, Clonación, Importación/Exportación Excel y JSON
 */

class BancoPreguntasManager {
  constructor() {
    this.preguntas = [];
    this.editingQuestionId = null;
  }

  async init() {
    await this.loadPreguntas();
    this.renderQuestionList();
    this.setupListeners();
    this.populateSelects();
  }

  async loadPreguntas() {
    this.preguntas = await window.storageService.getBancoPreguntas();
  }

  populateSelects() {
    const selDia = document.getElementById('filter-banco-dia');
    if (selDia) {
      let options = `<option value="">Todos los Días</option>`;
      window.WINNER_CONFIG.diasFormacion.forEach(d => {
        options += `<option value="${d.short}">${d.nombre}</option>`;
      });
      selDia.innerHTML = options;
    }

    const formDia = document.getElementById('form-dia');
    if (formDia) {
      let options = '';
      window.WINNER_CONFIG.diasFormacion.forEach(d => {
        options += `<option value="${d.short}">${d.nombre}</option>`;
      });
      formDia.innerHTML = options;
    }
  }

  setupListeners() {
    // Filtros
    const fDia = document.getElementById('filter-banco-dia');
    const fNivel = document.getElementById('filter-banco-nivel');
    const fSearch = document.getElementById('search-banco');

    const triggerFilter = () => this.renderQuestionList();
    if (fDia) fDia.addEventListener('change', triggerFilter);
    if (fNivel) fNivel.addEventListener('change', triggerFilter);
    if (fSearch) fSearch.addEventListener('input', triggerFilter);

    // Modal Formulario de Pregunta
    const btnNew = document.getElementById('btn-nueva-pregunta');
    if (btnNew) {
      btnNew.addEventListener('click', () => this.openQuestionModal());
    }

    const form = document.getElementById('form-pregunta');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.saveQuestionFromForm();
      });
    }

    // Botones de Import/Export
    const btnExportExcel = document.getElementById('btn-export-banco-excel');
    if (btnExportExcel) {
      btnExportExcel.addEventListener('click', () => {
        window.excelService.exportBancoToExcel(this.preguntas);
      });
    }

    const fileExcelInput = document.getElementById('input-file-import-excel');
    if (fileExcelInput) {
      fileExcelInput.addEventListener('change', async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        try {
          const imported = await window.excelService.importBancoFromExcel(file);
          if (imported && imported.length > 0) {
            for (let q of imported) {
              await window.storageService.savePregunta(q);
            }
            await this.loadPreguntas();
            this.renderQuestionList();
            alert(`🚀 ¡Se importaron exitosamente ${imported.length} preguntas al Hangar Galáctico!`);
          }
        } catch (err) {
          alert("Error importando Excel: " + err.message);
        }
        fileExcelInput.value = '';
      });
    }

    // Botón exportar backup JSON
    const btnBackup = document.getElementById('btn-export-backup-json');
    if (btnBackup) {
      btnBackup.addEventListener('click', async () => {
        const json = await window.storageService.exportFullBackupJSON();
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Respaldo_Mision_Winner_${Date.now()}.json`;
        a.click();
        URL.revokeObjectURL(url);
      });
    }

    // Botón restaurar respaldo JSON
    const btnRestore = document.getElementById('btn-restore-backup-json');
    const inputRestoreFile = document.getElementById('input-file-restore-json');
    if (btnRestore && inputRestoreFile) {
      btnRestore.addEventListener('click', () => inputRestoreFile.click());
      inputRestoreFile.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = async (ev) => {
          try {
            await window.storageService.importFullBackupJSON(ev.target.result);
            await this.loadPreguntas();
            this.renderQuestionList();
            alert("🛸 Respaldo restaurado con éxito.");
          } catch (err) {
            alert("Error restaurando JSON: " + err.message);
          }
        };
        reader.readAsText(file);
        inputRestoreFile.value = '';
      });
    }

    // Botón restaurar inicial
    const btnReset = document.getElementById('btn-reset-initial-banco');
    if (btnReset) {
      btnReset.addEventListener('click', async () => {
        if (confirm("¿Estás seguro de restablecer el banco a las preguntas oficiales predeterminadas?")) {
          await window.storageService.resetBancoToInitial();
          await this.loadPreguntas();
          this.renderQuestionList();
          alert("Banco restablecido con éxito.");
        }
      });
    }
  }

  // =========================================================================
  // RENDERIZADO DE LA LISTA DE PREGUNTAS
  // =========================================================================
  renderQuestionList() {
    const container = document.getElementById('questions-list-container');
    const countBadge = document.getElementById('banco-total-count');
    if (!container) return;

    const fDia = document.getElementById('filter-banco-dia')?.value || '';
    const fNivel = document.getElementById('filter-banco-nivel')?.value || '';
    const fSearch = (document.getElementById('search-banco')?.value || '').toLowerCase().trim();

    const filtered = this.preguntas.filter(p => {
      if (fDia && p.dia !== fDia) return false;
      if (fNivel && String(p.nivel) !== String(fNivel)) return false;
      if (fSearch) {
        const full = `${p.enunciado} ${p.categoria} ${p.dia}`.toLowerCase();
        if (!full.includes(fSearch)) return false;
      }
      return true;
    });

    if (countBadge) countBadge.textContent = `${filtered.length} preguntas`;

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="glass-panel p-8 text-center text-slate-400 font-mono">
          No hay preguntas coincidentes en el hangar para los filtros seleccionados.
        </div>
      `;
      return;
    }

    const nivelBadges = {
      1: `<span class="px-2 py-0.5 rounded bg-sky-500/20 border border-sky-400 text-sky-300 text-xs font-mono font-bold">NIVEL 1 • CADETE</span>`,
      2: `<span class="px-2 py-0.5 rounded bg-blue-500/20 border border-blue-400 text-blue-300 text-xs font-mono font-bold">NIVEL 2 • PILOTO</span>`,
      3: `<span class="px-2 py-0.5 rounded bg-purple-500/20 border border-purple-400 text-purple-300 text-xs font-mono font-bold">NIVEL 3 • COMANDANTE</span>`
    };

    container.innerHTML = filtered.map(p => {
      const isDeactivated = p.activo === false;
      return `
        <div class="glass-panel p-5 mb-4 relative ${isDeactivated ? 'opacity-60 border-red-500/40' : ''}">
          <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded bg-slate-800 border border-slate-600 text-cyan-400 text-xs font-mono font-bold">${p.dia}</span>
              ${nivelBadges[p.nivel] || nivelBadges[1]}
              <span class="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-300 text-xs">${p.categoria || 'General'}</span>
              ${isDeactivated ? '<span class="text-xs text-red-400 font-mono font-bold">[DESACTIVADA]</span>' : ''}
            </div>

            <!-- Botones de Acción -->
            <div class="flex items-center gap-2">
              <button onclick="window.bancoManager.previewAudio('${p.id}')" class="px-2 py-1 rounded bg-sky-950/80 hover:bg-sky-900 border border-sky-500/40 text-sky-300 text-xs font-mono" title="Escuchar locución">
                🔊 Audio
              </button>
              <button onclick="window.bancoManager.editQuestion('${p.id}')" class="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 border border-slate-600 text-amber-300 text-xs font-mono" title="Editar">
                ✏️ Editar
              </button>
              <button onclick="window.bancoManager.duplicateQuestion('${p.id}')" class="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 border border-slate-600 text-cyan-300 text-xs font-mono" title="Duplicar">
                📑 Clonar
              </button>
              <button onclick="window.bancoManager.toggleStatus('${p.id}')" class="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 border border-slate-600 text-xs font-mono" title="Activar/Desactivar">
                ${isDeactivated ? '🟢 Activar' : '⏸️ Desactivar'}
              </button>
              <button onclick="window.bancoManager.deleteQuestion('${p.id}')" class="px-2 py-1 rounded bg-red-950/60 hover:bg-red-900 border border-red-500/40 text-red-300 text-xs font-mono" title="Eliminar">
                🗑️
              </button>
            </div>
          </div>

          <h3 class="font-bold text-white text-base sm:text-lg mb-3 leading-snug">
            ${p.enunciado}
          </h3>

          <!-- Opciones -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
            ${(p.opciones || []).map((op, oIdx) => {
              const isCorrect = oIdx === p.respuestaCorrecta;
              return `
                <div class="p-2.5 rounded-lg border text-sm flex items-start gap-2 ${isCorrect ? 'bg-green-950/30 border-green-500 text-green-300 font-semibold' : 'bg-slate-900/50 border-slate-800 text-slate-300'}">
                  <span class="font-mono ${isCorrect ? 'text-green-400 font-bold' : 'text-slate-500'}">[${String.fromCharCode(65 + oIdx)}]</span>
                  <span>${op}</span>
                  ${isCorrect ? '<span class="ml-auto text-green-400">✓ Correcta</span>' : ''}
                </div>
              `;
            }).join('')}
          </div>

          ${p.explicacion ? `
            <div class="text-xs text-slate-400 bg-slate-900/80 p-2.5 rounded border border-slate-800 italic">
              💡 <strong>Feedback:</strong> ${p.explicacion}
            </div>
          ` : ''}
        </div>
      `;
    }).join('');
  }

  // =========================================================================
  // MODAL Y CRUD
  // =========================================================================
  openQuestionModal(question = null) {
    this.editingQuestionId = question ? question.id : null;
    const modal = document.getElementById('modal-pregunta');
    const title = document.getElementById('modal-pregunta-title');
    if (!modal) return;

    title.textContent = question ? "EDITAR PREGUNTA ESPACIAL" : "NUEVA PREGUNTA DE CAPACITACIÓN";

    document.getElementById('form-dia').value = question?.dia || "Día 1";
    document.getElementById('form-nivel').value = question?.nivel || 1;
    document.getElementById('form-categoria').value = question?.categoria || "Protocolo";
    document.getElementById('form-tipo').value = question?.tipo || "opcion_multiple";
    document.getElementById('form-enunciado').value = question?.enunciado || "";
    document.getElementById('form-audio-texto').value = question?.audioTexto || "";
    document.getElementById('form-explicacion').value = question?.explicacion || "";

    document.getElementById('form-opcion-0').value = question?.opciones?.[0] || "";
    document.getElementById('form-opcion-1').value = question?.opciones?.[1] || "";
    document.getElementById('form-opcion-2').value = question?.opciones?.[2] || "";
    document.getElementById('form-opcion-3').value = question?.opciones?.[3] || "";

    const correctRadio = document.querySelector(`input[name="correct-option"][value="${question ? question.respuestaCorrecta : 0}"]`);
    if (correctRadio) correctRadio.checked = true;

    modal.classList.add('active');
  }

  closeModal() {
    const modal = document.getElementById('modal-pregunta');
    if (modal) modal.classList.remove('active');
  }

  async saveQuestionFromForm() {
    const dia = document.getElementById('form-dia').value;
    const nivel = Number(document.getElementById('form-nivel').value);
    const nivelLabels = { 1: "Cadete Espacial", 2: "Piloto Interplanetario", 3: "Comandante Galáctico" };
    const categoria = document.getElementById('form-categoria').value.trim() || "General";
    const tipo = document.getElementById('form-tipo').value;
    const enunciado = document.getElementById('form-enunciado').value.trim();
    const audioTexto = document.getElementById('form-audio-texto').value.trim() || enunciado;
    const explicacion = document.getElementById('form-explicacion').value.trim();

    const opciones = [
      document.getElementById('form-opcion-0').value.trim(),
      document.getElementById('form-opcion-1').value.trim(),
      document.getElementById('form-opcion-2').value.trim(),
      document.getElementById('form-opcion-3').value.trim()
    ].filter(op => op !== "");

    if (!enunciado || opciones.length < 2) {
      alert("Por favor completa el enunciado y al menos 2 opciones de respuesta.");
      return;
    }

    const selectedRadio = document.querySelector('input[name="correct-option"]:checked');
    const respuestaCorrecta = selectedRadio ? Number(selectedRadio.value) : 0;

    const newQuestion = {
      id: this.editingQuestionId || `preg_${Date.now()}`,
      dia,
      diaNumero: parseInt(dia.replace(/\D/g, '')) || 1,
      nivel,
      nivelLabel: nivelLabels[nivel] || "Cadete Espacial",
      categoria,
      tipo,
      enunciado,
      audioTexto,
      opciones,
      respuestaCorrecta,
      explicacion,
      activo: true
    };

    await window.storageService.savePregunta(newQuestion);
    await this.loadPreguntas();
    this.renderQuestionList();
    this.closeModal();
    alert("🚀 Pregunta guardada con éxito en el Hangar.");
  }

  editQuestion(id) {
    const q = this.preguntas.find(p => p.id === id);
    if (q) this.openQuestionModal(q);
  }

  async duplicateQuestion(id) {
    const q = this.preguntas.find(p => p.id === id);
    if (!q) return;

    const clone = {
      ...q,
      id: `preg_${Date.now()}`,
      enunciado: `${q.enunciado} (Copia)`
    };

    await window.storageService.savePregunta(clone);
    await this.loadPreguntas();
    this.renderQuestionList();
    alert("📑 Pregunta duplicada exitosamente.");
  }

  async toggleStatus(id) {
    await window.storageService.togglePreguntaEstado(id);
    await this.loadPreguntas();
    this.renderQuestionList();
  }

  async deleteQuestion(id) {
    if (confirm("¿Estás seguro de eliminar permanentemente esta pregunta espacial?")) {
      await window.storageService.deletePregunta(id);
      await this.loadPreguntas();
      this.renderQuestionList();
    }
  }

  previewAudio(id) {
    const q = this.preguntas.find(p => p.id === id);
    if (q && window.spaceAudio) {
      window.spaceAudio.speakText(q.audioTexto || q.enunciado);
    }
  }
}

window.bancoManager = new BancoPreguntasManager();
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('banco-preguntas-view')) {
    window.bancoManager.init();
  }
});
