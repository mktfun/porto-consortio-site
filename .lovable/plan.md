

## Plano: Melhorias gerais na Landing Page

### 1. Logos das seguradoras no Hero
Substituir os textos placeholder "HDI", "TOKIO", "ALLIANZ", "PORTO" (linhas 121-126 do Index.tsx) por `<img>` tags usando os assets já existentes em `src/assets/`. Usar HDI, Tokio Marine, Allianz e Bradesco (Porto não existe nos assets — substituir por Bradesco ou Sompo).

### 2. Logo da JJ&Amorim no Header e Footer
Substituir o placeholder "JJ" (div azul) no navbar (linha 58-60) e footer (linha 512-514) pelo `<img>` importado de `src/assets/jjamorim-logo.png`.

### 3. Formulário integrado com Supabase
Alterar `handleSubmit` (linhas 26-48) para inserir o lead na tabela `leads` do Supabase usando o client já configurado. Campos mapeados: `name`, `email`, `phone`, `insurance_type`, `custom_fields` (origem, destino, valor). Após sucesso, redirecionar para `/sucesso`.

### 4. Página de Sucesso — botões funcionais
- "Cotar Outra Carga" → `navigate("/")` com scroll para `#cotacao`
- "Avaliar" → já funcional (Google Review link)
- "Home" → já funcional
- "Site Institucional" → apontar para `/` em vez de URL externa

### 5. Header flutuante (ilha suspensa) ao scrollar
Adicionar estado `scrolled` via `useEffect` + `window.scrollY > 50`. Quando ativo, aplicar classes: `mx-4 mt-2 rounded-2xl shadow-lg border` criando o efeito "ilha flutuante". Transição suave com `transition-all duration-500`. Responsivo no mobile com `mx-2 mt-1 rounded-xl`.

### 6. Auditoria de textos e SEO
- Corrigir `&amp;` → `&` nos textos renderizados (linhas 101, 314, 342, 516)
- Atualizar links do navbar para usar rotas reais (`/#produtos`, `/sobre`, `/#cotacao`) em vez de `href="#"`
- Corrigir CTAs do Hero: "Cotação Rápida" → `href="#cotacao"`, "Falar com Consultor" → link WhatsApp
- Melhorar meta description no `index.html` para incluir keywords primárias
- Adicionar `alt` tags descritivas nas imagens das seguradoras

### Arquivos a modificar
- `src/pages/Index.tsx` — logos, header flutuante, formulário Supabase, textos/SEO
- `src/pages/Success.tsx` — botões funcionais
- `index.html` — revisão meta tags SEO

