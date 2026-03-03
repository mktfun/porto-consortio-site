# Design System V3 (GestorPulse/Stripe Concept)

## 1. Cores e Fundo (Thematic Alternation)
Diferente da versão 2 (que era 100% branca), usaremos um esquema alternativo.

**Dark Theme (Base para Hero e CTA):**
- Background: `#09090b` (Zinc-950 puro) ou `#070b14` para alinhar com azul da JJ.
- Titulos: `#ffffff`
- Subtítulos (Dupla Tonalidade): `#71717a` (Zinc-500)
- Glow/Accent: `#3E4095` a `#7C3AED` super desfocado (`blur-3xl`, opacity 20%).

**Light Theme (Base para Conteúdo e Trust Bar):**
- Background: `#ffffff`
- Superfícies (Cards): `#f4f4f5` (Zinc-100) e `#fafafa`
- Títulos: `#09090b`
- Bordas: `#e4e4e7` (Zinc-200) ou `white/10` no dark.

## 2. Tipografia
Fonte: `Inter`
- **Headings (H1/H2):** Pesos extremamente grossos (`font-black` ou `font-extrabold`), com letter-spacing negativo pesado (`tracking-tighter`). Ex: `text-[clamp(2.5rem,6vw,5rem)]`.
- **Textos Regulares:** Claros e espaçados.

## 3. Inventário de Assets Necessário
> **[!] AÇÃO DO USUÁRIO REQUERIDA:**
> Para atingir o nível de fidelidade pretendido da referência (não genérico), precisamos das **imagens reais e das logos**.
> 
> Por favor, faça o upload/adicione os seguintes arquivos na pasta de projeto:
> 1. `Logo JJ&Amorim`: `/public/assets/logo-jj-branca.png` e `/public/assets/logo-jj-cor.png`
> 2. `Fotos de Caminhões ou Logística`: De preferência imagens reais ou renderizações 3D de alta qualidade de caminhões em movimento (para os mockups tech).
> 3. `Logos de Seguradoras (Para Trust Bar)`: (Ex: Allianz, Porto, Mapfre, Sompo) em formato PNG recortado e transparente na pasta `/public/assets/insurers/`.

## 4. Elementos Visuais Especiais
- **Tech Cards Mockups:** Criaremos contêineres que imitam a borda de uma tela de computador ou celular, com uma statusBar no topo (`...` três pontinhos do MacOS).
- **Dot Pattern Backgrounds:** Malhas de pontos SVG fracas atrás de seções chaves para passar rigor técnico.
- **Glowing Borders:** Utilizando radial-gradients para a borda ao passar o mouse.
