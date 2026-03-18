import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Zap, Users, Globe, Shield, Bot } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const values = [
  { icon: Target, title: "Performance acima de tudo", desc: "Cada ação é orientada a resultado mensurável. Trabalhamos com métricas, não suposições." },
  { icon: Bot, title: "Tecnologia aplicada", desc: "IA, automação e integrações inteligentes a serviço do comercial." },
  { icon: Users, title: "Operação personalizada", desc: "Cada negócio é único. Estratégias sob medida para cada cliente." },
  { icon: Globe, title: "Brasil e EUA", desc: "Infraestrutura e expertise para operar nos dois maiores mercados." },
  { icon: Shield, title: "Confiabilidade", desc: "Processos estruturados e transparentes. Acompanhamento em tempo real." },
  { icon: Zap, title: "Estratégia + Execução", desc: "Não apenas sugerimos. Implementamos e operamos junto com o cliente." },
];

export default function AboutPage() {
  return (
    <Layout>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-lumix-blue/10 blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-lumix-lilac/10 blur-[100px]" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl space-y-6">
            <h1 className="text-hero heading-display">
              Sobre a <span className="gradient-text">Lumix</span>
            </h1>
            <p className="body-text text-lg max-w-2xl">
              A Lumix é uma empresa de automação comercial e performance de vendas. Combinamos tecnologia, inteligência artificial e estratégia operacional para ajudar empresas a gerar, qualificar, recuperar e converter mais vendas.
            </p>
            <p className="body-text text-lg max-w-2xl">
              Atuamos no Brasil e nos EUA com soluções que vão de SDR e prospecção até recuperação de vendas e CRM operacional. Nosso foco é performance: cada processo, cada fluxo e cada automação é orientada a resultado mensurável.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp} className="mb-16">
            <h2 className="text-section heading-display">Nosso DNA</h2>
            <p className="body-text text-lg mt-4">O que nos define e diferencia no mercado.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass-card rounded-2xl p-8 space-y-3"
              >
                <v.icon className="h-8 w-8 text-primary" />
                <h3 className="font-semibold text-foreground">{v.title}</h3>
                <p className="body-text text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp} className="max-w-3xl space-y-6">
            <h2 className="text-section heading-display">Como trabalhamos</h2>
            <p className="body-text text-lg">
              A Lumix não é uma agência. Não vendemos promessas genéricas. Somos um braço operacional e tecnológico que se integra ao comercial do cliente.
            </p>
            <p className="body-text text-lg">
              Nosso modelo combina diagnóstico, estratégia, implementação, operação e otimização contínua. Cada etapa é acompanhada com dados e transparência total.
            </p>
            <p className="body-text text-lg">
              O resultado é uma operação comercial mais eficiente, mais rápida e mais organizada — com tecnologia e IA trabalhando 24/7 a favor do seu negócio.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center space-y-6">
          <motion.div {...fadeUp} className="space-y-6 max-w-2xl mx-auto">
            <h2 className="text-section heading-display">Vamos conversar?</h2>
            <p className="body-text text-lg">Solicite uma proposta e descubra como a Lumix pode transformar sua operação comercial.</p>
            <Link to="/contato">
              <Button variant="gradient" size="xl">Solicitar proposta <ArrowRight className="ml-1 h-5 w-5" /></Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
