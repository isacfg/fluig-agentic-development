# MOV0006_Bloco_K_Registro K220

> **Fonte:** [https://tdn.totvs.com/display/public/LRM/MOV0006_Bloco_K_Registro+K220](https://tdn.totvs.com/display/public/LRM/MOV0006_Bloco_K_Registro+K220)
> **Domínio:** TDN (TOTVS Developer Network)

---

 **Este documento é material de especificação dos requisitos de inovação, trata-se de conteúdo extremamente técnico.**                                                             

## Informações Gerais

**Especificação**

**Produto**

Totvs Gestão de Estoque, Compras e Faturamento

**Módulo**

Estoque > Produção > Movimentação

**Segmento Executor**

Gestão de Obras & Projetos

**Chamado**

TTO575

**Release de Entrega Planejada**

12.1.12

**Réplica**

Sim

**País**

(x) Brasil

## Objetivo

Facilitar para o usuário a geração dos registros de movimentação interna e consequentemente possibilitar a geração do Registro K220 do Bloco K do SPED Fiscal.



## Definição da Regra de Negócio

O Registro K220 - Outras Movimentações Internas entre Mercadorias tem o objetivo de informar a movimentação interna entre produtos, ou seja, todas aquelas movimentações não informadas nos registros K230 – Itens Produzidos – Produção Acabada e K235 – Itens Consumidos – Consumo no Processo Produtivo.

Devem ser consideradas as movimentações internas de mercadorias de tipos:

-   00 – Mercadoria para Revenda;
-   01 – Matéria-Prima;
-   02 – Embalagem;
-   03 – Produtos em Processo;
-   04 – Produto Acabado;
-   05 – Subproduto e
-   10 – Outros Insumos.

Movimentações internas de Produto Intermediário – tipo 06 e Material de Uso e Consumo – tipo 07 não devem ser escrituradas no Registro K220. Além disso, ajustes de estoque ou consumo interno não são movimentações internas entre mercadorias e, portanto, também não devem ser informados no Registro K220.

São exemplos de movimentações internas a serem geradas no Registro K220 a reclassificação de um produto em outro código em função do cliente a que se destina, a reclassificação de um produto em função do controle de qualidade, o desmanche de uma mercadoria em partes e o sucateamento de matéria-prima ou de produto acabado (gerando o item sucata) entre outros, ou seja, são movimentações que normalmente resultam em novo(s) item(ns).

Assim, o Registro K220 se destina a prestar informações sobre a movimentação interna entre mercadorias, onde existe a saída do estoque da mercadoria de origem e a entrada no estoque da mercadoria de destino. 

A quantidade movimentada deve ser expressa, obrigatoriamente, na unidade de medida do item de origem.

A chave deste registro são os campos: Data da Movimentação Interna (DT\_MOV), Código do Item de Origem (COD\_ITEM\_ORI) e Código do Item de Destino (COD\_ITEM\_DEST).

O Registro K220 irá obedecer ao layout abaixo:

 ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270918886/k220%20layout.png?version=1&modificationDate=1484148547000&api=v2)

Onde serão efetuadas as seguintes validações:

-   Campo 01 (REG) - Valor Válido \[K220\];

-   Campo 02 (DT\_MOV) - A data deve estar compreendida no período informado nos campos DT\_INI e DT\_FIN do Registro K100;

-   Campo 03 (COD\_ITEM\_ORI) - O código do item de origem deverá existir no campo COD\_ITEM do Registro 0200;

-   Campo 04 (COD\_ITEM\_DEST) - O código do item de destino deverá existir no campo COD\_ITEM do Registro 0200. O valor informado deve ser diferente do COD\_ITEM\_ORI;

-   Campo 05 (QTD) - Deve ser informada a quantidade movimentada do item de origem codificado no campo COD\_ITEM\_ORI.

Conforme pudemos verificar, as movimentações internas que irão compor o Registro K 220 basicamente são formadas de um registro de saída de determinado produto e da consequente entrada de outro(s) produto(s).

