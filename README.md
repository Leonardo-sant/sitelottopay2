# LOTTOPAY — Site Institucional

Site institucional da **LOTTOPAY**, empresa de tecnologia, gestão e operação de soluções para o mercado lotérico e de entretenimento.

## Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS** v4
- **Framer Motion** para animações de entrada

## Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build de produção
npm run build

# Rodar build de produção
npm start
```

O site estará disponível em `http://localhost:3000`.

## Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx          ← Layout raiz (fonts, SEO, lang="pt-BR")
│   ├── page.tsx            ← Página única com todas as seções
│   └── globals.css         ← Tailwind + variáveis CSS + animações
├── components/
│   ├── ui/                 ← Componentes reutilizáveis
│   │   ├── AnimatedEntry.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Eyebrow.tsx
│   │   ├── SectionWrapper.tsx
│   │   └── icons/          ← Ícones SVG inline
│   └── sections/           ← 11 seções do site
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── QuemSomos.tsx
│       ├── Atuacao.tsx
│       ├── Modalidades.tsx
│       ├── Impacto.tsx
│       ├── Governanca.tsx
│       ├── Marcas.tsx
│       ├── RioGrandeDoNorte.tsx
│       ├── JogoResponsavel.tsx
│       └── Footer.tsx
├── content/
│   └── site.ts             ← ⭐ TEXTOS E DADOS CENTRALIZADOS
├── hooks/
│   └── useScrollShrink.ts
└── lib/
    └── motion.ts           ← Variants do Framer Motion
```

## Onde alterar textos, cores e contato

### 📧 E-mail de contato
Arquivo: `src/content/site.ts` → `siteContent.contact.email`

### 🔗 Links legais (Política de Privacidade / Termos de Uso)
Arquivo: `src/content/site.ts` → `siteContent.links.privacy` e `siteContent.links.terms`

### 📊 Números da seção "Quem somos"
Arquivo: `src/content/site.ts` → `siteContent.quemSomos.stats`

### 🎨 Paleta de cores
Arquivo: `src/app/globals.css` → bloco `@theme inline`

### 🏷️ Cores das marcas (barras dos cards)
Arquivo: `src/content/site.ts` → `siteContent.brands.*.color`

## Placeholders sinalizados

Os seguintes itens são **provisórios** e devem ser substituídos:

| Item | Localização em `site.ts` |
|------|--------------------------|
| E-mail de contato | `contact.email` |
| Política de Privacidade | `links.privacy` |
| Termos de Uso | `links.terms` |
| Números estatísticos | `quemSomos.stats` |

## Seções

1. **Header** — Fixo, encolhe ao rolar, menu hambúrguer abaixo de 860px
2. **Hero** — Grid de linhas, glows verdes, pill pulsante
3. **Quem Somos** — 2 colunas + cards estatísticos
4. **Nossa Atuação** — 6 cards com ícones SVG verdes
5. **Modalidades** — 6 cards simples sobre fundo branco
6. **Impacto no RN** — 6 cards com ícones de áreas sociais
7. **Governança** — 5 blocos numerados
8. **Marcas** — 4 cards com barras coloridas (LOTTOPAY, LOTO POTIGUAR, LOTERIA DA GENTE, RAIZ BET)
9. **Rio Grande do Norte** — SVG com anéis giratórios + citação
10. **Jogo Responsável** — Selo 18+ e avisos legais
11. **CTA + Rodapé** — Bloco de contato + rodapé em 4 colunas

## Responsividade

Testado para: 1440px, 1024px, 768px e 375px.

## Acessibilidade

- Contraste WCAG AA
- `aria-label` em ícones funcionais
- `aria-hidden` em ícones decorativos
- `prefers-reduced-motion` respeitado
- Skip-to-content link
- Focus visible com outline verde
