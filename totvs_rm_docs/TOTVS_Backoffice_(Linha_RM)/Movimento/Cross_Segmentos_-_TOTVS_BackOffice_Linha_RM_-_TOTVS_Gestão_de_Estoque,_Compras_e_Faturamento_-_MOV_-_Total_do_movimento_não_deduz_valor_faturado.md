# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Total do movimento não deduz valor faturado

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360037768093-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Total-do-movimento-n%C3%A3o-deduz-valor-faturado](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360037768093-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Total-do-movimento-n%C3%A3o-deduz-valor-faturado)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 8 de outubro de 2021 às 16:58

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 02:00 min
Dúvida**Por que ao faturar movimento parcialmente por valor, o valor faturado não é deduzido do total do movimento?

**Ambiente**Cross Segmentos - TOTVS Backoffice Linha RM - TOTVS Gestão de Estoque Compras e Faturamento  – A partir da 12.1.

**Solução**Ao contrário do **Faturamento Parcial por Quantidade** que deduz automaticamente a quantidade faturada no item de movimento, o **Faturamento Parcial por Valor** não possui esta funcionalidade, uma vez que o valor de um movimento é definido por fórmula (**cadastro realizado pelo usuário**).
Sendo assim para que o valor faturado parcialmente seja deduzido do total do movimento se faz necessário que a **fórmula de Valor Líquido** do movimento contemple a subtração deste valor.

O campo que guarda o valor faturado parcialmente é o **VALORRECEBIDOFATPARC** e pode ser aplicado tanto em contexto de movimento quanto em contexto de item.

Segue abaixo exemplo de Fórmula que deduzirá o valor faturado:
Faturamento parcial por Valor do item de movimento

(KQT\*KPU) - TABITM('VALORRECEBIDOFATPARC','V')

*Lembrando que acima é apenas um exemplo, você deve aplicar conforme sua regra de negocio, atentando-se ao contexto em que as informações se encontram pois se aplicar a subtração de um contexto de item em um contexto de movimento o calculo não será conforme desejado.*
