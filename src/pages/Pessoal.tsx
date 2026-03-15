import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SERVICES } from "@/data/services";
import { ArrowRight } from "lucide-react";
import CTASection from "@/components/sections/CTASection";

const PF_SERVICES = SERVICES.filter((s) => s.category === "pf");

const BENEFITS = [
  { num: "01", text: "Acompañamiento personalizado de principio a fin en cada proceso" },
  { num: "02", text: "Equipo con experiencia real en trámites y operaciones internacionales" },
  { num: "03", text: "Soluciones digitales que simplifican la gestión de tu negocio" },
];

export default function Pessoal() {
  const { ref: heroRef, isVisible: heroVis } = useScrollAnimation();
  const { ref: featRef, isVisible: featVis } = useScrollAnimation();
  const { ref: detailRef, isVisible: detailVis } = useScrollAnimation();
  const { ref: benRef, isVisible: benVis } = useScrollAnimation();

  const featured = PF_SERVICES[0];
  const others = PF_SERVICES.slice(1);
  const FeaturedIcon = featured.icon;

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="pt-16 pb-16 gradient-dark">
        <div className={`container mx-auto px-4 lg:px-8 max-w-3xl text-center ${heroVis ? "animate-fade-in" : "opacity-0"}`}>
          <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Personal PF</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Asesoría a medida para vos
          </h1>
          <p className="text-lg text-white/70 leading-relaxed">
            Servicios especializados para quienes buscan apoyo profesional en productos digitales, trámites internacionales y logística.
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
                <h3 className="font-heading font-bold text-2xl text-white mb-4">{featured.title}</h3>
                <p className="text-white/70 leading-relaxed mb-4">{featured.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {featured.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-full bg-white/10 text-white/60 text-xs font-medium">{tag}</span>
                  ))}
                </div>
              </div>
              <Link to={`/servicos/${featured.slug}`} className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all">
                Conocé más <ArrowRight size={16} />
              </Link>
            </div>

            {/* Feature cards from featured service */}
            {featured.features.slice(0, 4).map(({ title, desc }, i) => (
              <div
                key={title}
                className={`bg-card rounded-xl border p-6 transition-all hover:shadow-lg hover:-translate-y-1 ${featVis ? "animate-fade-in" : "opacity-0"}`}
                style={{ animationDelay: `${(i + 1) * 0.08}s` }}
              >
                <span className="text-2xl font-mono font-black text-primary/15 block mb-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other services — detailed steps */}
      <section ref={detailRef} className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className={`max-w-2xl mb-14 ${detailVis ? "animate-fade-in-left" : "opacity-0"}`}>
            <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Más servicios</p>
            <h2 className="text-2xl sm:text-3xl font-black text-foreground">
              Asesoría especializada para cada necesidad
            </h2>
          </div>

          <div className="space-y-8 max-w-5xl">
            {others.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.slug}
                  className={`grid lg:grid-cols-5 gap-8 items-start bg-card rounded-2xl border p-8 transition-all hover:shadow-md ${detailVis ? "animate-fade-in" : "opacity-0"}`}
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <div className="lg:col-span-3 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                        <Icon size={22} className="text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-xl text-foreground">{service.title}</h3>
                        <div className="flex flex-wrap gap-1.5 mt-1">
                          {service.tags.map((tag) => (
                            <span key={tag} className="px-2 py-0.5 rounded-full bg-accent text-accent-foreground text-[11px] font-medium">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                    <Link to={`/servicos/${service.slug}`} className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all">
                      Ver detalles completos <ArrowRight size={16} />
                    </Link>
                  </div>
                  <div className="lg:col-span-2">
                    <div className="rounded-xl bg-muted/50 border p-5 space-y-3">
                      <h4 className="font-heading font-bold text-foreground text-xs uppercase tracking-wider">Principales funcionalidades</h4>
                      {service.features.slice(0, 4).map(({ title }) => (
                        <div key={title} className="flex items-start gap-2.5">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section ref={benRef} className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <div className={`text-center mb-12 ${benVis ? "animate-fade-in" : "opacity-0"}`}>
            <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Por qué Infinity</p>
            <h2 className="text-2xl sm:text-3xl font-black text-foreground">Lo que nos diferencia</h2>
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
