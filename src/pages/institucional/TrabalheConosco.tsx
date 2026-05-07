import React, { useEffect } from "react";
import { Navbar } from "@/features/landing/Navbar";
import { Footer } from "@/features/landing/Footer";
import { LeadForm } from "@/features/landing/LeadForm";

export default function TrabalheConosco() {
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
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2076&auto=format&fit=crop" 
            alt="Profissional sorrindo" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10 text-center">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Faça parte do time</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            Trabalhe Conosco
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            Junte-se à corretora especialista em soluções da Porto Seguro e acelere sua carreira.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-16 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Venha ser um(a) Especialista</h2>
          <p className="text-lg text-slate-600 mb-12">Estamos em constante expansão e sempre buscamos talentos movidos por resultados, ética e vontade de crescer. Se você se identifica com nosso propósito de viabilizar sonhos, queremos conhecer você.</p>
          
          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 text-left">
            <h3 className="text-2xl font-bold mb-6 text-slate-800">Vagas Abertas</h3>
            <div className="space-y-4">
              <div className="p-6 bg-white border border-slate-100 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h4 className="font-bold text-lg text-primary">Consultor(a) de Consórcios</h4>
                  <p className="text-sm text-slate-500">Comercial • Híbrido • CLT/PJ</p>
                </div>
                <button className="bg-secondary text-white px-6 py-2 rounded-xl font-bold text-sm hover:bg-secondary/90 transition-colors">Candidatar-se</button>
              </div>
              <div className="p-6 bg-white border border-slate-100 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h4 className="font-bold text-lg text-primary">SDR (Pré-vendas)</h4>
                  <p className="text-sm text-slate-500">Marketing/Comercial • Presencial • CLT</p>
                </div>
                <button className="bg-secondary text-white px-6 py-2 rounded-xl font-bold text-sm hover:bg-secondary/90 transition-colors">Candidatar-se</button>
              </div>
            </div>
            
            <p className="text-sm text-slate-500 mt-8 text-center">Não achou sua vaga? Envie seu currículo para <a href="mailto:vagas@portoconsorcioportal.com.br" className="text-secondary font-bold">vagas@portoconsorcioportal.com.br</a></p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
