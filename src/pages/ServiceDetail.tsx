import { useParams, Link } from "react-router-dom";
import { getServiceBySlug, SERVICES } from "@/data/services";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowLeft, ArrowRight, CheckCircle2, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/sections/CTASection";
import NotFound from "./NotFound";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;
  const { ref: heroRef, isVisible: heroVis } = useScrollAnimation();
  const { ref: aboutRef, isVisible: aboutVis } = useScrollAnimation();
  const { ref: featRef, isVisible: featVis } = useScrollAnimation();
  const { ref: benefitRef, isVisible: benefitVis } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVis } = useScrollAnimation();
  const { ref: otherRef, isVisible: otherVis } = useScrollAnimation();

  if (!service) return <NotFound />;

  const Icon = service.icon;
  const others = SERVICES.filter((s) => s.slug !== slug).slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="pt-16 pb-20 gradient-dark">
        <div className={`container mx-auto px-4 lg:px-8 max-w-4xl ${heroVis ? "animate-fade-in" : "opacity-0"}`}>
          <Link to="/servicos" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white/80 mb-8 transition-colors">
            <ArrowLeft size={16} /> Volver a Servicios
          </Link>
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Icon size={28} className="text-primary" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">{service.title}</h1>
              <p className="text-lg text-white/70 leading-relaxed max-w-2xl">{service.desc}</p>
              <div className="flex flex-wrap gap-2 mt-6">
                {service.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs font-medium">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About / Long description */}
      <section ref={aboutRef} className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className={`grid lg:grid-cols-5 gap-10 items-start ${aboutVis ? "animate-fade-in" : "opacity-0"}`}>
            <div className="lg:col-span-3">
              <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Sobre el servicio</p>
              <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-6">
                Cómo funciona
              </h2>
              <p className="text-muted-foreground leading-relaxed text-[15px]">
                {service.longDesc}
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="rounded-2xl bg-muted/50 border p-6 space-y-4">
                <h3 className="font-heading font-bold text-foreground text-sm uppercase tracking-wider">Aplicaciones</h3>
                {service.useCases.map((uc) => (
                  <div key={uc} className="flex items-start gap-3">
                    <Target size={14} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{uc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section ref={benefitRef} className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className={`mb-12 ${benefitVis ? "animate-fade-in-left" : "opacity-0"}`}>
            <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Beneficios</p>
            <h2 className="text-2xl sm:text-3xl font-black text-foreground">Por qué elegir esta solución</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {service.benefits.map((benefit, i) => (
              <div
                key={benefit.title}
                className={`bg-card rounded-xl border p-6 ${benefitVis ? "animate-fade-in" : "opacity-0"}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <span className="text-4xl font-mono font-black text-primary/15 block mb-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section ref={featRef} className="py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className={`mb-12 ${featVis ? "animate-fade-in-left" : "opacity-0"}`}>
            <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Funcionalidades</p>
            <h2 className="text-2xl sm:text-3xl font-black text-foreground">Qué incluye</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {service.features.map((feat, i) => (
              <div
                key={feat.title}
                className={`flex items-start gap-4 p-5 rounded-xl border bg-card transition-all hover:shadow-md ${featVis ? "animate-fade-in" : "opacity-0"}`}
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <CheckCircle2 size={20} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-foreground font-semibold text-sm mb-1">{feat.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inline CTA */}
      <section ref={ctaRef} className="py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className={`rounded-2xl gradient-primary p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 ${ctaVis ? "animate-scale-in" : "opacity-0"}`}>
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-primary-foreground mb-2">
                ¿Querés saber más sobre {service.title}?
              </h3>
              <p className="text-primary-foreground/70">
                Nuestro equipo puede mostrarte cómo esta solución se aplica a tu negocio.
              </p>
            </div>
            <Link to="/contato" className="flex-shrink-0">
              <Button size="lg" className="rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 gap-2 px-8 font-semibold">
                Contactanos <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section ref={otherRef} className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className={`text-center mb-10 ${otherVis ? "animate-fade-in" : "opacity-0"}`}>
            <h2 className="text-2xl font-black text-foreground">Otros Servicios</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {others.map(({ icon: OIcon, title, slug: s, shortDesc }, i) => (
              <Link
                key={s}
                to={`/servicos/${s}`}
                className={`group bg-card rounded-xl border p-5 hover:shadow-lg hover:-translate-y-1 transition-all ${otherVis ? "animate-fade-in" : "opacity-0"}`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors">
                  <OIcon size={18} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground text-sm mb-1">{title}</h3>
                <p className="text-xs text-muted-foreground">{shortDesc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
