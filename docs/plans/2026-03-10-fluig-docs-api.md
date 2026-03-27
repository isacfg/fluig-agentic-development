# Novo scraper para fluig_docs_api (latest + old)

Este ExecPlan é um documento vivo. As seções Progress, Surprises & Discoveries, Decision Log, e Outcomes & Retrospective devem ser mantidas atualizadas durante a execução.

Este plano segue as regras de [AGENTS.md](../../AGENTS.md) e de [.agents/PLANS.md](../../.agents/PLANS.md).

## Purpose / Big Picture

O objetivo é criar um scraper novo que colete toda a documentação pública da Fluig API em duas fontes: `https://api.fluig.com/latest/index.html` e `https://api.fluig.com/old/`. Após a mudança, será possível executar um único script e obter estrutura completa de arquivos Markdown com organização por pasta, dump flat, índice raiz (`INDEX.md`), manifest (`manifest.json`) e índice consolidado (`index/`), no mesmo padrão já usado em `fluiggers_docs`.

## Progress

- [x] (2026-03-10 09:00Z) Levantado padrão dos scrapers existentes (`scrape_fluiggers.js`, `scrape_totvs_rm.js`, `scrape_totvs_legado.js`, `scrape_javadoc.js`).
- [x] (2026-03-10 09:01Z) Criado teste inicial TDD para o novo scraper (`tests/scrape_fluig_docs_api.test.js`) e confirmado estado RED.
- [x] (2026-03-10 09:02Z) Implementado `scrape_fluig_docs_api.js` com crawl para latest + old, dump, manifest, índice raiz e índice consolidado em `index/`.
- [x] (2026-03-10 09:03Z) Ajustada descoberta de links (normalização de URL, seeds do latest swagger, filtro de links inválidos) e validado com execução reduzida.
- [x] (2026-03-10 09:03Z) Confirmado estado GREEN no teste novo e execução funcional do scraper.

## Surprises & Discoveries

- Observation: A página `latest/index.html` é SPA e não expõe links de APIs no HTML estático; o crawler simples não encontra os cards da home.
  Evidence: execução inicial retornou `latest/index.md (0 links)`.
- Observation: A página `old/` contém vários links relativos e exige manter a barra final para resolver caminhos como `resources.html` corretamente.
  Evidence: sem barra final, links eram resolvidos fora de `/old/`; com correção, `old/index.md` passou a descobrir links.
- Observation: `application.wadl` pode falhar em requisição direta dependendo da resposta do servidor.
  Evidence: execução reduzida mostrou `https://api.fluig.com/old/application.wadl` com `fetch error`.

## Decision Log

- Decision: Implementar scraper novo dedicado (`scrape_fluig_docs_api.js`) em vez de adaptar um existente.
  Rationale: reduz risco de regressão em scrapers já estabilizados e mantém responsabilidade isolada por fonte.
  Date/Author: 2026-03-10 / GitHub Copilot

- Decision: Usar crawl HTTP com `axios` + parsing com `cheerio` + conversão para Markdown com `turndown`.
  Rationale: mantém consistência técnica com os outros scrapers do repositório.
  Date/Author: 2026-03-10 / GitHub Copilot

- Decision: Adicionar seeds conhecidas de endpoints `latest/*/swagger-ui/`.
  Rationale: a home do latest é renderizada por bundle e não expõe links navegáveis no HTML estático.
  Date/Author: 2026-03-10 / GitHub Copilot

- Decision: Gerar `index/` consolidado no próprio scraper.
  Rationale: atender requisito do usuário de ter dump + index no padrão de `fluiggers_docs` sem etapa manual adicional.
  Date/Author: 2026-03-10 / GitHub Copilot

## Outcomes & Retrospective

Foi entregue um scraper funcional para `fluig_docs_api`, com cobertura das duas fontes solicitadas (`latest` e `old`) e geração dos artefatos esperados: estrutura Markdown, `dump/`, `INDEX.md`, `manifest.json` e `index/INDEX.md` com consolidação por seção. O comportamento foi validado por teste automatizado (TDD) e por execução real com limites reduzidos.

