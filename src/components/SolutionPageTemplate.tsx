import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

interface SolutionPageProps {
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  howItWorks: { title: string; desc: string }[];
  benefits: string[];
  audience: string[];
  videoTitle?: string;
  children?: ReactNode;
}

export function SolutionPageTemplate({
  icon: Icon,
  title,
  tagline,
  description,
  howItWorks,
  benefits,
  audience,
  videoTitle,
  children,
}: SolutionPageProps) {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-lumix-blue/10 blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-lumix-lilac/10 blur-[100px]" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl space-y-6">
            <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center">
              <Icon className="h-7 w-7 text-primary-foreground" />
            </div>
            <h1 className="text-hero heading-display">{title}</h1>
            <p className="text-xl font-medium gradient-text">{tagline}</p>
            <p className="body-text text-lg max-w-2xl">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contato">
                <Button variant="gradient" size="lg">Solicitar proposta <ArrowRight className="ml-1 h-4 w-4" /></Button>
              </Link>
              <Link to="/solucoes">
                <Button variant="ghost-glow" size="lg">Ver todas soluções</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp} className="mb-16">
            <h2 className="text-section heading-display">Como funciona</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {howItWorks.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-8 space-y-3"
              >
                <div className="text-sm font-bold gradient-text">Passo {i + 1}</div>
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="body-text text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp} className="space-y-6">
              <h2 className="text-section heading-display">Benefícios</h2>
              <div className="space-y-4">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{b}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeUp} className="space-y-6">
              <h2 className="text-section heading-display">Para quem é</h2>
              <div className="space-y-4">
                {audience.map((a, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card/50 border border-border/30">
                    <div className="h-2 w-2 rounded-full gradient-bg flex-shrink-0 mt-2" />
                    <span className="text-sm text-foreground">{a}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Extra content */}
      {children}

      {/* Video */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto">
            <div className="glass-card rounded-2xl overflow-hidden">
              <div className="aspect-video bg-muted/20 flex items-center justify-center relative cursor-pointer group">
                <div className="absolute inset-0 bg-gradient-to-br from-lumix-blue/5 to-lumix-lilac/5" />
                <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="h-8 w-8 text-primary-foreground ml-1" />
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-semibold text-foreground">{videoTitle || `${title} — Demonstração`}</h3>
                <p className="body-text text-sm mt-1">Veja como funciona na prática.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center space-y-6">
          <motion.div {...fadeUp} className="space-y-6 max-w-2xl mx-auto">
            <h2 className="text-section heading-display">Pronto para transformar sua operação?</h2>
            <p className="body-text text-lg">Solicite uma proposta personalizada e descubra como podemos ajudar.</p>
            <Link to="/contato">
              <Button variant="gradient" size="xl">Solicitar proposta <ArrowRight className="ml-1 h-5 w-5" /></Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
