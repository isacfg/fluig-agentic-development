# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Exportação de Produto via Webservice

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4403947376279-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Exporta%C3%A7%C3%A3o-de-Produto-via-Webservice](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4403947376279-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Exporta%C3%A7%C3%A3o-de-Produto-via-Webservice)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
> **Data:** 9 de abril de 2025 às 14:34

---

**
![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
**Tempo aproximado para leitura: **00:04:00 min**

**
Dúvida**
Como realizar **Exportação** de **Produto** via **Webservice**?

**Ambiente**
Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.


**Solução**Este documento tem por finalidade ensinar como realizar a Exportação de produto via SoapUI (Arquivo XML).

**Definição do processo:
**Procedimentos para exportar o XML de um Produto da base RM através do SoapUI. Lembrando que a estrutura do XML será influenciada de acordo com a parametrização da Coligada, por tanto, poderá variar de empresa para empresa, coligada para coligada.

**Configuração do WS (Webservice) RM:**

Executar o documento: [Como habilitar webservice via RM HOST](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003035312-RM-Integra%C3%A7%C3%B5es-Como-habilitar-webservice-via-RM-HOST)

Obs.: Acessando a página do Webservice RM (Orientado no link acima), clicar no link **wsDataServer/MEX?wsdl** e copiar o endereço desta página, este será utilizado na criação do projeto no SoapUI.(Exemplo: [http://localhost:8052/wsDataServer/MEX?wsdl](http://localhost:8052/wsDataServer/MEX?wsdl)) 

**Criação do projeto no SoapUI:**

Acessar o aplicativo SoapUi (Disponível na web gratuitamente [http://www.soapui.org/](http://www.soapui.org/))

Solicitar um novo **Projeto** e informar:

\- Nome do Projeto

\- O link **WSDL** copiado anteriormente na configuração do WS RM

![Criar Projeto no SoapUi.png](https://tdn.totvs.com/download/attachments/286523207/Criar%20Projeto%20no%20SoapUi.png?version=1&modificationDate=1504202204000&api=v2)

Será criado um projeto com as opções do print abaixo, onde deverão ser definidas as propriedades listadas:

\- Name = Nome da Janela/página do **ReadRecord** para o projeto

\- Encoding = UTF-8

\- Username = Usuário do sistema RM

\- Password = Senha do usuário do sistema RM

![Imagem](https://tdn.totvs.com/download/attachments/286523207/image2017-8-31%2014%3A52%3A17.png?version=1&modificationDate=1504202204000&api=v2)

Dê um duplo clique na página já editada e a janela grifada será aberta. Preencher nas tags abaixo, os valores:

<tot:DataServerName>***EstPrdDataBr***</tot:DataServerName>

<tot:PrimaryKey>***CODCOLIGADA;IDPRD***</tot:PrimaryKey>

<tot:Contexto>***CODCOLIGADA=1;CODUSUARIO=mestre;CODSISTEMA=T***</tot:Contexto>

![Imagem](https://tdn.totvs.com/download/attachments/286523207/image2017-8-31%2014%3A26%3A21.png?version=1&modificationDate=1504202204000&api=v2)

Para realizar o teste, clicar no ícone **Submit** (Play verde) apresentado na parte superior esquerda. Neste momento, o sistema irá gerar o XLS e XML do produto pesquisado, sendo este a base para a criação de novos XML’s de **Importação** de Produtos via SoapUI ou WebService

**Obs.1**: O Arquivo tem início no marcador “<EstPrdBR>” e final no marcador “</EstPrdBR>”. Entre estes marcadores estão os XLS e o XML do produto pesquisado, que servirá como base para os produtos que serão incluídos a partir do WebService/Conceito.

**Obs.2**: Para importação, deverá copiar toda o conteúdo do retorno, desde:

<!\[DATA\[
até
\]\]>
