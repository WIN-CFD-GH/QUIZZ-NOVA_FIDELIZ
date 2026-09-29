/**
 * MISIÓN WINNER - NOVA FIDELIZ
 * SERVICIO CENTRAL DE ALMACENAMIENTO FIRESTORE (storage-service.js)
 * 
 * Gestión Integral de las 8 Colecciones Oficiales de Firebase Firestore:
 * 1. participantes
 * 2. resultados
 * 3. quiz_attempts
 * 4. preguntas
 * 5. insignias
 * 6. ranking
 * 7. configuracion
 * 8. auditoria
 * 
 * Con Espejo LocalStorage y Contingencia Offline Automática
 */

class StorageService {
  constructor() {
    this.COLLECTIONS = {
      PARTICIPANTES: 'participantes',
      RESULTADOS: 'resultados',
      QUIZ_ATTEMPTS: 'quiz_attempts',
      PREGUNTAS: 'preguntas',
      INSIGNIAS: 'insignias',
      RANKING: 'ranking',
      CONFIGURACION: 'configuracion',
      AUDITORIA: 'auditoria'
    };

    this.LOCAL_KEYS = {
      RESULTADOS: 'mw_resultados_store',
      PREGUNTAS: 'mw_preguntas_store',
      PARTICIPANTES: 'mw_participantes_store',
      RANKING: 'mw_ranking_store',
      ACTIVE_CADET: 'mw_active_cadet'
    };

    this.initLocalFallback();
    this.initFirestoreDatabase();
  }

  get firestore() {
    return window.WINNER_FIREBASE?.db || null;
  }

  get isOnline() {
    return window.WINNER_FIREBASE?.isConnected() && this.firestore !== null;
  }

  /**
   * Inicialización del banco local y contingencia
   */
  initLocalFallback() {
    const localPreguntas = localStorage.getItem(this.LOCAL_KEYS.PREGUNTAS);
    const initial = window.INITIAL_QUESTIONS || [];
    if (!localPreguntas) {
      localStorage.setItem(this.LOCAL_KEYS.PREGUNTAS, JSON.stringify(initial));
    }
  }

  /**
   * Inicializa colecciones clave en Firestore si están vacías (Sembrado inicial)
   */
  async initFirestoreDatabase() {
    if (!this.isOnline) return;

    try {
      // 1. Verificar configuración global en Firestore
      const configRef = this.firestore.collection(this.COLLECTIONS.CONFIGURACION).doc('sistema_global');
      const configSnap = await configRef.get();
      if (!configSnap.exists) {
        await configRef.set({
          appName: "MISIÓN WINNER - NOVA FIDELIZ",
          subTitle: "Academia Galáctica de Formación Continua",
          version: "2.5.0",
          fechaInstalacion: new Date().toISOString(),
          approvalScoreMin: 80,
          totalQuestionsPerQuiz: 10,
          areaOficial: "🚀 Fidelizaciones"
        });
        console.log("☁️ [Firestore] Colección 'configuracion' inicializada.");
      }

      // 2. Sembrado automático de 'preguntas' si la colección está vacía
      const preguntasSnap = await this.firestore.collection(this.COLLECTIONS.PREGUNTAS).limit(5).get();
      if (preguntasSnap.empty && window.INITIAL_QUESTIONS && window.INITIAL_QUESTIONS.length > 0) {
        console.log("🚀 [Firestore] Sembrando 110 preguntas oficiales en la colección 'preguntas'...");
        const batch = this.firestore.batch();
        window.INITIAL_QUESTIONS.forEach(q => {
          const docRef = this.firestore.collection(this.COLLECTIONS.PREGUNTAS).doc(q.id);
          batch.set(docRef, {
            id: q.id,
            diaFormativo: q.dia,
            diaNumero: q.diaNumero,
            modulo: q.modulo,
            categoria: q.categoria,
            nivelDificultad: q.nivel,
            nivelLabel: q.nivelLabel || (q.nivel === 1 ? "Cadete Espacial" : q.nivel === 2 ? "Piloto Interplanetario" : "Comandante Galáctico"),
            pregunta: q.enunciado,
            enunciado: q.enunciado,
            opciones: q.opciones,
            respuestaCorrecta: q.respuestaCorrecta,
            explicacion: q.explicacion,
            audioTexto: q.audioTexto || q.enunciado,
            estado: "activo",
            fechaCreacion: new Date().toISOString()
          });
        });
        await batch.commit();
        console.log("✅ [Firestore] 110 preguntas oficiales sembradas exitosamente en la nube.");
        
        await this.logAuditoria("BANCO_PREGUNTAS_SEMBRADO", "Sistema", {
          totalPreguntas: window.INITIAL_QUESTIONS.length
        });
      }
    } catch (err) {
      console.warn("⚠️ [Firestore] Aviso durante inicialización de colecciones:", err.message);
    }
  }

