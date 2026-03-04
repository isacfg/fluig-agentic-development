# 1.2.3 Condição de Pagamento

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=551430151](https://tdn.totvs.com/pages/releaseview.action?pageId=551430151)
> **Domínio:** TDN (TOTVS Developer Network)

---

A Condição de Pagamento define os valores de cada parcela financeira assim como a data de vencimento.

Para cadastrar uma condição de pagamento, o usuário deverá acessar *BackOffice | TOTVS Gestão de Estoque, Compras e Faturamento | Cadastros | Tabelas Auxiliares | Condições de Pagamento | Incluir Novo*.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/551430151/image-2024-4-25_14-2-8.png?version=1&modificationDate=1714064529067&api=v2)

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/551430151/1.png?version=2&modificationDate=1714064990347&api=v2)

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/551430151/image-2024-4-25_14-17-16.png?version=1&modificationDate=1714065436777&api=v2)

O cadastro de Condição de Pagamento será necessário para o Processo Contrato Corporativo (PJ).

-   [Identificação](#)
-   [Composição de Parcelas](#)

**Identificação**

Exemplo: Iremos cadastrar uma condição de pagamento de 4 parcelas, com vencimentos de 30 em 30 dias.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/551430151/3.png?version=1&modificationDate=1714065743693&api=v2)

-   **Código:** Defina um código para a condição de pagamento.
-   **Descrição:** Defina a descrição da condição de pagamento.
-   **Arredondamento:** Escolha o modelo de arredondamento e qual parcela será arredondada. Para pagamentos com mais de um vencimento, poderá ocorrer resíduos, portanto, no primeiro quadro, clique em  neste momento, aparecerá as opções de arredondamento, são elas:


**Moeda:** Para pagamentos com mais de um vencimento, poderá ocorrer resíduos, portanto será necessário definir o tipo de arredondamento: 

-   Não Arredonda: Para esta condição não haverá arredondamento;
-   Dezena: O arredondamento será por dezena;
-   Centavos: O arredondamento será por centavos;

**Parcela:** Informe em qual parcela deverá ser lançado o resíduo, clique em, aparecerá então, as opções de lançamento (esta opção será apresentada apenas se o tipo de arredondamento for diferente de "Não Arredonda")

-   Primeira Parcela: o resíduo será lançado na primeira parcela;
-   Última Parcela: o resíduo será lançado na última parcela;

Observação**:** O acesso a este campo não será permitido se no quadro anterior informou que não haverá arredondamento.

-   **Não Arredonda**: Para esta condição não haverá arredondamento; 
-   **Tipos de Planos:** O sistema vai filtrar na inclusão de movimentos de compra e venda, as condições de pagamentos de acordo com as opções de tipos de planos selecionadas: Compra e/ou Venda. Escolha a opção “Venda”.

Deixando os dois campos desabilitados, a condição de pagamento não será visualizada pelo sistema na inclusão de movimentos.

-   **Inativo:** Marque esta opção caso deseje que a condição de pagamento não seja apresentada na inclusão de novos movimentos no sistema.

Observação

O sistema irá impedir inativar uma condição de pagamento, caso exista pelo menos um movimento, cujo tipo de movimento esteja parametrizado para **Gerar Movimento** (Etapa 'Compra/Venda - Características' → 'Gera Movimento de Compra') e com o status diferente de **Faturado** e **Cancelado**.

Ao inativar uma condição de pagamento (por tela), se houver movimentações pendentes o usuário será alertado podendo ver a quantidade de movimentos pendente e listar movimentos.

Ao inativar uma condição de pagamento (por DataServer), se houver movimentações pendentes o usuário vai ser alertado e informado sobre a quantidade de movimentos pendentes.

Os movimentos já incluídos com a condição de pagamento inativa não serão afetados, continuarão apresentar a condição de pagamento. Mas se este movimento for editado e a condição de pagamento for modificada não será possível selecioná-la novamente.

**Composição de Parcelas**

É possível cadastrar até 5 parcelas para cada condição de pagamento e são apresentadas cinco colunas para a informação das condições das parcelas, a seguir explicaremos cada uma delas:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/551430151/image-2024-4-25_14-41-20.png?version=1&modificationDate=1714066880657&api=v2)

-   **% do Valor Total:** Informe o valor em percentual do preço que será pago nesta parcela.

Observação

-   A soma de todos os percentuais informados para as parcelas, não poderá ultrapassar a 100%.

Exemplo de utilização

Considerando que o valor do lançamento é de R$ 1.000,00, e no campo "% em relação ao Valor Total" da Linha 1, foi informado 50%, significa que a primeira parcela será de R$ 500,00.

-   **Número de vezes**: Informe o número de vezes que será dividido o pagamento do valor desta parcela, ou seja, o valor da parcela depois de calculada, de acordo com o percentual informado no campo "% em relação ao valor total".

Exemplo de Utilização

Considerando que o valor total do lançamento é de R$ 2.000,00 e a primeira parcela desta condição é de 50 % do valor total e que esta será ainda facilitada em 2 vezes, neste caso, a parcela de R$ 1.000,00, que é 50% do valor total, ainda será dividida em 2 vezes, ou seja, serão mais duas parcelas de R$ 500,00.

