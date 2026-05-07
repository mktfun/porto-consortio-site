# Design Specs: 004-institutional-and-more-products

## 1. UI Architecture (Antigravity)
A UI utilizará a construção padronizada de landing pages internas para garantir coesão em todo o portal.

### Simulador (Refinamento)
```html
<!-- Fundo (retornando ao visual original) -->
<div className="absolute inset-0 bg-slate-50 z-0"></div>
<div className="absolute bottom-0 left-0 right-0 h-[600px] bg-primary rounded-t-[100%] scale-150 origin-bottom translate-y-[30%] z-0"></div>

<!-- Textos sobre o fundo escuro -->
<h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Simulador de Consórcio</h2>
<p className="text-blue-100 max-w-2xl mx-auto text-lg">Descubra agora mesmo...</p>

<!-- Limites do Slider no Card Claro -->
<div className="flex justify-between mt-2 text-xs text-slate-600 font-bold">
   <span>R$ 100.000</span>
   <span>R$ 1.000.000</span>
</div>
```

### Páginas de Produtos Adicionais (Agro, Investimentos, Empresarial)
- **Hero:** Imagem `unsplash` com opacidade no fundo negro (ex: Trator para Agro, Gráficos financeiros para Investimentos, Prédios corporativos para Empresarial).
- **Conteúdo:** 3 cards com diferenciais JJ & Amorim voltados àquele segmento de produto específico (ex: "Sem descapitalização" para Empresarial).
- **Rodapé:** Renderizar o `Simulator`, `LeadForm` e `Footer`.

### Páginas Institucionais (A Corretora)
Seguirão a mesma base arquitetural, mas com textos totalmente focados na missão, cultura e história de 10 anos de mercado e parceria oficial com a Porto Seguro.
- **Contato:** Conterá botões dinâmicos e embeds voltados ao LeadForm e WhatsApp.
- **Artigos:** Layout com cards provisórios (mockups) que poderão futuramente ser migrados para um CMS.

## 2. Rotas e Dependências
As rotas serão incluídas dinamicamente no `react-router-dom`:
- `/consorcio/agro`
- `/consorcio/investimento`
- `/consorcio/empresarial`
- `/institucional/sobre-nos`
- `/institucional/cultura`
- `/institucional/clientes`
- `/institucional/trabalhe-conosco`
- `/institucional/contato`
- `/institucional/artigos`
