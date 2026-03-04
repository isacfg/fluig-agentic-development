# Assinatura manual

> **Fonte:** [https://fluiggers.com.br/t/assinatura-manual/942](https://fluiggers.com.br/t/assinatura-manual/942)
> **Categoria:** Formulários
> **Tags:** `form`, `bpm`
> **Criado em:** 24/02/2022, 11:29
> **Visualizações:** 704 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Patrick Cavalcante Moraes** (@Patrick_Cavalcante) — 24/02/2022, 11:29

Bom dia,

Por gentileza poderia me tirar uma dúvida quando ao enviar uma imagem como background, ao efetuar o envio do formulário no Fluig a mesma não enviar para próxima etapa.
Se eu fixo a imagem no css consigo encaminhar para a próxima etapa. Conforme o exemplo abaixo.

.divAss{ background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAA… ") no-repeat left top;}

Porém se eu chamo o background no JavaScript de forma dinâmica, o evento é carregado na tela, porém ao enviar pelo Fluig o mesmo fica em branco numa próxima etapa.
Segue o exemplo:

div = document.getElementById (“myDiv”);
div.style.background = “#f3f3f3 url(”+imagem.val()+")no-repeat center";

![assinatura](https://fluiggers.com.br//fluiggers.com.br/uploads/default/optimized/1X/c04301e0d4f351f31ec7c68fd32c053f7280b7c4_2_690x267.png)

---

## Resposta #1

**Igor Rodrigues** (@fluigor.com.br) — 03/03/2022, 11:51

[@Patrick\_Cavalcante](/u/patrick_cavalcante)

Seja bem vindo ao nosso Forum.

Da uma verificada na consulta do dataset desse formulário, como ele ta salvando o valor no banco de dados, pode ser que ele não esteja salvando no momento da movimentação.

---

## Resposta #2 ✅ RESPOSTA ACEITA

**Patrick Cavalcante Moraes** (@Patrick_Cavalcante) — 08/03/2022, 15:06

Obrigado pela apoio, porém ele mandava uma valor muito grande que não conseguia salvar no dataset.

A solução foi passar essa informação em um background mesmo, porém precisei criar a função:

```auto
function load() {
document.body.style.background = "url("+$("#imageCheck").val()+")no-repeat left 950px top 1450px";
}
window.onload = load;
```

---
