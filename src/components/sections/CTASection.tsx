import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function CTASection({
  title = "¿Listo para transformar tu operación?",
  description = "Hablá con nuestros especialistas y descubrí cómo la tecnología puede escalar tu negocio.",
  buttonText = "Hablá con un Especialista",
  buttonLink = "/contato",
}: CTASectionProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 gradient-primary">
      <div className={`container mx-auto px-4 lg:px-8 text-center max-w-3xl ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary-foreground mb-6">
          {title}
        </h2>
        <p className="text-lg text-primary-foreground/80 mb-10">
          {description}
        </p>
        <Link to={buttonLink}>
          <Button
            size="lg"
            className="rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 gap-2 px-8 font-semibold"
          >
            {buttonText} <ArrowRight size={18} />
          </Button>
        </Link>
      </div>
    </section>
  );
}
