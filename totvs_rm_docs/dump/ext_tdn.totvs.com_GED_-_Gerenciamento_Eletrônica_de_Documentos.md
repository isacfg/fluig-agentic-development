# GED - Gerenciamento Eletrônica de Documentos

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=270899168](https://tdn.totvs.com/pages/releaseview.action?pageId=270899168)
> **Domínio:** TDN (TOTVS Developer Network)

---

# Índice:

* * *

-   1[Objetivo:](#GEDGerenciamentoEletrônicadeDocumentos-Objetivo:)
-   2[Introdução:](#GEDGerenciamentoEletrônicadeDocumentos-Introdução:)
-   3[Configuração:](#GEDGerenciamentoEletrônicadeDocumentos-Configuração:)
-   4[Sincronismo do Usuário:](#GEDGerenciamentoEletrônicadeDocumentos-SincronismodoUsuário:)
-   5[Realizando Mapeamento:](#GEDGerenciamentoEletrônicadeDocumentos-RealizandoMapeamento:)
-   6[Envio de Arquivos:](#GEDGerenciamentoEletrônicadeDocumentos-EnviodeArquivos:)
-   7[Visualização do Arquivo:](#GEDGerenciamentoEletrônicadeDocumentos-VisualizaçãodoArquivo:)
-   8[Visualização de Logs:](#GEDGerenciamentoEletrônicadeDocumentos-VisualizaçãodeLogs:)
-   9[Envio de Relatórios](#GEDGerenciamentoEletrônicadeDocumentos-EnviodeRelatórios)

# Objetivo:

* * *

     O objetivo deste documento é trazer uma visão do que é e como funciona a funcionalidade GED - Gerenciamento Eletrônica de Documentos, e como é feita a sua configuração. 

# Introdução:

* * *

     O RM permite a integração com o Fluig para a sua utilização como servidor GED – Gerenciamento eletrônico de documentos. Está integração é realiza de uma base do RM para um servidor GED, ou seja, não permite múltiplos servidores GED. Após sua configuração, qualquer cadastro do RM passa a ter possibilidade de realizar o seu gerenciamento de arquivos, bastando apenas realizar os passos de mapeamento da pasta destino. 

# Configuração:

* * *

     Processo de Configuração da Linha RM x GED - Gerenciamento eletrônico de documentos:

-   [1º Passo:](#)
-   [2º Passo:](#)
-   [3º Passo:](#)

Para configurar a integração GED, acesse o módulo Integração, e os menus "Ferramentas | Parâmetros | 50.07 - Linha RM x GED (Gerenciamento Eletrônico de Documentos)".

 Clique para ver o Menu

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2020-6-16_16-31-3.png?version=1&modificationDate=1592335863737&api=v2)

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2020-6-16_16-32-50.png?version=1&modificationDate=1592335970123&api=v2)

Em seguida preencha as informações do servidor Fluig com as informações abaixo, para que o RM faça a comunicação com o Fluig.

-   Servidor: Endereço do servidor (Nome ou IP)
-   Porta: Porta a qual o Fluig está configurado
-   Porta FTP: Porta FTP a qual o Fluig está configurado (Padrão: 21)

     Clique aqui

    ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2021-5-27_17-28-11.png?version=1&modificationDate=1622147291173&api=v2)

-   Usuário: Nome do usuário administrador do Fluig
-   Senha: Senha do usuário administrador do Fluig
-   Empresa: Empresa cadastrada no Fluig
-   Integração Fluig: Marcar o flag caso seja o servidor Fluig
-   Matrícula: Preencher com o Usuário de Integração. (Obrigatório se a integração foi com o Fluig)
-   Protocolo: Protocolo a qual o Fluig está configurado
-   Grupo de Usuário: Nome do Grupo ao qual usuários do RM serão associados no Fluig após o Sincronismo
-   Senha Padrão: Senha padrão para o usuário sincronizado com o GED acessar o Fluig
-   Tipo Log: Quais eventos serão inseridos no Log



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2018-1-15_17-7-53.png?version=1&modificationDate=1516046874000&api=v2)




**Observação:**

O ambiente físico de intra-estrutura dos sistemas ECM e Fluig precisam estar configurados para permitir o tráfego de informações do RM pelas portas configuradas pelo FTP. Quando não são feitas alterações nas portas utilizadas pelo FTP, as portas padrões 20 e 21 são utilizadas pelo RM para fazer o upload dos arquivos.
Na estrutura dos sistemas ECM e Fluig existe um diretório utilizado para fazer o upload dos arquivos do RM através do FTP. É necessário dar permissão de escrita nesta pasta (no ambiente ECM ou Fluig) para o Usuário de Integração utilizado na parametrização da integração conseguir fazer o upload pelo FTP:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2020-6-16_16-41-20.png?version=1&modificationDate=1592336480333&api=v2)

Ao publicar um documento do RM para o ECM, a matrícula utilizada para registrar quem fez a publicação é àquela correspondente ao Usuário de Integração:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2020-6-16_16-41-48.png?version=1&modificationDate=1592336508117&api=v2)

Após a configuração, clique em Testar conexão para garantir que os dados estão corretos e em seguida clique em avançar até a finalização do processo.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2017-1-2%2011%3A7%3A19.png?version=1&modificationDate=1483366942000&api=v2&effects=drop-shadow)

# Sincronismo do Usuário:

* * *

     Após realizarmos a configuração da Linha RM x GED precisamos enviar para o Fluig os usuários que terão acesso a está funcionalidade. No módulo Serviços Globais, acesse o menu "Segurança | Usuários".

     Em nosso exemplo, iremos integrar apenas o usuário corrente (mestre).

-   [1º Passo:](#)
-   [2º Passo:](#)

Selecione os usuários e execute o processo “Sincronizar usuários do Corpore com o GED”.



Atenção

Caso o **Usuário** possua uma associação com **Funcionário** os dados Nome e E-mail que serão sincronizados serão o do **Funcionário**.



Obs.: Na tela de sincronização, a coluna "Integrado" irá mostrar um ícone caso aquele usuário ja tenha sido sincronizado.

Obs:2: Caso o usuário selecionado para executar a sincronização **NÃO** exista no Fluig, ele será criado de acordo com as informações do usuário em questão no RM: 
E-mail: mesmo do RM 
Login: mesmo do RM 
Matrícula: HASH de Segurança 
Nome: mesmo do RM 
Sobrenonme: mesmo do RM"



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2017-10-9_9-34-34.png?version=1&modificationDate=1507552475000&api=v2&effects=drop-shadow)



Cache com informação do UserID.

Após finalizado o processo de sincronização será apresentado um aviso informando o tempo de renovação do cache, que deverá ser respeitado para utilizar qualquer outro processo seguinte.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2022-12-22_9-25-9.png?version=1&modificationDate=1671711910357&api=v2&effects=drop-shadow)

Após a execução do processo, o usuário será criado no Fluig.

Caso o campo 'Senha padrão' esteja em branco na configuração da integração, a senha desse novo usuário no FLUIG é "123456789".

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2017-1-2%2011%3A8%3A55.png?version=1&modificationDate=1483366942000&api=v2&effects=drop-shadow)

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2017-1-2%2011%3A9%3A4.png?version=1&modificationDate=1483366942000&api=v2&effects=drop-shadow)









# Realizando Mapeamento:

* * *

    Após os parâmetros estarem configurados e o usuário sincronizado com o Fluig, é necessário realizar o mapeamento da pasta para a integração com o Fluig.

    Em nosso exemplo, utilizaremos o cadastro de Alunos do RM.

-   [1º Passo:](#)
-   [2º Passo:](#)
-   [3º Passo:](#)

No Fluig, crie a pasta “Documentos Alunos”

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2017-1-2%2011%3A9%3A35.png?version=1&modificationDate=1483366942000&api=v2&effects=drop-shadow)

No módulo Educacional, acesse o menu Currículo e Oferta -> Alunos

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2017-1-2%2011%3A9%3A56.png?version=1&modificationDate=1483366942000&api=v2&effects=drop-shadow)

Acesse Anexos -> GED -> Gerenciar

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2017-1-2%2011%3A10%3A32.png?version=1&modificationDate=1483366941000&api=v2&effects=drop-shadow)

   Depois de executar o passo 3 descrito acima e após clicar em avançar, teremos 6 (seis) opções de mapeamentos distintos:

  **1.Utilizar pasta mapeada**:

-   Todos os arquivos de todos os registros serão enviados para a mesma pasta mapeada no GED.

 Clique para ver imagem

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2020-6-16_15-53-53.png?version=1&modificationDate=1592333633170&api=v2)

Neste exemplo, todos os arquivos serão salvos na pasta "Teste\_Pasta Mapeada".

  **2. Permitir o usuário escolher uma das sub-pastas de pasta mapeada**:

-   O usuário pode selecionar uma Sub-Pasta dentro da pasta configurada, no momento do envio do arquivo.

 Clique para ver imagem

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2020-6-16_15-56-3.png?version=1&modificationDate=1592333763873&api=v2)

Neste exemplo, o usuário poderá salvar os arquivos nas pastas filhas da "Teste\_Sub Pasta Mapeada", sendo "Pasta1" ou "Pasta2".

Essas opções serão exibidas para o usuário na hora de enviar o arquivo.

  **3.**  **Utilizar o retorno de uma coluna do dataServer como nome da pasta:**

-   A estrutura de dados da tabela do cadastro é exibida, e o usuário pode selecionar uma coluna para que o RM crie no GED uma pasta com o nome referente a coluna selecionada.
    Ex.: Caso selecionado o RA do aluno, dentro da pasta selecionada como mapeamento será criada uma pasta para cada registro, sendo seu nome o RA do registro selecionado na hora de envio do arquivo.
    **Obs**: Caso a coluna selecionada não seja única por registro, os arquivos de registro que contém o mesmo conteúdo para a coluna selecionada ficaram na mesma pasta no servidor GED. Ex.: Selecionar a coluna CODCOLIGADA, todos os registros que estiverem na mesma coligada terão o seus arquivos enviados para a mesma pasta no servidor GED.
-   Ao selecionar mais de uma coluna do DataServer, é possível criar estruturas de pastas. 

 Clique para ver imagem

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2020-6-16_16-3-38.png?version=1&modificationDate=1592334218897&api=v2)

Neste exemplo, os arquivos serão organizados no GED por diretórios criados automaticamente por: Estado > Nome Fantasia.

Por exemplo:

...Teste\_Coluna DataServer/MG/Coligada1

...Teste\_Coluna DataServer/MG/Coligada2

...Teste\_Coluna DataServer/SP/Coligada3

  **4.**  **Utilizar o retorno de uma coluna do dataServer como nome da pasta com o CheckBox “Permitir sincronismo automático dos arquivos postados através GED” marcado:**

-   Idem ao item 3, mas acrescentando o sincronismo da pasta do servidor GED com os registros no RM. Ou seja, caso um arquivo seja postado diretamente no GED, na pasta do registro especifico, o RM também exibirá este registro. Da mesma forma, se o arquivo for removido diretamente no GED, ele não será mais listado no RM.
    Cuidado: a marcação deste parâmetro pode ocasionar a exibição de arquivos de outros registros caso o mapeamento seja igual o exemplo do CODCOLIGADA citado acima.

 Clique para ver imagem

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2020-6-16_16-8-48.png?version=1&modificationDate=1592334528847&api=v2)

