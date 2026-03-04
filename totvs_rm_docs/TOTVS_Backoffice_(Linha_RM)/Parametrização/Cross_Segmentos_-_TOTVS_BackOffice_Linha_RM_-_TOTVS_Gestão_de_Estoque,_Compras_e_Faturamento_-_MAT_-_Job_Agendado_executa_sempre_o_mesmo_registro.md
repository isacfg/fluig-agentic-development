# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Job Agendado executa sempre o mesmo registro

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4409306337943-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Job-Agendado-executa-sempre-o-mesmo-registro](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4409306337943-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Job-Agendado-executa-sempre-o-mesmo-registro)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 1 de agosto de 2022 às 12:10

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: **00****:01:00 min
**

**Ocorrência
**Ao realizar o agendamento do um **JOB** este é executado sempre para os mesmo registros todas as vezes.

**Ambiente**
Cross Segmento - TOTVS Backoffice (Linha RM) - TOTVS Gestão Estoque, Compras e Faturamento - Todas as versões.

**Causa**
Esse incidente ocorre pois o JOB agendado necessita da **seleção do registro** a ser processado.
Uma vez que o registro precisa ser selecionado a execução do processo depende da **ação de um usuário** e o agendamento deste não possibilitará tal ação fazendo com que o JOB seja executado sempre para o registro selecionado no momento do agendamento.

Sempre que ao executar o processo desejado a mensagem abaixo for apresentada indica que este é um processo que não poderá ser agendado/automatizado.

![Screenshot_16.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4409305427991/Screenshot_16.png)
