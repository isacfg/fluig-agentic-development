# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Valor inválido para o campo Natureza

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/13359803667863-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Valor-inv%C3%A1lido-para-o-campo-Natureza](https://centraldeatendimento.totvs.com/hc/pt-br/articles/13359803667863-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Valor-inv%C3%A1lido-para-o-campo-Natureza)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 1 de dezembro de 2025 às 17:26

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/30125071828887)
 Tempo aproximado para leitura: **00:03:00min**

**Ocorrência**
Durante a inclusão de um Movimento é apresentada a mensagem: **Valor inválido para o campo Natureza.**

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/13359551665559)

**Ambiente**
Cross Segmentos - TOTVS Backoffice (Linha RM) – TOTVS Gestão de Estoque, Compras e Faturamento – Todas as versões.

**Causas**
As situações mais prováveis para que este incidente ocorra são as seguintes:

1.  **Natureza** **não preenchida** no **movimento** e/ou **item**;
2.  **Natureza interestadual** em **movimentação interna** e vice-versa;
3.  **Natureza** **do exterior** em **movimentação nacional** e vice-versa;
4.  **Natureza** não contemplada pela **regra de seleção** de natureza.
5.  **Natureza** do **movimento** diferente da natureza do(s) **item(ns)**;
6.  **Exercício Fiscal** não selecionado no contexto da Coligada;
7.  **Ausência do endereço** no **cadastro do Cliente/Fornecedor.**

**Solução**

Para solucionar essa ocorrência, realize os seguintes passos:

1\. Verifique se a natureza foi preenchida no movimento e/ou no item;

No **Movimento** | Integrações | Fiscal:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/36703037903255)

No **Item de Movimento** | Integrações | Fiscal:


![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/36703017155735)


2\. Verifique se a operação é interna e a natureza selecionada é interestadual e vice-versa;

3\. Verifique se a o**peração é nacional** e a **natureza** selecionada é **iniciada** por **3** ou **7**, ou **operação para cli/for do exterior** com **natureza iniciada** por **1, 2, 5** ou **6**;

4\. Verifique se o **Tipo de Seleção de Natureza** está configurado como **Completa** ou **Avançada**;

Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Integrações | Fiscal | Apuração de Tributos | Regras Apur. ICMS | Lançamento Fiscal 5/7 | Campo Tipo de Seleção de Natureza:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/36703037917207)


Caso esteja com alguma configuração diferente de **Não Seleciona**, o sistema irá verificar as regras de tributação associadas à **CFOP**:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/36703017166871)


Vale ressaltar que para cada **Tipo de Seleção de Natureza**, o sistema adotará um **critério específico para filtro da CFOP.**

5\. Verifique se CFOP do movimento está diferente da CFOP do item de movimento;

6\. Verifique se o **Exercício Fiscal** está **selecionado no contexto da Coligada**:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/36703037923479)

7\. Verifique se está preenchido o endereço no **cadastro do Cliente/Fornecedor** selecionado no **Movimento**:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/36703017171735)


**Importante**
Para mais informações sobre **CFOP**, [clique aqui.](https://tdn.totvs.com/pages/releaseview.action?pageId=422545982)
