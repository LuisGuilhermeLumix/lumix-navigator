import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Bot, CalendarCheck, Search, RotateCcw, LayoutDashboard,
  ArrowRight, Play, Users, Zap, Target, Shield, Globe, Settings,
  CheckCircle, ChevronRight, Eye
} from "lucide-react";
import { Layout } from "@/components/Layout";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const stagger = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.08 } },
  viewport: { once: true },
};

const solutions = [
  { icon: Bot, title: "SDR", desc: "Qualificação e pré-vendas automatizadas para acelerar seu pipeline comercial.", href: "/solucoes/sdr" },
  { icon: CalendarCheck, title: "Agente de Agendamento", desc: "Automação de contato e agendamento de reuniões com velocidade e escala.", href: "/solucoes/agendamento" },
  { icon: Search, title: "Prospecção com API", desc: "Captação inteligente de leads via LinkedIn, Google Maps, Ads e mais.", href: "/solucoes/prospeccao" },
  { icon: RotateCcw, title: "Recuperação", desc: "Recupere vendas perdidas via WhatsApp e SMS no Brasil e nos EUA.", href: "/solucoes/recuperacao" },
  { icon: LayoutDashboard, title: "CRM", desc: "Acompanhe operações, pipeline e resultados com visibilidade total.", href: "/solucoes/crm" },
];

const steps = [
  { icon: Eye, title: "Diagnóstico", desc: "Análise completa da operação comercial e identificação de oportunidades." },
  { icon: Target, title: "Estratégia", desc: "Definição do plano de ação personalizado para sua operação." },
  { icon: Settings, title: "Implementação", desc: "Configuração de ferramentas, fluxos e integrações." },
  { icon: Zap, title: "Operação", desc: "Execução ativa com monitoramento contínuo de resultados." },
  { icon: RotateCcw, title: "Otimização", desc: "Ajustes contínuos baseados em dados para maximizar performance." },
];

const profiles = [
  "Empresas com alto volume de leads que precisam de qualificação rápida",
  "Operações comerciais que perdem oportunidades por demora no atendimento",
  "Negócios que querem automatizar processos de vendas e prospecção",
  "Empresas que precisam recuperar vendas perdidas e abandono de compra",
  "Times que buscam organização comercial e visibilidade operacional",
  "Negócios com operação no Brasil e nos EUA",
];

const differentials = [
  { icon: Zap, title: "Foco em performance", desc: "Cada ação é orientada a resultado e conversão." },
  { icon: Users, title: "Operação personalizada", desc: "Estratégias sob medida para cada negócio." },
  { icon: Bot, title: "Tecnologia aplicada", desc: "IA e automação integradas ao processo comercial." },
  { icon: Globe, title: "Brasil e EUA", desc: "Infraestrutura para operar nos dois mercados." },
  { icon: Shield, title: "Estratégia + execução", desc: "Não apenas sugerimos. Implementamos e operamos." },
  { icon: LayoutDashboard, title: "CRM e acompanhamento", desc: "Visibilidade total da operação em tempo real." },
];

const videos = [
  { title: "Visão Geral da Lumix", desc: "Conheça a empresa e como podemos ajudar." },
  { title: "SDR em Ação", desc: "Veja como funciona a qualificação automatizada." },
  { title: "Recuperação de Vendas", desc: "Entenda o processo de recuperação via WhatsApp e SMS." },
  { title: "CRM Operacional", desc: "Tour pelo painel de acompanhamento." },
];

export default function HomePage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-lumix-blue/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-lumix-lilac/10 blur-[120px]" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div className="max-w-4xl mx-auto text-center space-y-8" {...stagger}>
            <motion.div {...fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/50 bg-muted/30 text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full lumix-pulse" />
              Automação comercial inteligente
            </motion.div>

            <motion.h1 {...fadeUp} className="text-hero heading-display text-foreground">
              Automação comercial de{" "}
              <span className="gradient-text">alta performance</span>
            </motion.h1>

            <motion.p {...fadeUp} className="body-text text-lg md:text-xl max-w-2xl mx-auto">
              Gere, qualifique, recupere e converta mais vendas com SDR, agentes, CRM e operações via WhatsApp e SMS no Brasil e nos EUA.
            </motion.p>

            <motion.div {...fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/solucoes">
                <Button variant="gradient" size="xl">
                  Conhecer soluções <ArrowRight className="ml-1 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contato">
                <Button variant="ghost-glow" size="xl">
                  Solicitar proposta
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16 space-y-4">
            <h2 className="text-section heading-display">Nossas soluções</h2>
            <p className="body-text text-lg max-w-xl mx-auto">Tecnologia e estratégia para cada etapa do seu funil comercial.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link to={s.href} className="block group">
                  <div className="glass-card rounded-2xl p-8 h-full transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:glow-primary">
                    <s.icon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                    <p className="body-text text-sm mb-4">{s.desc}</p>
                    <span className="text-sm text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                      Ver detalhes <ChevronRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16 space-y-4">
            <h2 className="text-section heading-display">Como a Lumix funciona</h2>
            <p className="body-text text-lg max-w-xl mx-auto">Um processo estruturado para transformar sua operação comercial.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center space-y-3"
              >
                <div className="mx-auto w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center">
                  <step.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="text-xs font-semibold text-primary">Etapa {i + 1}</div>
                <h3 className="font-semibold text-foreground">{step.title}</h3>
                <p className="body-text text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16 space-y-4">
            <h2 className="text-section heading-display">Veja na prática</h2>
            <p className="body-text text-lg max-w-xl mx-auto">Assista demonstrações das nossas soluções em ação.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card rounded-2xl overflow-hidden group cursor-pointer"
              >
                <div className="aspect-video bg-muted/20 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-lumix-blue/5 to-lumix-lilac/5" />
                  <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="h-7 w-7 text-primary-foreground ml-1" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-foreground mb-1">{v.title}</h3>
                  <p className="body-text text-sm">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* For Who */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16 space-y-4">
            <h2 className="text-section heading-display">Para quem é a Lumix</h2>
            <p className="body-text text-lg max-w-xl mx-auto">Identificou algum desses cenários na sua operação?</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {profiles.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-card/50 border border-border/30"
              >
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{p}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Lumix */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16 space-y-4">
            <h2 className="text-section heading-display">Por que escolher a Lumix</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentials.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass-card rounded-2xl p-8 space-y-3"
              >
                <d.icon className="h-8 w-8 text-secondary" />
                <h3 className="font-semibold text-foreground">{d.title}</h3>
                <p className="body-text text-sm">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            {...fadeUp}
            className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center"
          >
            <div className="absolute inset-0 gradient-bg opacity-10" />
            <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-lumix-blue/20 blur-[100px]" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-lumix-lilac/20 blur-[100px]" />
            <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
              <h2 className="text-section heading-display">Descubra qual solução faz mais sentido para o seu negócio</h2>
              <p className="body-text text-lg">Preencha nosso formulário estratégico e receba uma proposta personalizada.</p>
              <Link to="/contato">
                <Button variant="gradient" size="xl">
                  Solicitar proposta <ArrowRight className="ml-1 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
