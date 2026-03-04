# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Item X - Produto XXXX  do Movimento ?11?!! - Série X: Item repetido

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360035402953-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Item-X-Produto-XXXX-do-Movimento-11-S%C3%A9rie-X-Item-repetido](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360035402953-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Item-X-Produto-XXXX-do-Movimento-11-S%C3%A9rie-X-Item-repetido)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 26 de julho de 2022 às 17:39

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:01:00 min**

**Dúvida
**Ao incluir, faturar ou gerar movimento via cotação é apresentada a mensagem 
**"Item X - Produto XXXX  do Movimento ?11?!! - Série X: Item repetido."**

**Ambiente**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução**O erro ocorre pois o tipo de movimento a ser gerado se encontra parametrizado para **não permitir item repetido**. Para que seja permitido é necessário que na etapa "Item - Identificação 2/2" esteja **marcada** a flag "**Permitir item repetido**".
![Imagem](https://totvssuporte.zendesk.com/attachments/token/KSGHpgulEE3nBKAy8fFGqOvmc/?name=inline-1294865067.png)
