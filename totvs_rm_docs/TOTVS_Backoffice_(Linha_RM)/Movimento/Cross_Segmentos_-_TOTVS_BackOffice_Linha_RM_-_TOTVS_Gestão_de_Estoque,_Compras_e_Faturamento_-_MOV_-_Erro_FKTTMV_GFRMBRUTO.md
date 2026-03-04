# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erro FKTTMV_GFRMBRUTO

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/34815294207639-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-FKTTMV-GFRMBRUTO](https://centraldeatendimento.totvs.com/hc/pt-br/articles/34815294207639-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-FKTTMV-GFRMBRUTO)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 10 de setembro de 2025 às 15:53

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/34815270143383)
 Tempo aproximado para leitura: **00:02:00 min**

**Ocorrência**
Ao realizar o processo de Copia de Movimento entre Coligadas, é apresentado o erro: **The INSERT statement conflicted with the FOREIGN KEY constraint "FKTTMV\_GFRMBRUTO"**
 

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/34815294176919)



**Ambiente**
Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causa** 
Essa mensagem de erro é apresentada pois o movimento selecionado para realizar a Copia Entre Coligadas possui as Fórmulas preenchido nos parâmetros do tipo de movimento, mas a coligada de destino não possui essa informação.

**Solução**
Pra que a mensagem de erro não seja apresentada durante a execução do processo, será necessário que as **Fórmulas (Valor Bruto, Sub-Total e Valor do Documento)** contidas no movimento sejam **copiadas entre coligadas** ou **removidas do movimento.**
 

Acesse os parâmetros do tipo de movimento > **Etapa Mov - Valores Financeiros 2/4:**

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/34815270147351)

Nessa etapa possui os campos das Fórmulas. Portanto, para conseguir realizar a cópia do movimento, será necessário executar uma das opções abaixo:

-   Remover ou alterar o default do parâmetro para alguma fórmula que já exista na coligada de destino;
-   Cadastrar na Coligada de destino uma Fórmula exatamente como está nessa coligada;
-   Realizar a copia da formula entre coligadas.
    Para isso, abra o cadastro > Processos > Copia de fórmulas entre coligadas.

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/34815294194455)


     

Outros campos também podem apresentar erro durante a Copia de Movimento entre Coligadas por não conter a informação na coligada de destino. Mais informações:

[**Cópia de Tipo de Movimento entre Coligadas**](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022041691-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-C%C3%B3pia-de-Tipo-de-Movimento-entre-Coligadas)
