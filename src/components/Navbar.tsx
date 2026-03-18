import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import logoHorizontal from "@/assets/logo-horizontal.png";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Soluções",
    href: "/solucoes",
    children: [
      { label: "SDR", href: "/solucoes/sdr" },
      { label: "Agente de Agendamento", href: "/solucoes/agendamento" },
      { label: "Prospecção com API", href: "/solucoes/prospeccao" },
      { label: "Recuperação", href: "/solucoes/recuperacao" },
      { label: "CRM", href: "/solucoes/crm" },
    ],
  },
  { label: "CRM", href: "/solucoes/crm" },
  { label: "Sobre", href: "/sobre" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav h-16">
      <div className="container mx-auto flex h-full items-center justify-between px-4 lg:px-8">
        <Link to="/" className="flex items-center">
          <img src={logoHorizontal} alt="Lumix" className="h-14 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${location.pathname.startsWith("/solucoes") ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
                  {link.label} <ChevronDown className="h-3 w-3" />
                </button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-56 rounded-xl glass-card p-2"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className={`block px-3 py-2 rounded-lg text-sm transition-colors ${location.pathname === child.href ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"}`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${location.pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <Link to="/contato">
            <Button variant="gradient" size="default" className="relative">
              <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full lumix-pulse" />
              Solicitar Proposta
            </Button>
          </Link>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-nav border-t border-border/30 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className="flex flex-col gap-1">
                    <Link to={link.href} onClick={() => setMobileOpen(false)} className="px-3 py-2 text-sm font-medium text-muted-foreground">
                      {link.label}
                    </Link>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="pl-6 px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link to="/contato" onClick={() => setMobileOpen(false)}>
                <Button variant="gradient" className="w-full mt-2">Solicitar Proposta</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
