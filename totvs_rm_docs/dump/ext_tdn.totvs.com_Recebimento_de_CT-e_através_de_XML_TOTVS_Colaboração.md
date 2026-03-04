# 1277238 MATFATCMPCRM01-1120 DT Recebimento de CT-e através de XML TOTVS Colaboração

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=322150273](https://tdn.totvs.com/pages/releaseview.action?pageId=322150273)
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

MATFATCMPCRM01-1120

**Release de Entrega Planejada**

12.1.18 (Patch 150), 12.1.19 (Patch 109) e 12.1.20

**Réplica**

Não

**País**

( X ) Brasil  

## Objetivo

Todas as rotinas responsáveis pelo recebimento do conhecimento de transporte eletrônico foram reescritas, com o objetivo de melhorar a performance e tornar o processo mais simples e estável. Também foram refeitas todas as telas do processo atual, a fim de aprimorar a usabilidade do mesmo.

As melhorias de performance e de usabilidade das telas estão disponíveis  apenas para o TOTVS Colaboração 2.0 **a partir da versão 3.00 do XML**.

É importante salientar que para a utilização do TOTVS Colaboração é indispensável a contratação dos serviços da NeoGrid que é a responsável pelo processamento da leitura dos arquivos XML, pela comunicação com os webservices da SEFAZ e pelo retorno às consultas destes documentos. Estes, por sua vez, serão lidos e interpretados através da execução de JOBs específicos pelo TOTVS Gestão de Estoque, Compras e Faturamento para a devida atualização dos dados no sistema.



## Definição da Regra de Negócio



### 1.1. Natureza Fiscal (CFOP)

Quando um conhecimento de transporte eletrônico é enviado, ele contém uma natureza fiscal (CFOP) de saída, que caracteriza a operação. Para a empresa que recebe esse documento entretanto, devemos encontrar a natureza fiscal (CFOP) de entrada correspondente. Essa ‘Natureza Inversa’ é indispensável para a criação de um movimento de CT-e.

Para definir a Natureza Inversa de forma automática na geração do movimento de entrada, o TOTVS Gestão de Estoque, Compras e Faturamento utilizará os seguintes recursos:



### 1.1.1. Regra de Seleção da Natureza (RSN)

Para cada movimento de CT-e a ser incluído, o sistema irá encontrar a Natureza Inversa do CFOP constante do arquivo XML. Para isso, é necessário saber, através das parametrizações vigentes do tipo de movimento, se o movimento a ser criado seleciona a Natureza de Operação somente para o movimento, ou se deve ser selecionada também uma Natureza para o item de movimento. Para ambos os casos, será utilizada em primeiro lugar a Regra de Seleção da Natureza (RSN), rotina hoje já existente e que tem a finalidade de encontrar a Natureza de Operação baseada nas informações do movimento e parametrizações de várias tabelas tais como: Parâmetros do Tipo de Movimento, Produto, Classificação de Produto, Naturezas Fiscais, Regras de ICMS, Regras de IPI, etc..

Para verificar como está a parametrização da sua empresa vá na etapa *"Fis - Natureza"* dos Parâmetros dos Tipos de Movimento que serão utilizados na Inclusão de Movimento através de XML e verifique o preenchimento do campo 'Seleção Automática da Natureza'.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/007.png?version=1&modificationDate=1452253093000&api=v2)

Detalharemos a seguir como o sistema procederá conforme o tipo de Seleção Automática da Natureza definido para o tipo de movimento.



### 1.1.1.1. Seleção Automática da Natureza por Movimento

Neste caso, deverá ser encontrada obrigatoriamente uma Natureza de Operação analítica para o movimento.

Através dos dados do XML e das parametrizações e cadastros do sistema**,** a Regra de Seleção da Natureza irá encontrar a(s) natureza(s) possível(eis), de forma que:

-   Se a RSN encontrar apenas uma Natureza de Operação (CFOP) possível, o movimento de CT-e será incluído com o CFOP encontrado;
-   Se a RSN encontrar mais de uma Natureza de Operação (CFOP) possível, o sistema irá verificar as opções cadastradas como Natureza Inversa da CFOP extraída do XML.

No item 1.1.2 deste documento iremos detalhar como será o comportamento do sistema caso seja necessário utilizar o cadastro de Natureza Inversa do CFOP.



### 1.1.1.2. Seleção Automática da Natureza por Item de Movimento

Nesta situação, será realizado o mesmo procedimento já explicado anteriormente para encontrar a Natureza de Operação do movimento, com a diferença desta poder ser analítica ou sintética. 

