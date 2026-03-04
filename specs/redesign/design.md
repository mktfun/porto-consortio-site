# 🪐 Design System & Component Architecture: A.M & Amorim

De acordo com as diretrizes do `ANTIGRAVITY-Landing-Page-Builder.md`, aqui está a arquitetura estrutural da nova _Index.tsx_.

## A. OVERLAY GLOBAL

- `<div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay" style={{backgroundImage: 'url(/noise.svg)'}}></div>`
- Todas as bordas usarão `rounded-[2rem]` para contêineres maciços.

## B. NAVBAR (A Ilha Flutuante)

- `fixed top-6 left-1/2 -translate-x-1/2`
- Shape de pílula. Inicia translúcida. Ao dar scroll > 100px, transiciona para `bg-[#0A1128]/80 backdrop-blur-md border border-white/10`.
- Logo à esquerda, navegação magnética ao centro, CTA "Cotar Agora" (Azul vibrante com span deslizante animado no hover) à direita.

## C. HERO (Cena de Abertura)

- `min-h-screen relative flex items-end pb-24`.
- **Fundo:** Vídeo sutil ou imagem de alta qualidade de um navio/porto à noite/crepúsculo (Unsplash). Gradient Overlay espesso (Primary Dark no rodapé subindo até 0% no topo).
- **Copy Estilo:**
  - Pequeno / Bold (Inter): "A SEGURANÇA LOGÍSTICA ENCONTRA A"
  - Massivo / Itálico (Playfair): "Precisão Absoluta."
- **GSAP:** `.fromTop` stagger revelando o texto e os botões de CTA.

## D. TELEMETRY (Números da Empresa)

- Faixa horizontal contendo o ticker: "+10 Anos | +500 Clientes | 8+ Seguradoras".
- Animação de contagem gradual no scroll.

## E. FEATURES (Artefatos Funcionais)

- Layout em tríptico (3 colunas CSS grid) `gap-8`.
- Fundo dos cards: `bg-slate-900 border border-slate-800`.
- **Card 1 (Shuffler):** Modalidades. Exibirá nomes de apólices rodando (RCTR-C, RCF-DC, Ambiental).
- **Card 2 (Typewriter):** Riscos reais sendo teclados em fonte Monospace como um alerta geofencing.
- **Card 3 (Cursor):** 4 passos em um grid iluminado sob hover simulado.

## F. TESTIMONIALS & TRUST (Filosofia)

- "A maioria do mercado foca em vender papel." (Transparente, menor).
- "Nós focamos em transferir de fato o seu risco operacional." (Massivo, Playfair, destaque âmbar na palavra "risco operacional").
- Grade flex de clientes (Carrossel ou Grid).

## G. CTA FINAL / FORMULÁRIO MAGNETIZADO

- Bloco incrustado (Inset Container) com fundo contrastante (Azul Royal escuro).
- Minimal form fields flutuantes ou botão gigantesco para abrir Modal de conversão.

## Fluxo de Animações (GSAP)

1. `useEffect` mestre no layout principal.
2. `ScrollTrigger.batch` nas seções de features para fazê-las flutuar suavemente (+/y: 50).
3. Easing padronizado: `power3.out`.
