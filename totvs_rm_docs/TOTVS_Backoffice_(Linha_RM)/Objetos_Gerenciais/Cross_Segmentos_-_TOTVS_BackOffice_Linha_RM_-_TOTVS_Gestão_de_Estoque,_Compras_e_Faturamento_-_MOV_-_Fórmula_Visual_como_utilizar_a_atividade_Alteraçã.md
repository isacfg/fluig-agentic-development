# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Fórmula Visual como utilizar a atividade Alteração de Movimento

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360036626593-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-F%C3%B3rmula-Visual-como-utilizar-a-atividade-Altera%C3%A7%C3%A3o-de-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360036626593-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-F%C3%B3rmula-Visual-como-utilizar-a-atividade-Altera%C3%A7%C3%A3o-de-Movimento)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Objetos Gerenciais
> **Data:** 9 de abril de 2025 às 16:13

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura: **00:04:00min**

**Dúvida**O que é necessário para utilizar a atividade **Alteração de Movimento**? 

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução**Para utilizar a atividade **Alteração Movimento** é necessário utilizar 3 atividades em sequência:

1.   **Alteração Movimento:**
    Campos obrigatório nessa atividade: CodColigada, CodUsuarioLogado, Idmov
2.  **Alteração Item Movimento:**
    Campos obrigatório nessa atividade: CodColigada, Idmov, NSeqItmMov
3.  **Salvar Alteração Movimento:
    **As atividades **Alterar Item de Movimento** e **Salvar Movimento** deverão ter como referência a atividade **Alterar Movimento.**

**
![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360048122373/mceclip0.png)
**

**Importante**

1.  A execução da fórmula visual realiza todas as consistências típicas do movimento conforme definido na parametrização, igual a qualquer alteração manual no registro;
2.  As atividades de alteração de movimento não permitem alterar registros que possuem relacionamento. Para alterar tais movimentos recomendamos usar as atividades [Ler Registro](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360013058091) e [Salvar Registro;](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360037470253)
3.  As atividades apresentadas devem ser usadas apenas quando a alteração ocorrer fora da edição do movimento. Se a necessidade for alterar o movimento quando o dataset estiver aberto, recomendamos usar a atividade Expressão;
4.  Faça o download da fórmula visual anexa para obter um exemplo de utilização das atividades apresentadas. O exemplo tem como objetivo preencher o Campo Livre 1 do movimento indicado na propriedade IDMOV das atividades AlteracaoMov e AlteracaoItem.
