# Painel do Movimento

> **Fonte:** [https://tdn.totvs.com/display/public/LRM/Painel+do+Movimento](https://tdn.totvs.com/display/public/LRM/Painel+do+Movimento)
> **Domínio:** TDN (TOTVS Developer Network)

---

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/730064918/Painel%20TDN.png?version=1&modificationDate=1675441861280&api=v2)



## **01. VISÃO GERAL**

O Painel do Movimento apresenta as informações necessárias para a tomada de decisão, em uma única interface de forma rápida, amigável e segura. É possível visualizar as movimentações de múltiplas coligadas, por filial(s), por produto(s), por fornecedor(s), grupo de produto(s), dentre outros, conforme seleção dos filtros. Para o seu desenvolvimento utilizamos tecnologias web, que estão de acordo com o novo modelo de interface do RM.

A funcionalidade "Painel do Movimento" conta com controle de segurança, sem ele o usuário não conseguirá visualizar as informações do Painel.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/730064918/image2023-1-2_11-26-4.png?version=1&modificationDate=1672669564917&api=v2)

Além da permissão de acesso ao painel do movimento, o usuário só consegue visualizar dados dos movimentos que ele tenha permissão de consulta, caso contrário o movimento não é retornado.

No caso abaixo, com a permissão de "Consultar" desabilitada o usuário não consegue visualizar movimentos deste tipo.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/730064918/image2023-1-2_12-30-51.png?version=1&modificationDate=1672673451377&api=v2)



Importante

A execução do **Host** precisa ser como **administrador:**

-   Caso o **Host** seja iniciado como **aplicativo** (RM.Host.exe), certifique-se que ao executá-lo, tenha selecionado a opção "**Executar como Administrador**".
-   Caso o **Host** tenha sido instalado como **serviço**, o usuário vinculado ao serviço deve ser um administrador do sistema.

## **02. EXEMPLO DE UTILIZAÇÃO**

O painel de movimento é acessado através do modulo "Gestão de Estoque Compras e Faturamento" > Utilitários > Painel do Movimento, ele pode ser aberto tanto ao clicar nesta opção do menu, como ao pressionar o conjunto de teclas "Ctrl" + "S".

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/730064918/image2023-1-2_11-35-59.png?version=1&modificationDate=1672670160660&api=v2)



-   [Visão dos Filtros](#)
-   [Visão das Movimentações](#)
-   [Exportação](#)

Ao abrir o painel do movimento os filtros já estão disponíveis para seleção

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/730064918/2024-02-29%2009_03_40-03.9.0507%20-%20TOTVS%20Linha%20RM%20-%20Servi%C3%A7os%20%20Alias_%20CorporeRM%20_%209-RAYTEK%20DO%20BRASIL%20%2CIN.png?version=2&modificationDate=1709208388337&api=v2)

Antes de executar o filtro dos movimentos é necessário completar o mínimo de filtros exigidos, no caso:

-   Do grupo "Filtros essenciais" é obrigatório, todos os campos deste grupo devem ser preenchidos, os campos são:
    -   Coligada
    -   Filial
    -   Período
-   Do grupo "Filtros adicionais" é obrigatório o preenchimento de ao menos um campo deste grupo, os campos deste grupo são:
    -   Produto/Serviço
    -   Grupo de Produtos
    -   Cliente/Fornecedor
    -   Classificação do Tipo de Movimento
-   Do grupo "Opcionais", nenhum campo é obrigatório, os campos deste grupo são:
    -   Tipo de Movimento
    -   Centro de Custo - Caso o tipo de movimento esteja parametrizado para utilizar rateio por centro de custo, será esta informação a utilizada para a realização do filtro, caso contrário será levado em consideração o centro de custo do movimento.
    -   Status do Movimento
    -   Saldo
    -   Local de Entrega
    -   Natureza Orçamentária Financeira - (Filtro incluido a partir da versão 12.1.2406) A exibição desse filtro será de acordo com a parametrização (04.01 - Parâmetros Gerais > Tabelas > Natureza Orçamentária/ Financeira) da coligada onde o usuário realizou a abertura do Painel. Para que esse filtro seja exibido ele deve estar parametrizado como **Utiliza Natureza Orçamentária/Financeira.**  A tabela de Natureza Orçamentária Financeira é informada no item do movimento, portanto ao informar este filtro serão buscados os movimentos que possuem itens com as naturezas selecionadas.
    -   Tabela de Classificação - (Filtro incluido a partir da versão 12.1.2406) A exibição desses filtros, assim como a definição do nome de cada um deles será de acordo com a parametrização (04.01 - Parâmetros Gerais > Tabelas > Classificação) da coligada onde o usuário realizou a abertura do Painel. Para que esses filtros sejam exibidos eles devem estar parametrizados como **Usar em Movimento** e/ou **Usar em Item de Movimento**. Como essas tabelas podem ser usadas tanto no item como no movimento, ao informar este filtro, serão mostrados os movimentos que possuem essa classificação e/ou os movimentos que possuem itens com essa classificação.
        -   Tipo
        -   Classe
        -   Status do Produto
        -   Tabela de Estoque 4
        -   Tabela de Estoque 5

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/730064918/image-2024-2-29_13-8-44.png?version=1&modificationDate=1709222924713&api=v2)

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/730064918/image-2024-2-29_13-9-41.png?version=1&modificationDate=1709222981330&api=v2)

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/730064918/image-2024-2-29_13-11-9.png?version=1&modificationDate=1709223070130&api=v2)



