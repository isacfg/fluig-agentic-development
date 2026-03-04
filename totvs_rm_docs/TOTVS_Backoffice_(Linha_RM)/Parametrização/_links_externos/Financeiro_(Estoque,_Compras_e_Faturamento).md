# Financeiro (Estoque, Compras e Faturamento)

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=423938167](https://tdn.totvs.com/pages/releaseview.action?pageId=423938167)
> **Domínio:** TDN (TOTVS Developer Network)

---

**Edita Condição de Pagamento**: Disponíveis as três opções relacionadas abaixo:

-   **Edita**: para os movimentos deste tipo, a condição será utilizada e o campo poderá ser acessado para alterações.
-   **Mostra**: a condição de pagamento será utilizada para os movimentos deste tipo porém, o campo não poderá ser acessado.
-   **Não edita**: significa que os movimentos deste tipo não terão condição de pagamento, exemplo:

Para um movimento do tipo "solicitação de compra", não será necessária a condição de pagamento. Mas, para um movimento do tipo "venda NF", deve ter uma condição de pagamento.

**Condição de pagamento default**: Depois de informar o tipo de edição, informe a condição de pagamento default. Desta forma, sempre que incluir um movimento deste tipo, o campo "condição de pagamento" será preenchido automaticamente.

**Edita Condição de pagamento do Cliente/Fornecedor**: Permite alterar a condição previamente determinada para o Cliente/fornecedor.

**Valor mínimo por Parcela**: Informe neste campo o valor mínimo por parcela que a condição de pagamento escolhida poderá possuir. Este campo será validado quando a condição de pagamento for preenchida no movimento.

**Número Máximo de Parcela**:  Informe neste campo o número máximo de parcelas que a condição de pagamento poderá ter. Este campo será validado quando a condição de pagamento for preenchida no movimento.

**Utiliza edição de Meios de pagamento**: Marcando esta opção, você estará indicando ao sistema que utilizará Meios de pagamento para o movimento. Deste modo, o campo condição de pagamento ficará desabilitado do movimento. Ou seja, você deve optar por trabalhar com condição de pagamento ou com Meios de pagamento.
***Observações***: As diferenças de uma Condição de Pagamento para Meios de Pagamento são:

-   Para a condição de pagamento, o sistema já divide, se for o caso, os valores das parcelas de acordo com os percentuais e prazos cadastrados na condição e cada movimento só poderá ter uma condição de pagamento.
-   Para Meios de pagamento, um movimento poderá ter diversos Meios de pagamento (cheque, dinheiro, cartão, etc.). Você é quem informará quais são os Meios para o movimento. Porém, neste caso o sistema não calculará datas de vencimento, nem valores, deve-se informar isto ao sistema.
-   É possível ao utilizar Meios de pagamento enviar lançamentos para o TOTVS Gestão Financeira com a previsão de pagamento pela data dos itens. Para isso é necessário inicialmente no menu Opções/Parâmetros/Tipos de movimentos/pasta Itens/Outros dados, deixar a data de entrega definida como "edita". Após a inclusão do movimento com vários itens e que apresentem datas diferentes de entrega, na janela de edição do movimento clique no botão de Pagamentos, então é preciso que se informe o tipo de documento na opção Geração Automática de Formas de Pagamento e finalize clicando no botão 'Gerar'.
-   O sistema irá gerar a previsão de pagamento pela data dos itens deste movimento, levando em consideração no cálculo do valor de pagamento a quantidade do item, o preço do item, os descontos e despesas. 
-   Ao utilizar a opção 'Utiliza edição de Meios de Pagamento' no movimento, é obrigatório informar o tipo de pagamento.
-   A coluna Débito/Credito tem por finalidade definir se aquele meio de pagamento é um credito(Entrada) ou débito(Saída) para aquele movimento em questão. Não tendo associação ao tipo de movimento (1 - Entrada ou 2 - Saída). 

**Gerar Lançamento para Administradora de Cartão**: Marcando esta opção ao incluir o tipo de movimento que possui integração com o TOTVS Gestão Financeira, o sistema irá levar para o campo Cliente/Fornecedor do lançamento financeiro a Administradora do Cartão que deverá esta informada no Meio de Pagamento, exemplos, cadastrar um CF para cada uma das administradoras de cartão: REDECARD, VISANET, AMEX e TECBAN. Associar os diversos meios de pagamento de cartão conforme indicado abaixo:

-   CREDICARD
-   MASTERCARD
-   REDESHOP
-   REDECAR;
-   VISA
-   VISA ELECTRON
-   VISANET
-   AMERICAN EXPRESS: AMEX
-   CHEQUE ELETRONICO
-   TECBAN.

-   Associar taxa de administração aos meios de pagamento de cartão.
-   Habilitar o parâmetro "Gerar Lançamento para Administradora de Cartão".
-   Gerar movimentação através do diálogo de movimentos e associar a um pagamento em cartão.- Salvar o movimento e visualizar o faturamento.
-   Verificar o C/F do lançamento e o desconto do lançamento gerado.

  **Parcelamento:** Disponível as seguintes opções:

-   **Não usa**: o Tipo de Movimento não utilizará essa modalidade de Condição de Pagamento.
-   **Usa**: O usuário informa a composição das parcelas manualmente. Nesta interface será possível informar uma Condição de Pagamento para facilitar a geração das parcelas, com base na data de vencimento do lançamento financeiro.
-   **Usa com Data Entrega Item**: O Parcelamento poderá ser gerado automaticamente pelo sistema, gerando lançamentos financeiros para cada item, considerando como valor original o valor calculado conforme a Fórmula do Valor a Ratear e o vencimento de cada parcela com base na Data de Entrega do respectivo item de movimento.

**
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938167/image_preview.png?version=1&modificationDate=1548885059263&api=v2)
****Financeiro - Faturamento 1/6**

