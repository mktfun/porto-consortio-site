import React, { useState } from "react";
import { Loader2, ArrowRight, Lock } from "lucide-react";

export function LeadForm() {
  const [form, setForm] = useState({
    nome: "", email: "", whats: "", tipo: "", valor: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const payload = {
        name: form.nome,
        email: form.email,
        personal_phone: form.whats,
        cf_aqr_respondido: `Tipo: ${form.tipo} | Valor: R$ ${form.valor}`
      };

      await fetch('https://n8n.tork.services/webhook/avisar-rodrigo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      setIsSuccess(true);
    } catch (err) {
      console.error(err);
      alert("Erro ao enviar. Tente novamente.");
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
                Faça sua simulação agora.
              </h2>
              <p className="text-lg text-slate-400 mb-12">
                Conecte-se com a JJ & Amorim. Enviaremos as melhores opções de crédito da Porto Seguro para o seu perfil em tempo recorde.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Simulação Expressa</h4>
                    <p className="text-slate-500">Avaliamos as melhores cartas de crédito disponíveis.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 text-accent">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Segurança Total</h4>
                    <p className="text-slate-500">Seus dados estão protegidos conosco.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-[2rem] p-8 border border-white/5">
              {isSuccess ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Lock className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Tudo Certo!</h3>
                  <p className="text-slate-400">Recebemos seus dados. Um especialista entrará em contato via WhatsApp em breve.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-white mb-6">Iniciar Simulação</h3>
                  <form onSubmit={handleSubmit} className="space-y-5 text-sm">
                    <div>
                      <label className="block text-slate-400 mb-2 font-mono uppercase text-xs">Nome Completo</label>
                      <input required value={form.nome} onChange={update('nome')} type="text" className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-xl text-white focus:outline-none focus:border-primary transition-colors" placeholder="Seu nome" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-400 mb-2 font-mono uppercase text-xs">Email</label>
                        <input required value={form.email} onChange={update('email')} type="email" className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-xl text-white focus:outline-none focus:border-primary transition-colors" placeholder="seu@email.com" />
                      </div>
                      <div>
                        <label className="block text-slate-400 mb-2 font-mono uppercase text-xs">WhatsApp</label>
                        <input required value={form.whats} onChange={update('whats')} type="tel" className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-xl text-white focus:outline-none focus:border-primary transition-colors" placeholder="(00) 00000-0000" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-slate-400 mb-2 font-mono uppercase text-xs">O que deseja comprar?</label>
                      <select required value={form.tipo} onChange={update('tipo')} className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-xl text-white focus:outline-none focus:border-primary transition-colors appearance-none">
                        <option value="" className="text-slate-900">Selecione o objetivo...</option>
                        <option value="Imóvel" className="text-slate-900">Imóvel</option>
                        <option value="Automóvel" className="text-slate-900">Automóvel</option>
                        <option value="Veículo Pesado" className="text-slate-900">Veículo Pesado</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-slate-400 mb-2 font-mono uppercase text-xs">Valor aproximado do crédito</label>
                      <input required value={form.valor} onChange={update('valor')} type="text" className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-xl text-white focus:outline-none focus:border-primary transition-colors" placeholder="Ex: R$ 150.000,00" />
                    </div>
                    
                    <button disabled={isSubmitting} type="submit" className="magnetic-btn w-full flex items-center justify-center px-4 py-4 bg-primary text-white font-bold rounded-xl shadow-lg mt-6 disabled:opacity-70">
                      <span className="relative z-10 flex items-center">
                        {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : null}
                        {isSubmitting ? "Transmitindo Dados..." : "Solicitar Simulação"}
                      </span>
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
