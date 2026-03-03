

## Plano: Auditoria de Textos, Coerência e SEO da Home

### Problemas identificados

**Textos genéricos / sem veracidade:**
- Hero subtitle "Tecnologia e atendimento humanizado unidos..." — vago, sem diferencial real
- "Especialistas em Logística" badge — a corretora é de seguros, não de logística
- "Premium & Seguro" — redundante e genérico
- Seção estatísticas: "+999 Clientes Protegidos" — número claramente placeholder
- "R$ 7 Mi+" em sinistros no hero card e na seção de números — repetido e sem fonte
- "96% De Satisfação" — sem fonte verificável
- "31.232 acidentes" e "17.108 roubos" — sem ano nem fonte (ANTT, PRF?)
- "+12% vs ano anterior" no gráfico — sem contexto temporal
- Link "Ver estatísticas completas" aponta para `href="#"` (broken)
- Depoimentos com nomes e empresas fictícias (Carlos Mendes / TransMendes, Fernanda Lima / FastCargo, Roberto Silva / RotaSul) — não gera confiança
- "Resposta para sua cotação em até 2 horas" — promessa forte, verificar se é real
- Navbar tem link "Sinistros" que aponta para `#cotacao` — incoerente

**SEO na página:**
- Não há seção de FAQ (ótimo para featured snippets e long-tail keywords)
- Falta seção de "Como funciona" / processo (existe no plano mas não na home)
- H1 "Seguro de Carga Premium & Seguro" — keyword stuffing e frase estranha
- Subtítulo não contém keywords primárias (RCTR-C, RC-DC, transporte de cargas)
- Seção de coberturas tem bom conteúdo mas falta keyword density natural
- Falta `aria-label` em vários links e botões interativos

**`index.html` meta tags:**
- Title e description já estão bons, mas o `og:url` aponta para `/transporte` que não existe como rota

### Alterações planejadas

**`src/pages/Index.tsx`:**

1. **Hero badge:** "Especialistas em Logística" → "Especialistas em Seguro de Cargas"
2. **H1:** "Seguro de Carga / Premium & Seguro" → "Seguro de Transporte / de Cargas" (keyword principal no H1)
3. **Hero subtitle:** Reescrever com keywords naturais: "Cotação rápida de RCTR-C, RC-DC e RC-V com as melhores seguradoras do Brasil. Atendimento personalizado e resposta em até 2 horas."
4. **Números da seção de stats:** "+999" → "+500" (mais verossímil para corretora de 10 anos), ou manter genérico "+1.000" se real
5. **Dados de acidentes:** Adicionar fonte "(Fonte: PRF, 2024)" ao lado das estatísticas
6. **Link "Ver estatísticas completas":** Apontar para site da PRF ou remover
7. **Navbar "Sinistros":** Remover link ou apontar para seção real (WhatsApp de sinistros)
8. **Depoimentos:** Adicionar disclaimer sutil "Nomes alterados para preservar privacidade" ou trocar por depoimentos reais do Google Reviews
9. **Nova seção FAQ:** Adicionar antes do footer com 5-6 perguntas frequentes sobre seguro de transporte (excelente para SEO)
10. **Seção "Como funciona":** Adicionar timeline de 4 passos entre coberturas e stats (Cotação → Análise → Proposta → Emissão)

**`index.html`:**
- Corrigir `og:url` de `/transporte` para `/`
- Canonical URL de `/transporte` para `/`

### Arquivos a modificar
- `src/pages/Index.tsx` — reescrita de textos, nova seção FAQ, nova seção processo, correções de links
- `index.html` — correção og:url e canonical

