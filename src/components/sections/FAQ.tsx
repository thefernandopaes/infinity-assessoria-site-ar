import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FAQ_ITEMS = [
  {
    q: "¿Cuánto tiempo lleva implementar las soluciones?",
    a: "El plazo varía según la complejidad. Proyectos simples quedan listos en 2-4 semanas. Integraciones más complejas pueden llevar de 4-8 semanas, siempre con acompañamiento dedicado.",
  },
  {
    q: "¿Cómo funciona el soporte técnico?",
    a: "Ofrecemos soporte 24/7 para clientes de los planes Growth y Enterprise. El plan Starter cuenta con soporte en horario comercial por chat y email.",
  },
  {
    q: "¿Es posible personalizar las soluciones?",
    a: "Sí. Todas nuestras soluciones se configuran a medida para atender las necesidades específicas de cada operación.",
  },
  {
    q: "¿Qué sistemas integran?",
    a: "Trabajamos con las principales plataformas del mercado: ERPs, CRMs, pasarelas de pago, sistemas legacy y APIs personalizadas.",
  },
  {
    q: "¿Existe contrato de permanencia?",
    a: "No. Nuestros planes son mensuales y podés cancelar en cualquier momento. Creemos que la calidad de nuestro servicio es lo que mantiene a nuestros clientes.",
  },
  {
    q: "¿Cómo se hace la migración de sistemas existentes?",
    a: "Realizamos un análisis completo de tu entorno actual, creamos un plan de migración detallado y ejecutamos la transición con cero downtime.",
  },
];

export default function FAQ() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">FAQ</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4">
            Preguntas Frecuentes
          </h2>
        </div>

        <Accordion type="single" collapsible className={`space-y-3 ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
          {FAQ_ITEMS.map(({ q, a }, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border px-6 data-[state=open]:shadow-md transition-shadow">
              <AccordionTrigger className="text-left font-heading font-medium hover:no-underline">
                {q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
