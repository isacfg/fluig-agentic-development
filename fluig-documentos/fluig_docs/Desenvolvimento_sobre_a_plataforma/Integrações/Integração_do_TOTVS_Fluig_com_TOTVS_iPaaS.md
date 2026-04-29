# Integração do TOTVS Fluig com TOTVS iPaaS

> **Fonte:** [https://tdn.totvs.com/pages/viewpage.action?pageId=773513926](https://tdn.totvs.com/pages/viewpage.action?pageId=773513926)

---

# Índice

# Falando de integração do TOTVS Fluig com TOTVS iPaaS...

* * *

O objetivo do TOTVS iPaaS é ser uma plataforma Low Code, feita para facilitar a construção e manutenção de integrações, para perfis de usuários com baixo aprofundamento técnico e também para usuários com grande experiência em desenvolvimento.

O TOTVS Fluig permite a conexão com vários outros sistemas e entre elas o TOTVS iPaaS.

É possível fazer a comunicação nas duas vias: associando uma integração do TOTVS iPaaS ou sendo acionado pelo TOTVS iPaaS para efetuar uma ação.

Lembrando que a integração com o TOTVS iPaaS funciona de forma **assíncrona**, ou seja, o TOTVS Fluig envia os dados e **não espera um resultado**. Sendo assim, não deve ser usado em casos onde você precisa de algum tipo de retorno como um id ou uma mensagem de validação.

Caso não conheça o TOTVS iPaaS, [clique aqui](https://tdn.totvs.com/x/HBkAHw) e saiba mais.



# Iniciando um diagrama TOTVS iPaaS pelo TOTVS Fluig

* * *

Com este exemplo, você será capaz de chamar o TOTVS iPaaS enviando dados fixos ou de campos do formulário.



## Cadastrando o serviço no TOTVS Fluig

* * *

**01**. Primeiramente, precisaremos criar um diagrama. Para isso, vá em **Integrações**, selecione um projeto já existente ou crie um novo e então clique em **Criar diagrama**.

Com o diagrama configurado no TOTVS iPaaS com o componente de início do tipo *webhook*, você deve copiar a url. O TOTVS Fluig é compatível com os dois tipos de autenticação: via token e via URL. 

Você pode usar via URL quando tiver a necessidade de alterar essas chaves futuramente ou via autenticação quando quiser limitar um pouco mais o acesso ao serviço ou quando não quiser que a pessoa que cadastre o serviço tenha acesso a essa chave.



**02**. No TOTVS Fluig, acesse o **Painel de Controle** e no grupo **Desenvolvimento** acesse a opção **Serviços**.



**03**. Clique no botão **Novo Serviço**.



**04**. Selecione o tipo de serviço **REST** e preencha os campos código e descrição conforme o tipo de integração. Lembre-se que você deve ter um cadastro de serviço para cada diagrama, então use um nome que seja significativo.



Há a possibilidade de fazer, como citado, o cadastro usando a autenticação via token. Neste caso, podemos cadastrar somente o domínio sem autenticação:



Ou ainda, podemos cadastrar o domínio e selecionar a autenticação “**custom**” informando “**apiKey: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx**”

## Chamando o serviço

* * *

Este código pode ser usado tanto em um dataset quanto em um processo. No nosso exemplo é uma atividade de serviço que manda dados do formulário para o TOTVS iPaaS.



```
var serviceName = 'connector-cadastro-centro-custos-rm';

//Caso não tenha informado a API KEY no cadastro de serviço, preencha na linha abaixo
var apiKey = ''; //'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'

//Neste objeto são os dados que são enviados para o TOTVS iPaaS. Neste exemplo, apenas um campo de formulário está sendo enviado.
//Note: em Strings retornadas pelos nossos métodos (hAPI, getValue) deve ser adicionado a concatenação com uma String vazia (+ '').
//Caso não seja feito isso, o comando JSON.stringify retornará um erro.
var data = {
	'processId': hAPI.getCardValue("processId") + ''
}

// a partir daqui o código deve ser mantido
var clientService = fluigAPI.getAuthorizeClientService();
var vo = {
	companyId : getValue("WKCompany") + '',
	serviceCode : serviceName, // código usado no cadastro do serviço
	endpoint : '',
	method : 'post',
	timeoutService: '3000', // timeout do serviço em ms, neste caso, 3 segundos.
	params : data ,
	options : {
		encoding : 'UTF-8',
		mediaType: 'application/json'
	},
	headers: {
		"Content-Type": 'application/json;charset=UTF-8'
	}
};

if (apiKey) {
	vo.headers.apiKey = apiKey;
}

try {
	// O objeto data montado para realizar a requisição precisa ser convertido para um texto para ser enviado
	var result = clientService.invoke(JSON.stringify(vo));

	if (result.getHttpStatusResult() >= 200 && result.getHttpStatusResult() < 300) {
		// o Connector funciona de maneira assíncrona então vai retornar um 202 (Accepted).
		log.info("connector retornou ok");
	} else if (result.getHttpStatusResult() == 401) {
		log.info("Ocorreu um erro ao comunicar com o TOTVS iPaaS. Confira a URL do serviço e a API KEY utilizada");
		throw "Error 401";
	} else if (result.getHttpStatusResult() == 0 && result.getDescription() != null && result.getDescription().startsWith("ERROR CALLING SERVICE")) {
		log.info("Ocorreu um erro ao chamar o serviço. Confira se o serviço foi criado com o nome: " + data.serviceCode)
		throw "Error 404"
	} else {
		log.info("Ocorreu algum erro desconhecido")
		log.dir(result);

		throw "Error UNK";
	}
} catch (e) {
	throw "Ocorreu um erro. Entre em contato com a administração do fluig (" + e + ")";
}
```



## Usando o TOTVS iPaaS para movimentar uma solicitação no TOTVS Fluig

* * *

Com este exemplo, você será capaz de chamar o TOTVS Fluig através do TOTVS iPaaS enviando dados fixos ou os dados de entrada de um *webhook*. O TOTVS Fluig possui API’s do tipo SOAP e REST e ambas podem ser utilizadas, porém, por questões de autenticação, para movimentar uma solicitação é aconselhável usar a API SOAP. 

Apesar do TOTVS iPaaS possuir conectores que permitem fazer apenas a configuração de variáveis, vamos mostrar como cadastrar ambos os tipos de serviço.



## Cadastrando um aplicativo para comunicação com o TOTVS Fluig

* * *

**01**. No TOTVS IPaaS, acesse **Aplicativos** e em seguida **Cadastrar aplicativo**:



**02**. Preencha os dados:



Ao concluir o cadastro, você será redirecionado novamente para a tela de listagem de aplicativos. 



## Cadastrando o serviço SOAP do TOTVS Fluig

* * *

No cadastro de aplicativos, selecione o aplicativo que você criou do TOTVS Fluig para incluir os serviços. Para os serviços SOAP, você pode visualizar todos os serviços disponíveis acessando o endereço do seu TOTVS Fluig e adicionando /services. Por exemplo, caso o seu TOTVS Fluig seja acessível através do endereço **https://empresa/** os serviços disponíveis estão listados em **https://empresa/**services. Para a movimentação de solicitações, vamos usar o SOAP de Workflow: **https://empresa/**webdesk/ECMWorkflowEngineService?wsdl.

Para isso, na edição do aplicativo no TOTVS IPaaS, acesse Serviços e clique em cadastrar serviço. Preencha os dados selecionando o tipo de serviço como SOAP.



Avance para “Recursos” e informe o endereço “wsdl” do serviço, no caso **https://empresa/webdesk/ECMWorkflowEngineService?wsdl.**

A importação leva alguns segundos que é o tempo necessário para que o TOTVS IpaaS valide o endereço e consiga trazer todos os dados desse serviço. Ao finalizar, você verá que todos os métodos do wsdl estão listados:



Para a lista completa dos serviços e dos recursos de cada serviço pode ser consultada em [https://tdn.totvs.com/pages/releaseview.action?pageId=662867789](https://tdn.totvs.com/pages/releaseview.action?pageId=662867789)



## Cadastrando o serviço da API Pública do TOTVS Fluig

* * *

No cadastro de aplicativos, selecione o aplicativo que você criou do TOTVS Fluig para incluir os serviços. Para os serviços da API Pública, você pode visualizar todos os serviços disponíveis acessando o endereço do seu TOTVS Fluig e adicionando /api-rest. Por exemplo, caso o seu TOTVS Fluig seja acessível através do endereço **https://empresa/** os serviços disponíveis estão listados em **https://empresa/****api-rest**. Para a movimentação de solicitações, vamos usar a api de Process Managemento SOAP de Workflow: **https://empresa/process-management/swagger-ui/**

Para isso, na edição do aplicativo no TOTVS IPaaS, acesse Serviços e clique em cadastrar serviço. Preencha os dados selecionando o tipo de serviço como REST. Ao selecionar esta opção, irá pedir o Ambiente. 



Você pode selecionar um ambiente pré-cadastrado, ou adicionar selecionando a opção Cadastrar ambiente. A autenticação pode ser feita tanto por token quanto por OAUTH1, que é a forma que iremos abordar. Para as APIs públicas do TOTVS Fluig, você não deve informar apenas a URL, sendo necessário utilizar o que chamamos de “Base URL” da api. Neste caso, a URL ficaria **https://empresa/process-management/api.**
Onde **https://empresa/** é o endereço da empresa e process-management/api é a Base URL da api do TOTVS Fluig. 

Após preenchido as informações clique em Cadastrar.  



Cada serviço do TOTVS Fluig tem um Base URL próprio, e pode ser consultado na página da própria API:



Nesta página também está o arquivo “*swagger.json*” que iremos usar para importar os recursos. No TOTVS iPaaS, avance para a parte de recursos e clique no botão importar recurso e informe a URL do arquivo *json* mencionado.

A importação leva alguns segundos que é o tempo necessário para que o TOTVS iPaaS valide o endereço e consiga trazer todos os dados desse serviço. Ao finalizar, você verá que todos os métodos da API estão listados:



Logo após, clique em **Concluir**.



## Adicionando uma conta OAUTH a API

* * *

Ao contrário do SOAP que recebe o usuário e a senha a cada método, a API Pùblica se conecta através da autenticação OAUTH. Para utilizar essa autenticação é necessário cadastrar um aplicativo no TOTVS Fluig e configurar um usuário integrador, conforme essa [documentação](https://tdn.totvs.com/display/public/fluig/Fluig+API#FluigAPI-Cadastraraplicativonofluigapp).

Após o cadastro, acesse na tela do aplicativo a parte de Contas e clique em Cadastrar Conta.



Selecione o ambiente da API e a autenticação como OAUTH1 e informe os dados de *consumer key, consumer secret, access token e token secret* conforme o cadastro realizado no TOTVS Fluig.



Logo após, clique em **Concluir**.



## Criando um projeto e realizando a integração com o TOTVS Fluig

* * *

Acesso no TOTVS iPaaS o menu Integrações e acesse a opção **Projetos & Pacotes**. Você pode utilizar projetos já existentes ou clicar em criar um projeto novo. No projeto, crie um novo diagrama e preencha o nome e a descrição.

Após selecionar o tipo de início do diagrama, na aba aplicativos selecione o aplicativo do TOTVS Fluig e arraste para o diagrama. Clique no ícone da engrenagem para habilitar a tela de configurações.

Para o SOAP, dê um nome ao recurso, selecione o serviço e o recurso (por exemplo, *simpleStartProcess* para iniciar uma solicitação) e no campo **Conta**, mantenha a opção **Sem conta**, pois não é necessária essa configuração. Clique em **Avançar**, e na tela seguinte, já serão exibidos todos os dados aceitos pelo serviço. Basta informar os parâmetros necessários e clicar em **Concluir**. Em caso de dúvidas, acesse a documentação dos [webservices do TOTVS Fluig](https://tdn.totvs.com/x/TY_CJw).

Para API Pública, selecione o serviço e recurso (por exemplo, *Processes - /v2/processes/{{{processId}}}/start - Start request* para iniciar uma solicitação) e selecione a conta que será usada para a autenticação.

Assim como no SOAP, na tela seguinte exibida todos os dados aceitos pelo serviço. Note que existem parâmetros *InPath* que são os itens da URL (neste caso, o *{{{processId}}}*) e os parâmetros *InBody* que são os dados do “corpo” da requisição. Em caso de dúvida sobre os parâmetros, você pode acessar também a documentação das [API’s do TOTVS Fluig](https://api.fluig.com/latest/index.html).
