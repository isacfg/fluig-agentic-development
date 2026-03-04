# Parâmetros de Compra e Venda

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=423938835](https://tdn.totvs.com/pages/releaseview.action?pageId=423938835)
> **Domínio:** TDN (TOTVS Developer Network)

---

Esse parâmetro ficará visivel para mvoimentos do tipo 1.1, 2.1 ou 3.1

**![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938835/image_preview.png?version=1&modificationDate=1551362152267&api=v2)
Compra/Venda - Outras** **Características**

**Gera Movimento de Venda / Compra:** Marque esta opção se o tipo de movimento poderá gerar um movimento do tipo 2.2 (para de vendas) ou do tipo 1.2 (para compras). Marcando a opção acima, os seguintes campos serão habilitados para parametrização:

Opção de Faturamento:

-   Com seleção do Tipo de Movimento: Na geração do movimento serão mostrados os Tipos de Movimentos disponíveis. Selecione um e logo após será aberta a dialog do movimento para que se possa fazer a confirmação.
-   Sem seleção do Tipo de Movimento: Aparecerá a dialog do movimento para a confirmação da geração do movimento (do tipo definido como default).
-   Automático: Marcando esta opção, não será aberta a dialog do movimento nem a tela com os tipos de movimentos. Aparecerá somente uma mensagem para a confirmação da geração (do tipo definido como default).
-   Com seleção especifica de tipo de Movimento: Esta opção tem como principal funcionalidade permitir ao usuário selecionar os movimentos possíveis para Faturamento/Recebimento especificamente para os tipos de movimentos. Ou seja, cada tipo de movimento poderá restringir os tipos que poderão ser faturados / recebidos.
-   Automático Com seleção específica de tipo de Movimento: Esta opção permite selecionar os movimentos possíveis para o Faturamento / Recebimento especificamente para os tipos de movimentos, ou seja, cada tipo de movimento poderá restringir os tipos que poderão ser faturados / recebidos. Será apresentada a mensagem para a confirmação da geração.

***Observações**:*

-   Para utilizar a opção automático ou automático com seleção especifica de tipo de movimento, é preciso que no tipo de movimento a ser gerado a "numeração" esteja setada como mostra.
-   Para utilizar a opção 'Com seleção especifica de tipo de movimento', primeiro deverá escolher os movimentos na grid do lado esquerdo e posteriormente clicar no botão. Automaticamente estarão disponíveis para seleção (lado direito da Tela). 
-   Para escolher o movimento default basta um clique duplo sob o mesmo.

Caso queira remover algum tipo de movimento da seleção, basta selecioná-lo e clicar no botão para retirá-lo. Lembrando que se o tipo de movimento estiver como default, este não poderá ser removido da seleção. 

Ao realizar o Faturamento/Recebimento de um tipo de movimento configurado conforme estes novos recursos, o aplicativo mostrará na grid de seleção de tipo de movimentos apenas aqueles selecionados especificamente para o tipo de movimento em questão. E posicionará automaticamente no movimento default.

Exemplo*:*  Um pedido de cliente ao ser faturado irá gerar uma venda de Nota Fiscal Fatura.

**Lançamentos Pedido Desdobrado:**

-   Neste campo você indicará qual a forma que o sistema deverá tratar lançamentos gerados para o TOTVS Gestão Financeira para os pedidos desdobrados.
-   Movimentos que geram lançamentos para o TOTVS Gestão Financeira deverão estar como o campo "Fatura o Movimento", na pasta Faturamento/Outros Dados marcado. Ou seja, sempre que um pedido deste tipo for incluído, deverá ser gerado lançamento para o TOTVS Gestão Financeira.

As opções para este campo são:

-   Não Gerar: Lançamentos desdobrados não irão gerar lançamentos para o TOTVS Gestão Financeira.
-   Gerar: O sistema irá gerar lançamentos para o TOTVS Gestão Financeira para o pedido desdobrado.
-   Copiar: Selecionando esta opção, o sistema copiará os lançamentos do pedido original para o desdobrado e ainda no desdobramento, o usuário poderá escolher quais lançamentos serão salvos, pois os lançamentos serão maiores em relação ao valor do movimento desdobrado. Aqueles lançamentos que não são selecionados serão excluídos no 'OK' na tela de lançamentos.

***Observações**:* O sistema verificará se o valor total dos lançamentos selecionados para permanecerem no pedido desdobrado é igual ao valor a ratear para os lançamentos. Isto é verificado tanto no 'OK' de lançamentos como no 'OK' do movimento. Marcando esta opção, será desabitada a opção de desdobramento automático. Portanto, o sistema sempre abrirá a tela de edição do movimento desdobrado. No movimento gerado através do recebimento/faturamento do pedido, você deve-se indicar qual a condição de pagamento do mesmo.
Exemplo*:*

-   Vamos supor que há um pedido com condição de pagamento com 3 parcelas iguais, sendo uma à vista e as demais em 30 e 60 dias. O valor total do pedido é R$ 60,00. No pedido, o sistema calculará 3 parcelas de R$ 20,00, supondo que recebeu R$ 20,00 e desdobrou 40. Se esta parcela de R$ 20,00 for paga à vista, no movimento gerado você deverá indicar a condição de pagamento que calcula somente uma parcela, pois, se deixar a condição copiada do pedido, ou seja, 3 parcelas, no movimento o sistema dividirá os R$ 20,00 em três.
-   No estorno de um faturamento, você deverá refazer o previsionamento no pedido reaberto. Isto porque as quantidades são alteradas no estorno, uma vez que o pedido já foi desdobrado, de modo que não se pode manter o previsionamento anterior. Ao estornar, os lançamentos são regerados de acordo com a condição de pagamento e o usuário deverá acertá-la como desejado.

***Observações**:* O sistema não altera o valor do lançamento gerado pelo pedido que originou o desdobramento. Os campos descritos a seguir são parâmetros exclusivos de movimentos do grupo 1.1 (compras). Portanto, só aparecerão na pasta Integração Compras.

**Movimento Gerado (Default):** Informe neste parâmetro o movimento a ser gerado por default, ele será exibido no momento do faturamento do movimento, com possibilidade de escolher outros movimentos disponíveis para o faturamento. 

**Baixar Pedido de Compras/Vendas após Geração:**

-   Não Baixa: após a geração do movimento, o pedido não será baixado.
-   Baixa sempre: após a geração do movimento, o pedido será baixado automaticamente.
-   Baixa para movimento default: após a geração do movimento, o pedido só será baixado se o movimento gerado for o informado no campo "Movimento Gerado Default".
-   Baixa para grupo de movimento: o pedido só será baixado se o movimento gerado fizer parte do grupo do movimento default.

Exemplo*:*

-   O grupo de movimento está relacionado a classe do tipo de movimento.
-   Movimento de Compras: Pedido de Compras, Movimento de Compras.
-   Movimento de Vendas: 2.1 - Pedido de Venda, 2.2 - Movimento de Venda

**Exibição após o Faturamento:** Selecione este campo se após o faturamento do pedido, deve-se retornar a visão de pedidos, permanecer na visão das notas geradas ou abrir o diálogo do movimento. As opões para este campo são: Voltar para o tipo de movimento de origem, Permanecer no tipo de movimento gerado, Exibir diálogo do movimento gerado, Exibir diálogo do mov. Gerado e retornar ao tipo de movimento de origem.

**Efeito do Pedido:**

-   Faturar Parcial: Quantidade: Ao faturar/receber um pedido e a quantidade de algum item for alterada para uma quantidade menor, o sistema abrirá a tela onde você informará se o pedido será faturado parcial, faturado parcial automático ou se não será faturado parcialmente.
-   Não Faturar Parcial: Ao faturar/receber um pedido e a quantidade de algum item for alterada para menor, o sistema não exibirá mensagem perguntando se deseja ou não faturar parcial o mesmo, simplesmente o pedido não será faturado parcialmente. O sistema irá então ignorar a alteração da quantidade funcionando da mesma forma; como se ao abrir a janela perguntando se deseja faturar parcial se escolhesse a opção "Não".
-   Faturar Parcial Automático - Quantidade: Sempre que ao faturar/receber um pedido e a quantidade de algum item for alterada para menor o sistema não perguntará se deseja ou não faturar parcial o mesmo, simplesmente o pedido será faturado parcial automaticamente, funcionando da mesma forma como se ao abrir a janela perguntando se deseja faturar automaticamente fosse escolhida a opção "Automático".
-   Faturar Parcial por Valor - Movimento: Através dessa opção é possível faturar/receber parcialmente um pedido de acordo com o valor recebido do movimento. Quando um pedido for recebido com valor inferior ao valor definido para Faturamento/Recebimento Parcial por Valor - Valor Utilizado Movimento, o mesmo será recebido/faturado parcialmente.
-   Faturar Parcial por Valor - Item: Através dessa opção é possível faturar/receber parcialmente um pedido de acordo com o valor recebido do item. Quando um item for recebido com valor inferior ao valor definido para Faturamento/Recebimento Parcial por Valor - Valor Utilizado Item Movimento, o pedido será recebido/faturado parcialmente.

**Pedir confirmação da baixa do pedido de compra/venda:** Marcando este campo, ao baixar o pedido, o sistema solicitará a confirmação da baixa. Quando baixado, o pedido terá seu status alterado para "recebido" no caso de compras e para "faturado" no caso de vendas.

**Movimentos para seleção Específica:** Nesta guia estão todos os movimentos que estão disponíveis para o faturamento. Para associá-los ao movimento, basta clicar nas setas indicativas para o lado da direita. Caso desejar poderá retirar os mesmos da lista clicando na seta que indica para esquerda.

**
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938835/image_preview.png?version=1&modificationDate=1551362152267&api=v2)
Compra/Venda - Outros Dados**

