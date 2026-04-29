# Login Único

> **Fonte:** [https://tdn.totvs.com/pages/viewpage.action?pageId=185757267](https://tdn.totvs.com/pages/viewpage.action?pageId=185757267)

---

Atenção

Esta página foi revisada para atualizações 1.6 e superiores do TOTVS Fluig Plataforma.

Caso possua uma atualização anterior escolha o tópico da versão 1.5.13 e anteriores desta página.

# Índice



# Objetivo

* * *

O objetivo deste documento é direcionar desenvolvedores que desejam criar *widgets* e componentes para o TOTVS Fluig Plataforma, aproveitando sua infraestrutura de autenticação.



# Single Sign-On (SSO)

* * *

O Single Sign-On ou login único, é um mecanismo pelo qual é possível um usuário obter acesso a múltiplos serviços autenticando-se apenas uma vez em algum destes serviços.

Na plataforma TOTVS Fluig a autenticação deve ser sempre iniciada na própria plataforma (acessando a Home e informando usuário/senha). A partir daí então, os *widgets* e componentes poderão fazer uso do SSO para confiarem na autenticação.

Uma vez autenticado, os *widgets* poderão acessar os serviços do fluig (por exemplo, API pública) diretamente, sem a necessidade de fazer uma autenticação a cada requisição (por exemplo, via OAuth).



# A partir da atualização 1.6

* * *

A autenticação das widgets via SSO depende de três arquivos:



-   Localizado dentro da pasta **WEB-INF**, o arquivo **web.xml** deve conter o seguinte conteúdo:

```
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://java.sun.com/xml/ns/javaee" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_3_0.xsd"
	version="3.0">
	<security-constraint>
		<display-name>REST</display-name>
		<web-resource-collection>
			<web-resource-name>REST</web-resource-name>
			<description>REST</description>
			<url-pattern>/api/rest/*</url-pattern>
		</web-resource-collection>
		<auth-constraint>
			<description>REST</description>
			<role-name>user</role-name>
		</auth-constraint>
	</security-constraint>
    <login-config>
        <auth-method>FLUIGAUTH, FORM</auth-method>
        <realm-name>TOTVSTech</realm-name>
        <form-login-config>
            <form-login-page>/login.jsp</form-login-page>
        </form-login-config>
    </login-config>
    <security-role>
        <role-name>totvstech</role-name>
    </security-role>
    <security-role>
        <role-name>user</role-name>
    </security-role>
    <security-role>
        <role-name>sysadmin</role-name>
    </security-role>
</web-app>
```

-   Deve-se atentar para a tag **<security-constraint>**, que define os caminhos que irão precisar de autenticação para serem acessados (no exemplo, **<contexto-da-windget>/api/rest/\***).
-   Deve-se conter pelo menos uma tag **<security-constraint>.** A quantidade desta tag pode variar conforme necessidade.

-   Localizado dentro da pasta **WEB-INF**, o arquivo **jboss-web.xml** deve conter o seguinte conteúdo:

```
<?xml version="1.0" encoding="UTF-8"?>
<jboss-web>
    <context-root>/[contexto-da-widget]</context-root>
    <disable-cross-context>false</disable-cross-context>

    <security-domain>TOTVSTech</security-domain>
    <security-role>
		<role-name>user</role-name>
		<principal-name>totvstech</principal-name>
	</security-role>
	<security-role>
		<role-name>totvstech</role-name>
		<principal-name>totvstech</principal-name>
	</security-role>
	<security-role>
		<role-name>sysadmin</role-name>
		<principal-name>wcmadmin</principal-name>
	</security-role>
	<security-role>
		<role-name>admin</role-name>
		<principal-name>wcmadmin</principal-name>
	</security-role>
</jboss-web>
```

-   Deve-se atentar para a tag **<context-root>**, que define o contexto que fará parte da URL para acessar recursos estáticos (js, css, etc.) dessa widget.

-   Localizado dentro da pasta **WEB-INF**, o arquivo **beans.xml** deve conter o seguinte conteúdo:

```
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://java.sun.com/xml/ns/javaee"
	   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	   xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/beans_1_0.xsd">
</beans>
```



# Atualização 1.5.13 e Anteriores

* * *

A autenticação das widgets via SSO depende de quatro arquivos:



-   Localizado dentro da pasta **WEB-INF**, o arquivo **web.xml** deve conter o seguinte conteúdo:

```
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://java.sun.com/xml/ns/javaee" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_3_0.xsd"
	version="3.0">
	<security-constraint>
		<display-name>REST</display-name>
		<web-resource-collection>
			<web-resource-name>REST</web-resource-name>
			<description>REST</description>
			<url-pattern>/api/rest/*</url-pattern>
		</web-resource-collection>
		<auth-constraint>
			<description>REST</description>
			<role-name>user</role-name>
		</auth-constraint>
	</security-constraint>
    <login-config>
        <auth-method>FORM</auth-method>
        <realm-name>TOTVSTech</realm-name>
        <form-login-config>
            <form-login-page>/login.jsp</form-login-page>
        </form-login-config>
    </login-config>
    <security-role>
        <role-name>totvstech</role-name>
    </security-role>
    <security-role>
        <role-name>user</role-name>
    </security-role>
    <security-role>
        <role-name>sysadmin</role-name>
    </security-role>
</web-app>
```

-   Deve-se atentar para a tag **<security-constraint>**, que define os caminhos que irão precisar de autenticação para serem acessados (no exemplo, **<contexto-da-windget>/api/rest/\***).
-   Deve-se conter pelo menos uma tag **<security-constraint>.** A quantidade desta tag pode variar conforme necessidade.

-   Localizado dentro da pasta **WEB-INF**, o arquivo **jboss-web.xml** deve conter o seguinte conteúdo:

```
<?xml version="1.0" encoding="UTF-8"?>
<jboss-web>
    <context-root>/[contexto-da-widget]</context-root>
    <disable-cross-context>false</disable-cross-context>

    <security-domain>TOTVSTech</security-domain>
    <security-role>
		<role-name>user</role-name>
		<principal-name>totvstech</principal-name>
	</security-role>
	<security-role>
		<role-name>totvstech</role-name>
		<principal-name>totvstech</principal-name>
	</security-role>
	<security-role>
		<role-name>sysadmin</role-name>
		<principal-name>wcmadmin</principal-name>
	</security-role>
	<security-role>
		<role-name>admin</role-name>
		<principal-name>wcmadmin</principal-name>
	</security-role>
    <valve>
        <class-name>com.totvs.technology.auth.saml.TOTVSAuthenticatorValve</class-name>
    </valve>
</jboss-web>
```

-   Deve-se atentar para a tag **<context-root>**, que define o contexto que fará parte da URL para acessar recursos estáticos (js, css, etc.) dessa widget.

-   Localizado dentro da pasta **WEB-INF**, o arquivo **beans.xml** deve conter o seguinte conteúdo:

```
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://java.sun.com/xml/ns/javaee"
	   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	   xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/beans_1_0.xsd">
</beans>
```

-   Localizado dentro da pasta **WEB-INF/lib**.
-   O arquivo pode ser obtido no endereço http://nexus.fluig.com/content/groups/public/com/fluig/foundation-security-authentication-saml/\[versao-do-fluig.
-   Ou, para widgets gerenciadas pelo Maven, esse arquivo é adicionado usando a seguinte dependência:

```
<dependency>
	<groupId>com.fluig</groupId>
	<artifactId>foundation-security-authentication-saml</artifactId>
	<scope>compile</scope>
	<version>[versão-do-fluig]</version>
</dependency>
```