**Fatura o Movimento**: Marque esta opção, se os movimentos para o tipo de movimento escolhido irá gerar ou não lançamentos para o TOTVS Gestão Financeira.
***Observações***: Se o tipo de movimento escolhido não tiver "Condição de Pagamento", ou seja, na pasta Identificação/Outros Dados deste mesmo menu, o campo Condição de Pagamento estiver "Não Edita", os movimentos não poderão ser integrados ao TOTVS Gestão Financeira, desta forma, não é possível marcar este campo. O sistema entende que um movimento sem condição de pagamento, não terá data de vencimento, portanto é um pedido, uma solicitação, ou outro que não irá gerar cobrança, portanto, não é uma conta a pagar nem a receber.

Os movimentos do grupo 3.1 (Movimentos de Transferências), também não poderão ser integrados ao TOTVS Gestão Financeira, pois, estes são referentes a transferências entre a mesma empresa, portanto, não geram contas a pagar nem a receber.

**Tipo de Geração**

-   **Edita**: O faturamento poderá ser editado.
-   **Mostra**: O faturamento só poderá ser visualizado.

**Fatura na Inclusão**: Marque esta opção para que no momento da inclusão do movimento o sistema já gere o lançamento para o TOTVS Gestão Financeira, desta forma, o lançamento já ficará com o status "Faturado", para os do grupo vendas e "A Pagar" para o grupo compras. Os lançamentos gerados para o TOTVS Gestão Financeira podem ser visualizados no movimento, clicando-se no botão "Contas a Pagar" ou "Faturamento", este dependerá do tipo de movimento.
***Observações***:

1.  Quando o Tipo de Movimento for do grupo 1.1, 2.1 e 3.2, esta opção não poderá ser desmarcada.
2.  Quando a opção "Fatura na Inclusão", estiver desabilitada, e os itens da movimentação já foram devolvidos, o usuário poderá faturá-lo.

