# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Situação Tributária de PIS e COFINS

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003026972-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Situa%C3%A7%C3%A3o-Tribut%C3%A1ria-de-PIS-e-COFINS](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003026972-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Situa%C3%A7%C3%A3o-Tribut%C3%A1ria-de-PIS-e-COFINS)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 30 de setembro de 2021 às 09:55

---

 ***![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)***Tempo aproximado para leitura: **00:02:00min**

**Dúvida**Qual a regra utilizada pelo sistema para preenchimento do campo **Situação Tributária** na linha do tributo no Movimento/Item?

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução**A regra que o sistema utiliza para preenchimento do campo Situação Tributária na linha do tributo seja ele no Movimento ou no Item, é a seguinte:

1 . **Natureza de Operação:** Menu **Cadastros | Natureza Fiscal | Anexos | Tributos da Natureza:**

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360004003672/mceclip0.png)

2.  **Produto**: Menu **Cadastros | Produtos e Serviços** (Este nome é definido pela empresa nos parâmetros de produto, por tanto, poderá ser outro) **\- Anexos | Tributos do Produto:**

![mceclip2.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360004003712/mceclip2.png)

3\. **Tipo de Movimento** menu **Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Classificação do Movimento | Etapa Fis - Tributação Item ou Movimento:**

![mceclip3.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360004003912/mceclip3.png)

Por tanto, se não houver a informação na Natureza, o sistema irá buscar no Produto. Caso não houver no produto, ele buscará do Tipo de Movimento.

**Lembrando que esta regra se aplica apenas para PIS e COFINS.**
