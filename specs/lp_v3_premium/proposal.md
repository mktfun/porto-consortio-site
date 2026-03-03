# Proposta de Arquitetura Visual (v3) - "GestorPulse Premium" 
**Projeto:** Seguro Transporte de Cargas - JJ & Amorim

A landing page atual é limpa e funcional, mas o usuário solicitou uma reformulação profunda (v3) inspirada na estética do sistema **Tork v2 Live (sgc.gestorpulse.com.br)**. O objetivo é sair do "genérico" para o "único, premium e altamente técnico".

## O que torna a referência única? (Análise Visual)
Após análise minuciosa da referência (Tork v2), extraímos os elementos que conferem a sensação "premium":

1. **Alternância de Capítulos (Dark vs Light):** A página alterna bruscamente entre seções `bg-[#09090b]` (Deep Navy/Black) e `bg-white`. Isso cria um "ritmo" narrativo, dividindo a página em cenas como uma apresentação da Apple.
2. **Tipografia Massiva e Dupla-Tonalidade:** 
   - Títulos enormes (ex: `text-6xl` a `text-8xl`), com tracking super apertado (`tracking-tighter`).
   - Uso de duas cores no mesmo H2: *"Você conversa. **O Tork trabalha.**"*. Onde a segunda frase tem opacidade/cor menor (`text-zinc-500`).
3. **Ativos Técnicos de Alta Fidelidade (Mockups):**
   - Não usa ícones genéricos do Phosphor/Lucide de forma solta. O Tork usa **Mockups de iPhone**, **Interfaces simuladas do WhatsApp**, e **Fundos com malha de pontos estruturais** (dot patterns) com selos de "LATÊNCIA ZERO • REGION: SOUTH-1".
   - Isso constrói confiança por parecer "tecnológico" e não apenas uma página de marketing.
4. **Bordas Squircle & Neon-Glow:** 
   - Elementos em float e cards no fundo escuro usam bordas translúcidas de 1px (`border-white/10`) com um glow interior suave.

## Adaptação para Seguro de Transporte (JJ & Amorim)

Como traduzir a landing page de um "SaaS de Automação de WhatsApp (Tork)" para uma "Corretora de Seguros (JJ & Amorim)" mantendo a mesma vibe?

*   **Hero (Dark Mode):** Fundo super dark navy (`#0B0F19`), com um glow roxo da JJ&Amorim sutil no centro. O título será massivo: *"A espinha dorsal da sua <br/><span class='text-zinc-500'>operação de transporte.</span>"*.
*   **Trust Bar (Light Mode):** Corte brusco para o fundo branco. Logos reais das seguradoras parceiras (Porto, Allianz, etc.) em escala de cinza, passando em carrossel. *(O usuário precisará providenciar as imagens/logos)*.
*   **Seção "Problema/Solução" (Dark Mode):** Parecido com a automação de tela do Tork, criaremos um card tech mostrando o "Custo de uma Carga Roubada" vs "A Tranquilidade da Apólice Expressa".
*   **Badges de Interface Ocular:** Como no Tork (`ETAPA 1 • CAPTURA`), usaremos badges como `<Shield> RCTR-C` flutuando sobre uma interface simulada de "Manifesto de Carga Aprovado".
*   **Footer Massivo:** Rodapé escuro com logos grandes e links estruturados.

## Etapas da Vibe
Para implementar isso sem escrever o código imediatamente (seguindo a regra Vibe Proposal), estamos entregando:
1. `design.md`: Contendo o token system, cores exatas e inventário de assets.
2. `tasks.md`: O checklist passo-a-passo para a reconstrução.

O próximo passo é o `vibe-apply` assim que você der OK no design.
