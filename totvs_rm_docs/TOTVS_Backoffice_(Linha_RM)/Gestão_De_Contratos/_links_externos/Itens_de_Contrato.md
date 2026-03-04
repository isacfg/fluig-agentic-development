# Itens de Contrato

> **Fonte:** [https://tdn.totvs.com/display/public/LRM/Itens+de+Contrato](https://tdn.totvs.com/display/public/LRM/Itens+de+Contrato)
> **Domínio:** TDN (TOTVS Developer Network)

---

Os itens de contrato são a parte principal do contrato.
Neles é que são discriminados os produtos e/ou serviços inerentes ao contrato.
Os itens de um contrato podem ser apenas de aquisição, apenas de venda ou permuta, onde no mesmo contrato se encontram itens de compra e de venda.
O tipo dos itens vai depender do campo 'Natureza do Contrato' preenchido obrigatória mente na inclusão do contrato.
No caso da natureza do Contrato ser 'Ambos' o valor total do contrato será a diferença entre os itens do tipo compra e os do tipo venda.
Cada item pode ser faturado de formas diferentes dependendo do tipo para faturamento informado na identificação do item.
O tipo para faturamento influencia diretamente a forma como o faturamento ocorrerá.
O sistema trabalha com 3 tipos para faturamento distintos: Periódico, Não Periódico, e Medição.

**
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423937970/image_preview.png?version=1&modificationDate=1549658540937&api=v2)
Tipo para Faturamento Periódico**

O tipo para faturamento Periódico é utilizado para itens em que o faturamento será periódico, ou seja, com períodos definidos a partir da data inicio do item de contrato. Ao informar que o tipo do item para o faturamento é Periódico, a caixa "Períodos de Faturamento" será habilitada para edição.
Neste caso os campos habilitados para edição são Intervalo de Faturamento. Na lista de opções de intervalo, só serão apresentadas as condições de pagamento em que o número de vezes é igual a 1 e que o prazo para a parcela seja diferente de 0 (zero).
Observação: Não se deve confundir a condição de pagamento informada neste campo com a condição de pagamento informado na pasta "Faturamento" do item de contrato, pois a condição de pagamento do intervalo é utilizada para definir o intervalo entre as parcelas, exemplo 30 em 30 dias, 60 em 60 dias, 90 em 90 dias, e no caso da condição de pagamento do faturamento é utilizado para definir o "contas a pagar" ou a "receber" de cada uma das parcelas geradas pelo contrato.
E ainda, caso o parâmetro "Vencimentos em dias fixos" em (Opções / Parâmetros / Contratos / Pasta Faturamento) estiver habilitado, na lista de opções de intervalo, só serão apresentadas as condições de Pagamento cadastradas com "Prazo" igual a 30 dias ou múltiplos de 30.
Estes dados são determinados para cada condição de pagamento, na pasta composição das parcelas.
O campo de inicio (data de inicio do item de contrato) tem seu preenchimento obrigatório, mas a data fim (data de fim do item de contrato) poderá ser informada manualmente pelo usuário ou então calculada através do número informado no campo "Qtde. de Faturamentos" da pasta Identificação do item de Contrato.
Lembrando mais uma vez que as datas de "Inicio e Fim" do item de contrato são utilizadas para identificar o inicio e o fim do faturamento do item de contrato e não para identificar sua vigência.
Quantidade de Faturamentos: Indica quantas vezes o item será faturado. Caso a quantidade não seja informada, os faturamentos serão calculados em função do intervalo de faturamento e das datas iniciais/finais para este item.
NF Acompanha Boleto: Marcando esta opção, a nota fiscal acompanhará a boleta de cobrança do contrato. Ou seja, será realmente enviado ao cliente a nota fiscal e enquanto o valor devido não for quitado, o sistema não efetuará outro faturamento para este contrato. Somente quando o cliente efetuar o pagamento é que será novamente faturado e o sistema somará todos os meses ainda não faturados.