  // =========================================================================
  // GESTIÓN DEL PARTICIPANTE ACTIVO EN SESIÓN DEL NAVEGADOR
  // =========================================================================
  setActiveCadet(data) {
    sessionStorage.setItem(this.LOCAL_KEYS.ACTIVE_CADET, JSON.stringify(data));
  }

  getActiveCadet() {
    const raw = sessionStorage.getItem(this.LOCAL_KEYS.ACTIVE_CADET);
    return raw ? JSON.parse(raw) : null;
  }

  clearActiveCadet() {
    sessionStorage.removeItem(this.LOCAL_KEYS.ACTIVE_CADET);
  }

  // =========================================================================
  // EVALUACIONES Y RESULTADOS (Colecciones: resultados, participantes, quiz_attempts, ranking, insignias)
  // =========================================================================

  /**
   * Guarda una evaluación completa sincronizando simultáneamente en las 5 colecciones relacionadas
   */
  async saveEvaluacion(evalData) {
    const dni = String(evalData.participante.dni).trim();
    const nombre = evalData.participante.nombreCompleto;
    const supervisor = evalData.participante.codigoCapa || "GENERAL";
    const area = evalData.participante.area || "🚀 Fidelizaciones";
    const diaFormativo = evalData.sesion.dia || "Día 1";
    const diaNumero = Number(evalData.sesion.diaNumero) || 1;

    // Buscar nombre del módulo formativo
    const moduloConfig = (window.WINNER_CONFIG?.diasFormacion || []).find(d => d.numero === diaNumero || d.short === diaFormativo);
    const tema = moduloConfig ? moduloConfig.modulo : diaFormativo;

    const puntaje = Number(evalData.metricas.puntaje) || 0;
    const porcentaje = Number(evalData.metricas.porcentaje) || 0;
    const aciertos = Number(evalData.metricas.aciertos) || 0;
    const errores = Number(evalData.metricas.errores) || 0;
    const aprobado = Boolean(evalData.metricas.aprobado);
    const fechaIso = new Date().toISOString();

    // Verificación especial Día 11: Role Play Final
    const isDia11Approved = (diaNumero === 11 || diaFormativo === "Día 11") && aprobado;
    let finalRango = evalData.gamificacion.rango;
    let tituloMision = null;

    if (isDia11Approved) {
      tituloMision = "Tripulante Oficial de la Misión WINNER";
      finalRango = "Tripulante Oficial de la Nave Fidelizaciones";
    }

    // 1. Documento para la Colección: resultados
    const resultadoDoc = {
      id: evalData.id || `res_${dni}_${diaNumero}_${Date.now()}`,
      participanteId: dni,
      nombreParticipante: nombre,
      dni: dni,
      diaFormativo: diaFormativo,
      diaNumero: diaNumero,
      tema: tema,
      puntaje: puntaje,
      porcentaje: porcentaje,
      aciertos: aciertos,
      errores: errores,
      aprobado: aprobado,
      rangoObtenido: finalRango,
      fechaEvaluacion: fechaIso,
      timestamp: Date.now()
    };

    // 2. Documento para la Colección: quiz_attempts
    const attemptDoc = {
      id: `attempt_${dni}_${Date.now()}`,
      participanteId: dni,
      quizId: resultadoDoc.id,
      diaFormativo: diaFormativo,
      fechaInicio: new Date(Date.now() - ((evalData.sesion.tiempoTotalSegundos || 60) * 1000)).toISOString(),
      fechaFin: fechaIso,
      tiempoInvertido: evalData.sesion.tiempoTotalSegundos || 0,
      puntajeFinal: puntaje,
      aprobado: aprobado,
      respuestas: (evalData.respuestasDetalle || []).map(r => ({
        preguntaId: r.preguntaId,
        enunciado: r.enunciado,
        opcionSeleccionada: r.opcionSeleccionada,
        opcionCorrecta: r.opcionCorrecta,
        esCorrecta: r.esCorrecta
      }))
    };

    // Guardar en espejo local (LocalStorage)
    let localesResultados = this.getLocalResultados();
    localesResultados.unshift({
      ...resultadoDoc,
      participante: evalData.participante,
      sesion: evalData.sesion,
      metricas: evalData.metricas,
      gamificacion: {
        ...evalData.gamificacion,
        rango: finalRango
      },
      respuestasDetalle: evalData.respuestasDetalle
    });
    localStorage.setItem(this.LOCAL_KEYS.RESULTADOS, JSON.stringify(localesResultados));

    // 3. Sincronización en la Nube (Firestore)
    if (this.isOnline) {
      try {
        // A) Guardar en 'resultados'
        await this.firestore.collection(this.COLLECTIONS.RESULTADOS).doc(resultadoDoc.id).set(resultadoDoc);
        console.log("☁️ [Firestore] Resultado registrado en 'resultados':", resultadoDoc.id);

        // B) Guardar en 'quiz_attempts'
        await this.firestore.collection(this.COLLECTIONS.QUIZ_ATTEMPTS).doc(attemptDoc.id).set(attemptDoc);
        console.log("☁️ [Firestore] Intento registrado en 'quiz_attempts':", attemptDoc.id);

        // C) Actualizar Colección 'participantes'
        const partRef = this.firestore.collection(this.COLLECTIONS.PARTICIPANTES).doc(dni);
        const partSnap = await partRef.get();
        let fechaRegistro = fechaIso;
        let insigniasPrevias = [];

        if (partSnap.exists) {
          const prev = partSnap.data();
          fechaRegistro = prev.fechaRegistro || fechaIso;
          insigniasPrevias = prev.insigniasObtenidas || [];
        }

        const insigniasCombinadas = Array.from(new Set([...insigniasPrevias, ...(evalData.gamificacion.insignias || [])]));
        const totalAprobadas = evalData.gamificacion.totalQuizzesAprobados || (aprobado ? 1 : 0);
        const porcentajeAvance = Math.min(100, Math.round((totalAprobadas / 11) * 100));

        const participantUpdate = {
          nombreCompleto: nombre,
          dni: dni,
          supervisor: supervisor,
          areaOperativa: area,
          fechaRegistro: fechaRegistro,
          fechaUltimaActividad: fechaIso,
          rangoActual: finalRango,
          porcentajeAvance: porcentajeAvance,
          insigniasObtenidas: insigniasCombinadas
        };

        if (isDia11Approved) {
          participantUpdate.tituloHonorifico = "Tripulante Oficial de la Misión WINNER";
          participantUpdate.graduadoNaveFidelizaciones = true;
          participantUpdate.fechaGraduacion = fechaIso;
        }

        await partRef.set(participantUpdate, { merge: true });
        console.log("☁️ [Firestore] Perfil actualizado en 'participantes':", dni);

        // D) Actualizar Colección 'insignias'
        if (evalData.gamificacion.insignias && evalData.gamificacion.insignias.length > 0) {
          const batchInsignias = this.firestore.batch();
          evalData.gamificacion.insignias.forEach(badgeId => {
            const badgeObj = (window.WINNER_CONFIG?.insignias || []).find(b => b.id === badgeId);
            const badgeDocRef = this.firestore.collection(this.COLLECTIONS.INSIGNIAS).doc(`insignia_${dni}_${badgeId}`);
            batchInsignias.set(badgeDocRef, {
              participanteId: dni,
              insignia: badgeObj?.nombre || badgeId,
              insigniaId: badgeId,
              icono: badgeObj?.icono || "🏅",
              fechaObtencion: fechaIso,
              descripción: badgeObj?.descripcion || "Insignia espacial de honor"
            }, { merge: true });
          });
          await batchInsignias.commit();
        }

        // E) Actualizar Colección 'ranking'
        await this.updateRankingForParticipant(dni, nombre, finalRango);

        // F) Registrar en 'auditoria'
        await this.logAuditoria("EVALUACION_COMPLETADA", dni, {
          diaFormativo,
          tema,
          puntaje,
          aprobado,
          rango: finalRango,
          esGraduado: isDia11Approved
        });

      } catch (err) {
        console.warn("⚠️ [Firestore] Error sincronizando evaluación:", err.message);
      }
    }

    return resultadoDoc;
  }

