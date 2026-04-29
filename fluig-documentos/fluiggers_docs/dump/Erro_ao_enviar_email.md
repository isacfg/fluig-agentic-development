# Erro ao enviar email

> **Fonte:** [https://fluiggers.com.br/t/erro-ao-enviar-email/2697](https://fluiggers.com.br/t/erro-ao-enviar-email/2697)
> **Categoria:** Formulários
> **Tags:** `processo`
> **Criado em:** 04/04/2024, 11:07
> **Visualizações:** 109 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Catarina** (@CatarinaCamussi) — 04/04/2024, 11:07

Estou tentando realizar o envio de e-mail através do evento beforetaskSave e o seguinte erro aparece:
**“Falha desconhecida ao enviar email: : javax.mail.AuthenticationFailedException: 535-5.7.8 Username and Password not accepted.”**.
Alguém ja passou por isso e sabe como resolver?

---

## Resposta #1

**venturelli** (@venturelli) — 04/04/2024, 15:56

> ![](https://fluiggers.com.br/letter_avatar_proxy/v4/letter/c/45deac/48.png) CatarinaCamussi:
>
> > javax.mail.AuthenticationFailedException: 535-5.7.8

Parece ser um erro associado a segurança do gmail: [java - javax.mail.AuthenticationFailedException: 535-5.7.8 Username and Password not accepted - Stack Overflow](https://stackoverflow.com/questions/35347269/javax-mail-authenticationfailedexception-535-5-7-8-username-and-password-not-ac)

Diminua a segurança da conta.

---
