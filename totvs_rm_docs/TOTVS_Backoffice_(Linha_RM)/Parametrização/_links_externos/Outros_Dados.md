# Outros Dados

> **Fonte:** [https://tdn.totvs.com/display/public/LRM/Outros+Dados](https://tdn.totvs.com/display/public/LRM/Outros+Dados)
> **Domínio:** TDN (TOTVS Developer Network)

---

**Usar Cópia de Movimentos por Referência:**  Marcando esta opção, será possível copiar dados de um movimento já existente na base para um novo, relacionando-os internamente.
***Observações**::* Ao realizar cópia de movimentos por referência, o sistema irá obedecer às regras de natureza, informadas nos parâmetros do tipo de movimento (Opções/Parâmetros/Tipos de Movimentos/Pasta Identificação/Aba Dados Fiscais/campos \`Natureza' e \`Natureza Fora Estado'). A Cópia Simples é utilizada para facilitar a inserção de movimentos com a mesma característica. Neste tipo de cópia, a tabela TMOVRELAC não é preenchida.

**Motivo de Referência:** Cada tipo de movimento que utilizar do processo de cópia, utilizará uma configuração única definida na tabela "Motivo de Referência". Estes motivos estão em uma tabela fixa, com as operações pré-definidas para que seja possível efetuar consistências legais de forma adequada. São eles:

Código

Descrição

Código

Descrição

1

Cópia Simples

2

Simples Remessa

3

NF Acompanhamento de Cupom Fiscall

4

Devolução de Mercadorias

5

Devolução de Vendas de Mercadorias

6

Nota Fiscal Complementar/Retificadora

7

Remessa para Concerto

8

Devolução material receb. conta e ordem

9

Produção

10

Retorno de Remessa - Estoque de Terceiros

11

Retorno de Mercadoria não Aplicada na Industrialização - Estoque Terceiros

12

Retorno de Remessa para Industrialização - Estoque de Terceiros

13

Devolução Simbólica de Mercadoria em Consignação - Estoque de Terceiros

14

Venda Mercadoria Consignada - Estoque Terceiros

15

Devolução Mercadoria Consignada não Comercializada - Estoque Terceiros

16

Conhecimento de Transporte Eletrônio (CT-e) Anulação

17

Conhecimento de Transporte Eletrônio (CT-e) Substituição

19

Substituição NF-e Serviço

20

Cópia Simples com Relacionamento

21

Cópia NF-e de Ajuste - Cancelamento Indevido

22

Cópia NF-e de Ajuste - Estorno de Venda

23

Cópia NF-e de Ajuste - Estorno de Compra

24

NF-e Produtor Rural - Contra Nota

25

Cópia Simples com relacionamento somente do movimento

26

Transformação de Itens - Movimentações Internas entre Produtos

27

NF Complementar com Cópia de Itens

28

Cópia NF-e de Ajuste - Estorno de Transferência

29

Desmontagem de Mercadorias

30

Devolução de Recusa

31

Devolução de Empréstimo

32

Reporta Insumo MNT

33

Vendas de Entrega Futura

34

Remessa Parcelada de Exportação

35

Remessa para Industrialização por Conta e Ordem

36

Retorno de Remessa para Industrialização por Conta e Ordem

**Editar Número no Cliente:** Ativando esta opção no movimento, será possível relacionar outro número para o cliente. Exemplo*:* Vamos supor um número controlado pelo cliente, ou seja, o cliente faz um pedido e para cada empresa fornecedora, há um número de controle. Para isto é criado este "número no cliente", que tem relação com alguma numeração do cliente e não tem nenhum valor para o controle no sistema. Clique nesta opção para ativá-la. Neste caso ficará marcada e clique para desativá-la. Caso ative, informe no campo seguinte o nome para este no movimento, como por exemplo "Nr. Pedido no Cliente" e este aparecerá ao clicar o botão "cabeçalho", na janela de edição dos movimentos.

**Editar Movimento Relacionado:** Este campo refere-se a relação de um movimento a outro. Exemplos*:*

-   Uma devolução se relaciona com uma venda - Vamos supor que foi efetuada uma venda e a mercadoria foi devolvida. Neste caso, um tipo de movimento "Mercadoria Devolvida" foi criado e será relacionado àquele que originou a venda desta mercadoria.
-   Um pedido de compra se relaciona a uma compra.
-   Clique nesta opção para ativá-la, neste caso ficará marcada e clique para desativá-la. Caso ative, informe os campos:

**Nome Mov. Relacionado:** Informe o nome para este campo no movimento, como por exemplo, "Mov. Relacionado" e este aparecerá no movimento. Seu preenchimento não é obrigatório.

**Tipo dos Movs. Relacionados:** Informe se desejar o código do tipo de movimento relacionado a este. Somente os movimentos deste tipo serão filtrados para seleção no campo "Mov.Relacionado" do movimento. Caso não preencha o campo, o sistema filtrará todos os movimentos de todos os tipos.

**Máscara do C. de Custo reduzido:** Ao optar por utilizar código reduzido para o Centro de Custo, informe neste campo a máscara a ser reconhecida na digitação do centro de custo no movimento.
***Observação**:* Se não for utilizar a informação do centro de custo por código reduzido, não preencha este campo, porque a partir do momento em que está preenchido, o sistema só reconhecerá o código reduzido ao informar o centro de custo no movimento.

**Movimento de Remessa:** Marque esta opção se este movimento será um movimento de remessa.
***Observações**:* 

-   Para que o sistema reconheça este movimento como de remessa, é necessário que a Natureza Fiscal seja editada e que na pasta Remessa da natureza os campos "prazo de retorno" e "número de prorrogações" estejam preenchidos.
-   Para caracterizar o retorno da remessa, é necessário receber o pedido, ou seja, na pasta Integração-Compras/Vendas, o campo "Gerar Movimento Compra/Venda" deverá estar marcado.
-   Para prorrogar o prazo, acesse o menu Utilitários/Prorrogação de Remessas.

**Segundo Número Sequencial:** Este campo tem a finalidade de gerar um segundo número sequencial para o movimento. Aqui será indicado onde o sistema buscará este número, de acordo com a parametrização em "Opções - Parâmetros - Gerais/Tabelas - Numeração do Movimento". As opções são:

-   Não utiliza: o segundo número sequencial não será gerado.
-   Utilizar numeração geral: irá gerar o segundo número seguindo o número indicado no campo "segundo número geral", através do menu Opções/Parâmetros Gerais/Tabelas/Numeração do Movimento, nos dados do segundo número seqüencial.
-   Utilizar numeração por filial: seguirá a numeração sequencial indicada para as filiais, através do menu Opções/Parâmetros Gerais/Tabelas/Numeração do Movimento, descrito acima.

***Observações**:* Este segundo número sequencial aparece no movimento ao clicar o botão "cabeçalho" na janela de edição do mesmo. Segundo número poderá ser associado ao TOTVS Gestão Contábil. Ao optar por utilizar o segundo número, o sistema habilitará o campo "Associa Segundo Número", na pasta Contabilização, do tipo de movimento.

**Tolerância:** Neste campo, você indicará ao sistema que para este tipo de movimento, será utilizado o controle de tolerância. As opções são:

-   Não Usar: selecione esta opção se o tipo de movimento não vai controlar a Tolerância.
-   Usar para Quantidade: O sistema fará o controle apenas para a quantidade.
-   Usar para Preço: O sistema fará o controle apenas no preço.
-   Usar para Quantidade e Preço: O controle será sobre o preço e pela quantidade.

***Observação**:* Caso você confirme a utilização de qualquer tipo de controle de tolerância, seja para quantidade, preço ou ambos, é necessária que no cadastro do produto, pasta preços, seja definido a porcentagem de limite mínimo e máximo para cada produto.E ao usar tolerância o sistema irá consisti-la no processo de faturamento.

**Utiliza TOTVS Colaboração / NeoGrid:** Permite inclusão de movimentos com base em um XML validado pelo NeoGrid.

**Fórmula Consistência:** Informe qual a fórmula de consistência será utilizada pelo tipo de movimento corrente. A fórmula será executada uma única vez para cada movimento a ser inserido/alterado.

**Aprovação:** Para parametrizar um tipo de movimento de aprovação, devemos utilizar do tipo "Pedido" Devemos também em (Cadastro/Segurança/Perfis/Aprovações por Tipo de Movimento), definir para cada perfil que utilizará o sistema de aprovação o tipo de movimento que parametrizamos anteriormente e também a fórmula onde criamos a consistência, para que a movimentação seja aprovada ou não. As opções são:

-   Não Usar: selecione esta opção se o tipo de movimento não vai controlar a aprovação.
-   Usar: selecione esta opção se o tipo e movimento terá que ser aprovado ao recebê-lo.

***Observação**:*

-   Toda variável utilizada na fórmula deverá ser referente ao pedido parametrizado para aprovação.
-   Após gerar a ordem de compra e recebê-la, utilizando um tipo de movimento parametrizado para trabalhar com aprovação, é possível a inclusão de itens apenas em movimentos que não estejam aprovados.

Pedido Integrado ao TOTVS Gestão de Estoques, Compras e Faturamento. Net:
Marque esta opção se deseja que o tipo de movimento seja integrado ao Portal RM – Módulo Administrativo.
***Observações**:* Será visível para os movimentos do tipo 1.1.XX (Solicitação de Compra) e 2.1.XX (Pedido de Venda). - Veja maiores detalhes no tópico Portal RM – Módulo Administrativo no help do sistema.
