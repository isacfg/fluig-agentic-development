# TSRMCN ER Inclusão de Movimento através de XML TOTVS Colaboração

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=224106789](https://tdn.totvs.com/pages/releaseview.action?pageId=224106789)
> **Domínio:** TDN (TOTVS Developer Network)

---

 **Este documento é material de especificação dos requisitos de inovação, trata-se de conteúdo extremamente técnico.**                                                             

## Informações Gerais

**Especificação**

**Produto**

TOTVS Gestão de Estoque, Compras e Faturamento

**Módulo**

Recebimento de Materiais

**Segmento Executor**

Construção e Projetos

**Chamado**

TSRMCN

**Release de Entrega Planejada**

12.1.9

**Réplica**

Não

**País**

( X ) Brasil  

## Objetivo

Todas as rotinas responsáveis pelo recebimento de nota fiscal eletrônica foram reescritas, com o objetivo de melhorar a performance e tornar o processo mais simples e estável. Também foram refeitas todas as telas do processo atual, a fim de aprimorar a usabilidade do mesmo.

Todas as melhorias de performance e de usabilidade das telas estão disponíveis tanto para o TOTVS Colaboração 2.0 como para o TOTVS Colaboração 1.0.

É importante salientar que para a utilização do TOTVS Colaboração é indispensável a contratação dos serviços da NeoGrid que é a responsável pelo processamento da leitura dos arquivos XML, pela comunicação com os webservices da SEFAZ e pelo retorno às consultas destes documentos. Estes, por sua vez, serão lidos e interpretados através da execução de JOBs específicos pelo TOTVS Gestão de Estoque, Compras e Faturamento para a devida atualização dos dados no sistema.



## Definição da Regra de Negócio



### 1\. Cadastros

Para o correto funcionamento da rotina de *"Inclusão de Movimento Através do XML - NF-e"* devemos ficar atentos ao preenchimento de alguns cadastros. São eles:

### 1.1. Natureza Fiscal (CFOP)

Quando uma nota fiscal eletrônica é enviada por um fornecedor, ela contém, para cada um dos seus itens, uma natureza fiscal (CFOP) de saída, que caracteriza a operação desse fornecedor. Para a empresa que recebe esse documento entretanto, devemos encontrar a natureza fiscal (CFOP) de entrada correspondente. Essa ‘Natureza Inversa’ é indispensável para a criação de um movimento de NF-e.

Para definir a Natureza Inversa de forma automática na geração do movimento de entrada, o TOTVS Gestão de Estoque, Compras e Faturamento utilizará os seguintes recursos:



### 1.1.1. Regra de Seleção da Natureza (RSN)

Para cada movimento de NF-e a ser incluído, o sistema irá encontrar a Natureza Inversa do CFOP constante do arquivo XML. Para isso, é necessário saber, através das parametrizações vigentes do tipo de movimento, se o movimento a ser criado seleciona a Natureza de Operação somente para o movimento, ou se deve ser selecionada também uma Natureza para o item de movimento. Para ambos os casos, será utilizada em primeiro lugar a Regra de Seleção da Natureza (RSN), rotina hoje já existente e que tem a finalidade de encontrar a Natureza de Operação baseada nas informações do movimento e parametrizações de várias tabelas tais como: Parâmetros do Tipo de Movimento, Produto, Classificação de Produto, Naturezas Fiscais, Regras de ICMS, Regras de IPI, etc..

Para verificar como está a parametrização da sua empresa vá na etapa *"Fis - Natureza"* dos Parâmetros dos Tipos de Movimento que serão utilizados na Inclusão de Movimento através de XML e verifique o preenchimento do campo 'Seleção Automática da Natureza'.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/007.png?version=1&modificationDate=1452253093000&api=v2)

Detalharemos a seguir como o sistema procederá conforme o tipo de Seleção Automática da Natureza definido para o tipo de movimento.



### 1.1.1.1. Seleção Automática da Natureza por Movimento

Neste caso, deverá ser encontrada obrigatoriamente uma Natureza de Operação analítica para o movimento.

Através dos dados do XML e das parametrizações e cadastros do sistema**,** a Regra de Seleção da Natureza irá encontrar a(s) natureza(s) possível(eis), de forma que:

-   Se a RSN encontrar apenas uma Natureza de Operação (CFOP) possível, o movimento de NF-e será incluído com o CFOP encontrado;
-   Se a RSN encontrar mais de uma Natureza de Operação (CFOP) possível, o sistema irá verificar as opções cadastradas como Natureza Inversa da CFOP extraída do XML.

No item 1.1.2 deste documento iremos detalhar como será o comportamento do sistema caso seja necessário utilizar o cadastro de Natureza Inversa do CFOP.



### 1.1.1.2. Seleção Automática da Natureza por Item de Movimento

Nesta situação, será realizado o mesmo procedimento já explicado anteriormente para encontrar a Natureza de Operação do movimento, com a diferença desta poder ser analítica ou sintética. 

Se for encontrada uma Natureza analítica, sua ‘Raiz’ (Natureza Sintética) deve ser extraída e considerada como a Natureza do movimento enquanto que a Natureza analítica será atribuída ao item.

Caso sejam encontradas 2 naturezas sintéticas possíveis, os campos natureza 1 e natureza 2 do movimento serão preenchidos caso ambos estejam parametrizados para o tipo de movimento, mas se existirem mais de 2 naturezas sintéticas possíveis, o sistema não será capaz de solucionar o conflito e, neste caso a natureza não será identificada, sendo preenchida a natureza do movimento com um CFOP de primeiro nível, ou seja, 1 ou 2 conforme a UF de origem da NF-e. 

Caso seja encontrada apenas a Natureza sintética, ela será atribuída ao movimento, e o procedimento de busca será realizado novamente para selecionar a Natureza do item. Para o item, a Regra de Seleção da Natureza irá considerar os dados do movimento e das demais tabelas citadas anteriormente (Parâmetros do Tipo de Movimento, Produto, Classificação de Produto, Naturezas Fiscais, Regras de ICMS, Regras de IPI, etc.).

Conforme já informado o sistema primeiramente executará as Regras de Seleção da Natureza, e caso as mesmas retornem mais de uma opção de CFOP para os itens do movimento, o sistema utilizará o cadastro das Naturezas Inversas que detalharemos a seguir:



### 1.1.2. Natureza Inversa 

No cadastro de Natureza de Operação (CFOP), de responsabilidade do sistema TOTVS Gestão Fiscal, foi criado o anexo *"Natureza Inversa para Importação de XML"*  onde deverão ser cadastradas as possíveis naturezas de operação inversas para uma determinada natureza sintética.

