# Metodo saveAndSendTaskByReplacement

> **Fonte:** [https://fluiggers.com.br/t/metodo-saveandsendtaskbyreplacement/2789](https://fluiggers.com.br/t/metodo-saveandsendtaskbyreplacement/2789)
> **Categoria:** BPM
> **Tags:** `processo`
> **Criado em:** 16/05/2024, 15:03
> **Visualizações:** 133 | **Likes:** 0 | **Respostas:** 2

---

## Pergunta original

**Afonso Uliana Neto** (@Afonso) — 16/05/2024, 15:03

Boa tarde Pessoal. Alguem ja utilizou o metodo saveAndSendTaskByReplacement via Web Service? Pela documentação com este metodo eu consigo movimentar o processo com o usuario substituto ou seja o processo esta com o usuario A e estou movimentando o mesmo com o usuario B que é substituto do usuario A. se eu faço a movimentação pela central de tarefa da certo e tudo ok, porem preciso fazer esta movimentação via WS. estou passando no metodo o campo com o usuario que esta movimentando o processo e a tag tambem o mesmo usuario. Alguem consegue me ajudar??

![image](https://fluiggers.com.br/uploads/default/original/2X/6/6b40227255fc40cbb4d84d775ebece4514facd08.png)

---

## Resposta #1

**venturelli** (@venturelli) — 16/05/2024, 23:27

Este método tem 3 usuários na verdade. O usuário de autenticação (username), o usuário responsável pela tarefa (userId) e o usuário substituto (replacementId). Este último não aparece no seu print.

No seu caso, a tarefa está com o usuário afonso?

---

## Resposta #2

**Afonso Uliana Neto** (@Afonso) — 17/05/2024, 07:27

Bom dia [@venturelli](/u/venturelli) A tarefa esta com o usuario “Leonara” e estou tentando movimenta-la com o usuario substituto “Afonso” abaixo como tentei utilizar o metodo onde na tentativa 1 ocorre o erro reportado. e na tentativa 2 o processo é movimentado porem nao aparece que foi movimento pelo substituto e sim pelo proprio usuario.

1 tentativa
admin
afonso
leonara

2 tentativa
admin
leonara
afonso

![image](https://fluiggers.com.br/uploads/default/original/2X/3/31531c8ebd09ecacdc9c1b894dd577b0ef53657e.png)

![image](https://fluiggers.com.br/uploads/default/original/2X/e/e1de61fdc8cf7f461196c3a1c0ff1e8ed27c3f8d.png)

E o que eu preciso é que o processo seja realmente movimento como o substituo conforme imagem abaixo.

![image](https://fluiggers.com.br/uploads/default/original/2X/9/918d18d776abcce37678449e70f02267e71c5895.png)

---

## Resposta #3

**venturelli** (@venturelli) — 17/05/2024, 09:13

Só pra confirmar, manda o xml inteiro (ocultando a senha e o cardData, claro).

Porque na requisição do print tem o colleagueIds que é a lista de destinatários (onde consta a leonara). Só pra ter certeza que não tá havendo confusão com esse collecagueIds e o userId e replacementId

---

## Resposta #4

**Afonso Uliana Neto** (@Afonso) — 17/05/2024, 09:17

```auto
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.workflow.ecm.technology.totvs.com/">
   <soapenv:Header/>
   <soapenv:Body>
      <ws:saveAndSendTaskByReplacement>
         <username>admin</username>
         <password></password>
         <companyId>1</companyId>
         <processInstanceId>520592</processInstanceId>
         <choosedState>39</choosedState>
         <colleagueIds>
            <item>leonara.anacleto</item>
         </colleagueIds>
         <comments>tes</comments>
         <userId>leonara.anacleto</userId>
         <completeTask>true</completeTask>
         <attachments>
</attachments>
         <cardData>

         </cardData>
         <appointment>
</appointment>
         <managerMode>false</managerMode>
         <threadSequence>0</threadSequence>
         <replacementId>afonso.neto</replacementId>
      </ws:saveAndSendTaskByReplacement>
   </soapenv:Body>
</soapenv:Envelope>
```

---
