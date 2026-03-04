# Cliente externo sem usuário Fluig startar um processo e anexar documentos

> **Fonte:** [https://fluiggers.com.br/t/cliente-externo-sem-usuario-fluig-startar-um-processo-e-anexar-documentos/307](https://fluiggers.com.br/t/cliente-externo-sem-usuario-fluig-startar-um-processo-e-anexar-documentos/307)
> **Categoria:** BPM
> **Tags:** `processo`, `widget`, `publico`, `pagina`, `externo`
> **Criado em:** 07/04/2021, 16:04
> **Visualizações:** 5653 | **Likes:** 27 | **Respostas:** 13

---

## Pergunta original

**Victor Castro** (@victorcastro) — 07/04/2021, 16:04 | ❤️ 1

Surgiu um cenário aqui onde um cliente externo (que não tem usuário no fluig) precisaria entrar em uma página pública, preencher um formulário, anexar alguns documentos e assim startar um processo levando essas informações e os anexos.

Dá pra fazer isso? Como eu poderia fazer?

---

## Resposta #1

**Julio Kriger** (@Julio_Kriger) — 07/04/2021, 17:54 | ❤️ 1

Hola,
Si se puede hacer. Hay que crear una pagina web y un server para atender el post de la pagina. En el server hay que llamar al web service “simpleStartProcess” o “startProcess” con los datos necesarios.
Saludos,
Julio

---

## Resposta #2

**Jonathan Albuquerque** (@Jonathan.Albuquerque) — 07/04/2021, 17:59 | ❤️ 5

1- Na estrutura HTML do seu formulário insira o seguinte código para capturar o base64 do input file e salvar em um campo do tipo textarea oculto em seu formulário:

```
<input type="file" />

<script>
  const fileInput = document.querySelector("input");
  		fileInput.addEventListener("change", (e) => {
   const file = e.target.files[0];
   const reader = new FileReader();
    	reader.onloadend = () => {
   const base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
   document.getElementById("attachment").value = base64String ;

    };
    reader.readAsDataURL(file);
  });</script>
```

2 - Crie um arquivo XML com a estrutura abaixo e insira-o no seguinte endereço da sua widget: **//wcm/widget//src/main/webapp/resources/js/startProcess.XML** e substitua as informações ou adapte o XML de acordo com o que for melhor para o seu projeto (todos os detalhes dos parâmetros deste método estão disponíveis na [documentação](https://tdn.totvs.com/pages/releaseview.action?pageId=73084007)):

```
<?xml version="1.0" encoding="ISO-8859-1" ?>
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.workflow.ecm.technology.totvs.com/">
    <soapenv:Header />
        <soapenv:Body>
            <ws:startProcess>
                <username>usuariowebservice</username>
                <password>senha</password>
                <companyId>1</companyId>
                <processId>codprocesso</processId>
                <choosedState>2</choosedState>
                <colleagueIds>
                    <item>usuariodestino</item>
                </colleagueIds>
                <comments>Processo iniciado via Widget</comments>
                <userId>usuarioinicio</userId>
                <completeTask>true</completeTask>
                <attachments name="attachments">
                  <item>
                     <attachmentSequence>1</attachmentSequence>
                        <attachments>
                           <attach>true</attach>
                           <fileName name="fileName"></fileName>
                           <filecontent name="filecontent"></filecontent>
                           <mobile>true</mobile>
                           <fileSize>0</fileSize>
                           <principal>true</principal>
                        </attachments>
                     <description name="description"></description>
                     <fileName name="fileName"></fileName>
    	            </item>
                </attachments>
                <cardData>
                <item>
                   <item>field1</item>
                   <item name="field1"></item>
                </item>
                  <item>
                   <item>field2</item>
                   <item name="field2"></item>
                </item>
                </cardData>
                <appointment></appointment>
                <managerMode>false</managerMode>
            </ws:startProcess>
        </soapenv:Body>
    </soapenv:Envelope>
```

3 - Crie a função para registrar a solicitação

```
bindings: {
         local: {
            'registrar': ['click_registrar']
         },
         global:{}
        },

        startProcess: function () {
         let xml;
         $.ajax({
            url: '/<NOMEWiDGET>/resources/js/startProcess.xml',
           async: false,
           type: "get",
           datatype: "xml",
           success: function (data) {
             xml = $(data);
           },
         });
         return xml;
       },

    registrar: function() {
      let _xml = this.startProcess();  // get xml
         _xml.find('[name="field1"]').text(document.getElementById('field1').value);
         _xml.find('[name="field2"]').text(document.getElementById('field2').value);
         _xml.find('[name="filecontent"]').text(document.getElementById('attachment').value);

         // ...
         //complete a variável _xml com todos os dados restantes do seu formulário, inclusive os dados do anexo
         // ...

         WCMAPI.Create({
            url: "/webdesk/ECMWorkflowEngineService?wsdl",
            contentType: "text/xml;charset=ISO-8859-1",
            dataType: "xml",
            data: _xml[0],
            success: function(data) {
            // retorno do webservice com os dados da solicitação iniciada
            },error: function(err) {
            // retorno do webservice com erro
            }
        })
    }
```

---

## Resposta #3

**Wasley Santos** (@Wasley_Santos) — 09/04/2021, 08:17

[@Jonathan.Albuquerque](/u/jonathan.albuquerque) fique na dúvida sobre a questão de segurança da montagem do XML. Não é perigoso pelo fato de ser uma página pública estar com login e senha no XML ?

---

## Resposta #4

**Daniel Cabral Santos** (@daniel.cabral) — 09/04/2021, 08:28 | ❤️ 5

É! :crazy_face:

A TDN tem um guia sobre fazer uma integração entre forms e pages inicializando solicitação, mas fica ‘preso’ nesse sistema:

[https://tdn.totvs.com/pages/releaseview.action?pageId=458754182](https://tdn.totvs.com/pages/releaseview.action?pageId=458754182)

Uma alternativa seria fazer um middleware que cuida da parte da autenticação, algo simples em node.js ou em java mesmo, carregando um .war no Fluig.

[@leferso](/u/leferso) já fez algo do tipo em Java!

---

## Resposta #5

**Julio Kriger** (@Julio_Kriger) — 09/04/2021, 16:14 | ❤️ 1

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/wasley_santos/48/77_2.png) Wasley\_Santos:
>
> > [@Jonathan.Albuquerque](/u/jonathan.albuquerque) fique na dúvida sobre a questão de segurança da montagem do XML. Não é perigoso pelo fato de ser uma página pública estar com login e senha no XML ?

Si, es MUY inseguro. Por eso de una solución con una API intermedia…

---

## Resposta #6

**Daniel Cabral Santos** (@daniel.cabral) — 13/04/2021, 10:07

Fico na dúvida qual seria a forma mais prática - um .war em Java, algo rodando à parte (eu sei fazer em node.js), a TOTVS já vendeu um middleware pra comunicação com SAP usando ASP e por aí vai…

[@Julio\_Kriger](/u/julio_kriger) , o que usou para resolver seu caso?

---

## Resposta #7

**Julio Kriger** (@Julio_Kriger) — 13/04/2021, 12:00 | ❤️ 2

Hola [@daniel.cabral](/u/daniel.cabral) se puede en java con un WAR o una API Rest en Nodejs.

Mi solución fue hacer una API Rest con Nestjs (nodejs) ya que consume menos recursos que Java, logre una mayor reusabilidad, es seguro, entre otras cosas.

Saludos

---

## Resposta #8

**Ricardo Andrade** (@rca0261) — 14/04/2021, 19:56

Boa noite [@victorcastro](/u/victorcastro) ,
Dá pra fazer sim.

Aqui estamos usando OAuth para e Webservices do Fluig para executar a pagina e criar o processo com ou sem anexo.

---

## Resposta #9

**Daniel Cabral Santos** (@daniel.cabral) — 15/04/2021, 09:17

Oh cara, pode mostrar pra gente como fez?

---

## Resposta #10

**Daniel Sales** (@Daniel_Sales) — 15/04/2021, 10:37 | ❤️ 4

Daniel segue o guia

```auto
<script type="text/javascript" src="oauth-1.0a.js"></script>
		<script type="text/javascript" src="crypto-js.min.js"></script>
		<script type="text/javascript" src="hmac-sha1.js"></script>
		<script type="text/javascript" src="hmac-sha256.js"></script>
		<script type="text/javascript" src="enc-base64.min.js"></script>
		<script type="text/javascript" src="FluigOAuthApi.js"></script>
```
```javascript
var config = {
	consumerPublic: "FluigPROD",
	consumerSecret: "FluigPROD",
	tokenPublic: "aefb2a17-2e83-4db7-851f-006d3efd7439",
	tokenSecret: "2de8230b-ab24-4317-b688-8feecaac8796e3dcba1e-d353-4ddd-9e7a-1b25a37eea7f",
	url: "http://fluig.teste.com.br"
}
var request = new FluigOAuthAPI(config);
function moveTask(e){
	var cardData={
		ddsEmailPass:aSenha,
		aprovaEmail:aprovaEmail,
		aNome : $("#nome").html(),
		aData : data.toLocaleDateString(),
		aLogin : login
	}
	var retorno = request.workflow.moveProcess(cardData,solicitacao,comentario);
	if ( retorno.statusText != "sucesso" ){
		$("#MeuModal2").modal("toggle");
		$("#erromsg").html(retorno.responseJSON.message);
	}else{
		$("#MeuModal").modal("toggle");
	}
}
```

para isto você tambem precisa de libs exterrnas.

Repare que nesta linha

```auto
<script type="text/javascript" src="FluigOAuthApi.js"></script>
```

ela e uma lib com as chamadas das apis rests do fluig. eu peguei com o mestre [@fluigor.com.br](/u/fluigor.com.br) e vou acrescentando o que falta nela rsrsrsrsrs.
SE quiser posso subir ela aqui ja com os outros js
[crypto-js.min.js](https://fluiggers.com.br/uploads/short-url/cM4HMVQOtTznRQp1Hjfc6MuEKiE.js) (46,8,KB)
[enc-base64.min.js](https://fluiggers.com.br/uploads/short-url/zSG8oa8wjrnAxJ8sofsv76OLP5A.js) (1,1,KB)
[FluigOAuthApi.js](https://fluiggers.com.br/uploads/short-url/zbwGAzkj5wfp13hlNP9e3AGlFWp.js) (11,4,KB)
[hmac-sha1.js](https://fluiggers.com.br/uploads/short-url/kvBKyM2k9YaK59xhW9DbENdwBPk.js) (425,Bytes)
[hmac-sha256.min.js](https://fluiggers.com.br/uploads/short-url/xruUBd2O3ytUUvS7OvsHoxBFsVm.js) (255,Bytes)
[oauth-1.0a.js](https://fluiggers.com.br/uploads/short-url/6nRgAMsGffWHchMG25Gwh6QIqIS.js) (8,5,KB)

---

## Resposta #11

**Willian Laynes** (@Willian_Laynes) — 15/04/2021, 14:35

Você pode criar um serviço SOAP no painel de controle do FLuig e consumir ele via dataset, assim a parte de autenticação do SOAP fica no back-end. E para consumir esse dataset você cria um usuário autenticador com oAuth.

---

## Resposta #12

**Wasley Santos** (@Wasley_Santos) — 15/04/2021, 19:24

Oi [@Julio\_Kriger](/u/julio_kriger) poderia compartilhar um pouco da chamada da API que você fez em nodejs. Eu tentei fazer uma mas não consegui.

---

## Resposta #13

**Julio Kriger** (@Julio_Kriger) — 21/04/2021, 06:22 | ❤️ 2

Hola [@Wasley\_Santos](/u/wasley_santos),

Te paso un ejemplo:

> export async function moveDocument(document\_id: number, folder\_id: number) {
> const body = await rp({
> rejectUnauthorized: false,
> method: ‘POST’,
> uri: `${process.env.FLUIG_URL}/api/public/ecm/document/updateDocumentFolder`,
> oauth: {
> consumer\_key: process.env.FLUIG\_CONSUMER\_KEY,
> consumer\_secret: process.env.FLUIG\_CONSUMER\_SECRET,
> token: process.env.FLUIG\_ACCESS\_TOKEN,
> token\_secret: process.env.FLUIG\_TOKEN\_SECRET,
> },
> json: true,
> body: {
> id: document\_id,
> parentId: folder\_id
> }
> });
> return body.content.id;
> }

Saludos

---

## Resposta #14

**Daniel Sales** (@Daniel_Sales) — 21/04/2021, 12:07 | ❤️ 2

[@Wasley\_Santos](/u/wasley_santos) vou por um fonte de um ws em node integrado com o fluig melhor ne

```javascript
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 2221; //porta padrão
const fs = require('fs');

//configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

//definindo as rotas
const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Serviço conversor de video funcionando!' }));

router.post('/convertFile', (req, res) =>{
	const filename = req.body.filename;
	const id = req.body.id;
	if(filename!=null && filename!=""){
		const nodeCmd = require('node-cmd');
		//nodeCmd.get('handbrakecli --help', (err, data, stderr) => {
		nodeCmd.get('handbrakecli -Z "Gmail Medium 5 Minutes 480p30" -i "e:\\volume\\public\\'+id+'\\1000\\'+filename+'" -o "'+'e:\\volume\\public\\'+id+'\\1000\\'+filename+'.mp4"', (err, data, stderr) => {
			console.log(stderr);
			console.log("Comando executado: "+'handbrakecli -Z "Gmail Medium 5 Minutes 480p30" -i "e:\\volume\\public\\'+id+'\\1000\\'+filename+'" -o "'+'e:\\volume\\public\\'+id+'\\1000\\'+filename+'.mp4"');
			fs.unlink("e:\\volume\\public\\"+id+"\\1000\\"+filename, (err) => {
				if (err) console.log('path/file.txt was not deleted');
			});
			fs.rename("e:\\volume\\public\\"+id+"\\1000\\"+filename+".mp4", "e:\\volume\\public\\"+id+"\\1000\\"+filename, function(err) {
				if ( err ) console.log('ERROR: ' + err);
			});
			var timestamp = Math.floor(new Date().getTime()/1000);
			console.log(timestamp);

			var request = require("request");

			var crypto = require("crypto");
			var nonce = crypto.randomBytes(20).toString('hex');
			var parametros={
				oauth_consumer_key: 'xxxxxx',//Trocar aqui
				oauth_token: 'xxxxxx',//Trocar aqui
				oauth_signature_method: 'HMAC-SHA1',
				oauth_timestamp: timestamp,
				oauth_nonce: nonce,
				oauth_version: '1.0'
			};
			var oauthSignature=require("oauth-signature");
			var assinatura = oauthSignature.generate("POST", "http://portal.torratorra.com.br/api/public/ecm/document/updateDescription", parametros, "minhaconsumersecret", "meutoken",{ encodeSignature: false});//Trocar meu token e minhaconsumer

			var options = {
				method: 'POST',
				url: 'http://portal.fluig.com.br/api/public/ecm/document/updateDescription',
				qs:{
					oauth_consumer_key: 'xxxxxx',//Trocar aqui
					oauth_token: 'xxxxxxx',//Trocar aqui
					oauth_signature_method: 'HMAC-SHA1',
					oauth_timestamp: timestamp,
					oauth_nonce: nonce,
					oauth_version: '1.0',
					oauth_signature: assinatura
				},
				headers: {
					'cache-control': 'no-cache',
					'Cache-Control': 'no-cache',
					'Content-Type': 'application/json'
				},
				body: {
					"id": id,
					"description": "Convertido " + filename
				},
				json: true
			};

			request(options, function (error, response, body) {
			  if (error) throw new Error(error);
			  console.log(body);
			});
			res.json({ success: true, "Filename": filename,"Data":data});
		});
	}else{
		res.json({ Error: "Parametro não foi enviado."})
	}
})

app.use('/', router);
app.listen(port);
```

Esse carinha usa o handbreakcli para converter o video.
so baixar na net ele

---

## Resposta #15

**Ricardo Andrade** (@rca0261) — 27/04/2021, 07:40

Bom dia,
Desculpa a demora na resposta mas segue o que fizemos aqui.

Veja se ajuda.
[exemplo.js](https://fluiggers.com.br/uploads/short-url/79h24gYWDnngi4REUdPYiIFQnhL.js) (3,3,KB)

Boa sorte.

---

## Resposta #16

**Victor Castro** (@victorcastro) — 27/04/2021, 08:35

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/rca0261/48/176_2.png) rca0261:
>
> > [exemplo.js](https://fluiggers.com.br/uploads/short-url/79h24gYWDnngi4REUdPYiIFQnhL.js) (3,3,KB)

Não dá pra baixar o arquivo dessa forma… Pelo menos eu não consegui. Consegue disponibilizar de outra maneira?

---

## Resposta #17

**Daniel Cabral Santos** (@daniel.cabral) — 27/04/2021, 08:52 | ❤️ 2

Pessoal, bom dia!

Pedi uma ajuda no [meta.discourse.org](http://meta.discourse.org) nesse link:
[Unable to download js attachment - #9 by codinghorror - bug - Discourse Meta](https://meta.discourse.org/t/unable-to-download-js-attachment/180671/9)

Mas parece que é uma questão de segurança estrutural do Ruby, não há como contornar no momento até que mexam no sistema do fórum…foda viu!

[@Daniel\_Sales](/u/daniel_sales) , é possível mandar um .zip ou .rar dos arquivos aqui? [dist.rar](https://fluiggers.com.br/uploads/short-url/fuVIy0u9hvrrB2dez3HmeolZFrk.rar) (44,5,KB)

Acabei de subir um .rar só com .js dentro pra ver se funciona normalmente…

…e funciona!

---

## Resposta #18

**Matheus Loreto** (@matheusl) — 29/11/2021, 11:35

Bom dia Pessoal, Alguém conseguiu alguma solução para a questão de usar oAuth com WebService? Não queria deixar o login e senha exposto no XML, mas não tenho conhecimento de outras ferramentas para contornar isso, e preciso do webservice pela questão do envio de anexos.

---

## Resposta #19

**Daniel Sales** (@Daniel_Sales) — 30/11/2021, 09:33 | ❤️ 1

Bom dia,
Sim usando o rest conseguimos de boa.
Use alguma linguagem server side como o php ou o nodejs conseguimos fazer o start process via rest usando oauth as chaves de autenticação vão ficar nos arquivos php ou .js do seu servidor sem estar expostas.

---

## Resposta #20

**Romulo Pereira** (@romuloccomp) — 02/12/2021, 15:30 | ❤️ 1

Olá, tivemos um caso parecido.

No caso eles já tinha um site em php/wordpress criamos um formulário que anexa as imagens e colocar o texto. Em seguida fizemos a integração via Webservice.

Funcionou muito bem.

---

## Resposta #21

**Igor Rodrigues** (@fluigor.com.br) — 31/08/2022, 13:36

Olá Pessoal,

Meu colega [@Rhyan](/u/rhyan) conseguiu fazer funcionar esse método disponibilizado no git do Fluig.
[https://git.fluig.com/projects/SAMPLES/repos/widgets/browse/rest-oauth](https://git.fluig.com/projects/SAMPLES/repos/widgets/browse/rest-oauth)

Abraçox.

---