**Arrendamento Mercantil**: Quando o contrato for do tipo arrendamento mercantil, algumas particularidades serão exibidas, como os campos Taxa Juros e Vlr. Presente. Com base nas informações do item de contrato, serão calculadas automaticamente as parcelas do arrendamento na aba parcelas, conforme regra abaixo:

-   Valor Parcela: Valor Parcela.
-   Valor Presente: Valor Presente da Parcela.
-   Amortização Juros:  Saldo Devedor (Primeira Parcela = Valor Presente Total) \* (Taxa Juros / 100).
-   Amortização Parcela: Valor Parcela - Amortização Juros;
-   Saldo Devedor: Saldo Devedor (Primeira Parcela = Valor Presente Total) + Amortização Juros - Valor Parcela;
-   Data: Data do próxima parcela de acordo com a condição de pagamento.

Para que o cálculo seja realizado, é obrigatório o preenchimento dos campos abaixo:

-   Valor Arrendamento;
-   Quantidade;
-   Taxa de Juros;
-   Data Início;
-   Data Fim;
-   Condição de Pagamento a Prazo.

Caso altere algum deles, as parcelas serão recalculadas.

***Observação***: Os campos Intervalo Faturamento, Quantidade de Faturamento e NF Acompanha Boleto, já poderão vir preenchidos se, na pasta cabeçalho do contrato, estes já foram informados. Porém, é possível efetuar as alterações necessárias para cada um dos itens do contrato.

**Faturar com Notas em Atraso**: Este campo estará habilitado se o campo anterior "NF Acompanha Boleto" estiver marcado. Neste caso, mesmo que o cliente não tenha quitado o último faturamento, este será faturado.
Assim, o comportamento de faturar somente se o último faturamento estiver quitado e de somar os não faturados em um único faturamento, é anulado caso este campo esteja marcado.

**Faturar mês vencido**: Quando em Opções/Parâmetros/Tipo de Movimentos/Contrato, o tipo de movimento a ser gerado para este movimento estiver com o campo "Integração Contrato" selecionado com Relacionar com item de contrato e o campo "faturar mês vencido" estiver marcado na pasta identificação do item do contrato, o faturamento deste item irá corresponder ao mês anterior, exemplo, de itens periódicos: Aluguel, Serviço de Limpeza, Financiamentos de Veículos.

**
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423937970/image_preview.png?version=1&modificationDate=1549658540937&api=v2)
Tipo para Faturamento Não Periódico**

O Tipo para Faturamento 'Não Periódico', é utilizado para itens em que o faturamento é feito uma única vez, porém pode conter um ou vários vencimentos.
Ao informar que o tipo do item para o faturamento é Não Periódico, a aba Vencimentos será habilitada para edição do vencimento das parcelas.
Se nenhuma informação for preenchida na pasta "Vencimento" o sistema irá considerar a condição de pagamento definida na pasta "Condições Gerais" do item de contrato.
A Pasta Vencimentos foi criada para os casos em que exista mais de uma data de vencimento para estes itens. As parcelas na aba 'Vencimentos' podem ser geradas de duas formas: manualmente através da grid de edição, onde o usuário informa a data de vencimento e o valor de cada parcela ou de forma automática, a partir de uma Data Base e uma condição de pagamento; assim o valor do item é rateado a partir da data base de acordo com a forma de pagamento informada, exemplo, de itens não periódicos: Treinamento, Inscrição, Serviço de Customização etc.
***Importante:***  Quando utilizado a pasta "Vencimento", as parcelas lançadas, serão responsáveis pela geração dos lançamentos financeiros (caso parametrizado para tal). No entanto, ao preencher a pasta "Vencimento", não será possível a utilização de adiantamento no movimento de destino. Mesmo preenchendo o valor de Adiantamento no movimento, não será gerado lançamento financeiro para o mesmo.


**
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423937970/image_preview.png?version=1&modificationDate=1549658540937&api=v2)
Tipo para Faturamento Medição**

