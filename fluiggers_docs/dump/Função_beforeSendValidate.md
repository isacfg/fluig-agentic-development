# Função beforeSendValidate

> **Fonte:** [https://fluiggers.com.br/t/funcao-beforesendvalidate/3215](https://fluiggers.com.br/t/funcao-beforesendvalidate/3215)
> **Categoria:** Formulários
> **Tags:** `form`, `processo`
> **Criado em:** 21/03/2025, 09:54
> **Visualizações:** 132 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Uilian Fragallo** (@fragallo) — 21/03/2025, 09:54

Estou trabalho em um processo desenvolvido por outro consultor, no qual foi usado Mustache para montar elementos de uma tabela Pai-Filho. Ou seja, quando o formulário é enviado, uma função percorre todos os dados desse template e grava numa tabela padrão do Fluig, e quando a tela é carregada, ele faz o processo inverso.

Até aí, tudo bem, porque está funcionando. Quando a pessoa envia o formulário, dentro da da função *beforeSendValidate* uma função é chamada para armazenar os dados na tabela pai-filho padrão do Fluig, mas quando um formulário é salvo ou transferido, essa função não é chamada.

Minhas dúvidas são:

-   Existe alguma função que é chamada ao Salvar ou Transferir a solicitação?
-   Há outra forma de chamar essa função para salvar os dados, sem gambiarra?

---

## Resposta #1

**Pablo Valle** (@pablooav) — 03/04/2025, 16:48

Você pode preencher esta tabela no momento que os dados forem manipulados no mustache, se for um crud por exemplo, quando inserir uma nova linha, vc por trás também insere no pai-filho, mesma coisa pra remover, etc. Dessa forma sua pai-filha oculta vai ser atualizada em “tempo real” sem ter a necessidade de rodar o *beforeSendValidate*. Dessa forma vc não precisaria se preocupar se o usuário ta salvando, transferindo ou enviando, funcionará pra todos casos.

---

## Resposta #2

**Uilian Fragallo** (@fragallo) — 16/04/2025, 13:37

Obrigado pelo retorno [@pablooav](/u/pablooav) . Optamos por remover o mustache e usar o padrão do Fluig, para tabela pai-filho. Resolveu nosso problema!

---
