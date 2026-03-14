import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Plane, Globe, Calendar, CreditCard, BarChart3, Users } from "lucide-react";
import CTASection from "@/components/sections/CTASection";

const STEPS = [
  { icon: Globe, num: "01", title: "Gestión de Reservas", desc: "Plataforma unificada para gestionar reservas, disponibilidad y tarifas en tiempo real." },
  { icon: Calendar, num: "02", title: "Automatización de Operaciones", desc: "Flujos automatizados para check-in, check-out, gestión de agenda y comunicación con huéspedes." },
  { icon: CreditCard, num: "03", title: "Pagos Integrados", desc: "Procesamiento de pagos multimoneda con conciliación automática e informes financieros." },
  { icon: Users, num: "04", title: "CRM Turístico", desc: "Gestión de relaciones con clientes, programas de fidelización y comunicación personalizada." },
  { icon: BarChart3, num: "05", title: "Analytics y Revenue", desc: "Tableros con métricas de ocupación, ingresos y rendimiento por canal de distribución." },
  { icon: Plane, num: "06", title: "Integración con OTAs", desc: "Conexión con Booking, Expedia y otras plataformas de distribución turística." },
];

const INTEGRATIONS = ["Booking.com", "Expedia", "Airbnb", "TripAdvisor", "Google Hotels"];

export default function Turismo() {
  const { ref: heroRef, isVisible: heroVis } = useScrollAnimation();
  const { ref: stepRef, isVisible: stepVis } = useScrollAnimation();
  const { ref: intRef, isVisible: intVis } = useScrollAnimation();

  return (
    <>
      <section ref={heroRef} className="pt-16 pb-16 bg-muted/50 border-b border-border/30">
        <div className={`container mx-auto px-4 lg:px-8 text-center max-w-3xl ${heroVis ? "animate-fade-in" : "opacity-0"}`}>
          <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Sectores</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground mb-6">Turismo</h1>
          <p className="text-lg text-muted-foreground">
            Soluciones tecnológicas para el sector de turismo y hotelería, optimizando operaciones y la experiencia del cliente.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section ref={stepRef} className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className={`max-w-2xl mb-16 ${stepVis ? "animate-fade-in-left" : "opacity-0"}`}>
            <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Ecosistema</p>
            <h2 className="text-2xl sm:text-3xl font-black text-foreground">
              De la reserva a la posventa, todo conectado
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 max-w-5xl">
            {STEPS.map(({ icon: Icon, num, title, desc }, i) => (
              <div
                key={num}
                className={`relative ${stepVis ? "animate-fade-in" : "opacity-0"}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-primary-foreground" />
                  </div>
                  <span className="text-xs font-mono font-bold text-primary">{num}</span>
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations bar */}
      <section ref={intRef} className="py-16 gradient-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className={`text-center ${intVis ? "animate-fade-in" : "opacity-0"}`}>
            <p className="text-xs uppercase tracking-widest text-white/40 mb-6">
              Integración con las principales plataformas
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
              {INTEGRATIONS.map((name) => (
                <span
                  key={name}
                  className="text-base font-heading font-semibold text-white/25 select-none"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
