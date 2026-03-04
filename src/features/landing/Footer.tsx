import React from "react";
import { Link } from "react-router-dom";
import jjamorimLogo from "@/assets/jjamorim-logo.png";

export function Footer() {
  return (
    <footer className="bg-background pt-24 pb-8 z-20 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="bg-card rounded-t-[4rem] px-8 py-16 md:px-16 border border-white/5 border-b-0 shadow-2xl flex flex-col md:flex-row justify-between gap-12">
          
          <div className="md:w-1/3">
            <img src={jjamorimLogo} alt="JJ & Amorim" className="h-10 w-auto object-contain brightness-0 invert mb-6" />
            <p className="text-slate-400 text-sm mb-8 leading-relaxed">
              Alta tecnologia na gestão de riscos logísticos. Protegemos quem move o país.
            </p>
            {/* System Operational Badge */}
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-slate-300">Sistema Operacional</span>
            </div>
          </div>

          <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-white font-bold mb-4 font-mono text-sm uppercase">Blindagens</h4>
              <ul className="space-y-3">
                <li><Link to="/seguros/rctr-c" className="text-slate-400 hover:text-white text-sm">RCTR-C</Link></li>
                <li><Link to="/seguros/rc-dc" className="text-slate-400 hover:text-white text-sm">RC-DC</Link></li>
                <li><Link to="/seguros/auto-frota" className="text-slate-400 hover:text-white text-sm">Auto Frota</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 font-mono text-sm uppercase">A Empresa</h4>
              <ul className="space-y-3">
                <li><Link to="/sobre" className="text-slate-400 hover:text-white text-sm">Sobre Nós</Link></li>
                <li><Link to="/termos" className="text-slate-400 hover:text-white text-sm">Metodologia</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 font-mono text-sm uppercase">Contato</h4>
              <ul className="space-y-3">
                <li className="text-slate-400 text-sm">11 97969-9832</li>
                <li className="text-slate-400 text-sm">contato@jjamorimseguros.com.br</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center flex flex-col items-center">
           <p className="text-slate-600 text-xs font-mono">
            © {new Date().getFullYear()} JJ & AMORIM. TODOS OS DIREITOS RESERVADOS.
           </p>
        </div>
      </div>
    </footer>
  );
}
