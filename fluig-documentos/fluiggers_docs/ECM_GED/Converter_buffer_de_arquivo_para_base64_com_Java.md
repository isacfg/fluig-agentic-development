# Converter buffer de arquivo para base64 com Java

> **Fonte:** [https://fluiggers.com.br/t/converter-buffer-de-arquivo-para-base64-com-java/566](https://fluiggers.com.br/t/converter-buffer-de-arquivo-para-base64-com-java/566)
> **Categoria:** ECM / GED
> **Tags:** `java`
> **Criado em:** 19/07/2021, 18:08
> **Visualizações:** 2419 | **Likes:** 10 | **Respostas:** 10

---

## Pergunta original

**Sérgio Machado** (@sergio.machado) — 19/07/2021, 18:08

Fala Pessoal tudo bem?

Estou trabalhando em um projeto que ao finalizar a solicitação, preciso ler vários campos passar para um modelo de relatório e gravar o PDF em uma pasta no GED.

O maior desafio seria gerar esse PDF pelo back-end, sem interferência do usuário, estava pensando em criar um serviço em Nodejs que me retornasse um base64 ou o caminho físico do arquivo. Mas como meu tempo esta muito curto, resolvi procurar na internet, foi aí que achei o **[JsReport](https://jsreport.net)** que segue a mesma lógica que eu estava pensando em montar só que de uma forma bem mais robusta.

Ele roda até mesmo em Docker, mas no meu caso eu instalei como windows service, dessa forma sempre que eu iniciar minha maquina o serviço vai ser levantado de forma automática.

Ele devolve como resposta da minha requisição o próprio PDF renderizado, como é exibido na imagem abaixo, e não é possível setar o formato de recebimento do arquivo.

![Image 002](https://fluiggers.com.br/uploads/default/optimized/1X/ab734c8078513b0ebaf2c3ee87315ce2d62375ee_2_690x271.png)

E no log do fluig é exibido uma string gigantesca, a mesma string de quando você abre o arquivo com o bloco de notas.

![Image 001](https://fluiggers.com.br/uploads/default/original/1X/775688801f7a4f84bfe8e61cc20601565ca9d513.png)

Vasculhando o fórum dele o Autor diz que isso é um Buffer do arquivo. Ele dá até um exemplo para quem deseja enviar por email *new Buffer(response)* usando JavaScript. Mas o new Buffer não é suportado nos scripts de workflow.

Então vamos lá ao problema. Como eu faço para converter esse Buffer para base64 usando Java?

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 19/07/2021, 19:08 | ❤️ 2

Talvez seja isso que você quer. Eu criei um serviço externo que efetua a consulta no Fluig e então gera um PDF. No Fluig, numa atividade Serviço, eu baixo esse arquivo pra então criar o documento e anexar ao processo.

A função que utilizo é essa:

```javascript
function downloadProcessFormAsPdf() {
    var urlDownload = new java.net.URL(FluigPdfURL + "/endpoint.php?"
        + "user=usuario"
        + "&password=senha"
        + "&processId=" + getValue("WKNumProces")
    );

    var is 			= urlDownload.openStream();
    var bytesBuffer = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 8192);
    var baos 		= new java.io.ByteArrayOutputStream();
    var len 		= 0;

    while ((len = is.read(bytesBuffer, 0, bytesBuffer.length)) != -1) {
        baos.write(bytesBuffer, 0, len);
    }

    var fileContents = baos.toByteArray();
    baos.close();
    return fileContents;
}
```

Essa variável fileContents é um byte array, aí você pode fazer `var base64String = java.util.Base64.getEncoder().encodeToString(fileContents);` pra obter o base64.

Você pode ver o código completo aqui (nele eu crio o arquivo e tbm o anexo ao processo)

[gist.github.com](https://gist.github.com/brunogasparetto/2164c1245010ae4564a6c742b4feeccf)

#### [https://gist.github.com/brunogasparetto/2164c1245010ae4564a6c742b4feeccf](https://gist.github.com/brunogasparetto/2164c1245010ae4564a6c742b4feeccf)

##### fluig\_gerar\_pdf\_anexar\_processo.js

```JavaScript
/*
 * Necessário criar um serviço SOAP no Fluig (Painel de controle -> Desenvolvimento -> Serviços)
 * com o nome ECMDocumentService apontando para o /webdesk/ECMDocumentService?wsdl
 *
 * Mais informações: https://tdn.totvs.com/pages/releaseview.action?pageId=73084007
 */

/**
 * Cria o PDF do formulário
 *
```
This file has been truncated. [show original](https://gist.github.com/brunogasparetto/2164c1245010ae4564a6c742b4feeccf)

---

## Resposta #2

**Willian Laynes** (@Willian_Laynes) — 20/07/2021, 08:50 | ❤️ 2

Bom dia [@sergio.machado](/u/sergio.machado),

Se você possui uma API da pra usar consumindo um serviço e setando o tipo do retorno, depois só converte para base64.

Segue exemplo que funcionou para o meu caso, caso te ajude:

```auto
function createDataset(fields, constraints, sortFields) {
    var dataset = DatasetBuilder.newDataset();
    dataset.addColumn('MSG');
    dataset.addColumn("STATUS");

    try {

        var ID_REF = constraints[0].initialValue;

        var clientService = fluigAPI.getAuthorizeClientService();

        var data = {
            companyId: getValue("WKCompany") + '',
            serviceCode: 'seu serviço',
            endpoint: 'seu endpoint',
            method: 'get',
            timeoutService: '100',
            options: {
                encoding: 'ISO-8859-1',
                mediaType: 'application/pdf',
                useSSL: true
            },
            headers: {
                'Content-Type': 'application/pdf',
                'Content-disposition': 'attachment; filename=arquivo_gerado.pdf'
            }
        }

        var vo = clientService.invoke(JSON.stringify(data));

        if (vo.getResult() == null || vo.getResult().isEmpty()) {
            dataset.addRow(new Array("Retorno está vazio", false));
        } else {
            var statusHtml = vo.getHttpStatusResult();

            if (statusHtml == 200) {//VERIFIQUE SE ESSE É O SEU STATUS POSITIVO
                //ARQUIVO OK
                var stringValue = vo.getResult();
                if (stringValue.length() == 1) { stringValue = "0" + stringValue; }
                var str = new java.lang.String(stringValue); // Encode


               // dataset.addRow(new Array(str, true));
               var filecontent = java.util.Base64.getEncoder().encodeToString(str.getBytes("ISO-8859-1"));



                try {

                    dataset.addRow(new Array(filecontent, true));
                } catch (e) {
                    dataset.addRow(new Array(e.message, false));
                }
            }
        }
    } catch (err) {
        dataset.addRow(new Array(err, false));
    }
    return dataset;

}
```

O ID\_REF é caso você queira mandar um ID para pesquisar no seu endpoint.

---

## Resposta #3

**Sérgio Machado** (@sergio.machado) — 22/07/2021, 17:44

Muito obrigado Burno, me diz uma coisa, esse teu serviço acessando essa URL no navegador ele abre o próprio PDF?

Pergunto isso pois essa api que estou usando, no header da resposta da requisição é retornado um link para o PDF, testei usando esse link, mas não deu certo. Também não lembro exatamente o erro, mais tarde posto aqui pra você ver.

---

## Resposta #4

**Sérgio Machado** (@sergio.machado) — 22/07/2021, 17:52

Muito obrigado Willian, com esse teu exemplo consegui gerar o base64, no meu caso precisei apenas passar na requisição

```auto
options: {
                encoding: 'ISO-8859-1',
                mediaType: 'application/pdf',
            },
```

Agora estou enfrentando um outro problema, como você faz para passar o retorno desse dataset para o setFilecontent?

Fiz muitos testes aqui e sempre cai nesse erro

```auto
InternalError: Can't find method com.totvs.technology.ecm.dm.ws.Attachment.setFilecontent(java.lang.String)
```

O interessante é que se eu copio o base64 gerado, e faço um teste pelo SoapUi exatamente com as mesmas informações, o arquivo é criado com sucesso, agora se eu colo essa string direto em setFilecontent ou coloco em uma variável, cai nesse erro aí colei acima, bem estranho essas coisas.

Nunca tive problema antes com isso, sempre que eu preciso ler um arquivo físico da maquina e transformar em base64, eu utilizo esse código aqui e funciona 100%.

```auto
var byteArray = java.nio.file.Files.readAllBytes(java.nio.file.Paths.get("CAMINHO DO SEU ARQUIVO")); // Transforma o conteúdo do arquivo para base64
```

---

## Resposta #5

**Bruno Gasparetto** (@Bruno_Gasparetto) — 22/07/2021, 23:14

[@sergio.machado](/u/sergio.machado) , sim. O meu serviço retorna o PDF. Se abrir com um navegador, por exemplo, o PDF é exibido diretamente nele.

Teria que funcionar se você indicasse também o caminho direto ao PDF (seguindo esse link que você comentou que é devolvido).

---

## Resposta #6

**Sérgio Machado** (@sergio.machado) — 22/07/2021, 23:26

Pois é, achei bem estranho, amanha irei testar novamente, talvez eu tenha deixado passar algum detalhe na primeira vez que testei, fiz tantos testes que você nem imagina rs.

---

## Resposta #7 ✅ RESPOSTA ACEITA

**Willian Laynes** (@Willian_Laynes) — 23/07/2021, 08:47 | ❤️ 1

Bom dia [@sergio.machado](/u/sergio.machado)

Era pra ele já devolver o formato fileContent, pode ser que por ser devolução de dataset ele altere o formato.

Só me esclarece, você quer gravar o arquivo de retorno da API no Fluig isso? Se for isso eu tenho esse cara que eu criei ele utiliza os serviços SOAP do Fluig.

Antes de usar você precisa criar no Painel de controle do Fluig o serviço “ECMDocumentService”

```auto
{sua url}/webdesk/ECMDocumentService?wsdl
```

Depois sete alguns parâmetros no dataset (USUARIO, SENHA,ETC…)

```auto
function createDataset(fields, constraints, sortFields) {
		var dataset = DatasetBuilder.newDataset();
			dataset.addColumn('MSG');
			dataset.addColumn("STATUS");

		try{


        var ID_REF = constraints[0].initialValue;
        var FOLDER =  constraints[1].initialValue; //NUMERO DA PASTA AONDE SERÁ GRAVADO O ARQUIVO
        var DESCRIPTION =  constraints[2].initialValue; //DESCRICAO DO ARQUIVO
        var NAME =  constraints[3].initialValue; //NOME DO ARQUIVO

        var clientService = fluigAPI.getAuthorizeClientService();

        var data = {
            companyId: getValue("WKCompany") + '',
            serviceCode: 'seu serviço',
            endpoint: 'seu endpoint',
            method: 'get',
            timeoutService: '100',
            options: {
                encoding: 'ISO-8859-1',
                mediaType: 'application/pdf',
                useSSL: true
            },
            headers: {
                'Content-Type': 'application/pdf',
                'Content-disposition': 'attachment; filename=arquivo_gerado.pdf'
            }
        }


	    var vo = clientService.invoke(JSON.stringify(data));

	    if (vo.getResult() == null || vo.getResult().isEmpty()) {
		      dataset.addRow(new Array("Retorno está vazio",false));
	    } else {
			  var statusHtml = 	vo.getHttpStatusResult();

			  if(statusHtml==200){
					//ARQUIVO OK
					var stringValue =  vo.getResult();
					if (stringValue.length() == 1) { stringValue = "0" + stringValue; }
					var str = new java.lang.String(stringValue); // Encode
				    var filecontent = java.util.Base64.getEncoder().encodeToString(str.getBytes("ISO-8859-1"));

					var parentDocumentId = FOLDER;
					var documentDescription =  DESCRIPTION;
					var fileName = NAME+".pdf";
					var fileSize = 1;

					try {
		            	var response = processResult(callService(parentDocumentId,documentDescription,fileName,fileSize,filecontent));
		            	dataset.addRow( new Array(JSONUtil.toJSON( response ), true) );
					} catch(e) {
						dataset.addRow( new Array(e.message, false) );
					}
		 	 	}else{
		 	 		dataset.addRow( new Array("Status:"+statusHtml, false) );
		 	 	}
			}
	    } catch(err) {
	       dataset.addRow(new Array(err, false));
	    }
	return dataset;

}
// * ============================================================================================================================
// * @DESCRIPTION:      Chamada da configuração e execução do serviço
// * @PARAMS:           {}
// * @RETURN:           {}
// * ============================================================================================================================
function callService(parentDocumentId,documentDescription,fileName, fileSize,filecontent ){

	var company 	=	getValue("WKCompany");
	var user 		=	'SEU USUARIO'; //INSIRA SEU USUARIO
	var password 	=	'SEU PASSWORD'; //INSIRA SEU PASSWORD

	var serviceHelper 	= ServiceManager.getService("ECMDocumentService");//INSIRA SEU SERVIÇO ECMDocumentService
	var serviceLocator 	= serviceHelper.instantiate("com.totvs.technology.ecm.dm.ws.ECMDocumentServiceService");
	var service 		= serviceLocator.getDocumentServicePort();
	var response 		= service.createSimpleDocument(
								user,
								password,
								company,
								parentDocumentId,
								user,
								documentDescription,
								fillAttachmentArray(serviceHelper, fileName, fileSize,filecontent)
							);

	return response;
}

// * ============================================================================================================================
// * @DESCRIPTION:      Instância de AttachmentArray
// * @PARAMS:           {}
// * @RETURN:           {}
// * ============================================================================================================================
function fillAttachmentArray(serviceHelper, fileName, fileSize,filecontent) {
	var result = serviceHelper.instantiate("com.totvs.technology.ecm.dm.ws.AttachmentArray");
		result.getItem().add( fillAttachment( serviceHelper,fileName, fileSize,filecontent ) );
	return result;
}

// * ============================================================================================================================
// * @DESCRIPTION:      Instância de Attachment
// * @PARAMS:           {}
// * @RETURN:           {}
// * ============================================================================================================================
function fillAttachment( serviceHelper, fileName, fileSize,filecontent) {
	var attachment =  serviceHelper.instantiate("com.totvs.technology.ecm.dm.ws.Attachment");
		attachment.setFileName( fileName );
		attachment.setFileSize( fileSize );
		attachment.setAttach(false);
		attachment.setPrincipal(false);
    try{
		var	bytes = java.util.Base64.getDecoder().decode( new String( filecontent ) );
    	attachment.setFilecontent(bytes);
    }catch(e){
    	log.info('RESPOSTA ----> REQ UNI [ERR] '+e );
    }

    return attachment;
}
function processResult( result ) {
	result = result.getItem();
	var retornoArr = new Array();
	for (var i = 0; i < result.size(); i++) {
		retornoArr.push( JSONUtil.toJSON( result.get(i) ) );
	}
	return retornoArr;
}
```

---

## Resposta #8

**Bruno Gasparetto** (@Bruno_Gasparetto) — 23/07/2021, 09:05 | ❤️ 2

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/sergio.machado/48/659_2.png) sergio.machado:
>
> > `InternalError: Can't find method com.totvs.technology.ecm.dm.ws.Attachment.setFilecontent(java.lang.String)`

Esse método só aceita um byte, não uma string.

---

## Resposta #9

**Sérgio Machado** (@sergio.machado) — 23/07/2021, 09:26

Olá Willian, bom dia, exatamente isso, quero gravar pegar esse base64 e gerar um arquivo do GED.

Sim, estou usando esse mesmo serviço e também o método createSimpleDocument.

Irei observar teu código e fazer outros testes.

---

## Resposta #10

**Sérgio Machado** (@sergio.machado) — 23/07/2021, 09:42 | ❤️ 2

Cara funcionou, só precisei adicionar essa linha abaixo e passar o base64 gerado pelo dataset

```javascript
var bytes = java.util.Base64.getDecoder().decode(new String("SUA STRING BASE64 AQUI"));
```

Cara valeu, me ajudou demais.

---

## Resposta #11

**Willian Laynes** (@Willian_Laynes) — 23/07/2021, 09:44 | ❤️ 1

Show…é chato mexer nesse back-end que não sabe se é Java ou Javascript rs

---

## Resposta #12

**Sérgio Machado** (@sergio.machado) — 23/07/2021, 09:50

Nem me fale kkkk, comecei até fazer um curso de java pra tentar resolver melhor esses pepinos

---

## Resposta #13

**Bruno Gasparetto** (@Bruno_Gasparetto) — 23/07/2021, 11:23

Nunca fui muito fã de Java e também estou nessa luta pra entender um pouco mais. Essa mistura de JS antigo com Java confunde em várias situações.

---

## Resposta #14

**system** (@system) — 24/07/2021, 03:24

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
