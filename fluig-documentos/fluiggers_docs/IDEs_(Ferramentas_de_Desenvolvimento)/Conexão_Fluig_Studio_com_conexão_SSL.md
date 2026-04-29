# Conexão Fluig Studio com conexão SSL

> **Fonte:** [https://fluiggers.com.br/t/conexao-fluig-studio-com-conexao-ssl/928](https://fluiggers.com.br/t/conexao-fluig-studio-com-conexao-ssl/928)
> **Categoria:** IDEs (Ferramentas de Desenvolvimento)
> **Criado em:** 15/02/2022, 10:05
> **Visualizações:** 649 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Claudio Santos** (@Claudio_Santos) — 15/02/2022, 10:05

Fala Fluigggers,

Estou com erro ao conectar pela IDE a um ambiente com SSL
![image](https://fluiggers.com.br/uploads/default/original/1X/8016653e5208e65ad23fc4aa3a4d9c9d2d373630.png)

Fiz a configuração da IDE
[https://tdn.totvs.com/pages/releaseview.action?pageId=354472893](https://tdn.totvs.com/pages/releaseview.action?pageId=354472893)

E quando vou consultar qualquer conexão com o ambiente da o seguinte erro:
javax.net.ssl.SSLHandshakeException: Received fatal alert: handshake\_failure

---

## Resposta #1

**Igor Rodrigues** (@fluigor.com.br) — 18/02/2022, 09:15

JAVAAAAAAAAAA Langgggg!

erro de HANDSHAKE é erro de infraestrutura, algum redirecionamento interno do cliente está quebrado.

vamos as perguntas.

1 . Cliente implantou SSL com base na documentação abaixo? procedimento automático via WCMADMIN ou procedimento Manual, editando o host.xml e domain.xml?
[https://tdn.totvs.com/pages/releaseview.action?pageId=354472893](https://tdn.totvs.com/pages/releaseview.action?pageId=354472893)

2.  Qual foi o tipo de implementação de DMZ foi configurada pelo cliente?
    [Configuração de Proxy Reverso - TOTVS Fluig - TDN](https://tdn.totvs.com/pages/releaseview.action?pageId=257623455)

3.  Ele configurou proxy-reverso?


Atenciosamente,

---
