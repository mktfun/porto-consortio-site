import React, { useState } from "react";
import { Calculator } from "lucide-react";

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

  return (
    <section id="simulador" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background with abstract wave */}
      <div className="absolute inset-0 bg-slate-50 z-0"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[600px] bg-primary rounded-t-[100%] scale-150 origin-bottom translate-y-[30%] z-0"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        
        <div className="text-center mb-12 relative z-10">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-4">
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
    </section>
  );
}
