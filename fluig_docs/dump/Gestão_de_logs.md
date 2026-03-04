# Gestão de logs

> **Fonte:** [https://tdn.totvs.com/pages/viewpage.action?pageId=203764136](https://tdn.totvs.com/pages/viewpage.action?pageId=203764136)

---

Fique atento!

Esta página é válida a partir da atualização **Voyager (2.0)** do TOTVS Fluig.

Se você utiliza uma atualização anterior, acesse [Como gerenciar os logs da plataforma da atualização **1.6 até 1.8.2**](https://tdn.totvs.com/pages/viewpage.action?pageId=941245905).





# Introdução

* * *

Em alguns casos, para obter mais informações sobre um determinado erro, pode ser necessário ativar um *log* mais detalhado.



# Como funciona?

* * *

As configurações de *log* são realizadas por instalação da plataforma e são definidas no arquivo **standalone.xml** localizado em \[Instalação fluig\]/appserver/standalone/configuration.

Importante!

No caso de um ambiente em alta disponibilidade, as alterações nas configurações de *log* devem ser efetuadas em todas as máquinas do *cluster*.

A configuração de *log* consiste basicamente em dois tipos de itens: **handlers** e **loggers**.

O **handler** é responsável pela forma de processamento/armazenamento dos registros de *log*, enquanto o **logger** é responsável por definir o nível de um pacote específico e por quais **handlers** este pacote será tratado.

EXEMPLO
O **handler** do arquivo de *log* padrão da plataforma (**server.log**) possui a seguinte configuração:

```
<periodic-rotating-file-handler autoflush="true" name="FILE">
    <formatter>
        <named-formatter name="PATTERN"/>
    </formatter>
    <file path="server.log" relative-to="jboss.server.log.dir"/>
    <suffix value=".yyyy-MM-dd"/>
    <append value="true"/>
    <level name="INFO"/>
</periodic-rotating-file-handler>
```

Basicamente, esta configuração define que o arquivo de *log* definido na propriedade **<file>** (server.log), será rotacionado no final de cada dia, ou seja, o conteúdo que estava no arquivo será salvo em outro arquivo contendo a data como sufixo, seguindo o padrão definido na propriedade **<suffix>** e o arquivo original será zerado para registrar as próximas mensagens. 

É importante verificar que a propriedade **<level>** deste **handler** possui, por padrão, o valor "INFO". Isso significa que este handler irá registrar apenas mensagens de nível INFO ou superior. Sendo assim, mesmo que existam pacotes enviando mensagens em nível de DEBUG, eles não serão registrados, pois DEBUG é um nível mais baixo que INFO. Caso deseje visualizar mensagens em nível de DEBUG no arquivo server.log, é necessário primeiramente alterar a configuração de <level name="INFO"/> para <level name="DEBUG"/>.

Os níveis de *log* seguem a seguinte ordem, sendo do nível mais baixo ao mais alto:

1.  ALL
2.  FINEST
3.  FINER
4.  TRACE
5.  DEBUG
6.  FINE
7.  CONFIG
8.  INFO
9.  WARN
10.  WARNING
11.  ERROR
12.  SEVERE
13.  FATAL

EXEMPLO
Se um handler for definido com *level* igual a INFO, irá registrar apenas mensagens de nível INFO, WARN, WARNING, ERROR, SEVERE e FATAL. Além dos níveis acima, também pode ser configurado o nível **OFF**, nos casos em que nenhuma mensagem deve ser registrada.

Cada configuração de **logger** está atrelada a um ou mais **handlers**. Quando esta informação não é configurada na declaração de um **logger**, é considerada a configuração realizada para o **root-logger** que, no caso do Fluig, possui a configuração abaixo:

```
<root-logger>
    <level name="INFO"/>
    <handlers>
        <handler name="CONSOLE"/>
        <handler name="FILE"/>
        <handler name="USERLOGGING"/>
    </handlers>
</root-logger>
```

Neste caso, todos os loggers que não definirem um handler específico, serão processados por estes três **handlers**: CONSOLE (caso seja iniciado via *script* no terminal do sistema operacional), FILE (arquivo server.log) e USERLOGGING (ver [aqui](https://tdn.totvs.com/display/fluig/Controle+de+Log)).

A configuração de um **logger** normalmente é feita conforme abaixo:

```
<logger category="io.undertow.request">
    <level name="FATAL"/>
</logger>
```

-   O parâmetro **category** indica o pacote ou o nome completo da classe que este **logger** está configurando.

-   O parâmetro **level** indica o nível mínimo das mensagens que serão apresentadas para esta categoria (pacote ou classe). Neste caso, as mensagens de *log* enviadas pelo pacote **io.undertow.request** serão registradas apenas se forem do nível FATAL.



# Configuração via interface de gerenciamento do servidor de aplicação

* * *

A seguir são descritos os passos necessários para criar um usuário de gerenciamento do servidor de aplicação e para adicionar uma classe ou pacote.



## Usuário do servidor de aplicação

* * *

Caso não possua um usuário de gerenciamento do servidor de aplicação, é necessário criá-lo:

**01.** No **prompt de comando** do Windows ou no **console** do Linux, navegue até o diretório **bin** do servidor de aplicação (\[Instalação do fluig\]/appserver/bin).

**02.** Executar o script **add-user.bat** ou **add-user.sh**.

**03.** Na primeira pergunta exibida, apenas pressione **ENTER**.

**04.** Informe o **nome do usuário** na segunda pergunta.

**05.** Escolha uma **senha** e digite-a na terceira e quarta perguntas.

**06.** Após a confirmação da senha, pressione **ENTER** na quinta pergunta.

**07.** Na sexta e sétima perguntas é necessário digitar **Sim** (ou Yes*,* se o console estiver em inglês) e confirmar com a tecla **ENTER**. 



## Adicionando Classe ou Pacote

* * *

**01.** Acesse http://\[IP ou hostname\]**:9990** e informe o **usuário** e **senha** criados no passo anterior.

**02.** Acesse **Configuration** → **Profiles** → **full** → **Logging → View**.

**03.** Na tela de log, acesse a aba **Log Categories**.

**04.** Clique em **Add**.

**05.** Em **name** informe o pacote ou classe a ser monitorada (Ex.: com.datasul.technology.webdesk.workflow.engine).

**06.** Defina a opção **Debug** no **Level,** selecione a opção **Use parent handlers** e **Salve**.

Veja um exemplo dos procedimentos citados acima: criando Usuário do servidor de aplicação e Adicionando Classe ou Pacote:



# Visualizando o *log* de *debug*

* * *

Após realizada as configurações, o *log* pode ser monitorado a partir do arquivo \[Instalação fluig\]/appserver/standalone/log/server.log.

Use uma das [ferramentas de análise recomendadas](https://tdn.totvs.com/pages/viewpage.action?pageId=235336390) para visualizar o arquivo ou, caso o sistema operacional seja Linux, é possível usar o comando:

```
tail -f [Instalação fluig]/appserver/standalone/log/server.log
```
