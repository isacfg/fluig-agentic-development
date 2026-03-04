# Datas

> **Fonte:** [https://tdn.totvs.com/display/public/LRM/Datas](https://tdn.totvs.com/display/public/LRM/Datas)
> **Domínio:** TDN (TOTVS Developer Network)

---

**Data de Emissão:**Informe qual será o tipo de edição da Data de Emissão, as opções são:

-   Edita: A data de emissão do movimento será editada no movimento.
-   Mostra: se esta deverá ser utilizada, mas, não poderá ser editada.
-   Não edita: A data de emissão não será utilizada em movimentos deste tipo, ou seja, o campo data de emissão nem aparecerá no movimento.

**Data de Emissão em Branco:** Marque esta opção se deseja que a data de emissão permaneça em branco ao incluir ou receber um determinado movimento.
***Observação**:* Esta opção estará habilitada apenas se a Data de Emissão estiver configurada como "Edita".

**Data do Movimento:** Informe qual será a data de movimento default, as opções são:

-   Data de Emissão: se a data do movimento deverá ser igual a de emissão.
-   Data de Entrada/Saída: deverá ser igual a data de entrada/saída.
-   Data Extra 1: deverá ser igual a data extra 1.
-   Data Extra 2: deverá ser igual a data extra 2.
-   Data Processamento: deverá ser igual a data de processamento do movimento, no qual o estoque é afetado.

**Exibir data e hora de criação do movimento:** Marcando esta opção o sistema habilitará o campo "data de criação" na pasta identificação do movimento

**Edição da Data Lançamento:** Informe qual o tipo de edição para esta data, as opções são:

-   Edita: se esta data deverá ser utilizada e informada no momento da inclusão do movimento.
-   Edita Obrigatoriamente: se esta data deverá ser obrigatória na inclusão do movimento.
-   Mostra: se esta deverá ser utilizada, mas, não poderá ser editada.
-   Não Edita: não será utilizada.Nome da Data Lançamento:
-   Dê um nome para a data de lançamento.

**Data de Lançamento Default:** Informe qual será a data de lançamento default, as opções são:

-   Data de Emissão: se a data de lançamento deverá ser igual a de emissão.
-   Data de Entrada/Saída: deverá ser igual a data de entrada/saída.
-   Data Extra 1: deverá ser igual a data extra 1.
-   Data Extra 2: deverá ser igual a data extra 2.
-   Data Processamento: deverá ser igual a data de processamento do movimento, no qual o estoque é afetado.

Exemplo*,* O contribuinte recebe uma NF de um fornecedor em setembro/2005, guarda esta NF na gaveta e lembra de registrá-la somente em novembro/2005. Esta nota deverá ser registrada nos livros fiscais de novembro/2005 e nas rotinas fiscais de novembro, deverá constar como débito extemporâneo.
***Observação**:* 

-   A data de lançamento será utilizada na escrituração dos movimentos e para o lançamento fiscal de Débitos / Créditos Extemporâneos. 
-   A consistência dos períodos de apuração, que antes utilizava a data de movimento, passará a utilizar a Data de Lançamento.
-   Algumas datas aparecem na janela de edição dos movimentos na pasta cabeçalho.
-   Se o campo utiliza prazo de entrega estiver setado no movimento destino, o campo data de entrega não será carregado, o mesmo será calculado a partir do prazo informado o movimento destino.

**Edição da Data de Entrega:** Informe qual o tipo de edição para esta data, as opções são:

-   Edita: se esta data deverá ser utilizada e informada no momento da inclusão do movimento.
-   Mostra: se esta deverá ser utilizada, mas, não poderá ser editada.
-   Não Edita: não será utilizada.

**Data de Entrega Default:** Informe qual a data default para a data de entrega, as opções são:

-   Nenhum: o campo não será preenchido com nenhuma data.
-   Data de Emissão: será preenchido com a data de emissão do movimento.
-   Data do Sistema: será preenchido com a data do sistema, ou seja, a data do computador.

**Utiliza Prazo de Entrega:** Marque este campo se o tipo de movimento for utilizar prazo de entrega.

**Data Prazo de Entrega:**

-   Com o parâmetro Utiliza Prazo de Entrega marcado poderá ser definida uma Data Base para o Cálculo da Entrega ou Saída do Movimento.
-   São quatro parâmetros disponíveis:

\- Data de Emissão;
\- Data Extra 1;
\- Data Extra 2;
\- Data de Saída.
***Observação**:* Desse modo, a Data de entrega será a Data Parametrizada + Prazo de Entrega.

**Edição da Data de Entrada/Saída:** Informe "Edita" se a data de entrada deverá ser apresentada no movimento para edição, "Mostra", se a data deverá aparecer, mas não será editada ou "Não Edita", ou seja, não será utilizada para os movimentos deste tipo.

**Nome da Data de Entrada/Saída:** Dê um nome para a data de entrada.

**Data de Entrada/Saída Default:** Informe de acordo com as opções. São elas:

-   Nenhum: o campo não será preenchido com nenhuma data.
-   Data de Emissão: o campo será preenchido com a data de emissão do movimento.
-   Data do Sistema: será preenchido com a data do sistema, ou seja, a data que está armazenada no computador.

**Data Extra 1/Data Extra 2:** Se desejar utilizar outras datas para algum outro controle, pode-se utilizar estas duas, os campos a preencher são os mesmos descritos acima em "Data de Entrada". Exemplo*, n*o movimento do tipo de "venda no balcão", podemos criar uma data com o nome de "entrega do produto", e parametrizar para buscar esta data na data de emissão do movimento.

**Hora de Entrada:** Informe "Edita" se a hora de entrada deverá ser editável, "Mostra", se a hora deverá aparecer, mas não será editada ou "Não Edita", ou seja, não será utilizada para os movimentos deste tipo.

O movimento considera **Horário** conforme o horário obtido do servidor onde o host está habilitado.

**Data Início Prestação/Data Término Prestação**

Informe de acordo com as opções abaixo:

-   Nenhum: o campo não será preenchido com nenhuma data.
-   Data Início Prestação: o campo será preenchido com data informada pelo usuário, mas será visualizado apenas quando o código do modelo do documento estiver com valor 21, 22 ou 62.
-   Data Término Prestação: o campo será preenchido com data informada pelo usuário, mas será visualizado apenas quando o código do Modelo do documento estiver com valor 21, 22 ou 62.

**Data Leitura/Data Leitura Anterior:** 

Informe de acordo com as opções abaixo:

-   Nenhum: o campo não será preenchido com nenhuma data.
-   Data Leitura: o campo será preenchido com data informada pelo usuário, mas será visualizado apenas quando o código do modelo do documento estiver com valor 06 ou 66.
-   Data Leitura Anterior: o campo será preenchido com data informado pelo usuário, mas será visualizado apenas quando o código do modelo do documento estiver com valor 06.

***Observação**:* Os campos  Inicio Prestação, Término Prestação, Data Leitura e Data Leitura Anterior são utilizados para atender a Portaria SRE N 03.
