# 03. Contratos 2.0 | Processos | Redistribuir Valor Parcela

> **Fonte:** [https://tdn.totvs.com/display/public/LRM/03.+Contratos+2.0+%7C+Processos+%7C+Redistribuir+Valor+Parcela](https://tdn.totvs.com/display/public/LRM/03.+Contratos+2.0+%7C+Processos+%7C+Redistribuir+Valor+Parcela)
> **Domínio:** TDN (TOTVS Developer Network)

---

O processo de **Redistribuição dos Valores das Parcelas** do item do contrato tem como objetivo atualizar os valores das parcelas, a fim de que as mesmas, tenham valores acordados, independente da distribuição igualitária do valor de um item.

Existem contratos Periódicos e de Arrendamento que são negociados valores diferentes nas parcelas, um exemplo muito comum é em contrato de aluguel de imóvel onde a negociação é variada, por exemplo:


Contrato de 36 meses: 

Parcela  1 a 6  = 10.000,00

Parcela  7 a 12 = 12.000,00

Parcela  13 a 36 = 15.000,00


Este processo também poderá ser aplicado aos contratos de medição, especialmente em contratos sazonais, nos quais se busca uma maior aderência das parcelas previstas à realidade contratual. Assim, será possível iniciar o contrato com parcelas previstas conforme a necessidada do contrato. No entanto, durante o processo de medição, caso os valores medidos sejam diferentes dos valores inicialmente previstos, o sistema realizará a redistribuição proporcional do saldo restante entre as parcelas.

Não é possível executar a redistribuição de valores das parcelas para mais de um item ao mesmo tempo. Após a execução do processo o **Valor Parcela** (campo disponível na aba de identificação do item do contrato) será atualizado para o valor correspondente ao da última parcela.


Premissas

O item selecionado para redistribuição das parcelas, não poderá ter nenhum processo aplicado, nem a nível de item ou contrato, exemplos:

Processos a nível de contrato:

-   Faturar Contrato
-   Gerar Previsão Financeira
-   Alterar Status Contrato (desde que o status seja de cancelado)
-   Reajuste de Preço
-   Entre outros

Processos a nível de item:

-   Gerar Aditivo
-   Gerar Medição
-   Entre outros



**Parâmetros do Processo**

É exigido que todos os parâmetros sejam informados para que seja possível avançar e executar a "Redistribuição de Valores das Parcelas".

Na tela de processo é exigido o , "**Número Parcela Início**", "**Número Parcela Fim**" e "**Valor Parcela**".

**Número Parcela Início:** Define que qual será a primeira parcela a ser afetada pelo valor informado.

**Número Parcela Fim:** Define qual será a última parcela a ser afetada pelo valor informado.

**Valor Parcela:** Define qual será o valor aplicado na(s) parcelas informadas (início - fim).


 Exemplo 1

N° parcela inicio

N° parcela fim

Valor Parcela

1

3

R$2.000,00

4

6

R$3.000,00

7

10

R$4.500,00

Parcela

Valor

1

R$2.000,00

2

R$2.000,00

3

R$2.000,00

4

R$3.000,00

5

R$3.000,00

6

R$3.000,00

7

R$4.500,00

8

R$4.500,00

9

R$4.500,00

10

R$4.500,00

**Total item**

**R$33.000,00**

 Exemplo 2

N° parcela inicio

N° parcela fim

Valor Parcela

1

4

R$1.200,00

5

8

R$1.500,00

9

10

R$256,00

Parcela

Valor

1

R$1.200,00

2

R$1.200,00

3

R$1.200,00

4

R$1.200,00

5

R$1.500,00

6

R$1.500,00

7

R$1.500,00

8

R$1.500,00

9

R$256,00

10

R$256,00

**Total item**

**R$11.312,00**

Dicas de usuabilidade

-   Teclar Tab entre os campos da tela alterando o número de parcelas e o valor, até que apresente a mensagem "Distribua todo o saldo antes de avançar na execução do processo!"
-   Para inserir uma nova linha tecle no ícone Adiconar.
-   Acompanhe o Saldos a distribuir e distribuido, até que o saldo a distribuir seja zerado.

Importante:

-   Toda execução de processo registra no histórico de processos sua execução e parâmetros escolhidos.
