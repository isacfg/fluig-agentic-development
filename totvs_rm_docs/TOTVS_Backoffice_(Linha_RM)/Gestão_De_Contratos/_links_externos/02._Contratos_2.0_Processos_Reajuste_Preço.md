# 03. Contratos 2.0 | Processos | Reajuste Preço

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=937710134](https://tdn.totvs.com/pages/releaseview.action?pageId=937710134)
> **Domínio:** TDN (TOTVS Developer Network)

---





-   [Reajustar Preço](#)
-   [Cancelar Reajuste Preço](#)

O processo de Reajuste de Preço do contrato tem como objetivo atualizar o saldo pendente de cada item recalculando o valor das parcelas com base no indice indicado no item.

Sobre o Reajuste de Preço:

-   Permite selecionar múltiplos contratos para reajuste simultâneo.

-   Ao reajustar um contrato, todos os itens são atualizados individualmente, aplicando o índice, o dia de cotação e a defasagem selecionados.

-   Apenas contratos em andamento e com data final posterior à data do reajuste podem ser reajustados.

-   Um contrato/item em andamento deve ter status diferente de "Faturado", e sua data final deve ser superior à data do último reajuste aplicado.

-   É possível realizar vários reajustes no mesmo contrato, desde que não haja sobreposição — ou seja, o mesmo mês não pode ser reajustado mais de uma vez.

-   Caso um reajuste seja feito com informações incorretas, é possível cancelar o reajuste de preço e refazê-lo corretamente.

-   Se houverem parcelas com valores diferentes no item do contrato, o reajuste será aplicado proporcionalmente ao valor individual de cada parcela.


O Reajuste Preço só atende contratos administrativos, conforme a Lei nº 14.133/2021 (Nova Lei de Licitações) estabelece que o reajuste deve ser aplicado após 12 meses da data limite para apresentação da proposta ou do orçamento, e utiliza índices previamente definidos no edital e contrato. Além disso, o reajuste serve para recompor perdas inflacionárias, e não para reduzir valores de contrato. Então não será realizado ajuste quando o índice for negativo.

-   **Periodicidade:** O reajuste deve ocorrer anualmente, contando a partir da data limite. 
-   **Previsão contratual:** A possibilidade de reajuste deve estar expressamente prevista no edital e no contrato, com a definição dos índices aplicáveis. 
-   **Índices:** A escolha do índice (ex: INCC, IPCA, IGP-M) deve refletir a realidade do mercado e a variação dos custos do objeto do contrato. 
-   **Cálculo do reajuste:** A fórmula para o cálculo geralmente envolve o valor contratual, o índice inicial (do período da proposta) e o índice atual (do período do reajuste).



* * *



 Parâmetros do Processo

Para que o processo de Reajuste de Preço seja executado, é obrigatório o preenchimento de todos os parâmetros exigidos.

Na tela do processo, é necessário informar a Data de Reajuste. A partir dessa data, o sistema buscará automaticamente, para cada item do contrato, as seguintes informações: Índice e Defasagem.

* * *

**Data do Reajuste**

A data de reajuste é utilizada para determinar o ponto de interseção a partir do qual será calculado o valor reajustável do contrato — ou seja, o saldo pendente a partir dessa data será considerado para o novo cálculo.

* * *

**Índice**

O índice é fundamental para calcular a variação que será aplicada ao valor do item do contrato.

-   -   Obrigatório: É necessário utilizar um índice para realizar o reajuste. Caso uma moeda seja informada em vez de um índice, o reajuste não será realizado, pois o fator de atualização só é calculado com base em índices.

    -   O fator de atualização é obtido a partir do índice do mês de referência em relação ao mês anterior.


**Exemplo**:
Se a data de referência for 01/07/2022, o fator de atualização será calculado entre os índices dos meses 06/2022 (4,05) e 07/2022 (4,06).


          ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/937710134/image2022-5-24_16-1-42.png?version=1&modificationDate=1745612037713&api=v2)

* * *

**Dia da Cotação**

Define o dia específico do mês a ser utilizado na obtenção do índice.

* * *

**Defasagem**

Indica o número de meses de deslocamento a ser aplicado no mês de referência para buscar o índice desejado.

Para mais informações de Indices e Cotações acesse [Indices e Cotações](https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500006361921-Cross-Segmentos-Backoffice-Linha-RM-FIN-Como-cadastrar-Moedas-e-%C3%8Dndices)

 Entendimento do processo de reajuste de preço

-   [Data de Reajuste (Data de Corte)](#)
-   [Data do Último Reajuste](#)
-   [Número de Meses de Reajuste](#)
-   [Histórico de Reajustes](#)
-   [Memória de Cálculo](#)

É informada como parâmetro no processo e internamente tratada como “data de corte”. Essa data define o ponto exato de separação entre:

-   Saldo a reajustar: parcelas com data igual ou posterior à data de corte, que:

    -   Estejam com status diferente de "Faturado";

    -   Não possuam medições vinculadas;

    -   Exemplos de status válidos: “A Faturar” e “A Faturar / Previsto”.

-   Saldo anterior: inclui todos os valores com data anterior à data de corte, independente do status (inclusive já faturadas ou previstas).



A data do último reajuste é registrada no item do contrato em um campo não visível em tela, essa data serve como controle para evitar a duplicidade de reajustes, e identifica o ponto onde um novo reajuste deve iniciar.

Quando um contrato ainda não foi reajustado o valor desse campo na base é nulo, quando o valor é nulo o "Reajuste de Preço" o define como a data de início da vigência do item, com isso um contrato poderia ser reajustado desde o seu primeiro dia, por isso prevalece sobre a "data do último reajuste" a "data de corte" informada no processo permitindo ao usuário separar a parte do contrato que deve ser reajustada da que deve permanecer da forma original.

##### Data Início

A data início é observada por item de contrato, “data de início do item de contrato”, campo visível em tela e informado pelo usuário.

**Cálculo do Período de Reajuste**

1.  Data Inicial Calculada

    -   Se não houve reajuste anterior, usa a data de início de vigência do item.

    -   Se houve reajuste, compara a data de corte informada com a data do último reajuste. A que for mais recente será usada como início.

2.  Data Final Calculada

    -   Se o contrato já terminou (data fim < data atual), a data final é a data atual.

    -   Se o contrato ainda está vigente:

        -   Se o período de reajuste excede 12 meses, limita-se a 12 meses a partir da data inicial calculada.

        -   Caso contrário, usa a data de fim de vigência do item.

3.  Número de Meses de Reajuste

    -   É a diferença entre a data inicial e a data final calculadas.


* * *

**Aplicação do Reajuste**

-   O saldo a reajustar é atualizado mês a mês com base no índice de reajuste.

-   A cada mês:

    -   Aplica-se o índice daquele mês ao saldo atual.

    -   O novo saldo reajustado se torna a base para o próximo mês.


* * *

**Distribuição do Reajuste**

-   Contrato com Parcelas Periódicas:

    -   Reajuste só afeta parcelas não faturadas com data após a data de corte.

-   Contrato com Itens de Medição (valor ou quantidade):

    -   O reajuste se distribui entre todas as parcelas livres, independentemente da data de corte.

    -   Parcelas já medidas ou faturadas não podem ser reajustadas.


> ⚠️ **Importante:** Se não houver nenhuma parcela livre para receber o reajuste, o processo falha.

Todos os reajustes realizados para cada item de contrato pode ser verificado na tela ‘Reajustes’ na aba de ‘Informações adicionais’ do item de contrato:

O histórico registra as seguintes informações:

-   -   Data do reajuste (a data escolhida como ponto de partida para o reajuste).
    -   Valor Anterior (Valor total do item do contrato antes da data de reajuste).
    -   Valor Atual (Valor total do item do contrato após o reajuste das parcelas).
    -   Código do Usuário (Usuário que solicitou o reajuste de preço).
    -   Memória de cálculo.



**Detalhe**: O campo "Data Último Reajuste" é preenchido automaticamente através do processo "Reajuste de Preço", e indica até onde o contrato já foi reajustado. No entanto esse campo também pode ser preenchido manualmente para desconsiderar reajuste até a data determinada ou para permitir novo reajuste em intervalo já reajustado.

A memória de cálculo traz detalhes sobre o processo de reajuste, os dados utilizados e os valores considerados. Seu objetivo é facilitar o entendimento do que foi aplicado em cada reajuste.



 Exemplo de memória de cálculo registrada no histórico

##### Datas do Processo

-   -   Data/Hora do Cálculo: 03/02/2025 18:59

    -   Data Último Reajuste: 01/01/2024

    -   Data Reajuste: 31/01/2025


* * *

##### Parâmetros do Índice

-   -   Código do Índice: IGPM2

    -   Defasagem da cotação: 0

    -   Dia parametrizado cotação: 01

    -   Mês inicial cotação: 01

    -   Ano inicial cotação: 2024


* * *

##### Cálculo do índice: IGPM2 acumulado entre '01/01/2024' e '31/01/2025'

O índice acumulado é calculado pela multiplicação dos índices em formato decimal obtidos mês a mês:

-   -   Mês 01/2024 → 0,07%

    -   Mês 02/2024 → -0,52%

    -   Mês 03/2024 → -0,47%

    -   Mês 04/2024 → 0,31%

    -   Mês 05/2024 → 0,89%

    -   Mês 06/2024 → 0,81%

    -   Mês 07/2024 → 0,61%

    -   Mês 08/2024 → 0,29%

    -   Mês 09/2024 → 0,62%

    -   Mês 10/2024 → 1,52%

    -   Mês 11/2024 → 1,3%

    -   Mês 12/2024 → 0,94%


##### Fórmula do índice acumulado:

     Índice acumulado = (1 + i1)\*(1 + i2)\* ... \*(1 + in) - 1

##### Aplicação prática:

     (1 + 0,0007)\*(1 - 0,0052)\*(1 - 0,0047)\*(1 + 0,0031)\*(1 + 0,0089)\*(1 + 0,0081)\*(1 + 0,0061)\*(1 + 0,0029)\*(1 + 0,0062)\*(1 + 0,0152)\*(1 + 0,013)\*(1 + 0,0094) - 1

##### Índice acumulado: 0,06536174

* * *

##### Parâmetros do Cálculo - Reajuste

-   -   Arredonda/Trunca: Arredonda

    -   Casas decimais: 2


* * *

##### Cálculo Detalhado do Reajuste do Saldo

-   -   Saldo a reajustar: 12.000,00

    -   Índice acumulado (IGPM2): 0,06536174


`[12.000,00 + (12.000,00 * 0,06536174)] = 12.784,34`

-   -   Saldo Reajustado: 12.784,34

    -   Valor Reajustado: 784,34


##### Regras aplicadas:

-   -   Diferença de dízima periódica será aplicada na última parcela livre.

    -   Em itens de medição, o reajuste é dividido entre as parcelas não medidas.


* * *

##### Parcelas

Nº

Vencimento

Valor Anterior

Valor Reajustado

1

12/02/2024

1.000,00

1.032,68

2

12/03/2024

1.000,00

1.032,68

3

12/04/2024

1.000,00

1.032,68

4

12/05/2024

1.000,00

1.032,68

5

12/06/2024

1.000,00

1.032,68

6

12/07/2024

1.000,00

1.032,68

7

12/08/2024

1.000,00

1.032,68

8

12/09/2024

1.000,00

1.032,68

9

12/10/2024

1.000,00

1.032,68

10

12/11/2024

1.000,00

1.032,68

11

12/12/2024

1.000,00

1.032,68

12

12/01/2025

1.000,00

1.032,68

13

12/02/2025

1.000,00

1.032,68

14

12/03/2025

1.000,00

1.032,68

15

12/04/2025

1.000,00

1.032,68

16

12/05/2025

1.000,00

1.032,68

17

12/06/2025

1.000,00

1.032,68

18

12/07/2025

1.000,00

1.032,68

19

12/08/2025

1.000,00

1.032,68

20

12/09/2025

1.000,00

1.032,68

21

12/10/2025

1.000,00

1.032,68

22

12/11/2025

1.000,00

1.032,68

23

12/12/2025

1.000,00

1.032,68

24

12/01/2026

1.000,00

1.032,70

Processo que possibilita o cancelamento do último reajuste de preço realizado nos contratos selecionados.

* * *

#### Regras:

-   As parcelas faturadas ou medidas serão desconsideradas, ou seja, só será possível cancelar o reajuste de parcelas que ainda não foram faturadas ou medidas.

-   Caso o status da parcela seja Previsionado, os valores da previsão serão ajustados.

-   Ao executá-lo, serão atualizados os valores das parcelas, dos itens e dos contratos selecionados.

-   O registro do reajuste cancelado é removido do histórico de reajuste ao executar o processo.


Importante:

Toda execução de processo registra no histórico de processos sua execução e parâmetros escolhidos.
