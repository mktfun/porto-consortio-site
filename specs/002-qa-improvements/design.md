# Design: QA, Header & Mobile Responsiveness Fixes

## Como a UI será dividida
- **Header (Navbar.tsx):**
  - Remoção de background translúcido. Adoção de `bg-slate-50` ou `bg-white` constante.
  - Links principais: "Consórcio de Imóveis", "Consórcio de Automóveis", "Outros Consórcios", "A Porto Vale".
  - Dropdowns: Utilizaremos a estrutura relativa do Tailwind (`group`, `absolute`, `invisible group-hover:visible`) para exibir um card branco arredondado (`rounded-2xl`, `shadow-lg`) contendo a lista de sub-produtos (Imóvel, Terreno, Construção, etc.) com seus respectivos ícones (da biblioteca `lucide-react`) dentro de "chips" de fundo azul claro.
- **Mobile Menu:**
  - Full-screen overlay limpo e com blur, utilizando o ícone Menu e X.
  - Sub-menus (dropdowns) viram accordions na versão mobile.
- **Responsividade Global:**
  - Ajustar as classes Tailwind em cada arquivo de componente (`Hero.tsx`, `Products.tsx`, `Simulator.tsx`, `Advantages.tsx`, `Footer.tsx`) para usar `flex-col lg:flex-row`, `grid-cols-1 lg:grid-cols-2`, `w-full`.

## Mapa de Dependências
- `Navbar.tsx` receberá estados complexos (se não for via hover puro) e ícones (`lucide-react`).
- Dependência de componentes visuais estritamente focados em mobile (`hidden md:flex`, `flex md:hidden`).
