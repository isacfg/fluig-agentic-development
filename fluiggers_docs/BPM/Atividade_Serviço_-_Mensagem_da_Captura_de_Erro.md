# Atividade Serviço - Mensagem da Captura de Erro

> **Fonte:** [https://fluiggers.com.br/t/atividade-servico-mensagem-da-captura-de-erro/372](https://fluiggers.com.br/t/atividade-servico-mensagem-da-captura-de-erro/372)
> **Categoria:** BPM
> **Tags:** `servicetask`, `atividade-serviço`
> **Criado em:** 15/04/2021, 12:45
> **Visualizações:** 1266 | **Likes:** 4 | **Respostas:** 2

---

## Pergunta original

**Bruno Gasparetto** (@Bruno_Gasparetto) — 15/04/2021, 12:45

Olá,

Estou adaptando um Workflow, que utiliza BeforeStateEntry na atividade Fim pra fazer integração com um serviço externo, para usar uma atividade do tipo Serviço e conseguir capturar os erros possíveis nessa integração.

```javascript
function servicetask112(attempt, message) {}
```

Vi que eu recebo a última mensagem de erro que disparei com throw e estava querendo usar essa mensagem para usar na nova tentativa e assim garantir a integração.

A Integração consiste em criar o processo no serviço externo e então enviar vários anexos.

Em determinado momento eu disparo a mensagem: **Erro ao enviar os anexos: parecer.docx**

Quando vou analisar a mensagem dentro do script da atividade ela está como: **Erro ao enviar os anexos: parecer.docx (<Unknown source>#250)**

Aí me surgiram duas dúvidas:

1.  Como é a primeira vez que estou utilizando esse tipo de atividade gostaria de saber se é normal o Fluig adicionar esse Unknow no final de todas as mensagens e eu ser obrigado a fazer um replace no texto.

2.  se eu usar `hAPI.setCardValue` pra salvar um dado no formulário e depois disparar uma exceção o valor não será salvo no formulário? Percebi que nos processos que disparei erro o protocolo que salvo com `hAPI.setCardValue` não ficou salvo, mesmo atribuindo o valor antes do `throw`.

---

## Resposta #1

**Willian Laynes** (@Willian_Laynes) — 15/04/2021, 14:26 | ❤️ 1

RESP 1. Quando cai no throw, acho que mostra sempre Unknown, mas teria que testar para garantir
RESP 2. Quando o throw é disparado, ele cancela as ações de gravação de campos, Por isso o hAPI.setCardValue não salva.

---

## Resposta #2

**Bruno Gasparetto** (@Bruno_Gasparetto) — 15/04/2021, 14:29 | ❤️ 1

[@Willian\_Laynes](/u/willian_laynes) , obrigado.

Com relação à primeira dúvida eu fiz um replace com REGEX e resolveu.

Isso de não salvar os dados no throw complicou a vida. Mas, em teoria, o que dá pra fazer é criar 2 atividades serviços. Na primeira eu faria a integração para criar o processo e na segunda a parte de enviar os anexos. Aí consigo tratar melhor o erro.

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Willian Laynes** (@Willian_Laynes) — 15/04/2021, 14:47 | ❤️ 2

Você pode também sempre retornar “true” e na proxíma atividade colocar uma condição que retorna para a atividade de serviço novamente, o controle da condição você pode fazer por um campo.

Ex.:
hAPI.setCardValue(“CONDICAO”,“retorna”) //retorna para o serviço;
hAPI.setCardValue(“CONDICAO”,“concluida”) //continua o processo;

Dessa forma você pode gravar os erros e mostrar em tela se precisar.
![image](https://fluiggers.com.br/uploads/default/original/1X/3b8be9475d065bab968f01ad5cb7b4c9bb1208ea.png)

---

## Resposta #4

**system** (@system) — 16/04/2021, 06:47

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
