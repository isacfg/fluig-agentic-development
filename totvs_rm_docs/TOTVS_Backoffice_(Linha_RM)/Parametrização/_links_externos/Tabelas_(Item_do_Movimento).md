# Tabelas (Item do Movimento)

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=423938758](https://tdn.totvs.com/pages/releaseview.action?pageId=423938758)
> **Domínio:** TDN (TOTVS Developer Network)

---

**
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938758/image_preview.png?version=1&modificationDate=1551293776497&api=v2)
Tabelas de Classificação**

**Editar Tipo/Classe/Status do Produto:** Ao marcar, confirmando a utilização, os seguintes campos serão acessados:

-   Tipo Default: Informe, qual o código da tabela correspondente será a default.
-   Obrigatório: Marque este campo se o preenchimento referente à tabela em questão deverá ser obrigatório, caso contrário, deixe desmarcado.

**
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938758/image_preview.png?version=1&modificationDate=1551293776497&api=v2)
Talebas Globais**

**Edita Centro de Custo/ Departamento:**

-   Não edita.
-   Edita.
-   Obrigatório: Marque este campo se o preenchimento referente à tabela em questão deverá ser obrigatório, caso contrário, deixe desmarcado.
-   Centro de Custo / Departamento Default: Informe neste campo um valor default para departamento.

**Copiar do movimento:** Habilitando o campo, para que o código do departamento e/ou do centro de custo sejam copiados para os itens, na inclusão do movimento.
***Observações**:* Habilitando o parâmetro para Centro de Custo, deverá ser informado na pasta Tabelas. - Habilitando o parâmetro para Departamento, deverá ser informado na pasta Cabeçalho.

**
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938758/image_preview.png?version=1&modificationDate=1551293776497&api=v2)
Tabelas Opcionais**

**Editar Seção / Portador / Centro de Despesa / Natureza de Gasto / Contratos vendedor:**

-   Não edita: O campo não estará disponível para edição.
-   Edita: Marque este campo e será possível editar essa Tabela.
-   Obrigatório: Marque este campo se o preenchimento referente à tabela em questão deverá ser obrigatório, caso contrário, deixe desmarcado.

**Copiar Valor Tabela Opcional para Item:** Marcando este parâmetro as tabelas opcionais do movimento que possuírem valores default informados, terão os seus valores carregados para os valores default das tabelas dos itens de movimento.
***Observações**:*

-   Os valores defaults para a pasta Tabelas, no Movimento, serão buscados na seguinte seqüência:
-   No default por tabela no Tipo de Movimento (Opções/Parâmetros do Tipo de Movimento/Tabelas/Movimento/Itens);
-   No default por tabela no Cliente/Fornecedor (Cadastros/Cliente/Fornecedor/Default de Cliente Fornecedor);
-   No default por tabela no Representante (Cadastros/Representante/Tabela);
-   Caso o parâmetro 'Buscar defaults de Cli/For e de Representante', em Opções/Parâmetros Gerais/Tabelas, estiver marcado, o sistema buscará os defaults no Representante e no Cli/For;
-   Se houver defaults informados no Cadastro do Produto irá prevalecer esses defaults.

**
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938758/image_preview.png?version=1&modificationDate=1551293776497&api=v2)
Tabelas de Representante**

**Edição do Representante:**

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

**
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938758/image_preview.png?version=1&modificationDate=1551293776497&api=v2)
Tabelas de Comprador**

**Editar Comprador:** Define-se o modo de edição do cadastro de compradores/vendedores: se Não Edita, Edita ou Mostra.

**Comprador default:** Através desta opção, define-se qual comprador ou vendedor que irá ser associado ao item do movimento.

**Copiar comprador do movimento para o item:** Se marcado o sistema irá copiar o comprador do movimento para os itens.
