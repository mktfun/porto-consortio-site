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
    icon: Database,
    color: "from-primary/20 to-transparent",
  },
  {
    num: "02",
    title: "Scrutiny de Mercado",
    desc: "Nossos corretores auditam as 12 maiores seguradoras do país cruzando taxas vs. condições de franquia.",
    icon: ScanSearch,
    color: "from-accent/20 to-transparent",
  },
  {
    num: "03",
    title: "Proposta Blindada",
    desc: "Entrega do relatório técnico contendo a melhor configuração de apólice (RCTR-C + adicionais exatos).",
    icon: Send,
    color: "from-blue-500/20 to-transparent",
  },
  {
    num: "04",
    title: "Emissão & Protocolo",
    desc: "Ativação instantânea da cobertura. Embarque liberado com averbação eletrônica configurada.",
    icon: FileCheck,
    color: "from-green-500/20 to-transparent",
  },
];

export function Protocol() {
  const container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Simple fade-in per card — no pinning to avoid layout gaps
      gsap.fromTo(
        ".protocol-step",
        { x: -30, opacity: 0, immediateRender: false },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".protocol-steps",
            start: "top 80%",
            once: true,
          },
        }
      );
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="py-24 bg-background relative z-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-base text-accent font-semibold tracking-wide uppercase mb-4 font-mono">Metodologia</h2>
          <p className="text-4xl md:text-5xl font-bold text-white">
            Ciclo de Operação em 4 Fases.
          </p>
        </div>

        {/* Vertical timeline layout — no GSAP pinning */}
        <div className="protocol-steps relative">
          {/* Connector line */}
          <div className="absolute left-8 md:left-10 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent hidden md:block"></div>

          <div className="space-y-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`protocol-step relative flex flex-col md:flex-row gap-6 md:gap-10 bg-card border border-white/5 p-8 md:p-10 rounded-[2rem] overflow-hidden group hover:border-white/10 transition-all duration-300`}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                {/* Step number circle — aligned with connector */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-background border border-white/10 flex flex-col items-center justify-center">
                    <step.icon className="w-6 h-6 md:w-8 md:h-8 text-slate-500 mb-1" strokeWidth={1.5} />
                    <span className="font-mono text-xs text-slate-600">FASE {step.num}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="bg-accent/10 text-accent font-mono text-xs px-3 py-1 rounded-full border border-accent/20">
                      {step.num}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl">
                    {step.desc}
                  </p>
                </div>

                {/* Large number bg decoration */}
                <div className="absolute right-6 bottom-4 text-7xl md:text-8xl font-mono font-bold text-white/3 select-none pointer-events-none">
                  {step.num}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
