# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como buscar Alíquota no Tipo de Movimento

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000629948-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-buscar-Al%C3%ADquota-no-Tipo-de-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000629948-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-buscar-Al%C3%ADquota-no-Tipo-de-Movimento)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 19 de janeiro de 2022 às 09:55

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: **00:04:00min**

**Dúvida**Como parametrizar o Movimento para utilizar a Alíquota definida no Tributo do Tipo de Movimento?

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução**
Para começarmos a configurar o sistema para buscar alíquota do tipo de movimento é necessário entendermos quais são as regras que o sistema segue para preenchimento do campo de Alíquota.

O primeiro local onde o sistema verifica de onde deve buscar Alíquota é no cadastro do Tributo. Dentro deste cadastro na aba Outros Dados, existe o campo Procurar Alíquota que deverá estar com o valor **Tipo Movimento** conforme destaque do print abaixo:

**
![image2017-7-19_14_22_49.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360001013167/image2017-7-19_14_22_49.png)
**

1.  Acesse o menu **Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento |** de acordo com a classificação, avance, marque o tipo de movimento desejado e clique sobre a opção **parametrizar.** Na etapa **64 - Fis - Tributação - Item ou na etapa 65 Fis - Tributação - Movimento**, e informe no campo **Procurar Alíquota em** o valor **Tipo Movimento**.
    ![mceclip1.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360001135027/mceclip1.png)
