/**
 * MISIÓN WINNER - NOVA FIDELIZ - QUIZZES
 * CONFIGURACIÓN CENTRAL DEL SISTEMA (config.js)
 * 11 Misiones Formativas Oficiales y Área Única: Fidelizaciones
 */

const WINNER_CONFIG = {
  appName: "MISIÓN WINNER - NOVA FIDELIZ",
  subTitle: "Academia Galáctica de Formación",
  approvalScoreMin: 80, // 80% o 16/20
  totalQuestionsPerQuiz: 10,
  distribution: {
    facil: 3,   // Nivel 1: Cadete Espacial
    medio: 4,   // Nivel 2: Piloto Interplanetario
    dificil: 3  // Nivel 3: Comandante Galáctico
  },
  
  // =========================================================================
  // CONTROL DE ACCESO Y SEGURIDAD ADMINISTRATIVA
  // =========================================================================
  security: {
    ADMIN_PASSWORD: "MWFidelizaciones2026", // Contraseña única de Administrador (Modificable aquí)
    sessionStorageKey: "mw_admin_authenticated",
    dashboardWelcomeTitle: "Centro de Control de la Academia Espacial WINNER",
    hangarWelcomeTitle: "Hangar Estratégico de Misiones y Evaluaciones"
  },
  
  // =========================================================================
  // 11 MISIONES FORMATIVAS OFICIALES (DÍA 1 AL DÍA 11)
  // =========================================================================
  diasFormacion: [
    {
      id: "dia_1",
      nombre: "🛰️ DÍA 1: PROTOCOLO DE ATENCIÓN",
      short: "Día 1",
      numero: 1,
      modulo: "PROTOCOLO DE ATENCIÓN",
      categoria: "Protocolo de Atención",
      icono: "🛰️",
      colorHex: "#3b82f6",
      colorClase: "text-blue-400",
      bgBadge: "bg-blue-950/80 border-blue-500/40 text-blue-300",
      fase: "Fase 1: Fundamentos (Días 1 al 3 - Azul)"
    },
    {
      id: "dia_2",
      nombre: "🛰️ DÍA 2: PRODUCTO SVA",
      short: "Día 2",
      numero: 2,
      modulo: "PRODUCTO SVA",
      categoria: "Producto SVA",
      icono: "🛰️",
      colorHex: "#3b82f6",
      colorClase: "text-blue-400",
      bgBadge: "bg-blue-950/80 border-blue-500/40 text-blue-300",
      fase: "Fase 1: Fundamentos (Días 1 al 3 - Azul)"
    },
    {
      id: "dia_3",
      nombre: "🛰️ DÍA 3: CAMBIOS DE VELOCIDAD",
      short: "Día 3",
      numero: 3,
      modulo: "CAMBIOS DE VELOCIDAD",
      categoria: "Cambios de Velocidad",
      icono: "🛰️",
      colorHex: "#3b82f6",
      colorClase: "text-blue-400",
      bgBadge: "bg-blue-950/80 border-blue-500/40 text-blue-300",
      fase: "Fase 1: Fundamentos (Días 1 al 3 - Azul)"
    },
    {
      id: "dia_4",
      nombre: "🛰️ DÍA 4: SERVICIOS SOLICITADOS 1 Y 2",
      short: "Día 4",
      numero: 4,
      modulo: "SERVICIOS SOLICITADOS 1 Y 2",
      categoria: "Servicios Solicitados 1 y 2",
      icono: "🛰️",
      colorHex: "#00f0ff",
      colorClase: "text-cyan-400",
      bgBadge: "bg-cyan-950/80 border-cyan-500/40 text-cyan-300",
      fase: "Fase 2: Procesos Operativos (Días 4 al 6 - Celeste)"
    },
    {
      id: "dia_5",
      nombre: "🛰️ DÍA 5: SERVICIOS SOLICITADOS 3 Y 4",
      short: "Día 5",
      numero: 5,
      modulo: "SERVICIOS SOLICITADOS 3 Y 4",
      categoria: "Servicios Solicitados 3 y 4",
      icono: "🛰️",
      colorHex: "#00f0ff",
      colorClase: "text-cyan-400",
      bgBadge: "bg-cyan-950/80 border-cyan-500/40 text-cyan-300",
      fase: "Fase 2: Procesos Operativos (Días 4 al 6 - Celeste)"
    },
    {
      id: "dia_6",
      nombre: "🛰️ DÍA 6: FACTURACIÓN",
      short: "Día 6",
      numero: 6,
      modulo: "FACTURACIÓN",
      categoria: "Facturación",
      icono: "🛰️",
      colorHex: "#00f0ff",
      colorClase: "text-cyan-400",
      bgBadge: "bg-cyan-950/80 border-cyan-500/40 text-cyan-300",
      fase: "Fase 2: Procesos Operativos (Días 4 al 6 - Celeste)"
    },
    {
      id: "dia_7",
      nombre: "🛰️ DÍA 7: SOPORTE TÉCNICO 1",
      short: "Día 7",
      numero: 7,
      modulo: "SOPORTE TÉCNICO 1",
      categoria: "Soporte Técnico 1",
      icono: "🛰️",
      colorHex: "#a855f7",
      colorClase: "text-purple-400",
      bgBadge: "bg-purple-950/80 border-purple-500/40 text-purple-300",
      fase: "Fase 3: Soporte y Calidad (Días 7 al 9 - Morado)"
    },
    {
      id: "dia_8",
      nombre: "🛰️ DÍA 8: SOPORTE TÉCNICO 2",
      short: "Día 8",
      numero: 8,
      modulo: "SOPORTE TÉCNICO 2",
      categoria: "Soporte Técnico 2",
      icono: "🛰️",
      colorHex: "#a855f7",
      colorClase: "text-purple-400",
      bgBadge: "bg-purple-950/80 border-purple-500/40 text-purple-300",
      fase: "Fase 3: Soporte y Calidad (Días 7 al 9 - Morado)"
    },
    {
      id: "dia_9",
      nombre: "🛰️ DÍA 9: RECLAMOS",
      short: "Día 9",
      numero: 9,
      modulo: "RECLAMOS",
      categoria: "Reclamos",
      icono: "🛰️",
      colorHex: "#a855f7",
      colorClase: "text-purple-400",
      bgBadge: "bg-purple-950/80 border-purple-500/40 text-purple-300",
      fase: "Fase 3: Soporte y Calidad (Días 7 al 9 - Morado)"
    },
    {
      id: "dia_10",
      nombre: "🛰️ DÍA 10: RETENCIÓN Y FIDELIZACIONES",
      short: "Día 10",
      numero: 10,
      modulo: "RETENCIÓN Y FIDELIZACIONES",
      categoria: "Retención y Fidelizaciones",
      icono: "🛰️",
      colorHex: "#f59e0b",
      colorClase: "text-amber-400 font-bold",
      bgBadge: "bg-amber-950/80 border-amber-500/50 text-amber-300",
      fase: "Fase 4: Alta Fidelización (Día 10 - Dorado)"
    },
    {
      id: "dia_11",
      nombre: "🏆 DÍA 11: ROLE PLAY FINAL",
      short: "Día 11",
      numero: 11,
      modulo: "ROLE PLAY FINAL",
      categoria: "Role Play Final",
      icono: "🏆",
      colorHex: "#fbbf24",
      colorClase: "text-yellow-300 font-extrabold glow-gold",
      bgBadge: "bg-gradient-to-r from-amber-500/20 to-yellow-500/30 border-amber-400 text-yellow-200 shadow-[0_0_15px_rgba(251,191,36,0.4)]",
      fase: "Misión de Graduación Suprema (Día 11 - Dorado Brillante con Insignia)"
    }
  ],

  // =========================================================================
  // ÁREA OPERATIVA ÚNICA: FIDELIZACIONES
  // =========================================================================
  areas: [
    "🚀 Fidelizaciones"
  ],

  // Avatares espaciales
  avatares: [
    { id: "avatar_helios", nombre: "Helios Nova", rol: "Especialista en Telecom", icon: "👨‍🚀" },
    { id: "avatar_astrea", nombre: "Comandante Astrea", rol: "Estratega Galáctica", icon: "👩‍🚀" },
    { id: "avatar_orion", nombre: "Piloto Orión", rol: "Navegante de Retención", icon: "🧑‍🚀" },
    { id: "avatar_cyborg", nombre: "Cygnus-7", rol: "IA de Soporte Operativo", icon: "🤖" },
    { id: "avatar_pulsar", nombre: "Capitana Pulsar", rol: "Líder de Escuadrón", icon: "🚀" }
  ],

  // =========================================================================
  // CARRERA ESPACIAL MISIÓN WINNER: 12 NIVELES (0 A 11)
  // Cada quiz aprobado representa un ascenso dentro de la Academia Espacial
  // =========================================================================
  carreraEspacial: [
    {
      nivel: 0,
      rango: "Aspirante a Tripulante",
      quizzesRequeridos: 0,
      icono: "🛸",
      badgeClase: "rank-badge-0",
      color: "#94a3b8",
      descripcion: "Nivel de iniciación. Tu viaje por el Universo WINNER está a punto de despegar. Prepárate para el entrenamiento.",
      recompensaVisual: "Aura inicial de aspirante y traje presurizado de cadete.",
      requisito: "Registro inicial sin evaluaciones aprobadas"
    },
    {
      nivel: 1,
      rango: "Cadete Espacial",
      quizzesRequeridos: 1,
      icono: "🚀",
      badgeClase: "rank-badge-1",
      color: "#38bdf8",
      descripcion: "¡Primer ascenso completado! Has asimilado los protocolos fundamentales de atención y calidez WINNER.",
      recompensaVisual: "Insignia holográfica de propulsión de despegue.",
      requisito: "Aprobar Quiz de Día 1 (≥ 80%)"
    },
    {
      nivel: 2,
      rango: "Explorador Orbital",
      quizzesRequeridos: 2,
      icono: "🛰️",
      badgeClase: "rank-badge-2",
      color: "#60a5fa",
      descripcion: "Dominio de la órbita de políticas comerciales y descuentos. Tu criterio comercial empieza a brillar.",
      recompensaVisual: "Escudo deflector de energía comercial activo.",
      requisito: "Aprobar 2 Quizzes de Formación"
    },
    {
      nivel: 3,
      rango: "Navegante Estelar",
      quizzesRequeridos: 3,
      icono: "🌠",
      badgeClase: "rank-badge-3",
      color: "#818cf8",
      descripcion: "Capacidad comprobada para sortear objeciones y encontrar rutas alternativas de negociación exitosa.",
      recompensaVisual: "Visor holográfico de cartas de navegación estelar.",
      requisito: "Aprobar 3 Quizzes de Formación"
    },
    {
      nivel: 4,
      rango: "Piloto de Transbordador",
      quizzesRequeridos: 4,
      icono: "✈️",
      badgeClase: "rank-badge-4",
      color: "#34d399",
      descripcion: "Control total de los sistemas de cabina CRM Nova y agilidad operativa en el registro de tickets.",
      recompensaVisual: "Alas doradas de piloto de transbordador en el traje.",
      requisito: "Aprobar 4 Quizzes de Formación"
    },
    {
      nivel: 5,
      rango: "Oficial de Navegación",
      quizzesRequeridos: 5,
      icono: "🎖️",
      badgeClase: "rank-badge-5",
      color: "#c084fc",
      descripcion: "Estratega experimentado en resolución de crisis y retención avanzada en momentos de turbulencia.",
      recompensaVisual: "Distintivo de mando y rango de oficial de flota.",
      requisito: "Aprobar 5 Quizzes de Formación"
    },
    {
      nivel: 6,
      rango: "Comandante de Expedición",
      quizzesRequeridos: 6,
      icono: "🧭",
      badgeClase: "rank-badge-6",
      color: "#e879f9",
      descripcion: "Liderazgo en la persuasión de clientes indecisos con argumentos sólidos y valor agregado superior.",
      recompensaVisual: "Capa estelar y resplandor de comandante de expedición.",
      requisito: "Aprobar 6 Quizzes de Formación"
    },
    {
      nivel: 7,
      rango: "Capitán Interplanetario",
      quizzesRequeridos: 7,
      icono: "🪐",
      badgeClase: "rank-badge-7",
      color: "#f472b6",
      descripcion: "Maestría en contención de reclamos críticos, modulación de voz y empatía transformadora.",
      recompensaVisual: "Sello de mando interplanetario y timón galáctico.",
      requisito: "Aprobar 7 Quizzes de Formación"
    },
    {
      nivel: 8,
      rango: "Guardián de la Galaxia WINNER",
      quizzesRequeridos: 8,
      icono: "🛡️",
      badgeClase: "rank-badge-8",
      color: "#fbbf24",
      descripcion: "Protector incondicional de la experiencia del cliente y garante de la lealtad en toda la flota.",
      recompensaVisual: "Escudo dorado legendario de la Galaxia WINNER.",
      requisito: "Aprobar 8 Quizzes de Formación"
    },
    {
      nivel: 9,
      rango: "Embajador del Universo WINNER",
      quizzesRequeridos: 9,
      icono: "🌌",
      badgeClase: "rank-badge-9",
      color: "#f59e0b",
      descripcion: "Voz autorizada y modelo de excelencia para toda la Academia. Capacidad suprema de desescalamiento.",
      recompensaVisual: "Orbe cósmico de sabiduría y diplomacia galáctica.",
      requisito: "Aprobar 9 Quizzes de Formación"
    },
    {
      nivel: 10,
      rango: "Comandante Supremo de la Academia",
      quizzesRequeridos: 10,
      icono: "⭐",
      badgeClase: "rank-badge-10",
      color: "#00f0ff",
      descripcion: "Cúspide del conocimiento operativo, técnico y conductual. Listo para el vuelo definitivo.",
      recompensaVisual: "Corona estelar de Comandante Supremo y aura hiperespacial.",
      requisito: "Aprobar 10 Quizzes de Formación"
    },
    {
      nivel: 11,
      rango: "Tripulante Oficial de la Misión WINNER - Nave Fidelizaciones",
      quizzesRequeridos: 11,
      icono: "👑",
      badgeClase: "rank-badge-11",
      color: "#f59e0b",
      descripcion: "Felicitaciones Tripulante. Has completado tu formación y has sido asignado oficialmente a la nave FIDELIZACIONES de la MISIÓN WINNER. Tu preparación ha concluido. El viaje recién comienza.",
      recompensaVisual: "Acceso y comando total de la Nave Fidelizaciones, Diploma Supremo y Ceremonia de Graduación.",
      requisito: "Aprobar el Día 11 y culminar los 11 quizzes formativos",
      esMaximo: true
    }
  ],

  // Insignias automáticas
  insignias: [
    {
      id: "primer_despegue",
      nombre: "Primer Despegue",
      icono: "🚀",
      descripcion: "Primer quiz aprobado en la Academia Espacial.",
      criterio: (evaluaciones) => evaluaciones.some(e => e.metricas?.aprobado)
    },
    {
      id: "navegante_estelar",
      nombre: "Navegante Estelar",
      icono: "🌠",
      descripcion: "Tres o más quizzes aprobados con éxito.",
      criterio: (evaluaciones, aprobadosCount) => aprobadosCount >= 3
    },
    {
      id: "comandante_expedicion",
      nombre: "Comandante de Flota",
      icono: "🧭",
      descripcion: "Seis o más quizzes aprobados en la curva de inducción.",
      criterio: (evaluaciones, aprobadosCount) => aprobadosCount >= 6
    },
    {
      id: "maestro_galactico",
      nombre: "Puntaje Perfecto",
      icono: "⭐",
      descripcion: "Obtener 100/100 (20/20) en cualquier evaluación.",
      criterio: (evaluaciones) => evaluaciones.some(e => e.metricas?.porcentaje === 100)
    },
    {
      id: "tripulante_fidelizaciones",
      nombre: "Tripulante Insignia",
      icono: "👑",
      descripcion: "Graduación formal y asignación a la Nave Fidelizaciones (11 días aprobados).",
      criterio: (evaluaciones, aprobadosCount) => aprobadosCount >= 11
    }
  ]
};

// Exponer en entorno global
window.WINNER_CONFIG = WINNER_CONFIG;
