import React, { useEffect } from "react";
import { Navbar } from "@/features/landing/Navbar";
import { Footer } from "@/features/landing/Footer";
import { LeadForm } from "@/features/landing/LeadForm";

export default function Cultura() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background min-h-screen font-sans selection:bg-primary/30 text-slate-800">
      <Navbar />
      
      {/* Hero Interno */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
            alt="Equipe unida - Cultura" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10 text-center">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Nosso DNA</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            Nossa Cultura
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            A forma como trabalhamos reflete os resultados que entregamos para você.
          </p>
        </div>
      </section>

      {/* Conteúdo Institucional */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Feitos de Pessoas para Pessoas</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Nossa cultura é baseada na empatia. Entendemos que por trás de cada cota de consórcio vendida existe uma família com expectativas, sonhos e planejamento financeiro envolvido.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Por isso, não treinamos nossos consultores para serem "tiradores de pedido", mas sim especialistas patrimoniais. Nosso time respira o mercado e foca em encontrar o cenário perfeito para o seu bolso.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" alt="Cultura corporativa" className="rounded-3xl shadow-lg w-full h-48 object-cover" />
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" alt="Reunião de equipe" className="rounded-3xl shadow-lg w-full h-48 object-cover mt-8" />
            </div>
          </div>
        </div>
      </section>

      <LeadForm />
      <Footer />
    </div>
  );
}
