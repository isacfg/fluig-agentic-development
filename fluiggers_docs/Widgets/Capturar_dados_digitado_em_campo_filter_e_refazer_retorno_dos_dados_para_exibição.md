# Capturar dados digitado em campo filter e refazer retorno dos dados para exibição

> **Fonte:** [https://fluiggers.com.br/t/capturar-dados-digitado-em-campo-filter-e-refazer-retorno-dos-dados-para-exibicao/3107](https://fluiggers.com.br/t/capturar-dados-digitado-em-campo-filter-e-refazer-retorno-dos-dados-para-exibicao/3107)
> **Categoria:** Widgets
> **Tags:** `filter`
> **Criado em:** 26/12/2024, 16:02
> **Visualizações:** 58 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Wasley Santos** (@Wasley_Santos) — 26/12/2024, 16:02

Galera

Criei o campo de pesquisa do tipo filter na widget que retorna dados de um dataset, mas ele é limitado para mostrar apenas os 10 primeiros. Tenho no dataset a implementação da constraint, porém, não sei como fazer para que ele busque novamente o dataset quando informações forem digitadas. hoje, ele pesquisa apenas no que já foi carregado.
Será que tenho que implementar evento padrão de key no campo para tentar fazer um reload como acontece no datatable?

A ideia seria a mesma do campo zoom do formulario, no momento que digito, ele envia para o dataset que possuirá constraint para tratar os dados e retornar a informação

---

## Resposta #1

**Wasley Santos** (@Wasley_Santos) — 27/12/2024, 14:48 | ❤️ 1

Consegui descobrir. Para fazer isso precisa usar a fonte de dados como API.

```javascript
source: {
                url:  '/api/public/ecm/dataset/search?datasetId=ds_Fornecedores&searchField=FORNECEDOR&',
                contentType: 'application/json',
                root: 'content',
                pattern: '',
                limit: 10,
                offset: 0,
                patternKey: 'searchValue',
                limitkey: 'limit',
                offsetKey: 'offset'
            }
```

---
