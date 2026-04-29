# Visualização de Serviços

> **Fonte:** [https://tdn.totvs.com/pages/viewpage.action?pageId=239021223](https://tdn.totvs.com/pages/viewpage.action?pageId=239021223)

---

# Índice



# Objetivo

Este guia tem o objetivo de apresentar uma visão geral da consulta de serviços pelo fluig Studio.



# Visualização de serviços

Permite a integração e utilização de serviços disponibilizados por outros sistemas. A principal forma de integração ao TOTVS Fluig Plataforma é através de *Web Services*.

Atenção

Para que um usuário que não é administrador da empresa possa visualizar e adicionar serviços pelo fluig Studio, é necessário que ele possua a permissão "Configurar Serviços". Esta permissão pode ser concedida pelo administrador através da tela de [Permissões](https://tdn.totvs.com/pages/viewpage.action?pageId=234455792) disponível no agrupador "Pessoas" do Painel de Controle do TOTVS Fluig Plataforma.

# Gerenciando Serviços

O gerenciamento dos serviços está localizado na perspectiva Fluig, aba **Visualização de Serviços**.



## Consultar Serviço

Na aba de **Visualização de Serviços**, escolha a opção **Consulta Serviço**.

Uma janela será aberta para a consulta. Escolha o servidor fluig e o serviço que deseja consultar.

Aguarde enquanto o serviço é carregado. A tabela será preenchida com os dados do serviço.



## Adicionar Serviço

Na aba de **Visualização de Serviços**, escolha a opção **Incluir Serviço** e preencha os dados necessários:

-   **Servidor**: Informe o servidor fluig em que deseja incluir o serviço.

-   **Código**: Escolha um código para o serviço que está cadastrando.

-   **Descrição**: Informe uma descrição para o serviço.

-   **URL**: Informe a URL WSDL do serviço.

-   **Pacote**: Caso deseje que as classes sejam geradas em um pacote, informe o nome do pacote desejado.

-   **Tipo**: *WebService*

Importante

Além de *Web Services*, a plataforma também pode realizar chamadas Progress. Entretanto essa técnica está descontinuada, e nossa recomendação é usar os serviços SOAP. Caso seu projeto já utilize essa técnica acesse a [documentação depreciada](https://tdn.totvs.com/pages/viewpage.action?pageId=237378575).

-   **API**: informe o tipo de API. O recomendado é que seja selecionada a API CXF, pois o suporte à API Axis foi depreciado.

-   **Arquivo de *Bind***: Se houverem conflitos durante a geração dos *stubs* devido a uma ou mais propriedades possuírem o mesmo nome, é possível adicionar um arquivo de *bind* para alterar os nomes conflitantes.

-   **Requer autenticação**: Marque esta opção caso o *Web Service* exija Autenticação Básica para acesso. Será necessário informar o Usuário e Senha ao finalizar a inclusão do serviço.



Por fim, clique no botão ***Finish*** e aguarde a inclusão do serviço no servidor.



Dica

Para mais detalhes sobre a integração com aplicativos externos através de Web Services, consulte a documentação [Integração Com Aplicativos Externos](https://tdn.totvs.com/pages/viewpage.action?pageId=73082260).
