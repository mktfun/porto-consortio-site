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
            {/* Hero compacto */}
            <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#3b5bdb]/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[#f59e0b]/10 rounded-full blur-3xl" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <nav className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-6" aria-label="Breadcrumb">
                        <Link to="/" className="hover:text-[#3b5bdb] transition-colors">Início</Link>
                        <span className="mx-2">/</span>
                        <span className="text-slate-900 dark:text-white font-medium">{title}</span>
                    </nav>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-[#3b5bdb]">
                            <Icon className="w-7 h-7" />
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white">
                            {title}
                        </h1>
                    </div>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">{tagline}</p>
                </div>
            </section>

            {/* Highlights */}
            <section className="py-8 border-y border-slate-100 dark:border-slate-800 bg-white dark:bg-[#1e293b]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {highlights.map((h, i) => (
                            <div key={i} className="text-center p-4">
                                <div className="text-2xl lg:text-3xl font-extrabold text-[#3b5bdb]">{h.value}</div>
                                <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">{h.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Description + Coverages */}
            <section className="py-20 bg-[#f8fafc] dark:bg-[#0f172a]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                        <div>
                            <h2 className="text-base text-[#3b5bdb] font-semibold tracking-wide uppercase mb-2">Sobre o Produto</h2>
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">O que é o {title}?</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-line">{description}</p>
                        </div>
                        <div className="mt-12 lg:mt-0">
                            <h2 className="text-base text-[#3b5bdb] font-semibold tracking-wide uppercase mb-2">Coberturas</h2>
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">O que está incluído</h3>
                            <ul className="space-y-4">
                                {coverages.map((c, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
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
            <section className="py-20 bg-white dark:bg-[#1e293b]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-base text-[#3b5bdb] font-semibold tracking-wide uppercase mb-2">Público-Alvo</h2>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Para quem é indicado</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {audience.map((a, i) => (
                            <div key={i} className="bg-[#f8fafc] dark:bg-[#0f172a] rounded-2xl p-6 border border-slate-100 dark:border-slate-800 flex items-start gap-3">
                                <ShieldCheck className="w-5 h-5 text-[#3b5bdb] mt-0.5 flex-shrink-0" />
                                <span className="text-slate-700 dark:text-slate-300">{a}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-[#3b5bdb] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%221%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }} />
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl font-bold text-white mb-4">Proteja sua operação agora</h2>
                    <p className="text-blue-100 text-lg mb-8">Solicite uma cotação gratuita e receba uma proposta personalizada em até 2 horas.</p>
                    <Link to="/#cotacao" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-[#3b5bdb] bg-white hover:bg-slate-50 shadow-lg transition-all duration-300">
                        Solicitar Cotação Gratuita <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                </div>
            </section>
        </>
    );
}