**Buscar Lançamentos do Pedido**: Marcando este parâmetro, os lançamentos gerados no pedido serão copiados para a Nota Fiscal gerada.
***Observação***: Este parâmetro deve ser utilizado quando existir negociação e mudança nos valores gerados automaticamente pelo sistema conforme a condição de pagamento. O valor de rateio para os lançamentos deve ser idêntico nos tipos de movimento de pedido e de faturamento. Outra restrição é que se algum dado que influencie na parte financeira for modificado os lançamentos serão regerados conforme a condição de pagamento. Portanto esta opção é recomendada apenas para processos mais automáticos. Ë necessário também que o tipo de movimento gerado esteja setado com a opção 'fatura na inclusão'.

**Gerar Cheques**: Habilitando essa opção, será possível cadastrar cheques para os lançamentos financeiros do movimento no TOTVS Gestão de Estoques, Compras e Faturamento, no ícone Contas a Pagar do movimento. Na visão dos lançamentos ficarão disponíveis dois ícones para emitir ou cancelar cheques para os lançamentos.

**Tipo de Documento Gerado**: Informe, de acordo com as opções, qual o tipo de documento os movimentos deste tipo irão gerar para o TOTVS Gestão Financeira. Poderá aparecer: Fatura e Outros.
***Observação***: A opção "Fatura" só aparecerá quando o tipo de movimento for vendas, pois, somente a empresa que está efetuando a venda é que pode gerar uma fatura, quando compras, só aparecerá a opção "Outros", pois a empresa quando efetua uma compra não emite documento e portanto necessita apenas do controle do documento recebido do fornecedor que pode ser uma ou mais Duplicatas e que nela será dada a quitação. Veja observações abaixo.

**Tipo de Documento N.F**: Se no campo anterior, a opção foi "Fatura", este campo será habilitado para que informe qual o tipo de documento será gerado para a Nota Fiscal. Serão apresentados os documentos do TOTVS Gestão Financeira para escolha.

**Tipo de Documento Duplicata**: Informe neste campo onde será obtido o tipo de documento de duplicata a ser utilizado nos lançamentos gerados pelo movimento. Caso o valor deste parâmetro seja 'Utiliza do Tipo de Mov.', o tipo de documento a ser utilizado será o Tipo de documento Dup. Default informado no tipo de movimento. Caso este parâmetro esteja com o valor 'Utiliza do Cli./For.', o tipo de documento utilizado será o informado no cadastro de cliente/fornecedor, pasta Defaults (este campo só aparece para edição no TOTVS Gestão Financeira).

**Tipo de Documento Duplicata Default**: Informe neste campo, qual o tipo de documento será gerado para duplicata, no caso de uma venda. No caso de uma compra, informe qual o tipo de documento a ser gerado para o lançamento no TOTVS Gestão Financeira.

***Observações***:

-   A Fatura só pode ser gerada por quem vende e esta gera uma Nota Fiscal que gera uma ou mais Duplicatas (dependendo do número de vencimentos/pagamentos), ou seja, somente quando vendemos é que podemos emitir estes três tipos de documentos. Quando compramos, o fornecedor é quem emite estes documentos, por este motivo, o campo "Tipo de Doc. NF" não poderá ser acessado quando o tipo for uma compra.
-   No caso do tipo de documento gerado for uma Fatura, ao consultarmos os lançamentos gerados para o TOTVS Gestão Financeira, iremos visualizar a Fatura gerada no valor total do movimento, o documento do tipo NF (Nota Fiscal) indicada no campo "Tipo de Doc. NF" que também terá o valor total do lançamento e o(s) documento(s) do tipo indicado no campo "Tipo de Doc. Dup." que poderá ter um lançamento gerado, no caso de um único vencimento ou vários lançamentos gerados de acordo com a condição de pagamento. 
-   Quando o tipo de movimento for uma compra, somente a opção "Outros" em "Tipo de Documento" será mostrada, portanto, de acordo com a observação "1".

**Numeração do Lançamento**:

-   **Nº Mov.+Sequencial:** O número do lançamento será o mesmo número do movimento mais um número sequencial, exemplo: supondo que inclua um movimento com o número 65, e este irá gerar 2 lançamentos, estes terão os números 6501 e 6502.

