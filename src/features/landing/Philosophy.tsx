import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Philosophy() {
  const container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".split-line", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} id="diferencial" className="py-32 bg-slate-950 relative overflow-hidden border-y border-white/5 z-10">
      {/* Organic Texture Overlay */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay">
        <img 
          src="https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=2070&auto=format&fit=crop" 
          alt="Dark marble texture" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-16 text-center relative z-10">
        <div className="mb-12">
          <p className="split-line text-lg text-slate-500 font-mono tracking-widest uppercase mb-6">
            O Paradigma A.M & Amorim
          </p>
          <p className="split-line text-2xl md:text-3xl font-light text-slate-400 mb-6">
            A maioria do mercado foca em vender papel.
          </p>
          <h2 className="split-line text-4xl md:text-6xl font-drama italic text-white leading-tight">
            Nós focamos em transferir de fato <br />
            o seu <span className="text-accent not-italic font-bold font-sans">risco operacional</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-24 text-left">
          <div className="split-line bg-card/50 backdrop-blur-md p-10 rounded-[2rem] border border-white/5">
            <div className="text-accent text-6xl font-drama leading-none mb-4 opacity-50">"</div>
            <p className="text-slate-300 text-lg mb-6 relative z-10">
              O atendimento faz toda a diferença. Tivemos um sinistro grave e a equipe acompanhou todo o processo junto à seguradora. Resolveram tudo de forma ágil, sem travar nossa operação.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold font-mono">CT</div>
              <div>
                <p className="text-white font-bold">Cliente Transportadora</p>
                <p className="text-slate-500 text-sm">Operação Rodoviária — SP</p>
              </div>
            </div>
          </div>

          <div className="split-line bg-card/50 backdrop-blur-md p-10 rounded-[2rem] border border-white/5">
            <div className="text-primary text-6xl font-drama leading-none mb-4 opacity-50">"</div>
            <p className="text-slate-300 text-lg mb-6 relative z-10">
              Cotações claras e sem letras miúdas. A corretora conseguiu condições absurdamente melhores do que tínhamos antes, com a mesma cobertura base das gigantes.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold font-mono">EI</div>
              <div>
                <p className="text-white font-bold">Embarcador Industrial</p>
                <p className="text-slate-500 text-sm">Setor Químico — ABC</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
