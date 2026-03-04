# Notificacion Email del proceso no funciona

> **Fonte:** [https://fluiggers.com.br/t/notificacion-email-del-proceso-no-funciona/769](https://fluiggers.com.br/t/notificacion-email-del-proceso-no-funciona/769)
> **Categoria:** BPM
> **Criado em:** 10/11/2021, 08:45
> **Visualizações:** 990 | **Likes:** 0 | **Respostas:** 4

---

## Pergunta original

**Ulises Magario** (@Agustin_Welschen) — 10/11/2021, 08:45

Olá, bom dia, estou com um processo onde não envio os emails notificando o andamento da solicitação. Na guia Atividade / Monitorar / Notificar o responsável, ele é ativado. Nas configurações de notificação, a opção de e-mail está ativada, qual poderia ser o erro? Obrigado

---

## Resposta #1

**Allan Reichert** (@allan.reichert) — 11/11/2021, 16:20

Olá, é só um processo especifico que não está enviando notificações? Pois pode ser configuração do envio de email.

---

## Resposta #2

**Ulises Magario** (@Agustin_Welschen) — 12/11/2021, 08:45

Olá, bom dia, obrigado por responder. Existem 3 contas (que estão relacionadas ao Identity) que só participam desse processo, e essas 3 pessoas não recebem os e-mails

---

## Resposta #3

**Allan Reichert** (@allan.reichert) — 16/11/2021, 08:17

Até onde conheço a ferramenta, entendo que seja algo a ver com configuração da conta de usuário. Se apenas estes usuários não recebem email verifica a conta no Fluig em “Painel de controle” → “Pessoas” → “Usuários” se estiver correto e vinculado ao Identity deverá aparecer uma informação abaixo do campo de Email.

![image](https://fluiggers.com.br/uploads/default/original/1X/b8f8a3a7c973ed8bb65f0a9debb52d9182eb7a37.png)

---

## Resposta #4

**Ulises Magario** (@Agustin_Welschen) — 16/11/2021, 08:50

Olá, bom dia. Se eles estiverem vinculados à identidade dessa forma. Suponho que haja um problema com o Identity, já que o primeiro não me deixou fazer login depois de habilitados, o que resolveu ao associá-los a este grupo que apareceu no Identity. Além disso agora descobri que por um tempo ninguém recebeu notificações por e-mail então é um problema geral mas não sei como resolvê-lo

![image](https://fluiggers.com.br/uploads/default/optimized/1X/a06022d808012e833132f1033d05b4139c8b1a0a_2_517x291.png)

---

## Resposta #5 ✅ RESPOSTA ACEITA

**Allan Reichert** (@allan.reichert) — 17/11/2021, 14:41

olá, também utilizamos os usuários no grupo “Everyone”.

verifica se as configurações de email estão ok pelo WCM. Você utilizará uma URL semelhante a:

**http://\[endereco\]:\[porta\]/portal/home?wcmadmin=true** com o usuário **wcmadmin**

Acesse **Configurações de sistema → Parâmetros da plataforma** e verifique as configurações de email

![image](https://fluiggers.com.br/uploads/default/optimized/1X/84f3d2abd16a6ff60322d2a59247cfa127e1d1c8_2_689x472.png)

---

## Resposta #6

**Ulises Magario** (@Agustin_Welschen) — 19/11/2021, 08:10

Olá, bom dia, obrigado pela ajuda, consegui resolver, não tinham configurado nenhuma conta que está em uso e percebi indo lá, obrigado a todos

---
