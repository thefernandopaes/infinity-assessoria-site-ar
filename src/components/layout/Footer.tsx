import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";
import { SERVICES } from "@/data/services";

const SECTORS = [
  { label: "Transporte y Logística", to: "/setores/transporte" },
  { label: "Estudiantil", to: "/setores/estudantil" },
  { label: "Turismo", to: "/setores/turismo" },
];

export default function Footer() {
  return (
    <footer className="gradient-dark text-white">
      <div className="container mx-auto px-4 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Marca */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-2.5 font-heading text-xl font-bold">
              <img src="/logo.png" alt="Infinity" className="h-8 w-8 object-contain" />
              Infinity
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Tecnología y automatización para transformar la gestión de tu negocio con eficiencia y escala.
            </p>
            <div className="flex items-center gap-4 pt-1">
              <a href="https://www.linkedin.com/company/infinity-assessoria/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/8 hover:bg-white/15 flex items-center justify-center transition-colors" aria-label="LinkedIn">
                <svg className="w-4 h-4 text-white/70" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          {/* Navegación */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-semibold mb-4 text-xs uppercase tracking-widest text-white/40">Navegación</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Inicio", to: "/" },
                { label: "Nosotros", to: "/sobre" },
                { label: "Servicios", to: "/servicos" },
                { label: "Empresarial PJ", to: "/empresarial" },
                { label: "Personal PF", to: "/personal" },
                { label: "FAQ", to: "/faq" },
                { label: "Contacto", to: "/contato" },
              ].map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="text-white/60 hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-semibold mb-4 text-xs uppercase tracking-widest text-white/40">Servicios</h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link to={`/servicos/${s.slug}`} className="text-white/60 hover:text-white transition-colors">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectores + Contacto */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-semibold mb-4 text-xs uppercase tracking-widest text-white/40">Sectores</h4>
            <ul className="space-y-2.5 text-sm mb-8">
              {SECTORS.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="text-white/60 hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>

            <h4 className="font-heading font-semibold mb-4 text-xs uppercase tracking-widest text-white/40">Contacto</h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2 text-white/60"><Mail size={14} className="text-primary" /> assessoriainfinity@assessoriainfinity.com</li>
              <li className="flex items-center gap-2 text-white/60"><MapPin size={14} className="text-primary" /> São Paulo, SP</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© 2024 Infinity Assessoria. Todos los derechos reservados.</p>
          <p className="font-mono text-[10px] text-white/25">CNPJ 00.000.000/0001-00</p>
        </div>
      </div>
    </footer>
  );
}
