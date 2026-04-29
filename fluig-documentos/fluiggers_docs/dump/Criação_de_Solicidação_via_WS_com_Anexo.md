# Criação de Solicidação via WS com Anexo

> **Fonte:** [https://fluiggers.com.br/t/criacao-de-solicidacao-via-ws-com-anexo/407](https://fluiggers.com.br/t/criacao-de-solicidacao-via-ws-com-anexo/407)
> **Categoria:** BPM
> **Criado em:** 30/04/2021, 10:56
> **Visualizações:** 593 | **Likes:** 2 | **Respostas:** 3

---

## Pergunta original

**Romulo Pereira** (@romuloccomp) — 30/04/2021, 10:56

Olá pessoal!

Vocês tem um exemplo de Criação de Solicidação usando o end-point startProcess do Webservice SOAP, com anexo inline ?

Só consegui criar via CID e Cache.

---

## Resposta #1

**Sérgio Machado** (@sergio.machado) — 30/04/2021, 11:43

Eu já consegui usando o arquivo convertido para base64, é isso que você quis dizer?

---

## Resposta #2

**Romulo Pereira** (@romuloccomp) — 30/04/2021, 13:31

A base64 é uma forma inline de envio.
O envio de anexo via soap costuma ser MTOM, MIME ou inline.
Por **MIME**, consegui simular pelo SoapUI, incluindo o cid e o arquivo como cache, só que a implementação é bem chata de fazer.

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Sérgio Machado** (@sergio.machado) — 30/04/2021, 14:53 | ❤️ 1

```
<attachments>
       <item>
         <attachments>
           <attach>false</attach>
		    <fileName>solicitacaoPgt_v1.pdf</fileName>
		    <filecontent>ARQUIVOBASE64<filecontent>
		 <principal>false</principal>
         </attachments>
         <description>solicitacaoPgt_v1</description>
       </item>
 </attachments>
```

Saquei, veja se esse exemplo te atende

---

## Resposta #4

**Romulo Pereira** (@romuloccomp) — 30/04/2021, 15:05 | ❤️ 1

Atendeu sim. Obrigado pela ajudar [@sergio.machado](/u/sergio.machado)

---

## Resposta #5

**system** (@system) — 01/05/2021, 07:06

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
