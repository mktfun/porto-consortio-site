import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Phone, ArrowRight, Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change / scroll
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
    <>
      <nav
        className={`fixed z-40 transition-all duration-500 ease-in-out left-1/2 -translate-x-1/2 ${
          scrolled
            ? "top-4 w-[95%] md:w-[80%] rounded-[2rem] bg-background/80 backdrop-blur-xl border border-white/10 shadow-2xl py-3 px-6"
            : "top-0 md:top-8 w-full px-6 md:px-16 py-4 bg-transparent border-transparent"
        }`}
      >
        <div className="flex items-center justify-between w-full">
          {/* Logo — using text fallback for reliability */}
          <Link to="/" className="flex items-center space-x-3 flex-shrink-0">
            <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-base shadow-lg shadow-primary/30">
              JJ
            </div>
            <span className="font-bold text-white text-lg tracking-tight">
              JJ <span className="text-primary">& </span>Amorim
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.href.startsWith("/") && !link.href.startsWith("/#") ? (
                <Link key={link.label} to={link.href} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                  {link.label}
                </Link>
              ) : (
                <a key={link.label} href={link.href} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                  {link.label}
                </a>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+5511979699832" className="hidden lg:flex items-center text-sm font-bold text-slate-300 hover:text-accent transition-colors">
              <Phone className="w-4 h-4 mr-2" /> (11) 97969-9832
            </a>
            <a
              href="/#cotacao"
              className="magnetic-btn bg-primary text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-[0_0_20px_-5px_theme(colors.primary.DEFAULT)] inline-flex items-center"
            >
              <span className="relative z-10 flex items-center">
                Cotar Agora <ArrowRight className="w-4 h-4 ml-2" />
              </span>
            </a>
          </div>

          {/* Mobile: CTA + Hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <a href="/#cotacao" className="magnetic-btn bg-primary text-white px-4 py-2 rounded-full text-xs font-bold">
              Cotar
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-30 md:hidden transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" onClick={() => setMenuOpen(false)} />

        {/* Menu panel */}
        <div
          className={`absolute top-0 left-0 right-0 pt-24 px-6 pb-10 flex flex-col gap-6 transition-transform duration-300 ${
            menuOpen ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          {navLinks.map((link) =>
            link.href.startsWith("/") && !link.href.startsWith("/#") ? (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-bold text-white border-b border-white/10 pb-6"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-bold text-white border-b border-white/10 pb-6"
              >
                {link.label}
              </a>
            )
          )}

          <a href="tel:+5511979699832" className="flex items-center gap-3 text-lg text-slate-400 mt-4">
            <Phone className="w-5 h-5 text-accent" /> (11) 97969-9832
          </a>

          <a
            href="/#cotacao"
            onClick={() => setMenuOpen(false)}
            className="mt-2 w-full flex items-center justify-center px-6 py-4 bg-primary text-white font-bold rounded-2xl text-lg"
          >
            Solicitar Cotação Gratuita <ArrowRight className="w-5 h-5 ml-3" />
          </a>
        </div>
      </div>
    </>
  );
}
