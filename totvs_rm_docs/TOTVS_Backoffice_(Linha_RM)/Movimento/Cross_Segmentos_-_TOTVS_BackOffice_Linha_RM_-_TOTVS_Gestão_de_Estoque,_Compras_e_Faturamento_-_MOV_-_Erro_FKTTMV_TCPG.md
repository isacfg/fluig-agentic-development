# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erro FKTTMV_TCPG

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/34815838851607-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-FKTTMV-TCPG](https://centraldeatendimento.totvs.com/hc/pt-br/articles/34815838851607-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-FKTTMV-TCPG)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 10 de setembro de 2025 às 16:02

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/34815838798615)
 Tempo aproximado para leitura: **00:02:00 min**

**Ocorrência**
Ao realizar o processo de Copia de Movimento entre Coligadas, é apresentado o erro: **The INSERT statement conflicted with the FOREIGN KEY constraint "FKTTMV\_TCPG".**

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/34815832128023)


**Ambiente**
Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causa** 
Essa mensagem de erro é apresentada pois o movimento selecionado para realizar a Copia Entre Coligadas possui uma Condição de Pagamento preenchida nos parâmetros do tipo de movimento, mas a coligada de destino não possui essa informação.

**Solução**
Pra que a mensagem de erro não seja apresentada durante a execução do processo, será necessário que as **Condição de Pagamento** contida no movimento seja **copiada entre coligadas** ou **removida do movimento.**
 

Acesse os parâmetros do tipo de movimento > **Etapa Fin - Condições de Pagamento:**

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/34815838801303)

Nessa etapa possui o campo da Condição de Pagamento. Portanto, para conseguir realizar a cópia do movimento, será necessário executar uma das opções abaixo:

-   Remover ou alterar o default do parâmetro;
-   Cadastrar na Coligada de destino uma Condição de Pagamento exatamente como está cadastrado nessa coligada;
-   Realizar a copia entre coligadas.
    Para isso, abra o cadastro da Condição de Pagamento > Processos > Copiar Condição de Pagamento entre Coligadas.

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/34815832137111)


     

Após realizar o procedimento, faça nova Copia de Movimento Entre Coligadas.

Outros campos também podem apresentar erro durante a Copia de Movimento entre Coligadas por não conter a informação na coligada de destino. Mais informações:

[**Cópia de Tipo de Movimento entre Coligadas**](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022041691-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-C%C3%B3pia-de-Tipo-de-Movimento-entre-Coligadas)