Se for encontrada uma Natureza analítica, sua ‘Raiz’ (Natureza Sintética) deve ser extraída e considerada como a Natureza do movimento enquanto que a Natureza analítica será atribuída ao item.

Caso sejam encontradas 2 naturezas sintéticas possíveis, os campos natureza 1 e natureza 2 do movimento serão preenchidos caso ambos estejam parametrizados para o tipo de movimento, mas se existirem mais de 2 naturezas sintéticas possíveis, o sistema não será capaz de solucionar o conflito e, neste caso a natureza não será identificada, sendo preenchida a natureza do movimento com um CFOP de primeiro nível, ou seja, 1 ou 2 conforme a UF de origem do CT-e. 

Caso seja encontrada apenas a Natureza sintética, ela será atribuída ao movimento, e o procedimento de busca será realizado novamente para selecionar a Natureza do item. Para o item, a Regra de Seleção da Natureza irá considerar os dados do movimento e das demais tabelas citadas anteriormente (Parâmetros do Tipo de Movimento, Produto, Classificação de Produto, Naturezas Fiscais, Regras de ICMS, Regras de IPI, etc.).

Conforme já informado o sistema primeiramente executará as Regras de Seleção da Natureza, e caso as mesmas retornem mais de uma opção de CFOP para os itens do movimento, o sistema utilizará o cadastro das Naturezas Inversas que detalharemos a seguir:



### 1.1.2. Natureza Inversa 

No cadastro de Natureza de Operação (CFOP), de responsabilidade do sistema TOTVS Gestão Fiscal, foi criado o anexo *"Natureza Inversa TOTVS Colaboração"*  onde deverão ser cadastradas as possíveis naturezas de operação inversas para uma determinada natureza sintética.

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

No TOTVS Gestão de Estoque, Compras e Faturamento, o cadastro das naturezas inversas***,*** está disponível em *“Cadastros > Fiscais > Natureza Fiscal > Anexos > Natureza Inversa para Inclusão de XML ”*.

Você poderá acessar este Anexo a partir da visão de Naturezas ou a partir da tela de edição de uma Natureza específica.

Acesso a partir da visão de Naturezas