Uma natureza de operação sintética, poderá ter a ela vinculada várias naturezas de operação inversas, sejam elas sintéticas ou analíticas.

Entre as naturezas inversas cadastradas, o usuário poderá definir "Defaults", ou seja, registros que devem ser considerados prioritários caso existam várias naturezas possíveis para um determinado movimento.

Este cadastro será utilizado apenas caso através da aplicação das Regras de Seleção da Natureza tenha sido encontrada mais de uma natureza inversa possível para o item. Neste caso o sistema procederá da seguinte forma:

-   Se apenas uma das naturezas selecionadas  estiver cadastrada como "Default", ela será utilizada para a criação de movimento;
-   Se mais de uma das naturezas selecionadas estiver cadastrada como "Default", o sistema não saberá qual Natureza Inversa escolher e o movimento será criado com o Status do TOTVS Colaboração como 'Natureza Incompleta';
-   Se apenas uma das naturezas selecionadas estiver cadastrada como Natureza Inversa, mesmo não sendo como "Default", ela será utilizada para a criação do movimento;
-   Se mais de uma das naturezas selecionadas estiver cadastrada como Natureza Inversa mas nenhuma delas é "Default", o sistema não saberá qual Natureza Inversa escolher e o movimento será criado com o Status do TOTVS Colaboração como ‘Natureza Incompleta';
-   Se nenhuma das naturezas selecionadas estiver no cadastro de Natureza inversa, o movimento será criado com o Status do TOTVS Colaboração como ‘Natureza Incompleta'. 

É importante salientar que o Status TOTVS Colaboração 'Natureza Incompleta' não influencia no status do movimento que será criado conforme os parâmetros do Tipo de Movimento gerado, ou seja, mesmo estando com esse Status TOTVS Colaboração o movimento poderá gerar todas as demais integrações (financeira, contábil, estoque e de aprovações) se assim estiver parametrizado. 

Os movimentos gerados com o Status TOTVS Colaboração 'Natureza Incompleta' deverão ter seus CFOP informados através de edição manual. 

Uma natureza default pode ser sintética ou analítica, entretanto, poderá haver somente uma natureza analítica default de cada 'raiz' para uma mesma natureza sintética. 

Exemplo:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/009.png?version=3&modificationDate=1452601595000&api=v2)

No nosso exemplo acima a natureza 1.102.04 não pode ser default para a natureza 5.101 já que outra natureza que possui a sintética idêntica (1.102.03) já foi definida como default para a mesma.

No TOTVS Gestão de Estoque, Compras e Faturamento, o cadastro das naturezas inversas***,*** está disponível em *“Cadastros > Fiscais > Natureza Fiscal > Anexos > Natureza Inversa para Importação de XML”*.

Você poderá acessar este Anexo a partir da visão de Naturezas ou a partir da tela de edição de uma Natureza específica.

Acesso a partir da visão de Naturezas

**
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-16_19-37-6.png?version=1&modificationDate=1534459025000&api=v2)

**

Acesso a partir da tela de edição da Natureza:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-16_19-38-46.png?version=1&modificationDate=1534459126000&api=v2)


O sistema irá verificar a Natureza Inversa do CFOP constante da NF-e, ou seja as Naturezas Inversas devem estar cadastradas nas naturezas sintéticas de Saída. Assim, selecione o CFOP sintético para o qual você irá cadastrar as Naturezas Inversas e clique em *"Anexos > Natureza Inversa para Importação de XML"*.

Será apresentada a tela onde você poderá cadastrar as Naturezas Inversas a serem vinculadas à natureza sintética selecionada.

Informe a Natureza Inversa correspondente, marque o campo caso a mesma vá ser uma natureza 'Default' para esta natureza sintética e clique em 'Inserir'.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-16_19-41-35.png?version=1&modificationDate=1534459295000&api=v2)

O sistema apresentará na tela a correspondência entre as naturezas inseridas, permitindo que as demais Naturezas Inversas dessa Sintética sejam incluídas, caso existam.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-16_19-44-50.png?version=1&modificationDate=1534459489000&api=v2)

Informe todas as naturezas inversas de cada natureza sintética de saída e clique em *"OK"* ou *"Salvar"* para que o sistema as grave.



### 1.2. Produtos

Para efetuar a inclusão de um movimento através do XML é necessário que seja feita a correlação entre os produtos constantes dos XML e os produtos constantes da sua base de dados, ou seja, dos produtos do fornecedor com os produtos do seu estoque.

A tradução dos produtos contidos no XML, que anteriormente era feita com base nas informações da tabela Produtos por Fornecedor, a partir de agora será feita através da tabela Produtos para Importação de XML.

Nesta nova estrutura, o usuário poderá definir um relacionamento de 1 x N, conforme exemplificamos abaixo:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/013.png?version=1&modificationDate=1452620233000&api=v2)

Note que para o produto 100524 podemos ter N produtos vinculados como por exemplo os produtos Caneta Esferográfica Azul e Caneta Esferográfica Preta do fornecedor, correspondem a um só produto no estoque, Caneta Esferográfica.

As informações atualmente existentes na tabela Produtos por Fornecedor serão automaticamente inseridas na tabela Produtos por Fornecedor para Importação de XML através do atualizador da versão.

Para incluir novos produtos na tabela acesse *“Cadastros > Produtos > Anexos > Produtos para Importação de XML”.*

Como todos os demais Anexos do sistema, você poderá acessá-lo a partir da visão de Produtos ou a partir da tela de edição de determinado Produto.

Acesso através da visão de Produtos.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_12-50-26.png?version=1&modificationDate=1534521026000&api=v2)

Acesso a partir da tela de edição do produto:

*
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_12-51-39.png?version=1&modificationDate=1534521099000&api=v2)

*

Informe o 'Código do Fornecedor', o 'Código do Produto no Fornecedor' e se este for o único produto correspondente para este fornecedor, clique em *"Salvar"* ou *"OK"* para efetuar a gravação do registro ou no ícone *"Incluir"* caso queira gravar o registro e em seguida informar um novo fornecedor e código de produto correspondente para este produto.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/016.png?version=2&modificationDate=1452773148000&api=v2)


Caso o produto possua mais de um produto correspondente no mesmo fornecedor, informe um deles no 'Cód. do Produto no Fornecedor' e clique em "Inserir Múltiplos" para utilizar esse recurso facilitador que permitirá que você inclua vários registros na mesma tela e grave-os de uma só vez.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/017.png?version=2&modificationDate=1452773535000&api=v2)


No campo 'Código do Produto' informe o código do produto no fornecedor e em seguida clique em "Inserir", e assim sucessivamente até que todos os códigos no fornecedor tenham sido informados.

