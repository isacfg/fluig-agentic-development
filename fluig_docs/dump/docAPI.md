# docAPI

> **Fonte:** [https://tdn.totvs.com/display/fluig/docAPI](https://tdn.totvs.com/display/fluig/docAPI)

---

Para ter acesso a funções relacionadas a documentos é possível utilizar nos eventos a variável global **docAPI**. Os métodos disponíveis através da **docAPI** são:

Lembre-se

Utilizamos padrões de desenvolvimento de mercado portanto, ao utilizar os métodos e classes abaixo, atente-se às boas práticas de desenvolvimento JAVA.



Método

Especificação

copyDocumentToUploadArea(documentId, version)

Copia os arquivos físicos de um documento existente para a área de upload do usuário logado, onde:

-   documentId: id do documento a ser copiado;
-   version: versão do documento a ser copiado;

Retorno: Array de Strings contendo os nomes dos arquivos que foram disponibilizados na área de upload.

createDocument(document, attachments, securityConfig, approvers, relatedDocs)

Cria um novo documento no GED de acordo com os parâmetros informados, onde:

-   document: documento a ser criado;
-   attachments: lista de anexos do documento;
-   securityConfig: lista de configurações de segurança do documento;
-   approvers: lista de aprovadores do documento;
-   relatedDocs: lista de documentos relacionados ao documento;

Retorno: DocumentDto do documento criado.

Exemplo de utilização desta função em conjunto com a função copyDocumentToUploadArea:



```
function beforeStateEntry(sequenceId) {

    if (sequenceId == 5) {
        var attachments = hAPI.listAttachments();
        for ( var i = 0; i < attachments.size(); i++) {
            var docDto = attachments.get(i);

            if (docDto.getDocumentType() == "7") {

                docAPI.copyDocumentToUploadArea(docDto.getDocumentId(), docDto.getVersion());

                docDto.setDocumentId(0);
                // Criar uma pasta para armazenar os anexos como documentos, concedendo à mesma as permissões de segurança e aprovação necessárias

                docDto.setParentDocumentId(20);

                var attachArray = new java.util.ArrayList();
                var mainAttach = docAPI.newAttachment();
                mainAttach.setFileName(docDto.getPhisicalFile());
                mainAttach.setPrincipal(true);
                mainAttach.setAttach(false);
                attachArray.add(mainAttach);
                        // Adicionando aprovadores
               docDto.setActiveVersion(true);
               docDto.setColleagueId(getValue("WKUser")); // Informar o usuário logado.
               docDto.setPublisherId(getValue("WKUser")); // Informar o publicador.

              var aprovador = docAPI.newApproverDto();
              aprovador.setCompanyId(getValue("WKCompany"));
              aprovador.setColleagueId(getValue("WKUser")); // Informar o aprovador
              aprovador.setDocumentId(documentoId);
              aprovador.setVersion(1); // Versão do documento
              aprovador.setLevelId(1); // Nível de aprovação
              aprovador.setApproverType(0); //Tipo de aprovadores (0 = Colaboradores, 1 = Grupo)
              var aprovadoresArray = new java.util.ArrayList();
              aprovadoresArray.add(aprovador);


                try {
                    var doc = docAPI.createDocument(docDto, attachArray, null, aprovadoresArray,null);
                    log.info("DOCUMENTO CRIADO COM O ID: " + doc.getDocumentId());
                } catch (e) {
                    log.error("Problemas na criação do documento:\n" + e);
                }
            }
        }
    }
}
```

createFolder(document, securityConfig, approvers)

Cria uma nova pasta no GED de acordo com os parâmetros informados, onde:

-   document: pasta a ser criada;
-   securityConfig: lista de configurações de segurança da pasta;
-   approvers: lista de aprovadores da pasta;

Retorno: DocumentDto da pasta criada.

Exemplo de utilização desta função:



```
function afterProcessFinish(processId) {
    try {
        var dto = docAPI.newDocumentDto();
        dto.setDocumentDescription("Planilhas");
        dto.setDocumentType("1");
        dto.setParentDocumentId(20);
        dto.setDocumentTypeId("");

        var folder = docAPI.createFolder(dto, null, null);
        log.info("PASTA CRIADA COM O ID :" + folder.getDocumentId());
    } catch (e) {
        log.error("Problemas na criação da pasta:\n" + e);
    }
}
```

O parâmetro publisherId do objeto [DocumentDTO](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto) não será considerado quando a publicação for realizada via *script* em um evento de processo. Esse parâmetro só pode ser definido na criação do objeto via [WebService](https://tdn.totvs.com/pages/viewpage.action?pageId=73084007).

Confira um exemplo de como criar pastas definindo sua segurança por grupos e usuários [clicando aqui](https://git.fluig.com/projects/SAMPLES/repos/projetos/browse/create-advanced-folder).

getDocumentVersion(documentId, version)

Retorna o DocumentDto de um documento com base no seu id e sua versão, onde:

-   documentId: id do documento a ser retornado;
-   version: versão do documento a ser retornado;

getUserPermissions(documentId, version)

Retorna o nível de permissão do usuário logado no documento informado, onde:

-   documentId: id do documento;
-   version: versão do documento;

isUserInGroup(group)

Retorna se o usuário logado faz parte do grupo informado, onde:

-   group: código do grupo a ser verificado;

newAttachment()

Retorna uma nova instância de Attachment.

newRelatedDocumentDto()

Retorna uma nova instância de RelatedDocumentDto.

newDocumentSecurityConfigDto()

Retorna uma nova instancia de DocumentSecurityConfigDto.

newApproverDto()

Retorna uma nova instância de ApproverDto.

newDocumentDto()

Retorna uma nova instância de DocumentDto, com o tipo 2 (Documento) como padrão.

Veja o exempo (**create-advanced-folder**) em nosso repositório **[aqui](https://git.fluig.com/projects/SAMPLES/repos/projetos/browse/create-advanced-folder)**.