-   **Sequencial:** O número dos lançamentos será gerado com uma numeração sequencial.
-   **Gerado pelo Financeiro:** O número dos lançamentos será gerado pelo módulo do financeiro. 

**Histórico**:  Informe se desejar, um histórico sobre os lançamentos gerados com este tipo de movimento. É possível copiar automaticamente alguns valores do movimento para o histórico dos lançamentos do TOTVS Gestão Financeira usando alguns símbolos, são eles:

Símbolo

Significado

Símbolo

Significado

\\\[NUM\\\]

Para o Número do Documento.

\\\[HIS\\\]

Para o Histórico.

\\\[SER\\\]

Para a Série.

\\\[EMI\\\]

Para a Data de Emissão.

\\\[ORD\\\]

Para o Número da Ordem.

\\\[NOM\\\] 

Para o Nome Fantasia do Cli/For.

\\\[RAZ\\\]

Para a Razão Social do Cliente/Fornecedor.

\\\[OBS\\\]

Para Observação do Movimento.

\\\[TDO\\\]

Código do Tipo de Documento.

 \\\[DTD\\\]

Descrição do tipo de Documento.

\\\[CTT1\\\]

Código da tabela de classificação 1 do faturamento.

\\\[CTT2\\\]

Código da tabela de classificação 2 do faturamento.

\\\[CTT3\\\]

Código da tabela de classificação 3 do faturamento.

\\\[CTT4\\\]

Código da tabela de classificação 4 do faturamento.

\\\[CTT5\\\]

Código da tabela de classificação 5 do faturamento.

\\\[DTT1\\\]

Descrição da tabela de classificação 1 do faturamento.

\\\[DTT2\\\]

Descrição da tabela de classificação 2 do faturamento.

\\\[DTT3\\\] 

Descrição da tabela de classificação 3 do faturamento

\\\[DTT4\\\]

Descrição da tabela de classificação 4 do faturamento.

\\\[DTT5\\\] 

Descrição da tabela de classificação 5 do faturamento.

\\\[CTF1\\\]

Código da tabela de classificação 1 do financeiro.

\\\[CTF2\\\]

Código da tabela de classificação 2 do financeiro.

\\\[CTF3\\\]

Código da tabela de classificação 3 do financeiro.

\\\[CTF4\\\]

Código da tabela de classificação 4 do financeiro.

\\\[CTF5\\\]

Código da tabela de classificação 5 do financeiro.

\\\[DTF1\\\]

Descrição da tabela de classificação 1 do financeiro.

\\\[DTF2\\\]

Descrição da tabela de classificação 2 do financeiro.

\\\[DTF3\\\] 

Descrição da tabela de classificação 3 do financeiro.

\\\[DTF4\\\]

Descrição da tabela de classificação 4 do financeiro.

\\\[DTF5\\\] 

Descrição da tabela de classificação 5 do financeiro.

***Observação***: Para a variável ORD retornar o número do cliente é preciso inicialmente marcar o parâmetro "Editar Número No cliente", exemplo: Vamos supor que o histórico do movimento seja o mesmo do lançamento, portanto, basta indicar aqui deste campo o símbolo \\\[HIS\\\], desta forma o sistema ao gerar o lançamento, buscará para o campo histórico do lançamento o histórico já informado no movimento.

**Moeda**: Este campo permite configurar uma "Moeda" fixa para o lançamento no TOTVS Gestão Financeira.

**Usa moeda do movimento**: Habilite este parâmetro se desejar que o lançamento no TOTVS Gestão Financeira utilize a mesma moeda do movimento.
***Observação***: Se a "Moeda" (para Lançamento no TOTVS Gestão Financeira) não for informada e o parâmetro 'Usa moeda do movimento' estiver desabilitado, o lançamento utilizará a Moeda default para o idioma atual.

