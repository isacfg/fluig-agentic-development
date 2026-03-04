# Problema no app após a atualização de segurança no Lake

> **Fonte:** [https://fluiggers.com.br/t/problema-no-app-apos-a-atualizacao-de-seguranca-no-lake/208](https://fluiggers.com.br/t/problema-no-app-apos-a-atualizacao-de-seguranca-no-lake/208)
> **Categoria:** Mobile
> **Tags:** `mobile`, `app`, `oauth`
> **Criado em:** 23/03/2021, 17:34
> **Visualizações:** 1204 | **Likes:** 3 | **Respostas:** 3

---

## Pergunta original

**Daniel Cabral Santos** (@daniel.cabral) — 23/03/2021, 17:34 | ❤️ 1

Galera, alguém ficou sem conseguir usar o app após aquela atualização emergencial de segurança?

O app loga mas não faz mais nada…qualquer link gera o erro:

![print app](https://fluiggers.com.br/uploads/default/optimized/1X/db99c69bc4a6e96abdd36bd6fa83629f367db8b1_2_230x500.png)

E no server.log:

```auto
signature_invalid: net.oauth.OAuthProblemException: signature_invalid
oauth_problem: signature_invalid
oauth_signature: MiQn5mHdUUCrFnMvJ4sToYdsNEU=
oauth_signature_base_string: GET&http%3A%2F%2Ffluig.(editado).com.br%2Fauthentication%2Fapi%2Fv1%2Flogin%2Fmobile&oauth_consumer_key%3D663fe6cc-8914-4853-86c1-e723b5c1b4f7%26oauth_nonce%3D8E4CFBC3BD8C459DB235F2691CF2A2F8%26oauth_signature_method%3DHMAC-SHA1%26oauth_timestamp%3D1616520918%26oauth_token%3Dd4dcd84e-899c-4635-acf6-f493d5750fde%26oauth_version%3D1.0
oauth_signature_method: HMAC-SHA1
```

Pensei ter ligação com o tópico [Falha de login no Approval com AD Integrado](https://fluiggers.com.br/t/falha-de-login-no-approval-com-ad-integrado/88/2) mas o domain.xml já não possui tal trecho.

Alguém pegou isso?

Valeu, galera!

---

## Resposta #1

**Igor Rodrigues** (@fluigor.com.br) — 24/03/2021, 14:25

Estou utilizando o APP full em um projeto ja com a 1.7.0 e não tenho problemas, seria links externos.

---

## Resposta #2

**Daniel Cabral Santos** (@daniel.cabral) — 24/03/2021, 14:37

Externo ou interno, o problema acontece de todo jeito…

---

## Resposta #3

**Daniel Cabral Santos** (@daniel.cabral) — 24/03/2021, 15:07

Tem chamado na TOTVS aberto, posto aqui o desfecho!

---

## Resposta #4

**Bruno Araujo** (@brunotda) — 19/08/2021, 12:24

[@daniel.cabral](/u/daniel.cabral) Conseguiu resolver este problema? Não encontro muitas informações sobre este item além desta sua publicação.

---

## Resposta #5

**Daniel Cabral Santos** (@daniel.cabral) — 19/08/2021, 15:15

Cara, nada ainda…o chamado foi pro limbo. Abriu chamado aí também?

---

## Resposta #6

**Bruno Araujo** (@brunotda) — 24/08/2021, 10:55

Não abri chamado ainda, mas acredito que vai ser necessário.
Não encontrei notas de atualização mencionando impacto e os arquivos estão configurados corretamente.

---

## Resposta #7

**Daniel Cabral Santos** (@daniel.cabral) — 07/03/2022, 14:38

[@brunotda](/u/brunotda) , por acaso resolveu este problema? Aqui ele persiste, mesmo após duas atualizações de versão.

---

## Resposta #8

**Allan Reichert** (@allan.reichert) — 07/03/2022, 15:23

Olá,

Tive problema a um tempo atrás no mobile com https, só autenticava via http. Reinstalei o certificado pelo WCMadmin e resolveu.

---

## Resposta #9

**Igor Rodrigues** (@fluigor.com.br) — 20/07/2022, 13:31 | ❤️ 2

[@daniel.cabral](/u/daniel.cabral)

Importante ressaltar a importância do pfx configurado no WCMadmin conter o bundle com os certificados intermediarios para o mobile, recentemente tive muitos problemas com componentes que utilizavam chamadas pelo mobile, e tive que atualizar o certificado intermediario.

o erro que eu tinha é o mesmo apresentado no seu print

att

---