**
![Imagem](https://tdn.totvs.com/download/attachments/224106789/image2018-8-16_19-37-6.png?version=1&modificationDate=1534459025000&api=v2)

**

Acesso a partir da tela de edição da Natureza:

![Imagem](https://tdn.totvs.com/download/attachments/224106789/image2018-8-16_19-38-46.png?version=1&modificationDate=1534459126000&api=v2)


O sistema irá verificar a Natureza Inversa do CFOP constante do CT-e, ou seja as Naturezas Inversas devem estar cadastradas nas naturezas sintéticas de Saída. Assim, selecione o CFOP sintético para o qual você irá cadastrar as Naturezas Inversas e clique em *"Anexos > Natureza Inversa para Inclusão de XML"*.

Será apresentada a tela onde você poderá cadastrar as Naturezas Inversas a serem vinculadas à natureza sintética selecionada.

Informe a Natureza Inversa correspondente, marque o campo caso a mesma vá ser uma natureza 'Default' para esta natureza sintética e clique em 'Inserir'.

![Imagem](https://tdn.totvs.com/download/attachments/224106789/image2018-8-16_19-41-35.png?version=1&modificationDate=1534459295000&api=v2)

O sistema apresentará na tela a correspondência entre as naturezas inseridas, permitindo que as demais Naturezas Inversas dessa Sintética sejam incluídas, caso existam.

![Imagem](https://tdn.totvs.com/download/attachments/224106789/image2018-8-16_19-44-50.png?version=1&modificationDate=1534459489000&api=v2)

Informe todas as naturezas inversas de cada natureza sintética de saída e clique em *"OK"* ou *"Salvar"* para que o sistema as grave.

### 1.2. Unidade de Medida



Durante a tradução do XML, o Sistema utilizará como default da unidade de medida do item de movimento a unidade de controle do serviço selecionado (Cadastro de produto/serviço > aba Controle de Estoque > Unidade de Controle).

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/322150273/image2017-12-21_10-19-47.png?version=1&modificationDate=1513862388000&api=v2)



### 1.3 Coligada e Filial

O sistema utilizará o CNPJ informado no XML para, identificar qual é a Coligada e Filial a serem utilizadas durante o recebimento. Para isto, será considerada a seguinte ordem:

1.  Tomador
2.  Destinatário

### 2\. Parametrização



O Sistema permite informar um Serviço default para o vínculo automático durante a tradução do XML. Para isto, basta preencher o parâmetro "Produto/Serviço Default (Recebimento CT-e)" (Parâmetros por tipo de movimento > Etapa Importação/Envio de Arquivo XML).

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/322150273/image2018-8-17_21-2-39.png?version=1&modificationDate=1534550559000&api=v2)



O processo *"Inclusão de Movimento através de XML - CT-e"* está disponível na visão de Movimentos (*"Compras > Recebimento de Materiais > Seleção do Tipo de Movimento e Filial > Processos"*) e na tela de cadastro dos XML (*"Compras > Importação de Arquivo XML - Cadastro XML > Processos"*), sendo que o sistema se comportará de forma diferente dependendo da tela de onde o processo foi acionado, conforme detalharemos a seguir:

-   Caso você acesse o processo diretamente da visão de movimentos  (*"Compras > Recebimento de Materiais > Seleção do Tipo de Movimento e Filial > Processos"*) o sistema entenderá que deve ser gerado um movimento do tipo que você informou ao entrar nesta tela, ou seja, o movimento será gerado de acordo com os parâmetros do tipo de movimento corrente;


-   Caso você acesse o processo na tela de cadastro do XML (*"Compras > Importação de Arquivo XML - Cadastro XML > Processos"*) a definição do tipo de movimento a ser gerado será através do parâmetro "Tipo de Movimento para Inclusão Automática de CT-e" (*Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > Integrações > Fiscal > Parâmetros por Filial > Importação/Envio de Arquivos 2/2).* Assim, optando por incluir o XML a partir desta tela o preenchimento do parâmetro passa a ser obrigatório.



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/322150273/image2018-8-17_21-8-14.png?version=1&modificationDate=1534550895000&api=v2)



O Sistema permite que a unidade de medida seja levada do pedido para o movimento de CT-e no caso de faturamento. Para isto, basta marcar o parâmetro "Busca unidade do pedido (processo de faturamento)" (*Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > Integrações > Fiscal > Parâmetros por Filial > *Importação/Envio de Arquivos 2/2*),* neste caso, a mesma sobrescreverá a unidade de controle do serviço.



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/322150273/image2018-8-17_21-9-20.png?version=1&modificationDate=1534550960000&api=v2)

### 3\. Importação e Gravação do XML

No processo de importação e gravação do XML, o sistema irá executar os seguintes procedimentos:



### 3.1. Importação de Arquivos XML

Esse Job  é um Job Global, responsável por buscar os documentos armazenados na pasta de Recebimento (parametrizados em *Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > Integrações > Fiscal > Dados Fiscais* > Importação/Envio de Arquivo XML > 'Diretório Padrão para Importação dos Arquivos XML') e distribuí-los por coligada. Neste momento, nenhuma validação é feita. Após a execução desse Job, os documentos lidos são exibidos no *“Monitor de Arquivos XML”* com o status **‘**Pendente’,  aguardando a ação do segundo Job.

O ideal é que a execução deste job seja agendada, assim, periodicamente o mesmo será executado de forma automática, buscando os XML disponibilizados.

Informamos que somente serão importados os XML que obedeçam totalmente a todos os requisitos do schema definido pela SEFAZ.

