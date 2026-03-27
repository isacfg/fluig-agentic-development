# Adaptação Do Scraper TOTVS RM Para Gestão Contábil

**Contexto:** O repositório já possui um scraper Zendesk/TDN para TOTVS RM em `scrape_totvs_rm.js`, hoje apontado por padrão para a seção `NUCLEUS`.

**Objetivo:** Alterar o alvo padrão do scraper para a seção `TOTVS Gestão Contábil`, preservando o fluxo atual de descoberta recursiva, extração de artigos, follow de links externos e geração de `manifest.json` e índices.

## Escopo

- Trocar a constante `START_SECTION` para a URL da seção `TOTVS Gestão Contábil`.
- Atualizar a cobertura mínima com um teste de regressão que valide esse alvo padrão.

## Fora De Escopo

- Generalizar o scraper para aceitar qualquer seção RM via CLI.
- Alterar a estrutura de saída ou limpar o diretório automaticamente.
- Reescrever o fluxo de scrape, paginação ou extração de conteúdo.

## Abordagens Consideradas

### 1. Troca direta da constante padrão

Prós:
- Menor risco.
- Mantém compatibilidade com o fluxo atual.
- Resolve exatamente o pedido.

Contras:
- Continua hardcoded para uma seção específica.

### 2. Parametrizar por CLI com fallback

Prós:
- Mais flexível para novas áreas RM.

Contras:
- Amplia escopo sem necessidade imediata.
- Exige mais validação e documentação.

## Decisão

Aplicar a abordagem 1. O pedido foi substituir o alvo padrão do `NUCLEUS` por `Gestão Contábil`, então a mudança deve ser mínima e objetiva.
