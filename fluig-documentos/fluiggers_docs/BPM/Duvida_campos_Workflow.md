# Duvida campos Workflow

> **Fonte:** [https://fluiggers.com.br/t/duvida-campos-workflow/3318](https://fluiggers.com.br/t/duvida-campos-workflow/3318)
> **Categoria:** BPM
> **Tags:** `form`, `processo`
> **Criado em:** 18/06/2025, 07:28
> **Visualizações:** 50 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**johndm** (@johndm) — 18/06/2025, 07:28

Bom dia,

Sou iniciante no Fluig e me surgiu uma duvida em relação a “proteção” dos campos de um formulário.

Estou lendo a documentação de Eventos de Formulário (coloquei o link no final do post).
Dentre esses eventos existe o “enableFields”.

Dentro desse evento uma função que pode ser utilizada é a “form.setEnabled” que recebe 03 parametros:

1.  o id/name do campo.
2.  um booleano indicando se o campo vai ser habilitado ou desabilitado.
3.  um booleano opcional que vai indicar se o campo será protegido ou não.

A documentação destaca que quando o campo for “protegido” iráreceber um “underline” no início do seu ID e NAME e isso realmente acontece, porem não destaca que será criado um campo “hidden” logo abaixo da tag “form”.

Tendo isso em vista fiz dois testes usando a seguinte implementação conforme a documentação:

`form.setEnabled(` `"campoQueQueroProteger"` `,` `false` `,` `true` `);`

A)
**Tentei alterar o valor do campo com o “\_” (que era o que estava visível na tela).**
**Resultado:** O Fluig realmente impediu a alteração do valor.

B)
**Tentei alterar o valor do campo “hidden”.**
**Resultado:** O Fluig salvou a informação “alterada” no campo que eu queria proteger.

Isso deveria ser assim mesmo?

Se um usuário for um “usuário avançado” e souber inspecionar os elementos ele vai poder alterar os valores dos campos que eu queria proteger?

Conforme a documentação em

![](https://tdn.totvs.com/s/-3o548x/8804/xgjkrn/56/_/favicon.ico) [tdn.totvs.com](https://tdn.totvs.com/pages/releaseview.action?pageId=270924158#EventosdeFormul%C3%A1rio-Protegendocamposdesabilitados:~:text=javascript%20do%20formul%C3%A1rio-,enableFields,-Esse%20evento%20%C3%A9)

### [Eventos de Formulário - TOTVS Fluig - TDN](https://tdn.totvs.com/pages/releaseview.action?pageId=270924158#EventosdeFormul%C3%A1rio-Protegendocamposdesabilitados:~:text=javascript%20do%20formul%C3%A1rio-,enableFields,-Esse%20evento%20%C3%A9)

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 18/06/2025, 18:08

Até onde já vi é assim mesmo

---
