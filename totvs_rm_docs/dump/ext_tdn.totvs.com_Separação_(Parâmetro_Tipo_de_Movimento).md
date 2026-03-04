# Separação (Parâmetro Tipo de Movimento)

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=423938739](https://tdn.totvs.com/pages/releaseview.action?pageId=423938739)
> **Domínio:** TDN (TOTVS Developer Network)

---

**Usa Separação:**  Marcando este parâmetro para movimentos do tipo compra e venda, o módulo de separação estará habilitado. Este recurso é uma forma de distribuição de mercadoria entre cliente/fornecedor, fornecedor/cliente, através de leitura de código (leitor de código de barras).
Este movimento não deverá aceitar ser parametrizado com separação de lote e utilizar grade simultaneamente, pois o sistema não trabalha com separação de movimentos que contenham itens de grade. O item de movimento poderá ser identificado pelo código do produto, mas o código usado na separação poderá ser o código EAN ou código auxiliar, etc.

**Formato do Código da Separação:** Para ser possível a utilização deste recurso, também deverá ser preenchido com o formato do código EAN (preenchido com o código de número 1), o campo Formato código separação.

**Código do Lote:** No mesmo código informando na separação pode estar o código que identifica o produto e o código que identifica o lote (número do lote). Assim pode ser separada a quantidade de um lote específico do item de movimento. Exemplo*:*

-   O código do produto é 0000001 e para o item de movimento com este produto foram informados três lotes, o 01, 02 e 03. Se eu informar na tela de separação o valor 000000102 para o código de separação significa que quero separar o lote 02 do item com produto 0000001. Para isso o parâmetro "Posição Inicial do Código do lote" deverá ser 8, pois o número do lote começa na posição 8 do valor informado (os 7 primeiros caracteres são do código do produto); e o parâmetro "Tamanho do código do lote" deverá estar com 2, pois o número do lote tem dois caracteres. O número do lote somente poderá ficar no final do código informado na separação. Se o código do produto é 0000001 e o número do lote 02 o valor informado poderá ser somente 000000102, outra combinação (como o número do lote no início ou no meio do código) não é permitida.

**Código da Grade:** No mesmo código informando na separação pode estar o código que identifica o produto e o código que identifica a Grade Numerada (número da grade). Assim pode ser separada a quantidade de um determinado produto com a Grade específica do item de movimento. Exemplo*:*

-   O código do produto Sapato é 0000001 e para o item de movimento com este produto foram informados uma Grade Numerada, cujo código é P38, P39 e P40. Se informar na tela de separação o valor 0000001P40 para o código de separação significa que quero separar o sapato de cor preta número 40 do item com produto 0000001. 
-   Para isso o parâmetro "Posição Inicial do Código da Grade" deverá ser 8, pois o numero da Grade começa na posição 8 do valor informado (os 7 primeiros caracteres são do código do produto); e o parâmetro "Tamanho do código da grade" deverá estar com 3, pois o número da grade tem três caracteres. O número da grade somente poderá ficar no final do código informado na separação. Se o código do produto é 0000001 e o número da grade P40 o valor informado poderá ser somente 00000010P40, outra combinação (como o número da grade no início ou no meio do código) não é permitida.

***Observações**:* Na parametrização do tipo de movimento que irá utilizar o processo de Separação não é permitido configurar itens repetidos. É possível permitir/proibir acesso aos usuários para 'Colocar Movimentos em Separação' e 'Iniciar Separação', através do cadastro de perfil (Cadastros/Segurança/Perfis/Pasta Acesso a Menus).