-   **Prazo:** Informe o prazo em dias para o vencimento desta parcela. Se está ainda for dividida, este é o prazo para o primeiro vencimento da mesma:
-   **Intervalo:** Informe o intervalo em dias que deverá ser calculado para o vencimento das parcelas.
-   **Tipo:** Nesta coluna clique em , e escolha entre as opções, qual será o tipo de cálculo para o prazo da parcela a partir da data de emissão. As opções são:
    -   **Normal:** A partir da data de emissão
    -   **Fora Semana:** Não considera a semana da data de emissão
    -   **Fora Mês:** Não considera o mês da data de emissão.
    -   **Fora Quinzena:** Não considera a quinzena da data de emissão
    -   **Fora Dezena:** Não considera a dezena da data de emissão.
    -   **Fora Ano:** Não considera o ano da data de emissão.

Exemplo de utilização

Data do Movimento: 26/08
Condição de Pagamento: À Vista - Fora Dezena
Neste caso a primeira parcela vencerá em 01/09 pois, esta data já está na dezena seguinte à do dia 26/08.

-   **Contagem:** Informe como deverá ser feita a contagem dos dias para o prazo inicial e o intervalo entre as parcelas: Clique em , e escolha qual a forma desejada. As opções são:
    -   **Dias Corridos:** Para que a contagem seja feita a partir da data de emissão direto, isto é, sem saltar os sábados, domingos e feriados. Este campo será obrigatório sempre que houver algum percentual informado no campo '% o valor total' que seja diferente de zero.
    -   **Dias Fixos:** Para que as datas sejam exatamente iguais. Exemplo: se a primeira parcela vencer no dia 01, as demais também vencerão todo dia 01 dos meses subsequentes.
    -   **Dias Fixos com prazo:** As datas de vencimento serão fixas, levando em consideração o valor informado no campo prazo.

Exemplo de utilização

***Exemplo 1**:* Se for informado 15 no campo prazo e o campo "vencimento a partir" estiver setado com a data de emissão = 01/09, o primeiro vencimento será no dia 15/09 e as demais também vencerão todo dia 15 dos meses subsequentes.
*Dias Úteis:* Somente os dias úteis serão contados para o cálculo das parcelas.
*Dias de Carência:* Informe os dias de carência (dias fixos para vencimento) de cada parcela da condição de pagamento. Estas carências correspondem a dias fixos em que a parcela terá vencimento. O dia selecionado para o vencimento da parcela será o dia mais próximo após o seu vencimento original.

***Exemplo 2**:* Vamos supor que a 1a parcela da condição de pagamento tenha como carências os dias 05, 10 e 20. Se o vencimento original da parcela cair no dia 08, a carência mais próxima após esta data é utilizada, ou seja, o vencimento será jogado para o dia 10 do próprio mês. Caso o vencimento original caia no dia 25, o vencimento será jogado então para o dia 05 do próximo mês, que é a carência mais próxima desta parcela.

Exemplo de preenchimento: condição de pagamento de 4 parcelas, com vencimentos de 30 em 30 dias.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/551430151/image-2024-4-25_14-55-46.png?version=1&modificationDate=1714067746717&api=v2)

-   **% do valor total:** Informar 100%
-   **Número de vezes:** Informar o número de parcelas da condição de pagamento
-   **Prazo:** Informar o prazo da 1ª Parcela
-   **Intervalo:** Informar o intervalo entre as demais parcelas
-   **Tipo:** Normal
-   **Contagem:** Dias corridos





Vencimento das parcelas sempre no mesmo dia

Para escolher o vencimento das parcelas sempre no mesmo dia (dia 10, por exemplo), após cadastrar a condição de pagamento acesse: Anexos | Dias de Carência | Incluir Novo:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/551430151/image-2024-4-25_14-56-53.png?version=1&modificationDate=1714067813387&api=v2)

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/551430151/image-2024-4-25_14-58-15.png?version=1&modificationDate=1714067895927&api=v2)

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/551430151/image-2024-4-25_14-58-49.png?version=1&modificationDate=1714067930180&api=v2)

-   **Número da Parcela**: SEMPRE 1
-   **Dia de Carência**: informe o dia que deseja o vencimento

Copiar Condição de Pagamento entre Coligadas

Após cadastrada a condição de pagamento, é possível copiá-la para outra Coligada. Acesse *Processos | Copiar Condição de Pagamento entre Coligadas*

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/551430151/image-2024-4-25_15-15-14.png?version=1&modificationDate=1714068914613&api=v2)

Selecione a Coligada destino e clique em Executar:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/551430151/image-2024-4-25_15-16-16.png?version=1&modificationDate=1714068976663&api=v2)

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/551430151/image-2024-4-25_15-20-19.png?version=1&modificationDate=1714069219470&api=v2)

Veja Também

-   [Condição de Pagamento (Estoque, Compras e Faturamento)](https://tdn.totvs.com/pages/viewpage.action?pageId=423938175#Abas-1366518873)
-   [Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Definição de parcelas em condição de pagamento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360025150291-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Defini%C3%A7%C3%A3o-de-parcelas-em-condi%C3%A7%C3%A3o-de-pagamento)
-   [Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Condição de Pagamento não permitida para o tipo de movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4404367309975-Cross-Seguimentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-NUCLEUS-MOV-Condi%C3%A7%C3%A3o-de-Pagamento-n%C3%A3o-permitida-para-o-tipo-de-movimento)
-   [Condição de Pagamento não é apresentada na Movimentação](https://tdn.totvs.com/pages/releaseview.action?pageId=4813200)
