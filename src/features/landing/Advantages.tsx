import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { CheckCircle2, TrendingDown, PiggyBank, FileText } from "lucide-react";

const advantages = [
  {
    title: "Zero Juros",
    desc: "Diferente do financiamento, no consórcio você paga apenas uma taxa de administração diluída nas parcelas.",
    icon: <TrendingDown className="w-8 h-8 text-secondary" />
  },
  {
    title: "Planejamento Financeiro",
    desc: "Crie o hábito de poupar com um objetivo claro, formando um patrimônio seguro para o seu futuro.",
    icon: <PiggyBank className="w-8 h-8 text-secondary" />
  },
  {
    title: "Poder de Compra à Vista",
    desc: "Ao ser contemplado, sua carta de crédito equivale a dinheiro na mão, garantindo alto poder de negociação.",
    icon: <CheckCircle2 className="w-8 h-8 text-secondary" />
  },
  {
    title: "Menos Burocracia",
    desc: "Processo simplificado na adesão e muita flexibilidade na hora de utilizar o seu crédito.",
    icon: <FileText className="w-8 h-8 text-secondary" />
  }
];

export function Advantages() {
  const container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".adv-card",
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.15, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 70%",
          }
        }
      );
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 bg-white relative overflow-hidden" ref={container}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Por que escolher o Consórcio?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">Entenda porque milhares de brasileiros utilizam essa modalidade para conquistar seus sonhos todos os dias.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((adv, i) => (
            <div key={i} className="adv-card bg-slate-50 border border-slate-100 rounded-[2rem] p-8 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {adv.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{adv.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{adv.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