Neste tipo de faturamento como no caso do periódico, permite faturar o mesmo item varias vezes porém os faturamentos (nesse caso, as medições) são geradas de forma livre (pois não é possível definir na inclusão deste item as datas de faturamento, os valores e quantidades para cada faturamento). Cada medição pode ter uma data e valor distinto enquanto o somatório das medidas não ultrapasse o valor e/ou a quantidade total estipulado na criação do contrato.
Medição então é a parte de um item de contrato, executada em um determinado período, para posterior faturamento. É possível definir os tipos de medições, que podem ser: por Valor, por Quantidade ou por Quantidade e Valor.
***Observação***.: A consistência de valor e/ou quantidade na inclusão da medição ocorrerá de acordo com o tipo medição feita no item de contrato,  exemplo:

-    Vamos supor o Projeto de desenvolvimento de um software. No contrato ficou estipulado que o cliente pagará mensalmente de acordo com o número de horas trabalhadas em seu projeto. Desta forma a medição mensal será feita em cima do número de horas trabalhadas no projeto.

***Nota!*** Este mesmo projeto será utilizado nos próximos exemplos:

Ao selecionar o tipo para faturamento 'Medição' são apresentadas outras duas abas para que o usuário informe as previsões de medição e as efetivas medições do contrato.
As previsões de medição são opcionais e podem ser inclusas a qualquer momento da vigência do contrato. Elas refletem a previsão do que será medido a cada período do contrato.
As medições inclusas refletem o que realmente será faturado naquele período. A partir das medições é que os faturamentos são feitos, dando origem assim as movimentações do período.
As  datas e valores informados terão as mesmas consistências feitas na inclusão das medições propriamente ditas.
A data de uma medição não pode ser superior à vigência do contrato, levando-se em consideração a prorrogação através de aditivo contratual. Se a previsão for por quantidade esta não pode ultrapassar a quantidade total do contrato menos a quantidade que já foi medida, levando-se em consideração o aditivo contratual. Se a previsão for por valor, este não pode ultrapassar o valor total do contrato menos o valor já medido, levando-se em consideração o aditivo contratual.
***Observação**:* Tanto as medições como as previsões de medições devem respeitar as quantidades, valores e o período de vigência do contrato. Os aditivos contratuais do item são considerados tanto na inclusão das medições como na inclusão das previsões de medições.
Exemplo, tomando como base o mesmo Projeto de desenvolvimento de um software do exemplo anterior. Digamos que na firmação do contrato fica estipulado que a previsão de horas gastas para a finalização do projeto seja de 1080 horas, e o prazo para a entrega são seis meses. Como o faturamento será mensal, as Previsões de medição são divididas em 180 horas / mês. Ao final do primeiro mês, a medição será feita com base nas horas trabalhadas: Se foram gastas, por exemplo, 150 horas no projeto, a medição será feita em cima das 150 horas trabalhadas.
Toda medição pode ser vinculada a uma previsão, mas essa vinculação não é obrigatória. A qualquer momento as previsões podem ser replanejadas para manter uma coesão entre as medições feitas e as previsões restantes.
 
**
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423937970/image_preview.png?version=1&modificationDate=1549658540937&api=v2)
Aditivos Contratuais**

Um aditivo é um elemento do contrato que é cadastrado sempre que o valor ou as datas do contrato sofrerem alterações. Esse fato pode ocorrer durante um Reajuste ou Renovação de um Contrato.
Existem basicamente 2 tipos de aditivo:

1.  1 - Aditivo de valor: O contrato terá o valor alterado, mas a quantidade continuará a mesma.
2.  2 - Aditivo de quantidade: O valor do contrato continuará o mesmo, mas a quantidade será alterada.