**Gera N movimentos ao faturar:** Marcando esta opção, ao receber pedidos, se a quantidade de itens do(s) pedido(s) selecionado(s) for maior que a quantidade máxima de itens do movimento a ser gerado, o sistema mostrará o movimento como se fosse um único, porém, ao final do processo, irá gerar quantos movimentos forem necessários com os mesmos dados tendo somente numerações diferentes e informará quantos movimentos foram gerados no recebimento. Exemplo*:*

-   Vamos supor o pedido 2.1.01 com 32 itens para gerar 2.2.01 que está parametrizado para ter no máximo 10 itens, desta forma, o sistema mostrará o movimento 2.2.01 com os 32 itens para que informe os campos complementares, ao confirmar a inclusão do movimento, o sistema irá gerar 4 movimentos 2.2.01, sendo, três com 10 itens e um com 2 itens.

***Observações**:* Para que o sistema trabalhe desta forma, é necessário que a numeração do movimento, indicada nos Parâmetros dos Tipos de Movimentos/Pasta Identificação/Características, esteja como "Mostra" buscando na filial ou geral. Desmarcando esta opção o sistema não irá gerar mais de um movimento, porém, se a quantidade de itens for superior à quantidade máxima de itens do movimento o sistema não permitirá a inclusão do mesmo até que a quantidade de itens seja inferior ou igual ao número máximo indicado na pasta itens/identificação, campo Nº máximo de itens do tipo de movimento.

