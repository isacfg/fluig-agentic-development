# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erro FKTTMV_TTMVPED

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/34835945425815-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-FKTTMV-TTMVPED](https://centraldeatendimento.totvs.com/hc/pt-br/articles/34835945425815-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-FKTTMV-TTMVPED)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 10 de setembro de 2025 às 16:16

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/34835899237143)
 Tempo aproximado para leitura: **00:02:00 min**

**Ocorrência**
Ao realizar o processo de Copia de Movimento entre Coligadas, é apresentado o erro: **The INSERT statement conflicted with the FOREIGN KEY constraint "FKTTMV\_TTMVPED"**

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/34835945405975)


**Ambiente**
Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causa** 
Essa mensagem de erro é apresentada pois o movimento selecionado para realizar a Copia Entre Coligadas possui Movimento Gerado (Default) preenchido nos parâmetros do tipo de movimento, mas a coligada de destino não possui essa informação.

**Solução**
Pra que a mensagem de erro não seja apresentada durante a execução do processo, será necessário que o **Movimento Gerado Default** no movimento também seja **copiado entre coligadas.**
 

Acesse os parâmetros do tipo de movimento > **Etapa Compra/Venda - Característica:**

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/34835899240727)

Nessa etapa possui o campo do Movimento Gerado. Portanto, para conseguir realizar a cópia do movimento, será necessário executar uma das opções abaixo:

-   Alterar o default do parâmetro para um movimento que já exista na coligada de destino;
-   Desmarcar a flag "Gera Movimento de Compra";
-   Cadastrar na Coligada de destino um novo movimento exatamente como está cadastrado nessa coligada;
-   Realizar primeiro a copia desse movimento preenchido default entre coligadas.

     

Após realizar o procedimento, faça nova Copia de Movimento Entre Coligadas.

Outros campos também podem apresentar erro durante a Copia de Movimento entre Coligadas por não conter a informação na coligada de destino. Mais informações:

[**Cópia de Tipo de Movimento entre Coligadas**](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022041691-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-C%C3%B3pia-de-Tipo-de-Movimento-entre-Coligadas)
