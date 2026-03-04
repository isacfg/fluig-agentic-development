# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erro FKTTMV_FTB1

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/34817893008791-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-FKTTMV-FTB1](https://centraldeatendimento.totvs.com/hc/pt-br/articles/34817893008791-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-FKTTMV-FTB1)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 14 de novembro de 2025 às 17:10

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/34817892986391)
 Tempo aproximado para leitura: **00:02:00 min**

**Ocorrência**
Ao realizar o processo de Copia de Movimento entre Coligadas, é apresentado o erro: **The INSERT statement conflicted with the FOREIGN KEY constraint "FKTTMV\_FTB1"**

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/34817885340183)

A mensagem também pode ser alterada pelos códigos: FTB2, FTB3, FTB4, FTB5.

**Ambiente**
Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causa** 
Essa mensagem de erro é apresentada pois o movimento selecionado para realizar a Copia Entre Coligadas possui Tabelas Opcionais preenchidas nos parâmetros do tipo de movimento, mas a coligada de destino não possui essa informação.

**Solução**
Pra que a mensagem de erro não seja apresentada durante a execução do processo, será necessário que as **Tabelas Opcionais** contidas no movimento sejam **copiadas entre coligadas** ou **removidas do parâmetro.**
 

Acesse os parâmetros do tipo de movimento > **Etapa Mov - Tab - Opcional:**

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/34817892987543)

Nessa etapa possui os campos das Tabelas Opcionais. Portanto, para conseguir realizar a cópia do movimento, será necessário executar uma das opções abaixo:

-   Remover ou alterar o default do parâmetro;
-   Cadastrar na Coligada de destino uma nova tabela opcional exatamente como está cadastrado nessa coligada;
-   Realizar a copia entre coligadas,
    Para isso, abra seu Cadastro > Processos > Copiar Entre Coligadas da Tab. Op.

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/34817892988439)

     

Após realizar o procedimento, faça nova Copia de Movimento Entre Coligadas.

**Observação**

-   Se a mensagem de erro apresentar o código **FKTITMTMV\_FTB**, indica que a tabela opcional está preenchida no **ITEM.** 
    Etapa Item - Tab - Opcional.

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/34818071020311)


Outros campos também podem apresentar erro durante a Copia de Movimento entre Coligadas por não conter a informação na coligada de destino. Mais informações:

[**Cópia de Tipo de Movimento entre Coligadas**](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022041691-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-C%C3%B3pia-de-Tipo-de-Movimento-entre-Coligadas)
