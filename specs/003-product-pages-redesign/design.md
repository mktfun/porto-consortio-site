# Design: 003-product-pages-redesign

## 1. UI / Estética (Frontend)
### Simulador
- **Estilo Anterior:** Fundo azul primário (`bg-primary`) com card interno de vidro (`glass`) e painel escuro no lado direito.
- **Novo Estilo:** Fundo claro com gradiente sutil ou onda invertida. Card principal minimalista, branco puro com sombras difusas (`shadow-2xl`). O painel de resultado deve usar um azul elétrico (`#00A1DE` da Porto) em vez do azul escuro, e o texto "Parcelas a partir de" terá tipografia mais leve e sofisticada.
- **Stitch MCP:** Não será necessário o Stitch, as mudanças no `Simulator.tsx` envolvem ajustar utilitários do Tailwind (ex: `bg-slate-50`, `text-slate-800`, trocar cores de textos e borders).

### Páginas Internas de Produtos
- Cada página será um componente em `src/pages/consorcio/`.
- Estrutura de cada página:
  1. `<Navbar />`
  2. Um **Hero Interno**: Altura `min-h-[50vh]`, imagem de fundo com overlay escuro (`bg-black/60`), título centralizado ("Consórcio de Imóveis", etc.). Imagens extraídas via Unsplash.
  3. Uma seção de "Por que fazer com a JJ & Amorim" focada em 10 anos de mercado.
  4. `<Simulator />` (reaproveitado para a pessoa já simular na página).
  5. `<LeadForm />` e `<Footer />`.

## 2. Banco de Dados / Backend
- **Supabase:** Nenhuma alteração necessária. Continuamos capturando via n8n webhook.

## 3. Mapa de Dependências
- `App.tsx` precisa de 4 novas rotas (`/consorcio/imoveis`, `/consorcio/automoveis`, etc).
- `Navbar.tsx` precisa que os `href` dos dropdowns apontem para essas rotas em vez de `#`.
