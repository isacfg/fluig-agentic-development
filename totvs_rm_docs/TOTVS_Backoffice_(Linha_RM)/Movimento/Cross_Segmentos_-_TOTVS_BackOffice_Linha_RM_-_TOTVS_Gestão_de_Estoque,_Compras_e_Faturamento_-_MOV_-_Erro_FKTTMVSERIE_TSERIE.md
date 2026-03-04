# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erro FKTTMVSERIE_TSERIE

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/34816748200215-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-FKTTMVSERIE-TSERIE](https://centraldeatendimento.totvs.com/hc/pt-br/articles/34816748200215-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-FKTTMVSERIE-TSERIE)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 10 de setembro de 2025 às 16:07

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/34816748166167)
 Tempo aproximado para leitura: **00:02:00 min**

**Ocorrência**
Ao realizar o processo de Copia de Movimento entre Coligadas, é apresentado o erro: **The INSERT statement conflicted with the FOREIGN KEY constraint "FKTTMVSERIE\_TSERIE"**

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/34816748169751)


**Ambiente**
Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causa** 
Essa mensagem de erro é apresentada pois o movimento selecionado para realizar a Copia Entre Coligadas possui Séries preenchidas nos parâmetros do tipo de movimento, mas a coligada de destino não possui essa informação.

**Solução**
Pra que a mensagem de erro não seja apresentada durante a execução do processo, será necessário que as **Séries** contidas no movimento sejam **copiadas entre coligadas.**
 

Acesse os parâmetros do tipo de movimento > **Etapa Mov - Identificação:**

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/34816758307607)

Nessa etapa possui o campo das Séries. Portanto, para conseguir realizar a cópia do movimento, será necessário executar uma das opções abaixo:

-   Remover ou alterar o default do parâmetro;
-   Cadastrar na Coligada de destino uma nova série exatamente como está cadastrado nessa coligada;
-   Realizar a copia entre coligadas,
    Para isso acesse o menu Ambientes > Gestão de Estoque, Compras e Faturamento > Parâmetros Gerais > Numeração do Movimento. Preencha a Série no campo > Abra seu Cadastro > Processos > Copiar Séries entre Coligadas.

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/34816748172311)

     

Após realizar o procedimento, faça nova Copia de Movimento Entre Coligadas.

Outros campos também podem apresentar erro durante a Copia de Movimento entre Coligadas por não conter a informação na coligada de destino. Mais informações:

[**Cópia de Tipo de Movimento entre Coligadas**](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022041691-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-C%C3%B3pia-de-Tipo-de-Movimento-entre-Coligadas)