Neste exemplo, os arquivos serão organizados no GED por diretórios criados automaticamente por: Estado > Nome Fantasia.

Por exemplo:

...Teste\_Coluna DataServer/MG/Coligada1

...Teste\_Coluna DataServer/MG/Coligada2

...Teste\_Coluna DataServer/SP/Coligada3

Os arquivos adicionados/removidos diretamente no GED, também serão listados/ou não no RM.

  **5.**  **Utilizar uma pasta para cada registro de acordo com a chave primária:**

-   Dentro da pasta selecionada para o mapeamento, quando o usuário incluir um arquivo novo, será criada automaticamente uma pasta tendo seu nome como a combinação da chave primaria da tabela referente ao cadastro. 

 Clique para ver imagem

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2020-6-16_16-16-5.png?version=1&modificationDate=1592334965430&api=v2)

Neste exemplo, os arquivos serão organizados no GED por diretórios criados automaticamente por: Chave primária

Por exemplo:

...Teste\_ChavePrimária/{PK\_Tabela}

  **6.**  **Utilizar uma pasta para cada registro de acordo com a chave primária pasta com o CheckBox “Permitir sincronismo automático dos arquivos postados através GED” marcado:**

-   Idem ao item 5, mas acrescentando o sincronismo da pasta do servidor GED com os registros no RM. Ou seja, caso um arquivo seja postado no GED na pasta do registro especifico, o RM também exibirá este registro. Da mesma forma, se o arquivo for removido diretamente no GED, ele não será mais listado no RM.

 Clique para ver imagem

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2020-6-16_16-19-14.png?version=1&modificationDate=1592335154327&api=v2)

