# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erro ao cancelar Movimento: Não foi possível cancelar Workflow Fluig para este movimento

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500008971782-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-ao-cancelar-Movimento-N%C3%A3o-foi-poss%C3%ADvel-cancelar-Workflow-Fluig-para-este-movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500008971782-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-ao-cancelar-Movimento-N%C3%A3o-foi-poss%C3%ADvel-cancelar-Workflow-Fluig-para-este-movimento)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Fluig
> **Data:** 10 de abril de 2025 às 09:43

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/31312105547543)
 Tempo aproximado para leitura: 00:01:00 min**

**Ocorrência**

Ao cancelar um Movimento que possui Integração Workflow Fluig é apresentado mensagem: **Não foi possível cancelar Workflow Fluig para este movimento Usuário não é o usuário requisitante ou gestor do processo. Não será possível cancelar a solicitação!**

![Imagem](https://totvssuporte.zendesk.com/attachments/token/z0rpM7ECWMWq5EV0407s6EnQm/?name=inline-30354597.png)

**Ambiente**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução**

Essa mensagem é exibida pois não foi definido um usuário específico para ser utilizado no cancelamento de **Workflows no Fluig**.
A regra do Fluig é permitir a exclusão/cancelamento da solicitação apenas pelo **criador ou por um usuário administrador do processo**. Desta forma, mesmo que um usuário tenha o mesmo papel do criador, ele não pode cancelar pois não é o gestor do processo nem o criador.

Com a criação desta funcionalidade, será possível informar um usuário específico para ser utilizado no cancelamento de **Workflows no Fluig**.


Acesse os parâmetros do **Gestão de Estoque, Compras e Faturamento | Definições Gerais 3/3:**

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/1500013535822)

Para maiores informações, verifique a documentação: [Usuário Padrão de Cancelamento do Workflow Fluig](https://tdn.totvs.com.br/pages/releaseview.action?pageId=381037182)
