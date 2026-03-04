# Controle de Log

> **Fonte:** [https://tdn.totvs.com/display/fluig/Controle+de+Log](https://tdn.totvs.com/display/fluig/Controle+de+Log)

---

# Índice



# Objetivo

* * *

O objetivo deste guia é auxiliar os usuários administradores da plataforma a ativar o controle de log por usuário e a extrair o log completo da plataforma. 

O log de usuário tem por objetivo registrar as ações executadas por determinados usuários, com a finalidade de auxiliar no diagnóstico de situações que estejam prejudicando o uso da plataforma. Sua ativação somente pode ser feita por usuários administradores, selecionando individualmente os usuários dos quais as ações devem ser registradas em um arquivo de log separado.

O administrador também pode extrair o log completo da plataforma através desta página para análise de erros e envio do arquivo para o suporte fluig. 



# Pré-requisitos

* * *

Para entender melhor o processo, o administrador deve ter domínio sobre a [Gestão de logs](https://tdn.totvs.com/pages/viewpage.action?pageId=203764136) do fluig.  



# Ativando o Controle de Log por Usuário

* * *

Para ativar a geração de logs das ações de um determinado usuário na plataforma em um arquivo de log separado, é necessário acessar o **Painel de Controle**, agrupador **Segurança e acesso**, na opção **Controle de Log**.

A partir desta tela é possível selecionar quais usuários terão este recurso ativo, bem como configurar, clicando sobre o ícone de engrenagem (), o período que este permanecerá ativo, que pode ser de até 7 dias corridos. Este período corresponde ao tempo que as ações do usuário serão registradas em um arquivo de log específico **a partir do próximo login**, sendo que, uma vez registradas, permanecerão no arquivo até que o mesmo seja removido ou alterado manualmente.



Este arquivo ficará na pasta configurada para persistência dos logs **por padrão em \[Instalação fluig\]/appserver/domain/servers/<servername>/log/user-logging/<login>.log**. A limpeza deste arquivo **não** é feita de forma automática, para permitir a avaliação das informações mesmo após o período de ativação. Para facilitar a análise, no início de cada registro é informada a data e a hora, no formato "yyyy-MM-dd HH:mm:ss,SSS".

Para fazer *download* do log de cada usuário com este recurso ativo, dê um clique sobre o ícone  posicionado na coluna 'Download' do respectivo usuário.

Além disso, também é permitido filtrar pelo nome dos usuários ou pelos usuários que possuem o controle de log ativo.

Atenção

Se o usuário já estiver autenticado na plataforma, a ativação não terá efeito até o próximo *login*. Nesse caso pode-se solicitar que o mesmo efetue *logoff* e *login* novamente.





# Baixar log do servidor

* * *

Para efetuar o *download* do arquivo "server.log" contendo o log completo da plataforma fluig, basta clicar na opção **Baixar log do servidor completo** localizada em **Painel de controle >** agrupador **Segurança e acesso > Controle de log**

Atenção

As mensagens detalhadas informadas no final do log, além das informações padrões do log estarão disponíveis a partir da atualização **fluig 1.6.4-180508**



Além das mensagens padrão do log, serão apresentadas ao final do log, informações relevantes do ambiente e da infraestrutura do servidor conforme o exemplo abaixo:

```
2018-04-09 16:28:15,962 INFO  [com.totvs.technology.foundation.common.logger.ConfigLogger] (default task-11) =======================LOG CONFIGS=================================
2018-04-09 16:28:15,962 INFO  [com.totvs.technology.foundation.common.logger.ConfigLogger] (default task-11) FLUIG_VERSION = 1.6.5 120318
2018-04-09 16:28:15,962 INFO  [com.totvs.technology.foundation.common.logger.ConfigLogger] (default task-11) INSTALL_ROOT = /opt/fluigX/appserver
2018-04-09 16:28:15,962 INFO  [com.totvs.technology.foundation.common.logger.ConfigLogger] (default task-11) JBOSS_SERVER_NAME = fluig1
2018-04-09 16:28:15,962 INFO  [com.totvs.technology.foundation.common.logger.ConfigLogger] (default task-11) OS_NAME = Linux
2018-04-09 16:28:15,962 INFO  [com.totvs.technology.foundation.common.logger.ConfigLogger] (default task-11) JAVA_HOME = /opt/fluigX/jdk-64/jre
2018-04-09 16:28:15,962 INFO  [com.totvs.technology.foundation.common.logger.ConfigLogger] (default task-11) DATABASE_NAME = MySQL
2018-04-09 16:28:15,962 INFO  [com.totvs.technology.foundation.common.logger.ConfigLogger] (default task-11) DATABASE_VERSION = 5.7.21-0ubuntu0.16.04.1
2018-04-09 16:28:15,962 INFO  [com.totvs.technology.foundation.common.logger.ConfigLogger] (default task-11) DRIVER_NAME = MySQL Connector Java
2018-04-09 16:28:15,962 INFO  [com.totvs.technology.foundation.common.logger.ConfigLogger] (default task-11) DRIVER_VERSION = mysql-connector-java-5.1.44 ( Revision: b3cda4f864902ffdde495b9df93937c3e20009be )
2018-04-09 16:28:15,962 INFO  [com.totvs.technology.foundation.common.logger.ConfigLogger] (default task-11) SERVER_URL = https://suaempresa.fluig.com:443
2018-04-09 16:28:15,962 INFO  [com.totvs.technology.foundation.common.logger.ConfigLogger] (default task-11) SERVER_IP_ADRESS = 100.17.75.21
2018-04-09 16:28:15,962 INFO  [com.totvs.technology.foundation.common.logger.ConfigLogger] (default task-11) SERVER_IP_PORT = 8080
2018-04-09 16:28:15,962 INFO  [com.totvs.technology.foundation.common.logger.ConfigLogger] (default task-11) LS_ENABLED = true
2018-04-09 16:28:15,963 INFO  [com.totvs.technology.foundation.common.logger.ConfigLogger] (default task-11) LS_HOST = 100.17.75.22
2018-04-09 16:28:15,963 INFO  [com.totvs.technology.foundation.common.logger.ConfigLogger] (default task-11) LS_PORT = 5555
2018-04-09 16:28:15,963 INFO  [com.totvs.technology.foundation.common.logger.ConfigLogger] (default task-11) NODE_EXTERNAL_URL = 100.17.75.21:7777
2018-04-09 16:28:15,963 INFO  [com.totvs.technology.foundation.common.logger.ConfigLogger] (default task-11) NODE_INTERNAL_URL = 100.17.75.21:8888
2018-04-09 16:28:15,963 INFO  [com.totvs.technology.foundation.common.logger.ConfigLogger] (default task-11) SOLR_URL = http://100.17.75.21:8983/solr
2018-04-09 16:28:15,963 INFO  [com.totvs.technology.foundation.common.logger.ConfigLogger] (default task-11) SOLR_CLOUD = false
2018-04-09 16:28:15,963 INFO  [com.totvs.technology.foundation.common.logger.ConfigLogger] (default task-11) SOLR_REMOTE = false
2018-04-09 16:28:15,963 INFO  [com.totvs.technology.foundation.common.logger.ConfigLogger] (default task-11) OO_ENABLED = false
2018-04-09 16:28:15,963 INFO  [com.totvs.technology.foundation.common.logger.ConfigLogger] (default task-11) OO_DIRECTORY = /opt/fluigX/OpenOffice-linux-64
2018-04-09 16:28:15,963 INFO  [com.totvs.technology.foundation.common.logger.ConfigLogger] (default task-11) OO_PORT = 15001,15002
2018-04-09 16:28:15,963 INFO  [com.totvs.technology.foundation.common.logger.ConfigLogger] (default task-11) FTP_ENABLED = false
2018-04-09 16:28:15,963 INFO  [com.totvs.technology.foundation.common.logger.ConfigLogger] (default task-11) FTP_PORT = 21
2018-04-09 16:28:15,963 INFO  [com.totvs.technology.foundation.common.logger.ConfigLogger] (default task-11) FTP_PORT_RANGE =
2018-04-09 16:28:15,963 INFO  [com.totvs.technology.foundation.common.logger.ConfigLogger] (default task-11) FTP_PRIVATEFOLDER_PORT = 8021
2018-04-09 16:28:15,963 INFO  [com.totvs.technology.foundation.common.logger.ConfigLogger] (default task-11) FTP_PRIVATEFOLDER_PORT_RANGE =
2018-04-09 16:28:15,963 INFO  [com.totvs.technology.foundation.common.logger.ConfigLogger] (default task-11) ===================================================================
```



# Ambiente de Alta Disponibilidade - Cluster

* * *

O recurso de controle de log de usuário - quando em um ambiente de [alta disponibilidade](https://tdn.totvs.com/display/fluig/Alta+disponibilidade+e+balanceamento+de+carga) - tem seu acesso com usuário de perfil administrador. Para que este funcione adequadamente em ambientes com múltiplas instâncias, é necessário que ambos os acessos (usuário e administrador) sejam executados diretamente de um dos servidores, e não pelo endereço de balanceamento de carga (load balancer*)*.



****Exemplo****

* * *

Vamos considerar o seguinte cenário:

-   Acesso principal (load balancer)
    http://minhaempresa.fluig.com


-   Servidor 01 no seguinte endereço
    http://servidor1.fluig.com:8080


-   Servidor 02 no seguinte endereço
    http://servidor2.fluig.com:8082




E que o Servidor 02 seja escolhido como controle de log para o usuário João Carlos, sendo assim:

-   Administrador deve fazer download dos logs do usuário João Carlos em http://servidor2.fluig.com:8082
-   Usuário João Carlos deve acessar o fluig pelo endereço http://servidor2.fluig.com:8082
