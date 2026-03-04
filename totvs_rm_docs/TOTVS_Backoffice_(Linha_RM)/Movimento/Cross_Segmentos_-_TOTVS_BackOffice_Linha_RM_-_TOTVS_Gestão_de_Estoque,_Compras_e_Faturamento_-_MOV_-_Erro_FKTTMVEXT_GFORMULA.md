# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erro FKTTMVEXT_GFORMULA

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/23998519253655-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-FKTTMVEXT-GFORMULA](https://centraldeatendimento.totvs.com/hc/pt-br/articles/23998519253655-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-FKTTMVEXT-GFORMULA)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 10 de setembro de 2025 às 16:26

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/23998542036759)
 Tempo aproximado para leitura: **00:03:00 min

****Ocorrência**Ao realizar o processo de Copia de Movimento entre Coligadas, é apresentado o erro:  **The INSERT statement conflicted with the FOREIGN KEY constraint FKTTMVEXT\_GFORMULA {...}

**

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/23998542037399)

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causa
**Essa mensagem de erro é apresentada pois o movimento selecionado para realizar a copia entre coligadas possui campos preenchidos com fórmulas, e estas não possuem registro na coligada de destino selecionada no processo.

**Solução**Pra que a mensagem de erro não seja apresentada durante a execução do processo, será necessário que as Fórmulas contidas no movimento sejam **copiadas entre coligadas** ou que sejam **removidas do movimento**.

Para realizar o processo entre coligadas clique na fórmula contida nos parâmetros do movimento > Processos > Copia de Fórmulas entre Coligadas. 

Outro caminho é no módulo Serviços Globais > menu Administração > Fórmulas > Sistema: Gestão de Estoque, Compras e Faturamento > Selecione a Fórmula > Processos > Copia de Fórmulas entre Coligadas. 

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/23998542038679)

**ETAPAS NO MOVIMENTO QUE PODEM CONTER FÓRMULAS:**

1.  Etapa **Mov - Outros Dados:**

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/23998542039447)



2.  Etapa **Mov - Valores Financeiros 2/4:**

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/23998542040855)



3.  Etapa **Mov - Campos Livres 2/2:**

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/23998542041495)



4.  Etapa **Item - Identificação 1/2:**

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/23998542043415)



5.  Etapa **Item - Valores Financeiros 1/2:**

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/23998542047255)



6.  Etapa Item - **Campos Livres 2/2:**

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/23998542050839)



7.  Etapa **Estoque - Estoque 2/3:**
    Para que esse campo de fórmula seja apresentado, o campo Efeito Sobre o Saldo Atual precisa estar parametrizado = Aumenta.

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/23998519217559)



8.  Etapa **Estoque - Custo:**

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/23998519222935)



9.  Etapa **Estoque - Estoque 2/3:

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/34847813722391)**
10.  Etapa **Orçamento:**
     Para esse campo ficar habilitado, é necessário que a flag Controla Orçamento esteja habilitada.

     ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/23998519225239)



11.  Etapa **Rateio C.Custo - Departamento:**

     ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/23998519227927)



12.  Etapa **Fin - Faturamento 3/6:**
     Para que esses campos fiquem habilitados, é necessário que esteja habilitada a flag "Fatura o Movimento" na etapa Fin - Faturamento 1/6

     ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/23998519230999)



13.  Etapa **Manutenção:
     **
     ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/23998519237399)



14.  Etapa **Patrimônio:
     **
     ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/23998519239319)


Outros campos também podem apresentar erro durante a Copia de Movimento entre Coligadas por não conter a informação na coligada de destino. Mais informações:

**[Cópia de Tipo de Movimento entre Coligadas](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022041691-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-C%C3%B3pia-de-Tipo-de-Movimento-entre-Coligadas)**
