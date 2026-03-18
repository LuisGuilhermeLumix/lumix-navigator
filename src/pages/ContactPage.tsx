import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, ArrowLeft, CheckCircle, HelpCircle, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TOTAL_STEPS = 5;

const solutionOptions = [
  "SDR",
  "Agente de Agendamento",
  "Prospecção com API",
  "Recuperação via WhatsApp",
  "Recuperação via SMS",
  "Recuperação via WhatsApp + SMS",
  "CRM",
  "Ainda não sei / Quero entender melhor",
];

const objectiveOptions = [
  "Gerar mais leads",
  "Qualificar melhor",
  "Agendar mais reuniões",
  "Recuperar vendas",
  "Organizar operação",
  "Entender qual solução faz mais sentido",
];

const faqItems = [
  { q: "Quais soluções a Lumix oferece?", a: "SDR, Agente de Agendamento, Prospecção com API, Recuperação de Vendas (WhatsApp/SMS) e CRM operacional." },
  { q: "A Lumix atende Brasil e EUA?", a: "Sim. Temos infraestrutura para operar nos dois mercados com estratégias específicas para cada um." },
  { q: "A implementação é personalizada?", a: "Sim. Cada operação é desenhada sob medida com base no diagnóstico do seu negócio." },
  { q: "A operação pode usar WhatsApp e SMS?", a: "Sim. Trabalhamos com WhatsApp, SMS ou a combinação dos dois canais." },
  { q: "Preciso ter CRM?", a: "Não necessariamente. A Lumix oferece CRM próprio ou se integra ao seu CRM atual." },
  { q: "Como funciona o onboarding?", a: "Após o envio do formulário, nossa equipe entra em contato para diagnóstico, alinhamento e início da implementação." },
  { q: "Quanto tempo leva a implementação?", a: "Depende da complexidade da operação, mas geralmente entre 1 e 4 semanas." },
];

interface FormData {
  companyName: string;
  responsibleName: string;
  email: string;
  whatsapp: string;
  website: string;
  social: string;
  country: string;
  niche: string;
  companyDescription: string;
  solutions: string[];
  operationRegion: string;
  objectives: string[];
  hasTeam: string;
  hasCRM: string;
  hasPaidTraffic: string;
  hasWhatsApp: string;
  hasSMS: string;
  monthlyLeads: string;
  avgTicket: string;
  mainChannel: string;
  currentPlatform: string;
  operationCountry: string;
  productName: string;
  productNiche: string;
  ticketValue: string;
  orderBump: string;
  upsellStructure: string;
  warrantyTime: string;
  specialist: string;
  mainPromise: string;
  vslLink: string;
  topBenefits: string;
  exclusiveBonus: string;
  presentationForm: string;
  dosage: string;
  usageMode: string;
  ingredients: string;
  supportContact: string;
  faqContent: string;
  mainChallenge: string;
  expectedResult: string;
  urgency: string;
  observations: string;
  wantsContact: string;
}

