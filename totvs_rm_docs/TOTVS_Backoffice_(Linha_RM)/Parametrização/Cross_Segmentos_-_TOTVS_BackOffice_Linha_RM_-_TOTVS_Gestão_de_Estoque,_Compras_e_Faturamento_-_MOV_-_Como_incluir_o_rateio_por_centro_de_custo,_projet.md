# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como incluir o rateio por centro de custo, projeto e tarefa automaticamente

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360005050291-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-incluir-o-rateio-por-centro-de-custo-projeto-e-tarefa-automaticamente](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360005050291-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-incluir-o-rateio-por-centro-de-custo-projeto-e-tarefa-automaticamente)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 20 de setembro de 2022 às 23:35

---

 ***![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)***Tempo aproximado para leitura: **00:03:00 min**

**Dúvida**Como incluir o rateio de centro de custo, projeto e tarefa automaticamente ao salvar o movimento, baseando nos campos do item de movimento **Tabelas | Centro de Custo**, **Integrações | Projetos** **|** **Identificador do Projeto** e **Identificador da Tarefa?**

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução**Para solucionar essa dúvida, realize os seguintes passos:

-   1\. Acesse menu **Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento |** selecione o tipo de movimento (duplo clique) e Avance;
-   2\. Avance até a etapa **Item | Tab | Global** e informe Edita Centro de Custo = Sim;
-   3\. Avance até a etapa **Rateio C.Custo | Departamento**, informe Rateio do Movimento, Usar Rateio por Centro de Custo = Usa Obrigatoriamente e Rateio do Item, Usar Rateio por Centro de Custo = Usa Obrigatoriamente;
-   4\. Avance até a etapa **Projeto** e parametrize os campos Informa Projeto/Tarefa e Usa Rateio de Tarefa como Obrigatório ou Opcional, conforme a necessidade da empresa;
-   5\. Salve os parâmetros;
-   6\. Ao incluir o item de movimento, informe na aba Tabelas o **Centro de Custo** e na aba **Integrações | Projetos**, **o** **Identificador do Projeto** **e** **Identificador da Tarefa;**

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360006576171/mceclip1.png)

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360006533452/mceclip0.png)

-   7\. Após Salvar o movimento, acesse a aba **Rateios | Centro de Custo** e verifique que o rateio foi definido automaticamente com as informações de centro de custo, projeto e tarefa inseridas anteriormente;

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360006576291/mceclip0.png)
