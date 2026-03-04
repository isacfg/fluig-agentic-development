# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Condição de Pagamento x Prazo

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024345772-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Condi%C3%A7%C3%A3o-de-Pagamento-x-Prazo](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024345772-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Condi%C3%A7%C3%A3o-de-Pagamento-x-Prazo)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
> **Data:** 20 de fevereiro de 2025 às 16:51

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/24007903620375)
 Tempo aproximado para leitura: **00:02:00min**

**Dúvida**Qual a diferença entre o campo **Condição do Pagamento a Prazo** na aba Cabeçalho do Item de Contrato e o campo **Código da Condição de Pagamento** aba Condições Gerais do Item de Contrato?

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Explicação**

O campo **Condição do Pagamento a Prazo** na aba Cabeçalho do Item tem por funcionalidade definir a **periodicidade com que os vencimentos de contrato serão gerados**.

**OBS:** Esse campo só será habilitado apenas quando o Tipo de Faturamento do Item for **Periódico.**

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/24415530489879)

1.  Nesse campo só serão apresentadas as Condições de Pagamento onde o Prazo seja múltiplo de 30 e que o Número de Vezes seja igual a 1, pois essa Condição de Pagamento é usada para definir o **Inicio e o Fim** do Período do Contrato.

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/24009221463959)



2.  Se no menu Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > Contratos > Definições Fat. de Contrato 2/3 estiver habilitado a flag **Vencimento em dias fixos**, somente condições de faturamento múltiplas de 30 dias poderão ser visualizadas nesse campo. Se esta opção estiver desmarcada, serão visualizadas, além das condições de pagamentos múltiplas de 30, as demais condições, desde que tenham as seguintes características: % do valor total igual a 100, número de vezes igual a 1, prazo para a parcela diferente de 0 (zero) e intervalo igual a 0 (zero).

Já o campo **Código da Condição de Pagamento** aba Condições Gerais do Item tem por funcionalidade preencher o campo **Condição de Pagamento** dentro do **Movimento** que será gerado pelo faturamento do Contrato a fim de gerar o Lançamento Financeiro destes movimentos (caso esteja parametrizado).

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/24415530509591)

Após o movimento ser faturado, a informação vai para a aba Integrações > Financeiro:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/24415898034711)
