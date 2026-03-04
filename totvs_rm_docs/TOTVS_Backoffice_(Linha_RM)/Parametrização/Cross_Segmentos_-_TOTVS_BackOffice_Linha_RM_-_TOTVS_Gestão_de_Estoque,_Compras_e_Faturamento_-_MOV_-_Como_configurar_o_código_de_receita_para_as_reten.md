# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como configurar o código de receita para as retenções de contribuições

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360004234611-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-configurar-o-c%C3%B3digo-de-receita-para-as-reten%C3%A7%C3%B5es-de-contribui%C3%A7%C3%B5es](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360004234611-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-configurar-o-c%C3%B3digo-de-receita-para-as-reten%C3%A7%C3%B5es-de-contribui%C3%A7%C3%B5es)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 1 de agosto de 2022 às 17:26

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:03:00min**

**Dúvida**
Como configurar o sistema para levar o Código de Receita das Retenções de Contribuições PIS, COFINS E CSLL para o lançamento financeiro buscando o default do Cliente/Fornecedor?

**Ambiente**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução**
Para poder configurar o sistema para buscar o Código de Receita das Retenções de Contribuições PIS, COFINS E CSLL para o lançamento financeiro buscando o default do Cliente/Fornecedor deverá primeiramente configurar o tributo para procurar alíquota no Tipo de Movimento conforme print abaixo:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360005278591/mceclip0.png)

Feita a configuração do tributo, deverá informa-lo na etapa Fis - Tributação - Movimento nos parâmetros do tipo de movimento que será utilizado para esta finalidade. Após informar o tributo, na própria linha, configure o campo de Procurar Alíquota Em para buscar o valor do Código de Receita conforme print:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360005259752/mceclip1.png)

Salve a parametrização e faça a inclusão do movimento.

Durante a inclusão do movimento, utilizamos um Fornecedor que tem em seu cadastro informado o Código de Receita 6190 conforme exemplo:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360005279951/mceclip2.png)

Vale ressaltar que para a retenção CSRF, o Código de Receita informado é o 5952:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360005280151/mceclip3.png)

Após informar o Fornecedor do movimento, acesse a aba Tributos e Valores | Tributos, e veja que o sistema levou ao campo de Código de Retenção do Imposto o valor que está informado na aba Tributo do cadastro de Cliente/Fornecedor 6190 e não o do cadastro do tributo 5952.

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360005261072/mceclip4.png)

Já com o movimento salvo, ao acessar o lançamento financeiro gerado poderá notar que o cód. Retenção foi levado corretamente conforme parametrizado.

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360005280531/mceclip5.png)
