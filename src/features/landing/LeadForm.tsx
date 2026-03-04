import React, { useState } from "react";
import { Loader2, ArrowRight, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export function LeadForm() {
  const [form, setForm] = useState({
    nome: "", email: "", whats: "", tipo: "", valor: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("leads").insert({
        name: form.nome,
        email: form.email,
        phone: form.whats,
        insurance_type: form.tipo || "Transporte de Cargas",
        custom_fields: {
          valor_medio: form.valor,
          tipo_carga: form.tipo,
          fonte: "landing-page-transporte-v2",
        },
        funnel_name: "transporte-cargas",
        funnel_stage: "lead",
        is_completed: true,
      });

      if (error) throw error;
      navigate("/sucesso");
    } catch (err) {
      console.error(err);
      toast({
        title: "Erro ao enviar",
        description: "Falha na sincronização. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="cotacao" className="py-24 bg-background relative z-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-16">
        <div className="bg-card rounded-[3rem] border border-white/10 p-8 md:p-16 relative overflow-hidden shadow-2xl shadow-black/50">
          
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent pointer-events-none"></div>
          
          <div className="grid lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Assuma o controle do seu risco agora.
              </h2>
              <p className="text-lg text-slate-400 mb-12">
                Conecte-se com um especialista senior em logística. Apresentaremos as condições de blindagem adequadas ao seu CNPJ em tempo recorde.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Cotação Expressa</h4>
                    <p className="text-slate-500">Mapeamos as top 12 seguradoras simultaneamente.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 text-accent">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Dados Encriptados</h4>
                    <p className="text-slate-500">Sua operação logística sob total sigilo.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-[2rem] p-8 border border-white/5">
              <h3 className="text-xl font-bold text-white mb-6">Iniciar Protocolo</h3>
              <form onSubmit={handleSubmit} className="space-y-5 text-sm">
                <div>
                  <label className="block text-slate-400 mb-2 font-mono uppercase text-xs">Empresa / Documento</label>
                  <input required value={form.nome} onChange={update('nome')} type="text" className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-xl text-white focus:outline-none focus:border-primary transition-colors" placeholder="Razão Social" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-400 mb-2 font-mono uppercase text-xs">Email</label>
                    <input required value={form.email} onChange={update('email')} type="email" className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-xl text-white focus:outline-none focus:border-primary transition-colors" placeholder="corporativo@xyz.com" />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-2 font-mono uppercase text-xs">Telefone</label>
                    <input required value={form.whats} onChange={update('whats')} type="tel" className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-xl text-white focus:outline-none focus:border-primary transition-colors" placeholder="(00) 00000-0000" />
                  </div>
                </div>
                <div>
                  <label className="block text-slate-400 mb-2 font-mono uppercase text-xs">Tipo de Carga</label>
                  <select value={form.tipo} onChange={update('tipo')} className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-xl text-white focus:outline-none focus:border-primary transition-colors appearance-none">
                    <option value="" className="text-slate-900">Selecione o perfil primário...</option>
                    <option value="Geral" className="text-slate-900">Carga Geral</option>
                    <option value="Frigorificada" className="text-slate-900">Frigorificada / Perecível</option>
                    <option value="Perigosa" className="text-slate-900">Produtos Perigosos (MOPP)</option>
                    <option value="Grãos" className="text-slate-900">Grãos / Granel</option>
                    <option value="Outros" className="text-slate-900">Outros Específicos</option>
                  </select>
                </div>
                
                <button disabled={isSubmitting} type="submit" className="magnetic-btn w-full flex items-center justify-center px-4 py-4 bg-primary text-white font-bold rounded-xl shadow-lg mt-6 disabled:opacity-70">
                  <span className="relative z-10 flex items-center">
                    {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : null}
                    {isSubmitting ? "Transmitindo Dados..." : "Solicitar Análise de Risco"}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
