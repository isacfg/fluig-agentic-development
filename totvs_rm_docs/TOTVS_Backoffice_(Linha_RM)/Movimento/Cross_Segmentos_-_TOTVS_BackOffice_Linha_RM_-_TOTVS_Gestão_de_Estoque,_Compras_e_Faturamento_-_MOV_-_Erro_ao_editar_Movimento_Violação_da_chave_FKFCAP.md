# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erro ao editar Movimento: Violação da chave "FKFCAPTURACOB_FLAN"

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360063021753-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-ao-editar-Movimento-Viola%C3%A7%C3%A3o-da-chave-FKFCAPTURACOB-FLAN](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360063021753-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-ao-editar-Movimento-Viola%C3%A7%C3%A3o-da-chave-FKFCAPTURACOB-FLAN)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 23 de julho de 2023 às 19:18

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/16233804890903)**Tempo aproximado para leitura: **00:03:00min**

**Ocorrência
**Ao editar um Movimento e salvar é apresentado a mensagem de Violação da chave: **FKFCAPTURACOB\_FLAN:
**

**
![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/1500002503162)
**

**Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução**Esta mensagem é exibida pelo fato do Lançamento Financeiro associado a este movimento estar envolvido no processo de **DDA (Débito Direto Autorizado)**. Quando o usuário edita o movimento, o sistema tenta regravar o lançamento financeiro e ao tentar excluir o existente observa este relacionamento.

Para conseguir regravar o movimento, será necessário acessar o contexto do **TOTVS Gestão Financeira**, ir no menu **Movimentações Bancárias | DDA - Débito Direto Autorizado**. Crie um novo filtro que considere a seguinte condição:

**Lançamento Conciliado = xxxxx**

![Imagem](https://totvssuporte.zendesk.com/attachments/token/jenXT6owq6kkGoHi4rgtjzRhz/?name=inline-1105111457.png)

Será exibido um registro na visão de captura de títulos. **Selecione o título | Processos | Cancelamento da Conciliação de Títulos em Cobrança;**

![Imagem](https://totvssuporte.zendesk.com/attachments/token/a6K9YJmSLYTCVrUbhLi7KyQs9/?name=inline-454233179.png)

Este processo sendo executado com sucesso, o lançamento poderá ser regravado pelo movimento, sem a exibição desta mensagem na próxima tentativa.
