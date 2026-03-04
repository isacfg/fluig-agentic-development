# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Campo complementar na visão de movimento

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360005049191-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Campo-complementar-na-vis%C3%A3o-de-movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360005049191-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Campo-complementar-na-vis%C3%A3o-de-movimento)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 30 de novembro de 2021 às 12:02

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura: **00:03:00 min**

**Dúvida**Após migração para o novo modelo de BackOffice, os campos complementares de Movimento não são mais apresentados na visão de Movimento. Para que isso seja possível, é necessário a criação de uma Fórmula visual.

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da 11.40.

**Solução
**

Criar uma coluna na visão de movimentos para retornar o conteúdo de um campo complementar.

1\. Criação de Consulta SQL que retorne o campo:

Acessar o menu **| Utilitários | Consulta SQL |** **Incluir |** e cadastrar a Consulta SQL que será considerada quando a Fórmula visual for executada.

Exemplo:
**SELECT** REAL
**FROM** ***TMOVCOMPL** (**NOLOCK**)
***WHERE** TMOVCOMPL.CODCOLIGADA = :CODCOLIGADA
**AND** TMOVCOMPL.IDMOV = :IDMOV

Segue abaixo link contendo os demais passos a serem seguidos para criar a Fórmula Visual para o sistema retornar um campo complementar de Movimento na visão dos registros: [Criar coluna de campo complementar na visão de movimentos](http://tdn.totvs.com/pages/viewpage.action?pageId=196811606)
