import { useState, useEffect, useRef, type ReactNode } from "react";
import {
  Shield, Phone, ArrowRight, CheckCircle2, MessageCircle, Menu, X,
  Clock, Zap, Users, Award, ChevronRight,
  Truck, Package, Leaf, HardHat, Cpu, FlaskConical, Shirt, Boxes,
} from "lucide-react";

/* ═══════════════════════════════════════════
   CONFIG
   ═══════════════════════════════════════════ */
const WA = "https://wa.me/5511979699832?text=Olá!%20Gostaria%20de%20uma%20cotação%20de%20seguro%20de%20transporte%20de%20cargas.";
const TEL = "(11) 97969-9832";

/* ═══════════════════════════════════════════
   REVEAL — Intersection Observer hook
   ═══════════════════════════════════════════ */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.unobserve(el); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}
function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useReveal();
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

/* ═══════════════════════════════════════════
   COUNTER — animated number
   ═══════════════════════════════════════════ */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true;
        let s = 0;
        const dur = 1800;
        const step = (t: number) => {
          if (!s) s = t;
          const p = Math.min((t - s) / dur, 1);
          setVal(Math.floor(p * to));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{val.toLocaleString("pt-BR")}{suffix}</span>;
}

/* ═══════════════════════════════════════════
   HEADER — transparent → white on scroll
   ═══════════════════════════════════════════ */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.06)]"
          : "bg-transparent"
        }`}
    >
      <div className="mx-auto max-w-6xl px-5 flex h-16 items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-[#3E4095] flex items-center justify-center transition-transform group-hover:scale-105">
            <Shield className="w-4 h-4 text-white" />
          </div>
          <span className="text-[15px] font-bold tracking-tight text-[#1e293b]">JJ & Amorim</span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#coberturas" className="text-[13px] font-medium text-[#64748b] hover:text-[#1e293b] transition-colors">Coberturas</a>
          <a href="#diferenciais" className="text-[13px] font-medium text-[#64748b] hover:text-[#1e293b] transition-colors">Diferenciais</a>
          <a href={`tel:${TEL.replace(/\D/g, "")}`} className="text-[13px] font-medium text-[#64748b] hover:text-[#1e293b] transition-colors flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5" /> {TEL}
          </a>
          <a href="#form" className="btn-primary px-4 py-2 rounded-lg text-[13px] font-semibold inline-flex items-center gap-1.5">
            Solicitar Cotação <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Mobile burger */}
        <button className="md:hidden p-2 -mr-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-5 py-5 space-y-4 animate-fade-in">
          <a href="#coberturas" onClick={() => setOpen(false)} className="block text-sm font-medium text-[#64748b]">Coberturas</a>
          <a href="#diferenciais" onClick={() => setOpen(false)} className="block text-sm font-medium text-[#64748b]">Diferenciais</a>
          <a href={`tel:${TEL.replace(/\D/g, "")}`} className="block text-sm font-medium text-[#64748b]">{TEL}</a>
          <a href="#form" onClick={() => setOpen(false)} className="btn-primary block text-center py-2.5 rounded-lg text-sm font-semibold">Solicitar Cotação</a>
        </div>
      )}
    </header>
  );
}

/* ═══════════════════════════════════════════
   HERO — Apple/Stripe: big text, almost nothing else
   ═══════════════════════════════════════════ */
function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Subtle gradient blobs — very faint */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-b from-[#3E4095]/[0.04] to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-6xl px-5 relative">
        <div className="max-w-3xl">
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#3E4095]/15 text-[#3E4095] text-[11px] font-semibold tracking-wide uppercase mb-8 animate-fade-up" style={{ animationDelay: "0ms" }}>
            <Shield className="w-3 h-3" /> Lei 14.599/2023 — Seguro Obrigatório
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(2.25rem,5vw,4rem)] font-black leading-[1.05] tracking-tight text-[#0f172a] mb-6 animate-fade-up" style={{ animationDelay: "80ms" }}>
            Seguro de transporte{" "}
            <br className="hidden sm:block" />
            <span className="gradient-text">de cargas.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-[#64748b] leading-relaxed max-w-xl mb-10 animate-fade-up" style={{ animationDelay: "160ms" }}>
            Cotação rápida e personalizada com as melhores seguradoras do país. Mais de 10 anos protegendo empresas em todo o Brasil.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 animate-fade-up" style={{ animationDelay: "240ms" }}>
            <a href="#form" className="btn-primary px-6 py-3 rounded-xl text-[15px] font-semibold inline-flex items-center justify-center gap-2">
              Solicitar Cotação <ArrowRight className="w-4 h-4" />
            </a>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-outline px-6 py-3 rounded-xl text-[15px] font-semibold inline-flex items-center justify-center gap-2">
              <MessageCircle className="w-4 h-4" /> Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   TRUST BAR — minimal marquee, grayscale logos as text
   ═══════════════════════════════════════════ */
const INSURERS = ["Bradesco Seguros", "HDI Seguros", "SulAmérica", "Liberty Seguros", "Allianz", "Tokio Marine", "Azul Seguros", "Sompo Seguros"];

function TrustBar() {
  return (
    <Reveal>
      <section className="py-10 border-y border-[#f1f5f9]">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-[11px] font-semibold text-[#94a3b8] uppercase tracking-[0.15em] text-center mb-6">
            Parceria com as melhores seguradoras do país
          </p>
          <div className="overflow-hidden">
            <div className="marquee-track">
              {[...INSURERS, ...INSURERS].map((n, i) => (
                <span key={i} className="flex-shrink-0 text-[15px] font-semibold text-[#cbd5e1] whitespace-nowrap select-none">
                  {n}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}

/* ═══════════════════════════════════════════
   WHY HIRE — 3 clean items, lots of air
   ═══════════════════════════════════════════ */
function WhyHire() {
  const items = [
    { icon: Shield, title: "Obrigação Legal", text: "A Lei 14.599/2023 tornou obrigatório para transportadores. Evite multas e sanções operacionais." },
    { icon: CheckCircle2, title: "Proteção Financeira", text: "Reembolso de perdas e danos às mercadorias em caso de acidentes, roubos ou extravios." },
    { icon: Award, title: "Credibilidade", text: "Empresas com seguro geram confiança no mercado e fecham novos contratos com facilidade." },
  ];

  return (
    <Reveal>
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-[11px] font-semibold text-[#3E4095] uppercase tracking-[0.15em] mb-4">Por que contratar</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0f172a] mb-16 max-w-lg">
            Proteger sua carga é obrigatório por lei.
          </h2>

          <div className="grid md:grid-cols-3 gap-10 md:gap-16">
            {items.map((item, i) => (
              <div key={i}>
                <div className="w-10 h-10 rounded-lg bg-[#f8fafc] border border-[#f1f5f9] flex items-center justify-center mb-5">
                  <item.icon className="w-5 h-5 text-[#3E4095]" />
                </div>
                <h3 className="text-base font-semibold text-[#0f172a] mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[#64748b]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}

/* ═══════════════════════════════════════════
   DIFFERENTIALS — numbers with counters, Apple style
   ═══════════════════════════════════════════ */
function Differentials() {
  const stats = [
    { icon: Users, value: 1000, suffix: "+", label: "Clientes protegidos" },
    { icon: Award, value: 10, suffix: "+", label: "Anos de experiência" },
    { icon: Shield, value: 8, suffix: "", label: "Seguradoras parceiras" },
    { icon: Zap, value: 98, suffix: "%", label: "Índice de satisfação" },
  ];

  const features = [
    { icon: Clock, title: "Atendimento 24h", text: "Suporte completo todos os dias, a qualquer hora." },
    { icon: Zap, title: "Cotação em minutos", text: "Processo ágil e digital, sem burocracia." },
    { icon: Users, title: "Especialistas em carga", text: "Equipe dedicada ao segmento de transporte." },
    { icon: Award, title: "+10 anos de mercado", text: "Experiência e solidez no que fazemos." },
  ];

  return (
    <Reveal>
      <section id="diferenciais" className="py-24 md:py-32 bg-[#fafafa]">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-[11px] font-semibold text-[#3E4095] uppercase tracking-[0.15em] mb-4">Nossos números</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0f172a] mb-16 max-w-lg">
            A JJ & Amorim em números.
          </h2>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((s, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-4xl md:text-5xl font-black text-[#0f172a] mb-1">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <p className="text-sm text-[#94a3b8]">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Features grid */}
          <div className="section-divider mb-16" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((f, i) => (
              <div key={i}>
                <div className="w-10 h-10 rounded-lg bg-white border border-[#f1f5f9] flex items-center justify-center mb-4 shadow-sm">
                  <f.icon className="w-5 h-5 text-[#3E4095]" />
                </div>
                <h3 className="text-sm font-semibold text-[#0f172a] mb-1">{f.title}</h3>
                <p className="text-[13px] leading-relaxed text-[#94a3b8]">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}

/* ═══════════════════════════════════════════
   COVERAGES — clean cards, stripe-style
   ═══════════════════════════════════════════ */
const COVERAGES = [
  {
    tag: "Obrigatório",
    title: "RCTR-C",
    subtitle: "Responsabilidade Civil do Transportador",
    text: "Cobre danos materiais causados a mercadorias durante o transporte terrestre.",
    points: ["Colisão e tombamento", "Incêndio e explosão", "Obrigatório por lei"],
  },
  {
    tag: "Recomendado",
    title: "RC-DC",
    subtitle: "Desvio de Carga",
    text: "Protege contra desaparecimento da carga por roubo, furto ou desvio.",
    points: ["Roubo e furto qualificado", "Desvio de mercadoria", "Proteção completa"],
  },
  {
    tag: "Complementar",
    title: "RC-V",
    subtitle: "Responsabilidade Civil de Veículo",
    text: "Cobertura para danos materiais ou corporais causados a terceiros.",
    points: ["Danos a terceiros", "Danos corporais", "Exigência legal"],
  },
];

function Coverages() {
  return (
    <Reveal>
      <section id="coberturas" className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-[11px] font-semibold text-[#3E4095] uppercase tracking-[0.15em] mb-4">Coberturas</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0f172a] mb-16 max-w-lg">
            Proteção completa para cada necessidade.
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {COVERAGES.map((c, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-[#f1f5f9] bg-white p-7 hover:border-[#3E4095]/20 hover:shadow-lg transition-all duration-300"
              >
                <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-[#3E4095] bg-[#3E4095]/[0.06] px-2.5 py-1 rounded-md mb-5">
                  {c.tag}
                </span>
                <h3 className="text-2xl font-bold text-[#0f172a] mb-1">{c.title}</h3>
                <p className="text-xs text-[#94a3b8] mb-4">{c.subtitle}</p>
                <p className="text-sm text-[#64748b] leading-relaxed mb-6">{c.text}</p>
                <ul className="space-y-2.5 mb-6">
                  {c.points.map((p, j) => (
                    <li key={j} className="flex items-center gap-2 text-[13px] text-[#475569]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#3E4095] flex-shrink-0" /> {p}
                    </li>
                  ))}
                </ul>
                <a href="#form" className="text-[13px] font-semibold text-[#3E4095] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Solicitar cotação <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}

/* ═══════════════════════════════════════════
   CARGO TYPES — minimal icon grid
   ═══════════════════════════════════════════ */
const CARGO = [
  { icon: Leaf, label: "Grãos e Commodities" },
  { icon: Cpu, label: "Eletrônicos" },
  { icon: Package, label: "Perecíveis" },
  { icon: HardHat, label: "Materiais de Construção" },
  { icon: Truck, label: "Máquinas e Equipamentos" },
  { icon: FlaskConical, label: "Produtos Químicos" },
  { icon: Shirt, label: "Vestuário e Têxteis" },
  { icon: Boxes, label: "Carga Geral" },
];

function CargoTypes() {
  return (
    <Reveal>
      <section className="py-24 md:py-32 bg-[#fafafa]">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-[11px] font-semibold text-[#3E4095] uppercase tracking-[0.15em] mb-4">Tipos de carga</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0f172a] mb-16 max-w-lg">
            Protegemos os mais variados tipos de carga.
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 stagger">
            {CARGO.map((c, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-[#f1f5f9] p-5 flex flex-col items-center text-center hover:border-[#3E4095]/15 hover:shadow-sm transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-lg bg-[#f8fafc] flex items-center justify-center mb-3">
                  <c.icon className="w-5 h-5 text-[#64748b]" />
                </div>
                <span className="text-[13px] font-medium text-[#475569]">{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}

/* ═══════════════════════════════════════════
   FORM — clean, minimal, Apple-like
   ═══════════════════════════════════════════ */
function FormSection() {
  const [nome, setNome] = useState("");
  const [whats, setWhats] = useState("");
  const [tipo, setTipo] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Cotação solicitada! Em breve entraremos em contato.");
  };

  return (
    <Reveal>
      <section id="form" className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-md">
            <div className="text-center mb-10">
              <p className="text-[11px] font-semibold text-[#3E4095] uppercase tracking-[0.15em] mb-4">Cotação</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0f172a] mb-3">
                Comece agora.
              </h2>
              <p className="text-sm text-[#94a3b8]">Preencha o formulário e receba sua cotação em até 24h.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[13px] font-medium text-[#475569] mb-1.5">Nome completo</label>
                <input
                  type="text" required value={nome} onChange={e => setNome(e.target.value)}
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] bg-white text-sm placeholder:text-[#cbd5e1] focus:outline-none focus:ring-2 focus:ring-[#3E4095]/20 focus:border-[#3E4095]/40 transition-all"
                />
              </div>
              <div>
                <label className="block text-[13px] font-medium text-[#475569] mb-1.5">WhatsApp</label>
                <input
                  type="tel" required value={whats} onChange={e => setWhats(e.target.value)}
                  placeholder="(00) 00000-0000"
                  className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] bg-white text-sm placeholder:text-[#cbd5e1] focus:outline-none focus:ring-2 focus:ring-[#3E4095]/20 focus:border-[#3E4095]/40 transition-all"
                />
              </div>
              <div>
                <label className="block text-[13px] font-medium text-[#475569] mb-1.5">Tipo de Carga</label>
                <select
                  required value={tipo} onChange={e => setTipo(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] bg-white text-sm text-[#475569] focus:outline-none focus:ring-2 focus:ring-[#3E4095]/20 focus:border-[#3E4095]/40 transition-all appearance-none"
                >
                  <option value="">Selecione o tipo de carga</option>
                  <option value="graos">Grãos e Commodities</option>
                  <option value="eletronicos">Eletrônicos</option>
                  <option value="pereciveis">Perecíveis</option>
                  <option value="construcao">Materiais de Construção</option>
                  <option value="maquinas">Máquinas e Equipamentos</option>
                  <option value="quimicos">Produtos Químicos</option>
                  <option value="texteis">Vestuário e Têxteis</option>
                  <option value="geral">Carga Geral</option>
                </select>
              </div>
              <button type="submit" className="btn-primary w-full py-3.5 rounded-xl text-[15px] font-semibold flex items-center justify-center gap-2">
                Solicitar Cotação <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-xs text-center text-[#94a3b8] pt-1">Sem compromisso · Seus dados estão protegidos</p>
            </form>
          </div>
        </div>
      </section>
    </Reveal>
  );
}

/* ═══════════════════════════════════════════
   CTA — dark, full-width, elegant
   ═══════════════════════════════════════════ */
function FinalCTA() {
  return (
    <Reveal>
      <section className="py-24 md:py-32 bg-[#0f172a] text-white">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-5">
            Garanta a segurança da sua carga.
          </h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto mb-10">
            Solicite uma cotação sem compromisso e proteja seu patrimônio com as melhores seguradoras do mercado.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#form" className="bg-white text-[#0f172a] px-7 py-3.5 rounded-xl text-[15px] font-semibold inline-flex items-center justify-center gap-2 hover:bg-white/90 transition-all">
              Solicitar Cotação <ArrowRight className="w-4 h-4" />
            </a>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="border border-white/20 text-white px-7 py-3.5 rounded-xl text-[15px] font-semibold inline-flex items-center justify-center gap-2 hover:bg-white/5 transition-all">
              <MessageCircle className="w-4 h-4" /> Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </Reveal>
  );
}

/* ═══════════════════════════════════════════
   FOOTER — minimal, stripe-style
   ═══════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="py-12 border-t border-[#f1f5f9]">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Left */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-md bg-[#3E4095] flex items-center justify-center">
              <Shield className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-sm font-semibold text-[#475569]">JJ & Amorim Corretora de Seguros</span>
          </div>

          {/* Center links */}
          <div className="flex flex-wrap gap-6 text-[13px] text-[#94a3b8]">
            <a href={`tel:${TEL.replace(/\D/g, "")}`} className="hover:text-[#475569] transition-colors">{TEL}</a>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="hover:text-[#475569] transition-colors">WhatsApp</a>
            <span>São Bernardo do Campo - SP</span>
          </div>

          {/* Right */}
          <p className="text-[12px] text-[#cbd5e1]">&copy; {new Date().getFullYear()} JJ & Amorim</p>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════
   STICKY CTA (mobile only)
   ═══════════════════════════════════════════ */
function StickyCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden p-3 bg-white/90 backdrop-blur-lg border-t border-[#f1f5f9]">
      <a href="#form" className="btn-primary block text-center py-3 rounded-xl text-sm font-semibold">
        Solicitar Cotação Grátis
      </a>
    </div>
  );
}

/* ═══════════════════════════════════════════
   WhatsApp Float
   ═══════════════════════════════════════════ */
function WhatsAppFloat() {
  return (
    <a href={WA} target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="WhatsApp">
      <MessageCircle className="w-5 h-5" />
    </a>
  );
}

/* ═══════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════ */
export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <TrustBar />
      <WhyHire />
      <Differentials />
      <Coverages />
      <CargoTypes />
      <FormSection />
      <FinalCTA />
      <Footer />
      <StickyCTA />
      <WhatsAppFloat />
    </div>
  );
}
