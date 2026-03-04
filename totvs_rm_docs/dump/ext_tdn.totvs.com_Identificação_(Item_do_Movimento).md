# Identificação (Item do Movimento)

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=423938130](https://tdn.totvs.com/pages/releaseview.action?pageId=423938130)
> **Domínio:** TDN (TOTVS Developer Network)

---

**
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938130/image_preview.png?version=1&modificationDate=1551290373127&api=v2)
Identificação 1/2**

**Número Máximo de Itens:** Informe qual o número máximo de itens que cada movimento poderá ter.
***Observação**:* Se este item de movimento utiliza grade numerada, o número de itens é somado ao número de itens da grade, **e*****xemplo**:*
Supondo que informou o número máximo de 5, se incluir um movimento com um item com quantidade igual a 50, este poderá ser distribuído na grade em no máximo 4 partes, pois, as 4 mais o item do movimento somará 5 itens.

**Consistir nº máximo por produto e serviço:** Este parâmetro estará habilitado somente se o tipo dos itens do movimento estiver setado com "Ambos". Deverá ser informado nos campos "Nº máx. de produtos" e "Nº máx. de serviços" a quantidade máxima de produtos e serviços, respectivamente, que um movimento poderá ter. A soma dos valores destes campos deverá ser igual ao valor do campo "Nº máx. de itens".

**Tipo de Itens:**

-   Produto: os itens deste tipo de movimento só poderão ser do tipo produto.
-   Serviço: só poderão ser tipo serviço.
-   Ambos: poderão ser do tipo produto ou serviço.

Exemplo*:* Se neste campo escolher "Produto", quando for incluir um movimento deste tipo, ao indicar os itens do movimento, todos deverão ser do tipo produto.
***Observação**:* A indicação se o item é um produto ou serviço é determinada no cadastro do produto-pasta identificação

**Data entrega:**

-   Não Edita: a data de entrega não será editada por item e, portanto, nem aparecerá na tela do item.
-   Edita: a data de entrega aparecerá na tela do item e para cada item do movimento você indicará uma data. Aparecerá também para os itens na cotação no momento de registrar orçamento.
-   Consiste: apenas exibe o campo de data para cada item, não podendo ser editado, a conferência que o sistema faz é no recebimento de pedidos. Este campo será preenchido com a data de entrega indicada no item do pedido, a data dos itens a serem recebidos deve estar no mesmo mês e ano da data do sistema, caso contrário, o item é recusado e uma mensagem é exibida, já que o campo não é editável o item deverá ser excluído para que complete o processo de faturamento/recebimento do pedido e este item pode ser desdobrado para ser recebido posteriormente.
-   Mostra: se esta opção deverá ser utilizada, mas não poderá ser editada.

***Observações**:* Caso utilize este recurso "Consiste", no movimento do tipo pedido, o campo Data de Entrega tem que ser editado. No campo "Data de Entrega" dos itens do movimento, é possível utilizar a opção 'mostra', impedindo a edição do campo.

**Ordenar por Alíquota**: Em algumas notas fiscais, os itens da nota (produtos) devem ser ordenados pela alíquota de um tributo incidente, os mais comuns são IPI e ICMS, a definição de ordenar ou não um tributo é definido na legislação.
Marque esta opção, se deseja que ao imprimir a nota para os movimentos deste tipo, que os itens venham impressos ordenados por uma alíquota, caso contrário, desmarque este campo.
Marcando, o campo seguinte "Tributo de Ordenação", será acessado para que informe qual o tributo que deverá ser ordenado.

**Carrega Comissão Produto**: Caso esta opção esteja habilitada ao incluir uma movimentação, o sistema irá buscar o percentual de comissão do Funcionário Responsável que está informado no cadastro de produto, cujo tipo seja Vendedor. Se a opção "Carrega comissão produto" estiver habilitada, será obrigatório escolher um tipo de comissão.
O sistema irá preencher o campo "PERCENTOCOMISSÃO" da tabela do item do movimento.
***Observações***: Este campo não é visível na tela do item de movimento. Foi desenvolvido para utilização na criação de relatórios ou através de consulta SQL. É possível copiar o percentual de comissão do funcionário responsável, do movimento de origem para o movimento destino.

