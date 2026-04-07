# INV0003_Acerto_de_Saldo_em_Estoque_através_de_Inventário

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=4813647](https://tdn.totvs.com/pages/releaseview.action?pageId=4813647)
> **Domínio:** TDN (TOTVS Developer Network)

---

# Assunto

**Produto:**

TOTVS Gestão de Estoque, Compras e Faturamento

**Versões:**

12.1.4 e superiores

**Ocorrência:**

Acerto de Saldo em Estoque

**Ambiente:**

Manutenção de Inventário

**Passo a passo:**

Como parametrizar o sistema para acertar Saldo do Produto em Estoque através de Inventário?



-   ***Definição do Processo***

O inventário físico é a contagem de todos os estoques da empresa, para verificação se as quantidades correspondem aos controles do estoque. Tem por finalidade gerar movimentações de acerto do saldo em estoque, adequando assim, saldo do produto no aplicativo com o saldo do produto físico na empresa.



-   ***Parametrizações Necessárias***

Acessar o módulo de Serviços Globais menu **Administração | Fórmula | Inserir** e incluir fórmula que será considerada para composição do valor financeiro no acerto positivo de saldo.

Ex.: (KQT \* KPU)



Acessar **Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento** selecionar o processo que o tipo de movimento a ser utilizado para este fim foi configurado. Para este processo deverão ser parametrizados 02 tipos de movimentos do grupo 4.



***Tipo de Movimento 4.1.X1 – Aumenta Saldo 2 em Estoque***

**Etapa Mov – Identificação**

\- Edita numeração: Mostra



**Etapa Item – Identificação 2/2**

Unidade de Medida Padrão: Unidade de Controle



**Etapa Item – Preços**

\- Edição do Preço: Mostra

\- Buscar preço em: Custo médio (sugerido)



**Etapa Item – Lote/Grade/Num.Série**

\- Consiste lote: Habilitado

Informar os status de lotes a serem movimentados



**Etapa Estoque - Estoque**

\- Saldo Atual: Aumenta

\- Saldo Financeiro: Aumenta

\- Fórmula do valor financeiro: referenciar fórmula inclusa anteriormente que será responsável pela composição do custo do produto em estoque



***Tipo de Movimento 4.1.X2 – Diminui Saldo 2 em Estoque***

**Etapa Mov – Identificação**

\- Edita numeração: Mostra



**Etapa Item – Identificação**

Unidade de Medida Padrão: Unidade de Controle



**Etapa Item – Preços**

\- Edição do Preço: Mostra

\- Buscar preço em: Custo médio (sugerido)



**Etapa Item – Lote/Grade/Num.Série**

\- Consiste lote: Habilitado

Informar os status de lotes a serem movimentados



**Etapa Estoque - Estoque**

\- Saldo Atual: Diminui

\- Saldo Financeiro: Diminui



Observação:

Este exemplo específico está considerando acerto do “Saldo 2”. A rotina em questão permite inventariar os saldos **| 2 – 5 – 6 – 7 – 8 – 9 – 10 |**



Acessar **Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | 04.04.07 | Avançar** onde será definida parametrização do inventário.



**Etapa Definições de Inventário**

\- Máscara do Código do Inventário: definir máscara pertinente inventário

\- Tipo do Inventário: definir tipo de inventário a ser realizado, podendo escolher dentre as opções | Produto – Grade Numerada – Lote – Número de Série|

\- Tipo de Movimento de Acerto de Entrada do Saldo 2: informar tipo de movimento parametrizado para “aumentar” saldo 2

\- Tipo de Movimento de Acerto de Saída do Saldo 2: informar tipo de movimento parametrizado para “diminuir” saldo 2



Importante:

Inventário por Produto: deve ser utilizado apenas quando o produto não possuir controle de lote, grade e/ou número de série. Tem por finalidade, acertar saldo do produto em estoque.

Inventário por Lote: deve ser utilizado apenas quando o produto possuir controle de lote, onde o inventário vai acrescentar ou deduzir informações de lote e local de estoque x filial definidos no inventário. Esta rotina “não” fará validação entre saldo do produto em estoque e saldo do produto por lote. Este processo fica a cargo da rotina de “Acerto de Lote” realizado através de Plugin de Acerto, que pode ser solicitado junto ao suporte.

Inventário por Grade Numerada: deve ser utilizado apenas quando o produto possuir controle de grade numerada (modelo antigo), onde o inventário vai acrescentar ou deduzir informações de grade por local de estoque x filial definidos no inventário.

Número de Série: deve ser utilizado apenas quando o produto possuir controle por número de série, onde o inventário vai acrescentar ou deduzir informações de número de série e local de estoque x filial definidos no inventário. Esta rotina “não” fará validação entre saldo do produto em estoque e saldo do produto por número de série.



Acessar o módulo de Serviços Globais menu **Segurança | Usuário | Anexos | Permissão por Tipo de Movimento** e selecionar os tipos de movimentos parametrizados. A seguir habilitar opções que o usuário terá acesso nos tipos de movimentos em questão.

Na sequência, acessar aba **Segurança** e averiguar os perfis vinculados aos usuários. De posse desta informação, ainda no módulo de Serviços Globais acessar o menu **Segurança | Perfil** editar os perfis desejados e selecionar aba **Acesso a Menus** na qual o usuário deve “Permitir Acesso” a opção **\[02\] Estoque > \[02.01\] Gestão de Estoque > \[02.01.11\] Inventário**.



-   ***Descrição do Processo***

Montar ambiente de teste para validação do processo

Acessar o menu **Estoque | Processos | Regerar Saldos e Custos** selecionar os produtos desejados e marcar opção **(x) Forçar Regeração Total** se a data de fechamento de estoque for “Geral”, ou a opção **(x) Regerar todos os Saldos** se a data de fechamento de estoque for por saldo.

Acessar o menu **Estoque | Inventário | Manutenção de Inventário | Novo**, onde será aberto o assistente de inclusão de inventário, preencher informações abaixo e clicar em **<AVANÇAR>.**

\- Código do Inventário: colocar código a ser considerado no inventário

\- Saldo a ser Inventariado: informar saldo a ser considerado para inventário

\- Bloqueia movimentação: esta opção deve ser marcada quando o produto não puder ser movimentado antes de concluir o processo de inventário.

\- Tipo do Inventário: Informar o tipo de produto que será inventariado.



Importante:

\- Ao habilitar opção **| Bloqueia Movimentação |** e gerar inventário, a movimentação será inclusa com a data do sistema e o cálculo do campo “Diferença” vai considerar valor informado na “Contagem” subtraído pelo Saldo do Produto em estoque para filial e local de estoque selecionado.

\- Ao desabilitar opção **| Bloqueia Movimentação |** a movimentação de inventário será inclusa com a “Data Base” preenchida no inventário, e o cálculo do campo “Diferença” vai considerar “Data Base do Inventário – 1”, ou seja, Saldo Anterior + Quantidade com Sinal da tabela TRELSLD da última movimentação do produto por filial e local de estoque selecionado, cuja data de movimentação seja igual ou menor que a data base do inventário. Desta forma, as movimentações inclusas com data de movimentação posterior à data base do inventário não serão consideradas para composição do campo “Diferença”.

Para preenchimento da “Data Base” o usuário deverá acessar o inventário através da visão, selecionar código desejado, clicar no ícone |  
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/4813647/image2017-11-16_15-56-14.png?version=1&modificationDate=1510858575000&api=v2)
\- Editar | e preencher o campo **| Data Base |**.



