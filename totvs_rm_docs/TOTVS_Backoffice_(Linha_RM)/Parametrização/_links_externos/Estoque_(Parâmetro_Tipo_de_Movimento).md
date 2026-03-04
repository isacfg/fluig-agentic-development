# Estoque (Parâmetro Tipo de Movimento)

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=461921700](https://tdn.totvs.com/pages/releaseview.action?pageId=461921700)
> **Domínio:** TDN (TOTVS Developer Network)

---

**************
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/461921700/image_preview.png?version=1&modificationDate=1551298217587&api=v2)
************Estoque 1/3**

**Efeito sobre os Saldos Físicos:** Indique qual o efeito que as quantidades deste tipo de movimento terão sobre os saldos físicos existentes (4 fixos, que são: Saldo de Balanço, Saldo Atual, Pedidos a Fornecedores e Pedidos a Clientes e 6 saldos criados através do menu Opções/Parâmetros TOTVS Gestão de Estoques, Compras e Faturamento/Gestão de Estoque/Saldos de estoque), todos os saldos existentes serão apresentados e em cada um deles deverá informar se no saldo físico, a quantidade:

-   Não Altera: As quantidades deste tipo de movimento não irão alterar o saldo em questão.
-   Aumenta: As quantidades irão influenciar no saldo aumentando-o.
-   Diminui: As quantidades influirão no saldo, porém diminuindo-o.

**************
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/461921700/image_preview.png?version=1&modificationDate=1551298217587&api=v2)
************Estoque 2/3**

**Efeito sobre o Saldo atual**

-   Não Altera: Os valores financeiros deste tipo de movimento obtidos pela fórmula de Valor Financeiro, não irão afetar o saldo financeiro 2 (saldo atual).
-   Aumenta: Os valores financeiros irão afetar aumentando o saldo financeiro 2 (saldo atual).
-   Diminui: Os valores financeiros irão afetar diminuindo o saldo financeiro 2 (saldo atual).

***Observação**:* O saldo parametrizado como "não altera" no tipo de movimento não será visualizado na inclusão do movimento. Somente serão visualizados os classificados como "altera", porém no cadastro de produtos serão visualizados todos informados nos parâmetros gerais/produto/saldos.

**Fórmula Valor Financeiro:** Informe neste campo a fórmula que deverá ser utilizada para o cálculo do valor financeiro dos produtos no movimento. As fórmulas já deverão estar cadastradas em Cadastro Fórmulas, exemplo:

-   Saldo Financeiro de Entrada: KQT\*KPU+LVL('IPI')+MFR\*(KQT\*KPU/MVB), onde:

KQT = Quantidade;
KPU = Preço Unitário;
LVL ('IPI') = Valor calculado de IPI;
MFR = Valor do Frete;
MVB = Valor Bruto.
KQT \* KPU
***Observações:***

-   Dos 10 saldos controlados pelo sistema, apenas para o saldo físico 2 é possível se fazer o controle financeiro, os demais saldos tem apenas o controle físico.
-   A informação da fórmula de valor financeiro é obrigatória somente para tipos de movimentos que afetam o saldo financeiro (aumentando ou diminuindo).
-   Movimentos que afetam saldo atual financeiro aumentando, afetam custo unitário e automaticamente também afetam o custo médio. Esta regra também vale no caso de um movimento de transferência, ou seja, movimentos do grupo 3, isto se a saída estiver parametrizada para diminuir o saldo financeiro, pois a entrada desta transferência tem um efeito contrário sobre os saldos.
-   O custo unitário será obtido através da fórmula: resultado da fórmula de valor financeiro (indicada no campo "fórmula valor financeiro") / quantidade do item de movimento (já considerando o fator de conversão das unidades).
-   O custo médio é obtido através da fórmula:
-   Saldo Financeiro depois da movimentação / Saldo Físico depois da movimentação.
-   O custo unitário, tanto geral quanto por local, só será atualizado se a data de entrada for maior ou igual à do último custo unitário, exemplo:

Vamos supor que um produto teve sua última movimentação no dia 01/07/1999 no local 01, caso inclua um movimento no mesmo local com data anterior à de 01/07, o sistema manterá o custo unitário do dia 01/07.

**Tipo Controle de Estoque Terceiros:** Informe qual o tipo de controle o movimento terá em relação ao estoque de terceiros ou em poder de terceiros. As opções são:

