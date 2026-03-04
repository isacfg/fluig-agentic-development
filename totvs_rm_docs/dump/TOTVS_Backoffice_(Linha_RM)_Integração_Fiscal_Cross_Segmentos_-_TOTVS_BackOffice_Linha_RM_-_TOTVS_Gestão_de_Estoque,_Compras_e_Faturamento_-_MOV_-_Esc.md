# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Escrituração: Data de Entrada/Saída não poderá ser anterior à data do Sistema

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003900751-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Escritura%C3%A7%C3%A3o-Data-de-Entrada-Sa%C3%ADda-n%C3%A3o-poder%C3%A1-ser-anterior-%C3%A0-data-do-Sistema](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003900751-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Escritura%C3%A7%C3%A3o-Data-de-Entrada-Sa%C3%ADda-n%C3%A3o-poder%C3%A1-ser-anterior-%C3%A0-data-do-Sistema)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Fiscal
> **Data:** 20 de fevereiro de 2025 às 16:32

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/30124643724439)
 Tempo aproximado para leitura: 00:01:00 min
Ocorrência**Ao realizar o processo de **Escrituração** é apresentada a mensagem:
***"Erro na Inclusão do Registro:*** 
***Documento* *- Série - Data*** 
***Data de Entrada/Saída não poderá ser anterior à data do Sistema."**

***Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – A partir da versão 12

**Causa
**A mensagem é apresentado porque no módulo **Fiscal** está configurado para consistir a data de **Entrada/saída.**

**Solução
**Para poder escriturar corretamente, deverá:

-   Acessar o Módulo **Gestão Fiscal | Menu Ambiente | Parâmetros | TOTVS Gestão Fiscal | Escrituração** | Avança;
-   Na etapa "**Dados Gerais**" deve ser desmarcado a flag "**Consiste Data de Entrada/Saída**"

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360004785252)
