# Consumo de serviços na API pública e no componente SDK

> **Fonte:** [https://tdn.totvs.com/pages/viewpage.action?pageId=198934765](https://tdn.totvs.com/pages/viewpage.action?pageId=198934765)

---

Atenção

Esta página foi revisada para considerar as novas configurações de server do fluig para a atualização 1.6.

Caso possua uma atualização anterior do fluig escolha a aba da versão 1.5.13 e anteriores nesta página.

# Índice



# Objetivo

* * *

Para utilizar os recursos do componente SDK, existem alguns pré-requisitos e exigências a serem seguidos, como:

-   Esta documentação é destinada ao desenvolvedor cliente e parceiro do fluig que deseja consumir interna e externamente os recursos disponíveis na API Pública e no componente SDK.

-   As operações na API Pública estão disponíveis através de chamadas REST, que são consumidas via HTTP.

-   As operações no componente SDK estão disponíveis após configuração do **fluig-sdk-api** no **classpath** da aplicação dessa forma, através de um **ServiceLocator**, é realizada a chamada ao serviço desejado. 



# Consumindo um serviço na API pública

* * *

Para utilizar um serviço da API Pública, deve ser utilizado o **protocolo OAuth** de autenticação, que através das chaves **Consumer Key**, **Consumer Secret**, configurados no **OAuth App** é gerado através do **OAuth Provider** com um novo **Token Access** e um **Token Secret**.

-   O **client** deve ser desenvolvido para suportar autenticação **OAuth 1.0a**.



## Consumindo um serviço do componente SDK a partir de eventos de JavaScript

* * *

Eventos de Workflow e Eventos de Personalização Social

Este recurso está disponível para eventos javascript de Workflow (que podem ser encontrados [aqui](https://tdn.totvs.com/display/fluig/Desenvolvimento+de+Workflow)) e também para Eventos Sociais (que podem ser encontrados [aqui](https://tdn.totvs.com/display/fluig/Eventos+Sociais)).



## Exemplos para utilização do componente SDK via eventos de JavaScript

* * *

**Exemplo 1**

```
function beforeTaskCreate(colleagueId){
	log.info(fluigAPI.getUserService().getCurrent());
}
```

**Exemplo 2** 

```
function beforeStateEntry(sequenceId) {
    if (sequenceId == 4) {
        var groupService = fluigAPI.getGroupService();

        var cardData = hAPI.getCardData(getValue("WKNumProces"));
        var groupId = hAPI.getCardValue("groupId");
        var users = new java.util.ArrayList();

        var it = cardData.keySet().iterator();
        while(it.hasNext()) {
            var field = it.next();
            if (field.startsWith("userName__")) {
                var user = cardData.get(field);
                if (!groupService.containsUser(groupId, user)) {
                    users.add(user);
                }
            }
        }
        if (!users.isEmpty()) {
            groupService.addUsers(groupId, users);
        }
    }
}
```

Observação

Veja também o [exemplo de uma aplicação web utilizando o fluig SDK](https://git.fluig.com/projects/SAMPLES/repos/componentes/browse/web-sdk) através do artefato **web-sdk**. Diponível no **[git.fluig](https://git.fluig.com/projects/SAMPLES/repos/componentes/browse)**.

# Consumindo um serviço no componente SDK

* * *

Para utilizar o recursos do componente SDK, existem alguns pré-requisitos e exigências a serem seguidos, como:

-   Incluir as configurações do servidor do nexus no Maven para realizar o *download* de artefatos de dependência.

    Importante!

    Para que as dependências sejam baixadas corretamente, é necessário fazer a autenticação no Nexus. Para isso, basta solicitar as credenciais de acesso ao Nexus para o time de Atendimento Fluig. [Clique aqui](https://tdn.totvs.com/pages/viewpage.action?pageId=870389961) e saiba como solicitar e utilizar as credenciais.


```
<?xml version="1.0" encoding="UTF-8"?>
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd">
	<servers>
	  <server>
    	<id>nexus</id>
	    <username>inserir_o_usuário_fornecido</username>
    	<password>inserir_a_senha_fornecida</password>
	  </server>
	</servers>
	<mirrors>
		<mirror>
			<id>nexus</id>
			<mirrorOf>*</mirrorOf>
			<name>Fluig Nexus Repository.</name>
			<url>http://nexus.fluig.com/content/groups/public</url>
		</mirror>
	</mirrors>
</settings>
```

-   Configurar o componente **fluig-sdk-api** no **classpath**.
-   No caso de criação de um novo projeto WEB ou Widget, seguir o seguinte padrão de projeto Maven **[fluigsdk.sample](https://tdn.totvs.com/download/attachments/198934765/fluigsdk.sample.zip?version=2&modificationDate=1495206493000&api=v2)**.
-   O novo projeto Maven deve ter por padrão as seguintes configurações no **pom.xml**:

```
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
 
	<dependencyManagement>
		<dependencies>
			<dependency>
				<groupId>com.fluig</groupId>
				<artifactId>fluig-sdk-bom</artifactId>
				<version>1.6.0</version>
				<type>pom</type>
				<scope>import</scope>
			</dependency>
		</dependencies>
	</dependencyManagement>
 		<dependencies>
		<dependency>
			<groupId>com.fluig</groupId>
			<artifactId>fluig-sdk-api</artifactId>
		</dependency>
		<dependency>
			<groupId>com.fluig</groupId>
			<artifactId>fluig-sdk-common</artifactId>
		</dependency>
		<dependency>
			<groupId>javax</groupId>
			<artifactId>javaee-api</artifactId>
			<scope>provided</scope>
		</dependency>
	</dependencies>
	<build>
		<finalName>fluigsdk.sample</finalName>
		<plugins>
			<plugin>
				<groupId>org.apache.maven.plugins</groupId>
				<artifactId>maven-war-plugin</artifactId>
				<version>2.2</version>
				<configuration>
					<filteringDeploymentDescriptors>true</filteringDeploymentDescriptors>
					<failOnMissingWebXml>false</failOnMissingWebXml>
					<archive>
						<manifestEntries>
							<Dependencies>org.slf4j, com.fluig.api, com.fluig.api.common</Dependencies>
						</manifestEntries>
					</archive>
				</configuration>
			</plugin>
		</plugins>
	</build>
</project>
```

```
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">

	<dependencyManagement>
		<dependencies>
			<dependency>
				<groupId>com.fluig</groupId>
				<artifactId>fluig-sdk-bom</artifactId>
				<version>1.5.0</version>
				<type>pom</type>
				<scope>import</scope>
			</dependency>
		</dependencies>
	</dependencyManagement>
 		<dependencies>
		<dependency>
			<groupId>com.fluig</groupId>
			<artifactId>foundation-security-authentication-saml</artifactId>
			<scope>compile</scope>
		</dependency>
		<dependency>
			<groupId>com.fluig</groupId>
			<artifactId>fluig-sdk-api</artifactId>
		</dependency>
		<dependency>
			<groupId>com.fluig</groupId>
			<artifactId>fluig-sdk-common</artifactId>
		</dependency>
		<dependency>
			<groupId>javax</groupId>
			<artifactId>javaee-api</artifactId>
			<scope>provided</scope>
		</dependency>
	</dependencies>
	<build>
		<finalName>fluigsdk.sample</finalName>
		<plugins>
			<plugin>
				<groupId>org.apache.maven.plugins</groupId>
				<artifactId>maven-war-plugin</artifactId>
				<version>2.2</version>
				<configuration>
					<filteringDeploymentDescriptors>true</filteringDeploymentDescriptors>
					<failOnMissingWebXml>false</failOnMissingWebXml>
					<archive>
						<manifestEntries>
							<Dependencies>org.slf4j, com.fluig.api, com.fluig.api.common</Dependencies>
						</manifestEntries>
					</archive>
				</configuration>
			</plugin>
		</plugins>
	</build>
</project>
```

-   Se atentar para as configurações **padrão de autenticação** e **security-role** localizadas no **jboss-web.xml** e **web.xml** conforme abaixo:

```
<?xml version="1.0" encoding="UTF-8"?>
<jboss-web>
	<context-root>/sample</context-root>
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

```
<?xml version="1.0" encoding="UTF-8"?>
<jboss-web>
	<context-root>/sample</context-root>
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

-   No arquivo **web.xml:**

```
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
		<auth-method>FORM,FLUIGAUTH</auth-method>
		<realm-name>TOTVSTech</realm-name>
		<form-login-config>
			<form-login-page>/login.jsp</form-login-page>
			<form-error-page>/loginfail.jsp</form-error-page>
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
```

```
<security-role>
		<role-name>totvstech</role-name>
	</security-role>
	<security-role>
		<role-name>user</role-name>
	</security-role>
	<security-role>
		<role-name>sysadmin</role-name>
	</security-role>
```

-   Realizar **lookup** do serviço via **ServiceLocator**. Seguir padrão da **Super Classe fluigAPI**.



## Serviços disponíveis no componente SDK

* * *

-   -   [ArticleService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/ArticleService.html)

    -   [CardIndexService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardIndexService.html)

    -   [CardService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardService.html)

    -   [CollaborationSDKService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/CollaborationSDKService.html)

    -   [CommunityService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/CommunityService.html)

    -   [ContentFilesService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/ContentFilesService.html)

    -   [DocumentService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/DocumentService.html)

    -   [FavoritesService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/FavoritesService.html)

    -   [FolderDocumentService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/FolderDocumentService.html)

    -   [GlobalParameterService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/GlobalParameterService.html)

    -   [GroupService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/GroupService.html)

    -   [I18NService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/I18NService.html)

    -   [PageService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/PageService.html)

    -   [PostService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/PostService.html)

    -   [SecurityService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/SecurityService.html)

    -   [SocialBreadcrumbService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/SocialBreadcrumbService.html)

    -   [TasksService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/TasksService.html)

    -   [TenantService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/TenantService.html)

    -   [UserService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/UserService.html)

    -   [WorkflowService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html)




## Exemplo para Instanciar Serviço do SDK

* * *

Veja a seguir o exemplo para a chamado ao serviço no SDK:

```
private UserService getUserServiceSDK() throws SDKException {
	return new FluigAPI().getUserService();
}
```



# Auto completar eventos da fluigAPI

* * *

Este serviço permite visualizar no **Studio** uma lista com todos os métodos disponíveis no **fluigAPI**. Digitando "**fluigAPI.**" e em seguida apertando o atalho **CTRL + Espaço**, a lista de métodos será apresentada.

Por exemplo, ao usar um método com retorno, **fluigAPI.getWorkflowService()** o usuário poderá listar os métodos deste retorno, como **fluigAPI.getWorkflowService().createObervation()**.

Também é possível criar facilmente os objetos que são utilizados nos métodos.

Para isso, basta digitar, por exemplo, **new ProcessObservationVO** e acionar **CTRL + Espaço** que o plugin irá alterar o trecho automaticamente para **new com.fluig.sdk.api.workflow.ProcessObservationVO();**

Atenção!

Este serviço está disponível a partir da [Atualização 1.5.13](https://tdn.totvs.com/pages/viewpage.action?pageId=267801630) da plataforma. Siga os procedimentos do [Guia de atualização fluig Studio](https://tdn.totvs.com/pages/viewpage.action?pageId=240298991) para atualizar o plugin.
