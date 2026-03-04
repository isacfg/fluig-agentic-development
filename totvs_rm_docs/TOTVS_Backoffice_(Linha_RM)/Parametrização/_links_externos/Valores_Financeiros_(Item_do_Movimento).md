# Valores Financeiros (Item do Movimento)

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=423938775](https://tdn.totvs.com/pages/releaseview.action?pageId=423938775)
> **Domínio:** TDN (TOTVS Developer Network)

---

**Utiliza Desconto:** Marque esta opção se os itens do movimento poderão ter desconto, caso contrário, desmarque o campo. Marcando, ou seja, confirmando o desconto, os seguintes campos estarão habilitados para preenchimento:

**Nome do Desconto:** Informe o nome que o sistema deverá assumir para o campo.

**Tipo do Desconto:**

-   Percentual: se o valor do desconto deverá ser informado em percentual.
-   Valor: se o desconto deverá ser informado em valor.
-   Ambos: se utiliza percentual e valor.

**Afeta Desconto do Movimento:** Informe se o desconto do item irá afetar o desconto do movimento.

**Cópia do Percentual de Desconto do produto para o item:** Marcando esta opção o percentual de desconto informado no produto será levado como default na inclusão do item do movimento.
***Observações**:*

-   A opção "Copia do Percentual de Desconto do produto para o item" somente poderá ser utilizada se o "Tipo do Desconto" for "Percentual" ou "Ambos".
-   Restrições para o cálculo do valor do desconto do movimento de devolução:
-   Os tipos de movimento de origem e destino devem editar o desconto.
-   O preço unitário do item de destino deve ser igual ao preço unitário do item original.

**Desconto Máximo para produto (%):** Informe se desejar, um percentual de desconto máximo para o produto neste tipo de movimento.

**Desconto Máximo para serviço (%):** Informe se desejar, um percentual de desconto máximo para serviço neste tipo de movimento.

**Utiliza Despesas:**  Marque este campo se os itens do movimento deverão ter acréscimos, caso contrário desmarque. Marcando este campo, os seguintes campos estarão habilitados para preenchimento.

**Nome da Despesa:** Informe um nome para o campo.

**Tipo da Despesa:** Indique se as despesas serão informadas em percentual, valor ou ambos (percentual e valor).

**Afeta Despesa do Movimento:** Marque este campo se as despesas afetarão o movimento, caso contrário desmarque.
***Observação**:* Os descontos e despesas desta pasta referem-se a cada item de movimento, ou seja, para cada item incluído são informados na pasta Identificação itens na mesma janela que incluímos os itens do movimento o valor de descontos/despesas para o mesmo.

**Incluir valor do desconto para cálculo da despesa:** Se para o item parametrizamos que iremos utilizar descontos e despesas, marcando esta opção, o sistema para o cálculo do percentual ou valor indicado no campo despesas utilizará a seguinte base de cálculo:
((Quantidade do item \* Preço Unitário) - Desconto)
Caso esta opção esteja desmarcada, a base de cálculo será:
(Quantidade do item \* Preço Unitário)
Exemplo*:*
Quantidade = 10
Preço unitário = 100
Se indicou que o desconto para o item será de 10%, o valor que o sistema calculará para este desconto será:
(10 \* 100) \* 10% = 100,00
Se indicou que a despesa para o item será de 8%, o valor que o sistema calculará será:
Com o parâmetro desabilitado: (10 \* 100) \* 8% = 80,00
Com o parâmetro habilitado: ((10 \* 100) - 100,00 (desconto)) \* 8% = 72,00

**Nome Valores Opcionais 1 e 2:** Através deste campo poderá informar o nome dos valores opcionais 1 e 2.

**Tipo de Uso dos Valores Opcionais 1 e 2:** Habilite estes campos, caso queira inclui valores calculados por fórmulas no itens de movimento. Estes campos podem ser usados para desconto ou para despesa. Em cada um existe um campo para fórmula e outro indicando se o valor será despesa, desconto, outros. Estes campos não influenciam no desconto ou despesa do item, são independentes. Entretanto se a opção "Afeta Desc. do Mov." estiver parametrizada, o valor opcional do item que for desconto, entrará no cálculo do desconto do movimento, o mesmo vale para a despesa. Estes campos opcionais do item terão três opções:

-   Não Usar.
-   Usar como desconto: terá efeito como descrito na discussão;
-   Usar como despesa: terá efeito como descrito na discussão;
-   Outros: poderá usar este valor em outras fórmulas.

**Fórmula dos Valores Opcionais 1 e 2:** Escolha uma fórmula para ser utilizada.

**Retenção:** Utilizar esse parâmetro para que a retenção possa ser controlada a nível de item. Este parâmetro possui as seguintes opções:

-   Não Usar: não usa retenção no item.
-   Percentual: o valor da retenção deverá ser informado em percentual.
-   Valor: a retenção deverá ser informada em valor.
-   Ambos: utiliza percentual e valor.

**Dedução:** Utilizar esse parâmetro para que a dedução possa ser controlada a nível de item.Este parâmetro possui as seguintes opções:

-   Não Usar: não usa dedução no item.
-   Percentual: o valor da dedução deverá ser informado em percentual.
-   Valor: a dedução deverá ser informada em valor.
-   Ambos: utiliza percentual e valor.
