# Prazo de atividade

> **Fonte:** [https://fluiggers.com.br/t/prazo-de-atividade/3512](https://fluiggers.com.br/t/prazo-de-atividade/3512)
> **Categoria:** Formulários
> **Criado em:** 01/12/2025, 12:26
> **Visualizações:** 26 | **Likes:** 2 | **Respostas:** 3

---

## Pergunta original

**João Paulo Machado Benevides** (@Joao_Paulo_Machado_B) — 01/12/2025, 12:26

Eu consigo definir uma prazo de conclusão que se calcularia no valor do campo de formulário + x Horas ?
Por exemplo, ao iniciar uma solicitação o usuário informa a data de um exame. Em outra atividade mais adiante no fluxo, o prazo dela ser igual a data do exame + 24 horas
É possível ? Como é feito ?

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Daniel Cabral Santos** (@daniel.cabral) — 01/12/2025, 16:03

Em um script de processo, você pode usar hAPI.setDueDate(), tornando a definição de prazo dinâmica:

[hAPI - TOTVS Fluig - TDN](https://tdn-homolog.totvs.com/display/public/fluig/hAPI)

---

## Resposta #2

**Igor Rodrigues** (@fluigor.com.br) — 02/12/2025, 09:14 | ❤️ 1

Olá, vc tbm pode utilizar a atribuição de prazo da atividade por campo de formulário e apontar o seu campo de data, o prazo vai ser o do dia apresentado no calendário até as 23:59:59.
Porém vinha evento de processo como informado pelo colega Daniel, você tem mais controle sobre como tratar essa data e adicionar periodos para frente.

---

## Resposta #3

**João Paulo Machado Benevides** (@Joao_Paulo_Machado_B) — 02/12/2025, 09:58

Então, no caso, em um campo de formulário o solicitante por exemplo marcaria dia 02/12, o prazo da atividade seria 48 horas após essa data informada no campo, no caso seria até 04/12

---

## Resposta #4

**Bruno Gasparetto** (@Bruno_Gasparetto) — 02/12/2025, 10:08

Se não me engano no campo de formulário dá pra informar a quantidade de horas pra realizar a atividade (igual fica no Eclipse). Por padrão o Fluig vai usar o seu cadastro de expediente pra fazer o cálculo do dia/hora final. O bom é que assim você pode mudar o valor desse campo de acordo com a escolha da data.

Já usando a `hAPI.setDueDate` em evento de processo você pode definir a data/hora que quiser. Quando usei esse método eu fiz no evento `afterTaskCreate` e deu certo, mas não sei se tem algum evento recomendado pra isso.

---

## Resposta #5

**Bruno Gasparetto** (@Bruno_Gasparetto) — 02/12/2025, 10:09 | ❤️ 1

Interessante, não sabia que permitia o dia, pensei que era só a quantidade de horas também.

---
