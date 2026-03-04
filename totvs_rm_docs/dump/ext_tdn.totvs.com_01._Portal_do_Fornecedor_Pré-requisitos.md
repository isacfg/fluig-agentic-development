# 01. Portal do Fornecedor | Pré-requisitos

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=639955763](https://tdn.totvs.com/pages/releaseview.action?pageId=639955763)
> **Domínio:** TDN (TOTVS Developer Network)

---



-   [API](# "API")
-   [Usuário e autenticação](#)
-   [HTTP / HTTPS](#)

O Portal do Fornecedor comunica com o ERP através de APIs, desta forma é necessário garantir que o serviço de API esteja disponível e acessível de forma externa.

Importante

Como o acesso do fornecedores é externo a rede da empresa, as portas configuradas abaixo para o serviço de API deverá estar liberadas para acesso externo.



**Configurando as portas da API**

O aplicativo RM.Host é responsável por hospedar e expor os serviços de APIs.

Veja mais sobre a [configuração da porta webApi](https://tdn.totvs.com/display/LRM/Configurando+HttpPort+e+ApiPort).

A tag **ApiPort** configurada nesta etapa será utilizada durante a instalação do Portal.

Importante

A execução do **Host** precisa ser como **administrador:**

-   Caso o **Host** seja iniciado como **aplicativo** (RM.Host.exe), certifique-se que ao executá-lo, tenha selecionado a opção "**Executar como Administrador**".
-   Caso o **Host** tenha sido instalado como **serviço**, o usuário vinculado ao serviço deve ser um administrador do sistema.

 Validação de acesso as APIs

Para validar se as configurações de portas das APIs foram realizadas corretamente, acesse o browser e digite a URL  http://{IP ou domínio}:{porta}/api/swagger/.

Exemplo: [http://10.173.17.242:8051/api/swagger](http://10.173.17.242:8051/api/swagger)

**Importante** na validação usar o IP, nome da máquina ou domínio.

Verifique se a página abaixo foi carregada

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/639955763/image2022-7-25_11-3-4.png?version=1&modificationDate=1658757784367&api=v2)



* * *

* * *



**Conectando com o banco de dados**

Para que a API saiba em qual banco de dados conectar quando for acionada pelo Portal, devemos configurar a tag DefaulDB.

Veja mais em [Configurando DefaultDB](/display/LRM/Configurando+DefaultDB).



 Validação de acesso ao banco de dados através da API

Para validar se a configuração da comunicação com o banco de dados das APIs foi realizada corretamente, acesse a API via browser.

Exemplo: [http://10.173.17.242:8051/api/est/v1/Unitofmeasures](http://10.173.17.242:8051/api/est/v1/Unitofmeasures)

Neste exemplo estamos usando o cadastro de Unidade de Medidas, ao acessar será solicitado um usuário do sistema que tenha acesso a este cadastro dentro do sistema.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/639955763/image2022-7-25_16-28-35.png?version=1&modificationDate=1658777315423&api=v2)



Você deverá ter um resultado semelhante a este, onde lista os registros do cadastro de unidade de medida.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/639955763/image2022-7-25_16-37-18.png?version=1&modificationDate=1658777838557&api=v2)

Para realizar a autenticação com as APIs utilizamos o usuário **PORTALDOFORNECEDOR** .

Atenção

O usuário **PORTALDOFORNECEDOR** é criado automaticamente pelo sistema durante o processo de "**Comunicar Fornecedor**" selecionando a opção "**Exportar Orçamento p/Web**".

O mesmo **jamais** deve ser criado manualmente, pois irá causar erros ao tentar acessar o portal.

Durante o processo de comunicação com o fornecedor o sistema identifica a existência do usuário, e caso o mesmo tenha sido excluído, um novo usuário será criado.



Para que o usuário sejá criado corretamente com as devidas permissões,  é necessário antes definir qual código de acesso e perfil serão utilizados.



* * *

* * *



**Perfil**

Cadastre um novo perfil, ou utilize um já existente que possua as permissões abaixo.

 Configuração do Perfil

Sugestão

Aconselhamos a criação de um perfil exclusivo para esta finalidade, pois qualquer manutenção indevida nas permissões, pode fazer com que o fornecedor visualize mensagens de erro ao acessar cadastrados que estão disponíveis no portal, como unidade, marca, condição de pagamento.

***Acesso a menus → \[01\] Cadastros***

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/639955763/image2021-11-25_15-6-39.png?version=1&modificationDate=1637863600033&api=v2)



***Acesso a menus → \[03\] Compras → \[03.01\] Gestão de Compras → \[03.01.02\] Cotação***

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/639955763/image2021-11-25_15-1-1.png?version=1&modificationDate=1637863262263&api=v2)







* * *

* * *





**Parâmetros da cotação**

Informe o perfil e código de acesso que serão utilizado para realizar a autenticação das APIs, nos parametros da cotação na etapa [Definições Gerais 6/6](https://tdn.totvs.com/pages/viewpage.action?pageId=423938121#Defini%C3%A7%C3%B5esGeraisDeck-717899609)

                     
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/639955763/Configura%C3%A7aoPerfil.gif?version=1&modificationDate=1658763505093&api=v2)



Importante

Clientes que possuem o sistema configurado com [LDAP ou Login Unificado](https://tdn.totvs.com/pages/viewpage.action?pageId=61932106) utilizando usuário de rede, devem acessar o cadastro do usuário **PORTALDOFORNECEDOR** depois que o mesmo for criado, e informar um usuário de rede válido na pasta rede.

Atenção

O "Portal de Fornecedor" é por padrão um site HTTP, qualquer politica de segurança que impeça a abertura de conteúdo HTTP vai atrapalhar o correto funcionamento do portal do fornecedor.



Para configurar o "Portal de Fornecedor" para HTTPS é necessário seguir alguns passos adicionais mostrados no tópico Instalação: 

[Portal do Fornecedor | Instalação#https-opcional](#)



* * *

* * *



####  **![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/639955763/seta2.png?version=1&modificationDate=1658844790603&api=v2)
 [Voltar para o Menu Principal](https://tdn.totvs.com/display/LRM/Portal+do+Fornecedor)**



* * *

* * *