**Ratear valores financeiros nos movimentos gerados:** Marcando esta opção, se no movimento que gerou N notas houver algum valor financeiro (desconto, despesa, frete, seguro, valor extra 1 e valor extra 2), o valor será rateado pelos movimentos gerados.
***Observação**:* Este parâmetro só será utilizado para valores financeiros do tipo valor. Para tipos percentual ou ambos, o sistema já faz o rateio de acordo com o percentual de cada um dos valores financeiros. Caso o tipo seja valor e este parâmetro não estiver marcado, o rateio não é feito e os valores financeiros serão lançados no primeiro movimento dos N gerados.

**Classificação do Movimento Gerado:** Informe neste campo o código de classificação do movimento a ser gerado através deste.
***Observação**:* O código aqui informado será a classificação do movimento a ser gerado através do recebimento do movimento. Gerando outro, ou seja, não é para o movimento corrente. O código da classificação do movimento irá compor também a numeração do movimento a ser gerado se nele estiver parametrizado na pasta identificação | Características para ter numeração personalizada.

**Utiliza filtro por grupo de Faturamento:** Marcando este campo, o sistema irá apresentar a janela onde serão exibidos os diversos grupos de faturamento dos pedidos e será permitida a escolha de um dos grupos.

**Não agrupar quantidades de itens iguais:** Marque esta opção para que ao gerar um movimento, se o movimento original conter itens iguais, estes não sejam somados, neste caso os itens virão separados no movimento gerado.
***Observações**:* Esta regra vale também para geração de movimentos agrupados. Ou seja, se nos pedidos agrupados houver itens iguais, não serão somados. Para que o sistema separe os itens além de marcar este parâmetro, é necessário que no movimento a ser gerado o parâmetro "Permitir item repetido" na pasta itens/outros dados esteja marcado.

