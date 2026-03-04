# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erro Relatório do Movimento Inexistente na Coligada de Destino

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/34837431816087-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-Relat%C3%B3rio-do-Movimento-Inexistente-na-Coligada-de-Destino](https://centraldeatendimento.totvs.com/hc/pt-br/articles/34837431816087-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-Relat%C3%B3rio-do-Movimento-Inexistente-na-Coligada-de-Destino)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 10 de setembro de 2025 às 15:41

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/34837431787799)
 Tempo aproximado para leitura: **00:02:00 min**

**Ocorrência**
Ao realizar o processo de Copia de Movimento entre Coligadas, é apresentado o erro: **Relatório do Movimento inexistente na Coligada**
 

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/34837431788823)



**Ambiente**
Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causa** 
Essa mensagem de erro é apresentada pois o movimento selecionado para realizar a Copia Entre Coligadas possui Relatórios preenchidos nos parâmetros do tipo de movimento, mas a coligada de destino não possui essa informação.

**Solução**
Pra que a mensagem de erro não seja apresentada durante a execução do processo, será necessário que os **Relatórios** contidos no movimento sejam **copiados entre coligadas** ou **removidos do movimento.**
 

Etapas que podem conter relatório:

**Etapa Mov - Impressão 1/2:**

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/34837447286039)


**Etapa Fis - Nf-e**

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/34837431791255)

Nessas etapas possuem campos de Relatório. Portanto, para conseguir realizar a cópia do movimento, será necessário executar uma das opções abaixo:

-   Remover ou alterar o default do parâmetro para um relatório que já exista na coligada de destino;
-   Exportar e Importar na coligada de destino o relatório utilizado;


Após realizar o procedimento, faça nova Copia de Movimento Entre Coligadas.

Outros campos também podem apresentar erro durante a Copia de Movimento entre Coligadas por não conter a informação na coligada de destino. Mais informações:

[**Cópia de Tipo de Movimento entre Coligadas**](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022041691-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-C%C3%B3pia-de-Tipo-de-Movimento-entre-Coligadas)