const initialFormData: FormData = {
  companyName: "", responsibleName: "", email: "", whatsapp: "", website: "", social: "", country: "", niche: "", companyDescription: "",
  solutions: [], operationRegion: "", objectives: [],
  hasTeam: "", hasCRM: "", hasPaidTraffic: "", hasWhatsApp: "", hasSMS: "", monthlyLeads: "", avgTicket: "", mainChannel: "", currentPlatform: "", operationCountry: "",
  productName: "", productNiche: "", ticketValue: "", orderBump: "", upsellStructure: "", warrantyTime: "", specialist: "", mainPromise: "", vslLink: "", topBenefits: "", exclusiveBonus: "", presentationForm: "", dosage: "", usageMode: "", ingredients: "", supportContact: "", faqContent: "",
  mainChallenge: "", expectedResult: "", urgency: "", observations: "", wantsContact: "",
};

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const set = (field: keyof FormData, value: string | string[]) => setForm((p) => ({ ...p, [field]: value }));
  const toggleArray = (field: keyof FormData, value: string) => {
    const arr = form[field] as string[];
    set(field, arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value]);
  };

  const isRecovery = form.solutions.some((s) => s.toLowerCase().includes("recupera"));
  const showBriefing = isRecovery;

  const progress = (step / TOTAL_STEPS) * 100;

  const handleSubmit = () => {
    console.log("Form submitted:", form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Layout>
        <section className="py-32">
          <div className="container mx-auto px-4 lg:px-8 text-center space-y-6 max-w-lg">
            <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center mx-auto">
              <CheckCircle className="h-10 w-10 text-primary-foreground" />
            </div>
            <h1 className="text-3xl heading-display">Formulário enviado!</h1>
            <p className="body-text text-lg">Recebemos suas informações. Nossa equipe entrará em contato em breve.</p>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <h1 className="text-section heading-display">Solicitar Proposta</h1>
              <p className="body-text">Preencha o formulário estratégico para receber uma proposta personalizada.</p>
            </div>

            {/* Progress */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Etapa {step} de {TOTAL_STEPS}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-1 rounded-full bg-muted overflow-hidden">
                <motion.div className="h-full gradient-bg rounded-full" animate={{ width: `${progress}%` }} transition={{ duration: 0.3 }} />
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 md:p-10">
              {/* Step 1 */}
              {step === 1 && (
                <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                  <h2 className="text-xl font-semibold text-foreground">Dados da Empresa e Contato</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-foreground">Nome da empresa *</Label>
                      <Input placeholder="Ex: Empresa XYZ" value={form.companyName} onChange={(e) => set("companyName", e.target.value)} className="bg-background border-border" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-foreground">Nome do responsável *</Label>
                      <Input placeholder="Seu nome" value={form.responsibleName} onChange={(e) => set("responsibleName", e.target.value)} className="bg-background border-border" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-foreground">E-mail *</Label>
                      <Input type="email" placeholder="email@empresa.com" value={form.email} onChange={(e) => set("email", e.target.value)} className="bg-background border-border" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-foreground">WhatsApp *</Label>
                      <Input placeholder="+55 11 99999-9999" value={form.whatsapp} onChange={(e) => set("whatsapp", e.target.value)} className="bg-background border-border" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-foreground">Site da empresa</Label>
                      <Input placeholder="https://..." value={form.website} onChange={(e) => set("website", e.target.value)} className="bg-background border-border" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-foreground">Instagram / LinkedIn</Label>
                      <Input placeholder="@empresa" value={form.social} onChange={(e) => set("social", e.target.value)} className="bg-background border-border" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-foreground">País principal da operação</Label>
                      <Select value={form.country} onValueChange={(v) => set("country", v)}>
                        <SelectTrigger className="bg-background border-border"><SelectValue placeholder="Selecione" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="brasil">Brasil</SelectItem>
                          <SelectItem value="eua">EUA</SelectItem>
                          <SelectItem value="ambos">Ambos</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-foreground">Nicho da empresa</Label>
                      <Input placeholder="Ex: E-commerce, SaaS..." value={form.niche} onChange={(e) => set("niche", e.target.value)} className="bg-background border-border" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-foreground">Descreva brevemente o que sua empresa faz</Label>
                    <Textarea placeholder="..." value={form.companyDescription} onChange={(e) => set("companyDescription", e.target.value)} className="bg-background border-border min-h-[80px]" />
                  </div>
                </motion.div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                  <h2 className="text-xl font-semibold text-foreground">Interesse Comercial</h2>
                  <div className="space-y-3">
                    <Label className="text-foreground">Qual solução você deseja conhecer ou contratar?</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {solutionOptions.map((s) => (
                        <label key={s} className="flex items-center gap-3 p-3 rounded-xl bg-background border border-border/50 cursor-pointer hover:border-primary/30 transition-colors">
                          <Checkbox checked={form.solutions.includes(s)} onCheckedChange={() => toggleArray("solutions", s)} />
                          <span className="text-sm text-foreground">{s}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Label className="text-foreground">Você opera no Brasil, EUA ou ambos?</Label>
                    <RadioGroup value={form.operationRegion} onValueChange={(v) => set("operationRegion", v)} className="flex gap-4">
                      {["Brasil", "EUA", "Ambos"].map((o) => (
                        <label key={o} className="flex items-center gap-2 cursor-pointer">
                          <RadioGroupItem value={o.toLowerCase()} />
                          <span className="text-sm text-foreground">{o}</span>
                        </label>
                      ))}
                    </RadioGroup>
                  </div>
                  <div className="space-y-3">
                    <Label className="text-foreground">Qual seu principal objetivo hoje?</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {objectiveOptions.map((o) => (
                        <label key={o} className="flex items-center gap-3 p-3 rounded-xl bg-background border border-border/50 cursor-pointer hover:border-primary/30 transition-colors">
                          <Checkbox checked={form.objectives.includes(o)} onCheckedChange={() => toggleArray("objectives", o)} />
                          <span className="text-sm text-foreground">{o}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                  <h2 className="text-xl font-semibold text-foreground">Detalhes da Operação</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { label: "Possui equipe comercial?", field: "hasTeam" as const },
                      { label: "Já utiliza CRM?", field: "hasCRM" as const },
                      { label: "Já roda tráfego pago?", field: "hasPaidTraffic" as const },
                      { label: "Já tem operação de WhatsApp?", field: "hasWhatsApp" as const },
                      { label: "Já tem operação de SMS?", field: "hasSMS" as const },
                    ].map((q) => (
                      <div key={q.field} className="space-y-2">
                        <Label className="text-foreground">{q.label}</Label>
                        <RadioGroup value={form[q.field]} onValueChange={(v) => set(q.field, v)} className="flex gap-4">
                          <label className="flex items-center gap-2 cursor-pointer"><RadioGroupItem value="sim" /><span className="text-sm text-foreground">Sim</span></label>
                          <label className="flex items-center gap-2 cursor-pointer"><RadioGroupItem value="nao" /><span className="text-sm text-foreground">Não</span></label>
                        </RadioGroup>
                      </div>
                    ))}
                    <div className="space-y-2">
                      <Label className="text-foreground">Volume aprox. de leads/mês</Label>
                      <Input placeholder="Ex: 500" value={form.monthlyLeads} onChange={(e) => set("monthlyLeads", e.target.value)} className="bg-background border-border" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-foreground">Ticket médio</Label>
                      <Input placeholder="Ex: R$ 297" value={form.avgTicket} onChange={(e) => set("avgTicket", e.target.value)} className="bg-background border-border" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-foreground">Principal canal de leads</Label>
                      <Input placeholder="Ex: Google Ads, Instagram..." value={form.mainChannel} onChange={(e) => set("mainChannel", e.target.value)} className="bg-background border-border" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-foreground">Plataforma atual</Label>
                      <Input placeholder="Ex: Hotmart, Shopify..." value={form.currentPlatform} onChange={(e) => set("currentPlatform", e.target.value)} className="bg-background border-border" />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 4 - Dynamic briefing */}
              {step === 4 && (
                <motion.div key="s4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                  <h2 className="text-xl font-semibold text-foreground">Briefing {showBriefing ? "de Produto / Oferta" : "Adicional"}</h2>
                  {showBriefing ? (
                    <div className="space-y-6">
                      <p className="body-text text-sm">Informações detalhadas sobre seu produto ou oferta para otimizar a operação de recuperação.</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2"><Label className="text-foreground">Nome do Produto</Label><Input value={form.productName} onChange={(e) => set("productName", e.target.value)} className="bg-background border-border" /></div>
                        <div className="space-y-2"><Label className="text-foreground">Nicho do produto</Label><Input placeholder="Ex: Emagrecimento" value={form.productNiche} onChange={(e) => set("productNiche", e.target.value)} className="bg-background border-border" /></div>
                        <div className="space-y-2"><Label className="text-foreground">Valor do Ticket (Front-end)</Label><Input placeholder="R$ 197" value={form.ticketValue} onChange={(e) => set("ticketValue", e.target.value)} className="bg-background border-border" /></div>
                        <div className="space-y-2">
                          <Label className="text-foreground">Tempo de garantia</Label>
                          <Select value={form.warrantyTime} onValueChange={(v) => set("warrantyTime", v)}>
                            <SelectTrigger className="bg-background border-border"><SelectValue placeholder="Selecione" /></SelectTrigger>
                            <SelectContent>
                              {["7 dias", "15 dias", "30 dias", "Outro"].map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2"><Label className="text-foreground">Especialista / Avatar</Label><Input value={form.specialist} onChange={(e) => set("specialist", e.target.value)} className="bg-background border-border" /></div>
                        <div className="space-y-2"><Label className="text-foreground">Link da VSL / Página</Label><Input value={form.vslLink} onChange={(e) => set("vslLink", e.target.value)} className="bg-background border-border" /></div>
                        <div className="space-y-2">
                          <Label className="text-foreground">Forma de Apresentação</Label>
                          <Select value={form.presentationForm} onValueChange={(v) => set("presentationForm", v)}>
                            <SelectTrigger className="bg-background border-border"><SelectValue placeholder="Selecione" /></SelectTrigger>
                            <SelectContent>
                              {["Cápsulas", "Pó", "Conta-gotas", "Curso Online / Digital", "Outro"].map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2"><Label className="text-foreground">Dosagem / Quantidade</Label><Input placeholder="Ex: 60 caps, 500mg" value={form.dosage} onChange={(e) => set("dosage", e.target.value)} className="bg-background border-border" /></div>
                      </div>
                      <div className="space-y-2"><Label className="text-foreground">Order Bump</Label><Textarea placeholder="Valor e descrição do order bump, se houver" value={form.orderBump} onChange={(e) => set("orderBump", e.target.value)} className="bg-background border-border min-h-[60px]" /></div>
                      <div className="space-y-2"><Label className="text-foreground">Estrutura de Upsell / Cross-sell</Label><Textarea placeholder="Descreva os próximos passos do funil e valores" value={form.upsellStructure} onChange={(e) => set("upsellStructure", e.target.value)} className="bg-background border-border min-h-[60px]" /></div>
                      <div className="space-y-2"><Label className="text-foreground">Promessa Principal e Mecanismo Único</Label><Textarea value={form.mainPromise} onChange={(e) => set("mainPromise", e.target.value)} className="bg-background border-border min-h-[60px]" /></div>
                      <div className="space-y-2"><Label className="text-foreground">3 Principais Benefícios</Label><Textarea value={form.topBenefits} onChange={(e) => set("topBenefits", e.target.value)} className="bg-background border-border min-h-[60px]" /></div>
                      <div className="space-y-2"><Label className="text-foreground">Bônus exclusivo para vendas difíceis</Label><Textarea value={form.exclusiveBonus} onChange={(e) => set("exclusiveBonus", e.target.value)} className="bg-background border-border min-h-[60px]" /></div>
                      <div className="space-y-2"><Label className="text-foreground">Modo de Uso</Label><Textarea value={form.usageMode} onChange={(e) => set("usageMode", e.target.value)} className="bg-background border-border min-h-[60px]" /></div>
                      <div className="space-y-2"><Label className="text-foreground">Ingredientes / Composição</Label><Textarea value={form.ingredients} onChange={(e) => set("ingredients", e.target.value)} className="bg-background border-border min-h-[60px]" /></div>
                      <div className="space-y-2"><Label className="text-foreground">E-mail e WhatsApp de suporte</Label><Textarea value={form.supportContact} onChange={(e) => set("supportContact", e.target.value)} className="bg-background border-border min-h-[60px]" /></div>
                      <div className="space-y-2"><Label className="text-foreground">FAQ do suporte</Label><Textarea placeholder="Cole aqui o FAQ utilizado pelo suporte" value={form.faqContent} onChange={(e) => set("faqContent", e.target.value)} className="bg-background border-border min-h-[80px]" /></div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <p className="body-text">Com base nas soluções selecionadas, esta etapa coleta informações adicionais para personalizar sua proposta.</p>
                      <div className="space-y-2"><Label className="text-foreground">Informações adicionais sobre sua operação</Label><Textarea placeholder="Descreva detalhes relevantes sobre seu processo comercial, ferramentas, equipe, desafios..." value={form.observations} onChange={(e) => set("observations", e.target.value)} className="bg-background border-border min-h-[120px]" /></div>
                    </div>
                  )}
                </motion.div>
              )}

              {/* Step 5 */}
              {step === 5 && (
                <motion.div key="s5" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                  <h2 className="text-xl font-semibold text-foreground">Objetivo e Observações</h2>
                  <div className="space-y-4">
                    <div className="space-y-2"><Label className="text-foreground">Qual o principal desafio hoje?</Label><Textarea value={form.mainChallenge} onChange={(e) => set("mainChallenge", e.target.value)} className="bg-background border-border min-h-[80px]" /></div>
                    <div className="space-y-2"><Label className="text-foreground">Qual resultado você espera?</Label><Textarea value={form.expectedResult} onChange={(e) => set("expectedResult", e.target.value)} className="bg-background border-border min-h-[80px]" /></div>
                    <div className="space-y-2">
                      <Label className="text-foreground">Qual a urgência para começar?</Label>
                      <Select value={form.urgency} onValueChange={(v) => set("urgency", v)}>
                        <SelectTrigger className="bg-background border-border"><SelectValue placeholder="Selecione" /></SelectTrigger>
                        <SelectContent>
                          {["Imediata", "Esta semana", "Este mês", "Sem urgência"].map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2"><Label className="text-foreground">Observações importantes</Label><Textarea value={form.observations} onChange={(e) => set("observations", e.target.value)} className="bg-background border-border min-h-[60px]" /></div>
                    <div className="space-y-2">
                      <Label className="text-foreground">Deseja receber contato comercial?</Label>
                      <RadioGroup value={form.wantsContact} onValueChange={(v) => set("wantsContact", v)} className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer"><RadioGroupItem value="sim" /><span className="text-sm text-foreground">Sim</span></label>
                        <label className="flex items-center gap-2 cursor-pointer"><RadioGroupItem value="nao" /><span className="text-sm text-foreground">Não</span></label>
                      </RadioGroup>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Navigation */}
              <div className="flex justify-between items-center pt-6 mt-6 border-t border-border/30">
                {step > 1 ? (
                  <Button variant="ghost" onClick={() => setStep(step - 1)}>
                    <ArrowLeft className="mr-1 h-4 w-4" /> Anterior
                  </Button>
                ) : <div />}
                {step < TOTAL_STEPS ? (
                  <Button variant="gradient" onClick={() => setStep(step + 1)}>
                    Próximo <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                ) : (
                  <Button variant="gradient" onClick={handleSubmit}>
                    Enviar formulário <CheckCircle className="ml-1 h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 space-y-8"
          >
            <h2 className="text-section heading-display text-center">Perguntas Frequentes</h2>
            <Accordion type="single" collapsible className="space-y-2">
              {faqItems.map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="glass-card rounded-xl border-none px-6">
                  <AccordionTrigger className="text-foreground text-left hover:no-underline py-4">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="body-text pb-4">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
