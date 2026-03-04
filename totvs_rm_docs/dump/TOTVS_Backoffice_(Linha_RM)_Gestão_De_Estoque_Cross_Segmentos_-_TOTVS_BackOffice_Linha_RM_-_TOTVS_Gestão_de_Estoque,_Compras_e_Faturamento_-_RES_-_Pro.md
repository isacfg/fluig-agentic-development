# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - RES - Produtos não são apresentados no “Processo” e na “Analise” do Ressuprimento

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360021564992-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-RES-Produtos-n%C3%A3o-s%C3%A3o-apresentados-no-Processo-e-na-Analise-do-Ressuprimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360021564992-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-RES-Produtos-n%C3%A3o-s%C3%A3o-apresentados-no-Processo-e-na-Analise-do-Ressuprimento)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
> **Data:** 9 de abril de 2025 às 15:40

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:01:00min**

**Dúvida
**Ao realizar o "Processo" e a "Análise" do Ressuprimento, determinado produto não é exibido

**Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causas
**1 - O Produto não é de último nível;
2 - O Produto está Inativo;
3 - Não existe “Informações de Estoque” para o produto compatível com o Nível de Gestão parametrizado;
4 - O Tipo de Aplicação não esta informada no cadastro de produto;
5 - O Tipo de Aplicação informado no produto esta com a opção “Usa Gestão de Materiais” desmarcada.

**Solução
**1 - Se o produto estiver como Inativo, verificar se realmente irá ser utilizado no Ressuprimento e habilitá-lo se for o caso;
2 - Se o produto não for de último nível, verificar se realmente irá ser utilizado no Ressuprimento e colocar o mesmo para ser de último nível;
3 - No cadastro do produto, Anexo, Informações de Estoque, deverá cadastrar conforme necessidade da empresa;
4 - Informar um Tipo de Aplicação dentro do(s) produto(s) correspondente(s);
5 - Marcar a opção “Usa Gestão de Materiais” do Tipo de Aplicação amarrado ao produto ou então alterar o tipo de aplicação do produto para um que tenha a opção marcada.