  /**
   * Recalcula y actualiza la posición del participante en la colección 'ranking'
   */
  async updateRankingForParticipant(dni, nombre, rangoActual) {
    if (!this.isOnline) return;

    try {
      const snap = await this.firestore.collection(this.COLLECTIONS.RESULTADOS)
        .where('dni', '==', dni)
        .get();

      let sum = 0;
      let count = 0;
      let aprobadas = 0;

      snap.forEach(doc => {
        const d = doc.data();
        sum += (Number(d.puntaje) || 0);
        count++;
        if (d.aprobado) aprobadas++;
      });

      const promedio = count > 0 ? Number((sum / count).toFixed(1)) : 0;

      await this.firestore.collection(this.COLLECTIONS.RANKING).doc(dni).set({
        participanteId: dni,
        nombreParticipante: nombre,
        dni: dni,
        promedioGeneral: promedio,
        evaluacionesAprobadas: aprobadas,
        totalEvaluaciones: count,
        rangoActual: rangoActual,
        fechaActualizacion: new Date().toISOString()
      }, { merge: true });

      console.log("☁️ [Firestore] Ranking actualizado para:", dni, `Promedio: ${promedio}`);
    } catch (err) {
      console.warn("⚠️ [Firestore] Error actualizando ranking:", err.message);
    }
  }

