import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SERVICES } from "@/data/services";
import CTASection from "@/components/sections/CTASection";

const PF_SERVICES = SERVICES.filter((s) => s.category === "pf");

export default function Pessoal() {
  const { ref: heroRef, isVisible: heroVis } = useScrollAnimation();

  return (
    <>
      <section ref={heroRef} className="pt-16 pb-12 bg-muted/50 border-b border-border/30">
        <div className={`container mx-auto px-4 lg:px-8 text-center max-w-3xl ${heroVis ? "animate-fade-in" : "opacity-0"}`}>
          <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Personal PF</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground mb-6">
            Soluciones personalizadas
          </h1>
          <p className="text-lg text-muted-foreground">
            Servicios dise&ntilde;ados para personas que buscan asesoramiento especializado y soluciones a medida.
          </p>
        </div>
      </section>

      {PF_SERVICES.map((service, i) => (
        <ServiceSection key={service.slug} service={service} index={i} />
      ))}

      <CTASection />
    </>
  );
}

function ServiceSection({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation();
  const Icon = service.icon;
  const isReversed = index % 2 !== 0;

  return (
    <section ref={ref} className={`py-20 ${index % 2 === 0 ? "" : "bg-muted/50"} border-b border-border/30`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className={`space-y-6 ${isReversed ? "lg:order-2" : ""} ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center">
              <Icon size={28} className="text-primary" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-foreground">{service.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">{tag}</span>
              ))}
            </div>
            <Link to={`/servicos/${service.slug}`} className="inline-block text-primary font-medium hover:underline text-sm">
              Saber m&aacute;s &rarr;
            </Link>
          </div>

          <div className={`${isReversed ? "lg:order-1" : ""} ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            <div className="bg-card rounded-2xl border p-6 space-y-4">
              <h3 className="font-heading font-semibold text-foreground">Qu&eacute; incluye</h3>
              <ul className="space-y-3">
                {service.features.map((feat) => (
                  <li key={feat.title} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                    </span>
                    {feat.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
