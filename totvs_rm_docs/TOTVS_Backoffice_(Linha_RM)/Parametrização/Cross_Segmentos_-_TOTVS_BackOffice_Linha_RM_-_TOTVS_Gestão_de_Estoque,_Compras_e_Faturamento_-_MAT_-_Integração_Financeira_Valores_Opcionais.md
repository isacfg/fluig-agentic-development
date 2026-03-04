# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Integração Financeira/Valores Opcionais

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008503488-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Integra%C3%A7%C3%A3o-Financeira-Valores-Opcionais](https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008503488-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Integra%C3%A7%C3%A3o-Financeira-Valores-Opcionais)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 14 de janeiro de 2022 às 08:24

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura: **00:04:00min**

**Dúvida
**Para que o lançamento financeiro possa conter valores adicionais oriundos de campos existentes no movimento inserido via TOTVS Gestão de Estoque, Compras e Faturamento, deve-se utilizar a opção de **Valores Opcionais**.

**Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.

**Solução
**

Deve-se parametrizar o TOTVS Gestão Financeira para utilizar Valores Opcionais.

Em nosso exemplo parametrizaremos o valor do tributo ISS como Valor Opcional, pois assim como IRRF-PJ o TOTVS Gestão Financeira não possui geração automática como é feito com os IRRF-PF, INSS PF e PIS, COFINS, CSLL.

Acesse o menu **Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Integrações (04.03)| Financeira (04.03.01) | Contas a Pagar | Valores opcionais**.

Nessa etapa é possível definir o valor opcional, sua nomenclatura e sua ação. Em nosso exemplo criaremos o valor opcional referente ao tributo ISS e sua ação será **Descontar**:

![Imagem](https://tdn.totvs.com/download/attachments/274637099/image2017-5-23%209%3A46%3A20.png?version=1&modificationDate=1495547982000&api=v2)

No caso da integração com o TOTVS Gestão de Estoque, Compras e Faturamento não é necessário preencher fórmula ou default de porcentagem, pois esta terá efeito apenas na inclusão direta via TOTVS Gestão Financeira.

[Clique aqui](https://tdn.totvs.com/display/public/LRM/INT0005_Integracao_Financeira_Valores_Opcionais) para conferir a parametrização a ser realizada no Tipo de Movimento.

**Importante**

-   A utilização de valores opcionais não caracteriza a geração de guias automáticas referente a tributos, nem mesmo a sua cumulatividade.
-   Os valores tratados como opcionais ficam a critério de cada cliente e suas respectivas necessidades, o exemplo apresentado neste documento não deve ser tratado como regra fixa.
