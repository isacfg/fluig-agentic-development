# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Valor inválido para o Preço Unitário

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000344887-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Valor-inv%C3%A1lido-para-o-Pre%C3%A7o-Unit%C3%A1rio](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000344887-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Valor-inv%C3%A1lido-para-o-Pre%C3%A7o-Unit%C3%A1rio)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 3 de março de 2022 às 20:10

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura: **00:03:00min**

**Ocorrência
**Ao tentar gerar o(s) acerto(s) e encerrar o inventário é apresentado o erro abaixo impedindo a geração do movimento:

![Imagem](http://tdn.totvs.com/download/attachments/244714243/image2016-8-4%2015%3A43%3A48.png?version=1&modificationDate=1470336228000&api=v2)
![Imagem](http://tdn.totvs.com/download/attachments/244714243/image2016-8-4%2015%3A44%3A20.png?version=1&modificationDate=1470336260000&api=v2)

Inicio do Processo: Geração de Acertos e Encerramento do Inventário
Erro ao tentar gerar acertos e encerrar o Inventário 000003:
Item 0 - Produto 01.03 - PRODUTO 3 do Movimento ?741?! - Série INV: Valor inválido para o Preço Unitário.
Fim do Processo: Geração de Acertos e Encerramento do Inventário

**Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da 11.82.

**Causa
**Este erro ocorre pois o preço unitário do produto que o movimento de acerto está tentando salvar é igual a 0. E neste caso o tipo de movimento está parametrizado para não permitir preço unitário igual a 0.

Ex.:

-   No tipo de movimento está parametrizado para buscar preço em **Custo Médio,** porém ao visualizar o custo médio do produto é notado que o mesmo é 0.
-   No tipo de movimento está parametrizado para buscar preço em **Ultima Compra,** porém este produto ainda não foi movimentado. Sendo assim, o sistema não tem de onde buscar o preço.
-   No tipo de movimento está parametrizado para buscar preço em um dos 5 preços disponíveis do cadastro de produto, porém, no(s) escolhido(s) para buscar o preço o mesmo não está informado.

**Solução
**Para corrigir o problema de Preço Unitário inválido, existem 2 soluções possíveis, e são elas:

1\. Alterar o campo de onde o sistema está buscando o preço a ser levado ao item.

![Imagem](http://tdn.totvs.com/download/attachments/244714243/image2016-8-4%2016%3A56%3A12.png?version=1&modificationDate=1470340573000&api=v2)

Na imagem acima, o sistema está buscando o preço do Custo Médio, porém, este é 0. Neste caso, terá que escolher uma outra opção onde o valor a ser gerado seja maior que 0.

2\. Na etapa **Item - Preços**, marcar a opção para **Aceitar Preço Zero.
**Marcando essa opção o erro não será apresentado, porém, o movimento poderá ser salvo com o preço unitário como R$0,00. A edição do mesmo após a geração será liberada, desde que o parâmetro de Edição do Preço esteja como Edita.
