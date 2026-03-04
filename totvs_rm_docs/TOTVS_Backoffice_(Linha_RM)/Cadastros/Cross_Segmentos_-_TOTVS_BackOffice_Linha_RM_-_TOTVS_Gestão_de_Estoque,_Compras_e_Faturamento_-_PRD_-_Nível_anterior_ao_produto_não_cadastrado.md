# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PRD - Nível anterior ao produto não cadastrado

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024537271-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PRD-N%C3%ADvel-anterior-ao-produto-n%C3%A3o-cadastrado](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024537271-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PRD-N%C3%ADvel-anterior-ao-produto-n%C3%A3o-cadastrado)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
> **Data:** 9 de abril de 2025 às 14:54

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/31292331683223)**Tempo aproximado para leitura: **00:03:00min**

**Ocorrência**

Ao incluir um novo produto o sistema apresenta a mensagem:
Produto/Serviço 01.01.001: **Nível anterior ao produto não cadastrado.

****Ambiente
**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causa
**

Quando se utiliza **Controle de Nível de Máscara**, é necessário que o produto de nível anterior exista para que os demais níveis sejam criados.

**Solução
**Inclua o produto de nível anterior da máscara e em seguida faça a inclusão do registro desejado.
No exemplo da mensagem o produto a ser incluído é o **01.01.001**, o nível anterior da máscara é o anterior ao último separador (ponto), portanto **01.01**.
