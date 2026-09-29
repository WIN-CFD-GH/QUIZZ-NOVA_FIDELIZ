/**
 * MISIÓN WINNER - NOVA FIDELIZ
 * SERVICIO DE IMPORTACIÓN Y EXPORTACIÓN EXCEL (excel-service.js)
 * Basado en SheetJS (XLSX)
 */

class ExcelService {
  /**
   * Exporta la lista de evaluaciones completadas a un archivo Excel (.xlsx)
   */
  exportEvaluacionesToExcel(evaluaciones, filename = "Mision_Winner_Evaluaciones.xlsx") {
    if (typeof XLSX === 'undefined') {
      alert("Librería de exportación Excel no cargada.");
      return;
    }

    const data = evaluaciones.map((e, index) => ({
      "N°": index + 1,
      "DNI": e.participante?.dni || "N/A",
      "Nombre Completo": e.participante?.nombreCompleto || "N/A",
      "Área": e.participante?.area || "N/A",
      "Código Capa": e.participante?.codigoCapa || "N/A",
      "Día Formativo": e.sesion?.dia || "N/A",
      "Fecha": e.sesion?.fechaRegistro || new Date(e.timestamp).toLocaleDateString(),
      "Puntaje (100)": e.metricas?.puntaje ?? 0,
      "Nota (20)": e.metricas?.puntajeSobre20 ?? ((e.metricas?.puntaje ?? 0) / 5),
      "Porcentaje": `${e.metricas?.porcentaje ?? 0}%`,
      "Aciertos": e.metricas?.aciertos ?? 0,
      "Errores": e.metricas?.errores ?? 0,
      "Estado": e.metricas?.estado || (e.metricas?.aprobado ? "APROBADO" : "REFORZAR CONOCIMIENTOS"),
      "Rango Obtenido": e.gamificacion?.rango || "N/A",
      "Tiempo Total (seg)": e.sesion?.tiempoTotalSegundos || 0
    }));

    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Evaluaciones");
    XLSX.writeFile(wb, filename);
  }

  /**
   * Exporta el banco de preguntas a Excel
   */
  exportBancoToExcel(preguntas, filename = "Banco_Preguntas_Winner.xlsx") {
    if (typeof XLSX === 'undefined') {
      alert("Librería XLSX no disponible.");
      return;
    }

    const data = preguntas.map(p => ({
      "ID": p.id,
      "Día": p.dia,
      "Nivel (1:Fácil, 2:Medio, 3:Difícil)": p.nivel,
      "Nivel Nombre": p.nivelLabel,
      "Categoría": p.categoria,
      "Tipo Pregunta": p.tipo,
      "Enunciado": p.enunciado,
      "Opción 1": p.opciones?.[0] || "",
      "Opción 2": p.opciones?.[1] || "",
      "Opción 3": p.opciones?.[2] || "",
      "Opción 4": p.opciones?.[3] || "",
      "Respuesta Correcta (0 a 3)": p.respuestaCorrecta,
      "Explicación / Feedback": p.explicacion || "",
      "Audio Texto": p.audioTexto || ""
    }));

    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "BancoPreguntas");
    XLSX.writeFile(wb, filename);
  }

  /**
   * Importa preguntas desde un archivo Excel subido por el usuario
   */
  async importBancoFromExcel(file) {
    return new Promise((resolve, reject) => {
      if (typeof XLSX === 'undefined') {
        return reject(new Error("Librería XLSX no cargada."));
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: 'array' });
          const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
          const rows = XLSX.utils.sheet_to_json(firstSheet);

          const formattedQuestions = rows.map((r, idx) => {
            const opciones = [];
            if (r["Opción 1"]) opciones.push(String(r["Opción 1"]));
            if (r["Opción 2"]) opciones.push(String(r["Opción 2"]));
            if (r["Opción 3"]) opciones.push(String(r["Opción 3"]));
            if (r["Opción 4"]) opciones.push(String(r["Opción 4"]));

            const nivelNum = Number(r["Nivel (1:Fácil, 2:Medio, 3:Difícil)"] || r["Nivel"] || 1);
            const nivelLabels = { 1: "Cadete Espacial", 2: "Piloto Interplanetario", 3: "Comandante Galáctico" };

            return {
              id: r["ID"] ? String(r["ID"]) : `preg_imp_${Date.now()}_${idx}`,
              dia: r["Día"] ? String(r["Día"]) : "Día 1",
              diaNumero: parseInt(String(r["Día"]).replace(/\D/g, '')) || 1,
              nivel: nivelNum,
              nivelLabel: nivelLabels[nivelNum] || "Cadete Espacial",
              categoria: r["Categoría"] ? String(r["Categoría"]) : "General",
              tipo: r["Tipo Pregunta"] ? String(r["Tipo Pregunta"]) : "opcion_multiple",
              enunciado: r["Enunciado"] ? String(r["Enunciado"]) : "Sin enunciado",
              audioTexto: r["Audio Texto"] ? String(r["Audio Texto"]) : String(r["Enunciado"]),
              opciones: opciones.length > 0 ? opciones : ["Opción A", "Opción B"],
              respuestaCorrecta: Number(r["Respuesta Correcta (0 a 3)"] || 0),
              explicacion: r["Explicación / Feedback"] ? String(r["Explicación / Feedback"]) : ""
            };
          });

          resolve(formattedQuestions);
        } catch (err) {
          reject(err);
        }
      };
      reader.onerror = (err) => reject(err);
      reader.readAsArrayBuffer(file);
    });
  }
}

window.excelService = new ExcelService();
