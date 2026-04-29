# Serialized Form

> **Fonte:** [https://api.fluig.com/old/sdk/serialized-form.html](https://api.fluig.com/old/sdk/serialized-form.html)

---

# Serialized Form

-   ## Package com.fluig.sdk.api

    -   ### Class [com.fluig.sdk.api.FluigAPI](https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigAPI.html "class in com.fluig.sdk.api") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

    -   ### Class [com.fluig.sdk.api.FluigMessage](https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigMessage.html "class in com.fluig.sdk.api") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### detail

                ```
                String detail
                ```

                Informações detalhadas da mensagem.

            -   #### errorCode

                ```
                String errorCode
                ```

                Nome da classe de exceção.

            -   #### message

                ```
                String message
                ```

                Mensagem principal.

            -   #### type

                ```
                FluigMessageType type
                ```

                Tipo da mensagem.


-   ## Package com.fluig.sdk.api.alert

    -   ### Class [com.fluig.sdk.api.alert.AlertActionVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/alert/AlertActionVO.html "class in com.fluig.sdk.api.alert") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        \-1L

        -   ### Serialized Fields

            -   #### actionKey

                ```
                String actionKey
                ```

            -   #### actionType

                ```
                String actionType
                ```

            -   #### description

                ```
                String description
                ```

            -   #### descriptionAfterExec

                ```
                String descriptionAfterExec
                ```

            -   #### executed

                ```
                Boolean executed
                ```

            -   #### httpMethod

                ```
                String httpMethod
                ```

            -   #### id

                ```
                Long id
                ```

            -   #### type

                ```
                String type
                ```

            -   #### url

                ```
                String url
                ```

    -   ### Class [com.fluig.sdk.api.alert.AlertConfigVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/alert/AlertConfigVO.html "class in com.fluig.sdk.api.alert") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### applicationKey

                ```
                String applicationKey
                ```

            -   #### eventKey

                ```
                String eventKey
                ```

            -   #### login

                ```
                String login
                ```

            -   #### wantReceive

                ```
                String wantReceive
                ```

    -   ### Class [com.fluig.sdk.api.alert.AlertEventVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/alert/AlertEventVO.html "class in com.fluig.sdk.api.alert") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        \-1L

        -   ### Serialized Fields

            -   #### active

                ```
                Boolean active
                ```

            -   #### canRemove

                ```
                Boolean canRemove
                ```

            -   #### description

                ```
                String description
                ```

            -   #### descriptionKey

                ```
                String descriptionKey
                ```

            -   #### eventKey

                ```
                String eventKey
                ```

            -   #### groupDescription

                ```
                String groupDescription
                ```

            -   #### groupDescriptionKey

                ```
                String groupDescriptionKey
                ```

            -   #### grouped

                ```
                Boolean grouped
                ```

            -   #### icon

                ```
                String icon
                ```

            -   #### id

                ```
                Long id
                ```

            -   #### module

                ```
                AlertModuleVO module
                ```

            -   #### onlyAdmin

                ```
                Boolean onlyAdmin
                ```

            -   #### required

                ```
                Boolean required
                ```

            -   #### singleDescription

                ```
                String singleDescription
                ```

            -   #### singleDescriptionKey

                ```
                String singleDescriptionKey
                ```

    -   ### Class [com.fluig.sdk.api.alert.AlertModuleVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/alert/AlertModuleVO.html "class in com.fluig.sdk.api.alert") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        \-1L

        -   ### Serialized Fields

            -   #### description

                ```
                String description
                ```

            -   #### id

                ```
                Long id
                ```

            -   #### moduleKey

                ```
                String moduleKey
                ```

            -   #### tenantId

                ```
                Long tenantId
                ```

    -   ### Class [com.fluig.sdk.api.alert.AlertObjectVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/alert/AlertObjectVO.html "class in com.fluig.sdk.api.alert") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        \-1L

        -   ### Serialized Fields

            -   #### description

                ```
                String description
                ```

            -   #### id

                ```
                Long id
                ```

            -   #### link

                ```
                String link
                ```

            -   #### note

                ```
                String note
                ```

            -   #### objectClass

                ```
                String objectClass
                ```

            -   #### objectDetail

                ```
                String objectDetail
                ```

            -   #### objectDetailKey

                ```
                String objectDetailKey
                ```

            -   #### objectId

                ```
                Long objectId
                ```

            -   #### typeDescription

                ```
                String typeDescription
                ```

            -   #### typeDescriptionKey

                ```
                String typeDescriptionKey
                ```

    -   ### Class [com.fluig.sdk.api.alert.AlertSenderVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/alert/AlertSenderVO.html "class in com.fluig.sdk.api.alert") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        \-1L

        -   ### Serialized Fields

            -   #### creationDate

                ```
                Date creationDate
                ```

            -   #### id

                ```
                Long id
                ```

            -   #### user

                ```
                AlertUserVO user
                ```

            -   #### via

                ```
                String via
                ```

    -   ### Class [com.fluig.sdk.api.alert.AlertUserVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/alert/AlertUserVO.html "class in com.fluig.sdk.api.alert") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        \-1L

        -   ### Serialized Fields

            -   #### fullName

                ```
                String fullName
                ```

            -   #### id

                ```
                Long id
                ```

            -   #### lastUpdateDate

                ```
                Date lastUpdateDate
                ```

            -   #### login

                ```
                String login
                ```

            -   #### tenantId

                ```
                Long tenantId
                ```

    -   ### Class [com.fluig.sdk.api.alert.AlertVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/alert/AlertVO.html "class in com.fluig.sdk.api.alert") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        \-1L

        -   ### Serialized Fields

            -   #### actions

                ```
                List<AlertActionVO> actions
                ```

            -   #### canRemove

                ```
                Boolean canRemove
                ```

            -   #### creationDate

                ```
                Date creationDate
                ```

            -   #### creationDateTime

                ```
                Long creationDateTime
                ```

            -   #### currentDate

                ```
                Date currentDate
                ```

            -   #### event

                ```
                AlertEventVO event
                ```

            -   #### id

                ```
                Long id
                ```

            -   #### object

                ```
                AlertObjectVO object
                ```

            -   #### place

                ```
                AlertObjectVO place
                ```

            -   #### priority

                ```
                String priority
                ```

            -   #### read

                ```
                Boolean read
                ```

            -   #### receiver

                ```
                AlertUserVO receiver
                ```

            -   #### senders

                ```
                List<AlertSenderVO> senders
                ```


-   ## Package com.fluig.sdk.api.authorizeclient

    -   ### Class [com.fluig.sdk.api.authorizeclient.AuthorizeClientSdkServiceVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/authorizeclient/AuthorizeClientSdkServiceVO.html "class in com.fluig.sdk.api.authorizeclient") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### companyId

                ```
                Long companyId
                ```

            -   #### description

                ```
                String description
                ```

            -   #### endpoint

                ```
                String endpoint
                ```

            -   #### headers

                ```
                Map<String,​String> headers
                ```

            -   #### httpStatusResult

                ```
                int httpStatusResult
                ```

            -   #### method

                ```
                String method
                ```

            -   #### options

                ```
                Map<String,​Object> options
                ```

            -   #### params

                ```
                Map<String,​Object> params
                ```

            -   #### result

                ```
                String result
                ```

            -   #### serviceCode

                ```
                String serviceCode
                ```

            -   #### strParams

                ```
                String strParams
                ```

            -   #### timeoutService

                ```
                String timeoutService
                ```


-   ## Package com.fluig.sdk.api.cardindex

    -   ### Class [com.fluig.sdk.api.cardindex.AttachmentVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/cardindex/AttachmentVO.html "class in com.fluig.sdk.api.cardindex") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### attach

                ```
                Boolean attach
                ```

                É anexo?

            -   #### descriptor

                ```
                Boolean descriptor
                ```

                É o arquivo descritor?

            -   #### editing

                ```
                Boolean editing
                ```

            -   #### filecontent

                ```
                byte[] filecontent
                ```

            -   #### fileName

                ```
                String fileName
                ```

                Nome do arquivo

            -   #### fileSelected

                ```
                AttachmentVO fileSelected
                ```

                Arquivos do fichario

            -   #### fileSize

                ```
                long fileSize
                ```

                Tamanho total do arquivo

            -   #### fullPatch

                ```
                String fullPatch
                ```

                Caminho relativo do arquivo

            -   #### iconPath

                ```
                String iconPath
                ```

                Caminho do ícone

            -   #### mobile

                ```
                Boolean mobile
                ```

            -   #### pathName

                ```
                String pathName
                ```

                Caminho do Arquivo

            -   #### principal

                ```
                Boolean principal
                ```

                É o principal?

    -   ### Class [com.fluig.sdk.api.cardindex.CardChildrenVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/cardindex/CardChildrenVO.html "class in com.fluig.sdk.api.cardindex") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### values

                ```
                List<CardFieldVO> values
                ```

    -   ### Class [com.fluig.sdk.api.cardindex.CardFieldFilterVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/cardindex/CardFieldFilterVO.html "class in com.fluig.sdk.api.cardindex") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### finalValue

                ```
                Object finalValue
                ```

            -   #### htmlIdField

                ```
                String htmlIdField
                ```

            -   #### initialValue

                ```
                Object initialValue
                ```

            -   #### operator

                ```
                String operator
                ```

            -   #### optionField

                ```
                String optionField
                ```

            -   #### useLike

                ```
                boolean useLike
                ```

    -   ### Class [com.fluig.sdk.api.cardindex.CardFieldVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/cardindex/CardFieldVO.html "class in com.fluig.sdk.api.cardindex") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### fieldId

                ```
                String fieldId
                ```

            -   #### tableId

                ```
                String tableId
                ```

            -   #### value

                ```
                String value
                ```

    -   ### Class [com.fluig.sdk.api.cardindex.CardFindFieldVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/cardindex/CardFindFieldVO.html "class in com.fluig.sdk.api.cardindex") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### activeVersion

                ```
                boolean activeVersion
                ```

            -   #### cardId

                ```
                Integer cardId
                ```

            -   #### children

                ```
                List<CardChildrenVO> children
                ```

            -   #### companyId

                ```
                long companyId
                ```

            -   #### parentDocumentId

                ```
                Integer parentDocumentId
                ```

            -   #### values

                ```
                List<CardFieldVO> values
                ```

            -   #### version

                ```
                int version
                ```

    -   ### Class [com.fluig.sdk.api.cardindex.CardIndexFindAPIVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/cardindex/CardIndexFindAPIVO.html "class in com.fluig.sdk.api.cardindex") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### additionalComments

                ```
                String additionalComments
                ```

            -   #### attachments

                ```
                List<AttachmentVO> attachments
                ```

            -   #### cardDescription

                ```
                String cardDescription
                ```

            -   #### colleagueId

                ```
                String colleagueId
                ```

            -   #### companyId

                ```
                long companyId
                ```

            -   #### createDate

                ```
                Date createDate
                ```

            -   #### createDateInMilliseconds

                ```
                long createDateInMilliseconds
                ```

            -   #### datasetName

                ```
                String datasetName
                ```

            -   #### documentDescription

                ```
                String documentDescription
                ```

            -   #### documentId

                ```
                Integer documentId
                ```

            -   #### documentPropertyNumber

                ```
                Integer documentPropertyNumber
                ```

            -   #### documentPropertyVersion

                ```
                Integer documentPropertyVersion
                ```

            -   #### documentTypeId

                ```
                String documentTypeId
                ```

            -   #### lastModifiedDate

                ```
                Date lastModifiedDate
                ```

            -   #### parentDocumentId

                ```
                Integer parentDocumentId
                ```

            -   #### phisicalFile

                ```
                String phisicalFile
                ```

            -   #### phisicalFileSize

                ```
                Float phisicalFileSize
                ```

            -   #### publisherId

                ```
                String publisherId
                ```

            -   #### publisherName

                ```
                String publisherName
                ```

            -   #### version

                ```
                int version
                ```


-   ## Package com.fluig.sdk.api.customappkey

    -   ### Class [com.fluig.sdk.api.customappkey.KeyVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/customappkey/KeyVO.html "class in com.fluig.sdk.api.customappkey") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### consumerKey

                ```
                String consumerKey
                ```

            -   #### consumerSecret

                ```
                String consumerSecret
                ```

            -   #### domainUrl

                ```
                String domainUrl
                ```

            -   #### tenantId

                ```
                Long tenantId
                ```

            -   #### token

                ```
                String token
                ```

            -   #### tokenSecret

                ```
                String tokenSecret
                ```

            -   #### user

                ```
                String user
                ```


-   ## Package com.fluig.sdk.api.document

    -   ### Class [com.fluig.sdk.api.document.AllocatedDocumentVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/AllocatedDocumentVO.html "class in com.fluig.sdk.api.document") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### active

                ```
                Boolean active
                ```

            -   #### checkinDate

                ```
                Date checkinDate
                ```

            -   #### checkinTime

                ```
                String checkinTime
                ```

            -   #### checkoutAllowed

                ```
                Boolean checkoutAllowed
                ```

            -   #### checkoutDate

                ```
                Date checkoutDate
                ```

            -   #### checkoutTime

                ```
                String checkoutTime
                ```

            -   #### colleagueId

                ```
                String colleagueId
                ```

            -   #### colleagueName

                ```
                String colleagueName
                ```

            -   #### comment

                ```
                String comment
                ```

            -   #### companyId

                ```
                long companyId
                ```

            -   #### destinationDocument

                ```
                int destinationDocument
                ```

            -   #### sourceDocument

                ```
                int sourceDocument
                ```

            -   #### sourceVersion

                ```
                int sourceVersion
                ```

    -   ### Class [com.fluig.sdk.api.document.DocumentApprovementHistoryVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentApprovementHistoryVO.html "class in com.fluig.sdk.api.document") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### approvementDate

                ```
                Date approvementDate
                ```

            -   #### colleagueId

                ```
                String colleagueId
                ```

            -   #### colleagueName

                ```
                String colleagueName
                ```

            -   #### documentVersion

                ```
                int documentVersion
                ```

            -   #### iterationSequence

                ```
                int iterationSequence
                ```

            -   #### levelId

                ```
                int levelId
                ```

            -   #### movementSequence

                ```
                int movementSequence
                ```

            -   #### observation

                ```
                String observation
                ```

            -   #### signed

                ```
                boolean signed
                ```

            -   #### status

                ```
                int status
                ```

    -   ### Class [com.fluig.sdk.api.document.DocumentApproverVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentApproverVO.html "class in com.fluig.sdk.api.document") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### alias

                ```
                String alias
                ```

                Atributo String - alias

            -   #### approvalMode

                ```
                Integer approvalMode
                ```

                Atributo Integer - approvalMode

            -   #### approvalObservation

                ```
                String approvalObservation
                ```

                Atributo String - approvalObservation

            -   #### approvalStatus

                ```
                String approvalStatus
                ```

                Atributo String - approvalStatus

            -   #### approverType

                ```
                Integer approverType
                ```

                Atributo Integer - approverType

            -   #### colleagueId

                ```
                String colleagueId
                ```

                Atributo String - colleagueId

            -   #### companyId

                ```
                Long companyId
                ```

                Atributo Long - companyId

            -   #### digitalSignature

                ```
                Boolean digitalSignature
                ```

                Atributo Boolean - digitalSignature

            -   #### email

                ```
                String email
                ```

                Atributo String - email

            -   #### fullName

                ```
                String fullName
                ```

                Atributo String - fullname

            -   #### levelDescription

                ```
                String levelDescription
                ```

                Atributo String - levelDescription

            -   #### levelId

                ```
                Integer levelId
                ```

                Atributo Integer - levelId

    -   ### Class [com.fluig.sdk.api.document.DocumentPermissionVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentPermissionVO.html "class in com.fluig.sdk.api.document") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### attributionDescription

                ```
                String attributionDescription
                ```

                Atributo String - attributionDescription

            -   #### attributionType

                ```
                Integer attributionType
                ```

                Atributo Integer - attributionType

            -   #### attributionValue

                ```
                String attributionValue
                ```

                Atributo String - attributionValue

            -   #### downloadEnabled

                ```
                Boolean downloadEnabled
                ```

                Atributo Boolean - downloadEnabled

            -   #### inheritSecurity

                ```
                Boolean inheritSecurity
                ```

                Atributo Boolean - inheritSecurity

            -   #### securityLevel

                ```
                Integer securityLevel
                ```

                Atributo Integer - securityLevel

            -   #### securityVersion

                ```
                Boolean securityVersion
                ```

                Atributo Boolean - securityVersion

            -   #### showContent

                ```
                Boolean showContent
                ```

                Atributo Boolean - showContent

    -   ### Class [com.fluig.sdk.api.document.DocumentRestrictionVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentRestrictionVO.html "class in com.fluig.sdk.api.document") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### attributionDescription

                ```
                String attributionDescription
                ```

                Atributo String - attributionDescription

            -   #### attributionType

                ```
                Integer attributionType
                ```

                Atributo Integer - attributionType

            -   #### attributionValue

                ```
                String attributionValue
                ```

                Atributo String - attributionValue

            -   #### downloadEnabled

                ```
                Boolean downloadEnabled
                ```

                Atributo Boolean - downloadEnabled

            -   #### inheritSecurity

                ```
                Boolean inheritSecurity
                ```

                Atributo Boolean - inheritSecurity

            -   #### securityLevel

                ```
                Integer securityLevel
                ```

                Atributo Integer - securityLevel

            -   #### securityVersion

                ```
                Boolean securityVersion
                ```

                Atributo Boolean - securityVersion

            -   #### showContent

                ```
                Boolean showContent
                ```

                Atributo Boolean - showContent

    -   ### Class [com.fluig.sdk.api.document.DocumentSecurityConfigVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentSecurityConfigVO.html "class in com.fluig.sdk.api.document") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### attributionType

                ```
                Integer attributionType
                ```

            -   #### attributionValue

                ```
                String attributionValue
                ```

            -   #### companyId

                ```
                long companyId
                ```

            -   #### documentId

                ```
                int documentId
                ```

            -   #### downloadEnabled

                ```
                Boolean downloadEnabled
                ```

            -   #### permission

                ```
                Boolean permission
                ```

            -   #### securityLevel

                ```
                Integer securityLevel
                ```

            -   #### securityVersion

                ```
                Boolean securityVersion
                ```

            -   #### sequence

                ```
                int sequence
                ```

            -   #### showContent

                ```
                Boolean showContent
                ```

            -   #### version

                ```
                int version
                ```

    -   ### Class [com.fluig.sdk.api.document.DocumentSecurityVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentSecurityVO.html "class in com.fluig.sdk.api.document") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### documentApproverVO

                ```
                List<DocumentApproverVO> documentApproverVO
                ```

            -   #### documentPermissionVO

                ```
                List<DocumentPermissionVO> documentPermissionVO
                ```

            -   #### documentSecurityConfigVOs

                ```
                List<DocumentSecurityConfigVO> documentSecurityConfigVOs
                ```

    -   ### Class [com.fluig.sdk.api.document.DocumentTaskVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentTaskVO.html "class in com.fluig.sdk.api.document") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### approved

                ```
                int approved
                ```

            -   #### approvedString

                ```
                String approvedString
                ```

            -   #### colleagueName

                ```
                String colleagueName
                ```

            -   #### documentDescription

                ```
                String documentDescription
                ```

            -   #### documentId

                ```
                Integer documentId
                ```

            -   #### documentType

                ```
                String documentType
                ```

            -   #### isKnow

                ```
                boolean isKnow
                ```

            -   #### lastModifiedDate

                ```
                Date lastModifiedDate
                ```

            -   #### publisherName

                ```
                String publisherName
                ```

            -   #### version

                ```
                int version
                ```

    -   ### Class [com.fluig.sdk.api.document.DocumentVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html "class in com.fluig.sdk.api.document") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### accessCount

                ```
                Integer accessCount
                ```

                Atributo contador de acesso

            -   #### activeVersion

                ```
                Boolean activeVersion
                ```

                Atributo versão ativa

            -   #### allowMuiltiCardsPerUser

                ```
                Boolean allowMuiltiCardsPerUser
                ```

                Atributo se permite mult cards por usuário

            -   #### approvalAndOr

                ```
                Boolean approvalAndOr
                ```

                Atributo aprovação condicional (e,ou)

            -   #### approved

                ```
                Boolean approved
                ```

                Atributo se documento está aprovado

            -   #### approvedDate

                ```
                Date approvedDate
                ```

                Atributo data de aprovação

            -   #### atualizationId

                ```
                Integer atualizationId
                ```

                Atributo id de atualização

            -   #### cardDescription

                ```
                String cardDescription
                ```

                Atributo descrição do card

            -   #### colleagueId

                ```
                String colleagueId
                ```

                Atributo id do colega

            -   #### crc

                ```
                Long crc
                ```

                Atributo crc

            -   #### createDate

                ```
                Date createDate
                ```

                Atributo data de criação

            -   #### deleted

                ```
                Boolean deleted
                ```

                Atributo, se documento foi deletado

            -   #### documentDescription

                ```
                String documentDescription
                ```

                Atributo descrição do documento

            -   #### documentId

                ```
                Integer documentId
                ```

                Atributo documentId

            -   #### documentPropertyNumber

                ```
                Integer documentPropertyNumber
                ```

                Atributo número de propriedade do documento

            -   #### documentPropertyVersion

                ```
                Integer documentPropertyVersion
                ```

                Atributo versão da propriedade do documento

            -   #### documentType

                ```
                String documentType
                ```

                Atributo tipo de documento

            -   #### documentTypeId

                ```
                String documentTypeId
                ```

                Atributo para id do tipo de documento

            -   #### downloadEnabled

                ```
                Boolean downloadEnabled
                ```

                Atributo download é permitido

            -   #### draft

                ```
                Boolean draft
                ```

                Atributo draft

            -   #### expirationDate

                ```
                Date expirationDate
                ```

                Atributo data de expiração

            -   #### expires

                ```
                Boolean expires
                ```

                Atributo se documento expira

            -   #### extData

                ```
                HashMap<String,​Object> extData
                ```

                Informações extras.

            -   #### externalDocumentId

                ```
                String externalDocumentId
                ```

                Atributo id do documento externo

            -   #### iconId

                ```
                Integer iconId
                ```

                Atributo id do icone

            -   #### iconPath

                ```
                String iconPath
                ```

                Icon path - icone correspondente ao tipo do arquivo

            -   #### imutable

                ```
                Boolean imutable
                ```

                Atributo, se documento é imultavel

            -   #### indexed

                ```
                Boolean indexed
                ```

                Atributo, se documento é indexado

            -   #### inheritSecurity

                ```
                Boolean inheritSecurity
                ```

                Informa se vai herdar as propriedades do parent

            -   #### internalVisualizer

                ```
                Boolean internalVisualizer
                ```

                Atributo, se documento pode ser visualizado internamente

            -   #### keyWord

                ```
                String keyWord
                ```

                Atributo palavra chave

            -   #### languageId

                ```
                String languageId
                ```

                Atributo id da linguagem

            -   #### lastModifiedDate

                ```
                Date lastModifiedDate
                ```

                Atributo última data de modificação

            -   #### lastModifiedTime

                ```
                String lastModifiedTime
                ```

                Atributo data última modificação

            -   #### onCheckout

                ```
                Boolean onCheckout
                ```

                Atributo, se documento está em checkout

            -   #### parentDocumentId

                ```
                Integer parentDocumentId
                ```

                Atributo id do documento pai

            -   #### permissionType

                ```
                Integer permissionType
                ```

                Atributo tipo de permissão

            -   #### phisicalFile

                ```
                String phisicalFile
                ```

                Atributo arquivo fisico

            -   #### phisicalFileSize

                ```
                Float phisicalFileSize
                ```

                Atributo tamanho do arquivo físico

            -   #### priority

                ```
                Integer priority
                ```

                Atributo prioridade

            -   #### privateColleagueId

                ```
                String privateColleagueId
                ```

                Atributo id colega privado

            -   #### privateDocument

                ```
                Boolean privateDocument
                ```

                Atributo se documento é privado

            -   #### publisherId

                ```
                String publisherId
                ```

                Atributo id do publicador

            -   #### relatedFiles

                ```
                String relatedFiles
                ```

                Atributo arquivos relacionados

            -   #### restrictionType

                ```
                Integer restrictionType
                ```

                Atributo tipo de restrição

            -   #### siteCode

                ```
                String siteCode
                ```

                Atributo código do site

            -   #### tenantId

                ```
                Long tenantId
                ```

                Atributo tenantId

            -   #### topicId

                ```
                Integer topicId
                ```

                Atributo id do topico

            -   #### translated

                ```
                Boolean translated
                ```

                Atributo, se documento é traduzido

            -   #### updateIsoProperties

                ```
                Boolean updateIsoProperties
                ```

                Atributo, se propriedades ISO são atualizadas

            -   #### uploadId

                ```
                String uploadId
                ```

                Identificardo do upload realizado

            -   #### userNotify

                ```
                Boolean userNotify
                ```

                Atributo, se usuário é notificado

            -   #### UUID

                ```
                String UUID
                ```

                Atributo UUID

            -   #### validationStartDate

                ```
                Date validationStartDate
                ```

                Atributo data de início de validação

            -   #### version

                ```
                Integer version
                ```

                Atributo version

            -   #### versionAction

                ```
                String versionAction
                ```

                A atributo corresponde ao tipo de ação que será realizada na versão do document ao ser atualizado - valores possíveis "NEW\_VERSION", "NEW\_REVISION" ou "KEEP\_VERSION"

            -   #### versionDescription

                ```
                String versionDescription
                ```

                Atributo descrição da versão

            -   #### visualization

                ```
                String visualization
                ```

                Atributoi visualização

            -   #### volumeId

                ```
                String volumeId
                ```

                Atributo id do volume

            -   #### watermarkId

                ```
                Integer watermarkId
                ```

                Atributo id de marca d'água

    -   ### Class [com.fluig.sdk.api.document.FolderVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/FolderVO.html "class in com.fluig.sdk.api.document") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### additionalComments

                ```
                String additionalComments
                ```

                Atributo comentário adicional

            -   #### approvalAndOr

                ```
                Boolean approvalAndOr
                ```

                Atributo aprovação (e,ou)

            -   #### colleagueId

                ```
                String colleagueId
                ```

                Atributo id colleague

            -   #### createDate

                ```
                Date createDate
                ```

                Atributo data de criação

            -   #### documentDescription

                ```
                String documentDescription
                ```

                Atributo descrição do documento

            -   #### documentId

                ```
                Integer documentId
                ```

                Atributo id do documento

            -   #### documentTypeId

                ```
                String documentTypeId
                ```

                Atributo id do tipo de documento

            -   #### documentTypes

                ```
                List<String> documentTypes
                ```

                Tipos de documentos Possíveis valores: 1 = Pasta 2 = Documento normal 3 = Documento externo 4 = Formulário 5 = Registro de formulário 7 = Anexo Workflow 8 = Novo Conteúdo 9 = Aplicativo 10 = Relatório

            -   #### downloadEnabled

                ```
                Boolean downloadEnabled
                ```

                Atributo download habilitado

            -   #### expires

                ```
                Boolean expires
                ```

                Atributo expiração

            -   #### filters

                ```
                Map<String,​Object> filters
                ```

                Filtros Possíveis chaves: documentDescription // Descrição do documento documentTypeId //Tipo do documento publisherId // Identificador do usuário que publicou o documento dtstartPublish // Data que valida o periodo de inicio do filtro de criação do documento dtstartPublish => dataDeCricao dtendPublish // Data que valida o periodo de final do filtro de criação do documento dtendPublish <= dataDeCricao dtendModify // Data de inicio dod filtro de alteração do documento dataDeAltearacao => dtendModify dtstartexpire // Data de inicio do filtro de expiração dtstartexpire <= dataExpiracao dtendexpire // Data final do filtro de expiração dtendexpire > dataExpiracao isExpires // Se documento esta expirado

            -   #### iconId

                ```
                Integer iconId
                ```

                Atributo id do icone

            -   #### imutable

                ```
                Boolean imutable
                ```

                Atributo imutavel

            -   #### inheritSecurity

                ```
                Boolean inheritSecurity
                ```

                Atributo segurança herdada

            -   #### internalVisualizer

                ```
                Boolean internalVisualizer
                ```

                Atributo visualizador interno

            -   #### keyWord

                ```
                String keyWord
                ```

                Atributo palavra chave

            -   #### notifyUser

                ```
                Boolean notifyUser
                ```

                Atributo notificar usuário

            -   #### parentFolderId

                ```
                Integer parentFolderId
                ```

                Atributo id pasta pai

            -   #### permissions

                ```
                List<DocumentPermissionVO> permissions
                ```

                Lista de permissões

            -   #### permissionType

                ```
                Integer permissionType
                ```

                Atributo tipo de permissão

            -   #### privateDocument

                ```
                Boolean privateDocument
                ```

                Atributo documento privado

            -   #### publisherApprovers

                ```
                List<DocumentApproverVO> publisherApprovers
                ```

                Lista de publicadores aprovadores

            -   #### publisherId

                ```
                String publisherId
                ```

                Atributo id do publicador

            -   #### restrictions

                ```
                List<DocumentRestrictionVO> restrictions
                ```

                Lista de restrições

            -   #### restrictionType

                ```
                Integer restrictionType
                ```

                Atributo tipo de restrição

            -   #### tenantId

                ```
                Long tenantId
                ```

                Atributo id do tenant

            -   #### topicId

                ```
                Integer topicId
                ```

                Atributo id do tópico

            -   #### updateIsoProperties

                ```
                Boolean updateIsoProperties
                ```

                Atributo atualiza propriedades ISO

            -   #### version

                ```
                Integer version
                ```

                Atributo versão

            -   #### versionDescription

                ```
                String versionDescription
                ```

                Atributo descrição da versão

            -   #### volumeId

                ```
                String volumeId
                ```

                Atributo volume id

    -   ### Class [com.fluig.sdk.api.document.RelatedDocumentVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/RelatedDocumentVO.html "class in com.fluig.sdk.api.document") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### documentId

                ```
                Integer documentId
                ```

                Atributo id do documento

            -   #### relatedDocumentId

                ```
                Integer relatedDocumentId
                ```

                Atributo id de documento relacionado

            -   #### tenantId

                ```
                Long tenantId
                ```

                Atributo id do tenant

            -   #### version

                ```
                Integer version
                ```

                Atributo versão

    -   ### Class [com.fluig.sdk.api.document.SolvedPermissionVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/SolvedPermissionVO.html "class in com.fluig.sdk.api.document") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### document

                ```
                DocumentVO document
                ```

            -   #### downloadEnabled

                ```
                boolean downloadEnabled
                ```

            -   #### securityLevel

                ```
                int securityLevel
                ```

            -   #### showContent

                ```
                boolean showContent
                ```


-   ## Package com.fluig.sdk.api.ecm

    -   ### Class [com.fluig.sdk.api.ecm.CollaborationAppVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/ecm/CollaborationAppVO.html "class in com.fluig.sdk.api.ecm") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### clientId

                ```
                String clientId
                ```

            -   #### clientSecret

                ```
                String clientSecret
                ```

            -   #### code

                ```
                String code
                ```

            -   #### enabled

                ```
                String enabled
                ```

            -   #### id

                ```
                Long id
                ```

            -   #### jndiName

                ```
                String jndiName
                ```

            -   #### name

                ```
                String name
                ```

            -   #### tenantId

                ```
                Long tenantId
                ```

    -   ### Class [com.fluig.sdk.api.ecm.CollaborationVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/ecm/CollaborationVO.html "class in com.fluig.sdk.api.ecm") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### collaborationId

                ```
                Long collaborationId
                ```

            -   #### documentId

                ```
                Integer documentId
                ```

            -   #### documentVersion

                ```
                Integer documentVersion
                ```

            -   #### endDate

                ```
                Date endDate
                ```

            -   #### guests

                ```
                List<String> guests
                ```

            -   #### oauthCode

                ```
                String oauthCode
                ```

            -   #### sourceDocumentId

                ```
                int sourceDocumentId
                ```

            -   #### sourceDocumentVersion

                ```
                int sourceDocumentVersion
                ```

            -   #### startDate

                ```
                Date startDate
                ```

            -   #### tenantId

                ```
                Long tenantId
                ```

            -   #### uploaderLogin

                ```
                String uploaderLogin
                ```


-   ## Package com.fluig.sdk.api.group

    -   ### Class [com.fluig.sdk.api.group.GroupVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/group/GroupVO.html "class in com.fluig.sdk.api.group") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### code

                ```
                String code
                ```

                Atributo código do grupo String - code

            -   #### description

                ```
                String description
                ```

                Atributo descrição do grupo String - description

            -   #### extData

                ```
                HashMap<String,​String> extData
                ```

                Informações extras.

            -   #### groupType

                ```
                String groupType
                ```

                Atributo tipo do grupo String - groupType

            -   #### id

                ```
                Long id
                ```

                Atributo id do grupo Long - id

            -   #### isInternal

                ```
                Boolean isInternal
                ```

                Atributo, se grupo é interno Boolean - isInternal


-   ## Package com.fluig.sdk.api.holiday

    -   ### Class [com.fluig.sdk.api.holiday.HolidayVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/holiday/HolidayVO.html "class in com.fluig.sdk.api.holiday") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### companyId

                ```
                long companyId
                ```

            -   #### date

                ```
                String date
                ```

            -   #### description

                ```
                String description
                ```

            -   #### expandables

                ```
                List<String> expandables
                ```

            -   #### id

                ```
                Long id
                ```

            -   #### locals

                ```
                List<LocalVO> locals
                ```

            -   #### recurrent

                ```
                boolean recurrent
                ```


-   ## Package com.fluig.sdk.api.job

    -   ### Class [com.fluig.sdk.api.job.JobVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/job/JobVO.html "class in com.fluig.sdk.api.job") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### companyId

                ```
                long companyId
                ```

            -   #### data

                ```
                Map<String,​String> data
                ```

            -   #### description

                ```
                String description
                ```

            -   #### executionHour

                ```
                int executionHour
                ```

            -   #### executionMinute

                ```
                int executionMinute
                ```

            -   #### interval

                ```
                int interval
                ```

            -   #### intervalDescriptions

                ```
                String intervalDescriptions
                ```

            -   #### intervalType

                ```
                JobVO.IntervalType intervalType
                ```

            -   #### jobId

                ```
                String jobId
                ```

            -   #### jobType

                ```
                int jobType
                ```

            -   #### lastExecution

                ```
                Date lastExecution
                ```

            -   #### nextExecution

                ```
                Date nextExecution
                ```

            -   #### ordinalNumber

                ```
                int ordinalNumber
                ```

            -   #### recurrenceExpression

                ```
                String recurrenceExpression
                ```

            -   #### startDateInMillis

                ```
                long startDateInMillis
                ```

            -   #### started

                ```
                Boolean started
                ```

            -   #### target

                ```
                int target
                ```


-   ## Package com.fluig.sdk.api.local

    -   ### Class [com.fluig.sdk.api.local.LocalUserVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/local/LocalUserVO.html "class in com.fluig.sdk.api.local") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### id

                ```
                Long id
                ```

            -   #### localId

                ```
                Long localId
                ```

            -   #### userCode

                ```
                String userCode
                ```

            -   #### userName

                ```
                String userName
                ```

    -   ### Class [com.fluig.sdk.api.local.LocalVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/local/LocalVO.html "class in com.fluig.sdk.api.local") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### defaultLocale

                ```
                boolean defaultLocale
                ```

            -   #### expandables

                ```
                List<String> expandables
                ```

            -   #### holidays

                ```
                List<HolidayVO> holidays
                ```

            -   #### id

                ```
                Long id
                ```

            -   #### latitude

                ```
                double latitude
                ```

            -   #### localUsers

                ```
                List<LocalUserVO> localUsers
                ```

            -   #### longitude

                ```
                double longitude
                ```

            -   #### name

                ```
                String name
                ```

            -   #### radius

                ```
                double radius
                ```

            -   #### timezone

                ```
                String timezone
                ```


-   ## Package com.fluig.sdk.api.log

    -   ### Class [com.fluig.sdk.api.log.ScriptingLog](https://api.fluig.com/old/sdk/com/fluig/sdk/api/log/ScriptingLog.html "class in com.fluig.sdk.api.log") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L


-   ## Package com.fluig.sdk.api.oauth

    -   ### Class [com.fluig.sdk.api.oauth.OAuthSdkVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/oauth/OAuthSdkVO.html "class in com.fluig.sdk.api.oauth") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### accessTokenURL

                ```
                String accessTokenURL
                ```

            -   #### authenticationType

                ```
                String authenticationType
                ```

            -   #### authorizationURL

                ```
                String authorizationURL
                ```

            -   #### callbackUrl

                ```
                String callbackUrl
                ```

            -   #### clientData

                ```
                String clientData
                ```

            -   #### clientId

                ```
                String clientId
                ```

            -   #### clientSecret

                ```
                String clientSecret
                ```

            -   #### code

                ```
                String code
                ```

            -   #### consumerKey

                ```
                String consumerKey
                ```

            -   #### consumerSecret

                ```
                String consumerSecret
                ```

            -   #### creationDate

                ```
                Date creationDate
                ```

            -   #### description

                ```
                String description
                ```

            -   #### domain

                ```
                String domain
                ```

            -   #### expirationDate

                ```
                Date expirationDate
                ```

            -   #### grantType

                ```
                String grantType
                ```

            -   #### id

                ```
                Long id
                ```

            -   #### method

                ```
                String method
                ```

            -   #### params

                ```
                Map<String,​Object> params
                ```

            -   #### password

                ```
                String password
                ```

            -   #### passwordConfirmation

                ```
                String passwordConfirmation
                ```

            -   #### providerName

                ```
                String providerName
                ```

            -   #### redirectUri

                ```
                String redirectUri
                ```

            -   #### refreshToken

                ```
                String refreshToken
                ```

            -   #### refreshTokenURL

                ```
                String refreshTokenURL
                ```

            -   #### requestMethod

                ```
                String requestMethod
                ```

            -   #### requestTokenURL

                ```
                String requestTokenURL
                ```

            -   #### scope

                ```
                String scope
                ```

            -   #### serviceTestUrl

                ```
                String serviceTestUrl
                ```

            -   #### serviceUrl

                ```
                String serviceUrl
                ```

            -   #### signatureMethod

                ```
                String signatureMethod
                ```

            -   #### strParams

                ```
                String strParams
                ```

            -   #### tenantId

                ```
                Long tenantId
                ```

            -   #### token

                ```
                String token
                ```

            -   #### tokenAccess

                ```
                String tokenAccess
                ```

            -   #### tokenSecret

                ```
                String tokenSecret
                ```

            -   #### userAuthorizationURL

                ```
                String userAuthorizationURL
                ```

            -   #### username

                ```
                String username
                ```


-   ## Package com.fluig.sdk.api.permission

    -   ### Class [com.fluig.sdk.api.permission.PermissionAssetVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/permission/PermissionAssetVO.html "class in com.fluig.sdk.api.permission") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### code

                ```
                String code
                ```

            -   #### description

                ```
                String description
                ```

            -   #### id

                ```
                Long id
                ```

            -   #### pageCode

                ```
                String pageCode
                ```

            -   #### typeCode

                ```
                String typeCode
                ```

    -   ### Class [com.fluig.sdk.api.permission.PermissionVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/permission/PermissionVO.html "class in com.fluig.sdk.api.permission") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### category

                ```
                String category
                ```

            -   #### categoryCode

                ```
                String categoryCode
                ```

            -   #### isSelected

                ```
                Boolean isSelected
                ```

            -   #### permission

                ```
                String permission
                ```

            -   #### permissionDescription

                ```
                String permissionDescription
                ```


-   ## Package com.fluig.sdk.api.search

    -   ### Class [com.fluig.sdk.api.search.DefaultSearchRequest](https://api.fluig.com/old/sdk/com/fluig/sdk/api/search/DefaultSearchRequest.html "class in com.fluig.sdk.api.search") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### endPeriod

                ```
                Date endPeriod
                ```

            -   #### limit

                ```
                int limit
                ```

            -   #### offset

                ```
                int offset
                ```

            -   #### ordering

                ```
                String ordering
                ```

            -   #### pattern

                ```
                String pattern
                ```

            -   #### period

                ```
                com.totvs.technology.foundation.indexer.common.DateGap period
                ```

            -   #### searchType

                ```
                String searchType
                ```

            -   #### startPeriod

                ```
                Date startPeriod
                ```

    -   ### Class [com.fluig.sdk.api.search.DefaultSearchResponse](https://api.fluig.com/old/sdk/com/fluig/sdk/api/search/DefaultSearchResponse.html "class in com.fluig.sdk.api.search") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### items

                ```
                List<Map<String,​Object>> items
                ```

            -   #### offset

                ```
                int offset
                ```

            -   #### solrAvailable

                ```
                boolean solrAvailable
                ```

            -   #### timeElapsed

                ```
                Long timeElapsed
                ```

            -   #### totalHits

                ```
                Long totalHits
                ```


-   ## Package com.fluig.sdk.api.social

    -   ### Class [com.fluig.sdk.api.social.ArticleCoverVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleCoverVO.html "class in com.fluig.sdk.api.social") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### base64media

                ```
                String base64media
                ```

            -   #### boxData

                ```
                CropVO boxData
                ```

            -   #### canvasData

                ```
                CropVO canvasData
                ```

            -   #### coordinateX

                ```
                int coordinateX
                ```

            -   #### coordinateY

                ```
                int coordinateY
                ```

            -   #### height

                ```
                int height
                ```

            -   #### image

                ```
                byte[] image
                ```

            -   #### path

                ```
                String path
                ```

            -   #### pictureId

                ```
                String pictureId
                ```

            -   #### pictureName

                ```
                String pictureName
                ```

            -   #### width

                ```
                int width
                ```

            -   #### windowHeight

                ```
                int windowHeight
                ```

            -   #### windowWidth

                ```
                int windowWidth
                ```

    -   ### Class [com.fluig.sdk.api.social.ArticleVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html "class in com.fluig.sdk.api.social") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### accessCount

                ```
                Integer accessCount
                ```

                Numero de visualizações de do artigo

            -   #### alias

                ```
                String alias
                ```

                Alias da comunidade onde o artigo foi publicado

            -   #### approved

                ```
                boolean approved
                ```

            -   #### articleCoverVO

                ```
                ArticleCoverVO articleCoverVO
                ```

                VO com os dados de CROP da imagem de capa

            -   #### attachments

                ```
                List<String> attachments
                ```

                Anexos do corpo do artigo

            -   #### categoryId

                ```
                Long categoryId
                ```

                Id da pasta/categoria onde o artigo foi publicado

            -   #### content

                ```
                String content
                ```

                Conteudo publicado no artigo

            -   #### covers

                ```
                Map<String,​String> covers
                ```

                Mapa com as informção da imagem de capa do artigo

            -   #### description

                ```
                String description
                ```

                Titulo do artigo

            -   #### draft

                ```
                boolean draft
                ```

                Flag para indicar se o artigo está em rascunho

            -   #### expirationDate

                ```
                Date expirationDate
                ```

                Data de expiração do artigo

            -   #### expires

                ```
                boolean expires
                ```

                Flag para indicar se o artigo expira

            -   #### id

                ```
                Long id
                ```

                Id do artigo

            -   #### keyWord

                ```
                String keyWord
                ```

                Tags relacionadas ao artigo

            -   #### numberWatchs

                ```
                long numberWatchs
                ```

                Numero de usuarios que acompanham o artigo

            -   #### publicationDate

                ```
                Date publicationDate
                ```

                Data de publicação do artigo

            -   #### publisherId

                ```
                String publisherId
                ```

                Id do usuario que publicou o artigo

            -   #### securityLevel

                ```
                String securityLevel
                ```

                Nivel de segurança do usuário sobre o documento

            -   #### sociable

                ```
                SociableVO sociable
                ```

                VO com dados do Sociable

            -   #### socialObjectId

                ```
                Long socialObjectId
                ```

                ID do SocialObject relacionado ao artigo

            -   #### topicId

                ```
                Integer topicId
                ```

                Assunto do ECM a qual o artigo está relacionado

            -   #### user

                ```
                SocialVO user
                ```

                VO com os dados do publicador do artigo

            -   #### userNotify

                ```
                boolean userNotify
                ```

                Flag para indicar se vai notificar o usuario

            -   #### version

                ```
                Integer version
                ```

                Versão do documento no ECM

            -   #### viewedDocument

                ```
                boolean viewedDocument
                ```

                Flag para indicar se artigo já foi visto pelo usuario

    -   ### Class [com.fluig.sdk.api.social.CommentVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/CommentVO.html "class in com.fluig.sdk.api.social") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### comment

                ```
                String comment
                ```

                Text of comment

            -   #### commentWithoutMention

                ```
                String commentWithoutMention
                ```

                Simple text, withou mentions(alias of user)

            -   #### creationDate

                ```
                Date creationDate
                ```

                Creation date of comment

            -   #### customData

                ```
                Map<String,​String> customData
                ```

            -   #### mention

                ```
                boolean mention
                ```

                Indicates if the comment either has or not mentions

            -   #### mentions

                ```
                Map<String,​String> mentions
                ```

                Map with mention(alias and name). eg:{'jose.silva':'Jose da Silva'}

            -   #### sociableId

                ```
                Long sociableId
                ```

                ID of comment

            -   #### sociableParentId

                ```
                Long sociableParentId
                ```

                ID of comment parent(postId)

            -   #### updateDate

                ```
                Date updateDate
                ```

                Date when post was edited. IF null, comment wasn't edited

            -   #### userAlias

                ```
                String userAlias
                ```

                Alias of comment owner

            -   #### userName

                ```
                String userName
                ```

                Name of comment owner

    -   ### Class [com.fluig.sdk.api.social.CommunityVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/CommunityVO.html "class in com.fluig.sdk.api.social") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### adminAlias

                ```
                String adminAlias
                ```

                Atributo adminAlidas da comunidade String - adminAlias

            -   #### alias

                ```
                String alias
                ```

                Atributo alias da comunidade String - alias

            -   #### approvalRequired

                ```
                Boolean approvalRequired
                ```

                Atributo, se aprovação é obrigatória Boolean - approvalRequired

            -   #### createForum

                ```
                Boolean createForum
                ```

                Atributo, se é necessário criar o fórum Boolean - createForum

            -   #### description

                ```
                String description
                ```

                Atributo descrição da comunidade String - description

            -   #### ecmInfo

                ```
                Map<String,​Object> ecmInfo
                ```

                Atributo Map - ecmInfo

            -   #### hidden

                ```
                Boolean hidden
                ```

                Atributo, se comunidade estará escondida Boolean - hidden

            -   #### id

                ```
                Long id
                ```

                Atributo id da Comunidade Long - id

            -   #### name

                ```
                String name
                ```

                Atributo nome da comunidade String - name

            -   #### privateContent

                ```
                Boolean privateContent
                ```

                Atributo, se conteúdo da comuniade é privado Boolean - privateContent

    -   ### Class [com.fluig.sdk.api.social.CropVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/CropVO.html "class in com.fluig.sdk.api.social") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### height

                ```
                int height
                ```

            -   #### left

                ```
                int left
                ```

            -   #### top

                ```
                int top
                ```

            -   #### width

                ```
                int width
                ```

    -   ### Class [com.fluig.sdk.api.social.MediaVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/MediaVO.html "class in com.fluig.sdk.api.social") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### mediaId

                ```
                String mediaId
                ```

            -   #### mediaName

                ```
                String mediaName
                ```

            -   #### mediaType

                ```
                String mediaType
                ```

            -   #### mediaVersion

                ```
                Integer mediaVersion
                ```

    -   ### Class [com.fluig.sdk.api.social.PostVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/PostVO.html "class in com.fluig.sdk.api.social") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### alias

                ```
                String alias
                ```

                Para quem o post será feito (user, community or event).

            -   #### customUsers

                ```
                List<Long> customUsers
                ```

                Lista de usuário de um post customizado (mensagem direta). Opcional.

            -   #### id

                ```
                Long id
                ```

                Atributo Long - id

            -   #### mediaVO

                ```
                MediaVO mediaVO
                ```

            -   #### sociableObjectId

                ```
                Long sociableObjectId
                ```

                ID de um objeto associado (image/video/document). Opcional.

            -   #### text

                ```
                String text
                ```

                Texto a ser postado.

            -   #### visibility

                ```
                String visibility
                ```

                Visibilidade do post. Os valores possíveis são: PUBLIC, PRIVATE ou CUSTOM.

    -   ### Class [com.fluig.sdk.api.social.SociableVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/SociableVO.html "class in com.fluig.sdk.api.social") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### alias

                ```
                String alias
                ```

            -   #### id

                ```
                Long id
                ```

            -   #### name

                ```
                String name
                ```

            -   #### numberComments

                ```
                Integer numberComments
                ```

            -   #### numberDenouncements

                ```
                Integer numberDenouncements
                ```

            -   #### numberLikes

                ```
                Integer numberLikes
                ```

            -   #### numberShares

                ```
                Integer numberShares
                ```

            -   #### objectClass

                ```
                String objectClass
                ```

            -   #### objectId

                ```
                String objectId
                ```

            -   #### sociableType

                ```
                String sociableType
                ```

            -   #### tags

                ```
                String tags
                ```

            -   #### thumbURL

                ```
                String thumbURL
                ```

            -   #### url

                ```
                String url
                ```

            -   #### userId

                ```
                Long userId
                ```

    -   ### Class [com.fluig.sdk.api.social.SocialBreadcrumbItemVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/SocialBreadcrumbItemVO.html "class in com.fluig.sdk.api.social") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### description

                ```
                String description
                ```

            -   #### url

                ```
                String url
                ```

    -   ### Class [com.fluig.sdk.api.social.SocialBreadcrumbVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/SocialBreadcrumbVO.html "class in com.fluig.sdk.api.social") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### items

                ```
                List<SocialBreadcrumbItemVO> items
                ```

    -   ### Class [com.fluig.sdk.api.social.SocialVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/SocialVO.html "class in com.fluig.sdk.api.social") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### alias

                ```
                String alias
                ```

            -   #### approvalRequired

                ```
                Boolean approvalRequired
                ```

            -   #### createDate

                ```
                Date createDate
                ```

            -   #### customPage

                ```
                Boolean customPage
                ```

            -   #### description

                ```
                String description
                ```

            -   #### email

                ```
                String email
                ```

            -   #### favorite

                ```
                Boolean favorite
                ```

            -   #### fullName

                ```
                String fullName
                ```

            -   #### hidden

                ```
                Boolean hidden
                ```

            -   #### id

                ```
                Long id
                ```

            -   #### isAdmin

                ```
                Boolean isAdmin
                ```

            -   #### isCommunityAdmin

                ```
                Boolean isCommunityAdmin
                ```

            -   #### isModerator

                ```
                Boolean isModerator
                ```

            -   #### lastName

                ```
                String lastName
                ```

            -   #### lastUpdate

                ```
                Date lastUpdate
                ```

            -   #### name

                ```
                String name
                ```

            -   #### numberFollowers

                ```
                Integer numberFollowers
                ```

            -   #### numberFollowing

                ```
                Integer numberFollowing
                ```

            -   #### numberFriends

                ```
                Integer numberFriends
                ```

            -   #### numberModerations

                ```
                Integer numberModerations
                ```

            -   #### numberParticipations

                ```
                Integer numberParticipations
                ```

            -   #### privateContent

                ```
                Boolean privateContent
                ```

            -   #### tenantAdmin

                ```
                Boolean tenantAdmin
                ```

            -   #### tenantId

                ```
                Long tenantId
                ```

            -   #### tenantUUID

                ```
                String tenantUUID
                ```

            -   #### userData

                ```
                Map<String,​String> userData
                ```


-   ## Package com.fluig.sdk.api.task

    -   ### Class [com.fluig.sdk.api.task.ResumedTasksVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/ResumedTasksVO.html "class in com.fluig.sdk.api.task") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### children

                ```
                List<ResumedTasksVO> children
                ```

            -   #### customURL

                ```
                String customURL
                ```

            -   #### name

                ```
                String name
                ```

            -   #### state

                ```
                String state
                ```

            -   #### taskId

                ```
                String taskId
                ```

            -   #### totalTask

                ```
                int totalTask
                ```

            -   #### type

                ```
                String type
                ```

    -   ### Class [com.fluig.sdk.api.task.TaskTransferVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/TaskTransferVO.html "class in com.fluig.sdk.api.task") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### documentIdFinal

                ```
                Integer documentIdFinal
                ```

                Atributo id final do documento Integer documentIdFinal

            -   #### documentIdInitial

                ```
                Integer documentIdInitial
                ```

                Atributo id inicial do documento Integer documentIdInitial

            -   #### instanceIdFinal

                ```
                Integer instanceIdFinal
                ```

                Atributo id final do processo Integer instanceIdInitial

            -   #### instanceIdInitial

                ```
                Integer instanceIdInitial
                ```

                Atributo id inicial do processo Integer instanceIdInitial

            -   #### transferActiveDocuments

                ```
                Boolean transferActiveDocuments
                ```

                Atributo, se devem ser transferidos documentos ativos Boolean transferActiveDocuments

            -   #### transferApprovals

                ```
                Boolean transferApprovals
                ```

                Atributo, se devem ser transferidas as aprovações Boolean transferApprovals

            -   #### transferApprovers

                ```
                Boolean transferApprovers
                ```

                Atributo, se devem ser transferidos aprovadores Boolean transferApprovers

            -   #### transferDocumentSecurity

                ```
                Boolean transferDocumentSecurity
                ```

                Atributo, se deve ser transferida a segurança dos documentos Boolean transferDocumentSecurity

            -   #### transferMyDocumentsInApproval

                ```
                Boolean transferMyDocumentsInApproval
                ```

                Atributo, se devem ser transferidos documentos em aprovão para o usuário origem Boolean transferMyDocumentsInApproval

            -   #### transferOpenWorkflow

                ```
                Boolean transferOpenWorkflow
                ```

                Atributo, se devem ser transferidos processos abertos Boolean transferOpenWorkflow

            -   #### transferPendingWorkflow

                ```
                Boolean transferPendingWorkflow
                ```

                Atributo, se devem ser transferidos processos pendentes Boolean transferPendingWorkflow

            -   #### userFrom

                ```
                String userFrom
                ```

                Atributo código do usuário origem de quem as pendências serão transferidas String - userFrom

            -   #### userTo

                ```
                String userTo
                ```

                Atributo código do usuário destino, à quem serão transferidas as pendências String - userTo


-   ## Package com.fluig.sdk.api.workflow

    -   ### Class [com.fluig.sdk.api.workflow.AssumeProcessTaskResultVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/AssumeProcessTaskResultVO.html "class in com.fluig.sdk.api.workflow") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### colleagueId

                ```
                String colleagueId
                ```

            -   #### complement

                ```
                String complement
                ```

            -   #### errorCode

                ```
                String errorCode
                ```

            -   #### message

                ```
                String message
                ```

            -   #### movementSequence

                ```
                int movementSequence
                ```

            -   #### processInstanceId

                ```
                int processInstanceId
                ```

            -   #### status

                ```
                AssumeProcessTaskStatus status
                ```

            -   #### tenantId

                ```
                long tenantId
                ```

    -   ### Class [com.fluig.sdk.api.workflow.AssumeProcessTasksResultVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/AssumeProcessTasksResultVO.html "class in com.fluig.sdk.api.workflow") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### assumeProcessTaskResults

                ```
                List<AssumeProcessTaskResultVO> assumeProcessTaskResults
                ```

            -   #### failCount

                ```
                long failCount
                ```

            -   #### successCount

                ```
                long successCount
                ```

    -   ### Class [com.fluig.sdk.api.workflow.AssumeProcessTasksVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/AssumeProcessTasksVO.html "class in com.fluig.sdk.api.workflow") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### assumeProcessTaskList

                ```
                List<AssumeProcessTaskVO> assumeProcessTaskList
                ```

    -   ### Class [com.fluig.sdk.api.workflow.AssumeProcessTaskVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/AssumeProcessTaskVO.html "class in com.fluig.sdk.api.workflow") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### colleagueId

                ```
                String colleagueId
                ```

            -   #### movementSequence

                ```
                int movementSequence
                ```

            -   #### processInstanceId

                ```
                int processInstanceId
                ```

            -   #### replacementId

                ```
                String replacementId
                ```

    -   ### Class [com.fluig.sdk.api.workflow.AttachmentVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/AttachmentVO.html "class in com.fluig.sdk.api.workflow") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### absoluteFileName

                ```
                String absoluteFileName
                ```

                Atributo nome absoluto do arquivo String - absoluteFileName

            -   #### attach

                ```
                Boolean attach
                ```

                Atributo, se é anexo Boolean - attach

            -   #### fileName

                ```
                String fileName
                ```

                Atributo nome do arquivo String - fileName

            -   #### principal

                ```
                Boolean principal
                ```

                Atributo, se anexo é o principal Boolean - principal

    -   ### Class [com.fluig.sdk.api.workflow.BPMAssignmentConfigurationVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMAssignmentConfigurationVO.html "class in com.fluig.sdk.api.workflow") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### assignment

                ```
                BPMAssignmentVO assignment
                ```

            -   #### configuration

                ```
                String configuration
                ```

    -   ### Class [com.fluig.sdk.api.workflow.BPMAssignmentVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMAssignmentVO.html "class in com.fluig.sdk.api.workflow") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### description

                ```
                String description
                ```

            -   #### id

                ```
                String id
                ```

            -   #### impl

                ```
                String impl
                ```

            -   #### name

                ```
                String name
                ```

    -   ### Class [com.fluig.sdk.api.workflow.BPMDeadlineSpecificationVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMDeadlineSpecificationVO.html "class in com.fluig.sdk.api.workflow") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### deadlineTime

                ```
                Long deadlineTime
                ```

            -   #### remainingTime

                ```
                Long remainingTime
                ```

            -   #### spentTime

                ```
                Long spentTime
                ```

    -   ### Class [com.fluig.sdk.api.workflow.BPMFormFieldVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMFormFieldVO.html "class in com.fluig.sdk.api.workflow") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### field

                ```
                String field
                ```

            -   #### value

                ```
                String value
                ```

    -   ### Class [com.fluig.sdk.api.workflow.BPMFormRecordVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMFormRecordVO.html "class in com.fluig.sdk.api.workflow") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### description

                ```
                String description
                ```

            -   #### id

                ```
                Integer id
                ```

            -   #### version

                ```
                Integer version
                ```

    -   ### Class [com.fluig.sdk.api.workflow.BPMLocalVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMLocalVO.html "class in com.fluig.sdk.api.workflow") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### defaultLocale

                ```
                Boolean defaultLocale
                ```

            -   #### id

                ```
                Long id
                ```

            -   #### latitude

                ```
                Double latitude
                ```

            -   #### longitude

                ```
                Double longitude
                ```

            -   #### name

                ```
                String name
                ```

            -   #### radius

                ```
                Double radius
                ```

            -   #### timezone

                ```
                String timezone
                ```

    -   ### Class [com.fluig.sdk.api.workflow.BPMProcessActivityTaskInfoVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessActivityTaskInfoVO.html "class in com.fluig.sdk.api.workflow") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### assignees

                ```
                String assignees
                ```

            -   #### assigneesNames

                ```
                String assigneesNames
                ```

            -   #### localIds

                ```
                String localIds
                ```

            -   #### localNames

                ```
                String localNames
                ```

    -   ### Class [com.fluig.sdk.api.workflow.BPMProcessActivityVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessActivityVO.html "class in com.fluig.sdk.api.workflow") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### active

                ```
                boolean active
                ```

            -   #### deadlineDate

                ```
                ZonedDateTime deadlineDate
                ```

            -   #### deadlineSpecification

                ```
                BPMDeadlineSpecificationVO deadlineSpecification
                ```

            -   #### endDate

                ```
                ZonedDateTime endDate
                ```

            -   #### formFields

                ```
                List<BPMFormFieldVO> formFields
                ```

            -   #### movementSequence

                ```
                int movementSequence
                ```

            -   #### processDescription

                ```
                String processDescription
                ```

            -   #### processId

                ```
                String processId
                ```

            -   #### processInstanceId

                ```
                int processInstanceId
                ```

            -   #### processVersion

                ```
                int processVersion
                ```

            -   #### requester

                ```
                BPMUserVO requester
                ```

            -   #### slaStatus

                ```
                String slaStatus
                ```

            -   #### startDate

                ```
                ZonedDateTime startDate
                ```

            -   #### state

                ```
                BPMProcessStateVO state
                ```

            -   #### taskInfo

                ```
                BPMProcessActivityTaskInfoVO taskInfo
                ```

            -   #### tasks

                ```
                List<BPMProcessTaskVO> tasks
                ```

            -   #### threadSequence

                ```
                int threadSequence
                ```

    -   ### Class [com.fluig.sdk.api.workflow.BPMProcessAttachmentSecurityConfigurationVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessAttachmentSecurityConfigurationVO.html "class in com.fluig.sdk.api.workflow") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### accessLevel

                ```
                String accessLevel
                ```

            -   #### assignmentConfiguration

                ```
                BPMAssignmentConfigurationVO assignmentConfiguration
                ```

    -   ### Class [com.fluig.sdk.api.workflow.BPMProcessAttachmentSecurityVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessAttachmentSecurityVO.html "class in com.fluig.sdk.api.workflow") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### attachmentSecurityConfigurations

                ```
                List<BPMProcessAttachmentSecurityConfigurationVO> attachmentSecurityConfigurations
                ```

            -   #### controlsSecurity

                ```
                Boolean controlsSecurity
                ```

            -   #### updateVersions

                ```
                Boolean updateVersions
                ```

    -   ### Class [com.fluig.sdk.api.workflow.BPMProcessStateVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessStateVO.html "class in com.fluig.sdk.api.workflow") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### bpmnType

                ```
                String bpmnType
                ```

            -   #### instructions

                ```
                String instructions
                ```

            -   #### processId

                ```
                String processId
                ```

            -   #### processVersion

                ```
                Integer processVersion
                ```

            -   #### sequence

                ```
                int sequence
                ```

            -   #### stateDescription

                ```
                String stateDescription
                ```

            -   #### stateName

                ```
                String stateName
                ```

            -   #### stateType

                ```
                String stateType
                ```

    -   ### Class [com.fluig.sdk.api.workflow.BPMProcessTaskVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessTaskVO.html "class in com.fluig.sdk.api.workflow") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### assignee

                ```
                BPMUserVO assignee
                ```

            -   #### assignEndDate

                ```
                ZonedDateTime assignEndDate
                ```

            -   #### assignStartDate

                ```
                ZonedDateTime assignStartDate
                ```

            -   #### deadlineDate

                ```
                ZonedDateTime deadlineDate
                ```

            -   #### endDate

                ```
                ZonedDateTime endDate
                ```

            -   #### movementSequence

                ```
                int movementSequence
                ```

            -   #### processDescription

                ```
                String processDescription
                ```

            -   #### processId

                ```
                String processId
                ```

            -   #### processInstanceId

                ```
                int processInstanceId
                ```

            -   #### processVersion

                ```
                int processVersion
                ```

            -   #### startDate

                ```
                ZonedDateTime startDate
                ```

            -   #### status

                ```
                String status
                ```

            -   #### threadSequence

                ```
                int threadSequence
                ```

            -   #### transferSequence

                ```
                int transferSequence
                ```

            -   #### warningDate

                ```
                ZonedDateTime warningDate
                ```

    -   ### Class [com.fluig.sdk.api.workflow.BPMProcessVersionVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessVersionVO.html "class in com.fluig.sdk.api.workflow") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### active

                ```
                Boolean active
                ```

            -   #### attachmentSecurity

                ```
                BPMProcessAttachmentSecurityVO attachmentSecurity
                ```

            -   #### blocked

                ```
                Boolean blocked
                ```

            -   #### bpmnVersion

                ```
                Integer bpmnVersion
                ```

            -   #### diagram

                ```
                String diagram
                ```

            -   #### editing

                ```
                Boolean editing
                ```

            -   #### formId

                ```
                Integer formId
                ```

            -   #### inheritFormSecurity

                ```
                Boolean inheritFormSecurity
                ```

            -   #### mobileReady

                ```
                Boolean mobileReady
                ```

            -   #### processId

                ```
                String processId
                ```

            -   #### requiresPassword

                ```
                Boolean requiresPassword
                ```

            -   #### version

                ```
                Integer version
                ```

    -   ### Class [com.fluig.sdk.api.workflow.BPMRequestVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMRequestVO.html "class in com.fluig.sdk.api.workflow") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### active

                ```
                Boolean active
                ```

            -   #### activities

                ```
                List<BPMProcessActivityVO> activities
                ```

            -   #### deadlineDate

                ```
                ZonedDateTime deadlineDate
                ```

            -   #### deadlineSpecification

                ```
                BPMDeadlineSpecificationVO deadlineSpecification
                ```

            -   #### endDate

                ```
                ZonedDateTime endDate
                ```

            -   #### formFields

                ```
                List<BPMFormFieldVO> formFields
                ```

            -   #### formId

                ```
                Integer formId
                ```

            -   #### formRecord

                ```
                BPMFormRecordVO formRecord
                ```

            -   #### formRecordId

                ```
                Integer formRecordId
                ```

            -   #### parentRequestId

                ```
                Integer parentRequestId
                ```

            -   #### periodId

                ```
                String periodId
                ```

            -   #### processDescription

                ```
                String processDescription
                ```

            -   #### processId

                ```
                String processId
                ```

            -   #### processInstanceId

                ```
                Integer processInstanceId
                ```

            -   #### processVersion

                ```
                Integer processVersion
                ```

            -   #### requester

                ```
                BPMUserVO requester
                ```

            -   #### slaStatus

                ```
                String slaStatus
                ```

            -   #### startDate

                ```
                ZonedDateTime startDate
                ```

            -   #### status

                ```
                String status
                ```

            -   #### warningDate

                ```
                ZonedDateTime warningDate
                ```

    -   ### Class [com.fluig.sdk.api.workflow.BPMUserVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMUserVO.html "class in com.fluig.sdk.api.workflow") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### code

                ```
                String code
                ```

            -   #### local

                ```
                BPMLocalVO local
                ```

            -   #### login

                ```
                String login
                ```

            -   #### mail

                ```
                String mail
                ```

            -   #### name

                ```
                String name
                ```

    -   ### Class [com.fluig.sdk.api.workflow.CancelInstanceResultVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/CancelInstanceResultVO.html "class in com.fluig.sdk.api.workflow") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### errorCode

                ```
                String errorCode
                ```

            -   #### message

                ```
                String message
                ```

            -   #### processInstanceId

                ```
                int processInstanceId
                ```

            -   #### status

                ```
                String status
                ```

            -   #### tenantId

                ```
                long tenantId
                ```

    -   ### Class [com.fluig.sdk.api.workflow.CancelInstancesResultVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/CancelInstancesResultVO.html "class in com.fluig.sdk.api.workflow") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### cancelInstanceResults

                ```
                List<CancelInstanceResultVO> cancelInstanceResults
                ```

            -   #### failCount

                ```
                long failCount
                ```

            -   #### successCount

                ```
                long successCount
                ```

    -   ### Class [com.fluig.sdk.api.workflow.CancelInstancesVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/CancelInstancesVO.html "class in com.fluig.sdk.api.workflow") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### cancelInstanceList

                ```
                List<CancelInstanceVO> cancelInstanceList
                ```

            -   #### cancelText

                ```
                String cancelText
                ```

    -   ### Class [com.fluig.sdk.api.workflow.CancelInstanceVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/CancelInstanceVO.html "class in com.fluig.sdk.api.workflow") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### cancelText

                ```
                String cancelText
                ```

            -   #### processInstanceId

                ```
                int processInstanceId
                ```

            -   #### replacedId

                ```
                String replacedId
                ```

    -   ### Class [com.fluig.sdk.api.workflow.CardIndexAPIVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/CardIndexAPIVO.html "class in com.fluig.sdk.api.workflow") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### cardDescription

                ```
                String cardDescription
                ```

            -   #### datasetName

                ```
                String datasetName
                ```

            -   #### documentDescription

                ```
                String documentDescription
                ```

            -   #### id

                ```
                Integer id
                ```

            -   #### parentDocumentId

                ```
                Integer parentDocumentId
                ```

            -   #### persistenceType

                ```
                Integer persistenceType
                ```

            -   #### principal

                ```
                String principal
                ```

            -   #### publisherId

                ```
                String publisherId
                ```

            -   #### tenantId

                ```
                Long tenantId
                ```

            -   #### version

                ```
                Integer version
                ```

    -   ### Class [com.fluig.sdk.api.workflow.CardIndexAttachmentCreateVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/CardIndexAttachmentCreateVO.html "class in com.fluig.sdk.api.workflow") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### attach

                ```
                Boolean attach
                ```

                Atributo, se o arquivo de para criação do card index é anexo Boolean - attach

            -   #### fileName

                ```
                String fileName
                ```

                Atributo nome do arquivo anexo a ser criado String - fileName

            -   #### principal

                ```
                Boolean principal
                ```

                Atributo, se anexo do card index a ser criado é o principal Boolean - principal

    -   ### Class [com.fluig.sdk.api.workflow.CardIndexAttachmentVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/CardIndexAttachmentVO.html "class in com.fluig.sdk.api.workflow") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### attach

                ```
                Boolean attach
                ```

                Atributo, se será anexado Boolean - attach

            -   #### fileName

                ```
                String fileName
                ```

                Atributo nome do arquivo String - fileName

            -   #### principal

                ```
                Boolean principal
                ```

                Atributo, se anexo é o principal Boolean - principal

    -   ### Class [com.fluig.sdk.api.workflow.CardIndexCreateVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/CardIndexCreateVO.html "class in com.fluig.sdk.api.workflow") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### attachments

                ```
                List<CardIndexAttachmentCreateVO> attachments
                ```

                Atributo lista de anexos List - attachments

            -   #### cardDescription

                ```
                String cardDescription
                ```

                Atributo descrição do card String - cardDescription

            -   #### datasetName

                ```
                String datasetName
                ```

                Atributo nome do dataset String - datasetName

            -   #### documentDescription

                ```
                String documentDescription
                ```

                Atributo descrição do documento String - documentDescription

            -   #### parentDocumentId

                ```
                Integer parentDocumentId
                ```

                Atributo id do documento pai Integer - parentDocumentId

            -   #### persistenceType

                ```
                Integer persistenceType
                ```

                Atributo tipo de persistência Integer - persistenceType

            -   #### publisherId

                ```
                String publisherId
                ```

                Atributo id do publicador String - publisherId

            -   #### tenantId

                ```
                Long tenantId
                ```

                Atributo id do tenant Long - tenantId

    -   ### Class [com.fluig.sdk.api.workflow.CardIndexVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/CardIndexVO.html "class in com.fluig.sdk.api.workflow") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### attachments

                ```
                List<CardIndexAttachmentVO> attachments
                ```

                Atributo lista de anexos List - attachments

            -   #### cardDescription

                ```
                String cardDescription
                ```

                Atributo descrição do card String - cardDescription

            -   #### datasetName

                ```
                String datasetName
                ```

                Atributo nome do dataset String - datasetName

            -   #### documentDescription

                ```
                String documentDescription
                ```

                Atributo descrição do documento String - documentDescription

            -   #### documentId

                ```
                Integer documentId
                ```

                Atributo id do documento Integer - documentId

            -   #### parentDocumentId

                ```
                Integer parentDocumentId
                ```

                Atributo id do card index pai Integer - parentDocumentId

            -   #### persistenceType

                ```
                Integer persistenceType
                ```

                Atributo tipo de persistência Integer - persistenceType

            -   #### publisherId

                ```
                String publisherId
                ```

                Atributo id do publicador do card index String - publisherId

            -   #### tenantId

                ```
                Long tenantId
                ```

                Atributo id do tenant Long - tenantId

    -   ### Class [com.fluig.sdk.api.workflow.CardItemVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/CardItemVO.html "class in com.fluig.sdk.api.workflow") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### additionalComments

                ```
                String additionalComments
                ```

                Atributo comentários adicionais String - additionalComments

            -   #### attachments

                ```
                List<AttachmentVO> attachments
                ```

                Atributo lista de anexos List - attachments

            -   #### colleagueId

                ```
                String colleagueId
                ```

                Atributo id do colega String - colleagueId

            -   #### documentDescription

                ```
                String documentDescription
                ```

                Atributo descrição do documento String - documentDescription

            -   #### documentId

                ```
                Integer documentId
                ```

                Atributo id do documento Integer - documentId

            -   #### documentType

                ```
                String documentType
                ```

                Atributo tipo de documento String - documentType

            -   #### documentTypeId

                ```
                String documentTypeId
                ```

                Atributo id to tipo de documento String - documentTypeId

            -   #### downloadEnabled

                ```
                Boolean downloadEnabled
                ```

                Atributo, se é possível realizar download do card item Boolean - downloadEnabled

            -   #### expirationDate

                ```
                Date expirationDate
                ```

                Atributo data de expiração Date - expirationDate

            -   #### expires

                ```
                Boolean expires
                ```

                Atributo, se card item expira Boolean - expires

            -   #### formData

                ```
                List<Map<String,​String>> formData
                ```

                Atributo List\> - formData

            -   #### iconId

                ```
                Integer iconId
                ```

                Atributo id do icone Integer - iconId

            -   #### imutable

                ```
                Boolean imutable
                ```

                Atributo, se card item é imutável Boolean - imutable

            -   #### inheritSecurity

                ```
                Boolean inheritSecurity
                ```

                Atributo segurança herdada Boolean - inheritSecurity

            -   #### internalVisualizer

                ```
                Boolean internalVisualizer
                ```

                Atributo, se é visualizado internamente Boolean - internalVisualizer

            -   #### keyWord

                ```
                String keyWord
                ```

                Atributo palavra chave String - keyWord

            -   #### languageId

                ```
                String languageId
                ```

                Atributo id da linguagem String - languageId

            -   #### metaListId

                ```
                Integer metaListId
                ```

                Atributo id da meta lista Integer - metaListId

            -   #### notificationDays

                ```
                Integer notificationDays
                ```

                Atributo dias de notificação Integer - notificationDays

            -   #### parentDocumentId

                ```
                Integer parentDocumentId
                ```

                Atributo id do documento pai Integer - parentDocumentId

            -   #### permissions

                ```
                List<DocumentPermissionVO> permissions
                ```

                Atributo lista de permissões List - permissions

            -   #### permissionType

                ```
                Integer permissionType
                ```

                Atributo tipo de permissão Integer - permissionType

            -   #### privateDocument

                ```
                Boolean privateDocument
                ```

                Atributo, se documento é privado Boolean - privateDocument

            -   #### publisherApprovers

                ```
                List<DocumentApproverVO> publisherApprovers
                ```

                Atributo lista de aprovadores publicadores List - publisherApprovers

            -   #### relatedDocuments

                ```
                List<RelatedDocumentVO> relatedDocuments
                ```

                Atributo lista de documentos relacionados List - relatedDocuments

            -   #### restrictions

                ```
                List<DocumentRestrictionVO> restrictions
                ```

                Atributo lista de restrições List - restrictions

            -   #### restrictionType

                ```
                Integer restrictionType
                ```

                Atributo tipo de restrição Integer - restrictionType

            -   #### tenantId

                ```
                Long tenantId
                ```

                Atributo id do tenant Long - tenantId

            -   #### topicId

                ```
                Integer topicId
                ```

                Atributo id do tópico Integer - topicId

            -   #### updateIsoProperties

                ```
                Boolean updateIsoProperties
                ```

                Atributo, se propriedades iso podem ser atualizadas Boolean - updateIsoProperties

            -   #### userNotify

                ```
                Boolean userNotify
                ```

                Atributo, se usuário será notificado Boolean - userNotify

            -   #### validationStartDate

                ```
                Date validationStartDate
                ```

                Atributo data de início de validação Date - validationStartDate

            -   #### version

                ```
                Integer version
                ```

                Atributo versão Integer - version

            -   #### versionDescription

                ```
                String versionDescription
                ```

                Atributo descrição da versão String - versionDescription

            -   #### versionOption

                ```
                String versionOption
                ```

                Atributo opção de versão String - versionOption

    -   ### Class [com.fluig.sdk.api.workflow.DatasetOfflineMobileRestVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/DatasetOfflineMobileRestVO.html "class in com.fluig.sdk.api.workflow") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        -   ### Serialized Fields

            -   #### companyId

                ```
                long companyId
                ```

            -   #### datasetId

                ```
                String datasetId
                ```

            -   #### documentId

                ```
                Integer documentId
                ```

            -   #### id

                ```
                Long id
                ```

            -   #### timeUnit

                ```
                String timeUnit
                ```

            -   #### updateInterval

                ```
                long updateInterval
                ```

            -   #### version

                ```
                int version
                ```

    -   ### Class [com.fluig.sdk.api.workflow.FormRecordVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/FormRecordVO.html "class in com.fluig.sdk.api.workflow") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### description

                ```
                String description
                ```

            -   #### id

                ```
                Integer id
                ```

            -   #### version

                ```
                Integer version
                ```

    -   ### Class [com.fluig.sdk.api.workflow.ManagerDefinitionVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ManagerDefinitionVO.html "class in com.fluig.sdk.api.workflow") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### processesUnderManagement

                ```
                List<String> processesUnderManagement
                ```

            -   #### unknownManagement

                ```
                List<String> unknownManagement
                ```

    -   ### Class [com.fluig.sdk.api.workflow.ProcessAttachmentVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessAttachmentVO.html "class in com.fluig.sdk.api.workflow") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### attachedDate

                ```
                Date attachedDate
                ```

            -   #### colleagueId

                ```
                String colleagueId
                ```

            -   #### description

                ```
                String description
                ```

            -   #### documentId

                ```
                int documentId
                ```

            -   #### originalMovementSequence

                ```
                int originalMovementSequence
                ```

            -   #### version

                ```
                int version
                ```

    -   ### Class [com.fluig.sdk.api.workflow.ProcessDefinitionVersionVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessDefinitionVersionVO.html "class in com.fluig.sdk.api.workflow") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### categoryStructure

                ```
                String categoryStructure
                ```

                Atributo categoryStructure do ProcessDefinitionVersion String - categoryStructure

            -   #### favorite

                ```
                boolean favorite
                ```

                Atributo favorite do ProcessDefinitionVersion boolean - favorite

            -   #### formId

                ```
                Integer formId
                ```

                Atributo formId do ProcessDefinitionVersion Integer - formId

            -   #### formVersion

                ```
                Integer formVersion
                ```

                Atributo formVersion do ProcessDefinitionVersion Integer - formVersion

            -   #### fullCategoryStructure

                ```
                String fullCategoryStructure
                ```

                Atributo fullCategoryStructure do ProcessDefinitionVersion String - fullCategoryStructure

            -   #### initialProcessState

                ```
                ProcessStateVO initialProcessState
                ```

                Atributo initialProcessState do ProcessDefinitionVersion ProcessStateVO - initialProcessState

            -   #### mobileReady

                ```
                boolean mobileReady
                ```

                Atributo mobileReady do ProcessDefinitionVersion boolean - mobileReady

            -   #### processDescription

                ```
                String processDescription
                ```

                Atributo processDescription do ProcessDefinitionVersion String - processDescription

            -   #### processId

                ```
                String processId
                ```

                Atributo processId do ProcessDefinitionVersion String - processId

            -   #### rowId

                ```
                int rowId
                ```

                Atributo rowId do ProcessDefinitionVersion int - rowId

            -   #### tenantId

                ```
                long tenantId
                ```

                Atributo tenantId do ProcessDefinitionVersion long - tenantId

            -   #### version

                ```
                int version
                ```

                Atributo version do ProcessDefinitionVersion int - version

            -   #### versionDescription

                ```
                String versionDescription
                ```

                Atributo versionDescription do ProcessDefinitionVersion String - versionDescription

    -   ### Class [com.fluig.sdk.api.workflow.ProcessDefinitionVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessDefinitionVO.html "class in com.fluig.sdk.api.workflow") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### icon

                ```
                String icon
                ```

                Atributo icon do ProcessDefinition String - icon

            -   #### processDescription

                ```
                String processDescription
                ```

                Atributo processDescription do ProcessDefinition String - processDescription

            -   #### processId

                ```
                String processId
                ```

                Atributo processId do ProcessDefinition String - processId

    -   ### Class [com.fluig.sdk.api.workflow.ProcessInstanceInfoVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessInstanceInfoVO.html "class in com.fluig.sdk.api.workflow") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### attachments

                ```
                List<ProcessAttachmentVO> attachments
                ```

            -   #### companyId

                ```
                long companyId
                ```

            -   #### formId

                ```
                int formId
                ```

            -   #### formValues

                ```
                Map<String,​String> formValues
                ```

            -   #### formVersion

                ```
                int formVersion
                ```

            -   #### processId

                ```
                String processId
                ```

            -   #### processInstanceId

                ```
                int processInstanceId
                ```

            -   #### processVersion

                ```
                int processVersion
                ```

            -   #### startDateProcess

                ```
                Date startDateProcess
                ```

            -   #### taskObservations

                ```
                List<ProcessObservationVO> taskObservations
                ```

            -   #### tasksInfo

                ```
                List<ProcessTaskInfoVO> tasksInfo
                ```

    -   ### Class [com.fluig.sdk.api.workflow.ProcessObservationVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessObservationVO.html "class in com.fluig.sdk.api.workflow") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        \-7667153730110878241L

        -   ### Serialized Fields

            -   #### colleagueId

                ```
                String colleagueId
                ```

            -   #### id

                ```
                Long id
                ```

            -   #### movementSequence

                ```
                Integer movementSequence
                ```

            -   #### observation

                ```
                String observation
                ```

            -   #### observationDate

                ```
                Date observationDate
                ```

            -   #### processInstanceId

                ```
                Integer processInstanceId
                ```

            -   #### stateSequence

                ```
                Integer stateSequence
                ```

            -   #### threadSequence

                ```
                Integer threadSequence
                ```

    -   ### Class [com.fluig.sdk.api.workflow.ProcessStateVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessStateVO.html "class in com.fluig.sdk.api.workflow") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### sequence

                ```
                int sequence
                ```

                Atributo sequence do ProcessState int - sequence

            -   #### stateDescription

                ```
                String stateDescription
                ```

                Atributo stateDescription do ProcessState String - stateDescription

            -   #### stateName

                ```
                String stateName
                ```

                Atributo stateName do ProcessState String - stateName

            -   #### tenantId

                ```
                long tenantId
                ```

                Atributo tenantId do ProcessState long - tenantId

    -   ### Class [com.fluig.sdk.api.workflow.ProcessTaskInfoVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessTaskInfoVO.html "class in com.fluig.sdk.api.workflow") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### active

                ```
                boolean active
                ```

            -   #### colleagueName

                ```
                String colleagueName
                ```

            -   #### expired

                ```
                boolean expired
                ```

            -   #### movementSequence

                ```
                int movementSequence
                ```

            -   #### startDateTask

                ```
                Date startDateTask
                ```

            -   #### state

                ```
                ProcessStateVO state
                ```

            -   #### stateSequence

                ```
                int stateSequence
                ```

            -   #### status

                ```
                int status
                ```

            -   #### taskDeadline

                ```
                Date taskDeadline
                ```

            -   #### transferredSequence

                ```
                int transferredSequence
                ```

    -   ### Class [com.fluig.sdk.api.workflow.ProcessTaskVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessTaskVO.html "class in com.fluig.sdk.api.workflow") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### colleagueId

                ```
                String colleagueId
                ```

            -   #### companyId

                ```
                long companyId
                ```

            -   #### complement

                ```
                String complement
                ```

            -   #### movementSequence

                ```
                int movementSequence
                ```

            -   #### processInstanceId

                ```
                int processInstanceId
                ```

            -   #### selectedColleagueId

                ```
                String selectedColleagueId
                ```

            -   #### transferredSequence

                ```
                int transferredSequence
                ```

    -   ### Class [com.fluig.sdk.api.workflow.ProcessVersionVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessVersionVO.html "class in com.fluig.sdk.api.workflow") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### children

                ```
                List<ProcessVersionVO> children
                ```

                Atributo children do Processo List - children

            -   #### companyId

                ```
                long companyId
                ```

                Atributo companyId do Processo long - companyId

            -   #### favorite

                ```
                Boolean favorite
                ```

                Atributo favorite do Processo Boolean - favorite

            -   #### formId

                ```
                Integer formId
                ```

                Atributo formId do Processo Integer - formId

            -   #### processId

                ```
                String processId
                ```

                Atributo processId do Processo String - processId

            -   #### selected

                ```
                Boolean selected
                ```

                Atributo selected do Processo Boolean - selected

            -   #### versionDescription

                ```
                String versionDescription
                ```

                Atributo versionDescription do Processo String - versionDescription

    -   ### Class [com.fluig.sdk.api.workflow.RequestProcessTaskVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/RequestProcessTaskVO.html "class in com.fluig.sdk.api.workflow") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### cardFields

                ```
                Map<String,​String> cardFields
                ```

            -   #### deadlineDate

                ```
                Date deadlineDate
                ```

            -   #### endDate

                ```
                Date endDate
                ```

            -   #### fullTime

                ```
                Long fullTime
                ```

            -   #### percentageConcluded

                ```
                Long percentageConcluded
                ```

            -   #### periodId

                ```
                String periodId
                ```

            -   #### processDescription

                ```
                String processDescription
                ```

            -   #### processId

                ```
                String processId
                ```

            -   #### processInstanceId

                ```
                int processInstanceId
                ```

            -   #### processVersion

                ```
                int processVersion
                ```

            -   #### remainingTime

                ```
                Long remainingTime
                ```

            -   #### requesterCode

                ```
                String requesterCode
                ```

            -   #### requesterName

                ```
                String requesterName
                ```

            -   #### spentTime

                ```
                Long spentTime
                ```

            -   #### startDate

                ```
                Date startDate
                ```

            -   #### stateName

                ```
                String stateName
                ```

            -   #### statusTask

                ```
                int statusTask
                ```

            -   #### warningDate

                ```
                Date warningDate
                ```

    -   ### Class [com.fluig.sdk.api.workflow.RequestSLAVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/RequestSLAVO.html "class in com.fluig.sdk.api.workflow") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### actualTasks

                ```
                List<RequestTaskSLAVO> actualTasks
                ```

            -   #### cardFields

                ```
                Map<String,​String> cardFields
                ```

            -   #### deadlineDate

                ```
                Date deadlineDate
                ```

            -   #### endDate

                ```
                Date endDate
                ```

            -   #### expandables

                ```
                List<String> expandables
                ```

            -   #### fullTime

                ```
                Long fullTime
                ```

            -   #### percentageConcluded

                ```
                Long percentageConcluded
                ```

            -   #### processDescription

                ```
                String processDescription
                ```

            -   #### processId

                ```
                String processId
                ```

            -   #### processInstanceId

                ```
                int processInstanceId
                ```

            -   #### processVersion

                ```
                int processVersion
                ```

            -   #### remainingTime

                ```
                Long remainingTime
                ```

            -   #### requesterCode

                ```
                String requesterCode
                ```

            -   #### requesterLocal

                ```
                LocalVO requesterLocal
                ```

            -   #### requesterName

                ```
                String requesterName
                ```

            -   #### spentTime

                ```
                Long spentTime
                ```

            -   #### startDate

                ```
                Date startDate
                ```

            -   #### statusRequest

                ```
                String statusRequest
                ```

            -   #### statusSla

                ```
                String statusSla
                ```

            -   #### warningDate

                ```
                Date warningDate
                ```

    -   ### Class [com.fluig.sdk.api.workflow.RequestTaskSLAVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/RequestTaskSLAVO.html "class in com.fluig.sdk.api.workflow") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### activityCode

                ```
                int activityCode
                ```

            -   #### activityDescription

                ```
                String activityDescription
                ```

            -   #### assigneeCode

                ```
                String assigneeCode
                ```

            -   #### assigneeLocal

                ```
                LocalVO assigneeLocal
                ```

            -   #### assigneeName

                ```
                String assigneeName
                ```

    -   ### Class [com.fluig.sdk.api.workflow.ResumeProcessTaskVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ResumeProcessTaskVO.html "class in com.fluig.sdk.api.workflow") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### expired

                ```
                int expired
                ```

            -   #### onTime

                ```
                int onTime
                ```

            -   #### warning

                ```
                int warning
                ```

    -   ### Class [com.fluig.sdk.api.workflow.ResumeRequestsSLAVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ResumeRequestsSLAVO.html "class in com.fluig.sdk.api.workflow") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### canceledExpiredRequests

                ```
                Long canceledExpiredRequests
                ```

            -   #### canceledOnTimeRequests

                ```
                Long canceledOnTimeRequests
                ```

            -   #### canceledRequests

                ```
                Long canceledRequests
                ```

            -   #### canceledWarningRequests

                ```
                Long canceledWarningRequests
                ```

            -   #### finishedExpiredRequests

                ```
                Long finishedExpiredRequests
                ```

            -   #### finishedOnTimeRequests

                ```
                Long finishedOnTimeRequests
                ```

            -   #### finishedRequests

                ```
                Long finishedRequests
                ```

            -   #### finishedWarningRequests

                ```
                Long finishedWarningRequests
                ```

            -   #### openExpiredRequests

                ```
                Long openExpiredRequests
                ```

            -   #### openOnTimeRequests

                ```
                Long openOnTimeRequests
                ```

            -   #### openRequests

                ```
                Long openRequests
                ```

            -   #### openWarningRequests

                ```
                Long openWarningRequests
                ```

    -   ### Class [com.fluig.sdk.api.workflow.WorkflowVO](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/WorkflowVO.html "class in com.fluig.sdk.api.workflow") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### active

                ```
                Boolean active
                ```

                Atributo active do Workflow Boolean - active

            -   #### attachmentSeqId

                ```
                Integer attachmentSeqId
                ```

                Atributo attachmentSeqId do Workflow Integer - attachmentSeqId

            -   #### canCancel

                ```
                Boolean canCancel
                ```

                Atributo canCancel do Workflow Boolean - canCancel

            -   #### canTake

                ```
                Boolean canTake
                ```

                Atributo canTake do Workflow Boolean - canTake

            -   #### code

                ```
                String code
                ```

                Atributo code do Workflow String - code

            -   #### colleagueName

                ```
                String colleagueName
                ```

                Atributo colleagueName do Workflow String - colleagueName

            -   #### companyId

                ```
                long companyId
                ```

                Atributo companyId do Workflow long - companyId

            -   #### deadlineDate

                ```
                Date deadlineDate
                ```

                Atributo deadlineDate do Workflow Date - deadlineDate

            -   #### deadlineText

                ```
                String deadlineText
                ```

                Atributo deadlineText do Workflow String - deadlineText

            -   #### documentDescription

                ```
                String documentDescription
                ```

                Atributo documentDescription do Workflow String - documentDescription

            -   #### mainAttachmentDocumentId

                ```
                Integer mainAttachmentDocumentId
                ```

                Atributo mainAttachmentDocumentId do Workflow Integer - mainAttachmentDocumentId

            -   #### mainAttachmentDocumentVersion

                ```
                int mainAttachmentDocumentVersion
                ```

                Atributo mainAttachmentDocumentVersion do Workflow int - mainAttachmentDocumentVersion

            -   #### mobileReady

                ```
                Boolean mobileReady
                ```

                Atributo mobileReady do Workflow Boolean - mobileReady

            -   #### movementHour

                ```
                String movementHour
                ```

                Atributo movementHour do Workflow String - movementHour

            -   #### movementSequence

                ```
                int movementSequence
                ```

                Atributo movementSequence do Workflow int - movementSequence

            -   #### processDescription

                ```
                String processDescription
                ```

                Atributo processDescription do Workflow String - processDescription

            -   #### processId

                ```
                String processId
                ```

                Atributo processId do Workflow String - processId

            -   #### processInstanceId

                ```
                int processInstanceId
                ```

                Atributo processInstanceId do Workflow int - processInstanceId

            -   #### requesterId

                ```
                String requesterId
                ```

                Atributo requesterId do Workflow String - requesterId

            -   #### requesterName

                ```
                String requesterName
                ```

                Atributo requesterName do Workflow String - requesterName

            -   #### rowId

                ```
                int rowId
                ```

                Atributo rowId do Workflow int - rowId

            -   #### sourceProcess

                ```
                Integer sourceProcess
                ```

                Atributo sourceProcess do Workflow Integer - sourceProcess

            -   #### sourceThreadSequence

                ```
                Integer sourceThreadSequence
                ```

                Atributo sourceThreadSequence do Workflow Integer - sourceThreadSequence

            -   #### stateDescription

                ```
                String stateDescription
                ```

                Atributo stateDescription do Workflow String - stateDescription

            -   #### stateId

                ```
                Integer stateId
                ```

                Atributo stateId do Workflow Integer - stateId

            -   #### url

                ```
                String url
                ```

                Atributo url do Workflow String - url

            -   #### version

                ```
                Integer version
                ```

                Atributo version do Workflow Integer - version


-   ## Package com.fluig.sdk.document

    -   ### Class [com.fluig.sdk.document.FileUploadVO](https://api.fluig.com/old/sdk/com/fluig/sdk/document/FileUploadVO.html "class in com.fluig.sdk.document") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        7289723995859601758L

        -   ### Serialized Fields

            -   #### comments

                ```
                String comments
                ```

            -   #### id

                ```
                int id
                ```

            -   #### name

                ```
                String name
                ```

            -   #### uploadId

                ```
                String uploadId
                ```

            -   #### version

                ```
                int version
                ```

            -   #### versionAction

                ```
                String versionAction
                ```


-   ## Package com.fluig.sdk.exception

    -   ### Class [com.fluig.sdk.exception.ApplicationKeyCreationException](https://api.fluig.com/old/sdk/com/fluig/sdk/exception/ApplicationKeyCreationException.html "class in com.fluig.sdk.exception") extends com.fluig.sdk.api.common.SDKException implements Serializable

    -   ### Class [com.fluig.sdk.exception.ApplicationKeyNotFoundException](https://api.fluig.com/old/sdk/com/fluig/sdk/exception/ApplicationKeyNotFoundException.html "class in com.fluig.sdk.exception") extends com.fluig.sdk.api.common.SDKException implements Serializable

    -   ### Class [com.fluig.sdk.exception.BPMCardIndexAttachmentNotDefinedException](https://api.fluig.com/old/sdk/com/fluig/sdk/exception/BPMCardIndexAttachmentNotDefinedException.html "class in com.fluig.sdk.exception") extends com.fluig.sdk.api.common.SDKException implements Serializable

        serialVersionUID:

        1L

    -   ### Class [com.fluig.sdk.exception.BPMDocumentSecurityNotDefinedException](https://api.fluig.com/old/sdk/com/fluig/sdk/exception/BPMDocumentSecurityNotDefinedException.html "class in com.fluig.sdk.exception") extends com.fluig.sdk.api.common.SDKException implements Serializable

        serialVersionUID:

        1L

    -   ### Class [com.fluig.sdk.exception.BPMFileNotFoundException](https://api.fluig.com/old/sdk/com/fluig/sdk/exception/BPMFileNotFoundException.html "class in com.fluig.sdk.exception") extends com.fluig.sdk.api.common.SDKException implements Serializable

        serialVersionUID:

        1L

    -   ### Class [com.fluig.sdk.exception.BPMRenameAttachmentFileFailedException](https://api.fluig.com/old/sdk/com/fluig/sdk/exception/BPMRenameAttachmentFileFailedException.html "class in com.fluig.sdk.exception") extends com.fluig.sdk.api.common.SDKException implements Serializable

        serialVersionUID:

        1L


-   ## Package com.fluig.sdk.filter

    -   ### Class [com.fluig.sdk.filter.FilterFieldVO](https://api.fluig.com/old/sdk/com/fluig/sdk/filter/FilterFieldVO.html "class in com.fluig.sdk.filter") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### color

                ```
                String color
                ```

            -   #### fontSize

                ```
                Integer fontSize
                ```

            -   #### fontStyle

                ```
                String fontStyle
                ```

            -   #### fontWeight

                ```
                String fontWeight
                ```

            -   #### id

                ```
                Long id
                ```

            -   #### key

                ```
                String key
                ```

            -   #### label

                ```
                String label
                ```

            -   #### orderPosition

                ```
                Integer orderPosition
                ```

            -   #### sensitiveData

                ```
                Boolean sensitiveData
                ```

            -   #### slotId

                ```
                Integer slotId
                ```

            -   #### textDecoration

                ```
                String textDecoration
                ```

            -   #### type

                ```
                String type
                ```

            -   #### value

                ```
                String value
                ```

            -   #### visible

                ```
                Boolean visible
                ```

    -   ### Class [com.fluig.sdk.filter.FilterGroupResultVO](https://api.fluig.com/old/sdk/com/fluig/sdk/filter/FilterGroupResultVO.html "class in com.fluig.sdk.filter") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### filterId

                ```
                Long filterId
                ```

            -   #### filterName

                ```
                String filterName
                ```

            -   #### groupCode

                ```
                String groupCode
                ```

            -   #### groupDescription

                ```
                String groupDescription
                ```

            -   #### groupId

                ```
                Long groupId
                ```

            -   #### groupParticipantsCount

                ```
                long groupParticipantsCount
                ```

            -   #### id

                ```
                Long id
                ```

            -   #### permission

                ```
                Integer permission
                ```

            -   #### roleCode

                ```
                String roleCode
                ```

            -   #### roleDescription

                ```
                String roleDescription
                ```

            -   #### roleId

                ```
                Long roleId
                ```

            -   #### userEmail

                ```
                String userEmail
                ```

            -   #### userFullName

                ```
                String userFullName
                ```

            -   #### userLogin

                ```
                String userLogin
                ```

            -   #### userTenantId

                ```
                Long userTenantId
                ```

    -   ### Class [com.fluig.sdk.filter.FilterGroupVO](https://api.fluig.com/old/sdk/com/fluig/sdk/filter/FilterGroupVO.html "class in com.fluig.sdk.filter") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### entityPermissions

                ```
                Map<String,​Integer> entityPermissions
                ```

            -   #### filterId

                ```
                Long filterId
                ```

            -   #### groupsCode

                ```
                List<String> groupsCode
                ```

            -   #### rolesCode

                ```
                List<String> rolesCode
                ```

            -   #### tenantUserLogin

                ```
                List<String> tenantUserLogin
                ```

    -   ### Class [com.fluig.sdk.filter.FilterOrderVO](https://api.fluig.com/old/sdk/com/fluig/sdk/filter/FilterOrderVO.html "class in com.fluig.sdk.filter") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### field

                ```
                FilterFieldVO field
                ```

            -   #### id

                ```
                Long id
                ```

            -   #### order

                ```
                String order
                ```

    -   ### Class [com.fluig.sdk.filter.FilterResultVO](https://api.fluig.com/old/sdk/com/fluig/sdk/filter/FilterResultVO.html "class in com.fluig.sdk.filter") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### fields

                ```
                List<FilterFieldVO> fields
                ```

            -   #### filterId

                ```
                Long filterId
                ```

            -   #### filterName

                ```
                String filterName
                ```

            -   #### filterOrder

                ```
                FilterOrderVO filterOrder
                ```

            -   #### isPublicFilter

                ```
                boolean isPublicFilter
                ```

            -   #### permission

                ```
                Integer permission
                ```

            -   #### position

                ```
                int position
                ```

            -   #### processId

                ```
                List<String> processId
                ```

            -   #### processName

                ```
                List<String> processName
                ```

            -   #### userId

                ```
                Long userId
                ```

            -   #### userName

                ```
                String userName
                ```

    -   ### Class [com.fluig.sdk.filter.FilterSearchVO](https://api.fluig.com/old/sdk/com/fluig/sdk/filter/FilterSearchVO.html "class in com.fluig.sdk.filter") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### limit

                ```
                int limit
                ```

            -   #### offset

                ```
                int offset
                ```

            -   #### onlyMyFilters

                ```
                boolean onlyMyFilters
                ```

            -   #### pattern

                ```
                String pattern
                ```

    -   ### Class [com.fluig.sdk.filter.FilterUpdateNameVO](https://api.fluig.com/old/sdk/com/fluig/sdk/filter/FilterUpdateNameVO.html "class in com.fluig.sdk.filter") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### name

                ```
                @NotNull String name
                ```

    -   ### Class [com.fluig.sdk.filter.FilterVO](https://api.fluig.com/old/sdk/com/fluig/sdk/filter/FilterVO.html "class in com.fluig.sdk.filter") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### fields

                ```
                List<FilterFieldVO> fields
                ```

            -   #### filterOrder

                ```
                FilterOrderVO filterOrder
                ```

            -   #### id

                ```
                Long id
                ```

            -   #### isPublic

                ```
                boolean isPublic
                ```

            -   #### name

                ```
                String name
                ```

            -   #### processId

                ```
                String processId
                ```

            -   #### type

                ```
                String type
                ```


-   ## Package com.fluig.sdk.identity

    -   ### Class [com.fluig.sdk.identity.UserAuthTokenSessionVO](https://api.fluig.com/old/sdk/com/fluig/sdk/identity/UserAuthTokenSessionVO.html "class in com.fluig.sdk.identity") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### accessToken

                ```
                String accessToken
                ```

            -   #### companyId

                ```
                String companyId
                ```

            -   #### domain

                ```
                String domain
                ```

            -   #### expiresIn

                ```
                Long expiresIn
                ```

            -   #### issuedTime

                ```
                Long issuedTime
                ```

            -   #### refreshToken

                ```
                String refreshToken
                ```

            -   #### session

                ```
                HashMap<String,​String> session
                ```

            -   #### userIdIdp

                ```
                String userIdIdp
                ```


-   ## Package com.fluig.sdk.page

    -   ### Class [com.fluig.sdk.page.PageMobileApiVO](https://api.fluig.com/old/sdk/com/fluig/sdk/page/PageMobileApiVO.html "class in com.fluig.sdk.page") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### code

                ```
                String code
                ```

            -   #### isMobileEnabled

                ```
                boolean isMobileEnabled
                ```

            -   #### title

                ```
                String title
                ```

            -   #### widgets

                ```
                List<PageWidgetMobileApiVO> widgets
                ```

    -   ### Class [com.fluig.sdk.page.PageWidgetMobileApiVO](https://api.fluig.com/old/sdk/com/fluig/sdk/page/PageWidgetMobileApiVO.html "class in com.fluig.sdk.page") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### code

                ```
                String code
                ```

            -   #### id

                ```
                Long id
                ```

            -   #### isMobileEnabled

                ```
                boolean isMobileEnabled
                ```

            -   #### order

                ```
                Long order
                ```

            -   #### slot

                ```
                String slot
                ```

    -   ### Class [com.fluig.sdk.page.PublicApiPageVO](https://api.fluig.com/old/sdk/com/fluig/sdk/page/PublicApiPageVO.html "class in com.fluig.sdk.page") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### children

                ```
                List<PublicApiPageVO> children
                ```

            -   #### description

                ```
                String description
                ```

            -   #### enabledMobileApp

                ```
                Boolean enabledMobileApp
                ```

            -   #### friendlyURL

                ```
                String friendlyURL
                ```

            -   #### iconFont

                ```
                String iconFont
                ```

            -   #### lastUpdate

                ```
                Long lastUpdate
                ```

            -   #### pageCode

                ```
                String pageCode
                ```

            -   #### pageIcon

                ```
                String pageIcon
                ```

            -   #### pageId

                ```
                Long pageId
                ```

            -   #### parentPageCode

                ```
                String parentPageCode
                ```

            -   #### searchLevel

                ```
                int searchLevel
                ```

            -   #### title

                ```
                String title
                ```

            -   #### uri

                ```
                String uri
                ```


-   ## Package com.fluig.sdk.tenant

    -   ### Class [com.fluig.sdk.tenant.AdminUserVO](https://api.fluig.com/old/sdk/com/fluig/sdk/tenant/AdminUserVO.html "class in com.fluig.sdk.tenant") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### code

                ```
                String code
                ```

                Atributo código do usuário administrador String - code

            -   #### email

                ```
                String email
                ```

                Atributo email do usuário administrador String - email

            -   #### firstName

                ```
                String firstName
                ```

                Atributo primeiro nome do usuário administrador String - firstName

            -   #### lastName

                ```
                String lastName
                ```

                Atributo último nome do usuário administrador String - lastName

            -   #### login

                ```
                String login
                ```

                Atributo login do usuário administrador String - login

            -   #### password

                ```
                String password
                ```

                Atributo senha do usuário administrador String - password

    -   ### Class [com.fluig.sdk.tenant.TenantVO](https://api.fluig.com/old/sdk/com/fluig/sdk/tenant/TenantVO.html "class in com.fluig.sdk.tenant") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### adminUser

                ```
                AdminUserVO adminUser
                ```

                Atributo AdminUserVO - adminUser

            -   #### code

                ```
                String code
                ```

                Atributo código do tenant String - code

            -   #### data

                ```
                Map<String,​String> data
                ```

                Atributo para dados adicionais Map - data

            -   #### description

                ```
                String description
                ```

                Atributo descrição String - description

            -   #### federalId

                ```
                String federalId
                ```

                Atributo id federal String - federalId

            -   #### id

                ```
                Long id
                ```

                Atributo id do tenant Long - id

            -   #### idpId

                ```
                String idpId
                ```

                Atributo ipdId String - idpId

            -   #### idpLogOff

                ```
                Boolean idpLogOff
                ```

                Atributo idpLogOff Boolean - idpLogOff

            -   #### organizationUrl

                ```
                String organizationUrl
                ```

                Atributo url da organização String - organizationUrl

            -   #### removeVolume

                ```
                Boolean removeVolume
                ```

                Atributo, se volume pode ser removido Boolean - removeVolume

            -   #### tenantActive

                ```
                Boolean tenantActive
                ```

                Atributo, se a empresa está ou não ativa Boolean - tenantActive

            -   #### thumbnailEnabled

                ```
                Boolean thumbnailEnabled
                ```

                Atributo, permite thumbnail Boolean - thumbnailEnabled

            -   #### volumeDir

                ```
                String volumeDir
                ```

                Atributo diretório do volume String - volumeDir


-   ## Package com.fluig.sdk.user

    -   ### Class [com.fluig.sdk.user.ColleagueVO](https://api.fluig.com/old/sdk/com/fluig/sdk/user/ColleagueVO.html "class in com.fluig.sdk.user") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### code

                ```
                String code
                ```

                Código do usuário, também conhecido como matrícula.

            -   #### email

                ```
                String email
                ```

                E-mail.

            -   #### firstName

                ```
                String firstName
                ```

                Nome.

            -   #### fullName

                ```
                String fullName
                ```

                Nome completo.

            -   #### lastName

                ```
                String lastName
                ```

                Sobrenome.

            -   #### login

                ```
                String login
                ```

                Atributo String - login

    -   ### Class [com.fluig.sdk.user.UserPasswordVO](https://api.fluig.com/old/sdk/com/fluig/sdk/user/UserPasswordVO.html "class in com.fluig.sdk.user") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### confirmNewPassword

                ```
                String confirmNewPassword
                ```

                Confirmação da nova Senha.

            -   #### currentPassword

                ```
                String currentPassword
                ```

                Senha atual.

            -   #### login

                ```
                String login
                ```

                Login.

            -   #### newPassword

                ```
                String newPassword
                ```

                Nova Senha.

    -   ### Class [com.fluig.sdk.user.UserVO](https://api.fluig.com/old/sdk/com/fluig/sdk/user/UserVO.html "class in com.fluig.sdk.user") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### code

                ```
                String code
                ```

                Código do usuário, também conhecido como matrícula.

            -   #### email

                ```
                String email
                ```

                E-mail.

            -   #### extData

                ```
                HashMap<String,​Object> extData
                ```

                Informações extras.

            -   #### firstName

                ```
                String firstName
                ```

                Nome.

            -   #### fullName

                ```
                String fullName
                ```

                Nome completo.

            -   #### groups

                ```
                List<String> groups
                ```

                Groups

            -   #### id

                ```
                Long id
                ```

                Identificador interno e único.

            -   #### isActive

                ```
                Boolean isActive
                ```

                Is Active

            -   #### lastName

                ```
                String lastName
                ```

                Sobrenome.

            -   #### login

                ```
                String login
                ```

                Atributo String - login

            -   #### password

                ```
                String password
                ```

                Senha.

            -   #### roles

                ```
                List<String> roles
                ```

                Roles

            -   #### timezone

                ```
                String timezone
                ```

                Timezone

            -   #### tokenAccess

                ```
                String tokenAccess
                ```

                Token Access.

            -   #### tokenSecret

                ```
                String tokenSecret
                ```

                Token Secret.

            -   #### userUUID

                ```
                String userUUID
                ```

                Identificador exposto.


-   ## Package com.fluig.sdk.web

    -   ### Class [com.fluig.sdk.web.FluigRestConvertDateZone](https://api.fluig.com/old/sdk/com/fluig/sdk/web/FluigRestConvertDateZone.html "class in com.fluig.sdk.web") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

    -   ### Class [com.fluig.sdk.web.FluigRestResult](https://api.fluig.com/old/sdk/com/fluig/sdk/web/FluigRestResult.html "class in com.fluig.sdk.web") extends [Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang") implements Serializable

        serialVersionUID:

        1L

        -   ### Serialized Fields

            -   #### content

                ```
                Object content
                ```

                Objeto de retorno json

            -   #### message

                ```
                FluigMessage message
                ```

                Mensagem de retorno, com detalhe e tipo de mensagem INFO, WARNING, ERROR, QUESTION
