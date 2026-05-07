import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Home, Map, Hammer, Car, Truck, Sprout, TrendingUp, Sun, Briefcase, Info, Heart, Users, Phone, BookOpen, ChevronDown } from "lucide-react";

// Menu Data Structure based on the provided images
const menuData = [
  {
    title: "Consórcio de Imóveis",
    items: [
      { icon: <Home className="w-5 h-5 text-secondary" />, title: "Imóvel", href: "/consorcio/imoveis" },
      { icon: <Map className="w-5 h-5 text-secondary" />, title: "Terreno", href: "/consorcio/imoveis" },
      { icon: <Hammer className="w-5 h-5 text-secondary" />, title: "Construção e Reforma", href: "/consorcio/imoveis" },
    ]
  },
  {
    title: "Consórcio de Automóveis",
    items: [
      { icon: <Car className="w-5 h-5 text-secondary" />, title: "Automóvel", href: "/consorcio/automoveis" },
      { icon: <Truck className="w-5 h-5 text-secondary" />, title: "Pesados", href: "/consorcio/pesados" },
    ]
  },
  {
    title: "Outros Consórcios",
    items: [
      { icon: <Sprout className="w-5 h-5 text-secondary" />, title: "Agro", href: "/consorcio/agro" },
      { icon: <TrendingUp className="w-5 h-5 text-secondary" />, title: "Investimento", href: "/consorcio/investimento" },
      { icon: <Sun className="w-5 h-5 text-secondary" />, title: "Placa Solar", href: "/consorcio/solar" },
      { icon: <Briefcase className="w-5 h-5 text-secondary" />, title: "Empresarial", href: "/consorcio/empresarial" },
    ]
  },
  {
    title: "A Corretora",
    items: [
      { icon: <Info className="w-5 h-5 text-secondary" />, title: "Sobre Nós", href: "/institucional/sobre-nos" },
      { icon: <Heart className="w-5 h-5 text-secondary" />, title: "Nossa Cultura", href: "/institucional/cultura" },
      { icon: <Users className="w-5 h-5 text-secondary" />, title: "Nossos Clientes", href: "/institucional/clientes" },
      { icon: <Briefcase className="w-5 h-5 text-secondary" />, title: "Trabalhe Conosco", href: "/institucional/trabalhe-conosco" },
      { icon: <Phone className="w-5 h-5 text-secondary" />, title: "Contato", href: "/institucional/contato" },
      { icon: <BookOpen className="w-5 h-5 text-secondary" />, title: "Artigos sobre Consórcio", href: "/institucional/artigos" },
    ]
  }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 z-50">
          <img src="/logo.png" alt="Portal Porto Consórcio" className="h-10 md:h-12 object-contain" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {menuData.map((menu, idx) => (
            <div key={idx} className="group relative">
              <button className="flex items-center gap-1 text-slate-600 font-semibold hover:text-secondary transition-colors text-sm xl:text-base py-2">
                {menu.title}
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              {/* Dropdown Card */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 p-3">
                {/* Arrow pointer */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-t border-l border-slate-100"></div>
                
                <div className="relative z-10 flex flex-col gap-1">
                  {menu.items.map((item, itemIdx) => (
                    <a key={itemIdx} href={item.href || "#"} className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group/item">
                      <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center group-hover/item:bg-secondary/20 transition-colors">
                        {item.icon}
                      </div>
                      <span className="text-slate-700 font-medium text-sm group-hover/item:text-slate-900">{item.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4 z-50">
          <a href="#simulador" className="hidden lg:inline-flex items-center justify-center bg-secondary hover:bg-secondary/90 text-white font-bold rounded-full px-6 py-3 transition-colors shadow-md hover:shadow-lg">
            Faça sua simulação <ArrowRight className="w-4 h-4 ml-2" />
          </a>
          
          <button 
            className="lg:hidden p-2 text-slate-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 lg:hidden overflow-y-auto ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="pt-24 px-6 pb-12 flex flex-col gap-4">
          
          {menuData.map((menu, idx) => (
            <div key={idx} className="border-b border-slate-100 pb-2">
              <button 
                className="flex items-center justify-between w-full py-4 text-left font-bold text-slate-800 text-lg"
                onClick={() => setActiveAccordion(activeAccordion === menu.title ? null : menu.title)}
              >
                {menu.title}
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeAccordion === menu.title ? 'rotate-180 text-secondary' : 'text-slate-400'}`} />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${activeAccordion === menu.title ? 'max-h-[500px] mb-4' : 'max-h-0'}`}>
                <div className="flex flex-col gap-2 pl-4 border-l-2 border-secondary/20 ml-2 mt-2">
                  {menu.items.map((item, itemIdx) => (
                    <a key={itemIdx} href={item.href || "#"} className="flex items-center gap-3 py-3 text-slate-600" onClick={() => setIsMobileMenuOpen(false)}>
                      <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                        {React.cloneElement(item.icon as React.ReactElement, { className: "w-4 h-4 text-secondary" })}
                      </div>
                      <span className="font-medium text-sm">{item.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <a 
            href="#simulador" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-8 flex items-center justify-center w-full bg-secondary text-white font-bold rounded-full px-6 py-4 shadow-lg"
          >
            Faça sua simulação <ArrowRight className="w-5 h-5 ml-2" />
          </a>

        </div>
      </div>
    </header>
  );
}
