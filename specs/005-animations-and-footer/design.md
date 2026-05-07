# Design Specs: 005-animations-and-footer

## 1. UI Architecture (Framer Motion & Tailwind)

### Efeito Cortina e Zoom no Simulador
A arquitetura da sessão será alterada para um layout com `sticky` + `framer-motion`:
```tsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Simulator() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // A animação começa com curvatura alta (onda) e escala 1.5,
  // E termina sem curvatura (retângulo) e escala normal, cobrindo o fundo.
  const borderRadius = useTransform(scrollYProgress, [0, 0.4], ["100%", "0%"]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [1.5, 1]);
  const y = useTransform(scrollYProgress, [0, 0.4], ["30%", "0%"]);

  return (
    // Container mais alto que 100vh para permitir a rolagem sobre o sticky
    <section ref={containerRef} id="simulador" className="relative h-[150vh] bg-slate-50">
      
      {/* O conteúdo fica grudado (sticky) na tela enquanto scrollamos pelo container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
        
        {/* Fundo animado */}
        <motion.div 
          style={{ borderRadius, scale, y }}
          className="absolute bottom-0 left-0 right-0 h-full bg-primary origin-bottom z-0" 
        />
        
        {/* Conteúdo do Simulador (z-10) */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
           ...
        </div>
      </div>
    </section>
  );
}
```
*A próxima sessão (`LeadForm`) vai ter `relative z-20 bg-white`, o que naturalmente fará o "efeito cortina", deslizando sobre o simulador (que ficará preso no `sticky top-0`).*

### Correções de Cor no Footer
Arquivos afetados: `src/features/landing/Footer.tsx`.
- `text-slate-500` -> `text-blue-100/70`
- `text-slate-600` -> `text-blue-200/50`
- `text-slate-400` -> `text-blue-100/80`
- Icon colors update: `text-slate-600` -> `text-blue-200/60`

## 2. Dependências
- `framer-motion` (já instalado na versão `^12.34.5`).
- Nenhuma dependência extra ou alteração no backend é necessária.
