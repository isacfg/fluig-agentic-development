# Demonstração Processo de Consignação – Remetente

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=89621662](https://tdn.totvs.com/pages/releaseview.action?pageId=89621662)
> **Domínio:** TDN (TOTVS Developer Network)

---

**Produto**

**:**

TOTVS Gestão de Estoque Compras e Faturamento                       **Versão:** 11.52 e posteriores                                                              

**Processo**

**:**

Estoque DE/COM Terceiros

**Subprocesso**

**:**

Estoque com Terceiros – Demonstração Processo de Consignação – Remetente

**Data da publicação**

**:**

23/10/2013

#### **
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/89621574/Imagem%201.png?version=1&modificationDate=1382476703000&api=v2&effects=drop-shadow)
**

#### **Estoque com Terceiros – Descrição do Processo de Consignação - Empresa Remetente (consignador)**

Para enviar a mercadoria para consignação, a empresa remetente irá incluir um movimento de saída 
‘**Remessa Mercadoria para Consignação**’ para controle do estoque COM Terceiros e regularização fiscal e 
contábil da operação. Este movimento irá aumentar o estoque COM Terceiros, sem interferir no estoque 
total de propriedade da empresa (Saldo Atual). Consideramos que o estoque COM Terceiros é um estoque 
indisponível para movimentações de saídas, até que seja lançado o retorno do insumo. O valor financeiro do 
estoque COM Terceiros será calculado com base no custo médio dos insumos já registrados no sistema. 

A empresa que irá comercializar a mercadoria consignada, quando efetivar a venda, irá devolver 
simbolicamente a mercadoria para a empresa remetente (consignador), a fim de regularização da operação. 

Ao receber a nota do retorno simbólico da mercadoria consignada, a empresa remetente (consignador) irá
incluir um movimento de entrada ‘**Retorno Simbólico Mercadoria Vendida pelo Consignatário**’ através de 
**cópia por referência** do movimento de ‘**Remessa Mercadoria para Consignação**’. Este movimento irá diminuir o 
estoque COM Terceiros.

Em seguida, deverá emitir uma nota fiscal de faturamento para regularização da venda consignada, através da 
**i**nclusão de um movimento de saída **‘Venda de Mercadoria Consignada’**, que será criado através de **cópia** 
**por referência** do movimento de **‘Retorno Simbólico Mercadoria Vendida pelo Consignatário’**. 

Se a empresa consignatária não comercializar toda a mercadoria remetida, ela irá devolvê-la através de uma 
nota fiscal que caracterize legalmente esta operação. Neste caso a empresa remetente (consignador) irá
incluir, através de **cópia por referência** do movimento de **‘Remessa Mercadoria para Consignação’**, um 
movimento de entrada **‘Retorno Mercadoria Consignada não Comercializada’** para estornar o controle do 
estoque COM Terceiros e regularização fiscal e contábil do processo. Este movimento irá diminuir o estoque 
COM Terceiros. Após inclusão do movimento de entrada, o estoque COM Terceiros voltará a ser considerado 
como estoque disponível para movimentação.
Observação: Fica a critério da empresa remetente (consignador), o controle contábil deste processo.

###### Link do documento com a parametrização dos tipos de movimento: [Parametrização do Processo de Consignação – Remetente](/pages/viewpage.action?pageId=89621574)

> Saldo do produto antes do processo.
>
> ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/89621662/Imagem%201.png?version=1&modificationDate=1382533589000&api=v2&effects=drop-shadow)

##### **Inclusão do movimento de consignação**

Movimento - Identificação / Cabeçalho:

\- Informar o Cliente/Fornecedor para onde a mercadoria será enviada.

Item de Movimento - Identificação / Cabeçalho:

\- Informar a quantidade de item a ser consignado no campo "Quantidade" e informar no campo "Produto" o item que será enviado para consignação.

> Saldo do produto após o movimento de Consignação
>
> ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/89621662/Imagem%204.png?version=1&modificationDate=1382533589000&api=v2&effects=drop-shadow)

##### **Inclusão do movimento de retorno simbólico da mercadoria vendida pelo consignatário**

**Utilizar o processo de copia por referencia**

\- Selecionar o movimento de remessa da mercadoria para consignação

\- Selecionar os itens que foram **vendidos** pelo consignatário

> O movimento de retorno simbólico da mercadoria vendida será aberto para edição

Item de Movimento - Identificação / Cabeçalho:

\- Editar o campo "Quantidade" e informar a quantidade do item que foi **comercializada/vendida** pelo seu cliente

> Após o movimento de retorno simbólico da mercadoria a consulta de saldo do produto
>
> ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/89621662/Imagem%2010.png?version=1&modificationDate=1382533589000&api=v2&effects=drop-shadow)
>
> Observação: A quantidade 30 (Saldo COM terceiros) é o que não foi vendido pelo consignatário, ou seja, está consignado.

##### **Inclusão do movimento de Venda de Mercadoria Consignada**

**Utilizar o processo de copia por referencia**

\- Selecionar o movimento de Retorno simbólico da mercadoria vendida

\- Marcar os itens do movimento criado anteriormente (retorno simbólico) para realizar a **Venda efetiva** da mercadoria.

\- Salvar o movimento de venda do produto com os dados necessários

> Saldo do produto após a inclusão do movimento de venda
>
> ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/89621662/Imagem%2015.png?version=1&modificationDate=1382533790000&api=v2&effects=drop-shadow)

##### **Inclusão do movimento de Retorno da Mercadoria Consignada não Comercializada**

****Utilizar o processo de copia por referencia****

\- Selecionar o movimento de Remessa para Consignação

\- Selecionar os itens que **Não** foram **vendidos** pelo consignatário

O movimento de retorno simbólico da mercadoria Consignada não Comercializada será aberto para edição

Item de Movimento - Identificação / Cabeçalho:

\- Editar o campo "Quantidade" e informar a quantidade do item que **Não** foi **comercializada/vendida** pelo seu cliente

> Saldo do produto após a inclusão do movimento de retorno simbólico da mercadoria Consignada não Comercializada
>
> ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/89621662/saldo%20consignado%20final.JPG?version=1&modificationDate=1382541635000&api=v2&effects=drop-shadow)
>
