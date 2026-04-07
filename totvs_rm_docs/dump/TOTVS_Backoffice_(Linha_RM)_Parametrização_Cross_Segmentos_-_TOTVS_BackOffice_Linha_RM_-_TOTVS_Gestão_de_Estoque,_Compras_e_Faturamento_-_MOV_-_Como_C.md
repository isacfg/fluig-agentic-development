# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como contabilizar Movimento a partir do Rateio por Centro de Custo

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360004090652-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-contabilizar-Movimento-a-partir-do-Rateio-por-Centro-de-Custo](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360004090652-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-contabilizar-Movimento-a-partir-do-Rateio-por-Centro-de-Custo)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 14 de abril de 2025 às 15:24

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura**: 00:04:00 min**

**Dúvida
**Como configurar o Evento Contábil para poder buscar as contas contábeis e os valores da linha do rateio por centro de custo do Movimento?

**Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução
**Para poder buscar conta contábil e o valor do rateio para o centro de custo informado no movimento, deverá inicialmente configurar seu Item de Evento da seguinte maneira:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360005107531/mceclip2.png)

-   **Aplicar:** Rateio por Centro de Custo
-   **Buscar default em:** Centro de Custo
-   **Fórmula:** Para poder buscar o valor correto da linha do rateio, deverá utilizar a função TABMOVRATCCU.

Não deverá utilizar a função **SOMARATCCU** pois esta irá somar todo o valor do rateio e aplicará a todas as contas contábeis vinculadas aos centros de custos.

Exemplo:

**Rateio do Movimento**
Centro de Custo: 01.1 | Valor: 5,00
Centro de Custo: 01.2 | Valor: 5,00

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360005108231/mceclip8.png)

**Fórmula do Item de evento**

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360005093812/mceclip1.png)

Veja que após contabilização do Movimento, o sistema gerou 4 partidas, sendo:

-   1 Débito - Centro de Custo 01.1 no valor de R$10,00
-   1 Débito - Centro de Custo 01.1 no valor de R$10,00
-   1 Crédito- Centro de Custo 01.2 no valor de R$10,00
-   1 Crédito- Centro de Custo 01.2 no valor de R$10,00

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360005093752/mceclip0.png)


Este comportamento está incorreto. A contabilização correta seria com o valor de R$5,00 para cada centro de custo conforme rateio do movimento.

Por este motivo, aconselhamos a utilização da função **TABMOVRATCCU**.

Veja o exemplo utilizando o mesmo movimento anterior:

**Fórmula do Item de Evento**
![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360005107551/mceclip3.png)

Note que após contabilizar o movimento, o sistema gerou a contabilidade da seguinte maneira:

-   1 Débito - Centro de Custo 01.1 no valor de R$5,00
-   1 Débito - Centro de Custo 01.1 no valor de R$5,00
-   1 Crédito- Centro de Custo 01.2 no valor de R$5,00
-   1 Crédito- Centro de Custo 01.2 no valor de R$5,00

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360005107711/mceclip5.png)

Com a configuração da função **TABMOVRATCCU** temos o comportamento esperado para geração da contabilidade, criando assim as partidas contábeis com os valores iguais ao do rateio por centro de custo.
