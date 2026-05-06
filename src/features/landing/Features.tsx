import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldAlert, TerminalSquare, BoxSelect } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function Features() {
  const container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // Use gsap.fromTo with immediateRender:false to prevent the
    // "opacity 0 stuck forever" bug that causes blank sections
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".feature-card",
        { y: 50, opacity: 0, immediateRender: false },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".feature-cards-grid",
            start: "top 85%",
            once: true
          }
        }
      );
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section id="coberturas" ref={container} className="py-24 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-accent mb-6">
            <TerminalSquare className="w-5 h-5" />
            <span className="font-mono text-sm uppercase tracking-widest">Opções de Consórcio</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Planos sob medida para os{" "}
            <span className="block">Seus Sonhos.</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl">
            A Porto Seguro tem o plano perfeito para cada tamanho de sonho. Selecione a modalidade que se encaixa na sua necessidade.
          </p>
        </div>

        <div className="feature-cards-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Imóveis */}
          <div className="feature-card group relative bg-card rounded-[2rem] p-8 md:p-10 border border-white/5 hover:border-accent/30 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <ShieldAlert className="w-32 h-32" />
            </div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 text-white">
                <span className="font-mono font-bold text-lg">01</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Consórcio de Imóveis</h3>
              <p className="text-slate-400 mb-8 flex-grow">
                Compre, construa ou reforme sua casa, apartamento ou terreno de forma 100% planejada e sem surpresas.
              </p>
              <div className="space-y-3">
                {["Créditos até R$ 1 Milhão", "Prazos de até 200 meses", "Uso do FGTS liberado"].map((item) =>
                <div key={item} className="flex items-center gap-3 text-sm font-mono text-slate-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></div> {item}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Card 2: Automóveis */}
          <div className="feature-card group relative bg-primary rounded-[2rem] p-8 md:p-10 border border-primary-foreground/10 hover:-translate-y-2 transition-all duration-500 overflow-hidden shadow-2xl shadow-primary/20">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity mix-blend-overlay">
              <BoxSelect className="w-32 h-32 text-white" />
            </div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-center mb-8">
                <div className="w-14 h-14 bg-black/20 rounded-2xl flex items-center justify-center border border-white/10 text-white backdrop-blur-md">
                  <span className="font-mono font-bold text-lg">02</span>
                </div>
                <span className="bg-accent text-background text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  Zero Juros
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Consórcio de Automóveis</h3>
              <p className="text-primary-foreground/80 mb-8 flex-grow">
                Troque de carro ou compre seu primeiro zero km sem pagar o dobro do valor em juros de financiamento.
              </p>
              <div className="bg-black/20 rounded-xl p-4 backdrop-blur-sm border border-white/10 font-mono text-xs text-green-400 leading-relaxed">
                <p>{`> ESCOLHA A MARCA`}</p>
                <p>{`> ESCOLHA O MODELO`}</p>
                <p className="text-white mt-2">{`> SEU CARRO NA GARAGEM.`}</p>
              </div>
            </div>
          </div>

          {/* Card 3: Pesados */}
          <div className="feature-card group relative bg-card rounded-[2rem] p-8 md:p-10 border border-white/5 hover:border-accent/30 hover:-translate-y-2 transition-all duration-500 overflow-hidden md:col-span-2 lg:col-span-1">
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 text-white">
                <span className="font-mono font-bold text-lg">03</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Veículos Pesados</h3>
              <p className="text-slate-400 mb-8 flex-grow">
                Renove ou amplie sua frota de caminhões, tratores e implementos agrícolas com as melhores taxas do mercado.
              </p>
              <div className="bg-background rounded-xl p-4 border border-white/5">
                <div className="flex justify-between text-xs font-mono text-slate-500 mb-2">
                  <span>Prazos</span>
                  <span className="text-white">Até 120x</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-1.5 mb-4 overflow-hidden">
                  <div className="bg-accent h-1.5 w-4/5 rounded-full"></div>
                </div>
                <div className="flex justify-between text-xs font-mono text-slate-500 mb-2">
                  <span>Crédito Máximo</span>
                  <span className="text-white">R$ 800k</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-blue-500 h-1.5 w-2/3 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>);

}