# 03. Contratos 2.0 | Processos | Medição

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=938330369](https://tdn.totvs.com/pages/releaseview.action?pageId=938330369)
> **Domínio:** TDN (TOTVS Developer Network)

---




-   [Gerar Medição](#)
-   [Cancelar Medição](#)

O processo de geração da medição de um item de contrato tem como objetivo realizar uma nova medição de valor ou quantidade, conforme o tipo de faturamento definido na identificação do item. Dessa forma, caso um item tenha seu tipo de faturamento como medição de quantidade, por exemplo, será realizada uma medição de quantidade, e vice-versa.

* * *

**Medição para Múltiplos Itens**

Ao selecionar mais de um item, o processo Gerar Medição Múltiplos Itens é habilitado, permitindo a geração de uma medição para cada item selecionado. Neste processo, será apresentado um grid contendo os itens passíveis de medição, tanto por quantidade quanto por valor.

-   Para os itens de medição por valor, a quantidade aparecerá fixada em 1 na grid. Independentemente de edições neste campo, para medições por valor, a quantidade considerada será sempre 1.

-   Nos itens de medição por quantidade, o campo de valor não será preenchido na grid e não será considerado pelo processo, já que o valor atualizado do item será calculado durante a execução do processo.


* * *

**Medição para Um Único Item**

Caso o usuário selecione apenas um item, o processo Gerar Medição será habilitado. Nesse caso, ao invés de um grid, serão apresentados campos de preenchimento para a criação da medição do item selecionado.

### Regras de Medição

**Regra**

**Descrição**

**Regra**

**Descrição**

Medição de Quantidade

Para medições de quantidade, o valor da medição corresponderá ao valor do item.

Medição de Valor

Para medições de valor, a quantidade do item na medição será de uma unidade.

Vinculação da Medição

A medição será vinculada a uma parcela sequencialmente. Caso o valor medido seja diferente do valor da parcela, ela será ajustada e as parcelas subsequentes recalculadas.

Exemplos de Ajuste de Parcelas

Exemplo 1:

\- Contrato de R$1.000,00 com 4 parcelas de R$250,00.
\- Medição de R$400,00:
\- 1ª parcela: R$400,00.
\- O saldo de R$600,00 será redistribuído nas 3 parcelas restantes (R$200,00 cada).

Exemplo 2:

\- Contrato de R$1.000,00 com 3 parcelas, sendo:
\- 1ª parcela: R$300,00
\- 2ª parcela: R$500,00;
\- 3ª parcela: R$200,00.
\- Medição de R$400,00:
\- 1ª parcela: R$400,00.
\- O saldo de R$600,00 será redistribuído proporcionalmente nas 2 parcelas restantes.
\- 2ª parcela: R$428,57.
\- 3ª parcela: R$171,43.

Medição Completa do Saldo

Se a medição corresponder ao saldo disponível para medir, as parcelas restantes terão o valor zerado e o status inativado, não participando de faturamento.

Criação de Parcela Adicional

Se a última medição for realizada e houver saldo remanescente, uma nova parcela adicional será criada com o valor restante.
\- Número de parcelas será incrementado em 1.
\- Valor da nova parcela será o saldo remanescente.
\- Nova parcela será criada conforme critérios de faturamento do item.
\- Após a criação, a parcela não pode ser removida. Se a última medição for cancelada, a parcela se tornará inativa.

Exclusão de Previsão Financeira

Se a parcela tiver previsão financeira, ela será excluída automaticamente.

Data da Medição

A data da medição obedecerá o parâmetro configurado em [Parâmetros | Gestão de Estoque, Compras e Faturamento | Contratos | Definições Gerais](https://tdn.totvs.com/x/ochEGQ) e essa data ajustará a data de vencimento da parcela.

Atualização de Previsão Financeira

Se a parcela previsionada for atualizada (data ou valor), a previsão financeira também será atualizada.

Restrição de Alterações Após Vinculação

Após vinculação da medição, não será possível atualizar a data de vencimento ou alterar as informações de faturamento (valores do item, periodicidade, etc.).

Controle de Valores Medidos

O controle de valores medidos será feito conforme os saldos a medir. Exemplo: Contrato de 100 horas, com 10 horas medidas, restando 90 horas para medir.

Distribuição de Valores para Parcelas

Quando o saldo a medir não pode ser distribuído igualmente entre as parcelas restantes, o sistema aplicará o valor na próxima parcela disponível e inativará as demais.

Importante

Ao realizar medições os valores das parcelas remanescentes serão recalculadas de acordo com o saldo restante. A soma dos valores das parcelas que foram arrendados/truncados podem gerar diferenças de valores em referência ao valor total do item, para tratar este cenário, o sistema aplicará a diferença a última parcela.



* * *

### **Parâmetros do Processo**

Parâmetros comuns a todos os tipos de medição:

**Parâmetro**

**Descrição**

**Parâmetro**

**Descrição**

Item

Número sequencial do item, no qual será realizada a medição. (Disponível apenas na Geração de Medição Múltiplos Itens)

Produto/Serviço

Produto ou serviço, no qual será realizada a medição. (Disponível apenas na Geração de Medição Múltiplos Itens)

Unidade

Unidade do produto ou serviço, no qual será realizada a medição. (Disponível apenas na Geração de Medição Múltiplos Itens)

Tipo

Tipo de medição (valor/quantidade). (Disponível apenas na Geração de Medição Múltiplos Itens)

Data

Data em que a medição foi realizada.

Quantidade

Quantidade medida.

Valor

Valor medido.

Justificativa

Descrição sobre a medição realizada.

Município

Município em que foi realizada a medição.

UF

Estado em que a medição foi realizada.

Serviço

Código do serviço.

O processo de Cancelar Medição possibilita o cancelamento da última medição realizada nos itens de contratos selecionados.

**Regras**

-   O cancelamento da medição só será possível caso a parcela associada a ela ainda não tenha sido faturada.

-   Caso o status da parcela seja Previsionado, os valores dos lançamentos financeiros de previsão serão ajustados.

-   Ao realizar o cancelamento, serão atualizados os valores das parcelas e o valor da parcela na aba de identificação dos itens selecionados.

-   Se a data da medição for diferente da data de vencimento da parcela, a data de vencimento da parcela permanecerá com a data da medição após o cancelamento.

-   O registro da medição cancelada será removido do histórico de medição do item.

-   O processo de cancelamento será gravado no histórico de processo.

-   Caso uma parcela previsionada tenha sido inativada através da execução do processo de gerar medição, e o seu previsionamento tenha sido excluído, o processo de Cancelar Medição não irá gerar novamente a previsão dessa parcela. Nesse caso, será necessário que o usuário execute o processo de Gerar Previsão para reativá-la.

-   Caso a medição total do item seja realizada em uma parcela que não seja a última, ao cancelar essa medição, os valores das parcelas zeradas (sem medição) serão redistribuídos igualmente. Nessa situação, será necessário validar os processos anteriores, como por exemplo: redistribuição de parcelas.
