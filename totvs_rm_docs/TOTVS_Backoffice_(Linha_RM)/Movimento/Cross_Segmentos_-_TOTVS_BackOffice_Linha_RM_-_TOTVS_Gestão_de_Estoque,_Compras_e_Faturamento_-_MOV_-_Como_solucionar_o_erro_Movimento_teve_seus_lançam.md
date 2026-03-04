# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como solucionar o erro Movimento teve seus lançamentos contábeis exportados!

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360005113692-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-solucionar-o-erro-Movimento-teve-seus-lan%C3%A7amentos-cont%C3%A1beis-exportados](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360005113692-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-solucionar-o-erro-Movimento-teve-seus-lan%C3%A7amentos-cont%C3%A1beis-exportados)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 14 de junho de 2023 às 17:45

---

**
![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
**Tempo aproximado para leitura: **00:02:00 min
****Ocorrência**Ao tentar realizar o cancelamento ou exclusão de um movimento é apresentada a mensagem:

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4410717045399/mceclip0.png)

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.

**Causa
**Este incidente ocorre porque os lançamentos contábeis do movimento já foram **integrados ao Lote Oficial (Lote 0)**, no módulo Gestão Contábil.

**Solução**Para solucionar essa ocorrência, realize os seguintes passos:
1\. Selecionar o movimento | Processos | **Estornar Contabilidade**;
2\. Selecionar o movimento | Processos | **Solicitar Exclusão de Toda Operação Contábil**;
3\. Acessar o módulo Gestão Contábil;
4\. Acessar menu **Utilitários** | **Tarefas** | **Gerenciador**;
5\. Fazer um filtro para retornar a tarefa gerada pelo processo executado no movimento;
6\. Clicar em Processos | **Executar Tarefa** e executar o processo Exclusão da Contabilização **(Lote 0)**.
