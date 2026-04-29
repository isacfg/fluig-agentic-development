# Subir arquivo para o GED via API

> **Fonte:** [https://fluiggers.com.br/t/subir-arquivo-para-o-ged-via-api/141](https://fluiggers.com.br/t/subir-arquivo-para-o-ged-via-api/141)
> **Categoria:** API`s Fluig
> **Criado em:** 16/03/2021, 16:06
> **Visualizações:** 3760 | **Likes:** 8 | **Respostas:** 6

---

## Pergunta original

**Danilo Marinho** (@danilo.marinho) — 16/03/2021, 16:06 | ❤️ 1

Há alguma maneira de subir um arquivo para o GED usando a API REST do Fluig?

---

## Resposta #1

**Igor Rodrigues** (@fluigor.com.br) — 16/03/2021, 16:42 | ❤️ 4

Segue um exemplo abaixo de Consulta de documentos

```javascript
$.ajax({
			url: '/api/public/ecm/document/listDocumentWithChildren/' + FOLDER_ID,
			type: 'GET',
			async: false,
			contentType: "application/json",
			success: (data) => {
				// Garante execução única
				if(Object.keys(ATTACHMENT_LIST).length == 0 && $('#tipoVaga').val() == "Matriz") {
					// Cria um objeto onde cada KEY corresponde a um documento na pasta do funcionário
					let documentChildren = data.content[0].children
					if(documentChildren.length > 0) {
						documentChildren.map((e) => ATTACHMENT_LIST[e.id] = e)
					}

					// Se o campo de anexo foi preenchido, ele tem o id do documento
					// Usamos esse valor para acessar a KEY do objeto montado anteriormente (hashmap) e obter dados de interesse
					let anexoRGFrente = $('#anexoRGFrente').val()
					if(anexoRGFrente) {
						renderAnexo({
							title: "RG (Frente)",
							url: ATTACHMENT_LIST[anexoRGFrente].fileURL,
							mediaType: getMediaType(ATTACHMENT_LIST[anexoRGFrente].description)
						})
					}

'
```

---

## Resposta #2

**Igor Rodrigues** (@fluigor.com.br) — 16/03/2021, 16:49 | ❤️ 3

Segue abaixo exemplo de upload

```javascript
// Upload de arquivos
    $('.btn.--upload').on("click", (e)=> {
        let ARR_DOCUMENTID = []
        const FOLDER_ID = $('#codigoPasta').val()
        let form = new FormData()
        let config = DatasetFactoryAuth.getOAuthConfig()
        let request_data_ = {
            url: WCMAPI.getServerURL() + '/ecm/upload',
            method: 'POST',
            "cache-control": "no-cache",
            ajaxData: JSON.stringify({ form }),
            data: {}
        }

        $.ajax({
            url: '/ecm/upload',
            method: 'POST',
            data: form,
            processData: false,
            contentType: false,
            type: 'POST',
            headers: config.oauth.toHeader(config.oauth.authorize(request_data_, config.token)),
        }, 'json')

        let el = $(e.currentTarget)
        let inputId = el.children('input').attr("id")
        $(`#${inputId}`).fileupload({
            dataType: 'json',
            done: (e, data) => {
                $.each(data.result.files, (i, file) => {
                    let dataFilename = el.find("input").attr("data-filename")
                    let inputName = el.find("input").attr("data-inputname")
                    let multiple = el.find("input").attr("multiple")
                    let descricaoAnexo = `${dataFilename} - ${new moment().format('DD/MM/YYYY')}`
                    let extensao = getFileExtension(file.name)
                    const LOADING = FLUIGC.loading($('.form-box:visible'))
                    LOADING.show()

                    $.ajax({
                        async: true,
                        type: "POST",
                        contentType: "application/json",
                        url: '/api/public/ecm/document/createDocument',
                        headers: config.oauth.toHeader(config.oauth.authorize(request_data_, config.token)),
                        data: JSON.stringify({
                            "description": descricaoAnexo + extensao,
                            "parentId": FOLDER_ID,
                            "attachments": [{ "fileName": file.name }],
                        }),
                        error: function () {
                            FLUIGC.toast({
                                title: '',
                                message: "Falha ao enviar",
                                type: 'danger'
                            });
                            LOADING.hide()
                        },
                        success: function (data) {
                            let attachmentId = data.content.id
                            let attachmentDoc = DatasetFactoryAuth.getDownloadURL(attachmentId)
                            if(multiple == 'multiple'){
                                ARR_DOCUMENTID.push(attachmentId)
                                $(`#${inputName}`).val(ARR_DOCUMENTID.join(';'))

                                el.find(".js-anexo-texto").html(`<i class="fa fa-check-circle"></i>`)
                                el.addClass('--success').removeClass('--danger')

                                let filenameText = (file.name.length > 50) ? `${file.name.substr(0,40)}...${file.name.substr(-10)}` : file.name
                                el.closest(".js-anexo-box").find('p').append(`
                                    ${dataFilename}: <a href="${attachmentDoc.fileURL}" target="_blank">
                                        <i class="fa fa-paperclip"></i> ${filenameText}
                                    </a>
                                `)
                            }
```

---

## Resposta #3

**Wasley Santos** (@Wasley_Santos) — 27/03/2021, 11:09

Oi [@fluigor.com.br](/u/fluigor.com.br) esse exemplo para upload se aplicaria também a páginas públicas ou apenas para páginas já autenticadas?

---

## Resposta #4

**Helbert Campos** (@helbert_campos) — 28/03/2021, 22:45

Fizemos um painel simplificado para usuários fazerem upload de documentos no ECM: [Fluig - Upload de Arquivos no GED - YouTube](https://youtu.be/HNDl6FALD9s)

![Screen Shot 2021-03-28 at 22.41.01](https://fluiggers.com.br/uploads/default/optimized/1X/8be977d4f306824e39078643e470271cf0637813_2_517x278.jpeg)

Usamos a mesma técnica que o [@fluigor.com.br](/u/fluigor.com.br) mostrou acima: `/ecm/upload` e depois `/api/public/ecm/document/createDocument`

Usamos o “DropzoneJS” ([https://www.dropzonejs.com](https://www.dropzonejs.com)) na época para ajudar os usuários a fazerem upload em lote.

O interessante é que o usuário seleciona informações básicas dos documentos no próprio painel (vídeo acima) e o mesmo já faz upload organizando os arquivos dentro das pastas certas, adicionando os respectivos metadados para indexação.

Mas para fazer isso em uma página pública [@Wasley\_Santos](/u/wasley_santos) (pelo que entendi da sua necessidade), daí precisa adicionar segurança … pois não seria interessante fazer as chamadas do frontend diretamente para as APIs do Fluig … você teria que criar um backend pra isso (internamente no Fluig via Java ou externamente com a linguagem que você preferir)

---

## Resposta #5

**Marcos Vinicios de Carvalho** (@mcarvalho1994) — 05/05/2021, 17:07

Prezados, boa tarde!
[@fluigor.com.br](/u/fluigor.com.br) e [@helbert\_campos](/u/helbert_campos) estou com a mesma dúvida do amigo aí em cima, preciso fazer o upload de arquivos de um input file mas estou com dificuldade.

Tenho um campo input file dentro de uma tabela pai filho

`<input type="file" class="form-control" name="tb_anexos_sol_arq" id="tb_anexos_sol_arq" onchange="setFileProperties(this)" />`

E tenho a seguinte function:
function setFileProperties(fileField) {

```
let fileName = fileField.files[0].name;

    let fileExtension = fileName.split(".");

    let date = new Date();

    let dateBrTimeZone = new Date(date.valueOf() - date.getTimezoneOffset() * 60000);

    let dateString = dateBrTimeZone.toISOString().slice(0,23).replace(/[^0-9]+/g,"");

    let newFileName = dateString + "." + fileExtension[1];

    let fieldName = fileField.name.split("___");

    var formData = new FormData();

    formData.append('file', fileField.files[0]);

    $.ajax({

        method: 'POST',

        url: '/ecm/upload',

        data: {

            userId: '101614',

            uploadWithTimeStamp: true,

            body: formData

          },

        processData: false,

        success: function(data) {

        alert(data);

        },

        error: function(err) {

        alert("ERRO: Tente novamente mais tarde. ");

        console.log(err);

        }

    })
```

---

## Resposta #6

**Bruno Henrique** (@Bruno_Henrique) — 09/06/2025, 17:41

[@helbert\_campos](/u/helbert_campos),
Boa tarde estou com uma demanda para que uma página pública anexe arquivos no GED do Fluig, hoje uso uma API JAVA + MAVEN pra fazer a parte de autenticação (já utilizo pra consultas de datasets), porém ainda não consegui implementar a função de anexar parece que o file não vai corretamente do front para essa API. Conseguiria me dar um help?

---

## Resposta #7

**Daniel Sales** (@Daniel_Sales) — 11/06/2025, 22:16

Procure pelo git hub do [@Bruno\_Gasparetto](/u/bruno_gasparetto) ele tem um exemplo de envio via front end muito bom
e a totvs tem no git de um bom exemplo de pagina publica que faz isso

---

## Resposta #8

**Bruno Henrique** (@Bruno_Henrique) — 12/06/2025, 15:26

eu vi e baixei o da totvs, mas não funcionou em página publica, somente em página autenticada. Procurei no github do [@Bruno\_Gasparetto](/u/bruno_gasparetto) mas não localizei esse exemplo ai

---

## Resposta #9

**Bruno Gasparetto** (@Bruno_Gasparetto) — 13/06/2025, 11:18

No meu gist postei um exemplo que exige estar **autenticado**.

Estou, só agora, começando a dar mais atenção às páginas públicas. Então sou super iniciante nessa parte.

---

## Resposta #10

**Bruno Henrique** (@Bruno_Henrique) — 13/06/2025, 13:21

Entendi, hoje eu estou usando o JAVA+MAVEN pra autenticar as consultas de dataset via página publica, porém usar o endpoint de upload com essa API JAVA+MAVEN ainda não deu certo

---

## Resposta #11

**Bruno Gasparetto** (@Bruno_Gasparetto) — 13/06/2025, 14:35

Se a intenção é receber o arquivo com `multipart/form-data` acho que o melhor é usar alguma biblioteca específica pra isso. Já vi muitas recomendações da [Apache Commons FileUpload](https://commons.apache.org/proper/commons-fileupload/index.html), porque usar nativamente no Java vai te obrigar a fazer todo o parser manual do body.

Mas vi essa resposta no [StackOverflow](https://stackoverflow.com/questions/2422468/how-can-i-upload-files-to-a-server-using-jsp-servlet#answer-2424824) explicando como fazer o parser usando HttpServletRequest. E com o Fluig roda num Tomcat (ao menos pelo que lembro é isso) talvez seja possível usar o exemplo da resposta.

* * *

Outra opção é converter o arquivo em base64 e enviar pra sua API. Nós fizemos algo parecido na extensão do VS Code. Porém ao invés de enviar o arquivo em base64 eu enviei como uma string mesmo, pois o conteúdo dele seria gravado diretamente no banco de dados (eram scripts de workflow). Se quiser ver como tratamos na widget tá aqui o [trecho do código](https://github.com/fluiggers/fluig-widget-helper/blob/8c9648c38cd143e505a940143d7c301baac96a16/src/main/java/com/fluiggers/services/Workflow.java#L86)

---