Após informar os códigos de todos os produtos correspondentes nesse fornecedor clique em *"Salvar"* ou *"OK"* para efetuar a gravação do registro ou no botão *"Incluir"* caso queira gravar o registro e em seguida informar um novo fornecedor e produto correspondente para este produto.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/018.png?version=1&modificationDate=1454323556000&api=v2)


Após finalizar a inserção dos Registros Múltiplos, caso opte por "Salvar" o sistema lhe apresentará em tela a mensagem informando os registros que foram gravados.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/023.png?version=1&modificationDate=1452773698000&api=v2)


Para encerrar a informação dos fornecedores e produtos correspondentes a este produto tecle "OK" e o sistema automaticamente sairá da tela de cadastro e exibirá a visão dos Produtos para Importação de XML cadastrados para o seu produto.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_12-55-28.png?version=1&modificationDate=1534521329000&api=v2)

Vale salientar que caso tenha(m) havido inclusão(ões) a partir da inserção de múltiplos registros será necessário clicar no botão "Atualizar Informações" para que os mesmos sejam apresentados.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_12-56-26.png?version=1&modificationDate=1534521386000&api=v2)

Caso nem todos os produtos constantes de um XML tenham sido vinculados com o respectivo produto da sua base de dados, você também poderá informar uma vinculação no momento da tradução do XML que é executada no processo *"Inclusão de Movimento através de XML - NF-e"*.



### 1.3. Unidades 

Da mesma forma que com os produtos, para efetuar a inclusão via XML é necessário que seja feita a correlação entre as unidades de medida dos produtos constantes dos XML, ou seja das unidades do fornecedor com as unidades utilizadas na sua empresa.

O sistema realizará a tradução do campo Unidade de Medida ‘CODUND’ através da tabela ‘TUNDCFOCOLAB’, onde será possível cadastrar o código da unidade no fornecedor, e informar a unidade correspondente no sistema, podendo assim evitar a intervenção manual do usuário durante o processo de recebimento.

Para informar a correlação entre as unidades vá em *“Cadastros > Mais... > Tabelas Auxiliares > Unidade > Anexos > Unidades para Importação de XML”.*

Você poderá acessar este Anexo exclusivamente da visão de Unidades.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-16_19-48-51.png?version=1&modificationDate=1534459731000&api=v2)

O sistema abrirá o Anexo do lado direito da tela de visão das Unidades.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-16_19-51-34.png?version=1&modificationDate=1534459893000&api=v2)


Clique no botão "Incluir" para inserir as Unidades dos Fornecedores que correspondem à sua Unidade selecionada.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-16_19-52-32.png?version=1&modificationDate=1534459951000&api=v2)


Informe ou selecione o 'Fornecedor' (código ou nome), informe o  'Código da Unidade no Fornecedor' e se esta for a única correspondência para esta unidade, clique em *"Salvar"* ou *"OK"* para efetuar a gravação do registro. Caso existam outros fornecedores para o qual essa unidade será utilizada clique no ícone *"Incluir"* para gravar o registro e em seguida informar um novo fornecedor e código de unidade correspondente para esta unidade.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-16_19-52-59.png?version=1&modificationDate=1534459979000&api=v2)


Para encerrar a informação dos fornecedores e unidades correspondentes a esta unidade tecle *"OK"* e o sistema automaticamente sairá da tela de cadastro e exibirá a visão  das Unidades para Importação de XML cadastradas.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-16_19-54-58.png?version=1&modificationDate=1534460098000&api=v2)

É importante salientar que caso o sistema não localize a unidade correspondente você poderá informá-la na tradução do XML que é executada no processo *"Inclusão de Movimento através de XML - NF-e"*.

Agora que já falamos sobre os cadastros necessários, vamos falar sobre o processo de importação do XML.



### 2\. Parametrização

O processo *"Inclusão de Movimento através de XML - NF-e"* está disponível na visão de Movimentos (*"Compras > Recebimento de Materiais > Seleção do Tipo de Movimento e Filial > Processos"*) e na tela de cadastro dos XML (*"Compras > Importação de Arquivos XML - Cadastro XML > Processos"*), sendo que o sistema se comportará de forma diferente dependendo da tela de onde o processo foi acionado, conforme detalharemos a seguir:

-   Caso você acesse o processo diretamente da visão de movimentos  (*"Compras > Recebimento de Materiais > Seleção do Tipo de Movimento e Filial > Processos"*) o sistema entenderá que deve ser gerado um movimento do tipo que você informou ao entrar nesta tela, ou seja, o movimento será gerado de acordo com os parâmetros do tipo de movimento corrente;


