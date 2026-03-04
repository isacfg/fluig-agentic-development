# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erro FKTTMV_TVEN1

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/34834981778071-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-FKTTMV-TVEN1](https://centraldeatendimento.totvs.com/hc/pt-br/articles/34834981778071-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-FKTTMV-TVEN1)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 10 de setembro de 2025 às 15:44

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/34834981763223)
 Tempo aproximado para leitura: **00:02:00 min**

**Ocorrência**
Ao realizar o processo de Copia de Movimento entre Coligadas, é apresentado o erro: **The INSERT statement conflicted with the FOREIGN KEY constraint "FKTTMV\_TVEN1"**

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/34834998072471)


A mensagem também pode ser alterada para os códigos: TVEN2, TVEN3 e TVEN4.


**Ambiente**
Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causa** 
Essa mensagem de erro é apresentada pois o movimento selecionado para realizar a Copia Entre Coligadas possui Funcionários preenchidos nos parâmetros do tipo de movimento, mas a coligada de destino não possui essa informação.

**Solução**
Pra que a mensagem de erro não seja apresentada durante a execução do processo, será necessário que os **Funcionários** contidos no movimento sejam **copiados entre coligadas** ou **removidos do movimento.**
 

Acesse os parâmetros do tipo de movimento > **Etapa Mov - Tab - Funcionário:**

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/34834998073495)

Nessa etapa possui os campos dos Funcionários. Portanto, para conseguir realizar a cópia do movimento, será necessário executar uma das opções abaixo:

-   Remover ou alterar o default do parâmetro;
-   Cadastrar na Coligada de destino um novo funcionário exatamente como está cadastrado nessa coligada;
-   Realizar a copia entre coligadas,
    Para isso, abra o cadastro > Processos > Copiar Funcionários entre Coligadas.

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/34834981764631)

     

Após realizar o procedimento, faça nova Copia de Movimento Entre Coligadas.

Outros campos também podem apresentar erro durante a Copia de Movimento entre Coligadas por não conter a informação na coligada de destino. Mais informações:

[**Cópia de Tipo de Movimento entre Coligadas**](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022041691-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-C%C3%B3pia-de-Tipo-de-Movimento-entre-Coligadas)