Para facilitar a inclusão desse processo, foi efetuada no Totvs Gestão de Estoque, Compras e Faturamento a ampliação da rotina de "Cópia por Referência", que passou a atender ao processo de geração das movimentações internas relativas ao Registro K220, bem como a criação de um novo motivo de cópia de referência específico para esta situação. Assim, a partir da cópia por referência do movimento de baixa do produto de origem o sistema irá possibilitar a criação automática do movimento de entrada dos itens de destino, além de criar o vínculo entre estes movimentos.

Na saída do item de origem poderá ser utilizado qualquer movimento de baixa (tipo 2.2) já atualmente em uso pela empresa, não sendo necessária nenhuma parametrização específica. Deverão ser informados nesta movimentação de baixa todos os itens que sairão do estoque da empresa (itens origem) devido a uma movimentação interna.

Para utilizar o processo de movimentação interna através da cópia por referência, será necessário criar um novo tipo de movimento (1.2.XX) cuja movimentação será a responsável por efetuar a entrada dos novos itens (itens destino) gerados a partir da baixa do item de origem. Este tipo de movimento deverá ter algumas parametrizações específicas que iremos descrever a seguir:

-   Na Etapa 2 - *"Mov - Emitente/Destinatário"*, tanto o "Emitente" como o "Destinatário" deverão ser do tipo 'Empresa'.

    ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270918886/emitente.png?version=1&modificationDate=1484148547000&api=v2)




-   Na Etapa 4 - *"Mov. - Datas 1/2"* a data que estiver informada como "Data do Movimento Default" deverá estar parametrizada como 'Edita' ou 'Mostra'. 
    A "Data do Movimento Default" é a data que o sistema irá enviar para o Registro K220.

    ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270918886/03.png?version=1&modificationDate=1484148546000&api=v2)



-   Na Etapa 6 - *"Mov - Outros Dados"* o campo "Usar Cópia de Movimentos por Referência" deve estar marcado e o campo "Motivo de Referência" deverá estar preenchido com o motivo '26 - Transformação de Itens - Movimentações Internas entre Produtos'. Esse novo motivo de referência foi criado especialmente para esse processo e é através dele que o sistema irá identificar quais são os movimentos cujos itens devem ser enviados para o Registro K220. 

    Assim, o sistema localizará em determinado período quais foram os movimentos de entrada gerados por cópia por referência com o motivo 26, irá identificar os respectivos de baixa que os originaram e enviará todos os produtos de ambos os movimentos para o Registro K220.

    ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270918886/copia%20por%20referencia.png?version=1&modificationDate=1484148547000&api=v2)



-   Na Etapa 40 - *"Estoque - Estoque 1/3"* deverá ser parametrizado o aumento do "Saldo Atual".

     ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270918886/aumenta%20estoque.png?version=1&modificationDate=1484148546000&api=v2)


-   Apesar da rotina do SPED Fiscal (da qual o Bloco K faz parte) ser gerada no Totvs Gestão Fiscal, os lançamentos relativos ao Registro K 220 serão enviados diretamente pelo Totvs Gestão de Estoque, Compras e Faturamento, portanto os movimentos que irão gerar esses registros não serão escriturados e não conterão Natureza Fiscal. Sendo assim, não será necessário o preenchimento do CFOP do movimento e na Etapa 60 - *"Fis - Natureza"* os campos "Natureza" e "Natureza 2" deverão estar preenchidos com 'Não Edita'.

    ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270918886/natureza.png?version=1&modificationDate=1484148547000&api=v2)



-   Além disso, como este tipo de movimento é interno e consequentemente não será escriturado, o campo "Gera Escrituração" deverá estar desmarcado na Etapa 62 - *"Fis - Escrituração Fiscal 1/2"*.



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270918886/escrituracao.png?version=1&modificationDate=1484148547000&api=v2)

Fique atento também aos demais parâmetros desse tipo de movimento, que devem ser preenchidos conforme os procedimentos de movimentação interna realizados por sua empresa.

