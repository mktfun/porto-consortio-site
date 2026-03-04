import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";
import jjamorimLogo from "@/assets/jjamorim-logo.png";

interface PageLayoutProps {
    children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
        setMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (menuOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    const navLinks = [
        { label: "Especialidades", href: "/#coberturas" },
        { label: "O Manifesto", href: "/#diferencial" },
        { label: "A Corretora", href: "/sobre" },
    ];

    return (
        <div className="bg-background text-foreground antialiased min-h-screen">
            {/* NAVBAR */}
            <nav className={`fixed z-40 transition-all duration-500 ease-in-out left-1/2 -translate-x-1/2 ${
                scrolled
                    ? "top-4 w-[95%] md:w-[80%] rounded-3xl bg-background/80 backdrop-blur-xl border border-white/10 shadow-2xl py-3 px-6"
                    : "top-0 md:top-8 w-full px-6 md:px-16 py-4 bg-background/50 backdrop-blur-md border-b border-white/5"
            }`}>
                <div className="flex items-center justify-between w-full">
                    <Link to="/" className="flex items-center space-x-3 flex-shrink-0">
                        <img src={jjamorimLogo} alt="JJ & Amorim Corretora de Seguros" className="h-9 w-auto rounded-lg" />
                        <span className="font-bold text-white text-lg tracking-tight">
                            JJ <span className="text-primary">&</span> Amorim
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link key={link.label} to={link.href} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <a href="tel:+5511979699832" className="hidden lg:flex items-center text-sm font-bold text-slate-300 hover:text-accent transition-colors">
                            <Phone className="w-4 h-4 mr-2" /> (11) 97969-9832
                        </a>
                        <Link to="/#cotacao" className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-[0_0_20px_-5px_theme(colors.primary.DEFAULT)] inline-flex items-center">
                            Cotar Agora <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </div>

                    <div className="flex md:hidden items-center gap-3">
                        <Link to="/#cotacao" className="bg-primary text-white px-4 py-2 rounded-full text-xs font-bold">Cotar</Link>
                        <button onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white">
                            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-30 md:hidden transition-all duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" onClick={() => setMenuOpen(false)} />
                <div className={`absolute top-0 left-0 right-0 pt-24 px-6 pb-10 flex flex-col gap-6 transition-transform duration-300 ${menuOpen ? "translate-y-0" : "-translate-y-4"}`}>
                    {navLinks.map((link) => (
                        <Link key={link.label} to={link.href} onClick={() => setMenuOpen(false)} className="text-2xl font-bold text-white border-b border-white/10 pb-6">
                            {link.label}
                        </Link>
                    ))}
                    <a href="tel:+5511979699832" className="flex items-center gap-3 text-lg text-slate-400 mt-4">
                        <Phone className="w-5 h-5 text-accent" /> (11) 97969-9832
                    </a>
                    <Link to="/#cotacao" onClick={() => setMenuOpen(false)} className="mt-2 w-full flex items-center justify-center px-6 py-4 bg-primary text-white font-bold rounded-2xl text-lg">
                        Solicitar Cotação <ArrowRight className="w-5 h-5 ml-3" />
                    </Link>
                </div>
            </div>

            {/* CONTENT */}
            <main className="pt-20 md:pt-28">{children}</main>

            {/* FOOTER */}
            <footer className="bg-background border-t border-white/5 pt-16 pb-8 mt-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                        <div className="lg:col-span-1">
                            <Link to="/" className="flex items-center space-x-3 mb-6">
                                <img src={jjamorimLogo} alt="JJ & Amorim" className="h-9 w-auto rounded-lg" />
                                <span className="font-bold text-white text-lg">JJ <span className="text-primary">&</span> Amorim</span>
                            </Link>
                            <p className="text-slate-500 text-sm leading-relaxed mb-6">Corretora especializada em transporte de cargas. Protegendo quem move o Brasil há mais de 10 anos.</p>
                            <div className="flex gap-4">
                                <a href="https://www.facebook.com/jjamorimseguros" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white">
                                    <Facebook className="w-4 h-4" />
                                </a>
                                <a href="https://www.instagram.com/corretorajjamorim/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white">
                                    <Instagram className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-5 text-xs uppercase tracking-widest font-mono">Seguros</h4>
                            <ul className="space-y-3">
                                {[["RCTR-C", "/seguros/rctr-c"], ["RC-DC", "/seguros/rc-dc"], ["Auto Frota", "/seguros/auto-frota"], ["Vida em Grupo", "/seguros/vida-em-grupo"], ["Empresarial", "/seguros/empresarial"]].map(([label, to]) => (
                                    <li key={to}><Link to={to} className="text-slate-500 hover:text-white text-sm transition-colors">{label}</Link></li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-5 text-xs uppercase tracking-widest font-mono">Empresa</h4>
                            <ul className="space-y-3">
                                {[["Sobre Nós", "/sobre"], ["Pol. de Privacidade", "/privacidade"], ["Termos de Uso", "/termos"]].map(([label, to]) => (
                                    <li key={to}><Link to={to} className="text-slate-500 hover:text-white text-sm transition-colors">{label}</Link></li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-5 text-xs uppercase tracking-widest font-mono">Contato</h4>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-slate-500 text-sm"><Phone className="w-4 h-4 flex-shrink-0" /> (11) 3493-3605</li>
                                <li className="flex items-center gap-3 text-slate-500 text-sm"><MessageCircle className="w-4 h-4 flex-shrink-0 text-green-600" /> (11) 97969-9832</li>
                                <li className="flex items-center gap-3 text-slate-500 text-sm"><Mail className="w-4 h-4 flex-shrink-0" /> contato@jjamorimseguros.com.br</li>
                                <li className="flex items-start gap-3 text-slate-500 text-sm"><MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" /><span>R. Frei Gaspar, 941 - Sala 603<br/>São Bernardo do Campo - SP</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-slate-600 text-xs font-mono">© {new Date().getFullYear()} JJ & AMORIM. CNPJ: 21.364.352/0001-04</p>
                        <div className="flex items-center gap-2 text-slate-600 text-xs font-mono">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Site Seguro SSL
                        </div>
                    </div>
                </div>
            </footer>

            {/* WhatsApp float */}
            <a href="https://wa.me/5511979699832" target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-transform hover:scale-110" aria-label="WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>
            </a>
        </div>
    );
}
