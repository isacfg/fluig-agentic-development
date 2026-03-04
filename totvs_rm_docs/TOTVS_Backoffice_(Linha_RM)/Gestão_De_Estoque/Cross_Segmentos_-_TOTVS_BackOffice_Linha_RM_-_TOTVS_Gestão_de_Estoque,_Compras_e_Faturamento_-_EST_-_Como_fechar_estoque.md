# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - EST - Como fechar estoque?

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/6659756946711-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Como-fechar-estoque](https://centraldeatendimento.totvs.com/hc/pt-br/articles/6659756946711-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Como-fechar-estoque)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
> **Data:** 9 de abril de 2025 às 15:49

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: **00:03:00 min
****
Dúvida**
Quais cuidados devo ter ao fechar estoque de uma coligada?

**Ambiente**
Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões

**Solução**
Recomenda-se que seja executado o fechamento de estoque anualmente, mas o que vai determinar tal periodicidade será a regra de negócio de cada empresa.

Entende-se que esta ação tem grande importancia e impacta toda a coligada envolvida, sendo assim segue abaixo algumas práticas que consideramos ser saudáveis no momento de tal fechamento.

1.  **Restringir** a um grupo pequeno de usuários o acesso aos parâmetros da coligada.
2.  **Evitar** alterações nas etapas de estoque dos tipos de movimento mesmo os que não afetam estoque;
3.  **Retirar periodicamente o relatório de Ficha Física Financeira** dos produtos e acompanhar os saldos físicos e financeiros, para identificar e corrigir possíveis saldos incorretos com antecedência.
4.  **Evitar** alterações no cadastro de produto quanto ao tipo de cálculo para seu custo e tipo de controle (Lote ou Número de Série).

Tomando essas precauções acima citadas os próximos passos serão:

1.  **Regerar saldos e custos** de todos os produtos
    Vale ressaltar que esta ação irá regravar **todos** os produtos e seu respectivo estoque baseado na **atual parametrização dos tipos de movimento e configuração atual do cadastro do produto**, portanto recomenda-se que antes de qualquer alteração de parametrização em tipos de movimento quanto ao efeito no estoque do produto seja avaliado e o estoque seja fechado antes de tal alteração. Assim  a nova parametrização afetará somente os movimentos incluídos posteriormente evitando inconsistências futuras no estoque que já se encontra correto.
2.  Alterar a data de fechamento para o dia atual/dia do fechamento do estoque (**Ambiente - Parâmetros - Gestão de Estoque, Compras e Faturamento - Definições de Estoque - Data de Fechamento**)