Após o tipo de movimento de entrada por Movimentação Interna entre Produtos ter sido parametrizado e liberado para os devidos usuários (*"Serviços Globais > Segurança > Usuários > Sistema: Gestão de Estoque, Compras e Faturamento > Anexos > Permissões por Tipo de Movimento"*) as movimentações internas poderão efetivamente ser realizadas.

Conforme dito anteriormente, no Totvs Gestão de Estoque, Compras e Faturamento, as movimentações internas que compõem o Registro K 220 do Bloco K do SPED Fiscal serão sempre compostas por um movimento de saída e outro de entrada que serão vinculados através do processo de cópia por referência com motivo 26 (Transformação de Itens - Movimentação Interna entre Produtos).

Assim o primeiro passo do procedimento é criar o movimento com o(s) produto(s) que será(ão) baixado(s) e sua(s) respectiva(s) quantidade(s) de baixa. Para isso pode ser utilizado o tipo de movimento de baixa já comumente usado em sua empresa.

Após a movimentação de saída do produto de origem ter sido criada, deve ser incluída a movimentação de entrada dos produtos destino, ou seja, produtos gerados a partir da baixa do item origem. Aconselhamos que tanto a saída do produto origem quanto a entrada dos produtos destino sejam efetuadas na mesma data visto que no Registro K 220 é gravada apenas uma data, e o sistema gravará a data da entrada.

Selecione o processo para o qual o tipo de movimento foi criado (*"Estoque > Produção",* *"Compras", "Outras Movimentações"*, etc.) vá à visão de movimentos e selecione o novo tipo de movimento criado.

Clique em *"Processos > Assistente de Cópia por Referência"*. 

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270918886/assistente.png?version=1&modificationDate=1484148546000&api=v2)

O sistema abrirá a tela inicial do *"Assistente de Cópia de Movimento por Referência"*. Clique em "Avançar".

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270918886/Avancar.png?version=1&modificationDate=1484148547000&api=v2)

Será apresentada a tela do *"Filtro Inicial para Seleção de Movimentos"*.

Clique no ícone "Incluir" para selecionar o movimento de baixa cuja cópia por referência será efetuada.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270918886/10.png?version=1&modificationDate=1484148546000&api=v2)


O sistema automaticamente abrirá a tela de lookup onde será filtrado o movimento a ser copiado.

Informe o campo a ser filtrado e o respectivo valor e o sistema preencherá a tela com os movimentos que atendem ao filtro informado.

Marque o movimento a ser copiado e clique em OK.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270918886/11.png?version=1&modificationDate=1484148546000&api=v2)


O sistema irá retornar à tela do *"Filtro Inicial para Seleção de Movimentos"* onde será apresentado o movimento selecionado.

Clique em "Avançar".

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270918886/12.png?version=1&modificationDate=1484148546000&api=v2)


Para este tipo de Cópia por Referência poderá ser efetuada a cópia de apenas um movimento por vez, mas um mesmo movimento pode conter vários itens.

Caso seja selecionado mais de um movimento para ser copiado o sistema não permitirá, sendo exibida a seguinte mensagem:



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270918886/13.png?version=1&modificationDate=1484148546000&api=v2)

Após selecionar o movimento a ser copiado e clicar em Avançar o sistema exibirá a tela com os itens que foram baixados através do movimento selecionado.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270918886/14.png?version=1&modificationDate=1484148546000&api=v2)

Para cada item do movimento de origem escolha o(s) respectivos item(ns) do movimento de destino.

Assim na parte superior da tela clique no item origem e na parte inferior clique no ícone "Incluir" para selecionar o(s) item(ns) destino do mesmo.

O sistema entenderá que os itens que serão incluídos se referem ao item que está selecionado acima.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270918886/15.png?version=1&modificationDate=1484148546000&api=v2)


O sistema automaticamente abrirá a tela de lookup onde será(ão) filtrado(s) o(s) item(ns) a ser(em) incluído(s).

Informe o campo a ser filtrado e o respectivo valor e o sistema preencherá a tela com os itens que atendem ao critério de seleção informado.

