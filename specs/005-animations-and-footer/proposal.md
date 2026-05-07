# Proposal: Scroll Animations & Footer Contrast

## 1. Contexto e Requisitos
O usuário solicitou duas melhorias principais para o refinamento visual do portal:
1. **Animação do Fundo do Simulador:** Ao invés da onda azul escura ser apenas um elemento estático, ela deve ter um comportamento interativo atrelado ao scroll. Ao rolar a página até a sessão, a onda deve dar um "zoom", perdendo a curvatura e preenchendo toda a tela de forma imersiva (efeito "Terra 3D"). Ao continuar descendo, a sessão deve se manter fixa/paralaxe, de modo que a próxima sessão "cubra" o simulador como uma cortina.
2. **Correção do Rodapé (Footer):** O container do rodapé está com o fundo `bg-primary` (azul escuro), mas os textos e links internos ainda usam classes legadas (`text-slate-500`, `text-slate-600`), tornando a leitura quase impossível.

## 2. O que será mantido e reaproveitado
- O design geral do Simulador (Card branco, controles) não será alterado, apenas o comportamento do seu background.
- A estrutura do Footer será mantida (grid de links, redes sociais, contatos), mas as classes de cor serão substituídas.

## 3. O que precisa ser modificado
- **`Simulator.tsx`:** 
  - Integrar o `framer-motion` (`useScroll`, `useTransform`).
  - Animar o elemento `<div className="bg-primary">` para alterar o seu `borderRadius`, `scale` e `y` conforme a página é rolada (`offset: ["start end", "end start"]`).
  - Adicionar um efeito `sticky` ou de paralaxe no container para dar o efeito "cortina" quando a próxima sessão (`LeadForm`) subir.
- **`Footer.tsx`:**
  - Substituir todos os `text-slate-400/500/600` por variações de `text-blue-100`, `text-white/70`, `text-blue-200/50`.
  - Melhorar o contraste dos ícones (`lucide-react`).

## 4. Critérios de Aceite
- O fundo do simulador deve reagir fluidamente ao scroll do usuário (zoom/curvatura).
- O efeito de transição para a próxima sessão deve parecer uma "cortina", sobrepondo o simulador suavemente.
- O rodapé deve estar 100% legível, com textos claros saltando sobre o fundo azul escuro.
