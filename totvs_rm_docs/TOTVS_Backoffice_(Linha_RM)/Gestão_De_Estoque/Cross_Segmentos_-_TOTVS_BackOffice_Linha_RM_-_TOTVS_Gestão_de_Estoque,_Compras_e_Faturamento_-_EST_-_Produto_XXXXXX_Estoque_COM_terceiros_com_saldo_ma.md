# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - EST - "Produto XXXXXX: Estoque COM terceiros com saldo maior que o saldo físico no local".

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/7255420379287-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Produto-XXXXXX-Estoque-COM-terceiros-com-saldo-maior-que-o-saldo-f%C3%ADsico-no-local](https://centraldeatendimento.totvs.com/hc/pt-br/articles/7255420379287-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Produto-XXXXXX-Estoque-COM-terceiros-com-saldo-maior-que-o-saldo-f%C3%ADsico-no-local)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
> **Data:** 9 de abril de 2025 às 15:49

---

**
![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
**Tempo aproximado para leitura: **00:03:00min**

**Ocorrência
**Ao incluir o movimento é apresentado a mensagem: **Produto XXXXXX: Estoque COM terceiros com saldo maior que o saldo físico no local.

****Ambiente
**Cross Segmentos - TOTVS Backoffice Linha RM - TOTVS Gestão de Estoque Compras e Faturamento - A partir da versão 12.1.**Solução
**Ao parametrizar um movimento que controla **Saldo Atual** e **Saldo COM Terceiros** não pode ser inserido movimento que possibilite que a quantidade de saldo COM Terceiros se torne maior da que o de saldo por local. Caso isso ocorra, será disparada a mensagem: **Produto XXXXXX: Estoque COM Terceiros com saldo maior que o saldo físico no local**.

Exemplo da parametrização utilizada:

![mceclip1.png](https://centraldeatendimento.totvs.com/hc/article_attachments/7236630475031/mceclip1.png)

   
![mceclip2.png](https://centraldeatendimento.totvs.com/hc/article_attachments/7236651451671/mceclip2.png)

**Informações Adicionais
**Ao contrário do controle de saldo **COM Terceiros,** o controle **DE Terceiros** não permite que seja controlado o saldo atual simultaneamente.
