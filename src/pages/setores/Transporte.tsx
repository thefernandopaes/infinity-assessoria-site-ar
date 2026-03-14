import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Truck, Route, Package, Clock, BarChart3, Shield, ArrowRight } from "lucide-react";
import CTASection from "@/components/sections/CTASection";

const FEATURES = [
  { icon: Route, title: "Ruteo Inteligente", desc: "Optimización automática de rutas para reducir costos y plazos de entrega." },
  { icon: Package, title: "Seguimiento en Tiempo Real", desc: "Seguí cada operación con visibilidad total de la cadena logística." },
  { icon: Clock, title: "Automatización de Procesos", desc: "Eliminá tareas manuales con flujos automatizados de punta a punta." },
  { icon: BarChart3, title: "Dashboards Operativos", desc: "Tableros con KPIs de rendimiento, costos y eficiencia logística." },
  { icon: Shield, title: "Compliance y Documentación", desc: "Gestión automatizada de documentos fiscales y regulatorios." },
  { icon: Truck, title: "Gestión de Flota", desc: "Control completo de vehículos, choferes y mantenimientos programados." },
];

const PAIN_POINTS = [
  "Costos logísticos impredecibles",
  "Falta de visibilidad de las operaciones",
  "Procesos manuales de documentación",
  "Dificultad para escalar la operación",
];

export default function Transporte() {
  const { ref: heroRef, isVisible: heroVis } = useScrollAnimation();
  const { ref: featRef, isVisible: featVis } = useScrollAnimation();
  const { ref: painRef, isVisible: painVis } = useScrollAnimation();

  return (
    <>
      <section ref={heroRef} className="pt-16 pb-16 gradient-dark">
        <div className={`container mx-auto px-4 lg:px-8 max-w-3xl text-center ${heroVis ? "animate-fade-in" : "opacity-0"}`}>
          <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Sectores</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">Transporte y Logística</h1>
          <p className="text-lg text-white/70">
            Soluciones tecnológicas para optimizar operaciones logísticas, reducir costos y garantizar eficiencia en toda la cadena de transporte.
          </p>
        </div>
      </section>

      {/* Pain points + solution */}
      <section ref={painRef} className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
            <div className={`${painVis ? "animate-fade-in-left" : "opacity-0"}`}>
              <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">El desafío</p>
              <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-6">
                Las operaciones logísticas exigen precisión
              </h2>
              <ul className="space-y-3">
                {PAIN_POINTS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-destructive flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`${painVis ? "animate-fade-in-right" : "opacity-0"}`} style={{ animationDelay: "0.15s" }}>
              <div className="rounded-2xl gradient-primary p-8">
                <p className="text-sm font-mono font-semibold text-primary-foreground/70 uppercase tracking-wider mb-4">
                  Nuestra solución
                </p>
                <p className="text-primary-foreground text-lg leading-relaxed">
                  Plataforma completa que conecta ruteo, seguimiento, compliance y gestión de flota en un único ecosistema automatizado.
                </p>
                <Link to="/contato" className="inline-flex items-center gap-2 mt-6 text-primary-foreground font-medium text-sm hover:gap-3 transition-all">
                  Hablá con un especialista <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features — alternating rows */}
      <section ref={featRef} className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className={`max-w-2xl mb-12 ${featVis ? "animate-fade-in-left" : "opacity-0"}`}>
            <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Funcionalidades</p>
            <h2 className="text-2xl sm:text-3xl font-black text-foreground">
              Todo lo que tu operación necesita
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className={`bg-card rounded-xl border-t-2 border-t-primary border-x border-b p-6 transition-all hover:shadow-lg hover:-translate-y-1 ${featVis ? "animate-fade-in" : "opacity-0"}`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="w-11 h-11 rounded-lg gradient-primary flex items-center justify-center mb-4">
                  <Icon size={20} className="text-primary-foreground" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