No sistema, este recurso é utilizado por item de contrato. Ao informar o valor para o aditivo, este é considerado como um acréscimo ao Preço de Faturamento do item de Contrato, passando o item a ser faturado agora com este novo valor (Preço de Faturamento + Aditivo).
Ao informar a quantidade para o aditivo, esta é considerada como um acréscimo a quantidade de Faturamento do item de Contrato, passando o item a ser faturado agora com esta nova quantidade (Quantidade de Faturamento + Aditivo). 
Caso a data do aditivo, for maior que a data final do item, esta nova data será então considerada como data final do item. No caso de itens periódicos, esta nova data servirá como base para o cálculo da quantidade de faturamentos gerada para o item.
Data de início de vigência do aditivo: data informativa disponível na visão do aditivo do item de contrato, não interfere no cálculo do aditivo.

Ao adicionar um aditivo no item de Contrato, é possível fazer uma cópia desse para todos os demais itens. Será apresentada uma mensagem validando a operação. Caso o processo seja novamente efetuado, selecionando o mesmo item de aditivo, uma segunda cópia será realizada.

**
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423937970/image_preview.png?version=1&modificationDate=1549658540937&api=v2)
Proporcionalização de Itens de Contrato**

A Proporcionalização de itens normalmente é feita para itens periódicos onde existe a necessidade de proporcionalizar uma parcela.
Um caso típico onde a proporcionalização vê-se necessária é quando a prestação de um serviço tem seu primeiro vencimento antes de completar um período completo, ou em casos onde o contrato é encerrado antes de completar o período definido no contrato. O valor da prestação naquele mês será proporcional à quantidade de dias de uso no período.
Ao executar o processo de Proporcionalização de itens é gerado um novo item 'Não Periódico', pois será faturado apenas uma vez, no valor correspondente ao número de dias utilizados no período, dado pela fórmula:
Valor Total do Período / Número de Dias do Período \* Número de dias da prestação
As datas de vigência do item de contrato periódico também são alteradas. No caso da proporcionalização na primeira parcela a data de inicio da vigência do item periódico é alterada para a primeira data após a proporcionalização. No caso de proporcionalização na ultima parcela a data fim da vigência do item periódico é alterada para a primeira data antes da proporcionalização.
A vigência do item proporcionalizado (Não Periódico) na primeira parcela terá o inicio na data inicial, originalmente estipulada no item periódico e data final calculada com base na data inicial deste acrescida do número de dias da proporcionalização. No caso do item proporcionalizado (Não Periódico) na ultima parcela, este terá a data final estipulada originalmente no item periódico e data inicial calculada com base na data final deste subtraída do número de dias da proporcionalização.
*Exemplo:* O cliente contratou os serviços de TV a cabo no dia 20. A empresa contratada fecha o período no ultimo dia de cada mês. Após a firmação do contrato Periódico é feita a proporcionalização na primeira parcela, gerando um item Não Periódico com valor proporcional ao número de dias da prestação até o inicio do próximo período.

**
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423937970/image_preview.png?version=1&modificationDate=1549658540937&api=v2)
Reajuste de Itens de Contrato**

O reajuste de contrato pode ocorrer de duas maneiras dentro do sistema, ou seja, durante o faturamento do contrato (reajuste automático) ou o reajuste feito pelo menu  Contratos / Reajuste de Preços de Contrato. Lembrando que esta segunda opção só estará disponível caso a visão de contrato esteja aberta.

-   ***Por Fórmula***

Este tipo de reajuste é utilizado para contratos em que o reajuste será feito manualmente pelo usuário.
Para executar o reajuste por fórmula é necessário criar uma fórmula e utilizar a variável "IUR" ou "IUR2", ambas tem contém 5 parâmetros a serem informados que são:


**Parâmetro 1**: Data do Reajuste atual. Corresponde a qual mês está sendo cobrado. Exemplo: em 15/04/21 é feito o reajuste antes de faturar a cobrança relativa à Maio/21. A data a ser informada será 01/05/21.

-   ***IUR:*** Deve-se passar uma data fixa no formato texto "01/05/21".
-   ***IUR2:*** Permitir como entrada uma outra função de fórmula que retorne uma data. Exemplos:
    \- IUR2 (HOJE , 'IGPM' , 3 , 0 , 1),
    \- IUR2 (DAT , 'IGPM' , 3 , 0 , 1),
    \- IUR2 ( ‘20/09/2017’, 'SELIC' , 6 , 0 , 11)

