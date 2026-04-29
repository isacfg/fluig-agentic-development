# Setar Horas na atividade, respeitando o expediente

> **Fonte:** [https://fluiggers.com.br/t/setar-horas-na-atividade-respeitando-o-expediente/412](https://fluiggers.com.br/t/setar-horas-na-atividade-respeitando-o-expediente/412)
> **Categoria:** BPM
> **Tags:** `fluigapi`
> **Criado em:** 30/04/2021, 13:56
> **Visualizações:** 1265 | **Likes:** 1 | **Respostas:** 1

---

## Pergunta original

**Karina Pinheiro** (@Kapinheiro) — 30/04/2021, 13:56 | ❤️ 1

Olá,

Estou tentando parametrizar o horário de uma determinada atividade, através de um “afterTaskCreate” - é setado o valor correto, mas o mesmo não respeita o Expediente da atividade.

> Segue Evento “afterTaskCreate”

> function afterTaskCreate(colleagueId){
> var numEmpresa = getValue(“WKCompany”)
> var numProcesso = getValue(“WKNumProces”);
> var nrProxAtividade = getValue(“WKNextState”);
> var data = new Date();
> var complexidade = hAPI.getCardValue(“selectComplexidade”)
> var complexidade2 = hAPI.getCardValue(“selectComplexidade2”)
> var prazoHoras = 0;
> if (nrProxAtividade==“13”){
> if(complexidade == “Alta” || complexidade2 == “Alta”){
> prazoHoras = 24
> }
> if(complexidade == “Media” || complexidade2 == “Media”){
> prazoHoras = 16
> }
> if(complexidade == “Baixa” || complexidade2 == “Baixa”){
> prazoHoras = 12
> }
> //Define o dia correto (ao somar as horas)
> data.setHours(data.getHours()+ prazoHoras);
> //Define o horario em segundos de acordo com as horas e minutos
> var horarioSegundos = data.getHours() \* 60 \* 60;
> horarioSegundos = horarioSegundos + ((data.getMinutes()) \* 60);
> hAPI.setDueDate(numProcesso, hAPI.getActualThread(numEmpresa, numProcesso, nrProxAtividade), colleagueId, data, horarioSegundos);
> }
> }

O que devemos fazer para que ele sete a hora, mas não ignore o Expediente?

---

## Resposta #1

**Romulo Pereira** (@romuloccomp) — 30/04/2021, 15:25

Você alterou no processo o expediente que quer?

![image](https://fluiggers.com.br/uploads/default/original/1X/0313750b989dcd0a914b9e1765bb9b2cf5c42c60.png)

---

## Resposta #2

**Karina Pinheiro** (@Kapinheiro) — 30/04/2021, 15:28

Sim, está setado o Expediente corretamente!

![Expediente](https://fluiggers.com.br/uploads/default/optimized/1X/8ebe65a63a189441512cfd2e25d0e04e602ec2b7_2_690x156.jpeg)

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Romulo Pereira** (@romuloccomp) — 30/04/2021, 15:35

Um caminho é usar a função **calculateDeadLineHours(data, segundos, prazo, periodId)** aí voce calcula o tempo e atribuí conforme o retorno.

Obs: **periodId** = código de expediente.

[https://tdn.totvs.com/display/public/fluig/hAPI](https://tdn.totvs.com/display/public/fluig/hAPI)

---

## Resposta #4

**system** (@system) — 03/05/2021, 11:45

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