Quando os campos obrigatórios do grupo essenciais forem preenchidos o botão "Filtrar" fica disponível, ao filtrar sem preencher um dos campos adicionais o usuário vai receber um aviso sobre essa necessidade e será direcionado para a aba de campos adicionais.

Na seção dos filtros essenciais é possível selecionar a quantidade de movimentos que são exibidos por página através do campo **Quantidade de movimentos na visão**. Por padrão serão carregados 50 registros em cada página, se houver mais do que essa quantidade de registros, será fornecida a opção de **Carregar Mais Resultados**. Caso você deseje que sejam exibidos mais ou menos registros por página basta trocar a quantidade selecionada neste campo.  

## Campos com dependência 

Alguns campos dependem do preenchimento de outro campo, no caso abaixo Filial só pode ser preenchido após a escolha da coligada, ao preencher coligada o campo Filial será liberado para preenchimento.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/730064918/image2023-1-2_12-4-56.png?version=1&modificationDate=1672671897123&api=v2)

Relação de dependência entre campos:



Campos

Dependência

Campos

Dependência

Filial

Coligada

Produto/Serviço

Coligada

Grupo de Produtos

Coligada

Cliente/Fornecedor

Coligada

Tipos de Movimento

Coligada

Centro de Custo

Coligada

Local de Estoque

Coligada e Filial

Natureza Orçamentária Financeira

Coligada

Tabela de Classificação 1

Coligada

Tabela de Classificação 2

Coligada

Tabela de Classificação 3

Coligada

Tabela de Classificação 4

Coligada

Tabela de Classificação 5

Coligada

Ao editar a informação do filtro de coligada, todos os campos que são dependentes do preenchimento da coligada, serão limpos, o mesmo se aplica ao de Filial.

Caso o usuário informe a "Classificação do Tipo de Movimento" só serão exibidos "Tipo de Movimentos" que pertencem àquelas classificações, caso o usuário edite a informação de classificação, os valores dos tipos de movimento também serão limpos.

Não é possível usar o campo de Produto/Serviço e Grupo de Produtos juntos, ao informar um Produto/Serviço o campo de Grupo de Produtos será bloqueado, o contrário também se aplica. Caso o usuário deseje utilizar o Grupo de Produto após ter informado algum Produto/Serviço, ele terá que desmarcar os Produtos/Serviços que foram selecionados.

## Visão interna do componente de filtro

Ao carregar os dados para seleção vários recursos estão disponíveis, sendo eles:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/730064918/image2023-1-2_12-20-11.png?version=1&modificationDate=1672672811370&api=v2)

1.  Possibilidade de selecionar item a item dos filtros desejados.
2.  Seleciona ou remove a seleção de todos os itens
3.  Os itens selecionados são indicados nessa área da tela.
4.  É possível remover os itens selecionados neste ponto
5.  Quando houver mais registros a retornar do que o carregado em tela clique em "Carregar mais resultados" para ver os próximos registros.
6.  É possível modificar a ordenação dos registros clicando nas setas de um campo específico, a ordenação vai ser feita por esse campo. 
7.  Busca nos registros o que tem a informação pesquisada. Para campos de texto, é feita uma busca por palavras que contenham aquele texto, já para campos numéricos de código da coligada e código da filial a busca é realizada para valores que sejam iguais aos pesquisados.
8.  Use o scroll para navegar entre os registros da tela, também é possível utilizar a seta do teclado e scroll do mouse.
9.  Caso deseje sair sem modificar o filtro clique em cancelar.
10.  Clique em selecionar para aplicar os filtros escolhidos.

Após a realização do filtro os dados são retornados conforme mostrado abaixo, nesta tela temos as seguintes funcionalidades:

1.  Clique em "Filtros" para acessar novamente a visão de filtros e modificar sua seleção.
2.  Os movimentos retornados são agrupados em quatro visões, sendo elas: Compras, Vendas, Estoque e Outras Movimentações. Este agrupamento é feito através da classificação do tipo de movimento.
    1.  Após o nome do grupo, o número indica a quantidade de movimentos deste tipo que foram encontrados.
3.  O botão "Carregar mais resultados" se mostrará habilitado quando houver mais dados a serem carregados para a tabela, e possível portanto, ao aciona-lo, trazer mais dados além dos já previamente tragos pelo filtro.
4.  É possível expandir o movimento para visualizar informações do itens do movimento.
5.  Clique no botão para exportar os itens para o formato XLSX.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/730064918/image-2024-2-29_13-16-37.png?version=1&modificationDate=1709223398193&api=v2)

É possível visualizar dados de item de mais de um movimento ao mesmo tempo.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/730064918/image-2024-2-29_13-17-15.png?version=1&modificationDate=1709223435950&api=v2)

