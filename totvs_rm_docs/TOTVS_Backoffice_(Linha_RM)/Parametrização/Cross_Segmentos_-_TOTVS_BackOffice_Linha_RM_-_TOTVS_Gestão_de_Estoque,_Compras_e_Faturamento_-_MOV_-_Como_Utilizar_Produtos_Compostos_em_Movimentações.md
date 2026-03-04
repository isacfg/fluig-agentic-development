# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como Utilizar Produtos Compostos em Movimentações

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360028609771-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-Utilizar-Produtos-Compostos-em-Movimenta%C3%A7%C3%B5es](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360028609771-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-Utilizar-Produtos-Compostos-em-Movimenta%C3%A7%C3%B5es)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 14 de abril de 2025 às 15:36

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura: **00:03:00 min**

**Dúvida
**Como cadastrar produtos compostos e utiliza-los em movimentos?

**Ambiente**Cross Segmentos - TOTVS Backoffice (Linha RM) – TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução**Para utilizar produtos compostos, realize os seguintes passos:
1\. Acessar menu **Cadastros** | **Produtos | Cadastrar o produto composto (Kit)**;

2\. Ainda no cadastro do produto acesse **Anexos** | **Produtos** **Compostos** e informe quais são os **subprodutos** deste kit, definindo também a **quantidade** de cada um na composição e **unidade de medida;**

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360028905811/mceclip0.png)

3\. Após cadastrar o produto, é necessário parametrizar o tipo de movimento para utilizar produtos compostos. Para tanto deverá acessar menu **Ambiente** | **Parâmetros** | **Gestão de Estoque, Compras e Faturamento | selecionar o tipo de movimento | etapa Item - Identificação 2/2** e marcar a flag **Utilizar Produto Composto;**

4\. No movimento, deverá incluir o produto composto como um item comum e antes do faturamento deverá **expandi-lo**, clicando no **ícone Expandir Itens Compostos**, destacado abaixo;

![Expandir.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360029813392/Expandir.png)

Desta forma o Produto Composto será excluído do movimento e os subprodutos serão inseridos automaticamente, com as respectivas quantidades e unidades de medida definidas no passo 2;

![mceclip3.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360029813452/mceclip3.png)

**Observações:** 

-   Ao tentar faturar um produto composto sem expandi-lo para outro tipo de movimento que também utiliza produto composto, será retornada a mensagem de erro **Não é permitido faturar movimentos que contenham produtos compostos! Expanda os produtos compostos antes de faturar!**
-   Ao faturar um produto composto sem expandi-lo para outro tipo de movimento que não utiliza produto composto, o faturamento ocorrerá sem erros.
-   Um produto composto pode afetar estoque tal como seus subprodutos e não há nenhuma relação entre estes saldos em estoque, ou seja, ao expandir o produto composto será o saldo dos subprodutos que será afetado, caso não seja expandido apenas o saldo do produto composto é que será afetado.
