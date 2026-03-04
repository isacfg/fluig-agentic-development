# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PAR - O campo "Gerar Lançamentos (Faturamento)" deve ser preenchido

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/7163264074135-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-O-campo-Gerar-Lan%C3%A7amentos-Faturamento-deve-ser-preenchido](https://centraldeatendimento.totvs.com/hc/pt-br/articles/7163264074135-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-O-campo-Gerar-Lan%C3%A7amentos-Faturamento-deve-ser-preenchido)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 1 de julho de 2022 às 15:11

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura: **00:03:00min**

**Dúvida
**Como solucionar o erro: O campo "Gerar Lançamentos (Faturamento) " deve ser preenchido.

**Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução
**Todo movimento parametrizado para gerar financeiro (Fin - Faturamento 1/6 flag Fatura o Movimento) deve gerar lançamentos **"A pagar"** ou **"A receber**". Quando há falta dessa informação no momento da parametrização será exibida a mensagem abaixo:

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/7163050141335/mceclip0.png)

Para que essa mensagem deixe de ser exibida, acesse a etapa Fin - Faturamento 2/6 do seu tipo de movimento e marque o tipo de lançamento a ser gerado de acordo com seu o Movimento.
A pagar = Compra
A receber = Venda

Exemplo:

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/7168800258711/mceclip0.png)
