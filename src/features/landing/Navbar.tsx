import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import jjamorimLogo from "@/assets/jjamorim-logo.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed z-40 transition-all duration-500 ease-in-out left-1/2 -translate-x-1/2 ${
        scrolled
          ? "top-4 w-[95%] md:w-[80%] rounded-[2rem] bg-background/80 backdrop-blur-xl border border-white/10 shadow-2xl py-3 px-6"
          : "top-8 w-full px-8 md:px-16 py-4 bg-transparent border-transparent"
      }`}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center space-x-3">
            <img src={jjamorimLogo} alt="JJ & Amorim" className="h-10 w-auto object-contain brightness-0 invert" />
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#coberturas" className="text-sm font-medium text-slate-300 hover:text-white transition-colors hover:-translate-y-0.5 transform">Especialidades</a>
          <a href="#diferencial" className="text-sm font-medium text-slate-300 hover:text-white transition-colors hover:-translate-y-0.5 transform">O Manifesto</a>
          <Link to="/sobre" className="text-sm font-medium text-slate-300 hover:text-white transition-colors hover:-translate-y-0.5 transform">A Corretora</Link>
        </div>

        <div className="flex items-center gap-4">
          <a href="#cotacao" className="hidden lg:flex items-center text-sm font-bold text-slate-300 hover:text-accent transition-colors">
            <Phone className="w-4 h-4 mr-2" /> (11) 97969-9832
          </a>
          <a
            href="#cotacao"
            className="magnetic-btn bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-bold shadow-[0_0_20px_-5px_theme(colors.primary.DEFAULT)] inline-flex items-center"
          >
            <span className="relative z-10 flex items-center">
              Cotar Agora <ArrowRight className="w-4 h-4 ml-2" />
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}
