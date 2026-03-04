# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - COLAB - Seleção de Filial ao incluir XML de CT-e

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360015542731-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-COLAB-Sele%C3%A7%C3%A3o-de-Filial-ao-incluir-XML-de-CT-e](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360015542731-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-COLAB-Sele%C3%A7%C3%A3o-de-Filial-ao-incluir-XML-de-CT-e)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
> **Data:** 20 de junho de 2022 às 15:47

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:01:30 min**

**Dúvida**Para qual Filial o **XML** de **CT-e** será inserido quando feita importação via **TOTVS Colaboração**?

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução
**Quando um XML é importado e inserido no sistema algumas validações serão feitas para selecionar a filial a qual este XML pertence. No caso do CT-e existe uma particularidade importante a ser considerada.

O sistema irá considerar o tipo de tomador do XML para definir o CNPJ do tomador do Serviço. 
Segue abaixo o que cada código significa:


**Tomador de Serviço:**
0-Remetente
1-Expedidor
2-Recebedor
3-Destinatário
4-Outros

**Exemplo:**
Em um XML o tomador é 0(zero) e o remetente da nota pertence ao CNPJ 87.345.021.0001-27 que corresponde ao CNPJ da filial 100. Sendo assim o XML será inserido para a filial 100, mesmo que no XML a tag de destinatário esteja informando o CNPJ de outra filial cadastrada na base de dados.
