# Problema ao exportar widget

> **Fonte:** [https://fluiggers.com.br/t/problema-ao-exportar-widget/2141](https://fluiggers.com.br/t/problema-ao-exportar-widget/2141)
> **Categoria:** Widgets
> **Criado em:** 22/08/2023, 17:16
> **Visualizações:** 695 | **Likes:** 3 | **Respostas:** 1

---

## Pergunta original

**Wanderley Junior** (@gomeswjunior) — 22/08/2023, 17:16

Ao clicar em exportar minha widget o correto é exibir a mensagem que o deploy foi realizado e a tela de exportação fechada automaticamente, porem está acontecendo algo comigo que não tinha visto. Clico em exportar e nada acontece. Olhando o log vejo esse erro

ERROR \[com.totvs.technology.wcm.web.rest.DeployServiceRest\] (default task-44) DeployServiceRest.uploadFile.ERROR006B:: javax.ejb.EJBException: java.lang.NullPointerException

Alguém já passou por isso ?

---

## Resposta #1

**Matheus Arrifano** (@Thor_Matheus) — 22/01/2024, 08:36

Estou com o mesmo problema, não consigo exportar as widgets.

---

## Resposta #2

**Bruno Gasparetto** (@Bruno_Gasparetto) — 22/01/2024, 09:21

Já tive problema de exportar widget, em servidor on premise, porque a pasta e/ou o .war no servidor estava como somente leitura, aí o Fluig não conseguia sobrescrever o arquivo.

---

## Resposta #3

**Hiago oliveira** (@Hiago_oliveira) — 12/04/2024, 21:21

Estou com o mesmo problema… Já ativei meu FTP do windows, já desliguei e liguei o ftp via wcmadmin e também segui a dica do Bruno e nada resolveu.

---

## Resposta #4

**Leonardo Masera** (@Leonardo_Masera) — 16/04/2024, 11:05 | ❤️ 2

pelo tempo já deve ter resolvido, mas ta ai pra quem tiver o problema.
verifica se o arquivo application.info foi gerado corretamente.
as vezes ele gera faltando algumas informações e se você tentar exportar sem as mesmas ele não vai fazer nada, tenho esse problema o meu gera assim.
EX:
application.version=${build.version}-${build.revision}
view.file=view.ftl
edit.file=edit.ftl
locale.file.base.name=teste
application.resource.js.1=/resources/js/teste.js
application.resource.css.2=/resources/css/teste.css

o correto era:
application.type=widget
application.code=XXX
application.title=XXX
application.description=XXX
application.category=XXX
application.renderer=freemarker
application.icon=icon.png
developer.code=developer
developer.name=XXX
developer.url=[http://www.fluig.com](http://www.fluig.com)
view.file=view.ftl
edit.file=edit.ftl
application.uiwidget=true

view.file=view.ftl
edit.file=edit.ftl
locale.file.base.name=XXX
application.resource.js.1=/resources/js/XXX.js
application.resource.css.2=/resources/css/XXX.css
application.resource.component.3=XXX

---

## Resposta #5

**Hiago oliveira** (@Hiago_oliveira) — 27/05/2024, 15:52 | ❤️ 1

Cara resolvi sim e foi exatamente isso que me recomendara.

De qualquer forma meu muito obrigado irmão !

---
