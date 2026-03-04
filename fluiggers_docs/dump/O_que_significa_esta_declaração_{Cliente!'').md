# O que significa esta declaração {Cliente!'')?

> **Fonte:** [https://fluiggers.com.br/t/o-que-significa-esta-declaracao-cliente/822](https://fluiggers.com.br/t/o-que-significa-esta-declaracao-cliente/822)
> **Categoria:** Sem categoria
> **Criado em:** 12/12/2021, 08:30
> **Visualizações:** 596 | **Likes:** 2 | **Respostas:** 0

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 12/12/2021, 08:30

A marcação no template (arquivo html, naturalmente)

`<p><strong>Cliente: </strong>${Cliente!''}</p>`

não me parece ser uma template-string, embora suspeite ser sim, mas de um jeito diferente do que conheço.

Sei que ‘Cliente’ é uma variável que está recebendo valor pelo código de um evento, mas estou estranhando a sintaxe. E imagino que

> !‘’

signifique que, se Cliente estiver vazia, é para passar o valor ‘vazio’ mesmo.

Estou na trilha errada?

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 12/12/2021, 12:24 | ❤️ 2

Indica exatamente o que você imaginou.

É uma template string. Nesse caso vai escrever o valor de Cliente, mas se estiver vazio vai escrever uma string vazia. Sem isso, caso Cliente seja null, o template vai quebrar.

O Fluig utiliza o FreeMarker como template engine para as Widgets e E-Mail.

![](https://fluiggers.com.br/uploads/default/original/1X/ddb63850e34b0104f84f3f4be5abc4f25e96c518.png) [Apache FreeMarker™](https://freemarker.apache.org/)

### [What is Apache FreeMarker™?](https://freemarker.apache.org/)

Java template engine; generates HTML web pages, e-mails, configuration files, source code, etc. from template files and the data your application provides.

---
