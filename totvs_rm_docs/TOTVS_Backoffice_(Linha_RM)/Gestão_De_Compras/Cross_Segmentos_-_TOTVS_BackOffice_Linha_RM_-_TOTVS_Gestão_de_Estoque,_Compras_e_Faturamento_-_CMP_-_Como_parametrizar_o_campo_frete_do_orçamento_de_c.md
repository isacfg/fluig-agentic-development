# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Como parametrizar o campo "frete" do orçamento de cotação para trabalhar como valor

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/7327433392279-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Como-parametrizar-o-campo-frete-do-or%C3%A7amento-de-cota%C3%A7%C3%A3o-para-trabalhar-como-valor](https://centraldeatendimento.totvs.com/hc/pt-br/articles/7327433392279-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Como-parametrizar-o-campo-frete-do-or%C3%A7amento-de-cota%C3%A7%C3%A3o-para-trabalhar-como-valor)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
> **Data:** 9 de abril de 2025 às 15:30

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura: **00:03:00min**

**Dúvida
**Como parametrizar o campo "frete" do orçamento de cotação para trabalhar como valor.

**Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 12.1

**Solução**

Para inserir o frete por valor é necessário  acessar as parametrizações da cotação e marcar a flag "Usar Valor do Frete" na etapa **Definições Gerais 2/6**  e também em **Definição de Escopo - Filial** na sua respectiva filial.

Exemplo:

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/7327159674263/mceclip0.png)

Além disso, para que o valor do frete seja carregado para o movimento como valor é necessário acessar os parâmetros do tipo de movimento na **etapa Mov - Valores Financeiros 1/4** e selecionar "Valor" no campo **Tipo de Frete**.

Exemplo:

![mceclip1.png](https://centraldeatendimento.totvs.com/hc/article_attachments/7327205182359/mceclip1.png)
