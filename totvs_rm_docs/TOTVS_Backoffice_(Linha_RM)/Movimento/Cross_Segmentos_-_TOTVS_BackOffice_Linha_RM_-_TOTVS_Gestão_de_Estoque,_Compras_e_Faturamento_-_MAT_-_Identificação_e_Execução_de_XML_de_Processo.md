# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Identificação e Execução de XML de Processo

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360038729334-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Identifica%C3%A7%C3%A3o-e-Execu%C3%A7%C3%A3o-de-XML-de-Processo](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360038729334-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Identifica%C3%A7%C3%A3o-e-Execu%C3%A7%C3%A3o-de-XML-de-Processo)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 20 de dezembro de 2021 às 10:18

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura: **00:05:00min**

**Dúvida**
Qual **DataProcess** e como obter um **XML** de exemplo para execução de processos via consumo de **Webservice**?

**Ambiente**
Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 11.80.

**Solução**
Para obter um **exemplo de XML de processo** basta seguir os passos abaixo:

Utilizaremos como exemplo o processo de **Processar Grupo de Movimentos**.

![screenshot_20191119_124944.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360050712794/screenshot_20191119_124944.png)

1\. Para obtermos o XML de exemplo, precisaremos executar ou procurar por um Job já executado deste processo.

Caso seja necessário executar, o primeiro passo é realizar a inclusão de um movimento que tenha parametrizado o processo de **Criar com Status Não-Processados**. Caso não tenha, vá aos parâmetros do tipo de movimento, etapa **Mov - Identificação**, e marque o campo destacado no print abaixo:

![screenshot_20191119_141511.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360051630553/screenshot_20191119_141511.png)

2\. Após a parametrização, faça a inclusão do movimento como de costume. Feita a inclusão do movimento, marque-o e vá até o menu **Processos** e execute o processo de **Processar Grupo de Movimentos:**

**
![screenshot_20191119_124944.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360050725514/screenshot_20191119_124944.png)


![screenshot_20191119_142131.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360051633393/screenshot_20191119_142131.png)
**

3\. Concluído o processo, vá até o menu **Ambiente | Gerenciamento de Jobs:**

![screenshot_20191119_142212.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360050725974/screenshot_20191119_142212.png)

4\. Crie um filtro que possibilite a identificação do **Job** criado para o processo. Neste caso, foi criado um filtro utilizando o campo **Criado Em**:

![screenshot_20191119_142325.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360050726114/screenshot_20191119_142325.png)

5. De posse do **ID Job**, será necessário abrirmos o aplicativo **TOTVS Web Service Client** **(TOTVSWSCliente.exe)** para extração do XML. Para mais informações do aplicativo, acesse o link [TOTVS WS Client.](https://tdn.totvs.com/display/LRM/TOTVS+WS+Client)

![screenshot_20191119_142427.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360051633893/screenshot_20191119_142427.png)

6\. Abra o aplicativo e preencha os dados:

**Nome do Processo;**
**DJob;**
**Endereço do Servidor;**
**Usuário;**
**Senha;**

![screenshot_20191119_142558.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360050726234/screenshot_20191119_142558.png)

7\. Informando os dados necessários e clicando em Carregar, caso os dados estejam válidos, será carregado o registro do Job criado no RM. Dê um duplo clique sobre o registro para que sejam carregados os dados.

![screenshot_20191119_142653.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360050726414/screenshot_20191119_142653.png)

8. Vá até a **aba** **XML** e copie todo o conteúdo.

![screenshot_20191119_142720.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360050726814/screenshot_20191119_142720.png)

9\. Inicie o aplicativo **SoapUi**.

Caso não tenha configurado o SoapUi para execução de processos do RM, abra o painel de **WS** (geralmente pelo link [http://localhost:8051/wspageindex/](http://localhost:8051/wspageindex/)) e copie o endereço do link de Processos **(WsProcess)**.

![screenshot_20191119_142824.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360050727034/screenshot_20191119_142824.png)

10\. Inicie o SoapUi, vá a opção **File** e escolha a opção **New Soap Project**. Informe o link copiado no campo **Initial WSDL** e informe o nome do projeto.

![screenshot_20191119_142932.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360050727514/screenshot_20191119_142932.png)

11\. Após criado o projeto, expanda a lista **RM\_IwsProcess**, e crie uma nova **Request** sobre o método **ExecuteWithXmlParams**.

Na tag **<tot:ProcessServerName>** preencha o nome do Processo conforme coluna **Classe do Processo** do gerenciamento de Jobs (RM). Neste exemplo, o processo é o **MovProcessarMovProc**.
Para a tag **<tot:strXmlParams>** adicione **<!\[CDATA\[** ao inicio, cole o XML obtido pelo **WsClient** e adicione **\]\]>** ao final.

![screenshot_20191119_143057.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360050727654/screenshot_20191119_143057.png)

12\. Preencha as colunas **Username** e **Password** localizadas na aba de **Request Properties**.

Após estas configurações, execute o **Submit da request** **(Identificado pelo ícone verde na parte superior esquerda)**.

Neste momento o sistema tentará executar o processo conforme XML passado. Sendo executado com sucesso, o retorno do Soap será a numeração 1.

![screenshot_20191119_143208.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360050727714/screenshot_20191119_143208.png)

13\. Caso seja apresentado erro, gentileza verificar a mensagem apresentada.

![screenshot_20191119_145548.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360051635553/screenshot_20191119_145548.png)
