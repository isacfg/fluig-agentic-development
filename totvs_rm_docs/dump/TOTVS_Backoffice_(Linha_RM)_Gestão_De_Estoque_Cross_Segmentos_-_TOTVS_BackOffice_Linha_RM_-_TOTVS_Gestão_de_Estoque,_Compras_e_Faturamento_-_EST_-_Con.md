# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - EST - Conversão de Unidades de Medida no Movimento

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500008997122-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Convers%C3%A3o-de-Unidades-de-Medida-no-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500008997122-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Convers%C3%A3o-de-Unidades-de-Medida-no-Movimento)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
> **Data:** 9 de abril de 2025 às 15:42

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura: **00:05:00min**

**Ocorrência
**Como pode ser feita a conversão entre unidades de medida ao incluir o item de movimento?

**Ambiente**
Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução
**Ao incluir o Movimento pode ser necessário informar um Item com **Unidade de Medida** diferente da **Unidade de Controle** do **Produto**.

Para exemplificar, considere a compra do produto Leite, que possui unidade de controle Litro (L). Considere agora que a compra foi feita em caixas, onde uma 1 CAIXA contém 12 L. É possível demonstrar essa compra utilizando o **Fator de Conversão** da Unidade de Medida, sendo possível converter para qualquer unidade que tenha a mesma unidade base do cadastro de produto.

![mceclip3.png](https://centraldeatendimento.totvs.com/hc/article_attachments/1500013917001/mceclip3.png)

A Movimentação será feita com a unidade de medida CX12 com o fator de conversão 12, o que indica que existem 12 Litros em 1 Caixa:

![mceclip2.png](https://centraldeatendimento.totvs.com/hc/article_attachments/1500013634582/mceclip2.png)

Dentro do item de movimento informamos a unidade de medida que necessitamos:

![mceclip4.png](https://centraldeatendimento.totvs.com/hc/article_attachments/1500013917101/mceclip4.png)

O sistema fará a conversão com base na unidade de controle que está informada no cadastro do produto.

Como o produto Leite possui Unidade de Controle Litro, após a movimentação a quantidade será multiplicada pelo fator de conversão contido na unidade Caixa:

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/1500013634562/mceclip0.png)

Para cálculo do custo unitário o sistema irá considerar o retorno da Fórmula do Valor Financeiro, (parâmetros do tipo de movimento, etapa **Estoque - Estoque 2/3**), dividido por (quantidade \* fator de conversão).

**Exemplo:**

Quantidade do item = 2
Fator de Conversão = 12
Retorno da Fórmula = 240,00

Cálculo: 240,00 / (2 \* 12)

Custo Unitário = 10,00

**Importante**
A conversão ocorrerá somente no momento da retirada do relatório de **Ficha Física Financeira**. Ou seja, o faturamento de um item com unidade L para unidade CAIXA não terá sua quantidade automaticamente alterada na movimentação sendo necessário o usuário adequar a quantidade á unidade de medida informada no item do movimento de destino.