-   Caso você acesse o processo na tela de cadastro do XML (*"Compras > Importação de Arquivo XML - Cadastro XML > Processos"*) a definição do tipo de movimento a ser gerado será através da fórmula informada no campo "Fórmula Tipo Mov. Recebimento NF-e".  Assim, optando por incluir o XML a partir desta tela o preenchimento da fórmula passa a ser obrigatório e iremos detalhá-lo a seguir:

    Em  *“Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > Integrações > Fiscal > Parâmetros por Filial > Importação/Envio de Arquivos 2/2”,* deverá ser preenchido por filial o campo "Fórmula Tipo Mov. p/Recebimento NF-e**"**.

    ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-16_19-59-33.png?version=1&modificationDate=1534460373000&api=v2)


    Este novo parâmetro é do tipo fórmula, e assim, através do mesmo, o usuário poderá implementar uma regra específica para buscar o tipo de movimento que será utilizado tanto no recebimento automático como no recebimento manual das NF-e de cada filial.

    Essa fórmula será executada para cada XML a ser recebido.

    Foram criadas quatro novas funções de fórmula para auxiliar na criação dessa regra, são elas:

    -   TABXMLCOLAB - Retorna o valor de um campo da tabela de XMLs do Totvs Colaboração (TNFEENTRADA);
    -   DADOSXMLCOLAB - Retorna o valor de uma TAG de um XML;
    -   QTDTAGSXMLCOLAB - Retorna o número de vezes que uma determinada Tag aparece no XML;
    -   TABPRDCOLAB - Retorna o conteúdo de um campo do cadastro dos produtos vinculados aos itens constantes do XML.  

    Explicaremos a seguir a sintaxe de cada uma dessas funções bem como daremos exemplos de utilização de todas elas.



    -   TABXMLCOLAB ('NomeCampo', 'TipoRetorno') onde:
        -   NomeCampo = Nome do Campo da Tabela TNFEENTRADA. Podemos citar como campos dessa tabela o código da coligada (CODCOLIGADA), o código da filial (CODFILIAL), o código da coligada do fornecedor (CODCOLCFO), o código do fornecedor (CODCFO), a data de emissão (DATAEMISSAO), etc.;
        -   TipoRetorno = Informa o tipo de retorno relativo ao campo informado em NomeCampo, se S (string), V (valor), D (data) ou I (inteiro). 

    Exemplo de fórmula de seleção do tipo de movimento utilizando a função TABXMLCOLAB:

    ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/005.png?version=2&modificationDate=1453202335000&api=v2)

    Neste exemplo o sistema irá verificar na tabela TNFEENTRADA (tabela que contém os XML importados) o registro gerado pelo XML e caso o código do fornecedor seja F00017 o movimento será gerado com o tipo 1.2.27, caso contrário o tipo do movimento será 1.2.20.



    -   DADOSXMLCOLAB ('CaminhoTAG', 'NamespaceXML') onde:
        -   CaminhoTAG = Caminho da TAG desejada, separado por barra ( / ). Exemplo: '/nfeProc/NFe/infNFe/det/prod/CFOP' para o CFOP do produto do XML;
            -   IMPORTANTE: O Caminho da Tag deve ser informado exatamente como consta no XML, esta pesquisa considera letras maiúsculas e minúsculas (Case Sensitive).
        -   NamespaceXML = [http://www.portalfiscal.inf.br/nfe](http://www.portalfiscal.inf.br/nfe)

    Exemplo de fórmula de seleção do tipo de movimento utilizando a função DADOSXMLCOLAB:

    ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/006a%20-%20C%C3%B3pia.png?version=1&modificationDate=1457636982000&api=v2)

    Quando a tag possuir índice, basta informá-lo o entre colchetes (\[ \]).

    No exemplo acima o sistema irá retornar a informação da TAG CFOP do primeiro item da NFe, já que não informamos nenhum índice.

    Veja abaixo um exemplo da mesma fórmula retornando o CFOP do 2º item da NFe:

    ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159952/100.png?version=1&modificationDate=1469816566000&api=v2)



    -   QTDTAGSXMLCOLAB ('CaminhoTAG', 'NamespaceXML') onde:
        -   CaminhoTAG = Caminho da TAG desejada, separado por barra ( / ). Exemplo: '/nfeProc/NFe/infNFe/det' para o produto do XML;
        -   NamespaceXML = [http://www.portalfiscal.inf.br/nfe](http://www.portalfiscal.inf.br/nfe)

    Veja abaixo um exemplo de fórmula de seleção do tipo de movimento utilizando as funções QTDTAGSXMLCOLAB e DADOSXMLCOLAB:

    ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/098.png?version=1&modificationDate=1458067609000&api=v2)

    No exemplo acima através da função QTDTAGSXMLCOLAB o sistema irá identificar o número de itens constantes do XML. Após isso, através da função DADOSXMLCOLAB, irá percorrer todos os itens do XML e caso exista algum cujo CFOP seja 5.102 o tipo de movimento gerado será o 1.2.12.

    Assim, utilizando em uma mesma fórmula estas duas funções (QTDTAGSXMLCOLAB e DADOSXMLCOLAB), o sistema irá verificar determinado dado de todos os itens constantes de um XML.



    -   TABPRDCOLAB ('CodigoProdutoColab', 'NomeCampo', 'TipoRetorno') onde:
        -   CódigoProdutoColab = Código do Produto na tabela "Produtos para Importação de XML";
        -   NomeCampo = Nome do campo da tabela de Produtos;
        -   TipoRetorno = Informa o tipo de retorno relativo ao campo informado em NomeCampo, se S (string), V (valor), D (data) ou I (inteiro). 

    Veja abaixo um exemplo de fórmula de seleção do tipo de movimento utilizando as funções QTDTAGSXMLCOLAB, DADOSXMLCOLAB e TABPRDCOLAB:

    ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/099.png?version=1&modificationDate=1458071338000&api=v2)

    Neste exemplo, em primeiro lugar o sistema utilizará a função QTDTAGSXMLCOLAB para identificar o número de itens constantes do XML, logo depois, através da função DADOSXMLCOLAB irá percorrer todos os itens do XML e através da função TABPRDCOLAB irá identificar na tabela Produtos para Importação de XML quais são os produtos vinculados aos itens do XML. Após verificar sua tabela de produtos e através  e irá analisar se algum deles possui a Tabela de Classificação 1 preenchida com 05. Em caso afirmativo o sistema irá gerar o movimento com o tipo 1.2.12, caso contrário o movimento será do tipo 1.2.11.

    Assim, utilizando em uma mesma fórmula estas três funções (QTDTAGSXMLCOLAB, DADOSXMLCOLAB e TABPRDCOLAB), o sistema irá verificar determinado dado de todos os itens constantes de um XML e ainda irá compará-lo com determinado campo do seu cadastro de Produtos.


    Caso para algum XML através da fórmula não seja possível definir o seu tipo de movimento, o XML será criado na base de dados com o status 'Inconsistente' e poderá ser recebido manualmente.

    Poderão ser definidas fórmulas diferentes para cada filial da empresa.



### 3\. Importação e Gravação do XML

No processo de importação e gravação do XML o sistema irá executar os seguintes procedimentos:



### 3.1. Importação de Arquivos XML

Esse Job  é um Job Global, responsável por buscar os documentos armazenados na pasta de Recebimento (parametrizados em *Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > Integrações > Fiscal > Dados Fiscais* > *Importação/Envio de Arquivo XML > 'Diretório Padrão para Importação dos Arquivos XML*') e distribuí-los por coligada. Neste momento, nenhuma validação é feita. Após a execução desse Job, os documentos lidos são exibidos no *“Monitor de Arquivos XML”* com o status **‘**Pendente’,  aguardando a ação do segundo Job.

O ideal é que a execução deste job seja agendada, assim, periodicamente o mesmo será executado de forma automática, buscando os XML disponibilizados.

Informamos que somente serão importados os XML que obedeçam totalmente a todos os requisitos do schema definido pela SEFAZ.

