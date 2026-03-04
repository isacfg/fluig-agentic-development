# Transporte

> **Fonte:** [https://tdn.totvs.com/display/public/LRM/Transporte](https://tdn.totvs.com/display/public/LRM/Transporte)
> **Domínio:** TDN (TOTVS Developer Network)

---

**
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938794/image_preview.png?version=1&modificationDate=1551281400880&api=v2)
Mov -Transporte 1/3**

**Editar Transportadora 1 e Transportadora 2:**

-   Marque os campos para confirmar a edição dos mesmos nos movimentos deste tipo.
-   Confirmando o campo "Transportadora Default" será habilitado para que informe, de acordo com as transportadoras já cadastradas através do menu Cadastro/Transportadoras, qual será a default, ou seja, sempre que incluir um movimento deste tipo, o campo transportadora já será preenchido com a aqui indicada.

**Editar Via de Transporte:**

-   Marque este campo se deseja editar a via de transporte que será utilizada.
-   Informe o campo "Via de Transporte Default" para que seja visualizada ao incluir um movimento.

**Edita Espécie:** Marque este campo se deseja editar a espécie do volume no movimento. Exemplo*:* o Caixa, Contêiner, Barril, etc.

**Editar Quantidade:** Marque este campo se deseja informar as quantidades dos produtos.

**Edita Marca:** Marque este campo se deseja editar a marca do produto.

**
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938794/image_preview.png?version=1&modificationDate=1551281400880&api=v2)
**Mov -** Transporte 2/3**

**Tipo de Frete:**

-   Não Edita: Não utilizará esta informação.
-   Edita: Utilizará esta informação, porém, somente no momento da inclusão do movimento informará se CIF ou FOB.
-   Sempre CIF: O frete sempre será CIF, ou seja, será pago pelo remetente.
-   Sempre FOB: O frete sempre será FOB, ou seja, será pago pelo destinatário.
-   Default CIF: O frete terá como default CIF, ou seja, o campo correspondente será preenchido com CIF, mas, poderá ser alterado.
-   Default FOB: O frete terá como default FOB, ou seja, o campo correspondente será preenchido com FOB, mas, poderá ser alterado.
-   Default Terceiros: O frete terá como default 'Terceiros', ou seja, o campo correspondente será preenchido com 'Terceiros', mas poderá ser alterado.
-   Sempre Terceiros: O frete sempre será 'Terceiros', ou seja, por conta de terceiros envolvidos no Transporte.

***Observação**:* A diferença entre as opções "Sempre CIF" ou "Sempre FOB" e "Default CIF" ou "Default FOB" é que ao indicar "Sempre …", significa que o campo no movimento será preenchido automaticamente e não poderá ser alterado e indicando "Default…", o sistema já preencherá no movimento o campo correspondente e o usuário poderá se desejar, alterá-lo.

**Mensagem CIF, FOB e Terceiros Default:** Informe para os campos descritos acima, qual a mensagem poderá ser impressa na nota, sendo, uma quando o frete for CIF, outra quando for FOB e uma terceira opção quando for 'Terceiros'.

**Usa Contato:**

-   Não Usa: Fica indisponível.
-   Usa Contato Entrega: selecionando esta opção na pasta de complemento/transporte do movimento será possível escolher o contato de entrega do cliente/fornecedor.
-   Usa Contato Cobrança: selecionando esta opção na pasta de complemento/transporte do movimento será possível escolher o contato de cobrança do cliente/fornecedor.
-   Usa Contato Cobrança/Entrega: selecionando esta opção na pasta de complemento/transporte do movimento será possível escolher o contato de cobrança e entrega do cliente/fornecedor.

***Observação**:* Selecionando uma das seguintes opções Usa Contato Entrega; usa Contato Cobrança ou Usa Contato Cobrança/Entrega na inclusão do movimento na pasta complemento/volume/transporte/movimentos será habilitado um campo para que possamos informar o contato.

**Produtos com Peso Zero:**

-   Não Confere: O produto que não estiver com os pesos líquido e/ou bruto no cadastro do mesmo, não serão conferidos.
-   Avisa: O sistema irá conferir se o produto está com os pesos cadastrados e avisará quando o produto tiver peso zero e deixará que inclua o produto no movimento.
-   Barra: Quando no cadastro, o produto estiver com os pesos líquido e/ou bruto igual a zero, o sistema irá barrar a inclusão do mesmo no movimento.

**Editar tipo de entrega:** Marque este campo e será possível editar o tipo de entrega nos movimentos.
*Observações:* Os tipos de entrega serão incluídos no Menu Cadastro/Tabelas Auxiliares/Tipo de Entrega. Utilizando a tabela de Centro de Custo nos itens e setando o campo "Copiar do Movimento", os itens terão o campo destinado ao C. Custo preenchidos com o Centro de Custo informado no Movimento.

**Editar Dados da Placa do Veículo:** Marque este campo para que nos movimentos a placa do veículo que fará o transporte seja informada.

**Utilizar Endereço de Entrega e Coleta como Destinatário:** Marque este campo e será possível editar o endereço de entrega e/ou coleta no movimento. Serão habilitados os seguintes campos no movimento, guia Transporte, Coleta e Entrega: Endereço, Número, Complemento, Bairro, CEP, País, Estado, Município, CNPJ/CPF, Inscrição Estadual, Inscrição Municipal, Nome/Razão Social, Email, Telefone.

**
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938794/image_preview.png?version=1&modificationDate=1551281400880&api=v2)
**Mov -** Transporte 3/3**

**Editar Peso Bruto:** Marque este campo se deseja editar o peso bruto dos produtos.

**Usa Soma / Fórmula:** Soma: marque-o se deseja que o peso bruto dos produtos sejam somados.
***Observações**:* 

-   Se confirmar a soma para quantidades, peso líquido e peso bruto, o sistema já os somará, preencherá os campos correspondentes e não permitirá alterações. 
-   O agrupamento das informações de transporte (Peso Líquido, Peso Bruto e Quantidade) pode ser feito através das opções: Agrupar todos ou Agrupar por Cliente/Fornecedor. 
-   Para agrupar o movimento por Cliente/Fornecedor, na visão de movimentos, os campos devem estar ordenados através da coluna Cód.Cli/For. Serão gerados movimentos que onde as informações de transporte do mesmo Cliente/Fornecedor, serão agrupadas.
-   Esse agrupamento será realizado se as opções Edição Peso Bruto/Edição Peso Líquido/ Edição Quantidade estiverem habilitadas para o movimento destino. As opções Soma Peso Líquido dos Produtos/Soma Peso Bruto dos Produtos não poderão estar habilitadas.
-   Fórmula: marque-o para definir uma fórmula que calcule o peso bruto.

**Editar Peso Líquido:** Se deseja editar o peso líquido dos produtos, marque este campo, caso contrário, deixe desmarcado.
