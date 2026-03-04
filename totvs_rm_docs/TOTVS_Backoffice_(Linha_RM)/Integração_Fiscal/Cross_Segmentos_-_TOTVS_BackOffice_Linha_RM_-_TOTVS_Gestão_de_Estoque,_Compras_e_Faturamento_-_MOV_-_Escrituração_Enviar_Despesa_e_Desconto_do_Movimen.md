# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Escrituração: Enviar Despesa e Desconto do Movimento para o Lançamento Fiscal

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034906334-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Escritura%C3%A7%C3%A3o-Enviar-Despesa-e-Desconto-do-Movimento-para-o-Lan%C3%A7amento-Fiscal](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034906334-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Escritura%C3%A7%C3%A3o-Enviar-Despesa-e-Desconto-do-Movimento-para-o-Lan%C3%A7amento-Fiscal)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Fiscal
> **Data:** 20 de fevereiro de 2025 às 16:19

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/30124217586199)
 Tempo aproximado para leitura: 00:02:00 min**

**Dúvida**Como levar os campos Despesa e Desconto do movimento para o lançamento fiscal gerado após Escrituração?

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução**Para solucionar essa demanda, realize os seguintes passos:


1\. Acesse menu Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > selecione o tipo de movimento > Avance até a etapa Mov Rateio Val.Financeiros 1/2 e selecione a opção **Aplicar Rateio Proporcional** para os campos Desconto e Despesa.

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360046261473)

2\. Ainda nos parâmetros do tipo de movimento, avance até a etapa etapa Fis - Escrituração 2/2 e marque as flags Desconto e Despesa no campo **Rateio na Base de ICMS**.

![mceclip1.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360045402094)

3\. Acesse o cadastro da Natureza Fiscal utilizada no movimento, aba Tributação ICMS/IPI, edite a Regra de ICMS e desmarque as flags Desconto e Despesa no campo **Valores Condicionais**.

![mceclip2.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360045402214)

Após a escrituração os valores Despesa e Desconto do movimento serão demonstrados nos seguintes campos do Lançamento Fiscal gerado:
![mceclip3.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360045402434)

![mceclip4.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360045402474)
