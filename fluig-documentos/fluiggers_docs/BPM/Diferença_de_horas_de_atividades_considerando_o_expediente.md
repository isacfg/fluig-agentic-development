# Diferença de horas de atividades considerando o expediente

> **Fonte:** [https://fluiggers.com.br/t/diferenca-de-horas-de-atividades-considerando-o-expediente/1981](https://fluiggers.com.br/t/diferenca-de-horas-de-atividades-considerando-o-expediente/1981)
> **Categoria:** BPM
> **Tags:** `fluigapi`
> **Criado em:** 20/06/2023, 21:15
> **Visualizações:** 421 | **Likes:** 2 | **Respostas:** 3

---

## Pergunta original

**Igor Davanço** (@igordavanco) — 20/06/2023, 21:15

Olá,

Estou calculando o tempo de resposta e o tempo de máquina parada de uma determinada solicitação (Ordem de Manutenção), o resultado está saindo em horas, porém não é considerado o expediente. Existe alguma forma de realizar esses cálculos utilizando o expediente cadastrado no Fluig? Caso alguém já tenha implementado essa funcionalidade, poderiam me mostrar algum exemplo?

Obrigado.

---

## Resposta #1

**Daniel Sales** (@Daniel_Sales) — 20/06/2023, 21:17 | ❤️ 1

Boa noite existe sim se vc usar o hAPI tem os metodos para calcular este tempo.
[https://tdn.totvs.com/display/public/fluig/hAPI](https://tdn.totvs.com/display/public/fluig/hAPI)

---

## Resposta #2

**Igor Davanço** (@igordavanco) — 21/06/2023, 08:29

Daniel, bom dia!

Obrigado pela resposta. Eu vi que existem dois métodos hAPI para o cálculo de prazos, sendo eles calculateDeadLineHours e calculateDeadLineTime, porém meu problema é o seguinte, por exemplo eu estou calculando o tempo de resposta de determinada solicitação (data e hora em que eu saí de determinada atividade subtraído da data e hora inicial da solicitação) e meu retorno está sendo em horas, mas esse total de horas não está levando em consideração o expediente, imagine que o colaborador assumiu a atividade na sexta, porém ele só finalizou na segunda, meu total de horas irá considerar todas as horas do final de semana. Já teve essa demanda de calcular o tempo de execução de determinada atividade?

---

## Resposta #3

**Daniel Sales** (@Daniel_Sales) — 21/06/2023, 08:39 | ❤️ 1

Sim o proprio fluig ja faz esse cauculo.

![image](https://fluiggers.com.br/uploads/default/original/1X/48916935902b5cf2374a3f91c53575f32eda4973.png)

---

## Resposta #4

**Igor Davanço** (@igordavanco) — 21/06/2023, 09:20

Daniel, é que esses métodos irão me retornar o prazo de uma atividade, porém o que eu preciso é o tempo de execução. Por exemplo, eu tenho a atividade A e a atividade B, preciso saber o tempo total que o usuário levou para executar essas duas atividades, porém levando em consideração o expediente. Eu já tenho o total de horas, imagine que o usuário levou 20h para executar essas duas atividades, mas eu teria que descontar as horas do expediente. Entendeu?

---

## Resposta #5 ✅ RESPOSTA ACEITA

**Daniel Sales** (@Daniel_Sales) — 21/06/2023, 09:24

O fluig ja guarda esse calculo em uma tabela a tar\_proces ou a history\_process ai vc tem que testar se esse caculo levou em conta o expediente.

---

## Resposta #6

**Igor Davanço** (@igordavanco) — 23/06/2023, 08:05

Daniel, bom dia!

Acho que a tabela tar\_proces irá atender minhas necessidades, obrigado pelo apoio e pelas informações.

---

## Resposta #7

**Daniel Sales** (@Daniel_Sales) — 23/06/2023, 08:14

Que bom,
se precisar de algo mais é so falar

---
