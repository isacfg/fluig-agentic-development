# Novo scraper para style.fluig.com

Este ExecPlan é um documento vivo. As seções Progress, Surprises & Discoveries, Decision Log, e Outcomes & Retrospective devem ser mantidas atualizadas durante a execução.

Este plano segue as regras de [AGENTS.md](../../AGENTS.md).

## Purpose / Big Picture

O objetivo é criar um scraper novo que colete o conteúdo público de `https://style.fluig.com/` e suas subpáginas reais no mesmo host. Após a mudança, será possível executar um único script e obter arquivos Markdown por página, um dump flat, `INDEX.md`, `manifest.json` e um índice consolidado em `index/`, seguindo o padrão dos scrapers já presentes neste repositório.

## Progress

- [x] (2026-03-11 15:00Z) Inspecionado o padrão dos scrapers existentes e a estrutura do site `style.fluig.com`.
- [x] (2026-03-11 15:05Z) Criado teste inicial TDD para o novo scraper (`tests/scrape_fluig_styleguide.test.js`) e confirmado estado RED por ausência do módulo.
- [x] (2026-03-11 15:10Z) Implementado `scrape_fluig_styleguide.js` com crawl HTTP, dump, índice raiz, manifest e índice consolidado.
- [x] (2026-03-11 15:12Z) Validada a extração de seções/âncoras úteis sem gerar páginas duplicadas para links `#`.
- [x] (2026-03-11 15:15Z) Executados testes e uma rodada funcional reduzida confirmando os artefatos gerados.

## Surprises & Discoveries

- Observation: a home de `style.fluig.com` expõe apenas algumas páginas HTML reais (`index.html`, `css.html`, `javascript.html`, `components.html`, `chart.html`, `miscellaneous.html`), enquanto a maior parte da navegação interna é feita por âncoras `#`.
  Evidence: inspeção de links internos com `cheerio` encontrou 7 URLs internas reais e centenas de links `#` nas páginas de conteúdo.
- Observation: o site não publica `robots.txt` nem `sitemap.xml`.
  Evidence: `curl` em `https://style.fluig.com/robots.txt` e `https://style.fluig.com/sitemap.xml` retornou HTTP 404 em 2026-03-11.

## Decision Log

- Decision: implementar um scraper novo dedicado em vez de adaptar um scraper existente.
  Rationale: mantém o comportamento isolado e evita regressão nos scrapers já estabilizados.
  Date/Author: 2026-03-11 / Codex

- Decision: tratar âncoras internas como seções do mesmo documento, não como páginas independentes.
  Rationale: o site usa extensivamente tabs e headings com `id`; transformar cada âncora em arquivo separado inflaria a saída com duplicação massiva.
  Date/Author: 2026-03-11 / Codex

## Outcomes & Retrospective

Foi entregue um scraper novo para `style.fluig.com` que percorre as páginas HTML públicas do host, converte o conteúdo principal para Markdown e gera os artefatos esperados: páginas `.md`, `dump/`, `INDEX.md`, `manifest.json` e `index/`. O comportamento foi validado por teste automatizado e por execução real reduzida, que encontrou 6 páginas HTML canônicas e 0 falhas no crawl.

## Context and Orientation

Referências principais já existentes no repositório:

- `scrape_fluig_docs_api.js`
- `scrape_totvs_rm.js`
- `tests/scrape_fluig_docs_api.test.js`

Artefatos previstos para esta entrega:

- `scrape_fluig_styleguide.js`
- `tests/scrape_fluig_styleguide.test.js`

## Validation and Acceptance

A mudança será aceita quando:

- o teste novo do scraper passar;
- a execução reduzida do scraper gerar:
  - arquivos Markdown por página do style guide;
  - pasta `dump/` com cópias flat;
  - `INDEX.md` na raiz;
  - `manifest.json` na raiz;
  - pasta `index/` com índice consolidado por página/seção.
