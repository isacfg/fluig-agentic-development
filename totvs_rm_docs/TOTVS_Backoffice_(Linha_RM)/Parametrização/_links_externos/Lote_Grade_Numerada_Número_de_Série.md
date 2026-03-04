# Lote / Grade Numerada / Número de Série

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=423937995](https://tdn.totvs.com/pages/releaseview.action?pageId=423937995)
> **Domínio:** TDN (TOTVS Developer Network)

---

****************
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423937995/image_preview.png?version=1&modificationDate=1551200841273&api=v2)
**************Aceita Número de Série**

Marcando esta opção poderão ser incluídos no movimento produtos que utilizam ou não número de série (o termo "Números de Série" de um produto se refere a um conjunto do mesmo que possuem, individualmente, uma identificação denominada Número de Série).
***Observação**:* A opção Aceitar Número de Série ficará sempre habilitada quando o tipo de movimento afetar o saldo 2 do estoque.

****************
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423937995/image_preview.png?version=1&modificationDate=1551200841273&api=v2)
**************Editar Grade Numerada**

Marque esta opção, se para cada item deste movimento deseja utilizar o controle de grade numerada, as grades já deverão estar cadastradas em Cadastros/Tabelas Auxiliares/Grade Numerada.
***Observação**:* No processo de cotação, para gerar ordem de compra através de uma solicitação, utilizando produtos com grade numerada, deve-se utilizar o novo modelo de grade numerada, onde cada item da grade é um produto.

****************
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423937995/image_preview.png?version=1&modificationDate=1551200841273&api=v2)
**************Consiste Lote**

Marcando este parâmetro o sistema consistirá se a quantidade de itens do movimento é igual a quantidade de itens no lote.
Ao marcar o parâmetro Consiste Lote os status de lotes movimentados são habilitados e poderão ser selecionados.
***Observações***: Se o tipo de movimento afetar o Saldo 2 do estoque, umas das opções, Consiste Lote ou Carrega Lotes mais Antigos, deve estar obrigatoriamente marcada.
Se ao salvar o movimento, o produto for controlado por lote e o parâmetro Consistir Lote estiver marcado serão realizadas as seguintes consistências:

-   Não for selecionado registros de lote o sistema exibe a seguinte mensagem de consistência: "Itens de lote não informados".
-   A quantidade de lotes for diferente da quantidade de itens o sistema exibe a mensagem de consistência: "Total de itens de lotes selecionados não é igual a quantidade do item."
    **Carrega Lotes mais Antigos:**
    Marcando esta opção, o sistema sempre utilizará os produtos de lote que estiverem com validade mais antiga. Este parâmetro somente é exibido em movimentos de Vendas e Transferências.
    O recurso funciona da seguinte maneira:
-   O mesmo será habilitado apenas se o parâmetro Consiste Lote estiver desmarcado.
    Ao marcar o parâmetro Carrega Lotes mais Antigos os status de lotes movimentados são habilitados e poderão ser selecionados.
    Quando este parâmetro estiver marcado, o sistema carrega os lotes com menor data de validade (mais antigos). Agora, se houver mais de um lote com mesma data de validade, serão selecionados em primeiro lugar os de menor número de lote.
-   Ao incluir itens controlados por lote em um movimento, não poderá ser incluído um novo lote na tela de cadastro de lote.
-   Ao salvar o movimento, um processo irá automaticamente incluir os lotes mais antigos para cada item de acordo com as quantidades de lote em estoque.

****************
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423937995/image_preview.png?version=1&modificationDate=1551200841273&api=v2)
**************Consiste Fornecedor do Lote**

Marque esta opção se deseja que o fornecedor do lote seja consistido ao incluir uma movimentação. O fornecedor do lote será consistido com o fornecedor do movimento, estes deverão ser iguais.
***Observação**:* A opção de Consiste fornecedor do Lote, somente será visível para o tipo de movimento de compra.

****************
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423937995/image_preview.png?version=1&modificationDate=1551200841273&api=v2)
**************Status do Lote Movimentados**

Marque os Status para que os lotes dos produtos sejam visualizados na movimentação.
***Observação**:* Os Movimentos que afetam o saldo físico atual como 'Aumenta' ou 'Diminui', os flags de controle de estoque por lote, grade numerada e números de série deverão estar obrigatoriamente marcados. Caso não estejam, ao salvar o tipo de movimento, os mesmos serão marcados automaticamente.

**
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423937995/image_preview.png?version=1&modificationDate=1551200841273&api=v2)
Status Default do Lote de Produto para Código de Barras:**

Selecione o status default do lote de produto. Este status será utilizado na inclusão automática do lote a partir da leitura do código de barras do produto no movimento.

Serão exibidos como opção de status apenas aqueles que foram selecionados no parâmetro de **Status do Lote Movimentados.**

Atenção

Status Default do Lote de Produto Para Código de Barras: Funcionalidade disponível a partir da versão 12.1.2302
