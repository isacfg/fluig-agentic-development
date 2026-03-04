# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Venda para Entrega Futura

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000346147-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Venda-para-Entrega-Futura](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000346147-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Venda-para-Entrega-Futura)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 14 de dezembro de 2021 às 20:00

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura: **00:04:00min**

**Dúvida
**Descrição do processo de Venda para Entrega Futura. Essa operação ocorre quando um faturamento é realizado de maneira **antecipada à entrega.** Nesse caso, portanto, ocorre uma compra, **mas a circulação de mercadorias não acontece de fato**, ainda. Ela só **acontecerá em uma data posterior**, ainda que, em termos fiscais, a venda já tenha ocorrido. 

**Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 11.82.

**Solução
**A inclusão do movimento de venda ocorrerá da mesma forma que qualquer outra movimentação. Neste processo, a inclusão deste movimento não tem restrições.

**1\. Movimento de Venda** 

Para cadastrar ou editar um tipo de movimento de Venda para Entrega Futura, acesse o menu **Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento |** **Venda | Faturamento**. 

A principal característica deste tipo de movimento é que ele deve ser do tipo 2.2. As demais parametrizações, como Fiscal, Financeira e Estoque vão de acordo com a regra de negócio da empresa.

**Importante
**Abaixo, daremos dicas de como o movimento poderá ser parametrizado. Lembrando, que essa parametrização **NÃO** é obrigatória, dependerá da regra de negócio da empresa.

-   Inclusão deste movimento pode ser Manual ou por Faturamento de um movimento 2.1.XX;
-   Tipo de movimento NÃO afeta estoque;
-   Tipo de movimento GERA financeiro.

**2\. Movimento de Remessa**

Para o movimento de Remessa, o movimento deverá ser feito por Cópia por Referência conforme parametrizado, assim, realizando o vínculo do movimento de venda com o de entrega.

Para cadastrar ou editar um tipo de movimento de Venda para Entrega Futura, acesse o menu Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Venda | Faturamento.

As principais características deste tipo de movimento são:

1.  Tipo de Movimento do tipo 2.2.xx;
2.  Na etapa **Mov - Outros Dados** deverá marcar a opção **Usar Copia de Movimento por Referência** e no campo de Motivo de Referência escolher a opção **2 - Simples Remessa.**

**Importante
**Abaixo, daremos dicas de como o movimento poderá ser parametrizado. Lembrando, que essa parametrização **NÃO** é obrigatória, dependerá da regra de negócio da empresa.

-   Tipo de movimento AFETA estoque;
-   Tipo de movimento NÃO gera financeiro, pois este foi gerado no movimento de venda.

**Observação
**A partir da versão 12.1.20, foi criado o motivo de cópia por referencia **33 - Venda para Entrega Futura,** que **NÃO consiste Lote e Serie.**
