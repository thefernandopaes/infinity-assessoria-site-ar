import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap, BookOpen, CreditCard, Users, BarChart3, Shield } from "lucide-react";
import CTASection from "@/components/sections/CTASection";

const FEATURED = {
  icon: BookOpen,
  title: "Gestión Académica Integrada",
  desc: "Plataforma unificada que conecta inscripciones, calificaciones, asistencia, finanzas y comunicación en un único sistema. Eliminá planillas y procesos manuales con automatización inteligente.",
};

const FEATURES = [
  { icon: CreditCard, title: "Automatización Financiera", desc: "Gestión automatizada de cuotas, facturación y cobranzas." },
  { icon: Users, title: "Portal del Alumno", desc: "Entorno digital completo para alumnos, padres y responsables." },
  { icon: BarChart3, title: "Reportes Educativos", desc: "Tableros con indicadores de rendimiento y gestión institucional." },
  { icon: Shield, title: "Compliance Educativo", desc: "Cumplimiento automatizado con las regulaciones del Ministerio de Educación." },
  { icon: GraduationCap, title: "Integración de Sistemas", desc: "Conexión entre ERPs académicos, plataformas de educación a distancia y sistemas legados." },
];

const BENEFITS = [
  { num: "01", text: "Reducción de hasta el 60% en el tiempo de procesos administrativos" },
  { num: "02", text: "Eliminación de errores en el registro de calificaciones y asistencia" },
  { num: "03", text: "Visibilidad total para directivos, docentes y familias" },
];

export default function Estudantil() {
  const { ref: heroRef, isVisible: heroVis } = useScrollAnimation();
  const { ref: featRef, isVisible: featVis } = useScrollAnimation();
  const { ref: benRef, isVisible: benVis } = useScrollAnimation();

  const FeaturedIcon = FEATURED.icon;

  return (
    <>
      <section ref={heroRef} className="pt-16 pb-16 bg-muted/50 border-b border-border/30">
        <div className={`container mx-auto px-4 lg:px-8 text-center max-w-3xl ${heroVis ? "animate-fade-in" : "opacity-0"}`}>
          <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Sectores</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground mb-6">Estudiantil</h1>
          <p className="text-lg text-muted-foreground">
            Tecnología para instituciones educativas que buscan modernizar la gestión académica y administrativa.
          </p>
        </div>
      </section>

      {/* Featured + grid */}
      <section ref={featRef} className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Featured large card */}
            <div className={`lg:row-span-2 gradient-dark rounded-2xl p-8 flex flex-col justify-between ${featVis ? "animate-scale-in" : "opacity-0"}`}>
              <div>
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                  <FeaturedIcon size={26} className="text-primary" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-white mb-4">{FEATURED.title}</h3>
                <p className="text-white/70 leading-relaxed">{FEATURED.desc}</p>
              </div>
            </div>

            {/* Smaller cards */}
            {FEATURES.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className={`bg-card rounded-xl border p-6 transition-all hover:shadow-lg hover:-translate-y-1 ${featVis ? "animate-fade-in" : "opacity-0"}`}
                style={{ animationDelay: `${(i + 1) * 0.08}s` }}
              >
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-3">
                  <Icon size={18} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits — numbered list */}
      <section ref={benRef} className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <div className={`text-center mb-12 ${benVis ? "animate-fade-in" : "opacity-0"}`}>
            <h2 className="text-2xl sm:text-3xl font-black text-foreground">Resultados para tu institución</h2>
          </div>
          <div className="space-y-4">
            {BENEFITS.map(({ num, text }, i) => (
              <div
                key={num}
                className={`flex items-center gap-5 bg-card rounded-xl border p-5 ${benVis ? "animate-fade-in" : "opacity-0"}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <span className="text-3xl font-mono font-black text-primary/20 flex-shrink-0">{num}</span>
                <p className="text-foreground font-medium">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
