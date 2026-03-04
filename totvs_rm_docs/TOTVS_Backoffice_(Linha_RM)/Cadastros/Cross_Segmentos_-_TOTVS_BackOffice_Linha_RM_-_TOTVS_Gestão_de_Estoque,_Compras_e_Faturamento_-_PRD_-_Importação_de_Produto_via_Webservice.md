# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PRD - Importação de Produto via Webservice

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4403960647575-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PRD-Importa%C3%A7%C3%A3o-de-Produto-via-Webservice](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4403960647575-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PRD-Importa%C3%A7%C3%A3o-de-Produto-via-Webservice)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
> **Data:** 9 de abril de 2025 às 14:34

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura: **00:02:00min**

**Dúvida**Como realizar **Importação** de **Produto** via **Webservice**?

**Ambiente**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução**Este documento tem por finalidade ensinar como realizar a Importação de produto via SoapUI (Arquivo XML).

**Definição do processo:**

Procedimentos para importar **XML** de um produto na base RM através do **SoapUI**. 

**Configuração do WS (Webservice) RM:**

Executar o documento: [Como habilitar webservice via RM HOST](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003035312-RM-Integra%C3%A7%C3%B5es-Como-habilitar-webservice-via-RM-HOST)

Observação.: Acessando a página do **Webservice RM** (Orientado no link acima), clicar no link “**wsDataServer/MEX?wsdl**” e copiar o endereço desta página, este será utilizado na criação do projeto no SoapUI.(Exemplo: [http://localhost:8052/wsDataServer/MEX?wsdl](http://localhost:8052/wsDataServer/MEX?wsdl)) 

**Criação do projeto no SoapUI:**

Já com o Projeto criado para Exportação, utilizaremos o método **SaveRecord** para importação. 

Caso não tenha visto a criação do projeto, [clique aqui](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4403947376279).

Configuração do **SaveRecord:** 

\- Name = Nome da Janela/página do **SaveRecord** para o projeto

\- Encoding = UTF-8

\- Username = Usuário do sistema RM

\- Password = Senha do usuário do sistema RM

Ao clicar duas vezes sobre o **Request1** do **SaveRecord**, será aberta a tela central onde deverá ser informado os dados: 

<tot:DataServerName>***EstPrdDataBr***</tot:DataServerName>

<tot:XML>***XML DO PRODUTO A SER IMPORTADO***</tot:XML>

<tot:Contexto>***CODCOLIGADA=1;CODUSUARIO=mestre;CODSISTEMA=T***</tot:Contexto>

 ![Imagem](https://tdn.totvs.com/download/attachments/286523207/image2017-8-31%2015%3A4%3A47.png?version=1&modificationDate=1504202688000&api=v2)

Após preencher os dados, deverá se atentar aos detalhes: 

1.   Para criação de um novo registro (Produto), obrigatoriamente deverá alterar o campo **IDPRD** para o valor **\-1.** Caso tente importar utilizando um IDPRD fixo, o sistema irá tentar **ATUALIZAR** o registro em questão e não importar.
2.  Além do IDPRD, deverá se atentar quanto ao código do produto (**CODIGOPRD**) e se necessário, alterá-lo.

Feita a alteração no XML, para realizar o teste, clique no ícone **Submit (Play verde)** encontrado no canto superior esquerdo do print abaixo. Neste momento, o SoapUI abrirá uma nova tela para consultar o retorno da ação:

![Imagem](https://tdn.totvs.com/download/attachments/286523207/image2017-8-31%2015%3A10%3A14.png?version=1&modificationDate=1504203015000&api=v2)

Caso o produto seja incluído com sucesso, o SoapUI retornará as chaves do **DataServer**. No caso do produto, retornará CODCOLIGADA e IDPRD conforme print acima.

**Está feito! Basta acessar o RM e visualizar o produto incluído!**