Para maiores detalhes acesse [http://tdn.TOTVS.com/display/public/LRM/CLB\_0002\_Jobs](https://tdn.totvs.com/display/public/LRM/CLB_0002_Jobs)



### 3.2. Serviço de Consulta de Arquivo XML

Esse Job é responsável por validar o arquivo XML do documento enviado, de acordo com o tipo de documento em questão (CT-e, NF-e, NFS-e, etc.), através da chamada do serviço especifico para cada um deles. Serão verificados todos os documentos lidos pelo 1º Job. Caso o documento esteja válido, o registro do arquivo é excluído do monitor, e passa a ser exibido na tela de cadastro dos XML (*"Compras > Importação de Arquivo XML - Cadastro XML"*), indicando que o mesmo foi incluído no sistema com sucesso.

O ideal é que a execução deste job seja agendada, assim periodicamente o mesmo será executado de forma automática.

Caso ocorra algum problema o XML será criado na base de dados com o status 'Inconsistente'. Para verificar o erro ocorrido, basta um duplo clique no registro para que seja exibido o seu Log onde o problema será demonstrado. Quando o arquivo está Inconsistente, é necessário corrigir a causa do erro para poder tentar incluí-lo no sistema. Após a correção do erro basta alterar o seu status para 'Pendente', através do processo *“Alterar status do arquivo”* e o Job tentará recebê-lo automaticamente em sua próxima execução. 

Estando o XML validado ele será incluído no cadastro de XML em *"Compras > Importação de Arquivo XML - Cadastro XML"*.



 

### 4\. Inclusão de Movimento Através de XML - NF-e 

Conforme já dissemos o processo de Inclusão Manual de Movimento a partir de um XML  poderá ser acessado tanto a partir da visão dos movimentos de entrada como da tela do cadastro de XML. Detalharemos cada um deles a seguir.



Para acessar o processo *"Inclusão de Movimento Através de XML - NF-e"* da visão de movimentos basta ir em *"Compras > Recebimento de Materiais > Seleção do Tipo de Movimento e Filial > Processos > Inclusão de Movimento através de XML - NF-e".*

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_13-21-24.png?version=1&modificationDate=1534522884000&api=v2)




O sistema irá lhe apresentar a tela de tradução do XML para que você informe quais são os XML cujos movimentos você deseja gerar. Para incluir os XML no processo basta clicar no botão *"Adicionar Nota"*.



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_13-23-16.png?version=1&modificationDate=1534522996000&api=v2)



O sistema lhe apresentará a tela onde você poderá filtrar os XML desejados, assim, informe o critério para seleção dos XML e atendendo ao mesmo, o sistema apresentará todos os XML válidos, do tipo NF-e, cujo destinatário é a filial informada na entrada da visão de movimentos e que ainda não geraram movimento. Marque os XML cujos movimentos você deseja gerar.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/075.png?version=2&modificationDate=1454695105000&api=v2)

Você poderá selecionar vários XML para realizar suas devidas traduções, sendo que os mesmos serão apresentados ordenados através do seu ID (identificador do XML) e número da NF-e em um formato de lista. Ao navegar entre os registros, o sistema atualizará automaticamente as informações contidas nas abas *“Identificação”, “Tradução de Itens” e “Tributação”.*

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_15-18-14.png?version=1&modificationDate=1534529893000&api=v2)



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_15-19-49.png?version=1&modificationDate=1534529989000&api=v2)




 Caso queira excluir algum movimento do processo, basta selecioná-lo e clicar no botão "Remover Movimento". 

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_15-21-56.png?version=1&modificationDate=1534530116000&api=v2)



É importante salientar que quando o processo de Inclusão de Movimento Através do XML for acessado a partir da visão de movimentos, os novos movimentos serão gerados com o tipo de movimento corrente, ou seja, o tipo de movimento informado na entrada da visão.



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_15-25-42.png?version=1&modificationDate=1534530342000&api=v2)




Para acessar o processo *"Inclusão de Movimento Através de XML - NF-e"* a partir do cadastro de XML vá em *"Compras > Importação de Arquivo XML - Cadastro XML" ,* selecione os XML cujos movimentos serão gerados e execute o processo *"Inclusão de Movimento através de XML *\- NF-e*".*

 *![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_15-34-32.png?version=1&modificationDate=1534530872000&api=v2)*

Neste caso você poderá selecionar vários XML para realizar suas devidas traduções, inclusive de filiais diferentes, desde que o status dos mesmos seja 'Válido', o tipo dos mesmos seja 'NF-e' e que ainda não tenham gerado movimento. Tais XML serão apresentados na tela de tradução ordenados através do seu ID (identificador do XML) e número da NF-e em um formato de lista. Ao navegar entre os registros, o sistema atualizará automaticamente as informações contidas nas abas *“Identificação”, “Tradução de Itens” e “Tributação”.*

Além disso, da mesma forma que na visão de Movimentos aqui também você poderá optar por não selecionar nenhum XML específico e quando o sistema apresentar a tela de tradução você poderá informar quais são os XML cujos movimentos você deseja gerar, bastando para isso clicar no botão "Adicionar Nota", só que, neste caso, o sistema apresentará para sua seleção somente os XML que são da filial informada no contexto do sistema.

É importante salientar também que quando o processo de Inclusão de Movimento Através do XML for acessado a partir da tela de cadastro de XML, o tipo de movimento dos novos movimentos a serem criados será automaticamente definido pelo sistema com base na fórmula informada no campo 'Fórmula Tipo Mov. Para Recebimento de NF-e dos parâmetros de cada filial. Veja maiores detalhes no item 2 deste documento.



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_15-39-50.png?version=1&modificationDate=1534531190000&api=v2)

Os demais dados e procedimentos da "Inclusão de Movimento Através de XML - NF-e" independem de onde o processo foi acionado e iremos descrevê-los a seguir.



A aba *“Identificação”*, apresentará as informações gerais do movimento selecionado.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_15-41-52.png?version=1&modificationDate=1534531312000&api=v2)

Serão apresentados os seguintes dados: 

-   Destinatário / Filial – Filial do movimento;
-   Emitente / Fornecedor – Fornecedor dos produtos;
-   Chave de Acesso da NF-e;
-   Série da NF-e;
-   Número do Documento - Número da NF-e;
-   Data de Emissão da NF-e;
-   Tipo de Movimento no qual a NF-e foi inserida.

Estes dados, em sua maioria, são importados do XML e nenhum deles poderá ser alterado.

Será possível vincular o XML a um movimento de pedido existente na base de dados, bastando para isso que você marque o campo 'Receber Pedido' e clique no ícone "Incluir" para informar o(s) pedido(s) que será(ão) recebido(s) para este XML.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_15-43-26.png?version=1&modificationDate=1534531406000&api=v2)

O sistema apresentará uma tela de filtros para que você selecione o(s) pedido(s) a ser(em) vinculado(s) ao movimento, sendo que o sistema filtrará apenas os pedidos que geram movimentos do tipo de movimento que será criado.

No nosso caso, como o movimento que será gerado é do tipo 1.2.12, somente os pedidos que podem ser faturados para este tipo de movimento estarão disponíveis para realizar o vínculo.

Marque os pedidos que serão vinculados com a NF-e e clique em "OK".

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/004.png?version=1&modificationDate=1457375422000&api=v2)

O sistema irá associar os pedidos selecionados ao movimento que está sendo gerado e os apresentará na tela.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_15-52-13.png?version=1&modificationDate=1534531933000&api=v2)

