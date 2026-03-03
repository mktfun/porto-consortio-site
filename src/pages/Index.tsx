import { useState, useEffect, useRef, type ReactNode } from "react";
import {
  Shield, Phone, ArrowRight, CheckCircle2, MessageCircle, Menu, X,
  Clock, Zap, Users, Award, ChevronRight,
  Truck, Package, Leaf, HardHat, Cpu, FlaskConical, Shirt, Boxes,
  AlertTriangle, FileText, Search, Send,
  Building2, Factory, ShoppingCart, Warehouse,
  Ban, TrendingDown, FileWarning, Scale,
} from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell,
} from "recharts";

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
   1. HEADER
   ═══════════════════════════════════════════ */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { href: "#coberturas", label: "Coberturas" },
    { href: "#como-funciona", label: "Como Funciona" },
    { href: "#diferenciais", label: "Diferenciais" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-background/80 backdrop-blur-xl shadow-[0_1px_0_0_hsl(var(--border))]"
        : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          {/* TODO: Substituir pelo logo real da JJ&Amorim quando disponível */}
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center transition-transform group-hover:scale-105 shadow-md shadow-primary/20">
            <span className="text-[13px] font-black text-primary-foreground tracking-tight leading-none">JJ</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[14px] font-bold tracking-tight text-foreground leading-tight">JJ & Amorim</span>
            <span className="text-[9px] font-medium text-muted-foreground tracking-wide uppercase">Corretora de Seguros</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-[13px] font-medium text-[#64748b] hover:text-[#1e293b] transition-colors">{l.label}</a>
          ))}
          <a href={`tel:${TEL.replace(/\D/g, "")}`} className="text-[13px] font-medium text-[#64748b] hover:text-[#1e293b] transition-colors flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5" /> {TEL}
          </a>
          <a href="#form" className="btn-primary px-4 py-2 rounded-lg text-[13px] font-semibold inline-flex items-center gap-1.5">
            Solicitar Cotação <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </nav>

        <button className="md:hidden p-2 -mr-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t px-5 py-5 space-y-4 animate-fade-in">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm font-medium text-[#64748b]">{l.label}</a>
          ))}
          <a href={`tel:${TEL.replace(/\D/g, "")}`} className="block text-sm font-medium text-[#64748b]">{TEL}</a>
          <a href="#form" onClick={() => setOpen(false)} className="btn-primary block text-center py-2.5 rounded-lg text-sm font-semibold">Solicitar Cotação</a>
        </div>
      )}
    </header>
  );
}

/* ═══════════════════════════════════════════
   2. HERO — Stripe-clean + badge +10 anos + checklist
   ═══════════════════════════════════════════ */
