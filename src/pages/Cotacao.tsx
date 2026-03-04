import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Loader2, ArrowRight, ArrowLeft, CheckCircle2, Lock, Phone, Truck, Building2, ShieldCheck } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const CARGO_TYPES = [
  { value: "Geral", label: "Carga Geral", icon: "📦", desc: "Produtos variados, carga mista" },
  { value: "Frigorificada", label: "Frigorificada / Perecível", icon: "❄️", desc: "Alimentos, fármacos com temperatura controlada" },
  { value: "Perigosa", label: "Produtos Perigosos (MOPP)", icon: "⚠️", desc: "Químicos, inflamáveis, explosivos" },
  { value: "Grãos", label: "Grãos / Granel", icon: "🌾", desc: "Commodities agrícolas" },
  { value: "Outros", label: "Outros", icon: "📋", desc: "Cargas especiais ou específicas" },
];

export default function Cotacao() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    nome: "",
    email: "",
    whats: "",
    tipo: "",
    valor: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const canNext1 = form.tipo !== "";
  const canNext2 = form.nome.trim() !== "" && form.whats.trim() !== "" && form.email.trim() !== "";

  const handleSubmit = async () => {
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
          fonte: "landing-page-cotacao-dedicada",
        },
        funnel_name: "transporte-cargas",
        funnel_stage: "lead",
        is_completed: true,
      });
      if (error) throw error;
      navigate("/sucesso");
    } catch (err) {
      console.error(err);
      toast({ title: "Erro ao enviar", description: "Falha na sincronização. Tente novamente.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Nav mínima */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-white/5 bg-background/80 backdrop-blur-xl">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-sm">JJ</div>
          <span className="font-bold text-white text-base hidden sm:block">JJ <span className="text-primary">&</span> Amorim</span>
        </Link>
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
          <Lock className="w-3 h-3" />
          <span className="hidden sm:block">COMUNICAÇÃO SEGURA SSL</span>
        </div>
        <Link to="/" className="text-slate-400 hover:text-white text-sm transition-colors">
          ← Voltar ao site
        </Link>
      </header>

      <main className="flex-1 flex flex-col lg:flex-row pt-16">

        {/* ── LEFT PANEL (desktop only) ── */}
        <div className="hidden lg:flex lg:w-[45%] xl:w-[42%] bg-card border-r border-white/5 flex-col justify-between p-12 xl:p-16 relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <p className="text-accent font-mono text-xs uppercase tracking-widest mb-6">Sistema de Cotação</p>
            <h1 className="text-4xl xl:text-5xl font-bold text-white leading-tight mb-6">
              Proteção<br />sob medida.<br />
              <span className="text-primary">Em minutos.</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Preencha o formulário e um especialista senior irá analisar o seu perfil de risco e apresentar as melhores condições do mercado.
            </p>
          </div>

          <div className="relative z-10 space-y-6">
            {[
              { icon: <Truck className="w-5 h-5" />, title: "Cotação Expressa", desc: "Mapeamos as top 12 seguradoras simultaneamente" },
              { icon: <ShieldCheck className="w-5 h-5" />, title: "Especialistas em Logística", desc: "Time com +10 anos no setor de transporte" },
              { icon: <Phone className="w-5 h-5" />, title: "Retorno em até 2 horas", desc: "Via WhatsApp ou e-mail, o que preferir" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{item.title}</p>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}

            <div className="pt-4 border-t border-white/5">
              <p className="text-slate-600 text-xs font-mono">CNPJ 21.364.352/0001-04 · SUSEP AUTORIZADA</p>
            </div>
          </div>
        </div>

        {/* ── RIGHT PANEL — FORM ── */}
        <div className="flex-1 flex items-center justify-center px-6 py-12 lg:py-16">
          <div className="w-full max-w-lg">

            {/* Progress */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-3">
                <p className="text-slate-500 text-xs font-mono uppercase tracking-widest">Etapa {step} de 3</p>
                <p className="text-slate-600 text-xs font-mono">{Math.round((step / 3) * 100)}%</p>
              </div>
              <div className="w-full bg-white/5 rounded-full h-1">
                <div
                  className="bg-primary h-1 rounded-full transition-all duration-500"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            </div>

            {/* STEP 1 — Tipo de Carga */}
            {step === 1 && (
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Qual é o perfil da sua carga?</h2>
                <p className="text-slate-400 mb-8">Selecione o tipo que melhor descreve sua operação principal.</p>
                <div className="space-y-3">
                  {CARGO_TYPES.map((c) => (
                    <button
                      key={c.value}
                      type="button"
                      onClick={() => update("tipo", c.value)}
                      className={`w-full text-left flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200 ${
                        form.tipo === c.value
                          ? "border-primary bg-primary/10 text-white"
                          : "border-white/10 bg-white/3 text-slate-400 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      <span className="text-2xl">{c.icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className={`font-semibold text-sm ${form.tipo === c.value ? "text-white" : "text-slate-300"}`}>{c.label}</p>
                        <p className="text-xs text-slate-500 truncate">{c.desc}</p>
                      </div>
                      {form.tipo === c.value && <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setStep(2)}
                  disabled={!canNext1}
                  className="mt-8 w-full flex items-center justify-center gap-2 py-4 bg-primary text-white font-bold rounded-2xl text-base disabled:opacity-40 transition-all hover:-translate-y-0.5 shadow-lg shadow-primary/20"
                >
                  Continuar <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* STEP 2 — Dados de Contato */}
            {step === 2 && (
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Seus dados de contato</h2>
                <p className="text-slate-400 mb-8">Para o especialista entrar em contato com a proposta.</p>
                <div className="space-y-5">
                  <div>
                    <label className="block text-slate-400 mb-2 font-mono uppercase text-xs tracking-widest">Empresa / Nome</label>
                    <input
                      required
                      value={form.nome}
                      onChange={(e) => update("nome", e.target.value)}
                      type="text"
                      className="w-full bg-white/5 border border-white/10 px-5 py-4 rounded-2xl text-white text-base focus:outline-none focus:border-primary transition-colors placeholder:text-slate-600"
                      placeholder="Razão Social ou Nome"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-2 font-mono uppercase text-xs tracking-widest">WhatsApp</label>
                    <input
                      required
                      value={form.whats}
                      onChange={(e) => update("whats", e.target.value)}
                      type="tel"
                      className="w-full bg-white/5 border border-white/10 px-5 py-4 rounded-2xl text-white text-base focus:outline-none focus:border-primary transition-colors placeholder:text-slate-600"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-2 font-mono uppercase text-xs tracking-widest">E-mail</label>
                    <input
                      required
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      type="email"
                      className="w-full bg-white/5 border border-white/10 px-5 py-4 rounded-2xl text-white text-base focus:outline-none focus:border-primary transition-colors placeholder:text-slate-600"
                      placeholder="contato@empresa.com.br"
                    />
                  </div>
                </div>
                <div className="flex gap-3 mt-8">
                  <button
                    onClick={() => setStep(1)}
                    className="flex items-center gap-2 px-6 py-4 rounded-2xl border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-all"
                  >
                    <ArrowLeft className="w-4 h-4" /> Voltar
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    disabled={!canNext2}
                    className="flex-1 flex items-center justify-center gap-2 py-4 bg-primary text-white font-bold rounded-2xl text-base disabled:opacity-40 transition-all hover:-translate-y-0.5 shadow-lg shadow-primary/20"
                  >
                    Continuar <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3 — Confirmação */}
            {step === 3 && (
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Confirme e envie</h2>
                <p className="text-slate-400 mb-8">Revise os dados antes de solicitar a análise.</p>

                <div className="space-y-3 mb-8">
                  {[
                    { label: "Tipo de Carga", value: form.tipo },
                    { label: "Empresa / Nome", value: form.nome },
                    { label: "WhatsApp", value: form.whats },
                    { label: "E-mail", value: form.email },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between py-3 border-b border-white/5">
                      <span className="text-slate-500 text-sm font-mono">{item.label}</span>
                      <span className="text-white text-sm font-medium">{item.value || "—"}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setStep(2)}
                    className="flex items-center gap-2 px-6 py-4 rounded-2xl border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-all"
                  >
                    <ArrowLeft className="w-4 h-4" /> Editar
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="flex-1 flex items-center justify-center gap-3 py-4 bg-primary text-white font-bold rounded-2xl text-base disabled:opacity-70 transition-all hover:-translate-y-0.5 shadow-2xl shadow-primary/30"
                  >
                    {isSubmitting ? (
                      <><Loader2 className="w-5 h-5 animate-spin" /> Enviando...</>
                    ) : (
                      <><CheckCircle2 className="w-5 h-5" /> Solicitar Análise de Risco</>
                    )}
                  </button>
                </div>

                <p className="text-center text-slate-600 text-xs font-mono mt-6">
                  <Lock className="w-3 h-3 inline mr-1" />
                  Dados protegidos · Retorno em até 2 horas
                </p>
              </div>
            )}

          </div>
        </div>
      </main>
    </div>
  );
}
