# Eventos Globais

> **Fonte:** [https://tdn.totvs.com/display/fluig/Eventos+Globais](https://tdn.totvs.com/display/fluig/Eventos+Globais)

---

* * *

Diferentemente dos eventos de processo, documentos ou formulários — que são executados apenas para um item específico — os **eventos globais** são acionados sempre que uma ação geral é realizada na plataforma. Eles são executados automaticamente antes ou depois da ocorrência de determinadas ações, como aprovação de documentos, movimentação de processos ou publicação de comentários.

Esses eventos podem ser personalizados por meio do [Motor de personalização do Fluig](https://tdn.totvs.com/x/2oEiLQ) e permitem tratar ações tanto antes ***(before)*** quanto depois ***(after)*** da execução do evento.



 

### SocialPostEventVO

Veja o exemplo em nosso repositório [aqui](https://git.fluig.com/projects/SAMPLES/repos/projetos/browse).



# Desenvolvimento de Eventos

* * *

O desenvolvimento de eventos é realizado pela criação de scripts na linguagem “JavaScript”. O código de implementação de cada script é armazenado em banco de dados e dispensa o uso de quaisquer outros arquivos, como por exemplo, “custom.p”.

Atenção

Para que um usuário que não é administrador da empresa possa criar, importar, editar e remover eventos globais é necessário que ele possua a permissão **Configurar Eventos Globais**. Esta permissão pode ser concedida pelo administrador através do item **Permissões** disponível no agrupador **Pessoas** do **Painel de Controle**.

Saiba como realizar esse procedimento [clicando aqui](https://tdn.totvs.com/pages/viewpage.action?pageId=269431799).

Os desenvolvimentos sobre a plataforma são feitos pelo administrador, a partir do Fluig Studio.

**01.** Em Projeto Fluig, clique com o botão direito sobre a pasta ***events*** e em seguida ***Novo** -> **Evento Global fluig*** conforme a imagem abaixo.

**Figura 1 - Criação de evento - fluig Studio.**

**02.** Em seguida informe o **Servidor** e **Nome** do Evento que será adicionado. Uma tela para edição do evento será aberta, conforme a imagem abaixo:

**Figura 2 - Criação de evento - fluig Studio.**

É possível observar também que o arquivo .js foi adicionado na pasta *events* do projeto.



O Fluig permite utilizar o log de execução nos eventos desenvolvidos sobre a plataforma. Através da variável global **log** é possível obter o feedback da execução de cada evento. Existem quatro níveis de log, são eles:

-   **ERROR:** apresentação de erros.
-   **DEBUG:** depurar a execução.
-   **WARN:** informar possível problema de execução.
-   **INFO:** apresentação de mensagens.



A apresentação de cada um dos tipos de log está condicionada a configuração do servidor de aplicação.


EXEMPLO

 No servidor de aplicação, por padrão, as mensagens do tipo **info** e **warn** são apresentadas no console do servidor e as do tipo debug, error são apresentadas no arquivo de log. Abaixo um exemplo de uso do log em script:

```
log.info("Testando o log info");
```

Teríamos no console do servidor a mensagem “**Testando o log info**”.



Atenção

-   A maioria dos eventos utiliza o parâmetro **WKUser** para identificar o usuário responsável pela ação. Quando é utilizada a funcionalidade de **substituto** (em que um usuário pode atuar em nome de outro), o valor retornado em **WKUser** será sempre o usuário que está efetivamente logado no sistema no momento da ação.

EXEMPLO
Ana definiu Bruno como seu substituto. Ao acessar o sistema, Bruno realiza uma ação em nome de Ana. Nesse caso, os eventos que utilizam **WKUser** irão retornar o código do usuário **Bruno**, e não o de Ana.



-   Em todos os eventos, é possível realizar chamadas aos serviços disponíveis na API pública. Para saber como utilizá-la nesse contexto, consulte o nosso [guia de consumo da API pública em eventos](https://tdn.totvs.com/x/7YDbCw).



## Eventos do tipo **Before**

* * *

De forma geral, os eventos do tipo **before** são executados antes que a ação que os disparou seja efetivada. Com isso, é possível filtrar os dados que serão processados ou até mesmo impedir que a ação seja concluída.

Para bloquear a ação, basta lançar uma **Exception** contendo uma mensagem de texto, que será exibida ao usuário no formato de *toast*.


EXEMPLO

```
throw "Você não pode efetuar esta ação após as 18 horas."
```



## Eventos do tipo **After**

* * *

Os eventos do tipo **after** são executados somente após a ação ser efetivada e não exercem influência sobre ela. Isso significa que qualquer alteração realizada nos parâmetros recebidos dentro do evento **não será refletida** nos dados já persistidos pela ação.

Outra característica importante desse tipo de evento é que **não devem lançar exceções**. Caso uma exceção seja lançada, ela será ignorada pelo sistema e não produzirá nenhum efeito prático.



# Eventos Gerais Disponíveis

* * *

A seguir serão detalhados os eventos gerais disponíveis no Fluig. Eventos que podem ser disparados sem exclusividade de atividades específicas. 

### DisplayCentralTasks

Este evento é disparado sempre antes de ser exibida a central de tarefas. Através dele é possível inserir, alterar ou remover os links da central de tarefas. O evento recebe como parâmetro um **LinkedHashMap** com os links disponíveis na central de tarefas.



-   Exemplo adicionando um link customizado ao final dos itens da central de tarefas:

```
function displayCentralTasks (links){
links.put("Fluig","http://www.fluig.com");
}
```



-   Exemplos alterando a ordem de exibição dos links padrões e adicionando três novos, um no início e dois ao final:

```
function displayCentralTasks (links){
	var _links = new java.util.LinkedHashMap();
	_links.put("Fluig","http://www.fluig.com");
    var it = links.keySet().iterator();
    while (it.hasNext()) {
       var key = it.next();
       _links.put(key, links.get(key));
	}
	_links.put("Fluig - DEV" ,"http://dev.fluig.com");
	_links.put("Google","http://www.google.com.br/search?sourceid=chrome&ie=UTF-8&q=" + getValue("WKUser"));

	links.clear();
	links.putAll(_links);
}
```



Disponibilizamos algumas informações sobre o usuário e a empresa, porém somente para consulta através do método getValue.

WKUser

Código do usuário

WKCompany

Número da empresa

```
function displayCentralTasks (links){
log.info("Usuário: " + getValue("WKUser"));
}
```



### DisplayCustomMetadata

Este evento é disparado sempre antes de ser exibidos os campos customizados de um documento, tanto na publicação como edição. Através dele é possível sugerir valores iniciais para campos customizados dos metadados de um documento. O evento recebe como parâmetro uma referência aos campos customizados.

```
function displayCustomMetadata(fields){
}
```

No contexto deste evento a variável fields pode ser usada para consultar ou modificar os valores dos campos customizados de um documento. Não permitindo adicionar novos campos.

Para inserir novos campos em um documento existe diversos maneiras disponíveis.

-   Pela herança da pasta pai.
-   No cadastro de Campos Customizados, marcando a opção *Mostrar em todos documentos* ou da forma padrão.
-   Através do WebService CustomFieldsService.
-   Na edição dos metadados do documento, pelo usuário.



Para consultar o valor de um campo customizado neste evento, utiliza-se o fields.getValue passando como parâmetro o código do campo desejado. Retornando “null”, casso o campo não esteja disponível para este documento.

```
function displayCustomMetadata(fields){
	log.info("Valor do Campo 1: " + fields.getValue("campo1"));
}
```



Já pra a edição utiliza-se o fields.setValue, passando como parâmetro, primeiro o nome do campo, em seguida o valor.

```
function displayCustomMetadata(fields){
	fields.setValue("campo1","Valor para o Campo 1");
}
```



Alem dos valores dos campos customizados disponibilizamos algumas informações do documento que está sendo criado ou editado, porém somente para consulta através do método getValue.

WKUser

Código do usuário

WKCompany

Número da empresa

WKNumParentDocument

Número da pasta pai

WKDocumentType

Tipo do documento

WKPrivateDocument

Se o documento esta sendo publicado na pasta particular (true/false)

```
function displayCustomMetadata(fields){
	log.info("Usuário: " + getValue("WKUser"));
}
```



### BeforeWatchContent

Utilizado quando ao acompanhar algum conteúdo se deseja recuperar informações do registro e usar antes da ação de "acompanhar". Por exemplo, ao acompanhar um documento, é possível recuperar suas informações e usá-las em um dataset.

```
function beforeWatchContent(companyId, watchDTO){
}
```



Sendo os parâmetros:

Propriedade

Descrição

Tipo

companyId

Código da Empresa

int

watchDTO

Dados do registro

WatchDTO

```
function beforeWatchContent(companyId, watchDTO){
	if(watchDTO.getSocialWatchType() == "DOCUMENT"){
		var objClass = "com.totvs.technology.social.document.6";
		var objClass = watchDTO.getObjectClass();
		var patt = new RegExp( /\d+/) ;
		var documentId = patt.exec(objClass) ;
		var documentVersion = watchDTO.getObjectId();
		var doc = getValue("WKDocument");
		var company = companyId;
		var ds ;
		try {
			var c1 = DatasetFactory.createConstraint( "allocatedDocumentPK.companyId", company, company, ConstraintType.MUST);
			var c2 = DatasetFactory.createConstraint("allocatedDocumentPK.sourceDocument",documentId,documentId, ConstraintType.MUST);
			var c3 = DatasetFactory.createConstraint("allocatedDocumentPK.sourceVersion", documentVersion,documentVersion, ConstraintType.MUST);
			var c4 = DatasetFactory.createConstraint("active", "true","true",ConstraintType.MUST);
			var constraints = new Array(c1, c2, c3, c4);

			ds = DatasetFactory.getDataset("allocatedDocument", null, constraints, null);
		}catch (e) {
			log.error("Erro ao tentar recuperar o documento em CheckOut: " + e.message);
		}

		if(ds!=null && ds.rowsCount>0){
		 throw  "Sua solicitação de notificação foi negada, pois o documento está em checkout." ;
		}
	}
}
```



### AfterWatchContent

Utilizado quando ao acompanhar algum conteúdo se deseja recuperar informações do registro e usar após a ação de "acompanhar". Por exemplo, ao acompanhar um post, é possível recuperar suas informações e usá-las para informar o usuário sobre o autor do post.

```
function afterWatchContent(companyId, watchDTO){
}
```



Sendo os parâmetros:

Propriedade

Descrição

Tipo

companyId

Código da Empresa

int

watchDTO

Dados do registro

WatchDTO

```
function afterWatchContent(companyId, watchDTO){
	if(watchDTO.getSocialWatchType() == "POST"){
		throw "O usuário "+watchDTO.getUserAlias()+" vai ser notificado sobre o post " + watchDTO.getText() + " do autor " + watchDTO.getPostAuthor() ;
	}
}
```



### BeforeUnwatchContent

Utilizado quando ao deixar de acompanhar algum conteúdo se deseja recuperar informações do registro e usar antes da ação de "deixar de acompanhar". Por exemplo, ao tentar deixar de acompanhar uma comunidade, é possível decidir se o usuário pode deixar de acompanhá-la.

```
function beforeUnwatchContent(companyId, watchDTO){
}
```



Sendo os parâmetros:

Propriedade

Descrição

Tipo

companyId

Código da Empresa

int

watchDTO

Dados do registro

WatchDTO

```
function beforeUnwatchContent(companyId, watchDTO){
	if(watchDTO.getSocialWatchType() == "COMMUNITY"){

		throw "Você não pode deixar de ser notificado sobre a comunidade " + watchDTO.getDescription() ;
	}
}
```



### AfterUnwatchContent

Utilizado quando ao deixar de acompanhar algum conteúdo se deseja recuperar informações do registro e usar após a ação de "deixar de acompanhar". Por exemplo, ao deixar de acompanhar um post, é possível recuperar suas informações e informar o usuário que aquele post possui muitos seguidores.

```
function afterUnwatchContent(companyId, watchDTO){
}
```



Sendo os parâmetros:

Propriedade

Descrição

Tipo

companyId

Código da Empresa

int

watchDTO

Dados do registro

WatchDTO

```
function afterUnwatchContent(companyId, watchDTO){
	if(watchDTO.getSocialWatchType() == "POST" && watchDTO.getNumberWatchers() < 3 ){
		log.erro("O post   \"" + watchDTO.getText() + "\" do autor " + watchDTO.getPostAuthor() + " deixou de ser polemico" )
	}
}
```



### beforeCreateUser

Evento disparado antes da criação de um novo usuário. Pode ser utilizado quando for necessário realizar validações no usuário antes da sua criação ou adicionar dados adicionais programaticamente.

```
function beforeCreateUser(user) {
}
```

Somente os atributos firstName, lastName, fullName podem ser modificados. Para adicionar dados adicionais para o usuário deve ser utilizado o método **addData** do UserEventVO.



Parâmetro da função:

Propriedade

Descrição

Tipo

user

Objeto que contém as informações do usuário

[UserEventVO](#EventosGlobais-UserEventVO)



-   Exemplo de implementação:

```
function beforeCreateUser(user) {
	// Verifica se a senha informada atende os requisitos mínimos
	var passwordPattern = "((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,16})";
	if (!user.getPassword().matches(passwordPattern)) {
		throw "A senha do usuário não atendeu os requisitos mínimos!";
	}

	// Adiciona um dado adicional ao usuário informando a sua data de criação
	var dateFormat = new java.text.SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
	user.putData("CreationDate", dateFormat.format(new Date()));
}
```



### afterCreateUser

Evento disparado depois da criação de um novo usuário. Pode ser utilizado quando for necessário realizar alguma rotina com o usuário criado, como exemplo a criação de recursos adicionais para o usuário.

```
function afterCreateUser(user) {
}
```



Parâmetro da função:

Propriedade

Descrição

Tipo

user

Objeto que contém as informações do usuário

[UserEventVO](#EventosGlobais-UserEventVO)



-   Exemplo de implementação:

```
function afterCreateUser(user) {
	// Instância um cliente da API pública do Fluig. O usuário aplicativo utilizado
	// precisa ser um administrador do Fluig
	// Documentação para criar usuário aplicativo: http://tdn.totvs.com/x/KAFlDw
	var consumer = oauthUtil.getNewAPIConsumer(
			"e3fe3d72-bfcc-4552-8c9b-93c66531dab9", //Consumer Key do OAuth App
			"6bd0591b-73d8-4a9e-a161-d54dd92d3172-5a21991e-453f-4ea1-b80c-f42d4c57759d", //Consumer Secret do OAuth App
			"11a419dd-0c8a-4388-bd32-d66319bd750b", //Access Token do Usuário Aplicativo
			"fd2b53a4-b43d-4118-9725-68abaa1b41a9ee584784-73b2-454b-942f-5e07ad114234"); //Token Secret do Usuário Aplicativo

	// Adiciona o usuário criado na comunidade RH através da utilização do método
	// addParticipants do serviço de comunidades da API Pública
	// Alterar a comunidade RH para a comunidade que deseja realizar a ação em seu ambiente
	var postJson = '{"communityAlias": "RH", "userAliases": ["' + user.getLogin() + '"]}';
	consumer.post("/public/social/community/addParticipants", postJson);
}
```



### beforeUpdateUser

Evento disparado antes da atualização de um usuário. Pode ser utilizado quando for necessário realizar validações no usuário antes da sua atualização ou adicionar dados adicionais programaticamente.

```
function beforeUpdateUser(user) {
}
```

Somente os atributos firstName, lastName, fullName podem ser modificados. Para adicionar dados adicionais para o usuário deve ser utilizado o método **addData** do UserEventVO.

Para verificar se a senha do usuário foi alterada basta utilizar o método **getPassword**, onde caso seja retornado algum valor significa que a senha foi alterada. Já para verificar se a atualização do usuário foi realizada por ele próprio, através da edição de perfil, é necessário comparar o login do usuário recebido como parâmetro, através do método **getLogin** com o login do usuário corrente, resgatado através da chamada **getValue("WKUser")**, onde caso sejam iguais significa que a atualização foi realizada pelo próprio usuário.



EXEMPLO

```
// Verifica se foi alterada a senha do usuário
if (user.getPassword() != null) {
	doSomething();
}
 
// Verifica se a atualização do usuário foi realizada por ele próprio
if (user.getLogin().equals(getValue("WKUser"))) {
	doSomething();
}
```



Parâmetro da função:

Propriedade

Descrição

Tipo

user

Objeto que contém as informações do usuário

[UserEventVO](#EventosGlobais-UserEventVO)



-   Exemplo de implementação:

```
function beforeUpdateUser(user) {
	// Verifica se foi alterada a senha do usuário
	if (user.getPassword() != null) {
		// Caso a senha tenha sido alterada verifica se ela atende os requisitos mínimos
		var passwordPattern = "((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,16})";
		if (!user.getPassword().matches(passwordPattern)) {
			throw "A senha do usuário não atendeu os requisitos mínimos!";
		}
	}

	// Adiciona um dado adicional ao usuário informando a última data de atualização
	var dateFormat = new java.text.SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
	user.putData("LastUpdateDate", dateFormat.format(new Date()));
}
```



### afterUpdateUser

Evento disparado depois da atualização de um usuário, ou após a gravação de uma nova senha, pelo recurso de reset de senha da [tela de login](https://tdn.totvs.com/pages/viewpage.action?pageId=389547065).

O evento *afterUpdateUser* será disparado no reset de senha pela tela de login a partir da **atualização 1.6.5 ou superior**.



Esse evento pode ser utilizado quando for necessário realizar alguma rotina com o usuário atualizado, como exemplo a atualização de recursos adicionais do usuário.

```
function afterUpdateUser(user) {
}
```

Para verificar se a senha do usuário foi alterada basta utilizar o método **getPassword**, onde caso seja retornado algum valor significa que a senha foi alterada. Já para verificar se a atualização do usuário foi realizada por ele próprio, através da edição de perfil, é necessário comparar o login do usuário recebido como parâmetro, através do método **getLogin** com o login do usuário corrente, resgatado através da chamada **getValue("WKUser")**, onde caso sejam iguais significa que a atualização foi realizada pelo próprio usuário.



EXEMPLO

```
// Verifica se foi alterada a senha do usuário
if (user.getPassword() != null) {
	doSomething();
}
 
// Verifica se a atualização do usuário foi realizada por ele próprio
if (user.getLogin().equals(getValue("WKUser"))) {
	doSomething();
}
```



Parâmetro da função:

Propriedade

Descrição

Tipo

user

Objeto que contém as informações do usuário

[UserEventVO](#EventosGlobais-UserEventVO)



-   Exemplo de implementação:

```
function afterUpdateUser(user) {
	log.info("O usuário " + user.getFullName() + " foi alterado.");
}
```



### beforeDeactivateUser

Evento disparado antes da desativação de um usuário. Pode ser utilizado quando for necessário realizar validações no usuário antes da sua desativação.

```
function beforeDeactivateUser(login) {
}
```



Parâmetro da função:

Propriedade

Descrição

Tipo

login

Login do usuário a ser desativado

String



-   Exemplo de implementação:

```
function beforeDeactivateUser(login) {
	// Instância um cliente da API pública do Fluig. O usuário aplicativo utilizado
	// precisa ser um administrador do Fluig
	var consumer = oauthUtil.getNewAPIConsumer(
			"e3fe3d72-bfcc-4552-8c9b-93c66531dab9",
			"6bd0591b-73d8-4a9e-a161-d54dd92d3172-5a21991e-453f-4ea1-b80c-f42d4c57759d",
			"11a419dd-0c8a-4388-bd32-d66319bd750b",
			"fd2b53a4-b43d-4118-9725-68abaa1b41a9ee584784-73b2-454b-942f-5e07ad114234");

	// Verifica se o usuário que esta sendo desativado é moderador de alguma comunidade.
	var moderateCommunities = [];
	var communities = JSON.parse(consumer.get("/public/social/community/listCommunities")).content;
	for (var i in communities) {
		var isModerator = JSON.parse(consumer.get("/public/social/community/isCommunityModerator/"
				+ communities[i].alias + "/" + login)).content;
		if (isModerator) {
			moderateCommunities.push(communities[i].name);
		}
	}

	// Caso o usuário seja moderador de alguma comunidade lança uma exceção informando que
	// o usuário é moderador de comunidades e não pode ser desativado
	if (moderateCommunities.length > 0) {
		throw "O usuário " + login + " não pode ser desativado por ser moderador nas comunidades: "
				+ moderateCommunities.join(", ") + ".";
	}
}
```



### afterDeactivateUser

Evento disparado depois da desativação de um usuário. Pode ser utilizado quando for necessário realizar alguma rotina com o usuário desativado.

```
function afterDeactivateUser(login) {
}
```



Parâmetro da função:

Propriedade

Descrição

Tipo

login

Login do usuário desativado

String



-   Exemplo de implementação:

```
function afterDeactivateUser(login) {
	// Busca um serviço customizado cadastrado no Fluig e invoca um método específico dele
	var provider = ServiceManager.getServiceInstance("CustomService");
    var serviceLocator = provider.instantiate("com.fluig.sample.service.CustomService_Service");
    var service = serviceLocator.getCustomServicePort();
	service.deactivateUser(login);

	log.info("O usuário " + login + " foi desativado no serviço customizado.");
}
```



### beforeActivateUser

Evento disparado antes da ativação de um usuário. Pode ser utilizado quando for necessário realizar validações no usuário antes da sua ativação.

```
function beforeActivateUser(login) {
}
```



Parâmetro da função:

Propriedade

Descrição

Tipo

login

Login do usuário a ser ativado

String



-   Exemplo de implementação:

```
function beforeActivateUser(login) {
	// Busca um serviço customizado cadastrado no Fluig e invoca um método específico dele
	var provider = ServiceManager.getServiceInstance("CustomService");
    var serviceLocator = provider.instantiate("com.fluig.sample.service.CustomService_Service");
    var service = serviceLocator.getCustomServicePort();

    // Caso o usuário esteja desativado no serviço customizado lança uma exceção informando
	// que o usuário está desativado no serviço customizado e não pode ser ativado no Fluig
    if (service.isDeactivatedUser(login)) {
		throw "O usuário " + login + " está desativado no serviço customizado e não pode ser ativado!";
    }
}
```



### afterActivateUser

Evento disparado depois da ativação de um usuário. Pode ser utilizado quando for necessário realizar alguma rotina com o usuário ativado.

```
function afterActivateUser(login) {
}
```



Parâmetro da função:

Propriedade

Descrição

Tipo

login

Login do usuário ativado

String



-   Exemplo de implementação:

```
function afterActivateUser(login) {
	// Busca um serviço customizado cadastrado no Fluig e invoca um método específico dele
	var provider = ServiceManager.getServiceInstance("CustomService");
    var serviceLocator = provider.instantiate("com.fluig.sample.service.CustomService_Service");
    var service = serviceLocator.getCustomServicePort();
	service.activateUser(login);

	log.info("O usuário " + login + " foi ativado no serviço customizado.");
}
```



### beforeLogin

Evento disparado antes do login de um usuário. Pode ser utilizado quando for necessário realizar validações antes do usuário ser autenticado no fluig, possibilitando o cancelamento do login caso seja lançada uma exceção através do evento.

Atenção!

O uso indevido do evento *beforeLogin* pode ocasionar inconsistência no login da plataforma, fazendo com que o usuário não consiga mais logar. Recomendamos atenção ao utilizar este evento.

```
function beforeLogin(login) {
}
```



Parâmetro da função:

Propriedade

Descrição

Tipo

login

Login do usuário

String



-   Exemplo de implementação:

```
function beforeLogin(login) {
	// Busca um serviço customizado cadastrado no Fluig e invoca um método específico dele
	var provider = ServiceManager.getServiceInstance("CustomService");
    var serviceLocator = provider.instantiate("com.fluig.sample.service.CustomService_Service");
    var service = serviceLocator.getCustomServicePort();

	// Caso o usuário esteja bloqueado pelo serviço customizado lança uma exceção informando
	// que o usuário está desativado no serviço customizado e cancela o login no Fluig
    if (service.isBlockedUser(login)) {
		throw "O usuário " + login + " está desativado no serviço customizado";
    }
}
```



### afterLogin

Evento disparado após o login de um usuário. Pode ser utilizado quando for necessário realizar alguma rotina  quando o usuário é autenticado no fluig.

```
function afterLogin(login) {
}
```



Parâmetro da função:

Propriedade

Descrição

Tipo

login

Login do usuário

String



-   Exemplo de implementação:

```
function afterLogin(login) {
	// Busca um serviço customizado cadastrado no Fluig e invoca um método específico dele
	var provider = ServiceManager.getServiceInstance("CustomService");
    var serviceLocator = provider.instantiate("com.fluig.sample.service.CustomService_Service");
    var service = serviceLocator.getCustomServicePort();
    service.addUserSession(login);
}
```

O evento **afterLogin** funciona mesmo com a autenticação via Identity. O DesktopSSO ou a autenticação automática não interfere na execução do evento, porque ele é executado depois do login não importando como é feito.



### onLoginError

Evento disparado quando ocorrer um erro de login de um usuário. Este erro pode ser por login e senha inválidos ou usuário inativo. Pode ser utilizado quando for necessário realizar alguma rotina quando ocorrer um erro de login ou apresentar uma mensagem personalizada para o usuário.

```
function onLoginError(login, errorCause) {
}
```



Parâmetro da função:

Propriedade

Descrição

Tipo

login

Login do usuário

String

errorCause

Motivo do erro de login, onde:

0 - Login e senha inválidos
1 - Usuário inativo 

Integer



-   Exemplo de implementação:

```
function onLoginError(login, errorCause) {
	// Verifica se a causa de erro foi senha inválida (0 - Senha inválida, 1 - Usuário inativo)
	if (errorCause == 0) {
		// Busca um serviço customizado cadastrado no Fluig e invoca um método específico dele
		var provider = ServiceManager.getServiceInstance("CustomService");
	    var serviceLocator = provider.instantiate("com.fluig.sample.service.CustomService_Service");
	    var service = serviceLocator.getCustomServicePort();

	    service.registerLoginAttempt(login);

	    // Utiliza o serviço customizado para verificar quantas tentativas de login o usuário já
	    // realizou. Caso tenha ultrapassado 3 tentativas bloqueia o usuário neste serviço
	    // customizad e lança uma exceção informando ao usuário que ele foi bloqueado.
	    var loginAttempts = service.checkLoginAttempts(login);
	    if (loginAttempts > 3) {
	    	service.blockUser(login);
	    	throw "Seu usuário foi bloqueado por ultrapassar 3 tentativas de login"
	    } else {
	    	throw "Tentativa de login " + loginAttempts + " de 3"
	    }
	}
}
```



### onLogout

Evento disparado quando o usuário realizar logout. Pode ser utilizado quando for necessário realizar alguma rotina quando o usuário realiza o logout no portal através da opção Sair.

```
function onLogout(login) {
}
```



Parâmetro da função:

Propriedade

Descrição

Tipo

login

Login do usuário

String



-   Exemplo de implementação:

```
function onLogout(login) {
	// Busca um serviço customizado cadastrado no Fluig e invoca um método específico dele
	var provider = ServiceManager.getServiceInstance("CustomService");
    var serviceLocator = provider.instantiate("com.fluig.sample.service.CustomService_Service");
    var service = serviceLocator.getCustomServicePort();
    service.removeUserSession(login);

    log.info("Usuário " + login + " efetuou logout");
}
```

### onNotify

Para interferir no envio de uma notificação padrão do fluig, deve ser utilizado o evento global *onNotify*, que é disparado no momento em que qualquer notificação do fluig é enviada. Nesse evento, podem ser feitas alterações como, por exemplo, adicionar outros destinatários ao e-mail, modificar os valores dos parâmetros utilizados no template de e-mail, etc.

Abaixo temos um exemplo de como implementar este evento:

```
function onNotify(subject, receivers, template, params) {
    if (template == "TPLDOCUMENT_APPROVAL_PENDING") {
        receivers.add("[email protected]");
    }
}
```

Atenção

**Recomenda-se** validar o template utilizando a comparação direta **template == "TPLDOCUMENT\_APPROVAL\_PENDING"**, em vez da função `match()`.

Essa abordagem evita redundâncias na customização, pois o `match()` pode retornar verdadeiro para mais de um template em determinados casos, como ocorre com `TPLNEW_TASK` e `TPLNEW_TASK_POOL_GROUP`.

A partir da versão Fluig 1.5.13 o fluigAPI estárá habilitado para este evento.



O evento onNotify está disponível na lista de eventos globais. Ao selecionar esse evento na lista de eventos disponíveis, a assinatura da função acima já será preenchida automaticamente. Este evento disponibiliza os seguintes parâmetros:

Parâmetro

Descrição

subject

É o assunto do e-mail. A alteração desta variável irá implicar que todos os usuários recebam o e-mail com o novo assunto configurado. Exemplo de utilização: **subject.add("ASSUNTO");**

receivers

Lista de e-mails destinatários. Também é possível adicionar outros e-mails, de usuários que não participam do processo. Inclusive, podem ser adicionados e-mails de usuários que não estão cadastrados no fluig, caso seja necessário notificar uma pessoa que não tenha acesso ao sistema.

template

Permite validar qual tipo de e-mail está sendo enviado (por exemplo, template de documento em aprovação, documento expirando, etc). Com base nessa variável podemos distinguir quais e-mails queremos customizar. É recomendável que sempre seja verificado o código do template, para evitar que ocorram alterações em outros tipos de e-mail, que não necessitariam de customização.

params

É um mapa de dados que permite alterar/incluir parâmetros para que sejam apresentados no e-mail. O nome dos parâmetros informados nesse mapa devem ser os mesmos que são utilizados dentro do arquivo de template.



No exemplo que foi apresentado acima é validado se o template se refere ao *"TPLDOCUMENT\_APPROVAL\_PENDING"* (que corresponde a documento pendente de aprovação). Em caso positivo, um novo e-mail será adicionado na lista de destinatários. Ou seja, além do responsável pela aprovação, outra pessoa será notificada, recebendo uma cópia do e-mail. Como está sendo validado o código do template, os demais tipos de e-mail não serão afetados.

Os templates podem ser consultados dentro do diretório do volume, em: *<VOLUME>\\templates\\tplmail*. Se for necessário adicionar algum parâmetro no e-mail padrão, os templates podem ser editados diretamente nesse diretório.



Importante

-   O evento global onNotify possui bind de variáveis para acesso à log, datasetManager, DatasetFactory, DatasetBuilder, ConstraintType e ServiceManager.
-   Recomenda-se verificar a lista de parâmetros (params) recebida antes de utilizá-los, pois estes variam de acordo com o template utilizado.
-   Quando um workflow possuir evento onNotify, o evento global onNotify será ignorado para os e-mails daquele processo.
-   É imprescindível a validação pelo código do template antes de qualquer implementação, pois TODOS os e-mails passarão por esta customização quando o evento estiver registrado.

Dica

Quando o evento onNotify for utilizado como evento global, é necessário informar uma constraint extra informando o usuário para fixar as permissões, já que o evento onNotify não é executado por nenhum usuário mas sim pelo sistema. Vale lembrar ainda que quando for utilizar algum dataset interno do fluig, é necessário tambem informar uma constraint.

EXEMPLO

var constraintUser = DatasetFactory.createConstraint("userSecurityId", "nome\_do\_usuario", "nome\_do\_usuario", ConstraintType.MUST);



### beforeSendNotification

Evento disparado antes do envio de uma notificação ao usuário. Pode ser utilizado quando for necessário adicionar alguma informação à nota ou alterar a prioridade de uma notificação, possibilitando o cancelamento do envio da notificação caso seja definida uma prioridade através do evento.

Observação

Por questões de segurança, somente os campos *priority* e *note* podem ser alterados. Outras alterações não serão consideradas.

Importante

Caso seja lançada uma exceção através do evento a notificação não será enviada, mas esse não é o modo correto de cancelar o envio. Definir o campo *priority* como "NONE" impede que a notificação seja enviada sem a necessidade de lançar exceção.



-   Abaixo segue um exemplo de como implementar esse evento:

```
function beforeSendNotification(notification) {
    if (notification.eventType == "DENOUNCED_CONTENT") {
        notification.priority = "NONE";
    }
    if (notification.eventType == "DOCUMENT_APPROVED") {
        notification.priority = "NORMAL";
    }
    if (notification.eventType == "DOCUMENT_REPROVED") {
        notification.priority = "HIGH";
    }
    if (notification.eventType == "LIKE") {
        notification.priority = "LOW";
    }
}
```



São disponibilizadas algumas propriedades referentes à notificação que está sendo enviada.

**Propriedade**

**Descrição**

**Tipo**

aliasSender

Alias de quem enviou a notificação. Pode vir nulo nos casos em que a notificação é enviada pelo sistema.

String

aliasReceiver

Alias de quem vai receber a notificação.

String

place

Lugar onde foi feita a ação que gerou a notificação. Pode vir nulo quando não for um lugar socializavel.

[GenericAlertEventVO](#EventosGlobais-GenericAlertEventVO)

object

Objeto sobre o qual foi feita a ação que gerou o alerta.

[GenericAlertEventVO](#EventosGlobais-GenericAlertEventVO)  

eventType

Tipo do evento que gerou a notificação.

String

metadata

Metadados da notificação.

Hashmap <String, String>

priority

Prioridade da notificação. Valores válidos:  NONE, LOW, NORMAL, HIGH.

String

note

Nota enviada junto à notificação.

String

Veja o exemplo (**event-notification**) no repositório do fluig clicando [aqui](https://git.fluig.com/projects/SAMPLES/repos/projetos/browse/event-notification).



### afterSendNotification

Evento disparado após o envio de uma notificação ao usuário. Pode ser utilizado quando for necessário registrar alguma informação, para auditoria, por exemplo.

-   Abaixo segue um exemplo de como implementar esse evento:

```
function afterSendNotification(notification){
		log.info("notification as send for " + notification.aliasReceiver);
}
```



São disponibilizadas algumas propriedades referentes à notificação que foi  enviada.

**Propriedade**

**Descrição**

**Tipo**

aliasSender

Alias de quem enviou a notificação. Pode vir nulo nos casos em que a notificação é enviada pelo sistema.

String

aliasReceiver

Alias de quem vai receber a notificação.

String

place

Lugar onde foi feita a ação que gerou a notificação. Pode vir nulo quando não for um lugar socializavel.

[GenericAlertEventVO](#EventosGlobais-GenericAlertEventVO)

object

Objeto sobre o qual foi feita a ação que gerou o alerta.

[GenericAlertEventVO](#EventosGlobais-GenericAlertEventVO)  

eventType

Tipo do evento que gerou a notificação.

String

metadata

Metadados da notificação.

Hashmap <String, String>

priority

Prioridade da notificação.

String

note

Nota enviada junto à notificação.

String

Veja o exemplo (**event-notification**) no [repositório do fluig](https://tdn.totvs.com/display/fluig/htt) clicando [aqui](https://git.fluig.com/projects/SAMPLES/repos/projetos/browse/event-notification).

### onDisplayTasks

Este evento é disparado antes de serem exibidas as tarefas das aba "Tarefas a concluir" , "Minhas solicitações", "Tarefas em pool", "Tarefas em consenso" e "Minhas tarefas sob gerência" na central de tarefas. Através dele é possível inserir, alterar ou remover itens da central de tarefas. O evento recebe como parâmetro uma lista de [WorkflowTasksVO](#EventosGlobais-WorkflowTasksVO) das tarefas existentes.

-   Exemplo adicionando, editando e removendo uma tarefa personalizada ao final da lista de tarefas:

```
function onDisplayTasks(tasks) {
	// Adiciona uma tarefa customizada
	var newTask = new WorkflowTasksVO();
	newTask.setCode("TOTVS");
	newTask.setUrl("http://www.totvs.com");
	newTask.setProcessDescription("Nova Tarefa");
	newTask.setRequesterName("João da Silva");
	newTask.setStateDescription("Atividade 1");
	newTask.setColleagueName("Ana Maria");
	newTask.setStartDateProcess("07/09/2025");
	newTask.setDateExpires("07/10/2025");
	tasks.add(newTask);

	for (var i = 0; i < tasks.size(); i++) {
		// Remove a solicitação com o id 1
		if (tasks.get(i).getProcessInstanceId() == 1) {
			tasks.remove(i);
			i--; // Necessário para não pular um item após a remoção
		} else {
			// Altera a descrição de todos os processos para "Nova Tarefa alterada"
			tasks.get(i).setProcessDescription("Nova Tarefa alterada");
		}
	}
```



Disponibilizamos algumas informações para consulta através do método getValue.

Propriedade

Descrição

Tipo

WKUser

Código do usuário logado.

String

WKUserLocale

Idioma do usuário logado.

String

WKCompany

Número da empresa.

Int

taskUserId

Código do usuário substituído, em caso de visualização da central como substituto. Nos demais casos retorna o usuário logado.

String

taskType

Indicador do tipo de tarefas que estão sendo exibidas, “open” tarefas a concluir e “requests” para minhas solicitações.

String

filter

Filtros utilizados.

Map<String, Object>

order

Ordenação aplicada.

String

maxResult

Número de resultados por página.

Int

page

Número da página atual.

Int

taskId

Em caso de pool,  quando o taskType for pool, o taskId trará uma string contendo o tipo no caso ‘Role’ para papel ou ‘Group‘ para grupo e seu código. Exemplo: ‘Pool:Role:admin’ para um pool do papel ‘admin’.

String

```
function onDisplayTasks(links){
log.info("Usuário: " + getValue("WKUser"));
}
```



### onDisplayTasksSummary

Este evento é disparado antes de serem exibidos os contadores das abas e gráficos da central de tarefas e widgets de BPM. Através dele é possível alterar números de tarefas pendentes de cada tipo.

-   Exemplo alterando o número de tarefas abertas e no prazo:

```
function onDisplayTasksSummary(resumeTasks) {
	resumeTasks.openTasks=20;
}
```



O objeto recebido como parâmetro contém:

Propriedade

Descrição

Tipo

expiredTasks



Solicitações atrasadas.

Int

openTasks

Solicitações no prazo.

Int

myRequests

Minhas solicitações.

Int

toApprover

Aprovação de documentos pendentes.

Int

myDocuments

Documentos aguardando aprovação.

Int

checkout

Documento em checkout.

Int

learningTasks

Atividades de Aprendizado.

Int

```
function onDisplayTasksSummary(resumeTasks) {
	resumeTasks.expiredTasks=10;
	resumeTasks.openTasks=20;
	resumeTasks.myRequests=30;
	resumeTasks.toApprover=40;
	resumeTasks.myDocuments=50;
	resumeTasks.checkout=60;
	resumeTasks.learningTasks=70;
}
```



Disponibilizamos algumas informações para consulta através do método getValue.

Propriedade

Descrição

Tipo

WKUser

Código do usuário logado.

String

WKUserLocale

Idioma do usuário logado.

String

WKCompany

Número da empresa.

Int

taskUserId

Código do usuário substituído, em caso de visualização da central como substituto. Nos demais casos retorna o usuário logado.

String

```
function onDisplayTasks(links){
log.info("Usuário: " + getValue("WKUser"));
}
```



# Objetos utilizados nos eventos

* * *

Existem alguns objetos disponibilizados pelo produto que são utilizados nos eventos, nas próximas sessões eles serão explicados seus métodos e seus retornos.



### DocumentDto

Este objeto representa o documento e suas propriedades, na tabela abaixo consta mais informações sobre ele:

Função

Descrição da Função

Tipo do Retorno

getDocumentId()

Retorna o número do documento.

int

getVersion()

Retorna o número da versão do documento.

int

getCompanyId()

Retorna o código da empresa em que o documento foi publicado.

Int

getUUID()

Retorna o UUID (identificador Único Global) do documento.

String

getDocumentTypeId()

Retorna o tipo do arquivo físico, se retornar branco ou nulo é porque esse tipo não é conhecido pelo fluig.

String

getLanguageId()

Retorna o código do Idioma do documento.

String

getIconId()

Retorna o código do Ícone do documento.

int

getTopicId()

Retorna o código do assunto do documento.

int

getColleagueId()

Retorna a matricula do usuário que criou o documento.

String

getDocumentDescription()

Retorna a descrição do documento.

String

getAdditionalComments()

Retorna os comentários adicionais do documento.

String

getPhisicalFile()

Retorna o nome do arquivo físico atrelado ao documento.

String

getCreateDate()

Retorna a data de criação.

java.util.Date

getApprovedDate()

Retorna a data de Aprovação.

java.util.Date

getLastModifiedDate()

Retorna a Data da última modificação.

java.util.Date

getDocumentType()

Retorna o tipo do documento, onde:

0 à Pasta raiz

1 à Pasta

2 à Documento normal

3 à Documento externo**1**

4 à Formulário

5 à Registro de formulário

7 à Anexo Workflow

8 à Novo Conteúdo

9 à Aplicativo

10 à Relatório

portal à Site

portalPage à Página de Site

**1** → A partir da atualização **2.0.0-26XXXX**, o recurso Documento externo foi desabilitado para novas empresas.

String

getExpirationDate()

Retorna a data de expiração.

java.util.Date

getParentDocumentId()

Retorna o número da Pasta/Formulário pai

int

getRelatedFiles()

String com o nome do arquivo físico principal e anexos.

String

getActiveVersion()

Retorna se a versão é ativa.

boolean

getVersionDescription()

Retorna a descrição da versão.

String

getDownloadEnabled()

Retorna se o documento permite Download

boolean

getApproved()

Retorna se o documento está em aprovação.

boolean

getValidationStartDate()

Retorna a partir de que data em que o documento poderá ser visualizado.

java.util.Date

getPublisherId()

Retorna a matricula do usuário que publicou o documento.

String

getCardDescription()

Retorna a descrição do registro de formulário, para documento do tipo 5.

String

getDocumentPropertyNumber()

Retorna o formulário que foi usado como base para criação do registro de formulário, por isso só tem um valor quando o documento é do tipo 5 (registro de formulário).

int

getDocumentPropertyVersion()

Retorna a versão do formulário em que o registro de formulário foi criado.

int

getPrivateDocument()

Retorna se o documento/pasta está abaixo da pasta particular.

boolean

getPrivateColleagueId()

Se é um documento particular retorna a matricula do usuário onde este documento está alocado.

String

getIndexed()

Retorna se o documento já foi indexado.

boolean

getPriority()

Retorna a prioridade do documento.

int

getUserNotify()

Retorna se notifica os usuários que tenham esse assunto de interesse.

boolean

getExpires()

Retorna se o documento está expirado.

boolean

getVolumeId()

Retorna o volume onde o documento foi publicado, se estiver em branco ele utiliza o volume do pai.

String

getInheritSecurity()

Retorna se herda segurança do pai.

boolean

getUpdateIsoProperties()

Retorna se atualiza as propriedades da cópia controlada.

boolean

getLastModifiedTime()

Retorna a hora da última modificação em milissegundos.

String

getDeleted()

Retorna se o documento está na lixeira.

boolean

getDatasetName()

Retorna o documento do dataset , se o documento é um formulário.

String

getKeyWord()

Retorna as palavras chaves do documento. Cada palavra é separada por vírgula.

String

getImutable()

Retorna se a versão/revisão é inalterável.

boolean

getDraft()

Retorna se o documento está em edição, para documento do tipo “Novo Conteúdo”.

boolean

getInternalVisualizer()

Retorna se utiliza visualizador interno.

boolean

getPhisicalFileSize()

Retorna o tamanho físico do documento principal e anexos.

float

getVersionOption()

Retorna a condição de versionamento do documento:

0 = Será mantida a versão

1 = Será criado nova revisão

2 = Será criado nova versão

Importante lembrar que no momento da criação de um novo documento o valor sempre será 0.

int

```
var doc = getValue("WKDocument");
log.info("Número do documento: "+ doc.getDocumentId() + " - Versão: "+ doc.getVersion());
```



### DocumentEditDto

Este objeto representa as propriedades editáveis de um documento, na tabela abaixo consta mais informações sobre ele:

Função

Descrição da função

Tipo do retorno

setKeyWord

Adiciona Palavras chaves no documento. Cada palavra é separada por vírgula.

void

setExpires

Define se o documento deve expirar

void

setExpirationDate

Define a data de expiração.

void

setValidationStartDate

Define a data a partir da qual o documento poderá ser visualizado.

void

```
function beforeDocumentPublisher() {
  var docEdit = getValue("WKDocumentEdit");

  var dataStartValidation = new Date(2022, 0, 1);
  var dataExpiracao = new Date(2022, 11, 31);

  docEdit.setKeyWord("testing");
  docEdit.setExpires(true);
  docEdit.setExpirationDate(dataExpiracao);
  docEdit.setValidationStartDate(dataStartValidation);
}
```

Atenção

Lembrando que no javascript, no construtor new Date, o valor do "Mês" começa com o index 0, sendo 0 = Janeiro e 11 = Dezembro, veja outros exemplos [clicando aqui](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date).



### ApproverDto

Este objeto representa os aprovadores e suas propriedades, na tabela abaixo consta mais informações sobre ele:

**Função**

**Descrição da Função**

**Tipo do Retorno**

getDocumentId()

Retorna o número do documento.

int

getVersion()

Retorna o número da versão do documento.

int

getCompanyId()

Retorna o código da empresa em que o documento foi publicado.

Int

getColleagueId()

Retorna a matricula de um usuário ou o código do grupo que está aprovando este documento. É possível saber se vai retornar um usuário ou um grupo pelo tipo de aprovação.

String

getApproverType()

Retorna o tipo da aprovação, onde:

0 à Usuário

1 à Grupo

int

getLevelId()

Retorna o nível de aprovação, no caso de aprovação em níveis.

int

```
var listApprover = getValue("WKListApprover");
	if(listApprover!=null){
    	for(j = 0; j < listApprover.size(); j++) {
       	 if (listApprover.get(j).getColleagueId().equals("adm")){
            throw "O usuário adm não pode ser aprovadores de documentos";
        }
    }
}
```

### DocumentSecurityConfigDto

Este objeto representa a segurança de um documento e suas propriedades, na tabela abaixo consta mais informações sobre ele:

Função

Descrição da Função

Tipo do Retorno

getDocumentId()

Retorna o número do documento.

int

getVersion()

Retorna o número da versão do documento.

int

getCompanyId()

Retorna o código da empresa em que o documento foi publicado.

Int

getAttributionValue()

Retorna a matricula de um usuário ou o código do grupo que está na segurança deste documento. É possível saber se vai retornar um usuário ou um grupo pelo tipo da segurança.

Obs.: Retorna em branco quando o tipo é todos os usuários.

String

getAttributionType()

Retorna o tipo da segurança, onde:

1 à Usuário;

2 à Grupo;

3 à Todos os Usuários.

int

getPermission()

Retorna se é uma permissão.

Obs.: Se não é uma permissão é uma restrição.

boolean

getShowContent()

Retorna se lista o conteúdo.

boolean

getSecurityLevel()

Retorna no nível de permissão/restrição, onde:

\-1 à sem permissão/restrição (nega acesso);

0 à Leitura;

1 à Gravação;

2 à Modificação;

3 à Total.

int

getSequence()

Retorna a sequência da permissão/restrição.

int

getSecurityVersion()

Retorna se ele utiliza a segurança deste versão nas demais.

boolean

```
var listSeg = getValue("WKListSecurity");
if(listSeg != null){
    for(j = 0; j < listSeg.size(); j++) {
        if (listSeg.get(j).getAttributionValue().equals("cvd")){
            throw "O usuário cvd não pode estar na segurança de documentos";
        }
    }
}
```

### RelatedDocumentDto

Este objeto representa os documentos relacionados e suas propriedades, na tabela abaixo consta mais informações sobre ele:

Função

Descrição da Função

Tipo do Retorno

getDocumentId()

Retorna o número do documento.

int

getVersion()

Retorna o número da versão do documento.

int

getCompanyId()

Retorna o código da empresa em que o documento foi publicado.

int

getRelatedDocumentId()

Retorna o número do documento que está relacionado ao documento publicado.

int

```
var listRelated = getValue("WKListRelatedDocument");
	if( listRelated != null){
   	 log.info("Os seguintes documentos estão relacionados a este documentos: ");
     for(j = 0; j < listRelated.size(); j++) {
        log.info("Nr. documento: "+ listRelated.get(j).getRelatedDocumentId());
     }
}
```



### ProcessDefinitionVersionDto

Este objeto representa a definição de um processo e seus atributos. A tabela abaixo apresenta mais informações sobre ele:

Função

Descrição da Função

Tipo do Retorno

getCompanyId()

Retorna o código da empresa

Long

getProcessId()

Retorna o código do processo

Long

getProcessDescription()

Retorna a descrição do processo

String

getVersion()

Retorna a versão do processo

Integer

getVersionDescription()

Retorna a descrição da versão do processo

String

getFormId()

Retorna o código do formulário do processo

Integer

getCategoryStructure()

Retorna a categoria do processo

String

getFullCategoryStructure()

Retorna a estrutura completa da categoria do processo

String

### UserEventVO

Este objeto representa um usuário e seus atributos, na tabela abaixo consta mais informações sobre ele:

Função

Descrição da Função

Tipo do Retorno

getId()

Retorna o identificador do usuário

Long

getTenantId()

Retorna o código da empresa

Long

getLocationId()

Retorna o código da localização à qual o usuário pertence

Long

getFirstName()

Retorna o nome do usuário

String

getLastName()

Retorna o sobrenome do usuário

String

getFullName()

Retorna o nome completo do usuário

String

getEmail()

Retorna se lista o conteúdo

String

getLogin()

Retorna o e-mail do usuário

String

getPassword()

Retorna a senha do usuário

String

getIdpId()

Retorna o identificador associado ao fluig Identity

String

getUserCode()

Retorna o código do usuário

String

getUserType()

Retorna o tipo do usuário, onde:

0 - Normal
3 - Aplicativo  

Integer

getState()

Retorna o estado do usuário, onde:

0 - Não confirmado
1 - Ativo
2 - Bloqueado
3 - Removido 

Integer

getTimeZone()

Retorna o Fuso Horário do usuário

String

getRoles()

Retorna a lista dos códigos dos papéis aos quais o usuário pertence

List<String>

getGroups()

Retorna a lista dos códigos dos grupos aos quais o usuário pertence

List<String>

getData()

Retorna os dados adicionais do usuário

Map<String, String>

setFirstName(String firstName)

Informa o nome do usuário

void

setLastName(String lastName)

Informa o sobrenome do usuário

void

setFullName(String fullName)

Informa o nome completo do usuário

void

putData(String key, String value)

Adiciona um novo dado adicional ao usuário. Só pode ser utilizado em eventos ***before**.*

void



### WatchDTO

Este objeto representa as notificações de acompanhamento de comentários e suas propriedades, na tabela abaixo consta mais informações sobre ele:

Função

Descrição da Função

Tipo do Retorno

getEntityId()

Retorna o código do Conteúdo.

String

getUserId()

Retorna o código do usuário.

String

getUserAlias()

Retorna o alias do usuário.

String

getSociableId()

Retorna ocódigo sociable.

String

getCreationDate()

Retorna a data de criação.

String

getLastUpdateDate()

Retorna a data da última atualizaçã.

String

getNumberComments()

Retorna o número de comentários.

String

getNumberLikes()

Retorna o número de apoios.

String

getNumberShares()

Retorna o número de compartilhamentos.

String

getNumberWatchers()

Retorna o número de acompanhamentos.

String

getNumberDenouncements()

Retorna o número de denúncias.

String

getSocialWatchType()

Retorna o tipo (social)

String

getPostAuthor()

Retorna o autor do conteúdo.

String

getTags()

Retorna as tags.

String

getText()

Retorna o texto.

String

getDescription()

Retorna a descrição.

String

getObjectClass()

Retorna a classe do objeto.

String

getObjectId()

Retorna o objectId.

String

getThumbURL()

Retorna a url do thumb

String

### SocialPostEventVO

**SocialPostEventVO**

Propriedade / Método

Descrição

Tipo / Retorno

getText()

texto do post

String

getUser()

alias do usuário que está postando

String

getVisibility()

visibilidade do post

String

getPostId()

identificador do post

String

getCreationDate()

data de criação do post

String

getLastUpdateDate()

data de ultima atualização do post

String

getSociables()

objetos sociables relacionado a esse post. Ex: Imagens, Vídeos, Artigos, etc...

List<[SociableEventVO](#EventosGlobais-SociableEventVO)\>

getSocial()

objeto social onde o post foi feito. Pode ser timeline de um usuario ou um comunidade

[SocialEventVO](#EventosGlobais-SocialEventVO)

**\***getAttributes()

Atributos do Analytics em formato de Lista de Strings. Limite de 3 itens

List<String>

**\***getFacts()

Fatos dos atributos do Analytics em formato de Lista de Strings. Limite de 3 itens

List<String>

customData

Mapa em formato JSON onde pode-se persistir dados extras da publicação

Map JSON



**\***  Somente enviado no evento beforSocialPost e afterSocialPost, esses valores não são persistidos no Fluig







### SociableEventVO

**SociableEventVO**

Propriedade / Método

Descrição

Tipo / Retorno

getId()

identificador do objeto

String

getCreationDate()

data de criação do objeto

String

getLastUpdateDate()

ultima atualização do objeto

String

getNumberLikes()

quantidade de curtidas

String

getNumberShares()

quantidade de compartilhamentos

String

getNumberComments()

quantidade de comentários

String

getNumberDenouncements()

quantidade de denúncias

String

getNumberWatchers()

quantidade de acompanhamentos

String

getTags()

nomes marcadores

String

getUrl()

endereço do objeto

String

getSociableType()

tipo do objeto social

String

getRemoved()

informa se o objeto foi removido

String

\*getPostAuthor()

retorna o alias do autor da publicação que foi comentada

String

**\***getText()

retorna o texto da publicação que foi comentada

String

**\*\***getDescription()

Nome do objeto comentado

String

**\*\***getThumbURL()

url de ícone do objeto comentado.

String

getSocial()

local aonde o comentário foi efetuado

SocialEvent

**\*** Retornados apenas quando o comentário é sobre um post.

**\*\*** Retornado para os comentários de documentos e etc.



### SocialEventVO

**SocialEventVO**

Propriedade / Método

Descrição

Tipo / Retorno

getId()

identificador do objeto

String

getCreationDate()

data de criação do objeto

String

getLastUpdateDate()

ultima atualização do objeto

String

getAlias()

apelido do objeto social

String

getName()

nome do objeto social

String

getDescription()

descrição do objeto social

String

getType()

tipo do objeto social

String

getState()

status do objeto social

String

getHidden()

informa se o objeto é oculto

String

getPrivateContent()

informa se o conteúdo é privado

String

getApprovalRequired()

informa se aprovação é requerida

String

getCustomPage()

informação de página customizada

String

### SocialShareEventVO

**SocialShareEventVO**

Propriedade / Método

Descrição

Tipo / Retorno

getSociable()

objeto sendo compartilhado

[SociableEventVO](#EventosGlobais-SociableEventVO)

getSocialPlace()

objeto que recebe o compartilhamento

[SocialEventVO](#EventosGlobais-SocialEventVO)

getUser()

alias do usuario que compartilha

String

getText()

texto informado no compartilhamento

String

getType()

tipo do objeto

String

### SocialCommentEventVO

**SocialCommentEventVO**

Propriedade / Método

Descrição

Tipo / Retorno

getSociable()

objeto sendo compartilhado

[SociableEventVO](#EventosGlobais-SociableEventVO)

getUser()

alias do usuário que comenta

String

getText()

texto informado no comentário

String

getCommentId()

id do comentário

String



### SocialDenounceEventVO

**SocialDenounceEventVO**

Propriedade / Método

Descrição

Tipo / Retorno

getSociable()

objeto sendo compartilhado

[SociableEventVO](#EventosGlobais-SociableEventVO)

getUser()

alias do usuário que comenta

String

getText()

texto informado no comentário

String

getType()

Tipo de denúncia

String



### SocialLikeEventVO

**SocialLikeEventVO**

Propriedade / Método

Descrição

Tipo / Retorno

getSociable()

objeto sendo compartilhado

[SociableEventVO](#EventosGlobais-SociableEventVO)

getUser()

alias do usuário que comenta

String

### SocialCommunityRelationEventVO

**SocialCommunityRelationEventVO**

Propriedade / Método

Descrição

Tipo / Retorno

getSocial()

Social relacionado à comunidade

[SocialEventVO](#EventosGlobais-SocialEventVO)

getCommunity()

Social que representa a Comunidade

[SocialEventVO](#EventosGlobais-SocialEventVO)

### SocialFollowEventVO

**SocialFollowEventVO**

Propriedade / Método

Descrição

Tipo / Retorno

getSocial()

Social que seguirá

[SocialEventVO](#EventosGlobais-SocialEventVO)

getFollowed()

Social que está sendo seguido

[SocialEventVO](#EventosGlobais-SocialEventVO)



### SocialPictureEventVO

SocialPictureEventVO

Propriedade / Método

Descrição

Tipo / Retorno

getLoggedUser()

Alias do usuário autenticado

String

getAlias()

Alias do local aonde se está mudando a imagem (usuário| comunidade)

String

getPath()

Path do diretório onde a imagem foi salva

String

getPictureName()

Nome da imagem salva

String

getWidth()

Largura da imagem

int

getHeight()

Altura da imagem

int



### GenericAlertEventVO

#### **GenericAlertEventVO**

Propriedade / Método

Descrição

Tipo / Retorno

objectId

Id do objeto relacionado

String

objectClass

Classe que identifica o objeto relacionado

String

link

Link que está disponível no objeto. Pode vir nulo nos casos em que não existe um link de acesso

String



### WorkflowTasksVO

#### **WorkflowTasksVO**

Propriedade / Método

Descrição

Tipo / Retorno

url

Url destino para tarefas personalizadas

String

code

Código para tarefas personalizadas

String

processId

Código do processo

String

processDescription

Descrição do processo

String

requesterId

Código do usuário de abertura

String

requesterName

Nome do usuário de abertura

String

stateDescription

Descrição da atividade atual

String

colleagueName

Nome do usuário responsável pela tarefa atual

String

dateExpires

Data de expiração

String

attachDescription

Descrição do anexo principal

String

expired

Tarefa expirada?

boolean

know

Usuário já visualizou a tarefa?

boolean

fieldValue1

Campo do formulário

String

fieldValue2

Campo do formulário

String

fieldValue3

Campo do formulário

String

fieldValue4

Campo do formulário

String

fieldValue5

Campo do formulário

String

fieldValue6

Campo do formulário

String

fieldValue7

Campo do formulário

String

fieldValue8

Campo do formulário

String

fieldValue9

Campo do formulário

String

fieldValue10

Campo do formulário

String

fieldValue11

Campo do formulário

String

fieldValue12

Campo do formulário

String

fieldValue13

Campo do formulário

String

fieldValue14

Campo do formulário

String

fieldValue15

Campo do formulário

String



## Exemplo com usuário de aplicação

* * *

Neste exemplo, a mensagem **Post criado via evento** é postada no mural

```
function beforeSocialPost(companyId, vo) {
    if (vo.getSocial().getType() == "USER" && vo.getUser() != "admin") {
        var consumer = oauthUtil.getNewAPIConsumer("my_app_key", "my_app_secret",
                        "605da7f2-d087-4f4b-903e-486df9563956",
                        "2b192950-fe0c-4211-a4bf-5962c18432d85c077dfb-aa51-45a0-ab43-822a680070ab");
        var userData = JSON.parse(consumer.get("/public/social/user/" + vo.getUser()));
        if (userData.numberFollowers == 0) {
            throw "Voce deve ser seguido por alguem para poder postar em sua timeline.";
        }
    }
}
```




Exemplo com usuário logado

* * *

```
function afterDocumentPublisher(){
    var doc = getValue("WKDocument");
    var user = getValue("WKUser");
 
    var msgPost = "Novo documento: "+ doc.getDocumentId() + " - Versão: "+ doc.getVersion();
    log.info(msgPost);
 
    var jsonContent = "{\"text\":\"" + msgPost + "\",\"visibility\":\"PUBLIC\"}";
    log.info(jsonContent);
 
    var consumer = oauthUtil.getNewAPIConsumerAsCurrentUser("myapp", "myappsecret", "32718929-568b-4a64-9f67-bbeadf4c1fc3",
            "eff7b746-384b-43ba-be3a-aed14da822a4b8352de0-62be-456e-a0d8-ab5c00a745bc");
    consumer.post("/public/social/post/create", jsonContent);
}
```




# Atualização do Analytics

* * *

**Definição**

É possível enviar dados ao analytics a partir dos eventos de customização. Esse dados recebidos pelo evento não são persistidos no fluig mas podem ser modificados antes de serem enviados ao Analytics. Esses valores são transmitidos no objeto SocialPostEventVO



## Exemplo de uso

```
analyticsUtil.updatePostData(String postId, String[] attributes, String[] facts);
```
```
function afterSocialPost(companyId, post){
    analyticsUtil.updatePostData(post.getPostId(), post.getAttributes(), post.getFacts());
}
```
