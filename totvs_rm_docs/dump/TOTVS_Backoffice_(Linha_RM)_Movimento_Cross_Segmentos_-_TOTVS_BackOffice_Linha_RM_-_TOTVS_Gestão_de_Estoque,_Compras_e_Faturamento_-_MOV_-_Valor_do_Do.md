# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Valor do Documento considerando somente o valor bruto do primeiro item

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000605868-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Valor-do-Documento-considerando-somente-o-valor-bruto-do-primeiro-item](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000605868-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Valor-do-Documento-considerando-somente-o-valor-bruto-do-primeiro-item)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 13 de dezembro de 2021 às 14:46

---

 ***![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)***Tempo aproximado para leitura: **00:06:00min**

**Ocorrência**No módulo Gestão de Estoque, Compras e Faturamento, ao criar um movimento com integração financeira o valor original do lançamento financeiro está considerando apenas o valor do primeiro item de movimento.

**Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causa
**Ocorre pois na **fórmula do valor bruto**, localizada na etapa **Fin - Faturamento 3/6** nos parâmetros do tipo de movimento, está utilizando funções de itens como **KQT, KPU**, dentre outras.**
Solução
**A fórmula utilizada nos parâmetros do tipo de movimento tem funções de contexto de item, geralmente **KQT** - quantidade do item e **KPU** - preço do item. A fórmula do valor do documento é executada apenas uma vez em cada movimento, o que implica trazer o valor somente do primeiro item.

1.  Acesse o menu **Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | localize o movimento desejado |** avance até a **etapa 56 - Fin - Faturamento 3/6** e edite o conteúdo da fórmula que está associada ao campo **Fórmula do Valor a Ratear:
    ![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360001134467/mceclip0.png)
    **
2.  Altere o conteúdo da fórmula conforme necessidade da empresa.

**Importante
**Ao criar/editar a fórmula do valor a ratear, aconselhamos que seja utilizada a função **MVB** ou que não utilize variáveis aplicáveis ao contexto de item de movimento.

Caso encontre dificuldades para localizar os parâmetros do tipo de movimento, [clique aqui](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003051691-RM-MOV-Como-descobrir-a-classifica%C3%A7%C3%A3o-e-menu-do-Tipo-de-Movimento).
