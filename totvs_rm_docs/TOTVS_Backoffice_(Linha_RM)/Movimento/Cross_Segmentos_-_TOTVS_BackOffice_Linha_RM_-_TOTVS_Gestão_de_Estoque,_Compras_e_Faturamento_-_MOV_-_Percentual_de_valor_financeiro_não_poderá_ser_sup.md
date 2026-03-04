# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Percentual de valor financeiro não poderá ser superior a 100%

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360027917792-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Percentual-de-valor-financeiro-n%C3%A3o-poder%C3%A1-ser-superior-a-100](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360027917792-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Percentual-de-valor-financeiro-n%C3%A3o-poder%C3%A1-ser-superior-a-100)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 27 de fevereiro de 2024 às 07:23

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 02:00 min
Ocorrência**Ao incluir um Movimento, no momento de salvar, é apresentada a mensagem: **Percentual de valor financeiro não poderá ser superior a 100%.**

**Ambiente**Cross Segmentos - TOTVS Backoffice Linha RM - TOTVS Gestão de Estoque Compras e Faturamento - Todas as versões

**Causa
**Campos dentre os valores financeiros (**frete**, **desconto**, **despesa**, **seguro**) possui valor maior que o valor do movimento.

**Solução**1- Acessar o menu **Ambiente** | **Parâmetros** | **Gestão de estoque, Compras e Faturamento**
2- Localize o **tipo de movimento** em questão e parametrize-o (duplo clique ou ícone "Parametrizar"). *Caso não saiba como localizar o tipo de movimento [clique aqui](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003051691-RM-MOV-Como-descobrir-a-classifica%C3%A7%C3%A3o-e-menu-do-Tipo-de-Movimento)*
3 - Vá na etapa **Mov - Valores Financeiros 1/4** > marque a opção "**Permitir valor financeiro maior que o valor total do movimento**"


![Imagem](https://totvssuporte.zendesk.com/attachments/token/rkMgA7JN9DyOHKMQBr6hG5JkK/?name=inline918550105.png)
