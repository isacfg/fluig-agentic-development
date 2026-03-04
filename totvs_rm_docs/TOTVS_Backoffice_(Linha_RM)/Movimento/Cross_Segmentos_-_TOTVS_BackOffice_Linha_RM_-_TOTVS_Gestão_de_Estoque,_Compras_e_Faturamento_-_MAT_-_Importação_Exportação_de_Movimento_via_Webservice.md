# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Importação/Exportação de Movimento via Webservice

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4404749414935-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Importa%C3%A7%C3%A3o-Exporta%C3%A7%C3%A3o-de-Movimento-via-Webservice](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4404749414935-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Importa%C3%A7%C3%A3o-Exporta%C3%A7%C3%A3o-de-Movimento-via-Webservice)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 24 de abril de 2025 às 10:14

---

**
![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/30602560030103)
** Tempo aproximado para leitura: **00:04:00min**

**Dúvida**Como realizar a **Importação/E****xportação** de **Movimento** via **Webservice** utilizando protocolo **SOAP**?

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – Todas as versões.

**Solução
**Através do protocolo **SOAP** é possível realizar o consumo de **Webservice** utilizando o DataServer **MovMovimentoTBCData** para obter o **XML** de movimentos já contidos na base, além de incluir novos registros e/ou enviar alterações à registros já existentes.

Para implementação é necessário seguir as orientações abaixo:

1\. Configure o Webservice conforme indicado no artigo: [Cross Segmentos - Backoffice RM - Integração - Como Habilitar Webservice via RM Host](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003035312).
2\. Para testes e consumo de Webservice, recomendamos a ferramenta *open source* **SoapUI**. Faça o download [clicando aqui](https://www.soapui.org/). 
3\. Crie um novo projeto no SoapUI informando o Nome e URL do webservice RM.
Exemplo: [http://servidor.com:8051/wsDataServer/MEX?wsdl](http://servidor.com:8051/wsPageIndex)

**Exportação de Movimentos:**
1\. Acesse Projects > Dataserver > RM\_IwsDataServer > **ReadRecord** > clique com botão direito do mouse > New request.

![Screenshot_8.png](https://centraldeatendimento.totvs.com/hc/article_attachments/9914651298071)

2\. A requisição será aberta com a estrutura necessária para consumo. Preencha as *tags* **DataServerName** (MovMovimentoTBCData), **PrimaryKey** (Código da Coligada e Identificador do Movimento) e **Contexto** (Código do Usuário, Código do Sistema e Código da Coligada), conforme exemplo a seguir e posteriormente clique no ícone *submit*, destacado abaixo:

![Screenshot_9.png](https://centraldeatendimento.totvs.com/hc/article_attachments/9914725012631)

3\. Se o registro referente ao Identificador do Movimento (IDMOV) informado na *tag* PrimaryKey existir no banco de dados, será gerado o XML com os mesmos dados.

![Imagem](https://tdn.totvs.com/download/attachments/269428561/Busca%20XLS%20e%20XML.jpg?version=1&modificationDate=1480705897000&api=v2)

**Importação de Movimentos:
**1\. Acesse Projects > Dataserver > RM\_IwsDataServer > **SaveRecord** > clique com botão direito do mouse > New request.

![Screenshot_10.png](https://centraldeatendimento.totvs.com/hc/article_attachments/9915212438679)

2\. A requisição será aberta com a estrutura necessária para consumo. Preencha as *tags* **DataServerName** (MovMovimentoTBCData) e **Contexto** (Código do Usuário, Código do Sistema e Código da Coligada).

Na *tag* **XML** , **<!\[DATA\[ ... \]\]>** informe o XML do movimento a ser importado com todos os campos devidamente preenchidos.

Utilize o XML retornado no método ReadRecord como base para a inclusão de novos movimentos.
Todos os campos incrementados sequencialmente deverão conter o valor fixo -1 (IDMOV, IDMOVRATCCU, IDMOVHIST, etc).

Posteriormente clique no ícone *submit*, destacado abaixo:

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/9915293554967)

3\. Se o registro for incluído com sucesso, será retornado o Código da Coligada (CODCOLIGADA) e Identificador do Movimento (IDMOV) criado.

![Imagem](https://tdn.totvs.com/download/attachments/269428561/RESULTADO.png?version=1&modificationDate=1480708217000&api=v2)

**Importante**

-   Antes de consumir Webservice deverá incluir a autenticação, seguindo as orientações do artigo: [Linha RM - Integrações - WebService - Orientação para autenticação básica](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360001039247).
-   Na importação de movimentos via Webservice serão consistidos todas as regras de parametrização do tipo de movimento, da mesma forma que a inclusão manual pelo sistema. Por isso o suporte não fornece exemplo de XML para inclusão de registros pelo SaveRecord. Recomendamos usar um movimento com as mesmas características do que deseja importar, previamente lido pelo ReadRecord.

Para saber mais informações sobre esse processo, [clique aqui](https://tdn.totvs.com/display/public/LRM/WSN0001_Exportacao_Importacao_De_Movimento_Via_WebService).

Com o objetivo de aprimorar cada vez mais nossa **comunicação** com os nossos clientes, estamos promovendo nossas comunidades no **WhatsApp**. Através delas, você é informado em primeira mão sobre artigos publicados neste portal. Eventos, notícias, comunicados urgentes… **tudo na palma da sua mão!**
Acesse via QR Code:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/31633482041495)
