# Tabelas (Parâmetros do Movimento)

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=423938750](https://tdn.totvs.com/pages/releaseview.action?pageId=423938750)
> **Domínio:** TDN (TOTVS Developer Network)

---

**
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938750/image_preview.png?version=1&modificationDate=1551280466130&api=v2)
Tabelas de Classificação**

**Editar Tipo:** Ao marcar confirmando a utilização, os seguintes campos serão acessados:

-   Tipo Default: Informe qual o código da tabela correspondente será a default.
-   Obrigatório: Marque este campo se o preenchimento referente à tabela em questão deverá ser obrigatório, caso contrário, deixe desmarcado.

**Editar Classe:** Ao marcar confirmando a utilização, os seguintes campos serão acessados:

-   Tipo Default: Informe qual o código da tabela correspondente será a default.
-   Obrigatório: Marque este campo se o preenchimento referente à tabela em questão deverá ser obrigatório, caso contrário, deixe desmarcado.

**Status do produto:** Ao marcar confirmando a utilização, os seguintes campos serão acessados:

-   Tipo Default: Informe qual o código da tabela correspondente será a default
-   Obrigatório: Marque este campo se o preenchimento referente à tabela em questão deverá ser obrigatório, caso contrário, deixe desmarcado.

**
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938750/image_preview.png?version=1&modificationDate=1551280466130&api=v2)
Tabelas de Funcionário**

**Relacionar Funcionário 1 com Usuário do Login:** Marque este campo se desejar habilitar o relacionamento entre o usuário de login com o funcionário 1 do movimento. Durante a edição da movimentação, o campo relativo ao funcionário 1 é automaticamente calculado, não sendo permitida a sua edição. Para relacionar um funcionário a um usuário, este deve estar associado ao funcionário no cadastro de Pessoa, em Cadastros/Tabelas Auxiliares/Pessoa. 
*Observações:*

-   Quando o parâmetro "Relacionar Funcionário 1 ao usuário de login" estiver marcado, será verificado se o usuário logado (quem está efetuando a cópia) possui um funcionário ATIVO associado. Se não houver funcionário ativo associado, o campo "Funcionário 1" não sendo permitido a sua edição. 
-   Quando o usuário logado possuir um funcionário ativo associado, este funcionário será copiado para o campo 'Funcionário 1', do movimento de destino.
-   Quando o parâmetro "Relacionar Funcionário 1 ao usuário de login" não estiver marcado, o sistema copiará o funcionário do movimento de origem para o movimento destino.

**Edição Funcionário:** Informe o tipo de edição para o funcionário, as opções são:

-   Edita: o campo funcionário será apresentado no movimento e poderá ser editado.
-   Mostra: o campo funcionário será apresentado, porém, não poderá ser editado, desta forma, este já será preenchido o funcionário indicado no campo a seguir.
-   Não edita: o campo não será utilizado para este tipo de movimento.
-   Edita Obrigatoriamente: não será permitida a inclusão do movimento sem que se informe o funcionário.

**Título do Funcionário:** Informe o nome que o sistema deverá assumir para este campo nos movimentos deste tipo.

**Funcionário Default:** Informe o funcionário default, ou seja, sempre que se incluir um movimento deste tipo, o campo já será preenchido automaticamente.

**Edição Comissão Funcionário:**

-   Edita: para ter acesso ao campo comissão do funcionário e este ser editado pelo operador.
-   Mostra: o campo comissão será apresentado porém, não poderá ser acessado.
-   Não edita: o campo comissão não será utilizado para movimentos deste tipo.

***Observação**:* Quando essa opção estiver selecionada o campo de Edição de Comissão do Funcionário será desabilitado e apresentado como Mostra.

**% Comissão Funcionário:** Informe neste campo, um percentual default de comissão para o funcionário.
*Funcionário 3/Funcionário 4:* Além dos funcionários 1 e 2, pode-se indicar mais dois funcionários para os movimentos deste tipo, porém, para estes não é possível indicar uma comissão ***(A partir da versão 12.1.2306 o cadastro de comissão dos funcionários 3 e 4  está disponível)***, estes outros funcionários aparecem ao clicar o botão "complemento" da janela de edição do movimento.
*Observação:* Se no cadastro do funcionário, o campo comissão 1 estiver preenchido, ao incluir um movimento utilizando esse funcionário, será levada para o movimento essa comissão informada no cadastro. Se não houver esta informação e nos parâmetros do tipo de movimento tenha sido cadastrado um default para comissão do funcionário, este valor default que será preenchido no campo comissão do movimento.

**
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938750/image_preview.png?version=1&modificationDate=1551280466130&api=v2)
Tabelas Globais**

**Edita Centro de Custo/ Departamento:**

-   Não edita.
-   Edita.
-   Obrigatório: Marque este campo se o preenchimento referente à tabela em questão deverá ser obrigatório, caso contrário, deixe desmarcado.

**Centro de Custo / Departamento Default:** Informe neste campo um valor default para departamento. 
***Observação**:* Este campo somente estará habilitado se o parâmetro "Edição da Filial de Emissão" for "Mostra" e o parâmetro "Filial Default" estiver definido, verificar Pasta Identificação/Emitente Destinatário, isto porque os departamentos são cadastrados por filial, sendo necessário estar definida uma Filial Default para poder definir um Departamento Default.

**
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938750/image_preview.png?version=1&modificationDate=1551280466130&api=v2)
Tabelas Opcionais**

**Editar Seção / Portador / Centro de Despesa / Natureza de Gasto / Contratos vendedor:**

-   Não edita: O campo não estará disponível para edição.
-   Edita: Marque este campo e será possível editar essa Tabela.
-   Obrigatório: Marque este campo se o preenchimento referente à tabela em questão deverá ser obrigatório, caso contrário, deixe desmarcado.

**Tabelas de Representante:** Tipo de edição para o campo representante para os movimentos deste tipo, informe:

-   Não Edita: escolhendo esta opção, o campo representante não será editado nem mostrado no movimento, portanto, não será utilizado.
-   Mostra: neste caso, o campo será utilizado no movimento, porém, o acesso a ele não será permitido.
-   Edita: para que o campo seja editado, portanto, este aparecerá no movimento e o acesso a ele será permitido.
-   Edita Obrigatoriamente: para que o campo seja editado. Portanto, este aparecerá no movimento e o preenchimento do mesmo será obrigatório. Não será permitido salvar o movimento sem que este campo seja informado.

**Representante Default:** Informe o representante default para os movimentos deste tipo. Desta forma, ao incluir um movimento, o campo "representante" será automaticamente preenchido.
***Observação**:* Se informou no campo anterior a opção "Mostra", preencha este campo. Caso contrário, o "representante" no movimento ficará em branco.

**Edição da Comissão:**

-   Edita: para que o campo comissão do representante seja editado e o acesso a ele permitido.
-   Mostra: neste caso, o campo comissão do representante será utilizado, mas o acesso a ele não será permitido.
-   Não Edita: escolhendo esta opção, o campo comissão do representante não será editado nem mostrado no movimento, portanto não será utilizado.

**Percentual:** Informe um percentual default para a comissão do representante.
***Observação**:* Quando essa opção estiver selecionada o campo de Edição de Comissão do Funcionário será desabilitado e apresentado como Mostra.
