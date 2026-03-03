import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

import {
    Sun, Moon, ArrowRight, Phone, ShieldCheck, AlertTriangle, Truck, Package, Ship, Star, StarHalf, Lock, Facebook, Instagram, Briefcase, Mail, MapPin, CheckCircle2, Loader2, MessageCircle, Menu, X
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
        <div className="bg-[#f8fafc] dark:bg-[#0f172a] text-slate-800 dark:text-slate-200 font-sans antialiased transition-colors duration-300 min-h-screen">

            <nav
                className={`fixed w-full z-50 top-0 transition-all duration-500 ease-in-out backdrop-blur-md ${
                    scrolled
                        ? "mx-auto mt-2 md:mt-3 px-2 md:px-4 max-w-[calc(100%-1rem)] md:max-w-[calc(100%-2rem)] left-[0.5rem] md:left-[1rem] right-[0.5rem] md:right-[1rem] rounded-xl md:rounded-2xl bg-white/90 dark:bg-[#0f172a]/90 shadow-lg shadow-slate-900/5 border border-slate-200/60 dark:border-slate-700/60"
                        : "bg-white/70 dark:bg-[#0f172a]/70 border-b border-slate-200/50 dark:border-slate-700/50"
                }`}
                style={scrolled ? { width: 'auto' } : undefined}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 md:h-20">
                        <Link to="/" className="flex items-center space-x-3">
                            <img src={jjamorimLogo} alt="JJ & Amorim Corretora de Seguros" className="h-9 md:h-10 w-auto" />
                        </Link>
                        <div className="hidden md:flex space-x-8 text-sm font-medium">
                            <a className="text-slate-600 dark:text-slate-300 hover:text-[#3b5bdb] dark:hover:text-[#3b5bdb] transition-colors"
                                href="/#cotacao">Produtos</a>
                            <Link className="text-slate-600 dark:text-slate-300 hover:text-[#3b5bdb] dark:hover:text-[#3b5bdb] transition-colors"
                                to="/sobre">Sobre Nós</Link>
                            <a className="text-slate-600 dark:text-slate-300 hover:text-[#3b5bdb] dark:hover:text-[#3b5bdb] transition-colors"
                                href="/#cotacao">Sinistros</a>
                            <a className="text-slate-600 dark:text-slate-300 hover:text-[#3b5bdb] dark:hover:text-[#3b5bdb] transition-colors"
                                href="/#cotacao">Contato</a>
                        </div>
                        <div className="flex items-center space-x-3">
                            <button onClick={() => setIsDarkMode(!isDarkMode)} aria-label="Alternar modo escuro" className="bg-slate-100 dark:bg-slate-800 p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                            </button>
                            <a className="hidden md:inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-[#3b5bdb] hover:bg-blue-700 shadow-[0_0_20px_-5px_rgba(59,91,219,0.5)] transition-all duration-300 hover:-translate-y-0.5"
                                href="#cotacao">
                                Solicitar Cotação
                            </a>
                            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" aria-label="Menu">
                                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                    {/* Mobile menu */}
                    {mobileMenuOpen && (
                        <div className="md:hidden pb-4 space-y-2 border-t border-slate-200/50 dark:border-slate-700/50 pt-4">
                            <a onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#3b5bdb]" href="#cotacao">Produtos</a>
                            <Link onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#3b5bdb]" to="/sobre">Sobre Nós</Link>
                            <a onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#3b5bdb]" href="#cotacao">Contato</a>
                            <a onClick={() => setMobileMenuOpen(false)} className="block w-full text-center py-2.5 bg-[#3b5bdb] text-white rounded-lg font-medium text-sm" href="#cotacao">Solicitar Cotação</a>
                        </div>
                    )}
                </div>
            </nav>
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
                                Especialistas em Logística
                            </div>
                            <h1
                                className="text-4xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
                                Seguro de Carga <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b5bdb] to-blue-400">Premium
                                    & Seguro</span>
                            </h1>
                            <p
                                className="mt-4 text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                Proteção total para o seu negócio com a transparência que você merece. Tecnologia e atendimento
                                humanizado unidos para garantir que sua carga chegue ao destino.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <a className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-[#3b5bdb] hover:bg-blue-700 shadow-lg hover:shadow-[#3b5bdb]/30 transition-all duration-300"
                                    href="#cotacao">
                                    Cotação Rápida
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </a>
                                <a className="inline-flex items-center justify-center px-8 py-4 border border-slate-200 dark:border-slate-700 text-base font-medium rounded-full text-slate-700 dark:text-white bg-white dark:bg-[#1e293b] hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300"
                                    href="https://wa.me/5511979699832?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20cota%C3%A7%C3%A3o%20de%20seguro%20de%20transporte%20de%20cargas." target="_blank" rel="noopener noreferrer">
                                    <Phone className="w-5 h-5 mr-2" />
                                    Falar com Consultor
                                </a>
                            </div>
                            <div
                                className="mt-10 flex items-center justify-center lg:justify-start gap-x-6 opacity-60">
                                <img src={hdiLogo} alt="HDI Seguros" className="h-7 md:h-8 w-auto object-contain grayscale dark:invert" />
                                <img src={tokioLogo} alt="Tokio Marine Seguros" className="h-7 md:h-8 w-auto object-contain grayscale dark:invert" />
                                <img src={allianzLogo} alt="Allianz Seguros" className="h-7 md:h-8 w-auto object-contain grayscale dark:invert" />
                                <img src={bradescoLogo} alt="Bradesco Seguros" className="h-7 md:h-8 w-auto object-contain grayscale dark:invert" />
                            </div>
                        </div>
                        <div className="lg:col-span-6 relative">
                            <div
                                className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-700">
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10"></div>
                                <img alt="Navio de contêineres navegando em águas calmas ao pôr do sol representando seguro de transporte de cargas"
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
                                        <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide">Sinistros
                                            Recuperados</p>
                                        <p className="text-2xl font-bold text-[#3b5bdb] mt-1">R$ 7 Mi+</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-white dark:bg-[#1e293b] border-y border-slate-100 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-base text-[#3b5bdb] font-semibold tracking-wide uppercase mb-2">Análise de Risco</h2>
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Sua carga está mais exposta do
                                que você imagina.</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                Acidentes com caminhões continuam crescendo nas estradas brasileiras. Sem a proteção adequada,
                                um único incidente pode comprometer todo o fluxo de caixa da sua transportadora.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center text-slate-700 dark:text-slate-300">
                                    <span
                                        className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-500 mr-3">
                                        <AlertTriangle className="w-5 h-5" />
                                    </span>
                                    31.232 acidentes com veículos de carga
                                </li>
                                <li className="flex items-center text-slate-700 dark:text-slate-300">
                                    <span
                                        className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-500 mr-3">
                                        <AlertTriangle className="w-5 h-5" />
                                    </span>
                                    17.108 roubos de carga registrados
                                </li>
                            </ul>
                            <a className="text-[#3b5bdb] font-medium hover:text-blue-700 flex items-center group" href="#">
                                Ver estatísticas completas
                                <span
                                    className="material-icons-outlined ml-1 group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
                            </a>
                        </div>
                        <div
                            className="bg-[#f8fafc] dark:bg-[#0f172a] p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-inner relative">
                            <div className="flex justify-between items-end mb-4">
                                <div>
                                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Índice de Acidentes</p>
                                    <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">+12% <span
                                        className="text-sm font-normal text-red-500">vs ano anterior</span></p>
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
                                <span>Jan</span><span>Mar</span><span>Jun</span><span>Set</span><span>Dez</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-24 bg-[#f8fafc] dark:bg-[#0f172a] relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-base text-[#3b5bdb] font-semibold tracking-wide uppercase">Soluções Completas</h2>
                        <p
                            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                            Proteção sob medida para cada modalidade
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
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow">
                                Responsabilidade Civil do Transportador Rodoviário de Carga. Cobre danos a terceiros causados
                                por acidentes como colisão, capotagem e tombamento.
                            </p>
                            <Link className="inline-flex items-center text-sm font-semibold text-[#3b5bdb] hover:text-blue-700" to="/seguros/rctr-c">
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
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow">
                                Proteção contra roubo e desaparecimento de carga. Essencial para operações em regiões de risco,
                                garantindo a reposição do valor da mercadoria.
                            </p>
                            <Link className="inline-flex items-center text-sm font-semibold text-[#3b5bdb] hover:text-blue-700" to="/seguros/rc-dc">
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
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow">
                                Responsabilidade Civil de Veículos. Proteção adicional para danos corporais e materiais a
                                terceiros não transportados.
                            </p>
                            <Link className="inline-flex items-center text-sm font-semibold text-[#3b5bdb] hover:text-blue-700" to="/seguros/auto-frota">
                                Saiba mais <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-[#3b5bdb] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fillRule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fillOpacity=\"1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-2">A JJ & Amorim em números</h2>
                        <p className="text-blue-100">Mais de uma década de experiência protegendo famílias e empresas.</p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                            <div className="text-4xl lg:text-5xl font-extrabold text-white mb-2 tracking-tight">+10</div>
                            <div className="text-sm font-medium text-blue-100 uppercase tracking-wider">Anos de História</div>
                        </div>
                        <div className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                            <div className="text-4xl lg:text-5xl font-extrabold text-white mb-2 tracking-tight">+999</div>
                            <div className="text-sm font-medium text-blue-100 uppercase tracking-wider">Clientes Protegidos</div>
                        </div>
                        <div className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                            <div className="text-4xl lg:text-5xl font-extrabold text-white mb-2 tracking-tight">R$ 7M+</div>
                            <div className="text-sm font-medium text-blue-100 uppercase tracking-wider">Em Sinistros Pagos</div>
                        </div>
                        <div className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                            <div className="text-4xl lg:text-5xl font-extrabold text-white mb-2 tracking-tight">96%</div>
                            <div className="text-sm font-medium text-blue-100 uppercase tracking-wider">De Satisfação</div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-24 bg-white dark:bg-[#1e293b]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">O que nossos parceiros dizem</h2>
                            <p className="mt-2 text-slate-600 dark:text-slate-400">Feedback real de quem confia na JJ & Amorim</p>
                        </div>
                        <div className="hidden md:flex space-x-2">
                            <button
                                className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                <Star className="w-5 h-5" />
                            </button>
                            <button
                                className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div
                            className="p-8 rounded-2xl bg-[#f8fafc] dark:bg-[#0f172a] border border-slate-100 dark:border-slate-800 relative">
                            <span className="absolute top-8 right-8 text-6xl text-[#3b5bdb]/10 font-serif leading-none">"</span>
                            <div className="flex items-center mb-6">
                                <img alt="Carlos Mendes" className="w-12 h-12 rounded-full object-cover mr-4"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDw_Yj0t3Q2OsLJhaSWAVS0nlBc5Orn0cOrpy9Zd5Mz4PiMJ4JZSU4D7GAnzRmuYZeaOyUJ0nVk6jE7Wj_9cEH7qQ8MSxr4mQHbpc2WbmBnUjlABE3uqqkYa0EZrcR3_ArEwm4uyHidSSPLQaw92_RjX2iY_L04rjr9EUDNabLxKgWpPb1NsAl2rBOWURlt31zWbSCoxJ2U1505UoFqr71piCwXOSZPwNV84dTspsTAx2D1JXILP1o8UNw5LCMeE9gsi0WKZOm6e0g" />
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white">Carlos Mendes</h4>
                                    <p className="text-xs text-slate-500">Diretor, TransMendes Logística</p>
                                </div>
                            </div>
                            <p className="text-slate-600 dark:text-slate-300 italic">
                                "O atendimento humanizado faz toda a diferença. Tivemos um sinistro complicado mês passado e a
                                equipe da JJ resolveu tudo em tempo recorde. Não troco por nada."
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
                            className="p-8 rounded-2xl bg-[#f8fafc] dark:bg-[#0f172a] border border-slate-100 dark:border-slate-800 relative">
                            <span className="absolute top-8 right-8 text-6xl text-[#3b5bdb]/10 font-serif leading-none">"</span>
                            <div className="flex items-center mb-6">
                                <img alt="Fernanda Lima" className="w-12 h-12 rounded-full object-cover mr-4"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA2g2PV3vRyOfA6_CqLARvxWtqQz8CJxivC2XipWFN-mYEDESYQo4jPPprT45gjhZVQh9HmPguEk02Gf2F200zn7LG65a7ykVG6dWn9fWSlIad3XqAr8LwmAogPr-c7ozkwXvtZA-svyRI9ZIJLAy_QxXLMMBYGxfRA9vzJ10IynGIc3zPpoeSUPHpHIxB6-f1IWppJPQVBHTUHNCqbVBtbb4j4Dvaewjymkra1iZq2iYRq0UnUCIDAZgvXaAt6m3O2AHiiAQJTOU" />
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white">Fernanda Lima</h4>
                                    <p className="text-xs text-slate-500">Gerente Op., FastCargo</p>
                                </div>
                            </div>
                            <p className="text-slate-600 dark:text-slate-300 italic">
                                "Transparência é a palavra chave. As cotações são claras, sem letras miúdas. Sinto que meu
                                patrimônio está realmente protegido."
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
                            className="p-8 rounded-2xl bg-[#f8fafc] dark:bg-[#0f172a] border border-slate-100 dark:border-slate-800 relative hidden lg:block">
                            <span className="absolute top-8 right-8 text-6xl text-[#3b5bdb]/10 font-serif leading-none">"</span>
                            <div className="flex items-center mb-6">
                                <img alt="Roberto Silva" className="w-12 h-12 rounded-full object-cover mr-4"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCL66avREyNlj9ZXMRwMP2GJXi_YaaxvdL8UU1rSUkKA5bxBSzlqHah8PlZaTRdt286QvUzA1UvWyYztt6xxJYtH-2qxNKI3BO3QavopL0MhpJ6G8UpTNtv9H-LAfNp3YCMU2XD99o23AA-tnGKAINzj5nLYmv_JcNhMtipkP6Bk4JjR1MMLupoi7wGjMWKSxmQhCcnaQvma8rosHGrwNicQj7MikSx5zmNQ7v9SPdff3y2OdiGw0sYNQ4JveFGNHJbWM5hv1ylydE" />
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white">Roberto Silva</h4>
                                    <p className="text-xs text-slate-500">CEO, RotaSul Transportes</p>
                                </div>
                            </div>
                            <p className="text-slate-600 dark:text-slate-300 italic">
                                "Melhor custo-benefício do mercado. Conseguiram reduzir nossos custos com apólices em 15%
                                mantendo a mesma cobertura."
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
                </div>
            </section>

            <section id="cotacao" className="py-20 px-4">
                <div className="max-w-5xl mx-auto bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl shadow-2xl overflow-hidden relative">
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-[#3b5bdb] opacity-20 rounded-full blur-3xl"></div>
                    <div className="relative z-10 px-8 py-16 md:p-12 text-center md:text-left md:flex md:items-start md:justify-between gap-12">
                        <div className="md:w-1/2 mb-10 md:mb-0">
                            <h2 className="text-3xl font-bold text-white mb-4">Pronto para operar com tranquilidade?</h2>
                            <p className="text-slate-300 text-lg mb-8">
                                Faça uma cotação gratuita hoje e descubra como podemos proteger o seu negócio.
                            </p>
                            <ul className="space-y-4 text-slate-300 text-left">
                                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-[#f59e0b] mr-3 flex-shrink-0" /> Condições negociadas com as melhores seguradoras</li>
                                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-[#f59e0b] mr-3 flex-shrink-0" /> Especialistas em logística rodoviária</li>
                                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-[#f59e0b] mr-3 flex-shrink-0" /> Resposta para sua cotação em até 2 horas</li>
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

                                <button disabled={isSubmitting} type="submit" className="w-full flex items-center justify-center px-4 py-3 bg-[#3b5bdb] hover:bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:shadow-[#3b5bdb]/30 transition-all duration-300 disabled:opacity-70">
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

            <footer
                className="bg-[#f8fafc] dark:bg-[#0f172a] border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                        <div className="col-span-1 lg:col-span-1">
                            <div className="flex items-center space-x-2 mb-6">
                                <img src={jjamorimLogo} alt="JJ & Amorim Corretora de Seguros" className="h-8 w-auto" />
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                                Corretora de seguros especializada em transporte de cargas. Protegendo o que importa há mais de
                                10 anos.
                            </p>
                            <div className="flex space-x-4">
                                <a className="text-slate-400 hover:text-[#3b5bdb] transition-colors" href="https://www.facebook.com/jjamorimseguros" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
                                <a className="text-slate-400 hover:text-[#3b5bdb] transition-colors" href="https://www.instagram.com/corretorajjamorim/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Seguros
                            </h3>
                            <ul className="space-y-3">
                                <li><Link className="text-slate-500 dark:text-slate-400 hover:text-[#3b5bdb] text-sm transition-colors" to="/seguros/auto-frota">Auto Frota</Link></li>
                                <li><Link className="text-slate-500 dark:text-slate-400 hover:text-[#3b5bdb] text-sm transition-colors" to="/seguros/rctr-c">RCTR-C</Link></li>
                                <li><Link className="text-slate-500 dark:text-slate-400 hover:text-[#3b5bdb] text-sm transition-colors" to="/seguros/rc-dc">RC-DC</Link></li>
                                <li><Link className="text-slate-500 dark:text-slate-400 hover:text-[#3b5bdb] text-sm transition-colors" to="/seguros/vida-em-grupo">Vida em Grupo</Link></li>
                                <li><Link className="text-slate-500 dark:text-slate-400 hover:text-[#3b5bdb] text-sm transition-colors" to="/seguros/empresarial">Empresarial</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
                                Institucional</h3>
                            <ul className="space-y-3">
                                <li><Link className="text-slate-500 dark:text-slate-400 hover:text-[#3b5bdb] text-sm transition-colors" to="/sobre">Sobre Nós</Link></li>
                                <li><Link className="text-slate-500 dark:text-slate-400 hover:text-[#3b5bdb] text-sm transition-colors" to="/privacidade">Política de Privacidade</Link></li>
                                <li><Link className="text-slate-500 dark:text-slate-400 hover:text-[#3b5bdb] text-sm transition-colors" to="/termos">Termos de Uso</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Contato
                            </h3>
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