**Fórmula Consistência:**  Esta fórmula será utilizada para consistir produtos que serão informados no movimento, portanto, a utilização desta faz com que só seja possível incluir produtos no movimento que satisfaçam o resultado da execução desta fórmula que deve ser 1. Exemplo*:*
Se informarmos para um tipo de movimento a seguinte fórmula:
SE TABPRD('COR', 'S')<>"ENTAO 1 SENAO 0 FIMSE
Só serão aceitos na inclusão dos movimentos itens que tenham a cor do produto preenchida. Para os demais será mostrada uma mensagem de produto inconsistente, e informará também o título da fórmula não atendida.
***Observação**:* A fórmula deverá já ter sido cadastrada através do menu Cadastro/Fórmulas

**Edita Marca:**

-   Não Edita: não usa marca no item de movimento.
-   Edita: edita o campo marca no item de movimento, na pasta Identificação | Tabelas. Campo não obrigatório.
-   Edita Obrigatoriamente: edita o campo marca no item de movimento, na pasta Identificação | Tabelas. Preenchimento obrigatório.
-   Mostra: exibe a marca no item de movimento, na pasta Identificação | Tabelas. Neste caso será considerado como valor default a marca definida para o produto no cadastro de produtos.

**
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938130/image_preview.png?version=1&modificationDate=1551290373127&api=v2)
Identificação 2/2**

**Unidade de Medida Padrão:** Indique qual unidade informada no Cadastro do Produto- Fabricantes/Unidades, o sistema irá colocar para os itens deste tipo de movimento:

-   Unidade de Venda;
-   Unidade de Compra;
-   Unidade de Controle;
-   Tipo de Movimento;
-   Código EAN.

***Observações**:*

-   Se optar pelo "Tipo de Movimento", habilita-se uma opção para informar a unidade default, deverá escolher uma das unidades já cadastradas pelo Menu/Cadastros/Tabelas Auxiliares/Unidades que será informada no item do movimento independente do produto, ou seja, todos terão a unidade aqui informada.
-   Se optar pelo "Código EAN", na pasta Itens/Identificação dos parâmetros do movimento, no campo 'Código do Produto' deverá constar 'Código EAN'. Dessa forma a unidade de medida padrão levada para os itens de movimento será a mesma unidade cadastrada no Código EAN do item.

**Critério para Alteração**: Não permite Alterar: com essa opção habilitada, a unidade de controle do produto incluído no item de movimento deverá ser compatível com a unidade default informada nos parâmetros.
Ter a mesma Unidade Base: permite a substituição com outra de mesma unidade base
Estar definida no Produto: permite a substituição por outra que esteja especificada no cadastro do produto.

**Utiliza produto composto:** Marcando esta opção, o botão "Desmembra itens com produtos compostos".
***Observação**:* Esta opção só aparecerá se nos parâmetros gerais/tabelas, pasta Produto/Gerais, o campo "Produto Composto" estiver marcado.

**Validar Múltiplo na Quantidade:** Marque este campo para que ao se cadastrar um item neste tipo de movimento, a quantidade do produto ou serviço terá que ser obrigatoriamente um múltiplo da quantidade, indicada no campo "Múltiplo Para Quantidade" no Cadastro de Produto-Fabricante/Unidade.

**Consiste quantidade maior:** Marcando esta opção, se este movimento estiver sendo gerado através de um faturamento/recebimento de um pedido, o sistema consistirá se a quantidade dos itens é maior que a quantidade do item no pedido. Caso a quantidade seja alterada para mais, o sistema irá barrar o recebimento/faturamento. Exemplo*:*

-   Vamos supor os movimentos 1.1.02 com os seguintes itens e quantidades:

Item

Quantidade

Item

Quantidade

1.01

100

1.03

20

1.04

50

Este pedido irá gerar o movimento 1.2.01 e no movimento 1.2.01 está marcado a opção "Consiste quantidade a maior", neste caso ao marcar o pedido 1.1.02 para gerar 1.2.01, as quantidades dos itens 1.01, 1.02 e 1.03 no movimento a ser gerado não podem ser alterados para quantidades maiores que as originais, ou seja, 100, 20 e 50 respectivamente.
***Observação**:* Caso queira utilizar este recurso este parâmetro deverá ser marcado no movimento a ser gerado, no caso do exemplo acima no movimento 1.2.01. Portanto, um pedido pode gerar vários movimentos mas, somente para aqueles que tem este parâmetro marcado é que o sistema fará a consistência da quantidade.

**Cadastra quantidade na unidade do pedido:** Marcando esta opção, o campo "Quantidade no Pedido" será habilitado na pasta identificação itens do movimento. A finalidade deste parâmetro é a seguinte:

-   Se a unidade do pedido for diferente da unidade do movimento a ser gerado no recebimento e este tiver que ser desdobrado, você indicará qual a quantidade recebida na unidade indicada no pedido. Exemplo*,*

