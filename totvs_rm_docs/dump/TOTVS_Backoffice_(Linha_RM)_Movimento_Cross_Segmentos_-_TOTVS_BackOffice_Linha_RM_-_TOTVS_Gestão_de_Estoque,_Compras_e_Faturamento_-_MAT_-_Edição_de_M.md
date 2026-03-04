# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Edição de Movimento Não Regrava Lançamento Contábil/Financeiro

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034640033-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Edi%C3%A7%C3%A3o-de-Movimento-N%C3%A3o-Regrava-Lan%C3%A7amento-Cont%C3%A1bil-Financeiro](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034640033-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Edi%C3%A7%C3%A3o-de-Movimento-N%C3%A3o-Regrava-Lan%C3%A7amento-Cont%C3%A1bil-Financeiro)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 13 de junho de 2024 às 15:05

---

 ***
![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/24162952256279)
* Tempo aproximado para leitura: 00:03:00min

Ocorrência**No módulo Gestão de Estoque, Compras e Faturamento, ao alterar determinados campos em movimento a integração Contábil/Financeira não é regravada.


**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causa
**Qualquer campo que altere o valor do movimento ou altere o informações do lançamento a ser gerado irão alterar o lançamento Contábil/Financeiro do movimento.
O intuito neste caso é de preservar o desempenho do sistema.
No entanto foi criado em paralelo uma parametrização que permite ao usuário determinar quais campos irão afetar o lançamento Contábil/Financeiro quando editados no movimento.


**Solução**Para solucionar essa ocorrência, realize os seguintes passos:

Lançamento Financeiro:
1\. Acessar o menu **Ambiente | Gestão de Estoque, Compras e Faturamento | Integração Financeira | Definições Financeiras**; 
2\. Marcar os campos que deseja que afetem o lançamento financeiro através do campo **Campos que Afetam o Movimento - Lançamentos Financeiros**;

**
![screenshot_20190820_073032.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360044123834)
**

Lançamento Contábil:
1\. Acessar o menu **Ambiente | Gestão de Estoque, Compras e Faturamento | Integração Contábil | Definições Contábeis;** 
2\. Marcar os campos que deseja que afetem o lançamento financeiro através do campo **Campos que Afetam o Movimento - Lançamentos Contábil;**

**
![screenshot_20190820_073137.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360044123874)
**
