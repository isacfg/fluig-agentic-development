# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Alteração de Unidade de Medida na Inclusão do Item de Movimento.

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500008978362-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Altera%C3%A7%C3%A3o-de-Unidade-de-Medida-na-Inclus%C3%A3o-do-Item-de-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500008978362-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Altera%C3%A7%C3%A3o-de-Unidade-de-Medida-na-Inclus%C3%A3o-do-Item-de-Movimento)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 15 de agosto de 2022 às 08:27

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:03:00 min****Dúvida**É possível incluir item de movimento com unidade de medida diferente das definidas no cadastro de produto?

**Ambiente**
Cross Segmento - TOTVS Backoffice (Linha RM) - TOTVS Gestão de Estoque Compras e Faturamento - Todas as versões

**Solução**

Para que seja possível alterar a unidade de medida do item de movimento é necessário que nos parâmetros por tipo de movimento na etapa Item - Identificação 2/2, em Critério para Alteração esteja marcado a opção **Ter a mesma Unidade Base** ou **Estar definida no Produto**.

**
![mceclip7.png](https://centraldeatendimento.totvs.com/hc/article_attachments/1500013878001/mceclip7.png)
**

Caso o critério para a Alteração seja **Ter a mesma Unidade Base** durante a inclusão do item de movimento é necessário informar uma Unidade de Medida que tenha a mesma unidade base da Unidade de Controle presente no cadastro do produto na aba Controle de Estoque.

![mceclip5.png](https://centraldeatendimento.totvs.com/hc/article_attachments/1500013874941/mceclip5.png)

No caso da utilização da opção **Estar Definida no Produto** o sistema irá considerar as unidades de medida que foram informadas dentro do cadastro do produto > Anexos > Unidades de Medida do Produto.

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/1500013597662/mceclip0.png)

Exemplo:

![mceclip3.png](https://centraldeatendimento.totvs.com/hc/article_attachments/1500013584222/mceclip3.png)
