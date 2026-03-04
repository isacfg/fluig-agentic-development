# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Faturamento de Movimento Via Fórmula Visual

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4407539521559-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Faturamento-de-Movimento-Via-F%C3%B3rmula-Visual](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4407539521559-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Faturamento-de-Movimento-Via-F%C3%B3rmula-Visual)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 17 de abril de 2025 às 16:24

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: **00:03:00 min
****Dúvida**Como utilizar a atividade Faturamento Movimento para faturar um movimento via fórmula visual?

**Ambiente**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução**A atividade **Faturamento Movimento** é nativa do módulo Gestão de Estoque, Compras e Faturamento e tem o objetivo de faturar o movimento determinado na propriedade IdentificadorMovimento, para o tipo de movimento destino, informado na propriedade CodTmvDestino.

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4407532419223/mceclip0.png)

Para que o faturamento seja realizado com sucesso é necessário preencher obrigatoriamente as seguintes propriedades:

-   CodColigada
-   CodTmvDestino
-   CodUsuario
-   IdentificadorMovimento

A atividade Faturamento Movimento utiliza o dataprocess **MovFaturamentoProc** e por isso é fundamental que nos parâmetros do tipo de movimento origem, etapa Compra/Venda - Características no campo **Opção de Faturamento** esteja selecionada a opção **Automático** ou Automático com Seleção Específica do Tipo de Movimento.


![mceclip1.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4407532595479/mceclip1.png)

As propriedades da atividade são limitadas as informações acessadas pelo dataprocess MovFaturamentoProc e por isso não é possível editar campos no movimento destino durante o faturamento. Todos os campos obrigatórios devem ser previamente determinados informando defaults nos parâmetros do tipo de movimento ou herdados do movimento origem.

**Restrição:**
O movimento a ser faturado via fórmula visual **não** poderá ter o parâmetro **Marcar os itens que farão parte do movimento gerado** marcado (parâmetros do movimento origem, etapa Compra/Venda - Outros Dados). Isso porque a atividade não possui propriedade que permita a marcação dos itens a serem faturados, cuja a quantidade pode variar dependendo do movimento.

**Importante:**

1 - A execução da fórmula visual realiza todas as consistências típicas do movimento conforme definido na parametrização, como qualquer faturamento automático.
2 - A atividade apresentada deve ser usada fora da tela do movimento. 
3 - Recomendamos executar a fórmula visual menu menu Gestão > Fórmula Visual > Executar.
4 - Faça o download da fórmula visual anexa para obter um **exemplo** de utilização da atividade apresentada. O exemplo tem como objetivo faturar o movimento indicado na propriedade IdentificadorMovimento para o tipo de movimento indicado na propriedade CodTmvDestino.
