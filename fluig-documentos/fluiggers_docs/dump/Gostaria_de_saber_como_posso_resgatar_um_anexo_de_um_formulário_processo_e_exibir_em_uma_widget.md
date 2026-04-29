# Gostaria de saber como posso resgatar um anexo de um formulário/processo e exibir em uma widget

> **Fonte:** [https://fluiggers.com.br/t/gostaria-de-saber-como-posso-resgatar-um-anexo-de-um-formulario-processo-e-exibir-em-uma-widget/2810](https://fluiggers.com.br/t/gostaria-de-saber-como-posso-resgatar-um-anexo-de-um-formulario-processo-e-exibir-em-uma-widget/2810)
> **Categoria:** Formulários
> **Tags:** `form`, `processo`, `dataset`, `widget`
> **Criado em:** 24/05/2024, 08:26
> **Visualizações:** 182 | **Likes:** 1 | **Respostas:** 1

---

## Pergunta original

**Matheus Emiliano** (@ssnt_mts) — 24/05/2024, 08:26

Por ex. uma foto anexada exibir na widget

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 24/05/2024, 09:04

Fica um exemplo de um dataset para consultar todos os anexos de um processo.

[gist.github.com](https://gist.github.com/brunogasparetto/8bca2a174cb6f0de21b2931562599f49)

#### [https://gist.github.com/brunogasparetto/8bca2a174cb6f0de21b2931562599f49](https://gist.github.com/brunogasparetto/8bca2a174cb6f0de21b2931562599f49)

##### ds\_process\_attachments\_files.js

```JavaScript
/**
 * Pega os documentos anexos a um processo
 *
 * Deve informar o processId na Constraint (e só ele será usado para filtrar dados).
 *
 * @param {string[]} fields
 * @param {Constraint[]} constraints
 * @param {string[]} sortFields
 */
function createDataset(fields, constraints, sortFields) {
```
This file has been truncated. [show original](https://gist.github.com/brunogasparetto/8bca2a174cb6f0de21b2931562599f49)

Nele é retornado o `downloadUrl`, que é a URL para acessar o arquivo. Aí você pode usar isso pra fazer algum link para a pessoa acessar o anexo.

---

## Resposta #2

**venturelli** (@venturelli) — 24/05/2024, 11:22 | ❤️ 1

Agora também existem [getDocumentContentAsString](https://api.fluig.com/old/sdk/com/fluig/sdk/service/DocumentService.html#getDocumentContentAsString\(java.lang.Integer,java.lang.String\)) e [getDocumentContentAsBytes](https://api.fluig.com/old/sdk/com/fluig/sdk/service/DocumentService.html#getDocumentContentAsBytes\(java.lang.Integer\)) pra facilitar lidar diretamente com o conteúdo do arquivo e evitar alguns problemas de segurança e configurações do documento.

---
