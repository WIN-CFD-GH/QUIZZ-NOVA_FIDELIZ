/**
 * MISIÓN WINNER - NOVA FIDELIZ
 * MOTOR DE EVALUACIÓN Y CABINA DE QUIZZES (quiz-engine.js)
 * Algoritmo 3-4-3 (Cadete, Piloto, Comandante), TTS, HUD de Cabina y Métricas
 */

class QuizEngine {
  constructor() {
    this.questions = [];
    this.currentIndex = 0;
    this.selectedAnswers = {};
    this.startTime = null;
    this.timerInterval = null;
    this.secondsElapsed = 0;
    this.streak = 0;
    this.maxStreak = 0;
    this.participant = null;
    this.isCompleted = false;
  }

  /**
   * Genera el set balanceado de 10 preguntas (3 fáciles, 4 medias, 3 difíciles) para el día
   * Aislamiento Estricto: Ningún día carga preguntas de otro módulo
   */
  async buildQuizSet(diaParam) {
    const allQuestions = await window.storageService.getBancoPreguntas();

    // 1. Extraer número de día objetivo
    let targetDayNum = null;
    if (typeof diaParam === 'number') {
      targetDayNum = diaParam;
    } else if (typeof diaParam === 'string') {
      const match = diaParam.match(/D[íi]a\s*(\d+)/i) || diaParam.match(/(\d+)/);
      if (match) targetDayNum = parseInt(match[1]);
    }

    // 2. Localizar configuración oficial del módulo
    const moduleConfig = (window.WINNER_CONFIG?.diasFormacion || []).find(d => 
      d.numero === targetDayNum || 
      d.short === diaParam || 
      d.nombre === diaParam ||
      (typeof diaParam === 'string' && d.modulo && diaParam.toUpperCase().includes(d.modulo.toUpperCase()))
    );
    const moduloNombre = moduleConfig ? moduleConfig.modulo : null;
    if (!targetDayNum && moduleConfig) {
      targetDayNum = moduleConfig.numero;
    }

    // 3. Filtrar estrictamente solo preguntas que pertenezcan a este día y módulo
    let diaPool = (allQuestions || []).filter(q => {
      if (targetDayNum && q.diaNumero === targetDayNum) return true;
      if (targetDayNum && q.dia && q.dia.trim().toLowerCase() === `día ${targetDayNum}`.toLowerCase()) return true;
      if (moduloNombre && q.modulo && q.modulo.trim().toUpperCase() === moduloNombre.trim().toUpperCase()) return true;
      if (typeof diaParam === 'string' && q.dia && q.dia.trim().toLowerCase() === diaParam.trim().toLowerCase()) return true;
      return false;
    });

    // 4. Si el pool local estuviese incompleto, consultar banco oficial INITIAL_QUESTIONS sin tocar otros módulos
    if (diaPool.length === 0 && window.INITIAL_QUESTIONS) {
      diaPool = window.INITIAL_QUESTIONS.filter(q => {
        if (targetDayNum && q.diaNumero === targetDayNum) return true;
        if (targetDayNum && q.dia && q.dia.trim().toLowerCase() === `día ${targetDayNum}`.toLowerCase()) return true;
        if (moduloNombre && q.modulo && q.modulo.trim().toUpperCase() === moduloNombre.trim().toUpperCase()) return true;
        return false;
      });
    }

    // 5. Garantía de aislamiento: Validación estricta anti-contaminación entre módulos
    diaPool = diaPool.filter(q => {
      if (targetDayNum && q.diaNumero && q.diaNumero !== targetDayNum) return false;
      if (moduloNombre && q.modulo && q.modulo.trim().toUpperCase() !== moduloNombre.trim().toUpperCase()) return false;
      return true;
    });

    const faciles = diaPool.filter(q => q.nivel === 1);
    const medias = diaPool.filter(q => q.nivel === 2);
    const dificiles = diaPool.filter(q => q.nivel === 3);

    const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

    const selectedFaciles = shuffle(faciles).slice(0, 3);
    const selectedMedias = shuffle(medias).slice(0, 4);
    const selectedDificiles = shuffle(dificiles).slice(0, 3);

    // Combinar en orden de dificultad pedagógica ascendente (Cadete -> Piloto -> Comandante)
    this.questions = [...selectedFaciles, ...selectedMedias, ...selectedDificiles];

    // Si aún faltasen preguntas para llegar a 10 por varianza, rellenar EXCLUSIVAMENTE del mismo diaPool
    if (this.questions.length < 10 && diaPool.length >= 10) {
      const rest = shuffle(diaPool.filter(q => !this.questions.some(item => item.id === q.id)));
      this.questions.push(...rest.slice(0, 10 - this.questions.length));
    }

    console.log(`🎯 [QuizEngine] Misión cargada: ${moduloNombre || 'Día ' + targetDayNum} | Preguntas aisladas: ${this.questions.length}`);

    this.currentIndex = 0;
    this.selectedAnswers = {};
    this.streak = 0;
    this.maxStreak = 0;
    this.secondsElapsed = 0;
    this.isCompleted = false;

    return this.questions;
  }

