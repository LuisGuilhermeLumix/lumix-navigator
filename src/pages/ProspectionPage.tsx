import { Search } from "lucide-react";
import { SolutionPageTemplate } from "@/components/SolutionPageTemplate";
import { motion } from "framer-motion";

const sources = [
  { name: "LinkedIn", desc: "Prospecção de decisores e empresas por segmento, cargo e localização." },
  { name: "Google Maps", desc: "Captação de negócios locais com dados de contato e categoria." },
  { name: "Google Ads", desc: "Identificação de anunciantes e oportunidades por palavra-chave." },
  { name: "Facebook Ads Library", desc: "Análise de anunciantes ativos e captura de oportunidades." },
];

export default function ProspectionPage() {
  return (
    <SolutionPageTemplate
      icon={Search}
      title="Prospecção com API"
      tagline="Inteligência de dados para alimentar seu pipeline."
      description="Captação inteligente de leads usando APIs e integrações com as principais plataformas. Monte listas qualificadas, enriqueça sua base e gere novas oportunidades com escala."
      howItWorks={[
        { title: "Definição do ICP", desc: "Mapeamos o perfil ideal de cliente com critérios detalhados." },
        { title: "Captação automatizada", desc: "APIs captam e organizam leads de múltiplas fontes simultaneamente." },
        { title: "Enriquecimento e entrega", desc: "Leads são enriquecidos e organizados para ação comercial imediata." },
      ]}
      benefits={[
        "Prospecção em múltiplas fontes simultaneamente",
        "Listas qualificadas e segmentadas",
        "Enriquecimento automático de dados",
        "Escala sem aumento proporcional de equipe",
        "Integração direta com CRM e fluxos de vendas",
      ]}
      audience={[
        "Empresas que precisam de novas oportunidades constantemente",
        "Operações que querem prospectar em escala com qualidade",
        "Times que fazem prospecção manual e precisam de eficiência",
        "Negócios que querem enriquecer a base de leads existente",
      ]}
    >
      {/* Sources section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-section heading-display">Fontes de captação</h2>
            <p className="body-text text-lg mt-4">Integrações com as principais plataformas do mercado.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sources.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-8 space-y-2"
              >
                <h3 className="text-lg font-semibold text-foreground">{s.name}</h3>
                <p className="body-text text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SolutionPageTemplate>
  );
}
