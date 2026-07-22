// ─── QUÉ HACEMOS PAGE DATA ───────────────────────────────────────────────

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  items: string[];
  imageName: string; // in src/assets/images/metal/
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ProjectType {
  icon: string;
  title: string;
  description: string;
}

export interface MachineGroup {
  name: string;
  type: "cnc" | "conventional" | "other";
  specs: string[];
}

export interface InvestmentProject {
  title: string;
  model: string;
  brand: string;
  specs: string;
  timeline: string;
}

export interface QueHacemosData {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  services: Service[];
  process: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: ProcessStep[];
  };
  projectTypes: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: ProjectType[];
  };
  machines: {
    eyebrow: string;
    title: string;
    subtitle: string;
    groups: MachineGroup[];
  };
  investment: {
    eyebrow: string;
    title: string;
    project: InvestmentProject;
  };
  cta: {
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
  };
}

export const queHacemosData: QueHacemosData = {
  hero: {
    eyebrow: "Nuestros servicios",
    title: "Lo que hacemos",
    subtitle: "Soluciones integrales de maquinado, herramentales e ingeniería para la industria manufacturera de precisión.",
  },

  services: [
    {
      id: "maquinado-cnc",
      icon: "⚙️",
      title: "Maquinado CNC",
      description: "Fresado y torneado CNC de alta precisión para piezas complejas con tolerancias estrechas.",
      items: [
        "Fresado CNC Vertical — hasta 50\" en X",
        "Torneado CNC de alta precisión",
        "Geometrías 3D y superficies complejas",
        "Programación CAM avanzada",
        "Tolerancias de ±0.001\"",
      ],
      imageName: "metal7.avif",
    },
    {
      id: "maquinado-convencional",
      icon: "🔧",
      title: "Maquinado Convencional",
      description: "Fresado y torneado convencional para trabajos especializados que requieren mano de obra experta.",
      items: [
        "Fresadoras de 9\"×36\" y 9\"×42\"",
        "Tornos de 16\"×58\" y 16\"×32\"",
        "Acabados superficiales finos",
        "Trabajos de ajuste y ensamble",
      ],
      imageName: "metal6.avif",
    },
    {
      id: "herramentales",
      icon: "🏗️",
      title: "Herramentales",
      description: "Diseño y fabricación completa de moldes, matrices y troqueles de alta calidad.",
      items: [
        "Moldes de inyección y compresión",
        "Matrices de corte y embutido",
        "Troqueles progresivos",
        "Reparación y modificación de herramentales",
        "Desde prototipos hasta series cortas",
      ],
      imageName: "metal20.avif",
    },
    {
      id: "acabados",
      icon: "✨",
      title: "Acabados de Precisión",
      description: "Rectificado plano y cilíndrico para lograr los acabados superficiales más exactos.",
      items: [
        "Rectificadora Cilíndrica ERWIN JUNKER — mesa 20\"",
        "Rectificadora Plana NORTON — 9\"×24\"",
        "Ra superficial según especificación",
        "Erosionado por Hilo Accutex",
        "Acabados de espejo bajo requerimiento",
      ],
      imageName: "metal25.avif",
    },
    {
      id: "ingenieria",
      icon: "📐",
      title: "Ingeniería y Valor Agregado",
      description: "Diseño, escaneo 3D, ingeniería inversa y metrología para cerrar el ciclo productivo.",
      items: [
        "Escaneo 3D y digitalización de piezas",
        "Ingeniería inversa sin planos originales",
        "Metrología dimensional certificada",
        "Diseño y programación CAD/CAM",
        "Reportes dimensionales completos",
      ],
      imageName: "metal27.avif",
    },
    {
      id: "mantenimiento",
      icon: "🔩",
      title: "Mantenimiento y Pailería",
      description: "Mantenimiento industrial y trabajos de pailería para soporte a planta en operación.",
      items: [
        "Mantenimiento de equipos industriales",
        "Trabajos de pailería y calderería",
        "Fabricación de piezas de repuesto",
        "Soporte en campo para paros de planta",
      ],
      imageName: "metal26.avif",
    },
  ],

  process: {
    eyebrow: "Nuestro proceso",
    title: "De la idea a la pieza terminada",
    subtitle: "Un proceso integrado que garantiza calidad en cada etapa, desde la recepción del plano hasta la entrega con reporte dimensional.",
    steps: [
      {
        number: "01",
        title: "Diseño & CAD",
        description: "Revisión de planos o escaneo 3D de la pieza. Generación del modelo 3D si se requiere ingeniería inversa.",
      },
      {
        number: "02",
        title: "Programación CAM",
        description: "Generación de trayectorias de corte optimizadas para el equipo CNC. Simulación y validación virtual.",
      },
      {
        number: "03",
        title: "Maquinado",
        description: "Ejecución en nuestros centros CNC o maquinaria convencional según el requerimiento de cada pieza.",
      },
      {
        number: "04",
        title: "Acabados",
        description: "Rectificado, erosionado por hilo y acabados superficiales para cumplir especificaciones finales.",
      },
      {
        number: "05",
        title: "Metrología",
        description: "Inspección dimensional completa con equipo 3D. Reporte de resultados y trazabilidad garantizada.",
      },
      {
        number: "06",
        title: "Pieza Terminada",
        description: "Entrega con documentación completa, reporte dimensional y empaque adecuado para cada pieza.",
      },
    ],
  },

  projectTypes: {
    eyebrow: "Tipos de proyecto",
    title: "Resolvemos los retos más complejos",
    subtitle: "Contamos con la experiencia y tecnología para abordar proyectos de alta complejidad y criticidad.",
    items: [
      {
        icon: "🚨",
        title: "Refacciones Críticas",
        description: "Cuando la línea no puede parar. Fabricamos piezas de emergencia con respuesta ágil y calidad garantizada.",
      },
      {
        icon: "🏗️",
        title: "Moldes & Troqueles",
        description: "Desarrollo completo de herramentales de alta complejidad, desde el diseño hasta la primera prueba.",
      },
      {
        icon: "🔄",
        title: "Modificaciones",
        description: "Adaptaciones y modificaciones a herramentales existentes. Mejoría de moldes y actualizaciones de diseño.",
      },
      {
        icon: "📏",
        title: "Piezas Bajo Plano",
        description: "Fabricación de piezas de precisión siguiendo planos técnicos con las tolerancias más exigentes.",
      },
      {
        icon: "🔬",
        title: "Ingeniería Inversa",
        description: "Pieza desgastada sin plano original. La escaneamos, reconstruimos el modelo y fabricamos la pieza nueva.",
      },
      {
        icon: "🧪",
        title: "Prototipos",
        description: "Desarrollo de prototipos y piezas piloto para validación antes de la producción en serie.",
      },
    ],
  },

  machines: {
    eyebrow: "Capacidad instalada",
    title: "Equipamiento de clase mundial",
    subtitle: "Nuestra flota de equipos CNC y convencionales nos permite atender proyectos de diversas escalas con la precisión que la industria demanda.",
    groups: [
      {
        name: "CNC de Alta Precisión",
        type: "cnc",
        specs: [
          "5 Centros de Maquinado CNC Verticales — 50\" X | 20\" Y | 25\" Z",
          "1 Torno CNC TF 10P",
          "1 Erosionadora por Hilo Accutex — 400mm X | 300mm Y | 220mm Z",
        ],
      },
      {
        name: "Maquinaria Convencional",
        type: "conventional",
        specs: [
          "2 Fresadoras — 9\"×36\" y 9\"×42\"",
          "2 Tornos — 16\"×58\" y 16\"×32\"",
          "Rectificadora Cilíndrica ERWIN JUNKER — mesa 20\"",
          "Rectificadora Plana NORTON — 9\"×24\"",
        ],
      },
      {
        name: "Metrología e Ingeniería Inversa",
        type: "other",
        specs: [
          "3 Scanners 3D de alta resolución",
          "Equipo de medición y calibración",
          "Software CAD/CAM para programación",
        ],
      },
    ],
  },

  investment: {
    eyebrow: "Proyectos de inversión",
    title: "Creciendo para servirte mejor",
    project: {
      title: "Centro de Maquinado Doble Columna (De Puente)",
      model: "K-V1530B",
      brand: "Kimitsu",
      specs: "3 m en X · 2 m en Y · 1 m en Z",
      timeline: "Próximos 6 meses",
    },
  },

  cta: {
    title: "¿Tu proyecto encaja con lo que hacemos?",
    subtitle: "Cuéntanos el detalle de tu requerimiento. Analizamos, cotizamos y comenzamos.",
    buttonText: "Solicitar cotización",
    buttonLink: "/contacto",
  },
};
