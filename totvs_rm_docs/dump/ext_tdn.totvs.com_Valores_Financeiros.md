# Valores Financeiros

> **Fonte:** [https://tdn.totvs.com/display/public/LRM/Valores+Financeiros](https://tdn.totvs.com/display/public/LRM/Valores+Financeiros)
> **Domínio:** TDN (TOTVS Developer Network)

---

**
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938774/image_preview.png?version=1&modificationDate=1551282925540&api=v2)
Valores Financeiros 1/4:**

**Descontos:**

-   Marque este campo se for utilizar descontos no tipo de movimento. Caso contrário, deixe desmarcado.
-   Marcando este campo, os seguintes serão acessados:
    -   Tipo de Desconto: Informe se o desconto será informado em Valor, Percentual ou Ambos.
    -   Desconto Máximo (%): Informe qual o percentual máximo de desconto para os movimentos deste tipo.
    -   Mensagem Padrão: Informe o número da mensagem padrão para desconto, que poderá ser emitida na nota.

***Observação**:* As mensagens já deverão estar cadastradas em Cadastro/Tabelas Auxiliares-Mensagens.

**Liberar desconto máximo por senha:** Habilitando esta opção e informando um percentual máximo de desconto, o sistema verificará no momento em que salvar o movimento se o valor do desconto é maior que o permitido. Caso seja maior, o usuário Supervisor deverá liberar a inclusão do movimento digitando uma senha.

**Despesas:** 

-   Marque este campo se for informar nos movimentos deste tipo, valor referente às despesas.
-   Marcando este campo, os seguintes serão acessados:

**Tipo de Despesa:** Informe se as despesas serão informadas em: Valor, Percentual ou Ambos.

**Mensagem Padrão:** Informe o número da mensagem padrão para despesa, que poderá ser emitida na nota.
***Observação**:* As mensagens já deverão estar cadastradas em Cadastro/Tabelas Auxiliares-Mensagens.

**Seguro:** Marque este campo se editar o campo referente a seguro dos movimentos deste tipo. Caso contrário deixe desmarcado.

**Tipo de Seguro:** Valor, Percentual e Ambos

**Seguro Default:** Informe neste campo um valor default para o seguro.

**Frete:** Marque este campo se deseja editar dados sobre frete. Caso contrário, deixe desmarcado.

**Tipo de Frete:** Informe como será indicado o valor do frete, em: Percentual, Valor e Ambos

**Valor Extra1 e Valor Extra2:** Estas opções possibilitam que acrescente dois campos de valores ao movimento, se desejar utilizar algum destes ou os dois, marque-os. Feito isto, o campo seguinte será disponibilizado para que informe se o valor em questão deverá ser informado em: Percentual Valor e Ambos.

**Edita Troco:** Com esta opção ativa, aparecerá um botão "troco" no movimento, onde você terá que informar qual o valor recebido deste movimento, pois este valor menos o valor líquido do movimento nos trará o troco que terá que ser entregue.

**Permitir Valor Financeiro maior que o Valor Total do Movimento:** Marcando este campo será permitida a inclusão de Movimentos cujo Valor Financeiro seja superior ao Valor Total do Movimento.

**
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938774/image_preview.png?version=1&modificationDate=1551282925540&api=v2)
Valores Financeiros 2/4**

**Fórmulas:** Aqui define-se as fórmulas dos campos de totais que aparecem no final do movimento. São elas:

-   Fórmula do Valor Bruto
-   Fórmula do Sub Total
-   Fórmula do Valor Líquido
-   Informe para cada um dos campos de fórmulas, aquela correspondente para o cálculo do valor descrito. As fórmulas já deverão estar cadastradas em Cadastro/Fórmula.

***Observação**:* O preenchimento dos campos de fórmula dos valores bruto, sub total e líquido é obrigatório, o sistema não permite a inclusão de um tipo de movimento sem a informação das mesmas.  Ao realizar a conversão de moeda, no recebimento do movimento, será aberta a janela "Informe data base para conversão da moeda".

**Nome do Sub-Total:** Informe a descrição para o sub-total.

**Valores:**

-   Informe no primeiro campo "Moeda-Base" a moeda base para conversão dos movimentos do tipo que está incluindo.
-   No segundo campo, informe a "Data Base" para a conversão dos mesmos.
-   As opções são: Data de Emissão, Data de Saída, Data Extra 1, Data Extra 2 e Data Sistema.

**Edita Moeda:**

-   Edita: selecionando essa opção o usuário poderá editar a moeda no movimento e visualizá-la na visão, através da coluna Moeda do Valor Liq., do ícone Configurar Coluna.
-   Mostra: selecionando essa opção a moeda poderá apenas ser visualizada na visão do movimento, através da coluna Moeda do Valor Liq., do ícone Configurar Coluna.
-   Não Edita: selecionando essa opção a moeda não poderá ser visualizada e nem editada no movimento.

