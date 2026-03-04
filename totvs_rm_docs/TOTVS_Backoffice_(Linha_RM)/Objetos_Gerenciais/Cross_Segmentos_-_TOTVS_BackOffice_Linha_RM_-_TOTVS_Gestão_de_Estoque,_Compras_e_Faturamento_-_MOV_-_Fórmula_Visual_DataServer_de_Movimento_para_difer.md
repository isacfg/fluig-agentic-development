# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Fórmula Visual: DataServer de Movimento para diferentes formas de inclusão

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360026525651-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-F%C3%B3rmula-Visual-DataServer-de-Movimento-para-diferentes-formas-de-inclus%C3%A3o](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360026525651-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-F%C3%B3rmula-Visual-DataServer-de-Movimento-para-diferentes-formas-de-inclus%C3%A3o)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Objetos Gerenciais
> **Data:** 9 de abril de 2025 às 16:10

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:01:00min**

**Dúvida**Quais são os Dataserver de Movimento que devem ser utilizados para disparar fórmula visual?

**Ambiente**
Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução**Como existem diferentes formas de incluir movimentos no sistema, cada uma destas formas estão associadas a um Dataserver Abaixo seguem seus nomes e a forma de inclusão que os farão ser disparados:

\- **MovMovimentoData** : Inclusão manual pelo ícone "Novo/Incluir" da tela de movimentos
\- **MovFaturamentoData** : Inclusão via processo "Faturar/Receber"
\- **MovMovCopiaAPartirOutroMovimentoData** : Inclusão  a partir do processo "Cópia de Movimento a Partir de Outro Movimento"
\- **MovMovCopiaReferenciaData** : Inclusão a partir do Processo "Assistente de Cópia por referência"
