# Dataset Simples

> **Fonte:** [https://tdn.totvs.com/display/fluig/Dataset+Simples](https://tdn.totvs.com/display/fluig/Dataset+Simples)

---

# Índice

# Objetivo

* * *

O objetivo deste guia é demonstrar a criação de um dataset simples, para possibilitar a integração com sistemas terceiros sem qualquer tipo de codificação.



# Pré-requisitos

* * *

Para que se tenha uma compreensão completa destas informações, alguns conhecimentos são considerados pré-requisitos, entre eles:

-   Visão geral sobre o Fluig;
-   Visão geral sobre integração de sistemas.



# Criação de datasets simples

* * *

A criação de dataset simples está disponível no Painel de Controle do Fluig e consiste em duas etapas: o cadastro do serviço e a configuração do dataset. 

Atenção!

Apenas os usuários administradores da plataforma têm acesso a essas configurações.

## Cadastro do serviço

Para cadastrar o serviço é necessário conhecer o endereço e o método do Webservice que contém as informações que devem ser trazidas para o TOTVS Fluig Plataforma. É possível cadastrar serviços SOAP, REST ou JDBC, conforme a documentação [Cadastro de serviço](https://tdn.totvs.com/x/mqVtJg).

## Configuração do dataset simples

Após ter o serviço cadastrado, vamos criar o dataset simples. Acesse a opção **Painel de controle** localize o agrupador **Desenvolvimento** e acione a opção **datasets**. Selecione a opção **Novo dataset** e após selecione **Simples**:



Preencha os campos para criação do dataset, os campos destacados com um asterisco (**\***) são de preenchimento obrigatório:

Campo

Descrição

**Código****\***

Código do dataset que será utilizado ao ser chamado em processos por exemplo.

**Descrição****\***

Descrição do dataset para poder identificar a funcionalidade do mesmo.

**Serviço****\***

Selecionar o serviço que será realizado a integração.

**Operação**

Aqui será selecionado o método ou tabela que serão chamados do serviço.

**Configurar**

Pode ser configurado o limite de resultado (JDBC) e a configuração de autenticação (REST).

**Parâmetro**

Serão informados os parâmetros para buscar os dados conforme a operação selecionada.



O código-fonte gerado nessa interface pode ser utilizado em outros recursos, como eventos de processos ou scripts de tarefa de serviço assíncrono, por exemplo. Bastando neste caso que o desenvolvedor se responsabilize pela forma como o retorno do webservice é tratado. Além disso, o código-fonte dos datasets simples pode ser editado pelo Fluig Studio ou em modo avançado pela própria plataforma, o que automaticamente os transforma em datasets avançados.

**Fique por dentro!**

Para visualizar mais detalhes sobre a criação de datasets, acesse nossas documentações:

-   [Datasets](https://tdn.totvs.com/display/HF/Datasets)
-   [Mais ações de datasets](https://tdn.totvs.com/pages/viewpage.action?pageId=400655388)
-   [Sincronização de Datasets](https://tdn.totvs.com/pages/viewpage.action?pageId=212899013)
-   [Desenvolvimento de Datasets](https://tdn.totvs.com/display/fluig/Desenvolvimento+de+Datasets)

#
Edição em modo avançado

* * *

A interface de edição em modo avançado, disponível a partir da **atualização 1.6.5 - Liquid**, é acessada acionando a edição do dataset na listagem. Essa interface apresenta algumas vantagens em relação à edição pelo Fluig Studio, sendo algumas delas:

-   Histórico de versões publicadas, com detalhamento do responsável e possibilidade de restaurar versão antiga;
-   Possibilidade de manter as alterações em rascunho (salvar a edição sem publicá-la);
-   Monitoramento detalhado do serviço relacionado, com o log e a quantidade de requisições efetuadas.

Atenção!

Os datasets podem ser convertidos de **simples** para **avançado**, mas o contrário não pode ser feito: a partir do momento em que um dataset simples for editado em modo avançado, ele passa a ser um dataset avançado, e com isso, não poderá ser novamente editado em modo simples.

Fique atento!

Esta documentação é válida a partir da **atualização 1.7.1 - Crystal Lake**. Se você utiliza uma atualização anterior, ela pode conter informações diferentes das quais você vê na sua plataforma.
