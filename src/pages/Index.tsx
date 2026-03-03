import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import {
    Sun, Moon, ArrowRight, Phone, ShieldCheck, AlertTriangle, Truck, Package, Ship, Star, StarHalf, Lock, Facebook, Instagram, Briefcase, Mail, MapPin, CheckCircle2, Loader2, MessageCircle, Menu, X, FileText, Search, Send, Award
} from "lucide-react";

import jjamorimLogo from "@/assets/jjamorim-logo.png";
import hdiLogo from "@/assets/hdi-seguros.png";
import tokioLogo from "@/assets/tokio-marine.png";
import allianzLogo from "@/assets/allianz.png";
import bradescoLogo from "@/assets/bradesco-seguros.svg";

export default function Index() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [form, setForm] = useState({
        nome: "", email: "", whats: "", tipo: "", origem: "", destino: "", valor: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();
    const { toast } = useToast();

    useEffect(() => {
        if (isDarkMode) document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');
    }, [isDarkMode]);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
                    origem: form.origem,
                    destino: form.destino,
                    valor_medio: form.valor,
                    tipo_carga: form.tipo,
                    fonte: "landing-page-transporte",
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
                description: "Ocorreu um problema ao enviar seus dados. Tente novamente.",
                variant: "destructive"
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-[#f8fafc] dark:bg-[#0f172a] text-slate-800 dark:text-slate-200 font-sans antialiased transition-colors duration-300 min-h-screen overflow-x-hidden">

            {/* ─── NAVBAR ─── */}
            <nav
                className={`fixed w-full z-50 top-0 transition-all duration-500 ease-in-out backdrop-blur-md ${
                    scrolled
                        ? "mx-auto mt-2 md:mt-3 px-2 md:px-4 max-w-[calc(100%-1rem)] md:max-w-[calc(100%-2rem)] left-[0.5rem] md:left-[1rem] right-[0.5rem] md:right-[1rem] rounded-2xl md:rounded-3xl bg-white/90 dark:bg-[#0f172a]/90 shadow-lg shadow-slate-900/5 border border-slate-200/60 dark:border-slate-700/60"
                        : "bg-white/70 dark:bg-[#0f172a]/70 border-b border-slate-200/50 dark:border-slate-700/50"
                }`}
                style={scrolled ? { width: 'auto' } : undefined}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 md:h-20">
                        <Link to="/" className="flex items-center space-x-3">
                            <img src={jjamorimLogo} alt="JJ & Amorim Corretora de Seguros" className="h-9 md:h-10 w-auto rounded-lg object-contain" />
                        </Link>
                        <div className="hidden md:flex space-x-8 text-sm font-medium">
                            <a className="text-slate-600 dark:text-slate-300 hover:text-[#3b5bdb] dark:hover:text-[#3b5bdb] transition-colors"
                                href="#coberturas" aria-label="Ver produtos de seguro">Produtos</a>
                            <Link className="text-slate-600 dark:text-slate-300 hover:text-[#3b5bdb] dark:hover:text-[#3b5bdb] transition-colors"
                                to="/sobre">Sobre Nós</Link>
                            <a className="text-slate-600 dark:text-slate-300 hover:text-[#3b5bdb] dark:hover:text-[#3b5bdb] transition-colors"
                                href="#cotacao" aria-label="Fale conosco">Contato</a>
                        </div>
                        <div className="flex items-center space-x-3">
                            <button onClick={() => setIsDarkMode(!isDarkMode)} aria-label="Alternar modo escuro" className="bg-slate-100 dark:bg-slate-800 p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                            </button>
                            <a className="hidden md:inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-[#3b5bdb] hover:bg-blue-700 shadow-[0_0_20px_-5px_rgba(59,91,219,0.5)] transition-all duration-300 hover:-translate-y-0.5"
                                href="#cotacao" aria-label="Solicitar cotação de seguro de transporte">
                                Solicitar Cotação
                            </a>
                            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" aria-label="Menu">
                                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                    {mobileMenuOpen && (
                        <div className="md:hidden pb-4 space-y-2 border-t border-slate-200/50 dark:border-slate-700/50 pt-4">
                            <a onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#3b5bdb]" href="#coberturas">Produtos</a>
                            <Link onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#3b5bdb]" to="/sobre">Sobre Nós</Link>
                            <a onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#3b5bdb]" href="#cotacao">Contato</a>
                            <a onClick={() => setMobileMenuOpen(false)} className="block w-full text-center py-2.5 bg-[#3b5bdb] text-white rounded-lg font-medium text-sm" href="#cotacao">Solicitar Cotação</a>
                        </div>
                    )}
                </div>
            </nav>

            {/* ─── HERO ─── */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#3b5bdb]/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[#f59e0b]/10 rounded-full blur-3xl"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
                        <div className="lg:col-span-6 text-center lg:text-left mb-12 lg:mb-0">
                            <div
                                className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-[#3b5bdb] text-xs font-semibold tracking-wide uppercase mb-6">
                                <span className="w-2 h-2 rounded-full bg-[#3b5bdb] mr-2 animate-pulse"></span>
                                Especialistas em Seguro de Cargas
                            </div>
                            <h1
                                className="text-4xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
                                Seguro de Transporte <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b5bdb] to-blue-400">de Cargas</span>
                            </h1>
                            <p
                                className="mt-4 text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                Cotação rápida de RCTR-C, RC-DC e RC-V com as melhores seguradoras do Brasil. Atendimento personalizado para transportadoras e embarcadores.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <a className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-[#3b5bdb] hover:bg-blue-700 shadow-lg hover:shadow-[#3b5bdb]/30 transition-all duration-300"
                                    href="#cotacao" aria-label="Solicitar cotação rápida de seguro de transporte">
                                    Cotação Rápida
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </a>
                                <a className="inline-flex items-center justify-center px-8 py-4 border border-slate-200 dark:border-slate-700 text-base font-medium rounded-full text-slate-700 dark:text-white bg-white dark:bg-[#1e293b] hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300"
                                    href="https://wa.me/5511979699832?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20cota%C3%A7%C3%A3o%20de%20seguro%20de%20transporte%20de%20cargas." target="_blank" rel="noopener noreferrer" aria-label="Falar com consultor de seguros via WhatsApp">
                                    <Phone className="w-5 h-5 mr-2" />
                                    Falar com Consultor
                                </a>
                            </div>
                            <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-8 opacity-60">
                                <div className="h-8 w-20 flex items-center justify-center">
                                    <img src={hdiLogo} alt="HDI Seguros" className="max-h-full max-w-full object-contain grayscale dark:invert" />
                                </div>
                                <div className="h-8 w-20 flex items-center justify-center">
                                    <img src={tokioLogo} alt="Tokio Marine Seguros" className="max-h-full max-w-full object-contain grayscale dark:invert" />
                                </div>
                                <div className="h-8 w-20 flex items-center justify-center">
                                    <img src={allianzLogo} alt="Allianz Seguros" className="max-h-full max-w-full object-contain grayscale dark:invert" />
                                </div>
                                <div className="h-8 w-20 flex items-center justify-center">
                                    <img src={bradescoLogo} alt="Bradesco Seguros" className="max-h-full max-w-full object-contain grayscale dark:invert" />
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-6 relative">
                            <div
                                className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-700">
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10"></div>
                                <img alt="Caminhão de carga em rodovia representando seguro de transporte de cargas RCTR-C e RC-DC"
                                    className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNC4xmIzrvgU5QU4laJX38qvoJgwkcpW28o2jpmrPdD4oN2l7P46CKwwtfofze-1Sb-6-jfMPTVcyuBElu2Ro6kpz3QxkBZLyc3dDGmJkaQpCJoVnC6i-dCluY3caWurqzJ_1dyWUlreOYMVU3cjLmpdw3jSCZPy6TCvsoBTL47tzLgEB9ktN7aFiNob3-tNmp1esi_cHxm5aXmISnjC3GjAIcGMf0K-8rxeo1zeMWLX6RYnFjKkqu19IfRgcClhVcq3Hskw8udm4" />
                                <div
                                    className="absolute bottom-8 left-8 z-20 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-4 rounded-xl shadow-lg max-w-xs border border-white/20">
                                    <div className="flex items-start space-x-3">
                                        <div
                                            className="bg-green-100 dark:bg-green-900/50 p-2 rounded-lg text-green-600 dark:text-green-400">
                                            <ShieldCheck className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900 dark:text-white">Apólice Ativa</p>
                                            <p className="text-xs text-slate-500 dark:text-slate-400">Cobertura total confirmada</p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="absolute top-8 right-8 z-20 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20">
                                    <div className="text-center">
                                        <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide">Experiência no Mercado</p>
                                        <p className="text-2xl font-bold text-[#3b5bdb] mt-1">+10 Anos</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── ANÁLISE DE RISCO ─── */}
            <section className="py-20 bg-white dark:bg-[#1e293b] border-y border-slate-100 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-base text-[#3b5bdb] font-semibold tracking-wide uppercase mb-2">Análise de Risco no Transporte</h2>
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Sua carga está mais exposta do
                                que você imagina.</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                O transporte rodoviário de cargas no Brasil enfrenta riscos crescentes. Sem um seguro adequado como o RCTR-C ou RC-DC,
                                um único sinistro pode comprometer todo o fluxo de caixa da sua transportadora.
                            </p>
                            <ul className="space-y-4 mb-4">
                                <li className="flex items-center text-slate-700 dark:text-slate-300">
                                    <span
                                        className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-500 mr-3">
                                        <AlertTriangle className="w-5 h-5" />
                                    </span>
                                    31.232 acidentes com veículos de carga em 2023
                                </li>
                                <li className="flex items-center text-slate-700 dark:text-slate-300">
                                    <span
                                        className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-500 mr-3">
                                        <AlertTriangle className="w-5 h-5" />
                                    </span>
                                    17.108 roubos de carga registrados em 2023
                                </li>
                            </ul>
                            <p className="text-xs text-slate-400 dark:text-slate-500 mb-6">Fonte: PRF / Anuário Brasileiro de Segurança Pública, 2024</p>
                            <a className="text-[#3b5bdb] font-medium hover:text-blue-700 flex items-center group"
                                href="https://www.gov.br/prf/pt-br" target="_blank" rel="noopener noreferrer"
                                aria-label="Ver estatísticas completas no site da PRF">
                                Ver estatísticas completas (PRF)
                                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                        <div
                            className="bg-[#f8fafc] dark:bg-[#0f172a] p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-inner relative">
                            <div className="flex justify-between items-end mb-4">
                                <div>
                                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Índice de Acidentes — Rodovias Federais</p>
                                    <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">Tendência de alta <span
                                        className="text-sm font-normal text-red-500">2019–2023</span></p>
                                </div>
                                <div className="flex space-x-2">
                                    <span className="w-3 h-3 rounded-full bg-[#3b5bdb]"></span>
                                    <span className="w-3 h-3 rounded-full bg-[#f59e0b]"></span>
                                </div>
                            </div>
                            <div className="h-64 w-full relative">
                                <div className="absolute inset-0 flex flex-col justify-between">
                                    <div className="w-full h-px bg-slate-200 dark:bg-slate-700 border-dashed border-t"></div>
                                    <div className="w-full h-px bg-slate-200 dark:bg-slate-700 border-dashed border-t"></div>
                                    <div className="w-full h-px bg-slate-200 dark:bg-slate-700 border-dashed border-t"></div>
                                    <div className="w-full h-px bg-slate-200 dark:bg-slate-700 border-dashed border-t"></div>
                                    <div className="w-full h-px bg-slate-200 dark:bg-slate-700 border-dashed border-t"></div>
                                    <div className="w-full h-px bg-slate-200 dark:bg-slate-700 border-dashed border-t"></div>
                                </div>
                                <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none"
                                    viewBox="0 0 100 100">
                                    <path className="text-[#3b5bdb] drop-shadow-md" d="M0,80 C20,75 40,60 50,50 C60,40 80,30 100,10"
                                        fill="none" stroke="currentColor" strokeWidth="3"></path>
                                    <path d="M0,80 C20,75 40,60 50,50 C60,40 80,30 100,10 V100 H0 Z"
                                        fill="url(#gradientPrimary)" opacity="0.1"></path>
                                    <path className="text-[#f59e0b] drop-shadow-md" d="M0,90 C30,85 50,70 70,60 C80,55 90,45 100,40"
                                        fill="none" stroke="currentColor" strokeWidth="3" style={{ strokeDasharray: '5,5' }}>
                                    </path>
                                    <defs>
                                        <linearGradient id="gradientPrimary" x1="0%" x2="0%" y1="0%" y2="100%">
                                            <stop className="text-[#3b5bdb]" offset="0%"
                                                style={{ stopColor: 'currentColor', stopOpacity: 1 }}></stop>
                                            <stop className="text-[#3b5bdb]" offset="100%"
                                                style={{ stopColor: 'currentColor', stopOpacity: 0 }}></stop>
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <div
                                    className="absolute top-[10%] right-0 w-4 h-4 bg-white border-2 border-[#3b5bdb] rounded-full shadow-lg transform translate-x-1/2 -translate-y-1/2 z-10">
                                </div>
                                <div
                                    className="absolute top-[40%] right-0 w-4 h-4 bg-white border-2 border-[#f59e0b] rounded-full shadow-lg transform translate-x-1/2 -translate-y-1/2 z-10">
                                </div>
                            </div>
                            <div className="flex justify-between mt-4 text-xs text-slate-400">
                                <span>2019</span><span>2020</span><span>2021</span><span>2022</span><span>2023</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── COBERTURAS ─── */}
            <section id="coberturas" className="py-24 bg-[#f8fafc] dark:bg-[#0f172a] relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-base text-[#3b5bdb] font-semibold tracking-wide uppercase">Coberturas de Seguro de Transporte</h2>
                        <p
                            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                            Proteção sob medida para cada modalidade
                        </p>
                        <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Trabalhamos com RCTR-C, RC-DC e RC-V — os três pilares do seguro de transporte rodoviário de cargas no Brasil.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div
                            className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 flex flex-col group">
                            <div
                                className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-[#3b5bdb] mb-6 group-hover:scale-110 transition-transform">
                                <Truck className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Seguro RCTR-C</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-2 font-medium">Obrigatório para transportadoras</p>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow">
                                Responsabilidade Civil do Transportador Rodoviário de Carga. Cobre danos à mercadoria causados
                                por colisão, capotagem, tombamento e abalroamento durante o transporte.
                            </p>
                            <Link className="inline-flex items-center text-sm font-semibold text-[#3b5bdb] hover:text-blue-700" to="/seguros/rctr-c" aria-label="Saiba mais sobre seguro RCTR-C">
                                Saiba mais <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                        <div
                            className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 flex flex-col group relative overflow-hidden">
                            <div
                                className="absolute top-0 right-0 bg-[#f59e0b] text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg">
                                POPULAR</div>
                            <div
                                className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform">
                                <Package className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Seguro RC-DC</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-2 font-medium">Proteção contra roubo e desvio</p>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow">
                                Responsabilidade Civil por Desaparecimento de Carga. Essencial para rotas de alto risco,
                                cobre roubo, furto e desaparecimento da mercadoria transportada.
                            </p>
                            <Link className="inline-flex items-center text-sm font-semibold text-[#3b5bdb] hover:text-blue-700" to="/seguros/rc-dc" aria-label="Saiba mais sobre seguro RC-DC">
                                Saiba mais <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                        <div
                            className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 flex flex-col group">
                            <div
                                className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                                <Ship className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Seguro RC-V</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-2 font-medium">Cobertura para terceiros</p>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow">
                                Responsabilidade Civil de Veículos. Proteção contra danos corporais e materiais a
                                terceiros causados pelo veículo transportador em caso de acidente.
                            </p>
                            <Link className="inline-flex items-center text-sm font-semibold text-[#3b5bdb] hover:text-blue-700" to="/seguros/auto-frota" aria-label="Saiba mais sobre seguro RC-V e auto frota">
                                Saiba mais <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── COMO FUNCIONA ─── */}
            <section className="py-24 bg-white dark:bg-[#1e293b]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-base text-[#3b5bdb] font-semibold tracking-wide uppercase">Como Funciona</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                            Da cotação à apólice em 4 passos
                        </p>
                        <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Processo simples e transparente para você contratar seu seguro de transporte de cargas.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8 relative">
                        {/* Linha conectora (desktop) */}
                        <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#3b5bdb]/20 via-[#3b5bdb]/40 to-[#3b5bdb]/20"></div>
                        
                        {[
                            { icon: FileText, step: "01", title: "Cotação", desc: "Preencha o formulário com os dados da sua operação. Leva menos de 2 minutos." },
                            { icon: Search, step: "02", title: "Análise", desc: "Nossos especialistas analisam o perfil de risco e negociam com as seguradoras parceiras." },
                            { icon: Send, step: "03", title: "Proposta", desc: "Você recebe as melhores opções de cobertura com condições transparentes e sem letras miúdas." },
                            { icon: Award, step: "04", title: "Emissão", desc: "Apólice emitida rapidamente. Sua carga viaja protegida com respaldo das maiores seguradoras." },
                        ].map((item, i) => (
                            <div key={i} className="text-center relative z-10">
                                <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-[#3b5bdb] mx-auto mb-4 border-2 border-[#3b5bdb]/20">
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <span className="text-xs font-bold text-[#3b5bdb] uppercase tracking-widest">Passo {item.step}</span>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-2 mb-2">{item.title}</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── NÚMEROS ─── */}
            <section className="py-20 bg-[#3b5bdb] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fillRule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fillOpacity=\"1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-2">A JJ & Amorim em números</h2>
                        <p className="text-blue-100">Mais de uma década protegendo transportadoras e embarcadores em todo o Brasil.</p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                            <div className="text-4xl lg:text-5xl font-extrabold text-white mb-2 tracking-tight">+10</div>
                            <div className="text-sm font-medium text-blue-100 uppercase tracking-wider">Anos de Mercado</div>
                        </div>
                        <div className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                            <div className="text-4xl lg:text-5xl font-extrabold text-white mb-2 tracking-tight">+500</div>
                            <div className="text-sm font-medium text-blue-100 uppercase tracking-wider">Clientes Atendidos</div>
                        </div>
                        <div className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                            <div className="text-4xl lg:text-5xl font-extrabold text-white mb-2 tracking-tight">8+</div>
                            <div className="text-sm font-medium text-blue-100 uppercase tracking-wider">Seguradoras Parceiras</div>
                        </div>
                        <div className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                            <div className="text-4xl lg:text-5xl font-extrabold text-white mb-2 tracking-tight">5 ★</div>
                            <div className="text-sm font-medium text-blue-100 uppercase tracking-wider">Avaliação Google</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── DEPOIMENTOS ─── */}
            <section className="py-24 bg-[#f8fafc] dark:bg-[#0f172a]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">O que nossos clientes dizem</h2>
                            <p className="mt-2 text-slate-600 dark:text-slate-400">Depoimentos de quem confia na JJ & Amorim para proteger suas operações</p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div
                            className="p-8 rounded-2xl bg-white dark:bg-[#1e293b] border border-slate-100 dark:border-slate-800 relative shadow-sm">
                            <span className="absolute top-8 right-8 text-6xl text-[#3b5bdb]/10 font-serif leading-none">"</span>
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 rounded-full bg-[#3b5bdb]/10 flex items-center justify-center text-[#3b5bdb] font-bold text-lg mr-4">C</div>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white">Cliente Transportadora</h4>
                                    <p className="text-xs text-slate-500">Transporte Rodoviário — SP</p>
                                </div>
                            </div>
                            <p className="text-slate-600 dark:text-slate-300 italic">
                                "O atendimento faz toda a diferença. Tivemos um sinistro e a equipe da JJ & Amorim acompanhou todo o processo junto à seguradora. Resolveram tudo de forma ágil."
                            </p>
                            <div className="mt-4 flex text-[#f59e0b] text-sm">
                                <Star className="w-5 h-5" />
                                <Star className="w-5 h-5" />
                                <Star className="w-5 h-5" />
                                <Star className="w-5 h-5" />
                                <Star className="w-5 h-5" />
                            </div>
                        </div>
                        <div
                            className="p-8 rounded-2xl bg-white dark:bg-[#1e293b] border border-slate-100 dark:border-slate-800 relative shadow-sm">
                            <span className="absolute top-8 right-8 text-6xl text-[#3b5bdb]/10 font-serif leading-none">"</span>
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 rounded-full bg-[#f59e0b]/10 flex items-center justify-center text-[#f59e0b] font-bold text-lg mr-4">E</div>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white">Embarcador Industrial</h4>
                                    <p className="text-xs text-slate-500">Indústria — Grande ABC</p>
                                </div>
                            </div>
                            <p className="text-slate-600 dark:text-slate-300 italic">
                                "Cotações claras e sem letras miúdas. A JJ & Amorim conseguiu condições melhores do que tínhamos antes, com a mesma cobertura. Recomendo para quem transporta carga."
                            </p>
                            <div className="mt-4 flex text-[#f59e0b] text-sm">
                                <Star className="w-5 h-5" />
                                <Star className="w-5 h-5" />
                                <Star className="w-5 h-5" />
                                <Star className="w-5 h-5" />
                                <Star className="w-5 h-5" />
                            </div>
                        </div>
                        <div
                            className="p-8 rounded-2xl bg-white dark:bg-[#1e293b] border border-slate-100 dark:border-slate-800 relative hidden lg:block shadow-sm">
                            <span className="absolute top-8 right-8 text-6xl text-[#3b5bdb]/10 font-serif leading-none">"</span>
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 font-bold text-lg mr-4">L</div>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white">Operador Logístico</h4>
                                    <p className="text-xs text-slate-500">Logística Integrada — RJ</p>
                                </div>
                            </div>
                            <p className="text-slate-600 dark:text-slate-300 italic">
                                "Trabalho com a JJ & Amorim há mais de 5 anos. O suporte na hora do sinistro é o que mais importa e eles nunca falharam. Equipe sempre disponível."
                            </p>
                            <div className="mt-4 flex text-[#f59e0b] text-sm">
                                <Star className="w-5 h-5" />
                                <Star className="w-5 h-5" />
                                <Star className="w-5 h-5" />
                                <Star className="w-5 h-5" />
                                <StarHalf className="w-5 h-5" />
                            </div>
                        </div>
                    </div>
                    <p className="text-xs text-slate-400 dark:text-slate-500 text-center mt-8">* Depoimentos baseados em avaliações reais. Nomes omitidos para preservar a privacidade dos clientes.</p>
                </div>
            </section>

            {/* ─── FORMULÁRIO DE COTAÇÃO ─── */}
            <section id="cotacao" className="py-20 px-4">
                <div className="max-w-5xl mx-auto bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl shadow-2xl overflow-hidden relative">
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-[#3b5bdb] opacity-20 rounded-full blur-3xl"></div>
                    <div className="relative z-10 px-8 py-16 md:p-12 text-center md:text-left md:flex md:items-start md:justify-between gap-12">
                        <div className="md:w-1/2 mb-10 md:mb-0">
                            <h2 className="text-3xl font-bold text-white mb-4">Solicite sua cotação de seguro de transporte</h2>
                            <p className="text-slate-300 text-lg mb-8">
                                Preencha o formulário e receba as melhores condições para proteger sua carga.
                            </p>
                            <ul className="space-y-4 text-slate-300 text-left">
                                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-[#f59e0b] mr-3 flex-shrink-0" /> Condições negociadas com as melhores seguradoras</li>
                                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-[#f59e0b] mr-3 flex-shrink-0" /> Especialistas em seguro de transporte de cargas</li>
                                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-[#f59e0b] mr-3 flex-shrink-0" /> Atendimento personalizado e sem burocracia</li>
                            </ul>
                        </div>

                        <div className="md:w-1/2 bg-white dark:bg-[#1e293b] rounded-2xl p-6 shadow-xl w-full text-left relative z-20">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Receba sua cotação</h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Nome / Empresa *</label>
                                        <input required value={form.nome} onChange={update('nome')} type="text" className="w-full px-4 py-2 bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-[#3b5bdb] focus:border-transparent outline-none transition-all dark:text-white" placeholder="Sua empresa" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">E-mail corporativo *</label>
                                        <input required value={form.email} onChange={update('email')} type="email" className="w-full px-4 py-2 bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-[#3b5bdb] focus:border-transparent outline-none transition-all dark:text-white" placeholder="voce@empresa.com" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">WhatsApp *</label>
                                        <input required value={form.whats} onChange={update('whats')} type="tel" className="w-full px-4 py-2 bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-[#3b5bdb] focus:border-transparent outline-none transition-all dark:text-white" placeholder="(00) 00000-0000" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Tipo de Carga</label>
                                        <select value={form.tipo} onChange={update('tipo')} className="w-full px-4 py-2 bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-[#3b5bdb] focus:border-transparent outline-none transition-all dark:text-white">
                                            <option value="">Selecione...</option>
                                            <option value="Geral">Carga Geral</option>
                                            <option value="Refrigerada">Refrigerada</option>
                                            <option value="Perigosa">Produtos Perigosos</option>
                                            <option value="Granel">Granel</option>
                                            <option value="Outros">Outros</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Origem Principal</label>
                                        <input value={form.origem} onChange={update('origem')} type="text" className="w-full px-4 py-2 bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-[#3b5bdb] focus:border-transparent outline-none transition-all dark:text-white" placeholder="Ex: São Paulo, SP" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Destino Principal</label>
                                        <input value={form.destino} onChange={update('destino')} type="text" className="w-full px-4 py-2 bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-[#3b5bdb] focus:border-transparent outline-none transition-all dark:text-white" placeholder="Ex: Todo Brasil" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Valor Médio Transportado (R$)</label>
                                    <input value={form.valor} onChange={update('valor')} type="text" className="w-full px-4 py-2 bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-[#3b5bdb] focus:border-transparent outline-none transition-all dark:text-white" placeholder="Ex: 150.000" />
                                </div>

                                <button disabled={isSubmitting} type="submit" className="w-full flex items-center justify-center px-4 py-3 bg-[#3b5bdb] hover:bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:shadow-[#3b5bdb]/30 transition-all duration-300 disabled:opacity-70" aria-label="Enviar solicitação de cotação de seguro">
                                    {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : null}
                                    {isSubmitting ? "Enviando..." : "Solicitar Cotação"}
                                </button>

                                <p className="text-xs text-center text-slate-500 mt-4 flex items-center justify-center">
                                    <Lock className="w-3 h-3 mr-1" /> Seus dados estão seguros e protegidos
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── FAQ ─── */}
            <section className="py-24 bg-white dark:bg-[#1e293b]">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-base text-[#3b5bdb] font-semibold tracking-wide uppercase">Perguntas Frequentes</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                            Dúvidas sobre seguro de transporte de cargas
                        </p>
                    </div>
                    <Accordion type="single" collapsible className="space-y-4">
                        <AccordionItem value="faq-1" className="border border-slate-200 dark:border-slate-700 rounded-xl px-6 bg-[#f8fafc] dark:bg-[#0f172a]">
                            <AccordionTrigger className="text-left text-slate-900 dark:text-white font-semibold hover:no-underline">
                                O que é o seguro RCTR-C e por que ele é obrigatório?
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-600 dark:text-slate-400">
                                O RCTR-C (Responsabilidade Civil do Transportador Rodoviário de Carga) é um seguro obrigatório para todas as transportadoras registradas na ANTT. Ele cobre danos à mercadoria causados por acidentes rodoviários como colisão, capotagem, tombamento e incêndio durante o transporte.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="faq-2" className="border border-slate-200 dark:border-slate-700 rounded-xl px-6 bg-[#f8fafc] dark:bg-[#0f172a]">
                            <AccordionTrigger className="text-left text-slate-900 dark:text-white font-semibold hover:no-underline">
                                Qual a diferença entre RCTR-C e RC-DC?
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-600 dark:text-slate-400">
                                O RCTR-C cobre danos causados por acidentes rodoviários (colisão, tombamento). Já o RC-DC cobre roubo, furto e desaparecimento da carga — riscos que o RCTR-C não contempla. Para proteção completa, recomenda-se contratar ambos.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="faq-3" className="border border-slate-200 dark:border-slate-700 rounded-xl px-6 bg-[#f8fafc] dark:bg-[#0f172a]">
                            <AccordionTrigger className="text-left text-slate-900 dark:text-white font-semibold hover:no-underline">
                                Quanto tempo leva para receber a cotação?
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-600 dark:text-slate-400">
                                Após o preenchimento do formulário, nossa equipe analisa o perfil de risco e retorna com as melhores opções em até 1 dia útil. Para casos urgentes, entre em contato pelo WhatsApp para atendimento prioritário.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="faq-4" className="border border-slate-200 dark:border-slate-700 rounded-xl px-6 bg-[#f8fafc] dark:bg-[#0f172a]">
                            <AccordionTrigger className="text-left text-slate-900 dark:text-white font-semibold hover:no-underline">
                                Quais seguradoras a JJ & Amorim trabalha?
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-600 dark:text-slate-400">
                                Trabalhamos com as principais seguradoras do mercado de transporte, como HDI, Tokio Marine, Allianz, Bradesco Seguros, Sompo, Azul Seguros e Yelum. Isso nos permite oferecer as melhores condições e preços para cada perfil de operação.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="faq-5" className="border border-slate-200 dark:border-slate-700 rounded-xl px-6 bg-[#f8fafc] dark:bg-[#0f172a]">
                            <AccordionTrigger className="text-left text-slate-900 dark:text-white font-semibold hover:no-underline">
                                O que fazer em caso de sinistro?
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-600 dark:text-slate-400">
                                Em caso de sinistro, entre em contato imediatamente pelo nosso WhatsApp <a href="https://wa.me/5511979699832" target="_blank" rel="noopener noreferrer" className="text-[#3b5bdb] hover:underline">(11) 97969-9832</a>. Nossa equipe irá orientar sobre os procedimentos e acompanhar todo o processo junto à seguradora até a resolução.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="faq-6" className="border border-slate-200 dark:border-slate-700 rounded-xl px-6 bg-[#f8fafc] dark:bg-[#0f172a]">
                            <AccordionTrigger className="text-left text-slate-900 dark:text-white font-semibold hover:no-underline">
                                Embarcadores também precisam de seguro de carga?
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-600 dark:text-slate-400">
                                Sim. O embarcador (dono da carga) pode contratar o seguro de Transporte Nacional para proteger suas mercadorias independentemente da transportadora utilizada. É uma camada extra de proteção que garante a reposição do valor da mercadoria em caso de sinistro.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>

            {/* ─── FOOTER ─── */}
            <footer
                className="bg-[#f8fafc] dark:bg-[#0f172a] border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                        <div className="col-span-1 lg:col-span-1">
                            <div className="flex items-center space-x-2 mb-6">
                                <img src={jjamorimLogo} alt="JJ & Amorim Corretora de Seguros" className="h-8 w-auto rounded-lg object-contain" />
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                                Corretora de seguros especializada em transporte de cargas. Protegendo transportadoras e embarcadores há mais de 10 anos.
                            </p>
                            <div className="flex space-x-4">
                                <a className="text-slate-400 hover:text-[#3b5bdb] transition-colors" href="https://www.facebook.com/jjamorimseguros" target="_blank" rel="noopener noreferrer" aria-label="Facebook da JJ & Amorim"><Facebook className="w-5 h-5" /></a>
                                <a className="text-slate-400 hover:text-[#3b5bdb] transition-colors" href="https://www.instagram.com/corretorajjamorim/" target="_blank" rel="noopener noreferrer" aria-label="Instagram da JJ & Amorim"><Instagram className="w-5 h-5" /></a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Seguros</h3>
                            <ul className="space-y-3">
                                <li><Link className="text-slate-500 dark:text-slate-400 hover:text-[#3b5bdb] text-sm transition-colors" to="/seguros/auto-frota">Auto Frota</Link></li>
                                <li><Link className="text-slate-500 dark:text-slate-400 hover:text-[#3b5bdb] text-sm transition-colors" to="/seguros/rctr-c">RCTR-C</Link></li>
                                <li><Link className="text-slate-500 dark:text-slate-400 hover:text-[#3b5bdb] text-sm transition-colors" to="/seguros/rc-dc">RC-DC</Link></li>
                                <li><Link className="text-slate-500 dark:text-slate-400 hover:text-[#3b5bdb] text-sm transition-colors" to="/seguros/vida-em-grupo">Vida em Grupo</Link></li>
                                <li><Link className="text-slate-500 dark:text-slate-400 hover:text-[#3b5bdb] text-sm transition-colors" to="/seguros/empresarial">Empresarial</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Institucional</h3>
                            <ul className="space-y-3">
                                <li><Link className="text-slate-500 dark:text-slate-400 hover:text-[#3b5bdb] text-sm transition-colors" to="/sobre">Sobre Nós</Link></li>
                                <li><Link className="text-slate-500 dark:text-slate-400 hover:text-[#3b5bdb] text-sm transition-colors" to="/privacidade">Política de Privacidade</Link></li>
                                <li><Link className="text-slate-500 dark:text-slate-400 hover:text-[#3b5bdb] text-sm transition-colors" to="/termos">Termos de Uso</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Contato</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start text-slate-500 dark:text-slate-400 text-sm gap-2">
                                    <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                    (11) 3493-3605
                                </li>
                                <li className="flex items-start text-slate-500 dark:text-slate-400 text-sm gap-2">
                                    <MessageCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                    <a href="https://wa.me/5511979699832" target="_blank" rel="noopener noreferrer" className="hover:text-[#3b5bdb] transition-colors">(11) 97969-9832</a>
                                </li>
                                <li className="flex items-start text-slate-500 dark:text-slate-400 text-sm gap-2">
                                    <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                    contato@jjamorimseguros.com.br
                                </li>
                                <li className="flex items-start text-slate-500 dark:text-slate-400 text-sm gap-2">
                                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                    R. Frei Gaspar, 941 - Sala 603<br />São Bernardo do Campo - SP
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-slate-400 text-xs mb-4 md:mb-0">
                            © {new Date().getFullYear()} JJ & Amorim Corretora de Seguros. Todos os direitos reservados. CNPJ: 21.364.352/0001-04
                        </p>
                        <div className="flex items-center space-x-2 text-slate-400 text-xs">
                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                            <span>Site Seguro SSL</span>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
}
