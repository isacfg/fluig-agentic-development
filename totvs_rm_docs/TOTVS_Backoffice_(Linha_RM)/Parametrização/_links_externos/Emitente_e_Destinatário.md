# Emitente e Destinatário

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=423938089](https://tdn.totvs.com/pages/releaseview.action?pageId=423938089)
> **Domínio:** TDN (TOTVS Developer Network)

---

**Emitente:**  Informe qual será o emitente dos movimentos deste tipo, as opções são:

-   Empresa: se o emitente for sua empresa.
-   Cliente: se for o cliente.
-   Fornecedor: se for o fornecedor.

**Edição da Filial de Emissão:** Se a filial do movimento é "Edita" ou "Mostra". Se a filial for "Edita", então o local de estoque dever ser "Edita". Caso a filial seja "Mostra", o local de estoque pode ser "Edita" ou "Mostra". Em ambos os casos, "Edita" ou "Mostra", podem ser informados uma filial e local de estoque default.

**Edição do local de Emissão:** Informe "Edita" se o local de estoque do movimento poderá ser acessado e informado pelo usuário, "Mostra" se o campo somente será mostrado e não poderá ser acessado. Neste caso, os campos "filial" e "Local de Estoque" serão preenchidos com os dados informados nos campos pode afetar a performance na inclusão do movimento e em sua alteração.

**Filial:** Informe qual a filial destino deste movimento.

**Local de estoque**: Informe o local de estoque para os movimentos deste tipo.
***Observação**:* Esta informação somente será visível se o movimento aceitar itens do tipo: produtos ou ambos. No caso de itens do tipo serviço o campo somente será visualizado se nos Parâmetros Gerais/Pasta Custos estiver configurado para Consistir Saldo de Serviços.

**Destinatário:** Informe qual será o destino do documento gerado pelo movimento, as opções são: Empresa, Cliente ou Fornecedor.
***Observação**:* Se na opção anterior informou "Empresa", os campos abaixo são apresentados:

**Edição do Local de Destino:** Informe "Edita" se for permitido o acesso a este campo no movimento ou "Mostra", neste caso o campo será apresentado, mas, não poderá ser editado.
***Observações**:*

-   Após configurar o destinatário como empresa, será possível selecionar este campo para visualização através da opção Configurar Colunas, na visão de movimentos.
-   Se na opção "Emitente" indicou Cliente ou Fornecedor, os seguintes campos serão apresentados:

**Cliente/Fornecedor Emitente Default:** Informe o cliente/fornecedor default do movimento, ou seja, o campo cliente/fornecedor na inclusão do movimento já virá preenchido com o informado neste campo.
Exemplos*:*
\- Se o tipo de movimento for do grupo 1.1 (Pedido de Compra) o emitente é a Empresa, pois, a empresa não está concluindo uma compra e sim fazendo um pedido onde o destinatário pode ser a própria empresa, no caso de pedidos de alguma filial ou de algum departamento para o departamento de compras, ou para um fornecedor, onde a compra ainda não foi concluída, a empresa apenas fez uma solicitação ao fornecedor.
\- Se o tipo de movimento for do grupo 1.2 (Compras) o emitente é o fornecedor, pois, é ele quem emitirá a nota fiscal do movimento e o destinatário é a empresa, pois, o destino da nota é a empresa.
\- Se o tipo de movimento for do grupo 2.2 (Vendas) o emitente é a empresa, pois, é ela quem emitirá a nota fiscal do movimento e o destinatário é o cliente que efetuou a compra.
\- Se o tipo de movimento for do grupo 3.1 (Transferências) o emitente é a empresa e o destinatário também, pois, este tipo de movimento controlará a transferência de mercadorias de uma filial e de um local de estoque para outra filial e local dentro da mesma empresa.
***Observação**::* O controle para emitente/destinatário no sistema funciona da seguinte forma:
\- Se o emitente for cliente/fornecedor, este será informado no movimento, no campo "cliente/fornecedor". Neste caso o destinatário será a empresa, não sendo este dado informado no movimento.
\- No caso do emitente ser a empresa, ele não aparecerá no movimento, e sim o destinatário que pode ser cliente/fornecedor ou a própria empresa principalmente no caso de transferências.
\- Este controle tem grande importância no controle de numeração dos movimentos, garantindo que nunca haja dois movimentos com o mesmo número e série para um único emitente.
\- Na inclusão de movimentos internos, cujo o tipo de movimento foi parametrizado como destinatário a empresa, na janela de edição do movimento foi disponibilizado uma nova opção para informar por código a filial destino. A informação da filial poderá ser pelo código e/ou pelo nome fantasia.

**Edição do Cliente/Fornecedor:** Informe como será a edição dos campos código, descrição e CNPJ do cliente/fornecedor no movimento:

-   Edita: se os campos poderão ser editados.
-   Mostra: se os campos descritos não poderão ser editados, eles, portanto só serão mostrados e a edição dos mesmos será inibida.
-   Edita somente CNPJ: Neste caso, no movimento somente o campo CNPJ do cliente/fornecedor poderá ser editados, os campos código e descrição apenas serão mostrados e estes serão preenchidos de acordo com o cli/for selecionado através do CNPJ.

**Nome do Local de Saída:** Dê uma descrição para o local de saída/entrega.  Exemplo**:** 

-   Local de Saída, neste caso, você indicará de onde (filial e local de estoque) está saindo os produtos vendidos.
-   Local de Entrega, neste caso, você indicará onde os produtos vendidos serão entregues.

**Edição do Local de Saída:** Informe "Edita", se este campo deverá ser apresentado no movimento e desta forma, deverá ser editado ou "Não Edita", neste caso, este campo não será apresentado no movimento.

**Consiste Fornecedor:** As opções são:

-   • Não Consiste.
-   • Base CNPJ: Selecionando esta opção ao recebermos um movimento gerando outro tipo de movimento só será permitida a seleção de clientes/fornecedores que possuam a mesma base de CNPJ, exemplo:

Ao ser incluído um movimento 2.1.01 onde o CNPJ do Cliente é – 68.045.952/0001-54 gerando outro movimento tipo 2.2.01, só aparecerá fornecedores que possuam a mesma base, ou seja, 68.045.952. 
***Observação**:* Para que esta consistência seja feita é preciso inicialmente setar o cliente/fornecedor como edita.
