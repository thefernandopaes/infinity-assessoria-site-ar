import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Search, Settings, Rocket, HeadphonesIcon } from "lucide-react";

const STEPS = [
  {
    icon: Search,
    num: "01",
    title: "Diagnóstico",
    desc: "Analizamos tus procesos actuales e identificamos oportunidades de automatización e integración.",
  },
  {
    icon: Settings,
    num: "02",
    title: "Configuración",
    desc: "Implementamos las soluciones a medida para tu operación, con pruebas y validaciones.",
  },
  {
    icon: Rocket,
    num: "03",
    title: "Activación",
    desc: "Ponemos todo en producción con acompañamiento dedicado y capacitación del equipo.",
  },
  {
    icon: HeadphonesIcon,
    num: "04",
    title: "Soporte Continuo",
    desc: "Monitoreo continuo y optimizaciones constantes para la máxima eficiencia operativa.",
  },
];

export default function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`max-w-2xl mb-16 ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}>
          <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Proceso</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4">
            Del diagnóstico a la operación
          </h2>
          <p className="text-muted-foreground">
            Un proceso estructurado para garantizar que cada etapa entregue valor real.
          </p>
        </div>

        {/* Vertical timeline */}
        <div className="max-w-3xl">
          {STEPS.map(({ icon: Icon, num, title, desc }, i) => (
            <div
              key={num}
              className={`relative flex gap-6 ${i < STEPS.length - 1 ? "pb-12" : ""} ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Timeline line */}
              {i < STEPS.length - 1 && (
                <div className="absolute left-6 top-14 bottom-0 w-px bg-border" />
              )}

              {/* Step number + icon */}
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                  <Icon size={20} className="text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="pt-1">
                <span className="text-xs font-mono text-primary font-semibold">{num}</span>
                <h3 className="font-heading font-semibold text-xl text-foreground mt-1 mb-2">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
