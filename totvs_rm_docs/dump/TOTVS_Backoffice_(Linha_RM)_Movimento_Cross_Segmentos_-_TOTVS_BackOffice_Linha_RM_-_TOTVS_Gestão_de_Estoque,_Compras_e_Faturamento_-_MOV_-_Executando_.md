# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Executando log de evento contábil - Diferença entre débito e crédito

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360023744592-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Executando-log-de-evento-cont%C3%A1bil-Diferen%C3%A7a-entre-d%C3%A9bito-e-cr%C3%A9dito](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360023744592-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Executando-log-de-evento-cont%C3%A1bil-Diferen%C3%A7a-entre-d%C3%A9bito-e-cr%C3%A9dito)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 9 de maio de 2022 às 11:40

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: **00:06:00 min

Dúvida**Ao salvar um movimento o sistema apresenta a mensagem: **Diferença na contabilização do movimento O Lançamento não pode ser salvo pois a soma das partidas de débito é diferente da soma das partidas de crédito.

**

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.


**Solução**Esta mensagem ocorre pois a configuração do evento contábil não está adequada ao movimento em questão ou os dados necessários para a contabilização não existem no movimento. Neste caso, é necessário que execute o log de contabilização para identificar quais partidas estão sendo retornadas e realizar o ajuste de acordo com a operação desejada. Segue link para auxílio:
[DICA – Executando Log de evento contábil](http://tdn.totvs.com/pages/viewpage.action?pageId=42043800)
