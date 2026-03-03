import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sun, Moon, Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, ArrowRight } from "lucide-react";

interface PageLayoutProps {
    children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        if (isDarkMode) document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
    }, [isDarkMode]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="bg-[#f8fafc] dark:bg-[#0f172a] text-slate-800 dark:text-slate-200 font-sans antialiased transition-colors duration-300 min-h-screen">
            {/* ─── NAVBAR ─── */}
            <nav className="fixed w-full z-50 top-0 transition-all duration-300 backdrop-blur-md bg-white/70 dark:bg-[#0f172a]/70 border-b border-slate-200/50 dark:border-slate-700/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <Link to="/" className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#3b5bdb] to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                                JJ
                            </div>
                            <span className="font-display font-bold text-xl tracking-tight text-slate-900 dark:text-white">
                                JJ <span className="text-[#3b5bdb]">&</span> Amorim
                            </span>
                        </Link>
                        <div className="hidden md:flex space-x-8 text-sm font-medium">
                            <Link className="text-slate-600 dark:text-slate-300 hover:text-[#3b5bdb] transition-colors" to="/#produtos">Produtos</Link>
                            <Link className="text-slate-600 dark:text-slate-300 hover:text-[#3b5bdb] transition-colors" to="/sobre">Sobre Nós</Link>
                            <Link className="text-slate-600 dark:text-slate-300 hover:text-[#3b5bdb] transition-colors" to="/#cotacao">Contato</Link>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button onClick={() => setIsDarkMode(!isDarkMode)} aria-label="Toggle Dark Mode" className="bg-slate-100 dark:bg-slate-800 p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                            </button>
                            <Link className="hidden md:inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-[#3b5bdb] hover:bg-blue-700 shadow-[0_0_20px_-5px_rgba(59,91,219,0.5)] transition-all duration-300 hover:-translate-y-0.5" to="/#cotacao">
                                Solicitar Cotação
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* ─── CONTENT ─── */}
            <main>{children}</main>

            {/* ─── FOOTER ─── */}
            <footer className="bg-[#f8fafc] dark:bg-[#0f172a] border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                        {/* Brand */}
                        <div className="col-span-1 lg:col-span-1">
                            <Link to="/" className="flex items-center space-x-2 mb-6">
                                <div className="w-8 h-8 bg-[#3b5bdb] rounded-lg flex items-center justify-center text-white font-bold text-sm">JJ</div>
                                <span className="font-display font-bold text-lg text-slate-900 dark:text-white">JJ <span className="text-[#3b5bdb]">&</span> Amorim</span>
                            </Link>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                                Corretora de seguros especializada em transporte de cargas. Protegendo o que importa há mais de 10 anos.
                            </p>
                            <div className="flex space-x-4">
                                <a className="text-slate-400 hover:text-[#3b5bdb] transition-colors" href="https://www.facebook.com/jjamorimseguros" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a className="text-slate-400 hover:text-[#3b5bdb] transition-colors" href="https://www.instagram.com/corretorajjamorim/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                    <Instagram className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/* Seguros */}
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

                        {/* Institucional */}
                        <div>
                            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Institucional</h3>
                            <ul className="space-y-3">
                                <li><Link className="text-slate-500 dark:text-slate-400 hover:text-[#3b5bdb] text-sm transition-colors" to="/sobre">Sobre Nós</Link></li>
                                <li><Link className="text-slate-500 dark:text-slate-400 hover:text-[#3b5bdb] text-sm transition-colors" to="/privacidade">Política de Privacidade</Link></li>
                                <li><Link className="text-slate-500 dark:text-slate-400 hover:text-[#3b5bdb] text-sm transition-colors" to="/termos">Termos de Uso</Link></li>
                            </ul>
                        </div>

                        {/* Contato */}
                        <div>
                            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Contato</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-slate-500 dark:text-slate-400 text-sm">
                                    <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" /> (11) 3493-3605
                                </li>
                                <li className="flex items-start gap-2 text-slate-500 dark:text-slate-400 text-sm">
                                    <MessageCircle className="w-4 h-4 mt-0.5 flex-shrink-0" /> (11) 97969-9832
                                </li>
                                <li className="flex items-start gap-2 text-slate-500 dark:text-slate-400 text-sm">
                                    <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" /> contato@jjamorimseguros.com.br
                                </li>
                                <li className="flex items-start gap-2 text-slate-500 dark:text-slate-400 text-sm">
                                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" /> R. Frei Gaspar, 941 - Sala 603<br />São Bernardo do Campo - SP
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
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
