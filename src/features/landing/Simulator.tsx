import React, { useState, useRef } from "react";
import { Calculator } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Simulator() {
  const [type, setType] = useState<"imovel" | "automovel">("imovel");
  const [mode, setMode] = useState<"credito" | "parcela">("credito");
  
  // Imóvel: crédito de 100k a 1M
  // Automóvel: crédito de 50k a 300k
  const minCredit = type === "imovel" ? 100000 : 50000;
  const maxCredit = type === "imovel" ? 1000000 : 300000;
  const stepCredit = 10000;

  const [value, setValue] = useState(type === "imovel" ? 300000 : 100000);

  // Calcula valores simulados
  // No consórcio a parcela é aprox (Crédito + Taxa Adm) / prazo
  // Vamos simplificar e usar uma regra visual para impacto:
  const prazo = type === "imovel" ? 200 : 80;
  const taxaAdm = 0.15; // 15% taxa total
  const parcelaConsorcio = (value * (1 + taxaAdm)) / prazo;
  
  // Financiamento seria muito mais caro (juros compostos)
  const parcelaFinanciamento = (value * 2) / prazo; 
  const economia = (parcelaFinanciamento - parcelaConsorcio) * prazo;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(val);
  };

  const handleTypeChange = (newType: "imovel" | "automovel") => {
    setType(newType);
    setValue(newType === "imovel" ? 300000 : 100000);
  };

  const containerRef = useRef<HTMLElement>(null);
  
  // Anima do momento que entra na tela até encostar no topo
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"]
  });

  const borderRadius = useTransform(scrollYProgress, [0, 1], ["50% 50% 0 0", "0% 0% 0 0"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["20%", "0%"]);

  return (
    <section ref={containerRef} id="simulador" className="h-[200vh] -mb-[100vh] relative bg-slate-50">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-slate-50 z-0"></div>
      
      <motion.div 
        style={{ borderRadius, scale, y }}
        className="absolute bottom-0 left-[-10%] right-[-10%] h-[120%] bg-primary origin-bottom z-0 overflow-hidden shadow-2xl" 
      >
        {/* Premium background image */}
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Arquitetura moderna" 
          className="w-full h-full object-cover opacity-10 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full pt-10">
        
        <div className="text-center mb-12 relative z-10">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-sm rounded-full mb-4">
            <Calculator className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Simulador de Consórcio</h2>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">Descubra agora mesmo o quanto você pode economizar fugindo dos juros do financiamento tradicional.</p>
        </div>

        {/* Simulador Card */}
        <div className="bg-white w-full rounded-[2rem] sm:rounded-[2.5rem] p-5 sm:p-6 md:p-10 mx-auto max-w-4xl relative shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100">
          
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
            {/* Controles */}
            <div className="flex-1 space-y-6 sm:space-y-8">
              
              {/* Type Toggle */}
              <div className="flex p-1 bg-slate-100 rounded-full">
                <button 
                  onClick={() => handleTypeChange("imovel")}
                  className={`flex-1 py-3 text-sm font-bold rounded-full transition-all ${type === "imovel" ? 'bg-white shadow-sm text-primary' : 'text-slate-500 hover:text-slate-700'}`}
                >
                  Imóvel
                </button>
                <button 
                  onClick={() => handleTypeChange("automovel")}
                  className={`flex-1 py-3 text-sm font-bold rounded-full transition-all ${type === "automovel" ? 'bg-white shadow-sm text-primary' : 'text-slate-500 hover:text-slate-700'}`}
                >
                  Automóvel
                </button>
              </div>

              {/* Slider Area */}
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Valor do Crédito</label>
                  <span className="text-3xl font-bold text-primary">{formatCurrency(value)}</span>
                </div>
                
                <input 
                  type="range" 
                  min={minCredit} 
                  max={maxCredit} 
                  step={stepCredit}
                  value={value}
                  onChange={(e) => setValue(Number(e.target.value))}
                  className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-secondary"
                />
                <div className="flex justify-between mt-2 text-xs text-slate-600 font-bold">
                  <span>{formatCurrency(minCredit)}</span>
                  <span>{formatCurrency(maxCredit)}</span>
                </div>
              </div>

            </div>

            {/* Resultados */}
            <div className="lg:w-[45%] bg-gradient-to-br from-primary to-[#001838] rounded-[1.5rem] p-8 text-white shadow-2xl shadow-primary/20 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="mb-6 relative z-10">
                <p className="text-blue-200/80 text-xs sm:text-sm mb-2 uppercase tracking-wider font-semibold">Parcelas a partir de</p>
                <p className="text-4xl sm:text-5xl font-bold text-white mb-2 tracking-tight">{formatCurrency(parcelaConsorcio)}<span className="text-lg sm:text-xl font-medium text-blue-200/60">/mês</span></p>
                <p className="text-sm text-blue-200/70 font-medium">Prazo estimado: {prazo} meses</p>
              </div>

              <div className="pt-6 border-t border-white/10 mb-8 relative z-10">
                <p className="text-blue-200/80 text-xs sm:text-sm mb-1">Economia projetada vs. financiamento:</p>
                <p className="text-xl sm:text-2xl font-bold text-emerald-400">{formatCurrency(economia)}</p>
              </div>

              <a href="#cotacao" className="w-full bg-secondary hover:bg-secondary/90 text-white py-4 rounded-xl font-bold text-center transition-all shadow-lg hover:shadow-secondary/30 hover:-translate-y-0.5 transform duration-300 text-sm sm:text-base relative z-10">
                Receber Proposta Oficial
              </a>
            </div>
          </div>

        </div>
      </div>
      </div>
    </section>
  );
}
