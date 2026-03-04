# 03. Contratos 2.0 | Processos | Abatimento ou Acréscimo

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=938330409](https://tdn.totvs.com/pages/releaseview.action?pageId=938330409)
> **Domínio:** TDN (TOTVS Developer Network)

---

### Este processo permite o acréscimo ou abatimento de valor em uma ou mais parcelas que não estejam faturadas ou inativas.

#### **Exemplo de Aplicação:
**Para contratos que envolvem a disponibilização de um serviço (como um provedor de internet), este processo pode ser executado quando houver a interrupção do serviço por alguma eventualidade, ou quando o uso do serviço for superior ao valor contratado.
Este processo não corresponde a um aditivo contratual, mas deve estar previsto nas cláusulas do contrato. Antes de utilizá-lo, é necessário validar as regras contratuais do contrato em questão.

#### **Campos Necessários para a Execução do Processo:**

-   -   Operação: Abatimento ou Acréscimo

    -   Valor: Se a operação selecionada for "Abatimento", este campo corresponderá ao valor do abatimento. Caso contrário, corresponderá ao valor do acréscimo.

    -   Justificativa: Motivo da realização da operação.


Este processo é responsável pelo preenchimento dos campos de **Valor Abatimento** e **Valor Acréscimo** da parcela, do item e do contrato.

* * *

### **Detalhamento do Processo:**

#### **Parcela**

-   Os campos Valor Abatimento e Valor Acréscimo na parcela corresponderão aos valores realizados nela. Se o processo for executado mais de uma vez para a mesma parcela e operação, o valor anterior será sobrescrito pelo novo valor.

    Exemplo:

    -   Caso a parcela já tenha um abatimento de R$50,00 e seja realizado um novo abatimento de R$100,00, o Valor Abatimento da parcela será de R$100,00.

    -   Caso a parcela já tenha um abatimento de R$50,00 e seja realizado um acréscimo de R$150,00, o Valor Abatimento será zerado e o Valor Acréscimo será de R$150,00.


#### **Item**

-   O Valor Abatimento do item corresponderá ao somatório dos valores de abatimento de todas as parcelas daquele item.

-   O Valor Acréscimo do item corresponderá ao somatório dos valores de acréscimo de todas as parcelas daquele item.


#### **Contrato**

-   O Valor Abatimento do contrato corresponderá ao somatório dos valores de abatimento de todas as parcelas daquele contrato.

-   O Valor Acréscimo do contrato corresponderá ao somatório dos valores de acréscimo de todas as parcelas daquele contrato.


Lançamento de Previsão

Caso a parcela selecionada tenha um lançamento de previsão gerado, o valor da previsão não será alterado pelo processo de acréscimo ou abatimento.

Faturamento

Ao realizar o faturamento de uma parcela que possui valor de abatimento e/ou acréscimo, o valor do movimento gerado poderá ser afetado conforme a fórmula de **valor líquido** parametrizada no tipo de movimento. Essas informações são passadas ao movimento através dos campos de **despesa** e **desconto**, conforme documentado no processo de faturamento do contrato.