**Indexador**: Ao indicar uma moeda neste campo, irá ser utilizado um indexador para esta moeda nos lançamentos financeiros. Neste campo poderá ser informada uma moeda que indexará o lançamento no momento da baixa. Ver Help do TOTVS Gestão Financeira.

**
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938167/image_preview.png?version=1&modificationDate=1548885059263&api=v2)
****Financeiro - Faturamento 2/6** 

**Conta Caixa**: Disponível as opções abaixo:

-   **Não Usar**: Este campo não estará habilitado no movimento.
-   **Edita no movimento**: O campo conta caixa será editado no movimento na pasta Cabeçalho / Valores Financeiros.Mostra no movimento: O campo conta caixa estará habilitado no movimento, porém, não poderá ser editado.
-   **Edita no pagamento**: Marcando esta opção, a conta caixa poderá ser editada no lançamento financeiro.
-   **Mostra no pagamento**: Marcando esta opção a conta caixa poderá ser visualizada no lançamento financeiro. Neste caso, é necessário informar um a valor default para conta caixa

***Observação***: Este campo só aparecerá no movimento se o parâmetro "fatura na inclusão" estiver habilitado. A opção "Edita" ou "Mostra" é apenas para o movimento, a edição do campo conta caixa sempre estará habilitado no lançamento gerado para o TOTVS Gestão Financeira.

**Conta Caixa Default**: Informe a conta caixa default para os lançamentos.

**Gerar Lançamentos (a pagar, a receber)**: Informe se o lançamento gerado são de contas a pagar ou de contas a receber.
***Observação***: Para os movimentos do grupo 3.2 (transferência de faturamento) este campo estará desabilitado, com as duas opções marcadas (a pagar e a receber), não podendo ser alterado.

**Capitalização Mensal, Juros, Desconto**: Informe o percentual de capitalização mensal, juros, desconto que incidirão nos lançamentos gerados.

**Datas**:  Primeiro, serão informados a relação entre as datas do TOTVS Gestão Financeira com as datas dos movimentos. Na coluna TOTVS Gestão Financeira são apresentadas as seguintes datas:

-   Vencimento a partir;
-   Data de Emissão;
-   Data de Previsão de Baixa;
-   Data Opcional 1;
-   Data Opcional 2;
-   Data Opcional 3.

Na coluna TOTVS Gestão de Estoques, Compras e Faturamento faça a relação das datas do faturamento acima com as datas dos movimentos, para cada uma delas escolha a data relacionada, as opções são:

-   Data de Emissão
-   Data de Entr./Saída
-   Data de Digitação
-   Data Extra
-   Data de Entrega 
-   Data do Sistema
-   Data Vencimento

**Baixa Lançamento Vencimento Emissão**: Marque esta opção para lançamento, que tem data de vencimento igual a emissão, ser baixado automaticamente.
***Observações***: Ao utilizar esta opção, se o lançamento for baixa contábil, não é indicada a contabilização deste através de evento contábil do TOTVS Gestão Financeira. As opções de baixa que dependam da execução de fórmulas não serão contempladas nesta opção.

Para movimentos do tipo "3.2.XX" a baixa só será realizada automaticamente para os movimentos da origem (a pagar), a baixa do destino (a receber) deverá ser realizada manualmente, visto que é de responsabilidade do local de destino confirmar o recebimento da transferência. 

**Gerar Fatura Automação Comercial**: O parâmetro habilitado permite gerar um lançamento para cada pagamento realizado na automação comercial, porém estes lançamentos serão agrupados em faturas em função da data de vencimento, o meio de pagamento e o cliente/fornecedor. Com isto será gerado um lançamento em aberto no sistema em cada contexto e os demais estarão na base apenas por questões de consistência dos dados.

**Permite Cancelar Lançamento Financeiro**: O parâmetro habilitado permite cancelar os lançamentos financeiros associados ao movimento, através do processo¹ "Cancelar Financeiro", que pode ser executado a partir da visão de movimentos², ou da tela do movimento desejado.