function Hero() {
  const checks = [
    "Cotação em até 24h",
    "8+ seguradoras parceiras",
    "Atendimento especializado",
  ];

  return (
    <section className="relative pt-28 pb-16 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-b from-primary/[0.04] to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-6xl px-5 relative">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Text */}
          <div>
            {/* Badges */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/15 text-primary text-[11px] font-semibold tracking-wide uppercase animate-fade-up" style={{ animationDelay: "0ms" }}>
                <Shield className="w-3 h-3" /> Lei 14.599/2023 — Obrigatório
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/20 text-accent text-[11px] font-semibold tracking-wide uppercase animate-fade-up bg-accent/[0.04]" style={{ animationDelay: "60ms" }}>
                <Award className="w-3 h-3" /> +10 anos de mercado
              </div>
            </div>

            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-[1.05] tracking-tight text-foreground mb-6 animate-fade-up" style={{ animationDelay: "80ms" }}>
              Seguro de transporte{" "}
              <br className="hidden sm:block" />
              <span className="gradient-text">de cargas.</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mb-8 animate-fade-up" style={{ animationDelay: "160ms" }}>
              Cotação rápida e personalizada com as melhores seguradoras do país. Proteja seu patrimônio com quem entende do assunto.
            </p>

            {/* Checklist inline */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 mb-10 animate-fade-up" style={{ animationDelay: "200ms" }}>
              {checks.map((c, i) => (
                <span key={i} className="flex items-center gap-1.5 text-[13px] text-muted-foreground">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent" /> {c}
                </span>
              ))}
            </div>

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

          {/* Hero Image */}
          <div className="relative animate-fade-up hidden md:block" style={{ animationDelay: "300ms" }}>
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
              <img
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop&q=80"
                alt="Caminhão de carga em rodovia brasileira — seguro de transporte de cargas"
                className="w-full h-[400px] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent rounded-2xl" />
            </div>
            {/* Floating stat */}
            <div className="absolute -bottom-4 -left-4 bg-background rounded-xl border border-border p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-lg font-black text-foreground">1.000+</p>
                  <p className="text-[11px] text-muted-foreground">Clientes protegidos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   3. TRUST BAR — marquee animado
   ═══════════════════════════════════════════ */
const INSURERS = [
  { name: "Bradesco Seguros", weight: "font-bold" },
  { name: "HDI Seguros", weight: "font-extrabold" },
  { name: "SulAmérica", weight: "font-bold" },
  { name: "Liberty Seguros", weight: "font-extrabold" },
  { name: "Allianz", weight: "font-black" },
  { name: "Tokio Marine", weight: "font-bold" },
  { name: "Azul Seguros", weight: "font-extrabold" },
  { name: "Sompo Seguros", weight: "font-bold" },
];

function TrustBar() {
  return (
    <Reveal>
      <section className="py-10 border-y border-border">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-[0.15em] text-center mb-6">
            Parceria com as melhores seguradoras do país
          </p>
          <div className="overflow-hidden">
            <div className="marquee-track">
              {[...INSURERS, ...INSURERS].map((ins, i) => (
                <div key={i} className="flex-shrink-0 flex items-center gap-2 select-none">
                  <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                    <Shield className="w-4 h-4 text-muted-foreground/60" />
                  </div>
                  <span className={`text-[15px] ${ins.weight} text-muted-foreground/50 whitespace-nowrap`}>
                    {ins.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}

/* ═══════════════════════════════════════════
   4. DADOS/URGÊNCIA — gráficos animados (Recharts)
   ═══════════════════════════════════════════ */
const ACCIDENT_DATA = [
  { year: "2018", acidentes: 67101, cor: "#3E4095" },
  { year: "2019", acidentes: 63547, cor: "#3E4095" },
  { year: "2020", acidentes: 52077, cor: "#3E4095" },
  { year: "2021", acidentes: 56981, cor: "#3E4095" },
  { year: "2022", acidentes: 63576, cor: "#3E4095" },
  { year: "2023", acidentes: 68475, cor: "#e74c3c" },
];

function UrgencyData() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setAnimate(true); obs.unobserve(el); }
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Reveal>
      <section className="py-20 md:py-32 bg-muted/50" ref={ref}>
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-[11px] font-semibold text-primary uppercase tracking-[0.15em] mb-4">Dados do setor</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4 max-w-2xl">
            O transporte de cargas no Brasil é de alto risco.
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mb-12">
            Acidentes, roubos e avarias acontecem todos os dias nas rodovias brasileiras. Proteja sua operação com dados reais.
          </p>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Chart */}
            <div className="bg-background rounded-2xl border border-border p-5 md:p-7">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-5">Acidentes com caminhões por ano (Brasil)</p>
              <div className="h-64 md:h-72">
                {animate && (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={ACCIDENT_DATA} barCategoryGap="20%">
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                      <XAxis dataKey="year" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} tickFormatter={(v: number) => `${(v / 1000).toFixed(0)}k`} />
                      <Tooltip
                        contentStyle={{ borderRadius: 12, border: "1px solid hsl(var(--border))", fontSize: 13 }}
                        formatter={(value: number) => [value.toLocaleString("pt-BR"), "Acidentes"]}
                      />
                      <Bar dataKey="acidentes" radius={[6, 6, 0, 0]} animationDuration={1400}>
                        {ACCIDENT_DATA.map((entry, i) => (
                          <Cell key={i} fill={entry.cor} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                )}
              </div>
              <p className="text-[10px] text-muted-foreground/50 mt-3">Fonte: PRF / CNT — Dados consolidados</p>
            </div>

            {/* Counters + Image */}
            <div className="space-y-8">
              {/* Contextual image */}
              <div className="rounded-xl overflow-hidden mb-6">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=250&fit=crop&q=80"
                  alt="Operação logística de transporte de cargas — riscos nas rodovias"
                  className="w-full h-[160px] object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
              {[
                { value: 68475, label: "Acidentes com caminhões em 2023", suffix: "" },
                { value: 22400, label: "Roubos de carga registrados em 2023", suffix: "+" },
                { value: 5200, label: "Mortes em acidentes rodoviários em 2023", suffix: "+" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/[0.06] flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className={`w-5 h-5 ${i === 2 ? "text-destructive" : "text-primary"}`} />
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-black text-foreground">
                      <Counter to={item.value} suffix={item.suffix} />
                    </div>
                    <p className="text-sm text-muted-foreground mt-0.5">{item.label}</p>
                  </div>
                </div>
              ))}
              <a href="#form" className="inline-flex items-center gap-2 text-[13px] font-semibold text-primary mt-2 hover:gap-3 transition-all">
                Proteja sua carga agora <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}

/* ═══════════════════════════════════════════
   5. POR QUE CONTRATAR
   ═══════════════════════════════════════════ */
function WhyHire() {
  const items = [
    { icon: Shield, title: "Obrigação Legal", text: "A Lei 14.599/2023 tornou o seguro obrigatório para transportadores rodoviários de carga. Operar sem ele é infração grave, com multas e suspensão da atividade." },
    { icon: CheckCircle2, title: "Proteção Financeira Total", text: "Reembolso integral de perdas e danos às mercadorias em caso de acidentes, roubos, avarias ou extravios durante todo o percurso." },
    { icon: Award, title: "Credibilidade no Mercado", text: "Empresas seguradas transmitem segurança. Contratantes e embarcadores exigem comprovante de seguro para fechar novos contratos." },
  ];

  return (
    <Reveal>
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-[11px] font-semibold text-[#3E4095] uppercase tracking-[0.15em] mb-4">Por que contratar</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0f172a] mb-16 max-w-lg">
            Proteger sua carga não é opcional.
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
   6. COBERTURAS — com consequências legais
   ═══════════════════════════════════════════ */
const COVERAGES = [
  {
    tag: "Obrigatório",
    title: "RCTR-C",
    subtitle: "Responsabilidade Civil do Transportador Rodoviário de Carga",
    text: "Cobre danos materiais causados às mercadorias durante o transporte terrestre. Obrigatório por lei para todo transportador.",
    points: ["Colisão e tombamento", "Incêndio e explosão", "Avarias durante transbordo"],
    consequence: "Sem RCTR-C: multa + suspensão do registro ANTT",
  },
  {
    tag: "Recomendado",
    title: "RC-DC",
    subtitle: "Responsabilidade Civil — Desvio de Carga",
    text: "Protege contra desaparecimento total ou parcial da carga por roubo, furto qualificado ou desvio.",
    points: ["Roubo e furto qualificado", "Desvio de mercadoria", "Desaparecimento do veículo"],
    consequence: "Sem RC-DC: prejuízo integral recai sobre o transportador",
  },
  {
    tag: "Complementar",
    title: "RC-V",
    subtitle: "Responsabilidade Civil de Veículo",
    text: "Cobertura para danos materiais e corporais causados a terceiros durante a operação de transporte.",
    points: ["Danos a terceiros", "Danos corporais", "Custos judiciais"],
    consequence: "Sem RC-V: transportador responde com patrimônio próprio",
  },
];

function Coverages() {
  return (
    <Reveal>
      <section id="coberturas" className="py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-[11px] font-semibold text-[#3E4095] uppercase tracking-[0.15em] mb-4">Coberturas</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0f172a] mb-16 max-w-lg">
            Proteção completa para cada necessidade.
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {COVERAGES.map((c, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-[#f1f5f9] bg-white p-7 hover:border-[#3E4095]/20 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-[#3E4095] bg-[#3E4095]/[0.06] px-2.5 py-1 rounded-md mb-5 w-fit">
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
                {/* Consequência legal */}
                <div className="mt-auto pt-4 border-t border-[#f1f5f9]">
                  <p className="text-[11px] text-red-500/80 font-medium flex items-start gap-1.5">
                    <AlertTriangle className="w-3 h-3 mt-0.5 flex-shrink-0" /> {c.consequence}
                  </p>
                </div>
                <a href="#form" className="text-[13px] font-semibold text-[#3E4095] inline-flex items-center gap-1 group-hover:gap-2 transition-all mt-5">
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
   7. TIPOS DE CARGA
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
      <section className="py-20 md:py-32 bg-[#fafafa]">
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
   8. COMO FUNCIONA — timeline 4 etapas
   ═══════════════════════════════════════════ */
const STEPS = [
  { icon: MessageCircle, num: "01", title: "Cotação", desc: "Preencha o formulário ou fale conosco pelo WhatsApp. É rápido e sem compromisso." },
  { icon: FileText, num: "02", title: "Proposta", desc: "Receba propostas personalizadas das melhores seguradoras do mercado em até 24h." },
  { icon: Search, num: "03", title: "Análise", desc: "Nossa equipe especializada analisa cada detalhe para encontrar a melhor cobertura." },
  { icon: Send, num: "04", title: "Emissão", desc: "Apólice emitida digitalmente. Sua carga protegida para viajar com tranquilidade." },
];

function HowItWorks() {
  return (
    <Reveal>
      <section id="como-funciona" className="py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-[11px] font-semibold text-[#3E4095] uppercase tracking-[0.15em] mb-4">Como funciona</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0f172a] mb-16 max-w-lg">
            Do pedido à apólice em 4 passos.
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((s, i) => (
              <div key={i} className="relative">
                {/* Connector line (desktop) */}
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-[calc(50%+28px)] w-[calc(100%-56px)] h-px bg-gradient-to-r from-[#3E4095]/20 to-[#3E4095]/5" />
                )}
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-2xl bg-[#3E4095] flex items-center justify-center mb-4 shadow-lg shadow-[#3E4095]/20">
                    <s.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[10px] font-bold text-[#3E4095]/40 tracking-widest mb-2">{s.num}</span>
                  <h3 className="text-base font-semibold text-[#0f172a] mb-2">{s.title}</h3>
                  <p className="text-[13px] leading-relaxed text-[#64748b]">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}

/* ═══════════════════════════════════════════
   9. QUEM ATENDEMOS
   ═══════════════════════════════════════════ */
const AUDIENCES = [
  { icon: Truck, label: "Transportadoras", desc: "Frotas de qualquer porte em todo o território nacional." },
  { icon: Building2, label: "Embarcadores", desc: "Empresas que contratam frete para enviar mercadorias." },
  { icon: Factory, label: "Indústrias", desc: "Proteção para envio de matéria-prima e produtos acabados." },
  { icon: ShoppingCart, label: "E-commerce", desc: "Segurança para entregas de alta frequência e volume." },
  { icon: Warehouse, label: "Operadores Logísticos", desc: "Cobertura completa para operações multimodais." },
  { icon: Users, label: "Cooperativas", desc: "Soluções coletivas com condições especiais." },
];

function WhoWeServe() {
  return (
    <Reveal>
      <section className="py-20 md:py-32 bg-[#fafafa]">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-[11px] font-semibold text-[#3E4095] uppercase tracking-[0.15em] mb-4">Quem atendemos</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0f172a] mb-16 max-w-lg">
            Soluções para todos os perfis do setor.
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AUDIENCES.map((a, i) => (
              <div key={i} className="flex items-start gap-4 bg-white rounded-xl border border-[#f1f5f9] p-5 hover:border-[#3E4095]/15 hover:shadow-sm transition-all duration-200">
                <div className="w-10 h-10 rounded-lg bg-[#3E4095]/[0.06] flex items-center justify-center flex-shrink-0">
                  <a.icon className="w-5 h-5 text-[#3E4095]" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#0f172a] mb-1">{a.label}</h3>
                  <p className="text-[13px] text-[#64748b] leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}

/* ═══════════════════════════════════════════
   10. DIFERENCIAIS/NÚMEROS
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
      <section id="diferenciais" className="py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-[11px] font-semibold text-[#3E4095] uppercase tracking-[0.15em] mb-4">Nossos números</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0f172a] mb-16 max-w-lg">
            A JJ & Amorim em números.
          </h2>

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

          <div className="section-divider mb-16" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((f, i) => (
              <div key={i}>
                <div className="w-10 h-10 rounded-lg bg-[#fafafa] border border-[#f1f5f9] flex items-center justify-center mb-4 shadow-sm">
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
   11. EVITE — grid de dores do cliente
   ═══════════════════════════════════════════ */
const AVOID_ITEMS = [
  { icon: Ban, title: "Perda total da carga", desc: "Sem seguro, todo o prejuízo recai sobre você." },
  { icon: TrendingDown, title: "Rompimento de contratos", desc: "Embarcadores exigem seguro para manter parceria." },
  { icon: FileWarning, title: "Multas e sanções da ANTT", desc: "Operar sem seguro gera infrações graves e suspensão." },
  { icon: Scale, title: "Processos judiciais", desc: "Responder com patrimônio pessoal por danos a terceiros." },
];

function AvoidSection() {
  return (
    <Reveal>
      <section className="py-20 md:py-32 bg-[#fafafa]">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-[11px] font-semibold text-red-500/80 uppercase tracking-[0.15em] mb-4">Evite</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0f172a] mb-16 max-w-lg">
            O que acontece sem seguro?
          </h2>

          <div className="grid sm:grid-cols-2 gap-5">
            {AVOID_ITEMS.map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-red-100 p-6 flex items-start gap-4 hover:border-red-200 transition-all duration-200">
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#0f172a] mb-1">{item.title}</h3>
                  <p className="text-[13px] text-[#64748b] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}

/* ═══════════════════════════════════════════
   12. FORMULÁRIO EXPANDIDO
   ═══════════════════════════════════════════ */
function FormSection() {
  const [form, setForm] = useState({
    nome: "", email: "", whats: "", tipo: "", origem: "", destino: "", valor: "",
  });

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Gostaria de uma cotação:%0A%0ANome: ${form.nome}%0AEmail: ${form.email}%0AWpp: ${form.whats}%0ACarga: ${form.tipo}%0AOrigem: ${form.origem}%0ADestino: ${form.destino}%0AValor: ${form.valor}`;
    window.open(`https://wa.me/5511979699832?text=${msg}`, "_blank");
  };

  const inputCls = "w-full px-4 py-3 rounded-xl border border-[#e2e8f0] bg-white text-sm placeholder:text-[#cbd5e1] focus:outline-none focus:ring-2 focus:ring-[#3E4095]/20 focus:border-[#3E4095]/40 transition-all";

  return (
    <Reveal>
      <section id="form" className="py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-lg">
            <div className="text-center mb-10">
              <p className="text-[11px] font-semibold text-[#3E4095] uppercase tracking-[0.15em] mb-4">Cotação</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0f172a] mb-3">
                Comece agora.
              </h2>
              <p className="text-sm text-[#94a3b8]">Preencha o formulário e receba sua cotação em até 24h.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-medium text-[#475569] mb-1.5">Nome completo</label>
                  <input type="text" required value={form.nome} onChange={update("nome")} placeholder="Seu nome" className={inputCls} />
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-[#475569] mb-1.5">E-mail</label>
                  <input type="email" required value={form.email} onChange={update("email")} placeholder="seu@email.com" className={inputCls} />
                </div>
              </div>
              <div>
                <label className="block text-[13px] font-medium text-[#475569] mb-1.5">WhatsApp</label>
                <input type="tel" required value={form.whats} onChange={update("whats")} placeholder="(00) 00000-0000" className={inputCls} />
              </div>
              <div>
                <label className="block text-[13px] font-medium text-[#475569] mb-1.5">Tipo de Carga</label>
                <select required value={form.tipo} onChange={update("tipo")} className={`${inputCls} appearance-none`}>
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
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-medium text-[#475569] mb-1.5">Origem</label>
                  <input type="text" value={form.origem} onChange={update("origem")} placeholder="Cidade / Estado" className={inputCls} />
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-[#475569] mb-1.5">Destino</label>
                  <input type="text" value={form.destino} onChange={update("destino")} placeholder="Cidade / Estado" className={inputCls} />
                </div>
              </div>
              <div>
                <label className="block text-[13px] font-medium text-[#475569] mb-1.5">Valor estimado da carga</label>
                <input type="text" value={form.valor} onChange={update("valor")} placeholder="R$ 0,00" className={inputCls} />
              </div>
              <button type="submit" className="btn-primary w-full py-3.5 rounded-xl text-[15px] font-semibold flex items-center justify-center gap-2 mt-2">
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
   13. CTA FINAL
   ═══════════════════════════════════════════ */
function FinalCTA() {
  return (
    <Reveal>
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1400&h=600&fit=crop&q=80"
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-foreground/85" />
        </div>

        <div className="mx-auto max-w-6xl px-5 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-5 text-primary-foreground">
            Garanta a segurança da sua carga.
          </h2>
          <p className="text-lg text-primary-foreground/50 max-w-xl mx-auto mb-10">
            Solicite uma cotação sem compromisso e proteja seu patrimônio com as melhores seguradoras do mercado.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#form" className="bg-background text-foreground px-7 py-3.5 rounded-xl text-[15px] font-semibold inline-flex items-center justify-center gap-2 hover:bg-background/90 transition-all">
              Solicitar Cotação <ArrowRight className="w-4 h-4" />
            </a>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="border border-primary-foreground/20 text-primary-foreground px-7 py-3.5 rounded-xl text-[15px] font-semibold inline-flex items-center justify-center gap-2 hover:bg-primary-foreground/5 transition-all">
              <MessageCircle className="w-4 h-4" /> Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </Reveal>
  );
}

/* ═══════════════════════════════════════════
   14. FOOTER — expandido com endereço, CNPJ, links
   ═══════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="py-16 border-t border-border">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              {/* TODO: Substituir pelo logo real */}
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-sm shadow-primary/20">
                <span className="text-[11px] font-black text-primary-foreground tracking-tight leading-none">JJ</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-foreground leading-tight">JJ & Amorim</span>
                <span className="text-[9px] font-medium text-muted-foreground tracking-wide uppercase">Corretora de Seguros</span>
              </div>
            </div>
            <p className="text-[13px] text-muted-foreground leading-relaxed max-w-sm mb-3">
              Especialistas em seguro de transporte de cargas há mais de 10 anos. Protegemos empresas em todo o Brasil com as melhores seguradoras do mercado.
            </p>
            <p className="text-[12px] text-muted-foreground/50">CNPJ: 21.364.352/0001-04</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-semibold text-[#475569] uppercase tracking-wider mb-4">Navegação</h4>
            <div className="space-y-2.5">
              <a href="#coberturas" className="block text-[13px] text-[#94a3b8] hover:text-[#475569] transition-colors">Coberturas</a>
              <a href="#como-funciona" className="block text-[13px] text-[#94a3b8] hover:text-[#475569] transition-colors">Como Funciona</a>
              <a href="#diferenciais" className="block text-[13px] text-[#94a3b8] hover:text-[#475569] transition-colors">Diferenciais</a>
              <a href="#form" className="block text-[13px] text-[#94a3b8] hover:text-[#475569] transition-colors">Solicitar Cotação</a>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-xs font-semibold text-[#475569] uppercase tracking-wider mb-4">Contato</h4>
            <div className="space-y-2.5 text-[13px] text-[#94a3b8]">
              <a href={`tel:${TEL.replace(/\D/g, "")}`} className="flex items-center gap-2 hover:text-[#475569] transition-colors">
                <Phone className="w-3.5 h-3.5" /> {TEL}
              </a>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#475569] transition-colors">
                <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
              </a>
              <p className="leading-relaxed pt-1">
                R. Frei Gaspar, 941 — Sala 603<br />
                São Bernardo do Campo — SP
              </p>
            </div>
          </div>
        </div>

        <div className="section-divider mb-6" />
        <p className="text-[12px] text-[#cbd5e1] text-center">&copy; {new Date().getFullYear()} JJ & Amorim Corretora de Seguros. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════
   15. STICKY CTA (mobile) + WhatsApp Float
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

function WhatsAppFloat() {
  return (
    <a href={WA} target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="WhatsApp">
      <MessageCircle className="w-5 h-5" />
    </a>
  );
}

/* ═══════════════════════════════════════════
   PAGE — todas as 15 seções
   ═══════════════════════════════════════════ */
export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <TrustBar />
      <UrgencyData />
      <WhyHire />
      <Coverages />
      <CargoTypes />
      <HowItWorks />
      <WhoWeServe />
      <Differentials />
      <AvoidSection />
      <FormSection />
      <FinalCTA />
      <Footer />
      <StickyCTA />
      <WhatsAppFloat />
    </div>
  );
}
