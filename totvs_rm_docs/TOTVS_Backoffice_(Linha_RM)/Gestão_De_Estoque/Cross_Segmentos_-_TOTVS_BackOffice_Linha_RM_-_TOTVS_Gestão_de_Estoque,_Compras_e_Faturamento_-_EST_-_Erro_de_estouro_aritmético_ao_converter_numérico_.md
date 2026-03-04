# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - EST - Erro de estouro aritmético ao converter numérico em tipo de dados numérico

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4409006939159-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Erro-de-estouro-aritm%C3%A9tico-ao-converter-num%C3%A9rico-em-tipo-de-dados-num%C3%A9rico](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4409006939159-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Erro-de-estouro-aritm%C3%A9tico-ao-converter-num%C3%A9rico-em-tipo-de-dados-num%C3%A9rico)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
> **Data:** 9 de abril de 2025 às 15:47

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: **00:05:00min**

**Dúvida**Este documento tem por finalidade auxiliar na tratativa do processo de **Regerar Saldos e Custos**, onde a mensagem apresentada é: **Não foram regerados os dados do produto XX.XX – Mensagem original: Erro de estouro aritmético ao converter numérico em tipo de dados numérico.

A****mbiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causa
**Algum campo da tabela **TRELSLD** **(CUSTO MÉDIO ou TOTAL SALDO)** está com o número de dígitos maior que a quantidade máxima que o campo suporta. Sendo que no momento da execução do processo o sistema tenta realizar o **INSERT/UPDATE** neste campo, que tem tamanho máximo de **15 casas**, contando com o sinal – **(negativo)** separador de casas decimais **(.)** e as casas decimais, o erro será apresentado.

Abaixo veja o exemplo de uma Ficha Física Financeira emitida após o erro da regeração. Na ficha o campo com o erro não será apresentado,  pois o mesmo sequer pode ser incluído no banco (visto que este é o problema a ser corrigido).

![Ficha_inicial__com_erro_.bmp](https://centraldeatendimento.totvs.com/hc/article_attachments/4409006711447/Ficha_inicial__com_erro_.bmp)

**Solução
**Será preciso uma análise cautelosa da situação, para avaliar onde está ocorrendo a falha da **parametrização/processo**, e a partir deste ponto gerar os acertos que podem ser:

**1\. Alterar/Corrigir** a parametrização do tipo de movimento que está ou não está afetando o estoque indevidamente.
Ex.: Movimento 2.2.02 está afetando o estoque, porém não deveria afetar. Logo, basta acessar os parâmetros deste tipo de movimento e tirar a parametrização que está afetando o estoque;

**2\. Alterar a fórmula do valor financeiro** do(s) movimento(s) de entrada, de modo que afetem o financeiro corretamente, não gerando discrepância entre os valores reais.
Ex.: Na imagem acima a fórmula do valor financeiro é a seguinte:

***SE  TABPRDLOC ('CUSTOMEDIO' , 'V') >0***

***ENTAO  KQT\*KPU \*TABPRDLOC ('CUSTOMEDIO' , 'V')***

***SENAO KQT\*KPU\*7.5***

***FIMSE***

O que está incorreto, pois o valor do custo médio do produto irá aumentar gradativamente, gerando o erro.

Neste caso alterando a fórmula pelo conteúdo abaixo:

***KQT\*KPU***

O erro não foi mais apresentado, apesar do saldo negativo ainda existir.

![Ficha_Fisica_com_saldo_negativo.bmp](https://centraldeatendimento.totvs.com/hc/article_attachments/4409013214615/Ficha_Fisica_com_saldo_negativo.bmp)

***\*\*Lembrando que a fórmula pode ou não estar errada, conforme todas as outras opções que podem estar ocorrendo ou não.***

**3\.** **Incluir um movimento de acerto de estoque** com data retroativa, para compensar o saldo negativo que está sendo gerado. (Falha de processo que mais ocorre e faz com que este erro seja apresentado).

Ex.: A partir da última imagem, foi identificado que no dia 01/05/2011 foi dada uma saída de 11.350,00 itens, que deixou o estoque negativo em 2.981,00 unidades. Para a correção, geramos uma movimentação de entrada 30/04/2011 com quantidade 2.981,00.

![Ficha_Fisica_com_saldo_negativo_2.bmp](https://centraldeatendimento.totvs.com/hc/article_attachments/4409006737303/Ficha_Fisica_com_saldo_negativo_2.bmp)

Após regerar saldos e custos foi identificado que no dia 02/10/2011 foi dada uma saída de 55.137,00 itens, que deixou o estoque negativo em 52.871,00 unidades. Para a correção, geramos uma movimentação de entrada 01/10/2011 com quantidade 52.871,00.

![Ficha_Fisica_com_saldo_negativo_3.bmp](https://centraldeatendimento.totvs.com/hc/article_attachments/4409006741655/Ficha_Fisica_com_saldo_negativo_3.bmp)

Após regerar saldos e custos foi identificado que no dia 02/05/2013 foram dadas 3 saídas com o total de  98.708,00 itens, que deixou o estoque negativo em 90.832,00 unidades. Para a correção, geramos uma movimentação de entrada 01/10/2011 com quantidade 90.833,00.

![Ficha_Fisica_com_saldo_negativo_4.bmp](https://centraldeatendimento.totvs.com/hc/article_attachments/4409006746135/Ficha_Fisica_com_saldo_negativo_4.bmp)

**Assim a ficha não ficará mais incorreta, e a regeração de saldos e custos não irá gerar o erro.**
