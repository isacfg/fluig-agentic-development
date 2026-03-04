# TimeOut- API EXTERNA

> **Fonte:** [https://fluiggers.com.br/t/timeout-api-externa/2717](https://fluiggers.com.br/t/timeout-api-externa/2717)
> **Categoria:** API`s Fluig
> **Tags:** `dataset`, `fluigapi`
> **Criado em:** 15/04/2024, 10:14
> **Visualizações:** 252 | **Likes:** 5 | **Respostas:** 2

---

## Pergunta original

**Leticia Ingrid** (@Leticia_Ingrid) — 15/04/2024, 10:14

Bom dia!

Estou tentando cadastrar um serviço para rodar uma api externa no Fluig do Kace SMA e já tentei cadastrar com diversas configurações diferentes e sempre ao testar o serviço recebo um erro de timeout, ao tentar executar a chamada do serviço via dataset também recebi o erro de timeout, alguém passou por algo parecido? Via postman consigo retorno da api e em poucos segundos.

![image](https://fluiggers.com.br/uploads/default/optimized/2X/5/59c3cc5e1edbfb53f3ebca77daeda66966b35bc8_2_690x367.png)

![image](https://fluiggers.com.br/uploads/default/original/2X/e/ed9bc3a03eeb8d99631063f0ecef9fdb7d367dce.png)

```auto
com.fluig.authorize.client.exception.ClientBasicAuthorizeException: org.apache.http.conn.ConnectTimeoutException: Connect to 10.0.0.4:443 [/10.0.0.4] failed: connect timed out
	at deployment.fluig-server.ear//com.fluig.authorize.client.CustomNoneAuthorize.execute(CustomNoneAuthorize.java:52)
	at deployment.fluig-server.ear//com.fluig.authorize.client.util.AuthorizeUtil.call(AuthorizeUtil.java:37)
	at deployment.fluig-server.ear.foundation-impl.jar//com.totvs.technology.foundation.oauth.service.AuthorizeClientServiceBean.invoke(AuthorizeClientServiceBean.java:342)
	at deployment.fluig-server.ear.foundation-impl.jar//com.totvs.technology.foundation.oauth.service.AuthorizeClientServiceBean.invoke(AuthorizeClientServiceBean.java:247)
	at jdk.internal.reflect.GeneratedMethodAccessor837.invoke(Unknown Source)
	at java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.base/java.lang.reflect.Method.invoke(Method.java:566)
	at org.jboss.as.ee@18.0.1.Final//org.jboss.as.ee.component.ManagedReferenceMethodInterceptor.processInvocation(ManagedReferenceMethodInterceptor.java:52)
	at org.jboss.invocation@1.5.2.Final//org.jboss.invocation.InterceptorContext.proceed(InterceptorContext.java:422)
	at org.jboss.invocation@1.5.2.Final//org.jboss.invocation.InterceptorContext$Invocation.proceed(InterceptorContext.java:509)
	at org.jboss.as.weld.common@18.0.1.Final//org.jboss.as.weld.interceptors.Jsr299BindingsInterceptor.delegateInterception(Jsr299BindingsInterceptor.java:79)
	at org.jboss.as.weld.common@18.0.1.Final//org.jboss.as.weld.interceptors.Jsr299BindingsInterceptor.doMethodInterception(Jsr299BindingsInterceptor.java:89)
	at org.jboss.as.weld.common@18.0.1.Final//org.jboss.as.weld.interceptors.Jsr299BindingsInterceptor.processInvocation(Jsr299BindingsInterceptor.java:102)
	at org.jboss.as.ee@18.0.1.Final//org.jboss.as.ee.component.interceptors.UserInterceptorFactory$1.processInvocation(UserInterceptorFactory.java:63)
	at org.jboss.invocation@1.5.2.Final//org.jboss.invocation.InterceptorContext.proceed(InterceptorContext.java:422)
	at org.jboss.as.ejb3@18.0.1.Final//org.jboss.as.ejb3.component.invocationmetrics.ExecutionTimeInterceptor.processInvocation(ExecutionTimeInterceptor.java:43)
	at org.jboss.invocation@1.5.2.Final//org.jboss.invocation.InterceptorContext.proceed(InterceptorContext.java:422)
	at org.jboss.as.jpa@18.0.1.Final//org.jboss.as.jpa.interceptor.SBInvocationInterceptor.processInvocation(SBInvocationInterceptor.java:47)
	at org.jboss.invocation@1.5.2.Final//org.jboss.invocation.InterceptorContext.proceed(InterceptorContext.java:422)
	at org.jboss.as.ee@18.0.1.Final//org.jboss.as.ee.concurrent.ConcurrentContextInterceptor.processInvocation(ConcurrentContextInterceptor.java:45)
	at org.jboss.invocation@1.5.2.Final//org.jboss.invocation.InterceptorContext.proceed(InterceptorContext.java:422)
	at org.jboss.invocation@1.5.2.Final//org.jboss.invocation.InitialInterceptor.processInvocation(InitialInterceptor.java:40)
	at org.jboss.invocation@1.5.2.Final//org.jboss.invocation.InterceptorContext.proceed(InterceptorContext.java:422)
	at org.jboss.invocation@1.5.2.Final//org.jboss.invocation.ChainedInterceptor.processInvocation(ChainedInterceptor.java:53)
	at org.jboss.as.ee@18.0.1.Final//org.jboss.as.ee.component.interceptors.ComponentDispatcherInterceptor.processInvocation(ComponentDispatcherInterceptor.java:52)
	at org.jboss.invocation@1.5.2.Final//org.jboss.invocation.InterceptorContext.proceed(InterceptorContext.java:422)
	at org.jboss.as.ejb3@18.0.1.Final//org.jboss.as.ejb3.component.pool.PooledInstanceInterceptor.processInvocation(PooledInstanceInterceptor.java:51)
	at org.jboss.invocation@1.5.2.Final//org.jboss.invocation.InterceptorContext.proceed(InterceptorContext.java:422)
	at org.jboss.as.ejb3@18.0.1.Final//org.jboss.as.ejb3.component.interceptors.AdditionalSetupInterceptor.processInvocation(AdditionalSetupInterceptor.java:54)
	at org.jboss.invocation@1.5.2.Final//org.jboss.invocation.InterceptorContext.proceed(InterceptorContext.java:422)
	at org.jboss.as.ejb3@18.0.1.Final//org.jboss.as.ejb3.tx.CMTTxInterceptor.invokeInNoTx(CMTTxInterceptor.java:216)
	at org.jboss.as.ejb3@18.0.1.Final//org.jboss.as.ejb3.tx.CMTTxInterceptor.notSupported(CMTTxInterceptor.java:345)
	at org.jboss.as.ejb3@18.0.1.Final//org.jboss.as.ejb3.tx.CMTTxInterceptor.processInvocation(CMTTxInterceptor.java:142)
	at org.jboss.invocation@1.5.2.Final//org.jboss.invocation.InterceptorContext.proceed(InterceptorContext.java:422)
	at org.jboss.invocation@1.5.2.Final//org.jboss.invocation.InterceptorContext$Invocation.proceed(InterceptorContext.java:509)
	at org.jboss.weld.core@3.1.2.Final//org.jboss.weld.module.ejb.AbstractEJBRequestScopeActivationInterceptor.aroundInvoke(AbstractEJBRequestScopeActivationInterceptor.java:72)
	at org.jboss.as.weld.common@18.0.1.Final//org.jboss.as.weld.ejb.EjbRequestScopeActivationInterceptor.processInvocation(EjbRequestScopeActivationInterceptor.java:89)
	at org.jboss.invocation@1.5.2.Final//org.jboss.invocation.InterceptorContext.proceed(InterceptorContext.java:422)
	at org.jboss.as.ejb3@18.0.1.Final//org.jboss.as.ejb3.component.interceptors.CurrentInvocationContextInterceptor.processInvocation(CurrentInvocationContextInterceptor.java:41)
	at org.jboss.invocation@1.5.2.Final//org.jboss.invocation.InterceptorContext.proceed(InterceptorContext.java:422)
	at org.jboss.as.ejb3@18.0.1.Final//org.jboss.as.ejb3.component.invocationmetrics.WaitTimeInterceptor.processInvocation(WaitTimeInterceptor.java:47)
	at org.jboss.invocation@1.5.2.Final//org.jboss.invocation.InterceptorContext.proceed(InterceptorContext.java:422)
	at org.jboss.as.ejb3@18.0.1.Final//org.jboss.as.ejb3.security.SecurityContextInterceptor.processInvocation(SecurityContextInterceptor.java:100)
	at org.jboss.invocation@1.5.2.Final//org.jboss.invocation.InterceptorContext.proceed(InterceptorContext.java:422)
	at org.jboss.as.ejb3@18.0.1.Final//org.jboss.as.ejb3.deployment.processors.StartupAwaitInterceptor.processInvocation(StartupAwaitInterceptor.java:22)
	at org.jboss.invocation@1.5.2.Final//org.jboss.invocation.InterceptorContext.proceed(InterceptorContext.java:422)
	at org.jboss.as.ejb3@18.0.1.Final//org.jboss.as.ejb3.component.interceptors.ShutDownInterceptorFactory$1.processInvocation(ShutDownInterceptorFactory.java:64)
	at org.jboss.invocation@1.5.2.Final//org.jboss.invocation.InterceptorContext.proceed(InterceptorContext.java:422)
	at org.jboss.as.ejb3@18.0.1.Final//org.jboss.as.ejb3.deployment.processors.EjbSuspendInterceptor.processInvocation(EjbSuspendInterceptor.java:45)
	at org.jboss.invocation@1.5.2.Final//org.jboss.invocation.InterceptorContext.proceed(InterceptorContext.java:422)
	at org.jboss.as.ejb3@18.0.1.Final//org.jboss.as.ejb3.component.interceptors.LoggingInterceptor.processInvocation(LoggingInterceptor.java:67)
	at org.jboss.invocation@1.5.2.Final//org.jboss.invocation.InterceptorContext.proceed(InterceptorContext.java:422)
	at org.jboss.as.ee@18.0.1.Final//org.jboss.as.ee.component.NamespaceContextInterceptor.processInvocation(NamespaceContextInterceptor.java:50)
	at org.jboss.invocation@1.5.2.Final//org.jboss.invocation.InterceptorContext.proceed(InterceptorContext.java:422)
	at org.jboss.invocation@1.5.2.Final//org.jboss.invocation.ContextClassLoaderInterceptor.processInvocation(ContextClassLoaderInterceptor.java:60)
	at org.jboss.invocation@1.5.2.Final//org.jboss.invocation.InterceptorContext.proceed(InterceptorContext.java:422)
	at org.jboss.invocation@1.5.2.Final//org.jboss.invocation.InterceptorContext.run(InterceptorContext.java:438)
	at org.wildfly.security.elytron-private@1.10.4.Final//org.wildfly.security.manager.WildFlySecurityManager.doChecked(WildFlySecurityManager.java:627)
	at org.jboss.invocation@1.5.2.Final//org.jboss.invocation.AccessCheckingInterceptor.processInvocation(AccessCheckingInterceptor.java:57)
```

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 15/04/2024, 14:39

Talvez alterando o timeout padrão funcione: [Como alterar o timeout da plataforma - TOTVS Fluig - TDN](https://tdn.totvs.com/display/public/fluig/Como+alterar+o+timeout+da+plataforma)

---

## Resposta #2

**Leticia Ingrid** (@Leticia_Ingrid) — 16/04/2024, 16:29

Olá, Bruno, nosso ambiente é em cloud então não consigo fazer essa alteração de forma autônoma, vou pedir a totvs para verificarem qual o timeout que esta parametrizado mas acredito que já seja um valor alto, porque devido outro problema que tivemos já foi preciso alterar esse parâmetro…

---

## Resposta #3

**Mendes** (@andersonma) — 16/04/2024, 17:20 | ❤️ 2

Letícia boa tarde.

Não sei se é o caso, mas o Fluig está na mesma rede do servidor da API 10.0.0.4?
Se sim, peça para verificar se não é problema de liberação no Firewall, caso contrário verifique o endereço IP externo (que tenha redirecionamento) para API.

At.te,

---

## Resposta #4

**Leticia Ingrid** (@Leticia_Ingrid) — 17/04/2024, 09:10 | ❤️ 3

Bom dia!
Anderson, deu certinho, não estava na mesma rede, deixando de tentar conexão via ip e acessando pelo link de acesso externo deu certinho, agradeço a ajuda!

---
