# Documentação dos Web Services

> **Fonte:** [https://tdn.totvs.com/pages/viewpage.action?pageId=662867789](https://tdn.totvs.com/pages/viewpage.action?pageId=662867789)

---

# Objetivo

O objetivo deste documento é descrever os Web Services Soap do Fluig, com seus métodos, parâmetros e retornos

# Pré-requisitos

Para que se tenha uma compreensão completa destas informações, alguns conhecimentos são considerados pré-requisitos, entre eles:

-   Visão geral sobre o fluig
-   Visão geral sobre integração de sistemas
-   Web Services



Informação:

Chamadas SOAP realizadas dentro de uma página (via widget) utilizam a sessão atual do usuário, ou seja, assumem o usuário logado. Porém, caso um login seja informado na chamada, a plataforma verifica se ele corresponde ao usuário da sessão.

# ECMAttributionMecanismService

Webservice responsável por realizar operações referentes aos mecanismos de atribuição cadastrados no fluig. Pode ser utilizado para pesquisar os mecanismos de atribuição de uma determinada empresa.



#### Métodos 

getAttributionMecanism

Retorna os mecanismos de atribuição da empresa.



Método:

getAttributionMecanism(String user, String password, int companyId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.



Retorno: [AttributionMecanismDto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-AttributionMecanismDto).

**Quadro 2: Métodos da** **AttributionMecanismService.**



#### Exemplo de utilização

Faça o download da classe [ECMAttributionMecanismService.java](https://git.fluig.com/projects/SAMPLES/repos/samples-webservice/browse/src/samples/ECMAttributionMecanismService.java), esta exemplifica a utilização dos principais métodos da classe AttributionMecanismService.



# ECMBusinessPeriodService

Webservice responsável por realizar operações referentes aos expedientes cadastrados no fluig. Pode ser utilizado para pesquisar os expedientes de uma determinada empresa.



#### Métodos

getBusinessPeriods

Retorna os expedientes da empresa.



Método:

getBusinessPeriods(String user, String password, int companyId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.



Retorno: [BusinessPeriodDto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-BusinessPeriodDto).

**Quadro 3: Métodos da BusinessPeriodService.**



#### Exemplo de utilização

Faça o download da classe [ECMBusinessPeriodService.java](https://git.fluig.com/projects/SAMPLES/repos/componentes/browse/webservice/src/samples/ECMBusinessPeriodService.java), esta exemplifica a utilização dos principais métodos da classe BusinessPeriodService.



# ECMCardIndexService

Webservice responsável por realizar operações referentes aos formulários cadastrados no fluig.



#### Métodos

createSimpleCardIndex

Criação simples de um formulário.



Método:

createSimpleCardIndex (String user, String password, int companyId, int parentDocumentId, String publisherId, String documentDescription, String cardDescription, AttachmentArray attachments, CardEventDtoArray customEvents)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   parentDocumentId: número do formulário.
-   publisherId: código do autor.
-   documentDescription: descrição.
-   cardDescription: nome.
-   attachments: arquivo anexo.
-   customEvents: eventos.



Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray).



Estrutura de retorno com sucesso

```
<result>
    <item>
       <companyId>1</companyId>
       <documentDescription>Cadastro de clientes</documentDescription>
       <documentId>271</documentId>
       <version>1000</version>
       <webServiceMessage>ok</webServiceMessage>
    </item>
</result>
```



Estrutura de retorno com erro

```
<result>
    <item>
       <companyId>0</companyId>
       <documentDescription/>
       <documentId>0</documentId>
       <version>0</version>
       <webServiceMessage>Usuário sem permissão para publicar documento nesta pasta!</webServiceMessage>
    </item>
</result>
```

createSimpleCardIndexWithDataset

Criação simples de um formulário com datasets.



Método:

createSimpleCardIndexWithDataset (String user, String password, int companyId, int parentDocumentId, String publisherId, String documentDescription, String cardDescription, String datasetName, AttachmentArray attachments, CardEventDtoArray customEvents)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   parentDocumentId: número do formulário.
-   publisherId: código do autor.
-   documentDescription: descrição.
-   cardDescription: nome.
-   datasetName: nome do dataset.
-   attachments: arquivo anexo.
-   customEvents: eventos.



Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray).



Estrutura de retorno com sucesso

```
<result>
    <item>
       <companyId>1</companyId>
       <documentDescription>Cadastro de clientes</documentDescription>
       <documentId>271</documentId>
       <version>1000</version>
       <webServiceMessage>ok</webServiceMessage>
    </item>
</result>
```



Estrutura de retorno com erro

```
<result>
    <item>
       <companyId>0</companyId>
       <documentDescription/>
       <documentId>0</documentId>
       <version>0</version>
       <webServiceMessage>Usuário sem permissão para publicar documento nesta pasta!</webServiceMessage>
    </item>
</result>
```



createSimpleCardIndexWithDatasetPersisteType

Criação simples de um formulário com datasets determinando o tipo da persistência (Formulário ou Lista).



createSimpleCardIndexWithDatasetPersisteType (String user, String password, int companyId, int parentDocumentId, String publisherId, String documentDescription, String cardDescription, String datasetName, AttachmentArray attachments, CardEventDtoArray customEvents, Integer persistenceType)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa;
-   parentDocumentId: número do formulário.
-   publisherId: código do autor.
-   documentDescription: descrição.
-   cardDescription: nome.
-   datasetName: nome do dataset.
-   attachments: arquivo anexo.
-   customEvents: eventos.
-   persistenceType: tipo da persistência que será utilizada (0 = Formulário / 1 = Lista).



Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray) .



Estrutura de retorno com sucesso

```
<result>
    <item>
       <companyId>1</companyId>
       <documentDescription>Cadastro de clientes</documentDescription>
       <documentId>271</documentId>
       <version>1000</version>
       <webServiceMessage>ok</webServiceMessage>
    </item>
</result>
```



Estrutura de retorno com erro

```
<result>
    <item>
       <companyId>0</companyId>
       <documentDescription/>
       <documentId>0</documentId>
       <version>0</version>
       <webServiceMessage>Usuário sem permissão para publicar documento nesta pasta!</webServiceMessage>
    </item>
</result>
```



getActiveCardIndex

Retorna o formulário ativo.



Método:

getActiveCardIndex (String user, String password, int companyId, int documentId, String colleagueId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   documentId: número do formulário.
-   colleagueId: número do usuário.



Retorno: [DocumentDtoArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto).

getAttachmentsList

Retorna a lista de anexos do formulário.



Método:

getAttachmentsList (String user, String password, int companyId, int documentId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   documentId: número do formulário.



Retorno: StringArray, com o nome dos anexos.

getCardIndexContent

Retorna o conteúdo de um formulário.



Método:

getCardIndexContent (String user, String password, int companyId, int documentId, String colleagueId, int version, String nomeArquivo)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   documentId: número do formulário.
-   colleagueId : matrícula do usuário para a verificação de permissão nos formulários.
-   version: número da versão do formulário.
-   nomeArquivo: nome do arquivo anexo.



Retorno: Uma lista de byte\[\]. 

getCardIndexesWithoutApprover

Retorna os formulários sem aprovadores que o usuário tenha permissão.



Método:

getCardIndexesWithoutApprover(String user, String password, int companyId, String colleagueId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   colleagueId : matrícula do usuário para a verificação de permissão nos formulários.



Retorno: [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)\[\].

getCustomizationEvents

Retorna os eventos do formulário.



Método:

getCustomizationEvents (String user, String password, int companyId, int documentId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   documentId: número do formulário.



Retorno: [CardEventDtoArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-CardEventDtoArray).

getFormFields

Retorna os campos do formulário.



Método:

getFormFields(String user, String password, int companyId, int documentId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   documentId: número do formulário.



Retorno: Lista de String\[\] com o ID de cada campo do formulário.

updateSimpleCardIndex

Atualização simples do formulário.



Método:

updateSimpleCardIndex (String user, String password, int companyId, int documentId, String publisherId, String cardDescription, String descriptionField, AttachmentArray attachments, CardEventDtoArray customEvents)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   documentId: número do formulário.
-   publisherId: código do autor.
-   cardDescription: nome.
-   descriptionField: descrição.
-   attachments: arquivo anexo.
-   customEvents: eventos.



Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray).



Estrutura de retorno com sucesso

```
<result>
    <item>
       <companyId>1</companyId>
       <documentDescription>Cadastro de clientes</documentDescription>
       <documentId>271</documentId>
       <version>1000</version>
       <webServiceMessage>ok</webServiceMessage>
    </item>
</result>
```



Estrutura de retorno com erro

```
<result>
    <item>
       <companyId>0</companyId>
       <documentDescription/>
       <documentId>0</documentId>
       <version>0</version>
       <webServiceMessage>Usuário sem permissão para publicar documento nesta pasta!</webServiceMessage>
    </item>
</result>
```



updateSimpleCardIndexWithDataset

Atualização simples do formulário com datasets.



Método:

updateSimpleCardIndexWithDataset (String user, String password, int companyId, int documentId, String publisherId, String cardDescription, String descriptionField, String datasetName, AttachmentArray attachments, CardEventDtoArray customEvents)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   documentId: número do formulário.
-   publisherId: código do autor.
-   cardDescription: nome.
-   descriptionField: descrição.
-   datasetName: nome do dataset.
-   attachments: arquivo anexo.
-   customEvents: eventos.



Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray).



Estrutura de retorno com sucesso

```
<result>
    <item>
       <companyId>1</companyId>
       <documentDescription>Cadastro de clientes</documentDescription>
       <documentId>265</documentId>
       <version>3000</version>
       <webServiceMessage>ok</webServiceMessage>
    </item>
</result>
```



Estrutura de retorno com erro

```
<result>
    <item>
       <companyId>0</companyId>
       <documentDescription/>
       <documentId>0</documentId>
       <version>0</version>
       <webServiceMessage>Usuário sem permissão para publicar documento nesta pasta!</webServiceMessage>
    </item>
</result>
```



**Quadro 4: Métodos da CardIndexService.**

#### Exemplo de utilização

Faça o download da classe [CardIndexServiceClient.java](https://tdn.totvs.com/download/attachments/73084007/CardIndexServiceClient.java?version=1&modificationDate=1378474739000&api=v2), esta exemplifica a utilização dos principais métodos da classe CardIndexService.



# ECMCardService

Webservice responsável por realizar operações referentes a formulários no fluig. Pode ser utilizado para criar, alterar, excluir e pesquisar formulários, entre outros recursos.



#### Exemplos de utilização

Faça o download da classe [CardServiceClient.java](https://tdn.totvs.com/download/attachments/73084007/CardServiceClient.java?version=1&modificationDate=1378474773000&api=v2), esta exemplifica a utilização dos principais métodos da classe CardService, que identifica os parametros a serem passados no carddtos.

Para visualizar um exemplo de montagem do xml, clique em [download](https://tdn.totvs.com/download/attachments/73084007/cardService.xml?version=1&modificationDate=1526308021000&api=v2).



#### Métodos

create

Cria um registro de formulário.



Método:

create(int companyId, String user, String password, CardDto\[\] carddtos)



Parâmetros:

-   companyId: código da empresa.
-   user: login do usuário.
-   password: senha do usuário.
-   carddtos: formulário que será criado.



Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray).



Estrutura de retorno com sucesso

```
<result>
    <item>
       <companyId>1</companyId>
       <documentDescription>Cliente 01</documentDescription>
       <documentId>287</documentId>
       <version>1000</version>
       <webServiceMessage>ok</webServiceMessage>
    </item>
</result>
```



Estrutura de retorno com erro

```
<result>
    <item>
       <companyId>0</companyId>
       <documentDescription/>
       <documentId>0</documentId>
       <version>0</version>
       <webServiceMessage>Usuário sem permissão para publicar documento nesta pasta!</webServiceMessage>
    </item>
</result>
```



deleteCard

Exclui um formulário e envia para a lixeira.



Método:

deleteCard(int companyId, String user, String password, int cardId)



Parâmetros:

-   companyId: código da empresa.
-   user: login do usuário.
-   password: senha do usuário.
-   cardId: número do formulário.



Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray).



Estrutura de retorno com sucesso

```
<result>
	<item>
	   <companyId>1</companyId>
	   <documentDescription/>
	   <documentId>286</documentId>
	   <version>0</version>
	   <webServiceMessage>ok</webServiceMessage>
	</item>
</result>
```



Estrutura de retorno com erro

```
<result>
    <item>
       <companyId>0</companyId>
       <documentDescription/>
       <documentId>0</documentId>
       <version>0</version>
       <webServiceMessage>Ficha não encontrada: 287</webServiceMessage>
    </item>
</result>
```



getCardVersion

Retorna a versão de um formulário.



Método:

getCardVersion(int companyId, String user, String password, int nrDocumentId, int version, String colleagueId)



Método:

Parâmetros:

-   companyId: código da empresa.
-   user: login do usuário.
-   password: senha do usuário.
-   nrDocumentId: número do formulário.
-   version: versão do formulário.
-   colleagueId: matrícula do usuário.



Retorno: CardDto\[\], lista com ID do campo e seus valores.

updateCard

Altera os metadados de um formulário.



Método:

updateCard(int companyId, String user, String password, CardDto\[\] cardDtos, Attachment\[\] attachs, [DocumentSecurityConfigDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentSecurityConfigDto)\[\] docsecurity, ApproverDto\[\] docapprovers, RelatedDocumentDto\[\] reldocs)



Parâmetros:

-   companyId: código da empresa.
-   user: login do usuário.
-   password: senha do usuário.
-   cardDtos: formulário que será alterado.
-   attachs: anexos do formulário.
-   docsecurity: segurança do formulário.
-   docapprovers: aprovadores do formulário.
-   reldocs: documentos relacionados do formulário.



Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray).



Estrutura de retorno com sucesso

```
<result>
    <item>
       <companyId>1</companyId>
       <documentDescription>Cliente 01</documentDescription>
       <documentId>287</documentId>
       <version>2000</version>
       <webServiceMessage>ok</webServiceMessage>
    </item>
</result>
```



Estrutura de retorno com erro

```
<result>
    <item>
       <companyId>0</companyId>
       <documentDescription/>
       <documentId>0</documentId>
       <version>0</version>
       <webServiceMessage>Usuário sem permissão para publicar documento nesta pasta!</webServiceMessage>
    </item>
</result>
```



updateCardData

Altera os campos de um formulário.



Método:

updateCardData(int companyId, String user, String password, int cardId, CardFieldDto\[\] [cardData](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-cardData))



Parâmetros:

-   companyId: código da empresa.
-   user: login do usuário.
-   password: senha do usuário.
-   cardId: número do formulário.
-   [cardData](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-cardData): campos do formulário que serão alterados.



Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray).



Estrutura de retorno com sucesso

```
<result>
    <item>
       <companyId>1</companyId>
       <documentDescription>Cliente 01</documentDescription>
       <documentId>287</documentId>
       <version>2000</version>
       <webServiceMessage>ok</webServiceMessage>
    </item>
</result>
```



Estrutura de retorno com erro

```
<result>
    <item>
       <companyId>0</companyId>
       <documentDescription/>
       <documentId>0</documentId>
       <version>0</version>
       <webServiceMessage>Usuário sem permissão para publicar documento nesta pasta!</webServiceMessage>
    </item>
</result>
```



**Quadro 5: Métodos da CardService.**



# ECMColleagueGroupService

Webservice responsável por realizar operações referentes aos grupos de usuários no fluig. Pode ser utilizado para relacionar um usuário a um grupo de usuários e serve também para alterar, excluir e pesquisar esses relacionamentos criados.



#### Métodos

createColleagueGroup

Associa um usuário a um grupo.



Método:

createColleagueGroup(String username, String password, int companyId, ColleagueGroupDto\[\] grupo\_colaborador)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa;
-   grupo\_colaborador: grupo que estará associado a um usuário.



Retorno: String.



Estrutura de retorno com sucesso

```
<resultXML>ok</resultXML>
```



Estrutura de retorno com erro

```
<resultXML>nok null</resultXML>
```



deleteColleagueGroup

Exclui um usuário de um grupo.



Método:

deleteColleagueGroup(String username, String password, int companyId, String groupId, String colleagueId)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   groupId: código do grupo.
-   colleagueId: matrícula do usuário.



Retorno: String.



Estrutura de retorno com sucesso

```
<return>ok</return>
```



Estrutura de retorno com erro

```
<faultstring>nok Não foi possível remover o colaborador: Administrador</faultstring>
```



getAllColleagueGroups

Retorna todos os grupos que possuem usuários relacionados.



Método:

getAllColleagueGroups(String username, String password, int companyId)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.



Retorno: ColleagueGroupDto\[\].

getColleagueGroup

Retorna somente um grupo que determinado usuário participa.



Método:

getColleagueGroup(String username, String password, int companyId, String groupId, String colleagueId)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   groupId: código do grupo.
-   colleagueId: matrícula do usuário.



Retorno: ColleagueGroupDto\[\].



Atributos de Retorno:

-   colleagueId

-   companyId

-   groupId


getColleagueGroupsByColleagueId

Retorna os grupos que um usuário participa.



Método:

getColleagueGroupsByColleagueId(String username, String password, int companyId, String colleagueId)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   colleagueId: matrícula do usuário.



Retorno: ColleagueGroupDto\[\].



Atributos de Retorno:

-   colleagueId

-   companyId

-   groupId


 getColleagueGroupsByGroupId

Retorna os usuários que participam de um grupo de usuários.



Método:

getColleagueGroupsByGroupId(String username, String password, int companyId, String groupId)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   groupId: código do grupo.



Retorno: ColleagueGroupDto\[\].



Atributos de Retorno:

-   colleagueId

-   companyId

-   groupId


updateColleagueGroup

Atenção

O método updateColleagueGroup foi depreciado, portanto não é recomendada a sua utilização em desenvolvimentos sobre a plataforma.

Altera a associação de um usuário a um grupo.



Método:

updateColleagueGroup(String username, String password, int companyId, ColleagueGroupDto\[\] grupo\_colaborador)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   grupo\_colaborador: grupo de usuários que será alterado.



Retorno: String.



Estrutura de retorno com sucesso

```
<return>ok</return>
```



Estrutura de retorno com erro

```
<resultXML>nok null</resultXML>
```



**Quadro 6: Métodos da ColleagueGroupService.**

#### Exemplo de utilização

Faça o download da classe [ColleagueGroupServiceClient.java](https://tdn.totvs.com/download/attachments/73084007/GroupServiceClient.java?version=1&modificationDate=1409227367000&api=v2), esta exemplifica a utilização dos principais métodos da classe ColleagueGroupService.



# ECMColleagueReplacementService

Webservice responsável por realizar operações referentes a usuários substitutos no fluig. Pode ser utilizado para criar, alterar, excluir e pesquisar usuários substitutos, entre outros recursos.



#### Métodos

createColleagueReplacement

Cria um substituto.



Método:

createColleagueReplacement (String username, String password, int companyId, [ColleagueReplacementDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ColleagueReplacementDto) crDto)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   crDto: cadastro do substituto.



Retorno: String.



Estrutura de retorno com sucesso

```
<result>OK</result>
```



Estrutura de retorno com erro

```
<result>NOK Não foi possível criar o Substituto: Data de início do período deve ser menor que a data final!</result>
```



deleteColleagueReplacement

Exclui o cadastro de um substituto.



Método:

deleteColleagueReplacement(String username, String password, int companyId, String colleagueId, String replacementId)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   colleagueId: matrícula do usuário origem.
-   replacementId: matrícula do usuário substituto.



Retorno: String.



Estrutura de retorno com sucesso

```
<result>OK</result>
```



Estrutura de retorno com erro

```
result>NOK Não foi encontrado o substituto com os parâmetros informados!</result>
```



getColleagueReplacement

Retorna um substituto de um usuário.



Método:

getColleagueReplacement(String username, String password, int companyId, String colleagueId, String replacementId)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   colleagueId: matrícula do usuário origem.
-   replacementId: matrícula do usuário substituto.



Retorno: [ColleagueReplacementDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ColleagueReplacementDto).

 getReplacementsOfUser



Retorna todos os substitutos de um usuário.



Método:

getReplacementsOfUser(String username, String password, int companyId, String colleagueId)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   colleagueId: matrícula do usuário origem.



Retorno: [ColleagueReplacementDto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ColleagueReplacementDto).

getValidReplacedUsers

Retorna todos os usuário substituídos por um substituto válido.



Método:

getValidReplacedUsers(String username, String password, int companyId, String replacementId)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa;
-   replacementId: matrícula do usuário substituto.



Retorno: [ColleagueReplacementDto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ColleagueReplacementDto).

getValidReplacement

Retorna um substituto válido de um usuário.



Método:

getValidReplacement(String username, String password, int companyId, String colleagueId, String replacementId)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   colleagueId: matrícula do usuário origem.
-   replacementId: matrícula do usuário substituto.



Retorno: [ColleagueReplacementDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ColleagueReplacementDto).

getValidReplacementsOfUser

Retorna todos os substitutos válidos de um usuário.



Método:

getValidReplacementsOfUser(String username, String password, int companyId, String colleagueId)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa;
-   colleagueId: matrícula do usuário origem.



Retorno: [ColleagueReplacementDto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ColleagueReplacementDto).

updateColleagueReplacement

Altera o cadastro de um substituto.



Método:

updateColleagueReplacement (String username, String password, int companyId, [ColleagueReplacementDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ColleagueReplacementDto) crDto)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   crDto: cadastro do usuário.



Retorno: String.



Estrutura de retorno com sucesso

```
<result>OK</result>
```



Estrutura de retorno com erro

```
<result>NOK Não foi encontrado o substituto com os parâmetros informados!</result>
```



**Quadro 7: Métodos da ColleagueReplacementService**

#### Exemplo de utilização

Faça o download da classe [ECMColleagueReplacementService.java](https://git.fluig.com/projects/SAMPLES/repos/samples-webservice/browse/src/samples/ECMColleagueReplacementService.java), esta exemplifica a utilização dos principais métodos da classe ColleagueReplacementService.

# ECMColleagueService

Webservice responsável por realizar operações referentes a usuários no fluig. Pode ser utilizado para criar, alterar, excluir e pesquisar usuários, entre outros recursos.

Atenção!

Os métodos createColleague, createColleaguewithDependencies, updateColleague e updateColleaguewithDependencies, em um dos seus parâmetros, recebe uma lista de [ColleagueDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ColleagueDto), nos objetos destas listas os valores para os campos de senha (*password*) devem ser criptografados com o algoritmo de *hash* MD5, exceto no caso de possuir o identity configurado, neste caso a senha deverá ser passada normalmente sem a criptografia.

Utilizado o *hash* MD5 no e-mail contendo os dados do usuário criado, é regra de negócio o campo senha ser apresentado em branco.

#### Métodos

createColleague

Cria um usuário.



Método:

createColleague(String username, String password, int companyId, [ColleagueDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ColleagueDto)\[\] colleagues)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   colleagues: usuários.



Retorno: String.



Estrutura de retorno com sucesso

```
<resultXML>ok</resultXML>
```



Estrutura de retorno com erro

```
<resultXML>nok Administrador já cadastrado.</resultXML>
```



createColleaguewithDependencies

Cria um usuário com grupos e papéis.



Método:

createColleaguewithDependencies(String username, String password, int companyId, [ColleagueDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ColleagueDto)\[\] colleagues, [GroupDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-GroupDto)\[\] grupos, [WorkflowRoleDto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WorkflowRoleDto) papeis)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   colleagues: usuários.
-   grupos: grupos.
-   papeis: papéis.



Retorno: String.



Estrutura de retorno com sucesso

```
<resultXML>ok</resultXML>
```



Estrutura de retorno com erro

```
<resultXML>nok Administrador já cadastrado.</resultXML>
```



getColleague

Retorna um usuário.



Método:

getColleague(String username, String password, int companyId, String colleagueId)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   colleagueId: matrícula do usuário.



Retorno: [ColleagueDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ColleagueDto)\[\].

getColleagueByLogin 

Retorna o usuário a partir do login.

Método:

getColleagueByLogin(String username, String password)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.



Retorno: [ColleagueDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ColleagueDto)\[\].

getColleagues

Retorna todos os usuários ativos.



Método:

getColleagues(String username, String password, int companyId)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.



Retorno: [ColleagueDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ColleagueDto)\[\].

getColleaguesMail

Retorna um usuário utilizando um e-mail.



Método:

getColleaguesMail(String username, String password, int companyId, String mail)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   mail: e-mail do usuário.



Retorno: [ColleagueDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ColleagueDto)\[\].



Estrutura de retorno com sucesso

```
<result>
   <item>
      <active>true</active>
      <adminUser>true</adminUser>
      <colleagueId>adm</colleagueId>
      <colleagueName>Administrador</colleagueName>
      <companyId>1</companyId>
      <defaultLanguage>pt_BR</defaultLanguage>
      <dialectId>PT_BR</dialectId>
      <ecmVersion>3.0.35.0</ecmVersion>
      <emailHtml>true</emailHtml>
      <gedUser>true</gedUser>
      <groupId>Informática</groupId>
      <login>adm</login>
      <mail>[email protected]</mail>
      <menuConfig>0</menuConfig>
      <passwd/>
      <rowId>0</rowId>
      <usedSpace>0.0</usedSpace>
      <volumeId>Default</volumeId>
   </item>
</result>
```

getColleagueWithMap

Retorna uma mensagem informando se o usuário foi criado corretamente.



Método:

getColleagueWithMap(String colleagueXML, String username, String password)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   colleagueXML: lista normalizada de documentos.



Retorno: String.

getGroups

Retorna os grupos que o usuário participa.



Método:

getGroups(String username, String password, int companyId, String colleagueId)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   colleagueId: matrícula do usuário.



Retorno: [GroupDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-GroupDto)\[\].

getSimpleColleague

Retorna o usuário.



Método:

getSimpleColleague(String username, String password)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.



Retorno: [ColleagueDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ColleagueDto)\[\].

getSummaryColleagues

Retorna todos os usuários ativos.



Método:

getSummaryColleagues(int companyId)



Parâmetros:

-   companyId: código da empresa.



Retorno: [ColleagueDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ColleagueDto)\[\].

removeColleague

Desativa um usuário.



Método:

removeColleague(String username, String password, int companyId, String colleagueId)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   colleagueId: matrícula do usuário.



Retorno: String.



Estrutura de retorno com sucesso

```
<result>ok</result>
```



Estrutura de retorno com erro

```
<result>Usuários do tipo 'administrador' não podem ser desativados!</result>
```



activateColleague

Ativa um usuário.



Método:

activateColleague(String username, String password, int companyId, String colleagueId)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   colleagueId: matrícula do usuário.



Retorno: String.



Estrutura de retorno com sucesso

```
<result>ok</result>
```



Estrutura de retorno com erro

```
<result>Login e senha inválidos</result>
```



updateColleague

Altera um usuário.



Método:

updateColleague(String username, String password, int companyId, [ColleagueDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ColleagueDto)\[\] colleagues)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   colleagues: usuários.



Retorno: String.



Estrutura de retorno com sucesso

```
<resultXML>ok</resultXML>
```



Estrutura de retorno com erro

```
<resultXML>nok Volume Físico inexistente ou não é do tipo Meus Documentos</resultXML>
```



updateColleaguewithDependencies

Esse método altera um usuário com grupos e papéis, permite adicionar os papéis a um usuário.



Método:

updateColleaguewithDependencies(String username, String password, int companyId, [ColleagueDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ColleagueDto)\[\] colleagues, [GroupDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-GroupDto)\[\] grupos, [WorkflowRoleDto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WorkflowRoleDto) papeis)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   colleagues: usuários.
-   grupos: grupos.
-   papeis: papéis.



Retorno: String.



Estrutura de retorno com sucesso

```
<resultXML>ok</resultXML>
```



Estrutura de retorno com erro

```
<resultXML>nok null</resultXML>
```



validateColleagueLogin

Valida o acesso de um usuário no produto.



Método:

validateColleagueLogin(int companyId, String colleagueId, String password)



Parâmetros:

-   companyId: código da empresa.
-   colleagueId: matrícula do usuário.
-   password: senha do usuário.



Retorno: String.



Estrutura de retorno com sucesso

```
<result>ok</result>
```



Estrutura de retorno com erro

```
<faultstring>NOK Login e senha inválidos</faultstring>
```



getRoles

Retorna os papéis associados ao usuário



Método:

getRoles(String username, String password, int companyId, String colleagueId)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   colleagueId: matrícula do usuário.

Retorno: [WorkflowRoleDto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WorkflowRoleDto).

**Quadro 8: Métodos da ColleagueService.**

#### Exemplo de utilização

Faça o download da classe [ColleagueServiceClient.java](https://tdn.totvs.com/download/attachments/73084007/ColleagueServiceClient.java?version=4&modificationDate=1453899861000&api=v2), esta exemplifica a utilização dos principais métodos da classe ColleagueService.



# ECMCompanyService

Webservice responsável por realizar operações referentes à empresa no fluig. Pode ser utilizado para criar, alterar, excluir e pesquisar empresas, entre outros recursos.



#### Métodos



createCompany

Cria uma empresa no fluig.



Método:

createCompany(String username, String password, String companyId, String description, String urlAccessName, String phisicalPath, String webdeskServer, String webPort)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   description: descrição da empresa.
-   urlAccessName: URL de acesso.
-   phisicalPath: caminho físico.
-   webdeskServer: servidor.
-   webPort: porta.



Retorno: String.



Estrutura de retorno com sucesso

```
<result>OK</result>
```



Estrutura de retorno com erro

```
<result>NOK: Empresa com o Id 1 já cadastrado.</result>
```



getCompanies

Retorna todas as empresas cadastradas no fluig.



Método:

getCompanies(String username, String password, String companyId)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.



Retorno: CompanyDto\[\].

getCompany

Retorna uma empresa cadastrada no fluig.



Método:

getCompany(int companyId)



Parâmetros:

-   companyId: código da empresa.



Retorno: CompanyDto.

updateCompany

Altera uma empresa no fluig.



Método:

updateCompany(String username, String password, String companyId, String description, String urlAccessName, String phisicalPath, String webdeskServer, String webPort)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   description: descrição da empresa.
-   urlAccessName: URL de acesso.
-   phisicalPath: caminho físico.
-   webdeskServer: servidor.
-   webPort: porta.



Retorno: String.



Estrutura de retorno com sucesso

```
<result>OK</result>
```



Estrutura de retorno com erro

```
<result>NOK:Login e senha inválidos</result>
```



**Quadro 9: Métodos da CompanyService**

#### Exemplo de utilização

Faça o download da classe [CompanyServiceClient.java](https://tdn.totvs.com/download/attachments/73084007/CompanyServiceClient.java?version=1&modificationDate=1378474967000&api=v2), esta exemplifica a utilização dos principais métodos da classe CompanyService.



# ECMCustomFieldsService

Webservice responsável por interagir com os campos customizados do fluig. Pode ser utilizado para criar, alterar, excluir e pesquisar campos customizados, entre outros recursos.



#### Métodos

createCustomFields

Cria um campo customizado.



Método:

createCustomFields(String user, String password, int companyId, [CustomFieldsDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-CustomFieldsDto)\[\] customFieldsDto)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   customFieldsDto: campo customizado que será criado.



Retorno: String, retorna OK caso os parâmetros da requisição estejam corretos.



Estrutura de retorno com sucesso

```
<result>OK</result>
```



Estrutura de retorno com erro

```
<result>ERROR: Ja existe um metadado customizado com este código!</result>
```



getAllCustomField

Retorna todos os campos customizados.



Método:

getAllCustomField(String user, String password, int companyId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.



Retorno: [CustomFieldsDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-CustomFieldsDto).

getAllDocumentCustomField

Retorna todos os campos customizados de um documento.



Método:

getAllDocumentCustomField(String user, String password, int companyId, int documentId, int version)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   documentId: número do documento.
-   version: versão do documento.



Retorno: [DocumentCustomFieldsDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentCustomFieldsDto).

removeCustomField

Exclui um campo customizado.



Método:

removeCustomField(String user, String password, int companyId, String customFieldsId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   customFieldsId: código do campo customizado.



Retorno: String, retorna OK caso os parâmetros da requisição estejam corretos. 



Estrutura de retorno com sucesso

```
<result>OK</result>
```



Estrutura de retorno com erro

```
<result>ERROR: Metadado customizado não pode ser encontrado!</result>
```



removeDocumentCustomField

Exclui um campo customizado de um documento.



Método:

removeDocumentCustomField(String user, String password, int companyId, String customFieldsId, int documentId, int version)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   customFieldsId: código do campo customizado.
-   documentId: número do documento.
-   version: versão do documento.



Retorno:

Retorno: String, retorna OK caso os parâmetros da requisição estejam corretos.

.



Estrutura de retorno com sucesso

```
<result>OK</result>
```



Estrutura de retorno com erro

```
<result>ERROR: Metadado customizado não podem ser encontrado para este documento!</result>
```



setDocumentCustomFields

Cria ou altera um campo customizado em um documento.



Método:

setDocumentCustomFields(String user, String password, int companyId, [DocumentCustomFieldsDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentCustomFieldsDto)\[\] documentCustomFieldsDto)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   documentCustomFieldsDto: documento com campo customizado.



Retorno: String, retorna OK caso os parâmetros da requisição estejam corretos. 



Estrutura de retorno com sucesso

```
<result>OK</result>
```



Estrutura de retorno com erro

```
<result>ERROR: Não foi possível incluir a entidade: Não existe metadado customizado cadastrado com este código</result>
```



updateCustomFields

Altera um campo customizado.



Método:

updateCustomFields(String user, String password, int companyId, [CustomFieldsDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-CustomFieldsDto)\[\] customFieldsDto)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   customFieldsDto: campo customizado que será alterado.



Retorno: String, retorna OK caso os parâmetros da requisição estejam corretos. 



Estrutura de retorno com sucesso

```
<result>OK</result>
```



Estrutura de retorno com erro

```
<result>ERROR: Metadado customizado não podem ser encontrado!</result>
```



**Quadro 10: Métodos da CustomFieldsService**

#### Exemplo de utilização

Faça o download da classe [CustomFieldsServiceClient.java](https://tdn.totvs.com/download/attachments/73084007/CustomFieldsClient.java?version=1&modificationDate=1378475008000&api=v2), esta exemplifica a utilização dos principais métodos da classe CustomFieldsService.



# ECMDashBoardService

Webservice responsável por interagir com a central de tarefas do fluig. Pode ser utilizado para pesquisar as informações que estão disponíveis na central de tarefas.



#### Métodos

findMyDocuments

Retorna os documentos do usuário que precisam ser aprovados.



Método:

findMyDocuments(String user, String password, int companyId, String colleagueId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   colleagueId: matrícula do usuário.



Retorno: [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)\[\].

findMyDocumentsOnDemand

Retorna os documentos do usuário que precisam ser aprovados, paginados.



Método:

findMyDocumentsOnDemand(String user, String password, int companyId, String colleagueId, int limit, int lastRowId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   colleagueId: matrícula do usuário.
-   limit: número de registros a serem retornados.
-   lastRowId: última linha retornada.



Retorno: [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)\[\].

findDocumentsToApprove

Retorna os documentos que o usuário precisa aprovar.



Método:

findDocumentsToApprove(String user, String password, int companyId, String colleagueId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   colleagueId: matrícula do usuário.



Retorno: [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)\[\].

findDocumentsToApproveOnDemand

Retorna os documentos que o usuário precisa aprovar, paginados.



Método:

findDocumentsToApproveOnDemand(String user, String password, int companyId, String colleagueId, int limit, int lastRowId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   colleagueId: matrícula do usuário.
-   limit: número de registros a serem retornados.
-   lastRowId: última linha retornada.



Retorno: [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)\[\].

findAgreementDocuments

Retorna os documentos do usuário que estão em consenso.



Método:

findAgreementDocuments(String user, String password, int companyId, String colleagueId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   colleagueId: matrícula do usuário.



Retorno: [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)\[\].

findCheckoutDocuments

Retorna os documentos do usuário que estão em checkout.



Método:

findCheckoutDocuments(String user, String password, int companyId, String colleagueId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   colleagueId: matrícula do usuário.



Retorno: [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)\[\].

findCancelledTasks

Retorna as tarefas atribuidas ao usuário que foram canceladas.



Método:

findCancelledTasks(String user, String password, int companyId, String colleagueId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   colleagueId: matrícula do usuário.



Retorno: [WorkflowProcessDto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WorkflowProcessDto).

findCompletedTasks

Retorna as tarefas atribuidas ao usuário que foram finalizadas.



Método:

findCompletedTasks(String user, String password, int companyId, String colleagueId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   colleagueId: matrícula do usuário.



Retorno: [WorkflowProcessDto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WorkflowProcessDto).

findConsensusTasks

Retorna as tarefas atribuidas ao usuário que estão em consenso.



Método:

findConsensusTasks(String user, String password, int companyId, String colleagueId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   colleagueId: matrícula do usuário.



Retorno: [WorkflowProcessDto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WorkflowProcessDto).

findTransferredTasks

Retorna as tarefas atribuidas ao usuário que foram transferidas.



Método:

findTransferredTasks(String user, String password, int companyId, String colleagueId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   colleagueId: matrícula do usuário.



Retorno: [WorkflowProcessDto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WorkflowProcessDto).

findWorkflowTasks

Retorna as tarefas do usuário que estão abertas.



Método:

findWorkflowTasks(String user, String password, int companyId, String colleagueId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   colleagueId: matrícula do usuário.



Atenção!

O **colleagueId** pode ser preenchido com Pool:Role:Id ou Pool:Group:Id substituindo o Id pelo código de um papel ou de um grupo, respectivamente, para retornar as solicitações referentes a eles.





Retorno: [WorkflowProcessDto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WorkflowProcessDto).

findWorkflowTasksOnDemand

Retorna as tarefas do usuário que estão abertas, paginadas.



Método:

findWorkflowTasksOnDemand(String user, String password, int companyId, String colleagueId, int limit, int lastRowId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   colleagueId: matrícula do usuário.
-   limit: número de registros a serem retornados.
-   lastRowId: última linha retornada.



Atenção!

O **colleagueId** pode ser preenchido com Pool:Role:Id ou Pool:Group:Id substituindo o Id pelo código de um papel ou de um grupo, respectivamente, para retornar as solicitações referentes a eles.



Retorno: [WorkflowProcessDto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WorkflowProcessDto).

findMyRequests

Retorna as solicitações abertas que foram inicializadas pelo usuário.



Método:

findMyRequests(String user, String password, int companyId, String colleagueId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   colleagueId: matrícula do usuário.



Retorno: [WorkflowProcessDto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WorkflowProcessDto).

findMyRequestsOnDemand

Retorna as solicitações abertas que foram inicializadas pelo usuário, paginadas.



Método:

findMyRequestsOnDemand(String user, String password, int companyId, String colleagueId, int limit, int lastRowId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   colleagueId: matrícula do usuário.
-   limit: número de registros a serem retornados.
-   lastRowId: última linha retornada.



Retorno: [WorkflowProcessDto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WorkflowProcessDto).

findMyManagerTasks

Retorna as tarefas gerenciadas pelo usuário.



Método:

findMyManagerTasks(String user, String password, int companyId, String colleagueId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   colleagueId: matrícula do usuário.



Retorno: [WorkflowProcessDto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WorkflowProcessDto).

findExpiredWorkflowTasks

Retorna as tarefas do usuário que estão em atraso



Método: findExpiredWorkflowTasks(String user, String password, int companyId, String colleagueId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   colleagueId: matrícula do usuário.



Atenção!

O **colleagueId** pode ser preenchido com Pool:Role:Id ou Pool:Group:Id substituindo o Id pelo código de um papel ou de um grupo, respectivamente, para retornar as solicitações referentes a eles.





Retorno: [WorkflowProcessDto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WorkflowProcessDto).

fillStatusTask

Retorna a quantidade de tarefas atrasadas, no prazo e sem prazo de um usuário.



Método:

fillStatusTask(String user, String password, int companyId, String colleagueId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   colleagueId: matrícula do usuário.



Atenção!

O **colleagueId** pode ser preenchido com Pool:Role:Id ou Pool:Group:Id substituindo o Id pelo código de um papel ou de um grupo, respectivamente, para retornar as solicitações referentes a eles.





Retorno: List de int\[\], com a quantidade de tarefas atrasadas.

fillChronoTasks

Retorna a quantidade de tarefas com prazo de conclusão que foram atribuídas ao usuário e não foram finalizadas.



Método:

fillChronoTasks(String user, String password, int companyId, String colleagueId, int yearIni, int yearFin, int mounthIni, int mounthFin, int dayIni, int dayFin, int kindTask)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   colleagueId: matrícula do usuário.
-   yearIni: ano inicial.
-   yearFin: ano final.
-   mounthIni: mês inicial.
-   mounthFin: mês final.
-   dayIni: dia inicial.
-   dayFin: dia final.
-   kindTask: tipo da tarefa.



Atenção!

O **colleagueId** pode ser preenchido com Pool:Role:Id ou Pool:Group:Id substituindo o Id pelo código de um papel ou de um grupo, respectivamente, para retornar as solicitações referentes a eles.





Retorno: : Lista de int\[\], com a quantidade de tarefas com prazo de conclusão atribuída ao usuário.

fillTypeTasks

Retorna os tipos de tarefas que o usuário possui.



Método:

fillTypeTasks(String user, String password, int companyId, String colleagueId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   colleagueId: matrícula do usuário.



Retorno: [TaskVODto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-TaskVODto).

fillTypeTasksOfReplacement

Retorna os tipos de tarefas que o usuário substituto possui.



Método:

fillTypeTasksOfReplacement(String user, String password, int companyId, String colleagueId, String replacementId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   colleagueId: matrícula do usuário.
-   replacementId: matrícula do usuário substituto.



Retorno: [TaskVODto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-TaskVODto).

getOpenTasksByColleagueGroups

Retorna as tarefas atribuídas a um grupo que o usuário participa.



Método:

getOpenTasksByColleagueGroups(String user, String password, int companyId, String colleagueId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   colleagueId: matrícula do usuário.



Retorno: [WorkflowTaskDto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WorkflowTaskDto).

getOpenTasksByColleagueGroupsOnDemand

Retorna as tarefas atribuídas a um grupo que o usuário participa, paginadas.



Método:

getOpenTasksByColleagueGroupsOnDemand(String user, String password, int companyId, String colleagueId, int limit, int lastRowId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   colleagueId: matrícula do usuário.
-   limit: número de registros a serem retornados.
-   lastRowId: última linha retornada.



Retorno: [WorkflowTaskDto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WorkflowTaskDto).

getOpenTasksByColleagueRoles

Retorna as tarefas atribuídas a um papel que o usuário participa.



Método:

getOpenTasksByColleagueRoles(String user, String password, int companyId, String colleagueId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   colleagueId: matrícula do usuário.



Retorno: [WorkflowTaskDto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WorkflowTaskDto).

getOpenTasksByColleagueRolesOnDemand

Retorna as tarefas atribuídas a um papel workflow que o usuário participa, paginadas.



Método:

getOpenTasksByColleagueRolesOnDemand(String user, String password, int companyId, String colleagueId, int limit, int lastRowId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   colleagueId: matrícula do usuário.
-   limit: número de registros a serem retornados.
-   lastRowId: última linha retornada.



Retorno: [WorkflowTaskDto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WorkflowTaskDto).

getSummaryRequests

Retorna os contadores de pendências da Home.



Método:

getSummaryRequests(int companyId, String user, String password, String colleagueId)



Parâmetros:

-   companyId: código da empresa.
-   user: login do usuário.
-   password: senha do usuário.
-   colleagueId: matrícula do usuário.



Atenção!

O **colleagueId** pode ser preenchido com Pool:Role:Id ou Pool:Group:Id substituindo o Id pelo código de um papel ou de um grupo, respectivamente, para retornar as solicitações referentes a eles.





Retorno: [HomeRequestSummaryDto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-HomeRequestSummaryDto).

getUrlEcm

Retorna a url do servidor.



Método:

getUrlEcm(long companyId)



Parâmetros:

-   companyId: código da empresa.




Retorno: String , com a url da empresa. 

**Quadro 11: Métodos da ECMDashBoardService**

#### Exemplo de utilização

Faça o download da classe [ECMDashBoardService.java](https://git.fluig.com/projects/SAMPLES/repos/samples-webservice/browse/src/samples/ECMDashBoardService.java), esta exemplifica a utilização dos principais métodos da classe ECMDashBoardService.

# ECMDataServiceService

Webservice responsável por interagir com os serviços externos do fluig. Pode ser utilizado para criar, alterar, excluir e pesquisar os serviços externos existentes.



#### Métodos

createDataService

Cria um serviço externo.



Método:

createDataService(int companyId, String user, String password, DataServiceDto\[\] dataServiceDto)



Parâmetros:

-   companyId: código da empresa.
-   user: login do usuário.
-   password: senha do usuário.
-   dataServiceDto: serviço externo que será criado.



Retorno: String.

deleteDataService 

Remove um serviço externo.



Método:

deleteDataService(int companyId, String user, String password, String dataServiceName)



Parâmetros:

-   companyId: código da empresa.
-   user: login do usuário.
-   password: senha do usuário.
-   dataServiceName: nome do serviço externo que será removido.



Retorno: void.

getAllServices

Retorna todos os serviços externos cadastrados.



Método:

getAllServices(int companyId, String user, String password)



Parâmetros:

-   companyId: código da empresa.
-   user: login do usuário.
-   password: senha do usuário.



Retorno: dataServiceDto\[\].

loadDataService

Retorna um serviço externo.



Método:

loadDataService(int companyId, String user, String password, String dataServiceName)



Parâmetros:

-   companyId: código da empresa.
-   user: login do usuário.
-   password: senha do usuário.
-   dataServiceName: nome do serviço externo.



Retorno: dataServiceDto.

updateDataService

Atualiza um serviço externo.



Método:

updateDataService(int companyId, String user, String password, DataServiceDto\[\] dataServiceDto)



Parâmetros:

-   companyId: código da empresa.
-   user: login do usuário.
-   password: senha do usuário.
-   dataServiceDto: serviço externo que será atualizado.



Retorno: void.

createDataServiceAuthenticated

Cria um serviço externo com autenticação



Método:

createDataServiceAuthenticated(int companyId, String user, String password, DataServiceDto\[\] dataServiceDto, OauthDTO oauthDTO)



Parâmetros:

-   companyId: código da empresa.
-   user: login do usuário.
-   password: senha do usuário.
-   dataServiceDto: serviço externo que será criado.
-   oauthDTO:  objeto com as configurações para a autenticação no serviço.



Retorno: String.

updateDataServiceAuthenticated

Atualiza um serviço externo com autenticação



Método:

updateDataServiceAuthenticated(int companyId, String user, String password, DataServiceDto\[\] dataServiceDto, OauthDTO oauthDTO)



Parâmetros:

-   companyId: código da empresa.
-   user: login do usuário.
-   password: senha do usuário.
-   dataServiceDto: serviço externo que será atualizado.
-   oauthDTO:  objeto com as configurações para a autenticação no serviço.



Retorno: void.

**Quadro 12: Métodos da DataServiceService.**

# ECMDatasetService

Webservice responsável por interagir com os datasets do fluig. Pode ser utilizado para pesquisar os datasets existentes.



#### Métodos

addDataset

Cria um dataset.



Método:

addDataset(int companyId, String user, String password, String datasetName, String description, String impl)



Parâmetros:

-   companyId: código da empresa.
-   user: login do usuário.
-   password: senha do usuário.
-   datasetName: nome do dataset que será criado.
-   description: descrição do dataset.
-   impl: implementação para criação do dataset.



Retorno: String.

deleteDataset

Remove um dataset.



Método:

deleteDataset(int companyId, String user, String password, String datasetName)



Parâmetros:

-   companyId: código da empresa.
-   user: login do usuário.
-   password: senha do usuário.
-   datasetName: nome do dataset que será removido.



Retorno: void.

getAvailableDatasets

Retorna todos os datasets disponíveis.



Método:

getAvailableDatasets(int companyId, String user, String password)



Parâmetros:

-   companyId: código da empresa.
-   user: login do usuário.
-   password: senha do usuário.



Retorno: Object\[\].

getDataset

Retorna as informações de um dataset.



Método:

getDataset(int companyId, String user, String password, String name, String\[\] fields, SearchConstraintDto\[\] constraintsDto, String\[\] order)



Parâmetros:

-   companyId: código da empresa.
-   user: login do usuário.
-   password: senha do usuário.
-   name: nome do dataset.
-   fields: campos que serão retornados do dataset.
-   constraintsDto: filtro dos registros que irão compor o dataset.
-   order: campos utilizados para ordenar o dataset.



Retorno: DatasetDto.

updateDataset

Atualiza um dataset.



Método:

updateDataset(int companyId, String user, String password, String datasetName, String description, String impl)



Parâmetros:

-   companyId: código da empresa.
-   user: login do usuário.
-   password: senha do usuário.
-   datasetName: nome do dataset que será atualizado.
-   description: descrição do dataset.
-   impl: implementação do dataset.



Retorno: void.

**Quadro 13: Métodos da DatasetService**

#### Exemplo de utilização

Faça o download da classe [DatasetServiceClient.java](https://tdn.totvs.com/download/attachments/73084007/DatasetServiceClient.java?version=2&modificationDate=1378475205000&api=v2), esta exemplifica a utilização dos principais métodos da classe DatasetService.



# ECMDocumentService

Webservice responsável por realizar operações referentes a documentos do fluig. Pode ser utilizado para criar, alterar, excluir e procurar documentos, entre outros recursos.

Dica!

Para transferir arquivos para a pasta de upload é recomendado a utilização do protocolo FTP. Para mais detalhes sobre o procedimento acesse a documentação [Utilizando o protocolo FTP](https://tdn.totvs.com/x/zABlDw).

Não recomendamos passar *via webservice* arquivos convertidos em base 64 na tag *<filecontent>* pois existe uma limitação de quantidade da String. Indicamos a utilização em arquivos pequenos de no máximo 5mb

Faça [download](https://git.fluig.com/projects/SAMPLES/repos/componentes/browse/soap-xml-document-service) do exemplo contido em nosso repositório utilizando o arquivo **soap-xml-document-service**.



#### Métodos

approveDocument

Aprova ou reprova documento pendente de aprovação.



Metodo:

approveDocument(int companyId, String userId, String password, int documentId, int version, String approverId, boolean approved, String observation)



Parâmetros:



-   user: código do usuário de integração.
-   password: senha do usuário de integração.
-   companyId: código da empresa.
-   documentId: código do documento a ser aprovado.
-   version: versão do documento a ser aprovado.
-   approverId: código do aprovador
-   approved: true se aprova o documento e false caso o documento sera reprovado.
-   observation: observação da aprovação ou rejeição.



Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray).



Estrutura de retorno com sucesso

```
<result>
    <item>
       <companyId>1</companyId>
       <documentDescription/>
       <documentId>293</documentId>
       <version>0</version>
       <webServiceMessage>ok</webServiceMessage>
    </item>
</result>
```



Estrutura de retorno com erro

```
<result>
    <item>
       <companyId>0</companyId>
       <documentDescription/>
       <documentId>0</documentId>
       <version>0</version>
       <webServiceMessage>Documento já está aprovado.</webServiceMessage>
    </item>
</result>
```



copyDocumentToUploadArea

Copia os arquivos (principal e anexos) de um documento para a area de upload do usuário. Isto permite que os documentos tornem-se acessíveis via FTP.

Método:

copyDocumentToUploadArea(String user, String password, int companyId, int documentId, int version, String colleagueId)

Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   documentId: número do documento que será copiado.
-   version: versão do documento
-   colleagueId: matrícula do usuário cuja área de upload será utilizada



Retorno: String\[\] nome dos arquivos que foram disponibilizados na área de upload



Estrutura de retorno com sucesso

```
<result>
    <item>Política de uso.pdf</item>
</result>
```



Estrutura de retorno com erro

```
<faultstring>O usuário não tem permissão para acessar o documento ou a versão do documento é inválida.</faultstring>
```



createDocument 

Cria um documento.



Método:

createDocument(String user, String password, int companyId, [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)\[\] docDtos, [Attachment](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-Attachment)\[\] attachs,  [DocumentSecurityConfigDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentSecurityConfigDto)\[\] docSecurity, [ApproverDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ApproverDto)\[\] docApprovers, [RelatedDocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-RelatedDocumentDto)\[\] relDocs)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   docDtos: documento que será publicado (mais detalhes do parâmetro [aqui](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)).
-   attachs: arquivo anexado na publicação (mais detalhes do parâmetro [aqui](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-Attachment)).
-   docSecurity: segurança do documento que será publicado (mais detalhes do parâmetro [aqui](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentSecurityConfigDto)).
-   docApprovers: aprovadores do documento que será publicado (mais detalhes do parâmetro [aqui](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ApproverDto)).
-   relDocs: documentos relacionados ao documento que será publicado (mais detalhes do parâmetro [aqui](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-RelatedDocumentDto)).

[Exemplo de XML](https://tdn.totvs.com/download/attachments/73084007/createDocument.xml?version=1&modificationDate=1559583184060&api=v2).



Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray).



Estrutura de retorno com sucesso

```
<result>
    <item>
       <companyId>1</companyId>
       <documentDescription>Política de uso</documentDescription>
       <documentId>295</documentId>
       <version>1000</version>
       <webServiceMessage>ok</webServiceMessage>
    </item>
 </result>
```



Estrutura de retorno com erro

```
<result>
    <item>
       <companyId>0</companyId>
       <documentDescription/>
       <documentId>0</documentId>
       <version>0</version>
       <webServiceMessage>Arquivo principal do documento deve ser informado!</webServiceMessage>
    </item>
</result>
```

Veja nosso exemplo no [repositório do fluig](https://git.fluig.com/projects/SAMPLES). Utilize o arquivo **[dataset-create-document](https://git.fluig.com/projects/SAMPLES/repos/datasets/browse/dataset-create-document)**.

createDocumentWithApprovementLevels

Cria um documento com nível de aprovação.



Método:

createDocumentWithApprovementLevels(String user, String password, int companyId, [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)\[\] docDtos, Attachment\[\] attachs, [DocumentSecurityConfigDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentSecurityConfigDto)\[\] docSecurity, [ApproverWithLevelDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ApproverWithLevelDto)\[\] docApproversLevels, [ApprovalLevelDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ApprovalLevelDto)\[\] levels, RelatedDocumentDto\[\] relDocs)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   docDtos: documento que será publicado.
-   attachs: arquivo anexado na publicação.
-   docSecurity: segurança do documento que será publicado.
-   docApproversLevel: nível de aprovação que os aprovadores do documento estão inseridos.
-   levels: níveis de aprovação que o documento terá.
-   relDocs: documentos relacionados ao documento que será publicado.



Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray).



Estrutura de retorno com sucesso

```
<result>
    <item>
       <companyId>1</companyId>
       <documentDescription>Política de uso</documentDescription>
       <documentId>296</documentId>
       <version>1000</version>
       <webServiceMessage>ok</webServiceMessage>
    </item>
</result>
```



Estrutura de retorno com erro

```
<result>
    <item>
       <companyId>0</companyId>
       <documentDescription/>
       <documentId>0</documentId>
       <version>0</version>
       <webServiceMessage>Nao foi informado um ApprovalLevelDto com o levelId 1</webServiceMessage>
    </item>
</result>
```



createSimpleDocument

Cria um documento simples.



Método:

createSimpleDocument(String user, String password, int company, int parentDocumentId, String publisherId, String documentDescription, Attachment\[\] attachments)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   parentDocumentId: número da pasta pai.
-   publisherId: matrícula do usuário que publicará o documento.
-   documentDescription: descrição do documento.
-   attachments: arquivo anexado na publicação (para utilização via TDS é necessário instanciar a classe Attachment. Confira um exemplo de utilização em [Criação de documento a partir do método createSimpleDocument](https://tdn.totvs.com/pages/viewpage.action?pageId=223914729)).



Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray).



Estrutura de retorno com sucesso

```
<result>
	<item>
	   <companyId>1</companyId>
	   <documentDescription>oioioi</documentDescription>
	   <documentId>299</documentId>
	   <version>1000</version>
	   <webServiceMessage>ok</webServiceMessage>
	</item>
</result>
```



Estrutura de retorno com erro

```
<result>
    <item>
       <companyId>0</companyId>
       <documentDescription/>
       <documentId>0</documentId>
       <version>0</version>
       <webServiceMessage>Arquivo Principal não encontrado C:\fluig\volume\upload\adm\Política de uso.pdf\</webServiceMessage>
    </item>
</result>
```



createSimpleDocumentPrivate

Cria um documento simples na pasta particular.



Método:

createSimpleDocumentPrivate(String colleagueId, String password, int companyId, int parentDocumentId, String documentDescription, Attachment\[\] attachments)



Parâmetros:

-   colleagueId: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   parentDocumentId: número da pasta pai.
-   documentDescription: descrição do documento.
-   attachments: arquivo anexado na publicação.



Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray).



Estrutura de retorno com sucesso

```
<result>
	<item>
	   <companyId>1</companyId>
	   <documentDescription>oioioi</documentDescription>
	   <documentId>300</documentId>
	   <version>1000</version>
	   <webServiceMessage>ok</webServiceMessage>
	</item>
</result>
```



Estrutura de retorno com erro

```
<result>
    <item>
       <companyId>0</companyId>
       <documentDescription/>
       <documentId>0</documentId>
       <version>0</version>
       <webServiceMessage>Arquivo Principal não encontrado C:\fluig\volume\upload\adm\Política de uso.pdf\</webServiceMessage>
    </item>
</result>
```



deleteDocument

Exclui um documento e o envia para a lixeira.



Método:

deleteDocument(String user, String password, int companyId, int documentId, String colleagueId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   documentId: número do documento que será excluído.
-   colleagueId: matrícula do usuário.



Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray).



Estrutura de retorno com sucesso

```
<result>
	<item>
	   <companyId>1</companyId>
	   <documentDescription>oioioi</documentDescription>
	   <documentId>300</documentId>
	   <version>1000</version>
	   <webServiceMessage>ok</webServiceMessage>
	</item>
</result>
```



Estrutura de retorno com erro

```
<result>
	<item>
	   <companyId>0</companyId>
	   <documentDescription/>
	   <documentId>0</documentId>
	   <version>0</version>
	   <webServiceMessage>Documento inexistente ou permissão insuficiente.</webServiceMessage>
	</item>
</result>
```



destroyDocument

Exclui um documento da lixeira.



Método:

destroyDocument(String user, String password, int companyId, int documentId, String colleagueId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   documentId: número do documento que será excluído.
-   colleagueId: matrícula do usuário.



Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray).



Estrutura de retorno com sucesso

```
<result>
	<item>
	   <companyId>1</companyId>
	   <documentDescription>oioioi</documentDescription>
	   <documentId>300</documentId>
	   <version>1000</version>
	   <webServiceMessage>ok</webServiceMessage>
	</item>
</result>
```



Estrutura de retorno com erro

```
<result>
	<item>
	   <companyId>0</companyId>
	   <documentDescription/>
	   <documentId>0</documentId>
	   <version>0</version>
	   <webServiceMessage>Por segurança, não é possível destruir o documento sem antes excluí-lo.</webServiceMessage>
	</item>
</result>
```



destroyDocumentApproval

Exclui documento pendente de aprovação.



Metodo:

destroyDocumentApproval(String userId, String password, int companyId, int documentId, String publisherId)



Parâmetros:



-   user: código do usuário de integração.
-   password: senha do usuário de integração.
-   companyId: código da empresa.
-   documentId: código do documento a excluido.
-   publisherId: código do publicador.



Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray).



Estrutura de retorno com sucesso

```
<result>
	<item>
	   <companyId>1</companyId>
	   <documentDescription>oioioi</documentDescription>
	   <documentId>298</documentId>
	   <version>1000</version>
	   <webServiceMessage>ok</webServiceMessage>
	</item>
</result>
```



Estrutura de retorno com erro

```
<result>
	<item>
	   <companyId>0</companyId>
	   <documentDescription/>
	   <documentId>0</documentId>
	   <version>0</version>
	   <webServiceMessage>Documento não encontrado.</webServiceMessage>
	</item>
</result>
```



findMostPopularDocuments

Retorna os documentos mais acessados no fluig que o usuário tenha permissão de acesso.



Método:

findMostPopularDocuments(String user, String password, int companyId, String colleagueId, int nr\_resultados)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   colleagueId: matrícula do usuário.
-   nr\_resultados: quantidade de documentos que serão retornados.



Retorno: [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)\[\].



Atributos de Retorno:

-   accesCount
-   activeVersion
-   additionalComments
-   allowMuiltiCardsPerUser
-   approved
-   colleagueId
-   companyId
-   crc
-   createDate
-   datasetName
-   deleted
-   documentDescription
-   documentId
-   documentType
-   documentTypeId
-   downloadEnabled
-   draft
-   expirationDate
-   expires
-   iconId
-   imutable
-   indexed
-   inheritSecurity
-   isEncrypted
-   keyWord
-   lastModifiedDate
-   metaListId
-   metaListRecordId
-   parentDocumentId
-   permissionType
-   phisicalFile
-   phisicalFileSize
-   privateDocument
-   protectedCopy
-   publisherId
-   restrictionType
-   rowId
-   securityLevel
-   topicId
-   translated
-   UUID
-   updateIsoProperties
-   userNotify
-   validationStartDate
-   version
-   versionDescription
-   volumeId

findMostPopularDocumentsOnDemand

Retorna os documentos mais acessados no fluig que o usuário tenha permissão de acesso, paginados.



Método:

findMostPopularDocuments(int companyId, String user, String password, String colleagueId, int limit, int lastRowId)



Parâmetros:

-   companyId: código da empresa.
-   user: login do usuário.
-   password: senha do usuário.
-   colleagueId: matrícula do usuário.
-   limit: número de registros a serem retornados.
-   lastRowId: última linha retornada.



Retorno: [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)\[\].



Atributos de Retorno:

-   accesCount
-   activeVersion
-   additionalComments
-   allowMuiltiCardsPerUser
-   approved
-   colleagueId
-   companyId
-   crc
-   createDate
-   datasetName
-   deleted
-   documentDescription
-   documentId
-   documentType
-   documentTypeId
-   downloadEnabled
-   draft
-   expirationDate
-   expires
-   iconId
-   imutable
-   indexed
-   inheritSecurity
-   isEncrypted
-   keyWord
-   lastModifiedDate
-   metaListId
-   metaListRecordId
-   parentDocumentId
-   permissionType
-   phisicalFile
-   phisicalFileSize
-   privateDocument
-   protectedCopy
-   publisherId
-   restrictionType
-   rowId
-   securityLevel
-   topicId
-   translated
-   UUID
-   updateIsoProperties
-   userNotify
-   validationStartDate
-   version
-   versionDescription
-   volumeId

findRecycledDocuments

Retorna os documentos da lixeira.



Método:

findRecycledDocuments(String user, String password, int companyId, String colleagueId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   colleagueId: matrícula do usuário.



Retorno: [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)\[\].



Atributos de Retorno:

-   accesCount
-   activeVersion
-   additionalComments
-   allowMuiltiCardsPerUser
-   approved
-   colleagueId
-   companyId
-   crc
-   createDate
-   datasetName
-   deleted
-   documentDescription
-   documentId
-   documentType
-   documentTypeId
-   downloadEnabled
-   draft
-   expirationDate
-   expires
-   iconId
-   imutable
-   indexed
-   inheritSecurity
-   isEncrypted
-   keyWord
-   lastModifiedDate
-   metaListId
-   metaListRecordId
-   parentDocumentId
-   permissionType
-   phisicalFile
-   phisicalFileSize
-   privateDocument
-   protectedCopy
-   publisherId
-   restrictionType
-   rowId
-   securityLevel
-   topicId
-   translated
-   UUID
-   updateIsoProperties
-   userNotify
-   validationStartDate
-   version
-   versionDescription
-   volumeId

getActiveDocument

Retorna um documento ativo.



Método:

getActiveDocument(String user, String password, int companyId, int nrDocumentId, String colleagueId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   nrDocumentId: número do documento.
-   colleagueId: matrícula do usuário.



Retorno: [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)\[\].

getApprovers

Retorna os aprovadores de um documento.



Método:

getApprovers(String user, String password, int companyId, int nrDocumentId, int version)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   nrDocumentId: número do documento.
-   version: número da versão do documento.



Retorno: [ApproverWithLevelDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ApproverWithLevelDto)\[\].



Atributos de Retorno:

-   approverType
-   colleagueId
-   companyId
-   documentId
-   levelId
-   version

getDocumentApprovalHistory

Retorna o histórico de aprovações do documento solicitado.



Metodo:

getDocumentApprovalHistory(String user, String password, int companyId, int documentId, int version)



Parâmetros:

-   user: código do usuário de integração.
-   password: senha do usuário de integração.
-   companyId: código da empresa.
-   documentId: código do documento que se deseja visualizar o status.
-   version: versão do documento (caso seja informada a versão 0 sera solicitada a ultima versão do documento).



Retorno: [DocumentApprovementHistoryDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentApprovementHistoryDto).



Atributos de Retorno:

-   colleagueId
-   documentVersion
-   iterationSequence
-   levelId
-   movementSequence
-   observation
-   signed
-   status

getDocumentApprovalStatus

Retorna o status do documento com relação a aprovação. O status do documento pode ser:

0 - Aprovado.

1 - Rejeitado.

2- Em aprovação.



Método:

getDocumentApprovalStatus(String user, String password, int companyId, int documentId, int version)



Parâmetros:



-   user: código do usuário de integração.
-   password: senha do usuário de integração.
-   companyId: código da empresa.
-   documentId: código do documento que se deseja visualizar o status.
-   version: versão do documento (caso seja informada a versão 0 sera solicitada a ultima versão do documento).



Retorno: [DocumentApprovalStatusDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentApprovalStatusDto).



Atributos de Retorno:

-   companyId
-   documentId
-   status
-   version

getDocumentByExternalId

Retorna um documento pelo código externo.



Método:

getDocumentByExternalId(String user, String password, int companyId, String externalDocumentId, String colleagueId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   externalDocumentId: código externo do documento.
-   colleagueId: matrícula do usuário.



Retorno: [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)\[\].

getDocumentContent

Retorna o byte do arquivo físico de um documento, caso o usuário tenha permissão para acessá-lo.



Método:

getDocumentContent(String user, String password, int companyId, int nrDocumentId, String colleagueId, int documentoVersao, String nomeArquivo)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   nrDocumentId: número do documento.
-   colleagueId: matrícula do usuário.
-   documentVersao: número da versão do documento.
-   nomeArquivo: nome do arquivo.



Retorno: Lista de byte\[\].

getDocumentVersion

Retorna a versão de um documento.



Método:

getDocumentVersion(String user, String password, int companyId, int nrDocumentId, int version, String colleagueId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   nrDocumentId: número do documento.
-   version: número da versão do documento.
-   colleagueId: matrícula do usuário.



Retorno: [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)\[\].



Atributos de Retorno:

-   accesCount
-   activeVersion
-   additionalComments
-   allowMuiltiCardsPerUser
-   approved
-   colleagueId
-   companyId
-   crc
-   createDate
-   datasetName
-   deleted
-   documentDescription
-   documentId
-   documentType
-   documentTypeId
-   downloadEnabled
-   draft
-   expirationDate
-   expires
-   iconId
-   imutable
-   indexed
-   inheritSecurity
-   isEncrypted
-   keyWord
-   lastModifiedDate
-   metaListId
-   metaListRecordId
-   parentDocumentId
-   permissionType
-   phisicalFile
-   phisicalFileSize
-   privateDocument
-   protectedCopy
-   publisherId
-   restrictionType
-   rowId
-   securityLevel
-   topicId
-   translated
-   UUID
-   updateIsoProperties
-   userNotify
-   validationStartDate
-   version
-   versionDescription
-   volumeId

getRelatedDocuments

Retorna todos os documentos relacionados de um documento.



Método:

getRelatedDocuments(String user, String password, int companyId, int nrDocumentId, int version)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   nrDocumentId: número do documento.
-   version: número da versão do documento.



Retorno: [RelatedDocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-RelatedDocumentDto.1).



Atributos de Retorno:

-   companyId
-   documentId
-   relatedDocumentId
-   version

getReportSubjectId

Retorna o código do assunto de relatórios dentro do fluig.



Método:

getReportSubjectId(String user, String password, int companyId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.



Retorno: topicId : int.

getSecurity

Retorna a segurança de um documento.



Método:

getSecurity(String user, String password, int company, int nrDocumentId, int version)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   nrDocumentId: número do documento.
-   version: número da versão do documento.



Retorno: [DocumentSecurityConfigDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentSecurityConfigDto)\[\].



Atributos de Retorno:

-   attributionType
-   attributionValue
-   companyId
-   documentId
-   permission
-   securityLevel
-   sequence
-   showContent
-   version

getUserPermissions

Retorna as permissões do usuário sobre um documento.



Método:

getUserPermissions(int companyId, String user, int nrDocumentId, int version)



Parâmetros:

-   companyId: código da empresa.
-   user: login do usuário.
-   nrDocumentId: número do documento.
-   version: número da versão do documento.



Retorno: Integer, retorna o valor correspondente a permissão..



Atributos de Retorno:

-   result

moveDocument

Move documentos para pasta destino.



Método:

moveDocument(String user, String password, int companyId, int\[\] documentIds, String colleagueId, int destfolder)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   documentIds: lista com os números dos documentos que serão movidos.
-   colleagueId: matrícula do usuário com permissão para mover o documento
-   destFolder: número da pasta de destino.

Retorno: Lista String\[\].



Estrutura de retorno com sucesso

```
<result>[OK] - 299</result>
```



Estrutura de retorno com erro

```
<result>[NOK] - Usuário sem permissão para movimentar esse documento! Documento: 299.</result>
```



removeSecurity

Remove a segurança de um documento.



Método:

removeSecurity(String user, String password, int companyId, int documentId, int version)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   documentId: número do documento.
-   version: número da versão do documento.



Retorno: Não há retorno.

restoreDocument

Restaura um documento da lixeira.



Método:

restoreDocument(String user, String password, int companyId, int documentId, String colleagueId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   documentId: número do documento que será restaurado.
-   colleagueId: matrícula do usuário.



Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray).



Estrutura de retorno com sucesso

```
<result>
	<item>
	   <companyId>1</companyId>
	   <documentDescription>oioioi</documentDescription>
	   <documentId>297</documentId>
	   <version>1000</version>
	   <webServiceMessage>ok</webServiceMessage>
	</item>
</result>
```



Estrutura de retorno com erro

```
<result>
	<item>
	   <companyId>0</companyId>
	   <documentDescription/>
	   <documentId>0</documentId>
	   <version>0</version>
	   <webServiceMessage>Usuário john não possui permissão para restaurar o documento 297</webServiceMessage>
	</item>
</result>
```



updateDocument

Altera um documento.



Método:

updateDocument(String user, String password, int companyId, [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)\[\] docDtos, [Attachment](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-Attachment)\[\] attachs,  [DocumentSecurityConfigDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentSecurityConfigDto)\[\] docSecurity,[ApproverDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ApproverDto)\[\] docApprovers, [RelatedDocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-RelatedDocumentDto)\[\] relDocs)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   docDtos: documento que será publicado (mais detalhes do parâmetro [aqui](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)).
-   attachs: arquivo anexado na publicação (mais detalhes do parâmetro [aqui](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-Attachment)).
-   docSecurity: segurança do documento que será publicado  (mais detalhes do parâmetro [aqui](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentSecurityConfigDto) ).
-   docApprovers: aprovadores do documento que será publicado  (mais detalhes do parâmetro [aqui](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ApproverDto) ).
-   relDocs: documentos relacionados ao documento que será publicado  (mais detalhes do parâmetro [aqui](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-RelatedDocumentDto) ).

Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray).



Estrutura de retorno com sucesso

```
<result>
    <item>
       <companyId>1</companyId>
       <documentDescription>Política de uso</documentDescription>
       <documentId>295</documentId>
       <version>2000</version>
       <webServiceMessage>ok</webServiceMessage>
    </item>
 </result>
```



Estrutura de retorno com erro

```
<result>
	<item>
	   <companyId>0</companyId>
	   <documentDescription/>
	   <documentId>0</documentId>
	   <version>0</version>
	   <webServiceMessage>O usuário john não tem permissão para acessar o documento 295.</webServiceMessage>
	</item>
</result>
```

updateDocumentWithApprovementLevels

Altera um documento com nível de aprovação.



Métodos:

updateDocumentWithApprovementLevels(String user, String password, int companyId, [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)\[\] docDtos, Attachment\[\] attach, [DocumentSecurityConfigDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentSecurityConfigDto)\[\] docSecutiry, ApproverWithLevelDto\[\]  docApprovers, [ApprovalLevelDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ApprovalLevelDto)\[\] levels, RelatedDocumentDto\[\] relDocs)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   docDtos: documento que será alterado.
-   attachs: arquivo anexado na alteração.
-   docSecurity: segurança do documento que será alterado.
-   docApprovers: nível de aprovação que os aprovadores do documento estão inseridos.
-   levels: níveis de aprovação que o documento terá.
-   relDocs: documentos relacionados ao documento que será alterado.



Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray).



Estrutura de retorno com sucesso

```
<result>
    <item>
       <companyId>1</companyId>
       <documentDescription>Política de uso</documentDescription>
       <documentId>295</documentId>
       <version>2000</version>
       <webServiceMessage>ok</webServiceMessage>
    </item>
</result>
```



Estrutura de retorno com erro

```
<result>
	<item>
	   <companyId>0</companyId>
	   <documentDescription/>
	   <documentId>0</documentId>
	   <version>0</version>
	   <webServiceMessage>O usuário john não tem permissão para acessar o documento 295.</webServiceMessage>
	</item>
</result>
```



updateGroupSecurityType

Modifica o tipo da segurança dos grupos na permissão e na restrição. Existem duas opções que são representadas por um inteiro:

0 - TODOS os usuários dos Grupos.

1 - SOMENTE usuários comuns dos grupos.



Método:

updateGroupSecurityType(String user, String password, int companyId, int documentId, int version, int permissionType, int restrictionType, String colleagueId)



Parâmetros:

-   user: código do usuário de integração.
-   password: senha do usuário de integração.
-   companyId: código da empresa.
-   documentId: código do documento.
-   version: versão do documento.
-   permissionType: tipo da permissão (0 - TODOS os usuários dos Grupos / 1 - SOMENTE usuários comuns dos grupos)
-   restrictionType: tipo da restrição (0 - TODOS os usuários dos Grupos / 1 - SOMENTE usuários comuns dos grupos)
-   colleagueId: matrícula do usuário



Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray).



Estrutura de retorno com sucesso

```
<result>
    <item>
       <companyId>1</companyId>
       <documentDescription>Política de uso</documentDescription>
       <documentId>295</documentId>
       <version>2000</version>
       <webServiceMessage>ok</webServiceMessage>
    </item>
</result>
```



Estrutura de retorno com erro

```
<result>
	<item>
	   <companyId>0</companyId>
	   <documentDescription/>
	   <documentId>0</documentId>
	   <version>0</version>
	   <webServiceMessage>O Documento herda segurança do pai, desmarque a opção para alterar esta propriedade!</webServiceMessage>
	</item>
</result>
```



updateSimpleDocument

Altera de forma simples um documento.



Método:

updateSimpleDocument(String username, String password, int companyId, int documentId, String publisherId, String documentDescription, Attachment\[\] attachments)



Parâmetros:

-   username: login do usuário de integração.
-   password: senha do usuário de integração.
-   companyId: código da empresa.
-   documentId: número do documento que será alterado.
-   publisherId: matrícula do usuário que realizará a alteração do documento.
-   documentDescription: descrição do documento.
-   attachments: arquivos anexados na alteração.



Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray).



Estrutura de retorno com sucesso

```
<result>
    <item>
       <companyId>1</companyId>
       <documentDescription>Política de uso</documentDescription>
       <documentId>295</documentId>
       <version>3000</version>
       <webServiceMessage>ok</webServiceMessage>
    </item>
</result>
```



Estrutura de retorno com erro

```
<result>
	<item>
	   <companyId>0</companyId>
	   <documentDescription/>
	   <documentId>0</documentId>
	   <version>0</version>
	   <webServiceMessage>O usuário john não tem permissão para acessar o documento 295.</webServiceMessage>
	</item>
</result>
```



validateIntegrationRequirements

Verifica a integração do usuário no fluig.



Método:

validateIntegrationRequirements (String user, String password, int companyId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.



Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray).



Estrutura de retorno com sucesso

```
<result>
    <item>
       <companyId>1</companyId>
       <documentDescription>Política de uso</documentDescription>
       <documentId>295</documentId>
       <version>3000</version>
       <webServiceMessage>ok</webServiceMessage>
    </item>
</result>
```



Estrutura de retorno com erro

```
<result>
	<item>
	   <companyId>0</companyId>
	   <documentDescription/>
	   <documentId>0</documentId>
	   <version>0</version>
	   <webServiceMessage>O usuário john não tem permissão para acessar o documento 295.</webServiceMessage>
	</item>
</result>
```



**Quadro 14: Métodos da DocumentService**

#### Exemplo de utilização

Faça o download da classe [DocumentServiceClient.java](https://tdn.totvs.com/download/attachments/73084007/DocumentServiceClient.java?version=10&modificationDate=1435167467000&api=v2), esta exemplifica a utilização dos principais métodos da classe DocumentService.

Nota

Alguns campos, entre eles *Approved*, *ApprovedDate*, *CreateDate*, *LastModifiedDate*, apesar de aparecerem no exemplo disposto não podem ser modificados, pois se tratam de campos de uso interno do sistema.
Os campos são mantidos no objeto do Documento pois são necessários para o resgate dessas informações.

Integrações

Para os métodos de criação de documento (createDocument, createSimpleDocument, etc...) pode-se utilizar um usuário para autenticação e outro para publicação, pois pode ser necessário validar a permissão de outro usuário no momento de criar o documento no fluig.

Neste caso, quando o arquivo a ser publicado não é enviado na requisição (campo filecontent do parâmetro Attachment), ele poderá ser obtido na pasta de upload do usuário publicador, ou do usuário utilizado para autenticar no fluig via WS. Para isso, o documento deve estar na pasta de upload do usuário em questão, o que pode ser feito via FTP. Isso pode ser útil em integrações que utilizam o mesmo usuário (integrador) para autenticar no FTP e nos serviços.



# ECMFavoritesService

Webservice responsável por interagir com os documentos e processos favoritos do fluig. Pode ser utilizado para pesquisar os documentos e processos favoritos de cada usuário.



#### Métodos

addDocumentToFavorites

Adiciona um documento aos favoritos do usuário informado.



Método:

addDocumentToFavorites(String username, String password, int companyId, int nrDocument, int nrVersao,  String colleagueId)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   nrDocument: número do documento
-   nrVersao: versão do documento
-   colleagueId : matrícula do usuário.



Retorno: void.

addProcessToFavorites

Adiciona um processo aos favoritos do usuário informado.



Método:

addProcessToFavorites(String username, String password, int companyId,String processId, String colleagueId)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   processId: código do processo
-   colleagueId : matrícula do usuário.


Retorno: void.

findFavorites

Retorna os documentos favoritos do usuário.



Método:

findFavorites(String user, String password, int companyId, String colleagueId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   colleagueId : matrícula do usuário.



Retorno: [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)\[\].

findFavoritesOnDemand

Retorna os documentos favoritos do usuário, paginados.



Método:

findFavoritesOnDemand(String user, String password, int companyId, String colleagueId, int limit, int lastRowId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   colleagueId : matrícula do usuário.
-   limit: número de registros a serem retornados.
-   lastRowId: última linha retornada.



Retorno: [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)\[\].

findFavoritesProcess

Retorna os processos favoritos do usuário.



Método:

findFavoritesProcess (String user, String password, int companyId, String colleagueId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   colleagueId : matrícula do usuário.



Retorno: [ProcessDefinitionVersionDto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ProcessDefinitionVersionDto) .

findFavoritesProcessOnDemand

Retorna os processos favoritos do usuário, paginados.



Método:

findFavoritesProcess (String user, String password, int companyId, String colleagueId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   colleagueId : matrícula do usuário.
-   limit: número de registros a serem retornados.
-   lastRowId: última linha retornada.



Retorno: [ProcessDefinitionVersionDto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ProcessDefinitionVersionDto) .

isFavoriteDocument

Verifica se documento é favorito.



Método:

isFavoriteDocument(String username, String password, int companyId, int nrDocument, String colleagueId)



Parâmetros:

-   username: login do usuário de integração.
-   password: senha do usuário.
-   companyId: código da empresa.
-   nrDocument: código do documento.
-   colleagueId: matricula do usuário.



Retorno: Boolean, documento favoritado.

removeFavoriteDocument

Remove um documento dos favoritos do usuário informado.



Método:

removeFavoriteDocument (String username, String password, int companyId, int nrDocument,  String colleagueId)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   nrDocument: número do documento
-   colleagueId : matrícula do usuário.



Retorno: void.

removeFavoriteProcess

Remove um processo dos favoritos do usuário informado.



Método:

addProcessToFavorites(String username, String password, int companyId,String processId, String colleagueId)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   processId: código do processo.
-   colleagueId : matrícula do usuário.



Retorno: void.

**Quadro 15: Métodos da FavoritesService**

#### Exemplo de utilização

Faça o download da classe [ECMFavoritesService.java](https://git.fluig.com/projects/SAMPLES/repos/samples-webservice/browse/src/samples/ECMFavoritesService.java), esta exemplifica a utilização dos principais métodos da classe FavoritesService.





# ECMFolderService

Webservice responsável por realizar operações referentes a pastas no fluig. Pode ser utilizado para criar, alterar, excluir e pesquisar pastas, entre outros recursos.



#### Métodos

createFolder

Cria uma pasta.



Método:

createFolder(String user, String password, int companyId, [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)\[\] docdtos, [DocumentSecurityConfigDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentSecurityConfigDto)\[\] docsecurity, ApproverDto\[\] docapprovers )



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   docdtos: pasta que será criada.
-   docsecurity: segurança da pasta.
-   docapprovers: aprovadores da pasta.



Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-CardEventDtoArray).



Estrutura de retorno com sucesso

```
<result>
	<item>
	   <companyId>1</companyId>
	   <documentDescription>Clientes</documentDescription>
	   <documentId>303</documentId>
	   <version>1000</version>
	   <webServiceMessage>ok</webServiceMessage>
	</item>
</result>
```



Estrutura de retorno com erro

```
<result>
	<item>
	   <companyId>0</companyId>
	   <documentDescription/>
	   <documentId>0</documentId>
	   <version>0</version>
	   <webServiceMessage>Login e senha inválidos</webServiceMessage>
	</item>
</result>
```



createFolderWithApprovementLevels

Cria uma pasta com nível de aprovação.



Método:

createFolderWithApprovementLevels(String user, String password, int companyId, [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)\[\] docdtos, [DocumentSecurityConfigDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentSecurityConfigDto)\[\] docsecurity, [ApproverWithLevelDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ApproverWithLevelDto)\[\] docapprovers, [ApprovalLevelDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ApprovalLevelDto)\[\] levels)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   docdtos: pasta que será criada.
-   docsecurity: segurança da pasta.
-   docapprovers: aprovadores em níveis.
-   levels: níveis de aprovação da pasta.



Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-CardEventDtoArray).



Estrutura de retorno com sucesso

```
<result>
	<item>
	   <companyId>1</companyId>
	   <documentDescription>Clientes</documentDescription>
	   <documentId>303</documentId>
	   <version>1000</version>
	   <webServiceMessage>ok</webServiceMessage>
	</item>
</result>
```



Estrutura de retorno com erro

```
<result>
	<item>
	   <companyId>0</companyId>
	   <documentDescription/>
	   <documentId>0</documentId>
	   <version>0</version>
	   <webServiceMessage>Nao foi informado um ApprovalLevelDto com o levelId 1</webServiceMessage>
	</item>
</result>
```



createSimpleFolder

Cria uma pasta simples.



Método:

createSimpleFolder(String user, String password, int companyId, int parentDocumentId, String publisherId, String documentDescription)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   parentDocumentId: número do documento pai.
-   publisherId: matrícula do usuário publicador.
-   documentDescription: descrição da pasta.



Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-CardEventDtoArray).



Estrutura de retorno com sucesso

```
<result>
	<item>
	   <companyId>1</companyId>
	   <documentDescription>Clientes</documentDescription>
	   <documentId>303</documentId>
	   <version>1000</version>
	   <webServiceMessage>ok</webServiceMessage>
	</item>
</result>
```



Estrutura de retorno com erro

```
<result>
	<item>
	   <companyId>0</companyId>
	   <documentDescription/>
	   <documentId>0</documentId>
	   <version>0</version>
	   <webServiceMessage>Documento Pai Inválido</webServiceMessage>
	</item>
</result>
```



deleteDocument

Exclui uma pasta e envia para a lixeira.



Método:

deleteDocument(String user, String password, int companyId, int documentId, String colleagueId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   documentId: número da pasta.
-   colleagueId: matrícula do usuário.



Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-CardEventDtoArray).



Estrutura de retorno com sucesso

```
<result>
	<item>
	   <companyId>1</companyId>
	   <documentDescription>Clientes</documentDescription>
	   <documentId>303</documentId>
	   <version>1000</version>
	   <webServiceMessage>ok</webServiceMessage>
	</item>
</result>
```



Estrutura de retorno com erro

```
<result>
    <item>
       <companyId>0</companyId>
       <documentDescription/>
       <documentId>0</documentId>
       <version>0</version>
       <webServiceMessage>Documento não encontrado: 303</webServiceMessage>
    </item>
</result>
```



destroyDocument

Exclui uma pasta da lixeira.



Método:

destroyDocument(String user, String password, int companyId, int documentId, String colleagueId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   documentId: número da pasta.
-   colleagueId: matrícula do usuário.



Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-CardEventDtoArray).



Estrutura de retorno com sucesso

```
<result>
	<item>
	   <companyId>1</companyId>
	   <documentDescription>Clientes</documentDescription>
	   <documentId>303</documentId>
	   <version>1000</version>
	   <webServiceMessage>ok</webServiceMessage>
	</item>
</result>
```



Estrutura de retorno com erro

```
<result>
	<item>
	   <companyId>0</companyId>
	   <documentDescription/>
	   <documentId>0</documentId>
	   <version>0</version>
	   <webServiceMessage>Por segurança, não é possível destruir o documento sem antes excluí-lo.</webServiceMessage>
	</item>
</result>
```



findRecycledDocuments

Retorna todos os documentos da lixeira de um usuário.



Método:

findRecycledDocuments(String user, String password, int companyId, String colleagueId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   colleagueId: matrícula do usuário.



Retorno: [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)\[\].

getApprovers

Retorna os aprovadores de uma pasta.



Método:

getApprovers(String user, String password, int companyId, int nrDocumentId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   nrDocumentId: número da pasta.



Retorno: [ApproverWithLevelDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ApproverWithLevelDto)\[\].

getChildren

Retorna todos os documentos de uma pasta.



Método:

getChildren(String user, String password, int companyId, int documentId, String colleagueId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   documentId: número da pasta.
-   colleagueId: matrícula do usuário.



Retorno: [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)\[\].

getFolder

Retorna uma pasta.



Método:

getFolder(String user, String password, int companyId, int nrDocumentId, String colleagueId )



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   nrDocumentId: número da pasta.
-   colleagueId: matrícula do usuário origem.



Retorno: [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)\[\].

getPrivateChildren

Retorna todos os documentos de uma pasta particular.



Método:

getPrivateChildren(String user, String password, int companyId, int parentDocumentId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   documentId: número da pasta.



Retorno: [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)\[\].



getRootFolders

Retorna as pastas root que um usuário tem acesso, exceto a pasta particular.



Método:

getRootFolders(String user, String password, int companyId, String colleagueId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   colleagueId: matrícula do usuário.



Retorno: [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)\[\].

getSecurity

Retorna a segurança de uma pasta.



Método:

getSecurity(String user, String password, int companyId, int nrDocumentId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   nrDocumentId: número da pasta.



Retorno: [DocumentSecurityConfigDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentSecurityConfigDto)\[\].

getSubFolders

Retorna todas as subpastas e arquivos de um pasta.



Método:

getSubFolders(String user, String password, int companyId, int documentId, String colleagueId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   documentId: número da pasta.
-   colleagueId: matrícula do usuário.



Retorno: [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)\[\].

getSubFoldersOnDemand

Retorna todas as subpastas e arquivos de uma pasta, paginados.



Método:

getSubFoldersOnDemand(int companyId, String user, String password, int documentId, boolean privatefolder, String\[\] documenttypes, int limit , int lastRowId, String colleagueId)



Parâmetros:

-   companyId: código da empresa.
-   user: login do usuário.
-   password: senha do usuário.
-   documentId: número da pasta.
-   privatefolder: identifica se é uma pasta particular.
-   documenttypes: tipos de documentos das pastas.
-   limit: número de registros a serem retornados.
-   lastRowId: última linha retornada.
-   colleagueId: matrícula do usuário.



Retorno: [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)\[\].

getSubFoldersPermission

Retorna todas as subspastas em que o usuário tenha a permissão informada.



Método:

getSubFoldersPermission(String user, String password, int companyId, int documentId, String colleagueId, int permission)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   documentId: número da pasta particular.
-   colleagueId: matrícula do usuário.
-   permission: permissão sobre a pasta.



Retorno: [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)\[\].

getSubPrivateFolders

Retorna todas as subpastas de uma pasta particular.



Método:

getSubPrivateFolders(String colleagueId, String password, int companyId, int documentId)



Parâmetros:

-   colleagueId: matrícula do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   documentId: número da pasta particular.



Retorno: [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)\[\].

getUserPermissions

Retorna a permissão de um usuário sobre uma pasta.



Método:

getUserPermissions(int companyId, String user, int nrDocumentId, int version)



Parâmetros:

-   companyId: código da empresa.
-   user: matrícula do usuário.
-   nrDocumentId: número da pasta.
-   version: versão da pasta.



Retorno: Integer, referente ao nível de permissão do usuário.

restoreDocument

Restaura uma pasta da lixeira.



Método:

restoreDocument(String user, String password, int companyId, int documentId, String colleagueId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   documentId: número da pasta.
-   colleagueId: matrícula do usuário.



Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray).



Estrutura de retorno com sucesso

```
<result>
	<item>
	   <companyId>1</companyId>
	   <documentDescription/>
	   <documentId>310</documentId>
	   <version>0</version>
	   <webServiceMessage>ok</webServiceMessage>
	</item>
</result>
```



Estrutura de retorno com erro

```
<result>
	<item>
	   <companyId>0</companyId>
	   <documentDescription/>
	   <documentId>0</documentId>
	   <version>0</version>
	   <webServiceMessage>Documento não encontrado: 303</webServiceMessage>
	</item>
</result>
```



updateFolder

Altera uma pasta.



Método:

updateFolder(String user, String password, int companyId, [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)\[\] docdtos, [DocumentSecurityConfigDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentSecurityConfigDto)\[\] docsecurity, ApproverDto\[\] docapprovers)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   docdtos: pasta que será alterada.
-   docsecurity: segurança da pasta.
-   docapprovers: aprovadores da pasta.



Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray).



Estrutura de retorno com sucesso

```
<result>
	<item>
	   <companyId>1</companyId>
	   <documentDescription/>
	   <documentId>310</documentId>
	   <version>0</version>
	   <webServiceMessage>ok</webServiceMessage>
	</item>
</result>
```



Estrutura de retorno com erro

```
<result>
	<item>
	   <companyId>0</companyId>
	   <documentDescription/>
	   <documentId>0</documentId>
	   <version>0</version>
	   <webServiceMessage>Documento não encontrado: 303</webServiceMessage>
	</item>
</result>
```



updateFolderWithApprovementLevels

Altera uma pasta com nível de aprovação.



Método:

updateFolderWithApprovementLevels(String user, String password, int companyId, [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)\[\] docdtos, [DocumentSecurityConfigDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentSecurityConfigDto)\[\] docsecurity, ApproverWithLevelDto\[\] docapprovers, [ApprovalLevelDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ApprovalLevelDto)\[\] levels)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   docdtos: pasta que será alterada.
-   docsecurity: segurança da pasta.
-   docapprovers: aprovadores em níveis.
-   levels: níveis de aprovação da pasta.



Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray).



Estrutura de retorno com sucesso

```
<result>
	<item>
	   <companyId>1</companyId>
	   <documentDescription/>
	   <documentId>310</documentId>
	   <version>0</version>
	   <webServiceMessage>ok</webServiceMessage>
	</item>
</result>
```



Estrutura de retorno com erro

```
<result>
	<item>
	   <companyId>0</companyId>
	   <documentDescription/>
	   <documentId>0</documentId>
	   <version>0</version>
	   <webServiceMessage>Documento não encontrado: 303</webServiceMessage>
	</item>
</result>
```



updateSimpleFolder

Altera de forma simples uma pasta.



Método:

updateSimpleFolder(String user, String Password, int companyId, [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)\[\] docdtos)



Parâmetros:

-   user: login do usuário
-   password: senha do usuário
-   companyId: código da empresa
-   docdtos: pasta que será alterada.



Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray).



Estrutura de retorno com sucesso

```
<result>
	<item>
	   <companyId>1</companyId>
	   <documentDescription/>
	   <documentId>310</documentId>
	   <version>0</version>
	   <webServiceMessage>ok</webServiceMessage>
	</item>
</result>
```



Estrutura de retorno com erro

```
<result>
	<item>
	   <companyId>0</companyId>
	   <documentDescription/>
	   <documentId>0</documentId>
	   <version>0</version>
	   <webServiceMessage>Documento não encontrado: 303</webServiceMessage>
	</item>
</result>
```



**Quadro 16: Métodos da FolderService**

#### Exemplo de utilização

Faça o download da classe [FolderServiceClient.java](https://tdn.totvs.com/download/attachments/73084007/FolderServiceClient.java?version=1&modificationDate=1378475537000&api=v2), esta exemplifica a utilização dos principais métodos da classe FolderService.



# ECMGlobalParamService

Webservice responsável por interagir com as configurações dos parâmetros gerais do fluig. Pode ser utilizado para criar, alterar e pesquisar os parâmetros gerais.



#### Métodos

createGlobalParam

Cria parâmetros gerais para uma empresa.



Método:

createGlobalParam(String username, String password, int companyId, GlobalParamDto\[\] global)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   global: parâmetros gerais da empresa.



Retorno: String.

getGlobalParam

Retorna os parâmetros gerais de uma empresa.



Método:

getGlobalParam(String username, String password, int companyId)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.



Retorno: GlobalParamDto\[\].

getVolumes

Retorna os volumes da empresa.



Método:

getVolumes(String user, String password, int companyId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.



Retorno: VolumeDto\[\].

updateConfigurations

Altera as configurações do sistema.



Método:
updateConfigurations( String username,String password, int companyId, String dbDriver, String dbUser, String dbPassword, String dbServer,
String dbPort,String dbScheme, String dbInstance, String emailServer, String emailPort, String emailSender, boolean emailDefaultSender, String emailUser, String emailPassword, boolean emailTLS,String paramsRMTPTPort, String lsType, String paramsLSHost, String paramsLSPort, String paramsOpenOfficeDir, String paramsOpenOfficePorts, String portsSetName)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   dbDriver: driver do banco de dados (MySql- com.mysql.jdbc.Driver. SQLServer - net.sourceforge.jtds.jdbc.Driver. Oracle -oracle.jdbc.driver.OracleDriver)
-   dbUser: username banco de dados.
-   dbPassword: password banco de dados.
-   dbServer: servidor de conexão do banco de dados.
-   dbPort: porta servidor banco de dados.
-   dbScheme: database.
-   dbInstance: instância do banco, utilizada para SQLServer, caso não seja o caso passar em branco ("").
-   mailServer: nome do servidor SMTP.
-   emailSender: e-mail do remetente padrão do produto.
-   emailPort: porta do servidor SMTP.
-   emailDefaultSender:
-   emailUser: usuário de email, somente se o servidor necessitar de autenticação.
-   emailPassword: password do email, somente se o servidor necessitar de autenticação.
-   emailTLS: servidor utilizará criptografia no envio de email (true/false)
-   paramsRMTPTPort: porta utilizada pelo Flex.
-   lsType: tipo de licença utilizada, LM/LS.
-   paramsLSHost: servidor de licenças.
-   paramsLSPort: porta servidor de licenças.
-   paramsOpenOfficeDir: diretório de instalação do OpenOffice
-   paramsOpenOfficePorts: porta utilizado pelo OpenOffice
-   portsSetName: portas utilizadas pelo sistema (ports-default, ports-01, ports-02)



Retorno: String.



Atenção

Método depreciado e não mais utilizável no fluig.

updateGlobalParam

Altera parâmetros gerais de uma empresa.



Método:

updateGlobalParam(String username, String password, int companyId, GlobalParamDto\[\] global)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   global: parâmetros gerais da empresa.



Retorno: String.

**Quadro 17: Métodos da GlobalParamService.**

#### Exemplo de utilização

Faça o download da classe [GlobalParamServiceClient.java](https://tdn.totvs.com/download/attachments/73084007/GlobalParamServiceClient.java?version=1&modificationDate=1378475581000&api=v2), esta exemplifica a utilização dos principais métodos da classe GlobalParamService.



# ECMGroupService

Webservice responsável por realizar operações referentes a grupos no fluig. Pode ser utilizado para criar, alterar, excluir e procurar grupos, entre outros recursos.



#### Métodos

createGroup

Cria um grupo no fluig.



Método:

createGroup(String username, String password, int companyId, GroupDto\[\] grupos)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   grupos: grupo que será criado.



Retorno: String.



Estrutura de retorno com sucesso

```
<resultXML>ok</resultXML>
```



Estrutura de retorno com erro

```
<resultXML>nok</resultXML>
```



deleteGroup

Exclui um grupo do fluig.



Método:

deleteGroup(String username, String password, int companyId, String groupId)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   GroupId: código do grupo.



Retorno: String.



Estrutura de retorno com sucesso

```
<result>
	<item>
	   <companyId>1</companyId>
	   <documentDescription/>
	   <documentId>310</documentId>
	   <version>0</version>
	   <webServiceMessage>ok</webServiceMessage>
	</item>
</result>
```



Estrutura de retorno com erro

```
<result>
	<item>
	   <companyId>0</companyId>
	   <documentDescription/>
	   <documentId>0</documentId>
	   <version>0</version>
	   <webServiceMessage>Documento não encontrado: 303</webServiceMessage>
	</item>
</result>
```



getGroup

Retorna um grupo cadastrado no fluig.



Método:

getGroups(String username, String password, int companyId, String groupId)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   groupId: código do grupo.



Retorno: GroupDto\[\].



Atributos de Retorno:

-   companyId

-   groupDescription

-   groupId


getGroups

Retorna todos os grupos cadastrados no fluig.



Método:

getGroups(String username, String password, int companyId)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.



Retorno: GroupDto\[\].



Atributos de Retorno:

-   companyId

-   groupDescription

-   groupId


getGroupsByDescription

Retorna um grupo pela descrição.



Método:

getGroupsByDescription(String username, String password, int companyId, String desc)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   desc: descrição do grupo.



Retorno: GroupDto\[\].



Atributos de Retorno:

-   companyId

-   groupDescription

-   groupId


getOcurrenceByKey

Retorna se existe configuração de segurança para atribuição e valor da atribuição.



Método:

getOcurrenceByKey(String username, String password, int companyId, int pIdiAtribuic, String pDesValAtribuic)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   pIdiAtribuic: código da atribuição.
-   pDesValAtribuic: valor da atribuição.



Retorno: boolean.

updateGroup

Altera um grupo no fluig.



Método:

updateGroup(String username, String password, int companyId, GroupDto\[\] grupos)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   grupos: grupo que será alterado.



Retorno: String.



Estrutura de retorno com sucesso

```
<faultstring>ok</faultstring>
```



Estrutura de retorno com erro

```
<faultstring>nok Não foi possível eliminar o grupo.</faultstring>
```



**Quadro 18: Métodos da GroupService.**

#### Exemplo de utilização

Faça o download da classe [GroupServiceClient.java](https://tdn.totvs.com/download/attachments/73084007/GroupServiceClient.java?version=1&modificationDate=1409227367000&api=v2), esta exemplifica a utilização dos principais métodos da classe GroupService.



# ECMOutstandingService

 Webservice responsável por interagir com as transferências de pendências do fluig. Pode ser utilizado para transferir pendências de um usuário para outro usuário.



#### Métodos 

transfer

Transfere pendências de um usuário para outro usuário.



Método:

transfer(String user, String password, int companyId, String colleagueIdFrom, String colleagueIdTo, String\[\] parameters)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   colleagueIdFrom: matrícula do usuário origem (suas pendências serão tranferidas para o usuário destino).
-   colleagueIdTo: matrícula do usuário destino (receberá as pendências do usuário origem).
-   parameters: array de pendências que serão transferidas para o usuário destino.



Retorno: String.



Estrutura de retorno com sucesso

```
<result>
	Verificando Transferência de Permissão de Gravação em Pastas
	[INFO] Todas as permissões foram transferidas.
	================================================================================
	Verificando Transferência de Documentos Ativos
	[INFO] Transferido o documento 1 - XXXXX
	[INFO] Transferido o documento 2 - YYYYY
	================================================================================
	Verificando Transferência de Documentos Aguardando Aprovação
 	[WARN] Nenhum registro encontrado.
 	================================================================================
	Verificando Transferência de Tarefas Workflow Pendentes
 	[INFO] Tarefa pendente do workflow (Atividade - Solicitação: X) foi transferida para o colaborador user.
 	================================================================================
	Verificando Transferência de Aprovador de Pastas/Documentos
	[INFO] Transferido o aprovador do documento 293
	================================================================================
	Verificando Transferência de Aprovação de Documento
	[WARN] Nenhum registro encontrado.
	================================================================================
	Verificando Transferência de Tasks da Central de Tarefas
	================================================================================
</result>
```



Estrutura de retorno com erro

```
<result>ERROR: Usuário origem e destino não podem ser iguais, TRANSFERÊNCIA NÃO REALIZADA</result>
```



**Quadro 19: Métodos da OutstandingService.**



Exemplo de utilização

Faça o download da classe [OutstandingServiceClient.java](https://tdn.totvs.com/download/attachments/73084007/OutstandingServiceClient.java?version=1&modificationDate=1378475645000&api=v2), esta exemplifica a utilização dos principais métodos da classe OutstandingService.



# ECMReportService

 Webservice responsável por realizar operações referentes a relatórios no fluig. Pode ser utilizado para criar, alterar, excluir e procurar relatórios, entre outros recursos.



#### Métodos

createSimpleReport

Cria um relatório de maneira simplificada no fluig.



Método:

createSimpleReport(String username, String password, int companyId, int parentDocId, String reportDescription, Attachment\[\] attachments)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   parentDocId: código da pasta pai.
-   reportDescription: descrição do relatório.
-   attachments: anexos do relatório.



Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray).



Estrutura de retorno com sucesso

```
<result>
	<item>
	   <companyId>1</companyId>
	   <documentDescription>Colleague Report</documentDescription>
	   <documentId>312</documentId>
	   <version>1000</version>
	   <webServiceMessage>ok</webServiceMessage>
	</item>
</result>
```



Estrutura de retorno com erro

```
<result>
	<item>
	   <companyId>0</companyId>
	   <documentDescription/>
	   <documentId>0</documentId>
	   <version>0</version>
	   <webServiceMessage>Registro de Pasta Pai Inexistente no Banco de Dados!</webServiceMessage>
	</item>
</result>
```



getActiveReport

Retorna um relatório ativo no fluig.



Método:

getActiveReport(int companyId, String username, String password, String documentId)



Parâmetros:

-   companyId: código da empresa.
-   username: login do usuário.
-   password: senha do usuário.
-   documentId: código do documento.



Retorno: [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto).

getAttachmentsList

Retorna uma lista de anexos do relatório no fluig.



Método:

getAttachmentsList(String username, String password, int companyId, String documentId)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   documentId: código do documento.



Retorno: Retorna lista de String\[\], com nome dos anexos.

getReportContent

Retorna o arquivo físico de um relatório.



Método:

getReportContent(String username, String password, int companyId, int nrDocumentId, String colleagueId, int documentoVersao, String fileName)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   nrDocumentId: número do documento.
-   colleagueId: matrícula do usuário.
-   documentoVersao: versão do documento.
-   fileName: nome do arquivo.



Retorno: byte\[\].

getRepots

Retorna os relatórios disponíveis.



Método:

getRepots(String username, String password, int companyId)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.



Retorno: [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)\[\].

updateSimpleReport

Atualiza um relatório de maneira simplificada no fluig.



Método:

updateSimpleReport(String username, String password, int companyId, int docId, String reportDescription, Attachment\[\] attachments, String versionOption)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   docId: código da pasta pai.
-   reportDescription: descrição do relatório.
-   attachments: anexos do relatório.
-   versionOption: informa se deseja atualizar a versão do relatório.



Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray).



Estrutura de retorno com sucesso

```
<result>
	<item>
	   <companyId>1</companyId>
	   <documentDescription>Colleague Report</documentDescription>
	   <documentId>313</documentId>
	   <version>2000</version>
	   <webServiceMessage>ok</webServiceMessage>
	</item>
</result>
```



Estrutura de retorno com erro

```
<result>
	<item>
	   <companyId>0</companyId>
	   <documentDescription/>
	   <documentId>0</documentId>
	   <version>0</version>
	   <webServiceMessage>Documento inexistente ou permissão insuficiente.</webServiceMessage>
	</item>
</result>
```



**Quadro 20: Métodos da ReportService.**

#### Exemplo de utilização

Faça o download da classe [ReportServiceClient.java](https://tdn.totvs.com/download/attachments/73084007/ReportService.java?version=1&modificationDate=1378476011000&api=v2), esta exemplifica a utilização dos principais métodos da classe ReportService.



# ECMSearchDocumentService

Webservice responsável por realizar operações referentes às buscas no fluig. Pode ser utilizado para buscar documentos utilizando a busca simples e avançada.



#### Métodos

advancedSearchDocuments

Utiliza busca avançada.



Método:

advancedSearchDocuments(String user, String password, int companyId, String colleagueId, String content, boolean  findAllDocumentTypes, boolean  findFolders, boolean  findDocuments, boolean  findCardIndex, boolean  findCards, boolean  findExternalDocument, int  documentParentId, Date  startDate, Date  finalDate)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   colleagueId: matrícula do usuário.
-   content: conteúdo da busca.
-   findAllDocumentTypes: indica se deve buscar todos os tipos de documentos.
-   findFolders: indica se deve buscar pastas.
-   findDocuments: indica se deve buscar documentos.
-   findCardIndex: indica se deve buscar formulários.
-   findCards: indica se deve buscar registros de formulários.
-   findExternalDocument: indica se deve buscar documentos externos.
-   documentParentId: número do documento pai.
-   startDate: data inicial.
-   finalDate: data final.



Retorno: [SearchResultDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-SearchResultDto).

advancedSearchDocumentsWithMetadata

Utiliza busca avançada através das opções de metadados e campos customizados.



Método:

advancedSearchDocuments(String user, String password, int companyId, String colleagueId, String content, SearchFields\[\] metadata, SearchFields\[\] customfields, boolean  findAllDocumentTypes, boolean  findFolders, boolean  findDocuments, boolean  findCardIndex, boolean  findCards, boolean  findExternalDocument, int  documentParentId, Date  startDate, Date  finalDate)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   colleagueId: matrícula do usuário.
-   content: conteúdo da busca.
-   metadata: informações para busca a partir de metadados do arquivo, como publicador (usando o fieldName publisher), autor (author), descrição (description), descrição da versão/revisão (versionDescription), comentários (additionalComments), tags (tags), data de criação (createDate) e data da última alteração (lastUpdateDate).
-   customfields: informações para busca a partir de metadados de campos customizados, informando o código do campo customizado como fieldName e valor a ser utilizado como filtro.
-   findAllDocumentTypes: indica se deve buscar todos os tipos de documentos.
-   findFolders: indica se deve buscar pastas.
-   findDocuments: indica se deve buscar documentos.
-   findCardIndex: indica se deve buscar formulários.
-   findCards: indica se deve buscar registros de formulários.
-   findExternalDocument: indica se deve buscar documentos externos.
-   documentParentId: número do documento pai.
-   startDate: data inicial.
-   finalDate: data final.



Retorno: [SearchResultDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-SearchResultDto).

searchDocuments

Utiliza busca simples.



Método:

searchDocuments(String user, String password, int companyId, String colleagueId, String content)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   colleagueId: matrícula do usuário.
-   content: conteúdo da busca.



Retorno: [SearchResultDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-SearchResultDto).

searchFavoritesDocuments

Busca documentos favoritos.



Metodo:

searchFavoritesDocuments(String user, String Password, int companyId, String colleagueId, String content)



Parametros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   colleagueId: matrícula do usuário.
-   contente: conteúdo a ser buscado



Retorno: [SearchResultDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-SearchResultDto).

**Quadro 21: Métodos da SearchDocumentService**

#### Exemplo de utilização

Faça o download da classe [SearchDocumentServiceClient.java](https://tdn.totvs.com/download/attachments/73084007/SearchDocumentServiceClient.java?version=2&modificationDate=1422438607000&api=v2), esta exemplifica a utilização dos principais métodos da classe SearchDocumentService.



# ECMSignalService

Webservice responsável por interagir com os sinais criados no fluig. Pode ser utilizado para criar, remover, enviar sinais ou consultar os sinais existentes.



#### Métodos

createSignal

Cria um sinal no fluig.



Método:

createSignal(String login, String password, int companyId, String description)



Parâmetros:

-   login: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   description: descrição do sinal.



Retorno: String.

deleteSignal

Remove um sinal criado no fluig.



Método:

deleteSignal(String login, String password, int companyId, int signalId)



Parâmetros:

-   login: login do usuário que será gerado pelo token.
-   password: senha do usuário.
-   companyId: código da empresa.
-   signalId: código do sinal.



Retorno: String.

fireSignal

Envia/ Dispara o sinal existente.



Método:

fireSignal (String login, String password, int companyId, int signalId)



Parâmetros:

-   login: login do usuário que será gerado pelo token.
-   password: senha do usuário.
-   companyId: código da empresa.
-   signalId: código do sinal.



Retorno: String.

getSignals

Retorna os sinais existentes no fluig.



Método:

getSignals(String login, String password, int companyId)



Parâmetro:

-   login: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.



Retorno: [Signal\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-Signal).

**Quadro 22: Métodos da SignalService.**

#### Exemplo de utilização

Faça o download da classe [ECMSignalService.java](https://git.fluig.com/projects/SAMPLES/repos/samples-webservice/browse/src/samples/ECMSignalService.java), esta exemplifica a utilização dos principais métodos da classe SignalService.



# ECMTokenService

Webservice responsável por interagir com os token’s do fluig. Pode ser utilizado para pesquisar e validar os token’s existentes.



#### Métodos

getToken

Retorna um token de segurança.



Método:

getToken(String login, String password)



Parâmetros:

-   login: login do usuário.
-   password: senha do usuário.



Retorno: String.

getTokenByLogin

Retorna um token de segurança para o login solicitado.



Método:

getTokenByLogin(int companyId, String colleagueId, String password, String login)



Parâmetros:

-   companyId: código da empresa.
-   colleagueId: matrícula do usuário.
-   password: senha do usuário.
-   login: login do usuário que será gerado pelo token.



Retorno: String.

getTokenEmail

Retorna um token de segurança para o e-mail solicitado.



Método:

getTokenEmail(int companyId, String email, String password)



Parâmetros:

-   companyId: código da empresa.
-   email: e-mail do usuário.
-   password: senha do usuário.



Retorno: String.

validateToken

Valida o token de segurança e retorna o login do usuário.



Método:

validateToken(String token)



Parâmetro:

-   token: token do usuário.



Retorno: String.

**Quadro 23: Métodos da TokenService.**

#### Exemplo de utilização

Faça o download da classe  [TokenServiceClient.java](https://tdn.totvs.com/download/attachments/73084007/TokenServiceClient.java?version=1&modificationDate=1378475769000&api=v2), esta exemplifica a utilização dos principais métodos da classe TokenService.



# ECMWorkflowEngineService

Webservice responsável por realizar operações referentes a workflow no fluig. Pode ser utilizado para movimentar solicitações, entre outros recursos.



#### Métodos

calculateDeadLineHours

Calcula um prazo a partir de uma data com base no expediente e feriados cadastrados no produto passando o prazo em horas.



Método:

calculateDeadLineHours(String username, String password, int companyId, String userId, String data, int segundos, int prazo, String periodId)



Parâmetros:

-   username - Usuário de Integração
-   password - Senha de Integração
-   companyId - Código da empresa
-   userId - Matrícula do usuário
-   data - data (Tipo String no formato "yyyy-MM-dd").
-   segundos - Quantidade de segundos após a meia noite
-   prazo - Prazo que será aplicado em horas (Variável int).
-   periodId - Código de Expediente



Retorno: Objeto [DeadLineDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DeadLineDto) que contem variáveis com a data e hora.



Estrutura de retorno com sucesso

```
<result>
	<date>2015-05-08</date>
	<hora>43201</hora>
</result>
```



Estrutura de retorno com erro

```
<faultstring>NOK Não foi encontrado expediente para o código informado: Default*</faultstring>
```



calculateDeadLineTime

Calcula um prazo a partir de uma data com base no expediente e feriados cadastrados no produto passando o prazo em minutos.



Método:

calculateDeadLineHours(String username, String password, int companyId, String userId, String data, int segundos, int prazo, String periodId)



Parâmetros:

-   username - Usuário de Integração
-   password - Senha de Integração
-   companyId - Código da empresa
-   userId - Matrícula do usuário
-   data - data (Tipo String no formato "yyyy-MM-dd").
-   segundos - Quantidade de segundos após a meia noite
-   prazo - Prazo que será aplicado em minutos (Variável int).
-   periodId - Código de Expediente



Retorno: Objeto [DeadLineDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DeadLineDto) que contem variáveis com a data e hora.



Estrutura de retorno com sucesso

```
<result>
    <date>2015-03-20</date>
    <hora>32400</hora>
</result>
```



Estrutura de retorno com erro

```
<faultstring>NOK Não foi encontrado expediente para o código informado: Default*</faultstring>
```



cancelInstance

Cancela uma solicitação.



Método:

cancelInstance(String user, String password, int companyId, int processInstanceId, String userId, String cancelText)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   processInstanceId: número da solicitação.
-   userId: mátricula do usuário.
-   cancelText: comentários do cancelamento.



Retorno: String.



Estrutura de retorno com sucesso

```
<result>OK</result>
```



Estrutura de retorno com erro

```
<result>Processo não encontrado.</result>
```



cancelInstanceByReplacement

Cancela uma solicitação utilizando usuário substituto.



Método:

cancelInstanceByReplacement(String user, String password, int companyId, int processInstanceId, String userId, String cancelText, String replacementId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   processInstanceId: número da solicitação.
-   userId: mátricula do usuário.
-   cancelText: comentários do cancelamento.
-   replacementId: matrícula do usuário substituto.



Retorno: String.



Estrutura de retorno com sucesso

```
<result>OK</result>
```



Estrutura de retorno com erro

```
<result>Processo não encontrado.</result>
```



createWorkFlowProcessVersion

Cria nova versão do processo workflow.



Método:

createWorkFlowProcessVersion(String user, String password, int companyId, int processId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   processId: número da solicitação.



Retorno: String.



Estrutura de retorno com sucesso

```
<result>{swimlane=Nova Versão das SwimLanes, processLinkAssoc=Nova Versão das Associações, conditionProcessState=Nova Versão das Condições das Atividades Automáticas, ok=true, flow=Nova Versão dos Fluxos do Processo, end=Versão criada com sucesso, processComponGraf=Nova Versão dos Componentes Gráficos, activity=Nova Versão das Atividades, begin=Criando versão '2' do processo 'Solicitação de férias'}</result>
```



Estrutura de retorno com erro

```
<result>{error=Processo não existente}</result>
```



exportProcess

Retorna o processo selecionado em uma String.



Método:

*exportProcess* (String username, String password, int companyId, String processId)



Parâmetros:

-   username - Usuário de Integração
-   password - Senha de Integração
-   companyId - Código da empresa
-   processId - Código do processo



Retorno: String que contém a definição do processo.

exportProcessInZipFormat

Retorna o processo selecionado no formato zip.



Método:

exportProcessInZipFormat(String username, String password, int companyId, String processId)



Parâmetros:

-   username - Usuário de Integração
-   password - Senha de Integração
-   companyId - Código da empresa
-   processId - Código do processo



Retorno: byte\[\] que contém a definição do processo.

getActualThread

Retorna a sequência da thread de uma solicitação.



Método:

getActualThread(String user, String password, int companyId, int processInstanceId, int stateSequence)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   userId: matrícula do usuário.
-   stateSequence: sequência do estado.



Retorno: int.

getAllActiveStates

Retorna o número da atividade em que uma solicitação esta.



Método:

getAllActiveStates(String user, String password, int companyId, String userId, int processInstanceId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   userId: matrícula do usuário.
-   processInstanceId: número da solicitação.



Retorno: Integer\[\].

getAllProcessAvailableToExport

Retorna uma lista de processos disponíveis para serem exportados.



Método:

getAllProcessAvailableToExport (String username, String password, int companyId)



Parâmetros:

-   username - Usuário de Integração
-   password - Senha de Integração
-   companyId - Código da empresa



Retorno: [ProcessDefinitionDto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ProcessDefinitionDto).

getAllProcessAvailableToImport

Retorna uma lista de processos disponíveis para serem importados.



Método:

getAllProcessAvailableToImport (String username, String password, int companyId)



Parâmetros:

-   username - Usuário de Integração
-   password - Senha de Integração
-   companyId - Código da empresa



Retorno: [ProcessDefinitionDto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ProcessDefinitionDto)

getAttachments

Retorna os anexos de uma solicitação.



Método:

getAttachments(String user, String password, int companyId, String userId, int processInstanceId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   userId: matrícula do usuário.
-   processInstanceId: número da solicitação.



Retorno: [ProcessAttachmentDto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ProcessAttachmentDto).

getAvailableProcess

Retorna os processos que o usuário pode iniciar uma solicitação.



Método:

getAvailableProcess(String username, String password, int companyId, String userId)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   userId: matrícula do usuário.



Retorno: [ProcessDefinitionVersionDto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ProcessDefinitionVersionDto).

getAvailableProcessOnDemand

Retorna os processos que o usuário pode iniciar uma solicitação, paginados.



Método:

getAvailableProcessOnDemand(String username, String password, int companyId, String userId, int limit, int lastRowId)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   userId: matrícula do usuário.
-   limit: número de registros a serem retornados.
-   lastRowId: última linha retornada.



Retorno: [ProcessDefinitionVersionDto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ProcessDefinitionVersionDto).

getAvailableStates

Retorna o número da próxima atividade de uma solicitação.



Método:

getAvailableStates(String user, String password, int companyId, String processId, int processInstanceId, int threadSequence)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   processId: código do processo.
-   processInstanceId: número da solicitação.
-   threadSequence: Indica se existe atividade paralela no processo. Se não existir o valor é 0 (zero), caso exista, este valor pode ser de 1 a infinito dependendo da quantidade de atividade paralelas existentes no processo.



Retorno: Integer\[\].

getAvailableStatesDetail

Retorna detalhes das atividades disponíveis para seleção...

Atenção

Caso haja necessidade de utilizar este método na primeira instância do processo, favor consultar a [hAPI](https://tdn.totvs.com/display/fluig/Desenvolvimento+de+Workflow).

Método:

getAvailableStatesDetail(String user, String password, int companyId, String processId, int processInstanceId, int threadSequence)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   processId: código do processo.
-   processInstanceId: número da solicitação.
-   threadSequence: Indica se existe atividade paralela no processo. Se não existir o valor é 0 (zero), caso exista, este valor pode ser de 1 a infinito dependendo da quantidade de atividade paralelas existentes no processo.



Retorno: [ProcessStateDto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ProcessStateDto).

getAvailableUsers

Retorna os usuários que podem executar a tarefa corrente de uma solicitação.



Método:

getAvailableUsers(String username, String password, int companyId, int processInstanceId, int state, int threadSequence)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   processInstanceId: número da solicitação.
-   state: número da atividade.
-   threadSequence: Indica se existe atividade paralela no processo. Se não existir o valor é 0 (zero), caso exista, este valor pode ser de 1 a infinito dependendo da quantidade de atividade paralelas existentes no processo.



Retorno: String\[\].

getAvailableUsersOnDemand

Retorna os usuários que podem executar a tarefa corrente de uma solicitação, paginados e com busca.



Método:

getAvailableUsersOnDemand(String username, String password, int companyId, int processInstanceId, int state, int threadSequence, int limit, int initialUser, String userSearch)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   processInstanceId: número da solicitação.
-   state: número da atividade.
-   threadSequence: Indica se existe atividade paralela no processo. Se não existir o valor é 0 (zero), caso exista, este valor pode ser de 1 a infinito dependendo da quantidade de atividade paralelas existentes no processo.
-   limit: número de registros a serem retornados.
-   initialUser: última linha retornada.
-   userSearch: texto a ser buscado.



Retorno: [AvailableUsersDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-AvailableUsersDto).

getAvailableUsersStart

Retorna os usuários disponíveis na abertura de uma solicitação.



Método:

getAvailableUsersStart (String username, String password, int companyId, String processId, int state, int threadSequence)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   processId: código do processo.
-   state: número da atividade.
-   threadSequence: Indica se existe atividade paralela no processo. Se não existir o valor é 0 (zero), caso exista, este valor pode ser de 1 a infinito dependendo da quantidade de atividade paralelas existentes no processo.



Retorno: String\[\].

getAvailableUsersStartOnDemand

Retorna os usuários disponíveis na abertura de uma solicitação, paginados e com busca.



Método:

getAvailableUsersStart (String username, String password, int companyId, String processId, int state, int threadSequence, int limit, int initialUser, String userSearch)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   processId: código do processo.
-   state: número da atividade.
-   threadSequence: Indica se existe atividade paralela no processo. Se não existir o valor é 0 (zero), caso exista, este valor pode ser de 1 a infinito dependendo da quantidade de atividade paralelas existentes no processo.
-   limit: número de registros a serem retornados.
-   initialUser: última linha retornada.
-   userSearch: texto a ser buscado.



Retorno: [AvailableUsersDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-AvailableUsersDto).

getCardValue

Retorna o valor de um campo do registro de formulário.



Método:

getCardValue(String user, String password, int companyId, int processInstanceId, String userId, String cardFieldName)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   processInstanceId: número da solicitação.
-   userId: mátricula do usuário.
-   cardFieldName: nome do campo do registro de formulário.



Retorno: String.

getHistories

Retorna a lista de históricos de um processo, exceto os comentários adicionados pelos usuários nas atividades.



Método:

getHistories (String username, String password, int companyId)



Parâmetros:

-   username - Usuário de Integração
-   password - Senha de Integração
-   companyId - Código da empresa
-   userId - Matrícula do usuário
-   processInstanceId - número da solicitação workflow



Retorno: [ProcessHistoryDto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ProcessHistoryDto).



getInstanceCardData

Retorna o valor dos campos do registro de formulário de uma solicitação.



Método:

getInstanceCardData(String user, String password, int companyId, String userId, int processInstanceId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   userId: matrícula do usuário.
-   processInstanceId: número da solicitação.



Retorno: String\[\]\[\].

getProcessFormId

Retorna o código do formulário vinculado ao processo.



Método:

getProcessFormId(String user, String password, int companyId, string processId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   processId: código do processo.



Retorno: int.

getWorkFlowProcessVersion

Retorna a versão de um processo.



Método:

getWorkFlowProcessVersion(String user, String password, int companyId, int processId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   processId: número da solicitação.



Retorno: int.

importProcess

Importa processos workflow.



Método:

importProcess(String user, String password, int companyId, String processId, Attachment file, boolean newProcess, boolean overWrite, String colleagueId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   processId: código do processo.
-   file: arquivo a ser importado.
-   newProcess: indica se deve ser criado um processo ou atualizado o existente.
-   overWrite: indica se as atividades e fluxos do processo existentes devem ser sobrescritas.
-   colleagueId : matrícula do usuário.



Retorno: String.



Estrutura de retorno com sucesso

```
<result>OK</result>
```



Estrutura de retorno com erro

```
<faultstring>Não foi possível importar os dados do arquivo: Solicitação de férias</faultstring>
```



importProcessWithCard

Importa processos workflow e formulário.



Método:

importProcessWithCard(String user, String password, int companyId, String processId, Attachment\[\] processAttachs, boolean newProcess, boolean overWrite, String colleagueId, int parentDocId, String docDescription, String cardDescription, String datasetName, Attachment\[\] cardAttachs, CardEventDto\[\] customEvents, boolean update)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   processId: código do processo.
-   processAttachs: anexos do processo.
-   newProcess: indica se deve ser criado um processo ou atualizado o existente.
-   overWrite: indica se as atividades e fluxos do processo existentes devem ser sobrescritas.
-   colleagueId : matrícula do usuário.
-   parentDocId: número do formulário.
-   docDescription: descrição.
-   cardDescription: nome.
-   datasetName: nome do dataset.
-   cardAttachs: arquivo anexo.
-   customEvents: eventos.
-   update: caso verdadeiro ('true'), informa que será uma atualização.



Retorno: String.



Estrutura de retorno com sucesso

```
<result>OK</result>
```



Estrutura de retorno com erro

```
<faultstring>Não foi possível importar os dados do arquivo: Solicitação de férias</faultstring>
```



releaseProcess

Libera processos workflow.



Método:

releaseProcess(String user, String password, int companyId, String processId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   processId: código do processo.




Retorno: String.
Estrutura de retorno com sucesso



```
<result>{activityError=[], subProcess=[Sub-processos], subProcessError=[], attachmentSecurityError=[], attachmentSecurity=[Segurança de Anexos], ok=true, flow=[Fluxos], flowError=[], activity=[Atividades], end=Versão liberada para utilização., begin=Liberação da versão 2 do processo Solicitação de férias}</result>
```



Estrutura de retorno com erro

```
<result>Login e senha inválidos</result>
```



saveAndSendTask

Movimenta solicitação para próxima atividade.

Caso possua os campos preenchidos na solicitação e os valores não forem repassados no cardData ou estiverem vazios, a solicitação também ficará com o valor vazio, onde os valores preenchidos serão apagados caso não seja passado o valor.





Método:

saveAndSendTask(String user, String password, int companyId, int processInstanceId, int choosedState, String\[\] colleagueIds, String comments, String userId, boolean completeTask, [ProcessAttachmentDto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ProcessAttachmentDto) attachments, String\[\]\[\] [cardData](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-cardData), [ProcessTaskAppointmentDto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ProcessTaskAppointmentDto) appointment, boolean managerMode, int threadSequence)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   processInstanceId: número da solicitação.
-   choosedState: número da atividade.
-   colleagueIds: usuário que receberá a tarefa.
-   comments: comentários.
-   userId: matrícula do usuário que vai executar a tarefa.
-   completeTask: indica se deve completar a tarefa (true) ou somente salvar (false).
-   attachments: anexos da solicitação.
-   [cardData](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-cardData): dados do registro de formulário.
-   appointment: apontamentos da tarefa.
-   managerMode: indica se usuário esta executando a tarefa como gestor do processo.
-   threadSequence: Indica se existe atividade paralela no processo. Se não existir o valor é 0 (zero), caso exista, este valor pode ser de 1 a infinito dependendo da quantidade de atividade paralelas existentes no processo.



Retorno: String\[\]\[\].



Estrutura de retorno com sucesso

```
<result>
	<item>
	   <item>iTask</item>
	   <item>4</item>
	</item>
	<item>
	   <item>cDestino</item>
	   <item>[adm]</item>
	</item>
</result>
```



Estrutura de retorno com erro

```
<result>
	<item>
	   <item>ERROR:</item>
	   <item>Erro ao salvar/completar a tarefa: Usuário destino não foi informado!</item>
	</item>
</result>
```



Exemplo de utilização com exclusão de anexo:

```
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.workflow.ecm.technology.totvs.com/">
   <soapenv:Header/>
   <soapenv:Body>
      <ws:saveAndSendTask>
        <username>adm</username>
            <password>adm</password>
            <companyId>1</companyId>
            <processInstanceId>1780</processInstanceId>
            <choosedState>4</choosedState>
            <colleagueIds>
                <item>adm</item>
            </colleagueIds>
            <comments>movimentação removendo anexo</comments>
            <userId>adm</userId>
            <completeTask>true</completeTask>
          <attachments>
            <item>
               <attachmentSequence>3012334</attachmentSequence>
               <attachments>
               </attachments>
               <colleagueId>adm</colleagueId>
               <colleagueName>adm</colleagueName>
               <companyId>1</companyId>
               <deleted>true</deleted>
               <description>arquivo.docx</description>
               <documentId>3012334</documentId>
               <documentType>docx</documentType>
               <fileName>arquivo.docx</fileName>
               <newAttach>false</newAttach>
               <permission>1</permission>
               <processInstanceId>1780</processInstanceId>
               <version>1000</version>
            </item>
         </attachments>>
            <cardData>
            </cardData>
            <appointment>
            </appointment>
            <managerMode>false</managerMode>
            <threadSequence>0</threadSequence>
      </ws:saveAndSendTask>
   </soapenv:Body>
</soapenv:Envelope>
```

O exemplo de movimentação com exclusão de anexo está excluindo apenas um anexo, caso necessário excluir mais de um, adicione uma nova tag <item>

saveAndSendTaskByReplacement

Movimenta solicitação para próxima atividade utilizando usuário substituto.

Caso possua os campos preenchidos na solicitação e os valores não forem repassados no cardData ou estiverem vazios, a solicitação também ficará com o valor vazio, onde os valores preenchidos serão apagados caso não seja passado o valor.



Método:

saveAndSendTaskByReplacement (String user, String password, int companyId, int processInstanceId, int choosedState, String\[\] colleagueIds, String comments, String userId, boolean completeTask, [ProcessAttachmentDto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ProcessAttachmentDto) attachments, String\[\]\[\] [cardData](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-cardData), [ProcessTaskAppointmentDto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ProcessTaskAppointmentDto) appointment, boolean managerMode, int threadSequence, String replacementId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   processInstanceId: número da solicitação.
-   choosedState: número da atividade.
-   colleagueIds: usuário que receberá a tarefa.
-   comments: comentários.
-   userId: matrícula do usuário que vai executar a tarefa.
-   completeTask: indica se deve completar a tarefa (true) ou somente salvar (false).
-   attachments: anexos da solicitação.
-   [cardData](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-cardData): dados do registro de formulário.
-   appointment: apontamentos da tarefa.
-   managerMode: indica se usuário esta executando a tarefa como gestor do processo.
-   threadSequence: Indica se existe atividade paralela no processo. Se não existir o valor é 0 (zero), caso exista, este valor pode ser de 1 a infinito dependendo da quantidade de atividade paralelas existentes no processo.
-   replacementId: matrícula do usuário substituto.



Retorno: String\[\]\[\].



Estrutura de retorno com sucesso

```
<result>
	<item>
	   <item>iTask</item>
	   <item>4</item>
	</item>
	<item>
	   <item>cDestino</item>
	   <item>[adm]</item>
	</item>
</result>
```



Estrutura de retorno com erro

```
<result>
	<item>
	   <item>ERROR:</item>
	   <item>Erro ao salvar/completar a tarefa: Usuário destino não foi informado!</item>
	</item>
</result>
```



saveAndSendTaskClassic

Movimenta solicitação para próxima atividade e retorna um array de objeto com chave e valor.

Caso possua os campos preenchidos na solicitação e os valores não forem repassados no cardData ou estiverem vazios, a solicitação também ficará com o valor vazio, onde os valores preenchidos serão apagados caso não seja passado o valor.



Método:

saveAndSendTaskClassic(String user, String password, int companyId, int processInstanceId, int choosedState, String\[\] colleagueIds, String comments, String userId, boolean completeTask, [ProcessAttachmentDto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ProcessAttachmentDto) attachments, [KeyValueDto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-KeyValueDto) [cardData](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-cardData), [ProcessTaskAppointmentDto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ProcessTaskAppointmentDto) appointment, boolean managerMode, int threadSequence)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   processInstanceId: número da solicitação.
-   choosedState: número da atividade.
-   colleagueIds: usuário que receberá a tarefa.
-   comments: comentários.
-   userId: matrícula do usuário que vai executar a tarefa.
-   completeTask: indica se deve completar a tarefa (true) ou somente salvar (false).
-   attachments: anexos da solicitação.
-   [cardData](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-cardData): dados do registro de formulário.
-   appointment: apontamentos da tarefa.
-   managerMode: indica se usuário esta executando a tarefa como gestor do processo.
-   threadSequence: Indica se existe atividade paralela no processo. Se não existir o valor é 0 (zero), caso exista, este valor pode ser de 1 a infinito dependendo da quantidade de atividade paralelas existentes no processo.



Estrutura mínima para movimentação com anexo

```
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:ws="http://ws.workflow.ecm.technology.totvs.com/">
    <soapenv:Header/>
    <soapenv:Body>
        <ws:saveAndSendTaskClassic>
            <username>adm</username>
            <password>adm</password>
            <companyId>1</companyId>
            <processInstanceId>48</processInstanceId>
            <choosedState>2</choosedState>
            <colleagueIds>
                <item>al01</item>
            </colleagueIds>
            <comments>movimentação com anexo</comments>
            <userId>adm</userId>
            <completeTask>true</completeTask>
            <attachments>
                <item>
                    <attachmentSequence>0</attachmentSequence>
                    <attachments>
                        <attach>true</attach>
                        <editing>true</editing>
                        <fileName>pdf_para_teste.pdf</fileName>
                        <principal>true</principal>
                    </attachments>
                    <colleagueId>adm</colleagueId>
                    <colleagueName>adm</colleagueName>
                    <companyId>1</companyId>
                    <deleted>false</deleted>
                    <description>pdf usado para teste</description>
                    <documentType>pdf</documentType>
                    <newAttach>true</newAttach>
                    <processInstanceId>47</processInstanceId>
                </item>
            </attachments>
            <cardData>
            </cardData>
            <appointment>
            </appointment>
            <managerMode>false</managerMode>
            <threadSequence>0</threadSequence>
        </ws:saveAndSendTaskClassic>
    </soapenv:Body>
</soapenv:Envelope>
```

O exemplo de movimentação com anexo foi criado considerando do uso da pasta de *upload* do volume. Sendo assim, o arquivo para transferência deverá estar contido na pasta de *upload* do usuário.

Considerando o exemplo acima, o arquivo pdf\_para\_teste.pdf deverá estar contido na pasta do usuário, que fica localizada dentro do diretório *upload* no volume do fluig.

Caso não queira utilizar este tipo de transferência para anexo e sim a transferência via *Bytes*, devem ser adicionadas à estrutura, abaixo da *tag* <fileName>, as seguintes *tags*:

<fileSize> = para indicar o tamanho do arquivo

<filecontent> = que deverá conter os bytes referentes ao arquivo

Adicionando *estas* tags será ignorada a busca no diretório de *upload* do usuário, sendo considerado o arquivo contido na *tag* <filecontent>.





Retorno: [KeyValueDto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-KeyValueDto).



Estrutura de retorno com sucesso

```
<result>
	<item>
	   <item>iTask</item>
	   <item>4</item>
	</item>
	<item>
	   <item>cDestino</item>
	   <item>[adm]</item>
	</item>
</result>
```



Estrutura de retorno com erro

```
<result>
	<item>
	   <item>ERROR:</item>
	   <item>Erro ao salvar/completar a tarefa: Usuário destino não foi informado!</item>
	</item>
</result>
```



searchProcess

Busca processo disponíveis para inicialização.



Método:

searchProcess(String user, String Password, int companyId, String colleagueId, String content, boolean favorite)



Parametros



-   user - Usuário de Integração
-   password - Senha de Integração
-   companyId - Código da empresa
-   colleagueId - Matrícula do usuário
-   content – nome do processo a ser pesquisado
-   favorite – busca da lista de processos favoritos ou da listagem padrão.



Retorno: [ProcessDefinitionVersionDto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ProcessDefinitionVersionDto)

setAutomaticDecisionClassic

Seleciona usuário(s) e avança atividade automática.



Método:

setAutomaticDecisionClassic(String user, String password, int companyId, int processInstanceId, int iTaskAutom, int iTask, int condition, String\[\] colleagueIds, String comments, String userId, boolean managerMode, int threadSequence)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   processInstanceId: número da solicitação.
-   iTaskAutom: número da atividade automática.
-   iTask: número da atividade atual.
-   condition: número da condição da atividade automática.
-   colleagueIds: usuário que receberá a tarefa.
-   comments: comentários.
-   userId: matrícula do usuário que vai executar a tarefa.
-   managerMode: indica se usuário esta executando a tarefa como gestor do processo.
-   threadSequence: Indica se existe atividade paralela no processo. Se não existir o valor é 0 (zero), caso exista, este valor pode ser de 1 a infinito dependendo da quantidade de atividade paralelas existentes no processo.



Retorno: [KeyValueDto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-KeyValueDto)



Estrutura de retorno com sucesso

```
<result>
	<item>
	   <item>iTask</item>
	   <item>4</item>
	</item>
	<item>
	   <item>cDestino</item>
	   <item>[adm]</item>
	</item>
</result>
```



Estrutura de retorno com erro

```
<result>
	<item>
	   <key>ERROR</key>
	   <value>Nenhum colaborador foi informado.</value>
	</item>
</result>
```



setDueDate

Altera a data de prazo da tarefa.



Método:

setDueDate(String user, String password, int companyId, int processInstanceId, String userId, int threadSequence, String newDueDate, int timeInSeconds)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   processInstanceId: número da solicitação.
-   userId: matrícula do usuário. Quando é Para um Grupo ou Para um Papel deve ser passado da seguinte forma:
    Papel: "Pool:Role:CodigoDoPapel";
    Grupo: "Pool:Group:CodigoDoGrupo".
-   threadSequence: Indica se existe atividade paralela no processo. Se não existir o valor é 0 (zero), caso exista, este valor pode ser de 1 a infinito dependendo da quantidade de atividade paralelas existentes no processo.
-   newDueDate: nova data de prazo da tarefa. Exemplo: "2014-08-20".
-   timeInSeconds: quantidade de segundos após a meia noite. Exemplo: "32000".



Retorno: String.



Estrutura de retorno com sucesso

```
<result>Data da solicitação: 26 do usuário: adm da empresa: 1 foi alterada com sucesso!</result>
```



Estrutura de retorno com erro

```
<result>Não foi possível encontrar histórico de processo para empresa 1 solicitação 263 thread 0</result>
```



setTasksComments

Altera os comentários da tarefa.



Método:

setTasksComments(String user, String password, int companyId, int processInstanceId, String userId, int threadSequence, String comments)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   processInstanceId: número da solicitação.
-   userId: mátricula do usuário.
-   threadSequence: Indica se existe atividade paralela no processo. Se não existir o valor é 0 (zero), caso exista, este valor pode ser de 1 a infinito dependendo da quantidade de atividade paralelas existentes no processo.
-   comments: comentários.



Retorno: String.



Estrutura de retorno com sucesso

```
<result>OK</result>
```



Estrutura de retorno com erro

```
<result>Não foi possível encontrar histórico de processo para empresa 1 solicitação 263 thread 0</result>
```



simpleStartProcess

Inicia uma solicitação simples.



Método:

simpleStartProcess(String user, String password, int companyId, String processId, String comments, [ProcessAttachmentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ProcessAttachmentDto)\[\] attachments, String [cardData](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-cardData)\[\]\[\])



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   processId: código do processo.
-   comments: comentários.
-   attachments: anexos da solicitação.
-   [cardData](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-cardData): dados do registro de formulário.



Retorno: String\[\].



Estrutura de retorno com sucesso

```
<result>
	<item>iTask=2</item>
	<item>WDNrVersao=1000</item>
	<item>WDNrDocto=0</item>
	<item>iProcess=28</item>
	<item>cDestino=[adm]</item>
</result>
```



Estrutura de retorno com erro

```
<faultstring>Versão do processo não encontrada. processId: 263</faultstring>
```

Para utilização do método, acesse o exemplo a seguir:

[Exemplo](https://tdn.totvs.com/download/attachments/73084007/ws.zip?version=1&modificationDate=1506447690000&api=v2).

startProcess

Inicia uma solicitação.



Método:

startProcess(String user, String password, int companyId, String processId, int choosedState, String\[\] colleagueIds, String comments, String userId, boolean completeTask, [ProcessAttachmentDto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ProcessAttachmentDto) attachments, String\[\]\[\] [cardData](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-cardData), [ProcessTaskAppointmentDto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ProcessTaskAppointmentDto) appointment, boolean managerMode)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   processId: código do processo.
-   choosedState: número da atividade.
-   colleagueIds: usuário que receberá a tarefa. Caso a solicitação esteja sendo atribuída "Para um Papel" ou "Para um Grupo", o parâmetro colleagueIds deve ser informado da seguinte forma:
    Papel: Pool:Role:Nome\_do\_papel
    Grupo: Pool:Group:Nome\_do\_grupo
-   comments: comentários.
-   userId: matrícula do usuário que vai iniciar a solicitação.

-   completeTask: indica se deve completar a tarefa (true) ou somente salvar (false).
-   attachments: anexos da solicitação.
-   [cardData](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-cardData): dados do registro de formulário.
-   appointment: apontamentos da tarefa.
-   managerMode: indica se usuário esta iniciando a solicitação como gestor do processo.



Retorno: String\[\]\[\].



Estrutura de retorno com sucesso

```
<result>
	<item>
	   <item>iTask</item>
	   <item>2</item>
	</item>
	<item>
	   <item>WDNrVersao</item>
	   <item>1000</item>
	</item>
	<item>
	   <item>WDNrDocto</item>
	   <item>0</item>
	</item>
	<item>
	   <item>iProcess</item>
	   <item>29</item>
	</item>
	<item>
	   <item>cDestino</item>
	   <item>[adm]</item>
	</item>
</result>
```



Estrutura de retorno com erro

```
<result>
	<item>
	   <item>ERROR</item>
	   <item>Processo informado não foi encontrado.</item>
	</item>
</result>
```

Para utilização do método, acesse o exemplo a seguir:

[Exemplo](https://tdn.totvs.com/download/attachments/73084007/ws.zip?version=1&modificationDate=1506447690000&api=v2).

startProcessClassic

Inicia uma solicitação e retorna um array de objeto com chave e valor.



Método:

startProcessClassic(String user, String password, int companyId, String processId, int choosedState, String\[\] colleagueIds, String comments, String userId, boolean completeTask, [ProcessAttachmentDto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ProcessAttachmentDto) attachments, [KeyValueDto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-KeyValueDto) [cardData](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-cardData), [ProcessTaskAppointmentDto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ProcessTaskAppointmentDto) appointment, boolean managerMode)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   processId: código do processo.
-   choosedState: número da atividade.
-   colleagueIds: usuário que receberá a tarefa.
-   comments: comentários.
-   userId: matrícula do usuário que vai iniciar a solicitação.
-   completeTask: indica se deve completar a tarefa (true) ou somente salvar (false).
-   attachments: anexos da solicitação.
-   [cardData](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-cardData): dados do registro de formulário.
-   appointment: apontamentos da tarefa.
-   managerMode: indica se usuário esta iniciando a solicitação como gestor do processo.



Retorno: String\[\]\[\].



Estrutura de retorno com sucesso

```
<result>
	<item>
	   <key>iTask</key>
	   <value>2</value>
	</item>
	<item>
	   <key>WDNrVersao</key>
	   <value>1000</value>
	</item>
	<item>
	   <key>WDNrDocto</key>
	   <value>0</value>
	</item>
	<item>
	   <key>iProcess</key>
	   <value>30</value>
	</item>
	<item>
	   <key>cDestino</key>
	   <value>[adm]</value>
	</item>
</result>
```



Estrutura de retorno com erro

```
<result>
	<item>
	   <key>ERROR</key>
	   <value>Processo informado não foi encontrado.</value>
	</item>
</result>
```

Para utilização do método, acesse o exemplo a seguir:

[Exemplo](https://tdn.totvs.com/download/attachments/73084007/ws.zip?version=1&modificationDate=1506447690000&api=v2).

takeProcessTask

Assume uma tarefa.



Método:

takeProcessTask(String user, String password, int companyId, String userId, int processInstanceId, int threadSequence)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   userId: matrícula do usuário.
-   processInstanceId: número da solicitação.
-   threadSequence: Indica se existe atividade paralela no processo. Se não existir o valor é 0 (zero), caso exista, este valor pode ser de 1 a infinito dependendo da quantidade de atividade paralelas existentes no processo.



Retorno: String.



Estrutura de retorno com sucesso

```
<result>OK</result>
```



Estrutura de retorno com erro

```
<result>Tarefa não encontrada</result>
```



takeProcessTaskByReplacement

Assume uma tarefa utilizando usuário substituto.



Método:

takeProcessTask(String user, String password, int companyId, String userId, int processInstanceId, int threadSequence, String replacementId)



Parâmetros:

-   user: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   userId: matrícula do usuário.
-   processInstanceId: número da solicitação.
-   threadSequence: Indica se existe atividade paralela no processo. Se não existir o valor é 0 (zero), caso exista, este valor pode ser de 1 a infinito dependendo da quantidade de atividade paralelas existentes no processo.
-   replacementId: matrícula do usuário substituto.



Retorno: String.



Estrutura de retorno com sucesso

```
<result>OK</result>
```



Estrutura de retorno com erro

```
<result>Usuário não possui permissão para assumir a tarefa</result>
```



updateWorkflowAttachment

Atualiza um documento do tipo 7.

Retorna uma string contendo a descrição de sucesso ou falha da operação.

Método:

updateWorkflowAttachment(String username, String password, int companyId, int processInstanceId, String usuario, [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)\[\] docdtos, Attachment\[\] attach)

Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   processInstanceId: número da solicitação workflow.
-   usuario: usuário responsável pela edição do documento.
-   documents: documento ou documentos que serão publicados.
-   attachments: arquivo(s) anexado(s) na publicação.

Observação:

Caso necessite atualizar somente o título do anexo, basta enviar a tag attachments vazio, exemplo:

<attachments></attachments>

Caso queira atualizar o arquivo do anexo será preciso informar o filename. Caso não tenha enviado o arquivo na pasta upload via FTP informe também o filecontent, exemplo:

<attachments>
            <item>
             <fileName>arquivo.pdf</fileName>
             <filecontent>cid:884394243078</filecontent>
            </item>
  </attachments>



Retorno: String.

Estrutura de retorno com sucesso

```
<result>Documento editado com sucesso</result>
```



Estrutura de retorno com erro

```
<result>DOCUMENTO NÃO É ANEXO WORKFLOW</result>
```





**Quadro 24: Métodos da WorkflowEngineService**

#### Exemplo de utilização

Faça o download da classe [ECMWorkflowEngineService.java](https://git.fluig.com/projects/SAMPLES/repos/componentes/browse/webservice/src/samples/ECMWorkflowEngineService.java), esta exemplifica a utilização dos principais métodos da classe WorkflowEngineService.



# ECMWorkflowRoleService

Webservice responsável por realizar operações referentes a papéis no fluig. Pode ser utilizado para criar, alterar, excluir e procurar papéis, entre outros recursos.



#### Métodos

createWorkflowRole

Cria um papel no fluig.



Método:

createWorkflowRole(String username, String password, int companyId, [workflowRoleDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WorkflowRoleDto) role)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   role: papel que será criado.



Retorno: String.



Estrutura de retorno com sucesso

```
<createWorkflowRoleResult>ok</createWorkflowRoleResult>
```



Estrutura de retorno com erro

```
<createWorkflowRoleResult>nok</createWorkflowRoleResult>
```



deleteWorkflowRole

Exclui um papel do fluig.



Método:

deleteWorkflowRole(String username, String password, int companyId, String roleId)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   roleId: código do papel a ser excluído.



Retorno: String.



Estrutura de retorno com sucesso

```
<createWorkflowRoleResult>ok</createWorkflowRoleResult>
```



Estrutura de retorno com erro

```
<createWorkflowRoleResult>nok</createWorkflowRoleResult>
```



getWorkflowRole

Retorna um papel cadastrado no fluig.



Método:

getWorkflowRole(String username, String password, int companyId, String roleId)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   roleId: código do papel.



Retorno: [WorkflowRoleDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WorkflowRoleDto).



Atributos de Retorno:

-   companyId
-   roleDescription
-   roleId

getWorkflowRoles

Retorna todos os papéis cadastrados no fluig.



Método:

getWorkflowRoles(String username, String password, int companyId)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.



Retorno: [WorkflowRoleDto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WorkflowRoleDto).



Atributos de Retorno:

-   companyId
-   roleDescription
-   roleId

updateWorkflowRole

Atualiza um papel no fluig.



Método:

updateWorkflowRole(String username, String password, int companyId, [workflowRoleDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WorkflowRoleDto) role)



Parâmetros:

-   username: login do usuário.
-   password: senha do usuário.
-   companyId: código da empresa.
-   role: papel que será criado.



Retorno: String.



Estrutura de retorno com sucesso

```
<createWorkflowRoleResult>ok</createWorkflowRoleResult>
```



Estrutura de retorno com erro

```
<createWorkflowRoleResult>nok</createWorkflowRoleResult>
```



**Quadro 25: Métodos da WorkflowRoleService**
