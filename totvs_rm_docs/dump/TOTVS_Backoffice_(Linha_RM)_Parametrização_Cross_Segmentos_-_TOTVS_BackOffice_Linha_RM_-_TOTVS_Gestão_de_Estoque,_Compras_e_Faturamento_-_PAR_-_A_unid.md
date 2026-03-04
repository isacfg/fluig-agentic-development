# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PAR - A unidade está incompatível quando o tipo de movimento é integrado com o RM Vitae

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360025809531-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-A-unidade-est%C3%A1-incompat%C3%ADvel-quando-o-tipo-de-movimento-%C3%A9-integrado-com-o-RM-Vitae](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360025809531-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-A-unidade-est%C3%A1-incompat%C3%ADvel-quando-o-tipo-de-movimento-%C3%A9-integrado-com-o-RM-Vitae)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 19 de julho de 2023 às 15:29

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
Tempo aproximado para leitura: **00:02:00min**

**Ocorrência**Ao salvar os parâmetros do tipo de movimento o sistema apresenta a mensagem:

**
![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4414849640471/mceclip0.png)
**

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.

**Causa
**A mensagem ocorre pois movimentos integrados com o RM Vitae devem utilizar a **unidade de medida de** **controle** definida no cadastro do produto.

**Solução
**Acesse a **etapa Item - Identificação 2/2** do parâmetro do tipo de movimento e para o campo **Unidade de Medida Padrão** selecione a opção **Unidade de Controle:**

**
![mceclip1.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4414842966935/mceclip1.png)

**
