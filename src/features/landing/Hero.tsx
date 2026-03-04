import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const container = useRef<HTMLDivElement>(null);
  
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-text",
        { y: 40, opacity: 0, immediateRender: false },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power3.out", delay: 0.2 }
      );
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative min-h-screen flex items-end pb-16 md:pb-24 lg:pb-32 overflow-hidden bg-background">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=2070&auto=format&fit=crop" 
          alt="Port and containers at twilight" 
          className="w-full h-full object-cover scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          
          {/* Main copy */}
          <div className="max-w-3xl">
            <div className="hero-text inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse mr-3"></span>
              <span className="text-xs font-mono tracking-widest text-slate-300 uppercase">Seguro Logístico Classe A</span>
            </div>
            
            <h1 className="hero-text text-4xl sm:text-5xl md:text-6xl xl:text-[5.5rem] leading-[1.05] tracking-tight text-white mb-6">
              <span className="block font-bold mb-2">A SEGURANÇA LOGÍSTICA ENCONTRA A</span>
              <span className="block font-drama italic text-accent">Precisão Absoluta.</span>
            </h1>
            
            <p className="hero-text text-base md:text-lg lg:text-xl text-slate-400 max-w-2xl font-light leading-relaxed mb-10">
              A infraestrutura de proteção definitiva para transportadoras e embarcadores. Coberturas massivas. Respostas em milissegundos.
            </p>
            
            <div className="hero-text flex flex-col sm:flex-row gap-4">
              <a href="/cotacao" className="magnetic-btn bg-white text-background px-8 py-4 rounded-full font-bold text-center inline-flex justify-center items-center hover:bg-slate-100 transition-colors">
                <span className="relative z-10 flex items-center text-sm md:text-base">
                  Iniciar Protocolo de Cotação <ArrowRight className="w-5 h-5 ml-2" />
                </span>
              </a>
              <a href="#diferencial" className="px-8 py-4 rounded-full font-semibold text-white border border-white/20 hover:bg-white/5 transition-colors text-center text-sm md:text-base">
                Compreender os Riscos
              </a>
            </div>
          </div>

          {/* Stats — visible only on large screens */}
          <div className="hero-text hidden lg:flex flex-col gap-6 text-right pb-4 flex-shrink-0">
            <div>
              <p className="text-4xl font-drama text-white">R$ 5B+</p>
              <p className="text-sm font-mono tracking-widest text-slate-500 mt-1 uppercase">Em Cargas Seguradas</p>
            </div>
            <div>
              <p className="text-4xl font-drama text-white">24/7</p>
              <p className="text-sm font-mono tracking-widest text-slate-500 mt-1 uppercase">Monitoramento & Suporte</p>
            </div>
          </div>

          {/* Stats — only visible on mobile/tablet as a horizontal row */}
          <div className="hero-text flex lg:hidden items-center gap-8">
            <div>
              <p className="text-3xl font-bold text-white">R$ 5B+</p>
              <p className="text-xs font-mono tracking-widest text-slate-500 mt-1 uppercase">Cargas Seguradas</p>
            </div>
            <div className="w-px h-10 bg-white/10"></div>
            <div>
              <p className="text-3xl font-bold text-white">24/7</p>
              <p className="text-xs font-mono tracking-widest text-slate-500 mt-1 uppercase">Suporte</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