**Exemplo de composição do valor com opção “Bloqueia Movimentação” desabilitado:**

Dados da Ficha Física Financeira

Data Movimento    Quantidade    Qtde Saldo

10/08                                                15.000

22/09  1.2.01             44.000           59.000

22/09 2.2.01                9.000           50.000

24/09 1.2.01                1.000           51.000



Dados do Inventário | Qtde : 60.000 – Data Base : 22/09 |

Data Movimento       Quantidade      Qtde Saldo

10/08                                                    15.000

22/09 1.2.01               44.000              59.000

22/09 2.2.01                 9.000              50.000

22/09 4.1.01               10.000              60.000 (movto originado por inventário)

24/09 1.2.01                 1.000              61.000



Para acerto de inventário foi considerado saldo do produto em estoque em 22/09, diminuída da informação do inventário onde foi apresentada diferença de 10.000 para chegar ao total informado no inventário, que neste exemplo específico foi | **60.000** |.

O acerto em questão não considerou movimentação inclusão com data de **24/09**, apesar de já estar gravada na base no momento da inclusão do inventário.



A seguir será solicitado as demais informações para que o acerto seja feito corretamente **Selecione as filiais e locais de Estoque que serão Inventariados |** onde o usuário deverá clicar no ícone 
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/4813647/image2017-11-16_15-57-26.png?version=1&modificationDate=1510858646000&api=v2)
 preencher as informações abaixo e clicar em **<AVANÇAR>.**

Filial: Selecionar o código de uma ou mais filiais a ser inventariada.

Local de Estoque: Selecionar um ou mais locais de estoque a ser inventariado.

Centro de Custo: Informar o centro de custo a ser considerado neste inventário. Este campo é de preenchimento “opcional” e será apresentado no movimento gerado.