Ao navegar até a última coluna é possível visualizar uma engrenagem, ela é utilizada para **configurar as colunas** visíveis na visão do Painel de Movimentos, utilize o recurso para trazer os dados mais significativos para sua tomada de decisão.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/730064918/image-2024-2-29_13-17-42.png?version=1&modificationDate=1709223462513&api=v2)

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/730064918/image-2024-2-29_13-18-3.png?version=1&modificationDate=1709223484117&api=v2)





Para exportar os dados do Painel do Movimento no formato XLSX, basta selecionar o botão **Exportar** localizado na tela inicial do movimento no canto superior direito, conforme imagem abaixo:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/730064918/2024-02-29%2009_05_45-03.9.0507%20-%20TOTVS%20Linha%20RM%20-%20Servi%C3%A7os%20%20Alias_%20CorporeRM%20_%209-RAYTEK%20DO%20BRASIL%20%2CIN.png?version=8&modificationDate=1709210757063&api=v2)

Após abrir a tela de exportação, é gerado um alerta para o usuário de que a execução do processo de exportação pode demorar caso existam muitos registros a serem exportados.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/730064918/image-2024-2-29_9-46-22.png?version=1&modificationDate=1709210782343&api=v2)

A partir da versão 12.1.2406, tornou-se possível realizar a exportação dos movimentos e dos itens dos movimentos. A opção **Sintética** gera uma planilha contendo apenas os movimentos, enquanto a opção **Analítica** contém os movimentos e os seus itens. Os itens do movimento são ordenados de acordo com o Identificador do Movimento, Coligada e Identificador do Item do Movimento (NSEQITMMOV).

Ao selecionar o botão **Exportar** dentro da visão, será realizada a exportação de todos os movimentos e itens (caso tenha sido selecionada a opção **Analítica**) filtrados no Painel, mesmo aqueles que não estão carregados na visualização da tela. As alterações realizadas através do **Gerenciador de Colunas**, como a ordenação ou visibilidade, serão replicadas na exportação.

Por exemplo, na imagem abaixo, a ordem da exportação começa com o campo "Nome Cli/For" e o campo "CNPJ/CPF" será removido da visualização e da exportação.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/730064918/image2023-7-21_19-37-0.png?version=1&modificationDate=1689979020990&api=v2)

Abaixo, segue um exemplo de como ficaram as informações na exportação de acordo com estas configurações.

Neste documento os movimentos são distribuídos em quatro abas (Compras, Vendas, Estoque e Outras Movimentações), seguindo o mesmo padrão de distribuição do Painel do Movimento. Caso alguma dessas visões não possua Movimentações retornadas ela não será apresentada no arquivo da Exportação. Ex.: Se houverem 0 movimentos de Compras, 500 de Vendas, 600 de Estoque e 450 de Outras Movimentações, o documento exportado só terá 3 abas, sendos elas a de Vendas, Estoque e Outras Movimentações.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/730064918/image2023-7-21_19-46-39.png?version=1&modificationDate=1689979599543&api=v2)

A exportação dos itens de movimentos na exportação **analítica** é distribuiída em quatro abas (Itens Compras, Itens Vendas, Itens Estoque e Itens Outras Movimentações) que são apresentadas de forma intercalada com as abas dos movimentos, conforme mostrado abaixo. Em cada uma dessas abas serão apresentados todos os itens de todos os movimentos daquele determinada classificação, por ex. na aba "Itens Compras" serão apresentados os itens dos movimentos apresentados na aba "Compras" e assim sucessivamente. Para encontrar os itens de um movimento específico é possível fazer um filtro pelo identificador do movimento (coluna identificador).

           
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/730064918/image-2024-2-7_12-1-9.png?version=1&modificationDate=1707318070053&api=v2)



Importante

É importante salientar que a funcionalidade de ordenação por colunas, aplicada no painel, não será automaticamente refletida no arquivo gerado. A exportação conterá os dados na ordem em que foram originalmente carregados no painel, sem considerar a ordem definida por qualquer tipo de classificação realizada no painel. Ou seja, caso o usuário selecione para que as movimentações sejam ordenadas pela **Data Emissão**, no arquivo exportado eles não estarão ordenados por esta informação, sendo necessário que ele faça esse ajuste manualmente na planilha.





Informações

Teclas de navegação podem ser utilizadas para agilizar e facilitar o uso no painel, como por exemplo: Ctrl+End, Ctrl+Home, Ctrl+P, dentre outras.

A partir da versão 12.1.2402, as requisições das APIs utilzadas no Painel de Movimentos enviarão no header da requisição a informação de **x-totvs-app** com **Slot 520.**  Esta informação será utilizada para obter uma licença no servidor de licenças.

## **03\. HOW TO**

**MVP 1                                                                                               MVP 2**

[🎥 Vídeo](//www.youtube.com/embed/UdPLxMGp3cQ?wmode=opaque)
[🎥 Vídeo](//www.youtube.com/embed/bL7wUsBudyA?wmode=opaque)
