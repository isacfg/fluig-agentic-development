# Definições dos Parâmetros de Ressuprimento

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=64651723](https://tdn.totvs.com/pages/releaseview.action?pageId=64651723)
> **Domínio:** TDN (TOTVS Developer Network)

---

**Produto:** *TOTVS Gestão Estoque Compras e Faturamento*                            **Versão:** *11.52*  / 11.82                                                  

**Processo de Negocio:** Ressuprimento

**Subprocesso:** *Definições dos Parâmetros de Ressuprimento*

***PARÂMETROS DE RESSUPRIMENTO***

**\=> GERAL**

**Custo Classe ABC:**

Selecione o custo que será utilizado na formação da curva ABC dos produtos.

As opções são Custo Médio (será buscado o preço médio informado na tabela de local de estoque do produto) ou um dos cinco preços parametrizados nos parâmetros gerais | produto | preços. A curva ABC será calculada com base no histórico de consumo dos produtos em um determinado período.

O cálculo é feito da seguinte forma:

1 - Para cada produto é obtido o somatório de ("X - parametrizado") meses de consumo anterior;

2 - Esse somatório de consumo deverá ser multiplicado por um dos preços do produto (custo médio, preço1, preço2, preço3, preço4, preço5 ) parametrizado.

3 - Esse montante deverá ser ordenado em ordem decrescente na forma que os produto de maior valor (consumo \*preço) permaneça no início da lista;

4 - Será feito um estudo de acordo com os percentuais de classificação ABC cadastrados no grupo de classe ABC.



**Tempo Consumo médio:**

Diário: Marque esta opção se o cálculo do consumo médio do produto for feito levando em consideração o consumo diário do produto. Nesse caso, todos os campos que corresponde a um determinado tempo deverá ser informado um valor diário.

Exemplo: Tempo de compra, tempo de fornecimento, tempo de reposição, consumo médio, consumo teórico, tempo de estoque mínimo, tempo de estoque máximo, etc.

Mensal: Marque esta opção se o cálculo do consumo médio do produto for baseado no consumo mensal do produto. Nesse caso, todos campos que corresponde a um determinado tempo deverá ser informado um valor mensal.

Exemplo:Tempo de compra, tempo de fornecimento, tempo de reposição, consumo médio, consumo teórico, tempo de estoque mínimo, tempo de estoque máximo, etc.

**Usa Envio de E-mail para Sugestão de Compra:**

Marcando esse parâmetro, ao disparar o processo de geração de sugestão de compra automático, o sistema poderá enviar e-mail para funcionários responsáveis de produtos que contém sugestões de compras não analisadas. Nesse e-mail é enviado os dados dos produtos e da sugestão gerada automaticamente. (código do produto, descrição, data entrega, quantidade solicitada e data sugestão).

**Usa Envio de E-mail para Movimento de Análise de Sugestão:**

Marcando esse parâmetro, ao incluir um movimento parametrizado como geração de movimento automático, o sistema poderá enviar e-mail para o comprador responsável por este movimento que acabou de ser gerado. Nesse e-mail é enviado os dados do movimento(tipo, número, data do movimento e data de entrega).

**Usa Dias Trabalhados:**

Marcando esta opção o cálculo do consumo médio diário será calculado considerando os dias trabalhados nos meses anteriores. Será habilitado o menu cadastro / ressuprimento / cadastro de dias trabalhados. Se essa opção estiver desmarcada, o cálculo do consumo médio diário será feito de acordo com os dias dos meses.

*Observação: Essa opção estará disponível somente para consumo médio diário.*

**Usa Contrato de Fornecimento:**

Marcando esta opção, movimentos do tipo contrato de fornecimento poderão ser utilizados. Este tipo de movimento poderá ou não ser utilizado como uma espécie de contrato de fornecimento, evitando a utilização do processo de cotação no momento de gerar um movimento baseado em uma sugestão de compra. Nesse caso, se um determinado produto tem um contrato de fornecimento em aberto com um determinado fornecedor, então o assistente de análise de sugestão irá sugerir a geração de uma ordem de compra diretamente para aquele fornecedor baseado no contrato de fornecimento em aberto.

**Nível de Contrato de Fornecimento:**

Esta opção só estará disponível se o parâmetro "Usar Contrato de fornecimento" estiver marcado. Permitindo assim a utilização do movimento de contrato por coligada, filial ou local de estoque.

Exemplo: Se a gestão for por coligada, então somente contratos pendentes da coligada corrente para um determinado produto será levado em consideração. Se a gestão for por filial, então poderá escolher entre usar somente os contratos da filial corrente ou usar todos os contratos da coligada para aquele produto em questão. Se for utilizada a gestão por local, então poderá escolher entre usar somente os contratos do local de estoque corrente, usar os contratos da filial corrente ou usar todos os contratos da coligada corrente para o produto em questão.



**\=> CUSTO 1/2**

**Número Meses de Consumo Médio:**

Informe neste campo o número de meses que serão utilizados para o cálculo do consumo médio do produto. O número de meses para cálculo do consumo médio também poderá ser informado no tipo de aplicação do produto. Em caso de utilização no tipo de aplicação, o valor desse parâmetro será descartado. Exemplo: Se for informado o número nove nesse campo, então será utilizado os últimos nove meses para efetuar o cálculo do consumo médio.

**Quantidade de Anos de Consumo:**

Informe a quantidade de anos de consumo que será mostrado no gráfico de consumo na tela de análise de consumo real.

**Tipo de Consumo Médio:**

Informe se o cálculo do consumo médio do produto será feito levando em consideração o consumo normal , o consumo anormal ou os dois tipos de consumo.

Consumo Normal: Marque esta opção se o consumo daquela quantidade diz respeito à saída de um determinado produto do estoque para vendas normais da empresa.

Consumo Anormal: Esse tipo de consumo diz respeito à saída de um determinado produto do estoque dependendo da sazonalidade ou o consumo de produtos para projetos internos na empresa.



**\=> CUSTO 2/2**

**Tipo de Consumo Médio para Análise:**

Informe se o cálculo do consumo médio do produto será feito levando em consideração o consumo normal , o consumo anormal ou os dois tipos de consumo.

Consumo Normal: Marque esta opção se o consumo daquela quantidade diz respeito à saída de um determinado produto do estoque para vendas normais da empresa.

Consumo Anormal: Esse tipo de consumo diz respeito à saída de um determinado produto do estoque dependendo da sazonalidade ou o consumo de produtos para projetos internos na empresa.







**\=> SUGESTÃO DE COMPRA**



**Saldo de Sugestão de Compra:**

No RM Nucleus poderão ser parametrizados 10 tipos de saldos diferentes. Será permitido escolher alguns ou todos esses saldos para que o somatório desses em um produto em questão possa ser comparado com o Ponto de Reposição. Caso o somatório desses saldos for menor que o ponto de reposição para o produto, então uma sugestão de compra com uma "certa" quantidade será gerada.



**Verifica existência de sugestão rejeitada para o produto:**

Marcando este parâmetro o sistema irá verificar (antes de gerar uma sugestão de compra), se existe uma sugestão de compra anterior gerada e que foi rejeitada. Caso exista, então o sistema irá verificar se houve movimentações para esse produto no período posterior à data de rejeição da sugestão. Se existir movimentações para esse produto, a sugestão será registrada na base, se não existir nenhuma movimentação posterior a sugestão será descartada.

**Número de Meses Sugestão de Compra:**

Corresponde ao número de meses de sugestão de compras que serão mostrados na tela de analise de sugestão de compra. Essa informação diz respeito ao histórico das sugestões de compra.



**\=> Movimento de sugestão**

**Comprador Por:**

Corresponde se o comprador do movimento a ser gerado pela sugestão será buscado no cadastro de comprador por coligada, da filial ou do local de estoque.

**Lista de Comprador:**

As opções para este campo são:
Todos: Serão visualizados para a seleção todos os compradores compreendidos na opção ‘Comprador Por’. Se a opção coligada for marcada, aparecerão na seleção todos os compradores da coligada.
Por Produto: Serão visualizados os compradores informados no cadastro do produto e que também esteja compreendida na faixa da opção ‘Comprador Por’.



**\=> LOTE DE COMPRA**

**Calcula Tempo de Reposição pela Classe:**

Marcando esse parâmetro, o campo Tempo de Reposição será atualizado automaticamente de acordo com a classificação ABC do produto. Se o módulo usar contrato de fornecimento, então o poderá ser configurado valores diferentes para produtos que tem um contrato de fornecimento em aberto com algum fornecedor. O valor do tempo de reposição será usado posteriormente para o cálculo automático do lote econômico de compras através da fórmula:

*LC = CM \* TR, sendo:*

*LC = Lote Econômico de compras;*

*CM = Consumo Medio Prático ou Consumo Médio Teórico (para produtos sem histórico de consumo);*

*TR = Tempo de Reposição;*

**\=> ESTOQUE MÍNIMO**

**Calcula Tempo de Estoque Mínimo pela Classe ABC:**

Marcando esse campo e informando os tempos em dias para o estoque mínimo da Classe ABC, após efetuar o processo de Ressuprimento, o sistema levará em consideração a classificação ABC do produto, criando uma carga para automatização do processo dos cálculos do tempo de estoque mínimo*.*

**\=> ESTOQUE MÁXIMO**

**Calcula Tempo de Estoque Máximo pela Classe ABC:**

Marcando esse campo e informando os tempos em dias para o estoque máximo da Classe ABC, após efetuar o processo de Ressuprimento, o sistema levará em consideração a classificação ABC do produto, criando uma carga para automatização do processo dos cálculos do tempo de estoque mínimo.