-   Vamos supor que o pedido é feito em Kg e o produto deve dar entrada como Peça, e que o peso de cada peça é variado assim, se o pedido tem 100 Kg e chegaram 3 peças sendo uma com 10 Kg, outra com 12 Kg e a terceira com 9 Kg, ao recebermos o pedido devemos indicar como quantidade 3 peças e no campo "Quantidade no Pedido" indicaremos (10 
    ![(plus)](https://centraldeatendimento.totvs.com/s/5bn9pn/8804/xgjkrn/_/images/icons/emoticons/add.svg)
     12 
    ![(plus)](https://centraldeatendimento.totvs.com/s/5bn9pn/8804/xgjkrn/_/images/icons/emoticons/add.svg)
     9) 31 Kg, assim o pedido será desdobrado em 69 Kg.

**Cadastrar Cliente/Fornecedor do Produto Automaticamente:** Marcando esta opção ao incluir um movimento com seus itens, o sistema incluirá automaticamente na pasta Clientes/Fornecedores do cadastro do produto, o Cli/For do movimento.
***Observação**:* A consistência deste parâmetro terá como base a seguinte lógica: Se TIPOEMITENTE <> Empresa e TIPODESTINATARIO <> Empresa o parâmetro poderá ser utilizado.

**Visualizar apenas produtos relacionados com o Cliente/Fornecedor:** Informe, se no momento da inclusão dos itens do movimento, apenas os produtos do Cliente/Fornecedor do movimento serão visualizados na consulta da tabela de produtos.
***Observação**:* Em Cadastro de Produtos pasta Cliente/Fornecedor, são indicados para cada produto os Cliente/Fornecedores relacionados ao mesmo.

**Visualizar Quantidade Original:** Marque este campo para que seja permitido visualizar a quantidade do item do movimento no momento da inclusão do mesmo, desta forma, caso depois de incluído o movimento a quantidade de um item for alterada, o usuário poderá sempre visualizar a quantidade inicial do mesmo. Exemplo*:*

-   Supondo que incluiu um movimento com o item 1.01 com quantidade igual a 100, após a inclusão foi necessário alterar a quantidade para 80, o item passará a ter esta quantidade mas, mostrará na tela qual a quantidade inicialmente indicada para o item que é igual a 100, pode-se alterar a quantidade do item quantas vezes for preciso porém, esta quantidade inicial estará sempre indicada na tela.

**Permitir item Repetido:** Marque este campo para que o sistema permita em um único movimento a informação de um mesmo item mais de uma vez, caso contrário desmarque.
***Observações**:* Para que o sistema permita itens repetidos em movimentos gerados através de pedidos, é necessário que na pasta Integração Compras/Vendas do pedido origem o parâmetro "Não agrupar quantidades de itens iguais" esteja marcado. Ao incluir um movimento a mensagem de consistência do saldo não leva em consideração os itens repetidos que estão sendo incluídos no movimento corrente. Isto se deve ao fato da posição correta do estoque, ser obtida dentro do contexto de uma transação de banco de dados.

**Agrupar itens Repetidos:** Marcando este campo os itens repetidos do movimento poderão ter suas quantidades agrupadas.
***Observações**:*

-   Os dados do 1º item serão mantidos e a quantidade dos demais itens repetidos será somada a quantidade do 1º item.
-   Agrupar os itens repetidos, através do botão 'Agrupar itens repetidos', não será permitido para item controlado por Lote, Grade ou Número de Série e também para quando o movimento for gerado por Faturamento/Recebimento.
-   Caso queira agrupar os itens repetidos do pedido na nota fiscal, ao utilizar o Faturamento/Recebimento, é preciso configurar o parâmetro 'Não agrupar quantidade de itens iguais', no tipo de movimento pedido, Integração Compra/Venda. Outra parametrização deverá ser feita no tipo de movimento a ser gerado, em 'Permitir item repetido', em Itens, Outros Dados.
-   Será desabilitada automaticamente a opção de Agrupar itens repetidos, quando o tipo de movimento estiver configurado para integrar com o TOTVS Construção e Projetos. 

**Afetar Qualificação de Fornecedor:** Essa opção pode ser utilizada quando o sistema está parametrizado para fazer o controle de Qualificação de Fornecedores. Ao marcar esse parâmetro será habilitado no movimento a inclusão de informações sobre o  [Requisito de Qualificação](https://tdn.totvs.com/pages/viewpage.action?pageId=423938226) no Anexo | [Qualificação de Itens de Movimento](https://tdn.totvs.com/pages/viewpage.action?pageId=423938868).