  /**
   * Obtiene todos los resultados para el Dashboard y análisis
   */
  async getAllEvaluaciones() {
    if (this.isOnline) {
      try {
        const snap = await this.firestore.collection(this.COLLECTIONS.RESULTADOS)
          .orderBy('fechaEvaluacion', 'desc')
          .get();

        if (!snap.empty) {
          const list = [];
          snap.forEach(doc => {
            const data = doc.data();
            list.push({
              ...data,
              id: doc.id,
              participante: {
                nombreCompleto: data.nombreParticipante,
                dni: data.dni,
                area: "🚀 Fidelizaciones"
              },
              sesion: {
                dia: data.diaFormativo,
                diaNumero: data.diaNumero || 1,
                fechaRegistro: data.fechaEvaluacion ? data.fechaEvaluacion.split('T')[0] : ""
              },
              metricas: {
                puntaje: data.puntaje,
                puntajeSobre20: (data.puntaje / 5),
                porcentaje: data.porcentaje,
                aciertos: data.aciertos,
                errores: data.errores,
                aprobado: data.aprobado
              },
              gamificacion: {
                rango: data.rangoObtenido
              }
            });
          });
          localStorage.setItem(this.LOCAL_KEYS.RESULTADOS, JSON.stringify(list));
          return list;
        }
      } catch (err) {
        console.warn("⚠️ [Firestore] Consulta de resultados con fallback a local:", err.message);
      }
    }

    return this.getLocalResultados();
  }

  getLocalResultados() {
    const raw = localStorage.getItem(this.LOCAL_KEYS.RESULTADOS);
    return raw ? JSON.parse(raw) : [];
  }

  async getEvaluacionesByDni(dni) {
    const all = await this.getAllEvaluaciones();
    return all.filter(e => String(e.dni || e.participante?.dni).trim() === String(dni).trim());
  }

  async checkDuplicateAttempt(dni, dia) {
    const history = await this.getEvaluacionesByDni(dni);
    return history.filter(e => (e.diaFormativo === dia || e.sesion?.dia === dia));
  }

