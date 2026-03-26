import {
  Workflow, BarChart3, Cog, Users, Zap, FileCheck,
  Code, LayoutDashboard, Handshake,
  Megaphone, Globe, Ship,
  type LucideIcon,
} from "lucide-react";

export interface ServiceBenefit {
  title: string;
  desc: string;
}

export interface ServiceFeature {
  title: string;
  desc: string;
}

export interface Service {
  icon: LucideIcon;
  slug: string;
  title: string;
  shortDesc: string;
  desc: string;
  longDesc: string;
  tags: string[];
  features: ServiceFeature[];
  benefits: ServiceBenefit[];
  useCases: string[];
  category: "pj" | "pf";
}

export const SERVICES: Service[] = [
  {
    icon: Workflow,
    slug: "automacao-de-fluxos",
    title: "Automatizaci\u00f3n de Flujos",
    shortDesc: "Automatizaciones inteligentes end-to-end.",
    desc: "Eliminamos procesos manuales y repetitivos con automatizaciones inteligentes que operan 24/7, reduciendo errores y aumentando la velocidad operacional.",
    longDesc: "Los procesos manuales consumen tiempo, generan retrabajo y limitan la capacidad de crecimiento. Nuestra soluci\u00f3n de automatizaci\u00f3n mapea cada etapa de tu operaci\u00f3n, identifica cuellos de botella e implementa flujos automatizados que funcionan de forma continua \u2014 sin intervenci\u00f3n humana en los puntos cr\u00edticos. Con triggers inteligentes, cada acci\u00f3n dispara la siguiente autom\u00e1ticamente, creando una cadena operacional fluida y confiable.",
    tags: ["Workflows", "Triggers", "Automatizaci\u00f3n End-to-End"],
    features: [
      { title: "Mapeo completo de procesos", desc: "An\u00e1lisis detallado de cada etapa operacional para identificar puntos de automatizaci\u00f3n y eliminar redundancias." },
      { title: "Configuraci\u00f3n de reglas y triggers", desc: "Definici\u00f3n de condiciones y disparadores personalizados que inician acciones autom\u00e1ticamente en base a eventos." },
      { title: "Monitoreo en tiempo real", desc: "Segui\u00e1 la ejecuci\u00f3n de cada flujo con dashboards en vivo, alertas de falla y m\u00e9tricas de rendimiento." },
      { title: "Reportes de rendimiento", desc: "Visualiz\u00e1 tiempos de ejecuci\u00f3n, tasas de \u00e9xito y ahorro generado por cada automatizaci\u00f3n implementada." },
      { title: "Escalamiento autom\u00e1tico", desc: "Reglas de escalamiento que derivan excepciones a los equipos correctos cuando la automatizaci\u00f3n encuentra escenarios no previstos." },
      { title: "Versionado de flujos", desc: "Historial completo de cambios en los workflows, permitiendo rollback y auditor\u00eda de modificaciones." },
    ],
    benefits: [
      { title: "Reducci\u00f3n de hasta 80% en el tiempo operacional", desc: "Tareas que llevaban horas pasan a ejecutarse en segundos, liberando a tu equipo para actividades estrat\u00e9gicas." },
      { title: "Eliminaci\u00f3n de errores manuales", desc: "Las automatizaciones siguen reglas predefinidas con precisi\u00f3n, removiendo el factor humano de los procesos repetitivos." },
      { title: "Operaci\u00f3n 24/7 sin costos adicionales", desc: "Los flujos automatizados funcionan continuamente, incluso fuera del horario comercial, sin necesidad de equipo dedicado." },
    ],
    useCases: ["Onboarding automatizado de clientes", "Procesamiento de documentos y aprobaciones", "Notificaciones y alertas operacionales", "Generaci\u00f3n autom\u00e1tica de reportes peri\u00f3dicos"],
    category: "pj",
  },
  {
    icon: BarChart3,
    slug: "gestao-transacional",
    title: "Gesti\u00f3n Transaccional",
    shortDesc: "Dashboards y control en tiempo real.",
    desc: "Control total sobre el flujo de transacciones de tu empresa con dashboards inteligentes, alertas configurables y trazabilidad completa.",
    longDesc: "En operaciones con alto volumen de transacciones, la falta de visibilidad puede significar p\u00e9rdidas financieras, fraudes no detectados y decisiones basadas en datos desactualizados. Nuestra plataforma de gesti\u00f3n transaccional centraliza todos los movimientos en un panel unificado, ofreciendo visi\u00f3n granular de cada transacci\u00f3n \u2014 desde el momento en que se inicia hasta su conclusi\u00f3n. Con filtros avanzados y alertas configurables, tu equipo identifica anomal\u00edas antes de que se conviertan en problemas.",
    tags: ["Dashboard", "Analytics", "Real-time"],
    features: [
      { title: "Panel de control unificado", desc: "Visualiz\u00e1 todas las transacciones de m\u00faltiples canales y sistemas en una interfaz \u00fanica e intuitiva." },
      { title: "Alertas y notificaciones inteligentes", desc: "Configur\u00e1 reglas para recibir alertas sobre transacciones fuera del patr\u00f3n, valores at\u00edpicos o fallas de procesamiento." },
      { title: "Trazabilidad de punta a punta", desc: "Segui\u00e1 el ciclo de vida completo de cada transacci\u00f3n con timeline detallado y logs de auditor\u00eda." },
      { title: "Exportaci\u00f3n e integraci\u00f3n de datos", desc: "Export\u00e1 reportes en m\u00faltiples formatos e integr\u00e1 datos con ERPs, CRMs y herramientas de BI." },
      { title: "Filtros avanzados y b\u00fasqueda", desc: "Encontr\u00e1 transacciones espec\u00edficas con filtros por fecha, monto, estado, canal, cliente y decenas de otros criterios." },
      { title: "An\u00e1lisis de tendencias", desc: "Identific\u00e1 patrones estacionales, picos de volumen y tendencias que impactan tu operaci\u00f3n financiera." },
    ],
    benefits: [
      { title: "Visibilidad total de la operaci\u00f3n", desc: "Entend\u00e9 exactamente qu\u00e9 est\u00e1 pasando en cada canal y sistema en cualquier momento, sin depender de planillas." },
      { title: "Detecci\u00f3n proactiva de problemas", desc: "Alertas configurables identifican anomal\u00edas en tiempo real, permitiendo acci\u00f3n inmediata antes de impactos mayores." },
      { title: "Decisiones basadas en datos reales", desc: "Dashboards actualizados en tiempo real brindan la base para decisiones operacionales y estrat\u00e9gicas precisas." },
    ],
    useCases: ["Monitoreo de transacciones financieras", "Gesti\u00f3n de ventas multicanal", "Control de flujo de caja en tiempo real", "Auditor\u00eda y rastreo de movimientos"],
    category: "pj",
  },
  {
    icon: Cog,
    slug: "integracao-de-sistemas",
    title: "Integraci\u00f3n de Sistemas",
    shortDesc: "Conect\u00e1 plataformas y elimin\u00e1 silos.",
    desc: "Conectamos tus plataformas, ERPs, CRMs y herramientas en un ecosistema unificado y eficiente, eliminando silos de informaci\u00f3n.",
    longDesc: "Las empresas en crecimiento acumulan sistemas que no se comunican: ERPs, CRMs, plataformas de pago, herramientas de atenci\u00f3n al cliente. Cada silo exige carga manual de datos, genera inconsistencias y dificulta la visi\u00f3n consolidada del negocio. Nuestro enfoque de integraci\u00f3n conecta todos esos sistemas a trav\u00e9s de APIs robustas y middleware inteligente, garantizando que la informaci\u00f3n fluya autom\u00e1ticamente entre plataformas con consistencia y seguridad.",
    tags: ["API", "Middleware", "Conectores"],
    features: [
      { title: "Integraci\u00f3n v\u00eda API REST/GraphQL", desc: "Conexi\u00f3n estandarizada con cualquier sistema que disponga de APIs, utilizando protocolos modernos y seguros." },
      { title: "Conectores preconfigurados", desc: "Biblioteca de conectores listos para los principales ERPs, CRMs y herramientas del mercado argentino e internacional." },
      { title: "Sincronizaci\u00f3n en tiempo real", desc: "Datos actualizados instant\u00e1neamente entre sistemas, eliminando demoras e inconsistencias de informaci\u00f3n." },
      { title: "Fallback y retry autom\u00e1tico", desc: "Mecanismos de resiliencia que garantizan la entrega de datos incluso en escenarios de inestabilidad o indisponibilidad temporal." },
      { title: "Transformaci\u00f3n de datos", desc: "Mapeo y conversi\u00f3n autom\u00e1tica de formatos entre sistemas con reglas de negocio configurables." },
      { title: "Logs y monitoreo", desc: "Registro detallado de cada intercambio de datos con dashboards de salud de las integraciones y alertas de falla." },
    ],
    benefits: [
      { title: "Eliminaci\u00f3n de silos de informaci\u00f3n", desc: "Los datos fluyen libremente entre sistemas, garantizando que todas las \u00e1reas trabajen con la misma fuente de verdad." },
      { title: "Reducci\u00f3n de carga manual de datos", desc: "La informaci\u00f3n se sincroniza autom\u00e1ticamente, eliminando la carga duplicada y los errores que genera." },
      { title: "Escalabilidad sin complejidad", desc: "Agreg\u00e1 nuevos sistemas al ecosistema sin retrabajo, usando la misma capa de integraci\u00f3n ya establecida." },
    ],
    useCases: ["Integraci\u00f3n ERP + CRM", "Sincronizaci\u00f3n de stock entre canales", "Unificaci\u00f3n de datos de clientes", "Conexi\u00f3n entre sistemas legados y plataformas modernas"],
    category: "pj",
  },
  {
    icon: Users,
    slug: "gestao-de-parceiros",
    title: "Gesti\u00f3n de Socios",
    shortDesc: "Gestion\u00e1 tu red de socios.",
    desc: "Herramientas completas para gestionar tu red de socios, seguir el rendimiento y automatizar procesos de onboarding.",
    longDesc: "Las redes de socios son esenciales para escalar negocios, pero gestionarlas manualmente se vuelve insostenible a medida que crecen. Desde el registro inicial hasta el seguimiento de resultados, cada socio requiere atenci\u00f3n y comunicaci\u00f3n constante. Nuestra plataforma centraliza toda la gesti\u00f3n en un portal dedicado, con onboarding automatizado, m\u00e9tricas de rendimiento en tiempo real y comunicaci\u00f3n estructurada \u2014 permitiendo que tu equipo gestione decenas o cientos de socios con la misma eficiencia.",
    tags: ["Onboarding", "Rendimiento", "Red"],
    features: [
      { title: "Portal de socios dedicado", desc: "Entorno exclusivo para socios con acceso a materiales, reportes de ventas y canal de comunicaci\u00f3n directo." },
      { title: "M\u00e9tricas de rendimiento", desc: "Dashboards con indicadores de cada socio: volumen de ventas, conversi\u00f3n, ticket promedio y ranking comparativo." },
      { title: "Onboarding automatizado", desc: "Flujo estructurado de registro, validaci\u00f3n de documentos, capacitaci\u00f3n y activaci\u00f3n sin intervenci\u00f3n manual." },
      { title: "Comunicaci\u00f3n centralizada", desc: "Env\u00edo segmentado de comunicados, actualizaciones y materiales para grupos espec\u00edficos de socios." },
      { title: "Gesti\u00f3n de comisiones", desc: "C\u00e1lculo autom\u00e1tico de comisiones con reglas configurables por socio, producto o franja de volumen." },
      { title: "Control de territorio", desc: "Definici\u00f3n y gesti\u00f3n de \u00e1reas de actuaci\u00f3n para evitar conflictos y optimizar la cobertura de la red." },
    ],
    benefits: [
      { title: "Escal\u00e1 sin perder el control", desc: "Gestion\u00e1 una red creciente de socios manteniendo visibilidad total sobre el rendimiento y compliance de cada uno." },
      { title: "Onboarding 5 veces m\u00e1s r\u00e1pido", desc: "Los socios empiezan a operar en d\u00edas en lugar de semanas, con un proceso automatizado y documentaci\u00f3n digital." },
      { title: "Transparencia que fortalece relaciones", desc: "Los socios tienen acceso directo a sus resultados y pagos, reduciendo fricciones y aumentando el compromiso." },
    ],
    useCases: ["Redes de representantes comerciales", "Programas de afiliados y revendedores", "Franquicias y licenciamientos", "Canales de distribuci\u00f3n indirectos"],
    category: "pj",
  },
  {
    icon: Zap,
    slug: "conciliacao-operacional",
    title: "Conciliaci\u00f3n Operacional",
    shortDesc: "Conciliaci\u00f3n automatizada y precisa.",
    desc: "Conciliaci\u00f3n automatizada de datos y transacciones con precisi\u00f3n, velocidad y trazabilidad total entre sistemas.",
    longDesc: "Cuando tu operaci\u00f3n involucra m\u00faltiples sistemas, canales de venta o socios financieros, garantizar que todos los registros est\u00e9n alineados es un desaf\u00edo constante. Divergencias entre lo que se vendi\u00f3, se cobr\u00f3 y se recibi\u00f3 pueden pasar desapercibidas por semanas. Nuestra soluci\u00f3n de conciliaci\u00f3n cruza autom\u00e1ticamente datos de diferentes fuentes, identifica discrepancias en segundos y ofrece flujos de resoluci\u00f3n \u2014 transformando un proceso que consum\u00eda d\u00edas en una operaci\u00f3n automatizada y confiable.",
    tags: ["Matching", "Conciliaci\u00f3n", "Precisi\u00f3n"],
    features: [
      { title: "Matching inteligente de registros", desc: "Algoritmos que cruzan datos entre sistemas usando m\u00faltiples criterios, incluso con tolerancia a variaciones." },
      { title: "Identificaci\u00f3n de discrepancias", desc: "Detecci\u00f3n autom\u00e1tica de divergencias de monto, cantidad, fecha o estado entre registros de diferentes fuentes." },
      { title: "Resoluci\u00f3n automatizada", desc: "Flujos preconfigurados para resoluci\u00f3n de discrepancias recurrentes, reduciendo la intervenci\u00f3n manual." },
      { title: "Historial completo de conciliaciones", desc: "Registro detallado de cada conciliaci\u00f3n realizada con evidencias y pista de auditor\u00eda." },
      { title: "Conciliaci\u00f3n multimoneda", desc: "Soporte para operaciones en diferentes monedas con conversi\u00f3n autom\u00e1tica y gesti\u00f3n de tipos de cambio." },
      { title: "Programaci\u00f3n de conciliaciones", desc: "Configur\u00e1 conciliaciones autom\u00e1ticas diarias, semanales o en tiempo real seg\u00fan la necesidad de la operaci\u00f3n." },
    ],
    benefits: [
      { title: "De d\u00edas a minutos", desc: "Conciliaciones que requer\u00edan equipos dedicados por d\u00edas pasan a ejecutarse autom\u00e1ticamente en minutos." },
      { title: "Precisi\u00f3n superior al 99,5%", desc: "Algoritmos de matching eliminan errores humanos y garantizan una exactitud consistente en alto volumen." },
      { title: "Recuperaci\u00f3n de ingresos", desc: "Identificaci\u00f3n r\u00e1pida de cobros no recibidos, pagos duplicados y divergencias que impactan la caja." },
    ],
    useCases: ["Conciliaci\u00f3n bancaria automatizada", "Conciliaci\u00f3n de ventas vs. cobros", "Conciliaci\u00f3n entre ERPs y gateways de pago", "Auditor\u00eda de reparto de marketplaces"],
    category: "pj",
  },
  {
    icon: FileCheck,
    slug: "relatorios-e-bi",
    title: "Reportes y BI",
    shortDesc: "Datos transformados en insights.",
    desc: "Transform\u00e1 datos brutos en insights accionables con reportes personalizados y paneles de BI integrados a tu operaci\u00f3n.",
    longDesc: "Datos dispersos en planillas y sistemas aislados no generan valor \u2014 generan trabajo. Consolidar informaci\u00f3n para tomar decisiones consume horas de analistas y aun as\u00ed resulta en visiones fragmentadas. Nuestra soluci\u00f3n se conecta directamente a tus fuentes de datos, aplica transformaciones y entrega paneles interactivos que responden a las preguntas del negocio en tiempo real. Desde reportes operacionales diarios hasta an\u00e1lisis estrat\u00e9gicos para el directorio, cada visualizaci\u00f3n est\u00e1 construida para tu contexto espec\u00edfico.",
    tags: ["BI", "Dashboards", "Insights"],
    features: [
      { title: "Reportes personalizables", desc: "Constru\u00ed reportes a medida con m\u00e9tricas, filtros y visualizaciones adaptados a tu modelo de negocio." },
      { title: "Visualizaciones interactivas", desc: "Gr\u00e1ficos, tablas y mapas interactivos que permiten drill-down y exploraci\u00f3n de los datos en m\u00faltiples dimensiones." },
      { title: "Programaci\u00f3n de env\u00edos", desc: "Configur\u00e1 env\u00edos autom\u00e1ticos de reportes por email o integraci\u00f3n para stakeholders en frecuencias definidas." },
      { title: "Integraci\u00f3n con fuentes de datos", desc: "Conexi\u00f3n directa con bases de datos, APIs, planillas y sistemas operacionales para datos siempre actualizados." },
      { title: "Control de acceso por perfil", desc: "Cada usuario visualiza solo los datos y reportes relevantes para su funci\u00f3n y nivel jer\u00e1rquico." },
      { title: "Alertas por indicadores", desc: "Configur\u00e1 alertas autom\u00e1ticas cuando los KPIs alcanzan l\u00edmites definidos, permitiendo acci\u00f3n proactiva." },
    ],
    benefits: [
      { title: "Decisiones en minutos, no en d\u00edas", desc: "Paneles en tiempo real eliminan la espera por consolidaciones manuales y reportes desactualizados." },
      { title: "Visi\u00f3n unificada del negocio", desc: "Datos de m\u00faltiples sistemas en una \u00fanica interfaz, rompiendo silos y revelando correlaciones antes invisibles." },
      { title: "Autonom\u00eda para el equipo de negocio", desc: "Reportes autoexplicativos reducen la dependencia de equipos t\u00e9cnicos para obtener respuestas sobre la operaci\u00f3n." },
    ],
    useCases: ["Dashboards ejecutivos para C-level", "Reportes de rendimiento de ventas", "An\u00e1lisis de indicadores operacionales", "Reportes regulatorios automatizados"],
    category: "pj",
  },
  {
    icon: Code,
    slug: "software-digital",
    title: "Software & Digital",
    shortDesc: "Desarrollo de soluciones digitales.",
    desc: "Desarrollo de software a medida y soluciones digitales completas para transformar tu operaci\u00f3n y crear ventaja competitiva.",
    longDesc: "Las soluciones gen\u00e9ricas no siempre atienden las particularidades de tu negocio. Cuando la operaci\u00f3n exige funcionalidades espec\u00edficas, flujos \u00fanicos o integraciones que no existen en el mercado, el desarrollo a medida es el camino. Nuestro equipo dise\u00f1a y construye aplicaciones web y mobile con foco en usabilidad, rendimiento y escalabilidad \u2014 desde MVPs para validaci\u00f3n de ideas hasta plataformas robustas para operaciones de alta demanda. Cada proyecto sigue metodolog\u00eda \u00e1gil con entregas incrementales y feedback continuo.",
    tags: ["Desarrollo", "Web", "Mobile"],
    features: [
      { title: "Aplicaciones web y mobile", desc: "Desarrollo de sistemas web responsivos y aplicaciones nativas o h\u00edbridas para iOS y Android." },
      { title: "Arquitectura escalable", desc: "Proyectos construidos sobre arquitecturas modernas preparadas para crecer junto con el volumen de tu operaci\u00f3n." },
      { title: "UX/UI personalizado", desc: "Interfaces dise\u00f1adas con foco en la experiencia del usuario final, reduciendo la curva de aprendizaje y aumentando la adopci\u00f3n." },
      { title: "Mantenimiento y evoluci\u00f3n continua", desc: "Soporte t\u00e9cnico permanente con actualizaciones, correcciones y nuevas funcionalidades conforme el negocio evoluciona." },
      { title: "Metodolog\u00eda \u00e1gil", desc: "Entregas incrementales en cada sprint, con validaci\u00f3n constante y adaptaci\u00f3n r\u00e1pida a cambios de alcance." },
      { title: "Tests y calidad", desc: "Cobertura de tests automatizados, revisi\u00f3n de c\u00f3digo y procesos de QA que garantizan estabilidad en producci\u00f3n." },
    ],
    benefits: [
      { title: "Soluci\u00f3n que se adapta a tu negocio", desc: "Software construido para atender exactamente tus necesidades, sin adaptaciones forzadas de herramientas gen\u00e9ricas." },
      { title: "Time-to-market acelerado", desc: "Metodolog\u00eda \u00e1gil con sprints cortos permite validar ideas r\u00e1pidamente e iterar con base en feedback real." },
      { title: "Propiedad total del c\u00f3digo", desc: "Todo el c\u00f3digo fuente es tuyo, sin lock-in con plataformas ni dependencias de proveedores espec\u00edficos." },
    ],
    useCases: ["Plataformas SaaS verticales", "Aplicaciones para operaci\u00f3n en campo", "Portales de autoservicio", "MVPs y pruebas de concepto"],
    category: "pj",
  },
  {
    icon: LayoutDashboard,
    slug: "plataforma-de-gestao",
    title: "Plataforma de Gesti\u00f3n",
    shortDesc: "Tu plataforma operacional propia.",
    desc: "Estructuraci\u00f3n de una plataforma propia para gesti\u00f3n operacional completa, centralizada y adaptada a las necesidades de tu negocio.",
    longDesc: "Gestionar una operaci\u00f3n compleja con herramientas fragmentadas genera ineficiencia, retrabajo y falta de visibilidad. Una plataforma de gesti\u00f3n propia unifica procesos, datos y equipos en un \u00fanico entorno, adaptado a la realidad de tu negocio. Desarrollamos plataformas que funcionan como el sistema nervioso central de tu operaci\u00f3n \u2014 donde cada m\u00f3dulo se conecta y cada informaci\u00f3n tiene su lugar. Con control granular de accesos y permisos, cada colaborador ve exactamente lo que necesita para rendir al m\u00e1ximo.",
    tags: ["Plataforma", "Gesti\u00f3n", "Personalizaci\u00f3n"],
    features: [
      { title: "Panel administrativo completo", desc: "Visi\u00f3n consolidada de toda la operaci\u00f3n con indicadores, alertas y accesos r\u00e1pidos a las acciones m\u00e1s frecuentes." },
      { title: "M\u00f3dulos configurables", desc: "Arquitectura modular que permite activar, desactivar y personalizar funcionalidades seg\u00fan la necesidad." },
      { title: "Control de accesos y permisos", desc: "Gesti\u00f3n granular de qui\u00e9n puede ver, editar y aprobar cada tipo de informaci\u00f3n y operaci\u00f3n en el sistema." },
      { title: "Reportes integrados", desc: "Reportes nativos de la plataforma que consolidan datos de todos los m\u00f3dulos sin necesidad de exportaci\u00f3n." },
      { title: "Workflows internos", desc: "Flujos de aprobaci\u00f3n, notificaci\u00f3n y escalamiento configurables para procesos internos de la empresa." },
      { title: "API para extensibilidad", desc: "API documentada que permite integrar la plataforma con otros sistemas y desarrollar extensiones a medida." },
    ],
    benefits: [
      { title: "Operaci\u00f3n centralizada", desc: "Todas las \u00e1reas y procesos en una \u00fanica plataforma, eliminando el cambio entre m\u00faltiples sistemas y pantallas." },
      { title: "Adaptaci\u00f3n total a tu negocio", desc: "Cada m\u00f3dulo se configura para reflejar tus procesos reales, no al rev\u00e9s." },
      { title: "Gobernanza y control", desc: "Pista de auditor\u00eda, permisos granulares y workflows de aprobaci\u00f3n garantizan compliance interno." },
    ],
    useCases: ["Gesti\u00f3n operacional de empresas de servicios", "Centrales de atenci\u00f3n y back-office", "Plataformas para gesti\u00f3n de franquicias", "Sistemas internos de control y aprobaci\u00f3n"],
    category: "pj",
  },
  {
    icon: Handshake,
    slug: "integracao-parceiros",
    title: "Integraci\u00f3n con Socios",
    shortDesc: "Conexi\u00f3n tecnol\u00f3gica con socios.",
    desc: "Integraci\u00f3n tecnol\u00f3gica con socios de negocio, unificando sistemas y datos para una operaci\u00f3n colaborativa y eficiente.",
    longDesc: "Trabajar con socios de negocio exige intercambio constante de informaci\u00f3n: pedidos, estado de entrega, datos financieros, reportes. Cuando ese intercambio se hace por email, planillas o tel\u00e9fono, errores y demoras son inevitables. Nuestra soluci\u00f3n crea un canal tecnol\u00f3gico directo entre tu operaci\u00f3n y la de tus socios, con sincronizaci\u00f3n autom\u00e1tica de datos, dashboards compartidos y SLAs monitoreados. El resultado es una operaci\u00f3n colaborativa que funciona como si fuera una sola.",
    tags: ["Socios", "APIs", "Ecosistema"],
    features: [
      { title: "APIs para socios", desc: "Endpoints seguros y documentados para que los socios integren directamente con tu operaci\u00f3n de forma estandarizada." },
      { title: "Sincronizaci\u00f3n de datos", desc: "Datos de pedidos, stock, entregas y financiero actualizados en tiempo real entre ambas operaciones." },
      { title: "Dashboard compartido", desc: "Visi\u00f3n unificada de m\u00e9tricas operacionales accesible tanto por tu equipo como por los socios." },
      { title: "SLA y monitoreo", desc: "Definici\u00f3n de acuerdos de nivel de servicio con seguimiento autom\u00e1tico y alertas de incumplimiento." },
      { title: "Gesti\u00f3n de credenciales", desc: "Control de acceso por socio con tokens, scopes y logs de todas las interacciones v\u00eda API." },
      { title: "Sandbox para pruebas", desc: "Entorno de homologaci\u00f3n para que los socios prueben integraciones antes de pasar a producci\u00f3n." },
    ],
    benefits: [
      { title: "Comunicaci\u00f3n sin ruido", desc: "Los datos fluyen directamente entre sistemas, eliminando emails, planillas y llamadas para intercambio de informaci\u00f3n operacional." },
      { title: "Reducci\u00f3n de errores de interfaz", desc: "La integraci\u00f3n directa entre sistemas elimina la carga manual y las inconsistencias que genera." },
      { title: "Socios m\u00e1s aut\u00f3nomos", desc: "Con acceso a dashboards y APIs, los socios resuelven dudas operacionales sin contactar a tu equipo." },
    ],
    useCases: ["Integraci\u00f3n con proveedores y distribuidores", "Conexi\u00f3n con operadores log\u00edsticos", "Intercambio de datos con instituciones financieras", "Ecosistemas de marketplace"],
    category: "pj",
  },
  {
    icon: Megaphone,
    slug: "marketing-digital",
    title: "Marketing Digital",
    shortDesc: "Plataforma integral para productos digitales.",
    desc: "Plataforma completa para la comercializaci\u00f3n de productos digitales: cursos online, ebooks, clases en vivo, pagos recurrentes, cuotas y toda la infraestructura digital que necesit\u00e1s para escalar tu negocio.",
    longDesc: "El mercado de productos digitales crece exponencialmente, pero lanzar y gestionar un negocio digital requiere mucho m\u00e1s que contenido de calidad. Necesit\u00e1s una infraestructura que soporte pagos recurrentes, cuotas, entregas automatizadas, acceso segmentado y m\u00e9tricas de conversi\u00f3n. Nuestra plataforma de Marketing Digital integra todo en un solo lugar: desde la creaci\u00f3n de landing pages y embudos de venta hasta el procesamiento de pagos en m\u00faltiples monedas, gesti\u00f3n de suscripciones y an\u00e1lisis de rendimiento. Ya sea que vendas cursos, ebooks, membres\u00edas o clases en vivo, te damos las herramientas para enfocarte en lo que sab\u00e9s hacer mientras la tecnolog\u00eda se encarga del resto.",
    tags: ["Productos Digitales", "Pagos Recurrentes", "Infraestructura"],
    features: [
      { title: "Gesti\u00f3n de productos digitales", desc: "Administr\u00e1 cursos, ebooks, clases y membres\u00edas desde un panel centralizado con control total de accesos y entregas." },
      { title: "Pagos recurrentes y cuotas", desc: "Configur\u00e1 suscripciones mensuales, planes en cuotas y pagos \u00fanicos con soporte para m\u00faltiples m\u00e9todos de pago." },
      { title: "Embudos de venta automatizados", desc: "Cre\u00e1 secuencias de conversi\u00f3n con landing pages, emails y ofertas que se activan autom\u00e1ticamente seg\u00fan el comportamiento del usuario." },
      { title: "Plataforma de clases en vivo", desc: "Integr\u00e1 clases en tiempo real con registro de asistencia, grabaciones autom\u00e1ticas y material complementario." },
      { title: "M\u00e9tricas de conversi\u00f3n y ROI", desc: "Dashboards con datos de ventas, tasas de conversi\u00f3n, retenci\u00f3n de suscriptores y retorno sobre inversi\u00f3n publicitaria." },
      { title: "Infraestructura digital escalable", desc: "Hosting, CDN y entrega de contenido optimizados para soportar picos de tr\u00e1fico y crecimiento sostenido." },
    ],
    benefits: [
      { title: "Todo en una sola plataforma", desc: "Elimin\u00e1 la necesidad de m\u00faltiples herramientas desconectadas \u2014 pagos, contenido, emails y analytics en un solo lugar." },
      { title: "Ingresos recurrentes predecibles", desc: "Modelos de suscripci\u00f3n y cuotas que generan flujo de caja constante y facilitan la planificaci\u00f3n financiera." },
      { title: "Escal\u00e1 sin l\u00edmites t\u00e9cnicos", desc: "Infraestructura preparada para crecer con tu negocio, sin preocuparte por servidores o rendimiento." },
    ],
    useCases: ["Venta de cursos online y certificaciones", "Plataformas de membres\u00eda con contenido exclusivo", "Comercializaci\u00f3n de ebooks y material educativo", "Gesti\u00f3n de clases en vivo y workshops"],
    category: "pf",
  },
  {
    icon: Globe,
    slug: "asesoria-internacional",
    title: "Asesor\u00eda Internacional",
    shortDesc: "Tr\u00e1mites y asistencia para extranjeros en Argentina.",
    desc: "Asesoramiento integral para tr\u00e1mites documentales en Argentina: apertura de empresas, obtenci\u00f3n de DNI, asistencia estudiantil internacional y matr\u00edcula en universidades de Medicina.",
    longDesc: "Mudarse a Argentina o iniciar un negocio en el pa\u00eds implica navegar un laberinto burocr\u00e1tico que puede ser abrumador sin orientaci\u00f3n experta. Desde la obtenci\u00f3n del DNI para extranjeros hasta la apertura formal de empresas con todos los registros impositivos, cada tr\u00e1mite tiene sus particularidades y tiempos. Nuestro servicio de Asesor\u00eda Internacional acompa\u00f1a a personas y empresas en cada paso del proceso: documentaci\u00f3n migratoria, constituci\u00f3n societaria, inscripciones fiscales y, especialmente, asistencia a estudiantes internacionales que buscan matricularse en universidades argentinas de Medicina y otras carreras de alta demanda. Contamos con un equipo que conoce los procesos, los plazos y los requisitos actualizados para que cada tr\u00e1mite se resuelva de forma eficiente y sin sorpresas.",
    tags: ["Tr\u00e1mites", "Documentaci\u00f3n", "Estudiantil"],
    features: [
      { title: "Apertura de empresas en Argentina", desc: "Asesoramiento completo para constituci\u00f3n de SAS, SRL y otros tipos societarios con inscripci\u00f3n en AFIP y registros provinciales." },
      { title: "Obtenci\u00f3n de DNI para extranjeros", desc: "Gesti\u00f3n del tr\u00e1mite de DNI temporario y permanente, incluyendo turnos, documentaci\u00f3n requerida y seguimiento." },
      { title: "Asistencia estudiantil internacional", desc: "Orientaci\u00f3n para estudiantes extranjeros sobre visas, convalidaci\u00f3n de t\u00edtulos y requisitos de admisi\u00f3n universitaria." },
      { title: "Matr\u00edcula en universidades de Medicina", desc: "Acompa\u00f1amiento espec\u00edfico para inscripci\u00f3n en facultades de Medicina argentinas: documentaci\u00f3n, plazos y requisitos." },
      { title: "Tr\u00e1mites migratorios y residencias", desc: "Gesti\u00f3n de residencias temporarias y permanentes ante Migraciones con seguimiento de expedientes." },
      { title: "Inscripciones fiscales y registros", desc: "Alta en AFIP, monotributo, responsable inscripto y otros reg\u00edmenes fiscales para personas f\u00edsicas y jur\u00eddicas." },
    ],
    benefits: [
      { title: "Ahorr\u00e1 tiempo y evit\u00e1 errores", desc: "Cada tr\u00e1mite se gestiona con conocimiento actualizado de los requisitos, evitando rechazos y demoras innecesarias." },
      { title: "Acompa\u00f1amiento personalizado", desc: "Un referente asignado que conoce tu caso y te gu\u00eda en cada etapa hasta la resoluci\u00f3n completa." },
      { title: "Experiencia en tr\u00e1mites complejos", desc: "A\u00f1os de experiencia gestionando casos de extranjeros nos permiten anticipar problemas y acelerar procesos." },
    ],
    useCases: ["Apertura de empresa por extranjeros", "Obtenci\u00f3n de DNI y residencia", "Inscripci\u00f3n de estudiantes internacionales en universidades", "Regularizaci\u00f3n fiscal de personas y empresas extranjeras"],
    category: "pf",
  },
  {
    icon: Ship,
    slug: "logistica-internacional",
    title: "Log\u00edstica Internacional Argentina",
    shortDesc: "Asesoramiento en rutas, costos y aduanas.",
    desc: "Asesoramiento especializado en log\u00edstica internacional desde y hacia Argentina: optimizaci\u00f3n de rutas, reducci\u00f3n de costos y tiempos, gesti\u00f3n aduanera y documentaci\u00f3n de viaje.",
    longDesc: "La log\u00edstica internacional es uno de los factores m\u00e1s cr\u00edticos para la competitividad de cualquier operaci\u00f3n que involucre comercio exterior. Elegir la ruta equivocada, desconocer los requisitos aduaneros o no optimizar los tiempos de tr\u00e1nsito puede significar costos excesivos y demoras que impactan directamente en el negocio. Nuestro servicio de Log\u00edstica Internacional Argentina ofrece asesoramiento experto en cada eslab\u00f3n de la cadena: desde la selecci\u00f3n de las rutas m\u00e1s eficientes y la negociaci\u00f3n con operadores log\u00edsticos hasta la gesti\u00f3n completa de documentaci\u00f3n aduanera y tr\u00e1mites de importaci\u00f3n/exportaci\u00f3n. Analizamos tu operaci\u00f3n, identificamos oportunidades de ahorro y dise\u00f1amos una estrategia log\u00edstica que reduzca costos sin comprometer los tiempos de entrega.",
    tags: ["Rutas", "Aduanas", "Comercio Exterior"],
    features: [
      { title: "Optimizaci\u00f3n de rutas internacionales", desc: "An\u00e1lisis comparativo de rutas mar\u00edtimas, a\u00e9reas y terrestres para encontrar la combinaci\u00f3n m\u00e1s eficiente en costo y tiempo." },
      { title: "Reducci\u00f3n de costos log\u00edsticos", desc: "Identificaci\u00f3n de oportunidades de ahorro en fletes, consolidaci\u00f3n de cargas y negociaci\u00f3n con operadores." },
      { title: "Gesti\u00f3n aduanera integral", desc: "Asesoramiento en clasificaci\u00f3n arancelaria, reg\u00edmenes aduaneros, licencias y tr\u00e1mites ante la Aduana argentina." },
      { title: "Documentaci\u00f3n de viaje y comercio exterior", desc: "Preparaci\u00f3n y revisi\u00f3n de toda la documentaci\u00f3n requerida: facturas, packing lists, certificados de origen y permisos." },
      { title: "Asesoramiento en normativa vigente", desc: "Actualizaci\u00f3n permanente sobre cambios regulatorios, restricciones y oportunidades en comercio exterior argentino." },
    ],
    benefits: [
      { title: "Costos log\u00edsticos optimizados", desc: "Estrategias de consolidaci\u00f3n, selecci\u00f3n de rutas y negociaci\u00f3n que reducen el gasto log\u00edstico sin perder calidad de servicio." },
      { title: "Tiempos de entrega predecibles", desc: "Planificaci\u00f3n log\u00edstica que minimiza demoras y te permite comprometer plazos de entrega con confianza." },
      { title: "Cumplimiento aduanero garantizado", desc: "Documentaci\u00f3n correcta y clasificaci\u00f3n precisa que evitan retenciones, multas y demoras en aduana." },
    ],
    useCases: ["Importaci\u00f3n de insumos y productos terminados", "Exportaci\u00f3n de productos argentinos", "Log\u00edstica para e-commerce internacional", "Mudanzas y traslados internacionales"],
    category: "pf",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
