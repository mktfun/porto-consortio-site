# Proposal: QA, Header Redesign & Mobile Responsiveness Fixes (002-qa-improvements)

## Requisitos e User Stories
- Como usuário, quero um cabeçalho (Navbar) com fundo sólido claro, texto escuro legível e um botão azul de simulação bem visível, idêntico à referência da Porto Vale.
- Como usuário, quero poder passar o mouse nos itens do menu ("Consórcio de Imóveis", "Consórcio de Automóveis", "Outros Consórcios", "A Porto Vale") e ver um dropdown (menu suspenso) detalhado com ícones para cada segmento, assim como no original.
- Como usuário mobile, quero poder acessar o site sem que os elementos quebrem ou fiquem com barra de rolagem horizontal.
- O menu no mobile precisa ser um hambúrguer que abre e fecha adequadamente com todos esses submenus acessíveis.
- As seções Hero, Products, Simulator, Advantages e Footer precisam empilhar seus elementos verticalmente em telas menores.

## O que já existe e será reutilizado
- Serão reaproveitados os componentes recém-criados, mas o `Navbar.tsx` sofrerá um grande redesign.

## O que precisa ser CRIADO / ALTERADO
- **Navbar.tsx**: Mudar fundo para sólido (branco/creme), criar a estrutura de Dropdown Menus (usando Radix UI, Tailwind Group-hover, ou estado local) para os 4 itens principais.
- **Navbar.tsx**: Botão principal "Faça sua simulação" atualizado.
- Um estado de Mobile Menu dentro do `Navbar.tsx`.
- Ajustes finos de classes Tailwind nos componentes existentes para mobile.

## Critérios de Aceite
- O site não deve possuir barra de rolagem horizontal em viewports menores que 768px.
- O Header deve ficar idêntico aos prints fornecidos (fundo claro, texto escuro, dropdowns detalhados com ícones).
- O Simulador deve ser totalmente utilizável em uma tela de 375px.
