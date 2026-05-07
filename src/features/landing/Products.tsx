import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Home, Car, Truck, Sun } from "lucide-react";

const categories = [
  {
    id: "imovel",
    title: "Consórcio de Imóvel",
    desc: "A casa própria, terreno ou construção com parcelas acessíveis.",
    icon: <Home className="w-8 h-8 text-primary" />,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "automovel",
    title: "Consórcio de Automóvel",
    desc: "O carro 0km ou seminovo que você sempre quis.",
    icon: <Car className="w-8 h-8 text-primary" />,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "pesados",
    title: "Veículos Pesados",
    desc: "Caminhões e máquinas agrícolas para expandir seu negócio.",
    icon: <Truck className="w-8 h-8 text-primary" />,
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "placas",
    title: "Placas Solares",
    desc: "Economia de energia sustentável e inteligente para seu bolso.",
    icon: <Sun className="w-8 h-8 text-primary" />,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800",
  }
];

export function Products() {
  const container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".product-card",
        { y: 40, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.15, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 75%",
          }
        }
      );
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section id="produtos" ref={container} className="py-20 lg:py-32 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Escolha a sua conquista</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">Temos a modalidade perfeita para o tamanho do seu sonho, com as melhores taxas de administração do mercado.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="product-card group relative bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 relative">
                <div className="absolute -top-12 right-6 w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center z-20 group-hover:-translate-y-2 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2 mt-2">{category.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{category.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
