# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Utilização de natureza fiscal quando houver dados de Coleta e Entrega

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360006655752-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Utiliza%C3%A7%C3%A3o-de-natureza-fiscal-quando-houver-dados-de-Coleta-e-Entrega](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360006655752-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Utiliza%C3%A7%C3%A3o-de-natureza-fiscal-quando-houver-dados-de-Coleta-e-Entrega)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 30 de novembro de 2021 às 15:20

---

**
![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
Tempo aproximado para leitura: 00:04:00 min
Dúvida**Qual natureza fiscal (**CFOP**) utilizar em movimentos de entrada quando o mesmo estiver parametrizado para cadastrar **CTRC/CT-e** (parâmetros do tipo de movimento, etapa **Fis - Conhecimento de Transporte**)?

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 12

**Solução**Para movimentações de entrada de CT-e/CTRC, será habilitado a aba **CTRC | Coleta e Entrega** e o sistema fará as seguintes validações para seleção de natureza:

1\. Se não forem informadas as Unidades da Federação (UF) dos locais de coleta e entrega, serão **consistidos os estados da filial e do fornecedor,** ou seja, se forem do mesmo estado serão retornadas naturezas do tipo 1 (Entrada Interna) e para estados diferentes, naturezas do tipo 2 (**Entrada Interestadual**). 

2\. Caso sejam informadas as UFs dos locais de coleta e entrega, serão consistidos os estados selecionadas nos respectivos campos, aba **CTRC | Coleta e Entrega**. [Clique aqui](http://tdn.totvs.com/download/attachments/107380872/Parecer%20Consultoria%20Tribut%C3%A1ria%20Segmentos%20%E2%80%93%20THWRAM%20%E2%80%93%20Entrada%20de%20Conhecimento%20de%20Transporte%20Rodovi%C3%A1rio.pdf?version=1&modificationDate=1408456977000&api=v2) para visualizar documento emitido pela consultoria tributária da TOTVS que contém o parecer da **SEFAZ** quanto a seleção da **CFOP** em operação de transporte.


![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360007156552/mceclip0.png)
