# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - BLK - Parametrização para geração dos Blocos K290, K291 e K292 Produção Conjunta

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360063034273-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-BLK-Parametriza%C3%A7%C3%A3o-para-gera%C3%A7%C3%A3o-dos-Blocos-K290-K291-e-K292-Produ%C3%A7%C3%A3o-Conjunta](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360063034273-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-BLK-Parametriza%C3%A7%C3%A3o-para-gera%C3%A7%C3%A3o-dos-Blocos-K290-K291-e-K292-Produ%C3%A7%C3%A3o-Conjunta)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Fiscal
> **Data:** 26 de julho de 2022 às 17:09

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: **00:02:00 min.**

**Dúvida**Como parametrizar o Sistema para geração dos **Blocos K290, K291 e K292 Produção Conjunta**.

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução**

Utilizando o **Processo Produtivo Simples** no **TOTVS Gestão de Estoque, Compras e Faturamento** é possível também realizar **Produção Conjunta**, para isso é necessário algumas configurações adicionais.

O produto deve ser definido como um produto composto com as respectivas quantidades dos produtos que o compõe e a estrutura que representa esse produto deve estar com o parâmetro produção conjunta marcado.

Esses produtos que fazem parte do produto composto serão movimentados ao realizar a expansão do item (produto da ordem) no movimento de Entrada de Produção Simples que é gerado via cópia por referência a partir do Movimento de Ordem de Produção incluído com o produto composto.

Utilizando o processo de produção conjunta é possível gerar dados para os blocos fiscais K290, K291 e K292.

Para maiores informações clique [aqui.](https://tdn.totvs.com/pages/releaseview.action?pageId=451254002)

**Bloco K**:

A Produção Conjunta é reportada no **SPED Fiscal** através dos Bloco K290 (Ordem de Produção), K292 (Baixa/Consumo realizado) e K291 (Produção Gerada).
A geração desse Bloco é feita exclusivamente quando existe a movimentação de **Baixa/Consumo**, ou seja, se existir movimentação somente de Ordem de Produção e/ou Produção Gerada, os dados não são gerados no arquivo do SPED Fiscal.

**Observação**:

A **Baixa da Matéria-Prima consumida** no processo **Produtivo Simples** deve ser realizada antes da geração do produto acabado através da cópia por referência, após a cópia por referência não é possível faturar o movimento "Ordem de Produção" para realização da baixa.
