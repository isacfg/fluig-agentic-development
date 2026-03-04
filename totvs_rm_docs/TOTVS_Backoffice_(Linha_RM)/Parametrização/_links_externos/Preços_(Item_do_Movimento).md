# Preços (Item do Movimento)

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=423938806](https://tdn.totvs.com/pages/releaseview.action?pageId=423938806)
> **Domínio:** TDN (TOTVS Developer Network)

---

**Edição do Preço:** 

-   **Edita:**  O campo preço será apresentado e poderá ser editado;
-   **Mostra:**  O campo preço será apresentado, mas não poderá ser editado manualmente. Contudo, ao alterar a "**seleção de preço**", o campo preço será alterado preenchido com o retorno da opção de preço selecionada.
-   **Não Edita:** O campo preço não será apresentado e não será utilizado.

**Editar Preço Total:** Para habilitar esta opção, deve-se marcar como edita ou mostra o parâmetro “Edição do Preço”. Quando esse parâmetro é marcado, é exibida a opção manter preço total no item de movimento. Marcando esta opção na edição dos itens deste movimento aparecerá o campo “Preço Total” para edição. O preço total do item somente será calculado levando-se em consideração o desconto do item se os parâmetros de tipo de movimento assumirem um dos seguintes valores: “Calcular Preço Total com Desconto” ou “Calcular Preço Total c/ Despesa e Desconto”. Caso o parâmetro de cotação Usar Preço Total no item estiver marcado o preço total da cotação (SEM DESCONTO) será copiado para a ordem de compra. No caso da cotação não utilizar preço total, o valor total do item da ordem de compra poderá ser calculado com o desconto. Selecione da lista de opções o cálculo que o sistema deverá fazer a partir ou para este campo, as opções são: Opção para Seleção - Descrição - Cálculo

-   **Calcula preço unitário:** Ao indicar o preço total, o sistema calculará o preço unitário de acordo com a quantidade (item Preço 
    ![(minus)](https://centraldeatendimento.totvs.com/s/5bn9pn/8804/xgjkrn/_/images/icons/emoticons/forbidden.svg)
     Total / Qtde).
-   **Calcular preço total:** O sistema calculará o preço total do item de acordo com a quantidade e o preço unitário informado para o mesmo (Qtde. 
    ![(error)](https://centraldeatendimento.totvs.com/s/5bn9pn/8804/xgjkrn/_/images/icons/emoticons/error.svg)
     Preço Unitário)
-   **Calcular Preço Total com desconto:** O sistema calculará o preço total do item de acordo com a quantidade, preço unitário e desconto informado para o mesmo (Qtde. 
    ![(error)](https://centraldeatendimento.totvs.com/s/5bn9pn/8804/xgjkrn/_/images/icons/emoticons/error.svg)
     Preço Unitário) 
    ![(minus)](https://centraldeatendimento.totvs.com/s/5bn9pn/8804/xgjkrn/_/images/icons/emoticons/forbidden.svg)
     Valor desconto do item
-   **Calcula Preço Total com despesa:** O sistema calculará o preço total do item de acordo com a quantidade, preço unitário e despesa informada para o mesmo (Qtde. 
    ![(error)](https://centraldeatendimento.totvs.com/s/5bn9pn/8804/xgjkrn/_/images/icons/emoticons/error.svg)
     Preço Unitário) 
    ![(plus)](https://centraldeatendimento.totvs.com/s/5bn9pn/8804/xgjkrn/_/images/icons/emoticons/add.svg)
     Valor despesa do item
-   **Calcular Preço Total com despesa e desconto:** O sistema calculará o preço total do item de acordo com a quantidade, preço unitário, desconto e despesa informada para o mesmo  ((Qtde. 
    ![(error)](https://centraldeatendimento.totvs.com/s/5bn9pn/8804/xgjkrn/_/images/icons/emoticons/error.svg)
     Preço Unitário) 
    ![(plus)](https://centraldeatendimento.totvs.com/s/5bn9pn/8804/xgjkrn/_/images/icons/emoticons/add.svg)
     Valor Despesa do item) 
    ![(minus)](https://centraldeatendimento.totvs.com/s/5bn9pn/8804/xgjkrn/_/images/icons/emoticons/forbidden.svg)
     Valor desconto do item

***Observações**:*

-   Se no campo "preço" estiver indicado "não edita", a opção de edição de preço total não poderá ser habilitada.
-   Se no campo "preço" estiver indicado "Mostra", a opção de edição de preço total de calcular preço unitário não poderá ser selecionada.
-   Marcando a opção "Calcular preço total" no faturamento o sistema recalcula o preço total do item. Se Informarmos um preço total diferente da (qte x preço) este é consistido e refeito no novo movimento. 
-   Ao utilizar cópia por referência:
-   Com o parâmetro Editar Preço Total marcado e Calcular Preço Unitário selecionado, o sistema copia o Preço Total, e o Preço Unitário = 0.
-   Selecionando Calcular Preço Total, Calcular Preço Total com Desconto, Calcular Preço Total com Despesa ou Calcular Preço Total c/Despesa e Desconto, o sistema copia o Preço Unitário, e o Preço Total = 0.
-   Os campos com valores '0' serão calculados ao recalcular o movimento.

**Recalcular preço obtido por fórmula:** Utilizado quando parametrizado para "**Buscar Preço Em**" utilizado "Formula de preço 1" ou "Formula de preço 2"

-   **Recalcular somente quando a condição de pagamento é alterada:** O sistema só irá recalcular o preço quando a condição de pagamento for alterada.
-   **Nunca Recalcular:** O sistema nunca irá recalcular o preço.
-   **Recalcular Sempre ao recalcular movimento:** O sistema irá recalcular o preço sempre que o movimento for recalculado.
-   **Recalcular Sempre ao recalcular movimento, exceto ao reabrir pedido:** Mesmo comportamento do "Recalcular Sempre ao recalcular movimento", porem não recalcula a origem/pedido.

***Observações**:* 

-   Para o correto funcionamento do parâmetro "**Recalcular somente quando a condição de pagamento é alterada**". É necessário que tenha apenas uma opção selecionada em  "Buscar Preço Em", sendo: Fórmula de preço 1 OU Formula de preço 2. Caso tenha mais de uma opção, ao navegar entre as opções, o recalculo também será feito. 
-   Movimento parametrizado como "**Recalcular Sempre ao recalcular movimento**", ao ser faturado para um movimento de destino, qualquer processo feito no movimento de destino que reabra/recalcule a origem, o movimento de origem será recalculado. Caso a formula esteja retornando um valor diferente de quando o movimento foi criado, o preço unitário será recalculado com o novo valor.
-   Movimento parametrizado como "**Recalcular Sempre ao recalcular movimento, exceto ao reabrir pedido:**", ao ser faturado para um movimento de destino, qualquer processo feito no movimento de destino que reabra/recalcule a origem, o movimento de origem **NÃO** será recalculado. Caso a formula esteja retornando um valor diferente de quando o movimento foi criado, o preço unitário **NÃO** será recalculado com o novo valor.

**Preço de Tabela:** Poderá selecionar um dos 5 preços do cadastro do produto, na inclusão do movimento o sistema irá guardar o valor do preço parametrizado num campo do item de movimento incluído.

**Aceitar Preço zero:** Marque este campo se deve ser permitido a indicação de preço igual a zero para os itens do movimento, caso contrário desmarque este campo.

-   Desconsiderar preço do movimento de origem: Marcando este parâmetro o preço dos itens do movimento de origem será ignorado, sendo levado em consideração o parametrizado no movimento destino.

**Buscar Preço em:**

-   Nenhum: para não buscar nenhum preço.
-   Preço 1, Preço 2, Preço 3, Preço 4 e Preço 5: Estes representam os preços cadastrados nos parâmetros, através do menu Opções-Parâmetros Gerais/Tabelas-Produto. A descrição de cada uma destas opções serão as mesmas indicadas no menu citado.
-   Custo Unitário: o preço será o custo unitário do produto no local da movimentação.
-   Custo Médio local: o preço será o custo médio do produto no local da movimentação.
-   Custo Médio Filial: o preço será o custo médio do produto na filial da movimentação
-   Custo Médio Geral: O preço será o custo médio geral do produto.
-   Última Compra: buscar preço na última compra, serão considerados apenas movimentos do tipo 1.2.XX e que afetem o estoque.
-   Última Compra na filial: buscar preço na última compra da filial, serão considerados apenas movimentos do tipo 1.2.XX e que afetem o estoque
-   Custo Repos. A e B: o preço será o custo de reposição A ou B calculado para o produto no local da movimentação.
-   Custo Repos. A e B Geral: o preço será o custo de reposição A ou B geral do produto.
-   Custo Movimento Relacionado: o preço será o o valor unitário do item de movimento origem. Observação: Tipos de movimento que utilizam cópia por referência não podem estar parametrizados para buscar preço em custo movimento relacionado.

Ao configurar **Buscar Preço em** com **Custo Unitário**, **Custo Médio Local, Custo Médio Filial, Custo Médio Geral, Custo Repos. A e B, Custo Repos. A e B Geral** e/ou **Custo Movimento Relacionado**, na tela de Item de Movimento o campo **Preço Unitário** irá aplicar as casas decimais definidas no parâmetro geral de **Casas Decimais Custos**. Este comportamento foi aplicado a partir do patch da Biblioteca RM 12.1.2306.189 e superiores - Exceto quando o produto foi configurado individualmente para utilizar uma quantidade diferente de casas decimais.
