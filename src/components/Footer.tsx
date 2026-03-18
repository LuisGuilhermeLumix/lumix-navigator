import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const footerLinks = [
  {
    title: "Soluções",
    links: [
      { label: "SDR", href: "/solucoes/sdr" },
      { label: "Agente de Agendamento", href: "/solucoes/agendamento" },
      { label: "Prospecção com API", href: "/solucoes/prospeccao" },
      { label: "Recuperação", href: "/solucoes/recuperacao" },
      { label: "CRM", href: "/solucoes/crm" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre", href: "/sobre" },
      { label: "Contato", href: "/contato" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Política de Privacidade", href: "#" },
      { label: "Termos de Uso", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/30 bg-card/50">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Lumix" className="h-8 w-auto" />
              <span className="text-lg font-bold gradient-text">LUMIX</span>
            </Link>
            <p className="body-text text-sm max-w-xs">
              Automação comercial de alta performance. Tecnologia, IA e estratégia para gerar, qualificar e recuperar vendas.
            </p>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>contato@lumix.com.br</p>
              <p>WhatsApp: +55 (00) 00000-0000</p>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-semibold text-foreground mb-4">{group.title}</h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground space-y-1 text-center md:text-left">
            <p>© {new Date().getFullYear()} Lumix. Todos os direitos reservados.</p>
            <p className="text-xs">CNPJ: Em breve · Endereço: Em breve</p>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Instagram</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