Marque o(s) item(ns) a ser(em) incluído(s) no movimento destino e clique em 'OK'.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270918886/18.png?version=1&modificationDate=1484148546000&api=v2)


O sistema irá retornar à tela de *"Seleção dos Itens de Movimento"* onde serão apresentados na parte superior os itens de origem e na parte inferior os itens de destino, sendo que os itens de destino se referem sempre ao item origem selecionado.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270918886/19.png?version=1&modificationDate=1484148546000&api=v2)

Clique no próximo item origem e novamente no ícone "Incluir" para selecionar os itens destino do mesmo.

Esse processo deverá se repetir para todos os itens a serem "transformados", ou seja, os itens cuja baixa deu origem à entrada de outros itens.

Para todos os itens destino selecionados o sistema automaticamente aplicará a quantidade 1 (um), permitindo que a mesma seja alterada na próxima fase da Cópia por Referência, ou seja, na tela dos *"Itens"* do novo movimento que será gerado.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270918886/20.png?version=1&modificationDate=1484148546000&api=v2)

É importante salientar que conforme descrito na tela de seleção, todos os itens a serem inseridos no movimento destino devem estar marcados.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270918886/21.png?version=1&modificationDate=1484148546000&api=v2)

Assim, após marcar TODOS os itens que farão parte do movimento destino, clique em "Avançar".

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270918886/22.png?version=1&modificationDate=1484148546000&api=v2)


O sistema apresentará a tela de conclusão do Assistente para Cópia de Movimentos por Referência, contendo um resumo dos dados dos movimentos envolvidos na operação.

Verifique os dados apresentados e estando todos corretos clique em "Executar", para que o sistema inicie o processo de geração do movimento de entrada dos itens destino.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270918886/23.png?version=1&modificationDate=1484148546000&api=v2)


O sistema abrirá então a tela contendo os dados do *"Cabeçalho"* do movimento que será gerado.

As informações serão automaticamente preenchidas conforme parametrizado no respectivo Tipo de Movimento.

Para verificar e/ou alterar alguma informação dos produtos destino clique em *"Itens"*.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270918886/24.png?version=1&modificationDate=1484148546000&api=v2)

O sistema apresentará a tela com todos os produtos destino e se for necessário alterar alguma informação, você poderá fazê-lo na própria grid dos itens de movimento.

Neste exemplo iremos alterar a quantidade do produto destino 07.24 para 2, já que o produto origem 07.52 - Cama Beliche foi transformado em 2 unidades do produto destino (07.24 - Cama de Solteiro Acabada).

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270918886/25.png?version=1&modificationDate=1484148546000&api=v2)

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270918886/26.png?version=1&modificationDate=1484148546000&api=v2)

Após efetuar todas as alterações necessárias clique em 'OK'.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270918886/27.png?version=1&modificationDate=1484148546000&api=v2)

O sistema irá finalizar o processo, gravando o movimento de entrada com os dados gerados pela Cópia por Referência.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270918886/28.png?version=1&modificationDate=1484148546000&api=v2)



Na geração do Registro K220 do Bloco K do SPED Fiscal, o sistema levará os dados relativos aos movimentos gerados com Motivo de Referência 26 no período de apuração do SPED, bem como dos movimentos que os originaram.

Assim, após terem sido gravadas todas as movimentações internas do mês, o sistema estará apto a gerar o Registro K 220 do Bloco K do SPED Fiscal no Totvs Gestão Fiscal.

**Rotina**

**Tipo de Operação**

**Opção de Menu**

**Regras de Negócio**

Cópia por Referência

Alteração

Movimentações > Processos > Assistente de Cópia por Referência

Conforme definições constantes deste documento

## Tabelas Utilizadas:

-   TMOTIVOREFMOV - Motivos de Cópia por Referência



 **Este documento é material de especificação dos requisitos de inovação, trata-se de conteúdo extremamente técnico.**                                                             

![Imagem](https://centraldeatendimento.totvs.com/plugins/servlet/confluence/placeholder/unknown-macro?name=rate&locale=en_US&version=2)
