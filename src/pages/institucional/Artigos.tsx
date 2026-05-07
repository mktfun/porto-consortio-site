import React, { useEffect } from "react";
import { Navbar } from "@/features/landing/Navbar";
import { Footer } from "@/features/landing/Footer";
import { ArrowRight } from "lucide-react";

export default function Artigos() {
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
            src="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?q=80&w=2070&auto=format&fit=crop" 
            alt="Caderno e anotações - Blog" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10 text-center">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Blog & Educação Financeira</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            Artigos sobre Consórcio
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            Aprenda os segredos para ser contemplado mais rápido e como investir de forma inteligente.
          </p>
        </div>
      </section>

      {/* Grid de Artigos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Artigo 1 */}
            <a href="#" className="group block bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:border-secondary/30 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop" alt="Casa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-secondary uppercase tracking-wider mb-2 block">Dicas de Consórcio</span>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors">Como usar o FGTS para dar lance no consórcio de imóveis?</h3>
                <p className="text-slate-500 text-sm mb-6 line-clamp-3">Muitos brasileiros não sabem, mas é perfeitamente possível (e recomendado) utilizar o saldo da sua conta do FGTS para...</p>
                <span className="flex items-center text-primary font-bold text-sm group-hover:text-secondary transition-colors">Ler artigo <ArrowRight className="w-4 h-4 ml-1" /></span>
              </div>
            </a>

            {/* Artigo 2 */}
            <a href="#" className="group block bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:border-secondary/30 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1964&auto=format&fit=crop" alt="Carro" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-secondary uppercase tracking-wider mb-2 block">Educação Financeira</span>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors">Consórcio vs Financiamento: Qual vale a pena?</h3>
                <p className="text-slate-500 text-sm mb-6 line-clamp-3">Colocamos na ponta do lápis os custos efetivos totais das duas modalidades. A diferença no longo prazo vai te surpreender.</p>
                <span className="flex items-center text-primary font-bold text-sm group-hover:text-secondary transition-colors">Ler artigo <ArrowRight className="w-4 h-4 ml-1" /></span>
              </div>
            </a>

            {/* Artigo 3 */}
            <a href="#" className="group block bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:border-secondary/30 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop" alt="Caminhão" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-secondary uppercase tracking-wider mb-2 block">Empresas</span>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors">Como renovar sua frota pesada sem descapitalizar a empresa</h3>
                <p className="text-slate-500 text-sm mb-6 line-clamp-3">O consórcio de pesados é a ferramenta secreta de grandes transportadoras para manter frotas atualizadas e custos de manutenção baixos.</p>
                <span className="flex items-center text-primary font-bold text-sm group-hover:text-secondary transition-colors">Ler artigo <ArrowRight className="w-4 h-4 ml-1" /></span>
              </div>
            </a>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
