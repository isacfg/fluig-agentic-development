# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Fórmula Visual: Atividades de Inclusão de Movimento

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360061399674-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-F%C3%B3rmula-Visual-Atividades-de-Inclus%C3%A3o-de-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360061399674-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-F%C3%B3rmula-Visual-Atividades-de-Inclus%C3%A3o-de-Movimento)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Objetos Gerenciais
> **Data:** 9 de abril de 2025 às 16:08

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:05:00 min**

**Dúvida
**Como fazer uma **Fórmula Visual** para **Inclusão de Movimentos** usando as atividades padrões do módulo Gestão de Estoque, Compras e Faturamento? 
**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da 12 .

**Solução**Para incluir o movimento via fórmula visual é necessário utilizar três atividades em sequência:

1 - **Atividade Inclusão Movimento:**
Deverá preencher todas as propriedades nessa atividade que são obrigatórias ao incluir o movimento manualmente. Além disso, os campos obrigatórios para inclusão em qualquer movimento são: 

**Descrição** 

**Propriedade**

**Campo Banco de Dados**

Código da Coligada

CodColigada

TMOV.CODCOLIGADA

Código da Filial

CodFilial

TMOV.CODFILIAL

Local de Estoque

CodLoc

TMOV.CODLOC

Código do Tipo de Movimento

CodTMv

TMOV.CODTMV

Usuário Logado

CodUsuarioLogado

 

Identificador do Movimento

IdMov

TMOV.IDMOV


Observação:

-   O Local de estoque é obrigatório apenas em movimentos que permitem a inclusão de Produtos do tipo Produto e em coligadas que não utilizam Local Único.
-   A propriedade IdMov deve ser preenchida com valor -1 para que seja gerado o movimento com identificador sequencial definido na tabela GAUTOINC.

2 - **Atividade Inclusão Item Movimento:**
Conforme explicado no tópico acima, deverá preencher todas as propriedades definidas como obrigatórias na parametrização do item no tipo de movimento. Os campos obrigatórios para inclusão de qualquer item de movimento são:

**Descrição** 

**Propriedade**

**Campo Banco de Dados**

Identificador do Produto

IdPrd

TITMMOV.IDPRD

Número Sequencial do Item de Movimento

NSeqItmMov

TITMMOV.NSEQITMMOV

Quantidade

Quantidade

TTITMMOV.QUANTIDADE


3 - **Atividade Salvar Movimento:**
As atividades **Salvar Movimento** e **Inclusão Item Movimento** devem ter como Referência a atividade **Inclusão Movimento**:
![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360103883813/mceclip0.png)



**Importante:**

1 - A execução da fórmula visual realiza todas as consistências típicas do movimento conforme definido na parametrização, como qualquer inclusão manual no registro.
2 - As atividades apresentadas devem ser usadas apenas quando a inclusão ocorrer **fora da tela do movimento.** 
3 - **Recomendamos executar a fórmula visual menu menu Gestão > Fórmula Visual > Executar.**
4 - Faça o download da fórmula visual anexa para obter um exemplo de utilização das atividades apresentadas. O exemplo tem como objetivo incluir um movimento do tipo indicado na propriedade CodTMv na atividade InclusaoMovimento.
