# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erro FKTTMVFATURAMENTO_TTMVFAT

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/34836421831831-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-FKTTMVFATURAMENTO-TTMVFAT](https://centraldeatendimento.totvs.com/hc/pt-br/articles/34836421831831-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-FKTTMVFATURAMENTO-TTMVFAT)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 10 de setembro de 2025 às 16:17

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/34836392028951)
 Tempo aproximado para leitura: **00:02:00 min**

**Ocorrência**
Ao realizar o processo de Copia de Movimento entre Coligadas, é apresentado o erro: **The INSERT statement conflicted with the FOREIGN KEY constraint "FKTTMVFATURAMENTO\_TTMVFAT"**
 

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/34836421816471)


**Ambiente**
Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causa** 
Essa mensagem de erro é apresentada pois o movimento selecionado para realizar a Copia Entre Coligadas possui movimentos selecionados para faturamento com seleção específica preenchidos nos parâmetros do tipo de movimento, mas a coligada de destino não possui essa informação.

**Solução**
Pra que a mensagem de erro não seja apresentada durante a execução do processo, será necessário que os **Movimentos de Seleção Específica** contidos no movimento sejam também **copiados entre coligadas** ou **removidos do movimento.**
 

Acesse os parâmetros do tipo de movimento > **Etapa Compra/Venda - Características:**

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/34836421817111)

Nessa etapa possui o campo Selecionados. Portanto, para conseguir realizar a cópia do movimento, será necessário executar uma das opções abaixo:

-   Remover ou alterar o movimento para um que já exista na coligada de destino;
-   Cadastrar na Coligada de destino um novo movimento exatamente como está cadastrado nessa coligada;
-   Realizar primeiro a copia desse movimento de seleção específica entre coligadas.

     

Após realizar o procedimento, faça nova Copia de Movimento Entre Coligadas.

Outros campos também podem apresentar erro durante a Copia de Movimento entre Coligadas por não conter a informação na coligada de destino. Mais informações:

[**Cópia de Tipo de Movimento entre Coligadas**](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022041691-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-C%C3%B3pia-de-Tipo-de-Movimento-entre-Coligadas)
