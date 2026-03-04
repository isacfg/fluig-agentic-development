# 06. Contratos - Tabelas do Contrato 2.0

> **Fonte:** [https://tdn.totvs.com/display/public/LRM/06.+Contratos+-+Tabelas+do+Contrato+2.0](https://tdn.totvs.com/display/public/LRM/06.+Contratos+-+Tabelas+do+Contrato+2.0)
> **Domínio:** TDN (TOTVS Developer Network)

---

Tabelas

Nome

Tabelas

Nome

TCNT

Contrato

TCNTCOMPL

Dados Complementares de Contrato

TCNTHISTORICO

Histórico do Contrato

TCNTHISTORICOPROCESSO

Histórico de execução de processos no contrato

TCNTHST

Histórico de Reajustes dos Contratos

TCNTITMPREVISAO

Previsões Financeiras

TCNTPAR

Parâmetros de Contratos

TCNTRELPREVMED

Relacionamento entre Previsões/Medições

TCPGCNT

Vencimentos dos Itens de Contrato

TITMCNT

Itens de Contrato

TITMCNTADITIVO

Aditivos de Contrato

TITMCNTCOMPL

Dados Complementares de Item de Contrato

TITMCNTHISTORICO

Histórico do Item de Contrato

TITMCNTMEDICAO

Medições de um item de contrato

TITMCNTMOV

Vínculo de Itens de Contrato x Itens de Solicitação

TITMCNTMOVGERADO

Quantidade Gerada do Item de Contrato

TITMCNTPARCELA

Parcelas de um item de contrato

TITMCNTRATCCU

Rateios C.Custo do Item de Contrato

TITMCNTRATDEP

Rateios Departamento do Item de Contrato

TITMCNTRECLASSIFICACAO

Reclassificação de Parcelas do Contrato

TMCACNT

Motivos de Cancelamento de Contrato

TSTACNT

Status de Contrato

TITMCNTHSTPARCELA

Histórico de reajuste das parcelas de um item de contrato de arrendamento mercantil

TITMCNTCTB

Relação item de contrato e lançamento contábil.

TITMCNTORCAMENTO

Informações para integração de Contrato com Orçamento

TCNTORCAMENTORELAC

Tabela que relaciona o contrato com as movimentações de orçamento

Contrato que originou o movimento

Na tabela TITMMOV é possivel identificar o contrato e item de contrato que originou o movimento

-   Coluna IDCNT o identificador do contrato
-   Coluna NSEQITMCNT o ideintificador do item do contrato

Contrato integrado ao Patrimônio

Na tabela TNCT é possivel identificar se existe integração do Contrato x Patrimônio 

-   Coluna INTEGRADOBONUM se o contrato está ou não integrado

Na tabelas TCNTHISTORICOPROCESSO, TCNTHST, TITMCNTADITIVO é possivel identificar se existe ocorrências em Contratos integrados ao Patrimônio 

-   Coluna IDOCORRENCIAVALOR e IDOCORRENCIAPRAZO para as tabelas TCNTHISTORICOPROCESSO e TITMCNTADITIVO
-   Coluna IDOCORRENCIAVALOR  para a tabela TCNTHST
