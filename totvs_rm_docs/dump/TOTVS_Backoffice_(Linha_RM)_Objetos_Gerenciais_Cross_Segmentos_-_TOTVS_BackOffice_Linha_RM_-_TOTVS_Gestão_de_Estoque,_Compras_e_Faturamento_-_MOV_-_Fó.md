# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Fórmula Visual: Percorrer os itens de movimento utilizando as atividades no contexto de assinante

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022692671-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-F%C3%B3rmula-Visual-Percorrer-os-itens-de-movimento-utilizando-as-atividades-no-contexto-de-assinante](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022692671-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-F%C3%B3rmula-Visual-Percorrer-os-itens-de-movimento-utilizando-as-atividades-no-contexto-de-assinante)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Objetos Gerenciais
> **Data:** 9 de abril de 2025 às 16:05

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura: **00:02:00min**

**Dúvida**Como percorrer os itens de movimento utilizando as atividades no contexto de assinante?

**Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução
**Para informar dinamicamente a propriedade "Posicao" nas Atividades **Atribuir Valor no Contexto do Assinante / Movimento** e **Consulta valor no contexto do Movimento(Assinante)** é necessário utilizar a seguinte configuração:

**1\. Duas atividades de expressão**
Uma para o valor atual e outro para armazenar a quantidade de itens existente no movimento.
O vínculo será feito através da propriedade “Valor Calculado”, indicando a propriedade "Posicao" de uma das atividades específicas do contexto de assinante(Atribui valor... / Consulta valor...)

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360019843871/mceclip1.png)

**2\. Atividade de Código fonte (Executar Código)**
Preenche uma expressão com a quantidade de itens no movimento

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360019846211/mceclip2.png)

Expressao\_QuantidadeItensMov.Value = ((RM.Mov.Movimento.Manutencao.MovMovCxt)**this**.SubscriberService.SubscriberContext.Context).Rel\_ItemMovimento.Count.**ToString**();

**
3\. Atividade Enquanto (While)**
Utiliza o dado da expressão para criar o laço de repetições dos itens

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360019848971/mceclip3.png)

RM.Lib.RMSConvert.ToInt32(this.Expressao\_PosicaoAtual.Value) < RM.Lib.RMSConvert.ToInt32(this.Expressao\_QuantidadeItensMov.Value)

**
4\. Utilizar e atualizar os dados para que o laço tenha um fim e execute corretamente
**Utilizar uma expressão para atribuir o valor à atividade do contexto e uma segunda expressão para atualizar a posição incrementando uma linha (Contador + 1).

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360019850931/mceclip4.png)

**Informações Adicionais
**Exemplo de uma fórmula visual que edita o Campo Livre do item de movimento. [Baixe aqui!](https://totvssuporte.zendesk.com/hc/article_attachments/360019983852/Exemplo.zip)
