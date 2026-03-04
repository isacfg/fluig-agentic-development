# Imagens em Widget

> **Fonte:** [https://fluiggers.com.br/t/imagens-em-widget/3082](https://fluiggers.com.br/t/imagens-em-widget/3082)
> **Categoria:** Widgets
> **Tags:** `widget`
> **Criado em:** 11/12/2024, 12:49
> **Visualizações:** 110 | **Likes:** 2 | **Respostas:** 2

---

## Pergunta original

**Artur Alves** (@artur.alves) — 11/12/2024, 12:49

Boa tarde, pessoal!

Estou tentando fazer uma espécie de mural dentro do Fluig, mais especificamente com widgets;
Para isso reservei uma pasta no meu GED e estou tentando referenciar as imagens que tem dentro dela para que apareça na div que criei na widget.
Vi alguns pessoas falando de copiar o link público da imagem, porém, precisaria que a imagem da widget atualizasse conforme fossem atualizando no GED também.

Alguém já fez algo parecido?

---

## Resposta #1

**Daniel Cabral Santos** (@daniel.cabral) — 12/12/2024, 08:32 | ❤️ 1

Bom dia!

Nunca fiz nada parecido, mas você poderia utilizar a API para listar as pastas de um determinado diretório:

```auto
$.ajax({
  async: true,
  type: "GET",
  contentType: "application/json",
  url: "/api/public/ecm/document/listDocumentWithChildren/2",
  success: function (retorno) {
    $.each(retorno.content, function (k, v) {
      var objeto = new Object();
      objeto = v.children;
      for (var x = 0; x < objeto.length; x++) {
        console.log("NOME DA PASTA " + objeto[x].description);
      }
    });
  },
});
```

…e aí, baseado no retorno iterar nos links para exibir as imagens.
Não testei o código, mas penso que teoricamente pode ser o caminho.

---

## Resposta #2 ✅ RESPOSTA ACEITA

**Artur Alves** (@artur.alves) — 12/12/2024, 12:41 | ❤️ 1

Boa tarde, Daniel!

Muito obrigado! Você acabou que deu uma luz no fim do tunel pra mim!

consegui através de outra API;

Segue:
Criei uma tag IMG com src vazio

No js, chamei uma api que consulta o documento publicado e dentro de uma variável ele nos retorna o link da imagem, onde consegui salvar o link e atribuir ele ao src da tag IMG;

```auto
$(document).ready(function () {
  $.ajax({
    async: true,
    type: "GET",
    contentType: "application/json",
    url: "/api/public/ecm/document/activedocument/n°documento",
    success: function (retorno) {
      var urlImagem = retorno.content.fileURL;

      if ($("#imagem1").length > 0) {
        $("#imagem1").attr("src", urlImagem);
      }
    },
  });
});
```

---

## Resposta #3

**Daniel Cabral Santos** (@daniel.cabral) — 12/12/2024, 17:05

Showww!!! Fico feliz de ter ajudado de alguma forma!

---