**Parâmetro 2**: Moeda. Índice utilizado para o reajuste dos itens.

**Parâmetro 3**: Número de meses a serem reajustados. Ex: 12 meses vai aplicar 12 índices da moeda informada.

**Parâmetro 4**: Defasagem da cotação em meses. Exemplo: Informar 2, todas as cotações d esta moeda/índice estão defasadas em 2 meses.

**Parâmetro 5**: Dia da cotação a ser buscada. Exemplo: Se informar 1, buscará todas as cotações da moeda todo dia 01. Se informar 2, buscará todas as cotações do dia 2.

Com a criação da fórmula de reajuste e com a visão de contratos aberta acesse o menu Processos | Reajuste de Preço de Contratos informe a fórmula.
Após a efetivação do reajuste o valor de faturamento do item de contrato será alterado, e o histórico dos reajustes efetuados poderá ser visualizado pela Pasta Reajustes do item de contrato.
Para o reajuste do contrato por fórmula, o sistema consiste a data de inicio do item ou a data do último reajuste, ou seja, a data do item de contrato deverá ser menor que a data do primeiro índice utilizado no reajuste.
Exemplo: Início de contrato: 01/08/2008 Fim de Contrato 01/07/2009 Meses de reajuste: 7 Dia da Cotação da Moeda: 1 Data de Vencimento:
Fórmula: IUR ('01/03/09' , 'INDICEUTILIZADOPARAREAJUSTE' , 7 , 0 , 1)
A partir das informações acima, o sistema considera para o reajuste de contrato os índices acumulados a partir do mês de setembro/08 até o março/09. Caso a data do início do item de contrato fosse Setembro/08 o reajuste não iria acontecer, pelos motivos já informado anteriormente.

-   ***Pela aba Reajustes***

Na aba Reajustes do item é informado o reajuste que será aplicado ao faturar o contrato e também serão guardadas as datas e valores reajustados para o item do contrato.
Para tal é necessário marcar o parâmetro "Reajustar ao Faturar"para que o item seja reajustado automaticamente quando o mesmo estiver sendo faturado.
E informar os seguintes campos:
**Período (meses)**: Refere-se à periodicidade do reajuste, ou seja, de quanto em quanto tempo o item será reajustado.

**Defasagem da cotação da moeda (meses)**: Refere-se à quantidade de meses de defasagem da cotação da moeda a ser utilizada para o reajuste.

**Dia da cotação da moeda a ser utilizado**: Refere-se ao dia em que a cotação da moeda de reajuste será obtida.

**Reajustar sempre a última parcela**: Informe se o reajuste da última parcela do item de contrato será reajustada, independentemente do período de reajuste. Por exemplo: Período = 12 meses, número de parcelas do item = 15. O item será reajustado no faturamento das suas 12ª e 15ª parcelas.

**Cobrar resíduo de reajuste**: Marcando esta opção, será calculado o resíduo (resíduo corresponde ao valor acumulado do índice de reajuste durante o período de reajuste).

**Moeda**: Informe qual a moeda para reajuste do item do contrato.

**Data do Último**: Refere-se a data do último reajuste do item do contrato.
Exemplo: Suponha um item de contrato com 12 parcelas, e que o reajuste seja realizado na 5ª parcela. Temos então a seguinte situação:
Valor inicial da parcela = 100,00

**Parcela**

**Mês**

**Índice**

**Parcela**

**Acumulado**

**Diferença**

1

01/2003

1,1

100,0000

101,1000

1,1000

2

02/2003

1,2

100,0000

102,3132

2,3132

3

03/2003

1,3

100,0000

103,6433

3,6433

4

04/2003

1,4

100,0000

105,0943

5,0943

5

05/2003

1,5

106,6707

106,6707



Resíduo --->

12,1508



6

06/2003



108,3774

108,3774



**...**

