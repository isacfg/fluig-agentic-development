# Criando um input na DOM via createElement

> **Fonte:** [https://fluiggers.com.br/t/criando-um-input-na-dom-via-createelement/378](https://fluiggers.com.br/t/criando-um-input-na-dom-via-createelement/378)
> **Categoria:** Formulários
> **Criado em:** 16/04/2021, 14:22
> **Visualizações:** 587 | **Likes:** 2 | **Respostas:** 0

---

## Pergunta original

**Daniel ** (@daniel_fmartins) — 16/04/2021, 14:22

Quando declaramos um input em um formulário, quando o mesmo é salvo automaticamente o valor do campo será salvo no dataset. Eu estou inserindo um input no meu formulário via createElement na DOM, porém quando salvo o formulário, a informação não é gravada no dataset. Preciso fazer algum tratamento adicional desses casos em que crio o elemento ou deveria funcionar normalmente?

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 16/04/2021, 16:54 | ❤️ 2

Quando você exporta um formulário para o Fluig ele cria os campos em uma tabela de acordo com os inputs declarados no HTML.

Se você cria um input por JS, que não tinha sido declarado no HTML, o Fluig não vai salvar e ainda pode dar algum erro.

O único suporte do Fluig para campos criados dinamicamente é utilizando a técnica Pai Filho.

Na documentação você consegue ver como ela funciona (que nada mais é do que uma tabela com uma estrutura especial).

[https://tdn.totvs.com/pages/releaseview.action?pageId=75270483](https://tdn.totvs.com/pages/releaseview.action?pageId=75270483)

---

## Resposta #2

**system** (@system) — 19/04/2021, 09:12

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