Neste exemplo, os arquivos serão organizados no GED por diretórios criados automaticamente por: Chave primária

Por exemplo:

...Teste\_ChavePrimária/{PK\_Tabela}

Os arquivos adicionados/removidos diretamente no GED, também serão listados/ou não no RM.

Importante!

Apenas mapeamentos com a opção "Permitir sincronismo automático dos arquivos postados através GED" marcada terão as inclusões/remoções de arquivos feitas diretamente no GED refletidas no RM. 

Caso essa configuração não esteja disponível para algum tipo mapeamento ou esteja desmarcada, ao incluir um arquivo diretamente no GED ele não será listado no RM. E se algum arquivo for excluído diretamente no GED, ele continuará a ser listado no RM até que seja excluído pelo RM.exe.

-   [1º Passo:](#)
-   [2º Passo:](#)

Vamos selecionar a opção número 1 – Utilizar pasta mapeada e selecionar a pasta “Documentos Alunos”

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2017-1-2%2011%3A10%3A47.png?version=1&modificationDate=1483366942000&api=v2)

Avançar e finalizar o processo:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2017-1-2%2011%3A11%3A0.png?version=1&modificationDate=1483366942000&api=v2)

# Envio de Arquivos:

* * *

    Passo a passo de envio de arquivos para o GED

