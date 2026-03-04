# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - EST - Obrigatoriedade do Local de Estoque

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500002770422-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Obrigatoriedade-do-Local-de-Estoque](https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500002770422-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Obrigatoriedade-do-Local-de-Estoque)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 12 de agosto de 2022 às 09:10

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura: **00:03:00min**

**Dúvida**Um Movimento do tipo 1.2.XX pode ser criado sem **Local de Estoque**?

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as Versões.

**Solução**Não é possível, uma vez que sem Local de Estoque não há como controlar o estoque e sendo esta a finalidade do sistema **Gestão de Estoque, Compras e Faturamento**, não é permitido inserir um movimento sem que este campo Local de Estoque esteja preenchido.

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4415139735959/mceclip0.png)

Uma possibilidade é a empresa trabalhar com **Local de Estoque Único**, nesse caso o sistema não exibirá o campo em tela mas será preenchido internamente com um código único para cada Filial.

**Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Parâmetros Gerais | etapa Local de Estoque:**

![mceclip1.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4415151636631/mceclip1.png)

Outra possibilidade é a empresa possuir cadastrado apenas serviços e não **controlar estoque de serviços**, estando o tipo de movimento configurado para trabalhar apenas com serviços o Local de Estoque não lhe será solicitado nem exibido em tela.
