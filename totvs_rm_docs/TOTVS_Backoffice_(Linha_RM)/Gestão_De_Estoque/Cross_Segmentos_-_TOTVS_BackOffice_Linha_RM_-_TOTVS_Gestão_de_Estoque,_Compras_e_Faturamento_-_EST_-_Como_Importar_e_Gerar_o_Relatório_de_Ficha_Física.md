# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - EST - Como Importar e Gerar o Relatório de Ficha Física Financeira

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4406594388119-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Como-Importar-e-Gerar-o-Relat%C3%B3rio-de-Ficha-F%C3%ADsica-Financeira](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4406594388119-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Como-Importar-e-Gerar-o-Relat%C3%B3rio-de-Ficha-F%C3%ADsica-Financeira)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
> **Data:** 9 de abril de 2025 às 15:42

---

 ![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: **00:03:00 min**

**Dúvida
**Como importar e gerar o relatório de **Ficha Física Financeira**?

**Ambiente
**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução
**1\. Acesse o menu Gestão | RM Reports | clique em Processos |  Importar Estrutura de Relatório | \*selecione a estrutura a ser importada e clique em Executar:

![mceclip2.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4406595342231/mceclip2.png)

\*Os relatórios estão disponíveis no diretório de instalação do sistema (\\CorporeRM\\ObjetosGerenciais\\Relatórios).
São eles: **NUCREL00005 - Ficha Física Financeira** e **NUCREL00006 - Ficha Física Financeira - 4 Casas Decimais**.

![mceclip4.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4406595491607/mceclip4.png)

Para demonstrar, escolhemos o relatório **NUCREL00006 - Ficha Física Financeira 4 Casas Decimais.TotvsReport**:

![mceclip6.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4406596306967/mceclip6.png)

2\. Acesse o menu Estoque | Consultas e Relatórios | Relatório de Ficha Física Financeira:

![mceclip5.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4406595574039/mceclip5.png)

Nesse relatório existem várias opções de filtro para selecionar os dados que serão impressos.
Para entendimento das opções apresentadas, verifique a documentação:
[Relatório de Ficha Física Financeira](https://tdn.totvs.com/pages/releaseview.action?pageId=423938204)

3\. Após informar os parâmetros conforme a necessidade, como Período Inicial e Final de impressão, faixa de filiais, faixa de produtos, etc., clique em Executar e será apresentada a mensagem abaixo:

![mceclip1.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4406614589719/mceclip1.png)

Ao clicar em **Sim** a Ficha Física Financeira será atualizada com as novas movimentações incluídas desde a última data de [regeração de saldos e custos](https://tdn.totvs.com/pages/releaseview.action?pageId=237373704). Não serão atualizados registros anteriores a essa data. 

Ao clicar em **Não**, as novas movimentações não serão apresentadas.

4\. Posteriormente o relatório será gerado com base nas opções de filtros selecionados:

![mceclip7.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4406596687639/mceclip7.png)

**Importante:**

Caso não esteja sendo exibida a movimentação para o produto, verifique a documentação:
[RM - EST - Produto não exibe na Ficha Física Financeira](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360063327113-RM-EST-Produto-n%C3%A3o-exibe-na-Ficha-F%C3%ADsica-Financeira?source=search)
