// ─── CONTACTO PAGE DATA ──────────────────────────────────────────────────

export interface ContactInfo {
  label: string;
  value: string;
  href?: string;
  icon: string;
}

export interface ContactData {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  contact: {
    name: string;
    position: string;
    phones: ContactInfo[];
    whatsapp: ContactInfo;
    email: ContactInfo;
    website: ContactInfo;
    address: ContactInfo;
  };
  form: {
    title: string;
    subtitle: string;
    fields: {
      name: string;
      placeholder: string;
      type: string;
    }[];
    submitText: string;
  };
  cluster: {
    title: string;
    description: string;
  };
}

export const contactoData: ContactData = {
  hero: {
    eyebrow: "Hablemos",
    title: "Listos para su proyecto",
    subtitle: "Listos para formar parte de sus requerimientos de maquinados, troqueles, matrices e ingenierías. Contáctenos hoy.",
  },

  contact: {
    name: "Gonzalo Castillo",
    position: "Director General",
    phones: [
      {
        label: "Oficina",
        value: "81 8479 4210",
        href: "tel:+528184794210",
        icon: "phone",
      },
      {
        label: "Móvil",
        value: "81 2723 5507",
        href: "tel:+528127235507",
        icon: "phone",
      },
      {
        label: "Alternativo",
        value: "81 4468 7198",
        href: "tel:+528144687198",
        icon: "phone",
      },
    ],
    whatsapp: {
      label: "WhatsApp",
      value: "81 1299 9069",
      href: "https://wa.me/528112999069",
      icon: "whatsapp",
    },
    email: {
      label: "Correo electrónico",
      value: "gonzalo.castillo@mscastillo.com.mx",
      href: "mailto:gonzalo.castillo@mscastillo.com.mx",
      icon: "email",
    },
    website: {
      label: "Sitio web",
      value: "www.mscastillo.com.mx",
      href: "https://www.mscastillo.com.mx",
      icon: "web",
    },
    address: {
      label: "Ubicación",
      value: "Escobedo, Nuevo León, México",
      href: "https://maps.google.com/?q=Escobedo,+Nuevo+León",
      icon: "location",
    },
  },

  form: {
    title: "Envíenos un mensaje",
    subtitle: "Complete el formulario y nos pondremos en contacto en menos de 24 horas.",
    fields: [
      { name: "nombre", placeholder: "Su nombre completo", type: "text" },
      { name: "empresa", placeholder: "Empresa", type: "text" },
      { name: "email", placeholder: "Correo electrónico", type: "email" },
      { name: "telefono", placeholder: "Teléfono", type: "tel" },
      { name: "mensaje", placeholder: "Describa su requerimiento...", type: "textarea" },
    ],
    submitText: "Enviar mensaje",
  },

  cluster: {
    title: "Parte del ecosistema de manufactura avanzada de Nuevo León",
    description: "Maquinados Castillo está integrada al Cluster de Herramentales de Nuevo León, una red de empresas de alto desempeño que impulsan la competitividad de la industria manufacturera regional.",
  },
};
