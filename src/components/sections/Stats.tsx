import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Clock, GitMerge, ShieldCheck, Headphones } from "lucide-react";

const DIFFERENTIALS = [
  {
    icon: Clock,
    title: "Operación continua",
    desc: "Automatizaciones que funcionan las 24 horas, los 7 días de la semana, sin intervención manual.",
  },
  {
    icon: GitMerge,
    title: "Integración total",
    desc: "Todos tus sistemas conectados en un ecosistema unificado y eficiente.",
  },
  {
    icon: ShieldCheck,
    title: "Cumplimiento garantizado",
    desc: "Procesos en cumplimiento con las regulaciones vigentes de forma automatizada.",
  },
  {
    icon: Headphones,
    title: "Soporte dedicado",
    desc: "Acompañamiento especializado desde el diagnóstico hasta la operación.",
  },
];

export default function Stats() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 gradient-dark">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIFFERENTIALS.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`rounded-xl border border-white/10 bg-white/[0.04] p-6 space-y-3 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-11 h-11 rounded-lg bg-primary/20 flex items-center justify-center">
                <Icon size={20} className="text-primary" />
              </div>
              <h3 className="text-lg font-heading font-bold text-white">
                {title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
