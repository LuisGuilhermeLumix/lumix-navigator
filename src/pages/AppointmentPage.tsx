import { CalendarCheck } from "lucide-react";
import { SolutionPageTemplate } from "@/components/SolutionPageTemplate";

export default function AppointmentPage() {
  return (
    <SolutionPageTemplate
      icon={CalendarCheck}
      title="Agente de Agendamento"
      tagline="Mais agendamentos. Menos esforço. Zero perda de leads."
      description="Automatize o contato inicial e agende reuniões ou atendimentos com velocidade e escala. O agente inteligente da Lumix interage com seus leads e converte interesse em compromisso."
      howItWorks={[
        { title: "Contato imediato", desc: "O lead recebe uma mensagem personalizada segundos após demonstrar interesse." },
        { title: "Interação inteligente", desc: "O agente conversa, responde dúvidas e identifica o melhor horário." },
        { title: "Agendamento confirmado", desc: "Reunião ou atendimento agendado automaticamente no calendário do time." },
      ]}
      benefits={[
        "Respostas instantâneas sem intervenção humana",
        "Mais agendamentos com menos esforço operacional",
        "Menos perda de leads por demora no contato",
        "Automação completa do primeiro contato",
        "Integração com calendários e CRM",
      ]}
      audience={[
        "Times que precisam converter leads em reuniões de forma rápida e eficiente",
        "Empresas com volume de leads que não conseguem atender manualmente",
        "Operações que perdem oportunidades entre o interesse e o agendamento",
        "Negócios que querem escalar agendamentos sem contratar mais pessoas",
      ]}
    />
  );
}
