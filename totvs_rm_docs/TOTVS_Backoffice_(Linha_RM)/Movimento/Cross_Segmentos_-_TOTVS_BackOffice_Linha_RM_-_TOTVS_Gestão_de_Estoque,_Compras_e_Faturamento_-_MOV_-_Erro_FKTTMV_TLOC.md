# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erro FKTTMV_TLOC

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/34818538177175-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-FKTTMV-TLOC](https://centraldeatendimento.totvs.com/hc/pt-br/articles/34818538177175-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-FKTTMV-TLOC)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 10 de setembro de 2025 às 16:09

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/34818510555415)
 Tempo aproximado para leitura: **00:02:00 min**


**Ocorrência**
Ao realizar o processo de Copia de Movimento entre Coligadas, é apresentado o erro: **The INSERT statement conflicted with the FOREIGN KEY constraint "FKTTMV\_TLOC"**

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/34818510557335)


**Ambiente**
Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causa** 
Essa mensagem de erro é apresentada pois o movimento selecionado para realizar a Copia Entre Coligadas possui Local de Estoque preenchido nos parâmetros do tipo de movimento, mas a coligada de destino não possui essa informação.

**Solução**
Pra que a mensagem de erro não seja apresentada durante a execução do processo, será necessário que o **Local de Estoque** contido no movimento sejam **removido dos parâmetros** ou **incluído registro idêntico na coligada de destino.**
 

Acesse os parâmetros do tipo de movimento > **Etapa Mov - Emitente/Destinatário 1/2:**

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/34818538132631)

Nessa etapa possui o campo do Local de Estoque. Portanto, para conseguir realizar a cópia do movimento, será necessário executar uma das opções abaixo:

-   Remover ou alterar o default do parâmetro;
-   Cadastrar na Coligada de destino um novo Local de Estoque exatamente como está cadastrado nessa coligada;
     

Após realizar o procedimento, faça nova Copia de Movimento Entre Coligadas.

Outros campos também podem apresentar erro durante a Copia de Movimento entre Coligadas por não conter a informação na coligada de destino. Mais informações:

[**Cópia de Tipo de Movimento entre Coligadas**](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022041691-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-C%C3%B3pia-de-Tipo-de-Movimento-entre-Coligadas)
