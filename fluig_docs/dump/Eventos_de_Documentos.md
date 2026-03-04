# Eventos de Documentos

> **Fonte:** [https://tdn.totvs.com/display/fluig/Eventos+de+Documentos](https://tdn.totvs.com/display/fluig/Eventos+de+Documentos)

---

# Índice

# Objetivo

* * *

Este guia é destinado aos desenvolvedores internos e externos do TOTVS Fluig Plataforma que desejam manipular os eventos de documentos. O objetivo é apresentar o seu funcionamento e a descrição dos campos utilizados.



# Pré-requisitos

* * *

Conhecer o conceito e as orientações sobre o [Desenvolvimento de Eventos](https://tdn.totvs.com/display/fluig/Desenvolvimento+de+Eventos).



# Eventos globais JavaScript

* * *

Os eventos de documentos são um conjunto de scripts carregados pela API de Documentos, os quais são desenvolvidos utilizando JavaScript e são chamados durante a execução de ação em Documentos ou em momentos específicos de interação em Documentos.

### AddDocumentConvertionExt

Este evento permite personalizar a conversão de documento realizada pelo TOTVS Fluig Plataforma. Mais informações sobre ele podem ser encontradas no guia [Conversores de Documentos](https://tdn.totvs.com/display/fluig/Conversores+de+Documentos).

### ValidateUpload

A partir da versão: 1.8.1- **[Silver Mist](https://tdn.totvs.com/x/hCFzL)**

Este evento sempre é disparado antes de realizar upload de arquivo para a plataforma, seja por API Rest, Soap/Webservices ou FTP. Através dele é possível validar o MIMEType ou Extensão do arquivo que está sendo feito upload e poder bloquear. O evento não recebe parâmetros, porém temos acesso à função getValue.

**Exemplo:**

```
function validateUpload() {
	// Exemplo de implementação

	// CompanyId da empresa
	var companyId = getValue("WKCompany");

	// Nome do arquivo com extensão
	var fileName = getValue("WKFileName");

	// Tamanho do arquivo em bytes
	var fileSize = getValue("WKFileSize");

	// Caminho absoluto do arquivo
	var filePath = getValue("WKFilePath");

	// MimeType dos bytes do arquivo, ou seja, independente da extensão
	var fileMimeType = getValue("WKFileMimeType");

	// UserId do usuário que está realizando o upload
	var userId = getValue("WKUser");

	// A maioria dos mimetypes executáveis começam com "application/x-"
	if (fileMimeType.indexOf("application/x-") !== -1) {

		// Porém alguns tipos começam também com "application/x-", como por exemplo: .rar ou .7zip. Então caso deseja permití-los, pode ser feito assim:
		if (fileMimeType.indexOf("application/x-rar-compressed") !== -1 || fileMimeType.indexOf("application/x-7z-compressed") !== -1) {
			return;
		}

		throwsIfBlocked();
	}

	// Podemos bloquear qualquer outro mimetype, por exemplo:
	if (fileMimeType.indexOf("application/octet-stream") !== -1 || fileMimeType.indexOf("application/exe") !== -1) {
		throwsIfBlocked();
	}

    // Podemos bloquear também pela extensão do arquivo
    if (fileName.match(/.*\.(sh|exe|msi|bat|app)/i)){
        throwsIfBlocked();
    }

	// Função usada para logar uma mensagem no log do servidor e retornar o erro na tela
	function throwsIfBlocked() {
		log.warn("Usuário: '" + userId + "' da Empresa: '" + companyId + "' tentou realizar o upload "
				+ "do Arquivo '" + fileName + "' com o Mimetype: '" + fileMimeType + "' e foi impedido!");

		throw "Este formato de documento não está de acordo com as políticas de segurança e portanto não será permitida sua publicação na plataforma.";
	}
}
```



São disponibilizadas algumas propriedades referentes ao arquivo que está sendo feito upload através do método *getValue*.

Propriedade

Descrição

Tipo

WKCompany

Código da Empresa

int

WKFileName

Nome do arquivo com extensão

String

WKFileSize

Tamanho do arquivo em bytes

long

WKFilePath

Caminho absoluto do arquivo

String

WKFileMimeType

MimeType dos bytes do arquivo, ou seja, independente da extensão

String

WKUser

Usuário logado

String

### ValidateCustomMetadata

Este evento sempre é disparado antes de salvar os valores dos campos customizados de um documento, tanto na publicação como edição. Através dele é possível alterar ou validar os valores dos campos customizados dos metadados de um documento. O evento recebe como parâmetro uma referência aos campos customizados.

**Exemplo:**

```
function validateCustomMetadata(fields){
}
```

No contexto deste evento a variável *fields* pode ser usada para consultar ou modificar os valores dos campos customizados de um documento. Não permitindo adicionar novos campos.
Para inserir novos campos em um documento existe varias maneiras disponíveis.

-   Pela herança da pasta pai.
-   No cadastro de Campos Customizados, marcando a opção **Mostrar em todos documentos** ou da forma padrão.
-   Através do *WebService CustomFieldsService*.
-   Na edição dos metadados do documento, pelo usuário.

Para consultar o valor de um campo customizado neste evento, utiliza-se o *fields.getValue* passando como parâmetro o código do campo desejado. Retornando *null*, caso o campo não esteja disponível para este documento.

**Exemplo:**

```
function validateCustomMetadata (fields){
    log.info("Valor do Campo 1: " + fields.getValue("campo1"));
}
```



Já para realizar a edição utiliza-se o *fields.setValue*, passando como parâmetro, primeiro o nome do campo, em seguida o valor.

**Exemplo:**

```
function validateCustomMetadata (fields){
    fields.setValue("campo1","Valor para o Campo 1");
}
```



Alem dos valores dos campos customizados disponibilizamos algumas informações do documento que está sendo criado ou editado, porém somente para consulta através do método *getValue*.

WKUser

Código do usuário

WKCompany

Número da empresa

WKNumParentDocument

Número da pasta pai

WKDocumentType

 Tipo do documento

WKDocumentTypeId 

ID do tipo de documento

WKPrivateDocument

Se o documento esta sendo publicado na pasta particular (true/false)

WKNumAcess

Número de acessos

WKComments

Comentários do documento

WKAuthor

Código do autor do documento

WKCreateDate

Data de criação do documento

WKDescription

Descrição do documento

WKNumDocument

Número do documento

WKNumVersion

Número da versão do documento

WKExpirationDate

Data de expiração do documento

WKExpires

Documento expira? (true/false)

WKFileSize

Tamanho do documento em bytes

WKKeyWord

Palavras chaves do documento

WKVolume

Volume do documento

WKSubject

Assunto relacionado ao documento




Veja o exemplo em nosso repositório [aqui](https://git.fluig.com/projects/SAMPLES/repos/projetos/browse).



**Exemplo:**

```
function validateCustomMetadata (fields){
    log.info("Usuário: " + getValue("WKUser "));
}
```



As exceções podem ser tratadas utilizando o comando *throw*. Este comando retornará uma mensagem ao usuário ao tentar salvar o documento.

**Exemplo:**

```
function validateCustomMetadata (fields){
    if( fields.getValue("campo1") == "Area 1"){
        throw "TRATAMENTO DA EXCEÇÃO";
    }
}
```

### BeforeDocumentPublisher

Utilizado quando é preciso fazer validação customizada nas propriedades da tela de publicação/edição de documentos antes de salva-lo no banco de dados. Dentre todas as propriedades da tela de publicação/edição de documentos não serão tratados os campos customizados, pois já existe um evento que trata esta situação.

São disponibilizadas algumas propriedades referentes ao documento que está sendo criado ou editado, porém somente para consulta através do método *getValue*.

Propriedade

Descrição

Tipo

WKDocument

Objeto do Documento

[DocumentDto](https://tdn.totvs.com/x/EIl8B#DesenvolvimentodeEventos-DocumentDto)

WKDocumentEdit

Objeto do Documento

[DocumentEditDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentEditDto)



WKSubject

Descrição do Assunto do documento

String

WKListApprover

Lista dos Aprovadores do documento

List<[ApproverDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ApproverDto)\>

WKListSecurity

Lista com a segurança do documento

List<[DocumentSecurityConfigDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentSecurityConfigDto)\>

WKListRelatedDocument

Lista com os documentos relacionados ao documento

List<[RelatedDocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-RelatedDocumentDto)\>

WKState

Estado da ação: PUBLISH ou MODIFY

String

WKUser

Usuário logado

String

WKCompany

Código da Empresa

int



O produto retorna *null* quando for necessário pegar umas das propriedades do documento que não exista.

Por exemplo: Nem todos os documentos publicados tem aprovador, logo a variável *WKListApprover* só terá informações quando realmente existirem aprovadores na publicação.

**Exemplos de implementação:**

É possível usar vários objetos e fazer validações e é muito comum validar permissões específicas ao negócio do cliente e não permitir a inclusão do documento.

No exemplo abaixo, o trecho de código está mostrando todos os possíveis atributos, declara os possíveis objetos, exibe no log algumas informações desses objetos, depois verifica os aprovadores, validando que não pode conter um usuário administrador como aprovador e exibe todos documentos relacionados.

```
function beforeDocumentPublisher(){

                var doc = getValue("WKDocument");
                var subject = getValue("WKSubject");
                var listApprover = getValue("WKListApprover");
                var listSeg = getValue("WKListSecurity");
                var listRelated = getValue("WKListRelatedDocument");
                var state = getValue("WKState");
                var user = getValue("WKUser");
                var company = getValue("WKCompany");


                log.info("Usuário Logado: " + user);


                log.info("Empresa: " + company);

                log.info("Número do documento: "+ doc.getDocumentId() + " - Versão: "+ doc.getVersion());

                if(listApprover!=null){
                    for(j = 0; j < listApprover.size(); j++) {
                        if (listApprover.get(j).getColleagueId().equals("adm")){
                            throw "O usuário adm não pode ser aprovador de documentos";
                        }
                    }
                }


                if(listSeg != null){
                    for(j = 0; j < listSeg.size(); j++) {
                        if (listSeg.get(j).getAttributionValue().equals("cvd")){
                            throw "O usuário cvd não pode estar na segurança de documentos";
                        }
                    }
                }


                if( listRelated != null){
                    log.info("Os seguintes documentos estão relacionados a este documentos: ");
                        for(j = 0; j < listRelated.size(); j++) {
                            log.info("Nr. documento: "+ listRelated.get(j).getRelatedDocumentId());
                        }
                }
                log.info("Assunto: " + subject);
                log.info("Estado: " + state);
}
```

Exemplo de evento que impede o usuário de publicar um documento com descrição repetida em uma determinada pasta.

```
function beforeDocumentPublisher() {
	// Exemplo de evento que impede o usuário de publicar um documento com descrição
    // repetida em uma determinada pasta levando em consideração também se o documento esta na lixeira.
	// caso não queira considerar a lixeira é só remover a validação da mesma, porem o documento poderá
	// ser restaurando da lixeira para pasta duplicando assim o nome do arquivo.


    var state = getValue("WKState");


    if (state == "PUBLISH") {

        var doc = getValue("WKDocument");

        // Faz validações apenas se o documento estiver sendo publicado na pasta selecionada (trocar o "6" pelo numero da pasta desejada)
        // Valida também se o documento esta sendo publicado como novo opção (getVersionOption), caso seja somente alteração ou seja, nova revisão ou versão passa
        if (doc.getParentDocumentId() == 6 && doc.getVersionOption() == 0) {

        	 //###############################################################################################
            //documentos ativos

            // Reduz o retorno de registros para reduzir impacto em performance.
            var constraintDocument1 = DatasetFactory.createConstraint(
                    'sqlLimit', '0', '1', ConstraintType.MUST);

            // Passando código da pasta pai para o Dataset
            var constraintDocument2 = DatasetFactory.createConstraint(
                    'parentDocumentId', doc.getParentDocumentId(), doc
                            .getParentDocumentId(), ConstraintType.MUST);

            // Consultando apenas registros de documentos ativos.
            var constraintDocument3 = DatasetFactory.createConstraint(
                    'activeVersion', 'true', 'true', ConstraintType.MUST);

            // Consultando apenas nos documentos que não foram removidos.
            var constraintDocument4 = DatasetFactory.createConstraint(
                    'deleted', 'false', 'false', ConstraintType.MUST);

            // Consultando documentos que tenham a mesma descrição informada na
            // publicação
            var constraintDocument5 = DatasetFactory.createConstraint(
                    'documentDescription', doc.getDocumentDescription(), doc
                            .getDocumentDescription(), ConstraintType.MUST);

            var datasetDocumentActive = DatasetFactory.getDataset('document', null,
                    new Array(constraintDocument1, constraintDocument2,
                            constraintDocument3, constraintDocument4,
                            constraintDocument5), null);


            //###############################################################################################
            //Considera o documento que esta na lixeira

            // Consultando apenas registros de documentos inativos.
            constraintDocument3 = DatasetFactory.createConstraint(
                    'activeVersion', 'false', 'false', ConstraintType.MUST);

            // Consultando apenas nos documentos que foram removidos.
            constraintDocument4 = DatasetFactory.createConstraint(
                    'deleted', 'true', 'true', ConstraintType.MUST);


            var datasetDocumentDeleted = DatasetFactory.getDataset('document', null,
                    new Array(constraintDocument1, constraintDocument2,
                            constraintDocument3, constraintDocument4,
                            constraintDocument5), null);


            var isExistDoc = datasetDocumentActive != null && datasetDocumentActive.rowsCount > 0
                && (datasetDocumentActive.getValue(0, "documentDescription") == doc.getDocumentDescription());

            var isExistDocDeleted = datasetDocumentDeleted != null && datasetDocumentDeleted.rowsCount > 0
                && (datasetDocumentDeleted.getValue(0, "documentDescription") == doc.getDocumentDescription());


            if (isExistDoc || isExistDocDeleted) {
                throw "Já existe um documento com a mesma descrição informada";
            }

        }
    }
}
```

Exemplo de como tornar o campo 'Descrição/Versão/Revisão' de preenchimento obrigatório, apresentado no momento do check-in do documento. 

```
function beforeDocumentPublisher() {

    var doc = getValue("WKDocument");

    // Verifica se a descrição da versão não está preenchida
    if (doc.getVersionDescription() == "") {
        log.info("### Documento: " + doc.getDocumentId() + " - Versão: " + doc.getVersion() + " não está com a Descrição da Versão preenchida!");

        // Informa somente o numero do documento de origem, para o caso de checkin com nova versao/revisao
        var constraintDocument1 = DatasetFactory.createConstraint('allocatedDocumentPK.sourceDocument', doc.getDocumentId(), doc .getDocumentId(), ConstraintType.MUST);
        // Instanciando o dataset
        var datasetDocument = DatasetFactory.getDataset('allocatedDocument', null, new Array(constraintDocument1), null);
        // Verifica se o documento esta em checkout/checkin e exibe a mensagem
        if (datasetDocument.rowsCount > 0) {
            throw "Para efetuar o checkin é necessário informar a Descrição da Versão!";
        }
    }
}
```

Exemplo de uso do parâmetro WKDocumentEdit no evento, para que seja possível atualizar o campo keyWord do documento.

```
function beforeDocumentPublisher() {
    var doc = getValue("WKDocument");
    log.info("KeyWord Atual: " + doc.getKeyWord());

    var docEdit = getValue("WKDocumentEdit");
    docEdit.setKeyWord("Novo");
    log.info("KeyWord Novo: " + docEdit.getKeyWord());
}
```

Exemplo de como impedir a publicação pela extensão do arquivo físico.

```
function beforeDocumentPublisher(){
    var doc = getValue("WKDocument");
    var ext = [".exe",".reg"];

    for (var i = 0; i < ext.length; i++) {
        if (doc.getPhisicalFile().endsWith(ext[i])) {
            throw "Desculpe, este tipo de arquivo não é permitido por razões de segurança";
        }
    }
}
```

Exemplo de uso do parâmetro WKDocumentEdit no evento para que seja possível controlar as propriedades version, validationStartDate e expirationDate do documento.

```
function beforeDocumentPublisher() {
    var doc = getValue("WKDocument");

    log.info("DocumentId Atual: " + doc.getDocumentId());
    log.info("Version Atual: " + doc.getVersion());
    log.info("DocumentType Atual: " + doc.getDocumentType());
    log.info("ValidationStartDate Atual: " + doc.getValidationStartDate());
    log.info("ExpirationDate Atual: " + doc.getExpirationDate());

    // Quando documento é novo e o tipo de documento é Documento normal.
    if (doc.getDocumentId() == 0 && doc.getDocumentType() == "2") {
	    var docEdit = getValue("WKDocumentEdit");

	    docEdit.setVersion(3);
	    log.info("Version Novo: " + docEdit.getVersion());

	    docEdit.setValidationStartDate(stringToDate("26/05/2023 00:00:00"));
	    log.info("ValidationStartDate Novo: " + docEdit.getValidationStartDate());

	    docEdit.setExpirationDate(stringToDate("27/05/2023 16:50:30"));
	    log.info("ExpirationDate Novo: " + docEdit.getExpirationDate());
    }

    function stringToDate(dateString){
        var format = new java.text.SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
        return format.parse(dateString);
    }
}
```



### **AfterDocumentPublisher**

Utilizado quando é preciso fazer alguma manipulação customizada nas propriedades da tela de publicação/edição de documentos depois que ele foi salvo no banco de dados. Dentre todas as propriedades da tela de publicação/edição de documentos não serão tratados os campos customizados.

**Exemplo:**

```
function afterDocumentPublisher(){
}
```

As propriedades recuperadas através do método *getValue*() são as mesmas do eventos *beforeDocumentPublisher* e a forma de manipulação das propriedades pode ser vista no exemplo do evento *beforeDocumentPublisher*.



### BeforeDocumentRemove

Este evento é executado antes do documento ir para a lixeira.

**Exemplo:**

```
function beforeDocumentRemove() {

    //Exemplo implementação

       var doc = getValue("WKDocument");
        var subject = getValue("WKSubject");
        var listApprover = getValue("WKListApprover");
        var listSeg = getValue("WKListSecurity");
        var listRelated = getValue("WKListRelatedDocument");
        var user = getValue("WKUser");
        var company = getValue("WKCompany");

        log.info("Usuário Logado: " + user);
        log.info("Empresa: " + company);

        log.info("Número do documento: " + doc.getDocumentId() + " - Versão: "
                + doc.getVersion());

        if (listRelated != null) {
            log.info("Os seguintes documentos estão relacionados a este documentos: ");
            for (j = 0; j < listRelated.size(); j++) {
                log.info("Nr. documento: "     + listRelated.get(j).getRelatedDocumentId());
            }
        }
        log.info("Assunto: " + subject);
}
```



São disponibilizadas algumas propriedades referentes ao documento que está removido, porém somente para consulta através do método *getValue*.

Propriedade

Descrição

Tipo

WKDocument

Objeto do Documento

[DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)

WKSubject

Descrição do Assunto do documento

String

WKListApprover

Lista dos Aprovadores do documento

List<[ApproverDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ApproverDto)\>

WKListSecurity

Lista com a segurança do documento

List<[DocumentSecurityConfigDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentSecurityConfigDto)\>

WKListRelatedDocument

Lista com os documentos relacionados ao documento

List<[RelatedDocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-RelatedDocumentDto)\>

WKState

Estado da ação: PUBLISH ou MODIFY

String

WKUser

Usuário logado

String

WKCompany

Código da Empresa

int



### AfterDocumentRemove

Este evento é executado logo após o documento ir para a lixeira.

**Exemplo:**

```
function afterDocumentRemove() {

    //Exemplo implementação

       var doc = getValue("WKDocument");
        var subject = getValue("WKSubject");
        var listApprover = getValue("WKListApprover");
        var listSeg = getValue("WKListSecurity");
        var listRelated = getValue("WKListRelatedDocument");
        var user = getValue("WKUser");
        var company = getValue("WKCompany");

        log.info("Usuário Logado: " + user);
        log.info("Empresa: " + company);

        log.info("Número do documento: " + doc.getDocumentId() + " - Versão: "
                + doc.getVersion());

        if (listRelated != null) {
            log.info("Os seguintes documentos estão relacionados a este documentos: ");
            for (j = 0; j < listRelated.size(); j++) {
                log.info("Nr. documento: "     + listRelated.get(j).getRelatedDocumentId());
            }
        }
        log.info("Assunto: " + subject);
}
```



São disponibilizadas algumas propriedades referentes ao documento que foi removido, porém somente para consulta através do método *getValue*.

Propriedade

Descrição

Tipo

WKDocument

Objeto do Documento

[DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)

WKSubject

Descrição do Assunto do documento

String

WKListApprover

Lista dos Aprovadores do documento

List<[ApproverDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ApproverDto)\>

WKListSecurity

Lista com a segurança do documento

List <[DocumentSecurityConfigDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentSecurityConfigDto)\>

WKListRelatedDocument

Lista com os documentos relacionados ao documento

List<[RelatedDocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-RelatedDocumentDto)\>

WKState

Estado da ação: PUBLISH ou MODIFY

String

WKUser

Usuário logado

String

WKCompany

Código da Empresa

int

### BeforeDocumentRestore

Este evento é executado antes do documento ser restaurado da lixeira.

**Exemplo:**

```
function beforeDocumentRestore() {

    //Exemplo implementação

       var doc = getValue("WKDocument");
        var subject = getValue("WKSubject");
        var listApprover = getValue("WKListApprover");
        var listSeg = getValue("WKListSecurity");
        var listRelated = getValue("WKListRelatedDocument");
        var user = getValue("WKUser");
        var company = getValue("WKCompany");

        log.info("Usuário Logado: " + user);
        log.info("Empresa: " + company);

        log.info("Número do documento: " + doc.getDocumentId() + " - Versão: "
                + doc.getVersion());

        log.info("Assunto: " + subject);
}
```



São disponibilizadas algumas propriedades referentes ao documento que está sendo restaurado, porém somente para consulta através do método *getValue*.

Propriedade

Descrção

Tipo

WKUser

Código do usuário

String

WKCompany

Número da empresa

int

WKDocument

Objeto do Documento

[DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)

WKUserLocale

Idioma do Usuário logado

String

WKSubject

Assunto do documento

String

### AfterDocumentRestore

Este evento é executado logo após o documento ser restaurado da lixeira.

**Exemplo:**

```
function afterDocumentRestore() {

    //Exemplo implementação

       var doc = getValue("WKDocument");
        var subject = getValue("WKSubject");
        var listApprover = getValue("WKListApprover");
        var listSeg = getValue("WKListSecurity");
        var listRelated = getValue("WKListRelatedDocument");
        var user = getValue("WKUser");
        var company = getValue("WKCompany");

        log.info("Usuário Logado: " + user);
        log.info("Empresa: " + company);

        log.info("Número do documento: " + doc.getDocumentId() + " - Versão: "
                + doc.getVersion());

        log.info("Assunto: " + subject);
}
```



São disponibilizadas algumas propriedades referentes ao documento que foi restaurado, porém somente para consulta através do método *getValue*.

Propriedade

Descrção

Tipo

WKUser

Código do usuário

String

WKCompany

Número da empresa

int

WKDocument

Objeto do Documento

[DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)

WKUserLocale

Idioma do Usuário logado

String

WKSubject

Assunto do documento

String

### BeforeDocumentRemovePermanently

Este evento é executado antes do documento ser excluído permanentemente

**Exemplo:**

```
function beforeDocumentRemovePermanently() {

    //Exemplo implementação

       var doc = getValue("WKDocument");
        var user = getValue("WKUser");
        var company = getValue("WKCompany");

        log.info("Usuário Logado: " + user);
        log.info("Empresa: " + company);

        log.info("Número do documento: " + doc.getDocumentId() + " - Versão: "
                + doc.getVersion());
}
```



São disponibilizadas algumas propriedades referentes ao documento que está sendo excluído permanentemente, porém somente para consulta através do método *getValue*.

Propriedade

Descrição

Tipo

WKUser

Código do usuário

String

WKCompany

Número da empresa

int

WKDocument

Objeto do Documento

[DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)

WKUserLocale

Idioma do Usuário logado

String

### **AfterDocumentRemovePermanently**

Este evento é executado logo após o documento ser excluído permanentemente.

**Exemplo:**

```
function afterDocumentRemovePermanently() {

    //Exemplo implementação

       var doc = getValue("WKDocument");
       var user = getValue("WKUser");
        var company = getValue("WKCompany");

        log.info("Usuário Logado: " + user);
        log.info("Empresa: " + company);

        log.info("Número do documento: " + doc.getDocumentId() + " - Versão: "
                + doc.getVersion());
}
```



São disponibilizadas algumas propriedades referentes ao documento que foi excluído permanentemente, porém somente para consulta através do método *getValue*.

Propriedade

Descrição

Tipo

WKUser

Código do usuário

String

WKCompany

Número da empresa

int

WKDocument

Objeto do Documento

[DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)

WKUserLocale

Idioma do Usuário logado

String



### BeforeDocumentViewer

Este evento é utilizado quando é preciso fazer validação customizada antes da visualização de algum documento.

**Exemplo:**

```
function beforeDocumentViewer (){
}
```


São disponibilizadas algumas propriedades referentes ao documento que está sendo visualizado, porém somente para consulta através do método *getValue*.

Propriedade

Descrição

Tipo

WKDocument

Objeto do Documento

[DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)

WKUser

Usuário logado

String

WKCompany

Código da Empresa

int



**Exemplo:**

```
function beforeDocumentViewer(){


                var doc = getValue("WKDocument");
                var company = getValue("WKCompany");
                var ds

                try {
                               var c1 = DatasetFactory.createConstraint(                                                                                                                                                                                                                                                    "allocatedDocumentPK.companyId", company, company, ConstraintType.MUST);
                               var c2 = DatasetFactory.createConstraint( "allocatedDocumentPK.sourceDocument", doc.getDocumentId(), doc.getDocumentId(), ConstraintType.MUST);
                               var c3 = DatasetFactory.createConstraint( "allocatedDocumentPK.sourceVersion", doc.getVersion(), doc.getVersion(), ConstraintType.MUST);
                               var c4 = DatasetFactory.createConstraint("active", "true","true", ConstraintType.MUST);
                                var constraints = new Array(c1, c2, c3, c4);
                               ds = DatasetFactory.getDataset("allocatedDocument", null, constraints, null);


                }catch (e) {
                               log.error("Erro ao tentar recuperar o documento em check-out: " + e.message);
                }


                if(ds!=null && ds.rowsCount>0){
                               throw  "Este documento está em check-out e não pode ser visualizado. Foi gerado o documento " + ds.getValue(0,"allocatedDocumentPK.destinationDocument") + " que está sob responsabilidade do usuário com matrícula "+ ds.getValue(0,"colleagueId");
                }
}
```

Veja o exemplo (**event-document-expiration-date-validation**) no [repositorio do TOTVS Fluig Plataforma](https://git.fluig.com/projects/SAMPLES) clicando [aqui](https://git.fluig.com/projects/SAMPLES/repos/projetos/browse/event-document-expiration-date-validation).



### **BeforeDownloadContent**

Este evento é utilizado quando é preciso fazer validação customizada antes do download de algum documento.

**Exemplo:**

```
function beforeDownloadContent (documentId){
}
```



São disponibilizadas algumas propriedades referentes ao documento que está sendo visualizado, porém somente para consulta através do método *getValue*.

Propriedade

Descrição

Tipo

WKDocument

Objeto do Documento

[DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)

WKSubject

Descrição do Assunto do documento

String

WKUserLocale

Idioma do Usuário logado

String

WKUser

Usuário logado

String

WKCompany

Código da Empresa

int



**Exemplo:**

```
function beforeDownloadContent(documentId) {
    var companyId = getValue("WKCompany");
    var c1 = DatasetFactory.createConstraint( "documentPK.documentId", documentId, documentId, ConstraintType.MUST);
    var c2 = DatasetFactory.createConstraint( "documentPK.companyId", companyId, companyId, ConstraintType.MUST);
    var constraints = new Array(c1, c2);
    var ds = DatasetFactory.getDataset("document", null, constraints, null);
    if (ds != null && ds.rowsCount > 0) {
        var parent = ds.getValue(0, "parentDocumentId");
        if (parent == 43) {
            throw "Download não permitido!";
        }
    }
}
```



### AfterSaveCard

Este evento é utilizado quando ao criar/salvar os dados de um registro de formulário pela Navegação de Documentos ou por movimentações *Workflow* se deseja salvar os dados do registro de formulário de uma forma externa. Por exemplo, ao criar um registro de formulário, enviar os dados do mesmo para um *Webservice* de outro produto.

**Exemplo:**

```
function afterSaveCard(companyId, formId, cardId, versionId, cardData){
}
```



Sendo os parâmetros:

Propriedade

Descrição

Tipo

companyId

Código da Empresa

int

formId

Código do Formulário

int

cardId

Código do Registro de Formulário

int

versionId

Versão do Registro de Formulário

int

cardData 

Dados do Registro de Formulário

Hashmap <String, String>



**Exemplo:**

```
function afterSaveCard(companyId, formId, cardId, versionId, cardData){
    var custom = ServiceManager.getService("CustomCard");
    var serviceHelper = custom.getBean();
    var serviceLocator = serviceHelper.instantiate("com.totvs.technology.webdesk.forms.service.custom.CustomCardServiceLocator");
    var service = serviceLocator.getCustomCardPort();

    var ar = new Array();
    var it = cardData.keySet().iterator();
    while (it.hasNext()) {
        var key = it.next();
        var field1 = serviceHelper.instantiate("com.totvs.technology.webdesk.forms.service.custom.CardKeyValue");

        field1.setKey(key);
            field1.setValue( cardData.get(key));
        log.info('>' + key + ': ' + cardData.get(key));

        ar.push(field1);
    }

    var resultArr = serviceHelper.instantiate("com.totvs.technology.webdesk.forms.service.custom.CardKeyValueArray");
    resultArr.setItem(ar);
    service.create(companyId, formId, cardId, versionId, resultArr);
}
```



### AfterDeleteCard

Este evento é utilizado como complemento do evento *afterSaveCard*. É chamado toda vez que um formulário ou um registro de formulário é eliminado da lixeira.

**Exemplo:**

```
function afterSaveCard(companyId, formId, cardId, versionId, cardData){
}
```



Sendo os parâmetros: 

Propriedade

Descrição

Tipo

companyId

Código da Empresa

int

cardId

Código do Registro de Formulário

int



**Exemplo:**

```
function afterDeleteCard(companyId,cardId){
    var custom = ServiceManager.getService("CustomCard");
    var serviceHelper = custom.getBean();

    var serviceLocator = serviceHelper.instantiate("com.totvs.technology.webdesk.forms.service.custom.CustomCardServiceLocator");

    var service = serviceLocator.getCustomCardPort();

    log.info("########## carregou serviço CustomCard");
    service.deleteCard(companyId, cardId);
}
```

### onApplyDocumentPrintProperties

Este evento é chamado ao realizar a impressão de documentos que utilizam variáveis de cópia controlada. Onde será possível alterar ou obter o valor das variáveis disponibilizadas para este evento que podem ser consultadas em [Impressão de Cópia controlada](https://tdn.totvs.com/x/F5MbCQ). 

É necessário que a opção **Atualiza propriedades de cópia controlada?** esteja habilitada nas propriedades do documento.



**Exemplo:**

```
function onApplyDocumentPrintProperties(fields) {
    // Exemplo implementação
      log.info(fields.get("Document.PrintedDocument.Copies"));//consultando o valor da variável
      fields.put("Document.PrintedDocument.Copies", "2");//alterando o valor da variável
}
```



São disponibilizados os seguintes parâmetros de consulta:

Parâmetro

Descrição

WKUser

Usuário logado

WKUserLocale

Local do usuário

WKCompany 

Id do tenant atual

WKNumAcess 

Número de acessos ao documento

WKComments

Comentários do documento

WKAuthor

Autor do documento

WKCreateDate 

Data de criação do documento

WKDescription

Descrição do documento

WKNumDocument

Número do documento

WKNumParentDocument

Número do documento pai

WKNumVersion

Numero da versão 

WKDocumentType

Tipo do documento

WKExpirationDate

Data de expiração do documento

WKExpires

Se documento expira ou não

WKFileSize

Tamanho do documento

WKKeyWord 

Palavras chave do documento

WKDocumentTypeId 

Id do tipo do documento

WKPrivateDocument 

Indica se é documento privado

WKSubject 

Assunto do documento

WKVolume

Id do volume do documento

Propriedades que são atualizadas quando o documento é **visualizado**:

Variável

Descrição

Formato

Document.LevelN.ApproverM\*

\---



Document.Author

Autor do documento

Matricula - Nome do autor

Document.Comments

Comentários do documento

Texto

Document.ID

Código do documento

Número

Document.FirstVersionDate

Data da primeira versão 

DD/MM/YYYY

Document.LastUpdateDate

Data da última atualização 

DD/MM/YYYY

Document.CreationDate

Data de criação do documento 

DD/MM/YYYY

Document.ExpiresOn

Data de expiração do documento 

DD/MM/YYYY

Document.ApprovedOn

Data que o documento foi aprovado

DD/MM/YYYY

Document.VersionDescription

Descrição da Versão/Revisão

Texto

Document.Description

Descrição do documento 

Texto

Document.Active

Documento ativo

true ou false

Document.Author.ID

Matricula do autor do documento

número

Document.Publisher.ID

Matricula do publicador do documento

Número

Document.Author.Name 

Nome do autor do documento

Texto

Document.Publisher.Name 

Nome do publicador do documento

Texto

Document.Approvers1

Primeiro aprovador do nível 1

Nome do aprovador

Document.Publisher

Publicador do documento

Matricula - Nome do publicador

Document.Revision

Revisão do documento

Número da Revisão

Document.ApproversN

Segundo aprovador do nível 1

Nome do aprovador

Document.Tag

Tags do documento

Texto

Document.Version

Versão do documento

Versão,Revisão



### onApplyDocumentProtocolProperties

Este evento é chamado ao realizar a impressão com documento de protocolo. Onde será possível alterar ou obter o valor das variáveis disponibilizadas para este evento que podem ser consultadas em [Impressão de Cópia controlada](https://tdn.totvs.com/x/F5MbCQ).



**Exemplo:**

```
function onApplyDocumentProtocolProperties(fields) {
    // Exemplo implementação
    log.info(fields.get("Document.PrintedDocument.Description"));//consultando o valor da variável
    fields.put("Document.PrintedDocument.Description", "Descrição do documento");//alterando o valor da variável
}
```


São disponibilizados os seguintes parâmetros de consulta:

Parâmetro

Descrição

WKUser

Usuário logado

WKUserLocale

Local do usuário

WKCompany 

Id do tenant atual

WKNumAcess 

Número de acessos ao documento

WKComments

Comentários do documento

WKAuthor

Autor do documento

WKCreateDate 

Data de criação do documento

WKDescription

Descrição do documento

WKNumDocument

Número do documento

WKNumParentDocument

Número do documento pai

WKNumVersion

Numero da versão 

WKDocumentType

Tipo do documento

WKExpirationDate

Data de expiração do documento

WKExpires

Se documento expira ou não

WKFileSize

Tamanho do documento

WKKeyWord 

Palavras chave do documento

WKDocumentTypeId 

Id do tipo do documento

WKPrivateDocument 

Indica se é documento privado

WKSubject 

Assunto do documento

WKVolume

Id do volume do documento



Propriedades que são atualizadas quando o documento **protocolo** é **impresso:**

Variável

Descrição

Document.PrintDate

Data da impressão 

Document.PrintRequester

Requisitante/Solicitante 

Document.PrintedDocument.AreaResponsible

Responsável pela área 

Document.PrintedDocument.Description 

Descrição do documento

Document.PrintedDocument.Comments 

Comentários do documento

Document.PrintedDocument.VersionDescription 

Descrição da Versão/Revisão

Document.PrintedDocument.Tag

Tags do documento

Document.DocumentNrDocumento 

Número do documento

Document.PrintedDocument.Version 

Versão do documento 

Document.PrintedDocument.Revision

Revisão do documento

Document.DestinationArea

Área 

Document.PrintedDocument.Publisher

Publicador do documento

Document.PrintedDocument.VersionDescription1

Descrição da versão do documento

Document.PrintedDocument.VersionDescription2 

Continuação da descrição da versão do documento

Document.PrintedDocument.VersionDescription3

Continuação da descrição da versão do documento

### onApplyDocumentPublishProperties

Este evento é chamado na publicação ou alteração de documentos. Onde será possível alterar ou obter o valor das variáveis disponibilizadas para este evento que podem ser consultadas em [Impressão de Cópia controlada](https://tdn.totvs.com/x/F5MbCQ).

**Exemplo:**

```
function onApplyDocumentPublishProperties(fields) {
    // Exemplo implementação
   log.info(fields.get("Document.Author "));//consultando o valor da variável
   fields.put("Document.Author", "Autor do Documento");//alterando o valor da variável
}
```



São disponibilizados os seguintes parâmetros de consulta:

Parâmetro

Descrição

WKUser

Usuário logado

WKUserLocale

Local do usuário

WKCompany 

Id do tenant atual

WKNumAcess 

Número de acessos ao documento

WKComments

Comentários do documento

WKAuthor

Autor do documento

WKCreateDate 

Data de criação do documento

WKDescription

Descrição do documento

WKNumDocument

Número do documento

WKNumParentDocument

Número do documento pai

WKNumVersion

Numero da versão 

WKDocumentType

Tipo do documento

WKExpirationDate

Data de expiração do documento

WKExpires

Se documento expira ou não

WKFileSize

Tamanho do documento

WKKeyWord 

Palavras chave do documento

WKDocumentTypeId 

Id do tipo do documento

WKPrivateDocument 

Indica se é documento privado

WKSubject 

Assunto do documento

WKVolume

Id do volume do documento



Propriedades que são atualizadas quando o documento é **visualizado**:

Variável

Descrição

Formato

Document.LevelN.ApproverM\*

\---



Document.Author

Autor do documento

Matricula - Nome do autor

Document.Comments

Comentários do documento

Texto

Document.ID

Código do documento

Número

Document.FirstVersionDate

Data da primeira versão 

DD/MM/YYYY

Document.LastUpdateDate

Data da última atualização 

DD/MM/YYYY

Document.CreationDate

Data de criação do documento 

DD/MM/YYYY

Document.ExpiresOn

Data de expiração do documento 

DD/MM/YYYY

Document.ApprovedOn

Data que o documento foi aprovado

DD/MM/YYYY

Document.VersionDescription

Descrição da Versão/Revisão

Texto

Document.Description

Descrição do documento 

Texto

Document.Active

Documento ativo

true ou false

Document.Author.ID

Matricula do autor do documento

número

Document.Publisher.ID

Matricula do publicador do documento

Número

Document.Author.Name 

Nome do autor do documento

Texto

Document.Publisher.Name 

Nome do publicador do documento

Texto

Document.Approvers1

Primeiro aprovador do nível 1

Nome do aprovador

Document.Publisher

Publicador do documento

Matricula - Nome do publicador

Document.Revision

Revisão do documento

Número da Revisão

Document.ApproversN

Segundo aprovador do nível 1

Nome do aprovador

Document.Tag

Tags do documento

Texto

Document.Version

Versão do documento

Versão,Revisão



# Desenvolvimento de Eventos JMS

* * *

O TOTVS Fluig Plataforma suporta o desenvolvimento de eventos JMS, permitindo criar procedimentos de auditoria com base nas informações fornecidas pelo produto. O JMS (Java Message Service) é uma API Java™ que provê uma conexão assíncrona entre aplicações por meio de troca de mensagens.

O produto dispara um tipo de mensagem JMS personalizável, o **wdkDocument**. O **wdkDocument** será acionado quando houver manipulação nos documentos da plataforma.

Para a aplicação receber a mensagem com as informações do documento, a classe tem que estender o *MessageListener* e ter a seguinte linha:

```
@MessageDriven(mappedName = "custom/DocumentListener", activationConfig = {
@ActivationConfigProperty(propertyName = "destinationType", propertyValue = "javax.jms.Topic"),
@ActivationConfigProperty(propertyName = "destination", propertyValue = "topic/wdkDocument")})
```



O objeto de retorno será um *MapMessage* que conterá os seguintes parâmetros:

-   **event (String):** Informa qual o tipo de evento que foi efetuado com o documento, conforme a tabela abaixo:

Evento

Descrição

PUBLISH

Um novo documento publicado

MODIFY

Documento é modificado

DELETE

Documento é excluído da base de dados

SENDRECYCLE

Documento é enviado para lixeira

DELETEFOLDER

Uma pasta é excluída da base de dados

EXTERNALCONVERTION

Documento com conversão customizada

CONVERTIONLONGTERM

Documento convertido para longo prazo

MOVE

Um ou mais documento ou pastas foram movidos de uma pasta para outra

RESTORERECYCLE

Restaura documentos e pastas da Lixeira

-   **companyId (Integer):** Código da empresa em que o documento foi manipulado.
-   **colleagueId (String):** Usuário que efetuou a ação.
-   **documentId (Integer):** Código do documento que sofreu a ação.
-   **version (Integer):** Número da versão do documento.
-   **lhasCreatedDocument (Boolean):** Informa se criou o documento.
-   **IhasIncreasedVersion (Boolean):** Informa se foi incrementada a versão.
-   **changedApproval (Boolean):** Informa se o aprovador foi modificado.
-   **documento (byte\[ \]):** Array de bytes com o documento e suas propriedades.
