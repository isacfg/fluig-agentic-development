# Listar NF x itens em formulario

> **Fonte:** [https://fluiggers.com.br/t/listar-nf-x-itens-em-formulario/746](https://fluiggers.com.br/t/listar-nf-x-itens-em-formulario/746)
> **Categoria:** Formulários
> **Criado em:** 27/10/2021, 22:24
> **Visualizações:** 306 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**JM Junior** (@JM_Junior) — 27/10/2021, 22:24

Boa noite pessoal.

Sou iniciante no fluig e gostaria de uma ajuda.

Tenho um formulario onde através de um campo zoom, pesquiso uma NF e trago os nomes do cliente, cnpj, vendedor de um dataset customizado… Porém, preciso trazer tbm os produtos desta NF e é justamente ai que estou parado. Preciso listar os produtos, que pode ser um ou varios itens. Alguém teria um exemplo de como posso fazer isso ?

Agradeço o apoio.

---

## Resposta #1

**Victor Castro** (@victorcastro) — 28/10/2021, 08:27

Mas o que você vai precisar fazer com a informação dos produtos?

Se você vai precisar usar isso depois, não sei se é a melhor opção, mas o que eu faria é ter uma tabela pai x filho e adicionar um filho pra cada produto. Dependendo da quantidade de produtos também não sei como vai ser a performance disso.

Agora se você vai precisar somente mostrar na tela, você pode guardar as informações dos produtos todas concatenadas em um campo hidden e mostrar o valor do campo numa div, algo assim, formatando um visual mais amigável.

São só ideias. Talvez tenha uma forma mais fácil/mais performática de fazer rs

---

## Resposta #2

**JM Junior** (@JM_Junior) — 28/10/2021, 08:31

Eh isso mesmo Victor. Através da pesquisa trago os dados da NF e a relação de produtos da mesma, apenas para apresentação. Eh um fluxo de Sac.

---
