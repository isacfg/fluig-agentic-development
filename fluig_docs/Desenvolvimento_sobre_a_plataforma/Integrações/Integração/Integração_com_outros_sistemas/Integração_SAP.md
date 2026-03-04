# Integração SAP

> **Fonte:** [https://tdn.totvs.com/pages/viewpage.action?pageId=173083652](https://tdn.totvs.com/pages/viewpage.action?pageId=173083652)

---

# Índice

# Objetivo

* * *

O objetivo deste guia é apresentar as características e a configuração da integração do TOTVS Fluig Plataforma com o ERP SAP.



# Pré-requisitos

* * *

Conhecimento prévio em determinados pontos, sendo estes:

-   Visão geral sobre TOTVS Fluig Plataforma
-   Visão geral sobre integração de sistemas



# Fluig acessando ERP SAP

* * *

O processo de integração do Fluig Plataforma com o ERP SAP possui duas formas: uma utilizando o componente de integração RFC (*Remote Function Call*) e outra utilizando o processo por *WebServices* padrão SOA.

A utilização de uma forma ou de outra depende de como foi definido pelo ERP SAP as integrações com outros sistemas. A seguir é apresentada a característica de cada uma das integrações.



## Comunicação via RFC (*Remote Function Call*)

Neste tipo de integração RFC é necessário criar um serviço intermediário para transformar requisições RFC para *WebServices*, pois o padrão *Web* Serviços é nativamente tratado pela plataforma Fluig.

O serviço intermediário precisa ser construído em um projeto em JAVA de acordo com os seguintes passos:



**Preparação de ambiente de desenvolvimento**

-   Utilizar as classes padrão de integração que estão em programa Java (JAR) fornecido pela SAP. Este JAR de nome “JCO SAP *Connector*” pode ser obtido pelo cliente no portal de *downloads* do SAP.

-   Colocar o JAR “JCO SAP *Connector*” na raiz do projeto JAVA no Fluig *Studio* (IDE).

-   Adicionar o caminho ao JAR “JCO SAP *Connector*” no *Buildpath* do projeto JAVA no Fluig *Studio* (IDE).

-   Configurar o arquivo “.properties” do “JCO SAP *Connector*” com os dados de conexão com o servidor SAP. A documentação da configuração do JCO SAP *Connector* está disponível no *site* de referência da SAP ([http://help.sap.com](http://help.sap.com)).






**Desenvolvimento do componente de integração com RFC**

-   Desenvolver os métodos que façam chamadas as classes do JCO SAP *Connector* que fazem a interface com RFC correspondentes a necessidade de integração. A documentação dos métodos do “JCO SAP *Connector*” está disponível no *site* de referência da SAP ([http://help.sap.com](http://help.sap.com)).

-   Expor os métodos desenvolvidos para chamada da RFC por meio do padrão SOAP.

-   Compilar o projeto Fluig *Studio* (IDE) obtendo, assim, o WAR do componente de integração com RFC.






**Preparação do ambiente de execução da integração**

-   Instalar o WAR do componente de integração RFC no servidor de aplicação do Fluig (WildFly). Caminho da instalação “\[Instalação fluig\]\\appserver\\apps”.

    Importante!

    Não utilizar o recurso de central de componentes.




**Utilizando o componente de integração com RFC**

-   Cadastrar um serviço do tipo *WebServices* dentro do Fluig Plataforma pelo Fluig *Studio* (opção Incluir Serviços na aba Visualizar Serviços) apontando para WSDL gerado para o componente de integração RFC.

-   Utilizar o serviço cadastrado nos pontos requeridos no escopo da integração.

    **Exemplo:** eventos de formulário, eventos de *workflow* e *datasets*.

    Nota

    Mais informações sobre customização da plataforma Fluig podem ser obtidas em [Customização de *Workflow*](https://tdn.totvs.com/pages/viewpage.action?pageId=73082818).




## Comunicação via *WebServices* SOAP do SAP

Neste tipo de integração utilizando *WebService* padrão SOAP disponibilizado pelo SAP, o acesso da plataforma Fluig a estes serviços é direto.

A seguir são apresentadas as configurações da plataforma para acesso ao *WebService* padrão SOAP:



-   Cadastrar um serviço do tipo *WebServices* dentro do Fluig Plataforma pelo Fluig *Studio* (opção Incluir Serviços na aba Visualizar Serviços) apontando para WSDL do *WebService* SAP disponibilizado para integração.






-   Utilizar o serviço cadastrado nos pontos requeridos no escopo da integração.

    **Exemplo:** eventos de formulário, eventos de *workflow* e *datasets*.

    Nota

    Mais informações sobre customização da plataforma Fluig podem ser obtidas em [Customização de *Workflow*](https://tdn.totvs.com/pages/viewpage.action?pageId=73082818).




# ERP SAP acessando Fluig

* * *

O processo de integração do ERP SAP com o Fluig Plataforma ocorre por chamada dos *WebServices* Fluig padrão SOA pelo ERP SAP.

Nota

Mais informações sobre os *WebServices* da plataforma Fluig podem ser obtidas em [Utilização de *WebServices*](https://tdn.totvs.com/x/ZyxbB). 



# *Third Party Trademarks*

SAP, JCO SAP Connector e outros produtos e serviços da SAP aqui mencionados, bem como seus respectivos logotipos, são marcas comerciais ou marcas registradas pertencentes à SAP AG na Alemanha e em outros países.
