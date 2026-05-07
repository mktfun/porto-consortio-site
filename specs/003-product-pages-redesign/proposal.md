# Proposal: 003-product-pages-redesign

## 1. Requisitos e User Stories
- **O Problema:** O usuário reportou que a seção do Simulador "não está legal" (cores de fundo e texto inadequadas) e solicitou um redesenho. Além disso, os links do header para os produtos (Imóveis, Automóveis, etc.) não levam a páginas reais. A logo e o favicon não estão carregando. O texto do menu "A Porto Vale" precisa ser alterado para "A Corretora".
- **O Objetivo:**
  1. Redesenhar o componente `Simulator.tsx` para ter uma estética superior, com melhor contraste de fontes e fundo.
  2. Criar 4 páginas internas dedicadas para cada modalidade de consórcio (Imóveis, Automóveis, Veículos Pesados, Energia Solar), cada uma com uma imagem de fundo ("hero") esteticamente agradável e conteúdo customizado baseado na JJ & Amorim Seguros.
  3. Atualizar o roteamento no `App.tsx` para conectar os links do header a essas novas páginas.
  4. Ajustar textos do Header ("A Porto Vale" -> "A Corretora") e corrigir os apontamentos da logo/favicon.

## 2. O que JÁ EXISTE e será REUTILIZADO
- **Rotas:** O `App.tsx` já utiliza `react-router-dom`, tornando a criação de novas páginas simples.
- **Componentes:** O `Hero.tsx` e `Navbar.tsx` podem ser reutilizados ou usados como base para o topo das páginas internas. O `LeadForm.tsx` e `Footer.tsx` serão aproveitados no final de cada página de produto.
- **Simulador:** O componente `Simulator.tsx` e suas lógicas matemáticas já funcionam bem; apenas o encapsulamento visual (divs, cores e tipografia) será alterado.

## 3. O que precisa ser CRIADO
- `src/pages/consorcio/Imoveis.tsx`
- `src/pages/consorcio/Automoveis.tsx`
- `src/pages/consorcio/Pesados.tsx`
- `src/pages/consorcio/Solar.tsx`
- Imagens de placeholder bonitas ou integração com Unsplash para os headers dessas páginas.

## 4. Critérios de Aceite
- O Simulador deve ter um visual completamente renovado (novos fundos, cores modernas).
- Os links no menu dropdown do Header devem direcionar para as novas páginas.
- As novas páginas devem abrir corretamente, ter um Hero bonito, listar vantagens daquele produto específico e ter o formulário de captação de leads.
- Header deve exibir "A Corretora" no lugar de "A Porto Vale".
