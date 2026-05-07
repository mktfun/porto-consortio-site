import React, { useEffect } from "react";
import { Navbar } from "@/features/landing/Navbar";
import { Footer } from "@/features/landing/Footer";
import { LeadForm } from "@/features/landing/LeadForm";
import { Simulator } from "@/features/landing/Simulator";
import { ArrowDown } from "lucide-react";

export default function Empresarial() {
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
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
            alt="Escritório Corporativo - Consórcio Empresarial" 
            className="w-full h-full object-cover opacity-50 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10 text-center">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Especialista Porto Seguro</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            Consórcio Empresarial
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            Expanda suas operações adquirindo salas corporativas, galpões ou renovando sua frota, preservando o fluxo de caixa.
          </p>
          <a href="#simulador" className="inline-flex items-center gap-2 text-white bg-secondary/90 hover:bg-secondary px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
            Fazer Simulação <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </section>

      {/* Vantagens JJ & Amorim */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Soluções Corporativas</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Traga seu projeto de expansão para quem entende. Atendemos CNPJs com expertise de 10 anos em crédito direcionado.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <div className="w-14 h-14 bg-blue-100 text-primary rounded-2xl flex items-center justify-center text-xl font-bold mb-6">1</div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">Sem Descapitalizar</h3>
              <p className="text-slate-500">Mantenha o capital de giro da sua empresa investido no que realmente importa: seu core business.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <div className="w-14 h-14 bg-blue-100 text-primary rounded-2xl flex items-center justify-center text-xl font-bold mb-6">2</div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">Sedes e Galpões</h3>
              <p className="text-slate-500">Adquira lajes corporativas ou galpões logísticos deixando de pagar aluguel mensal.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <div className="w-14 h-14 bg-blue-100 text-primary rounded-2xl flex items-center justify-center text-xl font-bold mb-6">3</div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">Dedução Fiscal</h3>
              <p className="text-slate-500">Em alguns enquadramentos fiscais (Lucro Real), as taxas de consórcio podem otimizar as despesas corporativas dedutíveis.</p>
            </div>
          </div>
        </div>
      </section>

      <Simulator />
      <LeadForm />
      <Footer />
    </div>
  );
}
