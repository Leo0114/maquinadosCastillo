// ─── HOME PAGE DATA ───────────────────────────────────────────────────────

export interface HeroSlide {
  imageName: string; // filename in src/assets/images/maquinas/
  title: string;
  subtitle: string;
  tag: string;
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export interface ServiceHighlight {
  title: string;
  description: string;
  icon: string;
  imageName: string; // filename in src/assets/images/metal/
  link: string;
}

export interface HomeData {
  heroSlides: HeroSlide[];
  stats: Stat[];
  serviceHighlights: ServiceHighlight[];
  ctaSection: {
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
  };
  videoSection: {
    title: string;
    subtitle: string;
    eyebrow: string;
  };
}

export const homeData: HomeData = {
  heroSlides: [
    {
      imageName: "maquina2.avif",
      title: "Maquinados de Precisión",
      subtitle: "Soluciones integrales en maquinado CNC, moldes y matrices para la industria manufacturera de alto desempeño.",
      tag: "Escobedo, Nuevo León · Desde 1996",
    },
    {
      imageName: "maquina3.avif",
      title: "Herramentales de Alta Calidad",
      subtitle: "Diseño, fabricación y reparación de moldes, troqueles y matrices con tecnología CNC de última generación.",
      tag: "+ 30 años de experiencia",
    },
    {
      imageName: "a.avif",
      title: "Ingeniería e Innovación",
      subtitle: "Escaneo 3D, ingeniería inversa, metrología y diseño. Soluciones completas para piezas complejas y críticas.",
      tag: "5 CNC Verticales · Metrología 3D",
    },
    {
      imageName: "maquina.avif",
      title: "Tu Proveedor de Confianza",
      subtitle: "Integrados al ecosistema de manufactura avanzada de Nuevo León a través del Cluster de Herramentales.",
      tag: "Cluster de Herramentales NL",
    },
  ],

  stats: [
    { value: "30", label: "Años de experiencia", suffix: "+" },
    { value: "12", label: "Técnicos especializados" },
    { value: "5", label: "Centros de maquinado CNC" },
    { value: "3", label: "Scanners 3D" },
  ],

  serviceHighlights: [
    {
      title: "Maquinado CNC",
      description: "Torno y fresado CNC de alta precisión. 5 centros verticales con hasta 50\" en X. Geometrías complejas y tolerancias estrechas.",
      icon: "⚙️",
      imageName: "metal5.avif",
      link: "/que-hacemos",
    },
    {
      title: "Herramentales",
      description: "Diseño y fabricación de moldes, matrices y troqueles. Desde prototipos hasta series cortas con acabado de alta calidad.",
      icon: "🔩",
      imageName: "metal20.avif",
      link: "/que-hacemos",
    },
    {
      title: "Ingeniería Inversa",
      description: "Escaneo 3D, digitalización de piezas desgastadas y metrología. Reconstruimos piezas sin planos originales.",
      icon: "📐",
      imageName: "metal25.avif",
      link: "/que-hacemos",
    },
  ],

  ctaSection: {
    title: "¿Tienes un requerimiento urgente?",
    subtitle: "Contamos con capacidad de respuesta ágil para situaciones donde la línea de producción no puede parar.",
    buttonText: "Contáctanos ahora",
    buttonLink: "/contacto",
  },

  videoSection: {
    eyebrow: "Nuestra operación",
    title: "Vea nuestro trabajo en acción",
    subtitle: "Procesos de maquinado, acabados y control de calidad en tiempo real desde nuestras instalaciones.",
  },
};
