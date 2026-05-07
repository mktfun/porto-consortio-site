# Proposal: Institutional Pages & Simulator Contrast Fix

## 1. Contexto e Requisitos
O usuário informou que o design original do Simulador com o fundo de onda azul escuro (`bg-primary`) era preferido em relação ao fundo claro. Porém, a cor dos títulos e subtítulos precisa ser corrigida para branco/azul claro (`text-white`, `text-blue-100`), garantindo contraste total. Adicionalmente, os textos de valores do slider (`R$ 100.000`) estão invisíveis no card cinza/branco e precisam ser escurecidos.

Além disso, há a necessidade de construir o restante do mapeamento de páginas do Header, englobando as categorias "Outros Consórcios" e "A Corretora".

## 2. O que será mantido e reaproveitado
- O componente base do `Simulator.tsx` será preservado, recebendo apenas os ajustes nas classes do Tailwind (retorno da onda azul `bg-primary`, conversão de `text-slate-900` para `text-white`, e ajuste dos min/max labels de `text-slate-400` para `text-slate-600`).
- A estrutura baseada em `Navbar` + `Hero` + `Conteúdo` + `LeadForm` + `Footer` que utilizamos nas páginas recém-criadas será replicada para garantir a padronização e escalabilidade do design.

## 3. O que precisa ser criado/modificado
- **Simulador:** 
  - Retornar o wrapper de fundo com a classe `rounded-t-[100%] scale-150 origin-bottom translate-y-[30%] bg-primary`.
  - Mudar o `<h2>` para `text-white` e `<p>` para `text-blue-100`.
  - Ajustar o contraste das labels dos sliders no card principal.
- **Novas Páginas de Produtos ("Outros Consórcios"):**
  - `src/pages/consorcio/Agro.tsx`
  - `src/pages/consorcio/Investimento.tsx`
  - `src/pages/consorcio/Empresarial.tsx`
  - *(Nota: `Solar` já existe e será mantida).*
- **Novas Páginas Institucionais ("A Corretora"):**
  - `src/pages/institucional/SobreNos.tsx`
  - `src/pages/institucional/Cultura.tsx`
  - `src/pages/institucional/Clientes.tsx`
  - `src/pages/institucional/TrabalheConosco.tsx`
  - `src/pages/institucional/Contato.tsx`
  - `src/pages/institucional/Artigos.tsx`
- **Roteamento:** 
  - Registrar essas rotas no `<App />` e mapear os dropdowns no `<Navbar />`.

## 4. Critérios de Aceite
1. O fundo do simulador volta a ser o clássico `bg-primary` da Porto, com letras 100% legíveis (brancas).
2. O card esquerdo do simulador tem contraste suficiente para que o cliente enxergue os limites (100.000 e 1.000.000).
3. Todas as opções de menu (Outros Consórcios e Corretora) levam a páginas válidas do sistema, com design aderente ao padrão da plataforma.
