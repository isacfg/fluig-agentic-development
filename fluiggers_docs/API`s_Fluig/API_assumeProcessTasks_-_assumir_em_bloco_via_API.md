# API assumeProcessTasks - assumir em bloco via API

> **Fonte:** [https://fluiggers.com.br/t/api-assumeprocesstasks-assumir-em-bloco-via-api/1530](https://fluiggers.com.br/t/api-assumeprocesstasks-assumir-em-bloco-via-api/1530)
> **Categoria:** API`s Fluig
> **Tags:** `bloco`, `assumir-processo`
> **Criado em:** 06/12/2022, 12:02
> **Visualizações:** 540 | **Likes:** 5 | **Respostas:** 3

---

## Pergunta original

**Daniel Cabral Santos** (@daniel.cabral) — 06/12/2022, 12:02

Salve, galera!

Alguém aí tem um exemplo do consumo da api: /api/public/2.0/workflows/assumeProcessTasks que funcione? Não encontrei por ai e meu payload não está funcionando:

```auto
{"assumeProcessTaskList":[{"colleagueId":"20498","processInstanceId":81994},{"colleagueId":"20498","processInstanceId":82002}]}
```

Segundo a documentação eu também deveria informar ‘movementSequence’, mas não possuo essa informação no momento.

Meu retorno desse payload é:

```auto
{"content":{"successCount":0,"failCount":2,"assumeProcessTaskResults":[{"status":"ERROR","message":"Histórico do processo não encontrado.","errorCode":"BPMProcessHistoryNotFoundException","colleagueId":"20498","processInstanceId":81994,"movementSequence":0,"tenantId":1,"complement":null},{"status":"ERROR","message":"Histórico do processo não encontrado.","errorCode":"BPMProcessHistoryNotFoundException","colleagueId":"20498","processInstanceId":82002,"movementSequence":0,"tenantId":1,"complement":null}]},"message":{"message":"OK","detail":"OK","type":"INFO","errorCode":null}}
```

a mensagem ‘Histórico do processo não encontrado.’ para todas as tentativas.

Valeu, galera!

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Daniel Cabral Santos** (@daniel.cabral) — 06/12/2022, 17:00 | ❤️ 3

Solução: fiz via SOAP :slight_smile:

---

## Resposta #2

**Bruno Gasparetto** (@Bruno_Gasparetto) — 07/12/2022, 09:15 | ❤️ 1

Eu fujo da API REST do Fluig, hehehe. Simplesmente não consigo achar boa, ainda mais com a falta de material comparando com a SOAP. São raros os casos que a usei.

---

## Resposta #3

**Daniel Cabral Santos** (@daniel.cabral) — 07/12/2022, 11:56

Queria usar, queria mesmo…mas a documentação está incompleta e faltam algumas coisas ainda. A SOAP é bem madura e resolve o que precisa. Como está rodando dentro de um dataset, não há preocupações com segurança :slight_smile:

---

## Resposta #4

**Bruno Gasparetto** (@Bruno_Gasparetto) — 07/12/2022, 18:16 | ❤️ 1

Pra mim seria maravilhoso se a TOTVS investisse nos métodos do [SDK](https://fluig.totvs.com/api/sdk/) pra conseguirmos usar os métodos de back-end sem precisar ficar usando o webservice

---

## Resposta #5

**pedro** (@pedro) — 24/10/2023, 11:18

Oie, poderia me mostrar como fez?

---
