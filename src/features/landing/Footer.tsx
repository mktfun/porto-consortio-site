import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background pt-16 pb-8 z-20 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="bg-card rounded-t-[3rem] px-8 py-16 md:px-16 border border-white/5 border-b-0 shadow-2xl">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <a href="/" className="flex items-center space-x-3 mb-6">
                <span className="font-bold text-white text-lg tracking-tight">
                  JJ <span className="text-primary">&</span> Amorim
                </span>
              </a>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Corretora especialista Porto Seguro. Ajudando brasileiros a conquistarem seus sonhos sem pagar juros há mais de 10 anos.
              </p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/jjamorimseguros" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/corretorajjamorim/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
              {/* System badge */}
              <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full mt-6">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="font-mono text-xs uppercase tracking-widest text-slate-400">Atendimento Digital</span>
              </div>
            </div>

            {/* Seguros */}
            <div>
              <h4 className="text-white font-bold mb-5 font-mono text-xs uppercase tracking-widest">Consórcios</h4>
              <ul className="space-y-3">
                <li><a href="#solucoes" className="text-slate-500 hover:text-white text-sm transition-colors">Consórcio de Imóveis</a></li>
                <li><a href="#solucoes" className="text-slate-500 hover:text-white text-sm transition-colors">Consórcio de Automóveis</a></li>
                <li><a href="#solucoes" className="text-slate-500 hover:text-white text-sm transition-colors">Veículos Pesados</a></li>
              </ul>
            </div>

            {/* Institucional */}
            <div>
              <h4 className="text-white font-bold mb-5 font-mono text-xs uppercase tracking-widest">Empresa</h4>
              <ul className="space-y-3">
                <li><Link to="/sobre" className="text-slate-500 hover:text-white text-sm transition-colors">Sobre Nós</Link></li>
                <li><Link to="/privacidade" className="text-slate-500 hover:text-white text-sm transition-colors">Política de Privacidade</Link></li>
                <li><Link to="/termos" className="text-slate-500 hover:text-white text-sm transition-colors">Termos de Uso</Link></li>
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h4 className="text-white font-bold mb-5 font-mono text-xs uppercase tracking-widest">Contato</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-500 text-sm">
                  <Phone className="w-4 h-4 flex-shrink-0 text-slate-600" /> (11) 3493-3605
                </li>
                <li className="flex items-center gap-3 text-slate-500 text-sm">
                  <MessageCircle className="w-4 h-4 flex-shrink-0 text-green-600" /> (11) 97969-9832
                </li>
                <li className="flex items-center gap-3 text-slate-500 text-sm">
                  <Mail className="w-4 h-4 flex-shrink-0 text-slate-600" /> contato@jjamorimseguros.com.br
                </li>
                <li className="flex items-start gap-3 text-slate-500 text-sm">
                  <MapPin className="w-4 h-4 flex-shrink-0 text-slate-600 mt-0.5" />
                  <span>R. Frei Gaspar, 941 - Sala 603<br/>São Bernardo do Campo - SP</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 text-xs font-mono">
              © {new Date().getFullYear()} JJ & AMORIM CORRETORA DE SEGUROS. CNPJ: 21.364.352/0001-04
            </p>
            <div className="flex items-center gap-2 text-slate-600 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              SITE SEGURO SSL
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