Para maiores detalhes acesse [http://tdn.TOTVS.com/display/public/LRM/CLB\_0002\_Jobs](https://tdn.totvs.com/display/public/LRM/CLB_0002_Jobs)



### 3.2. Serviço de Consulta de Arquivo XML

Esse Job é responsável por validar o arquivo XML do documento enviado, de acordo com o tipo de documento em questão (CT-e, NF-e, NFS-e, etc.), através da chamada do serviço especifico para cada um deles. Serão verificados todos os documentos lidos pelo 1º Job. Caso o documento esteja válido, o registro do arquivo é excluído do monitor, e passa a ser exibido na tela de cadastro dos XML (*"Compras > Importação de Arquivo XML - Cadastro XML"*), indicando que o mesmo foi incluído no sistema com sucesso.

O ideal é que a execução deste job seja agendada, assim periodicamente o mesmo será executado de forma automática.

Caso ocorra algum problema o XML será criado na base de dados com o status 'Inconsistente'. Para verificar o erro ocorrido, basta um duplo clique no registro para que seja exibido o seu Log onde o problema será demonstrado. Quando o arquivo está Inconsistente, é necessário corrigir a causa do erro para poder tentar incluí-lo no sistema. Após a correção do erro basta alterar o seu status para 'Pendente', através do processo *“Alterar Status do Arquivo”* e o Job tentará recebê-lo automaticamente em sua próxima execução. 

Estando o XML validado ele será incluído no cadastro de XML em *"Compras > Importação de Arquivo XML - Cadastro XML"*.

 

### 4\. Inclusão de Movimento Através de XML - CT-e 

Conforme já dissemos o processo de Inclusão Manual de Movimento a partir de um XML  poderá ser acessado tanto a partir da visão dos movimentos de entrada como da tela do cadastro de XML. Detalharemos cada um deles a seguir.



Para acessar o processo *"Inclusão de Movimento Através de XML - CT-e"* da visão de movimentos basta ir em *"Compras > Recebimento de Materiais > Seleção do Tipo de Movimento e Filial > Processos > Inclusão de Movimento através de XML - CT-e".*

O sistema irá lhe apresentar a tela de tradução do XML para que você informe quais são os XML cujos movimentos você deseja gerar. Para incluir os XML no processo basta clicar no botão *"Adicionar XML"*.



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/322150273/image2018-8-20_12-58-45.png?version=1&modificationDate=1534780726000&api=v2)



O sistema lhe apresentará a tela onde você poderá filtrar os XML desejados, assim, informe o critério para seleção dos XML e atendendo ao mesmo, o sistema apresentará todos os XML válidos, do tipo CT-e e que ainda não geraram movimento. Marque os XML cujos movimentos você deseja gerar.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/322150273/075.png?version=1&modificationDate=1513705929000&api=v2)

Você poderá selecionar vários XML para realizar suas devidas traduções, sendo que os mesmos serão apresentados ordenados através do seu ID (identificador do XML) e número do documento em um formato de lista. Ao navegar entre os registros, o sistema atualizará automaticamente as informações contidas nas abas *“Identificação”, “Tradução de Itens” e “Tributação”.*





 Caso queira excluir algum XML do processo, basta selecioná-lo e clicar no botão "Remover XML". 

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/322150273/image2018-8-20_13-1-30.png?version=1&modificationDate=1534780891000&api=v2)



É importante salientar que quando o processo de Inclusão de Movimento Através do XML for acessado a partir da visão de movimentos, os novos movimentos serão gerados com o tipo de movimento corrente, ou seja, o tipo de movimento informado na entrada da visão.



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/322150273/image2018-8-20_13-3-15.png?version=1&modificationDate=1534780996000&api=v2)




Para acessar o processo *"Inclusão de Movimento através de XML - CT-e"* a partir do cadastro de XML vá em *"Compras > Importação de Arquivo XML - Cadastro XML" ,* selecione os XML cujos movimentos serão gerados e execute o processo *"Inclusão de Movimento através de XML - CT-e".*

 *![Imagem](https://centraldeatendimento.totvs.com/download/attachments/322150273/image2018-8-20_13-4-40.png?version=1&modificationDate=1534781080000&api=v2)*

Neste caso você poderá selecionar vários XML para realizar suas devidas traduções, inclusive de filiais diferentes, desde que o status dos mesmos seja 'Válido', o tipo dos mesmos seja 'CT-e' e que ainda não tenham gerado movimento. Tais XML serão apresentados na tela de tradução ordenados através do seu ID (identificador do XML) e número do documento em um formato de lista. Ao navegar entre os registros, o sistema atualizará automaticamente as informações contidas nas abas *“Identificação”, “Tradução de Itens” e “Tributação”.*

Além disso, da mesma forma que na visão de Movimentos aqui também você poderá optar por não selecionar nenhum XML específico e quando o sistema apresentar a tela de tradução você poderá informar quais são os XML cujos movimentos você deseja gerar, bastando para isso clicar no botão "Adicionar XML", só que, neste caso, o sistema apresentará para sua seleção somente os XML que são da filial informada no contexto do sistema.

É importante salientar também que quando o processo de Inclusão de Movimento Através do XML for acessado a partir da tela de cadastro de XML, o tipo de movimento dos novos movimentos a serem criados será automaticamente definido pelo sistema com base na parametrização. 

Os demais dados e procedimentos da "*"Inclusão de Movimento através de XML - CT-e"*" independem de onde o processo foi acionado e iremos descrevê-los a seguir.



A aba *“Identificação”*, apresentará as informações gerais do XML.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/322150273/image2018-8-20_13-6-44.png?version=1&modificationDate=1534781205000&api=v2)



