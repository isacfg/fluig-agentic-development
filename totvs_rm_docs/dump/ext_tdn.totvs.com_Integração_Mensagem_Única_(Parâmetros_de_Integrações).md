# Integração Mensagem Única (Parâmetros de Integrações)

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=493625821](https://tdn.totvs.com/pages/releaseview.action?pageId=493625821)
> **Domínio:** TDN (TOTVS Developer Network)

---

****Mensagem de Integração**:** Essa opção é habilitada quando existir pacotes de integrações EAI 2.0 ativos na base. Os pacotes que habilitam esta etapa são:

-   Integração Manutenção de Ativos x BackOffice RM (EAI 2.0) e na etapa Manutenção do Tipo de Movimento está marcada a opção **Integração com SigaMNT** ou
-   Integração Quirons x BackOffice RM
-   BackOffice Protheus x Educacional RM.

As opções disponíveis para esse parâmetro são: 

-   Não Integrado: valor default do campo.
-   Solicitação de Compra: Utilizado na Integração Obras e Projetos x BackOffice Protheus.
-   Solicitação de Armazém: Utilizado na Integração Obras e Projetos x BackOffice Protheus.
-   Solicitação de Histórico: Utilizado na Integração Obras e Projetos x BackOffice Protheus.
-   Pedido de Compra: Utilizado na Integração Obras e Projetos x BackOffice Protheus.
-   Pedido de Venda: Utilizado na Integração Obras e Projetos x BackOffice Protheus.
-   Baixa de Estoque: Utilizado na Integração Manutenção de Ativos x BackOffice RM. Os movimentos parametrizados com essa opção reportam insumos realizados para o SigaMNT. (Mensagem STOCKTURNOVER - Envio do RM para Protheus). Esta opção também será utilizada na integração Quírons com BackOffice RM para realizar a baixa de estoque dos produtos de EPIs solicitados pelo Quírons (mensagem StockTurnOver - Envido do RM para o Quírons).
-   Entrada de Estoque: Utilizado na integração Quírons x BackOffice RM. Os movimentos parametrizados com essa opção irão aumentar o estoque dos produtos de EPIs solicitados via devolução de EPI do sistema Quírons.

**Fórmula Valor Item:** esta opção fica habilitada quando for selecionado no campo **Mensagem de Integração** a opção **Baixa de Estoque**. A fórmula utilizada neste campo deve ser aplicada utilizando contexto de item de movimento. Quando o tipo de movimento estiver utilizando esta configuração, o resultado da fórmula será aplicado no adapter de envio da mensagem StockTurnOver, para preencher o Custo Total do Item. Caso a fórmula não esteja preenchida, o sistema irá considerar o Valor Liquido do item de movimento. 

**Tipo de movimento para reporte de insumos automático:** esta opção fica habilitada para preenchimento em movimentos do tipo 1.2.XX , quando na "**Etapa 67 - Manutenção**" for marcada a integração com SigaMNT e selecionado no campo "Tipo de Movimento para Reporte de Insumo Automático", **Etapa 78 - Integração** **Mensagem Única,** um tipo de movimento parametrizado para realização de "Baixa de Estoque".
