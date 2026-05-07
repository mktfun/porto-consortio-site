import React, { useEffect } from "react";
import { Navbar } from "@/features/landing/Navbar";
import { Footer } from "@/features/landing/Footer";
import { LeadForm } from "@/features/landing/LeadForm";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contato() {
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
            src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2071&auto=format&fit=crop" 
            alt="Contato telefônico" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10 text-center">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Fale Conosco</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            Contato
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            Nossa equipe de especialistas está pronta para tirar todas as suas dúvidas.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Como podemos ajudar?</h2>
            <p className="text-lg text-slate-600 mb-10">Seja para iniciar um novo consórcio, dar um lance ou apenas tirar dúvidas sobre planos, estamos disponíveis pelos canais abaixo.</p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">WhatsApp / Telefone</h4>
                  <p className="text-slate-500 mt-1">Horário comercial (Seg-Sex)</p>
                  <a href="#" className="text-primary font-bold mt-2 block hover:text-secondary">(11) 99999-9999</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">E-mail</h4>
                  <p className="text-slate-500 mt-1">Retornamos em até 24h</p>
                  <a href="mailto:contato@portoconsorcioportal.com.br" className="text-primary font-bold mt-2 block hover:text-secondary">contato@portoconsorcioportal.com.br</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Escritório</h4>
                  <p className="text-slate-500 mt-1">Venha tomar um café conosco.</p>
                  <p className="text-primary font-bold mt-2">São Paulo - SP</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-50 p-8 md:p-10 rounded-[2rem] border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Mande uma mensagem</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Seu Nome" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary outline-none" />
              <input type="email" placeholder="Seu E-mail" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary outline-none" />
              <input type="tel" placeholder="Seu Telefone/WhatsApp" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary outline-none" />
              <textarea placeholder="Como podemos te ajudar?" rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary outline-none resize-none"></textarea>
              <button type="button" className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-secondary/30">
                Enviar Mensagem
              </button>
            </form>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
