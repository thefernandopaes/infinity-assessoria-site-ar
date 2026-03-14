import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Truck, GraduationCap, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/data/services";

const SECTORS = [
  { label: "Transporte y Logística", to: "/setores/transporte", icon: Truck },
  { label: "Estudiantil", to: "/setores/estudantil", icon: GraduationCap },
  { label: "Turismo", to: "/setores/turismo", icon: Plane },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + "/");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/98 backdrop-blur-md border-b border-border/50 shadow-sm"
          : "bg-background/80 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div
        className={`container mx-auto flex items-center justify-between px-4 lg:px-8 transition-all duration-300 ${
          scrolled ? "h-14" : "h-16"
        }`}
      >
        <Link to="/" className="flex items-center gap-2.5 font-heading text-xl font-bold text-foreground">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary text-primary-foreground text-sm font-bold">∞</span>
          Infinity
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          <NavLink to="/" label="Inicio" active={pathname === "/"} />
          <NavLink to="/sobre" label="Nosotros" active={pathname === "/sobre"} />

          {/* Servicios dropdown */}
          <div className="relative group">
            <Link
              to="/servicos"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors inline-flex items-center gap-1 ${
                isActive("/servicos") ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Servicios <ChevronDown size={13} className="transition-transform group-hover:rotate-180" />
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-card border border-border rounded-xl shadow-xl shadow-black/5 p-2 w-[520px] grid grid-cols-2 gap-0.5">
                {SERVICES.map(({ icon: Icon, slug, title, shortDesc }) => (
                  <Link
                    key={slug}
                    to={`/servicos/${slug}`}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    <div className="w-8 h-8 rounded-md bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={15} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground leading-tight">{title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-snug">{shortDesc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sectores dropdown */}
          <div className="relative group">
            <button
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors inline-flex items-center gap-1 ${
                isActive("/setores") ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Sectores <ChevronDown size={13} className="transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-card border border-border rounded-xl shadow-xl shadow-black/5 p-2 w-[230px]">
                {SECTORS.map(({ label, to, icon: SIcon }) => (
                  <Link key={to} to={to} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted transition-colors">
                    <SIcon size={15} className="text-primary" />
                    <span className="text-sm font-medium text-foreground">{label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <NavLink to="/contato" label="Contacto" active={pathname === "/contato"} />
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/contato">
            <Button size="sm" className="rounded-full gradient-primary border-0 text-primary-foreground hover:opacity-90 transition-opacity px-5">
              Hablá con Nosotros
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2 text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="lg:hidden bg-card border-t border-border shadow-lg animate-fade-in max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col p-4 gap-1">
            <MobileLink to="/" label="Inicio" active={pathname === "/"} onClick={() => setOpen(false)} />
            <MobileLink to="/sobre" label="Nosotros" active={pathname === "/sobre"} onClick={() => setOpen(false)} />

            {/* Mobile Servicios */}
            <button onClick={() => setMobileSubmenu(mobileSubmenu === "servicos" ? null : "servicos")} className="px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground flex items-center justify-between">
              Servicios <ChevronDown size={16} className={`transition-transform ${mobileSubmenu === "servicos" ? "rotate-180" : ""}`} />
            </button>
            {mobileSubmenu === "servicos" && (
              <div className="pl-4 space-y-1">
                <Link to="/servicos" onClick={() => setOpen(false)} className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted">
                  Ver todos
                </Link>
                {SERVICES.map(({ slug, title }) => (
                  <Link key={slug} to={`/servicos/${slug}`} onClick={() => setOpen(false)} className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted">
                    {title}
                  </Link>
                ))}
              </div>
            )}

            {/* Mobile Sectores */}
            <button onClick={() => setMobileSubmenu(mobileSubmenu === "setores" ? null : "setores")} className="px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground flex items-center justify-between">
              Sectores <ChevronDown size={16} className={`transition-transform ${mobileSubmenu === "setores" ? "rotate-180" : ""}`} />
            </button>
            {mobileSubmenu === "setores" && (
              <div className="pl-4 space-y-1">
                {SECTORS.map(({ label, to }) => (
                  <Link key={to} to={to} onClick={() => setOpen(false)} className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted">
                    {label}
                  </Link>
                ))}
              </div>
            )}

            <MobileLink to="/contato" label="Contacto" active={pathname === "/contato"} onClick={() => setOpen(false)} />

            <Link to="/contato" onClick={() => setOpen(false)} className="mt-2">
              <Button className="w-full rounded-full gradient-primary border-0 text-primary-foreground">Hablá con Nosotros</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function NavLink({ to, label, active }: { to: string; label: string; active: boolean }) {
  return (
    <Link
      to={to}
      className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
        active ? "text-primary" : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {label}
    </Link>
  );
}

function MobileLink({ to, label, active, onClick }: { to: string; label: string; active: boolean; onClick: () => void }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`px-4 py-3 rounded-lg text-sm font-medium ${
        active ? "bg-primary/10 text-primary" : "text-muted-foreground"
      }`}
    >
      {label}
    </Link>
  );
}
