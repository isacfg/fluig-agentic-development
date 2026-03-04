# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erro FKTTMV_FTDODUP

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/34819336721815-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-FKTTMV-FTDODUP](https://centraldeatendimento.totvs.com/hc/pt-br/articles/34819336721815-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-FKTTMV-FTDODUP)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 10 de setembro de 2025 às 16:10

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/34819336698775)
 Tempo aproximado para leitura: **00:02:00 min**

**Ocorrência**
Ao realizar o processo de Copia de Movimento entre Coligadas, é apresentado o erro: **The INSERT statement conflicted with the FOREIGN KEY constraint "FKTTMV\_FTDODUP"**

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/34819336703127)


**Ambiente**
Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causa** 
Essa mensagem de erro é apresentada pois o movimento selecionado para realizar a Copia Entre Coligadas possui Tipo de Documento preenchido nos parâmetros do tipo de movimento, mas a coligada de destino não possui essa informação.

**Solução**
Pra que a mensagem de erro não seja apresentada durante a execução do processo, será necessário que o **Tipo de Documento** contido no movimento seja **copiado entre coligadas** ou **removido dos parâmtros.**


Acesse os parâmetros do tipo de movimento > **Etapa Fin - Faturamento 1/6:**

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/34819336703767)

Nessa etapa possui o campo do Tipo de Documento Duplicata Default. Portanto, para conseguir realizar a cópia do movimento, será necessário executar uma das opções abaixo:

-   Remover ou alterar o default do parâmetro;
-   Cadastrar na Coligada de destino um novo tipo de documento exatamente como está cadastrado nessa coligada;
-   Realizar a copia entre coligadas,
    Para isso, abra seu Cadastro > Processos > Copiar Entre Coligadas do Tipo de Documento.

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/34819336705431)

     

Após realizar o procedimento, faça nova Copia de Movimento Entre Coligadas.

Outros campos também podem apresentar erro durante a Copia de Movimento entre Coligadas por não conter a informação na coligada de destino. Mais informações:

[**Cópia de Tipo de Movimento entre Coligadas**](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022041691-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-C%C3%B3pia-de-Tipo-de-Movimento-entre-Coligadas)