12

12/2003



106,6707

106,6707



No quinto mês a parcela foi reajustada e o seu valor foi calculado baseado no acúmulo dos índices dos meses anteriores.
Em cada mês em que a parcela não havia sido reajustada, houve uma diferença entre o valor cobrado e o valor com o índice acumulado do mês.
O resíduo é então a soma destas diferenças que houveram entre o valor cobrado e o valor com o índice acumulado.
**O resíduo é cobrado da seguinte forma**: no movimento gerado através do faturamento do contrato, é incluído um novo item de movimento com o valor do resíduo. O produto deste item de movimento deve ser informado no cadastro do produto do item de contrato correspondente (Cadastro/Produtos/Dados do Contrato, campo Código do Produto para Encargos).
No exemplo anterior, o movimento gerado no faturamento da 5a parcela teria 2 itens: um item contendo o produto do item de contrato, com o valor de 106,6707; e um outro item, referente ao resíduo (contendo o produto de encargo), com o valor de 12,1508.
***Observação***: A cada reajuste efetuado através da opção Reajuste de Contratos, o sistema já preencherá este campo com a data em que foi efetuado o reajuste deste item.

Na fórmula de reajuste, deve-se utilizar a variável IUR, esta fórmula contém 5 parâmetros a serem informados onde:

**Data do Reajuste atual**. Corresponde a qual mês está sendo cobrado. Exemplo: em 15/04/00 é feito o reajuste antes de faturar a cobrança relativa a Maio/99. A data a ser informada será 01/05/00.
Número de meses a serem reajustados. Exemplo, 12 meses vai aplicar 12 índices da moeda informada.
Defasagem da cotação em meses.
Dia da cotação a ser buscada. Exemplo, Se informar 1, buscará todas as cotações da moeda todo dia 01. Se informar 2, buscará todas as cotações do dia 2.

\*Foi gerado novo parâmetro "Considerar 1ª parcela no reajuste". O Objetivo deste parâmetro é permitir que a 1ª parcela do período de faturamento seja incluída no reajuste. Fim do conteúdo adicionado
Início do conteúdo adicionadoEX: Parcela 1 a 12: da 1ª até a 12ª não existe reajuste e o valor será de 1.000,00, na 13ª parcela será aplicado o reajuste (1.200,00), de acordo com o período de reajuste informado (12). Fim do conteúdo adicionado
Início do conteúdo adicionadoParcela 13 a 24: da 13ª a 24ª parcela, não existe reajuste e o valor será de 1.200,00, e na 25ª seja feito o novo reajuste (1.500,00); Fim do conteúdo adicionado
Início do conteúdo adicionadoParcela 25 a 36: da 25ª a 36ª parcela, não existe reajuste e o valor será de 1.500,00. Fim do conteúdo adicionado

**
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423937970/image_preview.png?version=1&modificationDate=1549658540937&api=v2)
Quebra de Itens de Contrato no Faturamento**

A quebra de um contrato refere-se à geração de movimentos distintos para itens diferentes do contrato. Isto é possível através da definição das regras de quebra informadas nos parâmetros do contrato. 
Assim é possível gerar um único movimento com todos os itens de contrato ou então um movimento para cada item de contrato.
De forma semelhante também é possível gerar um único movimento para mais de um contrato com o mesmo cliente/fornecedor.

Maiores Informações

-   [Como Fazer - Reajuste de Contrato no Faturamento](https://tdn.totvs.com/display/LRM/Reajuste+de+Contrato+por+Faturamento)
-   [Como Fazer - Previsão Financeira do Contrato por Medição](https://tdn.totvs.com/pages/viewpage.action?pageId=4813050)
-   [Como Fazer - Faturamento de Itens de Contrato sem Vigência Definida](https://tdn.totvs.com/pages/viewpage.action?pageId=4813162)
-   [Como Fazer - RSS de Contratos a Vencer nos próximos 30 dias](https://tdn.totvs.com/pages/viewpage.action?pageId=4813114)