***Observação**:* Após a inclusão de movimento, se for alterado a moeda com itens já incluídos, o sistema não irá refazer o preço mesmo que o movimento seja recalculado, portanto é necessário definir a moeda antecipadamente para que o preço parametrizado seja informado corretamente. Se a moeda do movimento de destino for diferente do movimento de origem, a moeda será convertida.

**Consiste Valor Líquido:** Marcando este campo, ao incluir um movimento deverá ser informado o valor líquido do mesmo para que seja consistido com o valor calculado pelo sistema. Ao faturar um movimento para um tipo de movimento que esteja com esta opção marcada, o sistema levará o campo em branco.

***Observação**:*** Não é possível utilizar os parâmetros  "**Consiste Valor Líquido**" e "**Gera Movimento de Compra/Venda**" simultaneamente no Tipo de Movimento. Essa validação e realizada no movimento de Origem.

**Desconto Condicional e Despesa Condicional:** Através de fórmula poderá calcular o Desconto e a Despesa condicional do movimento. 

***Observações**:*

-   Após incluir um movimento que está configurado para calcular o valor de desconto e despesa condicional e que possui a natureza de operação configurada para calcular os valores condicionais, ao escriturá-lo, o sistema irá levar o valor destes para o lançamento fiscal na pasta valor da mercadoria.  Este valor não fará parte da base de calculo do ICMS, mas afetará o valor contábil do lançamento fiscal do TOTVS Gestão Fiscal.
-   Estes valores somente serão visíveis através de consulta SQL pela tabela TMOV os campos VALORDESCCONDICIONAL , VALORDESPCONDICIONAL no TOTVS Gestão de Estoques, Compras e Faturamento.
-   Os valores do desconto e despesa condicional do movimento, não poderão participar da formação de base dos cálculo de tributos, somente do valor liquido.

**Desconto Condicional do item e Despesa Condicional do item:** Através de fórmula poderá calcular o Desconto e a Despesa condicional do item de movimento. 
***Observações**:* Após incluir um movimento que está configurado para calcular o valor de desconto e despesa condicional do item e que possui a natureza de operação configurada para calcular os valores condicionais, ao escriturá-lo, o sistema irá levar o valor destes para o lançamento fiscal na pasta valor da mercadoria.
Este valor não fará parte da base de calculo do ICMS, mas afetará o valor contábil do lançamento fiscal do TOTVS Gestão Fiscal.
Estes valores somente serão visíveis através de consulta SQL pela tabela TITMMOV os campos VALORDESCCONDICONALITM, VALORDESPCONDICIONALITM, no TOTVS Gestão de Estoques, Compras e Faturamento.
Os valores do desconto e despesa condicional do item do movimento, não poderão participar da formação da base de cálculo de tributos, somente do valor líquido.

**
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938774/image_preview.png?version=1&modificationDate=1551282925540&api=v2)
Valores Financeiros 3/4**

**Somar Valores ao Faturar:** Indica quais os campos das tabelas de Movimento e item de Movimento devem ser somados quando dois ou mais movimentos do 1.1 ou 2.1 estiverem sendo faturados. Exemplo, se o campo frete estiver selecionado, os valores do campo frete dos movimentos que estiverem sendo faturados serão somados, e este valor será atribuído ao campo frete do movimento destino.

**
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938774/image_preview.png?version=1&modificationDate=1551282925540&api=v2)
Valores Financeiros 4/4**

Sequencia de Cálculo do Movimento: Através das opções disponível é possível definir a ordem de calculo do valor financeiro que são:

-   Preço por fórmula
-   Valores Financeiros dependentes do Item (campos Etapa 35 - Item - Valores Financeiros 1/2 e Etapa 36 -  Item - Valores Financeiros 2/2)
-   Valor Bruto
-   Valores Financeiros do Movimento  (campos Etapa 12 - Movimento - Valores Financeiros 1/4 e Etapa 13 - Movimento -  Valores Financeiros 2/4 )
-   Rateio Valores Financeiros para Item de Movimento
-   Valor do Serviço para Nota Fiscal Eletrônica
-   Tributos do Item de Movimento
-   Tributos do Movimento
-   Outros Valores por fórmula
-   Valor do Documento



**IMPORTANTE:**
A definição da ordem de cálculo é de responsabilidade do cliente, baseando se na regra de negocio de cada empresa.
Desta forma, a sequencia deve ser informada de forma que os valores necessários para o cálculo,
já tenham sido calculados no cálculo anterior.

**Exemplo:**
Caso deseje que os valores financeiros (frete, desconto, despesa e etc) sejam considerados no cálculo do tributo.
O cálculo destes valores devem ser feitos antes de calcular os tributos.
Caso sejam feitos depois, o tributo será calculado sem tais valores, uma vez que ainda não foram calculados.