Ao ser(em) informado(s) o(s) pedido(s), o sistema imediatamente efetuará o vínculo entre a NF-e e o(s) mesmo(s), caso as informações de ambos sejam correspondentes. 

Este vínculo é feito com base no Produto informado no cadastro "**Produtos para Importação de XML**". Caso seja identificado um produto com o mesmo IDPRD na lista de pedidos, o sistema cria o relacionamento. Quando existem vários pedidos para o mesmo produto da NF-e, o sistema cria o relacionamento para cada um utilizando a seguinte regra:

-   Ao criar o primeiro relacionamento com o item do pedido, o sistema automaticamente verifica se ainda existe saldo do produto em questão para a realização de novos vínculos. Caso exista, é realizada uma busca por itens de pedido que possuam o **mesmo** preço unitário do item já vinculado.
-   Em situações onde o preço do(s) produto(s) no(s) pedido(s) possam variar, foi criada a possibilidade de utilizar o recurso de tolerância, ou seja, pode ser definido no cadastro de produto uma tolerância inferior e/ou superior para o preço. Desta forma o sistema utilizará esta margem na pesquisa pelo(s) produto(s) no(s) pedido(s). Segue configuração necessária:

O Tipo de movimento de NF-e "**movimento de destino**" deve ser parametrizado para utilizar tolerância por "Preço" ou "Quantidade e Preço".

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-1-18_11-57-36.png?version=1&modificationDate=1516287476000&api=v2)

No cadastro do produto devem ser preenchidos os campos Tolerância Preço (%) → Inferior e/ou Superior. Lembre-se que este campo se refere ao percentual que será utilizado no cálculo.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-1-18_11-54-56.png?version=1&modificationDate=1516287314000&api=v2)

**Importante:** 

-   A tolerância é um recurso já existente para o processo de faturamento, ou seja, deve ser analisado se o mesmo pode ser utilizado.
-   Durante o recebimento da NF-e este percentual será aplicado ao preço unitário do item do pedido relacionado ao produto da nota. Exemplo:

    Pedidos
    1º Pedido - Produto X, Quantidade 1 UN, Preço R$ 10,00
    2º Pedido - Produto X, Quantidade 1 UN, Preço R$ 10,96
    3º Pedido - Produto X, Quantidade 1 UN, Preço R$ 10,96
    4º Pedido - Produto X, Quantidade 1 UN, Preço R$ 10,97
    5º Pedido - Produto X, Quantidade 1 UN, Preço R$ 11,00

    Nota Fiscal
    Produto X, Quantidade 5 UN, Preço R$ 10,50

    Caso **não** seja utiliza a tolerância, o sistema vai relacionar o item da nota ao Item do primeiro pedido, ficando ainda um saldo de 4 UN a serem traduzidas.
    Caso **seja** utilizada uma tolerância superior e inferior de 10%,   o sistema realizará a pesquisa pelos produtos utilizando a seguinte margem:

    1º Pedido - Produto X, Quantidade 1 UN, Preço entre R$ 9,00 e R$ 11,00 
    2º Pedido - Produto X, Quantidade 1 UN, Preço entre R$ 9,864 e R$ 12,056 
    3º Pedido - Produto X, Quantidade 1 UN, Preço entre R$ 9,864 e R$ 12,056 
    4º Pedido - Produto X, Quantidade 1 UN, Preço entre R$ 9,873 e R$  12,067
    5º Pedido - Produto X, Quantidade 1 UN, Preço entre R$ 9,90 e R$ 12,10 

    Desta forma todos os itens dos pedidos serão relacionados ao produto da NF-e.



Outros pedidos de compras poderão ser adicionados a qualquer momento.

Na aba *"Identificação"* será informado ainda se a tela de edição do movimento será aberta ao fim do processo e se consequentemente o movimento poderá ser editado nesse momento.

Assim, caso queira optar por abrir o movimento automaticamente logo após a sua tradução basta deixar que o campo 'Abrir a Edição do Movimento', permaneça marcado, visto que o mesmo já virá assinalado por default.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_15-53-0.png?version=1&modificationDate=1534531980000&api=v2)

Caso este campo seja desmarcado, o sistema efetuará a inclusão através do XML  e retornará para a tela do cadastro de XML ou para a visão de Movimentos conforme a tela de onde o processo foi acionado.

Vejamos as demais abas do processo:

Na aba *"Tradução de Itens"* serão apresentados os dados relativos aos itens da NF-e.

Caso o XML não esteja vinculado a um pedido o sistema apresentará além dos dados do item no XML, a Unidade para Importação de XML, o Código e o Nome do Produto para Importação de XML, ou seja os dados do produto correspondente em sua base de dados. O sistema verificará essas informações nas tabelas "Unidades para Importação de Arquivo XML" e "Produtos para Importação de Arquivo XML".

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_16-23-17.png?version=1&modificationDate=1534533796000&api=v2)



Caso ao verificar estas tabelas o sistema não encontre os dados correspondentes aos produtos constantes do XML, você poderá neste momento efetuar manualmente a tradução dos itens e as informações fornecidas por você serão automaticamente inseridas nestas tabelas. 

Para informar qual é o produto da sua base de dados que é correspondente ao produto constante do XML clique no campo 'Produto Tradução' e clique na seta da lista de opções. O sistema abrirá um lookup onde você poderá selecionar o produto desejado através da informação do código ou do nome do mesmo.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_16-25-22.png?version=1&modificationDate=1534533921000&api=v2)

Conforme a informação fornecida o sistema lhe apresentará a lista dos produtos disponíveis na sua base de dados e que atendem à seleção informada.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_16-27-0.png?version=1&modificationDate=1534534019000&api=v2)

O produto selecionado irá para a tela de *"Tradução de Itens"* e automaticamente será gravado pelo sistema na tabela *"Produtos para Importação de XML"*.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_16-28-14.png?version=1&modificationDate=1534534094000&api=v2)

O mesmo processo poderá ser efetuado para as unidades de medida existentes no XML e que não tenham sido traduzidas pelo sistema.

Além de incluir produtos e unidades que não foram traduzidos você poderá alterar os dados que o sistema trouxe na tradução optando por um outro produto ou unidade diferentes daqueles indicados pelo sistema, bastando para isso clicar nos campos 'Unidade Tradução' ou 'Produto Tradução' e fornecer as informações desejadas.

Caso o XML esteja vinculado a pedido(s) os campos 'Código do Produto de Tradução' e 'Produto Tradução' permanecerão em branco e o sistema apresentará além dos dados do item no XML, os campos relativos ao Pedido. Estes dados também serão preenchidos com base no conteúdo das tabelas "Unidades para Importação de Arquivo XML" e "Produtos para Importação de Arquivo XML".

