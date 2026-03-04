# Manipular Campos Antes de movimentar Tarefa

> **Fonte:** [https://fluiggers.com.br/t/manipular-campos-antes-de-movimentar-tarefa/3159](https://fluiggers.com.br/t/manipular-campos-antes-de-movimentar-tarefa/3159)
> **Categoria:** Ambiente Fluig
> **Criado em:** 13/02/2025, 09:40
> **Visualizações:** 57 | **Likes:** 1 | **Respostas:** 2

---

## Pergunta original

**Arthur Moreira** (@Arthur_Moreira) — 13/02/2025, 09:40

Pessoal, no fluig eu tenho um displayfields que modifica a visibilidade de alguns inputs e paineis conforme a atividade do processo.

Porém a visibilidade so e aplicada quando meu usuário clica para “movimentar a tarefa”.

Gostaria de saber se há como o fluig reconhecer e manipular a visibilidade dos campos no momento em que o formulário fica parado (apenas para visualização, sem o usuário ou eu acionar o movimentar tarefa)

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 14/02/2025, 09:11

Tá bem estranho isso, pois o evento `displayFields` sempre ocorre na abertura do formulário, indiferente se está no modo leitura ou edição.

---

## Resposta #2

**Daniel Sales** (@Daniel_Sales) — 14/02/2025, 11:28 | ❤️ 1

Lembra que em modo visualização a vezes o input vira um span ai pode dar ruim

---

## Resposta #3

**Arthur Moreira** (@Arthur_Moreira) — 18/02/2025, 14:07

Então, já apliquei todas as possibilidades de manipulação. Tudo só funciona ao movimentar a tarefa

---

## Resposta #4

**Arthur Moreira** (@Arthur_Moreira) — 18/02/2025, 14:09

Acredito que isso seja uma possibilidade, meus input’s ficam como span quando meu form está em visualização.
Não sei como trataria eles nesse caso

---
