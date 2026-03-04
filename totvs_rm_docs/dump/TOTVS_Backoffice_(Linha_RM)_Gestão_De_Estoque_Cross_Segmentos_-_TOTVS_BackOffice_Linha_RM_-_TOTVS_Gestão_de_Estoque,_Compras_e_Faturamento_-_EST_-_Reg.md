# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - EST - Regerar Saldos e Custos

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/5727366487319-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Regerar-Saldos-e-Custos](https://centraldeatendimento.totvs.com/hc/pt-br/articles/5727366487319-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Regerar-Saldos-e-Custos)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
> **Data:** 9 de abril de 2025 às 15:49

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/24426050193175)
 Tempo aproximado para leitura: **00:05:00 min
**

**Dúvida**
Como realizar o processo de Regerar Saldos e Custos?

**Ambiente**
Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões

**Solução**
O processo de **Regerar Saldos e Custos**, tem por finalidade **regravar** todas movimentações inclusas em tipos de movimentos parametrizados para **afetar saldo em estoque** e que tenham data de movimentação **superior** a **data de fechamento de estoque**.

É executada quando há necessidade de **recompor os saldos e custos** dos produtos inclusos em data retroativa á atual ou quando existe alguma **alteração na parametrização** do tipo de movimento que deve afetar os saldos e custos na base.

Além de acerto dos saldos, o processo também monta os dados da **ficha física financeira** do produto, que só é atualizada quando a rotina é executada. O processo depois de executado é **irreversível**, sendo sugerido que seja feito um **backup de segurança**.

**O processo:
**O usuário deverá acessar o menu **| Estoque | Processos | Regerar Saldos e Custos | Avançar |** onde serão apresentadas abas **| Seleção de Produtos, Parâmetros Gerais** e **Agendamento (3 camadas) |** para configurar as informações que serão consideradas para regeração.

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/5726405387927)

1 - Aba Seleção de Produtos:
Nessa aba deve-se selecionar os produtos que vão participar do processo.

![mceclip1.png](https://centraldeatendimento.totvs.com/hc/article_attachments/5726716878231)

2 - Aba Parâmetros Gerais:
Nessa aba deve-se selecionar as configurações dessa regeração.

![mceclip2.png](https://centraldeatendimento.totvs.com/hc/article_attachments/5726795050647)

3 - Aba Agendamento:

Essa aba somente será apresentada quando o sistema estiver em **3 camadas**.

Nela é possível configurar o momento da execução, que pode ser ao avançar o processo ou agendar o dia e horário, além permitir a repetição do processo.

![mceclip3.png](https://centraldeatendimento.totvs.com/hc/article_attachments/5726913847575)

**Importante:**

\- Ao parametrizar a base para utilizar data de fechamento de estoque geral será apresentada opção **| Forçar Regeração Total |**.

\- Ao parametrizar a base para utilizar data de fechamento de estoque por “saldo” será apresentada opção **| Regerar Todos os Saldos |**.

\- Ao executar a rotina de regeração de saldos e custos todos os 10 saldos serão afetados sem a interferência do usuário. Ao escolher a opção “Regerar apenas Ficha Física Financeira” apenas o saldo selecionado em **| Saldo a Regerar |** será afetado.

Para mais detalhes [clique aqui](https://tdn.totvs.com/pages/releaseview.action?pageId=237373704).
