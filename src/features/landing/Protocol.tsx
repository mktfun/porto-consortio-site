import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Database, ScanSearch, Send, FileCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Análise Telemetria",
    desc: "Processamos os dados do seu volume de transporte, rotas principais e histórico de sinistralidade.",
    icon: Database
  },
  {
    num: "02",
    title: "Scritiny de Mercado",
    desc: "Nossos corretores auditam as 12 maiores seguradoras do país cruzando taxas vs. condições de franquia.",
    icon: ScanSearch
  },
  {
    num: "03",
    title: "Proposta Blindada",
    desc: "Entrega do relatório técnico contendo a melhor configuração de apólice (RCTR-C + adicionais exatos).",
    icon: Send
  },
  {
    num: "04",
    title: "Emissão & Protocolo",
    desc: "Ativação instantânea da cobertura. Embarque liberado com averbação eletrônica configurada.",
    icon: FileCheck
  }
];

export function Protocol() {
  const container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Sticky stacking implementation
      const cards = gsap.utils.toArray(".sticky-card");
      cards.forEach((card: any, i) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top 15%",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
          scrub: true,
          animation: gsap.to(card, {
            scale: 0.9,
            opacity: 0.5,
            filter: "blur(10px)",
            ease: "none"
          })
        });
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="py-24 bg-background relative z-10">
      <div className="max-w-4xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-24">
          <h2 className="text-base text-accent font-semibold tracking-wide uppercase mb-4 font-mono">Metodologia</h2>
          <p className="text-4xl md:text-5xl font-bold text-white">
            Ciclo de Operação em 4 Fases.
          </p>
        </div>

        <div className="space-y-12 pb-32">
          {steps.map((step, idx) => (
            <div key={idx} className="sticky-card bg-card border border-white/5 p-12 rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row items-center gap-12 relative overflow-hidden h-[60vh] md:h-[40vh]">
              {/* Background Glow */}
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
              
              <div className="md:w-1/3 flex flex-col items-center justify-center">
                <step.icon className="w-24 h-24 text-slate-700 mb-6" strokeWidth={1} />
                <span className="text-6xl font-mono font-bold text-slate-800 absolute opacity-20 -left-4 bottom-4">{step.num}</span>
              </div>
              
              <div className="md:w-2/3 relative z-10 text-center md:text-left">
                <div className="inline-flex items-center gap-3 mb-4">
                  <span className="bg-accent/10 text-accent font-mono text-xs px-3 py-1 rounded-full border border-accent/20">FASE {step.num}</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-lg text-slate-400">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
