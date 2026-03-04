# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Status de Contrato

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/23397128231191-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Status-de-Contrato](https://centraldeatendimento.totvs.com/hc/pt-br/articles/23397128231191-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Status-de-Contrato)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
> **Data:** 19 de fevereiro de 2025 às 14:59

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/23397122798871)
 Tempo aproximado para leitura: **00:01:00 min
****
Dúvida**Como Criar Status de Contrato?

**Ambiente**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.


**Solução**

Por esta opção são cadastrados os status do contrato, utilizados pela empresa durante a inclusão / manutenção de contratos.
Exemplos: Vencido, Suspenso, Cancelado, Carência, Normal, Especial, Cancelado reversível, Cancelado irreversível.. etc.

Para cadastrar, acesse o Menu Contratos > Tabelas de Contratos > Status de Contrato:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/23397122800919)

**Descrição dos Campos:**

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/23397128166935)

**Tabela:** TSTACNT

**Código:** Informe o código do status a ser incluído. ( Este código não poderá ser editado após a gravação do registro )
**Descrição**: Informe a descrição para o status.
**Faturar**: Ao marcar esse parâmetro, os contratos incluídos com este status poderão ser faturados normalmente. Do contrário o usuário não poderá fatura-lo.
**Cancelamento:** Similar ao parâmetro anterior, ao marcar esse parâmetro o sistema considera o mesmo como um status de cancelamento, ou seja, quando um contrato é cancelado, um status de cancelamento deverá ser informado e nesta etapa são apresentados apenas os status que têm esse parâmetro marcado.

**OBSERVAÇÃO**: O sistema não permite a exclusão de um status que estiver sendo referenciado em algum contrato.

A informação criada será visualizada no campo Código do Status:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/23397128175895)

Campo na versão 12.1.2502 e superiores:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/30094923241239)
