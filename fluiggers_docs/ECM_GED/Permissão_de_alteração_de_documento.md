# Permissão de alteração de documento

> **Fonte:** [https://fluiggers.com.br/t/permissao-de-alteracao-de-documento/869](https://fluiggers.com.br/t/permissao-de-alteracao-de-documento/869)
> **Categoria:** ECM / GED
> **Criado em:** 11/01/2022, 16:25
> **Visualizações:** 551 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 11/01/2022, 16:25

Estou enfrentando um problema, após ter feito atualização da versão 1.6.5 para 1.7.1 do Fluig.

Eu tenho uma subpasta da pasta ‘Formulários do Fluig’. Esta pasta se chama ‘ucrg\_compliance’.
Esta pasta, conforme imagem, dá direito totais aos usuários.

![compliance_pasta](https://fluiggers.com.br/uploads/default/optimized/1X/32aaedbb8ed866be651a3c6a38aa86f2955cda27_2_690x196.png)

O documento que o usuário cria via código de Widget, fica lá registrado, mas sem nenhuma atribuição de segurança.

![compliance_doc](https://fluiggers.com.br/uploads/default/optimized/1X/2a07fdba6280212d64f937f8afd06c1d1bd41166_2_690x164.png)

Será por isto que o usuário consegue criar o documento, mas NÃO consegue alterá-lo?

---

## Resposta #1

**MAURO SIMOES** (@Mautresim) — 11/01/2022, 16:43

Pensando aqui com meus botões, eu crio o documento, como eu havia dito, via código.

E o código estava escrito assim:

```auto
var _jSonRest= {
			   "documentDescription": nomeUsuario+"_"+siglaUsuario+"_"+intVideo,
			   "parentDocumentId": numeroPasta,
			   "version": 1000,
			   "inheritSecurity": false,
			   "attachments": [ ],
			   "formData": objCamposForm
			 }//jsonRest
	   //---
	   jQuery.ajax({
      	method:'POST',
      	data:JSON.stringify(_jSonRest),
      	url:'/api/public/2.0/cards/create',
      	contentType:'application/json; charset=UTF-8',
      	dataType:'json',
      	success: function(data,txt,objeto)
      	{
      		//console.log ("Não houve erro; criou o documento");
      		//console.log("Texto retornado: "+txt);
      		//console.log(objeto);
      		},//success
      	error: function (x,e,e2){
      		alert ('Deu erro na criação do documento: '+x.status+' '+e+' '+e2);
      		//alert (x.status+" "+e+' '+e2);
      	}//error
      	});//ajax
```

Analisando, vi a linha **“inheritSecurity”: false,** e agora estou experimentando pôr **“inheritSecurity”: true,**.

Vamos ver se dá certo.

---
