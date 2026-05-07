import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, ShieldCheck, Clock, TrendingUp } from "lucide-react";

export function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-element",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.1 }
      );
      
      gsap.fromTo(
        ".floating-card",
        { y: 0 },
        { y: -15, duration: 3, yoyo: true, repeat: -1, ease: "sine.inOut" }
      );
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-primary">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#002b5c]/50 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="hero-element inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse mr-2"></span>
              <span className="text-xs font-semibold tracking-wide text-white">Especialista Porto Consórcio</span>
            </div>
            
            <h1 className="hero-element text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              O jeito mais <span className="text-secondary italic font-drama">inteligente</span> de conquistar o seu sonho.
            </h1>
            
            <p className="hero-element text-lg text-blue-100 mb-8 max-w-lg leading-relaxed">
              Carro, moto, imóvel ou energia solar. Sem pagar juros abusivos, com parcelas que cabem no seu bolso e a segurança da Porto Seguro.
            </p>
            
            <div className="hero-element flex flex-col sm:flex-row gap-4">
              <a href="#simulador" className="magnetic-btn bg-white text-primary px-8 py-4 rounded-full font-bold text-center inline-flex justify-center items-center hover:bg-gray-50 transition-colors shadow-xl">
                Simular Agora <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>

            <div className="hero-element flex items-center gap-6 mt-10 text-sm text-blue-100 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-secondary" />
                <span>100% Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-secondary" />
                <span>Zero Juros</span>
              </div>
            </div>
          </div>

          {/* Visual Elements (Floating Cards) */}
          <div className="w-full lg:w-1/2 relative min-h-[400px] hidden md:block">
            {/* Main glass card */}
            <div className="hero-element glass absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm rounded-[2rem] p-8 z-10">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-primary text-xl">Simulação de Imóvel</h3>
                <div className="bg-primary/10 text-primary text-xs px-2 py-1 rounded font-semibold">Porto Seguro</div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-slate-500 mb-1">Crédito desejado</p>
                  <p className="text-3xl font-bold text-slate-800">R$ 500.000</p>
                </div>
                
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-sm text-slate-500 mb-1">Parcela estimada a partir de</p>
                  <p className="text-2xl font-bold text-secondary">R$ 2.450<span className="text-sm font-normal text-slate-500">/mês</span></p>
                </div>
              </div>
            </div>

            {/* Floating decorator card 1 */}
            <div className="hero-element floating-card glass-dark absolute top-0 right-10 rounded-2xl p-4 flex items-center gap-4 z-20">
              <div className="bg-white/20 p-2 rounded-full">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Contemplação</p>
                <p className="text-blue-200 text-xs">Sorteios mensais</p>
              </div>
            </div>
            
            {/* Floating decorator card 2 */}
            <div className="hero-element floating-card glass-dark absolute bottom-10 left-0 rounded-2xl p-4 flex items-center gap-4 z-20" style={{ animationDelay: '1.5s' }}>
              <div className="bg-white/20 p-2 rounded-full">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Investimento</p>
                <p className="text-blue-200 text-xs">Poder de compra à vista</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}