-   Não Controla;
-   Remessa/Entrada Mercadoria;
-   Remessa/Entrada para Industrialização;
-   Industrialização Efetuada por Terceiros (1 NF);
-   Retorno Industrialização (2 NF's);
-   Cobrança Serviço de Industrialização Efetuada por Terceiros (2 NF's);
-   Remessa/Entrada para Consignação;
-   Venda Mercadoria em Consignação.
-   Remessa/Entrada para Industrialização Triangulação

**Fórmula do Valor Financeiro Terceiros:** Informe neste campo a fórmula que deverá ser utilizada para o cálculo do valor financeiro de terceiros dos produtos no movimento. As fórmulas já deverão estar cadastradas em Cadastro Fórmulas.
***Observações**:*  Este campo só será apresentado quando o Tipo de Controle de Estoque Terceiros for "Remessa/Entrada de Mercadorias" ou "Remessa/Entrada para Industrialização" ou "Remessa/Entrada para Consignação" e o Efeito sobre o Saldo de Terceiros for "Aumenta". A informação da fórmula de valor financeiro de terceiros é obrigatória somente para tipos de movimentos que afetam o saldo de terceiros (aumentando).

**Tipo de Movimento de Industrialização:** Informe neste campo o tipo de movimento para entrada no estoque do produto industrializado/beneficiado.
***Observações**:* Este campo só será apresentado quando o Tipo de Controle de Estoque Terceiros for "Industrialização Efetuada por Terceiros (1 NF)" ou "Retorno Industrialização (2 NF's)". A informação do tipo de movimento de industrialização é obrigatória somente para tipos de movimentos cujo Tipo Controle de Estoque Terceiros seja "Industrialização Efetuada por Terceiros (1 NF)" ou "Retorno Industrialização (2 NF's)".

**Efeito Sobre o Saldo de Terceiros:** Não Altera: o saldo físico e financeiro de terceiros, obtido pela Fórmula do Valor Financeiro Terceiros, não serão afetados. Aumenta: o saldo físico de terceiros será aumentado conforme a quantidade do item de movimento e o saldo financeiro de terceiros será acrescido com o valor obtido pela Fórmula do Valor Financeiro Terceiros. Diminui: o saldo de terceiros será diminuído conforme quantidade do item de movimento e o saldo financeiro de terceiro será diminuído com o valor obtido pela Fórmula do Valor Financeiro Terceiros.

**Efeito Sobre o Saldo com Terceiros:**

-   Não Altera: o saldo físico com terceiros não será afetado.
-   Aumenta: o saldo físico com terceiros será acrescido conforme quantidade do item de movimento.
-   Diminui: o saldo físico com terceiros será diminuído conforme quantidade do item de movimento.

**Editar Prateleira:** Marque esta opção se desejar que, para cada item incluído no movimento deste tipo, apareça o campo para o endereço (prateleira) do produto no estoque.

**Local de Estoque por Item:** Marque esta opção se desejar que o sistema controle o local de estoque por item da movimentação e não por movimentação.

****************
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/461921700/image_preview.png?version=1&modificationDate=1551298217587&api=v2)
**************Estoque 3/3**

**Conta Trabalho:** Se o item do movimento for controlado como conta trabalho, informe como este irá afetar este controle, as opções são:

-   Para tipos de movimentos de entrad**a**: Não Afeta, Entrada CT, Entrada CT devolução Prd Acabado, NF gerada por devolução Prd Acabado.
-   Para tipos de movimentos de saída: NF gerado por Faturamento, Saída CT para acerto Entrada, Saída CT por devolução, NF gerada por devolução. Saída CT por refugo Mat. Prima, Saída CT por Refugo Prd. Acabado, Mov. Gerado Refugo Mat. Prima, Mov. Gerado Refugo Produto Acabado.

***Observações***: Caso a opção selecionada for Entrada CT, o sistema abrirá ainda um campo para que informe o cliente.

-   Se a opção escolhida for Saída CT para acerto de entrada, Entrada CT devolução Prd Acabado, o tipo de movimento com esta opção deverá ter o campo "Edita Movimento Relacionado" (Identificação/Outros Dados), confirmado pois, na edição destes movimentos, o sistema consistirá se os produtos digitados estão no movimento informado e se a quantidade digitada é inferior ou igual à quantidade do movimento relacionado.
-   Se a opção escolhida for NF gerada por Devolução, aparecerá a opção de gerar NF de acerto de entrada, ou devolução simples, onde o acerto de entrada gera a baixa da Nota Fiscal indicada no movimento que está sendo baixado e a devolução simples gera a baixa conforme FIFO.
