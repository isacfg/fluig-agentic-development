# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erro FKTTMV_FCXA

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/34811946939671-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-FKTTMV-FCXA](https://centraldeatendimento.totvs.com/hc/pt-br/articles/34811946939671-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-FKTTMV-FCXA)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 10 de setembro de 2025 às 15:43

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/34811946914583)
 Tempo aproximado para leitura: **00:02:00 min**

**Ocorrência**
Ao realizar o processo de Copia de Movimento entre Coligadas, é apresentado o erro: **The INSERT statement conflicted with the FOREIGN KEY constraint "FKTTMV\_FCXA"**

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/34811946916375)


**Ambiente**
Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causa** 
Essa mensagem de erro é apresentada pois o movimento selecionado para realizar a Copia Entre Coligadas possui Conta Caixa Default preenchido nos parâmetros do tipo de movimento, mas a coligada de destino não possui essa informação.

**Solução**
Pra que a mensagem de erro não seja apresentada durante a execução do processo, será necessário que a **Conta Caixa** contida no movimento seja **global** ou que seja **removida do movimento**.

Acesse os parâmetros do tipo de movimento > **Etapa Fin - Faturamento 2/6**.

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/34811960378519)


Nessa etapa possui o campo Conta Caixa Default. Portanto, para conseguir realizar a cópia do movimento, será necessário executar uma das opções abaixo:

-   Remover o default do parâmetro;
-   Cadastrar na Coligada de destino uma Conta Caixa exatamente como está cadastrado nessa coligada;

Outros campos também podem apresentar erro durante a Copia de Movimento entre Coligadas por não conter a informação na coligada de destino. Mais informações:

[**Cópia de Tipo de Movimento entre Coligadas**](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022041691-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-C%C3%B3pia-de-Tipo-de-Movimento-entre-Coligadas)
