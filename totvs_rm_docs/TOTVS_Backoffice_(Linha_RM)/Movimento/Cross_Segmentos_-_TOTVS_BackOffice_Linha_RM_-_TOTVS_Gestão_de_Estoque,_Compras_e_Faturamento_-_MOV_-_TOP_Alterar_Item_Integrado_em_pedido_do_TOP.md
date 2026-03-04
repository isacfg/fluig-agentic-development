# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - TOP: Alterar Item Integrado em pedido do TOP

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360026038333-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-TOP-Alterar-Item-Integrado-em-pedido-do-TOP](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360026038333-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-TOP-Alterar-Item-Integrado-em-pedido-do-TOP)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 23 de fevereiro de 2024 às 09:43

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura: **00:04:00min**

**Dúvida**Como gerenciar a permissão para alteração da Quantidade e Preço Unitário de itens de movimentos gerados a partir do módulo TOTVS Obras e Projetos (TOP).

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – A partir da versão 12.

**Solução**Para liberar ou bloquear a alteração da Quantidade e Preço Unitário de itens de Movimento gerados a partir do módulo **TOTVS Obras e Projetos (TOP)**, deverá acessar módulo **Serviços Globais| Administração | Usuários | Sistema: Gestão de Estoque, Compras e Faturamento | filtrar o cadastro do usuário | Anexos | Permissões por Tipo de Movimento.**

Selecione o tipo de movimento em questão e marcar (para permitir) ou desmarcar (para negar) a opção **Alterar item integrado:**

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360040356374/mceclip0.png)

Se for bloqueada a alteração de item integrado, o campo **Quantidade do Item de Movimento** ficará desabilitado:

![Imagem](https://totvssuporte.zendesk.com/attachments/token/ZgkWMvyT4rlTcMokkoWZVjB43/?name=inline1815261550.png)
​

Ao tentar alterar a Quantidade no grid de itens, será apresentado mensagem: **O item de movimento integrado ao módulo Construção e Projetos não pode ser alterado!**

![Imagem](https://totvssuporte.zendesk.com/attachments/token/NZ7kkwtc4lp7UYZcqf7lPnFZI/?name=inline1194301431.png)
​

Já se alterar o preço unitário do item, será apresentado a seguinte mensagem ao salvar o movimento:

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4415212719255/mceclip0.png)
​

A consistência será feita somente nos movimentos originados diretamente do módulo TOTVS Obras e Projetos. 

**Informações Adicionais
Consistência implementada na versão 12.1.28 e superiores.
**Ao alterar a quantidade do Item para mais durante o faturamento, a nova consistência será ativada não permitindo salvar o Movimento. 

Para solucionar a ocorrência relatada, inclua um novo **Pedido ou Pedido Extra** no módulo TOTVS Obras e Projetos com a quantidade do item que deseja aumentar.
