# Será que o problema é o endereço que aparece no Fakepath?

> **Fonte:** [https://fluiggers.com.br/t/sera-que-o-problema-e-o-endereco-que-aparece-no-fakepath/863](https://fluiggers.com.br/t/sera-que-o-problema-e-o-endereco-que-aparece-no-fakepath/863)
> **Categoria:** ECM / GED
> **Criado em:** 08/01/2022, 16:24
> **Visualizações:** 2069 | **Likes:** 2 | **Respostas:** 5

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 08/01/2022, 16:24

Minha intenção é criar um documento baseado num formulário customizado. O documento ficará armazenado numa subpasta da 'Formulários do Fluig ’ .

Neste formulário, para teste, criei apenas um campo, de nome *namTxtIdFile*.

Mas, na minha intenção **maior**, *no mesmo tempo em que se cria o documento*, gostaria de anexar a ele um arquivo *.txt*, previamente ‘subido’ para o servidor.

Para tal, na minha ideia, tenho dois passos:
a) Fazer o upload do *.txt*
b) Criar o documento e anexar o *.txt* nele.

Assim, numa primeira rotina (/api/public/2.0/contentfiles/upload/), faço um upload do arquivo *.txt*, que cai na pasta do usuário (subpasta da Volume) atualmente logado no Fluig (que sou eu mesmo, naturalmente) e, por consequência, autor do upload.
Vou lá conferir no Volume e o arquivo *.txt* está lá na pasta do autor (de novo, a minha mesmo).
Tudo certo. A rotina funciona bem.

Uma vez confirmado o upload, executo outro código via clique para fazer o desejado, que é criar o documento.

No ponto em que estou, o código de criação do documento mostrado abaixo funciona bem, mas não há o preenchimento da propriedade **“attachments”: \[\],**.
Isto é, eu crio o documento sem problemas, mas não há, evidentemente, um arquivo *.txt* a ele associado.

**Como alimentar essa propriedade “attachments”: \[\],**, para que, ao mesmo tempo em que crio o documento, possa ir buscar o tal arquivo *.txt* existente no Volume para ficar como anexo dele?

> let caso = jQuery(“#idTxtIdFile”).val();
> let idPastaMae = 81595;//subpasta da Formularios do Fluig
> var objCamposForm=\[{“name”:“namTxtIdFile”,“value”:caso}\];
> var \_jSonRest= {
> “documentDescription”: "M&a " + caso,
> “parentDocumentId”: idPastaMae,
> “version”: 1000,
> “inheritSecurity”: false,
> “attachments”: ,
> “formData”: objCamposForm
> }//jsonRest
> jQuery.ajax({
> method:‘POST’,
> data:JSON.stringify(\_jSonRest),
> url:‘/api/public/2.0/cards/create’,
> contentType:‘application/json; charset=UTF-8’,
> dataType:‘json’,
> success: function(data,txt,objeto)
> {
> alert (“criou o documento”);
> },//success
> error: function (x,e,e2){
> alert ('Deu erro na criação do documento: ‘+x.status+’ ‘+e+’ '+e2);
> }//error
> });//ajax

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 10/01/2022, 09:16 | ❤️ 1

Nunca usei a `/api/public/2.0/cards/create`, mas se ela seguir o padrão da `/api/public/ecm/document/createDocument` basta passar um objeto com o fileName preenchido, sendo igual ao do arquivo que foi enviado.

```javascript
attachments: [{
    fileName: 'nome_arquivo_enviado.extensão',
}],
```

---

## Resposta #2

**MAURO SIMOES** (@Mautresim) — 10/01/2022, 10:12

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/bruno_gasparetto/48/68_2.png) Bruno\_Gasparetto:
>
> > ```auto
> > {
> >     fileName: 'nome_arquivo_enviado.extensão',
> > }
> > ```

Caro Bruno, muito obrigado pela resposta.

Apliquei sua sugestão. Não deu erro, mas também não associou o arquivo txt ao documento criado.

Eu pesquisei no console do Chrome o que está sendo enviado e o objeto me mostra o seguinte:

1.  attachments: Array(1)

2.  0:


```
> 1. fileName: "C:\\fakepath\\f_16860.txt"
```

> ```
> 2. [[Prototype]]: Object
>
>   1. constructor: ƒ Object()
>   2. hasOwnProperty: ƒ hasOwnProperty()
> ```

Desconfio que o endereço “C:\\fakepath\\f\_16860.txt” é que está gerando meu problema.

Digo isto porque o volume de trabalho não está na partição C:\\ do servidor onde o Fluig está instalado, mas em D:\\VOLUME.…

Seria isto? Se for, tem como alterar o ‘path’ do FAKEPATH para “**D**:\\fakepath\\f\_16860.txt”, ou outra abordagem?

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 10/01/2022, 10:29 | ❤️ 1

Vou esperar, junto com você, pra ver se alguém já enviou assim.

Eu só aprendi usando a `/api/public/2.0/contentfiles/upload/` para enviar o arquivo ao Fluig e então usar a `/api/public/ecm/document/createDocument` para criar o documento. Mas nesse caso ele não fica vinculado a um card de formulário, como você quer.

Fica o exemplo de como eu crio documento (esse código executo em uma Widget)

[gist.github.com](https://gist.github.com/brunogasparetto/b8f48535c1a0d43a6c6bc418acc22684)

#### [https://gist.github.com/brunogasparetto/b8f48535c1a0d43a6c6bc418acc22684](https://gist.github.com/brunogasparetto/b8f48535c1a0d43a6c6bc418acc22684)

##### criar\_documento\_fluig.js

```JavaScript
// Foram usadas as bibliotecas blob-stream e pdfkit

async function generatePdf() {
    const usuario = "login",
          senha = "senha",
          matricula_usuario = 'admin',
          pdf = new PDFDocument(),
          stream = pdf.pipe(blobStream()),
          fileName = 'Nome_Do_Arquivo.pdf',
          folderId = await findOrCreateFolderId("nova_pasta");
```
This file has been truncated. [show original](https://gist.github.com/brunogasparetto/b8f48535c1a0d43a6c6bc418acc22684)

---

## Resposta #4

**MAURO SIMOES** (@Mautresim) — 10/01/2022, 10:48

Caro Bruno,

eu estou usando, para upload, o mesmo ‘caminho’ /api/public/2.0/contentfiles/upload/ que você usa.

A parte de criação de documento é que estou usando outra api.

---

## Resposta #5

**Bruno Gasparetto** (@Bruno_Gasparetto) — 10/01/2022, 15:12

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/mautresim/48/511_2.png) Mautresim:
>
> > `> 1. fileName: "C:\\fakepath\\f_16860.txt"`

Mas quando eu informo o fileName não entrego o caminho completo, somente o nome do arquivo mesmo junto com a extensão.

---

## Resposta #6

**MAURO SIMOES** (@Mautresim) — 11/01/2022, 09:08

Pois é, eu também não. Confiava que o Fluig se encarregasse de achar o arquivo, que, na minha ideia, só poderia estar na pasta Volume e subpasta do usuário que comanda a criação do documento. Esse C:\\ que aparece não fui eu quem pôs. Eu só referi o arquivo pelo nome.

---
