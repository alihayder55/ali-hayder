import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const translations = {
  en: {
    lang: 'en',
    dir: 'ltr',
    common: {
      view: 'View',
      present: 'PRESENT',
    },
    sections: {
      about: 'About Me',
      experience: 'Experience',
      skills: 'Skills',
      technicalSkills: 'Technical Skills',
      softSkills: 'Soft Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      name: 'Ali Hayder',
      tagline: 'Electronic and Communications Engineer',
    },
    about: {
      text:
        'Highly motivated and results-oriented individual with a strong ability to meet deadlines. Proven project management skills, demonstrated by successful completion of Exploration Robot using Artificial Intelligence and recognition from faculty. Possessing a keen learning agility and exceptional interpersonal abilities, I thrive in collaborative environments.',
    },
    experience: {
      hikayati: {
        title: 'Engineer at Hikayati Center',
        items: [
          'Museum artifact conservation',
          'Workshop development and delivery',
          'IT Engineer',
        ],
        period: '2023 - 2025',
      },
      green: {
        title: 'Engineer at Green Coding Club',
        items: ['Web developer', 'Artificial intelligence developer', 'Network engineer'],
        period: '2023 - 2024',
      },
      swibit: {
        title: 'Swibit',
        items: ['Project Manager', 'Web & App Developer'],
        period: `2024 - PRESENT`,
      },
      altronix: {
        title: 'Altronix',
        items: ['Owner'],
        period: `2024 - PRESENT`,
      },
    },
    projects: {
      aiRobot: {
        title: 'Exploration Robot using AI',
        desc: 'A robot that uses AI to explore its surroundings.',
      },
      fpga: {
        title: '3D Maze Solver using FPGA Board',
        desc: 'A project that solves a 3D maze using an FPGA board.',
      },
      bayt: {
        title: 'Bayt Iraqi Application',
        desc: 'I was one of the developers and the project manager before the launch.',
      },
      odoo: {
        title: 'Odoo ERP Project',
        desc: 'I was the developer and project manager, customizing the workflow and digitizing it.',
      },
    },
    softSkills: {
      items: [
        'Communication',
        'Teamwork',
        'Problem Solving',
        'Leadership',
        'Time Management',
        'Adaptability',
        'Attention to Detail',
        'Critical Thinking',
        'Creativity',
        'Project Management',
      ],
    },
    contact: {
      intro:
        "Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities.",
    },
  },
  ar: {
    lang: 'ar',
    dir: 'rtl',
    common: {
      view: 'عرض',
      present: 'الحالي',
    },
    sections: {
      about: 'نبذة عني',
      experience: 'الخبرات',
      skills: 'المهارات',
      technicalSkills: 'المهارات التقنية',
      softSkills: 'المهارات الشخصية',
      projects: 'المشاريع',
      contact: 'تواصل',
    },
    hero: {
      name: 'علي حيدر',
      tagline: 'مهندس إلكترونيات واتصالات',
    },
    about: {
      text:
        'شخص ذو دافعية عالية وموجه نحو النتائج مع قدرة قوية على الالتزام بالمواعيد. أمتلك مهارات مثبتة في إدارة المشاريع، ظهرت في إنجاز مشروع روبوت الاستكشاف بالذكاء الاصطناعي ونيل التقدير من الكلية. أتمتع بسرعة التعلم ومهارات تواصل مميزة، وأزدهر في بيئات العمل التعاونية.',
    },
    experience: {
      hikayati: {
        title: 'مهندس في مركز حكايتي',
        items: ['صيانة وترميم القطع الأثرية', 'تطوير وتنفيذ ورش العمل', 'مهندس تقنية معلومات'],
        period: '2023 - 2025',
      },
      green: {
        title: 'مهندس في نادي البرمجة الأخضر',
        items: ['مطوّر ويب', 'مطوّر ذكاء اصطناعي', 'مهندس شبكات'],
        period: '2023 - 2024',
      },
      swibit: {
        title: 'سويبت',
        items: ['مدير مشروع', 'مطوّر ويب وتطبيقات'],
        period: `2024 - الحالي`,
      },
      altronix: {
        title: 'ألترونكس',
        items: ['مالك'],
        period: `2024 - الحالي`,
      },
    },
    projects: {
      aiRobot: {
        title: 'روبوت استكشاف بالذكاء الاصطناعي',
        desc: 'روبوت يستخدم الذكاء الاصطناعي لاستكشاف البيئة المحيطة.',
      },
      fpga: {
        title: 'حل متاهة ثلاثية الأبعاد باستخدام FPGA',
        desc: 'مشروع لحل متاهة ثلاثية الأبعاد باستخدام لوحة FPGA.',
      },
      bayt: {
        title: 'تطبيق بيت عراقي',
        desc: 'كنت أحد المطورين ومدير المشروع قبل الإطلاق.',
      },
      odoo: {
        title: 'مشروع Odoo ERP',
        desc: 'عملت كمطور ومدير مشروع مع تخصيص سير العمل وأتمتته.',
      },
    },
    softSkills: {
      items: [
        'التواصل',
        'العمل ضمن فريق',
        'حل المشكلات',
        'القيادة',
        'إدارة الوقت',
        'القدرة على التكيف',
        'الاهتمام بالتفاصيل',
        'التفكير النقدي',
        'الإبداع',
        'إدارة المشاريع',
      ],
    },
    contact: {
      intro: 'لا تتردد في التواصل. دائمًا منفتح لمناقشة مشاريع جديدة أو أفكار إبداعية أو فرص.',
    },
  },
  es: {
    lang: 'es',
    dir: 'ltr',
    common: {
      view: 'Ver',
      present: 'PRESENTE',
    },
    sections: {
      about: 'Sobre mí',
      experience: 'Experiencia',
      skills: 'Habilidades',
      technicalSkills: 'Habilidades técnicas',
      softSkills: 'Habilidades blandas',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    hero: {
      name: 'Ali Hayder',
      tagline: 'Ingeniero de Electrónica y Comunicaciones',
    },
    about: {
      text:
        'Persona altamente motivada y orientada a resultados, con una gran capacidad para cumplir plazos. Cuento con habilidades probadas en gestión de proyectos, demostradas al completar el Robot de Exploración con IA y recibir reconocimiento académico. Aprendo rápido, tengo excelentes habilidades interpersonales y disfruto del trabajo en equipo.',
    },
    experience: {
      hikayati: {
        title: 'Ingeniero en Centro Hikayati',
        items: ['Conservación de artefactos de museo', 'Desarrollo e impartición de talleres', 'Ingeniero de TI'],
        period: '2023 - 2025',
      },
      green: {
        title: 'Ingeniero en Green Coding Club',
        items: ['Desarrollador web', 'Desarrollador de inteligencia artificial', 'Ingeniero de redes'],
        period: '2023 - 2024',
      },
      swibit: {
        title: 'Swibit',
        items: ['Jefe de proyecto', 'Desarrollador web y de aplicaciones'],
        period: `2024 - PRESENTE`,
      },
      altronix: {
        title: 'Altronix',
        items: ['Propietario'],
        period: `2024 - PRESENTE`,
      },
    },
    projects: {
      aiRobot: {
        title: 'Robot de exploración con IA',
        desc: 'Un robot que usa IA para explorar su entorno.',
      },
      fpga: {
        title: 'Solución de laberinto 3D con FPGA',
        desc: 'Proyecto que resuelve un laberinto 3D usando una placa FPGA.',
      },
      bayt: {
        title: 'Aplicación Bayt Iraqi',
        desc: 'Fui uno de los desarrolladores y el jefe de proyecto antes del lanzamiento.',
      },
      odoo: {
        title: 'Proyecto Odoo ERP',
        desc: 'Fui el desarrollador y jefe de proyecto, personalizando y digitalizando el flujo de trabajo.',
      },
    },
    softSkills: {
      items: [
        'Comunicación',
        'Trabajo en equipo',
        'Resolución de problemas',
        'Liderazgo',
        'Gestión del tiempo',
        'Adaptabilidad',
        'Atención al detalle',
        'Pensamiento crítico',
        'Creatividad',
        'Gestión de proyectos',
      ],
    },
    contact: {
      intro:
        'No dudes en ponerte en contacto. Siempre abierto a discutir nuevos proyectos, ideas creativas u oportunidades.',
    },
  },
};

const I18nContext = createContext({ t: (k) => k, language: 'en', setLanguage: () => {} });

function get(obj, path) {
  return path.split('.').reduce((acc, key) => (acc && acc[key] != null ? acc[key] : undefined), obj);
}

export const I18nProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    localStorage.setItem('lang', language);
    const meta = translations[language] || translations.en;
    document.documentElement.setAttribute('lang', meta.lang || 'en');
    document.documentElement.setAttribute('dir', meta.dir || 'ltr');
  }, [language]);

  const t = useMemo(() => {
    return (key) => {
      const meta = translations[language] || translations.en;
      const value = get(meta, key);
      if (value !== undefined) return value;
      const fallback = get(translations.en, key);
      return fallback !== undefined ? fallback : key.split('.').pop();
    };
  }, [language]);

  const value = useMemo(() => ({ t, language, setLanguage }), [t, language]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => useContext(I18nContext);
