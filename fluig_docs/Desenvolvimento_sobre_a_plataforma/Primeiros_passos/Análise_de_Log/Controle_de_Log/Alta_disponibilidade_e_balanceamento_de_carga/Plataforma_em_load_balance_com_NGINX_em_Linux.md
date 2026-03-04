# Plataforma em load balance com NGINX em Linux

> **Fonte:** [https://tdn.totvs.com/display/fluig/Plataforma+em+load+balance+com+NGINX+em+Linux](https://tdn.totvs.com/display/fluig/Plataforma+em+load+balance+com+NGINX+em+Linux)

---

Fique atento!

Esta página é válida a partir da atualização **Voyager (2.0)** do TOTVS Fluig.

Se você utiliza uma atualização anterior, acesse [Plataforma em *load balance* com NGINX em Linux da atualização **1.6.3 até 1.8.2**](https://tdn.totvs.com/pages/viewpage.action?pageId=955498748).





# Pré-requisitos

* * *

Para atualizar os parâmetros de configuração, deve-se obedecer aos seguintes pré-requisitos:

-   o usuário deve ser administrador da plataforma;

-   o usuário deve ter acesso aos arquivos de configuração da plataforma;

-   possuir o NGINX na versão 1.20.1 ou superior instalado. Detalhes de instalação e configuração do NGINX estão disponíveis na [documentação oficial](https://docs.nginx.com/);

    Importante!

    Somente é possível utilizar o NGINX **até a versão** **1.22** por conta da compatibilidade com o módulo nginx-stick-module-ng.

-   possuir a configuração de [*proxy* reverso](https://tdn.totvs.com/pages/viewpage.action?pageId=736971727);

-   possuir o [nginx-sticky-module-ng](https://bitbucket.org/nginx-goodies/nginx-sticky-module-ng/src/master/) (módulo externo) para implementar o comportamento de *sticky sessions* sem o uso do NGINX Plus. Esse procedimento só é necessário realizar na versão *open-source* do NGINX.

Atenção!

Antes de prosseguir com as instruções descritas nessa página, siga com atenção as instruções contidas na documentação [Alta disponibilidade e balanceamento de carga](https://tdn.totvs.com/pages/viewpage.action?pageId=257622931).



# Considerações iniciais

* * *

A configuração de balanceamento de carga (*load balance*) é a forma mais simples de se obter distribuição de carga e algum nível de alta disponibilidade.

A grande desvantagem é a necessidade de afinidade de sessão, ou seja, uma vez que o usuário foi autenticado em uma instância, sempre será direcionado para a mesma instância. Nesse caso, se essa instância ficar indisponível, o usuário terá que se autenticar novamente na aplicação.

Importante!

-   Em ambientes com *load balance*, é muito importante manter todos os servidores com o horário sincronizado.

-   É necessário reiniciar todos os servidores depois de finalizar as configurações.



# Instalando a primeira instância

* * *

Siga os procedimentos abaixo para realizar a instalação da primeira instância do Fluig em um ambiente *load balance.*



-   Faça uma instalação normal, conforme o [Guia de instalação da plataforma](https://tdn.totvs.com/pages/viewpage.action?pageId=257622732), mas **não** inicie os serviços do Fluig.





-   Abra o arquivo **standalone.xml** que está disponível em **\[diretório\_instalação\]/appserver/standalone/configuration** em um editor de texto.





-   Localize a propriedade de *binding* "java:global/wcm/globalDataDir" e altere-a informando o caminho da pasta compartilhada entre as instâncias.

    ```
    <simple name="java:global/wcm/globalDataDir" value="GLOBAL_DATA_DIR/wcmdir"/>
    ```

-   Localize também o *subsystem* "urn:com.totvs.technology.wcm:1.0" e altere-o informando o caminho da pasta compartilhada entre as instâncias.

    ```
    <subsystem xmlns="urn:com.totvs.technology.wcm:1.0" dir="GLOBAL_DATA_DIR/apps" refresh="15"/>
    ```






-   Mova o conteúdo da pasta **\[diretório\_instalação\]/repository/wcmdir** para a pasta **GLOBAL\_DATA\_DIR/wcmdir**.

-   Mova o conteúdo da pasta **\[diretório\_instalação\]/appserver/apps** para a pasta **GLOBAL\_DATA\_DIR****/apps**.





-   Configure o servidor de indexação (Fluig Indexer) para ser executado em servidor separado, conforme instruções descritas em [Servidor de indexação único](https://tdn.totvs.com/pages/viewpage.action?pageId=257623442).





-   Inicie os serviços **fluig\_Indexer,** **fluig\_RealTime** e em seguida, inicie o **Fluig**.

-   Acesse a plataforma com o usuário "wcmadmin", crie uma nova empresa (*tenant*) e realize as configurações necessárias.

-   Pare o **Fluig** e os serviços do **fluig\_RealTime** e **fluig\_Indexer**.



# Criando uma instância em outra máquina

* * *

Siga os procedimentos abaixo para criar uma instância em outra máquina.



-   Instale a aplicação pelo [procedimento normal](https://tdn.totvs.com/pages/viewpage.action?pageId=257622732) e siga as instruções até o procedimento antes de iniciar o servidor.





-   Abra o arquivo **standalone.xml** que está disponível em **\[diretório\_instalação\]/appserver/standalone/configuration** em um editor de texto.





-   Localize a propriedade de *binding* "java:global/wcm/globalDataDir" e altere-a informando o caminho da pasta compartilhada entre as instâncias;

    ```
    <simple name="java:global/wcm/globalDataDir" value="GLOBAL_DATA_DIR/wcmdir"/>
    ```


-   Localize também o *subsystem* "urn:com.totvs.technology.wcm:1.0" e altere-o informando o caminho da pasta compartilhada entre as instâncias.

    ```
    <subsystem xmlns="urn:com.totvs.technology.wcm:1.0" dir="GLOBAL_DATA_DIR/apps" refresh="15"/>
    ```


# Configurando o balanceador

* * *

O Fluig homologa o NGINX com o *upstream* para fazer o balanceamento de carga.



-   Instale o servidor [NGINX](https://nginx.org/en/), versão 1.20.1 ou superior.





-   Configure o módulo [nginx-sticky-module-ng](https://bitbucket.org/nginx-goodies/nginx-sticky-module-ng/src/master/) no NGINX para utilizar a afinidade de sessão.






-   Habilite o balanceamento com o parâmetro **upstream** (geralmente é feito criando o arquivo **/etc/nginx/nginx.conf** ou **/etc/nginx/conf.d**).

    Atenção!

    Cada “**BalancerMember**” indica um servidor e deve apontar para o IP e a porta corretos.

    Um *cookie* chamado “**FLUIGCOOKIE**” é criado para manter a afinidade da sessão. Sem o *cookie*, o procedimento não irá funcionar.

    ```
    upstream mycluster {
        server {Ip do servidor 1}:{PORTA};
        server {Ip do servidor 2}:{PORTA};
        server {Ip do servidor 3}:{PORTA};
        sticky name=FLUIGCOOKIE expires=1h path=/ domain=.exemplo.com;
    }

    server {
        listen 80;
        server_name fluig.exemplo.com;

        server_tokens off;

        add_header 'Access-Control-Allow-Origin' 'http://mycluster';
        add_header 'Access-Control-Allow-Methods' 'GET, PUT, POST, OPTIONS, DELETE';
        add_header 'Access-Control-Request-Method' 'GET, PUT, POST, OPTIONS, DELETE';
        add_header 'Access-Control-Allow-Headers' 'Content-Type, X-Requested-With, accept-version';
        add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;

        location / {
            proxy_pass http://mycluster;
            add_header Set-Cookie "FLUIGCOOKIE=$request_id.$upstream_addr; Path=/";

            proxy_pass_request_headers on;
            proxy_set_header Host $http_host;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_set_header X-Forwarded-Server $host;
            proxy_set_header X-Forwarded-Host $host:$server_port;
            proxy_set_header X-Real-IP $remote_addr;

            client_max_body_size       880m;
            client_body_buffer_size    256k;

            proxy_connect_timeout      800;
            proxy_send_timeout         800;
            proxy_read_timeout         800;

            proxy_buffer_size          8k;
            proxy_buffers              8 32k;
            proxy_busy_buffers_size    64k;
            proxy_temp_file_write_size 64k;
        }

    }
    ```




Importante!

O procedimento abaixo deve ser realizado para utilizar o serviço de Realtime em *load balance*.



**Passos para usar o *load balance* do Realtime**

-   Faça a configuração do Realtime para *load balance* conforme descrito em [Configurando o Fluig Realtime para execução em *load balance*](https://tdn.totvs.com/pages/viewpage.action?pageId=257623378).

-   Feitas as configurações acima, adicione o código abaixo no arquivo de configuração do servidor.

    ```
    upstream nodeCluster1 {
        sticky name=SERVERID expires=1h path=/ domain=exemplo.com  httponly;

        server {ip_servidor_realtime1}:8888;
        server {ip_servidor_realtime2}:8888;
    }

    server {
        listen 8888;

        add_header Set-Cookie "SERVERID=sticky.$upstream_cookie_SERVERID; Path=/";

        location / {
            proxy_pass http://nodeCluster1;
            proxy_cookie_path / "/; HTTPOnly; Secure";
        }
    }

    upstream nodes_polling {
        sticky name=SERVERID expires=1h path=/ domain=exemplo.com httponly;

        server {ip_servidor_realtime1}:7777;
        server {ip_servidor_realtime2}:7777;
    }

    upstream nodes_ws {
        sticky name=SERVERID expires=1h path=/ domain=exemplo.com httponly;

        server {ip_servidor_realtime1}:7777;
        server {ip_servidor_realtime2}:7777;
    }

    server {
        listen 7777;

        add_header Set-Cookie "SERVERID=sticky.$upstream_cookie_SERVERID; Path=/";

        location / {
            set $upstream "nodes_polling";

            if ($http_upgrade = "websocket") {
                set $upstream "nodes_ws";
            }
            proxy_pass http://$upstream;

        }
    }
    ```






-   Após efetuar os passos anteriores, o arquivo "/etc/nginx/conf.d" estará desta forma:

    ```
    upstream mycluster {
        server {Ip do servidor 1}:{PORTA};
        server {Ip do servidor 2}:{PORTA};
        server {Ip do servidor 3}:{PORTA};
        sticky name=FLUIGCOOKIE expires=1h path=/ domain=.exemplo.com;
    }

    server {
        listen 80;
        server_name fluig.exemplo.com;

        server_tokens off;

        add_header 'Access-Control-Allow-Origin' 'http://mycluster';
        add_header 'Access-Control-Allow-Methods' 'GET, PUT, POST, OPTIONS, DELETE';
        add_header 'Access-Control-Request-Method' 'GET, PUT, POST, OPTIONS, DELETE';
        add_header 'Access-Control-Allow-Headers' 'Content-Type, X-Requested-With, accept-version';
        add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;

        location / {
            proxy_pass http://mycluster;
            add_header Set-Cookie "FLUIGCOOKIE=$request_id.$upstream_addr; Path=/";

            proxy_pass_request_headers on;
            proxy_set_header Host $http_host;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_set_header X-Forwarded-Server $host;
            proxy_set_header X-Forwarded-Host $host:$server_port;
            proxy_set_header X-Real-IP $remote_addr;

            client_max_body_size       880m;
            client_body_buffer_size    256k;

            proxy_connect_timeout      800;
            proxy_send_timeout         800;
            proxy_read_timeout         800;

            proxy_buffer_size          8k;
            proxy_buffers              8 32k;
            proxy_busy_buffers_size    64k;
            proxy_temp_file_write_size 64k;
        }

    }

    upstream nodeCluster1 {
        sticky name=SERVERID expires=1h path=/ domain=exemplo.com  httponly;

        server {ip_servidor_realtime1}:8888;
        server {ip_servidor_realtime2}:8888;
    }

    server {
        listen 8888;

        add_header Set-Cookie "SERVERID=sticky.$upstream_cookie_SERVERID; Path=/";

        location / {
            proxy_pass http://nodeCluster1;
            proxy_cookie_path / "/; HTTPOnly; Secure";
        }
    }

    upstream nodes_polling {
        sticky name=SERVERID expires=1h path=/ domain=exemplo.com httponly;

        server {ip_servidor_realtime1}:7777;
        server {ip_servidor_realtime2}:7777;
    }

    upstream nodes_ws {
        sticky name=SERVERID expires=1h path=/ domain=exemplo.com httponly;

        server {ip_servidor_realtime1}:7777;
        server {ip_servidor_realtime2}:7777;
    }

    server {
        listen 7777;

        add_header Set-Cookie "SERVERID=sticky.$upstream_cookie_SERVERID; Path=/";

        location / {
            set $upstream "nodes_polling";

            if ($http_upgrade = "websocket") {
                set $upstream "nodes_ws";
            }
            proxy_pass http://$upstream;

        }
    }
    ```




# Ambiente HTTPS

* * *

Quando o Fluig estiver configurado em HTTPS, é necessário que as *flags* de segurança "*Secure*" e "*HttpOnly*" dos *cookies* estejam habilitadas na sessão. Para isso, siga a instrução abaixo:

```
sticky name=SERVERID expires=1h path=/ domain=exemplo.com  httponly secure;
```

Importante!

Ao utilizar balanceamento de carga em ambientes com HTTPS, a [configuração de HTTPS](https://tdn.totvs.com/pages/viewpage.action?pageId=354472893#Configura%C3%A7%C3%A3oHTTPSdaplataforma-Configura%C3%A7%C3%A3odeHTTPSmanual) deve ser replicada manualmente para todos os servidores do Fluig.
