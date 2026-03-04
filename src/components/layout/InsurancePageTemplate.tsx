import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface InsurancePageTemplateProps {
    title: string;
    tagline: string;
    description: string;
    icon: LucideIcon;
    coverages: string[];
    audience: string[];
    highlights: { label: string; value: string }[];
}

export default function InsurancePageTemplate({
    title, tagline, description, icon: Icon, coverages, audience, highlights
}: InsurancePageTemplateProps) {
    return (
        <>
            {/* Hero compacto — dark */}
            <section className="relative pt-16 pb-16 bg-background overflow-hidden">
                {/* Glow decoration */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
                    {/* Breadcrumb */}
                    <nav className="flex items-center text-sm text-slate-500 mb-8 font-mono" aria-label="Breadcrumb">
                        <Link to="/" className="hover:text-white transition-colors">Início</Link>
                        <span className="mx-2 text-slate-700">/</span>
                        <span className="text-slate-300 font-medium">{title}</span>
                    </nav>

                    <div className="flex items-center gap-5 mb-6">
                        <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center border border-primary/30">
                            <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-white">
                            {title}
                        </h1>
                    </div>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">{tagline}</p>
                </div>
            </section>

            {/* Highlights — dark strip */}
            <section className="py-6 border-y border-white/5 bg-card">
                <div className="max-w-7xl mx-auto px-6 lg:px-16">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {highlights.map((h, i) => (
                            <div key={i} className="text-center p-4">
                                <div className="text-2xl lg:text-3xl font-extrabold text-primary mb-1">{h.value}</div>
                                <div className="text-sm text-slate-500">{h.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Description + Coverages */}
            <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-6 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div>
                            <p className="text-accent font-mono text-sm uppercase tracking-widest mb-3">Sobre o Produto</p>
                            <h2 className="text-3xl font-bold text-white mb-6">O que é o {title}?</h2>
                            <p className="text-slate-400 leading-relaxed whitespace-pre-line">{description}</p>
                        </div>
                        <div>
                            <p className="text-accent font-mono text-sm uppercase tracking-widest mb-3">Coberturas</p>
                            <h2 className="text-3xl font-bold text-white mb-6">O que está incluído</h2>
                            <ul className="space-y-4">
                                {coverages.map((c, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-300">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>{c}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Audience */}
            <section className="py-20 bg-card/50 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-16">
                    <p className="text-accent font-mono text-sm uppercase tracking-widest mb-3">Público-Alvo</p>
                    <h2 className="text-3xl font-bold text-white mb-10">Para quem é indicado</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {audience.map((a, i) => (
                            <div key={i} className="bg-background rounded-2xl p-6 border border-white/5 flex items-start gap-3 hover:border-white/10 transition-colors">
                                <ShieldCheck className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-slate-300 text-sm">{a}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-background relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 pointer-events-none" />
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Proteja sua operação agora
                    </h2>
                    <p className="text-slate-400 text-lg mb-8">
                        Solicite uma cotação gratuita e receba uma proposta personalizada em até 2 horas.
                    </p>
                    <Link
                        to="/#cotacao"
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-background bg-white hover:bg-slate-100 shadow-2xl transition-all duration-300 hover:-translate-y-1"
                    >
                        Solicitar Cotação Gratuita <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                </div>
            </section>
        </>
    );
}
