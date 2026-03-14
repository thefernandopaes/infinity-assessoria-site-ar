import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SERVICES } from "@/data/services";
import { ArrowRight } from "lucide-react";

export default function ServicesOverview() {
  const { ref, isVisible } = useScrollAnimation();
  const featured = SERVICES[0];
  const FeaturedIcon = featured.icon;
  const rest = SERVICES.slice(1, 5);

  return (
    <section ref={ref} className="py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`max-w-2xl mb-16 ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}>
          <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Servicios</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4">
            Soluciones completas para tu operación
          </h2>
          <p className="text-lg text-muted-foreground">
            Tecnología de punta para automatizar, integrar y escalar cada aspecto de tu negocio.
          </p>
        </div>

        {/* Asymmetric grid: 1 large featured + 4 smaller */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Featured card — spans 2 rows */}
          <Link
            to={`/servicos/${featured.slug}`}
            className={`group lg:row-span-2 gradient-dark rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl ${
              isVisible ? "animate-scale-in" : "opacity-0"
            }`}
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                <FeaturedIcon size={26} className="text-primary" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-white mb-3">{featured.title}</h3>
              <p className="text-white/70 leading-relaxed mb-6">{featured.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {featured.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
              Conocé más <ArrowRight size={16} />
            </span>
          </Link>

          {/* 4 smaller cards */}
          {rest.map(({ icon: Icon, title, shortDesc, slug }, i) => (
            <Link
              key={slug}
              to={`/servicos/${slug}`}
              className={`group bg-card rounded-xl border p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/20 ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${(i + 1) * 0.1}s` }}
            >
              <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <Icon size={20} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{shortDesc}</p>
            </Link>
          ))}
        </div>

        <div className={`mt-10 ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "0.5s" }}>
          <Link to="/servicos" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
            Ver todos los servicios <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
