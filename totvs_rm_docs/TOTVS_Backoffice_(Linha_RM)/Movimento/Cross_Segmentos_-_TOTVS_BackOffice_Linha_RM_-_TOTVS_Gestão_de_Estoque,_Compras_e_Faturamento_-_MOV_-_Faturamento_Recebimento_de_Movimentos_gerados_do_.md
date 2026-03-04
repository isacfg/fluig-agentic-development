# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Faturamento/Recebimento de Movimentos gerados do Módulo Construção e Projetos

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008686408-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Faturamento-Recebimento-de-Movimentos-gerados-do-M%C3%B3dulo-Constru%C3%A7%C3%A3o-e-Projetos](https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008686408-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Faturamento-Recebimento-de-Movimentos-gerados-do-M%C3%B3dulo-Constru%C3%A7%C3%A3o-e-Projetos)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 15 de agosto de 2022 às 08:24

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura: **00:03:00min**

**Ocorrência
**No momento de faturar um movimento no módulo Gestão de Estoque, Compras e Faturamento que foi originado da integração com o módulo Construção e Projetos, a mensagem abaixo pode ser apresentada impedindo que o faturamento seja concluído:

 
![Imagem](http://tdn.totvs.com/download/attachments/232824165/1.png?version=1&modificationDate=1457467093000&api=v2)

**Ambiente
**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causa** O erro somente é apresentado quando os parâmetros dos tipos de movimento (Origem e Destino) estão divergentes.

**Solução
**Os campos que o sistema consiste são:

1.  **USARETENCAOIT
    ****Etapa Itens Valores Financeiros 2/2:** Campo Utilizar Retenção:
    ![image2016-5-10 19:0:21.png](https://tdn.totvs.com/download/attachments/232824165/image2016-5-10%2019%3A0%3A21.png?version=1&modificationDate=1462914160000&api=v2)


2.  **VERPRJTRF
    Etapa Projetos:** Campo: Informa Projeto/Tarefa:
    ![image2016-5-10 19:1:2.png](https://tdn.totvs.com/download/attachments/232824165/image2016-5-10%2019%3A1%3A2.png?version=1&modificationDate=1462914202000&api=v2)



Para poder identificar de forma rápida, pode-se executar o select abaixo:

SELECT USARETENCAOIT, \* FROM TTMVEXT WHERE CODTMV = '1.1.04' OR CODTMV = '1.2.11' SELECT VERPRJTRF, \* FROM TITMTMV WHERE CODTMV = '1.1.04' OR CODTMV = '1.2.11'

**Observação:** Os tipos de movimentos são meramente ilustrativos.

Portanto, basta igualar os parâmetros para que o erro não seja apresentado novamente.
