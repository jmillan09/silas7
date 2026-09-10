import type { TranslationKey } from './en';

/**
 * Spanish dictionary — ported 1:1 from the original static HTML (the default,
 * hardcoded content of every element carrying data-i18n).
 */
export const es: Record<TranslationKey, string> = {
  /* Navigation */
  'nav.home': 'Inicio',
  'nav.about': 'Nosotros',
  'nav.services': 'Servicios',
  'nav.contact': 'Contacto',

  /* Footer */
  'footer.desc':
    'Socio estratégico para los sectores industrial y energético. Expertos en soluciones químicas avanzadas, metalmecánica de precisión y componentes para transformadores de potencia. Certificados ASME y ASTM.',
  'footer.nav-heading': 'Navegación',
  'footer.svc-heading': 'Servicios',
  'footer.contact-heading': 'Contacto',
  'footer.svc.metal': 'Metalmecánica',
  'footer.svc.chem': 'Tratamiento Químico',
  'footer.svc.elec': 'Transformadores de Potencia',
  'footer.copyright':
    '&copy; 2025 &mdash; Silas Seve<span style="color:#bd0016;">7</span>n Holdings Corp. Todos los derechos reservados.',

  /* Index — Hero */
  'hero.desc':
    'Socio estratégico líder para los sectores industrial y energético. Expertos en soluciones químicas avanzadas, metalmecánica de precisión y componentes para transformadores de potencia.',
  'hero.btn-services': 'Ver Servicios',
  'hero.btn-proposal': 'Solicitar Propuesta',
  'hero.cert1-badge': 'Certificación Internacional',
  'hero.cert1-title': 'Normas ASME &amp; ASTM',
  'hero.cert1-desc':
    'Soluciones de ingeniería y fabricación bajo los estándares internacionales más exigentes para calderas, recipientes a presión y materiales industriales.',
  'hero.cert2-badge': 'Operaciones Globales',
  'hero.cert2-title': 'Casper, Wyoming &mdash; EE. UU.',
  'hero.cert2-desc':
    'Con sede en Estados Unidos, atendemos clientes industriales y energéticos en mercados internacionales con precisión técnica.',
  'hero.cert3-badge': 'Contáctenos',
  'hero.cert3-title': 'info@silas7.com',
  'hero.cert3-desc':
    'Respondemos consultas técnicas en menos de 24 horas hábiles. Nuestro equipo especializado está disponible para asesorarle en cualquier proyecto.',

  /* Index — Services section */
  'idx-svc.label': 'Lo Que Hacemos',
  'idx-svc.title': 'Nuestros Servicios',
  'idx-svc.desc':
    'Un equipo técnico altamente calificado, preparado para diseñar, ejecutar y supervisar soluciones integrales en metalmecánica, tratamiento químico e infraestructura eléctrica.',
  'idx-svc.chem.title': 'Servicios de Proceso Químico',
  'idx-svc.chem.desc':
    'Tratamientos upstream/downstream, sistemas de inyección automatizada, programas de agua de calderas, biocidas e inhibidores para aguas de proceso.',
  'idx-svc.chem.link': 'Ver detalles',
  'idx-svc.metal.title': 'Metalmecánica y Tratamiento Químico',
  'idx-svc.metal.desc':
    'Instalación de calderas, fabricación de intercambiadores de calor, servicios de re-tubado, quemadores e instrumentación industrial bajo normas ASME y ASTM.',
  'idx-svc.metal.link': 'Ver detalles',
  'idx-svc.elec.title': 'Transformadores y Eléctrico',
  'idx-svc.elec.desc':
    'Suministro de componentes para transformadores: bushings, relés Buchholz, ventiladores de enfriamiento, sistemas de aislamiento y aceites eléctricos especializados.',
  'idx-svc.elec.link': 'Ver detalles',

  /* Index — About teaser */
  'about.label': 'Quiénes Somos',
  'about.title': 'Comprometidos con la <span style="color:var(--red);">Excelencia en Ingeniería</span>',
  'about.lead':
    'Silas Seve<span style="color:#bd0016;">7</span>n Holdings Corp es una empresa industrial con sede en EE. UU. que ofrece soluciones químicas de alto rendimiento, servicios de ingeniería especializados y componentes eléctricos críticos a clientes en los sectores energético e industrial a nivel global.',
  'about.hl1-title': 'Normas ASME &amp; ASTM',
  'about.hl1-desc':
    'Soluciones de ingeniería y fabricación que cumplen con las normas internacionales para calderas, recipientes a presión y materiales.',
  'about.hl2-title': 'Tratamiento Integral de Aguas y Fluidos',
  'about.hl2-desc':
    'Proveedor global de programas de tratamiento de agua y fluidos de proceso diseñados para maximizar la vida útil de los activos.',
  'about.hl3-title': 'Soluciones de Infraestructura Eléctrica',
  'about.hl3-desc':
    'Suministro de componentes críticos para transformadores y aceites eléctricos especializados para empresas de servicios e industrias a nivel mundial.',
  'about.btn': 'Conócenos Más',

  /* Index — CTA */
  'cta.index.title': '¿Listo para Iniciar su Proyecto?',
  'cta.index.desc':
    'Nuestro equipo técnico especializado está disponible para asesorarle y brindarle una propuesta integral adaptada a sus requerimientos operativos.',
  'cta.btn-proposal': 'Solicitar Propuesta',

  /* Nosotros — Page header */
  'nos.breadcrumb': 'Nosotros',
  'nos.ph-title': '<span style="color:var(--blue);">Quiénes</span> Somos',
  'nos.ph-desc':
    'Una empresa con sede en EE. UU. comprometida con la excelencia en ingeniería, la continuidad operativa y los estándares internacionales de calidad.',

  /* Nosotros — About intro */
  'nos.history-label': 'Nuestra Empresa',
  'nos.history-title': 'Ingeniería Confiable, <span style="color:var(--red);">Impulsando el Futuro</span>',
  'nos.p1':
    'Silas Seve<span style="color:#bd0016;">7</span>n Holdings Corp es una corporación con sede en Casper, Wyoming. Fue creada con el propósito de suministrar productos químicos de alto rendimiento y servicios especializados de ingeniería a los sectores industrial y energético, combinando profunda experiencia técnica con un compromiso con las normas internacionales de calidad.',
  'nos.p2':
    'Actuamos como socio estratégico de confianza para operadores que buscan la continuidad operativa y la integridad de sus activos industriales. Nuestras soluciones se construyen sobre las normas ASME y ASTM, con un enfoque en la seguridad operativa, la protección ambiental y la maximización de la eficiencia energética e hídrica.',
  'nos.ic1-title': 'Ingeniería Certificada ASME y ASTM',
  'nos.ic1-desc':
    'Nuestros servicios de metalmecánica y fabricación cumplen plenamente con los códigos ASME y ASTM, garantizando los más altos estándares de seguridad y calidad para calderas, intercambiadores de calor y recipientes a presión.',
  'nos.ic2-title': 'Soluciones Industriales Integrales',
  'nos.ic2-desc':
    'Desde el tratamiento químico upstream hasta los componentes para transformadores de potencia, ofrecemos soluciones de extremo a extremo que simplifican la gestión de proyectos y reducen la necesidad de múltiples contratistas.',

  /* Nosotros — Mission / Vision */
  'mv.label': 'Nuestra Filosofía',
  'mv.title': 'Misión, Visión y Política de Calidad',
  'mv.vision-title': 'Visión',
  'mv.vision-body':
    'Convertirnos en referente de excelencia en ingeniería de mantenimiento industrial, con la capacidad técnica de extender la vida útil de los sistemas térmicos, liderar a través de la innovación en tratamientos de fluidos y proyectos metalmecánicos, e impulsar la máxima eficiencia energética para nuestros clientes a nivel mundial.',
  'mv.mission-title': 'Misión',
  'mv.mission-body':
    'Garantizar la continuidad operativa y la integridad de los activos industriales de nuestros clientes mediante el suministro de productos químicos de alto rendimiento y servicios especializados de ingeniería para calderas e intercambiadores de calor, bajo las normas ASME y ASTM, priorizando la seguridad operativa, la protección ambiental y la optimización de los recursos hídricos y energéticos.',

  /* Nosotros — Quality Policy */
  'qual.label': 'Política de Calidad',
  'qual.title': 'Nuestro Compromiso con la Calidad',
  'qual.desc':
    'En Silas Seve<span style="color:#bd0016;">7</span>n Holdings Corp, la calidad está integrada en cada proceso, servicio y relación.',
  'qual.item1': 'Satisfacer las necesidades y expectativas de nuestros clientes y accionistas.',
  'qual.item2': 'Pleno cumplimiento de todos los requisitos legales y contractuales.',
  'qual.item3': 'Planificar y mejorar continuamente nuestros procesos y procedimientos.',
  'qual.item4': 'Garantizar el suministro adecuado de materiales y recursos tecnológicos.',
  'qual.item5': 'Seleccionar y evaluar continuamente a nuestros proveedores bajo estándares de calidad.',
  'qual.item6': 'Evaluar el desempeño de manera sistemática y proponer acciones de mejora concretas.',

  /* Nosotros — Differentiators */
  'diff.label': 'Factores Clave',
  'diff.title': 'Lo Que Nos Distingue',
  'diff.desc':
    'Factores que posicionan a Silas Seve<span style="color:#bd0016;">7</span>n Holdings Corp como el socio estratégico de confianza para los sectores industrial y energético.',
  'diff.cert-title': 'Certificación ASME y ASTM',
  'diff.cert-desc':
    'Ingeniería y fabricación que cumplen con normas internacionales para recipientes a presión, calderas y materiales industriales.',
  'diff.intl-title': 'Sede en EE. UU.',
  'diff.intl-desc':
    'Incorporada en Wyoming con EIN de EE. UU., operando bajo marcos legales y financieros norteamericanos para proyectos internacionales.',
  'diff.intgr-title': 'Soluciones Integradas',
  'diff.intgr-desc':
    'Metalmecánica, tratamiento químico y componentes eléctricos en un solo proveedor — reduciendo la complejidad de la gestión de contratistas.',
  'diff.elec-title': 'Infraestructura Eléctrica',
  'diff.elec-desc':
    'Suministro especializado de componentes para transformadores y aceites eléctricos para empresas de servicios e instalaciones industriales en todo el mundo.',

  /* Certifications (shared: index + nosotros) */
  'cert.label': 'Garantía de Calidad',
  'cert.title': 'Nuestras Certificaciones y Normas',
  'cert.desc':
    'Silas Seve<span style="color:#bd0016;">7</span>n Holdings Corp opera bajo los estándares internacionales más exigentes para garantizar calidad, seguridad y confiabilidad en cada proyecto.',
  'cert.asme-name': 'ASME',
  'cert.asme-desc':
    'Norma de fabricación de calderas y recipientes a presión — garantizando la mayor seguridad en sistemas térmicos.',
  'cert.astm-name': 'ASTM',
  'cert.astm-desc': 'Normas de materiales y fabricación para metalmecánica de precisión e integridad estructural.',
  'cert.cov-name': 'COVENIN',
  'cert.cov-desc': 'Normas de calidad e inspección industrial para operaciones de proceso y manufactura.',
  'cert.fon-name': 'FONDONORMA',
  'cert.fon-desc': 'Certificación de normalización y calidad — RIF J-508213858.',

  /* Nosotros — CTA */
  'cta.nos.title': '¿Listo para Trabajar con Nosotros?',
  'cta.nos.desc':
    'Contáctenos y descubra cómo podemos optimizar sus operaciones industriales con soluciones personalizadas y conformes a las normas internacionales.',
  'cta.nos.btn1': 'Contáctenos',
  'cta.nos.btn2': 'Ver Servicios',

  /* Servicios — Page header */
  'svc.breadcrumb': 'Servicios',
  'svc.ph-title': 'Nuestros <span style="color:var(--blue);">Servicios</span>',
  'svc.ph-desc':
    'Soluciones de ingeniería integrales para los sectores industrial y energético, entregadas bajo los más altos estándares internacionales de calidad y seguridad.',

  /* Servicios — Tabs */
  'svc.tab.metal': 'Metalmecánica',
  'svc.tab.chem': 'Tratamiento Químico',
  'svc.tab.elec': 'Transformadores de Potencia',

  /* Servicios — Metalworking */
  'svc.metal.label': 'Sección 01',
  'svc.metal.title': 'Servicios de Metalmecánica',
  'svc.metal.sub':
    'Fabricación, instalación y mantenimiento de precisión para equipos térmicos industriales de alta exigencia.',
  'svc.metal.s1-title': 'Instalación de Calderas',
  'svc.metal.s1-desc':
    'Instalación y puesta en marcha completa de calderas pirotubulares y acuatubulares, incluyendo alineación, conexiones de tuberías, controles y sistemas de seguridad.',
  'svc.metal.s2-title': 'Fabricación de Intercambiadores de Calor',
  'svc.metal.s2-desc':
    'Diseño y fabricación de intercambiadores de calor de carcasa y tubo y enfriadores fin fan bajo especificaciones ASME y ASTM para aplicaciones en refinerías y procesos.',
  'svc.metal.s3-title': 'Quemadores y Combustión',
  'svc.metal.s3-desc':
    'Suministro, instalación y puesta en marcha de sistemas de quemadores industriales y gestión de la combustión para equipos térmicos de proceso.',
  'svc.metal.s4-title': 'Instrumentación Industrial',
  'svc.metal.s4-desc':
    'Especificación, suministro e integración de instrumentación de proceso para sistemas de calderas, intercambiadores de calor y control de procesos térmicos.',
  'svc.metal.s5-title': 'Re-tubado Carcasa-Tubo / Fin Fan',
  'svc.metal.s5-desc':
    'Servicios completos de re-tubado para intercambiadores de calor de carcasa y tubo y enfriadores fin fan, restaurando el rendimiento térmico completo y prolongando la vida útil.',
  'svc.metal.s6-title': 'Re-tubado de Calderas',
  'svc.metal.s6-desc':
    'Servicios expertos de re-tubado para calderas pirotubulares y acuatubulares, cumpliendo con las normas ASME para soldadura, inspección y pruebas de presión.',

  /* Servicios — Chemical */
  'svc.chem.label': 'Sección 02',
  'svc.chem.title': 'Servicios Químicos y Metalmecánicos',
  'svc.chem.sub':
    'Programas especializados de tratamiento químico para aplicaciones upstream, downstream, de calderas y aguas de proceso.',
  'svc.chem.s1-title': 'Suministro y Aplicación',
  'svc.chem.s1-desc':
    'Suministro y aplicación de tratamientos para corrientes de crudo y refinación, incluyendo sistemas de inyección automatizados para dosificación continua y confiable en operaciones de producción y refinación.',
  'svc.chem.s2-title': 'Upstream y Downstream',
  'svc.chem.s2-desc':
    'Demulsificantes, antiespumantes, dispersantes de asfaltenos, agentes anti-incrustantes y formulaciones de limpieza de pozos para corrientes de proceso de hidrocarburos upstream y downstream.',
  'svc.chem.s3-title': 'Tratamiento de Agua de Calderas',
  'svc.chem.s3-desc':
    'Secuestradores de oxígeno, inhibidores de corrosión, tratamientos de condensado de vapor y servicios de limpieza química para mantener la eficiencia y extender la vida útil de los equipos generadores de vapor.',
  'svc.chem.s4-title': 'Tratamiento de Aguas de Proceso',
  'svc.chem.s4-desc':
    'Biocidas, inhibidores de incrustaciones, biodispersantes, coagulantes y floculantes para torres de enfriamiento, circuitos de agua de proceso y gestión de efluentes industriales.',

  /* Servicios — Electrical */
  'svc.elec.label': 'Sección 03',
  'svc.elec.title': 'Componentes para Transformadores de Potencia y Aceites Eléctricos',
  'svc.elec.sub':
    'Componentes críticos y fluidos especiales para operaciones y mantenimiento de transformadores de potencia.',
  'svc.elec.s1-title': 'Bushings (Pasatapas)',
  'svc.elec.s1-desc':
    'Bushings de alto voltaje impregnados en aceite y con resina para transformadores de potencia, cumpliendo las normas IEC y ANSI/IEEE para rendimiento dieléctrico y confiabilidad.',
  'svc.elec.s2-title': 'Relé Buchholz',
  'svc.elec.s2-desc':
    'Relés de protección para detección de gas y sobretensión en transformadores sumergidos en aceite, proporcionando advertencia temprana de fallos y protegiendo el equipo de daños catastróficos.',
  'svc.elec.s3-title': 'Sistemas de Control y Monitoreo',
  'svc.elec.s3-desc':
    'Sistemas de control compatibles con SCADA con imágenes térmicas, gestión de carga y capacidades de monitoreo remoto para la protección de transformadores y eficiencia operativa.',
  'svc.elec.s4-title': 'Ventiladores de Enfriamiento',
  'svc.elec.s4-desc':
    'Conjuntos de ventiladores de enfriamiento de aire forzado y sistemas de enfriamiento ONAN/ONAF diseñados para mantener temperaturas de operación óptimas del transformador bajo condiciones de carga variable.',
  'svc.elec.s5-title': 'Aislamiento para Transformadores',
  'svc.elec.s5-desc':
    'Papel Kraft, cartón, papel crepé y sistemas de aislamiento impregnados en líquido diseñados para la integridad dieléctrica a largo plazo en aplicaciones de transformadores de potencia.',
  'svc.elec.s6-title': 'Aceites Eléctricos',
  'svc.elec.s6-desc':
    'Aceites minerales nafténicos, ésteres naturales y fluidos sintéticos que cumplen con las especificaciones IEC 60296 y ASTM D3487 para aislamiento y refrigeración de transformadores.',

  /* Servicios — CTA */
  'cta.svc.title': '¿Necesita Consultoría o Cotización?',
  'cta.svc.desc':
    'Nuestro equipo de expertos está listo para proveer soluciones integrales adaptadas a sus requerimientos específicos de operación y mantenimiento.',
  'cta.svc.btn1': 'Contáctenos Hoy',

  /* Contacto — Page header */
  'ctc.breadcrumb': 'Contacto',
  'ctc.ph-title': 'Póngase en <span style="color:var(--blue);">Contacto</span>',
  'ctc.ph-desc':
    'Silas Seve<span style="color:#bd0016;">7</span>n Holdings Corp está disponible para atender sus requerimientos con rapidez, precisión y profesionalismo.',

  /* Contacto — Info cards */
  'ctc.card1-label': 'Dirección',
  'ctc.card1-value': 'E 2nd St, Ste 7000<br>Casper, WY, United States',
  'ctc.card2-label': 'Email',
  'ctc.card2-value': 'info@silas7.com',
  'ctc.card3-label': 'Sitio Web',
  'ctc.card3-value': 'silas7.com',

  /* Contacto — Info column */
  'ctc.info-label': 'Escríbanos',
  'ctc.info-title': 'Estamos Listos<br>para Atenderle',
  'ctc.info-lead':
    'Comuníquese directamente con nuestro equipo técnico especializado. Estamos disponibles para asesorarle y brindarle una propuesta integral adaptada a sus requerimientos operativos específicos.',
  'ctc.card-addr-lbl': 'Sede Principal',
  'ctc.card-addr-val': 'E 2nd St, Ste 7000, Casper, WY',
  'ctc.card-email-lbl': 'Email',
  'ctc.card-email-val': 'info@silas7.com',
  'ctc.card-web-lbl': 'Sitio Web',
  'ctc.card-web-val': 'silas7.com',
  'ctc.response-title': 'Respuesta Garantizada en 24h',
  'ctc.response-desc': 'Nuestro equipo responde consultas técnicas dentro de las 24 horas hábiles.',
};
