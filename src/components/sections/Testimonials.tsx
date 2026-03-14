import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { TrendingUp, ShieldCheck, Zap } from "lucide-react";

const RESULTS = [
  {
    icon: TrendingUp,
    num: "01",
    title: "Reducción de tiempo operativo",
    description:
      "Procesos que llevaban horas pasan a ejecutarse en minutos con automatización inteligente de punta a punta.",
  },
  {
    icon: ShieldCheck,
    num: "02",
    title: "Eliminación de errores manuales",
    description:
      "Flujos automatizados que garantizan consistencia, trazabilidad y precisión en cada etapa de la operación.",
  },
  {
    icon: Zap,
    num: "03",
    title: "Escalabilidad real",
    description:
      "Hacé crecer tu operación sin aumentar proporcionalmente el equipo o los costos. Tecnología que escala con tu negocio.",
  },
];

export default function Testimonials() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`text-center max-w-2xl mx-auto mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Resultados</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4">
            Resultados que entregamos
          </h2>
          <p className="text-muted-foreground">
            Tecnología aplicada para generar impacto real en la operación de nuestros clientes.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {RESULTS.map(({ icon: Icon, num, title, description }, i) => (
            <div
              key={title}
              className={`relative bg-card rounded-xl border-t-2 border-t-primary border-x border-b p-8 space-y-4 transition-all hover:shadow-lg hover:-translate-y-1 ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center">
                  <Icon size={20} className="text-primary-foreground" />
                </div>
                <span className="text-3xl font-mono font-black text-muted-foreground/15">{num}</span>
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
