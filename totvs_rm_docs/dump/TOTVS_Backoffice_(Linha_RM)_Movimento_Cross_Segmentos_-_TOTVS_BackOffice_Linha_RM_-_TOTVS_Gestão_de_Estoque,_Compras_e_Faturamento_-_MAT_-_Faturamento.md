# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Faturamento Automático: Valor dos pagamentos é inferior ao Valor do Documento (movimento)

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360025844192-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Faturamento-Autom%C3%A1tico-Valor-dos-pagamentos-%C3%A9-inferior-ao-Valor-do-Documento-movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360025844192-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Faturamento-Autom%C3%A1tico-Valor-dos-pagamentos-%C3%A9-inferior-ao-Valor-do-Documento-movimento)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 3 de janeiro de 2025 às 11:29

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/28948356142487)
 Tempo aproximado para leitura: 00:01:00 min

Ocorrência**No módulo Gestão de Estoque, Compras e Faturamento, ao realizar o processo de **Faturamento Automático** é apresentada a mensagem: **Valor dos pagamentos é inferior ao Valor do Documento (movimento).**

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque Compras e Faturamento – Todas as Versões

**Causa
**Esse incidente ocorre, pois a parametrização do tipo de movimento de **destino** utiliza **Meio de Pagamento** ou **Parcelamento**, mas o Faturamento Automático não exibe a edição do movimento de destino para que o valor do pagamento seja gerado, portanto este está sendo gerado com valor zerado. 

**Solução**Para solucionar essa ocorrência, existem duas opções, será necessário escolher qual a melhor opção a ser aplicada em relação a sua regra de negócio. Acesse o menu Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > Selecione a classificação do seu movimento > Avançar:

1.  **Não** utilizar o faturamento **A****utomático** na etapa **Compra/Venda - Característica**;

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/28948387331095)



2.  **Não** utilizar **Edição de** **Meios** **de Pagamento** ou **P****arcelamento** quando utilizado faturamento automático, etapa **Fin - Condições de Pagamento.**

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/28948387332375)
