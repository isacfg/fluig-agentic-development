# Erro na API de listagem de documentos

> **Fonte:** [https://fluiggers.com.br/t/erro-na-api-de-listagem-de-documentos/1206](https://fluiggers.com.br/t/erro-na-api-de-listagem-de-documentos/1206)
> **Categoria:** API`s Fluig
> **Criado em:** 02/08/2022, 11:25
> **Visualizações:** 1247 | **Likes:** 4 | **Respostas:** 2

---

## Pergunta original

**Everton Alves** (@everton) — 02/08/2022, 11:25

Olá,

Estou tentando usar a API de listagem de documentos de uma pasta. Pela [documentação](https://api.fluig.com/latest/content-management/swagger-ui/#/Pastas/getDocuments) eu entendi que deveria passar o “parentId” da pasta que eu quero listar o conteúdo.
Quando eu faço a chamada, o fluig está me retornando o seguinte erro:

```javascript
{
    "code": "IndexOutOfBoundsException",
    "message": "Oops. An unexpected error happened. Contact the administrator.",
    "detailedMessage": "Oops. An unexpected error happened. Contact the administrator.",
    "helpUrl": null,
    "details": []
}
```

Estou usando a seguinte URL:

[https://meu-dominio/content-management/api/v2/folders/14291/documents](https://meu-dominio/content-management/api/v2/folders/14291/documents)

Onde o número 14291 é o Id da pasta que eu quero listar.
Será que estou fazendo da forma correta? Alguém já passou por esse problema?

---

## Resposta #1

**Daniel Cabral Santos** (@daniel.cabral) — 04/08/2022, 09:03

Bom dia!

O server.log informa algo a mais? Pode postar o erro de lá aqui?

---

## Resposta #2

**Everton Alves** (@everton) — 04/08/2022, 10:03

Bom dia!

No log aparece também o erro de “Index out of bounds”, fora isso não vi nada de mais.
Segue abaixo o erro completo do log:

```auto
2022-08-04 09:57:33,460 ERROR [com.fluig.foundation.api.tools.FDNExceptionMapper] (default task-9340) Index 0 out of bounds for length 0: java.lang.IndexOutOfBoundsException: Index 0 out of bounds for length 0
	at java.base/jdk.internal.util.Preconditions.outOfBounds(Preconditions.java:64)
	at java.base/jdk.internal.util.Preconditions.outOfBoundsCheckIndex(Preconditions.java:70)
	at java.base/jdk.internal.util.Preconditions.checkIndex(Preconditions.java:248)
	at java.base/java.util.Objects.checkIndex(Objects.java:372)
	at java.base/java.util.ArrayList.get(ArrayList.java:458)
	at deployment.content-management-public-api-web.war//com.fluig.api.contentmanagement.v2.document.enums.OrderEnum.getValueFromOrderParam(OrderEnum.java:44)
	at deployment.content-management-public-api-web.war//com.fluig.api.contentmanagement.v2.document.FolderRest.getDocuments(FolderRest.java:122)
	at deployment.content-management-public-api-web.war//com.fluig.api.contentmanagement.v2.document.FolderRest$Proxy$_$$_WeldClientProxy.getDocuments(Unknown Source)
	at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
	at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
	at java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.base/java.lang.reflect.Method.invoke(Method.java:566)
	at org.jboss.resteasy.resteasy-jaxrs@3.9.1.Final//org.jboss.resteasy.core.MethodInjectorImpl.invoke(MethodInjectorImpl.java:138)
	at org.jboss.resteasy.resteasy-jaxrs@3.9.1.Final//org.jboss.resteasy.core.ResourceMethodInvoker.internalInvokeOnTarget(ResourceMethodInvoker.java:517)
	at org.jboss.resteasy.resteasy-jaxrs@3.9.1.Final//org.jboss.resteasy.core.ResourceMethodInvoker.invokeOnTargetAfterFilter(ResourceMethodInvoker.java:406)
	at org.jboss.resteasy.resteasy-jaxrs@3.9.1.Final//org.jboss.resteasy.core.ResourceMethodInvoker.lambda$invokeOnTarget$0(ResourceMethodInvoker.java:370)
	at org.jboss.resteasy.resteasy-jaxrs@3.9.1.Final//org.jboss.resteasy.core.interception.PreMatchContainerRequestContext.filter(PreMatchContainerRequestContext.java:356)
	at org.jboss.resteasy.resteasy-jaxrs@3.9.1.Final//org.jboss.resteasy.core.ResourceMethodInvoker.invokeOnTarget(ResourceMethodInvoker.java:372)
	at org.jboss.resteasy.resteasy-jaxrs@3.9.1.Final//org.jboss.resteasy.core.ResourceMethodInvoker.invoke(ResourceMethodInvoker.java:344)
	at org.jboss.resteasy.resteasy-jaxrs@3.9.1.Final//org.jboss.resteasy.core.ResourceMethodInvoker.invoke(ResourceMethodInvoker.java:317)
	at org.jboss.resteasy.resteasy-jaxrs@3.9.1.Final//org.jboss.resteasy.core.SynchronousDispatcher.invoke(SynchronousDispatcher.java:440)
	at org.jboss.resteasy.resteasy-jaxrs@3.9.1.Final//org.jboss.resteasy.core.SynchronousDispatcher.lambda$invoke$4(SynchronousDispatcher.java:229)
	at org.jboss.resteasy.resteasy-jaxrs@3.9.1.Final//org.jboss.resteasy.core.SynchronousDispatcher.lambda$preprocess$0(SynchronousDispatcher.java:135)
	at org.jboss.resteasy.resteasy-jaxrs@3.9.1.Final//org.jboss.resteasy.core.interception.PreMatchContainerRequestContext.filter(PreMatchContainerRequestContext.java:356)
	at org.jboss.resteasy.resteasy-jaxrs@3.9.1.Final//org.jboss.resteasy.core.SynchronousDispatcher.preprocess(SynchronousDispatcher.java:138)
	at org.jboss.resteasy.resteasy-jaxrs@3.9.1.Final//org.jboss.resteasy.core.SynchronousDispatcher.invoke(SynchronousDispatcher.java:215)
	at org.jboss.resteasy.resteasy-jaxrs@3.9.1.Final//org.jboss.resteasy.plugins.server.servlet.ServletContainerDispatcher.service(ServletContainerDispatcher.java:227)
	at org.jboss.resteasy.resteasy-jaxrs@3.9.1.Final//org.jboss.resteasy.plugins.server.servlet.HttpServletDispatcher.service(HttpServletDispatcher.java:56)
	at org.jboss.resteasy.resteasy-jaxrs@3.9.1.Final//org.jboss.resteasy.plugins.server.servlet.HttpServletDispatcher.service(HttpServletDispatcher.java:51)
	at javax.servlet.api@2.0.0.Final//javax.servlet.http.HttpServlet.service(HttpServlet.java:590)
	at io.undertow.servlet@2.0.27.Final//io.undertow.servlet.handlers.ServletHandler.handleRequest(ServletHandler.java:74)
	at io.undertow.servlet@2.0.27.Final//io.undertow.servlet.handlers.FilterHandler$FilterChainImpl.doFilter(FilterHandler.java:129)
	at io.opentracing.contrib.opentracing-jaxrs2//io.opentracing.contrib.jaxrs2.server.SpanFinishingFilter.doFilter(SpanFinishingFilter.java:52)
	at io.undertow.servlet@2.0.27.Final//io.undertow.servlet.core.ManagedFilter.doFilter(ManagedFilter.java:61)
	at io.undertow.servlet@2.0.27.Final//io.undertow.servlet.handlers.FilterHandler$FilterChainImpl.doFilter(FilterHandler.java:131)
	at deployment.content-management-public-api-web.war//com.fluig.foundation.api.tools.LocaleFilter.doFilter(LocaleFilter.java:59)
	at io.undertow.servlet@2.0.27.Final//io.undertow.servlet.core.ManagedFilter.doFilter(ManagedFilter.java:61)
	at io.undertow.servlet@2.0.27.Final//io.undertow.servlet.handlers.FilterHandler$FilterChainImpl.doFilter(FilterHandler.java:131)
	at com.fluig.base//com.totvs.technology.foundation.common.FluigLoginFilter.doFilter(FluigLoginFilter.java:21)
	at io.undertow.servlet@2.0.27.Final//io.undertow.servlet.core.ManagedFilter.doFilter(ManagedFilter.java:61)
	at io.undertow.servlet@2.0.27.Final//io.undertow.servlet.handlers.FilterHandler$FilterChainImpl.doFilter(FilterHandler.java:131)
	at com.fluig.base//com.totvs.technology.foundation.common.FluigLoggingFilter.doFilter(FluigLoggingFilter.java:57)
	at io.undertow.servlet@2.0.27.Final//io.undertow.servlet.core.ManagedFilter.doFilter(ManagedFilter.java:61)
	at io.undertow.servlet@2.0.27.Final//io.undertow.servlet.handlers.FilterHandler$FilterChainImpl.doFilter(FilterHandler.java:131)
	at io.undertow.servlet@2.0.27.Final//io.undertow.servlet.handlers.FilterHandler.handleRequest(FilterHandler.java:84)
	at io.undertow.servlet@2.0.27.Final//io.undertow.servlet.handlers.security.ServletSecurityRoleHandler.handleRequest(ServletSecurityRoleHandler.java:62)
	at io.undertow.servlet@2.0.27.Final//io.undertow.servlet.handlers.ServletChain$1.handleRequest(ServletChain.java:68)
	at io.undertow.servlet@2.0.27.Final//io.undertow.servlet.handlers.ServletDispatchingHandler.handleRequest(ServletDispatchingHandler.java:36)
	at org.wildfly.extension.undertow@18.0.1.Final//org.wildfly.extension.undertow.security.SecurityContextAssociationHandler.handleRequest(SecurityContextAssociationHandler.java:78)
	at io.undertow.core@2.0.27.Final//io.undertow.server.handlers.PredicateHandler.handleRequest(PredicateHandler.java:43)
	at io.undertow.servlet@2.0.27.Final//io.undertow.servlet.handlers.RedirectDirHandler.handleRequest(RedirectDirHandler.java:68)
	at io.undertow.servlet@2.0.27.Final//io.undertow.servlet.handlers.security.SSLInformationAssociationHandler.handleRequest(SSLInformationAssociationHandler.java:132)
	at io.undertow.servlet@2.0.27.Final//io.undertow.servlet.handlers.security.ServletAuthenticationCallHandler.handleRequest(ServletAuthenticationCallHandler.java:57)
	at io.undertow.core@2.0.27.Final//io.undertow.security.handlers.AuthenticationConstraintHandler.handleRequest(AuthenticationConstraintHandler.java:53)
	at io.undertow.core@2.0.27.Final//io.undertow.security.handlers.AbstractConfidentialityHandler.handleRequest(AbstractConfidentialityHandler.java:46)
	at io.undertow.servlet@2.0.27.Final//io.undertow.servlet.handlers.security.ServletConfidentialityConstraintHandler.handleRequest(ServletConfidentialityConstraintHandler.java:64)
	at io.undertow.servlet@2.0.27.Final//io.undertow.servlet.handlers.security.ServletSecurityConstraintHandler.handleRequest(ServletSecurityConstraintHandler.java:59)
	at io.undertow.core@2.0.27.Final//io.undertow.security.handlers.AuthenticationMechanismsHandler.handleRequest(AuthenticationMechanismsHandler.java:60)
	at io.undertow.servlet@2.0.27.Final//io.undertow.servlet.handlers.security.CachedAuthenticatedSessionHandler.handleRequest(CachedAuthenticatedSessionHandler.java:77)
	at io.undertow.core@2.0.27.Final//io.undertow.security.handlers.NotificationReceiverHandler.handleRequest(NotificationReceiverHandler.java:50)
	at io.undertow.core@2.0.27.Final//io.undertow.security.handlers.AbstractSecurityContextAssociationHandler.handleRequest(AbstractSecurityContextAssociationHandler.java:43)
	at io.undertow.core@2.0.27.Final//io.undertow.server.handlers.PredicateHandler.handleRequest(PredicateHandler.java:43)
	at org.wildfly.extension.undertow@18.0.1.Final//org.wildfly.extension.undertow.security.jacc.JACCContextIdHandler.handleRequest(JACCContextIdHandler.java:61)
	at io.undertow.core@2.0.27.Final//io.undertow.server.handlers.PredicateHandler.handleRequest(PredicateHandler.java:43)
	at org.wildfly.extension.undertow@18.0.1.Final//org.wildfly.extension.undertow.deployment.GlobalRequestControllerHandler.handleRequest(GlobalRequestControllerHandler.java:68)
	at io.undertow.core@2.0.27.Final//io.undertow.server.handlers.PredicateHandler.handleRequest(PredicateHandler.java:43)
	at io.undertow.servlet@2.0.27.Final//io.undertow.servlet.handlers.ServletInitialHandler.handleFirstRequest(ServletInitialHandler.java:269)
	at io.undertow.servlet@2.0.27.Final//io.undertow.servlet.handlers.ServletInitialHandler.access$100(ServletInitialHandler.java:78)
	at io.undertow.servlet@2.0.27.Final//io.undertow.servlet.handlers.ServletInitialHandler$2.call(ServletInitialHandler.java:133)
	at io.undertow.servlet@2.0.27.Final//io.undertow.servlet.handlers.ServletInitialHandler$2.call(ServletInitialHandler.java:130)
	at io.undertow.servlet@2.0.27.Final//io.undertow.servlet.core.ServletRequestContextThreadSetupAction$1.call(ServletRequestContextThreadSetupAction.java:48)
	at io.undertow.servlet@2.0.27.Final//io.undertow.servlet.core.ContextClassLoaderSetupAction$1.call(ContextClassLoaderSetupAction.java:43)
	at org.wildfly.extension.undertow@18.0.1.Final//org.wildfly.extension.undertow.security.SecurityContextThreadSetupAction.lambda$create$0(SecurityContextThreadSetupAction.java:105)
	at org.wildfly.extension.undertow@18.0.1.Final//org.wildfly.extension.undertow.deployment.UndertowDeploymentInfoService$UndertowThreadSetupAction.lambda$create$0(UndertowDeploymentInfoService.java:1504)
	at org.wildfly.extension.undertow@18.0.1.Final//org.wildfly.extension.undertow.deployment.UndertowDeploymentInfoService$UndertowThreadSetupAction.lambda$create$0(UndertowDeploymentInfoService.java:1504)
	at org.wildfly.extension.undertow@18.0.1.Final//org.wildfly.extension.undertow.deployment.UndertowDeploymentInfoService$UndertowThreadSetupAction.lambda$create$0(UndertowDeploymentInfoService.java:1504)
	at org.wildfly.extension.undertow@18.0.1.Final//org.wildfly.extension.undertow.deployment.UndertowDeploymentInfoService$UndertowThreadSetupAction.lambda$create$0(UndertowDeploymentInfoService.java:1504)
	at io.undertow.servlet@2.0.27.Final//io.undertow.servlet.handlers.ServletInitialHandler.dispatchRequest(ServletInitialHandler.java:249)
	at io.undertow.servlet@2.0.27.Final//io.undertow.servlet.handlers.ServletInitialHandler.handleRequest(ServletInitialHandler.java:174)
	at io.undertow.core@2.0.27.Final//io.undertow.server.handlers.HttpContinueReadHandler.handleRequest(HttpContinueReadHandler.java:65)
	at io.undertow.core@2.0.27.Final//io.undertow.server.handlers.PathHandler.handleRequest(PathHandler.java:91)
	at org.wildfly.extension.undertow@18.0.1.Final//org.wildfly.extension.undertow.Host$OptionsHandler.handleRequest(Host.java:399)
	at io.undertow.core@2.0.27.Final//io.undertow.server.handlers.HttpContinueReadHandler.handleRequest(HttpContinueReadHandler.java:65)
	at com.fluig.monitoring//com.fluig.monitoring.usage.metrics.MetricsHandler.handleRequest(MetricsHandler.java:45)
	at io.undertow.core@2.0.27.Final//io.undertow.server.handlers.PredicateHandler.handleRequest(PredicateHandler.java:43)
	at com.fluig.permission//com.fluig.permission.PermissionHandler.handleRequest(PermissionHandler.java:114)
	at io.undertow.core@2.0.27.Final//io.undertow.server.handlers.PredicateHandler.handleRequest(PredicateHandler.java:43)
	at io.undertow.core@2.0.27.Final//io.undertow.server.handlers.SetHeaderHandler.handleRequest(SetHeaderHandler.java:90)
	at io.undertow.core@2.0.27.Final//io.undertow.server.handlers.SetHeaderHandler.handleRequest(SetHeaderHandler.java:90)
	at io.undertow.core@2.0.27.Final//io.undertow.server.handlers.PredicateHandler.handleRequest(PredicateHandler.java:43)
	at com.fluig.response//com.fluig.response.DisableCacheHandler.handleRequest(DisableCacheHandler.java:42)
	at io.undertow.core@2.0.27.Final//io.undertow.server.handlers.PredicateHandler.handleRequest(PredicateHandler.java:43)
	at com.fluig.auth//com.fluig.auth.jwt.JwtLogoutHttpHandler.handleRequest(JwtLogoutHttpHandler.java:25)
	at io.undertow.core@2.0.27.Final//io.undertow.server.Connectors.executeRootHandler(Connectors.java:376)
	at io.undertow.core@2.0.27.Final//io.undertow.server.HttpServerExchange$1.run(HttpServerExchange.java:830)
	at org.jboss.threads@2.3.3.Final//org.jboss.threads.ContextClassLoaderSavingRunnable.run(ContextClassLoaderSavingRunnable.java:35)
	at org.jboss.threads@2.3.3.Final//org.jboss.threads.EnhancedQueueExecutor.safeRun(EnhancedQueueExecutor.java:1982)
	at org.jboss.threads@2.3.3.Final//org.jboss.threads.EnhancedQueueExecutor$ThreadBody.doRunTask(EnhancedQueueExecutor.java:1486)
	at org.jboss.threads@2.3.3.Final//org.jboss.threads.EnhancedQueueExecutor$ThreadBody.run(EnhancedQueueExecutor.java:1377)
	at java.base/java.lang.Thread.run(Thread.java:834)
```

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Jonathan Albuquerque** (@Jonathan.Albuquerque) — 05/08/2022, 12:41 | ❤️ 2

Fala meu amigo, seguinte além do id da pasta você também precisa passar a ordenação da lista destes documentos e outra: essa requisição só funcionou aqui com oauth😢mas segue abaixo:

meu-dominio/content-management/api/v2/folders/**2**/documents?**order=documentId**&page=1&pageSize=100

![postman](https://fluiggers.com.br/uploads/default/optimized/1X/f103c91fe55f69d65ead496cf8ef3407f2ecaf15_2_690x476.png)

---

## Resposta #4

**Everton Alves** (@everton) — 05/08/2022, 13:39 | ❤️ 2

Cara, funcionou!!! :sunglasses:
Muito obrigado pela ajuda!

---
