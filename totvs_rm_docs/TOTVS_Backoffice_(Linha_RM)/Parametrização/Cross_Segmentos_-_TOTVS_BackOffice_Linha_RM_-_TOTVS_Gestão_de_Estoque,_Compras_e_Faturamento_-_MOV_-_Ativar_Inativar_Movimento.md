# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Ativar/Inativar Movimento

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4410718222231-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Ativar-Inativar-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4410718222231-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Ativar-Inativar-Movimento)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 14 de outubro de 2021 às 16:24

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura: **00:02:00 min

Dúvida
**Processo Ativar/Inativar Movimento.

**Ambiente**
Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução
**O processo de Ativar/Inativar Movimento consiste em bloquear ou desbloquear movimentos para alterações.

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4410725384599/mceclip0.png)

O processo executado não altera seu estoque, contabilidade, financeiro e fiscal, ele só irá bloquear a edição e ao tentar editar ocorrerá a mensagem abaixo:

![mceclip1.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4410730633751/mceclip1.png)

Movimentos parcialmente recebidos, cancelados ou utilizados como Ordem de Serviço do TOTVS Manutenção, não permitem que este processo seja executado, sendo permitido somente para os **m****ovimentos com status Pendente ou Normal**.

Além disso, por se tratar de uma alteração de status de movimento, este processo somente poderá ser executado para um movimento por vez.
