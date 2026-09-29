/**
 * MISIÓN WINNER - NOVA FIDELIZ
 * BANCO OFICIAL DE PREGUNTAS FORMACIONALES (initial-questions.js)
 * 11 Misiones Especializadas - 10 Preguntas por Día (3 Fáciles, 4 Medias, 3 Difíciles)
 * Total: 110 Preguntas Exclusivas por Módulo
 */

const INITIAL_QUESTIONS = [
  // =========================================================================
  // 🛰️ DÍA 1: PROTOCOLO DE ATENCIÓN
  // =========================================================================
  {
    id: "d1_01", dia: "Día 1", diaNumero: 1, nivel: 1, nivelLabel: "Cadete Espacial",
    modulo: "PROTOCOLO DE ATENCIÓN", categoria: "Saludo y Bienvenida", tipo: "opcion_multiple",
    enunciado: "¿Cuál es el saludo inicial reglamentario para establecer conexión de confianza según el protocolo WINNER?",
    audioTexto: "¿Cuál es el saludo inicial reglamentario para establecer conexión de confianza según el protocolo WINNER?",
    opciones: [
      "¿Sí, dígame qué problema tiene con el servicio?",
      "¡Buenos días! Bienvenido a WINNER, mi nombre es [Nombre], ¿con quién tengo el agrado de comunicarme hoy?",
      "Hola, soy de soporte, deme su DNI rápido por favor.",
      "WINNER telecomunicaciones, espere en línea un momento."
    ],
    respuestaCorrecta: 1,
    explicacion: "El saludo WINNER exige calidez, identificación del asesor y pregunta abierta para validar al titular con empatía."
  },
  {
    id: "d1_02", dia: "Día 1", diaNumero: 1, nivel: 1, nivelLabel: "Cadete Espacial",
    modulo: "PROTOCOLO DE ATENCIÓN", categoria: "Validación de Titularidad", tipo: "verdadero_falso",
    enunciado: "Para realizar cualquier cambio comercial o validación de fidelización es obligatorio validar al titular mediante preguntas de seguridad (DNI y datos asociados).",
    audioTexto: "Verdadero o falso: Para realizar cualquier cambio comercial o validación de fidelización es obligatorio validar al titular mediante preguntas de seguridad.",
    opciones: [
      "Verdadero - Es una política inquebrantable de seguridad y protección de datos.",
      "Falso - Si la persona que llama suena honesta se puede proceder sin validar."
    ],
    respuestaCorrecta: 0,
    explicacion: "La validación del titular previene fraudes, suplantaciones y asegura el cumplimiento regulatorio de telecomunicaciones."
  },
  {
    id: "d1_03", dia: "Día 1", diaNumero: 1, nivel: 1, nivelLabel: "Cadete Espacial",
    modulo: "PROTOCOLO DE ATENCIÓN", categoria: "Cultura WINNER", tipo: "opcion_multiple",
    enunciado: "¿Cuál es el pilar central de la misión de Fidelizaciones en NOVA?",
    audioTexto: "¿Cuál es el pilar central de la misión de Fidelizaciones en NOVA?",
    opciones: [
      "Cortar la llamada antes de los 3 minutos sin importar la solución.",
      "Escuchar activamente la necesidad real del cliente y brindar una solución de valor que preserve el servicio.",
      "Ofrecer descuentos indiscriminados sin indagar el motivo del descontento.",
      "Transferir al cliente al área legal de inmediato."
    ],
    respuestaCorrecta: 1,
    explicacion: "Fidelizar no es solo retener con precio, sino resolver la causa raíz y generar lealtad a largo plazo."
  },
  {
    id: "d1_04", dia: "Día 1", diaNumero: 1, nivel: 2, nivelLabel: "Piloto Interplanetario",
    modulo: "PROTOCOLO DE ATENCIÓN", categoria: "Escucha Activa", tipo: "caso_practico",
    enunciado: "CASO PRÁCTICO: El cliente indica alterado: '¡Llevo 2 días sin internet y trabajo remoto, exijo cancelar mi plan ahora mismo!'. ¿Cuál debe ser tu primera respuesta?",
    audioTexto: "Caso práctico: El cliente indica alterado que lleva 2 días sin internet y trabaja remoto, exigiendo cancelar. ¿Cuál debe ser tu primera respuesta?",
    opciones: [
      "'Cálmese señor, no es para tanto, la cancelación tarda 15 días hábiles'.",
      "'Comprendo perfectamente su urgencia laboral, señor [Cliente]. Lamento mucho el inconveniente; permítame revisar su enlace de inmediato para darle prioridad técnica y una compensación justa'.",
      "'Si cancela ahora tendrá una penalidad económica muy alta'.",
      "'Voy a derivarlo con soporte técnico para que ellos se encarguen'."
    ],
    respuestaCorrecta: 1,
    explicacion: "Validar la emoción y urgencia del cliente desactiva la hostilidad e inicia el proceso de resolución efectiva."
  },
  {
    id: "d1_05", dia: "Día 1", diaNumero: 1, nivel: 2, nivelLabel: "Piloto Interplanetario",
    modulo: "PROTOCOLO DE ATENCIÓN", categoria: "Protocolos de Espera", tipo: "escenario_operativo",
    enunciado: "ESCENARIO OPERATIVO: Durante la llamada requieres consultar el CRM y poner al cliente en espera. ¿Cuál es el procedimiento reglamentario?",
    audioTexto: "Escenario operativo: Durante la llamada requieres consultar el CRM y poner al cliente en espera. ¿Cuál es el procedimiento reglamentario?",
    opciones: [
      "Poner música de espera sin avisarle para no perder tiempo.",
      "Solicitar permiso al cliente, indicar el motivo, fijar un tiempo máximo de espera (no más de 2 minutos) y agradecer la espera al retomar.",
      "Dejar el micrófono abierto en silencio por 5 minutos.",
      "Decirle que vuelva a llamar en media hora."
    ],
    respuestaCorrecta: 1,
    explicacion: "Pedir permiso, acotar el tiempo y agradecer al retomar la llamada son normas básicas de respeto y calidad auditada."
  },
  {
    id: "d1_06", dia: "Día 1", diaNumero: 1, nivel: 2, nivelLabel: "Piloto Interplanetario",
    modulo: "PROTOCOLO DE ATENCIÓN", categoria: "Manejo de Objeciones", tipo: "opcion_multiple",
    enunciado: "¿Qué técnica de comunicación es la más eficaz para transformar una queja en una oportunidad de fidelización?",
    audioTexto: "¿Qué técnica de comunicación es la más eficaz para transformar una queja en una oportunidad de fidelización?",
    opciones: [
      "Técnica E.A.R. (Escuchar sin interrumpir, Aceptar la emoción y Resolver con compromiso).",
      "Técnica de persuasión forzada e insistencia reiterada.",
      "Ignorar los reclamos pasados y hablar solo de nuevas ofertas.",
      "Discutir con el cliente demostrando que el error fue de su router."
    ],
    respuestaCorrecta: 0,
    explicacion: "La técnica EAR conecta emocionalmente con el usuario y le demuestra interés genuino en resolver su situación."
  },
  {
    id: "d1_07", dia: "Día 1", diaNumero: 1, nivel: 2, nivelLabel: "Piloto Interplanetario",
    modulo: "PROTOCOLO DE ATENCIÓN", categoria: "Silencios Prolongados", tipo: "escenario_operativo",
    enunciado: "Si el cliente guarda silencio prolongado por más de 30 segundos, ¿qué frase de chequeo de línea corresponde?",
    audioTexto: "Si el cliente guarda silencio prolongado por más de 30 segundos, ¿qué frase de chequeo de línea corresponde?",
    opciones: [
      "'¿Aló? ¿Sigue ahí o ya se fue?'",
      "'Estimado señor [Cliente], ¿continúa en la línea? Deseo verificar que me escucha con claridad'.",
      "Colgar inmediatamente la llamada.",
      "No decir nada y esperar a que el cliente hable."
    ],
    respuestaCorrecta: 1,
    explicacion: "El chequeo de línea profesional verifica la conectividad sin sonar tosco o impaciente."
  },
  {
    id: "d1_08", dia: "Día 1", diaNumero: 1, nivel: 3, nivelLabel: "Comandante Galáctico",
    modulo: "PROTOCOLO DE ATENCIÓN", categoria: "Cierres y Fidelización", tipo: "caso_practico",
    enunciado: "¿Cuál es el protocolo de cierre ganador tras haber gestionado con éxito una llamada de atención?",
    audioTexto: "¿Cuál es el protocolo de cierre ganador tras haber gestionado con éxito una llamada de atención?",
    opciones: [
      "Colgar rápido antes de que el cliente cambie de opinión.",
      "Recapitular los acuerdos alcanzados, brindar el código de ticket/gestión, preguntar si queda alguna duda adicional y agradecer cordialmente la llamada.",
      "Decirle que califique con 5 estrellas de forma obligatoria.",
      "Indicar que no vuelva a llamar por el mismo tema."
    ],
    respuestaCorrecta: 1,
    explicacion: "El resumen final y el número de atención transmiten seguridad, orden y transparencia total."
  },
  {
    id: "d1_09", dia: "Día 1", diaNumero: 1, nivel: 3, nivelLabel: "Comandante Galáctico",
    modulo: "PROTOCOLO DE ATENCIÓN", categoria: "Faltas Críticas de Calidad", tipo: "opcion_multiple",
    enunciado: "En auditorías de calidad de WINNER, ¿cuál de las siguientes acciones se considera FALTA CRÍTICA CERO?",
    audioTexto: "En auditorías de calidad de WINNER, ¿cuál de las siguientes acciones se considera FALTA CRÍTICA CERO?",
    opciones: [
      "Colgar intencionalmente la llamada al cliente o emitir faltas de respeto e insultos.",
      "Tener una modulación de voz calmada.",
      "Preguntar el número de celular de contacto.",
      "Demorar 5 segundos en abrir una pestaña en Nova."
    ],
    respuestaCorrecta: 0,
    explicacion: "El corte deliberado o el maltrato verbal constituyen faltas críticas no toleradas en el servicio WINNER."
  },
  {
    id: "d1_10", dia: "Día 1", diaNumero: 1, nivel: 3, nivelLabel: "Comandante Galáctico",
    modulo: "PROTOCOLO DE ATENCIÓN", categoria: "Empatía Avanzada", tipo: "opcion_multiple",
    enunciado: "¿Cuál es la diferencia entre ser empático y ser complaciente en el protocolo WINNER?",
    audioTexto: "¿Cuál es la diferencia entre ser empático y ser complaciente en el protocolo WINNER?",
    opciones: [
      "Empatía es comprender la emoción y situación del cliente buscando soluciones reales; complacencia es prometer imposibles solo para evitar el conflicto.",
      "No hay diferencia, significan lo mismo.",
      "Ser empático es darle la razón en todo sin importar las normas.",
      "Ser complaciente es transferir la llamada de inmediato."
    ],
    respuestaCorrecta: 0,
    explicacion: "La empatía conecta sin prometer falsedades que luego dañen la credibilidad de la empresa."
  },

  // =========================================================================
  // 🛰️ DÍA 2: PRODUCTO SVA (SERVICIOS DE VALOR AGREGADO)
  // =========================================================================
  {
    id: "d2_01", dia: "Día 2", diaNumero: 2, nivel: 1, nivelLabel: "Cadete Espacial",
    modulo: "PRODUCTO SVA", categoria: "Definición SVA", tipo: "opcion_multiple",
    enunciado: "¿Qué significa la sigla SVA en el portafolio comercial de WINNER?",
    audioTexto: "¿Qué significa la sigla SVA en el portafolio comercial de WINNER?",
    opciones: [
      "Servicios de Valor Agregado (servicios complementarios al internet de fibra como WINNER TV, Mesh e IP fija).",
      "Sistema de Ventas Automático.",
      "Soporte Virtual Avanzado.",
      "Servidores de Video Autónomos."
    ],
    respuestaCorrecta: 0,
    explicacion: "Los SVA son servicios adicionales que enriquecen la experiencia del usuario y elevan el ARPU."
  },
  {
    id: "d2_02", dia: "Día 2", diaNumero: 2, nivel: 1, nivelLabel: "Cadete Espacial",
    modulo: "PRODUCTO SVA", categoria: "WINNER TV", tipo: "verdadero_falso",
    enunciado: "El servicio de WINNER TV funciona a través de una aplicación multidispositivo que permite pausar y retroceder transmisiones en vivo.",
    audioTexto: "Verdadero o falso: El servicio de WINNER TV funciona a través de una aplicación multidispositivo que permite pausar y retroceder transmisiones en vivo.",
    opciones: [
      "Verdadero - Permite disfrutar de canales en vivo y funciones interactivas en Smart TVs, smartphones y tablets.",
      "Falso - Solo funciona con cables coaxiales analógicos antiguos."
    ],
    respuestaCorrecta: 0,
    explicacion: "WINNER TV es una plataforma digital moderna 100% sobre fibra óptica y multidispositivo."
  },
  {
    id: "d2_03", dia: "Día 2", diaNumero: 2, nivel: 1, nivelLabel: "Cadete Espacial",
    modulo: "PRODUCTO SVA", categoria: "Repetidor Mesh", tipo: "opcion_multiple",
    enunciado: "¿Cuál es el principal beneficio de contratar un repetidor WiFi Mesh como SVA?",
    audioTexto: "¿Cuál es el principal beneficio de contratar un repetidor WiFi Mesh como SVA?",
    opciones: [
      "Extender la cobertura inalámbrica en hogares amplios o de varios pisos creando una red unificada sin cortes de señal.",
      "Cambiar el color de las luces del router.",
      "Aumentar la velocidad del plan al triple sin costo.",
      "Bloquear la conexión de los vecinos automáticamente."
    ],
    respuestaCorrecta: 0,
    explicacion: "La tecnología Mesh crea una sola red mallada e inteligente con roaming transparente en todo el hogar."
  },
  {
    id: "d2_04", dia: "Día 2", diaNumero: 2, nivel: 2, nivelLabel: "Piloto Interplanetario",
    modulo: "PRODUCTO SVA", categoria: "IP Pública Fija", tipo: "caso_practico",
    enunciado: "CASO: Un cliente cuenta con cámaras de seguridad CCTV y servidores locales y solicita cancelar porque no puede ingresar desde fuera. ¿Qué SVA es la solución técnica ideal?",
    audioTexto: "Caso: Un cliente con cámaras CCTV y servidores locales no puede acceder desde fuera. ¿Qué SVA es la solución ideal?",
    opciones: [
      "Ofrecerle el servicio SVA de IP Pública Fija para permitir acceso remoto estable y direccionamiento seguro.",
      "Decirle que apague sus cámaras de seguridad.",
      "Ofrecerle un descuento en la factura del teléfono.",
      "Aumentar su velocidad de descarga."
    ],
    respuestaCorrecta: 0,
    explicacion: "La IP Pública Fija es indispensable para accesos remotos a CCTV, DVRs y servidores propios."
  },
  {
    id: "d2_05", dia: "Día 2", diaNumero: 2, nivel: 2, nivelLabel: "Piloto Interplanetario",
    modulo: "PRODUCTO SVA", categoria: "Fidelización con SVA", tipo: "escenario_operativo",
    enunciado: "Un cliente insatisfecho por mala cobertura en su segundo piso amenaza con darse de baja. ¿Cómo usas un SVA para fidelizarlo?",
    audioTexto: "¿Cómo usas un SVA para fidelizar a un cliente insatisfecho por mala cobertura en su segundo piso?",
    opciones: [
      "Ofrecerle en comodato o con descuento especial un equipo repetidor WiFi Mesh de alta potencia.",
      "Decirle que se mude al primer piso.",
      "Darle la baja de inmediato sin evaluar opciones.",
      "Recomendarle que compre cables de red en la ferretería."
    ],
    respuestaCorrecta: 0,
    explicacion: "Proponer un Mesh resuelve la causa real de la queja (cobertura) y salva al cliente de forma duradera."
  },
  {
    id: "d2_06", dia: "Día 2", diaNumero: 2, nivel: 2, nivelLabel: "Piloto Interplanetario",
    modulo: "PRODUCTO SVA", categoria: "Facturación de SVA", tipo: "opcion_multiple",
    enunciado: "¿Cómo se refleja el cobro de los SVA en el recibo del cliente?",
    audioTexto: "¿Cómo se refleja el cobro de los SVA en el recibo del cliente?",
    opciones: [
      "Aparecen detallados como conceptos adicionales dentro del mismo recibo mensual del servicio de internet.",
      "Se cobran en una cuenta bancaria privada no registrada.",
      "Se descuentan de su tarjeta de crédito sin emitir recibo.",
      "Los SVA nunca se facturan."
    ],
    respuestaCorrecta: 0,
    explicacion: "Los SVA se facturan de forma clara y desglosada en el recibo oficial mensual del cliente."
  },
  {
    id: "d2_07", dia: "Día 2", diaNumero: 2, nivel: 2, nivelLabel: "Piloto Interplanetario",
    modulo: "PRODUCTO SVA", categoria: "Requisitos Técnicos", tipo: "opcion_multiple",
    enunciado: "¿Qué requisito técnico debe cumplirse antes de dar de alta un SVA de televisión o Mesh?",
    audioTexto: "¿Qué requisito técnico debe cumplirse antes de dar de alta un SVA de televisión o Mesh?",
    opciones: [
      "Validar que la línea de internet esté activa, sin cortes técnicos y con ancho de banda compatible.",
      "Tener un teléfono fijo analógico instalado.",
      "Que el cliente pague 6 meses por adelantado obligatoriamente.",
      "No se requiere ninguna validación."
    ],
    respuestaCorrecta: 0,
    explicacion: "El servicio base debe estar operativo y sin fallas para que el SVA brinde un desempeño óptimo."
  },
  {
    id: "d2_08", dia: "Día 2", diaNumero: 2, nivel: 3, nivelLabel: "Comandante Galáctico",
    modulo: "PRODUCTO SVA", categoria: "Estrategia Comercial", tipo: "caso_practico",
    enunciado: "CASO: Un cliente gamer reclama por alta latencia en partidas competitivas. ¿Qué paquete integral de SVA y plan le ofrece un Comandante?",
    audioTexto: "Caso: Un cliente gamer reclama por alta latencia. ¿Qué paquete integral de SVA y plan le ofrece un Comandante?",
    opciones: [
      "Revisión de ruteo IP, configuración de DNS gamer de baja latencia y recomendación de conexión cableada o Mesh WiFi 6.",
      "Venderle 3 líneas adicionales sin necesidad.",
      "Decirle que los videojuegos dañan el router.",
      "Darle de baja el servicio."
    ],
    respuestaCorrecta: 0,
    explicacion: "La asesoría técnica experta en ruteo y equipos Mesh de baja latencia fideliza al exigente segmento gamer."
  },
  {
    id: "d2_09", dia: "Día 2", diaNumero: 2, nivel: 3, nivelLabel: "Comandante Galáctico",
    modulo: "PRODUCTO SVA", categoria: "Cancelación de SVA", tipo: "opcion_multiple",
    enunciado: "Si un cliente desea cancelar únicamente un servicio SVA (ej. WINNER TV) pero conservar su internet de fibra, ¿qué se debe hacer?",
    audioTexto: "¿Qué se debe hacer si un cliente desea cancelar únicamente un servicio SVA pero conservar su internet?",
    opciones: [
      "Procesar la baja únicamente del SVA solicitado sin afectar la continuidad ni la tarifa de su servicio de internet principal.",
      "Obligarlo a cancelar todo el servicio completo.",
      "Decirle que no es posible separar los productos.",
      "Cobrarle una penalidad equivalente a 1 año de servicio."
    ],
    respuestaCorrecta: 0,
    explicacion: "El usuario tiene derecho a dar de baja servicios complementarios sin que se condicione su servicio de acceso a internet."
  },
  {
    id: "d2_10", dia: "Día 2", diaNumero: 2, nivel: 3, nivelLabel: "Comandante Galáctico",
    modulo: "PRODUCTO SVA", categoria: "Rentabilidad y Valor", tipo: "opcion_multiple",
    enunciado: "¿Por qué los SVA son la mejor herramienta de fidelización frente a una guerra de precios con la competencia?",
    audioTexto: "¿Por qué los SVA son la mejor herramienta de fidelización frente a una guerra de precios?",
    opciones: [
      "Porque aumentan el valor percibido del servicio y la satisfacción del hogar sin devaluar la tarifa del enlace de internet.",
      "Porque son servicios gratis que no cuestan nada a la empresa.",
      "Porque impiden que el cliente pueda llamar a otras empresas.",
      "Porque no requieren equipos técnicos."
    ],
    respuestaCorrecta: 0,
    explicacion: "Agregar valor (entretenimiento, cobertura, seguridad) blinda la relación comercial sin caer en descuentos destructivos."
  },

  // =========================================================================
  // 🛰️ DÍA 3: CAMBIOS DE VELOCIDAD
  // =========================================================================
  {
    id: "d3_01", dia: "Día 3", diaNumero: 3, nivel: 1, nivelLabel: "Cadete Espacial",
    modulo: "CAMBIOS DE VELOCIDAD", categoria: "Simetría de Red", tipo: "verdadero_falso",
    enunciado: "En la red de fibra óptica WINNER, los cambios de velocidad aplican 100% de simetría (misma velocidad de subida que de bajada).",
    audioTexto: "Verdadero o falso: En la red de fibra óptica WINNER, los cambios de velocidad aplican 100% de simetría.",
    opciones: [
      "Verdadero - La simetría total es una ventaja diferencial clave frente al coaxial tradicional.",
      "Falso - En fibra la subida siempre es mucho menor a la bajada."
    ],
    respuestaCorrecta: 0,
    explicacion: "La simetría permite subidas de archivos, transmisiones y videollamadas a la misma velocidad de descarga."
  },
  {
    id: "d3_02", dia: "Día 3", diaNumero: 3, nivel: 1, nivelLabel: "Cadete Espacial",
    modulo: "CAMBIOS DE VELOCIDAD", categoria: "Tipos de Cambio", tipo: "opcion_multiple",
    enunciado: "¿Cuál es la diferencia entre un Upgrade y un Downgrade de velocidad?",
    audioTexto: "¿Cuál es la diferencia entre un Upgrade y un Downgrade de velocidad?",
    opciones: [
      "Upgrade es migración a un plan de mayor velocidad y Downgrade es ajuste a un plan de menor velocidad.",
      "Upgrade es dar de baja y Downgrade es suspender.",
      "Upgrade solo aplica para empresas y Downgrade para personas.",
      "Son términos idénticos sin diferencia técnica."
    ],
    respuestaCorrecta: 0,
    explicacion: "Upgrade incrementa el plan y Downgrade reduce el plan acorde a la capacidad de pago del usuario."
  },
  {
    id: "d3_03", dia: "Día 3", diaNumero: 3, nivel: 1, nivelLabel: "Cadete Espacial",
    modulo: "CAMBIOS DE VELOCIDAD", categoria: "Tiempos de Aplicación", tipo: "opcion_multiple",
    enunciado: "¿En qué plazo se hace efectivo un cambio de velocidad lógico en la plataforma OLT de WINNER?",
    audioTexto: "¿En qué plazo se hace efectivo un cambio de velocidad lógico en la plataforma OLT de WINNER?",
    opciones: [
      "De forma remota e inmediata dentro de las primeras 24 horas hábiles tras la validación en sistema.",
      "Tarda 6 meses de espera.",
      "Requiere siempre romper la pared de la casa del cliente.",
      "Solo se aplica los días domingos a fin de año."
    ],
    respuestaCorrecta: 0,
    explicacion: "Al ser un ajuste de perfil lógico en la OLT, el cambio de velocidad se provisiona casi de inmediato."
  },
  {
    id: "d3_04", dia: "Día 3", diaNumero: 3, nivel: 2, nivelLabel: "Piloto Interplanetario",
    modulo: "CAMBIOS DE VELOCIDAD", categoria: "Retención vía Downgrade", tipo: "caso_practico",
    enunciado: "CASO: Un cliente de plan 500 Mbps solicita la baja definitiva porque su presupuesto mensual bajó. ¿Cómo procedes?",
    audioTexto: "Caso: Un cliente de plan 500 Mbps solicita la baja por motivo económico. ¿Cómo procedes?",
    opciones: [
      "Ofrecerle un Downgrade estructurado a un plan de 200 o 300 Mbps con tarifa más accesible para conservar su servicio sin sobreendeudarlo.",
      "Rechazar su pedido y decirle que debe pagar el plan caro obligatoriamente.",
      "Darle la baja de inmediato sin presentarle planes más económicos.",
      "Cortar la llamada."
    ],
    respuestaCorrecta: 0,
    explicacion: "Un Downgrade oportuno salva al cliente dentro de la base activa adaptando la tarifa a su realidad financiera."
  },
  {
    id: "d3_05", dia: "Día 3", diaNumero: 3, nivel: 2, nivelLabel: "Piloto Interplanetario",
    modulo: "CAMBIOS DE VELOCIDAD", categoria: "Capacidad de Equipos ONT", tipo: "escenario_operativo",
    enunciado: "Si un cliente solicita un Upgrade a 1 Gbps (1000 Mbps) pero su ONT es de estándar antiguo Fast Ethernet, ¿qué acción es requerida?",
    audioTexto: "Si un cliente solicita un Upgrade a 1 Gbps pero su ONT es Fast Ethernet, ¿qué acción es requerida?",
    opciones: [
      "Coordinar una visita técnica para cambio de equipo ONT a modelo Gigabit / WiFi 6 antes de activar el perfil.",
      "Activar el plan sin avisar aunque el router solo alcance 100 Mbps.",
      "Decirle que el router no importa.",
      "Cancelar el contrato del cliente."
    ],
    respuestaCorrecta: 0,
    explicacion: "Para planes superiores a 100 Mbps es imprescindible validar puertos Gigabit en el hardware del cliente."
  },
  {
    id: "d3_06", dia: "Día 3", diaNumero: 3, nivel: 2, nivelLabel: "Piloto Interplanetario",
    modulo: "CAMBIOS DE VELOCIDAD", categoria: "Pruebas de Velocidad", tipo: "opcion_multiple",
    enunciado: "¿Cuál es el protocolo obligatorio para realizar un test de velocidad fidedigno con el cliente?",
    audioTexto: "¿Cuál es el protocolo obligatorio para realizar un test de velocidad fidedigno con el cliente?",
    opciones: [
      "Conectar PC por cable de red Cat 5e/6 directo al router, desconectar otros dispositivos y ejecutar el velocímetro oficial.",
      "Hacer la prueba por WiFi a 20 metros de distancia atravesando 4 paredes.",
      "Descargar 10 películas al mismo tiempo durante la prueba.",
      "Mirar el reloj de la pared."
    ],
    respuestaCorrecta: 0,
    explicacion: "La prueba por cable ethernet directo al router aísla interferencias del espectro inalámbrico."
  },
  {
    id: "d3_07", dia: "Día 3", diaNumero: 3, nivel: 2, nivelLabel: "Piloto Interplanetario",
    modulo: "CAMBIOS DE VELOCIDAD", categoria: "Facturación Proporcional", tipo: "opcion_multiple",
    enunciado: "Al realizarse un cambio de velocidad a mitad del ciclo de facturación, ¿cómo se cobra la diferencia?",
    audioTexto: "¿Cómo se cobra la diferencia al realizarse un cambio de velocidad a mitad del ciclo?",
    opciones: [
      "Mediante prorrateo exacto por los días utilizados con el plan anterior y los días con el nuevo plan.",
      "Se cobra el doble de ambos planes completos.",
      "No se cobra nada durante 1 año.",
      "El cliente debe pagar en efectivo al cartero."
    ],
    respuestaCorrecta: 0,
    explicacion: "El prorrateo garantiza justicia comercial cobrando estrictamente según los días de uso de cada plan."
  },
  {
    id: "d3_08", dia: "Día 3", diaNumero: 3, nivel: 3, nivelLabel: "Comandante Galáctico",
    modulo: "CAMBIOS DE VELOCIDAD", categoria: "Negociación de Upgrade", tipo: "caso_practico",
    enunciado: "CASO: Un cliente se queja de lentitud porque en su casa ahora viven 6 personas conectadas simultáneamente. ¿Cuál es la propuesta de fidelización?",
    audioTexto: "Caso: El cliente se queja de lentitud porque ahora viven 6 personas en su hogar. ¿Cuál es la propuesta?",
    opciones: [
      "Demostrar que su consumo excedió la capacidad de su plan actual y ofrecerle un Upgrade con descuento de fidelidad por 6 meses.",
      "Decirle que bote a sus familiares de la casa.",
      "Bajarle la velocidad para que aprendan a compartir.",
      "Decirle que WINNER no sirve para familias grandes."
    ],
    respuestaCorrecta: 0,
    explicacion: "Explicar la relación entre dispositivos en concurrencia y ancho de banda abre paso a un Upgrade bien recibido."
  },
  {
    id: "d3_09", dia: "Día 3", diaNumero: 3, nivel: 3, nivelLabel: "Comandante Galáctico",
    modulo: "CAMBIOS DE VELOCIDAD", categoria: "Regulación de Migración", tipo: "opcion_multiple",
    enunciado: "Según la normativa de telecomunicaciones, ¿puede cobrarse una penalidad por solicitar una migración de plan dentro de la misma tecnología?",
    audioTexto: "¿Puede cobrarse una penalidad por solicitar una migración de plan dentro de la misma tecnología?",
    opciones: [
      "No, las migraciones de plan tarifario no conllevan cobros por penalidad arbitraria.",
      "Sí, se debe cobrar una multa del 50% de la factura.",
      "Solo si el cliente pide bajar de velocidad.",
      "Depende del estado de ánimo del asesor."
    ],
    respuestaCorrecta: 0,
    explicacion: "El usuario tiene derecho a migrar entre planes tarifarios vigentes sin trabas económicas injustificadas."
  },
  {
    id: "d3_10", dia: "Día 3", diaNumero: 3, nivel: 3, nivelLabel: "Comandante Galáctico",
    modulo: "CAMBIOS DE VELOCIDAD", categoria: "Auditoría en Nova", tipo: "escenario_operativo",
    enunciado: "Tras acordar un cambio de velocidad, ¿qué debe verificar el asesor en el sistema Nova antes de despedirse?",
    audioTexto: "¿Qué debe verificar el asesor en el sistema Nova antes de despedirse tras un cambio de velocidad?",
    opciones: [
      "Que el nuevo perfil esté impactado en la OLT, la fecha de vigencia registrada y el ticket debidamente cerrado con código para el cliente.",
      "Cerrar la ventana sin guardar cambios.",
      "Revisar si suenan las notificaciones de su celular.",
      "Apagar el monitor de la computadora."
    ],
    respuestaCorrecta: 0,
    explicacion: "La verificación del impacto en la OLT y la entrega del ticket sellan una atención impecable sin quejas posteriores."
  },

  // =========================================================================
  // 🛰️ DÍA 4: SERVICIOS SOLICITADOS 1 Y 2
  // =========================================================================
  {
    id: "d4_01", dia: "Día 4", diaNumero: 4, nivel: 1, nivelLabel: "Cadete Espacial",
    modulo: "SERVICIOS SOLICITADOS 1 Y 2", categoria: "Traslado Interno vs Externo", tipo: "opcion_multiple",
    enunciado: "¿Cuál es la diferencia fundamental entre un traslado interno y un traslado externo de servicio?",
    audioTexto: "¿Cuál es la diferencia fundamental entre un traslado interno y un traslado externo de servicio?",
    opciones: [
      "Traslado interno es reubicar el router dentro del mismo domicilio; traslado externo es mudar el servicio a una nueva dirección geográfica.",
      "Traslado interno es cambiar de titular y externo es cambiar de velocidad.",
      "Son exactamente el mismo trámite.",
      "Traslado interno solo aplica para oficinas."
    ],
    respuestaCorrecta: 0,
    explicacion: "El traslado interno solo mueve el equipo dentro del predio; el externo requiere validar facilidades técnicas en el nuevo domicilio."
  },
  {
    id: "d4_02", dia: "Día 4", diaNumero: 4, nivel: 1, nivelLabel: "Cadete Espacial",
    modulo: "SERVICIOS SOLICITADOS 1 Y 2", categoria: "Cambio de Titularidad", tipo: "verdadero_falso",
    enunciado: "Para procesar un cambio de titularidad se requiere la aceptación formal del titular saliente y la evaluación crediticia del titular entrante.",
    audioTexto: "Verdadero o falso: Para procesar un cambio de titularidad se requiere la aceptación formal del titular saliente y entrante.",
    opciones: [
      "Verdadero - Ambas partes deben manifestar su consentimiento y presentar sus documentos de identidad.",
      "Falso - Cualquier vecino puede asumir la titularidad sin avisar al titular original."
    ],
    respuestaCorrecta: 0,
    explicacion: "El cambio de titular cede los derechos y obligaciones del contrato, exigiendo estricto consentimiento mutuo."
  },
  {
    id: "d4_03", dia: "Día 4", diaNumero: 4, nivel: 1, nivelLabel: "Cadete Espacial",
    modulo: "SERVICIOS SOLICITADOS 1 Y 2", categoria: "Validación de Cobertura", tipo: "opcion_multiple",
    enunciado: "Antes de ingresar una solicitud de traslado externo en Nova, ¿cuál es el paso técnico obligatorio?",
    audioTexto: "Antes de ingresar una solicitud de traslado externo en Nova, ¿cuál es el paso técnico obligatorio?",
    opciones: [
      "Verificar la cobertura y disponibilidad de bornes libres en la caja NAP de la nueva dirección del cliente.",
      "Decirle al cliente que compre una bobina de fibra.",
      "Dar de baja la línea inmediatamente.",
      "Pedirle una foto de su nueva casa."
    ],
    respuestaCorrecta: 0,
    explicacion: "Sin facilidades técnicas en la caja NAP no es posible conectar el nuevo predio a la red WINNER."
  },
  {
    id: "d4_04", dia: "Día 4", diaNumero: 4, nivel: 2, nivelLabel: "Piloto Interplanetario",
    modulo: "SERVICIOS SOLICITADOS 1 Y 2", categoria: "Fidelización en Mudanzas", tipo: "caso_practico",
    enunciado: "CASO: Un cliente llama para cancelar porque se muda de casa este fin de semana. ¿Cómo lo retiene el asesor de Fidelizaciones?",
    audioTexto: "Caso: Un cliente llama para cancelar porque se muda este fin de semana. ¿Cómo lo retiene el asesor?",
    opciones: [
      "Ofrecerle el traslado de servicio a su nuevo domicilio con costo de instalación bonificado y programación de visita prioritaria.",
      "Tramitarle la baja de inmediato para que contrate a otra empresa.",
      "Decirle que las mudanzas están prohibidas durante el contrato.",
      "Cobrarle una penalidad por mudarse."
    ],
    respuestaCorrecta: 0,
    explicacion: "Ofrecer el traslado bonificado a su nuevo hogar previene la fuga del cliente hacia la competencia en momentos de mudanza."
  },
  {
    id: "d4_05", dia: "Día 4", diaNumero: 4, nivel: 2, nivelLabel: "Piloto Interplanetario",
    modulo: "SERVICIOS SOLICITADOS 1 Y 2", categoria: "Suspensión Temporal", tipo: "opcion_multiple",
    enunciado: "¿Cuántos meses como máximo al año puede un cliente solicitar la suspensión temporal de su servicio según reglamento?",
    audioTexto: "¿Cuántos meses como máximo al año puede un cliente solicitar la suspensión temporal de su servicio?",
    opciones: [
      "Hasta 2 meses (60 días calendario) consecutivos o alternados por año de servicio.",
      "5 años completos.",
      "Solo 2 días.",
      "No existe la suspensión temporal."
    ],
    respuestaCorrecta: 0,
    explicacion: "La suspensión temporal de hasta 2 meses permite pausar el servicio por viaje o remodelación sin perder el enlace."
  },
  {
    id: "d4_06", dia: "Día 4", diaNumero: 4, nivel: 2, nivelLabel: "Piloto Interplanetario",
    modulo: "SERVICIOS SOLICITADOS 1 Y 2", categoria: "Traslado sin Cobertura", tipo: "escenario_operativo",
    enunciado: "Si el cliente solicita un traslado externo y el sistema indica que la nueva zona NO tiene cobertura de WINNER, ¿qué procede?",
    audioTexto: "¿Qué procede si el cliente solicita un traslado y la nueva zona no tiene cobertura?",
    opciones: [
      "Informar con transparencia la falta de cobertura y tramitar la baja por imposibilidad técnica sin aplicar penalidades indebidas.",
      "Obligarlo a seguir pagando la casa anterior.",
      "Inventar que sí hay cobertura para cobrarle la visita técnica.",
      "Decirle que compre un satélite propio."
    ],
    respuestaCorrecta: 0,
    explicacion: "La falta de cobertura de la empresa exonera de penalidades y protege la buena reputación ante el usuario."
  },
  {
    id: "d4_07", dia: "Día 4", diaNumero: 4, nivel: 2, nivelLabel: "Piloto Interplanetario",
    modulo: "SERVICIOS SOLICITADOS 1 Y 2", categoria: "Equipos en Traslado", tipo: "opcion_multiple",
    enunciado: "En un traslado externo de servicio, ¿qué debe hacer el cliente con los equipos ONT y cables?",
    audioTexto: "¿Qué debe hacer el cliente con los equipos ONT y cables en un traslado externo?",
    opciones: [
      "Llevar consigo el router ONT y sus adaptadores a su nueva dirección para que el técnico realice la instalación y reconexión.",
      "Dejarlos botados en la calle anterior.",
      "Vender los equipos por internet.",
      "Regalárselos al nuevo inquilino."
    ],
    respuestaCorrecta: 0,
    explicacion: "El cliente debe transportar sus equipos asignados para que la cuadrilla técnica los reubique en el nuevo domicilio."
  },
  {
    id: "d4_08", dia: "Día 4", diaNumero: 4, nivel: 3, nivelLabel: "Comandante Galáctico",
    modulo: "SERVICIOS SOLICITADOS 1 Y 2", categoria: "Traspaso por Fallecimiento", tipo: "caso_practico",
    enunciado: "CASO: Un familiar directo solicita dar de baja la línea por fallecimiento del titular. ¿Cuál es el tratamiento profesional?",
    audioTexto: "Caso: Un familiar directo solicita la baja por fallecimiento del titular. ¿Cuál es el tratamiento profesional?",
    opciones: [
      "Expresar condolencias sinceras, solicitar acta de defunción para procesar la baja inmediata sin costo o brindar opción de cambio de titular si desean conservar la línea.",
      "Exigir que el titular fallecido se presente en persona a firmar.",
      "Cobrar penalidad por cancelación anticipada.",
      "Colgar la llamada."
    ],
    respuestaCorrecta: 0,
    explicacion: "El trato humano, la empatía y la exención total de trámites engorrosos son mandatorios en situaciones luctuosas."
  },
  {
    id: "d4_09", dia: "Día 4", diaNumero: 4, nivel: 3, nivelLabel: "Comandante Galáctico",
    modulo: "SERVICIOS SOLICITADOS 1 Y 2", categoria: "Plazos Regulatorios", tipo: "opcion_multiple",
    enunciado: "¿Cuál es el plazo máximo de ejecución establecido para un traslado de servicio de internet fijo?",
    audioTexto: "¿Cuál es el plazo máximo de ejecución establecido para un traslado de servicio de internet fijo?",
    opciones: [
      "Dentro de los plazos coordinados en agenda (típicamente de 48 a 72 horas hábiles según factibilidad técnica).",
      "3 meses después de la solicitud.",
      "15 minutos después de colgar.",
      "No existe ningún plazo estipulado."
    ],
    respuestaCorrecta: 0,
    explicacion: "Cumplir la fecha pactada en la agenda técnica evita quejas por incumplimiento de servicio."
  },
  {
    id: "d4_10", dia: "Día 4", diaNumero: 4, nivel: 3, nivelLabel: "Comandante Galáctico",
    modulo: "SERVICIOS SOLICITADOS 1 Y 2", categoria: "Calidad y Seguimiento", tipo: "escenario_operativo",
    enunciado: "Al finalizar el registro de un servicio solicitado, ¿qué información es vital entregar al cliente?",
    audioTexto: "¿Qué información es vital entregar al cliente al finalizar el registro de un servicio solicitado?",
    opciones: [
      "Número de solicitud o ticket generado, fecha programada de visita y recomendaciones para el día de la instalación.",
      "El número de teléfono personal del asesor.",
      "La dirección del servidor central de la empresa.",
      "Ninguna información, el cliente debe adivinar."
    ],
    respuestaCorrecta: 0,
    explicacion: "El código de ticket y la confirmación de fecha brindan tranquilidad y certeza al usuario."
  },

  // =========================================================================
  // 🛰️ DÍA 5: SERVICIOS SOLICITADOS 3 Y 4
  // =========================================================================
  {
    id: "d5_01", dia: "Día 5", diaNumero: 5, nivel: 1, nivelLabel: "Cadete Espacial",
    modulo: "SERVICIOS SOLICITADOS 3 Y 4", categoria: "Reubicación de Equipos", tipo: "opcion_multiple",
    enunciado: "¿Qué comprende el servicio de reubicación de punto de red o router dentro del predio?",
    audioTexto: "¿Qué comprende el servicio de reubicación de punto de red o router dentro del predio?",
    opciones: [
      "El tendido y guiado de cableado de fibra interna para posicionar el ONT en un ambiente más estratégico del hogar.",
      "Cambiar el nombre de la red WiFi desde el teclado.",
      "Pintar las paredes de la casa del cliente.",
      "Venderle una computadora nueva."
    ],
    respuestaCorrecta: 0,
    explicacion: "La reubicación física de la ONT optimiza el radio de cobertura hacia las zonas de mayor uso en el hogar."
  },
  {
    id: "d5_02", dia: "Día 5", diaNumero: 5, nivel: 1, nivelLabel: "Cadete Espacial",
    modulo: "SERVICIOS SOLICITADOS 3 Y 4", categoria: "Cambio de Clave WiFi", tipo: "verdadero_falso",
    enunciado: "Un cambio de nombre de red (SSID) y contraseña de WiFi puede realizarse de manera remota e inmediata por el asesor desde la plataforma técnica sin requerir visita a domicilio.",
    audioTexto: "Verdadero o falso: Un cambio de clave WiFi puede realizarse de manera remota e inmediata.",
    opciones: [
      "Verdadero - Se puede aprovisionar directamente desde la consola técnica hacia la ONT.",
      "Falso - Siempre se debe enviar un técnico con escalera a la casa."
    ],
    respuestaCorrecta: 0,
    explicacion: "El soporte remoto de WiFi resuelve solicitudes en primer contacto en menos de 3 minutos."
  },
  {
    id: "d5_03", dia: "Día 5", diaNumero: 5, nivel: 1, nivelLabel: "Cadete Espacial",
    modulo: "SERVICIOS SOLICITADOS 3 Y 4", categoria: "Adicionales de Red", tipo: "opcion_multiple",
    enunciado: "¿Cuándo se recomienda la instalación de un punto de red cableado RJ45 adicional?",
    audioTexto: "¿Cuándo se recomienda la instalación de un punto de red cableado RJ45 adicional?",
    opciones: [
      "Para dispositivos que exigen estabilidad máxima y cero interferencias (ej. Smart TV 4K, consolas de videojuegos o PC de trabajo).",
      "Para cargar la batería del celular sin enchufe.",
      "Solo cuando el cliente no tiene router.",
      "Para escuchar música en la radio."
    ],
    respuestaCorrecta: 0,
    explicacion: "El cable de red dedicado garantiza el 100% de la velocidad contratada sin pérdidas por atenuación ambiental."
  },
  {
    id: "d5_04", dia: "Día 5", diaNumero: 5, nivel: 2, nivelLabel: "Piloto Interplanetario",
    modulo: "SERVICIOS SOLICITADOS 3 Y 4", categoria: "Gestión de Reubicación", tipo: "caso_practico",
    enunciado: "CASO: Un cliente amenaza con darse de baja porque el router fue instalado en la esquina del patio y no llega internet a las habitaciones. ¿Qué solución se gestiona?",
    audioTexto: "Caso: El router fue instalado en el patio y no llega a las habitaciones. ¿Qué solución se gestiona?",
    opciones: [
      "Gestionar una reubicación de punto de red bonificada por fidelización hacia la sala principal para asegurar cobertura centralizada.",
      "Decirle que es su culpa por haber aceptado la instalación allí.",
      "Aceptarle la baja de inmediato.",
      "Aumentarle la velocidad sin mover el router."
    ],
    respuestaCorrecta: 0,
    explicacion: "Reubicar el router en el centro del hogar soluciona de raíz la causa del descontento y salva el cliente."
  },
  {
    id: "d5_05", dia: "Día 5", diaNumero: 5, nivel: 2, nivelLabel: "Piloto Interplanetario",
    modulo: "SERVICIOS SOLICITADOS 3 Y 4", categoria: "Sustitución de Hardware", tipo: "escenario_operativo",
    enunciado: "Si un router ONT presenta daño físico accidental por caída provocada por la mascota del cliente, ¿cuál es el procedimiento?",
    audioTexto: "Si un router ONT presenta daño físico accidental, ¿cuál es el procedimiento?",
    opciones: [
      "Registrar orden de cambio de equipo por avería de hardware, informando las condiciones comerciales aplicables y coordinando visita técnica.",
      "Gritarle al cliente y amenazarlo.",
      "Decirle que no hay solución y cortar la llamada.",
      "Cobrarle una penalidad sin darle un router nuevo."
    ],
    respuestaCorrecta: 0,
    explicacion: "El reemplazo de hardware asegura la restauración de la conectividad dentro de las políticas de la empresa."
  },
  {
    id: "d5_06", dia: "Día 5", diaNumero: 5, nivel: 2, nivelLabel: "Piloto Interplanetario",
    modulo: "SERVICIOS SOLICITADOS 3 Y 4", categoria: "Seguridad de Acceso", tipo: "opcion_multiple",
    enunciado: "¿Por qué se desaconseja dejar la contraseña predeterminada que viene de fábrica impresa en la etiqueta del router?",
    audioTexto: "¿Por qué se desaconseja dejar la contraseña predeterminada del router?",
    opciones: [
      "Porque facilita que terceros no autorizados puedan acceder a la red y saturar el ancho de banda del cliente.",
      "Porque el router se apaga solo si no se cambia.",
      "Porque la fibra óptica se rompe si se usa la misma clave.",
      "No hay ningún motivo, da igual cualquier clave."
    ],
    respuestaCorrecta: 0,
    explicacion: "Personalizar la contraseña protege la seguridad de la red y previene intrusiones que degraden el servicio."
  },
  {
    id: "d5_07", dia: "Día 5", diaNumero: 5, nivel: 2, nivelLabel: "Piloto Interplanetario",
    modulo: "SERVICIOS SOLICITADOS 3 Y 4", categoria: "Auditoría en CRM", tipo: "opcion_multiple",
    enunciado: "En la consola Nova, ¿en qué pestaña se visualizan los equipos asignados por número de serie MAC al contrato?",
    audioTexto: "¿En qué pestaña de Nova se visualizan los equipos asignados por número de serie MAC?",
    opciones: [
      "En la pestaña de 'Inventario / Equipos Asignados' vinculada al ID de servicio.",
      "En la pestaña de noticias de la empresa.",
      "En la bandeja de spam de correos.",
      "En la calculadora del sistema."
    ],
    respuestaCorrecta: 0,
    explicacion: "Verificar la MAC address y número de serie asegura que se gestione el equipo físico correcto del cliente."
  },
  {
    id: "d5_08", dia: "Día 5", diaNumero: 5, nivel: 3, nivelLabel: "Comandante Galáctico",
    modulo: "SERVICIOS SOLICITADOS 3 Y 4", categoria: "Casos Especiales de Red", tipo: "caso_practico",
    enunciado: "CASO: Un cliente cuenta con una casa de 4 pisos y afirma que ni con repetidores estándar logra estabilidad. ¿Qué arquitectura de red le diseña un Comandante?",
    audioTexto: "Caso: Casa de 4 pisos donde los repetidores estándar no dan estabilidad. ¿Qué solución se propone?",
    opciones: [
      "Diseñar una solución de cableado vertical con backbone gigabit y nodos Mesh interconectados por Ethernet (Ethernet Backhaul).",
      "Decirle que la tecnología de internet no está hecha para casas de más de 1 piso.",
      "Hacer que el cliente compre 4 planes de internet independientes.",
      "Darle la baja sin asesorarlo."
    ],
    respuestaCorrecta: 0,
    explicacion: "El Ethernet Backhaul entre nodos Mesh garantiza el 100% de la velocidad en cada nivel de predios multinivel."
  },
  {
    id: "d5_09", dia: "Día 5", diaNumero: 5, nivel: 3, nivelLabel: "Comandante Galáctico",
    modulo: "SERVICIOS SOLICITADOS 3 Y 4", categoria: "Políticas de Garantía", tipo: "opcion_multiple",
    enunciado: "¿Qué cubre la garantía técnica de instalación de servicios solicitados en WINNER?",
    audioTexto: "¿Qué cubre la garantía técnica de instalación de servicios solicitados en WINNER?",
    opciones: [
      "El correcto funcionamiento del cableado, conectorización de fibra y parámetros de potencia óptica sin costo ante vicios ocultos.",
      "Cubre compras de comida del cliente.",
      "Solo cubre llamadas telefónicas de noche.",
      "No existe ninguna garantía técnica."
    ],
    respuestaCorrecta: 0,
    explicacion: "La garantía respalda la mano de obra y materiales utilizados ante cualquier desperfecto en la instalación."
  },
  {
    id: "d5_10", dia: "Día 5", diaNumero: 5, nivel: 3, nivelLabel: "Comandante Galáctico",
    modulo: "SERVICIOS SOLICITADOS 3 Y 4", categoria: "Cierre Operativo", tipo: "escenario_operativo",
    enunciado: "Tras coordinar un servicio solicitado con el cliente, ¿cuál es la mejor práctica de tipificación?",
    audioTexto: "¿Cuál es la mejor práctica de tipificación tras coordinar un servicio solicitado?",
    opciones: [
      "Detallar motivo del requerimiento, condiciones acordadas, fecha de agenda y validar datos de contacto telefónico de respaldo.",
      "Dejar el ticket en blanco.",
      "Escribir 'Atendido' y colgar de inmediato.",
      "Tipificar como felicitación de cumpleaños."
    ],
    respuestaCorrecta: 0,
    explicacion: "Los datos de contacto de respaldo aseguran que la cuadrilla técnica localice al cliente el día de la visita."
  },

  // =========================================================================
  // 🛰️ DÍA 6: FACTURACIÓN
  // =========================================================================
  {
    id: "d6_01", dia: "Día 6", diaNumero: 6, nivel: 1, nivelLabel: "Cadete Espacial",
    modulo: "FACTURACIÓN", categoria: "Conceptos Básicos", tipo: "opcion_multiple",
    enunciado: "¿Qué es el ciclo de facturación de un cliente en WINNER?",
    audioTexto: "¿Qué es el ciclo de facturación de un cliente en WINNER?",
    opciones: [
      "El periodo mensual fijo entre una fecha de corte y la siguiente donde se liquidan los consumos y planes contratados.",
      "El día en que el asesor cobra su sueldo.",
      "Un sorteo anual de premios.",
      "La fecha de cumpleaños del cliente."
    ],
    respuestaCorrecta: 0,
    explicacion: "El ciclo determina las fechas exactas de emisión del recibo, periodo de consumo y vencimiento de pago."
  },
  {
    id: "d6_02", dia: "Día 6", diaNumero: 6, nivel: 1, nivelLabel: "Cadete Espacial",
    modulo: "FACTURACIÓN", categoria: "Prorrateo", tipo: "verdadero_falso",
    enunciado: "El primer recibo de un cliente nuevo puede incluir un monto proporcional (prorrateo) por los días transcurridos desde la instalación hasta el inicio de su ciclo regular.",
    audioTexto: "Verdadero o falso: El primer recibo de un cliente nuevo puede incluir prorrateo por los días previos al ciclo regular.",
    opciones: [
      "Verdadero - Es un cobro proporcional reglamentario por los días en que ya disfrutó del servicio.",
      "Falso - Los primeros días de internet siempre son un regalo de la empresa."
    ],
    respuestaCorrecta: 0,
    explicacion: "Explicar el prorrateo del primer recibo previene reclamos por percepción de cobro en exceso."
  },
  {
    id: "d6_03", dia: "Día 6", diaNumero: 6, nivel: 1, nivelLabel: "Cadete Espacial",
    modulo: "FACTURACIÓN", categoria: "Cobro Adelantado vs Vencido", tipo: "opcion_multiple",
    enunciado: "¿Bajo qué modalidad se factura el servicio de internet en WINNER?",
    audioTexto: "¿Bajo qué modalidad se factura el servicio de internet en WINNER?",
    opciones: [
      "Modalidad de servicio por adelantado (se factura el mes que se va a disfrutar).",
      "Modalidad a 5 años vencidos.",
      "Se paga únicamente cuando el cliente quiere.",
      "No se emite recibo formal."
    ],
    respuestaCorrecta: 0,
    explicacion: "Las telecomunicaciones fijas operan típicamente bajo esquema de renta mensual adelantada."
  },
  {
    id: "d6_04", dia: "Día 6", diaNumero: 6, nivel: 2, nivelLabel: "Piloto Interplanetario",
    modulo: "FACTURACIÓN", categoria: "Reclamo por Cobro Duplicado", tipo: "caso_practico",
    enunciado: "CASO: Un cliente reclama furioso que el banco le debitó dos veces el pago del mes y exige cancelar. ¿Cuál es la ruta de desescalamiento?",
    audioTexto: "Caso: Un cliente reclama que el banco le debitó dos veces el pago del mes y exige cancelar. ¿Cuál es la ruta?",
    opciones: [
      "Validar el estado de cuenta en Nova, verificar el doble depósito, emitir la nota de crédito o reembolso y brindar un beneficio de cortesía por la molestia.",
      "Decirle que el problema es de su banco y que WINNER no tiene nada que ver.",
      "Aceptarle la baja sin revisar el sistema.",
      "Insultar al cliente por tener poco dinero."
    ],
    respuestaCorrecta: 0,
    explicacion: "Revisar los extractos y gestionar la nota de crédito de inmediato demuestra respaldo corporativo y desactiva la baja."
  },
  {
    id: "d6_05", dia: "Día 6", diaNumero: 6, nivel: 2, nivelLabel: "Piloto Interplanetario",
    modulo: "FACTURACIÓN", categoria: "Corte por Falta de Pago", tipo: "escenario_operativo",
    enunciado: "Si un cliente sufrió un corte por deuda pero ya canceló hace 10 minutos por banca móvil, ¿cómo se reactiva su línea?",
    audioTexto: "Si el cliente canceló su deuda hace 10 minutos por banca móvil, ¿cómo se reactiva su línea?",
    opciones: [
      "Validar el comprobante de pago en el módulo de caja de Nova y forzar el comando de reactivación OLT de reconexión inmediata.",
      "Decirle que espere 15 días hábiles a que llegue el dinero.",
      "Hacer que el cliente vuelva a pagar otra vez en efectivo.",
      "Darle de baja el contrato."
    ],
    respuestaCorrecta: 0,
    explicacion: "Forzar el comando de reaprovisionamiento en la OLT restablece la señal de fibra en menos de 2 minutos tras el pago."
  },
  {
    id: "d6_06", dia: "Día 6", diaNumero: 6, nivel: 2, nivelLabel: "Piloto Interplanetario",
    modulo: "FACTURACIÓN", categoria: "Matriz de Descuentos", tipo: "opcion_multiple",
    enunciado: "Al aplicar un descuento comercial de fidelización (ej. 30% por 3 meses), ¿desde qué recibo se hace efectivo?",
    audioTexto: "Al aplicar un descuento comercial de fidelización, ¿desde qué recibo se hace efectivo?",
    opciones: [
      "Desde el siguiente ciclo de facturación a emitirse, salvo compensaciones directas inmediatas en la factura actual.",
      "Solo dentro de 3 años.",
      "Nunca se aplica en el recibo.",
      "Solo si el cliente compra un celular nuevo."
    ],
    respuestaCorrecta: 0,
    explicacion: "Aclarar el ciclo de inicio del descuento previene que el cliente reclame al ver emitida su factura previa sin cambios."
  },
  {
    id: "d6_07", dia: "Día 6", diaNumero: 6, nivel: 2, nivelLabel: "Piloto Interplanetario",
    modulo: "FACTURACIÓN", categoria: "Compensación por Avería", tipo: "opcion_multiple",
    enunciado: "Si el cliente tuvo una avería masiva de 3 días demostrada en sistema, ¿qué derecho de facturación le asiste?",
    audioTexto: "Si el cliente tuvo una avería masiva de 3 días demostrada en sistema, ¿qué derecho de facturación le asiste?",
    opciones: [
      "El descuento proporcional exacto por el tiempo en que no contó con servicio, emitido como ajuste a favor en su próximo recibo.",
      "Ningún descuento, debe pagar el 100%.",
      "Pagar el doble por penalidad técnica.",
      "Regalarle un router nuevo sin descuento en recibo."
    ],
    respuestaCorrecta: 0,
    explicacion: "La normativa OSIPTEL y la política WINNER obligan al descuento proporcional por indisponibilidad del servicio."
  },
  {
    id: "d6_08", dia: "Día 6", diaNumero: 6, nivel: 3, nivelLabel: "Comandante Galáctico",
    modulo: "FACTURACIÓN", categoria: "Desescalamiento Financiero", tipo: "caso_practico",
    enunciado: "CASO: Un cliente de 2 años de antigüedad acumula 2 recibos impagos por emergencia médica familiar y pide no perder su línea. ¿Qué plan de rescate ofrece un Comandante?",
    audioTexto: "Caso: Cliente de 2 años acumula 2 recibos impagos por emergencia médica familiar. ¿Qué plan se le ofrece?",
    opciones: [
      "Ofrecer fraccionamiento de la deuda sin intereses en cuotas cómodas y temporalmente ajustar el plan para que pueda seguir conectado.",
      "Mandar su deuda a cobranza judicial agresiva de inmediato.",
      "Cortar el cable de fibra de su casa.",
      "Decirle que a la empresa no le importan sus problemas personales."
    ],
    respuestaCorrecta: 0,
    explicacion: "El fraccionamiento empático rescata al cliente, asegura la recuperación de la deuda y genera una lealtad indestructible."
  },
  {
    id: "d6_09", dia: "Día 6", diaNumero: 6, nivel: 3, nivelLabel: "Comandante Galáctico",
    modulo: "FACTURACIÓN", categoria: "Auditoría de Pagos", tipo: "opcion_multiple",
    enunciado: "¿Qué documento oficial sustenta legalmente un ajuste o exoneración de cobro en la cuenta del cliente?",
    audioTexto: "¿Qué documento oficial sustenta legalmente un ajuste o exoneración de cobro en la cuenta del cliente?",
    opciones: [
      "La Nota de Crédito electrónica autorizada y registrada en la plataforma de facturación y SUNAT.",
      "Un papel escrito a mano por el asesor.",
      "Un mensaje de WhatsApp informal.",
      "Una llamada telefónica sin registro."
    ],
    respuestaCorrecta: 0,
    explicacion: "La Nota de Crédito electrónica es el único instrumento contable y tributario válido para descontar saldos facturados."
  },
  {
    id: "d6_10", dia: "Día 6", diaNumero: 6, nivel: 3, nivelLabel: "Comandante Galáctico",
    modulo: "FACTURACIÓN", categoria: "Cierre Transparente", tipo: "escenario_operativo",
    enunciado: "Al finalizar una llamada de consulta de facturación, ¿qué monto se debe recapitular obligatoriamente?",
    audioTexto: "¿Qué monto se debe recapitular obligatoriamente al finalizar una consulta de facturación?",
    opciones: [
      "El importe neto a pagar, la fecha límite de vencimiento y los canales bancarios autorizados libres de comisión.",
      "El valor de las acciones en bolsa de la compañía.",
      "El total de ingresos anuales de la empresa.",
      "Ningún monto."
    ],
    respuestaCorrecta: 0,
    explicacion: "Confirmar el monto neto, la fecha límite y dónde pagar evita cortes involuntarios por desconocimiento."
  },

  // =========================================================================
  // 🛰️ DÍA 7: SOPORTE TÉCNICO 1
  // =========================================================================
  {
    id: "d7_01", dia: "Día 7", diaNumero: 7, nivel: 1, nivelLabel: "Cadete Espacial",
    modulo: "SOPORTE TÉCNICO 1", categoria: "Luces del Router ONT", tipo: "opcion_multiple",
    enunciado: "¿Qué indica la luz 'LOS' (Loss of Signal) encendida o parpadeando en rojo en el router ONT?",
    audioTexto: "¿Qué indica la luz LOS en rojo en el router ONT?",
    opciones: [
      "Pérdida total de señal óptica de fibra (corte de fibra, desconexión física o conector dañado).",
      "Que el WiFi está funcionando a máxima potencia.",
      "Que hay demasiados dispositivos conectados.",
      "Que la batería del router está llena."
    ],
    respuestaCorrecta: 0,
    explicacion: "LOS en rojo significa que no llega luz láser por el hilo de fibra hacia el puerto del receptor óptico."
  },
  {
    id: "d7_02", dia: "Día 7", diaNumero: 7, nivel: 1, nivelLabel: "Cadete Espacial",
    modulo: "SOPORTE TÉCNICO 1", categoria: "Luz PON", tipo: "verdadero_falso",
    enunciado: "Cuando la luz 'PON' del router está fija en color verde, significa que la ONT está correctamente enlazada y sincronizada con la OLT central.",
    audioTexto: "Verdadero o falso: Cuando la luz PON está fija en verde, la ONT está sincronizada con la central.",
    opciones: [
      "Verdadero - Indica enlace óptico establecido y autenticación exitosa.",
      "Falso - PON en verde significa que el router se va a quemar."
    ],
    respuestaCorrecta: 0,
    explicacion: "PON en verde fijo es el indicador de salud óptica normal de toda conexión FTTH."
  },
  {
    id: "d7_03", dia: "Día 7", diaNumero: 7, nivel: 1, nivelLabel: "Cadete Espacial",
    modulo: "SOPORTE TÉCNICO 1", categoria: "Reinicio Eléctrico", tipo: "opcion_multiple",
    enunciado: "¿Por qué el ciclo de apagado y encendido (reinicio eléctrico de 30 segundos) resuelve muchas fallas de conexión?",
    audioTexto: "¿Por qué el reinicio eléctrico de 30 segundos resuelve muchas fallas de conexión?",
    opciones: [
      "Porque limpia la memoria RAM del equipo, renueva tablas de ruteo y solicita una nueva concesión de dirección IP.",
      "Porque enfría el cable de fibra óptica.",
      "Porque asusta a los virus informáticos.",
      "No sirve para nada, es una superstición."
    ],
    respuestaCorrecta: 0,
    explicacion: "Reiniciar la ONT libera procesos colgados y sincroniza nuevamente con el servidor DHCP."
  },
  {
    id: "d7_04", dia: "Día 7", diaNumero: 7, nivel: 2, nivelLabel: "Piloto Interplanetario",
    modulo: "SOPORTE TÉCNICO 1", categoria: "Atenuación Óptica", tipo: "caso_practico",
    enunciado: "En la consola técnica observas que la potencia óptica del cliente es de -32 dBm (parámetro fuera de norma). ¿Qué diagnóstico corresponde?",
    audioTexto: "En la consola técnica la potencia óptica es de -32 dBm. ¿Qué diagnóstico corresponde?",
    opciones: [
      "Atenuación crítica (alta pérdida óptica por curvatura excesiva o suciedad en conectores); requiere calibración técnica en sitio.",
      "La señal es excelente y no requiere nada.",
      "El cliente debe comprar un televisor nuevo.",
      "La potencia es tan fuerte que va a romper la computadora."
    ],
    respuestaCorrecta: 0,
    explicacion: "El rango óptimo de operación en GPON oscila entre -15 y -25 dBm; sobrepasar -28 dBm produce cortes e inestabilidad."
  },
  {
    id: "d7_05", dia: "Día 7", diaNumero: 7, nivel: 2, nivelLabel: "Piloto Interplanetario",
    modulo: "SOPORTE TÉCNICO 1", categoria: "Avería Masiva", tipo: "escenario_operativo",
    enunciado: "Si varios clientes de la misma manzana reportan luz LOS en rojo simultáneamente, ¿qué acción descarta falla individual?",
    audioTexto: "Si varios clientes reportan luz LOS en rojo simultáneamente en la misma zona, ¿qué acción corresponde?",
    opciones: [
      "Verificar alertas de NOC por corte de cable troncal en vía pública y asociar los tickets a la incidencia masiva sin enviar visitas individuales.",
      "Mandar 20 técnicos distintos a cambiar todos los routers.",
      "Decirles a todos que compren computadoras nuevas.",
      "No contestar el teléfono."
    ],
    respuestaCorrecta: 0,
    explicacion: "Identificar una avería masiva agiliza el despacho de cuadrillas de empalme troncal y evita visitas domiciliarias inútiles."
  },
  {
    id: "d7_06", dia: "Día 7", diaNumero: 7, nivel: 2, nivelLabel: "Piloto Interplanetario",
    modulo: "SOPORTE TÉCNICO 1", categoria: "Cuidado de la Fibra", tipo: "opcion_multiple",
    enunciado: "¿Qué recomendación vital se debe dar al cliente respecto al cable delgado amarillo/blanco de fibra óptica (patchcord)?",
    audioTexto: "¿Qué recomendación vital se debe dar al cliente respecto al cable de fibra óptica patchcord?",
    opciones: [
      "No doblarlo en ángulos rectos (90° o menos), no pisarlo ni aplastarlo con muebles, ya que el núcleo de vidrio se quiebra con facilidad.",
      "Que lo amarre con nudos bien apretados para que no se escape la señal.",
      "Que lo corte con tijeras para acortarlo.",
      "Que lo lave con agua y jabón cada semana."
    ],
    respuestaCorrecta: 0,
    explicacion: "El patchcord de fibra contiene un filamento de vidrio microscópico; doblarlo en exceso fractura la guía de onda de luz."
  },
  {
    id: "d7_07", dia: "Día 7", diaNumero: 7, nivel: 2, nivelLabel: "Piloto Interplanetario",
    modulo: "SOPORTE TÉCNICO 1", categoria: "Reseteo de Fábrica", tipo: "opcion_multiple",
    enunciado: "¿Por qué NO se debe indicar al cliente presionar el botón 'Reset' con un alfiler salvo autorización expresa?",
    audioTexto: "¿Por qué no se debe indicar al cliente presionar el botón Reset con un alfiler?",
    opciones: [
      "Porque borra la configuración de la WAN, credenciales PPPoE y provisionamiento OLT, dejando el equipo totalmente inoperativo.",
      "Porque el router se convierte en radio AM.",
      "Porque se borra la cuenta de Facebook del cliente.",
      "No pasa nada, es lo mismo que apagarlo."
    ],
    respuestaCorrecta: 0,
    explicacion: "El reset físico devuelve la ONT a su estado de fábrica virgen, requiriendo reprogramación técnica remota o en sitio."
  },
  {
    id: "d7_08", dia: "Día 7", diaNumero: 7, nivel: 3, nivelLabel: "Comandante Galáctico",
    modulo: "SOPORTE TÉCNICO 1", categoria: "Resolución Primer Contacto (FCR)", tipo: "caso_practico",
    enunciado: "CASO: Cliente sin navegación pero luz PON verde. Al revisar la ONT en consola, observas que no tiene IP asignada por sesión colgada. ¿Cómo lo solucionas en primer contacto?",
    audioTexto: "Caso: Cliente sin navegación pero PON verde y sin IP asignada. ¿Cómo lo solucionas en primer contacto?",
    opciones: [
      "Ejecutar reinicio de puerto lógico en la OLT y reautenticar la sesión DHCP/PPPoE para que obtenga nueva IP sin enviar visita a domicilio.",
      "Agendar visita técnica para dentro de 5 días.",
      "Decirle que no hay solución y dar de baja.",
      "Pedirle que desinstale Windows."
    ],
    respuestaCorrecta: 0,
    explicacion: "Reaprovisionar la sesión lógica desde la central soluciona la falla en 60 segundos, logrando un FCR impecable."
  },
  {
    id: "d7_09", dia: "Día 7", diaNumero: 7, nivel: 3, nivelLabel: "Comandante Galáctico",
    modulo: "SOPORTE TÉCNICO 1", categoria: "Peligros Ópticos", tipo: "opcion_multiple",
    enunciado: "¿Por qué está terminantemente prohibido mirar directamente hacia el extremo del conector de fibra óptica desconectado?",
    audioTexto: "¿Por qué está prohibido mirar directamente hacia el conector de fibra óptica?",
    opciones: [
      "Porque la luz láser infrarroja es invisible para el ojo humano pero quema y daña irreversiblemente la retina ocular.",
      "Porque se escapa el internet al aire.",
      "Porque el conector puede morder.",
      "Solo por superstición."
    ],
    respuestaCorrecta: 0,
    explicacion: "La luz láser transporta energía óptica concentrada; la retina no percibe el color pero sufre quemaduras severas."
  },
  {
    id: "d7_10", dia: "Día 7", diaNumero: 7, nivel: 3, nivelLabel: "Comandante Galáctico",
    modulo: "SOPORTE TÉCNICO 1", categoria: "Agendamiento con Compromiso", tipo: "escenario_operativo",
    enunciado: "Cuando es inevitable coordinar una visita técnica presencial, ¿cuál es el estándar de oro de cierre?",
    audioTexto: "¿Cuál es el estándar de oro al coordinar una visita técnica presencial?",
    opciones: [
      "Brindar franja horaria clara, código de orden, nombre de la cuadrilla y recomendaciones de presencia de un mayor de edad con DNI.",
      "Decirle que el técnico llegará en algún momento del mes.",
      "No dar número de orden para evitar reclamos.",
      "Cobrarle por adelantado la visita técnica de garantía."
    ],
    respuestaCorrecta: 0,
    explicacion: "La precisión en la agenda y los requisitos del titular evitan visitas fallidas y generan confianza absoluta."
  },

  // =========================================================================
  // 🛰️ DÍA 8: SOPORTE TÉCNICO 2
  // =========================================================================
  {
    id: "d8_01", dia: "Día 8", diaNumero: 8, nivel: 1, nivelLabel: "Cadete Espacial",
    modulo: "SOPORTE TÉCNICO 2", categoria: "Frecuencias 2.4 GHz vs 5 GHz", tipo: "opcion_multiple",
    enunciado: "¿Cuál es la diferencia principal entre la red WiFi 2.4 GHz y la red WiFi 5 GHz?",
    audioTexto: "¿Cuál es la diferencia principal entre la red WiFi 2.4 GHz y la red WiFi 5 GHz?",
    opciones: [
      "2.4 GHz tiene mayor alcance y atraviesa paredes pero menor velocidad; 5 GHz ofrece velocidad ultra alta pero menor alcance y atraviesa menos obstáculos.",
      "2.4 GHz es gratis y 5 GHz cuesta el doble.",
      "5 GHz solo sirve de noche.",
      "No hay ninguna diferencia técnica."
    ],
    respuestaCorrecta: 0,
    explicacion: "Conocer la física de las frecuencias permite guiar al cliente a conectarse a la banda correcta según su ubicación."
  },
  {
    id: "d8_02", dia: "Día 8", diaNumero: 8, nivel: 1, nivelLabel: "Cadete Espacial",
    modulo: "SOPORTE TÉCNICO 2", categoria: "Interferencias Domésticas", tipo: "verdadero_falso",
    enunciado: "Electrodomésticos como microondas, teléfonos inalámbricos antiguos y paredes de concreto armado pueden generar interferencias graves en la señal WiFi de 2.4 GHz.",
    audioTexto: "Verdadero o falso: Microondas y paredes gruesas pueden degradar la señal WiFi 2.4 GHz.",
    opciones: [
      "Verdadero - El microondas emite radiación electromagnética en la misma banda de 2.4 GHz causando saturación.",
      "Falso - Los microondas aumentan la velocidad del internet."
    ],
    respuestaCorrecta: 0,
    explicacion: "La banda de 2.4 GHz es un espectro no licenciado compartido por múltiples dispositivos hogareños."
  },
  {
    id: "d8_03", dia: "Día 8", diaNumero: 8, nivel: 1, nivelLabel: "Cadete Espacial",
    modulo: "SOPORTE TÉCNICO 2", categoria: "Canales WiFi", tipo: "opcion_multiple",
    enunciado: "¿Por qué en edificios o condominios el WiFi puede sentirse lento a pesar de que la fibra óptica está perfecta?",
    audioTexto: "¿Por qué en edificios el WiFi puede sentirse lento a pesar de que la fibra está perfecta?",
    opciones: [
      "Por la saturación y colisión de canales WiFi provocada por docenas de routers vecinos transmitiendo en las mismas frecuencias.",
      "Porque la fibra óptica se cansa en los edificios altos.",
      "Porque los ascensores absorben el internet.",
      "Porque en los condominios no está permitido el uso de fibra."
    ],
    respuestaCorrecta: 0,
    explicacion: "La saturación del espectro radioeléctrico en departamentos vecinos es la principal causa de quejas de lentitud inalámbrica."
  },
  {
    id: "d8_04", dia: "Día 8", diaNumero: 8, nivel: 2, nivelLabel: "Piloto Interplanetario",
    modulo: "SOPORTE TÉCNICO 2", categoria: "Optimización de Canales", tipo: "caso_practico",
    enunciado: "CASO: Un cliente reporta desconexiones intermitentes solo en su laptop. En la consola cambias el canal de 2.4 GHz del canal 6 congestionado al canal 1 o 11 desocupado. ¿Qué logras?",
    audioTexto: "Caso: Cambias el canal WiFi del 6 congestionado al 1 o 11 desocupado. ¿Qué logras?",
    opciones: [
      "Eliminar el solapamiento con routers vecinos, estabilizar la conexión y evitar microcortes de forma inmediata.",
      "Romper la laptop del cliente.",
      "Apagar el router de los vecinos.",
      "Nada, cambiar canales no tiene efecto."
    ],
    respuestaCorrecta: 0,
    explicacion: "Los canales 1, 6 y 11 son los únicos no solapados en 2.4 GHz; mover la señal al más libre resuelve las desconexiones."
  },
  {
    id: "d8_05", dia: "Día 8", diaNumero: 8, nivel: 2, nivelLabel: "Piloto Interplanetario",
    modulo: "SOPORTE TÉCNICO 2", categoria: "Latencia y Ping en Juegos", tipo: "escenario_operativo",
    enunciado: "Un usuario gamer reclama por saltos de 'ping' (latencia inestable) mientras juega por WiFi. ¿Cuál es el diagnóstico y solución?",
    audioTexto: "¿Cuál es el diagnóstico y solución para un gamer con saltos de ping por WiFi?",
    opciones: [
      "Explicar que el medio inalámbrico sufre jitter por interferencias del aire, y recomendar conectar la consola por cable ethernet Cat 6 o a la banda 5 GHz.",
      "Decirle que juegue a juegos de cartas.",
      "Darle la baja de inmediato.",
      "Prometerle ping cero por satélite."
    ],
    respuestaCorrecta: 0,
    explicacion: "El cable ethernet elimina por completo el jitter y la pérdida de paquetes inherente al medio inalámbrico."
  },
  {
    id: "d8_06", dia: "Día 8", diaNumero: 8, nivel: 2, nivelLabel: "Piloto Interplanetario",
    modulo: "SOPORTE TÉCNICO 2", categoria: "DNS y Resolución de Nombres", tipo: "opcion_multiple",
    enunciado: "Si el cliente tiene IP pero al intentar abrir páginas web le sale el error 'No se pudo resolver la dirección DNS', ¿qué falla ocurre?",
    audioTexto: "Si el cliente tiene IP pero le sale error de resolución DNS, ¿qué falla ocurre?",
    opciones: [
      "Falla en los servidores DNS encargados de traducir los nombres de dominio (ej. google.com) a direcciones IP numéricas.",
      "El cable de fibra se ha roto en la calle.",
      "El cliente no pagó su recibo.",
      "La pantalla de la computadora está descalibrada."
    ],
    respuestaCorrecta: 0,
    explicacion: "Los servidores DNS traducen nombres a IPs; un fallo en DNS impide navegar por URLs aunque haya conectividad IP activa."
  },
  {
    id: "d8_07", dia: "Día 8", diaNumero: 8, nivel: 2, nivelLabel: "Piloto Interplanetario",
    modulo: "SOPORTE TÉCNICO 2", categoria: "Seguridad y Filtrado MAC", tipo: "opcion_multiple",
    enunciado: "¿Para qué sirve el protocolo de seguridad WPA2 / WPA3 en las redes inalámbricas de WINNER?",
    audioTexto: "¿Para qué sirve el protocolo de seguridad WPA2 / WPA3 en las redes inalámbricas?",
    opciones: [
      "Encriptar la transmisión de datos por el aire para impedir que intrusos intercepten información sensible o roben internet.",
      "Para que el router gaste menos electricidad.",
      "Para hacer que el internet sea más lento a propósito.",
      "No tiene ninguna función de seguridad."
    ],
    respuestaCorrecta: 0,
    explicacion: "WPA2/WPA3 cifra el tráfico de radiofrecuencia con algoritmos AES robustos protegiendo la privacidad del hogar."
  },
  {
    id: "d8_08", dia: "Día 8", diaNumero: 8, nivel: 3, nivelLabel: "Comandante Galáctico",
    modulo: "SOPORTE TÉCNICO 2", categoria: "Arquitectura WiFi 6", tipo: "caso_practico",
    enunciado: "¿Qué beneficios aporta la tecnología WiFi 6 (802.11ax) de los nuevos routers y Mesh de WINNER?",
    audioTexto: "¿Qué beneficios aporta la tecnología WiFi 6 de los nuevos routers y Mesh de WINNER?",
    opciones: [
      "Mayor velocidad, menor latencia y capacidad para gestionar más de 50 dispositivos simultáneos mediante tecnología OFDMA y MU-MIMO.",
      "Permite usar el router debajo del agua.",
      "Hace que las llamadas telefónicas sean gratuitas.",
      "Es exactamente igual a los routers de hace 15 años."
    ],
    respuestaCorrecta: 0,
    explicacion: "WiFi 6 está diseñado para hogares hiperconectados con múltiples dispositivos inteligentes sin degradar la red."
  },
  {
    id: "d8_09", dia: "Día 8", diaNumero: 8, nivel: 3, nivelLabel: "Comandante Galáctico",
    modulo: "SOPORTE TÉCNICO 2", categoria: "Tráfico en Segundo Plano", tipo: "opcion_multiple",
    enunciado: "Si un cliente afirma que nadie usa internet pero la red está saturada al 100%, ¿qué causal técnica común debe investigar el asesor?",
    audioTexto: "Si el cliente afirma que nadie usa internet pero la red está saturada al 100%, ¿qué investigar?",
    opciones: [
      "Actualizaciones automáticas de sistemas (Windows, iOS, consolas), copias de seguridad en la nube (OneDrive, iCloud) o intrusos conectados a la clave WiFi.",
      "Fantasmas en la casa.",
      "El router está absorbiendo internet para sí mismo.",
      "Es una falla imposible."
    ],
    respuestaCorrecta: 0,
    explicacion: "Backups en la nube y updates en segundo plano pueden saturar el canal de subida generando lentitud generalizada."
  },
  {
    id: "d8_10", dia: "Día 8", diaNumero: 8, nivel: 3, nivelLabel: "Comandante Galáctico",
    modulo: "SOPORTE TÉCNICO 2", categoria: "Pedagogía con el Cliente", tipo: "escenario_operativo",
    enunciado: "¿Cómo explica un Comandante a un cliente de avanzada edad por qué su WiFi llega bajo en el patio trasero sin usar tecnicismos confusos?",
    audioTexto: "¿Cómo explica un Comandante la cobertura WiFi sin usar tecnicismos confusos?",
    opciones: [
      "Comparando la señal WiFi con la luz de una lámpara: las paredes gruesas crean sombras que debilitan la luz, y un repetidor actúa como un foco adicional en el pasillo.",
      "Usando fórmulas matemáticas complejas de física cuántica.",
      "Diciéndole que aprenda de redes antes de llamar.",
      "Ignorando su pregunta."
    ],
    respuestaCorrecta: 0,
    explicacion: "Las analogías visuales sencillas generan entendimiento inmediato, gratitud y confianza en las recomendaciones técnicas."
  },

  // =========================================================================
  // 🛰️ DÍA 9: RECLAMOS
  // =========================================================================
  {
    id: "d9_01", dia: "Día 9", diaNumero: 9, nivel: 1, nivelLabel: "Cadete Espacial",
    modulo: "RECLAMOS", categoria: "Marco Regulatorio OSIPTEL", tipo: "opcion_multiple",
    enunciado: "¿Qué es un reclamo formal en el sector de telecomunicaciones?",
    audioTexto: "¿Qué es un reclamo formal en el sector de telecomunicaciones?",
    opciones: [
      "Un procedimiento administrativo regulado por OSIPTEL donde el usuario manifiesta disconformidad sobre facturación, calidad o servicio y exige una resolución legal motivada.",
      "Un comentario en redes sociales.",
      "Una queja informal que se puede borrar del sistema.",
      "Una llamada que no genera registro."
    ],
    respuestaCorrecta: 0,
    explicacion: "El reclamo formal tiene valor legal, plazos de respuesta estrictos y consecuencias regulatorias ante incumplimientos."
  },
  {
    id: "d9_02", dia: "Día 9", diaNumero: 9, nivel: 1, nivelLabel: "Cadete Espacial",
    modulo: "RECLAMOS", categoria: "Código de Reclamo", tipo: "verdadero_falso",
    enunciado: "Todo reclamo presentado por el usuario debe recibir obligatoriamente un código correlativo único de identificación en el momento de la llamada.",
    audioTexto: "Verdadero o falso: Todo reclamo presentado debe recibir un código correlativo obligatorio.",
    opciones: [
      "Verdadero - Es una exigencia ineludible de la normativa para garantizar el derecho de seguimiento del usuario.",
      "Falso - Los códigos solo se entregan si el supervisor lo autoriza por escrito."
    ],
    respuestaCorrecta: 0,
    explicacion: "No entregar el código correlativo de reclamo es una infracción pasible de sanción regulatoria."
  },
  {
    id: "d9_03", dia: "Día 9", diaNumero: 9, nivel: 1, nivelLabel: "Cadete Espacial",
    modulo: "RECLAMOS", categoria: "Solución Anticipada", tipo: "opcion_multiple",
    enunciado: "¿Qué es el Mecanismo de Solución Anticipada de Reclamos (SAR)?",
    audioTexto: "¿Qué es el Mecanismo de Solución Anticipada de Reclamos SAR?",
    opciones: [
      "Un acuerdo directo entre el asesor y el cliente dentro de la misma llamada donde se atiende la pretensión de inmediato evitando abrir un expediente largo.",
      "Una multa impuesta al cliente por llamar.",
      "Una negativa tajante de atención.",
      "Un software para colgar llamadas automáticamente."
    ],
    respuestaCorrecta: 0,
    explicacion: "El SAR permite resolver la causa en primer contacto de manera ágil y satisfactoria para el usuario."
  },
  {
    id: "d9_04", dia: "Día 9", diaNumero: 9, nivel: 2, nivelLabel: "Piloto Interplanetario",
    modulo: "RECLAMOS", categoria: "Manejo de Reclamo Hostil", tipo: "caso_practico",
    enunciado: "CASO: Un cliente dice gritando: '¡Estoy harto de sus mentiras, exijo mi libro de reclamaciones ahora mismo o voy a Indecopi y Osiptel!'. ¿Cómo respondes?",
    audioTexto: "Caso: Cliente exige libro de reclamaciones y amenaza con Indecopi. ¿Cómo respondes?",
    opciones: [
      "Mantener calma absoluta, indicar con amabilidad la ruta de acceso al libro y ofrecerle escuchar su motivo para darle una solución inmediata y definitiva si está a nuestro alcance.",
      "Decirle que no tenemos libro de reclamaciones.",
      "Burlarse y colgar la llamada.",
      "Amenazar al cliente con juicio."
    ],
    respuestaCorrecta: 0,
    explicacion: "Facilitar el acceso al reclamo sin obstáculos mientras se ofrece resolver de inmediato desactiva la agresividad."
  },
  {
    id: "d9_05", dia: "Día 9", diaNumero: 9, nivel: 2, nivelLabel: "Piloto Interplanetario",
    modulo: "RECLAMOS", categoria: "Plazos de Atención", tipo: "opcion_multiple",
    enunciado: "¿Cuál es el plazo regulatorio regular para emitir resolución en reclamos de facturación según OSIPTEL?",
    audioTexto: "¿Cuál es el plazo regulatorio regular para emitir resolución en reclamos de facturación?",
    opciones: [
      "Hasta 15 días hábiles para resolver más 5 días hábiles para notificar la resolución al domicilio o correo del usuario.",
      "6 meses calendario.",
      "24 horas únicamente.",
      "5 años sin respuesta."
    ],
    respuestaCorrecta: 0,
    explicacion: "Los plazos de facturación (15 días de resolución + 5 de notificación) deben respetarse rigurosamente para evitar silencio administrativo positivo."
  },
  {
    id: "d9_06", dia: "Día 9", diaNumero: 9, nivel: 2, nivelLabel: "Piloto Interplanetario",
    modulo: "RECLAMOS", categoria: "Suspensión de Cobro en Disputa", tipo: "escenario_operativo",
    enunciado: "Mientras un recibo o monto se encuentra formalmente en trámite de reclamo, ¿puede la empresa cortar el servicio por ese importe específico?",
    audioTexto: "¿Puede la empresa cortar el servicio por un importe que se encuentra formalmente en reclamo?",
    opciones: [
      "No, el monto reclamado queda temporalmente suspendido de cobro y no genera corte del servicio hasta la resolución final.",
      "Sí, se debe cortar la línea de inmediato para presionarlo a pagar.",
      "Solo si el monto supera los 100 soles.",
      "Depende del asesor que atienda."
    ],
    respuestaCorrecta: 0,
    explicacion: "La normativa prohíbe suspender el servicio por montos que estén formalmente en proceso de apelación o reclamo."
  },
  {
    id: "d9_07", dia: "Día 9", diaNumero: 9, nivel: 2, nivelLabel: "Piloto Interplanetario",
    modulo: "RECLAMOS", categoria: "Quejas vs Reclamos", tipo: "opcion_multiple",
    enunciado: "¿En qué se diferencia una 'Queja' de un 'Reclamo' según el procedimiento administrativo?",
    audioTexto: "¿En qué se diferencia una Queja de un Reclamo según el procedimiento administrativo?",
    opciones: [
      "El Reclamo cuestiona el servicio o cobro; la Queja cuestiona la vulneración del debido proceso (ej. negativa a recibir el reclamo o cobro indebido de un monto reclamado).",
      "Son exactamente lo mismo con dos nombres.",
      "La queja la presentan los jueces y el reclamo los clientes.",
      "La queja solo es verbal y el reclamo en papel."
    ],
    respuestaCorrecta: 0,
    explicacion: "La queja se interpone cuando la empresa vulnera las reglas procesales del reclamo o corta el servicio indebidamente."
  },
  {
    id: "d9_08", dia: "Día 9", diaNumero: 9, nivel: 3, nivelLabel: "Comandante Galáctico",
    modulo: "RECLAMOS", categoria: "Silencio Administrativo Positivo", tipo: "caso_practico",
    enunciado: "¿Qué ocurre jurídicamente si la empresa no emite ni notifica la resolución de un reclamo dentro de los plazos legales establecidos?",
    audioTexto: "¿Qué ocurre jurídicamente si no se resuelve un reclamo dentro de los plazos legales?",
    opciones: [
      "Aplica el Silencio Administrativo Positivo (SAP), dándose por fundada la pretensión del usuario automáticamente y a su favor.",
      "El reclamo se anula y el cliente pierde.",
      "El cliente debe pagar el triple de dinero.",
      "Se reinicia el plazo por 1 año más."
    ],
    respuestaCorrecta: 0,
    explicacion: "El SAP es una garantía legal que castiga la desidia operativa dando la razón al usuario de forma automática."
  },
  {
    id: "d9_09", dia: "Día 9", diaNumero: 9, nivel: 3, nivelLabel: "Comandante Galáctico",
    modulo: "RECLAMOS", categoria: "Desescalamiento Máximo", tipo: "opcion_multiple",
    enunciado: "¿Cuál es el mayor éxito de un asesor de fidelizaciones ante una llamada donde el cliente exige abrir un reclamo?",
    audioTexto: "¿Cuál es el mayor éxito de un asesor de fidelizaciones ante una llamada con exigencia de reclamo?",
    opciones: [
      "Escuchar a fondo, entender la pretensión real y resolverla de inmediato en la misma llamada mediante Solución Anticipada, dejando al cliente satisfecho.",
      "Engañar al cliente para que no reclame.",
      "Cortar la llamada antes de que termine de hablar.",
      "Hacer que el cliente se canse y cuelgue."
    ],
    respuestaCorrecta: 0,
    explicacion: "Resolver la pretensión en el primer contacto ahorra costos procesales y restaura la relación con el cliente."
  },
  {
    id: "d9_10", dia: "Día 9", diaNumero: 9, nivel: 3, nivelLabel: "Comandante Galáctico",
    modulo: "RECLAMOS", categoria: "Cierre y Tipificación Regulatoria", tipo: "escenario_operativo",
    enunciado: "Al registrar un reclamo en sistema, ¿qué datos son mandatorios para evitar nulidades?",
    audioTexto: "¿Qué datos son mandatorios al registrar un reclamo para evitar nulidades?",
    opciones: [
      "Datos completos del reclamante, servicio afectado, materia concreta del reclamo, pretensión clara y dirección o correo de notificación.",
      "Solo el primer nombre del cliente.",
      "La foto de perfil del asesor.",
      "Dejar los campos vacíos."
    ],
    respuestaCorrecta: 0,
    explicacion: "La correcta individualización de la materia y pretensión permite emitir una resolución coherente y jurídicamente sólida."
  },

  // =========================================================================
  // 🛰️ DÍA 10: RETENCIÓN Y FIDELIZACIONES
  // =========================================================================
  {
    id: "d10_01", dia: "Día 10", diaNumero: 10, nivel: 1, nivelLabel: "Cadete Espacial",
    modulo: "RETENCIÓN Y FIDELIZACIONES", categoria: "Objetivo Central", tipo: "opcion_multiple",
    enunciado: "¿Cuál es el objetivo primordial del área de Retención y Fidelizaciones en WINNER?",
    audioTexto: "¿Cuál es el objetivo primordial del área de Retención y Fidelizaciones en WINNER?",
    opciones: [
      "Identificar la insatisfacción del cliente, resolver su problema de raíz y construir un acuerdo de valor para mantener su permanencia en la empresa.",
      "Retener a la fuerza al cliente sin importar su bienestar.",
      "Evitar que el cliente hable con su familia.",
      "Cobrar penalidades para asustar al usuario."
    ],
    respuestaCorrecta: 0,
    explicacion: "Fidelizar es crear lealtad resolviendo el problema que motivó la solicitud de baja."
  },
  {
    id: "d10_02", dia: "Día 10", diaNumero: 10, nivel: 1, nivelLabel: "Cadete Espacial",
    modulo: "RETENCIÓN Y FIDELIZACIONES", categoria: "Escalera de Retención", tipo: "verdadero_falso",
    enunciado: "En la escalera de retención nunca se debe ofrecer el descuento máximo en el primer intento sin antes haber explorado alternativas técnicas o de valor.",
    audioTexto: "Verdadero o falso: Nunca se debe ofrecer el descuento máximo en el primer intento sin antes explorar alternativas.",
    opciones: [
      "Verdadero - Se debe aplicar una negociación progresiva cuidando la sostenibilidad y resolviendo primero el motivo real.",
      "Falso - Se debe regalar el 90% de descuento en los primeros 5 segundos de la llamada."
    ],
    respuestaCorrecta: 0,
    explicacion: "Regalar descuentos de golpe devalúa el servicio y no resuelve la causa raíz de la insatisfacción."
  },
  {
    id: "d10_03", dia: "Día 10", diaNumero: 10, nivel: 1, nivelLabel: "Cadete Espacial",
    modulo: "RETENCIÓN Y FIDELIZACIONES", categoria: "Diferencial de Fibra", tipo: "opcion_multiple",
    enunciado: "¿Cuál es el argumento diferenciador más sólido de WINNER frente a ofertas engañosas de la competencia?",
    audioTexto: "¿Cuál es el argumento diferenciador más sólido de WINNER frente a ofertas de la competencia?",
    opciones: [
      "Fibra óptica 100% pura y simétrica de extremo a extremo, sin cables coaxiales compartidos ni caídas en horas pico.",
      "Decir que los competidores van a quebrar.",
      "Inventar noticias falsas.",
      "No existe ninguna diferencia con otras empresas."
    ],
    respuestaCorrecta: 0,
    explicacion: "La calidad técnica superior de la fibra simétrica es una verdad contrastable que desbarata ofertas de operadoras con HFC."
  },
  {
    id: "d10_04", dia: "Día 10", diaNumero: 10, nivel: 2, nivelLabel: "Piloto Interplanetario",
    modulo: "RETENCIÓN Y FIDELIZACIONES", categoria: "Objeción de Oferta Agresiva", tipo: "caso_practico",
    enunciado: "CASO: El cliente afirma: 'La operadora X me ofrece 600 Megas por 40 soles durante 6 meses'. ¿Cómo se rebate profesionalmente?",
    audioTexto: "Caso: La operadora X ofrece 600 megas por 40 soles durante 6 meses. ¿Cómo se rebate?",
    opciones: [
      "Advertir con cortesía sobre los costos ocultos (subida asimétrica del 10%, costo de instalación prorrateado y subida abrupta de tarifa en el mes 7) y emparejar con un plan optimizado WINNER.",
      "Gritarle que le van a robar.",
      "Darle la baja de inmediato sin decir palabra.",
      "Recomendarle que contrate a la competencia."
    ],
    respuestaCorrecta: 0,
    explicacion: "Transparentar las letras chicas de la competencia y contraofertar con beneficios sólidos protege la permanencia del cliente."
  },
  {
    id: "d10_05", dia: "Día 10", diaNumero: 10, nivel: 2, nivelLabel: "Piloto Interplanetario",
    modulo: "RETENCIÓN Y FIDELIZACIONES", categoria: "Técnica EAR", tipo: "escenario_operativo",
    enunciado: "Durante una llamada de cancelación, ¿en qué momento exacto de la técnica EAR se presenta la oferta de fidelización?",
    audioTexto: "¿En qué momento de la técnica EAR se presenta la oferta de fidelización?",
    opciones: [
      "En la fase R (Resolver), únicamente después de haber Escuchado sin interrumpir y Aceptado/validado la emoción del cliente.",
      "En el segundo cero apenas contesta la llamada.",
      "Antes de que el cliente diga su nombre.",
      "No se presenta ninguna oferta."
    ],
    respuestaCorrecta: 0,
    explicacion: "No se puede proponer una solución acertada sin antes haber escuchado y validado el motivo real de la queja."
  },
  {
    id: "d10_06", dia: "Día 10", diaNumero: 10, nivel: 2, nivelLabel: "Piloto Interplanetario",
    modulo: "RETENCIÓN Y FIDELIZACIONES", categoria: "Clientes con Antigüedad", tipo: "opcion_multiple",
    enunciado: "¿Qué factor psicológico tiene mayor peso emocional al retener a un cliente con más de 2 años en la compañía?",
    audioTexto: "¿Qué factor tiene mayor peso al retener a un cliente con más de 2 años en la compañía?",
    opciones: [
      "El reconocimiento explícito de su lealtad e historial impecable, tratándolo como miembro distinguido de la familia WINNER.",
      "Tratarlo como un número de contrato cualquiera.",
      "Amenazarlo con cortar la línea.",
      "Decirle que no hay promociones para clientes antiguos."
    ],
    respuestaCorrecta: 0,
    explicacion: "El reconocimiento a la antigüedad valida la fidelidad del usuario y genera apertura a nuevas propuestas."
  },
  {
    id: "d10_07", dia: "Día 10", diaNumero: 10, nivel: 2, nivelLabel: "Piloto Interplanetario",
    modulo: "RETENCIÓN Y FIDELIZACIONES", categoria: "Acuerdos Ganar-Ganar", tipo: "opcion_multiple",
    enunciado: "En una negociación de retención exitosa, ¿qué caracteriza a un acuerdo 'Ganar-Ganar' (Win-Win)?",
    audioTexto: "¿Qué caracteriza a un acuerdo Ganar-Ganar en una retención exitosa?",
    opciones: [
      "El cliente obtiene una solución real con beneficio tangible y la empresa conserva al cliente activo con ingresos sostenibles.",
      "La empresa pierde dinero y el cliente queda insatisfecho.",
      "El asesor engaña al cliente para ganar comisión.",
      "El cliente se ve obligado a pagar sin estar de acuerdo."
    ],
    respuestaCorrecta: 0,
    explicacion: "El principio Win-Win asegura que ambas partes queden conformes y comprometidas con la continuidad del servicio."
  },
  {
    id: "d10_08", dia: "Día 10", diaNumero: 10, nivel: 3, nivelLabel: "Comandante Galáctico",
    modulo: "RETENCIÓN Y FIDELIZACIONES", categoria: "Decisión Irrevocable", tipo: "caso_practico",
    enunciado: "CASO: Tras presentar todas las alternativas, el titular insiste de forma serena y firme: 'He tomado la decisión irrevocable de cancelar'. ¿Cómo procede un Comandante?",
    audioTexto: "Caso: El cliente insiste de forma irrevocable en cancelar tras escuchar alternativas. ¿Cómo procede un Comandante?",
    opciones: [
      "Respetar su decisión con profesionalismo, procesar la baja sin trabas, registrar el código de solicitud y dejar una puerta abierta para su futuro retorno.",
      "Ponerse a llorar en la llamada.",
      "Cortarle la llamada para que el sistema no registre la baja.",
      "Insultar al cliente por no aceptar las ofertas."
    ],
    respuestaCorrecta: 0,
    explicacion: "La despedida elegante y la tramitación sin obstáculos deja una impresión impecable que motiva a que el 30% de los clientes regresen."
  },
  {
    id: "d10_09", dia: "Día 10", diaNumero: 10, nivel: 3, nivelLabel: "Comandante Galáctico",
    modulo: "RETENCIÓN Y FIDELIZACIONES", categoria: "Métricas Churn y LTV", tipo: "opcion_multiple",
    enunciado: "¿Por qué retener a un cliente existente es hasta 5 veces más rentable para la empresa que adquirir uno nuevo?",
    audioTexto: "¿Por qué retener a un cliente es hasta 5 veces más rentable que adquirir uno nuevo?",
    opciones: [
      "Porque no requiere costo de instalación, adquisición comercial ni tendido de fibra nueva, maximizando el Customer Lifetime Value (LTV).",
      "Porque los clientes viejos no usan internet.",
      "Porque a los clientes nuevos se les regala computadoras.",
      "No es verdad, da igual retener o perder clientes."
    ],
    respuestaCorrecta: 0,
    explicacion: "El costo de adquisición de clientes (CAC) es elevado; la retención protege los flujos de caja y la salud financiera de la compañía."
  },
  {
    id: "d10_10", dia: "Día 10", diaNumero: 10, nivel: 3, nivelLabel: "Comandante Galáctico",
    modulo: "RETENCIÓN Y FIDELIZACIONES", categoria: "Blindaje de la Retención", tipo: "escenario_operativo",
    enunciado: "Al lograr una retención exitosa, ¿cómo se asegura el asesor de que el cliente no vuelva a llamar para cancelar al día siguiente?",
    audioTexto: "¿Cómo se asegura el asesor de que el cliente no vuelva a llamar para cancelar al día siguiente?",
    opciones: [
      "Recapitulando los beneficios pactados, programando de inmediato la visita técnica si había falla y enviando confirmación formal de los acuerdos por SMS/correo.",
      "Esperando a que pase el mes sin hacer seguimiento.",
      "Bloqueando el número del cliente para que no pueda llamar.",
      "No registrando el ticket en Nova."
    ],
    respuestaCorrecta: 0,
    explicacion: "El cumplimiento inmediato de los compromisos pactados blinda la retención y elimina el arrepentimiento post-llamada."
  },

  // =========================================================================
  // 🏆 DÍA 11: ROLE PLAY FINAL
  // =========================================================================
  {
    id: "d11_01", dia: "Día 11", diaNumero: 11, nivel: 1, nivelLabel: "Cadete Espacial",
    modulo: "ROLE PLAY FINAL", categoria: "Simulación de Inicio de Llamada", tipo: "opcion_multiple",
    enunciado: "ROLE PLAY: El cliente contesta con tono seco: 'A ver señorita, dígame rápido para qué me llama'. ¿Cuál es el saludo que establece empatía de inmediato?",
    audioTexto: "Role Play: El cliente contesta seco pidiendo que le digan rápido. ¿Cuál es el saludo que establece empatía?",
    opciones: [
      "'¡Buenos días, señor [Cliente]! Le saluda [Nombre] de la Comandancia WINNER. Sé que su tiempo es muy valioso; me comunico para darle una solución definitiva a su solicitud de servicio'.",
      "'Si no tiene tiempo mejor cuelgue y llame cuando esté desocupado'.",
      "'Le llamo porque mi supervisor me obliga'.",
      "'Hola, ¿qué hace?'"
    ],
    respuestaCorrecta: 0,
    explicacion: "Reconocer el valor del tiempo del cliente desarma la prisa defensiva y abre el espacio para dialogar."
  },
  {
    id: "d11_02", dia: "Día 11", diaNumero: 11, nivel: 1, nivelLabel: "Cadete Espacial",
    modulo: "ROLE PLAY FINAL", categoria: "Simulación de Reclamo Técnico", tipo: "verdadero_falso",
    enunciado: "ROLE PLAY: En una simulación en vivo, cuando el cliente expone una falla técnica compleja, el asesor debe tomar nota de los detalles clave antes de proponer cualquier solución comercial.",
    audioTexto: "Verdadero o falso: En una simulación, el asesor debe tomar nota de los detalles técnicos antes de proponer soluciones.",
    opciones: [
      "Verdadero - Escuchar activamente y estructurar el problema técnico es requisito indispensable para acertar en la solución.",
      "Falso - Se debe interrumpir al segundo 5 con un descuento comercial."
    ],
    respuestaCorrecta: 0,
    explicacion: "Comprender la causa técnica exacta es lo que permite brindar una respuesta que realmente solucione el malestar."
  },
  {
    id: "d11_03", dia: "Día 11", diaNumero: 11, nivel: 1, nivelLabel: "Cadete Espacial",
    modulo: "ROLE PLAY FINAL", categoria: "Código de Honor WINNER", tipo: "opcion_multiple",
    enunciado: "ROLE PLAY: ¿Cuál es el principio inquebrantable de todo Tripulante Oficial en la Nave Fidelizaciones de WINNER?",
    audioTexto: "¿Cuál es el principio inquebrantable de todo Tripulante Oficial en la Nave Fidelizaciones de WINNER?",
    opciones: [
      "Defender la lealtad del cliente con honestidad, excelencia técnica, empatía genuina y cumplimiento estricto de los compromisos adquiridos.",
      "Colgar las llamadas que superen los 5 minutos.",
      "Aceptar las bajas sin intentar ayudar al usuario.",
      "Prometer cosas imposibles para salir del paso."
    ],
    respuestaCorrecta: 0,
    explicacion: "El Tripulante Oficial personifica la confianza, el rigor técnico y la calidez que distinguen a la familia WINNER."
  },
  {
    id: "d11_04", dia: "Día 11", diaNumero: 11, nivel: 2, nivelLabel: "Piloto Interplanetario",
    modulo: "ROLE PLAY FINAL", categoria: "Simulación de Negociación", tipo: "caso_practico",
    enunciado: "ROLE PLAY EN VIVO: El cliente dice: 'Tengo en mano el contrato de la competencia con 1000 Megas. Si no me igualan el precio me voy hoy mismo'. ¿Cómo responde el Piloto?",
    audioTexto: "Role play: El cliente dice tener el contrato de la competencia y exige igualar el precio hoy. ¿Cómo responde el Piloto?",
    opciones: [
      "'Comprendo su punto, señor [Cliente]. Permítame revisar su consumo real para proponerle un plan de máxima velocidad simétrica WINNER con beneficio de lealtad, asegurando la estabilidad que ninguna red mixta puede igualar'.",
      "'Váyase con la competencia, a nosotros no nos importa'.",
      "'La competencia no existe, es un invento'.",
      "'Le doy todo gratis por 10 años'."
    ],
    respuestaCorrecta: 0,
    explicacion: "La seguridad en la calidad de la red propia y el ofrecimiento de un beneficio viable convierte la amenaza en retención."
  },
  {
    id: "d11_05", dia: "Día 11", diaNumero: 11, nivel: 2, nivelLabel: "Piloto Interplanetario",
    modulo: "ROLE PLAY FINAL", categoria: "Simulación de Cliente Hostil", tipo: "escenario_operativo",
    enunciado: "ROLE PLAY: El cliente eleva la voz y usa palabras ofensivas. Según el protocolo de Role Play, ¿cuál es la técnica de modulación requerida?",
    audioTexto: "¿Cuál es la técnica de modulación requerida ante un cliente que eleva la voz y se muestra ofensivo?",
    opciones: [
      "Mantener tono firme pero sereno y respetuoso, recordar amablemente el marco de respeto mutuo y reorientar la conversación hacia la solución concreta de su caso.",
      "Gritar más fuerte que el cliente para demostrar jerarquía.",
      "Cortar la llamada de golpe sin avisar.",
      "Poner música estridente en el micrófono."
    ],
    respuestaCorrecta: 0,
    explicacion: "El control emocional y la firmeza respetuosa desescalan la hostilidad sin romper la etiqueta profesional."
  },
  {
    id: "d11_06", dia: "Día 11", diaNumero: 11, nivel: 2, nivelLabel: "Piloto Interplanetario",
    modulo: "ROLE PLAY FINAL", categoria: "Simulación de Facturación Compleja", tipo: "caso_practico",
    enunciado: "ROLE PLAY: En el simulador, el cliente no entiende por qué su recibo llegó con un cobro mayor tras un cambio de plan. ¿Cómo se lo explicas en 30 segundos?",
    audioTexto: "¿Cómo explicas en 30 segundos por qué el recibo llegó con cobro mayor tras un cambio de plan?",
    opciones: [
      "Desglosando en Nova con claridad los días exactos de prorrateo entre ambos planes, demostrando que a partir del siguiente mes pagará estrictamente su nueva cuota fija.",
      "Diciéndole que el sistema nunca se equivoca y que pague sin quejarse.",
      "Diciéndole que no sabe sumar.",
      "Inventando que hubo un aumento de impuestos del estado."
    ],
    respuestaCorrecta: 0,
    explicacion: "La pedagogía matemática clara y transparente elimina la confusión y restaura la tranquilidad del usuario."
  },
  {
    id: "d11_07", dia: "Día 11", diaNumero: 11, nivel: 2, nivelLabel: "Piloto Interplanetario",
    modulo: "ROLE PLAY FINAL", categoria: "Integración 360° en Nova", tipo: "opcion_multiple",
    enunciado: "Durante la evaluación final de Role Play, ¿qué herramientas deben manejarse en simultáneo con fluidez?",
    audioTexto: "¿Qué herramientas deben manejarse en simultáneo con fluidez en la evaluación de Role Play?",
    opciones: [
      "Consola CRM Nova (ficha 360°, tickets y facturación), visor de potencia de la OLT, matriz de promociones comerciales y protocolo de diálogo WINNER.",
      "Solo abrir un bloc de notas.",
      "El juego del solitario en Windows.",
      "Ninguna herramienta informática."
    ],
    respuestaCorrecta: 0,
    explicacion: "El asesor de élite navega con destreza entre el CRM, el diagnóstico de red y el protocolo de comunicación en vivo."
  },
  {
    id: "d11_08", dia: "Día 11", diaNumero: 11, nivel: 3, nivelLabel: "Comandante Galáctico",
    modulo: "ROLE PLAY FINAL", categoria: "Retención de Alto Valor PyME", tipo: "caso_practico",
    enunciado: "CASO SUPREMO: Tienes en simulación a un cliente PyME con 4 sedes que exige la baja total por una caída de 4 horas en una sede secundaria. ¿Cuál es tu maniobra maestra?",
    audioTexto: "Caso supremo: Cliente PyME con 4 sedes exige la baja total por una caída de 4 horas en una sede. ¿Cuál es tu maniobra?",
    opciones: [
      "Aislar el incidente de la sede afectada, aplicar descuento por horas no servidas, coordinar enlace de respaldo prioritario con el NOC y agradecer su confianza protegiendo el contrato integral.",
      "Darle la baja a las 4 sedes de inmediato.",
      "Decirle que no le importa a nadie su negocio.",
      "Transferirlo a 5 compañeros diferentes."
    ],
    respuestaCorrecta: 0,
    explicacion: "La visión analítica evita que una contingencia localizada destruya una cuenta corporativa de alto volumen."
  },
  {
    id: "d11_09", dia: "Día 11", diaNumero: 11, nivel: 3, nivelLabel: "Comandante Galáctico",
    modulo: "ROLE PLAY FINAL", categoria: "Cierre Magistral y Fidelidad", tipo: "opcion_multiple",
    enunciado: "ROLE PLAY: ¿Cuál es el cierre magistral que debe ejecutar el asesor al concluir con éxito su Role Play de graduación?",
    audioTexto: "¿Cuál es el cierre magistral al concluir con éxito el Role Play de graduación?",
    opciones: [
      "Recapitular con precisión los acuerdos, validar que la solución dejó al cliente 100% conforme, entregar código de gestión y despedirse con el saludo institucional de la Flota WINNER.",
      "Colgar rápidamente para celebrar.",
      "Decirle al cliente que casi no lo logra convencer.",
      "No entregar número de gestión."
    ],
    respuestaCorrecta: 0,
    explicacion: "El cierre magistral corona una gestión intachable donde el cliente se siente valorado, escuchado y seguro de su permanencia."
  },
  {
    id: "d11_10", dia: "Día 11", diaNumero: 11, nivel: 3, nivelLabel: "Comandante Galáctico",
    modulo: "ROLE PLAY FINAL", categoria: "Graduación en la Nave Fidelizaciones", tipo: "opcion_multiple",
    enunciado: "¿Qué significa alcanzar la aprobación de la Misión Final del Día 11?",
    audioTexto: "¿Qué significa alcanzar la aprobación de la Misión Final del Día 11?",
    opciones: [
      "La culminación exitosa de la formación, el ascenso al Nivel 11 y la asignación oficial como Tripulante Oficial en la Nave Fidelizaciones de la MISIÓN WINNER.",
      "Tener que repetir todo el curso desde el Día 1.",
      "Un trámite sin ninguna validez.",
      "El despido de la empresa."
    ],
    respuestaCorrecta: 0,
    explicacion: "El Día 11 corona el viaje formativo y consagra al asesor como Tripulante Oficial con su diploma y ceremonia galáctica."
  }
];

// Asignar al contexto global
window.INITIAL_QUESTIONS = INITIAL_QUESTIONS;