Ponto de atenção futuro: avaliar estratégia alternativa para descoberta 100% automática dos links do latest (caso novos domínios de API sejam adicionados sem entrar na lista conhecida de seeds).

## Context and Orientation

O repositório já possui múltiplos scrapers em JavaScript no diretório raiz. O padrão comum é:

- script CLI com `parseArgs()`;
- crawl/scrape com retries e delay;
- gravação de arquivos markdown em estrutura de pastas;
- gravação flat em `dump/`;
- criação de `INDEX.md` e `manifest.json`.

Arquivos relevantes para referência:

- `scrape_fluiggers.js`
- `scrape_totvs_legado.js`
- `scrape_totvs_rm.js`
- `scrape_javadoc.js`
- `build_index.js`

Novos arquivos deste trabalho:

- `scrape_fluig_docs_api.js`
- `tests/scrape_fluig_docs_api.test.js`

## Plan of Work

Primeiro foi criado um teste novo cobrindo comportamento mínimo do scraper (fontes default, extração de URL de swagger e agrupamento por seção). Em seguida foi implementado o script novo com crawl para `/latest` e `/old`, suporte a documentos HTML e não-HTML, extração de links internos, extração de `swagger.json` em páginas `swagger-ui`, geração de dump, índice raiz, manifest e índice consolidado por seção. Depois, a normalização de URL foi ajustada para preservar diretórios com barra final, evitando perda de links relativos do `old`.

## Concrete Steps

No diretório raiz do repositório (`/home/isaac/Documents/repos/fluig-developments`):

1. Executar teste (estado RED inicial):

    node --test tests/scrape_fluig_docs_api.test.js

2. Executar teste após implementação (GREEN):

    node --test tests/scrape_fluig_docs_api.test.js

3. Execução funcional reduzida para validar geração de artefatos:

    node scrape_fluig_docs_api.js --output ./tmp_fluig_docs_api --max-pages 20 --max-depth 3 --delay 50

## Validation and Acceptance

A mudança é aceita quando:

- o teste `tests/scrape_fluig_docs_api.test.js` passa;
- a execução do scraper cria a pasta de saída com:
  - conteúdo organizado por `latest/` e `old/`;
  - pasta `dump/` com cópias flat;
  - arquivo `INDEX.md` na raiz da saída;
  - arquivo `manifest.json` na raiz da saída;
  - pasta `index/` com consolidação por seção e `index/INDEX.md`.

## Idempotence and Recovery

- O scraper pode ser executado várias vezes no mesmo diretório de saída, sobrescrevendo arquivos `.md` sem corromper estrutura.
- Para recomeçar limpo, remover a pasta de saída e rodar novamente.
- O índice consolidado (`index/`) é recriado do zero a cada execução.

## Artifacts and Notes

Evidências principais desta entrega:

- Teste TDD (GREEN): `node --test tests/scrape_fluig_docs_api.test.js` com 3 testes passando.
- Execução reduzida real gerando `latest/*`, `old/*`, `dump/`, `INDEX.md`, `manifest.json`, e `index/*`.

## Interfaces and Dependencies

Dependências utilizadas (já presentes no projeto):

- `axios`: download de páginas/documentos;
- `cheerio`: parsing de HTML;
- `turndown`: conversão HTML → Markdown;
- `fs` e `path` (Node.js): persistência e estrutura de diretórios.

Interface principal entregue:

- CLI: `node scrape_fluig_docs_api.js [opções]`
- Opções: `--output`, `--delay`, `--max-pages`, `--max-depth`, `--only`, `--verbose`

APIs exportadas para teste:

- `DEFAULT_SOURCES`
- `extractSwaggerSpecUrls(html, pageUrl)`
- `groupPagesByTopSection(entries)`
- `buildSources(only)`

---

Revision note (2026-03-10): plano criado e atualizado ao final da implementação para refletir decisões, validações e riscos remanescentes.