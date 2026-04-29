# Acessar API através do cliente OAuth

> **Fonte:** [https://tdn.totvs.com/pages/viewpage.action?pageId=198952866](https://tdn.totvs.com/pages/viewpage.action?pageId=198952866)

---

# Índice

# Objetivo

* * *

Este guia irá auxiliar a acessar a API pública através do cliente OAuth.



# Pré-requisitos

* * *

Para que se tenha uma compreensão completa destas informações, alguns conhecimentos são considerados pré-requisitos, entre eles:

-   Visão geral sobre o fluig
-   Visão geral sobre o [fluig API](https://tdn.totvs.com/display/fluig/Fluig+API)



# Cadastro das chaves

* * *

Tendo em mão as *consumer keys*, é necessário cadastrá-las no fluig como um *OAuth App*, utilizando o *provider* padrão, as chaves criptografadas são informadas no cadastro, as descriptografadas são utilizadas no cliente.

# Utilização

* * *

-   Para utilizar o cliente é necessário incluir a dependência:

```
<dependency>
    <groupId>com.fluig</groupId>
    <artifactId>oauth-client</artifactId>
    <version>1.0</version>
</dependency>
```



-   Crie e configure o client para o domínio desejado.

```
// Cria o client e atribui domínio e consumer keys
OAuthClient oAuthClient = new OAuthClient(domainProvider, FLUIG_CONSUMER_KEY, FLUIG_CONSUMER_SECRET);
```



-   Realize o processo de autenticação, é necessário informar o usuário e senha para autorizar o acesso.

```
// O retorno da negociação e autenticação do usuário.
LoginResult result = oAuthClient.prepareResources(user, password);
HttpHelper.closeResource(result.getConnection());

// Checa o código de retorno
if (HttpHelper.returnSuccess(result.getConnection())) {
    System.out.println("Sucesso!");
}
```



-   É possível recuperar os *tokens* de acesso, após a autenticação.

```
oAuthClient.getToken();
oAuthClient.getTokenSecret();
```



-   Após autenticado o cliente permite assinar outras conexões do tipo *HttpURLConnection*, isso permite fazer realizar chamadas REST.

```
URL url = new URL("http://...");
HttpURLConnection connection = (HttpURLConnection) urlProvisioningTenant.openConnection();
//configurações da requisição ....

// Assina a conexão
oAuthClient.sign(connection);
```



# Exemplo

* * *

O projeto de exemplo está disponível no [git.fluig.com](https://git.fluig.com). Para fazer *download* do arquivo **oauth-client** [clique aqui](https://git.fluig.com/projects/SAMPLES/repos/componentes/browse).
