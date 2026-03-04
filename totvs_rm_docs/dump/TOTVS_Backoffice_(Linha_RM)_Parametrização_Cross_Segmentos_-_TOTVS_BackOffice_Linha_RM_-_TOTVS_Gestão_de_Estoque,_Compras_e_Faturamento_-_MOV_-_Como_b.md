# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como buscar Alíquota do Pedido

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000347007-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-buscar-Al%C3%ADquota-do-Pedido](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000347007-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-buscar-Al%C3%ADquota-do-Pedido)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 19 de janeiro de 2022 às 09:46

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: **00:03:00min**

**Dúvida
**Como parametrizar o sistema para que no Faturamento/Recebimento, a alíquota do Movimento de Pedido seja levado para o Movimento de Nota Fiscal?

**Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.

**Solução
**Para começarmos a configurar é necessário entendermos quais são as regras que o sistema segue para preenchimento do campo de Alíquota.

1\. O primeiro local onde o sistema verifica de onde deve buscar alíquota é no cadastro do **Tributo.** Acessar **Cadastros | Mais | Tributo**, dentro deste cadastro na aba Outros Dados, existe o campo **Procurar Alíquota no** conforme destaque do print abaixo:

![image2017-7-19_14_22_49.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360000997928/image2017-7-19_14_22_49.png)

**Importante
**O sistema sempre respeitará primeiro a configuração deste campo portanto, a prioridade de onde deverá buscar a alíquota é sempre definida no cadastro do Tributo. Desta forma, caso queira que o sistema busque a alíquota do Pedido, terá que configurar seu Tributo para buscar alíquota no Tipo de Movimento e este por sua vez, ser configurado para buscar alíquota no Pedido.

2\. Acessar **Ambiente | Parâmetros | Gestão de estoque, Compras e Faturamento | parametrizar o Tipo de Movimento desejado**, **etapa** **64** - **Fis - Tributação - Item:**

![image2017-7-19_14_30_38.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360000997968/image2017-7-19_14_30_38.png)

**
Informações Adicionais
**Com esta configuração aplicada, durante a inclusão do movimento via faturamento o sistema verificará no cadastro do Tributo de onde deverá buscar a alíquota. Como está configurado com Tipo de Movimento, o sistema verificará a configuração do movimento, e como este está parametrizado para buscar do Pedido, o sistema carregará a alíquota corretamente.