Assim, caso o campo "Receber Pedido" esteja marcado, os quatro campos referentes ao pedido (Número do Pedido, Código do Produto do Pedido, Número Sequencial do Item no Pedido e o Nome do Produto do Pedido) serão exibidos na aba *"Tradução de Itens".*

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_16-30-35.png?version=1&modificationDate=1534534234000&api=v2)

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_16-34-48.png?version=1&modificationDate=1534534487000&api=v2)

Caso durante o processo de Inclusão do Movimento via XML, o campo "Receber Pedido" seja, em algum momento, desmarcado, os campos referentes ao pedido (Número do Pedido, Código do Produto do Pedido, Número Sequencial do Item no Pedido e o Nome do Produto do Pedido) não mais serão apresentados em tela, já que não haverá a necessidade de utilização dos mesmos.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_16-36-17.png?version=1&modificationDate=1534534577000&api=v2)

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_16-38-35.png?version=1&modificationDate=1534534714000&api=v2)

Você poderá alterar o produto do pedido que foi informado pelo sistema, bastando para isso, selecionar o item cujo produto do pedido deseja alterar, clicar no campo 'Produto no Pedido' e clicar na seta da lista de opções para que os produtos dos pedidos vinculados ao XML sejam apresentados. 

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_16-42-26.png?version=1&modificationDate=1534534945000&api=v2)


Clique então no botão do lookup do produto.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/044.png?version=1&modificationDate=1453977260000&api=v2)


O lookup exibirá o(s) produto(s) do(s) pedido(s) de compra vinculado(s) ao XML, e que ainda possuem saldo a receber, para que você selecione um deles.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_16-43-25.png?version=1&modificationDate=1534535005000&api=v2)

Se nesse momento ainda existir algum item no XML cuja tradução ainda não consta da tabela *"Produtos para Importação de XML"* o sistema não conseguirá localizá-lo nos pedidos vinculados, mas você poderá informar a tradução diretamente nesta tela.

Caso selecione o produto a partir do campo  'Produto Tradução' o sistema exibirá todos os registros da base para que você possa definir qual produto será utilizado na amarração, já se o produto existir em um dos pedidos vinculados clique no campo 'Produto do Pedido' e o lookup exibirá todos os produtos do(s) pedido(s) de compra vinculado(s) ao XML, e à medida em que a tradução estiver sendo realizada, o sistema irá consumir o saldo dos pedidos até que os mesmos sejam zerados.

Outro recurso disponível na aba *"Tradução de Itens"* é o botão "Múltiplos".

O botão Múltiplos poderá ser utilizado quando o pedido selecionado pelo sistema não possuir quantidade suficiente para realizar a tradução do produto.

Assim, ao clicar no botão "Múltiplos", será criada uma réplica da linha selecionada para que o produto possa ser associado a outro registro.

Vamos considerar o nosso exemplo, onde o produto '6.0.0.01.8373'  no XML tem a quantidade 1,00, tendo sido 0,50 solicitada no pedido 26790 e mais 0,50 solicitada no pedido 111111 sendo que ambos os pedidos foram vinculados ao XML.

Na tela de *"Tradução de Itens"* o sistema relacionará o item sempre ao primeiro pedido vinculado ao XML.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_16-44-15.png?version=1&modificationDate=1534535055000&api=v2)


Poderemos informar então que a quantidade restante no XML foi consumida no pedido 111111.

Para isso selecione o produto e clique no botão "Múltiplos".

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_19-55-35.png?version=1&modificationDate=1534546535000&api=v2)

No registro já existente o sistema irá alterar a quantidade recebida para o produto, informando a quantidade total do pedido vinculado ao item, e irá inserir um novo registro com o produto e sua quantidade restante.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_19-57-3.png?version=1&modificationDate=1534546623000&api=v2)

A partir daí você irá proceder da mesma forma que na alteração do pedido, ou seja, clique no campo 'Produto no Pedido' e clique na seta da lista de opções.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_19-58-43.png?version=1&modificationDate=1534546723000&api=v2)

Clique então no ícone do lookup do produto.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_20-0-11.png?version=1&modificationDate=1534546811000&api=v2)

 O lookup exibirá o(s) produto(s) do(s) pedido(s) de compra vinculado(s) ao XML, e que ainda possuem saldo a receber para que você selecione um deles.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_20-0-53.png?version=1&modificationDate=1534546853000&api=v2)

Ao ser selecionado o pedido, seus dados automaticamente irão para a aba *"Tradução de Itens".*

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_20-4-39.png?version=1&modificationDate=1534547081000&api=v2)

Na aba *“Tributação de Itens”* serão exibidos todos os tributos parametrizados no tipo de movimento do movimento que será gerado.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_20-5-6.png?version=1&modificationDate=1534547106000&api=v2)

Na parte superior da tela, em *“Tributação da Nota”* serão carregadas as informações relativas aos tributos do movimento.

Na parte inferior da tela a visão contida no grupo *“Tributação dos Produtos”* será responsável por exibir os impostos dos produtos (itens de movimento).

O preenchimento dos valores relativos aos tributos (base de cálculo, alíquota e valor) será efetuado obedecendo à configuração do campo 'Busca Valores TOTVS Colab' do respectivo tipo de movimento.

Para verificar a sua configuração vá em *"Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > 04.06 - Gestão Compras > 04.06.05 - Recebimentos de Materiais"* e no tipo de movimento desejado consulte este campo em *"Fis - Tributação - Item" e 'Fis - Tributação - Movimento"*. 

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/050.png?version=1&modificationDate=1453989964000&api=v2)

O sistema informará os valores conforme o preenchimento do campo 'Busca Valores TOTVS Colab' com uma das opções a seguir:

-   XML: Esta opção deverá ser selecionada caso deseje que os valores do tributo sejam aqueles recebidos do arquivo XML da NF-e, sem a necessidade de comparação com o tipo de movimento;


-   XML - Calcular valor do ICMS ST: Disponível somente para o tributo ICMS ST. Esta opção deverá ser selecionada caso deseje que os valores do tributo sejam aqueles recebidos do arquivo XML da NF-e, sem a necessidade de comparação com o tipo de movimento. Porém, ao selecionar esse opção, o sistema irá calcular o valor do ICMS ST multiplicando Base de Cálculo do ICMS ST x Aliquota do ST - valores esses que serão selecionados do XML.

             Exemplo: Base de Cálculo do ICMS ST no XML = 20 e Aliquota do ICMS ST no XML = 18%. Dessa forma, o tributo seria carregado no Movimento com Valor do ICMS ST = 3,6