  /**
   * Obtiene el Ranking TOP 10 directamente de la colección 'ranking'
   */
  async getTopRanking(limit = 10) {
    if (this.isOnline) {
      try {
        const snap = await this.firestore.collection(this.COLLECTIONS.RANKING)
          .orderBy('promedioGeneral', 'desc')
          .limit(limit)
          .get();

        if (!snap.empty) {
          const rankList = [];
          snap.forEach(doc => rankList.push({ ...doc.data(), id: doc.id }));
          return rankList;
        }
      } catch (err) {
        console.warn("⚠️ [Firestore] Error obteniendo ranking online:", err.message);
      }
    }

    // Fallback: calcular ranking desde resultados locales
    const evals = this.getLocalResultados();
    const map = {};
    evals.forEach(e => {
      const d = e.dni || e.participante?.dni;
      const nom = e.nombreParticipante || e.participante?.nombreCompleto;
      if (!map[d]) map[d] = { dni: d, nombreParticipante: nom, sum: 0, count: 0, aprobadas: 0, rangoActual: e.rangoObtenido || e.gamificacion?.rango || "Cadete" };
      map[d].sum += (Number(e.puntaje || e.metricas?.puntaje) || 0);
      map[d].count++;
      if (e.aprobado || e.metricas?.aprobado) map[d].aprobadas++;
    });

    return Object.values(map)
      .map(item => ({
        ...item,
        promedioGeneral: item.count > 0 ? Number((item.sum / item.count).toFixed(1)) : 0,
        evaluacionesAprobadas: item.aprobadas
      }))
      .sort((a, b) => b.promedioGeneral - a.promedioGeneral)
      .slice(0, limit);
  }

  /**
   * Obtiene todos los participantes registrados en la colección 'participantes'
   */
  async getAllParticipantes() {
    if (this.isOnline) {
      try {
        const snap = await this.firestore.collection(this.COLLECTIONS.PARTICIPANTES).get();
        if (!snap.empty) {
          const list = [];
          snap.forEach(doc => list.push({ ...doc.data(), id: doc.id }));
          return list;
        }
      } catch (err) {
        console.warn("⚠️ [Firestore] Error obteniendo participantes:", err.message);
      }
    }

    const evals = this.getLocalResultados();
    const map = {};
    evals.forEach(e => {
      const d = e.dni || e.participante?.dni;
      if (!map[d]) {
        map[d] = {
          dni: d,
          nombreCompleto: e.nombreParticipante || e.participante?.nombreCompleto,
          areaOperativa: "🚀 Fidelizaciones",
          rangoActual: e.rangoObtenido || e.gamificacion?.rango || "Cadete"
        };
      }
    });
    return Object.values(map);
  }

  // =========================================================================
  // BANCO OFICIAL DE PREGUNTAS (Colección: preguntas)
  // =========================================================================

  /**
   * Obtiene las preguntas directamente de Firestore
   */
  async getBancoPreguntas() {
    if (this.isOnline) {
      try {
        const snap = await this.firestore.collection(this.COLLECTIONS.PREGUNTAS).get();
        if (!snap.empty) {
          const list = [];
          snap.forEach(doc => {
            const data = doc.data();
            list.push({
              ...data,
              id: doc.id,
              dia: data.diaFormativo || data.dia,
              enunciado: data.pregunta || data.enunciado,
              nivel: Number(data.nivelDificultad || data.nivel) || 1,
              activo: data.estado !== "inactivo"
            });
          });
          localStorage.setItem(this.LOCAL_KEYS.PREGUNTAS, JSON.stringify(list));
          return list;
        }
      } catch (err) {
        console.warn("⚠️ [Firestore] Lectura de preguntas online falló, usando local:", err.message);
      }
    }

    const raw = localStorage.getItem(this.LOCAL_KEYS.PREGUNTAS);
    return raw ? JSON.parse(raw) : (window.INITIAL_QUESTIONS || []);
  }

