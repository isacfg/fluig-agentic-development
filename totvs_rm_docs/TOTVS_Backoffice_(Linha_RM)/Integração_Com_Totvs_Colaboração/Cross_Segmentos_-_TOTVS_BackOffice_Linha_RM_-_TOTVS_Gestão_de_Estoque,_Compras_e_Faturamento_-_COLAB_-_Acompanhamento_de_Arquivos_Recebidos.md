# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - COLAB - Acompanhamento de Arquivos Recebidos

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008691528-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-COLAB-Acompanhamento-de-Arquivos-Recebidos](https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008691528-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-COLAB-Acompanhamento-de-Arquivos-Recebidos)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
> **Data:** 24 de janeiro de 2022 às 10:05

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura: **00:03:00 min**

**
Ocorrência
**Como acompanhar os arquivos do TOTVS Colaboração 2.0

**Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.

**Causa
**Acompanhamento de Arquivos Recebidos TOTVS Colaboração 2.0

**Solução
**Para acompanhar os arquivos recebidos, basta acessar o menu **Compras** | **TOTVS Colaboração – Cadastro XML**. Os arquivos são exibidos nesta tela automaticamente após passarem pela validação inicial, através da importação via Monitor TOTVS Colaboração.

Para importação via TOTVS Colaboração 2.0, dois status são considerados:

-   **Inconsistente**: o arquivo XML não foi incluído devido a alguma inconsistência. Por ex**.**: Filial não encontrada. Neste caso, o sistema permite o preenchimento manual da Filial, através de um duplo clique no registro.
-   **Válido**: o arquivo foi incluído corretamente.

Os registros podem assumir outros status (Pendente, Enviado para validação, etc.), mas eles são utilizados apenas quando há a inclusão manual de um arquivo somente quando utilizada a versão 1.0 do TOTVS Colaboração. Essa inclusão foi descontinuada a partir da versão 2.0 portanto não recomenda-se utiliza-la.***[

](http://wikihelp.totvs.com.br:1210/WikiHelp/EST/EST.Inclus%C3%A3oDocumentosFiscaisViaImporta%C3%A7%C3%A3oXML.aspx)***Todos os arquivos recebidos via importação do TOTVS Colaboração 2.0 já foram validados junto à SEFAZ pela Neogrid.

Para cada registro, é informado o tipo de serviço a que ele se refere (CT-e, NF-e, etc.) através da coluna **Tipo do XML**. A flag **Importado TOTVS Colaboração** diferencia os registros importados daqueles incluídos manualmente, e o campo **Ident**. Movimento indica se já foi criado um movimento para aquele arquivo XML.


![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360004091612/mceclip0.png)
