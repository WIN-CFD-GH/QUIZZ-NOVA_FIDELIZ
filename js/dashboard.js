/**
 * MISIÓN WINNER - NOVA FIDELIZ
 * CONTROLADOR DEL DASHBOARD DE FORMACIÓN (dashboard.js)
 * KPIs en Vivo, Chart.js, Evolutivo por Asesor, Ranking y Tabla Dinámica
 */

class DashboardController {
  constructor() {
    this.evaluaciones = [];
    this.charts = {};
    this.selectedAdvisorDni = null;
  }

  async init() {
    this.updateConnectionBadge();
    await this.loadData();
    this.renderKPIs();
    this.renderGlobalCharts();
    this.renderRanking();
    this.populateAdvisorSelect();
    this.renderDynamicTable();
    this.setupEventListeners();
  }

  updateConnectionBadge() {
    const badge = document.getElementById('firestore-badge');
    if (badge) {
      if (window.storageService?.isOnline) {
        badge.innerHTML = '☁️ Firestore: Conectado (quizzes-nova-fideliz)';
        badge.className = 'px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 flex items-center gap-1';
      } else {
        badge.innerHTML = '⚡ Modo Contingencia Local';
        badge.className = 'px-2 py-0.5 rounded text-[10px] font-mono bg-amber-950/80 border border-amber-500/50 text-amber-300 flex items-center gap-1';
      }
    }
  }

  async loadData() {
    this.evaluaciones = await window.storageService.getAllEvaluaciones();
    this.updateConnectionBadge();
  }

  setupEventListeners() {
    // Selector de asesor para evolutivo
    const sel = document.getElementById('select-asesor-evolutivo');
    if (sel) {
      sel.addEventListener('change', (e) => {
        this.selectedAdvisorDni = e.target.value;
        this.renderAdvisorEvolutivo(this.selectedAdvisorDni);
      });
    }

    // Filtros de tabla
    const filterDia = document.getElementById('filter-dia');
    const filterCapa = document.getElementById('filter-capa');
    const filterEstado = document.getElementById('filter-estado');
    const searchInput = document.getElementById('search-table');

    const triggerFilter = () => this.renderDynamicTable();
    if (filterDia) filterDia.addEventListener('change', triggerFilter);
    if (filterCapa) filterCapa.addEventListener('change', triggerFilter);
    if (filterEstado) filterEstado.addEventListener('change', triggerFilter);
    if (searchInput) searchInput.addEventListener('input', triggerFilter);

    // Botón exportar Excel
    const btnExcel = document.getElementById('btn-export-excel');
    if (btnExcel) {
      btnExcel.addEventListener('click', () => {
        window.excelService.exportEvaluacionesToExcel(this.evaluaciones);
      });
    }

    // Botón refrescar
    const btnRefresh = document.getElementById('btn-refresh-data');
    if (btnRefresh) {
      btnRefresh.addEventListener('click', async () => {
        btnRefresh.classList.add('animate-spin');
        await this.loadData();
        this.renderKPIs();
        this.renderGlobalCharts();
        this.renderRanking();
        this.populateAdvisorSelect();
        this.renderDynamicTable();
        setTimeout(() => btnRefresh.classList.remove('animate-spin'), 600);
      });
    }
  }

  // =========================================================================
  // KPIs PRINCIPALES
  // =========================================================================
  renderKPIs() {
    const total = this.evaluaciones.length;
    const uniqueDnis = new Set(this.evaluaciones.map(e => e.participante?.dni)).size;

    let sumScores = 0;
    let maxScore = 0;
    let approvedCount = 0;

    this.evaluaciones.forEach(e => {
      const score = Number(e.metricas?.puntaje) || 0;
      sumScores += score;
      if (score > maxScore) maxScore = score;
      if (e.metricas?.aprobado) approvedCount++;
    });

    const avgScore = total > 0 ? (sumScores / total).toFixed(1) : 0;
    const approvalRate = total > 0 ? Math.round((approvedCount / total) * 100) : 0;

    document.getElementById('kpi-total-evals').textContent = total;
    document.getElementById('kpi-participantes').textContent = uniqueDnis;
    document.getElementById('kpi-promedio').textContent = `${avgScore} pts`;
    document.getElementById('kpi-mejor-puntaje').textContent = `${maxScore} pts`;
    document.getElementById('kpi-aprobacion').textContent = `${approvalRate}%`;
  }

  // =========================================================================
  // GRÁFICOS GLOBALES (Chart.js)
  // =========================================================================
  renderGlobalCharts() {
    this.renderDaysBarChart();
    this.renderDistributionChart();
  }

