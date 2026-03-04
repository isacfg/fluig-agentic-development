# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Fórmula Visual: Contexto de assinante para inclusão de movimento

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022692711-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-F%C3%B3rmula-Visual-Contexto-de-assinante-para-inclus%C3%A3o-de-movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022692711-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-F%C3%B3rmula-Visual-Contexto-de-assinante-para-inclus%C3%A3o-de-movimento)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Objetos Gerenciais
> **Data:** 9 de abril de 2025 às 16:09

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura: **00:01:00min**

**Dúvida**Como funciona o contexto de assinante para inclusão de movimento?

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução**Diferentemente das fórmulas visuais utilizadas em processos ou dataservers, para que o movimento dispare uma fórmula visual, quando a origem deste movimento é outro módulo precisamos utilizar o contexto de assinante, somente neste caso haverá o disparo. Para isto será preciso:

**1\. Utilizar atividades específicas:**
\- [Consulta valor no contexto do Movimento(Assinante)](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022504952-RM-MOV-F%C3%B3rmula-Visual-Atividade-Consulta-valor-no-contexto-do-Movimento-Assinante-)
\- [Atribuir valor no contexto do Assinante/Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022692691-RM-MOV-F%C3%B3rmula-Visual-Atividade-Atribuir-valor-no-contexto-do-Assinante-Movimento-)
Somente estas atividades tem condições de consultar ou altear o conteúdo de algum campo deste contexto. Importante deixar claro que existe uma limitação quanto as tabelas disponíveis para consulta/edição:
\- TMOV
\- TMOVFISCAL
\- TITMMOV

**2\. Utilizar o gatilho de assinante, de acordo com o cenário de aplicação da sua regra**

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360019988312/mceclip0.png)

As demais configurações da fórmula seguirão como de costume, e as atividades ".Net" deverão ser utilizadas para auxiliá-lo na configuração de sua regra.
