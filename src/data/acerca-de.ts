// ─── ACERCA DE PAGE DATA ─────────────────────────────────────────────────

export interface TimelineItem {
  year: string;
  text: string;
}

export interface Value {
  icon: string;
  title: string;
  description: string;
}

export interface Machine {
  category: string;
  items: string[];
}

export interface Sector {
  name: string;
  years: string;
  highlight?: string;
}

export interface AcercaDeData {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  quienesSomos: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  values: Value[];
  team: {
    eyebrow: string;
    title: string;
    subtitle: string;
    stats: Array<{ value: string; label: string }>;
  };
  technology: {
    eyebrow: string;
    title: string;
    subtitle: string;
    machines: Machine[];
  };
  sectors: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Sector[];
  };
  cta: {
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
  };
}

export const acercaDeData: AcercaDeData = {
  hero: {
    eyebrow: "Quiénes somos",
    title: "Maquinados Castillo",
    subtitle: "Precisión, Experiencia y Calidad desde 1996",
  },

  quienesSomos: {
    eyebrow: "Nuestra historia",
    title: "Empresa mexicana con más de 30 años forjando precisión",
    paragraphs: [
      "Maquinados Castillo nació en 1996 en Escobedo, Nuevo León, con un compromiso claro: entregar piezas de maquinado con los más altos estándares de precisión y confiabilidad para la industria manufacturera.",
      "A lo largo de tres décadas hemos crecido junto a nuestros clientes, invirtiendo constantemente en tecnología, capacitación y procesos que nos permiten abordar los retos más complejos del sector metalmecánico, automotriz y de electrodomésticos.",
      "Somos una empresa integrada al ecosistema de manufactura avanzada de Nuevo León a través del Cluster de Herramentales, lo que nos permite colaborar con los mejores proveedores y mantenernos a la vanguardia tecnológica de la región.",
    ],
  },

  values: [
    {
      icon: "🎯",
      title: "Precisión Absoluta",
      description: "Cada pieza que sale de nuestras instalaciones cumple con las tolerancias más exigentes. No hay margen para errores en la industria de precisión.",
    },
    {
      icon: "⚡",
      title: "Respuesta Ágil",
      description: "Cuando la línea de producción no puede parar, respondemos. Nuestra capacidad de reacción rápida es uno de nuestros mayores activos.",
    },
    {
      icon: "🔬",
      title: "Tecnología Avanzada",
      description: "Metrología 3D, escaneo e ingeniería inversa integrados al proceso. Tecnología de punta al servicio de cada proyecto.",
    },
    {
      icon: "🤝",
      title: "Compromiso Total",
      description: "Trabajamos de la mano con cada cliente para entender sus necesidades y entregar soluciones que impulsen su productividad.",
    },
    {
      icon: "🏭",
      title: "Capacidad Integral",
      description: "Diseño + maquinado + ajuste + metrología en un solo lugar. Desde el plano hasta la pieza terminada, lista para producción.",
    },
    {
      icon: "📈",
      title: "Mejora Continua",
      description: "Contamos con sistema de gestión de calidad, programas de capacitación constante y el respaldo de consultores empresariales certificados.",
    },
  ],

  team: {
    eyebrow: "Nuestro equipo",
    title: "Talento técnico de alto nivel",
    subtitle: "Operamos con un equipo de técnicos y operadores altamente calificados, con amplia trayectoria en el sector metalmecánico. Además, colaboramos con una red de especialistas y mecánicos en la región, lo que nos permite ampliar nuestra capacidad productiva y atender proyectos de diferentes escalas y complejidades.",
    stats: [
      { value: "12", label: "Técnicos & operadores" },
      { value: "30+", label: "Años de experiencia promedio" },
      { value: "100%", label: "Capacitación continua" },
    ],
  },

  technology: {
    eyebrow: "Capacidad instalada",
    title: "Tecnología que respalda cada proyecto",
    subtitle: "Contamos con equipamiento de alta tecnología que nos permite entregar productos de alta precisión en los mejores tiempos del sector. Nuestro sistema de gestión de calidad y programas de capacitación garantizan que cada pieza cumpla con los requisitos técnicos más exigentes.",
    machines: [
      {
        category: "Maquinado CNC",
        items: [
          "5 Centros de Maquinado CNC Verticales — 50\" X, 20\" Y, 25\" Z",
          "1 Torno CNC TF 10P de alta precisión",
          "1 Erosionadora por Hilo Accutex — 400mm X, 300mm Y, 220mm Z",
        ],
      },
      {
        category: "Maquinado Convencional",
        items: [
          "2 Fresadoras Convencionales — 9\"×36\" y 9\"×42\"",
          "2 Tornos Convencionales — 16\"×58\" y 16\"×32\"",
          "Rectificadora Cilíndrica ERWIN JUNKER — mesa 20\"",
          "Rectificadora Plana NORTON — 9\"×24\"",
        ],
      },
      {
        category: "Metrología e Ingeniería Inversa",
        items: [
          "3 Scanners 3D de alta resolución",
          "Equipo de metrología dimensional",
          "Software CAD/CAM para programación CNC",
        ],
      },
    ],
  },

  sectors: {
    eyebrow: "Sectores que atendemos",
    title: "Líderes mundiales confían en nosotros",
    subtitle: "Nuestros clientes pertenecen a los sectores industriales más exigentes y se encuentran entre los líderes a nivel mundial.",
    items: [
      { name: "Automotriz", years: "30", highlight: "Años como proveedor" },
      { name: "Electrodomésticos", years: "8", highlight: "Años como proveedor" },
      { name: "Metal-mecánico", years: "6", highlight: "Años como proveedor" },
      { name: "Industria General", years: "2", highlight: "Años como proveedor" },
      { name: "Internacional (USA)", years: "2026", highlight: "A partir de como proveedor" },
    ],
  },

  cta: {
    title: "¿Listo para elevar la precisión de su producción?",
    subtitle: "Cuéntenos su proyecto y le daremos una solución integral.",
    buttonText: "Iniciar conversación",
    buttonLink: "/contacto",
  },
};
