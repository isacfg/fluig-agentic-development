# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Código do Banco Obrigatório no Pagamento.

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4406697595799-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-C%C3%B3digo-do-Banco-Obrigat%C3%B3rio-no-Pagamento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4406697595799-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-C%C3%B3digo-do-Banco-Obrigat%C3%B3rio-no-Pagamento)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 9 de abril de 2025 às 15:44

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/31294067690007)
 Tempo aproximado para leitura: **00:01:00 min**

**Ocorrência**Ao incluir um Movimento parametrizado para utilizar **Meios de Pagamento** onde a **Forma de Pagamento** utilizado é **Cheque**, ao salvar o inclusão o Sistema apresenta a seguinte mensagem:

**Código do Banco Obrigatório no Pagamento.**


![mceclip1.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4406696402711)

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões

**Causa**
Esse incidente ocorre, pois as informações de **Código do Banco**, **Código da Agência** e **Código da C/C** não foram inseridas nos dados da **Forma de Pagamento**.

**Solução**
Para solucionar essa ocorrência, realize os seguintes passos:
1\. Na tela de **inclusão** do Movimento, acessar a opção **Integrações** >> **Financeira**;
2\. Editar a **Forma de Pagamento**;
![mceclip2.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4406691451031)


3\. Em **Dados do Cheque**, informar **Código do Banco**, **Código da Agência** e **Código da C/C**:
![mceclip3.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4406691462167)