-   **Obs.¹**: O processo será exibido somente se o código do Tipo de Movimento for "1.2.XX" ou "2.2.XX".
-   **Obs.²**: Quando executado pela visão de movimentos, somente um registro pode estar selecionado por vez.

**
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938167/image_preview.png?version=1&modificationDate=1548885059263&api=v2)
Financeiro - Faturamento 3/6**

**Contabilização**: Disponíveis as opções abaixo:

-   **Contábil**: Utilizado para contabilização de provisão e quitação do lançamento;
-   **Não Contábil**: Utilizado para previsões financeiras;
-   **A Contabilizar**: Utilizado para lançamentos que passarão por uma classificação contábil que não havia sido definida no momento da inclusão do lançamento financeiro, mas que será definida até sua quitação.

**Baixa Contábil**: Utilizado para contabilização apenas da baixa, documentos que não possuem provisão ou que a provisão contábil foi gerada através de outra entidade.
***Observações***: O parâmetro de Contabilização no faturamento do movimento depende do parâmetro Habilita Evento Contábil do Tipo de Movimento/Pasta Contabilização. Quando o parâmetro Habilita Evento Contábil estiver setado com o valor Utiliza Evento, os valores para o parâmetro Contabilização podem ser somente Não Contábil e Baixa Contábil.
Quando o parâmetro Habilita Evento Contábil estiver setado com o valor Não Utiliza Evento, os valores para o parâmetro Contabilização podem ser Não Contábil, Contábil, Baixa Contábil, e À contabilizar.
Se a Contabilização estiver setada com a opção "Baixa Contábil" e o campo " Baixa Lançamento Vencimento Emissão" também estiver setado, o evento contábil do TOTVS Gestão Financeira deverá ter os seus valores calculados a partir de percentual. O mesmo se aplica para Contabilização setada com a opção "Contábil" nestes casos, o TOTVS Gestão Financeira é o responsável pela contabilização e o módulo de fórmulas é por aplicativo impossibilitando assim que o TOTVS Gestão de Estoque, Compras e Faturamento de executar as fórmulas cadastradas no TOTVS Gestão Financeira.

**Efeito na Primeira Parcela**: Selecione o efeito dos campos marcados na opção "Valor na Primeira Parcela" nos lançamentos financeiros. As opções são: Subtrair e Adicionar.

**Segundo Número**: Selecione aqui como será preenchido o campo 'Segundo Número' do Lançamento Financeiro gerado. Abaixo as opções:

-   **Não Associa**: o campo não será preenchido;
-   **Associa ao Movimento**: o campo será preenchido com o valor do 'Segundo Número' do Movimento. O Segundo Número, pode ser habilitado nos parâmetros do TOTVS Gestão de Estoque, Compras e Faturamento através do caminho Assistente | Parâmetros | Gestão de Estoque, Compras e Faturamento | selecione o Tipo de Movimento | Etapa Identificação.
-   **Associa ao Funcionário**: o campo será preenchido com o código do 'Funcionário 1' do Movimento (Vendedor/Comprador).

**Fórmula Valor a Ratear**: Informe a fórmula que deverá ser utilizada para o rateio das parcelas do lançamento.

**Fórmula para o Cálculo de IRRF**: Informe a fórmula que deverá ser utilizada para a base de cálculo do valor do Imposto de Renda Pessoa Física.
***Observação***: Se desejar calcular o IRRF a partir do código da receita informado no Cadastro de Produto/Anexos/Dados Fiscais do Produto, o campo Fórmula para o Cálculo de IRRF não poderá ter sido preenchido.

**Fórmula para Cálculo de Serviço**: Informe a fórmula que deverá ser utilizada para o Cálculo de Serviço.

-   **Copiar Funcionário para o Lançamento**: Disponíveis as opções abaixo:
-   **Copiar**: O funcionário parametrizado no movimento será levado para os lançamentos do TOTVS Gestão Financeira.
-   **Não Copiar**: O funcionário parametrizado no movimento não será levado para os lançamentos do TOTVS Gestão Financeira.

