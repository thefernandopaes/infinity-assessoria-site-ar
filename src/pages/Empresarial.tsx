import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SERVICES } from "@/data/services";
import { ArrowRight, TrendingDown, Eye, FileX, Lock } from "lucide-react";
import CTASection from "@/components/sections/CTASection";

const PJ_SERVICES = SERVICES.filter((s) => s.category === "pj");

const PAIN_POINTS = [
  { icon: TrendingDown, text: "Procesos manuales que consumen tiempo y generan retrabajo" },
  { icon: Eye, text: "Falta de visibilidad sobre la operación en tiempo real" },
  { icon: FileX, text: "Sistemas desconectados que crean silos de información" },
  { icon: Lock, text: "Dificultad para escalar sin multiplicar costos operacionales" },
];

const RESULTS = [
  { num: "01", text: "Reducción de hasta 80% en el tiempo de procesos operacionales" },
  { num: "02", text: "Visibilidad total con dashboards y alertas en tiempo real" },
  { num: "03", text: "Sistemas integrados en un ecosistema unificado y confiable" },
];

export default function Empresarial() {
  const { ref: heroRef, isVisible: heroVis } = useScrollAnimation();
  const { ref: painRef, isVisible: painVis } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVis } = useScrollAnimation();
  const { ref: resultRef, isVisible: resultVis } = useScrollAnimation();

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="pt-16 pb-16 gradient-dark">
        <div className={`container mx-auto px-4 lg:px-8 max-w-3xl text-center ${heroVis ? "animate-fade-in" : "opacity-0"}`}>
          <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Empresarial PJ</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Tecnología para escalar tu operación
          </h1>
          <p className="text-lg text-white/70 leading-relaxed">
            Automatización, integración e inteligencia operacional para empresas que necesitan crecer con eficiencia, control y previsibilidad.
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
                Crecer sin perder el control
              </h2>
              <div className="space-y-4">
                {PAIN_POINTS.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-start gap-3">
                    <div className="mt-0.5 w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-destructive" />
                    </div>
                    <span className="text-muted-foreground">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={`${painVis ? "animate-fade-in-right" : "opacity-0"}`} style={{ animationDelay: "0.15s" }}>
              <div className="rounded-2xl gradient-primary p-8">
                <p className="text-sm font-mono font-semibold text-primary-foreground/70 uppercase tracking-wider mb-4">
                  Nuestra solución
                </p>
                <p className="text-primary-foreground text-lg leading-relaxed">
                  Un ecosistema completo de tecnología que automatiza procesos, integra sistemas y entrega visibilidad total de la operación — para que tu empresa escale sin multiplicar costos.
                </p>
                <Link to="/contato" className="inline-flex items-center gap-2 mt-6 text-primary-foreground font-medium text-sm hover:gap-3 transition-all">
                  Hablá con un especialista <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section ref={gridRef} className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className={`max-w-2xl mb-12 ${gridVis ? "animate-fade-in-left" : "opacity-0"}`}>
            <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Soluciones</p>
            <h2 className="text-2xl sm:text-3xl font-black text-foreground">
              Todo lo que tu empresa necesita para operar mejor
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
            {PJ_SERVICES.map(({ icon: Icon, title, shortDesc, slug, tags }, i) => (
              <Link
                key={slug}
                to={`/servicos/${slug}`}
                className={`group bg-card rounded-xl border-t-2 border-t-primary border-x border-b p-6 transition-all hover:shadow-lg hover:-translate-y-1 ${gridVis ? "animate-fade-in" : "opacity-0"}`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="w-11 h-11 rounded-lg gradient-primary flex items-center justify-center mb-4">
                  <Icon size={20} className="text-primary-foreground" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{shortDesc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded-full bg-accent text-accent-foreground text-[11px] font-medium">{tag}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section ref={resultRef} className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <div className={`text-center mb-12 ${resultVis ? "animate-fade-in" : "opacity-0"}`}>
            <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Resultados</p>
            <h2 className="text-2xl sm:text-3xl font-black text-foreground">Lo que cambia en tu operación</h2>
          </div>
          <div className="space-y-4">
            {RESULTS.map(({ num, text }, i) => (
              <div
                key={num}
                className={`flex items-center gap-5 bg-card rounded-xl border p-5 ${resultVis ? "animate-fade-in" : "opacity-0"}`}
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
