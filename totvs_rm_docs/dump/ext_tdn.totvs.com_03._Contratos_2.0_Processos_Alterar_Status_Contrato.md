# 03. Contratos 2.0 | Processos | Alterar Status Contrato

> **Fonte:** [https://tdn.totvs.com/display/public/LRM/03.+Contratos+2.0+%7C+Processos+%7C+Alterar+Status+Contrato](https://tdn.totvs.com/display/public/LRM/03.+Contratos+2.0+%7C+Processos+%7C+Alterar+Status+Contrato)
> **Domínio:** TDN (TOTVS Developer Network)

---

Durante a criação do contrato, é possível definir seu status inicial. No entanto, após o início das operações e processos relacionados, qualquer modificação de status só poderá ser feita através do processo **"Alterar Status Contrato"**.

Esse processo permite alterar o status de um ou mais contratos simultaneamente.

Como executar a alteração:

1.  Selecione os contratos desejados;

2.  Preencha os seguintes parâmetros:

    -   Data: Informe a data real em que ocorreu a mudança de status;

    -   Novo Status do Contrato: Informe o novo status a ser atribuído;

    -   Motivo: Informe o motivo da alteração.


Após o preenchimento, ao executar o processo, o status dos contratos será atualizado. Dependendo da parametrização do novo status, ações adicionais podem ser executadas automaticamente.

* * *

Ações automáticas para status com parametrização de "Cancelamento"

Caso o novo status esteja parametrizado como "Cancelamento", serão realizadas automaticamente as seguintes ações:

-   Exclusão de lançamentos financeiros do tipo *Previsão Financeira*, caso existam;

-   Exclusão dos movimentos de faturamento, desde que ainda possam ser excluídos (ou seja, não tenham dado continuidade a outros fluxos de movimentação).


Se o contrato teve seu status anterior definido como "Cancelamento" e deseja-se que o novo status volte a gerar lançamentos de previsão e faturamento, será necessário realizar manualmente os processos correspondentes.

 Status do Contrato

O status de contrato possui duas parametrizações importantes:

-   Faturamento

-   Cancelamento


Cada uma dessas opções pode estar marcada ou desmarcada, influenciando diretamente no comportamento do sistema ao alterar o status.

O cadastro dos status pode ser acessado pelo menu: **[Contratos | Tabelas de Contrato | Status de Contrato](https://tdn.totvs.com/x/wcpEGQ)**

 Motivo da Alteração

O motivo da alteração é uma informação obrigatória e deve ser registrada ao realizar a mudança de status.

O cadastro dos motivos pode ser acessado pelo menu: **[Contratos | Tabelas de Contrato | Motivos de Cancelamento](https://tdn.totvs.com/x/fsdEGQ)**

 Contabilidade

Este processo pode ser contabilizado quando o status do contrato estiver parametrizado com a opção **Cancelamento** habilitada e, adicionalmente, quando o tipo de contrato possuir um **evento contábil de baixa** devidamente vinculado.

Não é possível realizar o estorno contábil pelo módulo de Contratos. Esse procedimento deve ser efetuado exclusivamente no módulo Contábil.