Serão apresentados os seguintes dados: 

-   Destinatário / Filial – Filial do movimento;
-   Emitente / Fornecedor – Fornecedor;
-   Chave de Acesso do CT-e;
-   Série do CT-e;
-   Número do Documento - Número do CT-e;
-   Data de Emissão do CT-e;
-   Tipo de Movimento no qual o CT-e será inserido.

Estes dados, em sua maioria, são importados do XML e nenhum deles poderá ser alterado.

Será possível vincular o XML a um movimento de pedido existente na base de dados, bastando para isso que você marque o campo 'Receber Pedido' e clique no ícone "Incluir" para informar o(s) pedido(s) que será(ão) recebido(s) para este XML.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/322150273/image2018-8-20_13-8-4.png?version=1&modificationDate=1534781285000&api=v2)

O sistema apresentará uma tela de filtros para que você selecione o(s) pedido(s) a ser(em) vinculado(s) ao movimento, sendo que o sistema filtrará apenas os pedidos que geram movimentos do tipo de movimento que será criado.

No nosso caso, como o movimento que será gerado é do tipo 1.2.61, somente os pedidos que podem ser faturados para este tipo de movimento estarão disponíveis para realizar o vínculo.

Marque os pedidos que serão vinculados com o CT-e e clique em "OK".

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/322150273/image2017-12-21_11-31-42.png?version=1&modificationDate=1513866702000&api=v2)

O sistema irá associar os pedidos selecionados ao movimento que está sendo gerado e os apresentará na tela.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/322150273/image2018-8-20_13-21-53.png?version=1&modificationDate=1534782114000&api=v2)



Ao ser(em) informado(s) o(s) pedido(s), o sistema imediatamente efetuará o vínculo entre o CT-e e o(s) mesmo(s), caso as informações de ambos sejam correspondentes. 

Outros pedidos de compras poderão ser adicionados a qualquer momento.

Na aba *"Identificação"* será informado ainda se a tela de edição do movimento será aberta ao fim do processo e se consequentemente o movimento poderá ser editado nesse momento.

Assim, caso queira optar por abrir o movimento automaticamente logo após a sua tradução basta deixar que o campo 'Abrir a Edição do Movimento', permaneça marcado, visto que o mesmo já virá assinalado por default.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/322150273/image2018-8-20_13-23-5.png?version=1&modificationDate=1534782186000&api=v2)

Caso este campo seja desmarcado, o sistema efetuará a inclusão através do XML  e retornará para a tela do cadastro de XML ou para a visão de Movimentos conforme a tela de onde o processo foi acionado.

Vejamos as demais abas do processo:

Na aba *"Tradução de Itens"* serão apresentados os dados relativos ao item do CT-e, note que o sistema apresenta o mesmo com as seguintes características:

**Código do Serviço**: 001
**Serviço**: Serviço de Transporte

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/322150273/image2018-8-20_13-23-39.png?version=1&modificationDate=1534782220000&api=v2)



Caso o XML não esteja vinculado a um pedido o sistema apresentará além dos dados do item no XML, o Código do Serviço de Tradução e o Nome do Serviço de Tradução, ou seja os dados do serviço correspondente em sua base de dados. 

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/322150273/image2018-8-20_13-24-19.png?version=1&modificationDate=1534782260000&api=v2)

Você poderá neste momento efetuar manualmente a tradução do item, caso utilize sempre o mesmo Serviço para a entrada de CT-e, o mesmo pode ser definido via parametrização, para mais detalhe vide item 2.

Para informar qual é o serviço da sua base de dados, clique no campo 'Serviço Tradução' e clique na seta da lista de opções. O sistema abrirá um lookup onde você poderá selecionar o Serviço desejado através da informação do código ou do nome do mesmo.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/322150273/image2018-8-20_13-25-0.png?version=1&modificationDate=1534782301000&api=v2)

Conforme a informação fornecida o sistema lhe apresentará a lista dos Serviços disponíveis na sua base de dados e que atendem à seleção informada.

Você poderá alterar os dados que o sistema trouxe na tradução optando por um outro Serviço diferentes daquele indicado pelo sistema, bastando para isso clicar no campo 'Serviço Tradução' e fornecer as informações desejadas.

Caso o XML esteja vinculado a pedido(s) os campos 'Código do Serviço de Tradução' e 'Serviço Tradução' permanecerão em branco e o sistema apresentará além dos dados do item no XML, os campos relativos ao Pedido. 

