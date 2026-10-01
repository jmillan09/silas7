import type { TranslationKey } from './en';

/**
 * Spanish dictionary — ported 1:1 from the original static HTML (the default,
 * hardcoded content of every element carrying data-i18n).
 */
export const es: Record<TranslationKey, string> = {
  /* Navigation */
  'nav.home': 'Inicio',
  'nav.services': 'Servicios',
  'nav.contact': 'Contacto',
  'nav.company': 'Empresa',
  'nav.who': 'Quiénes Somos',
  'nav.management': 'Gerencia',
  'nav.operations': 'Operaciones',

  /* Footer */
  'footer.desc':
    'Socio estratégico para los sectores industrial y energético. Expertos en soluciones químicas avanzadas, metalmecánica de precisión y componentes para transformadores de potencia. Certificados ASME y ASTM.',
  'footer.nav-heading': 'Navegación',
  'footer.svc-heading': 'Servicios',
  'footer.contact-heading': 'Contacto',
  'footer.svc.minerals': 'Minerales Críticos',
  'footer.svc.metal': 'Metalmecánica',
  'footer.svc.chem': 'Tratamiento Químico',
  'footer.svc.elec': 'Transformadores de Potencia',
  'footer.copyright':
    '&copy; 2025 &mdash; Silas Seve<span style="color:#bd0016;">7</span>n Holdings Corp. Todos los derechos reservados.',

  /* Index — Hero */
  'hero.desc':
    'Silas Seve7n Holdings Corp. conecta a productores venezolanos calificados de minerales críticos con fabricantes y usuarios finales en Estados Unidos. Desarrollamos cadenas de suministro seguras, transparentes y conformes a la normativa para materiales esenciales para la industria estadounidense.',
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
    'Un equipo técnico altamente calificado, preparado para liderar el suministro y transporte de minerales críticos y tierras raras, además de diseñar, ejecutar y supervisar soluciones integrales en metalmecánica, tratamiento químico e infraestructura eléctrica.',
  'idx-svc.minerals.badge': 'Servicio Principal',
  'idx-svc.minerals.title': 'Minerales Críticos y Tierras Raras',
  'idx-svc.minerals.desc':
    'Suministro integral y logística de exportación de minerales críticos y elementos de tierras raras, conectando productores certificados con compradores industriales y fundiciones a nivel global.',
  'idx-svc.minerals.link': 'Ver detalles',
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
  'nos.breadcrumb': 'Quiénes Somos',
  'nos.ph-title': '<span style="color:var(--blue);">Quiénes</span> Somos',
  'nos.ph-desc':
    'Una empresa con sede en EE. UU. comprometida con la excelencia en ingeniería, la continuidad operativa y los estándares internacionales de calidad.',

  /* Nosotros — About intro */
  'nos.history-label': 'Nuestra Empresa',
  'nos.history-title': 'Conectando Recursos Críticos. <span style="color:var(--red);">Impulsando el Futuro</span>',
  'nos.p1':
    'Silas Seve<span style="color:#bd0016;">7</span>n Holdings Corp. es una empresa estadounidense con sede en Casper, Wyoming, enfocada en desarrollar oportunidades comerciales estratégicas en minerales críticos, energía y materiales industriales.',
  'nos.p2':
    'Conectamos a productores venezolanos calificados de tantalio, niobio, estaño, elementos de tierras raras y otros recursos críticos con fabricantes y usuarios finales en Estados Unidos. Nuestra misión es construir cadenas de suministro seguras, transparentes y legalmente conformes que respalden a la industria estadounidense.',
  'nos.ic1-title': 'Alianzas Estratégicas en Minerales Críticos',
  'nos.ic1-desc':
    'Identificamos y estructuramos oportunidades entre productores minerales calificados y compradores, fabricantes y socios industriales establecidos en Estados Unidos.',
  'nos.ic2-title': 'Cadenas de Suministro Seguras y Conformes',
  'nos.ic2-desc':
    'Cada oportunidad se desarrolla con un enfoque en la transparencia, el abastecimiento responsable y el cumplimiento de las leyes, sanciones y regulaciones comerciales de EE. UU. aplicables, así como de los requisitos de licencias de la OFAC.',

  /* Nosotros — Mission / Vision */
  'mv.label': 'Nuestro Propósito',
  'mv.title': 'Misión y Visión',
  'mv.vision-title': 'Visión',
  'mv.vision-body':
    'Convertirnos en un puente confiable entre los recursos minerales de Venezuela y la industria estadounidense, desarrollando cadenas de suministro seguras, transparentes y responsables para minerales críticos y elementos de tierras raras.',
  'mv.mission-title': 'Misión',
  'mv.mission-body':
    'Nuestra misión es fortalecer el acceso de Estados Unidos a los minerales críticos mediante conexiones seguras, transparentes y responsables entre productores venezolanos calificados y la industria estadounidense, respaldando cadenas de suministro resilientes, el crecimiento económico y la seguridad energética y nacional a largo plazo.',

  /* Nosotros — Why it matters */
  'why.label': 'Por Qué Importa',
  'why.title': 'Por Qué Esto Importa <span style="color:var(--red);">para Estados Unidos</span>',
  'why.desc': 'Fortaleciendo la resiliencia industrial y la independencia energética.',
  'why.w1-title': 'Fortaleza Manufacturera',
  'why.w1-desc': 'Asegura insumos críticos para la producción estadounidense de semiconductores, aeroespacial y defensa.',
  'why.w2-title': 'Resiliencia de la Cadena de Suministro',
  'why.w2-desc': 'Reduce la dependencia de material procesado en China para minerales estratégicos.',
  'why.w3-title': 'Ventaja Regional',
  'why.w3-desc': 'Aprovecha la cercanía de Venezuela para una cadena logística más corta y segura.',
  'why.w4-title': 'Alianza entre Dos Naciones',
  'why.w4-desc': 'Una empresa estadounidense que trabaja de la mano con productores venezolanos, combinando estándares estadounidenses con experiencia regional.',

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
  'svc.tab.minerals': 'Minerales Críticos',
  'svc.tab.metal': 'Metalmecánica',
  'svc.tab.chem': 'Tratamiento Químico',
  'svc.tab.elec': 'Transformadores de Potencia',

  /* Servicios — Minerales Críticos y Tierras Raras (servicio principal) */
  'svc.minerals.label': 'Sección 01',
  'svc.minerals.title': 'Suministro y Transporte de Minerales Críticos y Tierras Raras',
  'svc.minerals.sub':
    'Cadena de suministro integral para minerales críticos y elementos de tierras raras — desde el origen hasta el comprador industrial, con trazabilidad y cumplimiento normativo en cada etapa.',
  'svc.minerals.s1-title': 'Estructuración y Contratos de Offtake',
  'svc.minerals.s1-desc':
    'Estructuración comercial, acuerdos de offtake, esquemas de precios, condiciones Incoterms y cobertura de riesgo, respaldados por documentación completa para operaciones transfronterizas complejas.',
  'svc.minerals.s2-title': 'Logística y Exportación',
  'svc.minerals.s2-desc':
    'Coordinación portuaria, transporte multimodal, almacenamiento y gestión de trámites de exportación, con foco en tiempos de entrega, costos y trazabilidad.',
  'svc.minerals.s3-title': 'Acceso a Mercado',
  'svc.minerals.s3-desc':
    'Conexión con fundiciones, compradores industriales y comercializadores calificados que buscan volumen y calidad consistentes.',

  /* Servicios — Metalworking */
  'svc.metal.label': 'Sección 02',
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
  'svc.chem.label': 'Sección 03',
  'svc.chem.title': 'Servicios Químicos y Metalmecánicos',
  'svc.chem.sub':
    'Formulaciones químicas propias &mdash; demulsificantes, inhibidores de corrosión, anti-incrustantes y programas de tratamiento de agua &mdash; probadas en campo durante más de 14 años en refinerías venezolanas e internacionales, para aplicaciones upstream, downstream, de calderas y aguas de proceso.',
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
  'svc.elec.label': 'Sección 04',
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

  /* Management page */
  'mgmt.breadcrumb': 'Gerencia',
  'mgmt.ph-title': '<span style="color:var(--blue);">Gerencia</span>',
  'mgmt.ph-desc': 'Conozca al equipo directivo que guía a Silas Seve7n Holdings Corp.',

  /* Operations page */
  'ops.breadcrumb': 'Operaciones',
  'ops.ph-title': '<span style="color:var(--blue);">Operaciones</span>',
  'ops.ph-desc': 'Cómo operamos para servir a los sectores industrial y energético.',

  /* Home — stats */
  'stats.agreements': 'Acuerdos con productores en Venezuela',
  'stats.years': 'Años de experiencia en campo',
  'stats.projects': 'Proyectos completados en el sector energético',
  'stats.minerals': 'Minerales estratégicos en foco',

  /* Home — opportunity */
  'opp.label': 'La Oportunidad',
  'opp.title': 'Redirigiendo los Minerales Críticos <span style="color:var(--red);">Hacia la Industria Estadounidense</span>',
  'opp.body': 'Una parte significativa de los minerales críticos de Venezuela &mdash; incluidos el coltán, el tantalio y el niobio &mdash; se exporta actualmente a China, donde se procesa, ensambla y revende como producto terminado chino. Dada la cercanía geográfica de Venezuela con Estados Unidos y sus importantes reservas minerales sin explotar, una relación comercial directa y conforme a la normativa entre ambos países representa una oportunidad estratégica para la industria estadounidense.',
  'opp.today-label': 'Hoy',
  'opp.today': 'La materia prima fluye hacia China para su procesamiento y recomercialización.',
  'opp.tomorrow-label': 'Mañana',
  'opp.tomorrow': 'Un canal directo y transparente Venezuela &rarr; EE. UU. que impulsa la manufactura nacional.',

  /* Strategic minerals (index + servicios) */
  'min.label': 'Minerales Estratégicos',
  'min.title': 'Los Minerales que Impulsan <span style="color:var(--red);">el Futuro de Estados Unidos</span>',
  'min.desc': 'Más allá del petróleo y el gas &mdash; nos enfocamos en los minerales críticos de los que dependen las industrias tecnológica, energética y de defensa de EE. UU.',
  'min.coltan-title': 'Coltán',
  'min.coltan-desc': 'Mineral de columbita-tantalita, la principal materia prima para la extracción de tantalio.',
  'min.tantalum-title': 'Tantalio',
  'min.tantalum-desc': 'Condensadores, semiconductores y componentes aeroespaciales y de defensa.',
  'min.niobium-title': 'Niobio',
  'min.niobium-desc': 'Aleaciones de acero de alta resistencia, motores a reacción y componentes para vehículos eléctricos.',
  'min.apps-title': 'Áreas de Aplicación',
  'min.app1': 'Semiconductores y Electrónica',
  'min.app2': 'Energía Limpia y Vehículos Eléctricos',
  'min.app3': 'Manufactura Avanzada',
  'min.app4': 'Aeroespacial y Defensa',
  'min.why-title': 'Por Qué Importa para la Resiliencia de la Cadena de Suministro de EE. UU.',
  'min.why-body': 'Estos minerales son insumos esenciales para la manufactura estadounidense de semiconductores, defensa, aeroespacial y vehículos eléctricos &mdash; sectores que hoy dependen de importaciones procesadas en China.',

  /* Home — quote */
  'quote.text': 'Conectamos el mineral con la planta &mdash; combinando abastecimiento, estructuración, química y cumplimiento normativo bajo un mismo techo.',

  /* Operations — value chain & compliance */
  'ops.chain-label': 'Cadena de Valor Integral',
  'ops.chain-title': 'De la Mina a la <span style="color:var(--red);">Manufactura en EE. UU.</span>',
  'ops.chain-desc': 'Cinco etapas integradas que llevan los minerales críticos desde productores venezolanos verificados hasta la industria estadounidense.',
  'ops.step1-title': 'Origen',
  'ops.step1-desc': 'Productores venezolanos verificados de coltán, tantalio y niobio.',
  'ops.step2-title': 'Estructuración',
  'ops.step2-desc': 'Contratos de compra (offtake), precios, coberturas y documentación.',
  'ops.step3-title': 'Soporte al Proceso',
  'ops.step3-desc': 'Soporte químico y de ingeniería para la materia prima y su procesamiento.',
  'ops.step4-title': 'Exportación',
  'ops.step4-desc': 'Coordinación portuaria, transporte multimodal y aduanas.',
  'ops.step5-title': 'Entrega',
  'ops.step5-desc': 'Fundiciones, compradores industriales y fabricantes en EE. UU.',
  'ops.chain-note': 'La experiencia química y de ingeniería de Silas Seve<span style="color:#bd0016;">7</span>n fortalece la calidad y la confiabilidad en las etapas de abastecimiento y procesamiento de la cadena.',
  'ops.comp-label': 'Cumplimiento y Estándares',
  'ops.comp-title': 'Plena Alineación con los <span style="color:var(--red);">Requisitos Federales de EE. UU.</span>',
  'ops.comp-intro': 'Cada transacción se estructura para operar en total conformidad con las sanciones de EE. UU. administradas por la Oficina de Control de Activos Extranjeros (OFAC), las regulaciones aplicables de control de exportaciones y aduanas, la ley anticorrupción (FCPA) y los requisitos de transparencia de la cadena de suministro.',
  'ops.c1-title': 'OFAC y Sanciones',
  'ops.c1-desc': 'Verificación y estructuración alineadas con las directrices vigentes de la OFAC.',
  'ops.c2-title': 'Comercio y Aduanas',
  'ops.c2-desc': 'Pleno cumplimiento de los procedimientos de importación, exportación y aduanas de EE. UU.',
  'ops.c3-title': 'ASME / ASTM',
  'ops.c3-desc': 'Normas de ingeniería y materiales para equipos y ensayos químicos.',
  'ops.c4-title': 'Anticorrupción',
  'ops.c4-desc': 'Debida diligencia y transparencia en cada relación con productores.',

  /* Servicios — minerals link */
  'svc.minerals.ops-link': 'Vea cómo operamos',
};
