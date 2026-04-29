# Erro ao usar a função notifier.notify

> **Fonte:** [https://fluiggers.com.br/t/erro-ao-usar-a-funcao-notifier-notify/1919](https://fluiggers.com.br/t/erro-ao-usar-a-funcao-notifier-notify/1919)
> **Categoria:** BPM
> **Tags:** `bpm`, `dataset`
> **Criado em:** 15/05/2023, 20:44
> **Visualizações:** 450 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**Davi Souza** (@Davi_Souza) — 15/05/2023, 20:44

Olá pessoal!

estou com um problema para realizar o envio de e-mail quando utilizo a função notifier.notify é apresentado a seguinte mensagem descobri outra forma adicionando new java.util.Properties();
Tem alguma forma de utilizar a função notifier.notify e adicionar as Properties?

Falha desconhecida ao enviar email: : javax.mail.AuthenticationFailedException: 535-5.7.8 Username and Password not accepted. Learn more at
535 5.7.8 [https://support.google.com/mail/?p=BadCredentials](https://support.google.com/mail/?p=BadCredentials) z83-20020aca3356000000b0039466db554dsm4664570oiz.18 - gsmtp

---

## Resposta #1

**Sérgio Machado** (@sergio.machado) — 16/05/2023, 09:37

Houve um erro ao se autenticar, você realizou o teste de envio de e-mail entrando com o usuário **wcmadmin**?

---

## Resposta #2

**Davi Souza** (@Davi_Souza) — 16/05/2023, 22:27

No **wcmadmin** ele deu certo

---
