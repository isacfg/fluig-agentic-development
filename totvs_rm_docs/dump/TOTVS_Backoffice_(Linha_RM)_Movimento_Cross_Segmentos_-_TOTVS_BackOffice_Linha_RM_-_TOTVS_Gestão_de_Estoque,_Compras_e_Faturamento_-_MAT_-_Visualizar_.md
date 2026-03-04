# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Visualizar Apenas Movimentos Criados Pelo Usuário Logado

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360045630234-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Visualizar-Apenas-Movimentos-Criados-Pelo-Usu%C3%A1rio-Logado](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360045630234-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Visualizar-Apenas-Movimentos-Criados-Pelo-Usu%C3%A1rio-Logado)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 19 de janeiro de 2022 às 09:59

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura: **00:03:00min**

**Dúvida**Como criar um filtro para visualizar somente os Movimentos que foram criados pelo usuário que está logado? 

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da 11.80

**Solução**Será necessário a criação de um **filtro por usuário** no cadastro do usuário conforme os prints abaixo:

Acesse o menu **Serviços Globais | Segurança | Usuários | sistema: Gestão de Estoque, Compras e Faturamento | Selecione o usuário | Clique em Anexos |** **Filtro por Usuário**:

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360063971774/mceclip0.png)

Clique no botão incluir:

![mceclip1.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360064981913/mceclip1.png)

Selecione a tabela TMOV e clique em **Novo**:

![mceclip3.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360064982253/mceclip3.png)

Crie um filtro com a opção **usuário que criou o movimento** e defina qual usuário no campo valor:

![mceclip2.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360064982053/mceclip2.png)

Marque a opção **Sempre usar esse filtro ao abrir a visão**:

![mceclip4.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360063972254/mceclip4.png)
