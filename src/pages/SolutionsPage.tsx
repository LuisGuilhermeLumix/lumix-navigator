import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { Bot, CalendarCheck, Search, RotateCcw, LayoutDashboard, ArrowRight, ChevronRight } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const solutions = [
  {
    icon: Bot,
    title: "SDR",
    desc: "Automatize a qualificação de leads e pré-vendas. Responda mais rápido, filtre melhor e acelere o pipeline comercial com inteligência artificial.",
    audience: "Empresas com volume de leads que precisam de qualificação rápida e organizada.",
    benefits: ["Qualificação em segundos", "Mais velocidade no atendimento", "Melhor aproveitamento de leads", "Redução de trabalho manual"],
    href: "/solucoes/sdr",
  },
  {
    icon: CalendarCheck,
    title: "Agente de Agendamento",
    desc: "Automatize o contato inicial e agende reuniões ou atendimentos sem intervenção manual. Mais agendamentos, menos esforço.",
    audience: "Times que precisam converter leads em reuniões de forma eficiente.",
    benefits: ["Respostas instantâneas", "Mais agendamentos", "Menos perda de leads", "Automação do contato inicial"],
    href: "/solucoes/agendamento",
  },
  {
    icon: Search,
    title: "Prospecção com API",
    desc: "Captação inteligente de leads via LinkedIn, Google Maps, Google Ads e Facebook Ads Library. Monte listas qualificadas com escala.",
    audience: "Operações que precisam de novas oportunidades e enriquecimento de base.",
    benefits: ["Múltiplas fontes de dados", "Listas qualificadas", "Prospecção em escala", "Integração com CRM"],
    href: "/solucoes/prospeccao",
  },
  {
    icon: RotateCcw,
    title: "Recuperação",
    desc: "Recupere vendas perdidas via WhatsApp e SMS com fluxos automatizados e estratégicos. Operação no Brasil e nos EUA.",
    audience: "Negócios que perdem vendas por abandono de compra ou falta de follow-up.",
    benefits: ["WhatsApp + SMS", "Brasil e EUA", "Automação de follow-up", "Aumento de conversão"],
    href: "/solucoes/recuperacao",
  },
  {
    icon: LayoutDashboard,
    title: "CRM",
    desc: "Acompanhe toda a operação comercial com visibilidade total. Pipeline, resultados, status e organização em um só lugar.",
    audience: "Times que precisam de controle e visibilidade sobre o processo comercial.",
    benefits: ["Pipeline visual", "Acompanhamento em tempo real", "Organização operacional", "Métricas e resultados"],
    href: "/solucoes/crm",
  },
];

export default function SolutionsPage() {
  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-20 space-y-4 max-w-3xl mx-auto">
            <h1 className="text-hero heading-display">
              Soluções <span className="gradient-text">Lumix</span>
            </h1>
            <p className="body-text text-lg">Tecnologia e estratégia para cada etapa do seu funil comercial.</p>
          </motion.div>

          <div className="space-y-8">
            {solutions.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass-card rounded-2xl p-8 md:p-10"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                        <s.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground">{s.title}</h2>
                    </div>
                    <p className="body-text">{s.desc}</p>
                    <p className="text-sm text-foreground/80"><strong>Para quem:</strong> {s.audience}</p>
                    <Link to={s.href}>
                      <Button variant="ghost-glow" className="mt-2">
                        Ver detalhes <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  <div className="lg:w-72 flex-shrink-0">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Benefícios</h4>
                    <ul className="space-y-2">
                      {s.benefits.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full gradient-bg flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="text-center mt-16">
            <Link to="/contato">
              <Button variant="gradient" size="xl">
                Solicitar proposta <ArrowRight className="ml-1 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