-   [1º Passo:](#)
-   [2º Passo:](#)
-   [3º Passo:](#)
-   [4º Passo:](#)
-   [5º Passo:](#)

Para enviar arquivos para o GED, clique em Anexo -> GED -> Integração GED

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2017-1-2%2011%3A11%3A11.png?version=1&modificationDate=1483366942000&api=v2)

Uma aba será apresentada. Para enviar um arquivo, clique em novo. Teremos a opção de alterar o nome do arquivo ou Utilizar o próprio nome do arquivo. No exemplo a seguir vamos selecionar Utilizar o próprio nome do arquivo.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2017-1-2%2011%3A11%3A19.png?version=1&modificationDate=1483366942000&api=v2)

Após clique em Localizar e Enviar. Uma caixa de seleção de arquivo será exibida. Selecione o arquivo e clique em Abrir

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2017-1-2%2011%3A11%3A28.png?version=1&modificationDate=1483366942000&api=v2)



 Ao clicar em Abrir, o arquivo é enviado para o servidor GED e listado na aba Integração GED

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2017-1-2%2011%3A11%3A41.png?version=1&modificationDate=1483366942000&api=v2)

Como no tipo de mapeamento selecionamos “Utilizar pasta mapeada” o arquivo foi postado na pasta “Documentos Alunos” no Fluig

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2017-1-2%2011%3A11%3A53.png?version=1&modificationDate=1483366942000&api=v2)

