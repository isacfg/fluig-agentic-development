# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Horário de Verão (2018) Para Documentos Eletrônicos

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000390068-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Hor%C3%A1rio-de-Ver%C3%A3o-2018-Para-Documentos-Eletr%C3%B4nicos](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000390068-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Hor%C3%A1rio-de-Ver%C3%A3o-2018-Para-Documentos-Eletr%C3%B4nicos)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 1 de agosto de 2022 às 17:30

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:01:00min**

**Ocorrência**

Ao executar um processo para qualquer documento eletrônico o sistema apresenta o erro:

*"A data do evento não pode ser maior que a data do processamento."*

**Ambiente**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões. - Documentos Eletrônicos (NF-e/CT-e/MDF-e/NFS-e)

**Causa** 

Fim do Horário Brasileiro de Verão

**Solução**

Com o término do horário brasileiro de verão no domingo 18 de fevereiro de 2018 às 00:00, ao enviar eventos (cancelamento, carta de correção , encerramento) é necessário ajustar o parâmetro de horário de verão para “Não”, desta forma , gentileza acessar:

Ambiente | Parâmetros | Gestão de estoque, compras e faturamento | Integrações | Fiscal | Parâmetros por filial, clica duas vezes em cima da Filial, na etapa "Ambiente CC-e".

Nesta etapa dos parâmetros existe as seguintes informações: 

**Fuso:** Se a UF da Filial utiliza o Fuso de Brasília ou um dos outros possíveis. 

**Horário de Verão**: Ao terminar o horário de verão é necessário voltar o parâmetro para "Não".

 
![Sem_t_tulo.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360000598668/Sem_t_tulo.png)
