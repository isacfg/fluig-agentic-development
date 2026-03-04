# TOTVS WS Client

> **Fonte:** [https://tdn.totvs.com/display/public/LRM/TOTVS+WS+Client](https://tdn.totvs.com/display/public/LRM/TOTVS+WS+Client)
> **Domínio:** TDN (TOTVS Developer Network)

---

# **Objetivo**

* * *

       O **"TOTVS WS Client"** tem como objetivo auxiliar a utilização e/ou testar a execução dos Web Service's disponíveis no RM.

# **Como Configurar**

* * *

        Para que o TOTVS WS Client consiga acessar os WebServices do RM, é necessário que os mesmos estejam ativos e que o **DefaultDB** esteja configurado. Para saber como configurar o **DefaultDB** acesse o link: **[http://tdn.totvs.com/x/sQSqC](https://tdn.totvs.com/x/sQSqC)**

      Para uso do sistema **"TOTVS WS Client"** é necessário copiar os arquivos: **"TotvsWSClient.exe"** e **"TotvsWSClient.exe.config"** para a pasta RM.Net do seu ambiente configurado.

      Em seguida, basta editar o arquivo **"**TotvsWSClient.exe.config**"** alterando as Tag's **"Host", "Port"** e **"WS-Server"** para as configurações do ambiente desejado. Conforme exemplo abaixo:



TotvsWSClient.exe.config

[?](#)

`<?``xml` `version``=``"1.0"``?>`

`<``configuration``>`

  `<``appSettings``>`

    `<``add` `key``=``"Host"` `value``=``"localhost"` `/>`

    `<``add` `key``=``"Port"` `value``=``"1180"` `/>`

    `<``add` `key``=``"EnableCompression"` `value``=``"False"` `/>`

    `<``add` `key``=``"WS-Server"` `value``=``"[http://localhost:8051](http://localhost:8051)"` `/>`

    `<``add` `key``=``"WS-UserName"` `value``=``"mestre"` `/>`

    `<``add` `key``=``"WS-DataServerName"` `value``=``"GlbUsuarioData"` `/>`

    `<``add` `key``=``"WS-ProcessName"` `value``=``"GlbAcessoData"` `/>`

    `<``add` `key``=``"WS-CodColigadaSQL"` `value``=``""` `/>`

    `<``add` `key``=``"WS-CodSistemaSQL"` `value``=``""` `/>`

 `</``appSettings``>`

`</``configuration``>`



# **Como Funciona**

* * *



Existem vários métodos que podem ser utilizados no TOTVS WS Client, como exemplos abaixo:



**Tela da consulta dos dados da visão (READVIEW):** 

Equivale ao abrir uma visão padrão RM (de um DataServer) que retorna um conjunto de dados, conforme filtros informados nos parâmetros.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/172300232/1.png?version=2&modificationDate=1436452590000&api=v2)
  

**XML da consulta dos dados das visões (READVIEW):**

Equivale a abrir uma visão padrão RM (de um DataServer) que retorna um conjunto de registros (XML), conforme filtros informados nos parâmetros.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/172300232/2.png?version=1&modificationDate=1436452614000&api=v2)

**Tela de consulta dos Dados (READRECORD):** 

Faz a leitura do DataServer (regra de negócio RM) e retorna os dados de um registro específico.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/172300232/3.png?version=1&modificationDate=1436452628000&api=v2)

**XML da consulta dos dados da edição  (READRECORD):**

Faz a leitura do DataServer (regra de negócio RM) e retorna o (XML) de um registro específico. Este XML pode ser utilizado para incluir ou editar um registro através do método SaveRecord do web service wsDataServer. 

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/172300232/4.png?version=1&modificationDate=1436452655000&api=v2)



**Funcionalidade Excluir e Excluir Por Chave (DELETERECORD e DELETERECORDBYKEY):** 



**1)** O botão **Excluir** utiliza o método **DELETERECORD**, onde é necessário um **Dataset** para fazer a **Leitura do Registro** e depois **sua exclusão (WsDataClient).**

**2)** O botão **Excluir por Chave** utiliza a **chave primária da tabela do registro** para fazer a **exclusão,** sem a necessidade expressa de um **ReadRecord** anterior ****(WsDataClient).

****



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/172300232/image2017-10-6_11-19-21.png?version=1&modificationDate=1507299561000&api=v2)

**Tela de consulta dos processos executados:**

Retorna os dados de todas as execuções de um processo selecionado.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/172300232/image2015-7-9%2011%3A51%3A54.png?version=1&modificationDate=1436453532000&api=v2)

**Tela de visualização dos dados do processo:**

Exibe os parâmetros de execução do processo selecionado anteriormente.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/172300232/image2015-7-9%2011%3A53%3A30.png?version=1&modificationDate=1436453628000&api=v2)

**Tela de consulta do XML dos parâmetros do processo:**

 Fornece o XML de parâmetros necessários para acionar um processo através do WebService wsProcess.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/172300232/image2015-7-9%2011%3A55%3A16.png?version=1&modificationDate=1436453735000&api=v2)

**Tela de consulta da sentença SQL:**

Retorna os dados de uma determinada consulta SQL, através dos parâmetros informados.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/172300232/8.png?version=1&modificationDate=1436452688000&api=v2)

**XML da consulta da sentença SQL:**

Exibe o resultado de uma consulta em formato XML.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/172300232/9.png?version=1&modificationDate=1436452712000&api=v2) 

**Produto**

Framework

**Versão**

11.82.XX e 12.01.XX

**Processo**

Processos

**Subprocesso**

Web Services

Status do Documento:

Finalizado

Data:

09/07/2015

Versão:

0.1

Versão Anterior:

0.1

Autores:

[Diego Henrique Pener](/display/~diego.henrique)

[Fábio Augusto Amaral Melo Nunes](/display/~fabio.nunes)

[Welbert Marques Silva](/display/~welbert.silva)

[Wesley Avelino De Carvalho](/display/~wesley.carvalho)







* * *



Para maiores informações:

 **![Imagem](https://centraldeatendimento.totvs.com/download/attachments/185742347/fluig.png?version=1&modificationDate=1426184854000&api=v2)
 **[@FRAMEWORK](https://fluig.totvs.com/portal/p/10097/subject/rframework)****

**Canais de Atendimento**

**Chamado:** Através do Portal TOTVS - [www.suporte.totvs.com.br](http://www.suporte.totvs.com.br/)

**Telefônico:** 4003-0015 Escolhendo as opções 2-2-3-9-5 (Framework) ou 2-2-3-9-4 (BI)
