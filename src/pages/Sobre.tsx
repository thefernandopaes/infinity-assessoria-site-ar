import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Target, Heart, Lightbulb, Shield, Users, Zap } from "lucide-react";
import CTASection from "@/components/sections/CTASection";

const VALUES = [
  { icon: Target, title: "Foco en el Cliente", desc: "Cada solución está diseñada para resolver problemas reales de tu negocio." },
  { icon: Heart, title: "Compromiso", desc: "Tratamos tu operación como si fuera la nuestra. Tu éxito es el nuestro." },
  { icon: Lightbulb, title: "Innovación", desc: "Buscamos constantemente nuevas tecnologías para entregar más valor." },
  { icon: Shield, title: "Seguridad", desc: "Tus datos y operaciones protegidos con los más altos estándares." },
  { icon: Users, title: "Alianza", desc: "Construimos relaciones a largo plazo basadas en la confianza." },
  { icon: Zap, title: "Agilidad", desc: "Respuestas rápidas e implementaciones eficientes para no frenar tu negocio." },
];

const CLIENTS = [
  { title: "Startups", desc: "Empresas en crecimiento que necesitan escalar operaciones rápidamente." },
  { title: "PyMEs", desc: "Negocios que buscan eficiencia operativa y reducción de costos." },
  { title: "Enterprises", desc: "Grandes operaciones que necesitan integraciones complejas y robustas." },
  { title: "Fintechs", desc: "Empresas de tecnología que necesitan infraestructura transaccional confiable." },
];

export default function Sobre() {
  const { ref: heroRef, isVisible: heroVis } = useScrollAnimation();
  const { ref: histRef, isVisible: histVis } = useScrollAnimation();
  const { ref: valRef, isVisible: valVis } = useScrollAnimation();
  const { ref: cliRef, isVisible: cliVis } = useScrollAnimation();

  return (
    <>
      {/* Page Header */}
      <section ref={heroRef} className="pt-16 pb-12 bg-muted/50">
        <div className={`container mx-auto px-4 lg:px-8 text-center max-w-3xl ${heroVis ? "animate-fade-in" : "opacity-0"}`}>
          <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Sobre Nosotros</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground mb-6">
            Tecnología con propósito
          </h1>
          <p className="text-lg text-muted-foreground">
            Nacimos de la convicción de que toda empresa merece acceso a tecnología de punta para operar con máxima eficiencia.
          </p>
        </div>
      </section>

      {/* Historia */}
      <section ref={histRef} className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`${histVis ? "animate-fade-in-left" : "opacity-0"}`}>
              <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-6">Nuestra Historia</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Infinity Assessoria fue fundada por profesionales con amplia experiencia en tecnología y gestión operativa, que identificaron una brecha en el mercado: las empresas necesitaban soluciones tecnológicas accesibles y eficientes.
                </p>
                <p>
                  Desde entonces, ayudamos a cientos de empresas a automatizar procesos, integrar sistemas y escalar operaciones — siempre con foco en resultados medibles y tecnología de punta.
                </p>
                <p>
                  Hoy, somos referentes en automatización de flujos y gestión transaccional, atendiendo empresas de todos los tamaños con soluciones personalizadas.
                </p>
              </div>
            </div>
            <div className={`flex items-center justify-center ${histVis ? "animate-fade-in-right" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 rounded-3xl gradient-primary opacity-10" />
                <div className="absolute inset-4 rounded-2xl border-2 border-primary/20 flex items-center justify-center">
                  <img src="/logo.png" alt="Infinity" className="w-24 h-24 object-contain opacity-30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section ref={valRef} className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className={`text-center max-w-2xl mx-auto mb-16 ${valVis ? "animate-fade-in" : "opacity-0"}`}>
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4">Nuestros Valores</h2>
            <p className="text-muted-foreground">Los principios que guían cada decisión y entrega.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className={`bg-card rounded-xl border-t-2 border-t-primary border-x border-b p-6 transition-all hover:shadow-lg hover:-translate-y-1 ${valVis ? "animate-fade-in" : "opacity-0"}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-11 h-11 rounded-lg gradient-primary flex items-center justify-center mb-4">
                  <Icon size={20} className="text-primary-foreground" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perfil de Clientes */}
      <section ref={cliRef} className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className={`text-center max-w-2xl mx-auto mb-16 ${cliVis ? "animate-fade-in" : "opacity-0"}`}>
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4">¿Para quién es Infinity?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CLIENTS.map(({ title, desc }, i) => (
              <div
                key={title}
                className={`p-6 rounded-xl border-l-2 border-l-primary border-y border-r bg-card hover:shadow-lg hover:-translate-y-1 transition-all ${cliVis ? "animate-fade-in" : "opacity-0"}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <h3 className="font-mono font-bold text-primary text-sm mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
