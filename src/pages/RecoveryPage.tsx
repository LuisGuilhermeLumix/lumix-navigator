import { useState } from "react";
import { RotateCcw } from "lucide-react";
import { SolutionPageTemplate } from "@/components/SolutionPageTemplate";
import { motion } from "framer-motion";

const channels = [
  { name: "WhatsApp", desc: "Comunicação direta e personalizada com alta taxa de abertura. Ideal para o mercado brasileiro." },
  { name: "SMS", desc: "Alcance amplo com entrega imediata. Essencial para operações nos EUA." },
  { name: "WhatsApp + SMS", desc: "Combinação estratégica de canais para máxima cobertura e conversão." },
];

export default function RecoveryPage() {
  const [market, setMarket] = useState<"brasil" | "eua">("brasil");

  return (
    <SolutionPageTemplate
      icon={RotateCcw}
      title="Recuperação de Vendas"
      tagline="Cada venda perdida é uma oportunidade esperando para ser recuperada."
      description="Recupere vendas perdidas via WhatsApp e SMS com fluxos automatizados e estratégicos. Operação no Brasil e nos EUA com abordagens personalizadas para cada mercado."
      howItWorks={[
        { title: "Identificação", desc: "Mapeamento de vendas perdidas, abandonos e oportunidades não convertidas." },
        { title: "Estratégia de recuperação", desc: "Criação de fluxos personalizados por canal, produto e perfil de cliente." },
        { title: "Execução automatizada", desc: "Disparo inteligente via WhatsApp e/ou SMS com acompanhamento em tempo real." },
      ]}
      benefits={[
        "Recuperação de vendas que seriam perdidas definitivamente",
        "Automação completa do follow-up com fluxos inteligentes",
        "Operação nos mercados Brasil e EUA",
        "Combinação estratégica de WhatsApp e SMS",
        "Aumento direto de conversão e faturamento",
        "Relatórios e acompanhamento de resultados em tempo real",
      ]}
      audience={[
        "Empresas que perdem vendas por abandono de compra",
        "Negócios com alto volume de leads que não convertem na primeira interação",
        "Operações que precisam de follow-up estruturado e automatizado",
        "Empresas que operam no Brasil, EUA ou ambos",
      ]}
    >
      {/* Market toggle */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-section heading-display">Operação por mercado</h2>
            <div className="inline-flex rounded-xl bg-muted/30 border border-border/50 p-1">
              <button
                onClick={() => setMarket("brasil")}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${market === "brasil" ? "gradient-bg text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                🇧🇷 Brasil
              </button>
              <button
                onClick={() => setMarket("eua")}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${market === "eua" ? "gradient-bg text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                🇺🇸 EUA
              </button>
            </div>
          </div>
          <motion.div
            key={market}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="glass-card rounded-2xl p-8 md:p-12 max-w-2xl mx-auto space-y-4"
          >
            {market === "brasil" ? (
              <>
                <h3 className="text-xl font-semibold text-foreground">Operação Brasil 🇧🇷</h3>
                <p className="body-text">Recuperação de vendas com foco em WhatsApp como canal principal. Comunicação em português, integração com plataformas brasileiras e valores em R$.</p>
                <p className="body-text">Canais: <span className="text-primary">WhatsApp</span> · <span className="text-primary">WhatsApp + SMS</span></p>
              </>
            ) : (
              <>
                <h3 className="text-xl font-semibold text-foreground">Operação EUA 🇺🇸</h3>
                <p className="body-text">Recuperação de vendas com foco em SMS como canal principal. Comunicação em inglês, integração com plataformas americanas e valores em USD.</p>
                <p className="body-text">Canais: <span className="text-primary">SMS</span> · <span className="text-primary">WhatsApp + SMS</span></p>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* Channels */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-section heading-display mb-12">Canais de recuperação</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {channels.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-8 space-y-3"
              >
                <h3 className="text-lg font-semibold text-foreground">{c.name}</h3>
                <p className="body-text text-sm">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SolutionPageTemplate>
  );
}
