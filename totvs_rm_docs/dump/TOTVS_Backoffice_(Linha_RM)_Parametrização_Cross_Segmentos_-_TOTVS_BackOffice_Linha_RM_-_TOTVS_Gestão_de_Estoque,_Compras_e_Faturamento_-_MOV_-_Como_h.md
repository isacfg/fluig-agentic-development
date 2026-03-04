# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como habilitar mais de 4 casas decimais para Preço Unitário

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000650788-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-habilitar-mais-de-4-casas-decimais-para-Pre%C3%A7o-Unit%C3%A1rio](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000650788-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-habilitar-mais-de-4-casas-decimais-para-Pre%C3%A7o-Unit%C3%A1rio)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 5 de julho de 2024 às 17:37

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura: **00:03:00min**

**Dúvida
**Como parametrizar o sistema para habilitar a edição de mais de 4 casas decimais para o preço unitário do item de movimento?

**Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 11.82.

**Solução
**Para poder habilitar a edição de mais de 4 casas decimais no preço unitário do movimento, é necessário seguir os passos abaixo:

1.  Acessar os parâmetros em **Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Tabelas | Produtos** e avance até a etapa **Definições de Produto 3/3** e marque a opção **Casas Decimais Preço** conforme destaque do print abaixo:
    ![casas_demaisi.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360001034147/casas_demaisi.png)

2.  Após salvar os parâmetros, acesse o cadastro de produto, aba **Preço** e marque a opção **Alterar edição do preço** e informe a quantidade de casas decimais que deseja:
    ![produto.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360001020388/produto.png)


**Importante**
Durante a inclusão do movimento, sempre que este item for utilizado o campo de Preço Unitário terá a quantidade de casas decimais que foi estipulada em seu cadastro.

![pre_o_unitario.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360001020428/pre_o_unitario.png)
