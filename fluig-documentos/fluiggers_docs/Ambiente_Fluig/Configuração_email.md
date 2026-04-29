# Configuração email

> **Fonte:** [https://fluiggers.com.br/t/configuracao-email/2980](https://fluiggers.com.br/t/configuracao-email/2980)
> **Categoria:** Ambiente Fluig
> **Criado em:** 23/09/2024, 12:14
> **Visualizações:** 255 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Gabriel Martins** (@Gabriel_Martins) — 23/09/2024, 12:14 | ❤️ 1

Pessoal, estou com um problema de email na minha base. Fiz as configurações e teste e parece tudo certo, o email de teste é enviado sem problemas. Porem ao criar um usuario ele não recebe nenhum email e ao tentar redefinir a senha nao chegar nada para ele. Tenho um ambiente em load balance na versão 1.8.1

---

## Resposta #1

**Igor Rodrigues** (@fluigor.com.br) — 23/09/2024, 22:17

Boa noite Gabriel,

O envio de e-mail do Fluig não funciona nem para as notificações padrões do produto, o email de testar conexão chega pra você?
tu pode postar como está a sua configuração de e-mail.
é muito importante ressaltar que o Fluig tem problemas com alguns servidores de e-mail do mercado devido a funcionalidade da impersonificação, onde para algumas notificações ele dispara o e-mail utilizando proprio e-mail do colaborador que está executando a ação e não o e-mail configurado na plataforma. Importante ressaltar se a flag remetente padrão está marcada e se a conta utilizada permite impersonificação.

Documentação oficial
[https://tdn.totvs.com/pages/releaseview.action?pageId=257623560](https://tdn.totvs.com/pages/releaseview.action?pageId=257623560)

![image](https://fluiggers.com.br/uploads/default/original/2X/6/69a1e4181f3d3c21d9ad99c13b4ed5d307a96a5f.png)

![image](https://fluiggers.com.br/uploads/default/original/2X/6/6a55aa353bbf084a4fcd36ce537ec2849e49bdc7.png)

---
