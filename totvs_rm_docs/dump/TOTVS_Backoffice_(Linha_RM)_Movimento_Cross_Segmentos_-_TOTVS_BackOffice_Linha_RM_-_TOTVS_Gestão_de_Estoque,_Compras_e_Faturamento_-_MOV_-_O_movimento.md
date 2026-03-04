# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - O movimento XXX com o número sequencial Y não foi encontrado na base do Solum

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360037830173-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-O-movimento-XXX-com-o-n%C3%BAmero-sequencial-Y-n%C3%A3o-foi-encontrado-na-base-do-Solum](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360037830173-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-O-movimento-XXX-com-o-n%C3%BAmero-sequencial-Y-n%C3%A3o-foi-encontrado-na-base-do-Solum)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 22 de abril de 2025 às 12:09

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/31582836105111)**Tempo aproximado para leitura: **00:03:00min**

**Ocorrência**No módulo Gestão de Estoque, Compras e Faturamento, ao tentar **Estornar Item Não Recebido** de solicitação de compras integrada ao **TOP** é exibida a mensagem abaixo: **O movimento com o número sequencial não foi encontrado na base do Solum.**

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4416285445527)

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 12.1.

**Causa
**Esse incidente ocorre, pois o **item de movimento** não possui **Projeto/Tarefa informado**.

**Solução**Para solucionar essa ocorrência, realize os seguintes passos:

1.  Acesse **Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Tipo de movimento | Projeto;**
2.  Preencha o campo **Informar Projeto/Tarefa** com uma das opções **exceto** a opção **Não informar**;
    ![screenshot_20191023_140330.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360048922174)

3.  Acesse o movimento e para o item que deseja estornar preencha na aba **Integração | Projetos** um projeto e/ou tarefa.

**Informações Adicionais**

Caso precise de auxilio para encontrar seu tipo de movimento no parametrizador **[clique aqui](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003051691-RM-MOV-Como-descobrir-a-classifica%C3%A7%C3%A3o-e-menu-do-Tipo-de-Movimento?source=search)**.
