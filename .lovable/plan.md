

## Analise Completa e Plano de Melhorias

### Problemas Identificados

#### SEO
1. **Falta og:image e twitter:image** — sem imagem para compartilhamento social (critical para CTR)
2. **Sem JSON-LD (Schema.org)** — nao tem structured data para LocalBusiness/InsuranceAgency (Google Rich Results)
3. **Sem og:url** — falta URL canonica no Open Graph
4. **Sem favicon adequado** — apenas favicon.ico generico, sem apple-touch-icon ou manifest
5. **Sem sitemap.xml** — robots.txt existe mas nao aponta sitemap
6. **Meta keywords** — tag obsoleta, nao prejudica mas ocupa espaco. Pode manter
7. **H1 unico e otimizado** — OK, ja tem
8. **Alt text em imagens** — nao ha imagens, entao nao ha alts (problema sera resolvido adicionando imagens)
9. **Sem hreflang** — nao critico pois e single-language

#### Imagens/Logos Faltando
1. **Logo JJ&Amorim** — header e footer usam icone Shield generico + texto, sem logo real
2. **Logos das seguradoras** na Trust Bar — sao apenas texto cinza, sem logos reais (Bradesco, HDI, SulAmerica, etc)
3. **Hero sem imagem visual** — apenas texto e gradiente sutil, falta imagem de caminhao/transporte
4. **Tipos de Carga** — apenas icones Lucide, sem imagens reais de caminhoes/cargas
5. **Secao "Quem Atendemos"** — sem imagens contextuais
6. **og:image / twitter:image** — sem imagem de preview social

### Plano de Implementacao

#### 1. SEO — `index.html` + `public/`
- Adicionar **JSON-LD** com schema InsuranceAgency (nome, endereco, telefone, CNPJ, area de atuacao)
- Adicionar **og:image** e **twitter:image** apontando para imagem OG gerada
- Adicionar **og:url**
- Criar **sitemap.xml** basico em `public/`
- Atualizar **robots.txt** com referencia ao sitemap
- Adicionar **apple-touch-icon** meta tag e **theme-color**

#### 2. Imagens com Unsplash — `src/pages/Index.tsx`
Usar imagens de alta qualidade do Unsplash (URLs diretas, gratuitas, sem necessidade de download):

- **Hero**: imagem de caminhao em rodovia ao lado do texto (split layout no desktop)
  - `https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800` (caminhao em estrada)
- **Tipos de Carga**: manter icones mas adicionar uma imagem de fundo sutil ou imagem hero da secao
- **Trust Bar logos**: substituir texto por **SVGs inline simples** estilizados como logos das seguradoras (nao temos logos reais, mas podemos criar representacoes tipograficas mais fortes com font-weight e estilizacao)

#### 3. Logo JJ&Amorim — Header e Footer
- Como nao temos o logo real, melhorar o placeholder: usar as iniciais "JJ" estilizadas em um badge mais elaborado, ou pedir ao usuario para fazer upload do logo
- Adicionar nota no codigo para facilitar substituicao futura

#### 4. Imagens contextuais adicionais
- **Secao Urgencia**: pequena imagem de acidente/carga tombada ao lado do grafico
- **CTA Final**: background com imagem escura de rodovia com overlay

### Arquivos a Modificar
- `index.html` — JSON-LD, og:image, meta tags adicionais
- `public/sitemap.xml` — novo arquivo
- `public/robots.txt` — adicionar sitemap reference
- `src/pages/Index.tsx` — Hero com imagem, Trust Bar melhorada, imagens contextuais, logo placeholder melhorado

### Pergunta ao Usuario
Antes de implementar, preciso saber sobre o logo — o usuario tem o arquivo do logo da JJ&Amorim para upload?

