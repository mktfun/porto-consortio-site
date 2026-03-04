

## Plano: Corrigir Design das Páginas Secundárias

### Problemas identificados

1. **Logo da JJ&Amorim no PageLayout** — Tanto no navbar (linha 48-50) quanto no footer (linha 109) do `PageLayout.tsx` usam um placeholder `<div>JJ</div>` em vez do logo real. Na home (`Navbar.tsx`) também é placeholder. Nenhum arquivo importa `jjamorim-logo.png`.

2. **Cores ilegíveis** — O `InsurancePageTemplate.tsx` e o `PageLayout.tsx` usam classes como `text-white`, `text-slate-300`, `text-slate-400` que funcionam bem no tema dark (fundo `--background: 226 60% 10%`). Porém, o `SubPageHero.tsx` usa classes como `text-slate-900 dark:text-white` que assumem um tema light com fallback dark — isso pode causar conflito. O tema CSS é **exclusivamente dark** (não há variáveis `:root` light), então tudo está correto no template de seguros. O problema real parece ser nas páginas `SobreNos.tsx`, `Privacidade.tsx` e `Termos.tsx` que podem usar o `SubPageHero` com classes light.

3. **Inconsistência entre Home e Sub-páginas** — A home usa `Navbar` de `features/landing/`, as sub-páginas usam `PageLayout.tsx` com navbar duplicada. Ambos têm o mesmo placeholder de logo.

### Alterações planejadas

**`src/components/layout/PageLayout.tsx`:**
- Importar `jjamorimLogo` de `src/assets/jjamorim-logo.png`
- Substituir o `<div>JJ</div>` no navbar (linha 48-50) por `<img src={jjamorimLogo} alt="JJ & Amorim" className="h-9 w-auto rounded-lg" />`
- Mesmo no footer (linha 109)
- Aumentar arredondamento da ilha para `rounded-3xl` (linha 43)

**`src/features/landing/Navbar.tsx`:**
- Importar e usar o logo real no lugar do placeholder (linha 40-42)

**`src/features/landing/Footer.tsx`:**
- Importar e usar o logo real no footer da home também

**`src/pages/SobreNos.tsx`, `Privacidade.tsx`, `Termos.tsx`:**
- Verificar se usam classes de cor incompatíveis com o tema dark-only e corrigir para `text-white` / `text-slate-xxx` consistente

**`src/components/layout/SubPageHero.tsx`:**
- Remover classes `text-slate-900` e `dark:text-white` → usar apenas `text-white` (o tema é sempre dark)
- Remover `dark:text-slate-400` → usar `text-slate-400`

### Arquivos a modificar
- `src/components/layout/PageLayout.tsx` — logo real + ilha mais arredondada
- `src/features/landing/Navbar.tsx` — logo real
- `src/features/landing/Footer.tsx` — logo real
- `src/components/layout/SubPageHero.tsx` — corrigir classes de cor para dark-only
- `src/pages/SobreNos.tsx` — verificar/corrigir cores
- `src/pages/Privacidade.tsx` — verificar/corrigir cores
- `src/pages/Termos.tsx` — verificar/corrigir cores

