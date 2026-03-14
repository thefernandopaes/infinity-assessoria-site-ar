import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { X, ArrowRight } from "lucide-react";

const WITHOUT_ITEMS = [
  "Procesos manuales y repetitivos",
  "Sistemas desconectados entre sí",
  "Datos dispersos en planillas",
  "Errores humanos frecuentes",
  "Retrabajo y lentitud operativa",
];

const WITH_ITEMS = [
  "Flujos automatizados end-to-end",
  "Sistemas integrados en tiempo real",
  "Datos centralizados y accesibles",
  "Precisión y trazabilidad total",
  "Operación escalable y eficiente",
];

export default function BeforeAfter() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`max-w-2xl mx-auto text-center mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Transformación</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4">
            Antes y después de Infinity
          </h2>
          <p className="text-muted-foreground">
            Mirá cómo la tecnología transforma la realidad operativa de tu empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Before */}
          <div
            className={`rounded-2xl border border-destructive/20 bg-destructive/[0.03] p-8 ${
              isVisible ? "animate-fade-in-left" : "opacity-0"
            }`}
          >
            <p className="text-xs font-mono font-semibold text-destructive uppercase tracking-wider mb-6">
              Sin Infinity
            </p>
            <ul className="space-y-4">
              {WITHOUT_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X size={16} className="text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div
            className={`rounded-2xl border border-primary/20 bg-primary/[0.03] p-8 ${
              isVisible ? "animate-fade-in-right" : "opacity-0"
            }`}
            style={{ animationDelay: "0.15s" }}
          >
            <p className="text-xs font-mono font-semibold text-primary uppercase tracking-wider mb-6">
              Con Infinity
            </p>
            <ul className="space-y-4">
              {WITH_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <ArrowRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
