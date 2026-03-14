import FAQ from "@/components/sections/FAQ";
import CTASection from "@/components/sections/CTASection";

export default function FAQPage() {
  return (
    <>
      <section className="pt-16 pb-4 bg-muted/50 border-b border-border/30">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Preguntas Frecuentes</h1>
          <p className="text-lg text-muted-foreground">Resolvé tus dudas sobre nuestros servicios y soluciones.</p>
        </div>
      </section>
      <FAQ />
      <CTASection />
    </>
  );
}
