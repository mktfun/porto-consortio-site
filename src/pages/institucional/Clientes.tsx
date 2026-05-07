import React, { useEffect } from "react";
import { Navbar } from "@/features/landing/Navbar";
import { Footer } from "@/features/landing/Footer";
import { LeadForm } from "@/features/landing/LeadForm";

export default function Clientes() {
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
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop" 
            alt="Cliente feliz" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10 text-center">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Histórias de Sucesso</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            Nossos Clientes
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            Quem confia no nosso trabalho e já realizou seus sonhos com a JJ & Amorim e Porto Seguro.
          </p>
        </div>
      </section>

      {/* Depoimentos Mockados */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm relative">
              <div className="text-secondary text-5xl absolute top-4 right-6 opacity-20">"</div>
              <p className="text-slate-600 italic mb-6">"Eu achava que nunca ia conseguir sair do aluguel. Graças à consultoria especializada deles, fomos contemplados no 14º mês e hoje estamos na nossa casa própria!"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-300 rounded-full"></div>
                <div>
                  <p className="font-bold text-slate-800">Roberto Almeida</p>
                  <p className="text-xs text-slate-500">Consórcio de Imóvel</p>
                </div>
              </div>
            </div>
            
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm relative">
              <div className="text-secondary text-5xl absolute top-4 right-6 opacity-20">"</div>
              <p className="text-slate-600 italic mb-6">"Precisava renovar a frota da minha empresa, mas os juros do banco eram irreais. O consórcio para pesados salvou o ano da nossa transportadora."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-300 rounded-full"></div>
                <div>
                  <p className="font-bold text-slate-800">Carlos Eduardo</p>
                  <p className="text-xs text-slate-500">Consórcio Pesados</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm relative">
              <div className="text-secondary text-5xl absolute top-4 right-6 opacity-20">"</div>
              <p className="text-slate-600 italic mb-6">"A clareza nas explicações e o acompanhamento de perto mesmo depois da venda feita me deram muita segurança. Parabéns equipe!"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-300 rounded-full"></div>
                <div>
                  <p className="font-bold text-slate-800">Mariana Silva</p>
                  <p className="text-xs text-slate-500">Consórcio Auto</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeadForm />
      <Footer />
    </div>
  );
}
