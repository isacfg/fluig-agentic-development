# Visão de utilização de workflows

> **Fonte:** [https://tdn.totvs.com/pages/viewpage.action?pageId=161350803](https://tdn.totvs.com/pages/viewpage.action?pageId=161350803)

---

# Índice

# Objetivo

* * *

O objetivo deste guia é descrever as orientações e os padrões a serem seguidos para a criação de *workflows* a serem disponibilizados no fluig.

A ideia é que os ERPs possam centralizar no fluig processos de negócio que são de maior importância e que possuam um fluxo de atividades que são executadas por pessoas ou áreas diferentes. Com esses processos centralizados no fluig, o usuário terá suas atividades (pendências de execução) centralizadas em um único local. Por meio da central de tarefas ele pode acessar os *workflows* de diferentes áreas que estão com atividades sob sua responsabilidade.

Um exemplo bastante comum são gestores que necessitam analisar e aprovar *workflows* em diferentes sistemas, ao invés de entrar em cada um deles para fazer as devidas aprovações, tendo os *workflows* liberados no fluig, ele terá essas atividades todas centralizadas.

Outra grande vantagem de ter os processos de negócio no fluig é o acompanhamento das atividades. O solicitante, por exemplo, consegue identificar em que fase do processo sua solicitação se encontra.



# Inicialização do *Workflow*

* * *

Para que seja possível flexibilizar a utilização dos *workflows*, é necessário modulariza-los utilizando o recurso de sub processos. Com a modularização dos *workflows* tem-se os seguintes benefícios:

-   possibilidade de liberações parciais e antecipadas paras os clientes, pois é possível liberar alguma(s) atividade(s) de um grande processo num primeiro momento e, em liberações futuras, ir agregando mais atividades ao *workflow*;
-   flexibilidade para que o cliente possa iniciar um *workflow* no ERP ou no fluig, conforme suas necessidades;
-   mais flexibilidade para que o cliente possa *personalizar workflows* conforme suas necessidades.

Um exemplo para ilustrar essa situação seria o *workflow* do processo de compras (aquisição de material). De forma simplificada, pode-se definir duas atividades para este processo: solicitar compra (executada por um solicitante) e aprovar compra (executada por um aprovador). Se for criado um único *workflow* “Processo de Compra” com essas duas atividades, sem criar sub processos, perde-se a flexibilidade de gerar uma solicitação de compra pelo ERP, e apenas aprovar pelo fluig, por exemplo. Com os sub processos, tem-se um *workflow* de “Aprovação de Compra” e outro como “Processo de Compra” que utiliza o anterior como um sub processo. Com essa arquitetura o usuário pode criar uma solicitação pelo fluig, utilizando o *workflow* “Processo de Compra” ou então criar a solicitação pelo ERP e a aprovação será realizada pelo fluig utilizando o *workflow* “Aprovação de Compra”.

Com essa modularização é possível também definir usuários diferentes para que sejam gestores de cada parte do processo, gerando assim mais segurança para as informações.

Veja o exemplo em nosso repositório **[aqui](https://git.fluig.com/projects/SAMPLES/repos/style-guide/browse/style-guide-workflow)**.

# Desenho do Processo

* * *

## Raias

O desenho do processo no fluig deve sempre separar as tarefas conforme os papéis e esses devem ser representados por raias. No exemplo citado anteriormente sobre o *workflow* de compras, temos duas raias, uma onde ficam a(s) atividade(s) executada(s) pelo solicitante e outra onde ficam a(s) atividade(s) executada(s) pelo aprovador.





## Sub Processos

Com a utilização dos sub processos, há também a vantagem de que não existirá um único formulário para todo um processo de negócio, facilitando assim futuras manutenções e desenvolvimentos. Existe uma forma em que o sub processo pode acessar dados do formulário do processo pai, por meio de funções chamadas por personalização que são disponibilizadas para isso. Uma vez que tenha sido criado um sub processo, o processo pai também passa a ter acesso aos dados do formulário do sub processo.

Ao visualizar um *workflow* que possui sub processos graficamente, num primeiro momento o sub processo aparece apenas como uma tarefa do *workflow* principal. Se o usuário desejar, ele pode consultar o histórico do *workflow* e, neste caso, constará o sub processo gerado. Para o usuário verificar as solicitações filhas (iniciadas a partir da atividade que é um sub processo) é necessário acionar a aba Histórico dos dados da solicitação. Estão disponíveis *links* para acesso a tais solicitações.

Com o controle de processo principal e sub processos, quando o principal é cancelado por algum motivo, todos os sub processos que pertencem a ele podem ser automaticamente cancelados também. Este cancelamento “automático” é parametrizado pelas propriedades do sub processo quando ele for definido.

Para que seja possível utilizar os sub processos de forma efetiva, muitas vezes o processo principal precisa saber o que ocorreu no sub processo para direcionar o *workflow*. Por esse motivo é possível que ao término de um sub processo sejam recuperados valores de seu processamento.



## Tipos de Aprovação e suas Representações no *Workflow*

* * *

Especialmente para *workflows* que representam a aprovação de algum tipo de documento/processo, existem algumas estruturas que são comuns, por isso foram  estabelecidos alguns padrões a serem seguidos ao modelar esse tipo de *workflow*.

### Hierarquia

Ao identificar que um *workflow* deve possuir uma hierarquia de aprovadores, a primeira coisa a ser verificada é se essa hierarquia é fixa ou dinâmica. Por exemplo, supondo que uma solicitação de compra deva passar sempre por três níveis de aprovação (três pessoas diferentes), pode-se dizer que essa é uma hierarquia fixa. Neste caso, é possível definir o processo desenhando as atividades de forma fixa no *workflow*, conforme apresentado abaixo. Mesmo que os usuários que aprovarão sejam diferentes para cada nível, conforme o item ou área, ainda assim a hierarquia é fixa no *workflow*.





Quando existir uma atividade que necessita passar por uma hierarquia dinâmica de aprovadores, ou seja, mudam os usuários, as ordens de execução, quantidade de usuários entre outras variações, deve-se utilizar o recurso de “ad-hoc”. Com esse recurso é possível gerar as atividades conforme a necessidade, de forma sequencial ou paralela. Na sequência, um exemplo do *workflow* de compras, que possui as tarefas de criação da solicitação e aprovação. A atividade “Aprovar Solicitação” pode variar, por exemplo, conforme o item e passar por hierarquias diferentes. A seguir são apresentados alguns exemplos:







**Hierarquia 1:** Líder > Coordenador > Gerente > Diretor





**Hierarquia 2:** Coordenador > Gerente > Diretor





**Hierarquia 3:** Gerente > Diretor > RH





**Hierarquia 4:** Coordenador > RH



Após a atividade “Criar Solicitação” é executada a aprovação da solicitação que é o “ad-hoc”. Neste caso, ao chegar nesta atividade é executada uma lógica para identificar a primeira atividade a ser gerada/executada. Esta lógica consulta o ERP para saber qual atividade a ser gerada, para qual usuário etc. Ou seja, todas as regras que existem para determinar as próximas atividades/aprovações são mantidas no ERP. A inteligência das regras de negócio continua com o ERP, o fluig fica com a parte do *workflow*.

Inicialmente, ao consultar o diagrama do *workflow*, que contém a atividade “ad-hoc”, não é possível visualizar o detalhe de todas as atividades, pois elas são geradas dinamicamente no momento em que o *workflow* atinge o ponto da atividade “ad-hoc”. As atividades "ad-hoc" fazem parte do processo *workflow*. A única diferença é que elas são criadas dinamicamente e não adicionadas durante a modelagem do processo. As tarefas geradas em uma atividade "ad-hoc" estão disponíveis no formulário enquanto a atividade ainda não foi executada pelo usuário responsável. A rastreabilidade ocorre como uma solicitação de qualquer processo (pela consulta e aba Histórico), pois a única diferença é na sua criação (dinâmica X atividades modeladas no fluxo do processo).

Considerando como exemplo a hierarquia 2, apresentada anteriormente, o diagrama do *workflow* vai sendo apresentado da seguinte forma, conforme as atividades:

**Início:**



Após finalizar a etapa de criação de solicitação, é gerada a seguinte: aprovação pelo coordenador:





Após a aprovação pelo coordenador, é gerada a seguinte: aprovação pelo gerente:





Após a aprovação pelo gerente, é gerada a seguinte: aprovação pelo Diretor:





Como se pode observar, no final da execução de cada tarefa é executada a lógica para verificar se existe uma próxima a ser realizada. Neste exemplo, ao finalizar a etapa de aprovação pelo diretor, não há mais tarefas a serem geradas e então o *workflow* é finalizado. Se houvessem mais tarefas a serem executadas após o “ad-hoc”, elas seriam executadas na sequência, após finalizadas as tarefas do “ad-hoc”.

Caso exista um processo onde a hierarquia de aprovadores ou atividades seja dinâmica mas já é conhecida no início do fluxo, é possível que, ao executar a atividade “ad-hoc”, já sejam geradas todas as tarefas. Esse recurso deve ser utilizado no caso de processos dinâmicos onde não há grande possibilidade de mudanças das atividades a serem executadas. A vantagem é que neste caso é possível visualizar todas as atividades do “ad-hoc” no momento em que ela é iniciada.

### Aprovação Técnica

A aprovação técnica é um tipo de aprovação que normalmente é utilizada em conjunto com outros tipos. Ela serve para que um usuário especialista possa avaliar se as especificações do que está está sendo solicitado/comprado está de acordo com as necessidades da empresa, com os requisitos técnicos necessários, entre outras análises que os aprovadores financeiros não tem condições de avaliar. Conforme as regras da empresa, esse tipo de aprovação ocorre paralelamente aos outros tipos de aprovações ou, então, pode ser pré-requisito para os demais tipos de aprovação.

Não há complexidade em desenhar um *workflow* com o tipo de aprovação técnica, pois é uma atividade comum no *workflow* que será direcionada a um usuário conforme parametrizado no ERP (que pode ser configurado, por exemplo, por família de produto, por produto etc.). Um diferencial da aprovação técnica é que normalmente ela não está atrelada a regras que existem para aprovações financeiras, por exemplo, não validam limites de aprovação do usuário em questão.

Na sequência, é apresentado um exemplo da utilização da aprovação técnica que precede uma aprovação por hierarquia. Neste caso, podemos supor que se está solicitando a compra de um *notebook* para um funcionário que irá entrar na empresa. A aprovação técnica poderia ser direcionada a alguém da área de infraestrutura (TI) e, após a aprovação desse usuário, passaria para aprovação financeira de coordenador, gerente e diretor, por exemplo.





Ao mesclar a aprovação técnica com os outros tipos de aprovação é que acabamos gerando a complexidade dos *workflows*, pois em alguns momentos a aprovação técnica pode ser paralela aos outros tipos, em outros momentos predecessora, e assim por diante. Esse dinamismo entre os tipos de aprovação será apresentado mais adiante.

### Aprovação Padrão

 A aprovação que aqui chamamos de padrão é a aprovação mais simples que temos, onde um documento é enviado para um determinado usuário aprovar. Basicamente, a mesma ideia da aprovação técnica apresentada anteriormente, com a diferença de que não há essa responsabilidade técnica da aprovação. Por exemplo, em uma empresa, onde não existe uma hierarquia de aprovadores e complexidade no processo de aprovação, poderia ser criada uma aprovação padrão, que cairia somente para o diretor da empresa aprovar.

### Lista de Aprovadores ou Consenso

Esse tipo de aprovação consiste em enviar um processo ou um documento para uma lista de usuários avaliarem. Conforme as regras do ERP, desta lista de usuários, um determinado número precisa aprovar para que ele seja considerado efetivamente como aprovado. A lista de aprovadores ou consenso é utilizada quando se tem um grupo de usuários que podem aprovar um determinado documento, sem necessariamente nomear um aprovador. Por exemplo, o documento deve ser aprovado por um dos diretores da empresa. Neste caso, é gerada uma lista de usuários aprovadores, onde estão todos os diretores da empresa. Quando o documento for para aprovação, todos os diretores receberão essa pendência, porém, assim que o primeiro aprovar, o documento será considerado como aprovado, eliminando a necessidade dos demais diretores aprovarem.

Para utilizar esse tipo de aprovação no fluig, pode ser utilizada uma atividade comum, marcando como sendo uma atividade conjunta. Dessa forma, esse tipo de aprovação também só gera complexidade ao ser utilizado em conjunto com outros tipos de aprovação.

### Aprovação por Faixa de Valores (Por Alçada)

O tipo de aprovação por faixa de valores consiste na determinação dos aprovadores de um determinado documento, conforme o seu valor. Por exemplo, até um determinado valor é o coordenador que deve aprovar, acima desse valor e até um limite um pouco maior, o gerente que deve aprovar e, passando disso, a aprovação seria pelo diretor. Isto caracteriza uma aprovação por faixa de valores (alçada). Quando são níveis fixos de aprovação, pode ser desenhado o fluxo com o direcionamento no *workflow*, conforme abaixo:





Se as faixas de aprovações são dinâmicas, ou seja, não é possível definir quantos níveis de aprovação existirão antes da criação do documento, é necessário utilizar o recurso de “ad-hoc” para gerar as atividades em tempo de execução do *workflow*.

Por exemplo, imagine que no ERP existam essas regras descritas na tabela apresentada a seguir. Conforme o item criado na solicitação, as faixas de aprovação serão diferentes e, possivelmente os aprovadores de cada faixa, para cada item também.



**Item da Solicitação**

**Faixas de Aprovação**

**Aprovador da Faixa**

Item X

De 0,00 até 1.000

Líder

De 1.000,01 até 5.000

Coordenador

De 5.000,01 até 999.999.999.9999,99

Gerente



Item Y

De 0,00 até 1.000

Líder

De 1.000,01 até 5.000

Coordenador

De 5.000,01 até 50.0000,00

Gerente

De 50.000,01 até 999.999.999.9999,99

Diretor



Item Z

De 0,00 até 999.999.999.9999,99

Diretor



Temos um nível de complexidade um pouco maior quando, para cada faixa de aprovação, ao invés de existir apenas um aprovador, existe uma hierarquia de aprovadores. Abaixo é detalhado um exemplo com essa situação:

**Item da Solicitação**

**Faixas de Aprovação**

**Aprovadores da Faixa**

Item X   

De 0,00 até 1.000

Líder

De 1.000,01 até 5.000

Líder

Coordenador

De 5.000,01 até 999.999.999.9999,99

Líder

Coordenador

Gerente



Item Y

De 0,00 até 1.000

Líder

De 1.000,01 até 5.000

Líder

Coordenador

De 5.000,01 até 50.0000,00

Líder

Coordenador

Gerente

De 50.000,01 até 999.999.999.9999,99

Líder

Coordenador

Gerente

Diretor



Item Z

De 0,00 até 999.999.999.9999,99

Líder

Coordenador

Gerente

Diretor



Neste caso, após a atividade "Criar Solicitação" é necessário gerar, por meio de uma atividade “ad-hoc”, todas as aprovações que devem ocorrer. A seguir é apresentado um exemplo de como ficaria uma solicitação com os três itens do exemplo acima:





## Paralelismo de Atividades

* * *

Conforme citado anteriormente, todos os tipos de aprovação podem ser utilizados em conjunto e neste ponto teremos que tratar o paralelismo de atividades e flexibilidade no momento que devem ser executadas. Ou seja, tratar no *workflow* todo o dinamismo de parametrizações que o ERP permite.

Quando houver a necessidade de utilização de atividades paralelas, se elas tiverem uma estrutura fixa, pode-se utilizar o recurso de “*Fork-Join*” para tratar o paralelismo no próprio desenho do *workflow*. Porém, quando o paralelismo for dinâmico, ou seja, não há como prever antes do *workflow* estar em andamento se haverá paralelismo entre as atividades ou quantos fluxos de atividades paralelas serão utilizados, o recurso é utilizar uma atividade “ad-hoc” para contemplar a situação.

Neste caso, tem-se basicamente a mesma estrutura apresentada anteriormente para hierarquia, com a diferença de que podem ser gerados fluxos de atividades que podem ocorrer de forma paralela, sequencial ou com uma mescla dos dois no mesmo *workflow*. Existe a opção de criar todas as atividade do “ad-hoc” já no momento de iniciá-la no *workflow*, ou então, gerar de forma incremental na medida em que forem ocorrendo. Utilizando o mesmo exemplo que já vinha sido discutido e supondo que a solicitação de compra precise passar por uma hierarquia de aprovadores e, além disso, por uma aprovação técnica. Caso esses dois tipos de aprovação tenham necessidade de ocorrer de forma paralela, o fluxo ficaria conforme abaixo:





Se as atividades estão sendo geradas sob demanda, inicialmente seriam geradas “Aprovação Líder” e “Aprovação Técnica” e as demais conforme o *workflow* vai evoluindo. Assim como na questão da hierarquia, é possível também, gerar já no início todas as tarefas que serão executadas no “ad-hoc”. A quantidade de fluxos paralelos é variável conforme a necessidade da rotina de negócio. Neste caso pode existir apenas um fluxo ou diversos.

Para cada atividade gerada dentro do “ad-hoc” não existem todas as opções de mecanismo de atribuição que existem para as atividades comuns. Existem duas opções: definir que a atividade será para um usuário em específico ou para uma lista de usuários. No caso da lista, todos os usuários a recebem para executá-la. Caso exista a necessidade de criar uma atividade de consenso, o ERP controla isso.

Nota

Não é possível atribuir tarefas “ad-hoc” para grupos.

O exemplo apresentado na sequência é uma mescla da utilização de vários recursos comentados até o momento. Neste caso, tem-se a criação de uma solicitação de compra com dois itens e cada um desses itens possui uma estrutura de aprovação diferenciada.





Considerando que o processo “Aprovação da Solicitação” é um sub processo do principal, são geradas duas instâncias dele, uma para aprovação do Item X e outra para aprovação do item Y. Neste sub processo que existe a atividade de “ad-hoc”, para o Item X, é gerada uma hierarquia de aprovadores e, paralelamente, uma aprovação técnica para um único aprovador. Já para o Item Y, o tipo de aprovação será uma lista de usuários aprovadores e, quando o primeiro aprovar, já se considera a atividade como aprovada - neste caso, seria utilizado o recurso de atividade conjunta.

Dentro da atividade de “ad-hoc” existe um mecanismo para que seja possível cancelar tarefas pendentes (desconsiderá-las) e passar para uma próxima tarefa que não seja parte do “ad-hoc”. Por exemplo, nesta situação apresentada, se todas as tarefas do “ad-hoc” tivessem sido geradas já no início, ao chegar na atividade “Aprovação Coordenador” e o usuário rejeitar, é necessário encaminhar o *workflow* para a próxima tarefa após o “ad-hoc” e cancelar outros fluxos paralelos que estejam em andamento.





Pelo serviço é possível identificar no “ad-hoc” qual tarefa está em execução no momento e identificá-las pelos Ids gerados.

Dessa forma, é possível ter o controle de informar ao *workflow* que uma atividade foi realizada pelo ERP e precisa mover o *workflow* para uma outra tarefa. Da mesma forma é possível informar ao *workflow* que uma atividade foi realizada e é necessário gerar a próxima tarefa. Um exemplo disso seria o coordenador aprovando a solicitação pelo ERP: o fluig precisa ser avisado disso para que possa gerar a próxima tarefa que seria a “Aprovação pelo Gerente”.

Dentro do recurso do “ad-hoc” não é possível estabelecer fluxos conforme o apresentado abaixo, onde o *workflow* começa com somente uma atividade, mas em determinado ponto é necessário gerar um paralelismo de atividades e depois retorna a uma única atividade novamente.





# Nomenclatura dos *Workflows*

* * *

Para que os usuários que utilizam o fluig possam ter a sensação de utilizarem uma interface única para todos os ERPs, é necessário haver uma padronização na nomenclatura dos *workflows*.

Essa necessidade é visível quando se imagina um usuário aprovador de documentos que sejam originários de diversos sistemas diferentes. Por exemplo, um diretor que aprova pedidos de compra de várias filiais e cada filial utiliza um ERP diferente. Se não houver uma padronização, esse diretor pode receber vários *workflows* com nomes distintos, porém todos representando a necessidade de aprovar um pedido de compra. Exemplos que poderiam ocorrer:

-   aprovação de pedido de compra;
-   aprovação de necessidade de compra;
-   análise de pedido de compra;
-   aprovar pedido.

Para que isto não ocorra, deve ser seguida a seguinte nomenclatura: substantivo + documento/descrição + (complemento). A parte do complemento é opcional e serve para informar uma especialização do *workflow*. Por exemplo, existe o *workflow* “Aprovação de Pedido de Compra”, porém para alguns ERPs pode existir diferentes pedidos de compra, então poderia ser utilizado o complemento “Aprovação de Pedido de Compra (Emergencial)”.

Alguns exemplos de nomes de *workflows*:

-   aprovação de pedido de compra;
-   aprovação de pedido de compra (emergencial);
-   criação de pedido de compra;
-   atendimento de necessidade de compra.

Como é no processo de aprovação que essa questão de nomenclaturas é mais importante, abaixo estão listados os principais documentos que passam pelo processo de aprovação e o nome de *workflow* a ser utilizado:

Nome *Workflow*

Descrição

Aprovação de Solicitação de Compra

Utilizado para aprovar uma compra de material.

Aprovação de Requisição de Estoque/Armazém

Utilizado para aprovar uma requisição de material do estoque ou armazém.

Aprovação de Solicitação de Serviço

Utilizado para aprovar solicitações de serviço.

Aprovação de Solicitação de Cotação

Utilizado para aprovar solicitação de cotação de material ou serviço.

Aprovação de Cotação de Compra

Utilizado para aprovar cotações de compra realizadas pelo comprador.

Aprovação de Pedido de Compra

Utilizado para aprovar pedidos de compra.

Aprovação de Contrato de Compra

Utilizado para aprovar contratos de compra.

Aprovação de Crédito

Utilizado para aprovação de crédito. Ex.: de cliente, de pedido de venda.

Aprovação de Títulos

Utilizado para aprovação de títulos (financeiro).

Aprovação de Antecipações de Fornecedores

Utilizado para aprovação de antecipações de fornecedores.

Aprovação de Pagamento Extra Fornecedores

Utilizado para aprovação de pagamento de extra fornecedores.

Aprovação de Pagamentos

Utilizado para aprovação de pagamentos.



# Gestão do *Workflow*

* * *

## Usuários Substitutos

O fluig possui um cadastro de usuários substitutos que servem para todas as atividades realizadas dentro dele.  Porém, conforme a necessidade de negócio do *workflow* criado, esses substitutos não podem ser utilizados de forma genérica em todo o fluig. Por isso há uma forma de definir usuários substitutos por tipo de *workflow*.

Esses usuários substitutos podem ser cadastrados no próprio fluig ou sincronizados por serviços disponibilizados. Para cada *workflow* criado, é importante haver uma análise para definir se o processo em questão tem a necessidade de definir substitutos específicos para o tipo de *workflow* ou se pode utilizar os do fluig. Caso seja necessário que os usuários substitutos sejam por *workflow* e o ERP controle isso, é possível remover a permissão do item de menu que define esses usuários substitutos (mas neste caso o usuário não pode cadastrar substitutos para nenhum *workflow* em específico).

## Gestores de Processo

Os gestores de processo são os usuários que possuem autonomia para realizar qualquer movimentação dentro de um *workflow* criado. Por isso, é importante cautela ao definir quem serão esses usuários para cada tipo de *workflow*.

# Central de Tarefas

* * *

Pela central de tarefas o usuário tem acesso a todas as suas pendências a serem executadas. Para que seja possível identificar rapidamente a atividade a ser executada (documento a ser aprovado ou outra atividade) são necessários filtros que permitam, além de identificar os documentos por processo de *workflow*, localizar um *workflow* em específico. Por exemplo, em uma indústria, caso falte matéria-prima e exista urgência na obtenção dela, o comprador faz o pedido de compra e envia para aprovação dos superiores. Logo em seguida, para agilizar o processo, esse comprador entra em contato com o aprovador para solicitar prioridade na aprovação. O comprador solicita a aprovação do pedido “X”, normalmente ele não sabe o número da solicitação gerada no fluig para informar diretamente ao seu superior. O aprovador, como possui diversos outros pedidos pendentes de aprovação, tem a necessidade de encontrar esse *workflow* de forma simples e ágil.

Os filtros da central de tarefa permitem identificar solicitações específicas de um determinado processo *workflow*. Eles são apresentados em visões, onde é possível informar as colunas do formulário do processo que farão parte da visão. O usuário deve acessar a visão e no campo de filtro da visão informar o valor do filtro desejado (o filtro realiza a busca nos registros em tela). É importante definir filtros específicos para cada *workflow*, que são desenvolvidos pelo ERP e consumirão serviços do fluig para criação. Dessa forma, o usuário pode identificar suas pendências mais rapidamente. Esses filtros podem ser criados no fluig por meio de serviços. É importante então, existir algum mecanismo de inicialização desses filtros na implantação do *workflow*.

Complementando os filtros para busca de um *workflow* em especifico, a central de tarefas permite também que as colunas que são utilizadas para exibir detalhes da pendência para o usuário, sejam personalizadas conforme o processo *workflow*. Essas colunas, da mesma forma que os filtros, podem ser definidas por serviço pelo ERP e precisam ser criadas na implantação do *workflow*. Dessa forma, com as informações apresentadas na listagem da central de tarefas, o usuário já consegue identificar alguns detalhes da atividade sem que precise abrir o formulário do *workflow* para isso.

Tendo essa visão da central de tarefas do fluig para os *workflows* de negócio, é muito importante que, além da modelagem de novo *workflow* (definição do fluxo das atividades, as responsabilidades e informações que farão parte dele) é necessário definir as informações de filtro e as colunas que ajudarão o usuário a identificar uma atividade antes de efetivamente executa-la. É importante lembrar que a central de tarefas é, em muitas situações, o primeiro contato que o usuário terá com um *workflow*.
