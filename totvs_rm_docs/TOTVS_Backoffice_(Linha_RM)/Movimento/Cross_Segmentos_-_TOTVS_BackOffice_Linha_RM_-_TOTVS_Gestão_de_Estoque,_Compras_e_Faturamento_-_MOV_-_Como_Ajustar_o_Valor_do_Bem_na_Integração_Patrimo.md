# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como Ajustar o Valor do Bem na Integração Patrimonial

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024708553-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-Ajustar-o-Valor-do-Bem-na-Integra%C3%A7%C3%A3o-Patrimonial](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024708553-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-Ajustar-o-Valor-do-Bem-na-Integra%C3%A7%C3%A3o-Patrimonial)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 12 de agosto de 2022 às 17:06

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:02:00min**

**Dúvida**Como integrar Movimentos de aquisição de compras com TOTVS Gestão Patrimonial somando ao valor do bem os impostos, descontos, frete e qualquer outro valor relativo ao item de movimento pertinente à regra de negócio.

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução
**Para embutir no Valor de Aquisição do Bem valores como impostos, descontos e frete do item de movimento é necessário que a **Integração de Patrimônios** (módulo Gestão Patrimonial  > Relatórios e Integrações > Integrar Aquisições Compras) ocorra considerando a Fórmula do Valor do Patrimônio.

![Imagem](https://totvssuporte.zendesk.com/attachments/token/hjNqxbmzxulDyuTKvBXz7h6C9/?name=inline1182878222.png)
​

Desta forma, o valor considerado será o valor do bem gravado na tabela TITMMOV campo VALORBEM.
Para que este campo retorne valor correto, é necessário acessar os parâmetros do tipo de movimento, etapa Patrimônio e informar uma fórmula do valor do bem que retorne o preço unitário com os impostos, desconto, frete, etc.

![Imagem](https://totvssuporte.zendesk.com/attachments/token/9ALuC5HwBRbiteCCkx8vsAiap/?name=inline588722699.png)
​

Segue abaixo um exemplo:
KPU + (LVL(IPI)/ KQT) - (TABITM('RATEIODESC', 'V')/KQT) + (TABITM('RATEIOFRETE', 'V')/ KQT)
Onde:
KPU = Preço Unitário
KQT = Quantidade
LVL(IPI) = Valor IPI do item de movimento.
TABITM('RATEIOFRETE', 'V') = Rateio do frete do movimento rateado entre os itens de movimento.
TABITM('RATEIODESC', 'V') = Rateio do desconto do movimento rateado entre os itens de movimento.

Para habilitar o rateio é necessário acessar os parâmetros do tipo de movimento, etapa Mov - Rateio Val. Financeiros 1/2 e definir como Rateio Proporcional a opção Rateio Desconto. O mesmo vale com os demais valores, como frete e despesa.
Após a alteração será necessário regravar o movimento e se certificar que o valor do bem foi preenchido na TITMMOV.VALORBEM.

Para mais informações, acesse a documentação [Inclusão de Bens via Integração com RM Nucleus](http://tdn.totvs.com/pages/releaseview.action?pageId=4811188).
