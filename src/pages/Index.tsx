import Hero from "@/components/sections/Hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import Stats from "@/components/sections/Stats";
import HowItWorks from "@/components/sections/HowItWorks";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";

const TICKER_ITEMS = [
  "Automatización Inteligente",
  "Gestión de Socios",
  "Operación Escalable",
  "Datos en Tiempo Real",
  "Gestión Transaccional",
  "Integración de Sistemas",
  "Reportes y BI",
];

const Index = () => {
  return (
    <>
      <Hero />

      {/* Ticker bar */}
      <section className="py-6">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="ticker-wrapper rounded-xl border border-border/40 bg-muted/30 py-4">
            <div className="ticker-track">
              {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
                <span key={i} className="flex items-center gap-6 px-6">
                  <span className="w-1 h-1 rounded-full bg-primary/60 flex-shrink-0" />
                  <span className="text-[13px] font-heading font-semibold uppercase tracking-widest text-muted-foreground/40 whitespace-nowrap">
                    {item}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServicesOverview />
      <Stats />
      <BeforeAfter />
      <HowItWorks />
      <Testimonials />
      <CTASection />
    </>
  );
};

export default Index;
