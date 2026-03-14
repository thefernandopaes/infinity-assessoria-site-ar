import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Hero() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="relative overflow-hidden min-h-[90vh] flex items-center bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Copy */}
          <div className={`space-y-8 ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight text-foreground">
              Toda tu operación conectada en una{" "}
              <span className="text-primary">única plataforma</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed">
              Automatización de flujos, integración de sistemas y gestión transaccional
              para empresas que necesitan eficiencia operativa real.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/contato">
                <Button size="lg" className="rounded-full gradient-primary border-0 text-primary-foreground hover:opacity-90 transition-opacity gap-2 px-8">
                  Hablá con un Especialista <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/servicos">
                <Button size="lg" variant="outline" className="rounded-full gap-2 px-8">
                  Conocer Soluciones
                </Button>
              </Link>
            </div>
          </div>

          {/* Right — Integration diagram */}
          <div className={`relative ${isVisible ? "animate-scale-in" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            <PlatformVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function PlatformVisual() {
  const inputs = [
    { label: "ERP", sub: "Gestión empresarial" },
    { label: "CRM", sub: "Relacionamiento" },
    { label: "Gateway", sub: "Pagos" },
  ];

  const outputs = [
    { label: "Dashboards", sub: "Visión en tiempo real" },
    { label: "Relatórios", sub: "Insights y BI" },
  ];

  return (
    <div className="bg-card rounded-2xl border shadow-2xl shadow-primary/5 overflow-hidden">
      {/* Window chrome */}
      <div className="px-5 py-3 border-b bg-muted/50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-5 h-5 rounded gradient-primary flex items-center justify-center">
            <span className="text-[9px] font-bold text-primary-foreground">∞</span>
          </span>
          <span className="text-xs font-medium text-foreground">Infinity Platform</span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-border" />
          <div className="w-2 h-2 rounded-full bg-border" />
          <div className="w-2 h-2 rounded-full bg-border" />
        </div>
      </div>

      <div className="p-6 space-y-5">
        {/* Input systems */}
        <div className="space-y-2">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
            Sistemas conectados
          </p>
          <div className="grid grid-cols-3 gap-2">
            {inputs.map(({ label, sub }) => (
              <div key={label} className="p-3 rounded-lg border border-dashed border-primary/20 bg-primary/[0.03]">
                <p className="text-xs font-semibold text-foreground font-mono">{label}</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Flow connector */}
        <div className="flex items-center gap-3">
          <div className="flex-1 border-t border-dashed border-primary/20" />
          <div className="px-4 py-1.5 rounded-full gradient-primary shrink-0">
            <span className="text-[11px] font-semibold text-primary-foreground">
              Automatización &amp; Integración
            </span>
          </div>
          <div className="flex-1 border-t border-dashed border-primary/20" />
        </div>

        {/* Output results */}
        <div className="space-y-2">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
            Resultados
          </p>
          <div className="grid grid-cols-3 gap-2">
            {outputs.map(({ label, sub }) => (
              <div key={label} className="p-3 rounded-lg border bg-card">
                <p className="text-xs font-semibold text-foreground font-mono">{label}</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
