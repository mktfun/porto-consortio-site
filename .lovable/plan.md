

## Analise da Landing Page Amana (Referencia)

### Pontos Fortes
- Hero com formulario integrado (captura imediata)
- Graficos animados com dados reais de acidentes/roubos (urgencia + credibilidade)
- Secao de tipos de carga com imagens reais
- Detalhamento das 3 coberturas (RCTR-C, RC-DC, RC-V) com consequencias legais
- Processo "Como funciona" em 4 etapas numeradas
- Secao "Quem atendemos" com publico-alvo claro
- Secao "Evite" com dores do cliente
- WhatsApp float + CTA modal
- Secao "Conheça a empresa" com credibilidade

### Pontos Fracos
- Design pesado e datado (nao e premium)
- Hero com imagem generica de background, pouco contraste
- Tipografia inconsistente e pouco hierarquica
- Falta de social proof (depoimentos, numeros de clientes)
- Formulario no hero so aparece no desktop, mobile fica escondido
- Secao de cargas com imagens pesadas e layout nao responsivo
- Sem animacoes de scroll sofisticadas
- Footer fraco, sem informacoes de contato completas
- Nao e mobile first

## Plano de Implementacao

O Index.tsx atual ja tem uma base Stripe/Apple boa. Vou reconstruir completamente mantendo os componentes utilitarios (useReveal, Counter) e adicionando as secoes que faltam da Amana, tudo com branding JJ&Amorim.

### Branding JJ&Amorim (extraido)
- Primario: `#3E4095` (azul-indigo) — ja configurado
- Accent: `#2EC4B6` (teal do site principal)
- Textos: Inter, tons de slate
- Telefone: (11) 97969-9832
- Endereco: R. Frei Gaspar, 941 - Sala 603, SBC-SP
- CNPJ: 21.364.352/0001-04

### Estrutura Final da Landing Page (ordem das secoes)

1. **Header** — manter, adicionar link "Como funciona"
2. **Hero** — manter estilo atual (Stripe-clean), adicionar badge "+10 anos" e checklist inline (como no GestorPulse)
3. **Trust Bar** — trocar texto por logos reais das seguradoras (marquee animado)
4. **Secao de Dados/Urgencia (NOVA)** — inspirada na Amana: graficos animados com recharts (acidentes, roubos, feridos) + contadores. Layout: grafico a esquerda, textos a direita. Mobile: stack vertical
5. **Por que contratar** — manter, melhorar copy
6. **Coberturas (RCTR-C, RC-DC, RC-V)** — manter cards, adicionar mais detalhes como consequencias legais da Amana
7. **Tipos de Carga** — manter grid de icones
8. **Como Funciona (NOVO)** — timeline 4 etapas (Cotacao → Proposta → Analise → Emissao) estilo Apple
9. **Quem Atendemos (NOVO)** — lista de publicos-alvo com icones
10. **Diferenciais/Numeros** — manter com counters animados
11. **Evite (NOVO)** — grid de dores do cliente (perdas, rompimento de contratos, etc)
12. **Formulario** — expandir com campos: nome, telefone, email, tipo de carga, origem/destino, valor da carga. Estilo clean
13. **CTA Final** — manter dark section
14. **Footer** — expandir com endereco completo, CNPJ, links
15. **Sticky CTA mobile + WhatsApp float** — manter

### Detalhes Tecnicos

- **Recharts** para graficos animados na secao de dados (bar chart com acidentes por ano)
- **Intersection Observer** ja existente para reveal animations
- **Counter** ja existente para numeros animados
- **Mobile first**: todas as secoes com layout mobile-first, grid responsivo
- Manter CSS existente (marquee, btn-primary, reveal, gradient-text, whatsapp-float)
- Tudo em um unico arquivo `Index.tsx` (padrao atual do projeto)
- Formulario com campos adicionais (email, origem/destino, valor) similar ao da Amana
- Logos das seguradoras como texto estilizado no marquee (sem imagens externas)

### Arquivos a Modificar
- `src/pages/Index.tsx` — reescrever com todas as novas secoes