-   Tipo de Movimento - Não comparar com XML: Esta opção deve ser selecionada caso deseje que todas as informações do tributo sejam calculadas/buscadas pelo sistema conforme a parametrização do tipo de movimento, sem a necessidade de comparação com os valores advindos do arquivo XML;


-   Tipo de Movimento - Comparar com XML: Esta opção deve ser selecionada caso deseje que todas as informações do tributo sejam calculadas/buscadas pelo sistema, mas elas devem ser comparadas com as informações advindas do XML. Caso tenha optado por executar esse processo sem abrir a edição do movimento, caso existam diferenças entre os tributos calculados e os constantes do XML, ao final da execução o sistema irá lhe apresentar uma mensagem com essa informação, bastando que você vá à edição do movimento se quiser alterar os valores que foram calculados. Já caso tenha optado por executar esse processo e 'Abrir a Edição do Movimento' quando for solicitada a gravação do movimento o sistema abrirá a tela com a diferença dos tributos caso existam. Detalharemos essa opção mais a frente.
-   XML - Incluir Valor do ICMS Próprio no ST: Disponível somente para o tributo ICMS ST. Esta opção deverá ser selecionada caso deseje que os valores do tributo sejam aqueles recebidos do arquivo XML da NF-e, sem a necessidade de comparação com o tipo de movimento. Porém, ao selecionar esse opção, o sistema somará o Valor do ICMS Próprio, ao Valor do ICMS ST no momento da importação do XML - valores esses que serão selecionados do XML. Exemplo: Valor do ICMS no XML = 5 e Valor do ICMS ST no XML = 12. Dessa forma, o tributo seria carregado no Movimento com Valor do ICMS = 5 e o Valor do ICMS ST = 17.

Para finalizar a execução da rotina *"Inclusão de Movimento através de XML - NF-e"* realizando a inclusão do movimento, basta em qualquer uma das telas do processo clicar no botão 'Executar'.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_20-8-17.png?version=1&modificationDate=1534547298000&api=v2)

Se o campo 'Abrir Edição do Movimento' não estiver marcado o sistema efetuará a execução do processo.

Caso tenha optado por não 'Abrir a Edição do Movimento' após a execução do processo o sistema apresentará a tela com o resultado do processamento:



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_20-14-10.png?version=1&modificationDate=1534547650000&api=v2)

Se os tributos do tipo de movimento estiverem parametrizados como "Tipo de Movimento - Comparar com XML" e for encontrada alguma diferença entre os valores calculados pelo sistema e os valores constantes do XML o movimento será incluído normalmente mas ao final do processo o sistema avisará e apresentará o identificador do movimento onde a divergência foi detectada.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_20-15-5.png?version=1&modificationDate=1534547706000&api=v2)

Caso tenha optado por 'Abrir a Edição do Movimento', ao executar o processo, o sistema automaticamente abrirá a tela do movimento que está sendo gerado.



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/095.png?version=1&modificationDate=1455894249000&api=v2)



Você poderá acessar as abas do movimento e conforme suas permissões de acesso poderá incluir dados ou alterar os dados existentes.

Após finalizar a visualização e/ou edição do movimento basta clicar em *"Salvar"* ou em *"OK"*.

Caso no tipo de movimento do movimento que está sendo gerado o campo 'Busca Valores TOTVS Colab' dos tributos esteja configurado para "Tipo de Movimento - Comparar com XML" o sistema abrirá a tela com as diferenças dos tributos caso existam.  

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/102.png?version=1&modificationDate=1470074543000&api=v2)

Caso seja necessário basta clicar na coluna 'Valor Correto' e alterar para o valor constante do XML e clicar em Salvar.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/104.png?version=1&modificationDate=1470075885000&api=v2)


Caso vá manter os valores que foram calculados pelo sistema conforme parametrizado no tipo de movimento basta clicar em 'Salvar' e o sistema finalizará a execução do processo efetuando a gravação do movimento.

Em caso de posterior exclusão do movimento de NF-e criado, o XML em questão será desvinculado do movimento e voltará ao status anterior à inclusão, para que seja possível vincular um novo movimento ao mesmo. 



**Rotina**

**Tipo de Operação**

**Opção de Menu**

**Regras de Negócio**

Criação de Fórmulas

Alteração

Serviços Globais > Fórmulas > TOTVS Gestão de Estoque, Compras e Faturamento

Conforme definições constantes deste documento

Definições de Cli/For para Importação de XML

Criação

Cadastros > Mais... > Tabelas Auxiliares > Definições de Cli/For para Importação de XML

Conforme definições constantes deste documento

Inclusão de Movimento através de XML - NF-e

Criação

Compras > Importação de Arquivo XML - Cadastro XML > Processos > Inclusão de Movimento através de XML - NF-e

Conforme definições constantes deste documento

Natureza Inversa para Importação de XML

Criação

Cadastros > Natureza Fiscal > Anexos > Natureza Inversa para Importação de XML

Conforme definições constantes deste documento

Parâmetros por Filial

Alteração

Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > Integrações > Fiscal > Dados Fiscais > Parâmetros por Filial

Conforme definições constantes deste documento

Produtos para Importação de XML

Criação

Cadastros > Produtos > Anexos > Produtos para Importação de XML

Conforme definições constantes deste documento

Unidades para Importação de XML

Criação

Cadastros > Mais... > Tabelas Auxiliares > Unidade > Anexos > Unidades para Importação de XML

Conforme definições constantes deste documento

## Tabelas Utilizadas:

-   DCFOP - Naturezas Fiscais (CFOP);

-   DREGRAICMS - Regras de ICMS;

-   DREGRAIPI - Regras de IPI;
-   GFORMULA - Fórmulas;
-   TDEFINICOESCFOCOLAB - Definições de Cli/For - Totvs Colaboração;
-   TITMMOV - Itens de Movimento;
-   TLOGCOMPIMPOSTOCOLAB - Diferenças de Tributos Calculados x Tributos XML;
-   TMOV - Movimentos;
-   TNATUREZACOLAB - Naturezas Inversas Totvs Colaboração;
-   TNFEENTRADA - Notas Fiscais (NF-e) Recebidas;
-   TPARFILIAL - Parâmetros da Filial;
-   TPRDCFOCOLAB - Produtos Totvs Colaboração;
-   TTRBMOV - Tributos do Movimento;
-   TUNDCFOCOLAB - Unidades Totvs Colaboração;
-   TXMOCOLAB - XML Recebidos pelo Totvs Colaboração.



 **Este documento é material de especificação dos requisitos de inovação, trata-se de conteúdo extremamente técnico.**                                                             

![Imagem](https://centraldeatendimento.totvs.com/plugins/servlet/confluence/placeholder/unknown-macro?name=rate&locale=en_US&version=2)
