# Custo (Parâmetro Tipo de Movimento)

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=423938190](https://tdn.totvs.com/pages/releaseview.action?pageId=423938190)
> **Domínio:** TDN (TOTVS Developer Network)

---

**Afeta Custo Reposição A / Custo Reposição B:**

-   Para cada um dos custos descritos acima, marque o campo se o custo em questão alterar quando forem incluídos os itens dos movimentos deste tipo e deixe desmarcado se não alterar.
-   Marcando o campo, informe qual a fórmula que resultará no custo. As fórmulas já deverão estar cadastradas no menu Cadastro/Fórmulas.

***Observação**:* Os custos de reposição A e B são custos gerenciais que indicam geralmente o preço de custo do produto no mercado em moeda forte.

* * *

**Atualizar preço na inclusão:** 

**Preço a atualizar:** 

-   Nenhum: o usuário não deseja atualização de nenhum preço.
-   Preços 1, 2, 3, 4 ou 5: selecione a opção desejada.
-   Cliente/Fornecedor: ao escolher esta opção, o preço do produto referente ao fornecedor de um movimento de compra é atualizado automaticamente na compra.
    Existe uma função de fórmula que retorna o valor do preço de um produto por fornecedor "TABPRDCFO". Utilizando esta função você pode atualizar o preço do produto baseado neste preço.

**Fórmula para o preço:** Informe a fórmula que deverá atualizar o preço do cadastro do produto.
***Observação**:* Para que o reajuste seja levado para o cadastro de produto o tipo de movimento deve afetar estoque. 
Exemplos:

-   -   KPU - preço unitário do item. Desta forma, ao incluir um movimento deste tipo, o preço unitário do produto será o preço do mesmo no cadastro. Se o preço unitário é 8,00 o valor do preço especificado no campo "preço a atualizar" passará para 8,00.
    -   KPU \* 1.10 - preço unitário do item vezes 1.10. O preço de venda será atualizado e seu valor será 10% a mais que o preço unitário. Se o preço unitário é 10,00 o valor do preço especificado no campo anterior será atualizado para 11,00

* * *

**Não afetar custo unitário:** Marcando esta opção, movimentos de compra mesmo que afetem saldo financeiro não afetará o custo unitário. Caso este parâmetro esteja marcado, mesmo que o tipo de movimento aumente o saldo financeiro, o custo unitário por produto e por local de estoque não é atualizado. De todo modo, o custo médio permanece sendo afetado pela inclusão de qualquer movimento que aumente os saldos financeiros e/ou o físicos (Custo médio = Saldo Financeiro/Saldo Físico).

**Buscar custo no movimento relacionado:** Caso este parâmetro esteja marcado, o custo de cada item do movimento será igual ao custo do mesmo produto no movimento relacionado, tanto para entradas quanto saídas. Marcando esta opção, o parâmetro "Movimento Relacionado" na pasta Identificação/Outros dados, deverá também estar confirmado, pois, é no item do movimento relacionado que o sistema busca o custo do movimento. Exemplos*:*

-   Se uma devolução de venda que é uma entrada de material, não pode afetar o custo unitário e deve entrar ao custo médio da venda (se tiver movimento relacionado)
-   O parâmetro "Não afetar custo unitário" deve estar marcado e o parâmetro "Buscar custo no movimento relacionado" também, assim, o custo unitário na devolução não será afetado e o custo será o do movimento relacionado.
-   Se uma devolução de compra que é uma saída de material, deve ser valorizado a custo unitário da entrada do material, o parâmetro "Buscar custo no movimento relacionado" deve estar marcado e em conseqüência disto, deve-se trabalhar com movimento relacionado.

***Observações**:* 

-   Caso este parâmetro esteja marcado, o sistema não executará fórmula de valor financeiro nas movimentações deste tipo. Neste caso, o valor financeiro que afetará o estoque será:
    -   Quantidade do movimento \* fator de conversão da unidade \* valor do custo buscado no movimento relacionado.
    -   Portanto, em tipos de movimentos com este parâmetro marcado, não será necessário informar a fórmula de valor financeiro.
-   Caso este parâmetro esteja marcado **em movimentos de Baixa de Estoque**, o sistema irá **recalcular** o **Custo Médio** de acordo com o **Valor Financeiro** e a **Quantidade de Saldo** encontrado.

**Utilizar fórmula de valor financeiro na transferência:** Marcando esta opção na movimentação de transferência, o sistema irá calcular o valor financeiro através da fórmula indicada na pasta Estoque/Fórmula Valor Financeiro. Se esta opção não estiver parametrizada, o valor financeiro da entrada da transferência será buscado no valor financeiro da saída.

**Registrar custo do item no pedido:** Esta opção deverá ser utilizada para movimentos que apresente a seguinte situação: a baixa de estoque e a contabilidade feita no recebimento do pedido com os valores do pedido, mas a fatura chega num documento posterior podendo conter diferenças de valores em relação ao pedido. Segue abaixo um exemplo de contabilização de diferença de custos. Exemplo*:*

-   No evento contábil do pedido a conta crédito e a conta débito possuem para cálculo dos valores contábeis a seguinte fórmula: KQT\*KPU. 
-   Já na Nota Fiscal a conta crédito e a conta débito possuem a seguinte fórmula para cálculo dos valores contábeis: (KQT\*KPU) – KCC. 
-   Supondo que no pedido o valor Contabilizado foi R$100,00 e ao incluirmos a Nota Fiscal o valor do movimento foi alterado acrescentando no valor contabilizado mais R$ 50,00. 
-   Como o pedido já tinha sido anteriormente contabilizado em R$ 50,00, deve-se agora fazer apenas a contabilização da diferença. Utilizando a fórmula acima, será contabilizado somente R$ 50,00.

**Deduzir valor do Frete de CTRC no Custo do item da devolução de compra:** Habilitando esse parâmetro o valor do frete de CTRC será deduzido no custo do item ao realizar uma devolução de compra. Exemplos*:*

-   Ao criar uma nota fiscal relacionada com determinado CTRC, o Sistema rateia o Custo do frete por item de movimento. Para isso é necessário que o usuário defina a fórmula (KQT\*KPU+ TABITM ('VALORFRETECTRC','N')) para o valor financeiro em (Parâmetros do tipo de movimento/Pasta Itens/Estoque), acrescentando o valor do frete rateado para determinado item, para composição do custo. 
-   Caso seja necessário realizar uma devolução, a mercadoria será devolvida, mas o valor do frete não. Então o valor do frete deverá ser deduzido do valor financeiro no momento da devolução. Esta dedução será realizada proporcionalmente à quantidade de itens devolvidos.

***Observações**:*

-   Este parâmetro estará visível somente para movimentos do tipo 2.2.
-   Para habilitá-lo, é necessário que o Tipo de Movimento esteja parametrizado para utilizar Devolução de Compra através da Cópia de Movimentos por Referência.

**Utilizar devoluções como estorno na ficha:** Este parâmetro deve ser utilizado somente em movimentos referentes a devolução de produto. Marcando -o as devoluções dos movimentos de entrada do produto na Ficha Física Financeira aparecerão na coluna referente as entradas de estoque do produto com sinal negativo, já as devoluções de venda do produto aparecerão na coluna de saída de produto com o sinal negativo.
