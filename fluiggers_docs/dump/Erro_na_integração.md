# Erro na integração

> **Fonte:** [https://fluiggers.com.br/t/erro-na-integracao/634](https://fluiggers.com.br/t/erro-na-integracao/634)
> **Categoria:** WCM
> **Criado em:** 31/08/2021, 12:37
> **Visualizações:** 894 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**RobertoCarlos** (@RobertoCarlos) — 31/08/2021, 12:37

Boa Tarde,
Alguem ja viu este erro, e como corrigir.

ERROR \[com.datasul.technology.webdesk.foundation.servlet.StreamControlWCM\] (default task-9518) StreamControlWCM failed: java.lang.RuntimeException: java.lang.IllegalStateException: UT010019: Response already commited
at io.undertow.servlet@2.0.27.Final//io.undertow.servlet.spec.RequestDispatcherImpl.forwardImpl(RequestDispatcherImpl.java:251)
at io.undertow.servlet@2.0.27.Final//io.undertow.servlet.spec.RequestDispatcherImpl.forwardImplSetup(RequestDispatcherImpl.java:149)
at io.undertow.servlet@2.0.27.Final//io.undertow.servlet.spec.RequestDispatcherImpl.forward(RequestDispatcherImpl.java:111)
at deployment.fluig-server.ear.ecmvoldemort.war//com.datasul.technology.webdesk.foundation.servlet.StreamControlWCM.service(StreamControlWCM.java:284)
at javax.servlet.api@2.0.0.Final//javax.servlet.http.HttpServlet.service(HttpServlet.java:590)

---

## Resposta #1

**Herick Freitas** (@herickfreitas) — 04/11/2024, 16:18

Boa tarde
Tive o mesmo problema, resolvemos assim!

[https://tdninterno.totvs.com/pages/releaseview.action?pageId=419529562](https://tdninterno.totvs.com/pages/releaseview.action?pageId=419529562)

ARQ - Problemas com caracteres especiais na publicação em ambiente Linux

---
