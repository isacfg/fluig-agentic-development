# Configurando o fluig Realtime para execução em Load Balance

> **Fonte:** [https://tdn.totvs.com/pages/viewpage.action?pageId=257623378](https://tdn.totvs.com/pages/viewpage.action?pageId=257623378)

---

Atenção

Esta página foi revisada para considerar as configurações de servidor de aplicação da atualização 1.6 e superiores.



# Objetivo

* * *

O objetivo deste guia é apresentar os procedimentos para a configuração do fluig Realtime para execução em Load Balance.



# Introdução

* * *

O fluig Realtime Server, baseado no produto [Node.js](http://nodejs.org/), é utilizado para apresentar as notificações da plataforma na tela do usuário.

Em ambientes onde será utilizado *cluster*, é desejável que todos os módulos estejam redundantes para alcançar a característica de tolerância à falhas. 

Em ambientes com *load balance*, é muito importante manter todos os servidores com o horário sincronizado.



# Instalando o fluig Realtime Server

* * *

Em ambientes Windows, o próprio instalador já instala o fluig Realtime Server. Para obter mais detalhes, acesse [Instalação da plataforma em Windows - Instalador](https://tdn.totvs.com/pages/viewpage.action?pageId=257622840).

Em ambientes Linux, acesse [Instalação da plataforma no Linux - Instalador](https://tdn.totvs.com/pages/viewpage.action?pageId=257622802).



Importante

Antes de seguir a configuração, efetuar os passos de instalação do servidor [Redis para uso do Load balance Realtime](https://tdn.totvs.com/pages/viewpage.action?pageId=555277701)



# Configurando o fluig Realtime Server com múltiplas instâncias

* * *

Para que as várias instâncias do Node.js se comuniquem, o arquivo **\[diretório\_instalação\]/node/bin/fluig.rt/package.json** deve ser editado alterando as seguintes informações:

```
"scale": {
           "enabled": true,
           "redisServer": "localhost",
           "redisPort": 6379
        }
```

Os atributos devem ser alterados conforme detalhado a seguir:

Atributos

Descrição

**enabled**

Informar "*true*" para caracterizar a utilização do node com outras instâncias.

**redisServer**

Informar o endereço do servidor Redis (configuração do servidor [Redis](https://tdn.totvs.com/pages/viewpage.action?pageId=555277701)).

**redisPort**

Informar a porta de conexão do servidor Redis.

Nota

Após a alteração, o serviço do Node.js deve ser reiniciado.



# Configurando o fluig Server para utilizar o fluig Realtime embarcado em cada servidor

* * *

Quando utilizam-se várias instâncias do fluig, cada uma destas instâncias possui um servidor para Realtime em execução.

Os servidores do fluig devem ser configurados para usar o fluig Realtime através do endereço IP de redirecionamento.

1.  Crie ou edite o arquivo \[Idiretório\_instalação\]/repository/wcmdir/config/[configuration.properties](https://tdn.totvs.com/pages/viewpage.action?pageId=257623031):

    ```
    node.chat.url=<ServerIP>:7777
    node.realtime.url=<ServerIP>:8888
    ```

    **<ServerIP>** é o endereço IP do servidor informado durante a instalação.



2.  Altere os parâmetros acima para: 

    ```
    node.chat.url=<RedirectIP>:7777
    node.realtime.url=<RedirectIP>:8888
    ```

    **<RedirectIP>** é o endereço IP do redirecionador das requisições (Ex.: [Apache mod\_proxy](https://tdn.totvs.com/display/fluig/Plataforma+em+load+balance+com+Apache+mod_proxy+em+Linux), [Microsoft NLB](https://tdn.totvs.com/display/fluig/Plataforma+em+load+balance+com+Microsoft+NLB)).
