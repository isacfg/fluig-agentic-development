# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Não é possível Gerar Ordem de Compra na Cotação.

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4407497682583-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-N%C3%A3o-%C3%A9-poss%C3%ADvel-Gerar-Ordem-de-Compra-na-Cota%C3%A7%C3%A3o](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4407497682583-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-N%C3%A3o-%C3%A9-poss%C3%ADvel-Gerar-Ordem-de-Compra-na-Cota%C3%A7%C3%A3o)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 21 de fevereiro de 2022 às 15:44

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: **00:04:00min**

**Dúvida**Ao executar o processo de Gerar Ordem de Compra a partir de uma Cotação, sistema apresenta a seguinte mensagem:

![Capturar.PNG](https://totvssuporte.zendesk.com/attachments/token/sSnPM6BwkRlEeTGDeesm5BNJy/?name=Capturar.PNG)

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução**Alguns pontos devem ser observados caso a mensagem seja apresentada ao tentar gerar a Ordem de Compra.

1\. Se alguma alguma alteração no Orçamento/Negociação foi realizada, o Quadro Comparativo deverá ser recalculado, clicando no ícone destacado abaixo:

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4407458548887/mceclip0.png)

2\. Se houver uma inclusão de interferência por Produto para a cotação, verifique se foi definida a quantidade a ser gerada:

![mceclip1.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4407503053463/mceclip1.png)

![Imagem](https://totvssuporte.zendesk.com/attachments/token/ffS0xE4vEtgjuCl3nYZ4zroiF/?name=inline1602178300.png)

Saiba mais informações sobre o processo de [Interferência](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360017738751) na cotação.

3\. Verifique se nos parâmetros da Solicitação de Compra que está sendo cotada, etapa Compra/Venda - Características, foi preenchido o campo Movimento Gerado (Default) com a Ordem de Compra a ser gerada pela cotação.

Para isso acesse menu Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Gestão de Compras | Solicitação de Compras | Selecionar o tipo de movimento utilizado | Etapa 49: Compra/Venda - Características:

**
![mceclip2.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4407503194135/mceclip2.png)
**

Se após as validações citadas o erro persistir, entre em contato com o suporte técnico para análise.
