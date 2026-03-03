

## Plano: Logos reais das seguradoras de transporte na Trust Bar

### O que muda
O usuario enviou logos reais de 7 seguradoras que atuam em seguro de transporte de cargas. A lista atual inclui "Liberty Seguros" e "SulAmerica" que precisam ser ajustadas (Liberty virou Yelum, SulAmerica nao faz transporte).

### Seguradoras corretas (seguro transporte)
Com base nos logos enviados:
1. **Bradesco Seguros** — `user-uploads://1580839736wpdm_bradesco-seguros-logo.svg`
2. **HDI Seguros** — `user-uploads://image-2.png`
3. **Allianz** — `user-uploads://image-3.png`
4. **Azul Seguros** — `user-uploads://image-4.png`
5. **Sompo** — `user-uploads://image-5.png`
6. **Yelum** (ex-Liberty) — `user-uploads://image-6.png`
7. **Tokio Marine** — `user-uploads://image-7.png`

A primeira imagem (`user-uploads://image.png`) e o logo da JJ&Amorim.

### Implementacao

1. **Copiar todos os 8 assets** para `src/assets/`:
   - `jjamorim-logo.png` (logo JJ)
   - `bradesco-seguros.svg`
   - `hdi-seguros.png`
   - `allianz.png`
   - `azul-seguros.png`
   - `sompo.png`
   - `yelum.png`
   - `tokio-marine.png`

2. **Atualizar `INSURERS` array** em `Index.tsx`: remover SulAmerica e Liberty, adicionar Yelum. Lista final de 7 seguradoras com import de imagem.

3. **Atualizar Trust Bar**: substituir icone Shield + texto por `<img>` com os logos reais. Aplicar `h-8 grayscale hover:grayscale-0 transition` para estilo premium.

4. **Atualizar logo JJ&Amorim** no Header e Footer: substituir o placeholder "JJ" pelo logo real importado.

5. **Atualizar counter** de "8 seguradoras" para "7 seguradoras".

### Arquivos
- Copiar 8 assets para `src/assets/`
- Editar `src/pages/Index.tsx` (INSURERS, TrustBar, Header, Footer, counter)

