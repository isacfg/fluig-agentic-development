# Erro na exportação de widget, mesmo código de aplicação

> **Fonte:** [https://fluiggers.com.br/t/erro-na-exportacao-de-widget-mesmo-codigo-de-aplicacao/2544](https://fluiggers.com.br/t/erro-na-exportacao-de-widget-mesmo-codigo-de-aplicacao/2544)
> **Categoria:** Widgets
> **Criado em:** 30/01/2024, 09:15
> **Visualizações:** 253 | **Likes:** 1 | **Respostas:** 1

---

## Pergunta original

**Rodrigo** (@Rodrigo) — 30/01/2024, 09:15

Bom dia, preciso de uma ajuda na exportação de widgets.
Quando fui exportar meu widget, mas não percebi que estava com o mesmo id de uma página criada, no log apareceu o sequinte:

\[com.totvs.technology.wcm.core.service.WCMDeployMDBBean\] (Thread-107 (ActiveMQ-client-global-threads)) \*\*\* Could not process the action initApplication. Exception: com.totvs.technology.foundation.common.exception.FDNDuplicatedApplicationCodeException: **Já existe uma aplicação com o código wdTeste**

Excluí a página com o id do mesmo widget, mas não consigo excluir o widget da plataforma e cheguei a reiniciar o servidor.

Reiniciando o servidor ele ainda tentou efetuar o deploy umas 200 vezes e parou:
024-01-29 15:06:52,726 INFO \[com.totvs.technology.wcm.core.service.WCMDeployMDBBean\] (Thread-108 (ActiveMQ-client-global-threads)) WCMDeployMDBBean.onMessage - action: initApplication - Mensagens restantes na fila: 1
2024-01-29 15:06:52,734 WARN \[com.totvs.technology.wcm.core.service.WCMDeployMDBBean\] (Thread-108 (ActiveMQ-client-global-threads)) \*\*\* Could not process the action initApplication. Exception: com.totvs.technology.foundation.common.exception.FDNDuplicatedApplicationCodeException: Já existe uma aplicação com o código wdTeste.
2024-01-29 15:06:52,734 ERROR \[com.totvs.technology.wcm.core.service.WCMDeployMDBBean\] (Thread-108 (ActiveMQ-client-global-threads)) Redeliver abortado após 200 tentativas.
2024-01-29 15:07:01,765 ERROR \[stderr\] (Thread-93) java.nio.file.AccessDeniedException: C:\\fluig\\appserver\\apps\\wdTeste.war

O Fluig sobe normalmente, mas mesmo assim não consigo mais subir os widgets.
Agora exibe outros erros diferentes…

Versão TOTVS Fluig Plataforma - Mist 1.8.0-230418 480

Alguem já encarou este problema?

---

## Resposta #1

**Antonio Remigio** (@antonioremigio) — 30/09/2025, 15:55

Boa tarde, Rodrigo.

Estou com o mesmo problema, o Fluig demora de 40 a 50 minutos pra subir, só tentando reenviar um Widget.

Você conseguiu resolver? Se sim, como?

2025-09-30 15:47:43,044 INFO \[com.totvs.technology.wcm.core.service.WCMDeployMDBBean\] (Thread-29 (ActiveMQ-client-global-threads)) WCMDeployMDBBean.onMessage - action: initApplication - Mensagens restantes na fila: 1
2025-09-30 15:47:43,044 WARN \[com.totvs.technology.wcm.core.service.WCMDeployMDBBean\] (Thread-29 (ActiveMQ-client-global-threads)) \*\*\* Could not process the action initApplication. Exception: com.totvs.technology.foundation.common.exception.FDNDuplicatedApplicationCodeException: Já existe uma aplicação com o código consulta\_pedidos\_protheus.
2025-09-30 15:47:43,044 WARN \[com.totvs.technology.wcm.core.service.WCMDeployMDBBean\] (Thread-29 (ActiveMQ-client-global-threads)) \*\*\* WCMDeployMDBBean.RESEND 152: initApplication → {application=WCMWidget{id=null, code=‘consulta\_pedidos\_protheus’, uiWidget=true, mobileAppWidget=false}, permissions=\[PermissionVO {tenantId=1, permission=widgetEdit, description=permission.widget.edit, user=null, role=user, group=null, resource=null}, PermissionVO {tenantId=1, permission=widgetView, description=permission.widget.view, user=null, role=user, group=null, resource=null}, PermissionVO {tenantId=1, permission=widgetPageAdd, description=permission.widget.pageadd, user=null, role=user, group=null, resource=null}\]}

Obrigado.

---

## Resposta #2

**Pablo Pádua** (@Pablo_Padua) — 30/09/2025, 17:17

É possível remover a widget no Painel de Controle, aba Personalização → Minhas páginas.
Marque o checkbox da widget e selecione remover:

Segue passo a passo:
[https://tdn.totvs.com/pages/releaseview.action?pageId=234455942](https://tdn.totvs.com/pages/releaseview.action?pageId=234455942)

Como no seu caso o serviço não está mais subindo corretamente, uma outra opção seria excluir a widget diretamente na pasta apps do servidor fluig.

---

## Resposta #3

**Igor Rodrigues** (@fluigor.com.br) — 30/09/2025, 19:09 | ❤️ 1

Olá pessoal,

Uma das formas de remover a widget é indo até a pasta /fluig/appserver/apps e apagar o arquivo com extensão .war do seu ambiente!

abraços!

---
