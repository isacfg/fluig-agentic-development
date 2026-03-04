# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como gerar IRRF PJ automático na primeira parcela

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008529847-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-gerar-IRRF-PJ-autom%C3%A1tico-na-primeira-parcela](https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008529847-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-gerar-IRRF-PJ-autom%C3%A1tico-na-primeira-parcela)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 9 de abril de 2025 às 16:04

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:03:00 min**

**Dúvida
**Como parametrizar o sistema para gerar IRRF Automático para o TOTVS Gestão Financeira na primeira parcela quando o movimento deverá gerar parcelamento?

**Ambiente
**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
**Solução
****TOTVS Gestão Financeira - RM FLUXUS**

1.  Acesse o menu **Ambiente - Parâmetros - TOTVS Gestão Financeira - Contas a Pagar;**
2.  Na etapa **Inclusão** selecione a opção **Cliente/Fornecedor** para o campo **Origem Tabelas;**
3.  Na etapa **Geração de IRRF** marque a flag **Gerar Imposto de Renda Automaticamente;**
4.  Em **Origem Default das Tabelas**, no campo **Origem das Tabelas**, selecione a opção **Lançamento Original**. Já para o campo **Valor Mínimo**, informe o valor mínimo para geração deste tributo EX: R$10,00, já que a Receita aceita lançamentos a partir deste valor.
5.  Na etapa **Geração de IRRF - PJ** escolha uma data para ser informada no campo Data Base para Geração. Esta data será considerada para geração da DARF.
6.  No campo Fornecedor, escolha o Cliente/Fornecedor que será apresentado no lançamento financeiro referente a apuração da DARF, geralmente, utiliza-se um Cli/For como RECEITA FEDERAL.
7.  Para o campo **Tipo de Documento**, informe um tipo documento para ser utilizado como base para geração do lançamento, obrigatório que seja um tipo de documento cuja classificação seja como **Sem Classificação;**

**TOTVS Gestão de Estoque, Compras e Faturamento - RM NUCLEUS**

1.  Acesse o menu **Cadastros - Mais...** - **Tipo de Documento**. Crie um tipo de documento onde o campo **Classificação** seja igual a **Gera IRRF**.
2.  Acesse o menu **Ambiente - Parâmetros - Gestão de Estoque, Compras e Faturamento**. Escolha o tipo de movimento que será utilizado para a processo e edite-o.

Na etapa **Fin - Faturamento 1/6** as flags **Fatura o Movimento** e **Fatura na Inclusão** deverão estar marcadas. O **Tipo de Geração** deverá ser edita. O campo **Tipo de Documento Gerado** deverá estar como **Outros**. Para o campo **Tipo de Documento Duplicata** deverá informar de onde o sistema irá buscar o tipo de documento para gerar o financeiro, geralmente, utiliza-se como **Utiliza do Tipo de Movimento**. Caso optar em utilizar do **Cliente/Fornecedor**, o sistema irá buscar o tipo de documento default associado ao Cli/For que estiver sendo usado na inclusão do movimento.

Neste mesma etapa, no campo **Tipo de Documento Duplicata Default**, deverá informar o tipo de documento criado com classificação **Gerar IRRF**.

**Opcional -** Caso queira que a base de cálculo do IRRF tenha o mesmo valor do
Valor Original do Lançamento Financeiro deve-se preencher o mesmo código da
**Fórmula de Valor a Ratear** no campo **Fórmula para Cálculo de IRRF** na etapa
**Fin - Faturamento 3/6**. Se a base de cálculo de IRRF for considerar outra
informação, deverá cadastrar uma fórmula com o conteúdo desejado e referenciar
no campo mencionado.

**Importante -** Todo tributo do tipo **RF – Retido na Fonte** necessita de um Código da Receita para que o Lançamento Financeiro seja incluso. Para buscar o código da receita do cadastro de Cliente/Fornecedor o campo  **Fórmula para Cálculo de IRRF** tem que estar preenchido, caso contrário será considerado código da receita preenchido no cadastro do produto.

Na etapa **Fin - Faturamento 3/6** deverá preencher o campo **Fórmula para Cálculo Valor do Serviço** com uma fórmula que retorne o valor do serviço prestado. O retorno desta fórmula será aplicado no campo **Valor do Serviço** dentro do lançamento financeiro na aba **Valores - Tributos**.

Na etapa **Fin - Faturamento 5/6** deverá marcar a opção **Primeira Parcela** na grid de Distribuição do Valor de Serviço conforme print:

![screenshot_20200227_074833.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360059745973/screenshot_20200227_074833.png)

O movimento será incluído como de costume. Certifique-se que o **Código de Receita** e a **Base para geração do IRRF** estejam preenchidos no movimento para que a geração seja feita corretamente.

![screenshot_20200227_075202.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360058867534/screenshot_20200227_075202.png)