  startTimer(onTick) {
    this.startTime = Date.now();
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      this.secondsElapsed++;
      if (onTick) onTick(this.secondsElapsed);
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  getCurrentQuestion() {
    return this.questions[this.currentIndex] || null;
  }

  selectOption(optionIndex) {
    const q = this.getCurrentQuestion();
    if (!q || this.isCompleted) return;

    const isCorrect = optionIndex === q.respuestaCorrecta;
    this.selectedAnswers[this.currentIndex] = {
      questionId: q.id,
      selectedIndex: optionIndex,
      isCorrect,
      timeTaken: this.secondsElapsed
    };

    if (isCorrect) {
      this.streak++;
      if (this.streak > this.maxStreak) this.maxStreak = this.streak;
      if (window.spaceAudio) window.spaceAudio.playCorrect();
    } else {
      this.streak = 0;
      if (window.spaceAudio) window.spaceAudio.playWrong();
    }

    return { isCorrect, correctAnswer: q.respuestaCorrecta };
  }

  nextQuestion() {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
      return true;
    }
    return false;
  }

  prevQuestion() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      return true;
    }
    return false;
  }

  /**
   * Finaliza la evaluación y calcula métricas e impacto en la Carrera Espacial
   */
  async finishQuiz(participant) {
    this.stopTimer();
    this.isCompleted = true;
    this.participant = participant;

    let correctCount = 0;
    const detalles = [];

    this.questions.forEach((q, idx) => {
      const ans = this.selectedAnswers[idx];
      const isCorrect = ans ? ans.isCorrect : false;
      if (isCorrect) correctCount++;

      detalles.push({
        preguntaId: q.id,
        enunciado: q.enunciado,
        nivel: q.nivel,
        nivelLabel: q.nivelLabel,
        categoria: q.categoria,
        opcionSeleccionada: ans ? ans.selectedIndex : null,
        opcionCorrecta: q.respuestaCorrecta,
        esCorrecta: isCorrect,
        explicacion: q.explicacion || ""
      });
    });

    console.log("[1] Calculando puntaje");
    const totalQuestions = this.questions.length || 10;
    const puntaje = correctCount * 10; // 10 pts c/u => máx 100
    
    console.log("[2] Calculando porcentaje");
    const puntajeSobre20 = (puntaje / 5);
    const porcentaje = Math.round((correctCount / totalQuestions) * 100);
    const errorCount = totalQuestions - correctCount;
    const aprobado = porcentaje >= (window.WINNER_CONFIG?.approvalScoreMin || 80);
    const estado = aprobado ? "APROBADO" : "REFORZAR CONOCIMIENTOS";

    console.log("[3] Consultando historial previo");

    // Calcular historial previo del asesor para calcular sus quizzes aprobados
    let prevEvaluaciones = [];
    try {
      prevEvaluaciones = await Promise.race([
        window.storageService.getEvaluacionesByDni(participant.dni),
        new Promise((resolve) => setTimeout(() => {
          console.warn("⚠️ [QuizEngine] Timeout al obtener historial. Continuando con historial vacío/local.");
          // Intentar obtener directamente de local si Firebase se cuelga
          const localData = window.storageService.getLocalResultados();
          const localHist = localData.filter(e => String(e.dni || e.participante?.dni).trim() === String(participant.dni).trim());
          resolve(localHist);
        }, 4000)) // Timeout de 4 segundos
      ]);
    } catch (error) {
      console.error("⚠️ [QuizEngine] Error obteniendo historial previo", error);
      const localData = window.storageService.getLocalResultados();
      prevEvaluaciones = localData.filter(e => String(e.dni || e.participante?.dni).trim() === String(participant.dni).trim());
    }

    const previousXP = prevEvaluaciones.reduce((acc, curr) => acc + (Number(curr.metricas?.puntaje) || 0), 0);
    const newTotalXP = previousXP + puntaje;

    // Calcular cuántos quizzes aprobados tiene en total (incluyendo el actual si aprobó)
    const allApprovedSet = new Set();
    prevEvaluaciones.forEach(e => {
      if (e.metricas?.aprobado) allApprovedSet.add(e.sesion?.dia || e.id);
    });
    if (aprobado) {
      allApprovedSet.add(participant.dia || 'quiz_actual');
    }
    const totalApprovedCount = allApprovedSet.size;

    console.log("[4] Determinando rango");
    // Calcular progresión en la Carrera Espacial de 12 Niveles (0 a 11)
    const career = window.gamificationEngine.calculateCareerProgression(totalApprovedCount, newTotalXP);
    const unlockedBadges = window.gamificationEngine.getUnlockedBadges(
      [...prevEvaluaciones, { metricas: { porcentaje, puntaje, aprobado } }], 
      totalApprovedCount
    );

    const isDia11 = (participant.dia === 'Día 11' || participant.diaNumero === 11);
    const esGraduado = (career.isMaxRank || (isDia11 && aprobado));

    console.log("[5] Determinando medalla por día formativo");
    
    // Tabla de mapeo oficial solicitada
    const MEDALLAS_DIAS = {
      1: "medalla_día_1.png",
      2: "medalla_día_2.png",
      3: "medalla_día_3.png",
      4: "medalla_día_4.png",
      5: "medalla_día_5.png",
      6: "medalla_día_6.png",
      7: "medalla_día_7.png",
      8: "medalla_día_8.png",
      9: "medalla_día_9.png",
      10: "medalla_día_10.png",
      11: "medalla_día_10.png" // Fallback para día 11 si existiera
    };

    const diaNum = participant.diaNumero || parseInt((participant.dia || "").replace(/\D/g, "")) || 1;
    const medallaFileName = MEDALLAS_DIAS[diaNum] || "medalla_día_1.png";
    const medallaImagen = `medallas/${medallaFileName}`;
    
    // El nombre a mostrar será el nombre del Rango Alcanzado
    const medallaNombre = career.currentRank.rango || `Rango Día ${diaNum}`;
    const medallaNivel = career.currentRank.nivel || diaNum;

    console.log(`Día formativo: ${diaNum} - Rango: ${medallaNombre}`);
    console.log(`Ruta cargada: ${medallaImagen}`);

    const evaluacionPayload = {
      id: `eval_${participant.dni}_${Date.now()}`,
      participante: {
        nombreCompleto: participant.nombreCompleto,
        dni: participant.dni,
        area: participant.area,
        codigoCapa: participant.codigoCapa || "GENERAL",
        avatar: participant.avatar || "avatar_helios"
      },
      sesion: {
        dia: participant.dia || "Día 1",
        diaNumero: participant.diaNumero || 1,
        fechaRegistro: new Date().toISOString().split('T')[0],
        timestamp: Date.now(),
        tiempoTotalSegundos: this.secondsElapsed
      },
      metricas: {
        puntaje,
        puntajeSobre20,
        porcentaje,
        aciertos: correctCount,
        errores: errorCount,
        estado,
        aprobado
      },
      gamificacion: {
        rango: career.currentRank.rango,
        rangoNivel: career.currentRank.nivel,
        rangoAlcanzado: career.currentRank.rango,
        medalla: medallaNombre, // Mantenemos el campo medalla por retrocompatibilidad
        medallaNombre: medallaNombre,
        medallaImagen: medallaImagen,
        medallaNivel: medallaNivel,
        xpGanada: puntaje,
        xpTotalAcumulada: newTotalXP,
        totalQuizzesAprobados: totalApprovedCount,
        insignias: unlockedBadges.filter(b => b.unlocked).map(b => b.id),
        maxStreak: this.maxStreak,
        esGraduadoNaveFidelizaciones: esGraduado
      },
      respuestasDetalle: detalles
    };

    console.log("[5] Guardando resultado en Firebase (En segundo plano)");
    // Guardar en Firebase en segundo plano sin detener la UI
    setTimeout(async () => {
      try {
        await Promise.race([
          window.storageService.saveEvaluacion(evaluacionPayload),
          new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout Firebase")), 5000))
        ]);
        console.log("Guardado en Firebase exitoso en segundo plano.");
      } catch (error) {
        console.error("Resultados cargados correctamente. El guardado se encuentra reintentando o falló en Firebase.", error);
      }
    }, 0);

    console.log("[7] Cargando imagen de medalla");
    console.log(`Imagen asignada: ${medallaImagen}`);

    console.log("[8] Mostrando resultados");
    return {
      evaluacion: evaluacionPayload,
      career,
      unlockedBadges,
      isDia11Graduation: esGraduado,
      todasEvaluaciones: [...prevEvaluaciones, evaluacionPayload]
    };
  }
}

window.quizEngine = new QuizEngine();
