# Integração com AD sem Identity

> **Fonte:** [https://fluiggers.com.br/t/integracao-com-ad-sem-identity/934](https://fluiggers.com.br/t/integracao-com-ad-sem-identity/934)
> **Categoria:** Identity
> **Criado em:** 20/02/2022, 09:37
> **Visualizações:** 1624 | **Likes:** 3 | **Respostas:** 6

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 20/02/2022, 09:37 | ❤️ 1

Tenho um ambiente de homologação e gostaria de integrá-lo com o AD, mas sem passar pelo Identity. Queria uma autenticação direta.

Eu tentei fazer o que [a página da Totvs preconiza](https://tdn.totvs.com/pages/releaseview.action?pageId=257623389), mas não consegui êxito.

Mas, não funciona, o log do servidor sempre me dá a mesma resposta, seja para qual usário for:

> Invalid security token provided ‘xyz@meudominio.com.br’

Como teste, usando o mesmo usuário que está indicado no domain.xml para conexão com o AD, dei um telnet no IP e na porta 389, e a conexão foi feita com sucesso.

Tentei os dois modos que a página acima indicava.

Às vezes, o log acrescentava uma crítica extra, além daquela acima, que é

> \[…\] javax.naming.PartialResultException: Unprocessed Continuation Reference(s); remaining name ‘DC=meu\_dominio,DC=com,DC=br’

---

## Resposta #1

**Igor Rodrigues** (@fluigor.com.br) — 22/02/2022, 15:22

Ola [@Mautresim](/u/mautresim) está documentação é bem confusa,

consegue adicionar os arquivos de domain.xml e host.xml aqui?

Atenciosamente,

---

## Resposta #2

**MAURO SIMOES** (@Mautresim) — 23/02/2022, 08:20

Caro [@fluigor.com.br](/u/fluigor.com.br), desculpa a demora. Eu estou aqui como domain.xml. No momento, nosso ambiente está desligado para manutenção de energia e não tenho como pegar o host.xml, mas vai aqui o que eu tinha já pronto do outro arquivo.
[domain63Mod.xml](https://fluiggers.com.br/uploads/short-url/nmIbIu4htGffDo06jzWvDYIPzY4.xml) (48,8,KB)

Como o arquivo excede à capacidade do editor, estou enviando-o via upload.

O arquivo host.xml peguei agora:

```auto
<?xml version="1.0" encoding="UTF-8"?>

-<host name="master" xmlns="urn:jboss:domain:10.0">


-<extensions>

<extension module="org.jboss.as.jmx"/>

<extension module="org.wildfly.extension.core-management"/>

<extension module="org.wildfly.extension.elytron"/>

</extensions>


-<management>


-<security-realms>


-<security-realm name="ManagementRealm">


-<authentication>

<local skip-group-loading="true" default-user="$local"/>

<properties relative-to="jboss.domain.config.dir" path="mgmt-users.properties"/>

</authentication>


-<authorization map-groups-to-roles="false">

<properties relative-to="jboss.domain.config.dir" path="mgmt-groups.properties"/>

</authorization>

</security-realm>


-<security-realm name="ApplicationRealm">


-<server-identities>


-<ssl>

<keystore relative-to="jboss.domain.config.dir" path="application.keystore" keystore-password="password" key-password="password" generate-self-signed-certificate-host="localhost" alias="server"/>

</ssl>

</server-identities>


-<authentication>

<local skip-group-loading="true" default-user="$local" allowed-users="*"/>

<properties relative-to="jboss.domain.config.dir" path="application-users.properties"/>

</authentication>


-<authorization>

<properties relative-to="jboss.domain.config.dir" path="application-roles.properties"/>

</authorization>

</security-realm>

</security-realms>


-<audit-log>


-<formatters>

<json-formatter name="json-formatter"/>

</formatters>


-<handlers>

<file-handler name="host-file" relative-to="jboss.domain.data.dir" path="audit-log.log" formatter="json-formatter"/>

<file-handler name="server-file" relative-to="jboss.server.data.dir" path="audit-log.log" formatter="json-formatter"/>

</handlers>


-<logger log-read-only="false" log-boot="true" enabled="false">


-<handlers>

<handler name="host-file"/>

</handlers>

</logger>


-<server-logger log-read-only="false" log-boot="true" enabled="false">


-<handlers>

<handler name="server-file"/>

</handlers>

</server-logger>

</audit-log>


-<management-interfaces>


-<http-interface security-realm="ManagementRealm">

<http-upgrade enabled="true"/>

<socket port="${jboss.management.http.port:9990}" interface="management"/>

</http-interface>

</management-interfaces>

</management>


-<domain-controller>

<local/>

</domain-controller>


-<interfaces>


-<interface name="management">

<inet-address value="172.16.0.63"/>

</interface>


-<interface name="public">

<inet-address value="172.16.0.63"/>

</interface>

</interfaces>


-<jvms>


-<jvm name="default">

<heap size="64m" max-size="256m"/>


-<jvm-options>

<option value="-server"/>

<option value="-XX:MetaspaceSize=96m"/>

<option value="-XX:MaxMetaspaceSize=256m"/>

</jvm-options>

</jvm>

</jvms>


-<servers>


-<server name="fluig1" group="fluig" auto-start="true">


-<jvm name="default">

<heap size="2g" max-size="4g"/>


-<jvm-options>

<option value="-Dfile.encoding=utf8"/>

<option value="-XX:MaxMetaspaceSize=1024m"/>

<option value="-Djavamelody.disabled=true"/>

<!-- Debug <option value="-Xdebug"/> <option value="-Xrunjdwp:transport=dt_socket,address=8787,server=y,suspend=n"/> Fim Debug -->


</jvm-options>

</jvm>

</server>

</servers>


-<profile>

<subsystem xmlns="urn:jboss:domain:core-management:1.0"/>


-<subsystem xmlns="urn:wildfly:elytron:8.0" final-providers="combined-providers" disallowed-providers="OracleUcrypto">


-<providers>


-<aggregate-providers name="combined-providers">

<providers name="elytron"/>

<providers name="openssl"/>

</aggregate-providers>

<provider-loader name="elytron" module="org.wildfly.security.elytron"/>

<provider-loader name="openssl" module="org.wildfly.openssl"/>

</providers>


-<audit-logging>

<file-audit-log name="local-audit" relative-to="jboss.domain.log.dir" path="audit.log" format="JSON"/>

</audit-logging>


-<security-domains>


-<security-domain name="ManagementDomain" permission-mapper="default-permission-mapper" default-realm="ManagementRealm">

<realm name="ManagementRealm" role-decoder="groups-to-roles"/>

<realm name="local" role-mapper="super-user-mapper"/>

</security-domain>

</security-domains>


-<security-realms>

<identity-realm name="local" identity="$local"/>


-<properties-realm name="ManagementRealm">

<users-properties relative-to="jboss.domain.config.dir" path="mgmt-users.properties" digest-realm-name="ManagementRealm"/>

<groups-properties relative-to="jboss.domain.config.dir" path="mgmt-groups.properties"/>

</properties-realm>

</security-realms>


-<mappers>


-<simple-permission-mapper name="default-permission-mapper" mapping-mode="first">


-<permission-mapping>

<principal name="anonymous"/>

<permission-set name="default-permissions"/>

</permission-mapping>


-<permission-mapping match-all="true">

<permission-set name="login-permission"/>

<permission-set name="default-permissions"/>

</permission-mapping>

</simple-permission-mapper>

<constant-realm-mapper name="local" realm-name="local"/>

<simple-role-decoder name="groups-to-roles" attribute="groups"/>


-<constant-role-mapper name="super-user-mapper">

<role name="SuperUser"/>

</constant-role-mapper>

</mappers>


-<permission-sets>


-<permission-set name="login-permission">

<permission class-name="org.wildfly.security.auth.permission.LoginPermission"/>

</permission-set>

<permission-set name="default-permissions"/>

</permission-sets>


-<http>


-<http-authentication-factory name="management-http-authentication" security-domain="ManagementDomain" http-server-mechanism-factory="global">


-<mechanism-configuration>


-<mechanism mechanism-name="BASIC">

<mechanism-realm realm-name="Management Realm"/>

</mechanism>

</mechanism-configuration>

</http-authentication-factory>

<provider-http-server-mechanism-factory name="global"/>

</http>


-<sasl>


-<sasl-authentication-factory name="management-sasl-authentication" security-domain="ManagementDomain" sasl-server-factory="configured">


-<mechanism-configuration>

<mechanism mechanism-name="JBOSS-LOCAL-USER" realm-mapper="local"/>


-<mechanism mechanism-name="DIGEST-MD5">

<mechanism-realm realm-name="ManagementRealm"/>

</mechanism>

</mechanism-configuration>

</sasl-authentication-factory>


-<configurable-sasl-server-factory name="configured" sasl-server-factory="elytron">


-<properties>

<property name="wildfly.sasl.local-user.default-user" value="$local"/>

</properties>

</configurable-sasl-server-factory>


-<mechanism-provider-filtering-sasl-server-factory name="elytron" sasl-server-factory="global">


-<filters>

<filter provider-name="WildFlyElytron"/>

</filters>

</mechanism-provider-filtering-sasl-server-factory>

<provider-sasl-server-factory name="global"/>

</sasl>

</subsystem>


-<subsystem xmlns="urn:jboss:domain:jmx:1.3">

<expose-resolved-model/>

<expose-expression-model/>

<remoting-connector/>

</subsystem>

</profile>

</host>
```

---

## Resposta #3

**Igor Rodrigues** (@fluigor.com.br) — 03/03/2022, 11:47 | ❤️ 1

Ola [@Mautresim](/u/mautresim)

fiz a análise do seu arquivo, e vou colocar logo abaixo o que pode ser o causador do não funcionamento.

Dados que estavam em seu arquivo

```javascript
<login-module code="com.totvs.foundation.auth.FoundationExtLdapLoginModule" flag="sufficient" module="com.totvs.foundation.auth">
                                <module-option name="java.naming.factory.initial" value="com.sun.jndi.ldap.LdapCtxFactory"/>
                                <module-option name="java.naming.provider.url" value="ldap://172.16.0.2:389/"/>
                                <module-option name="java.naming.security.authentication" value="simple"/>
                                <module-option name="java.naming.security.protocol" value=""/>
                                ***<module-option name="java.naming.security.principal" value="meuDominio\administrator"/>***
                                <module-option name="java.naming.security.credentials" value="ad!"/>
                                <module-option name="uidAttributeID" value="sAMAccountName"/>
                                <module-option name="baseFilter" value="(sAMAccountName={0})"/>
                                <module-option name="loginCombinedWithDatabase" value="true"/>
                                <module-option name="baseCtxDN" value="DC=meuDominio,DC=com,DC=br"/>
                                <module-option name="rolesCtxDN" value="DC=meuDominio,DC=com,DC=br"/>
                                <module-option name="hashAlgorithm" value="MD5"/>
                                <module-option name="hashEncoding" value="HEX"/>
                                <module-option name="principalClass" value="com.totvs.technology.foundation.common.TOTVSTechPrincipal"/>
                            </login-module>
                            <login-module code="com.totvs.foundation.auth.FoundationJwtLoginModule" flag="sufficient" module="com.totvs.foundation.auth">
                                <module-option name="password-stacking" value="useFirstPass"/>
                                <module-option name="principalClass" value="com.totvs.technology.foundation.common.TOTVSTechPrincipal"/>
                            </login-module>
```

Se repararmos o item destacado abaixo, está passando o formato de login diferente do documentado.

```javascript
***<module-option name="java.naming.security.principal" value="meuDominio\administrator"/>***
```

Link da documentação.
[https://tdn.totvs.com/pages/releaseview.action?pageId=257623389](https://tdn.totvs.com/pages/releaseview.action?pageId=257623389)

```javascript
<module-option name="java.naming.security.principal" value="<USUARIO>@<DOMINIO>"/> <!-- Exemplo: value="ldapportal@sp01.local" -->
```

---

## Resposta #4

**MAURO SIMOES** (@Mautresim) — 05/03/2022, 09:40

Caro [@fluigor.com.br](/u/fluigor.com.br), sua observação sobre a forma de fazer a passagem do usuário para conexão com o AD estava correta.
Entretanto, mesmo assim, mesmo alterando para a forma indicada por você, continua dando o mesmo erro.

---

## Resposta #5

**Wasley Santos** (@Wasley_Santos) — 16/01/2023, 18:04

Conseguiu resolver ?

---

## Resposta #6

**MAURO SIMOES** (@Mautresim) — 30/01/2023, 10:07

[@Wasley\_Santos](/u/wasley_santos) , nem tentei mais.

---

## Resposta #7

**Igor Rodrigues** (@fluigor.com.br) — 21/02/2023, 10:41

[@Wasley\_Santos](/u/wasley_santos)

Tu precisa de ajuda man! cole seu domain.xml aqui q tentamos de ajudar!

---

## Resposta #8

**MAURO SIMOES** (@Mautresim) — 12/07/2023, 11:56 | ❤️ 1

[@fluigor.com.br](/u/fluigor.com.br) me desculpe não ter respondido a sua boa vontade de ajudar. É que eu me afastei, involuntariamente. De qualquer modo, desisti mesmo. Não vale a pena, com tanto trabalho.

---
