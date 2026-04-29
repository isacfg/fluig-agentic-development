# Cadastro de serviço

> **Fonte:** [https://tdn.totvs.com/pages/viewpage.action?pageId=644720026](https://tdn.totvs.com/pages/viewpage.action?pageId=644720026)

---

# Objetivo

* * *

O objetivo desse guia é mostrar a criação de serviços SOAP, REST e JDBC, que possibilitam integração com sistemas terceiros.



# Tipos de serviços

* * *

Serviço

Descrição

SOAP

É um protocolo padrão projetado originalmente para possibilitar a comunicação entre aplicações desenvolvidas em diferentes linguagens e plataformas. Quando uma solicitação de dados é enviada a um serviço SOAP, ela pode ser processada por meio do protocolo HTTP (em navegadores da web) por exemplo. As mensagens SOAP são documentos XML que aderem a uma especificação W3C.

REST

Utiliza do protocolo HTTP para fazer comunicação e pode retornar dados em JSON, XML, texto simples e HTML.

JDBC

É um conjunto de classes e interfaces ( API ) escritas em Java para execução e manipulação de resultados de instruções SQL para banco de dados relacional. Para cada Banco de dados há um driver JDBC.



# Cadastrando o serviço

* * *

Acesse o TOTVS Fluig com usuário administrador, no **Painel de controle** localize o agrupador **Desenvolvimento** e acione a opção **Serviços**.

Selecione a opção novo serviço:

**Your browser does not support the HTML5 video element**

Selecionado o tipo de serviço SOAP é preciso inserir as informações solicitadas, os campos destacados com um asterisco (**\***) são de preenchimento obrigatório:



Campo

Descrição

**Nome\***

Neste campo, adicione um nome para o serviço que deseja cadastrar.

**Descrição\***

Neste campo, adicione uma descrição para o serviço.

**URL\***

Neste campo, adicione a URL do *webservice* que deseja utilizar.

**Arquivo de *binding***

Somente será utilizado o arquivo de *binding* para serviços criados utilizando a API CXF. Para incluir, basta acionar **Escolher arquivo** no campo **Arquivo de Binding** e incluir.

***Package***

Neste campo, informe o local onde as classes do serviço devem ser geradas.
EXEMPLO
com.fluig

Nota:

Se não for informando um local, as classes serão geradas dentro do local padrão indicado pelo wsdl do serviço.

**Tipo de autenticação\***

Neste campo, selecione o tipo de autenticação que deseja:

-   **None**: quando selecionado, determina que não haverá autenticação na requisição do serviço;

-   **Basic**: quando selecionado, determina que a autenticação será feita a partir de um usuário e uma senha enviados no *header* da requisição do serviço.

**Usuário\***

Neste campo, informe o usuário que será enviado no *header* da requisição do serviço para ser utilizado na autenticação. Esse campo somente é exibido ao selecionar o tipo de autenticação Basic.

**Senha\***

Neste campo, informe a senha do usuário que será enviada no *header* da requisição do serviço para ser utilizada na autenticação. Esse campo somente é exibido ao selecionar o tipo de autenticação Basic.

Acionar opção **Salvar.**

**Your browser does not support the HTML5 video element**

Dica!

Mais detalhes referente a *binding*, você encontra na documentação técnica de [Integração com Aplicativos Externos](https://tdn.totvs.com/pages/releaseview.action?pageId=73082260#Integra%C3%A7%C3%A3ocomAplicativosExternos-ResolvendoconflitosutilizandoarquivosdebindJAXB).

Importante!

O TOTVS Fluig Plataforma possui suporte apenas para leitura do swagger 2.0 no cadastro do serviço REST.

Selecionado o tipo de serviço REST é preciso inserir as informações solicitadas, os campos destacados com um asterisco (**\***) são de preenchimento obrigatório:



Campo

Descrição

**Nome\***

Neste campo, adicione um nome para o serviço que deseja cadastrar.

**Descrição\***

Neste campo, adicione uma descrição para o serviço.

***Swagger***

Neste campo, adicione um endereço para um arquivo no formato JSON.

**Domínio\***

Neste campo, adicione o domínio do serviço.

**Tipo de autenticação\***

Neste campo, selecione o tipo de autenticação que deseja:

-   None.
-   Rest oauth 1.
-   Rest oauth 2.
-   Custom.
-   Basic.

**URL para teste de serviço**

neste campo, insira o *endpoint* GET para teste de autenticação *provider*.

Acionar opção **Salvar.**



Selecionado o tipo de serviço JDBC é preciso inserir as informações solicitadas, os campos destacados com um asterisco (**\***) são de preenchimento obrigatório:



Campo

Descrição

**Nome\***

Neste campo, adicione um nome para o serviço que deseja cadastrar.

**Descrição\***

Neste campo, adicione uma descrição para o serviço.

**Driver\***

Neste campo, será selecionado o *driver* desejado: MySQL, SQL Server ou Oracle. Após a gravação do serviço, o *driver* não pode ser editado.

**URL\***

Neste campo, informe os dados do servidor de banco de dados.

**Usuário\***

Usuário de acesso ao banco de dados.

**Senha\***

Senha de acesso ao banco de dados.

Acionar opção **Salvar.**

Importante!

Quando o banco Oracle utilizar nome do serviço na autenticação, utilizar a URL: `jdbc:oracle:thin:@//[HOST][:PORT]/SERVICE`



# Testando o serviço

* * *

A janela de Testar serviço irá apresentar um campo contendo o retorno do teste, em caso de sucesso ou erro.

O teste só é realizado para serviços REST ou JDBC.

No serviço criado, selecione a opção **Testar serviço** ![Testar serviço](/download/thumbnails/644720026/fluigicon-computernetwork.png?version=1&modificationDate=1634924566380&api=v2) :

Importante!

O teste somente será possível caso o campo **URL para teste de serviço** esteja preenchido no cadastro de serviço.

No serviço criado, selecione a opção **Testar conexão** ![Testar serviço](/download/thumbnails/644720026/fluigicon-computernetwork.png?version=1&modificationDate=1634924566380&api=v2) :



# Habilitando o log de serviço

* * *

Com o *log* habilitado, a quantidade de requisições será apresentada pelo serviço específico.

Para habilitar o mesmo, selecione a opção ![Estatísticas de uso](https://tdn.totvs.com/download/thumbnails/243660796/ecm_painelcontrole_dark.png?version=2&modificationDate=1538665918083&api=v2), nesse momento será aberto o modal onde deverá ser preenchido as informações:

Campo

Descrição

Ativar log completo

Selecionar **ON** para ativar o *log.*

Tempo de expiração

Configura o tempo de expiração do *log*, o mesmo pode variar entre 1 e 24 horas.

As requisições realizadas pelo serviço serão disponibilizadas em um arquivo de log, para baixar o mesmo deverá selecionar o serviço e acionar o botão Download do log.

Importante!

Habilitando o log, pode causar uma maior utilização de espaço em disco.
