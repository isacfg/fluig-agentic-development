# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Solicitar Exclusão de Toda Operação Contábil

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/7171682901271-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Solicitar-Exclus%C3%A3o-de-Toda-Opera%C3%A7%C3%A3o-Cont%C3%A1bil](https://centraldeatendimento.totvs.com/hc/pt-br/articles/7171682901271-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Solicitar-Exclus%C3%A3o-de-Toda-Opera%C3%A7%C3%A3o-Cont%C3%A1bil)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 1 de julho de 2022 às 16:06

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: **00:02:00 min
****Dúvida**
O que é o processo de **Solicitar Exclusão de Toda Operação Contábil**?

**Ambiente**
Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões

**Solução**

Este recurso executará a **reversão/exclusão de toda** **contabilidade** de uma movimentação. Diferentemente do **Estorno** que gera um lançamento de estorno da contabilidade, este excluirá tudo que existir em relação a contabilidade do movimento.

Esta opção somente será visualizada se o **Tipo de Movimento** for parametrizado para **Utilizar Evento Contábil**

Parâmetros do Tipo de Movimento | etapa Contabilização

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/7170971081239/mceclip0.png)

**Utiliza Evento da Natureza:** O sistema irá buscar o código do Evento contábil a ser utilizado no cadastro de **Natureza de operação** preenchida na aba **Integração - Fiscal** do movimento a ser contabilizado.

![mceclip1.png](https://centraldeatendimento.totvs.com/hc/article_attachments/7171037570071/mceclip1.png)

**Utiliza Evento do Tipo de Movimento:** O sistema irá buscar o código do Evento contábil a ser utilizado nos parâmetros do próprio Tipo de Movimento.

![mceclip3.png](https://centraldeatendimento.totvs.com/hc/article_attachments/7171183946903/mceclip3.png)

**Utiliza Evento da Natureza Inversa:** O sistema irá buscar o código do Evento contábil a ser utilizado no campo de **Natureza Inversa** do cadastro de **Natureza de operação** preenchida na aba **Integração - Fiscal** do movimento a ser contabilizado.

![mceclip2.png](https://centraldeatendimento.totvs.com/hc/article_attachments/7171125418647/mceclip2.png)

A rotina de Solicitação da Operação Contábil ocorre como um **evento de agendamento do processo**, para que o mesmo ocorra no sistema **TOTVS Gestão Contábil**.

![mceclip4.png](https://centraldeatendimento.totvs.com/hc/article_attachments/7171430447895/mceclip4.png)

Com isto, todo o processo de **reversão contábil** é realizado por quem possui conhecimento do que está sendo feito, evitando execução incorreta dos processos e, consequentemente, diminuindo o retrabalho nesta atividade.
Tão logo solicitada a exclusão da operação contábil, é necessário que o **Usuário do sistema TOTVS Gestão Contábil** acesse este sistema para verificar as **pendências de exclusões**, afim de conferi-las e, em seguida, finalizar o processo.

Para maiores informações sobre execução da tarefa de exclusão de toda operação contábil [clique aqui](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360033783053-Cross-Segmentos-Backoffice-Linha-RM-CTB-Como-executar-a-tarefa).

Caso esteja sem permissão para executar o processo de Solicitar Exclusão de Toda Operação contábil [clique aqui](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024053591-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Permiss%C3%A3o-menu-Solicitar-Exclus%C3%A3o-de-Toda-Opera%C3%A7%C3%A3o-Cont%C3%A1bil).