Assim, caso o campo "Receber Pedido" esteja marcado, os quatro campos referentes ao pedido (Número do Pedido, Código do Serviço do Pedido, Número Sequencial do Item no Pedido e o Nome do Serviço do Pedido) serão exibidos na aba *"Tradução de Itens".*

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/322150273/image2018-8-20_13-25-56.png?version=1&modificationDate=1534782357000&api=v2)

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/322150273/image2018-8-20_13-27-17.png?version=1&modificationDate=1534782437000&api=v2)

Caso durante o processo de Inclusão do Movimento via XML, o campo "Receber Pedido" seja, em algum momento, desmarcado, os campos referentes ao pedido (Número do Pedido, Código do Serviço do Pedido, Número Sequencial do Item no Pedido e o Nome do Serviço do Pedido) não mais serão apresentados em tela, já que não haverá a necessidade de utilização dos mesmos.

Você poderá alterar o serviço do pedido que foi informado pelo sistema, bastando para isso, selecionar o item cujo serviço do pedido deseja alterar, clicar no campo 'Serviço do Pedido' e clicar na seta da lista de opções para que os produtos dos pedidos vinculados ao XML sejam apresentados. 

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/322150273/image2018-8-20_13-27-57.png?version=1&modificationDate=1534782477000&api=v2)


O lookup exibirá o(s) serviços(s) do(s) pedido(s) vinculado(s) ao XML, e que ainda possuem saldo a receber, para que você selecione um deles.

Caso selecione o serviço a partir do campo  'Serviço Tradução' o sistema exibirá todos os registros da base para que você possa definir qual serviço será utilizado na amarração, já se o serviço existir em um dos pedidos vinculados clique no campo 'Serviço do Pedido' e o lookup exibirá todos os serviços do(s) pedido(s) vinculado(s) ao XML.



Caso o serviço seja alterado, ou a unidade de medida precise ser ajustada, basta utilizar o Lookup de unidade de tradução contida na tela de tradução de itens.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/322150273/image2018-8-20_13-28-51.png?version=1&modificationDate=1534782532000&api=v2)



Na aba *“Tributação”* serão exibidos todos os tributos parametrizados no tipo de movimento do movimento que será gerado.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/322150273/image2018-8-20_13-29-29.png?version=1&modificationDate=1534782569000&api=v2)

Na parte superior da tela, em *“Tributação do CT-e”* serão carregadas as informações relativas aos tributos do movimento.

Na parte inferior da tela a visão contida no grupo *“Tributação do Serviço”* será responsável por exibir os impostos dos produtos (itens de movimento).



**Rotina**

**Tipo de Operação**

**Opção de Menu**

**Regras de Negócio**

*Inclusão de Movimento através de XML - CT-e*

Criação

Compras > Importação de Arquivo XML - Cadastro XML > Processos > Inclusão de Movimento através de XML *\- CT-e*

Conforme definições constantes deste documento

Natureza Inversa para Inclusão de XML

Criação

Cadastros > Natureza Fiscal > Anexos > Natureza Inversa para Inclusão de XML

Conforme definições constantes deste documento

Parâmetros por Filial

Alteração

Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > Integrações > Fiscal > Dados Fiscais > Parâmetros por Filial

Conforme definições constantes deste documento

## Tabelas Utilizadas:

-   DCFOP - Naturezas Fiscais (CFOP);

-   DREGRAICMS - Regras de ICMS;

-   DREGRAIPI - Regras de IPI;
-   TITMMOV - Itens de Movimento;
-   TMOV - Movimentos;
-   TNATUREZACOLAB - Naturezas Inversas Totvs Colaboração;
-   TNFEENTRADA - Conhecimentos de Transporte (CT-e) Recebidos;
-   TPARFILIAL - Parâmetros da Filial;
-   TTRBMOV - Tributos do Movimento;
-   TXMOCOLAB - XML Recebidos pelo Totvs Colaboração.

## Informações sobre recebimento de Cancelamento de CT-e: 

## [MATFATCMPCRM01-7101 DT Recebimento de Cancelamento de CT-e](/display/LRM/MATFATCMPCRM01-7101+DT+Recebimento+de+Cancelamento+de+CT-e)



 **Este documento é material de especificação dos requisitos de inovação, trata-se de conteúdo extremamente técnico.**                                                             

![Imagem](https://centraldeatendimento.totvs.com/plugins/servlet/confluence/placeholder/unknown-macro?name=rate&locale=en_US&version=2)