  renderDaysBarChart() {
    const ctx = document.getElementById('chart-days-bars')?.getContext('2d');
    if (!ctx) return;

    if (this.charts.days) this.charts.days.destroy();

    // Agrupar por Día
    const dayStats = {};
    window.WINNER_CONFIG.diasFormacion.forEach(d => {
      dayStats[d.short] = { total: 0, sum: 0 };
    });

    this.evaluaciones.forEach(e => {
      const dia = e.sesion?.dia || "Día 1";
      if (!dayStats[dia]) dayStats[dia] = { total: 0, sum: 0 };
      dayStats[dia].total++;
      dayStats[dia].sum += (Number(e.metricas?.puntaje) || 0);
    });

    const labels = Object.keys(dayStats);
    const avgs = labels.map(l => dayStats[l].total > 0 ? (dayStats[l].sum / dayStats[l].total).toFixed(1) : 0);
    const totals = labels.map(l => dayStats[l].total);

    this.charts.days = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Promedio de Calificación (pts)',
            data: avgs,
            backgroundColor: 'rgba(0, 240, 255, 0.45)',
            borderColor: '#00f0ff',
            borderWidth: 1.5,
            borderRadius: 6
          },
          {
            label: 'Evaluaciones Rendidas',
            data: totals,
            backgroundColor: 'rgba(168, 85, 247, 0.45)',
            borderColor: '#a855f7',
            borderWidth: 1.5,
            borderRadius: 6
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { labels: { color: '#94a3b8' } }
        },
        scales: {
          x: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.05)' } },
          y: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.05)' }, beginAtZero: true }
        }
      }
    });
  }

  renderDistributionChart() {
    const ctx = document.getElementById('chart-distribution-pie')?.getContext('2d');
    if (!ctx) return;

    if (this.charts.distribution) this.charts.distribution.destroy();

    const bins = { '0-39': 0, '40-59': 0, '60-79': 0, '80-89': 0, '90-100': 0 };
    this.evaluaciones.forEach(e => {
      const s = Number(e.metricas?.puntaje) || 0;
      if (s < 40) bins['0-39']++;
      else if (s < 60) bins['40-59']++;
      else if (s < 80) bins['60-79']++;
      else if (s < 90) bins['80-89']++;
      else bins['90-100']++;
    });

    this.charts.distribution = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['0-39 (Recluta)', '40-59 (Explorador)', '60-79 (Piloto)', '80-89 (Comandante)', '90-100 (Leyenda)'],
        datasets: [{
          data: Object.values(bins),
          backgroundColor: [
            'rgba(239, 68, 68, 0.7)',
            'rgba(245, 158, 11, 0.7)',
            'rgba(59, 130, 246, 0.7)',
            'rgba(168, 85, 247, 0.7)',
            'rgba(0, 240, 255, 0.8)'
          ],
          borderColor: '#0f172a',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'bottom', labels: { color: '#cbd5e1', boxWidth: 12 } }
        }
      }
    });
  }

  // =========================================================================
  // RANKING DE CADETES
  // =========================================================================
  renderRanking() {
    const container = document.getElementById('ranking-container');
    if (!container) return;

    // Calcular estadísticas agrupadas por DNI
    const advisors = {};
    this.evaluaciones.forEach(e => {
      const dni = e.participante?.dni;
      if (!dni) return;
      if (!advisors[dni]) {
        advisors[dni] = {
          dni,
          nombre: e.participante?.nombreCompleto || 'Asesor',
          area: e.participante?.area || 'Fidelización',
          avatar: e.participante?.avatar,
          totalXP: 0,
          count: 0,
          approvedCount: 0,
          maxScore: 0
        };
      }
      const p = Number(e.metricas?.puntaje) || 0;
      advisors[dni].totalXP += p;
      advisors[dni].count++;
      if (e.metricas?.aprobado) advisors[dni].approvedCount++;
      if (p > advisors[dni].maxScore) advisors[dni].maxScore = p;
    });

    const sorted = Object.values(advisors).sort((a, b) => b.totalXP - a.totalXP).slice(0, 10);

    if (sorted.length === 0) {
      container.innerHTML = `<div class="p-6 text-center text-slate-500 font-mono">No hay evaluaciones registradas aún.</div>`;
      return;
    }

    const medals = ['🥇', '🥈', '🥉'];
    container.innerHTML = sorted.map((adv, idx) => {
      const career = window.gamificationEngine.calculateCareerProgression(adv.approvedCount, adv.totalXP);
      const avg = Math.round(adv.totalXP / adv.count);
      return `
        <div class="flex items-center justify-between p-3 rounded-lg bg-slate-900/60 border border-slate-700/50 hover:border-cyan-400/50 transition">
          <div class="flex items-center gap-3">
            <span class="text-xl font-bold font-mono ${idx < 3 ? 'text-amber-400' : 'text-slate-400'}">
              ${medals[idx] || `#${idx + 1}`}
            </span>
            <div>
              <div class="font-bold text-white text-sm sm:text-base">${adv.nombre}</div>
              <div class="text-xs text-slate-400 flex items-center gap-2">
                <span>DNI: ${adv.dni}</span> • 
                <span class="${career.currentRank.badgeClase} px-1.5 py-0.5 rounded text-[10px]">
                  ${career.currentRank.icono} ${career.currentRank.rango} (Niv ${career.currentRank.nivel})
                </span>
              </div>
            </div>
          </div>
          <div class="text-right">
            <div class="text-cyan-300 font-mono font-bold text-sm sm:text-base">${adv.totalXP} XP</div>
            <div class="text-xs text-slate-400">${adv.approvedCount}/11 aprobados (${adv.count} rendidos)</div>
          </div>
        </div>
      `;
    }).join('');
  }

  // =========================================================================
  // EVOLUTIVO POR ASESOR
  // =========================================================================
  populateAdvisorSelect() {
    const sel = document.getElementById('select-asesor-evolutivo');
    if (!sel) return;

    const uniqueMap = new Map();
    this.evaluaciones.forEach(e => {
      const dni = e.participante?.dni;
      if (dni && !uniqueMap.has(dni)) {
        uniqueMap.set(dni, e.participante?.nombreCompleto || dni);
      }
    });

    let html = `<option value="">-- Seleccionar Asesor para Análisis --</option>`;
    uniqueMap.forEach((nombre, dni) => {
      html += `<option value="${dni}">${nombre} (DNI: ${dni})</option>`;
    });
    sel.innerHTML = html;

    // Si ya había seleccionado uno, restaurar
    if (this.selectedAdvisorDni && uniqueMap.has(this.selectedAdvisorDni)) {
      sel.value = this.selectedAdvisorDni;
      this.renderAdvisorEvolutivo(this.selectedAdvisorDni);
    } else if (uniqueMap.size > 0) {
      const firstDni = uniqueMap.keys().next().value;
      sel.value = firstDni;
      this.selectedAdvisorDni = firstDni;
      this.renderAdvisorEvolutivo(firstDni);
    }
  }

  renderAdvisorEvolutivo(dni) {
    const detailBox = document.getElementById('advisor-evolutivo-details');
    const chartCtx = document.getElementById('chart-advisor-line')?.getContext('2d');
    if (!detailBox || !dni) return;

    const history = this.evaluaciones.filter(e => e.participante?.dni === dni).sort((a, b) => a.timestamp - b.timestamp);

    if (history.length === 0) {
      detailBox.innerHTML = `<div class="text-slate-500 font-mono">Sin registros para este asesor.</div>`;
      return;
    }

    const first = history[0];
    const latest = history[history.length - 1];
    const totalXP = history.reduce((sum, h) => sum + (Number(h.metricas?.puntaje) || 0), 0);
    const avgScore = (totalXP / history.length).toFixed(1);
    const career = window.gamificationEngine.calculateCareerProgression(history, totalXP);

    // Tendencia: comparar primera y última evaluación
    const trendDiff = (Number(latest.metricas?.puntaje) || 0) - (Number(first.metricas?.puntaje) || 0);
    const trendText = trendDiff >= 0 ? `+${trendDiff} pts (Mejora Positiva 🚀)` : `${trendDiff} pts (Requiere Refuerzo ⚠️)`;
    const trendColor = trendDiff >= 0 ? 'text-green-400' : 'text-amber-400';

    detailBox.innerHTML = `
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div class="p-3 rounded-lg bg-slate-900/80 border border-slate-700">
          <div class="text-xs text-slate-400">Total Evaluaciones</div>
          <div class="text-xl font-bold font-mono text-cyan-300">${history.length}</div>
        </div>
        <div class="p-3 rounded-lg bg-slate-900/80 border border-slate-700">
          <div class="text-xs text-slate-400">Promedio Acumulado</div>
          <div class="text-xl font-bold font-mono text-amber-300">${avgScore} pts</div>
        </div>
        <div class="p-3 rounded-lg bg-slate-900/80 border border-slate-700">
          <div class="text-xs text-slate-400">Última Evaluación</div>
          <div class="text-xl font-bold font-mono text-white">${latest.metricas?.puntaje} pts (${latest.sesion?.dia})</div>
        </div>
        <div class="p-3 rounded-lg bg-slate-900/80 border border-slate-700">
          <div class="text-xs text-slate-400">Tendencia de Curva</div>
          <div class="text-sm font-bold font-mono ${trendColor}">${trendText}</div>
        </div>
      </div>

      <!-- Widget de Carrera Espacial -->
      <div class="mb-4">
        ${window.gamificationEngine.renderCareerWidgetHTML(career)}
      </div>
    `;

    // Gráfico de línea evolutivo individual
    if (chartCtx) {
      if (this.charts.advisorLine) this.charts.advisorLine.destroy();

      const labels = history.map((h, i) => `${h.sesion?.dia || `Eval ${i+1}`} (${h.sesion?.fechaRegistro || ''})`);
      const scores = history.map(h => Number(h.metricas?.puntaje) || 0);

      this.charts.advisorLine = new Chart(chartCtx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: 'Puntaje Obtenido (sobre 100)',
            data: scores,
            fill: true,
            backgroundColor: 'rgba(0, 240, 255, 0.15)',
            borderColor: '#00f0ff',
            tension: 0.35,
            pointBackgroundColor: '#fbbf24',
            pointRadius: 6,
            pointHoverRadius: 8
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { labels: { color: '#cbd5e1' } }
          },
          scales: {
            x: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.05)' } },
            y: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.05)' }, min: 0, max: 100 }
          }
        }
      });
    }
  }

  // =========================================================================
  // TABLA DINÁMICA DE RESULTADOS CON FILTROS
  // =========================================================================
  renderDynamicTable() {
    const tbody = document.getElementById('table-results-body');
    if (!tbody) return;

    const fDia = document.getElementById('filter-dia')?.value || '';
    const fCapa = document.getElementById('filter-capa')?.value || '';
    const fEstado = document.getElementById('filter-estado')?.value || '';
    const fSearch = (document.getElementById('search-table')?.value || '').toLowerCase().trim();

    const filtered = this.evaluaciones.filter(e => {
      if (fDia && e.sesion?.dia !== fDia) return false;
      if (fCapa && e.participante?.codigoCapa !== fCapa) return false;
      if (fEstado && e.metricas?.estado !== fEstado) return false;
      if (fSearch) {
        const full = `${e.participante?.nombreCompleto || ''} ${e.participante?.dni || ''} ${e.participante?.area || ''}`.toLowerCase();
        if (!full.includes(fSearch)) return false;
      }
      return true;
    });

    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="8" class="text-center py-8 text-slate-500 font-mono">No se encontraron evaluaciones coincidentes con los filtros aplicados.</td></tr>`;
      return;
    }

    tbody.innerHTML = filtered.map((e, index) => {
      const isApproved = e.metricas?.aprobado;
      const statusBadge = isApproved ? 
        `<span class="px-2.5 py-1 rounded-full text-xs font-bold bg-green-500/20 border border-green-500 text-green-400 font-mono">✅ APROBADO</span>` : 
        `<span class="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500/20 border border-amber-500 text-amber-400 font-mono">⚠️ REFORZAR</span>`;

      return `
        <tr class="table-row-space">
          <td class="font-mono text-cyan-400 font-bold">${index + 1}</td>
          <td>
            <div class="font-bold text-white">${e.participante?.nombreCompleto || 'Cadete'}</div>
            <div class="text-xs text-slate-400 font-mono">DNI: ${e.participante?.dni} | Capa: ${e.participante?.codigoCapa || 'GEN'}</div>
          </td>
          <td class="text-sm">${e.sesion?.dia || 'Día 1'}</td>
          <td class="text-xs text-slate-400 font-mono">${e.sesion?.fechaRegistro || ''}</td>
          <td>
            <span class="font-bold font-mono text-base ${isApproved ? 'text-cyan-300' : 'text-amber-400'}">
              ${e.metricas?.puntaje ?? 0} pts
            </span>
            <div class="text-[11px] text-slate-400">Nota: ${e.metricas?.puntajeSobre20 ?? 0}/20</div>
          </td>
          <td>${statusBadge}</td>
          <td class="text-xs font-mono text-slate-300">${e.gamificacion?.rango || 'Recluta'}</td>
          <td>
            ${isApproved ? `
              <a href="certificado.html?dni=${e.participante?.dni}&dia=${encodeURIComponent(e.sesion?.dia)}&score=${e.metricas?.puntaje}" target="_blank" class="px-2.5 py-1 rounded bg-sky-900/50 hover:bg-sky-800 border border-sky-400/50 text-sky-300 text-xs font-mono inline-flex items-center gap-1">
                <span>📜</span> Certificado
              </a>
            ` : `<span class="text-xs text-slate-600 font-mono">-</span>`}
          </td>
        </tr>
      `;
    }).join('');
  }
}

window.dashboardController = new DashboardController();
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('dashboard-view-container')) {
    window.dashboardController.init();
  }
});
