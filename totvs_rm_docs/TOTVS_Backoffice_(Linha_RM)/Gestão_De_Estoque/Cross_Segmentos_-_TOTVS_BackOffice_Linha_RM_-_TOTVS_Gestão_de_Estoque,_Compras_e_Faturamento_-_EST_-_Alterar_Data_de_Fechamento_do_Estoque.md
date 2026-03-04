# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - EST - Alterar Data de Fechamento do Estoque

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000345107-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Alterar-Data-de-Fechamento-do-Estoque](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000345107-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Alterar-Data-de-Fechamento-do-Estoque)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
> **Data:** 9 de abril de 2025 às 15:38

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/24425355602455)**Tempo aproximado para leitura: **00:03:00min**

**Ocorrência
**Ao alterar a Data de Fechamento de Estoque o sistema apresenta a mensagem:

**Antes de alterar a data de fechamento do estoque, é necessário regerar saldos e custos dos produtos movimentados desde a última regeração.**

![Imagem](http://tdn.totvs.com/download/attachments/237393863/teste.jpg?version=1&modificationDate=1464195048000&api=v2)

Porém mesmo após regerar saldos e custos o sistema impede que a data seja alterada e a mensagem continua informando que é necessário regerar. 

**Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causa
**O motivo pelo qual a mensagem continua sendo apresentada é porque alguns produtos ainda continuam sem ser regerados.

**Solução
**Para verificar quais foram os produtos que ainda não foram regerados, poderá utilizar as consultas disponibilizadas abaixo:

**SQL**

*SELECT DISTINCT CODIGOPRD FROM TPRD(NOLOCK) WHERE **CODCOLIGADA= X***
*AND (0=1 OR RECALCSALDO1=1 OR RECALCSALDO2=1 OR RECALCSALDO3=1 OR RECALCSALDO4=1*
*OR RECALCSALDO5=1 OR RECALCSALDO6=1 OR RECALCSALDO7=1*
*OR RECALCSALDO8=1 OR RECALCSALDO9=1 OR RECALCSALDO10=1)* 

**ORACLE**

*SELECT DISTINCT CODIGOPRD FROM TPRD WHERE **CODCOLIGADA= X***
*AND (0=1 OR RECALCSALDO1=1 OR RECALCSALDO2=1 OR RECALCSALDO3=1 OR RECALCSALDO4=1*
*OR RECALCSALDO5=1 OR RECALCSALDO6=1 OR RECALCSALDO7=1*
*OR RECALCSALDO8=1 OR RECALCSALDO9=1 OR RECALCSALDO10=1)* **Observação
**Lembre-se de trocar o código da coligada da consulta que está destacado acima.

Outras informações válidas para verificação:

1.  Durante o processo de regeração algum erro foi apresentado e assim o produto não foi regerado. Verificar o Log e acertar as mensagens apresentadas para que o produto seja regerado;
2.  O produto não é de último nível. Mesmo que o cliente não controle níveis de máscara a opção deverá estar marcada;
3.  O produto é do tipo Serviço e não consiste Saldo de Serviço. O parâmetro **Consistir Saldo de Serviços** deverá ser habilitado em **Ambiente | Parâmetros | Gestão de Estoque | Definições de Estoque | Etapa Gestão de Estoque**;
4.  O produto está inativo. 
5.  Identificar quais produtos não estão sendo regerados e realizar o procedimento de regeração um a um.
