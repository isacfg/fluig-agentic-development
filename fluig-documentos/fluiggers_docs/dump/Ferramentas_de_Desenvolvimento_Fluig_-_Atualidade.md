# Ferramentas de Desenvolvimento Fluig - Atualidade

> **Fonte:** [https://fluiggers.com.br/t/ferramentas-de-desenvolvimento-fluig-atualidade/3551](https://fluiggers.com.br/t/ferramentas-de-desenvolvimento-fluig-atualidade/3551)
> **Categoria:** IDEs (Ferramentas de Desenvolvimento)
> **Criado em:** 02/02/2026, 10:37
> **Visualizações:** 57 | **Likes:** 0 | **Respostas:** 2

---

## Pergunta original

**Igor Davanço** (@igordavanco) — 02/02/2026, 10:37

Pessoal, bom dia!

Tudo bem com vocês?

Gostaria de saber qual IDE e quais plugins vocês estão utilizando atualmente para desenvolvimento no Fluig. Hoje eu uso o Eclipse, principalmente pelas funcionalidades de exportação de formulários e processos.

No entanto, estou pensando em migrar para o VS Code e queria entender como vocês estão trabalhando no dia a dia e quais ferramentas recomendam.

Podem compartilhar suas experiências e sugestões?

Obrigado!

Atenciosamente,
Igor Davanço

---

## Resposta #1

**Daniel Cabral Santos** (@daniel.cabral) — 03/02/2026, 08:37

Eclipse para workflow, criação, exportação e importação de artefatos.

Todo o resto no vscode.

---

## Resposta #2

**Bruno Gasparetto** (@Bruno_Gasparetto) — 03/02/2026, 09:23

Atualmente uso o Eclipse unicamente para os Workflows. Todo o resto fico no VS Code.

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Jose William Dos Anjos Meneses** (@Jose_William_Dos_Anj) — 03/02/2026, 11:26

Também faço isso. Eclipse só para workflow e exportar/importar. E todo o restante no VSCode.

---

## Resposta #4

**Jonathas** (@JonathasFluig) — 04/02/2026, 07:14

Bom dia pessoal, falando em linguagem de programação, usamos o JS certo? Mas se eu usasse Java em alguns momentos, teria como? Se tiver como me mandem um exemplo

---

## Resposta #5

**Daniel Cabral Santos** (@daniel.cabral) — 04/02/2026, 09:34

Você pode usar Java no backend do Fluig, mas acredito que só se precisar muito mesmo. Na versão 2.0 podemos FINALMENTE usar ES6 = código mais robusto e assíncrono. Mas, se ainda houver algo que não fique bom ou não seja confortável fazer no JS você pode usar Java puro.

---

## Resposta #6

**Bruno Gasparetto** (@Bruno_Gasparetto) — 04/02/2026, 09:47

Então, na prática o tópico não estava falando de linguagem né, e sim das ferramentas pra auxiliar, hehehe.

É um vídeo antigo, mas ainda válido. Vale lembrar, como dito pelo Daniel, que a partir do Fluig 2.0 finalmente dá pra usar ES6 no back. O quanto isso realmente é válido ainda não sei, já que não testei a nova versão do Fluig.

[![](https://img.youtube.com/vi/BCSKBV3_TZw/maxresdefault.jpg "TOTVS Fluig - Diferença entre o JS do Front-end e Back-end")](https://www.youtube.com/watch?v=BCSKBV3_TZw)

Aqui tem um exemplo, de envio de e-mail, que usa bastante código em Java dentro do JavaScript:

[gist.github.com](https://gist.github.com/brunogasparetto/4db78c9352bf4c176e61ff7425cf143c)

#### [https://gist.github.com/brunogasparetto/4db78c9352bf4c176e61ff7425cf143c](https://gist.github.com/brunogasparetto/4db78c9352bf4c176e61ff7425cf143c)

##### exemplo\_envia\_anexo.js

```JavaScript
function sendPost(idArquivo) {
    var arquivo = fluigAPI.getDocumentService().getActive(parseInt(idArquivo));

    if (!arquivo.getDocumentId()) {
        throw "Arquivo não encontrado!";
    }

    var restConfig = getRestConfig(); // pega o domínio e token

    var filePath = fluigAPI.getTenantService().getTenantData(["dirDefault"]).get("dirDefault")
```
Este arquivo está truncado. [exibir original](https://gist.github.com/brunogasparetto/4db78c9352bf4c176e61ff7425cf143c)

---
