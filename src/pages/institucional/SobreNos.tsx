import React, { useEffect } from "react";
import { Navbar } from "@/features/landing/Navbar";
import { Footer } from "@/features/landing/Footer";
import { LeadForm } from "@/features/landing/LeadForm";

export default function SobreNos() {
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
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=2070&auto=format&fit=crop" 
            alt="Equipe trabalhando - Sobre Nós" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10 text-center">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Nossa História</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            Sobre a Corretora
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            Há mais de 10 anos sendo a ponte de confiança entre você e a Porto Seguro.
          </p>
        </div>
      </section>

      {/* Conteúdo Institucional */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">Nossa Missão é realizar seus objetivos</h2>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            A JJ & Amorim nasceu com um propósito muito claro: desmistificar o consórcio e o mercado financeiro para os brasileiros. Ao longo de mais de uma década, temos orgulho de carregar a chancela de parceiros oficiais da Porto Seguro, oferecendo não apenas crédito, mas planejamento financeiro sólido.
          </p>
          <p className="text-lg text-slate-600 mb-12 leading-relaxed">
            Acreditamos que todo sonho, seja a casa própria, o carro zero km ou a expansão da sua empresa, pode ser alcançado de forma inteligente, fugindo das taxas abusivas dos financiamentos tradicionais.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 text-left mt-16">
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-primary">Visão</h3>
              <p className="text-slate-600">Ser a corretora referência em consórcios no Brasil, reconhecida pela transparência absoluta e pelo atendimento consultivo de excelência.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-primary">Valores</h3>
              <ul className="text-slate-600 space-y-2 list-disc list-inside">
                <li>Ética inegociável</li>
                <li>Transparência em cada contrato</li>
                <li>Foco no sucesso do cliente</li>
                <li>Inovação contínua</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <LeadForm />
      <Footer />
    </div>
  );
}
