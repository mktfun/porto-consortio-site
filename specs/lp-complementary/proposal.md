# Proposta: Páginas Complementares, SEO, Animações e Polish da Landing Page

## Contexto
A Landing Page principal (`Index.tsx`) foi gerada via Stitch/Lovable e possui o layout visual, mas está incompleta em funcionalidade e SEO. Todos os links do footer apontam para `href="#"`, não existem sub-páginas, as redes sociais não têm URL real, animações de scroll inexistem, e há problemas visuais (degradês, ícones, encoding `&amp;`).

---

## Escopo da Entrega

### 1. Páginas Institucionais (3 novas rotas)

| Rota | Página | Conteúdo |
|------|--------|----------|
| `/sobre` | Sobre Nós | História da JJ&Amorim, missão/visão/valores, equipe, anos de atuação |
| `/privacidade` | Política de Privacidade | LGPD, coleta de dados, cookies, direitos do titular |
| `/termos` | Termos de Uso | Condições de navegação, responsabilidades, propriedade intelectual |

> [!IMPORTANT]
> O link **"Trabalhe Conosco"** será **removido** do footer conforme solicitado.

### 2. Páginas de Seguros (5 novas rotas)

Cada página terá: Hero mini, descrição do produto, coberturas incluídas, público-alvo, CTA para cotação.

| Rota | Seguro |
|------|--------|
| `/seguros/auto-frota` | Auto Frota |
| `/seguros/rctr-c` | RCTR-C (Responsabilidade Civil Transportador Rodoviário - Carga) |
| `/seguros/rc-dc` | RC-DC (Responsabilidade Civil Desaparecimento de Carga) |
| `/seguros/vida-em-grupo` | Vida em Grupo |
| `/seguros/empresarial` | Empresarial |

### 3. Correções no Footer
- Linkar os itens Institucionais às novas rotas (`/sobre`, `/privacidade`, `/termos`)
- Linkar os itens Seguros às novas rotas (`/seguros/*`)
- Remover "Trabalhe Conosco"
- Trocar ícones de redes sociais de `material-icons-outlined` para `lucide-react` (`Facebook`, `Instagram`)
- Inserir URLs reais:
  - Facebook: `https://www.facebook.com/jjamorimseguros`
  - Instagram: `https://www.instagram.com/corretorajjamorim/`
- Remover o ícone de LinkedIn/briefcase (3º ícone) ou substituir por WhatsApp

### 4. Animações de Scroll (Intersection Observer)
- Criar hook `useScrollReveal` com IntersectionObserver
- Aplicar fade-in + translate-y nas sections ao entrar no viewport
- Efeito stagger nos cards (testimonials, coberturas, diferenciais)
- Contagem animada nos números (stats da hero: "10+ anos", "31.232 acidentes")

### 5. SEO & Meta Tags
- `<title>` e `<meta description>` em cada página
- Heading hierarchy: `<h1>` único por página
- Schema.org JSON-LD (Organization + InsuranceAgency)
- Open Graph tags para compartilhamento social
- Canonical URLs
- Atualizar `index.html` com meta tags base

### 6. Polish Visual
- Corrigir encoding `&amp;` → `&` nos textos
- Revisar gradientes (substituir hardcoded por variáveis coerentes)
- Garantir consistência light/dark mode em todas as novas páginas
- Usar o mesmo design system (cores `primary`, `accent`, `background-*`) via Tailwind config

---

## Arquivos Impactados

| Ação | Arquivo |
|------|---------|
| MODIFY | `src/App.tsx` (adicionar 8 novas rotas) |
| MODIFY | `src/pages/Index.tsx` (footer, animações, encoding) |
| MODIFY | `index.html` (meta tags SEO) |
| NEW | `src/pages/SobreNos.tsx` |
| NEW | `src/pages/Privacidade.tsx` |
| NEW | `src/pages/Termos.tsx` |
| NEW | `src/pages/seguros/AutoFrota.tsx` |
| NEW | `src/pages/seguros/RctrC.tsx` |
| NEW | `src/pages/seguros/RcDc.tsx` |
| NEW | `src/pages/seguros/VidaEmGrupo.tsx` |
| NEW | `src/pages/seguros/Empresarial.tsx` |
| NEW | `src/hooks/useScrollReveal.ts` |
| NEW | `src/components/layout/PageLayout.tsx` (navbar + footer reutilizável) |

---

## Design das Sub-Páginas

Todas as sub-páginas seguirão o mesmo padrão:
1. **Navbar** reutilizada da Index (extrair para `PageLayout`)
2. **Hero compacto** com título + breadcrumb
3. **Conteúdo** específico da página
4. **CTA** (link para `/#cotacao`)
5. **Footer** reutilizado da Index (extrair para `PageLayout`)

---

## Verificação

- Build sem erros TypeScript
- Todas as rotas acessíveis e funcionais
- Links do footer navegando corretamente
- Redes sociais abrindo em nova aba
- Animações de scroll suaves no Chrome/Firefox
- Meta tags visíveis via View Source
- Dark mode consistente em todas as páginas
- Commit + push final na origin

---

## Observação sobre Lovable

Como esse projeto é mantido pela Lovable, **todas as alterações devem ser feitas diretamente no código fonte** e commitadas no repositório GitHub. A Lovable sincronizará automaticamente ao detectar o push.
