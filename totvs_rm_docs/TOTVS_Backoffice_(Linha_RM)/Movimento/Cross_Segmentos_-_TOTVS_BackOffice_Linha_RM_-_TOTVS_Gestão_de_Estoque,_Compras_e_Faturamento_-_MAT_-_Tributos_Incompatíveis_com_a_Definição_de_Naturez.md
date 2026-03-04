# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Tributos Incompatíveis com a Definição de Natureza

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360026595693-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Tributos-Incompat%C3%ADveis-com-a-Defini%C3%A7%C3%A3o-de-Natureza](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360026595693-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Tributos-Incompat%C3%ADveis-com-a-Defini%C3%A7%C3%A3o-de-Natureza)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 26 de julho de 2022 às 17:14

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:02:00 min**

**Dúvida**Como solucionar o erro "Movimento?!?!!!!!!!!!- Série A: Tributos incompatíveis com a definição de Natureza.".

**Ambiente**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução**Este erro ocorre quando o **Tipo de Tributação** da **CFOP** (Natureza) selecionada para o **Item** ou para o **Movimento** não condiz com os valores preenchidos para a tributação do movimento/Item.

Sendo assim caso sua CFOP possui tributação diferente de **SEM ICMS** ou **SEM IPI** então seu movimento deve possuir a linha dos tributos **ICMS** e **IPI** com pelo menos a base de calculo preenchida.

O tipo de tributação que irá informar se o movimento deve ou não ter o tributo informado, como por exemplo, se estiver como "Sem IPI" o tributo não pode ser informado no item/movimento. Com o tipo de tributação da regra de ICMS e IPI igual a **Outros**, o tributo deve ser preenchido no item/movimento com no mínimo a base de cálculo. Os tributos que serão consistidos nesta mensagem sempre serão ICMS e IPI portanto sempre deverá conferir estes tributos.

Confira o tipo de tributação de sua CFOP (Natureza) e adeque seu movimento ao que esta definido na mesma.

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360042103453/mceclip0.png)

**Informações adicionais**
Esta validação somente será feita caso o tipo de movimento esteja parametrizado para **Consistir Valores ao Escriturar** através da etapa **Fis - Escrituração 2/2.**

**
![screenshot_20190715_134815.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360041287374/screenshot_20190715_134815.png)
**