**Marcar os itens que farão parte do movimento gerado:** Ao faturar um pedido, somente os itens que estiverem marcados para faturamento serão calculados. Marque esta opção para obter o cálculo dos itens que farão parte do movimento gerado. Marcando este parâmetro nos tipos de movimentos que serão faturados, o código do produto não poderá ser alterado e os outros dados poderão ser alterados normalmente.

**Faturar quantidade de acordo com o estoque:** Marcando esta opção quando um determinado produto tiver com a quantidade 70 unidades, e o pedido de venda tiver com a quantidade 100 unidade, ao faturar o pedido o sistema irá desdobrar a quantidade do pedido de acordo com o saldo do estoque.
***Observação**:* O campo descrito a seguir é um parâmetro exclusivo de movimentos do grupo 2.1 (Vendas), portanto, só aparecerão na pasta Integração Vendas

**Ignorar quantidade cotada:** Marcando este campo, as quantidades cotadas não serão transportadas para a ordem de compra gerada. Assim, os itens cotados irão para a ordem de compra com quantidade igual a zero. O sistema mostrará a nota gerada e após fechar o diálogo da nota, voltará no tipo de movimento de origem.
***Observação**:* Para que a ordem de compra seja gerada com quantidade zero, é nela que deve-se habilitar este parâmetro.

**Afetar Estoque após Faturado/Recebido:** Esta opção é específica para quando existe um recebimento de documento complementar da Nota Fiscal. Seu uso deve ser avaliado com cuidado, pois pode provocar problemas de saldo se usado incorretamente.

**Tipo do Mov. de Compras:**

-   Este parâmetro está diretamente ligado ao módulo de cotação Aqui você indicará ao sistema se este movimento é do tipo Solicitação de Compras, do tipo Pedido de Compra ou Nenhum.
-   Se indicar que é uma Solicitação de Compra, no momento da montagem de uma cotação, no campo "Tipos de Movimentos que farão parte desta Cotação", você poderá indicar de quais os movimentos serão selecionados os itens para a mesma. Portanto, o sistema selecionará na lista de tipos de movimentos deste campo da cotação somente aqueles que tem este campo marcado.
-   Se indicar que é um Pedido de Compra, significa que este será o movimento a ser gerado ao término da cotação.

