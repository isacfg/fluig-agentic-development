# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - BLK - Parametrização para geração dos Blocos K210 e K215

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022990451-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-BLK-Parametriza%C3%A7%C3%A3o-para-gera%C3%A7%C3%A3o-dos-Blocos-K210-e-K215](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022990451-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-BLK-Parametriza%C3%A7%C3%A3o-para-gera%C3%A7%C3%A3o-dos-Blocos-K210-e-K215)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Fiscal
> **Data:** 1 de dezembro de 2021 às 13:58

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: **00:03:00 min**

**Dúvida**Como parametrizar o módulo para geração dos **Blocos K210 e K215.

****Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.

**Solução
**O **Registro** **K210** tem o objetivo de escriturar a desmontagem no que se refere à saída do estoque do item de origem que sejam mercadorias dos tipos:

-   00 – Mercadoria para Revenda
-   01 – Matéria-Prima
-   02 – Embalagem
-   03 – Produtos em Processo
-   04 – Produto Acabado
-   05 – Subproduto
-   10 – Outros Insumos

A quantidade deve ser expressa **obrigatoriamente** na unidade de medida de controle de estoque constante no campo 06 do registro **0200: UNID\_INV**.

Quando houver identificação da ordem de serviço, as informações chave deste registro são os campos: **COD\_DOC\_OS** **e** **COD\_ITEM\_ORI**.

Nos casos em que a ordem de serviço não for identificada, o campo chave passa a ser **COD\_ITEM\_ORI**. 

O **Registro K215** tem o objetivo de escriturar a **desmontagem** no que se refere à entrada do estoque do item de destino que seja mercadoria dos tipos:

-   00 – Mercadoria para Revenda
-   01 – Matéria-Prima
-   02 – Embalagem
-   03 – Produtos em Processo
-   04 – Produto Acabado
-   05 – Subproduto
-   10 – Outros Insumos

Este registro é **obrigatório** caso exista o **registro-pai K210** e o controle da desmontagem não for por ordem de serviço **campos DT\_INI\_OS, DT\_FIN\_OS e COD\_DOC\_OS do Registro K210 em branco**. Nesse caso, a saída do estoque do item de origem e a entrada em estoque do item de destino têm de ocorrer no período de apuração do **Registro** **K100**.

A quantidade deve ser expressa **obrigatoriamente** na unidade de medida de controle de estoque constante no campo 06 do registro **0200: UNID\_INV**.

A chave deste registro é o campo **COD\_ITEM\_DES**.

[Clique aqui](https://tdn.totvs.com/display/public/LRM/MOV0007_Bloco_K_Registros+K210+e+K215) para conferir a parametrização a ser realizada.

**Informações adicionais**

-   Fique atento também aos demais parâmetros desse tipo de movimento, que devem ser preenchidos conforme os procedimentos de desmontagem realizados por sua empresa.
-   Após o tipo de movimento de entrada por Desmontagem de Mercadorias ter sido parametrizado e liberado para os devidos usuários em **Serviços Globais | Segurança | Usuários | Sistema: Gestão de Estoque, Compras e Faturamento | Anexos | Permissões por Tipo de Movimento,** as movimentações internas poderão efetivamente ser realizadas.

Dúvidas sobre Permissões por Tipo de Movimento, [clique aqui](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000563827-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-atribuir-permiss%C3%A3o-ao-usu%C3%A1rio-em-Tipo-de-Movimento).
