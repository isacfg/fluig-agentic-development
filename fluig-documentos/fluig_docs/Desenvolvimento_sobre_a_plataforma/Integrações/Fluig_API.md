# Fluig API

> **Fonte:** [https://tdn.totvs.com/display/fluig/Fluig+API](https://tdn.totvs.com/display/fluig/Fluig+API)

---

Atenção

Esta página foi revisada para considerar as configurações do TOTVS Fluig Plataforma a partir da **atualização 1.6**.

# Índice

# Objetivo

* * *

Este documento é direcionado a desenvolvedores, clientes e parceiros que desejam criar aplicações e recursos externos ou internos ao fluig. O fluig possui uma API Pública com os principais serviços disponíveis na plataforma, bem como um componente interno (fluig-sdk-api.jar) que pode ser importado e utilizado para chamadas dos serviços no mesmo contexto do fluig. A API disponibiliza uma documentação de classes e interfaces no padrão Java Doc que pode ser encontrada [aqui](https://api.fluig.com/old/sdk).

Através da API é possível criar mensagens em nome do usuário, adicionar um contato como favorito, criar artigos e muito mais. Para que aplicativos possam atuar em nome do usuário a autorização é realizada através do protocolo OAuth, e caso o serviço seja utilizado pelo componente interno, é injetado o EJB para execução dos serviços.



# Pré requisitos

* * *

São pré requisitos básicos ter conhecimento sobre:

-   Desenvolvimentos de API REST
-   Padrão OAuth  



# API

* * *

API, de *Application Programming Interface* (Interface de Programação de Aplicativos), é um conjunto de rotinas e padrões estabelecidos pelo *software* para que aplicativos externos possam utilizar seus recursos em suas aplicações. No fluig, a documentação da API está disponível em http://\[servidor\_fluig\]/api ou [aqui](https://api.fluig.com).

Todos os serviços são baseados em **REST**, onde ações de escrita estão limitados à requisições HTTP do tipo **POST**, e ações de consulta à requisições do tipo **GET.** 

### OAuth





A autenticação e autorização de aplicativos externos ao fluig é realizada através do protocolo [OAuth](http://oauth.net/core/1.0a/) 1.0 e [OAuth 1.0a](http://oauth.net/core/1.0a/) , que possibilita que aplicações executem ações em nome do usuário sem armazenar seus dados de acesso (usuário/senha). Também é possível utilizar a API do fluig através de uma sessão válida no navegador de internet.



Observação

O fluig não é compatível com o protocolo OAuth 2.0.



### Processo de autenticação

Para que um aplicativo consiga atuar no fluig em nome de um usuário ou em nome próprio é necessário que ele esteja previamente cadastrado na plataforma fluig com suas chaves pública e privada. Quando o aplicativo estiver cadastrado no fluig, é possível iniciar o processo de autenticação conforme etapas abaixo:

-   **Etapa 1:** Aplicativo solicita ao fluig token para iniciar uma sessão OAuth (http://\[servidor\_fluig\]/portal/api/rest/oauth/request\_token).

-   **Etapa 2:** Aplicativo solicita autorização do usuário através de login e senha (http://\[servidor\_fluig\]/portal/api/rest/oauth/authorize).

-   **Etapa 3:** Aplicativo solicita ao fluig tokens para atuar em nome do usuário (http://\[servidor\_fluig\]/portal/api/rest/oauth/access\_token). 


**Exemplo OAuth**



**Consumo da API Pública em Eventos**

**Utilizando um objeto consumer**

Para obter uma instância de consumer é necessário solicitar ao objeto de ambiente **oauthUtil** executando o método **getNewAPIConsumer** ou **getNewAPIConsumerAsCurrentUser**.

-   **getNewAPIConsumer:** Utilizada para solicitar um objeto de acesso com autenticação por usuário da aplicação. 

-   **getNewAPIConsumerAsCurrentUser:** Utilizada para solicitar um objeto de acesso com autenticação pelo usuário logado.

**IMPORTANTE:** Para poder utilizar esse método você deve marcar na página do usuário aplicativo a opção ***"Pode agir como usuário logado em eventos customizados"***

***O usuário da aplicação utiliza o modo Impersonate como forma de identificação na autenticação do acesso. Esse modo Impersonate só é permitido através dos eventos customizados e não fora dele.***

Para ambos os métodos descritos acima, utilizar os seguintes parâmetros:

-   Consumer Key
-   Consumer Secret
-   Token Access
-   Token Secret

Para mais informações acesse o passo [Cadastrar aplicativo no fluig](#FluigAPI-app). 



**Método GET**

Esse método realiza uma chamada GET na API Publica, passando como argumento uma URI válida da API .

***Ex:*** consumer.get("/public/social/community/comunidade1");

**Método POST**

Esse método realiza uma chamada POST na API Publica, passando como argumento uma URI válida da API e os dados enviados em formato JSON.

***Ex:*** consumer.post("/public/social/post/create/with/upload", "{\\"text\\":\\"Post criado via evento\\",\\"visibility\\":\\"PUBLIC\\"}");



### Cadastrar aplicativo no fluig

* * *

Para cadastrar um aplicativo na plataforma, acompanhe os passos a seguir:

-   Acesse o menu **Painel de controle**, localize o agrupador **Parâmetros técnicos** e acione a opção **Oauth Provider.**

-   Clique em **Adicionar**, preencha os campos conforme a imagem e salve.

**Cadastro de provedor Oauth** 

**Detalhes:**



Campo

Exemplo

Código

01

OAuth Provider

WCM

Descrição

Aplicativo de exemplo

Acess Token URL

http://<ServerFluig>/portal/api/rest/oauth/access\_token



Request Token URL

http://<ServerFluig>/portal/api/rest/oauth/request\_token 



User Authorization URL

 http://<ServerFluig>/portal/api/rest/oauth/authorize

Request Method

GET

Signature Method

HMAC-SHA

-   Volte para o **Painel de controle** e acesse agora a opção **Oauth application**.



-   Clique em **Adicionar**, preencha os campos Consumer Key, Descrição e Consumer Secret, pois são todos campos obrigatórios, conforme imagem abaixo e acione **Salvar**:


**Cadastro de aplicativo Oauth** 

**Detalhes:**



Campos

Exemplo

Consumer Key

<chave publica de seu aplicativo>

OAuth Provider

Provedor cadastrado no Passo 2

Consumer Secret

<chave secreta de seu aplicativo>

-   Opcional: Caso seu aplicativo execute ações em nome próprio, você pode criar um usuário aplicativo.

Atenção

Caso a plataforma Fluig esteja configurada para autenticação utilizando o TOTVS Identity, é requerida a criação de um usuário aplicativo que será utilizado na conexão com a API.

-   Na mesma tela de cadastro de aplicativo OAuth existe uma ação chamada **Usuário Aplicativo**. Ao acessá-la poderão ser gerados tokens exclusivos para o aplicativo.

Se desejar que o usuário aplicativo execute ações em nome de outro usuário cadastrado na plataforma, basta selecionar a opção **Permite Impersonalização**. Selecionando este recurso, o usuário aplicativo pode, por exemplo, fazer um post em uma comunidade em nome de outro usuário, sendo apresentado da seguinte forma:

-   'Usuário x' fez uma publicação na comunidade, **em vez de** 'App X' fez uma publicação na comunidade.

Este comportamento é válido para todos métodos da API como por exemplo, publicação de documentos, movimentar processos entre outros.

-   Caso as ações do seu aplicativo devam ser executadas em nome de um usuário, então o aplicativo deve passar pelo processo padrão de autenticação OAuth.

**Usuário aplicativo**

### Aplicação de Exemplo

* * *

Existe uma aplicação desenvolvida pela equipe do fluig que mostra como usar a API. A aplicação está desenvolvida em Java. Você deve possuir o JDK 1.8 instalado para executar a aplicação. A gestão de build e de dependências é feita pelo Maven, então é obrigatório tê-lo instalado no ambiente de desenvolvimento a ser utilizado.

[fluig-client-demo.zip](https://tdn.totvs.com/download/attachments/258277672/fluig-client-demo.zip?version=1&modificationDate=1474483463000&api=v2)

-   Baixe o arquivo e descompacte-o em um diretório de sua preferência.

O projeto basicamente consiste em um **pom.xml** (***Project Object Model*, arquivo padrão do Maven**) e uma classe Java chamada FluigClientExample. Abra a classe e verifique a documentação gerada a partir de comentários.

Você verá que é necessário construir um objeto **FluigClient** e este objeto recebe alguns parâmetros como *host, consumer key* e *consumer secret*. Você deve alterar os valores passados na construção para um *host* conhecido e informar o *consumer key* e *secret* da aplicação de sua responsabilidade, conforme o código abaixo:

```
FluigClient fluig = new FluigClient()
			.setHost("http://127.0.0.1:8080")
			.setConsumerKey("informe aqui o seu consumer key")
			.setConsumerSecret("informe aqui o seu consumer secret")
			.connect();
```

No caso da autenticação no Identity, também será necessário informar o Access Token e Token Secret apresentados na criação do usuário aplicativo.

```
FluigClient fluig = new FluigClient()
			.setHost("http://127.0.0.1:8080")
			.setConsumerKey("informe aqui o seu consumer key")
			.setConsumerSecret("informe aqui o seu consumer secret")
			.setTokenAccess("informe aqui o seu Token Access")
			.setTokenSecret("informe aqui o seu Token Secret")
			.connect();
```

Mais abaixo no código, podemos reparar que a aplicação cria e lê posts de comunidades. Você deve informar uma comunidade válida do seu ambiente para executar a aplicação demonstração;

```
String comunidadeAlias = "coloque_aqui_alias_de_alguma_comunidade";
```

Depois de realizar as alterações, entre no diretório gerado e você notará que o arquivo **pom.xml** localiza-se na raiz do projeto.

Para realizar o *build* do projeto, digite:

```
$ mvn clean install
```

Durante o processo de build, o Maven irá exibir vários logs como dependências sendo baixadas dentre outros.

Depois do *build* finalizado com sucesso, repare que o arquivo **target/api-client-demo-jar-with-dependencies.jar** foi gerado. Este arquivo é um executável Java.

Para executá-lo digite o comando:

```
$ java -jar target/api-client-demo-jar-with-dependencies.jar
```

Se você reparar na classe **FluigClientExample**, a execução irá: listar os usuários, criar uma publicação na página pessoal do usuário, criar uma publicação em uma comunidade e listar as publicações de uma comunidade. Durante a execução os *logs* dos resultados das chamadas serão exibidos no console.

### Acesso ao Java DOC do componente SDK

* * *

Para ter acesso à documentação JAVA DOC do componente SDK, [clique aqui](https://api.fluig.com/old/sdk).

Veja o exemplo (**upload-file-ecm-rest**) em nosso repositório [aqui](https://git.fluig.com/projects/SAMPLES/repos/widgets/browse).
