# Vizualizar arquivo ECM Fluig

> **Fonte:** [https://fluiggers.com.br/t/vizualizar-arquivo-ecm-fluig/1063](https://fluiggers.com.br/t/vizualizar-arquivo-ecm-fluig/1063)
> **Categoria:** ECM / GED
> **Criado em:** 02/05/2022, 09:06
> **Visualizações:** 649 | **Likes:** 0 | **Respostas:** 6

---

## Pergunta original

**Daniel ** (@daniel_fmartins) — 02/05/2022, 09:06

Olá,

Quando eu realizo o upload de um arquivo e após isso clico no mesmo para visualizar, ele aparece somente as páginas em branco.

Pelo que percebi até o momento, isso ocorre com documentos que foram digitalizados.

![image](https://fluiggers.com.br/uploads/default/optimized/1X/93b47b68849dd76ec0a3dd1c3f8f8e196a11142d_2_690x274.png)

Quando eu faço download desse mesmo arquivo para o meu computador, o arquivo é exibido corretamente.

Alguém já passou por isso?

---

## Resposta #1

**Igor Rodrigues** (@fluigor.com.br) — 02/05/2022, 11:00

Qual o erro no log ao tentar renderizar o arquivo ?

---

## Resposta #2

**Daniel ** (@daniel_fmartins) — 02/05/2022, 11:51

```auto
2022-05-02 11:48:47,919 INFO [com.datasul.technology.webdesk.dm.business.DocumentBO] (default task-1354) getDocumentInfo - path - /repofluig01/public/4525/1000/pdf24_merged-1.pdf
2022-05-02 11:48:47,920 INFO [com.datasul.technology.webdesk.foundation.business.DocumentCyclicalRedundancyCheckCalculator] (default task-1354) Calculando o CRC /repofluig01/public/4525/1000/pdf24_merged-1.pdf
2022-05-02 11:48:47,932 INFO [com.datasul.technology.webdesk.foundation.business.DocumentCyclicalRedundancyCheckCalculator] (default task-1354) CRC Calculado 4105667919
2022-05-02 11:48:48,524 INFO [com.totvs.technology.ecm.accusoft.viewer.DocumentViewerUrlServlet] (default task-1352) oldViewer: false
2022-05-02 11:48:48,525 INFO [com.totvs.technology.ecm.accusoft.viewer.DocumentViewerUrlServlet] (default task-1352) internalVisualizerServer: https://api.accusoft.com.br
2022-05-02 11:48:48,525 INFO [com.totvs.technology.ecm.accusoft.viewer.DocumentViewerUrlServlet] (default task-1352) allowsHttpForInternalVisualizerServer: false
``´
Foi o que consegui identificar.
```

---

## Resposta #3

**Igor Rodrigues** (@fluigor.com.br) — 02/05/2022, 12:03

[@daniel\_fmartins](/u/daniel_fmartins)

me encaminha este arquivo [igorskater@gmail.com](mailto:igorskater@gmail.com)

---

## Resposta #4

**Daniel ** (@daniel_fmartins) — 02/05/2022, 14:27

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/fluigor.com.br/48/1817_2.png) fluigor.com.br:
>
> > [igorskater@gmail.com](mailto:igorskater@gmail.com)

Arquivo enviado para o email.

---

## Resposta #5

**matheus** (@matheus) — 05/04/2024, 15:37

qual foi a solução???

---

## Resposta #6

**Igor Rodrigues** (@fluigor.com.br) — 23/09/2024, 22:20

a api de visualização foi atualizada!

---

## Resposta #7

**Rodrigo Miranda** (@Rodrigo_Miranda) — 07/07/2025, 16:02

tem o parametro atualizado?

---
