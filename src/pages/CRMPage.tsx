import { LayoutDashboard } from "lucide-react";
import { SolutionPageTemplate } from "@/components/SolutionPageTemplate";

export default function CRMPage() {
  return (
    <SolutionPageTemplate
      icon={LayoutDashboard}
      title="CRM"
      tagline="Visibilidade total da sua operação comercial."
      description="Acompanhe pipeline, status, resultados e a organização completa do processo comercial. Tenha controle e clareza sobre cada etapa da operação em tempo real."
      howItWorks={[
        { title: "Integração", desc: "Conectamos o CRM à sua operação e fontes de dados existentes." },
        { title: "Configuração do pipeline", desc: "Definimos as etapas e métricas relevantes para o seu negócio." },
        { title: "Operação e visibilidade", desc: "Acompanhamento em tempo real com dashboards e relatórios." },
      ]}
      benefits={[
        "Acompanhamento de resultados em tempo real",
        "Organização completa do pipeline comercial",
        "Visualização clara de cada etapa da operação",
        "Controle mais claro do processo de vendas",
        "Métricas e relatórios para tomada de decisão",
        "Integração com as demais soluções Lumix",
      ]}
      audience={[
        "Times que precisam de visibilidade sobre o processo comercial",
        "Operações que cresceram e perderam controle dos dados",
        "Empresas que querem decisões baseadas em dados reais",
        "Gestores que precisam acompanhar performance do time",
      ]}
    />
  );
}
