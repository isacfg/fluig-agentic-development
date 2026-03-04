# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - COLAB - Erro ao Consultar XML (Estouro de SqlDateTime)

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360040363413-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-COLAB-Erro-ao-Consultar-XML-Estouro-de-SqlDateTime](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360040363413-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-COLAB-Erro-ao-Consultar-XML-Estouro-de-SqlDateTime)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
> **Data:** 6 de julho de 2022 às 14:26

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura: **00:01:00min**

**Ocorrência**Ao executar o processo de **Serviço de Consulta de Arquivos XML** sistema apresenta a mensagem abaixo:

*Erro durante a importação do arquivo 109\_20190612093924472\_4306.xml.
Mensagem Original: Estouro de SqlDateTime. Deve estar entre 1/1/1753 12:00:00 AM e 31/12/9999 11:59:59 PM..* **Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – A partir da versão 12.1.

**Causa
**Esse incidente ocorre pois no **XML** importado está faltando uma ***tag***. A *tag* faltante é a **DhRecbto** e esta *tag* é quem determina a data e hora de autorização do XML.

**Solução**Excluir o XML importado e solicitar ao fornecedor o envio deste novamente agora com essa *tag* preenchida para nova importação.