***Observações**:* O tipo de movimento indicado no campo "Tipo de Movimento Gerado" do movimento com o campo "Solicitação de Compra" marcado, deve ser um movimento do tipo "Pedido de Compra". Portanto, neste deve estar marcada esta opção; caso contrário, o sistema não irá gerar o movimento final da cotação. Se o campo do tipo de movimento de compras foi habilitado como 'Solicitação de Compras', na pasta Itens/Estoque do parâmetro do tipo de movimento, o efeito sobre o saldo físico e financeiro não serão habilitados. Exemplo*:* 

-   Vamos supor que o movimento 1.1.01 é um movimento do tipo "Solicitação de Compra" e que no campo "Tipo de Movimento Gerado" está indicado o movimento 1.1.03, para que o sistema realmente gere ao final da cotação de um item que pertencia ao movimento 1.1.01 um movimento 1.1.03, devemos acessar este movimento (1.1.03) e indicar que é do tipo "Pedido de Compra".
-   O movimento a ser gerado ao final de uma cotação, ou seja, o Pedido de Compra, tem que também pertencer ao grupo 1.1, portanto, no processo de cotação não é possível gerar movimentos para o grupo 1.2.
-   Movimentos de compra do tipo "Solicitação de Compras" não podem afetar estoque, ao marcar a opção "Solicitação de Compra", e for verificado que algum saldo está indicado para aumentar ou diminuir, o sistema emitirá a seguinte mensagem:
-   "Movimentos do tipo Solicitação de Compra não podem afetar estoque, todas as opções de alteração de saldo foram alteradas" e a partir deste momento não será mais possível, na pasta itens/estoque, editar os campos de efeito sobre os saldos. Isto só será possível se este campo for desmarcado.
-   Movimentos de compra do tipo "Pedido de Compra", sempre devem ter o tipo de numeração indicado na pasta identificação/características "Mostra" ou "Personalizado". Ao marcar esta opção e for verificado que o tipo de numeração está "edita", o sistema emitirá a seguinte mensagem:
-   "Movimentos do tipo Pedido de Compra só podem ter numeração Mostra ou Personalizado. A numeração deste tipo de movimento foi alterada para mostra" e a partir deste momento não será mais possível alterar o tipo de numeração para edita, isto só será possível se este campo for desmarcado.

***Observação**:* Caso tenha marcado uma das duas opções "Solicitação de Compras" ou "Pedido de Compra" indevidamente, ou seja, deseja deixar as duas opções desmarcadas, clicando com o botão direito sobre qualquer ponto do campo "Tipo do Mov. de Compras", o sistema abrirá a opção "Limpar Tipo do Mov. de Compras".

**Lançamentos no Faturamento após Geração do Movimento:** Esta opção só aparecerá se o parâmetro "Fatura o Movimento" na pasta Faturamento estiver marcado. As opções para este campo são:

-   Cancelar: Marcando esta opção ao faturar pedido deste tipo o lançamento que foi gerado no TOTVS Gestão Financeira no momento da inclusão do mesmo será cancelado.
-   Exclui: Marcando esta opção, ao faturar pedido deste tipo, o lançamento que foi gerado no TOTVS Gestão Financeira no momento da inclusão do mesmo será excluído.
-   Nenhum: Marcando esta opção os lançamentos do pedido permanecerão no TOTVS Gestão Financeira após a geração do movimento.

**Não alterar quantidade ao faturar:** Marcando esta opção, no faturamento/recebimento de um pedido deste tipo, o usuário não poderá alterar as quantidades dos itens faturados.

**Manter moeda do pedido:** Marcando este campo a moeda do pedido será mantida, ou seja, não haverá conversão da moeda na geração do movimento destino.
***Observações**:* Se existirem solicitações com moedas diferentes, estas não poderão ser agrupadas. - No movimento de destino a moeda deve estar parametrizada com a opção "Edita".

**Não manter histórico de pedidos:** Marcando este parâmetro, o sistema não gera o log de faturamento.
