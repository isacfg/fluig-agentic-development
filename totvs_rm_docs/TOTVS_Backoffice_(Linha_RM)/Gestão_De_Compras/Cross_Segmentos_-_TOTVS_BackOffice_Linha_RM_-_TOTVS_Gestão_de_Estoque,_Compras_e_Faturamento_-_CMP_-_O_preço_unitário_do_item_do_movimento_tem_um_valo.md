# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento -  CMP - O preço unitário do item do movimento tem um valor inferior ao seu preço cotado

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024585191-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-O-pre%C3%A7o-unit%C3%A1rio-do-item-do-movimento-tem-um-valor-inferior-ao-seu-pre%C3%A7o-cotado](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024585191-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-O-pre%C3%A7o-unit%C3%A1rio-do-item-do-movimento-tem-um-valor-inferior-ao-seu-pre%C3%A7o-cotado)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
> **Data:** 10 de abril de 2025 às 09:35

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/22407285056663)
 Tempo aproximado para leitura: 00:01:00min**

**Ocorrência**No módulo de Gestão de Estoque, Compras e Faturamento, ao gerar ordem de compras a partir de uma cotação sistema apresenta a mensagem abaixo:

**O preço unitário do item do movimento tem um valor inferior ao seu preço cotado. O valor do item na solicitação de compra é de O valor do item cotado é de**

![screenshot_20190226_115915.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360022772352)

**Ambiente**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causa
**Esse incidente ocorre pois a parametrização do sistema esta configurado para **Usar Preço Máximo por Item** nos parâmetros da cotação etapa **Movimento 1/2.**
Sendo assim somente será possível gerar ordem de compras caso o preço cotado seja igual ou menor ao preço informado na solicitação de compras que gerou a cotação.