***Observação***: A definição na pasta emitente/destinatário do campo "Destinatário" trará somente os tipos de funcionários que poderão ser visualizados neste tipo de movimento.

**Valor na Primeira Parcela**: Informe qual(is) valor(es) incidirá(ão) apenas na primeira parcela dos lançamentos gerados para o TOTVS Gestão Financeira. As opções são: Desconto, Despesa, Frete e Seguro.

**
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938167/image_preview.png?version=1&modificationDate=1548885059263&api=v2)
****Financeiro - Faturamento 4/6** 

**Calcular Juros de Acordo com Parâmetros Gerais**: Marcando esta opção, o sistema calculará juros para os lançamentos gerados para o TOTVS Gestão Financeira, de acordo com a "Taxa Mensal de Juros" e com os "Dias de Carência" indicados nos campos de mesmo nome em Opções/Parâmetros Gerais/Tabelas/Pasta Geral. O sistema guardará o valor calculado no campo de Valor Opcional 1 do TOTVS Gestão Financeira. Portanto, para utilizar este recurso do sistema, a utilização deste campo (Valor Opcional 1), determinado em Opções/Parâmetros/Contas a Pagar/Receber/Pasta valores, é obrigatória.

**Usa Valor Opcional 1, 2, 3, 4, 5, 6, 7 e 8**: Caso queira utilizar algum valor opcional marque este campo.
***Observação***: Caso o campo anterior esteja marcado, não será possível a utilização do campo Valor Opcional 1 pois, este guardará o valor de juros calculado conforme descrito acima.
Informe a fórmula que calculará o valor a ser lançado neste campo do lançamento gerado para o TOTVS Gestão Financeira. Esta fórmula poderá buscar qualquer valor do movimento.

**
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938167/image_preview.png?version=1&modificationDate=1548885059263&api=v2)
****Financeiro - Faturamento 5/6** 

**Distribuição dos Valores Opcionais**: Disponíveis as opções abaixo:

-   **Rateio**: o valor opcional utilizado será rateado para todas as parcelas do lançamento.
-   **Primeira Parcela**: o valor opcional será lançado na Primeira Parcela do lançamento.
-   **Última Parcela**: o valor opcional será lançado na Última Parcela do lançamento.

**Distribuição dos Valores do Serviço**: Disponíveis as opções abaixo:

-   **Rateio**: o valor do serviço utilizado será rateado para todas as parcelas do lançamento. Este é o valor default deste parâmetro.
-   **Primeira Parcela**: o valor do serviço será lançado na Primeira Parcela do lançamento.

**
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938167/image_preview.png?version=1&modificationDate=1548885059263&api=v2)
Financeiro - Faturamento 6/6**

**Adicionar à 1ª parcela**: Neste campo, deverá ser informado o tributo, que já deverá estar cadastrado em Cadastro/Tabelas Auxiliares/Tributo, este incidirá apenas na primeira parcela que será gerada para o TOTVS Gestão Financeira. O sistema fará o rateio do valor do lançamento às parcelas definidas na condição de pagamento e somará ao valor da primeira parcela, o total incidente nos itens do movimento do tributo indicado neste campo. Caso não queira incluir o imposto à primeira parcela, deixe este campo em branco. O tributo especificado é buscado no movimento e, caso não encontrado, nos itens.

**Subtrair à 1ª parcela**: Neste campo deverá ser informado o tributo, já cadastrado em Cadastro- Tabelas Auxiliares/Tributo, que incidirá apenas na primeira parcela que será gerada para o TOTVS Gestão Financeira. O sistema fará o rateio do valor do lançamento às parcelas definidas na condição de pagamento e subtrairá do valor da primeira parcela o total incidente nos itens do movimento do tributo indicado neste campo. Caso não queira subtrair o imposto à primeira parcela, deixe este campo em branco. O tributo especificado é buscado no movimento e, caso não encontrado, nos itens.
***Observação***: Os parâmetros Imposto na Primeira Parcela e Imposto na Primeira Parcela Subtrair não poderão ser utilizados simultaneamente.
