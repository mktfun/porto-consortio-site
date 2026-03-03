# Tasks LP Transporte V3 (Premium Dual-Theme)

## 0. Assets Iniciais
- [ ] Usuário deve fornecer e posicionar na pasta `/public/assets/` as seguintes imagens:
  - `logo-jj-branca.png` / `logo-jj-cor.png` (Logo Oficial)
  - `insurer-1.png`, `insurer-2.png`, etc. (Logos das Seguradoras para o Trust Bar)
  - Placheholders ou imagens de alta resolução relacionadas a transporte de cargas para os mockups (ex: `truck-bg.jpg` ou `container.jpg`).

## 1. Fundação e CSS v3
- [ ] Atualizar o arquivo `index.css` de acordo com os Design Tokens do `design.md` V3.
  - Implementar paleta Base Dark (`#09090b`) e Surface Light (`#f8fafc`).
  - Atualizar tipografia para as H1 massivos (`tracking-tighter`, double-tone).
  - Adicionar utilitários de animação (fade-up stagger, pulse rings, radial glow hover).
  - Componentes de layout para Mockup Tech (ex: `.mac-window-frame`).

## 2. Reconstrução do Hero (Dark Mode)
- [ ] Converter Background para `bg-zinc-950` com spots azuis dispersos (`bg-opacity-20 blur-3xl`).
- [ ] Atualizar o H1 com fonte gigante "A espinha dorsal da sua" em branco e "operação" text-muted.
- [ ] Substituir o "Form" atual no topo por uma simulação de UI (um Glass Card mostrando um CTA animado "Gerando Cotação...").
- [ ] Mover o form real para a CTA Area inferior ou torná-lo em Modal (Trigger).

## 3. Trust Bar (Light Mode Alternation)
- [ ] Seção branca abrupta (quebra dramática do escuro anterior).
- [ ] Scroll contínuo utilizando as IMAGENS / LOGOS fornecidas no passo 0 em tons de cinza (`grayscale hover:grayscale-0`).

## 4. Features & Soluções (Estilo Plataforma SaaS)
- [ ] Bloco de Por Que Contratar e Diferenciais reimaginados como cards com mockups.
- [ ] Exemplo: Card 1 (Dark) - Título em dupla tonalidade. Ícone envolvido em glass squircle.
- [ ] Exemplo: Card 2 (Light) - "Latência Zero" style mas convertido para "Cobertura RC-V" com SVG background dot grid.

## 5. Mobile Polish e Interações Oculares
- [ ] O mobile do GestorPulse usa paddings amplos, textos curtos em H2. Refazer o layout de blocos tech em colunas únicas e padding-x grandes (`px-6`).
- [ ] Certificar que a quebra de linha de títulos longos não polua (ex: `<br class="hidden md:block"/>`).

## 6. Footer Massivo Premium
- [ ] Redesenhar footer em Zinc-950.
- [ ] Logo grandona da JJ & Amorim translúcida no fundo.
- [ ] Links minimalistas alinhados.