  /**
   * Guarda o edita una pregunta en Firestore en tiempo real
   */
  async savePregunta(pregunta) {
    if (!pregunta.id) {
      pregunta.id = 'preg_' + Date.now();
    }

    const firestoreData = {
      id: pregunta.id,
      diaFormativo: pregunta.diaFormativo || pregunta.dia,
      diaNumero: pregunta.diaNumero || (parseInt(String(pregunta.dia).replace(/\D/g, '')) || 1),
      modulo: pregunta.modulo || (pregunta.diaFormativo || pregunta.dia),
      categoria: pregunta.categoria || "General",
      nivelDificultad: Number(pregunta.nivelDificultad || pregunta.nivel) || 1,
      nivelLabel: pregunta.nivelLabel || (pregunta.nivel === 1 ? "Cadete Espacial" : pregunta.nivel === 2 ? "Piloto Interplanetario" : "Comandante Galáctico"),
      pregunta: pregunta.pregunta || pregunta.enunciado,
      enunciado: pregunta.pregunta || pregunta.enunciado,
      opciones: pregunta.opciones || [],
      respuestaCorrecta: Number(pregunta.respuestaCorrecta) || 0,
      explicacion: pregunta.explicacion || "",
      audioTexto: pregunta.audioTexto || pregunta.pregunta || pregunta.enunciado,
      estado: pregunta.activo === false ? "inactivo" : "activo",
      fechaModificacion: new Date().toISOString()
    };

    // Actualizar almacenamiento local
    let banco = await this.getBancoPreguntas();
    const idx = banco.findIndex(p => p.id === pregunta.id);
    if (idx >= 0) banco[idx] = { ...banco[idx], ...pregunta, ...firestoreData };
    else banco.push({ ...pregunta, ...firestoreData });
    localStorage.setItem(this.LOCAL_KEYS.PREGUNTAS, JSON.stringify(banco));

    // Guardar en Firestore
    if (this.isOnline) {
      try {
        await this.firestore.collection(this.COLLECTIONS.PREGUNTAS).doc(pregunta.id).set(firestoreData, { merge: true });
        console.log("☁️ [Firestore] Pregunta sincronizada en 'preguntas':", pregunta.id);

        await this.logAuditoria("PREGUNTA_GUARDADA", "Admin", {
          preguntaId: pregunta.id,
          dia: firestoreData.diaFormativo,
          categoria: firestoreData.categoria
        });
      } catch (err) {
        console.warn("⚠️ [Firestore] Error guardando pregunta en la nube:", err.message);
      }
    }

    return firestoreData;
  }

  /**
   * Elimina una pregunta de Firestore en tiempo real
   */
  async deletePregunta(preguntaId) {
    let banco = await this.getBancoPreguntas();
    banco = banco.filter(p => p.id !== preguntaId);
    localStorage.setItem(this.LOCAL_KEYS.PREGUNTAS, JSON.stringify(banco));

    if (this.isOnline) {
      try {
        await this.firestore.collection(this.COLLECTIONS.PREGUNTAS).doc(preguntaId).delete();
        console.log("☁️ [Firestore] Pregunta eliminada de 'preguntas':", preguntaId);

        await this.logAuditoria("PREGUNTA_ELIMINADA", "Admin", { preguntaId });
      } catch (err) {
        console.warn("⚠️ [Firestore] Error eliminando pregunta de Firestore:", err.message);
      }
    }
  }

  /**
   * Activa o desactiva una pregunta en Firestore
   */
  async togglePreguntaEstado(preguntaId) {
    const banco = await this.getBancoPreguntas();
    const q = banco.find(p => p.id === preguntaId);
    if (!q) return;

    q.activo = q.activo === false ? true : false;
    q.estado = q.activo ? "activo" : "inactivo";
    return await this.savePregunta(q);
  }

  async resetBancoToInitial() {
    const initial = window.INITIAL_QUESTIONS || [];
    localStorage.setItem(this.LOCAL_KEYS.PREGUNTAS, JSON.stringify(initial));
    if (this.isOnline) {
      await this.initFirestoreDatabase();
    }
    return initial;
  }

  // =========================================================================
  // AUDITORÍA DE SEGURIDAD Y GESTIÓN (Colección: auditoria)
  // =========================================================================
  async logAuditoria(accion, usuario, detalles = {}) {
    const logDoc = {
      accion,
      usuario,
      detalles,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent
    };

    if (this.isOnline) {
      try {
        await this.firestore.collection(this.COLLECTIONS.AUDITORIA).add(logDoc);
      } catch (err) {
        // Fallback silencioso para no bloquear la experiencia de usuario
      }
    }
  }
}

window.storageService = new StorageService();
