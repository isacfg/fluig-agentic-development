# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Código de Receita IRRF default para o movimento

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360004019872-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-C%C3%B3digo-de-Receita-IRRF-default-para-o-movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360004019872-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-C%C3%B3digo-de-Receita-IRRF-default-para-o-movimento)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 21 de março de 2022 às 12:52

---

**
![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
** Tempo aproximado para leitura: **00:05:30 min**

**Dúvida
**Como configurar o **Código de Receita do IRRF** de forma a ser levado ao movimento **automaticamente** e consequentemente ser levado ao **lançamento financeiro**?

**
![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360005008791/mceclip0.png)
**

**Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.**

Solução
**O sistema tem 3 locais possíveis de se buscar o código de receita do IRRF, sendo eles:

1\. Cadastro do **Cliente/Fornecedor** | **Integrações** | **Tributos**

**
![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360004992392/mceclip1.png)


**

2\. Cadastro de **Produto** | **Anexos** | **Dados Fiscais do Produto**

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360005009631/mceclip2.png)



3\. Cadastro de **Produto** | **Anexos** | **Clientes/Fornecedores**

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360005009691/mceclip3.png)



Além destas configurações, temos mais uma localizada nos parâmetros do tipo de movimento que será utilizado para este fim. Desta forma, acesse os parâmetros do tipo de movimento na etapa Fin - Faturamento 3/6. Caso não saiba como acessar os parâmetros, veja o artigo abaixo:
[Classificação de Tipo de Movimento
](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003051691-RM-MOV-Como-descobrir-a-classifica%C3%A7%C3%A3o-e-menu-do-Tipo-de-Movimento)

Na etapa Fin - Faturamento 3/6, podemos configurar o campo de Fórmula para Cálculo de IRRF, porém, temos comportamentos diferentes quando configurado este campo. Lembrando que não é obrigatório o preenchimento deste.


![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360005009951/mceclip4.png)



Segue abaixo possíveis combinações e resultados obtidos:**

Sem Fórmula para Cálculo de IRRF:**

-   Produto - Anexos - Cliente/Fornecedor: 3208
-   Produto - Anexos - Dados Fiscais: 1708
-   Cli/For - Aba Tributos: 0588

Levado ao movimento o código do Cli/For Default no Produto 3208 e para o financeiro também.

**Sem Fórmula para Cálculo de IRRF:**

-   Produto - Anexos - Cliente/Fornecedor: - Vazio -
-   Produto - Anexos - Dados Fiscais: 1708
-   Cli/For - Aba Tributos: 0588

Levado ao movimento o código do Cli/For Default no Produto 1708 e para o financeiro também.

**Sem Fórmula para Cálculo de IRRF:**

-   Produto - Anexos - Cliente/Fornecedor: - Vazio -
-   Produto - Anexos - Dados Fiscais: - Vazio -
-   Cli/For - Aba Tributos: 0588

Não foi levado código de receita para o movimento porém o financeiro foi levado o 0588.

**Com Fórmula para Cálculo de IRRF:**

-   Produto - Anexos - Cliente/Fornecedor: 3208
-   Produto - Anexos - Dados Fiscais: 1708
-   Cli/For - Aba Tributos: 0588

Não foi levado código de receita para o movimento porém o financeiro foi levado o 0588.

Diante disto, a prioridade para buscar o Código de Receita quando não é utilizada Fórmula para cálculo de IR é:

1.  Cadastro de Produto - Anexos - Cliente/Fornecedor;
2.  Cadastro de Produto - Anexos - Dados Fiscais

Quando existe fórmula o código de receita nunca será carregado ao movimento, e para o lançamento financeiro sempre será considerado o do cadastro de cliente/fornecedor.

**Importante:
**Não é recomendado a utilização fórmula para cálculo de IRRF e Serviço juntos pois poderá acarretar em problemas financeiros quanto a apuração de IR.
