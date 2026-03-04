# Evento beforeLogin

> **Fonte:** [https://tdn.totvs.com/display/fluig/Evento+beforeLogin](https://tdn.totvs.com/display/fluig/Evento+beforeLogin)

---

* * *

O evento **beforeLogin** é um evento global do Fluig executado **após** as validações de senha e de bloqueio do usuário e **antes** da conclusão do login. Ele pode ser utilizado tanto para monitoramento quanto para bloquear o login de um usuário em determinadas situações.



Atenção!

O uso indevido do evento **beforeLogin** pode causar inconsistências no processo de login da plataforma, impedindo que usuários consigam acessar o sistema.

Em casos mais críticos, até mesmo o **usuário administrador** pode ser bloqueado, o que impossibilita a atualização ou correção do próprio evento beforeLogin. Nessas situações, torna-se necessária uma **intervenção direta no banco de dados** para resolver o problema.



# Sintaxe

* * *

A seguir é apresentada a sintaxe básica do evento **beforeLogin**. Esse evento deve ser implementado por meio de uma função chamada **beforeLogin**, que é executada automaticamente durante o processo de autenticação do usuário. Dentro dessa função, é possível realizar validações adicionais ou aplicar regras personalizadas e, se necessário, bloquear o login lançando uma **Exception** com a mensagem que será exibida ao usuário.

```
function beforeLogin(login, origin, requestInfoVO) {}
```



# Parâmetros

* * *

**login**

-   Uma string com o login do usuário que está tentando fazer o login

**origin**

-   Uma string contendo o valor do atributo "com.totvs.technology.security.protocol" da requisição. O valor padrão para tentativas de login via web é **null**.

**requestInfoVO**

-   Um objeto do tipo [RequestInfoVO](https://tdn.totvs.com/display/fluig/RequestInfoVO) contendo os dados  da requisição de login.



## Confira abaixo alguns exemplos

* * *

#### **Consultando um serviço cadastrado no Fluig para verificar se há um bloqueio** 

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



#### **Obrigando que o IP de requisição seja de uma faixa específica**

```
function beforeLogin(login, origin, requestInfoVO) {
   if (requestInfoVO) { // previne erros em versões onde esse parâmetro não existia
      if (!requestInfoVO.ip.startsWith("172.")) {
         throw "Você deve estar conectado na VPN para realizar o acesso ao Fluig";
      }
   }
}
```



## Compatibilidade

* * *

O parâmetro **requestInfoVO** foi implementado na versão **2.0.0-260224**.
