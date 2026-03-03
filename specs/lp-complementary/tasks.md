# Tasks: LP Complementary Pages & Polish

## 1. Extrair Layout Reutilizável
- [ ] Criar `src/components/layout/PageLayout.tsx` com Navbar + Footer compartilhados
- [ ] Refatorar `Index.tsx` para usar o `PageLayout`

## 2. Corrigir Footer (Index.tsx)
- [ ] Remover "Trabalhe Conosco"
- [ ] Trocar ícones sociais para Lucide (`Facebook`, `Instagram`)
- [ ] Inserir URLs reais (Facebook, Instagram)
- [ ] Linkar itens do footer às novas rotas
- [ ] Corrigir encoding `&amp;` → `&`

## 3. Páginas Institucionais
- [ ] `SobreNos.tsx` (`/sobre`)
- [ ] `Privacidade.tsx` (`/privacidade`)
- [ ] `Termos.tsx` (`/termos`)

## 4. Páginas de Seguros
- [ ] `AutoFrota.tsx` (`/seguros/auto-frota`)
- [ ] `RctrC.tsx` (`/seguros/rctr-c`)
- [ ] `RcDc.tsx` (`/seguros/rc-dc`)
- [ ] `VidaEmGrupo.tsx` (`/seguros/vida-em-grupo`)
- [ ] `Empresarial.tsx` (`/seguros/empresarial`)

## 5. Registrar Rotas
- [ ] Atualizar `App.tsx` com as 8 novas rotas

## 6. Animações de Scroll
- [ ] Criar hook `useScrollReveal.ts`
- [ ] Aplicar nas sections da `Index.tsx`

## 7. SEO & Meta Tags
- [ ] Atualizar `index.html` com meta tags base
- [ ] Adicionar tags OG e Schema.org

## 8. Polish Visual
- [ ] Revisar gradientes e dark mode
- [ ] Garantir consistência visual em todas as páginas

## 9. Verificação Final
- [ ] Build sem erros
- [ ] Testar todas as rotas
- [ ] Commit + push