Na sequência será apresentada aba **| Assistente de Inventário | Informe os produtos que serão Inventariados |** onde deverá clicar no ícone |
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/4813647/image2017-11-16_15-57-38.png?version=1&modificationDate=1510858659000&api=v2)
  - Incluir | Onde será possível filtrar os produtos a serem inventariados, ou clicar no ícone | 
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/4813647/image2017-11-16_15-57-55.png?version=1&modificationDate=1510858675000&api=v2)
 - Adicionar sorteando | para seleção dos produtos. Depois de definidos itens, deverá clicar em **| Finalizar |** para salvar o inventário.



Importante:

\- O inventário pode ser feito por | Produto – Grade Numerada – Lote – Número de série |, para cada situação, serão apresentados ícones compatíveis com opção parametrizada no inventário. Neste exemplo específico será considerado “Inventário por Produto”

\- Para a opção Adicionar sorteando são selecionados os produtos que não estão incluídos em inventário, ou seja, não inventariados. São selecionadas informações de produto como Coligada, Identificador do Produto, Código do Produto, Código Reduzido, Nome Fantasia, Unidade de Controle e Código de Grade antiga. O retorno dos dados realiza o filtro pela coligada, tipo do inventário e produtos que não estão incluídos em inventário até a data informada. Ao abrir a tela são exibidos a quantidade máxima de itens não inventariados e sugerido como sorteio a metade destes itens no campo "Nº de produtos a serem sorteados."



Na visão do inventário deverá clicar na aba Itens onde serão exibidos todos os itens a serem inventariados mostrando todas as informações destes no grid de itens. A seguir clicar duplamente sobre o item desejado e preencher os dados do campo **| Contagem |** e marcar a opção **| (x) Gera Acerto |**.



Importante:

\- Os dados da 2ª Contagem sobrepõem informação da 1ª Contagem, e os dados da 3ª Contagem sobrepõem a informação da 2ª Contagem e da 1ª Contagem. Diante disto, não é necessário que preencha os 03 campos, apenas se for feita mais de uma contagem para o inventário.

Depois de preenchida contagem deverá acessar o menu **Processos | Apurar Diferença do Inventário** | para que seja feita verificação entre os dados em estoque com a informação definida pelo usuário.



Importante:

\- O campo “**Diferença**” será visualizado ao editar o item de inventário, e vai considerar diferença entre o saldo do produto por local x filial apresentados no sistema com a informação preenchida pelo usuário na contagem do inventário. Esta informação será preenchida apenas quando for executado processo “Apurar Diferença do Inventário” na visão do inventário.

\- Ao deixar contagem dos itens de inventário vazio e mandar “Apurar Diferença do inventário” a contagem será considerada como “ZERO”, ou seja, será inclusa movimentação zerando o saldo dos produtos em estoque.

\- Para fazer inventário por “lote” é necessário que a informação do lote e do produto em estoque sejam as mesmas, caso contrário, deverá ser feito “acerto de lote” para igualar as informações antes de realizar inventário.

Depois de apurada diferença deverá acessar o menu **Processos** | **Gerar Acertos e Encerrar o Inventário** de forma que serão inclusas movimentações de acerto a maior ou a menor, obedecendo diferença apresentada nos itens do inventário.



-   ***Informações Adicionais***

\- Depois de feito acerto dos saldos físicos deve-se regerar saldos e custos dos produtos para que o valor financeiro também seja ajustado.

\- O saldo financeiro será ajustado apenas para o “Saldo 2” obedecendo parametrização do tipo de movimento utilizado para este fim.

\- É sugerido que o processo seja realizado inicialmente em uma base teste para validação.



[http://wikihelp.totvs.com.br/WikiHelp/EST/EST.Inventario.aspx](http://wikihelp.totvs.com.br/WikiHelp/EST/EST.Inventario.aspx)



**Observações:**

Para mais informações:



 [Consulte o WikiHelp TOTVS](http://wikihelp.totvs.com.br/WikiHelp/FIS/FIS.ECF.aspx)



   **![Imagem](https://tdn.totvs.com/download/thumbnails/63865769/Fluig.jpg?version=1&modificationDate=1407880160000&api=v2)
   COMUNIDADE**  [R@Materiais e Suprimentos](https://fluig.totvs.com/portal/p/10097/subject/rmateriais)



**Canais de Atendimento:**

**Abertura de Chamados** Através do Portal Totvs [www.suporte.totvs.com.br](http://www.suporte.totvs.com.br/)

**Telefônico:** 4003-0015 Escolhendo as opções 2 – (Software), 2 – (Suporte Técnico), 3 – (RM), 5 – (Materiais)
