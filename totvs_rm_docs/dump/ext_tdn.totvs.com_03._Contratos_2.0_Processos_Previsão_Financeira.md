# 03. Contratos 2.0 | Processos | Previsão Financeira

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=937708534](https://tdn.totvs.com/pages/releaseview.action?pageId=937708534)
> **Domínio:** TDN (TOTVS Developer Network)

---

-   [Gerar Previsão Financeira](#)
-   [Cancelar Previsão Financeira](#)

Este processo possibilita a criação de lançamentos de previsão financeira para um ou mais contratos.


 Parâmetro Necessário

Para executar o processo, é necessário:

1.  Selecionar os contratos desejados.

2.  Definir o seguinte parâmetro:


-   Tipo de Documento de Previsão: Informe o tipo de documento que será utilizado para a geração da previsão financeira.


Dica

Para que os lançamentos financeiros sejam gerados corretamente, é necessário que todos os campos obrigatórios estejam devidamente preenchidos no contrato e/ou no item do contrato, conforme as regras do módulo de Gestão Financeira da empresa.

#### Campos que podem ser validados:

-   Conta / Caixa

-   Moeda

-   Classificação Orçamentária / Financeira

-   Centro de Custo

-   Rateio de Centro de Custo


 Funcionamento

Após o preenchimento do parâmetro e a execução do processo, os lançamentos financeiros serão gerados com base nas parcelas dos itens dos contratos selecionados.

Será criado um lançamento financeiro para cada parcela que esteja com status "A Faturar" nos itens dos contratos selecionados.

Importante

-   Não é permitido realizar filtros para itens de contrato e/ou parcelas de um contrato.

-   O processo será executado para todas as parcelas com status "A Faturar" do contrato selecionado.


 Lançamento de Previsão Financeira

Relação entre os campos do contrato e o lançamento de previsão financeira.



* * *



-   [Aba Identificação](#)
-   [Aba Valores](#)
-   [Aba Dados Adicionais](#)
-   [Repasses / Despesas](#)
-   [Contabilização](#)
-   [Opcionais](#)

-   Pagar ou Receber → Campo Natureza do contrato

-   Filial → Campo Filial informado na aba Faturamento no item do contrato

-   Cliente / Fornecedor → Campo Destinatário informado na aba Faturamento no item do contrato

-   Tipo de Documento → Informado na execução do processo

-   Data de Emissão → Data de execução do processo

-   Data de Vencimento → Campo Data de Vencimento da parcela

-   Histórico → Composto por: Código do Contrato, ID do Contrato, Número Sequencial do Item do Contrato, Número Sequencial da Parcela


-   Valor Original → Campo Valor da Parcela

-   Moeda → Campo Moeda informada na aba Adicionais no item do contrato

-   Conta Caixa → Campo Conta / Caixa informada na aba Adicionais no item do contrato

    -   Caso não esteja preenchido, será utilizado o valor default cadastrado no produto


##### Centro de Custo / Natureza Orçamentária Financeira:

-   Centro de Custo → Campo Centro de Custo informado na aba Contábil / Fiscal no item do contrato

-   Natureza Orçamentária / Financeira → Campo correspondente na aba Tabelas no item do contrato

-   Rateio:

    -   Será considerado apenas se houver cadastro de rateio e o parâmetro “Usar Rateio para” (Centro de Custo, Natureza ou Ambos) estiver diferente de “Não Usar Rateio”

    -   Parâmetro localizado em: `Financeiro | Contas a Pagar | Manutenção de Lançamentos | Lançamentos`


##### Repasses / Despesas:

-   Representante → Campo Representante informado na aba Tabelas no contrato


Representante → Campo Representante informado na aba Tabelas no contrato.

Tipo Contábil → Sempre definido como Não Contábil.

Tabelas Opcionais → Campos de Tabela de Faturamento informados na aba Tabelas no item do contrato.

Dica - Campos Obrigatório

##### Item de Contrato

Aba Faturamento

-   Destinatário → Responsável pelo recebimento ou pagamento vinculado ao item do contrato.


Aba Adicionais

-   Conta / Caixa → Deve estar preenchida de acordo com a parametrização da empresa.

    -   Importante: A conta deve ser do tipo Analítica.

-   Moeda → Moeda utilizada no lançamento financeiro, conforme definido no item do contrato.


 Status Previsão Financeira

Contrato

-   -   Não Previsionado: Todos os itens do contrato estão com Status de Previsão Financeira = Não Previsionado.

    -   Previsionado: Todos os itens do contrato estão com Status de Previsão Financeira = Previsionado.

    -   Parcialmente Previsionado: O contrato possui itens com ambos os status: Não Previsionado e Previsionado.



Item de Contrato

-   -   Não Previsionado: Todas as parcelas do item de contrato estão com Status = A Faturar ou Faturada.

    -   Previsionado: Todas as parcelas do item de contrato estão com Status = Previsionado, ou com ambos os status Previsionado e Faturada (em casos de faturamento parcial).

    -   Parcialmente Previsionado: O item de contrato possui parcelas com ambos os status: Previsionado e A Faturar.



* * *


📌 Status da Parcela

-   A Faturar: A parcela ainda não foi faturada nem previsionada.

-   Previsionado: Foi gerada previsão financeira, mas ainda não foi faturada (não gerou movimento financeiro).

-   Faturada: A parcela foi faturada (gerou movimento financeiro).


Ao faturar a parcela, a previsão financeira é excluída automaticamente.

 Exemplos Práticos

-   [Contrato sem faturamento](#)
-   [Contrato com faturamento parcial](#)

Contrato possui dois itens com duas parcelas cada.

##### Contrato: Status Faturamento = A Faturar | Status Previsão Financeira = Não Previsionado

    Item 1: Status Previsão Financeira = Não Previsionado  
        Parcela 1: Status = A Faturar
        Parcela 2: Status = A Faturar
    
    Item 2: Status Previsão Financeira = Não Previsionado        
        Parcela 1: Status = A Faturar
        Parcela 2: Status = A Faturar

* * *

Ao executar o processo de Gerar Previsão Financeira para este exemplo, serão gerados 4 lançamentos de previsão financeira. O status das parcelas será alterado para: Previsionado a Faturar, e o Status Previsão Financeira tanto dos itens do contrato quanto o do contrato será alterado para: Previsionado. 

Contrato: Status Faturamento = A Faturar | Status Previsão Financeira = Previsionado    

    Item 1: Status Previsão Financeira = Previsionado   
        Parcela 1: Status = Previsionado
        Parcela 2: Status = Previsionado
    
    Item 2: Status Previsão Financeira = Previsionado        
        Parcela 1: Status = Previsionado
        Parcela 2: Status = Previsionado

Contrato possui dois itens com duas parcelas cada e já foi parcialmente faturado.

**Contrato:**
Status Faturamento → Parcialmente Faturado | Status Previsão Financeira → Não Previsionado

-   Item 1:
    Status Previsão Financeira → Não Previsionado

    -   Parcela 1: Status → Faturada

    -   Parcela 2: Status → A Faturar

-   Item 2:
    Status Previsão Financeira → Não Previsionado

    -   Parcela 1: Status → Faturada

    -   Parcela 2: Status → A Faturar


Ao executar o processo Gerar Previsão Financeira para este exemplo, serão gerados 2 lançamentos de previsão financeira. O status das parcelas será alterado para: Previsionado. Como o contrato não possui mais parcelas a serem faturadas, o status Previsão Financeira dos itens e do contrato será alterado para: Previsionado.

As parcelas com status **Faturada** permanecem como **Faturadas** e **não geram** previsão financeira.



* * *

**Contrato após a geração de previsão:**

**Contrato:**
Status Faturamento → Parcialmente Faturado | Status Previsão Financeira = Previsionado

-   Item 1:
    Status Previsão Financeira → Previsionado

    -   Parcela 1: Status → Faturada

    -   Parcela 2: Status → Previsionado

-   Item 2:
    Status Previsão Financeira → Previsionado

    -   Parcela 1: Status → Faturada

    -   Parcela 2: Status → Previsionado


Restrições de edição de campos

Quando houver uma previsão financeira gerada alguns campos do contrato e item do contrato, terão a edição bloqueadas.Para ver quais são esses campos, [clique aqui](https://tdn.totvs.com/x/iM9eNw).

Processo que desfaz a previsão financeira, excluindo os lançamentos de previsão financeira de um ou mais contratos.

Para a execução deste processo, é necessário selecionar os contratos desejados.

Ao ser executado, o processo exclui as previsões financeiras dos itens dos contratos, alterando o status das parcelas de Previsionado para A Faturar.

Importante

Ao faturar um contrato que esteja com Status Previsão Financeira = Previsionado ou Parcialmente Previsionado, o processo de Desfazer Previsão Financeira é executado automaticamente. Esse processo exclui os lançamentos de previsão financeira e altera o status das parcelas de *Previsionado* para *Faturada*.
