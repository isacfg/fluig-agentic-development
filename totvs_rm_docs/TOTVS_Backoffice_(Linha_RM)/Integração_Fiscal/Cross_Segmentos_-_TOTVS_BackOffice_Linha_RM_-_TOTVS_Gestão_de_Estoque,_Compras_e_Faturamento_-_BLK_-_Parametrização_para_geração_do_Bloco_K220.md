# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - BLK - Parametrização para geração do Bloco K220

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022751932-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-BLK-Parametriza%C3%A7%C3%A3o-para-gera%C3%A7%C3%A3o-do-Bloco-K220](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022751932-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-BLK-Parametriza%C3%A7%C3%A3o-para-gera%C3%A7%C3%A3o-do-Bloco-K220)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Fiscal
> **Data:** 1 de dezembro de 2021 às 14:36

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
Tempo aproximado para leitura: **00:04:00 min**

**Dúvida**Como parametrizar o Sistema para geração do **Bloco** **K220**.

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.

**S****olução
**O **Registro** **K220 - Outras Movimentações Internas entre Mercadorias** tem o objetivo de informar a movimentação interna entre produtos, ou seja, todas aquelas movimentações não informadas nos registros **K230 – Itens Produzidos – Produção Acabada e K235 – Itens Consumidos – Consumo no Processo Produtivo**.

Devem ser consideradas as movimentações internas de mercadorias de tipos:

-   00 – Mercadoria para Revenda
-   01 – Matéria-Prima
-   02 – Embalagem
-   03 – Produtos em Processo
-   04 – Produto Acabado
-   05 – Subproduto
-   10 – Outros Insumos

**Movimentações internas de Produto Intermediário – tipo 06 e Material de Uso e Consumo – tipo 07** não devem ser escrituradas no Registro K220. Além disso, ajustes de estoque ou consumo interno não são movimentações internas entre mercadorias e, portanto, também não devem ser informados no Registro K220.

São exemplos de movimentações internas a serem geradas no Registro K220:

-   A reclassificação de um produto em outro código em função do cliente a que se destina;
-   A reclassificação de um produto em função do controle de qualidade;
-   O desmanche de uma mercadoria em partes e o sucateamento de matéria-prima ou de produto acabado (gerando o item sucata) entre outros.

Ou seja, são movimentações que normalmente resultam em novo(s) item(ns).

Assim, o Registro K220 se destina a prestar informações sobre a movimentação interna entre mercadorias, onde existe a saída do estoque da mercadoria de origem e a entrada no estoque da mercadoria de destino. 

A quantidade movimentada deve ser expressa **obrigatoriamente** na Unidade de Medida do item de origem.

As informações chave deste registro são os campos: Data da Movimentação Interna **(DT\_MOV)**, Código do Item de Origem **(COD\_ITEM\_ORI)** e Código do Item de Destino **(COD\_ITEM\_DEST).**

[Clique aqui](https://tdn.totvs.com/display/public/LRM/MOV0006_Bloco_K_Registro+K220) para conferir a parametrização a ser realizada e os demais procedimentos.
**Informações adicionais**

-   Fique atento também aos demais parâmetros desse tipo de movimento, que devem ser preenchidos conforme os procedimentos de movimentação interna realizados por sua empresa.
-   Após o tipo de movimento de entrada por Movimentação Interna entre Produtos ter sido parametrizado e liberado para os devidos usuários em **Serviços Globais | Segurança | Usuários | Sistema: Gestão de Estoque, Compras e Faturamento | Anexos | Permissões por Tipo de Movimento,** as movimentações internas poderão efetivamente ser realizadas.
-   Aconselhamos que tanto a saída do produto origem quanto a entrada dos produtos destino sejam efetuadas na mesma data visto que no Registro K220 é gravado apenas uma data, e o sistema gravará a data da entrada.

Dúvidas sobre Permissões por Tipo de Movimento, [clique aqui](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000563827-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-atribuir-permiss%C3%A3o-ao-usu%C3%A1rio-em-Tipo-de-Movimento).
