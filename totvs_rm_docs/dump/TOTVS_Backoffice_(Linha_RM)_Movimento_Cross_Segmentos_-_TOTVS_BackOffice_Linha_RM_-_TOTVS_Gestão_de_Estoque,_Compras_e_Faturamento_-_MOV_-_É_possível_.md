# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV -  É possível realizar o vínculo automático do adiantamento com a nota fiscal no financeiro?

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4411214849687-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-%C3%89-poss%C3%ADvel-realizar-o-v%C3%ADnculo-autom%C3%A1tico-do-adiantamento-com-a-nota-fiscal-no-financeiro](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4411214849687-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-%C3%89-poss%C3%ADvel-realizar-o-v%C3%ADnculo-autom%C3%A1tico-do-adiantamento-com-a-nota-fiscal-no-financeiro)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 8 de janeiro de 2024 às 12:03

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura: **00:03:00 min**

**Dúvida
**É possível realizar o vínculo automático do adiantamento com a nota fiscal no financeiro?

**Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- A partir da 12.1.32.

**Solução
**Hoje o sistema não realiza vínculo de **Lançamento de Adiantamento** ao **Lançamento Financeiro** da nota fiscal de forma automática.
O que o sistema disponibiliza é abrir a tela que lista os adiantamentos existentes para que o vinculo seja feito manualmente pelo usuário.

Este processo é responsável por vincular Lançamentos Financeiros de um Movimento à Lançamentos de Adiantamento compatíveis.

O mesmo estará disponível ao salvar o Movimento e na visão de Movimentos, desde que o Perfil (Módulo Gestão de Estoque, Compras e Faturamento) do Usuário possua permissão no Item **08.03.02.01 - Vínculos**.

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4411445846679/mceclip0.png)

O Tipo de Movimento deve estar parametrizado para **Controlar Adiantamento** (Etapa 48 - Vinculações).

![mceclip1.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4411445857047/mceclip1.png)

As flags **Fatura o Movimento** e **Fatura na inclusão** (Etapa 54 - Fin - Faturamento 1/6) também precisam estar marcadas.

![mceclip4.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4411445916951/mceclip4.png)

Se parametrizado corretamente, a nova opção será apresentada nas seguintes situações:

Salvar o movimento:

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4411525387799/mceclip0.png)

E clicar em 'Sim', a seguinte tela será exibida: 

![mceclip1.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4411517813015/mceclip1.png)

***Observação**: A árvore de registros exibida à esquerda é construída tendo como base os Movimentos selecionados antes da execução do processo e seus respectivos Lançamentos.*

Ao clicar em 'Não' a tela não será apresentada. Entretanto o vínculo pode ser realizado futuramente, após seleção do(s) Movimento(s) desejado(s) conforme descrito abaixo:

Menu de **Processos - Vincular Lançamentos.**

![mceclip3.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4411525464855/mceclip3.png)