Mais informações sobre erros

Caso algum erro seja apresentado ao enviar um arquivo, consulte [Erro na consulta de Dataset](/display/LRM/Erro+na+consulta+de+Dataset)

# Visualização do Arquivo:

* * *

-   [1º Passo:](#)
-   [2º Passo:](#)
-   [3º Passo:](#)

Após realizar a importação do arquivo, é possível visualiza-lo. Para isso, edite o registro inserido e clique em Visualizar

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2017-1-2%2011%3A12%3A1.png?version=1&modificationDate=1483366942000&api=v2)

Caso o usuário não esteja logado no Fluig, será solicitado o usuário e senha para acessar o sistema

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2017-1-2%2011%3A12%3A8.png?version=1&modificationDate=1483366942000&api=v2)

Após acessar o sistema o arquivo é aberto e exibido para o usuário

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2017-1-2%2011%3A12%3A18.png?version=1&modificationDate=1483366942000&api=v2)

Serão aceitos os seguintes caracteres especiais no nome do arquivo enviado, mais espaços em branco.

-   ´\`' !@#$%& -\_+=()\[\]{}\[\] ªº^~, . ; ¨§¢¬£ ³²¹

Exemplo: Nome do arquivo **"teste!@#$%¨& - 123.txt",** tudo será mantido, nada será alterado.



**Os seguintes caracteres não serão aceitos e o envio do arquivo será recusado:**   

-   **\\ / ? : \* <>"** Estes caracteres por padrão não são aceitos pelo sistema operacional, portanto não é permitido definir um nome de arquivo que os contenha.





# Visualização de Logs:

* * *

Ao marcar a configuração de Tipo de Log's ao configurar a integração os Log's podem ser vistos em 

Menu Integrações | Integração | Monitor da Fila de Integração
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/270899168/image2021-12-20_16-36-51.png?version=1&modificationDate=1640029012050&api=v2)
, onde todos os tipos de requisições serão logadas nesta visão. A coluna Status informa se a mensagem foi processada com sucesso ou não.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2021-12-20_16-38-27.png?version=1&modificationDate=1640029107737&api=v2&effects=drop-shadow)

# Envio de Relatórios

* * *

Ao enviar um relatório para o GED, é necessário que o mapeamento na visão de relatórios (Anexo → GED → Gerenciar) tenha sido executado. Sem esta execução, será apresentando um erro informando para verificar o mapeamento da pasta.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2021-12-20_16-40-35.png?version=1&modificationDate=1640029235810&api=v2&effects=drop-shadow)
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2021-12-20_16-42-14.png?version=1&modificationDate=1640029334627&api=v2&effects=drop-shadow)

Para envio de relatórios do RMReports para o GED, estão disponíveis as opções de mapeamento "*Utilizar pasta mapeada*" e "*Utilizar uma pasta para cada registro de acordo com a chave primária*".





**Produto:** Framework

**Versão:** 12.01.XX

**Processo:** GED - Gerenciamento Eletrônico de Documentos

**Status:** Finalizado

**Data:** 20/08/2021

**Autores:**

**[Adriano Diniz Agrizzi](/display/~adriano.diniz)**

**[Douglas Maxwell de Oliveira](/display/~douglas.maxwell)**

**[Karina Dos Santos Costa](/display/~karina.santos)**

**[Stella Gleyse Macedo Vilaca](/display/~stella.vilaca)
**

**[Wesley Avelino De Carvalho](/display/~wesley.carvalho)**

* * *
