import { Bot } from "lucide-react";
import { SolutionPageTemplate } from "@/components/SolutionPageTemplate";

export default function SDRPage() {
  return (
    <SolutionPageTemplate
      icon={Bot}
      title="SDR"
      tagline="Seu lead não espera. Nós também não."
      description="Automatize a qualificação de leads e pré-vendas. Responda mais rápido, filtre melhor e acelere o pipeline comercial com inteligência artificial e fluxos operacionais inteligentes."
      howItWorks={[
        { title: "Captação do lead", desc: "O lead entra pela sua fonte de tráfego e é imediatamente capturado pelo sistema." },
        { title: "Qualificação automatizada", desc: "IA analisa e qualifica o lead com base em critérios definidos pela sua operação." },
        { title: "Distribuição inteligente", desc: "Leads qualificados são direcionados ao time comercial com contexto e prioridade." },
      ]}
      benefits={[
        "Qualificação de leads em segundos, não horas",
        "Redução drástica de trabalho manual na pré-venda",
        "Mais velocidade e eficiência no pipeline comercial",
        "Melhor aproveitamento de cada lead gerado",
        "Organização e rastreabilidade de todo o processo",
      ]}
      audience={[
        "Empresas com alto volume de leads que não conseguem qualificar rapidamente",
        "Operações comerciais com ciclo de vendas que precisa de agilidade",
        "Times de vendas que perdem oportunidades por demora no primeiro contato",
        "Negócios que querem escalar a operação sem aumentar equipe proporcionalmente",
      ]}
    />
  );
}
