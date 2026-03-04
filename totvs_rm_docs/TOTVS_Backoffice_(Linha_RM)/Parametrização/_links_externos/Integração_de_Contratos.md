# Integração de Contratos

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=423938836](https://tdn.totvs.com/pages/releaseview.action?pageId=423938836)
> **Domínio:** TDN (TOTVS Developer Network)

---

Esta opção tem a finalidade de vincular um item de movimento a um contrato ou a um item de contrato. Escolha, na lista de opções a desejada:

-   **Não relacionar**: Os itens incluídos para o tipo de movimento não serão relacionados a nenhum contrato.
-   **Editar Contrato (somente do cliente)**: Poderá relacionar um movimento a um determinado contrato deste que seja do mesmo Cliente.
-   **Editar Contrato (Todos os Contratos)**: Poderá relacionar um movimento a um determinado contrato.

Exemplo*:*  Vamos supor que tem um contrato cadastrado através do menu Contratos / Manutenção de Contratos , e alguma despesa extra contrato deve ser cobrada do cliente, porém deve ser faturada separadamente, desta forma, ao informarmos que nos itens deste tipo de movimento o contrato poderá ser editado, significa que ao incluirmos o item, ao indicarmos o número do contrato saberemos que aquela despesa, cobrada do cliente é referente a despesas daquele contrato.

**Relacionar com item de Contrato**: Escolhendo esta opção poderá incluir movimentos referentes a um contrato diretamente, ou seja, através do menu Movimentos, desta forma, ao indicar o item no movimento, você informará o período inicial e final de faturamento deste, assim, ao faturar um contrato através do menu Contratos / Faturamento por Lote, o sistema verificará se para o cliente, para a data de faturamento já existe um movimento com aquele item de contrato.

**Editar contrato origem destino**: Esta opção só aparecerá quando o tipo de movimento for do grupo 3.2 (Transferência de Faturamento). Escolhendo esta opção, o sistema apresentará no momento da inclusão do item no movimento dois campos para que informe a origem do contrato a que pertence o produto e o contrato destino.

**Editar item de Contrato por Filial**: Escolhendo esta opção após de faturar um contrato, o sistema irá levar para o item do movimento da filial corrente o código do contrato. Caso venha desdobrar o movimento este código será mantido no movimento de origem e no desdobramento.
