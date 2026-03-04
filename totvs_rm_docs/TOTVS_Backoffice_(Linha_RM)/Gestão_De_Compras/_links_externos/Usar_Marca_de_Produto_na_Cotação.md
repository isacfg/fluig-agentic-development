# Parâmetros - Cotação

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=423938121](https://tdn.totvs.com/pages/releaseview.action?pageId=423938121)
> **Domínio:** TDN (TOTVS Developer Network)

---

Para conseguir atender os casos onde existem parametrizações diferentes/específicas do processo de cotação entre as filiais da mesma coligada. Os parâmetros da cotação pode ser definidos em dois niveis:

-   Geral

           A parametrização geral é considerada nos casos onde a cotação abrange solicitações de diferentes filiais.

-   Por Filial

           A parametrização por filial é considerada nos casos onde a cotação abrange solicitações apenas de uma filial específica.



-   [Definições Gerais](#)
-   [Movimentos](#)
-   [Fornecedores](#)
-   [Orçamento](#)
-   [E-mail](#)
-   [Relatório](#)

-   [Definições Gerais 1/6](# "Definições Gerais 1/6")
-   [Definições Gerais 2/6](# "Definições Gerais 2/6")
-   [Definições Gerais 3/6](# "Definições Gerais 3/6")
-   [Definições Gerais 4/6](# "Definições Gerais 4/6")
-   [Definições Gerais 5/6](# "Definições Gerais 5/6")
-   [Definições Gerais 6/6](# "Definições Gerais 6/6")

**Custo Financeiro Padrão:**Este campo representa em percentual, o custo financeiro (mensal) que irá igualar em uma única data os preços cotados.

-   Exemplo*:*Vamos supor que informou neste campo 2%. Um produto foi cotado com três fornecedores com os seguintes preços e condições de pagamento:



Código do Fornecedor

Valor (R$)

Prazo

Código do Fornecedor

Valor (R$)

Prazo

F00001   

100,00 

 30 dias 

F00002  

102,00  

60 dias 

F00003  

104,00  

90 dias 

Para que o sistema selecione a melhor oferta, é necessário que levemos em consideração os prazos estipulados para pagamento de cada fornecedor, para isto é necessário colocar este custo financeiro, no caso deste exemplo, os preços seriam atualizados para a data de hoje da seguinte forma:



Código do Fornecedor

Valor (R$)

Prazo

%

Cálculo

Custo Financeiro

Código do Fornecedor

Valor (R$)

Prazo

%

Cálculo

Custo Financeiro

F00001  

100,00  

30 dias

2%

100,00
![(minus)](https://centraldeatendimento.totvs.com/s/5bn9pn/8804/xgjkrn/_/images/icons/emoticons/forbidden.svg)
 2,00

98,00

F00002  

102,00  

60 dias 

4%

102,00
![(minus)](https://centraldeatendimento.totvs.com/s/5bn9pn/8804/xgjkrn/_/images/icons/emoticons/forbidden.svg)
 4,08

97,92

F00003  

104,00  

90 dias 

6%

104,00
![(minus)](https://centraldeatendimento.totvs.com/s/5bn9pn/8804/xgjkrn/_/images/icons/emoticons/forbidden.svg)
 6,24

97,76

Portanto, o sistema selecionaria o F00003 como vencedor da concorrência porque, apesar de seu preço ser maior, atualizando-o para a data atual, de acordo com o percentual informado, passaria a ter o melhor preço.

**Frete (%) Padrão:** Informe neste campo o percentual de frete default que será calculado nas cotações. Na seleção da melhor oferta, que o sistema faz para as cotações, será feito um comparativo entre o "preço que o produto está saindo na cotação" e "o preço de venda do produto". Este (%) padrão de frete tem importância neste cálculo, pois este é utilizado para calcular o "preço que o produto está saindo na cotação", o percentual de frete poderá ser alterado e informado por fornecedor na cotação.

**Quantidade de últimas compras do fornecedor para um determinado item:** Esse parâmetro terá o número dos últimos movimentos de compra a serem mostrados no quadro comparativo. Esses movimentos serão por item e por fornecedor. Para visualizar este recurso, deve-se clicar Ctrl + clique no item desejado do quadro comparativo.

**Ordenação dos itens do relatório de pedido de orçamento:** Marcando uma das opções abaixo, o sistema definirá a ordenação com que o pedido de orçamento será impresso.

-   Código do produto;
-   Descrição do produto;
-   Nome fantasia;
-   Descrição auxiliar.

**Condição de pagamento**: Marcando a condição de pagamento por fornecedor, o sistema permitirá que cada um destes fornecedores possam utilizar somente uma condições de pagamento.
Marcando a condição de pagamento por item, o sistema permitirá que cada item cotado utilize uma condição de pagamento diferente do outro.
Se estes itens tiverem a condição de pagamento igual, será gerada apenas uma ordem de compra. Caso estas condições forem diferente para cada item cotado o sistema irá gerar uma ordem para cada um deles.
Estando parametrizada a condição de pagamento por item, o sistema também permitirá que o usuário indique a condição de pagamento para todos os itens de uma cotação.

**Moeda:**

-   Da mesma forma que temos "Condição de pagamento" por item e por fornecedor, também teremos a moeda. Antes de usar "Moeda" por item é necessário que seja marcado este parâmetro.
-   Se há para um mesmo fornecedor itens com moedas diferentes, deverá ser gerada uma ordem de compra para cada um dos itens do fornecedor com moedas diferentes. Estas moedas deverão ser copiadas para as ordens de compra geradas. O usuário deve ficar atento para o fato de que no quadro comparativo os valores dos itens são convertidos para a moeda da cotação. Assim, se um item tem como moeda US$ e valor 10.00, serão 10 dólares. Mas no quadro comparativo este valor será convertido para a moeda da cotação (R$). Mas o preço continua o mesmo, será apenas para motivo de comparação no quadro comparativo de preços.
-   A parametrização pode estar para usar "Condição de pagamento" e "Moeda" por item. A diferença é que a Condição de pagamento é sempre obrigatória e existe a "Condição de pagamento" e "Condição de pagamento negociada". Já a moeda é uma só e não é obrigatória. Quando a moeda não é informada no item, sempre será utilizada a moeda da cotação.

**Editar custo financeiro:** Marcando esta opção o sistema permitirá alterar o percentual de custo financeiro para cálculo da cotação, o sistema já leva como default o percentual informado no campo "Custo Financeiro Padrão (%)". O campo "custo financeiro" na janela de edição de cotação, pasta propriedades, estará habilitado para edição.

**Usar Valor do Frete:** Se o parâmetro estiver marcado, será informado o valor do frete e não o percentual.

**Usar Preço Total no Item**: Marcando este parâmetro o sistema irá apresentar o campo Preço total na grid do produto ao registrar o orçamento.
Também será apresentado o campo Preço total Negociado na grid do produto ao registrar a negociação. Ao informar o valor total, o sistema irá calcular o valor do preço unitário quando a quantidade de itens for maior que um.

**Somente Cotar Produtos Fornecidos:** Se este parâmetro estiver marcado o sistema permitirá o cadastro de orçamento e negociação apenas para produtos fornecidos pelo fornecedor corrente.
***Observação**:* No momento de fazer a cotação, só irão ser sugeridos os fornecedores ativos em todos os produtos. Se o fornecedor não existir em um dos produtos ele também aparecerá na sugestão. Quando um fornecedor estiver inativo para um certo produto, não conseguiremos cotar este produto.

**Usar orçamento via Web**: Marcando essa opção o sistema permitirá que o fornecedor (através de senha enviada por e-mail) acesse o pedido de orçamento via browser e retorne os preços dos produtos para definição da melhor oferta.
Na inclusão de uma cotação, quando for imprimir, deve-se habilitar esta opção "Orçamento via Web".
O sistema enviará para o servidor o orçamento, a cotação ficará com o status de exportada.
O fornecedor receberá um e-mail contendo a senha para acessar este orçamento no RM [Nucleus.com](http://Nucleus.com), este irá informar os valores no RM [Nucleus.com](http://Nucleus.com) e será salvo. O servidor verificará a data limite de resposta e enviará para o TOTVS Gestão de Estoque, Compras e Faturamento todas as cotações que estiverem marcadas para esta data.

**Permite Mudar Qtde. Efetivada:** Marcando esta opção o sistema permitirá que o comprador altere a quantidade efetivada na interferência para um valor superior ou inferior à quantidade do item na cotação. Caso o parâmetro "Permite cotação parcialmente gerada" estiver selecionado, a quantidade não poderá ser alterada para um valor superior.

**Carregar Solicitações Após Filtro**: Se este parâmetro estiver habilitado a seleção das solicitações pendentes para cotação (Assistente de cotação) somente ocorrerá depois que o usuário preencher alguns dos critérios de filtro (Tela : Adicionar Filtro para produto).
Inicialmente a tela de seleção de filtro aparecerá vazia.
Somente depois que forem escolhidos os filtros necessários para a pesquisa e clicando no botão "Atualizar Agora", é que o sistema trará as informações de importância ao usuário.
Com isso, o sistema ganhará em performance no momento de se buscar os itens das solicitações, pois só buscará os que estiverem delimitados no filtro utilizado.

**Permite Cotação Parcialmente Gerada:** Este parâmetro somente poderá ser marcado se o parâmetro "Permite alterar quantidade efetivada" estiver marcado. Se o parâmetro "Permite cotação parcialmente gerada" estiver marcado, o sistema comportará da seguinte forma:

-   Processo não agrupará itens  iguais na ordem de compra gerada, mesmo se o parâmetro "permitir agrupamento de itens  iguais" no tipo de movimento estiver marcado.
-   A quantidade efetivada não poderá ser maior que a quantidade solicitada;
-   Se o usuário alterar o fornecedor da ordem de compra gerada pela cotação, o processo de cancelamento e exclusão de movimento não conseguirá reabrir os itens na cotação. Isso porque, o fornecedor na ordem de compra é usado para localizar o item correspondente na cotação.
-   Se a quantidade de um produto for alterada dentro de uma ordem de compra, essa alteração não refletirá no item da cotação.
-   Os itens dentro de uma cotação poderão ser escolhidos para serem gerados em uma ordem de compra. Para escolher os itens, clique em Composição / itens de movimentos. Os itens somente poderão ser escolhidos quando a cotação estiver em estado de "Negociação da melhor oferta".
-   O comprador poderá também mudar a quantidade a ser comprada para um determinado item de produto. Para isso, ele deverá usar o recurso de "Interferência" mudando a quantidade efetivada.
-   Os itens que já foram totalmente gerados, não poderão ser mais alterados pelo comprador na tela de cotação.
-   No processo de cancelamento e exclusão de itens na ordem compra original ou desdobrada, os itens referentes à cotação serão reabertos conforme a quantidade do item no movimento.

**Buscar Condição de Pagamento do Cliente/Fornecedor:** Se este parâmetro estiver marcado o sistema buscará a condição de pagamento default cadastrada na tabela de Cliente/Fornecedor.

**Enviar e-mail do Quadro Comparativo:** Marcando esta opção o botão de envio de e-mail do quadro comparativo ficará habilitado na visão de cotação. Se este não estiver marcado, o sistema deixará desabilitado o botão e não será possível enviá-lo por e-mail.

**Usar Tributo no Orçamento:** Marcando esta opção, o campo de tributo (ICMS) estará habilitado na visão de registro de orçamento na cotação e quando informado, será levado para os movimentos gerados como ordens de compra.

**Usar Tributo no item de Orçamento:** Marcando esta opção, o campo de tributo (IPI) estará habilitado na visão de registro de orçamento na cotação e quando informado, será levado para os itens de movimento gerados nas ordens de compra.
***Observação**:* Ao selecionar a opção Usar Tributo no Orçamento a opção Usar Tributo no item de Orçamento é desativada, ou seja, as opções não poderão ser marcadas simultaneamente.

**Usar Tipo de Julgamento da Melhor Oferta**: Marcando esta opção, será disponibilizada no assistente para nova cotação dois tipos de julgamento para melhor oferta; Por produto (como sempre foi utilizado) e Global (por fornecedor).
No assistente de cotação, caso esteja parametrizado para usar o tipo de julgamento, o usuário deverá escolher o tipo de julgamento.
Caso o Global seja escolhido, no quadro comparativo do orçamento, será mostrada a melhor oferta por fornecedor e não por produto.
Entretanto isto será feito somente se pelo menos um fornecedor cotar todos os itens, pois não há sentido em se fazer uma oferta por fornecedor se este não cota todos os produtos (é mostrada uma mensagem de erro caso este fornecedor não exista).
Também se o julgamento é global não será permitido fazer interferência nos itens (duplo clique sobre o item no quadro comparativo).
O indicador de melhor oferta (número 100 em azul) não aparecerá caso não haja nenhum fornecedor que cote todos os produtos.

**Permite alterar tipo de movimento ao gerar ordem de compra:** Marcando esta opção, o sistema apresentará a dialog para escolha de tipo de movimento a ser gerado para a ordem de compra. Com este parâmetro desmarcado, a cotação será gerada sempre diretamente, respeitando o tipo de movimento parametrizado em Opções/Parâmetros/Tipos de Movimento/Integração Compras/Movimento gerado.

**Usar ICMS no item de Orçamento:** Marcando este parâmetro, o sistema funcionará da seguinte forma:
Diferença de ICMS se usar ICMS por item de Orçamento: Diferença de ICMS = 1 + (Tributação Local da Cotação(Coligada corrente) - ICMS do Item)/100
Se Usar ICMS por Fornecedor:
Diferença de ICMS = 1 + Dif. de Tributação do Fornecedor/100
Se o Frete For informado em Valor ele será rateado:

-   Valor do Frete Rateado = (Valor Equalizado/Valor Final Total) \* Valor do Frete do Fornecedor
-   Valor Homogêneo = ((Valor Equalizado + IPI) + (Valor Equalizado \* PercDespesa/100) + (Valor do Frete Rateado) +   (Valor da despesa Rateada) - Desconto - (Valor do Desconto Rateado)) \* Diferença de ICMS

 Se o Frete não For informado em Valor:

-   Valor Homogêneo
    ![Resultado de imagem para sinal de igual png](http://pngimg.com/uploads/equals/equals_PNG41.png)
     ((Valor Equalizado 
    ![(plus)](https://centraldeatendimento.totvs.com/s/5bn9pn/8804/xgjkrn/_/images/icons/emoticons/add.svg)
     IPI) 
    ![(plus)](https://centraldeatendimento.totvs.com/s/5bn9pn/8804/xgjkrn/_/images/icons/emoticons/add.svg)
     (Valor Equalizado 
    ![(error)](https://centraldeatendimento.totvs.com/s/5bn9pn/8804/xgjkrn/_/images/icons/emoticons/error.svg)
     (Valor do Frete do Fornecedor
    ![Imagem](https://images.emojiterra.com/twitter/v11/512px/2797.png)
     100)) 
    ![(plus)](https://centraldeatendimento.totvs.com/s/5bn9pn/8804/xgjkrn/_/images/icons/emoticons/add.svg)
     (Valor Equalizado 
    ![(error)](https://centraldeatendimento.totvs.com/s/5bn9pn/8804/xgjkrn/_/images/icons/emoticons/error.svg)
     PercDespesa
    ![Imagem](https://images.emojiterra.com/twitter/v11/512px/2797.png)
     100) 
    ![(plus)](https://centraldeatendimento.totvs.com/s/5bn9pn/8804/xgjkrn/_/images/icons/emoticons/add.svg)
     (Valor da despesa Rateada) 
    ![(minus)](https://centraldeatendimento.totvs.com/s/5bn9pn/8804/xgjkrn/_/images/icons/emoticons/forbidden.svg)
     Desconto 
    ![(minus)](https://centraldeatendimento.totvs.com/s/5bn9pn/8804/xgjkrn/_/images/icons/emoticons/forbidden.svg)
     (Valor do Desconto Rateado)) 
    ![(error)](https://centraldeatendimento.totvs.com/s/5bn9pn/8804/xgjkrn/_/images/icons/emoticons/error.svg)
     Diferença de ICMS

**Permite Inserção de Itens Durante a Cotação:** Marcando esta opção o sistema permitirá que itens sejam inseridos na cotação mesmo depois de passarmos pelo assistente de cotação.

**Permite Alíquota Fixa Diferencial:** Ao marcar este parâmetro, o sistema exibirá o campo Alíquota Fixa Diferencial ao informar o orçamento do item da cotação.  O usuário poderá marcar este campo para indicar que a alíquota do item será fixa ou deixar desmarcado para indicar que a alíquota não será fixada.

**Permite Alterar Unidade na Cotação:** Permite que o usuário edite unidade de cotação durante a inclusão de orçamentos do fornecedor, permitindo que a empresa consiga melhores preços comprando caixas fechadas ao invés de produtos avulsos, por exemplo. 

**Condição de Pagamento Obrigatória na Inclusão de Cotação:** Se este parâmetro estiver marcado , o campo Condição de Pagamento será obrigatório no Assistente de Cotação, etapa Informações Gerais. Por padrão, o campo vem preenchido com a condição de pagamento utilizada pela última cotação da coligada logada.
Este parâmetro também será considerado ao registrar orçamento e registrar negociação. Nessas rotinas a condição de pagamento será obrigatória e preenchida default.
Quando o parâmetro estiver desmarcado será permitido:

-   Incluir cotação sem informar condição de pagamento no Assistente de Inclusão de Cotação.
-   Incluir Fornecedor na cotação sem informar condição de pagamento.

***Observação***: Irá  carregar condição de pagamento somente quando o parâmetro estiver marcado.

**Usar Marca de Produto na Cotação:** Através desse parâmetro será possível trabalhar com marca na cotação, permitindo que o usuário escolha ou troque a marca do produto através dos campos Marca Orçada no Orçamento e Marca Negociada na Negociação.
Quando este parâmetro estiver habilitado, os seguintes campos serão exibidos, de acordo com a permissão de Usuário:

-   No Assistente de Inclusão de Cotação, etapa de Filtro de Produto: Cód.Marca e Marca Solicitada.
-   Na tela de Registrar Orçamento, pasta Produtos: Cód.Marca, Marca Solicitada, Marca Orçada.
-   Na tela de Registrar Negociação, pasta Produtos: Cód.Marca, Marca Solicitada, Marca Orçada, Marca Negociada.

***Observações:*Os** campos Cód.Marca e Marca Solicitada não permitem edição. Se o parâmetro "Não Agrupar Itens Iguais" estiver desmarcado, o parâmetro Usar Marca de Produto na Cotação ficará desabilitado, não sendo possível selecioná-lo.

**Cotar Itens de Uma Única Solicitação de Compra:** Utilizando este parâmetro o usuário só poderá cotar itens de uma, e somente uma solicitação de compra. Neste caso, vários dados do movimento de solicitação que não podiam ser copiados para o movimento de ordem de compra via cotação (campos livres, mensagens, observação, campos complementares, data extra 1, data extra 2, rateio de centro de custo/departamento do movimento – mesmo que rateio por item não esteja sendo usado – segundo número e local de entrega) poderão ser copiados.

**Vincular 2º Número da Cotação com 2º da Solicitação:**

-   Este parâmetro só poderá ser habilitado se o parâmetro "Cotar itens de uma única solicitação de compra" estiver habilitado.
-   Vincular 2º número da cotação com 2º da solicitação significa que o segundo número da solicitação de compras será copiado para o segundo número da cotação, podendo ser consultado no assistente no fim do processo de criação da cotação. Na própria cotação, na aba Propriedades/Resumo da cotação ou também em relatórios: Quadro Comparativo e Pedido de Orçamento.

**Código do Produto:** Este campo dará a opção de escolha de qual tipo de código estará aparecendo durante todo o processo de cotação. Os tipos de código que poderão ser parametrizados são: Código principal, reduzido e número no fabricante. O tipo de código escolhido estará visível tanto na resposta de orçamento, impressão de relatórios quanto nos relatórios de envio de e-mail.
***Observação**:* O código do fabricante é exibido na Resposta de Orçamento da cotação caso o Código do Produto seja 'Número no Fabricante'.

**Utiliza Fornecedores Qualificados:**

-   Não Utiliza: o sistema não irá trabalhar com controle de Qualificação de Fornecedores na Cotação.
-   Utiliza apenas Fornecedores Qualificados:Irá permitir que a Cotação utilize somente fornecedores com status "Qualificado", de acordo com o controle de Qualificação de Fornecedores.
-   Utiliza Fornecedores Qualificados e Não Qualificados: Irá permitir que a Cotação utilize fornecedores com status "Qualificado" e também "Não Qualificado".

**Utiliza Filial e Local de Estoque no Orçamento\\Negociação**

Após parametrizar, o sistema exibirá novos campos para se informar Filial e Local de Estoque na tela de Registrar Orçamento por fornecedor.
OBS: os campos para Filial e Local de Estoque, só estarão definidos para Preenchimento Obrigatório, caso a opção Utiliza do Orçamento Obrigatoriamente esteja selecionada no parâmetros descrito acima.

Durante a inclusão da cotação, se o sistema estiver parametrizado (**Utiliza Filial/Local de Estoque no Orçamento/Negociação** com valor igual a **Utiliza do Orçamento** ou **Utiliza do Orçamento Obrigatoriamente)** e todas as solicitações possuírem a mesma **Filial/Local de estoque**, o sistema utilizará tais informações como default no cadastro de orçamento.


Durante a geração da ordem de Compra se for preenchido a Filial e Local de estoque Orçamento/Negociação a Ordem de compra deverá ser gerada para a filial definida, caso contrário deverá seguir a regra atual do sistema.

Importante: O default de local de estoque não será aplicado quando o sistema estiver parametrizado para utilizar local de estoque por item.

**Central de Compras:** Nesta caixa define-se qual a condição da coligada logada quando parametrizada para Central de compras:

-   Central de compras.
-   Participante de central de compras.
-   Não utiliza central de compras.

**Campos Item Orçamento/Negociação disponíveis:** Nesta caixa serão apresentados todos os campos disponíveis para que o usuário selecione quais ficarão visíveis ao registrar orçamento/negociação.

**Campos Item Orçamento/Negociação visíveis:** Nesta caixa serão apresentados todos os campos selecionados pelo usuário para que sejam exibidos ao registrar orçamento/negociação.
Os campos do [produto](https://tdn.totvs.com/pages/viewpage.action?pageId=423938817) [](/pages/viewpage.action?pageId=423938817)disponíveis são:

-   **Nome Fantasia:** Ficará visível somente se nos [parâmetros do produto](https://tdn.totvs.com/pages/viewpage.action?pageId=423938842)[,](#) o campo Descrição do Produto estiver diferente de Descrição.
-   **Descrição:** Ficará visível somente se nos parâmetros do Produto, o campo Descrição do Produto estiver diferente de Nome Fantasia.
-   **Descrição Auxiliar:** Ficará visível somente se nos parâmetros do Produto, campo Descrição do Produto estiver diferente de Descrição Auxiliar.
-   **Código do Produto**: Ficará visível no item de orçamento/negociação somente se o parâmetro Código do Produto, na etapa Definições Gerais 3/5, estiver diferente de Código Principal.
-   **Código Reduzido**: Ficará visível somente se nos parâmetros do Produto, o campo Usa Código Reduzido estiver diferente de Não Utilizar e o parâmetro Código do Produto, na etapa Definições Gerais 3/5, estiver diferente de Código Reduzido.
-   **Código Auxiliar**: Ficará visível no item de orçamento/negociação somente se o parâmetro Código do Produto, na etapa Definições Gerais 3/5, estiver diferente de Código Auxiliar.
-   **Número no Fabricante**: Ficará visível no item de orçamento/negociação somente se o parâmetro Código do Produto, na etapa Definições Gerais 3/5, estiver diferente de Número no Fabricante.
-   **Campos Livres 1,2 e 3:** Deverá ser previamente parametrizado nos campos opcionais do Produto.

Os campos do item de movimento disponíveis são:

-   **Campo Livre:** Deverá ser previamente configurado nos [parâmetros do item de movimento](https://tdn.totvs.com/pages/viewpage.action?pageId=423938265)de solicitação de compras
-   **Campos Complementares:** Deverão ser previamente configurados nos parâmetros do item de movimento de solicitação de compras.
-   **Tabelas de Classificação 1,2,3,4 e 5:** Ficará visível no item de orçamento/negociação a descrição das tabelas de classificação informada no item de movimento de solicitação de compras. Mesmo que o tipo de movimento não esteja parametrizado para usar as tabelas de classificação, as mesmas serão exibidas no item de orçamento/negociação, porém, sem a informação.
-   **Histórico Curto e Longo:** Deverão ser previamente configurados nos parâmetros do item de movimento de solicitação de compras.

Ao registrar orçamento ou negociação, na aba Produtos, os campos parametrizados como visíveis serão exibidos, mas não poderão ser editados.

**Utiliza Data de Validade do Orçamento:** Através desse parâmetro será possível que o fornecedor informe uma data de validade para o orçamento. São possíveis as seguintes configurações de exibição:

-   **Não utiliza:** A data de validade não será exibida no Portal do Fornecedor.
-   **Utiliza Data de Validade do Orçamento:** A data de validade estará disponível para preenchimento no Portal do Fornecedor.
-   **Utiliza Data de Validade do Orçamento Obrigatoriamente:** A data de validade será de preenchimento obrigatório no Portal do Fornecedor.

-   [Portal do Fornecedor](# "Portal do Fornecedor")
-   [Aprovação por Workflow](# "Aprovação por Workflow")

Anexos



**Quantidade máxima de arquivos:** Definição da quantidade máxima de arquivos anexados em um orçamento no Portal do Fornecedor.

Informações

-   Por default, a quantidade máxima é definida como 0 (zero), desta forma a opção de anexo não é apresentada no portal. O recurso ficará disponível para o fornecedor, quando a quantidade estiver parametrizada com um número maior que 0 (zero).
-   O limite máximo permitido pelo sistema é de até 5 arquivos.



**Tamanho máximo do arquivo:** Definição do tamanho máximo permitido para cada arquivo anexado em um orçamento no Portal do Fornecedor. 

Informações

-   O limite máximo permitido pelo sistema é de até 10mb.



**Extensões de arquivos permitidas:** Extensões de arquivos permitidas para envio através do anexo no Portal do Fornecedor. 

Informações

-   O sistema sempre permitirá a extensão PDF.

Acesso



**Código de Acesso**: Será utilizado pelo usuário interno do RM para acesso a base de dados.



**Perfil do Usuário**: O perfil definido nesta parametrização deverá estar devidamente configurado para permitir que o fornecedor acesso os cadastros disponíveis no portal, como exemplo: produto, unidade, transportadora, marca, etc.

[Clique aqui](https://tdn.totvs.com/pages/viewpage.action?pageId=639955763#Configuracoes-1410820420) para mais informações das permissões necessárias 





**Permitir que o fornecedor, informe o seu código do produto cotado (tradução):  Ao marca-lo, será apresentado para o fornecedor o campo de Código do Produto:** 

**Marcado**: Apresenta para o fornecedor o campo Código do produto. Caso o produto ainda não possua tradução, o campo é apresentado vazio. Caso contrario, será apresentado com a ultima tradução realizada. Em ambas as situações, o fornecedor pode preencher o código, caso preencha com um código que ainda não esteja cadastrado na tradução, o cadastro será realizado.

**Desmarcado**: O campo Código do produto não será apresentado para o fornecedor.

**Importante:** A partir da versão 12.1.2302 

Integração Cotação x TOTVS Aprovação e Atendimento



**Coligada do Atendimento**: É possível selecionar uma Coligada diferente da qual a cotação será gerada para ser aprovada no TOTVS Aprovação e Atendimento. Neste caso a cotação poderá ser gerada na coligada 1, e o atendimento aprovado na coligada 2, por exemplo.

Informações

-   Ao marcar o parâmetro Coligada Centralizadora, o sistema permite que qualquer coligada do sistema possa ser utilizada para geração do atendimento.

Os demais campos apenas definem as características do atendimento que será utilizado para a aprovação da cotação, são eles:

-   **Grupo de Atendimento**
-   **Tipo de Atendimento**
-   **Classificação**
-   **Prioridade**

-   [Movimentos 1/2](# "Movimentos 1/2")
-   [Movimentos 2/2](# "Movimentos 2/2")

**Gera Movimento por Centro de Custo:** Marcando este parâmetro o sistema permitirá a quebra de movimentos por centro de custo. Caso existam duas solicitações de compra (cada uma com o centro de custo diferente da outra) e que seja gerado só um movimento, o sistema vai gerar duas ordens de compra com os centros de custos cadastrados nas solicitações.

**Gera Movimento por Departamento:** Se esse parâmetro estiver marcado, o sistema irá quebrar movimentos por departamento. Caso existam duas solicitações de compra (cada uma com um departamento diferente da outra) e que seja gerado só um movimento, o sistema vai gerar duas ordens de compra com os departamentos cadastrados nas solicitações.

**Gera Movimento por Local de Entrega:** Se esse parâmetro estiver marcado, o sistema irá quebrar movimentos por local de entrega. Caso existam duas solicitações de compra (cada uma com um local de entrega diferente da outra) e que seja gerado só um movimento, o sistema vai gerar duas ordens de compra com os locais de entrega cadastrados nas solicitações.

**Gera Movimento por Local de Estoque:** Se esse parâmetro estiver marcado, o sistema irá quebrar movimentos por local de estoque. Caso existam duas solicitações de compra (cada uma com um local de estoque diferente da outra) e que seja gerado só um movimento, o sistema vai gerar duas ordens de compra com os locais de estoque cadastrados nas solicitações.

**Não agrupar itens iguais na cotação:** Marcando este parâmetro o sistema permitirá que itens iguais em uma cotação sejam cadastrados com preços diferentes e não sejam agrupados quando for gerada a ordem de compra. Quando houver uma cotação com itens repetidos, somente será agrupada ao gerar o relatório de Pedido de Orçamento via e-mail, caso os seguintes critérios sejam verificados anteriormente:

-   A opção 'Não Agrupar itens Iguais na Cotação' deve estar desmarcada.
-   Só serão agrupados os itens que pertencerem a mesma solicitação de Compra.

***Observações**:*

-   Ao utilizar unidades diferentes para um mesmo item na cotação, é preciso que o parâmetro acima esteja marcado, assim, o quadro comparativo e a ordem de compra serão gerados corretamente.
-   O campo "movimento de origem "só estará disponível na pasta negociação e orçamento se o campo "Não agrupar itens iguais na cotação" estiver marcado.
-   Este campo ficará desabilitado caso o campo Permitir cotação parcialmente gerada' estiver marcado.

Ao Usar Marca de Produto na Cotação, é preciso que o parâmetro acima esteja marcado, pois não será possível agrupar itens que usem mesma marca na cotação.

**Usa Preço Máximo por Item:** Marcando este parâmetro o sistema fará uma consistência sobre o valor cadastrado para o item na solicitação de compra, não deixando com que gere a ordem de compra caso este mesmo item estiver com o preço acima no registro de orçamento.

**Copiar Histórico do item da Solicitação para os itens da Cotação:** Marcando este parâmetro o sistema permitirá a cópia do histórico do item da solicitação de compra para o campo observação, dentro do diálogo de "Registrar Orçamento".

**Inclui Histórico dos itens  em uma Ordem de Compra de um Fornecedor já Existente:** Marcando este parâmetro o sistema permitirá a inclusão do histórico do item em uma ordem de compra de um fornecedor já existente.

**Inclui item em uma Ordem de Compra de um Fornecedor já Existente:** Marcando este parâmetro o sistema permitirá a inclusão de item em uma ordem de compra de um fornecedor já existente. Um novo diálogo será aberto se este parâmetro estiver setado para que se defina para qual fornecedor será enviado o item.

**Cópia de Mensagem / Histórico para Ordem de Compra:** Marcando uma das opções abaixo o sistema definirá se será feita a cópia do histórico ou mensagem da solicitação de compra para a ordem de compra. Além disso, pode-se decidir por não copiar nenhuma das duas opções:

-   Não Copiar;
-   Mensagem da Cotação;
-   Histórico da Solicitação de compra.

**Cópia de Dados para o Histórico do Item da Ordem de Compra:**

-   Marcando a opção "Histórico do item da solicitação de compra", o sistema copiará para a ordem de compra gerada por cotação, os dados que foram incluídos no histórico do item da solicitação de compra. 
-   Marcando a opção "Observação do item da cotação", o sistema copiará para a ordem de compra gerada por cotação, os dados que foram incluídos na observação do item da cotação no momento de registrar orçamento.

-   [Fornecedores 1/2](# "Fornecedores 1/2")
-   [Fornecedores 2/2](# "Fornecedores 2/2")

**Número máximo de fornecedores na cotação:** Marcando este parâmetro, teremos um limite máximo para a quantidade de fornecedores que estarão participando do processo de cotação. Caso a quantidade de fornecedores ultrapasse o limite máximo parametrizado, a cotação não poderá ser finalizada.

**Usar contato no Fornecedor no envio de ordem de compra:** Marcando essa opção, o sistema enviará a ordem de compra não só aos fornecedores da cotação, mas também aos contatos cadastrados dentro de cada fornecedor. Para se cadastrar estes contatos, deve-se seguir: Cadastro/Cliente-Fornecedor/Contatos.

**Número mínimo de fornecedores na cotação:** Marcando este parâmetro, teremos um limite mínimo para a quantidade de fornecedores que estarão participando do processo de cotação. Caso a quantidade de fornecedores seja menor que o mínimo parametrizado, a cotação não poderá ser finalizada.

**Permitir exclusão de Fornecedores durante a cotação:** Marcando este parâmetro o sistema permitirá que se exclua fornecedores de uma cotação. Diferente da inserção de fornecedores, a exclusão deverá ser feita clicando o com o botão direito do mouse sobre o fornecedor que deseja excluir e não através de um ícone.

**Usar Fornecedor Prioritário:** Marcando este parâmetro o sistema permitirá que se definam os fornecedores prioritários para a cotação, sem que tenha que escolhê-los sempre que estiver no assistente para nova cotação. No caso dos fornecedores opcionais a seleção será manual. A parametrização deve ser feita em Opções/Parâmetros/Cotações/Fornecedores/Usar Fornecedor Prioritário. Além dessa parametrização, deve-se cadastrar para cada produto, os fornecedores prioritários em Cadastro/Produtos/Clientes/Fornecedores.

**Usar contato no Fornecedor no envio de pedido de orçamento:** Marcando essa opção, o sistema enviará o pedido de orçamento não só aos fornecedores da cotação mas também aos contatos cadastrados dentro de cada fornecedor. Para se cadastrar estes contatos, deve-se seguir: Cadastro/Cliente-Fornecedor/Contatos.

**Número Máximo de Fornecedores em Últimas Cotações:** Neste campo você indicará ao sistema quantos diferentes fornecedores deverão ser selecionados para as cotações. O sistema selecionará fornecedores entre as últimas cotações executadas para o produto, até que chegue ao número máximo indicado neste campo.

-   Exemplo*:* Vamos supor que informou neste campo "5" e para o produto as cotações anteriores são:



Nº da Cotação

 Data Fornecedor 1 

Fornecedor 2 

Fornecedor 3

07 01/06/99         

F00001                      

F00003               

F00005

06 01/05/99

F00001                      

F00003               

F00005

05 01/04/99 

F00001                      

F00003               

F00005

04 01/03/99 

F00003                      

F00005               

F00006

03 01/02/99 

F00001                                     

F00003

F00005

02 01/01/99

F00001                                     

F00006               

F00008

01 01/12/98

F00001                                     

F00010               

F00011

Neste caso o sistema vai verificando a partir da cotação anterior à que está incluindo os fornecedores que participaram das mesmas, neste exemplo, para o produto houve 7 cotações e os seguintes fornecedores serão selecionados:

-   F00001, F00003, F00005, F00006 e F00008.
-   Note que os fornecedores F00010 e F00011 não entraram na seleção porque, só participaram da cotação número 01 e depois desta outros 5 fornecedores participaram das últimas cotações.
-   Ainda utilizando o exemplo anterior, se informou que o número máximo é 4, o F00008 não será selecionado pelo sistema.
-   Se informar 10, serão selecionados todos os fornecedores e ainda ficará faltando dois, porém, somente 7 fornecedores diferentes participaram das últimas cotações.

**Número Máximo de Fornecedores nas Últimas Compras:** Neste campo você indicará ao sistema quantos diferentes fornecedores deverão ser selecionados para as cotações. O sistema selecionará fornecedores entre as últimas compras executadas para o produto, até que chegue ao número máximo indicado neste campo. O sistema selecionará todos os movimentos que sejam "Pedido de Compra" e estas serão ordenadas com base na data de emissão. Desta forma, selecionaremos todos os fornecedores que participaram de uma compra mesmo as que não tiveram cotação.
***Observação**:* Os movimentos "Pedido de Compra" que serão selecionados, são todos aqueles que nos Parâmetros dos Tipos de Movimentos/pasta Integração Compras, tem o campo "Pedido de Compra" marcado.
Exemplo*:* Vamos supor que para o produto 1.01 as compras efetuadas através de cotações ou diretamente sem passar por este processo são as seguintes, por ordem decrescente de emissão:



Data         

Fornecedor

01/06/99   

F00001

01/05/99

F00001

01/04/99

F00003

01/03/99

F00003

01/02/99

F00004

01/01/99

F00007

01/12/98 

F00008

01/11/98

F00001

01/10/98   

F00010

01/09/98  

F00001

Se informar neste campo:

-   2: os fornecedores F00001 e F00003 serão selecionados.
-   3: F00001, F00003 e F00004 serão selecionados.
-   4: F00001, F00003, F00004 e F00007 serão selecionados.
-   5: F00001, F00003, F00004, F00007 e F00008 serão selecionados.

 Note que quando informamos 5 o fornecedor F00010 ficou de fora pois, ele é o 6º fornecedor diferente, ele só seria selecionado se a quantidade informada for 6 ou mais.

**Permitir inserção de Fornecedores durante a cotação:** Marcando este parâmetro antes de gerar as ordens de compra na cotação, o sistema permitirá a inclusão de mais fornecedores à mesma. Para isso, foi criado um novo ícone na janela de edição de cotação, "Incluir fornecedor na cotação", ele só estará disponível se este parâmetro estiver habilitado.

-   [Orçamento 1/2](# "Orçamento 1/2")
-   [Orçamento 2/2](# "Orçamento 2/2")

**Usa Desconto no Orçamento:** Utilizando esta opção será possível dar desconto para o preço total do orçamento. O desconto poderá ser dado na forma de valor ou percentual, obedecendo a forma que for parametrizado o sistema. Quando este parâmetro estiver selecionado, o campo de desconto aparecerá na tela de registro de orçamento, pasta geral.

**Usa Desconto no Item de Orçamento:** Utilizando esta opção, será possível dar desconto para o preço do item de orçamento. O desconto poderá ser dado na forma de valor ou percentual, obedecendo a forma que for parametrizado o sistema. Quando este parâmetro estiver selecionado, o campo de desconto aparecerá habilitado na tela de registro de orçamento, pasta produtos.

**Usa Despesa no Item de Orçamento:** Utilizando esta opção, será possível usar despesa para o preço do item de orçamento. A despesa poderá ser usada na forma de valor ou percentual, obedecendo a forma que for parametrizada no sistema. Quando este parâmetro estiver selecionado, o campo de despesa aparecerá habilitado na tela de registro de orçamento, pasta produtos.

**Texto do Corpo do E-mail no Pedido de Orçamento:** Este campo servirá para inclusão de uma breve descrição (até 250 caracteres) referentes ao pedido de orçamento que será colocada no corpo do e-mail.

**Texto do Corpo do E-mail para Ordem de Compra:** Este campo servirá para inclusão de uma breve descrição (até 250 caracteres) referentes a ordem de compra que será colocada no corpo do e-mail.

**Relatório Padrão para Pedido de Orçamento (E-mail):** Selecionando algum relatório neste parâmetro, este estará como default no momento de comunicar os fornecedores via e-mail na cotação.

**Relatório Padrão para Pedido Orçamento (E-mail) .Net:** Neste campo é possível selecionar um relatório .Net. O mesmo será default no momento de comunicar os fornecedores via e-mail, se o campo Novo Gerador .Net estiver marcado.

**Relatório Padrão para Pedido de Orçamento (WEB):** Selecionando algum relatório neste parâmetro, este estará como default no momento de Exportar Orçamento para Web na cotação.

**Relatório Padrão para Pedido de Orçamento (WEB) .Net:** Ao selecionar um relatório .Net neste campo, o mesmo será default no momento de Exportar Orçamento para Web, se o campo Novo Gerador .Net estiver marcado.

**Relatório Padrão para Pedido Orçamento:** Neste campo pode-se definir um relatório do tipo pedido de orçamento como sendo padrão. Este será default ao Imprimir Orçamento.

**Relatório Padrão para Pedido Orçamento .Net:** Ao selecionar um relatório .Net neste campo, o mesmo será default ao Imprimir Orçamento na cotação, se o campo Novo Gerador .Net estiver marcado.

**Cabeçalho do Pedido de Orçamento:** Informe se desejar, um cabeçalho para o relatório de Pedido de Orçamento impresso na cotação, caso não seja informado nenhum cabeçalho o sistema emitirá o cabeçalho fixo "Pedido de Orçamento".

**Observação do Pedido de Orçamento:** Informe se desejar uma observação que deverá ser impressa no Pedido de Orçamento no campo Observação.

**Relatório de Quadro Comparativo Default:** Neste campo pode-se definir um relatório default que será utilizado na cotação ao Imprimir Quadro Comparativo de Preços e no Envio de Quadro Comparativo via E-mail.

**Relatório de Quadro Comparativo Default .Net:** Ao definir um relatório .Net neste parâmetro, o mesmo será utilizado ao Imprimir Quadro Comparativo de Preços e no Envio de Quadro Comparativo via E-mail, se o campo Gerador .Net estiver marcado.



* * *

**Processos**

-   [Cópia de Parâmetros da Cotação para Filiais](/pages/viewpage.action?pageId=746495276)
