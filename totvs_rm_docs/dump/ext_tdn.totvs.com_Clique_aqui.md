# INT0005_Integracao_Financeira_Valores_Opcionais

> **Fonte:** [https://tdn.totvs.com/display/public/LRM/INT0005_Integracao_Financeira_Valores_Opcionais](https://tdn.totvs.com/display/public/LRM/INT0005_Integracao_Financeira_Valores_Opcionais)
> **Domínio:** TDN (TOTVS Developer Network)

---

# Assunto

**Produto:**

TOTVS Gestão de Estoque., Compras e Faturamento

**Versões:**

A partir da 11.80

**Ocorrência:**

Integração Financeira – Valores opcionais

**Ambiente:**

Parametrização de Movimento

**Passo a passo:**

**Introdução**

O intuito desse documento é demonstrar como parametrizar o sistema para geração de valores opcionais para o TOTVS GESTÃO FINANCEIRA.

**Passo 1:**

Deve-se parametrizar o TOTVS GESTÃO FINANCEIRA para utilizar valores opcionais.

Em nosso exemplo parametrizaremos o valor do tributo ISS como Valor Opcional, pois assim como IRRF-PJ o TOTVS GESTÃO FINANCEIRA não possui geração automática como é feito com os IRRF-PF, INSS PF e PIS, COFINS, CSLL.

Acesse o menu **Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Integrações (04.03)| Financeira (04.03.01) | CONTAS A PAGAR | Valores opcionais**.

Nessa etapa é possível definir o valor opcional, sua nomenclatura e sua ação.

Em nosso exemplo criaremos o valor opcional referente ao tributo ISS e sua ação será  DESCONTAR:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/274637099/image2017-5-23%209%3A46%3A20.png?version=1&modificationDate=1495547982000&api=v2)

No caso da integração com o TOTVS Gestão de Estoque, Compras e Faturamento não é necessário preencher fórmula ou default de porcentagem, pois esta terá efeito apenas na inclusão direta via TOTVS Gestão Financeira.

**Passo 2:**

Nessa segunda parte iremos parametrizar o Tipo de Movimento.

Acesse o menu **Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento |  Selecione o processo onde se encontra seu Tipo de Movimento (neste exemplo será Outras Movimentações – Esse processo é definido pelo campo Classificação da etapa “Mov – Identificação”) | Dê um duplo clique sobre o tipo de movimento | Acesse a etapa FIN FATURAMENTO 4/6.**

Nessa etapa basta marcar para usar o valor opcional correspondente ao que foi parametrizado no passo 1.

***ATENÇÃO:***

-   Caso as orientações do passo 1 não tenham sido realizadas nenhuma informação será exibida na etapa Fin Faturamento 4/6 de seu Tipo de Movimento.
-   Nos parâmetros do Tipo de movimento o sistema não assumirá o nome dado ao Valor opcional via TOTVS Gestão Financeira, portanto a ordem em que são apresentados será correspondente entre as etapas.

***Exemplo:***

ISS = Valor Opcional 1



Multa = Valor Opcional 2



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/274637099/image2017-5-23%209%3A52%3A38.png?version=1&modificationDate=1495547982000&api=v2)

Deve ser definido uma fórmula para carregar o valor desejado.

***Exemplo de fórmula:*** *VLT(‘ISS’)*

Aplicada as parametrizações acima ao inserir um movimento e este gerar a integração financeira, o valor opcional será calculado e preenchido na aba “Adicionais” do lançamento financeiro.

**Observações:**

-   A utilização de valores opcionais não caracteriza a geração de guias automáticas referente a tributos, nem mesmo a sua cumulatividade.
-   Os valores tratados como opcionais ficam a critério de cada cliente e suas respectivas necessidades, o exemplo apresentado neste documento não deve ser tratado como regra fixa.
