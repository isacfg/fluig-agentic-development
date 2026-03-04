# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- MOV - Movimento com itens relacionados pelo processo de cópia por referência!

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4411682968983-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Movimento-com-itens-relacionados-pelo-processo-de-c%C3%B3pia-por-refer%C3%AAncia](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4411682968983-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Movimento-com-itens-relacionados-pelo-processo-de-c%C3%B3pia-por-refer%C3%AAncia)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 15 de agosto de 2022 às 08:30

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura: **00:02:00 min.**

**Dúvida
**Por que movimentos inclusos pelo processo de Cópia por Referência não permitem edição?

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4411527598743/mceclip0.png)

**Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.

**Solução
**Ao referenciar uma nota pelo processo Assistente de Cópia por Referência, a mesma fica impossibilitada de alterações para garantir a integridade do software. Para alterar qualquer informação, será necessário cancelar o movimento de devolução que foi incluído via cópia por referência e posteriormente editar o movimento origem (movimento referenciado na cópia por referência). A mensagem destacada em vermelho ficará bloqueando a edição do movimento enquanto existir relacionamento de devolução.

Para descobrir quais os **movimentos relacionados** selecione o movimento e clique no ícone Rastreabilidade, destacado abaixo:

![mceclip2.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4411687062167/mceclip2.png)

**Importante**
Para se cancelar qualquer movimento é fundamental que não haja nenhuma integração efetivada com outros módulos. Ou seja deverá, se necessário, voltar a escrituração, cancelar a baixa do lançamento financeiro, estornar a contabilização e cancelar o envio da nota fiscal eletrônica. O movimento também deve possuir data de movimentação posterior ao fechamento de estoque.
