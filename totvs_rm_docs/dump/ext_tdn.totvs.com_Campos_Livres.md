# Campos Livres

> **Fonte:** [https://tdn.totvs.com/display/public/LRM/Campos+Livres](https://tdn.totvs.com/display/public/LRM/Campos+Livres)
> **Domínio:** TDN (TOTVS Developer Network)

---

**
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938264/image_preview.png?version=1&modificationDate=1551211402550&api=v2)
Campos Livres 1/2**

**Editar Campo Livre 1, 2, 3:** O sistema permite a utilização de 3 (três) campos livre para cada tipo de movimento. Marque aquele(s) que deseja utilizar. Confirmando a utilização, os campos seguintes serão habilitados para que informe:

**Nome:** Informe o nome que o sistema deverá assumir para o campo indicado.

**Valor Default:** Informe o valor default para o campo livre, o valor aqui informado sempre preencherá o campo, porém poderá ser alterado. Este campo é alfanumérico.
***Observação**:* Utilize os campos livres quando achar necessário informar para o Tipo de Movimento, dados adicionais.

**Editar Mensagem 1, 2:** O sistema permite a utilização de até 2(duas) mensagens para cada tipo de movimento, estas poderão ser impressas na nota, ou em qualquer outro relatório. Marque o campo se desejar informar uma mensagem para o tipo de movimento, feito isso, o campo seguinte "Mensagem Default" será habilitado para que informe, se desejar, uma mensagem que já deverá estar cadastrada em Cadastro/Tabelas Auxiliares/Mensagem, como default.
***Observação*:** Através deste botão será possível visualizar a descrição da mensagem no movimento. Este somente estará disponível se os campos 'Editar Mensagem 1' e 'Editar Mensagem 2' estiverem parametrizados.

**Editar Observação:** Marque esta opção, se desejar editar o campo "Observação" no tipo de movimento, feito isso, informe no próximo campo uma observação default.

**Editar Classificação do Movimento:** Marque esta opção se deseja classificar o movimento de acordo com a tabela cadastrada através do menu Cadastro | Tabelas Auxiliares | Classificações de Movimento .
***Observações**:* 

-   Além das 5 tabelas de classificação já existentes no sistema, pode-se utilizar também esta.
-   Para copiar da Solicitação de Compra para a Ordem de Compra a Classificação do Movimento através de Cotação, é necessário configurar o parâmetro: Parâmetros de Cotações/Geral e habilitar: "Cotar Itens de uma única solicitação de compra".
-   Caso se utilize a opção de incluir o item de uma cotação em ordem de compra gerada anteriormente, o sistema manterá a classificação que estiver nesse movimento.

**
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938264/image_preview.png?version=1&modificationDate=1551211402550&api=v2)
Campos Livres 2/2**

**Edição de Histórico:**

-   Não Edita: Fica indisponível.
-   Edita: Marque este campo se desejar informar um histórico para o movimento. 

***Observação**:* No caso de nota fiscal de devolução o sistema só vai copiar o histórico dos itens da nota fiscal se no campo "Usar Devolução" estiver setado como "Usar devolução de Vários Movimentos".
Edita obrigatoriamente: Caso este esteja configurado como obrigatório e não seja preenchido no momento de alguma edição ou inclusão de movimentos deste tipo, no momento de salvar, o sistema informará ao usuário que o preenchimento do campo histórico é obrigatório.

**Tipo de Histórico:**

-   Curto: Marcando esta opção, o histórico a ser informado no movimento poderá conter no máximo 255 dígitos.
-   Longo: Marcando esta opção, o histórico a ser informado no movimento poderá conter um número indeterminado de dígitos, dependendo da capacidade de armazenamento de seu equipamento.

***Observações**:* Após a definição de utilização de histórico "Longo", não será possível o retorno à opção para histórico "Curto", já a alteração do histórico curto para o longo é possível, portanto, aconselhamos primeiro definir o trabalho utilizando o histórico curto, se posteriormente houver necessidade de se informar para o movimento, históricos com mais de 255 dígitos, isto poderá ser revertido. A utilização de histórico curto ocupará menos espaço em sua base de dados. Os campos desta pasta, que forem confirmados a utilização, estarão no movimento, na pasta Observações.

**Copiar mensagem para Histórico:** Se esta opção estiver marcada e algum campo, como por exemplo, desconto, despesas, frete, etc., estiver com uma mensagem indicada como default, estas serão todas transportadas para o campo Histórico do movimento.
