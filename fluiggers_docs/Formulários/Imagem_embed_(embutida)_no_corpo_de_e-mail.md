# Imagem "embed" (embutida) no corpo de e-mail

> **Fonte:** [https://fluiggers.com.br/t/imagem-embed-embutida-no-corpo-de-e-mail/438](https://fluiggers.com.br/t/imagem-embed-embutida-no-corpo-de-e-mail/438)
> **Categoria:** Formulários
> **Criado em:** 12/05/2021, 08:40
> **Visualizações:** 1564 | **Likes:** 4 | **Respostas:** 16

---

## Pergunta original

**Vinicius de Moura Silveira** (@vinny.silveira) — 12/05/2021, 08:40

Bom dia pessoal!

Estou usando o RichText do Fluig para ser tipo um e-mail, que será enviada para um destinatário externo (que não usa Fluig) e precisa ter imagens embutidas nele, imagens que o usuário vai fazer o upload quando estiver preenchendo, já escrevi um plugin para o editor para fazer o upload da imagem e pegar a URL publica do documento, porém, não renderiza a imagem no e-mail :frowning: , alguma ideia de como resolver isso? Aaaah, tentei encodar como base64 mas ao salvar estoura o limite de caracteres do textarea :sob:

---

## Resposta #1

**Willian Laynes** (@Willian_Laynes) — 12/05/2021, 09:04

Eu fiz com base64, mas não gravei em textarea, usei a API do fluig que devolve a base64 e enviei direto pro template de envio. Você só precisa ter essa imagem no GED do Fluig para ele localizar e transformar em base64.

---

## Resposta #2

**Vinicius de Moura Silveira** (@vinny.silveira) — 12/05/2021, 09:10

Poderia me dar um exemplo [@Willian\_Laynes](/u/willian_laynes)? Como eu vou passar o conteúdo do RichText para o backend para ser feito o envio?

---

## Resposta #3

**Willian Laynes** (@Willian_Laynes) — 12/05/2021, 09:17

Eu fiz para a questão da imagem, o seu problema é o que foi digitado no richtext ou a imagem? Para eu verificar se consigo ajudar.
Eu uso esse serviço SOAP para buscar a base64 e enviar no e-mail

ECMDocumentService-getDocumentContent

O que vc pode fazer e gravar em um arquivo .txt e ler ele no back-end para enviar, só faz um controle do documentId para poder localizar o documento.

---

## Resposta #4

**Vinicius de Moura Silveira** (@vinny.silveira) — 12/05/2021, 09:21

Meu problema é que o RichText eu salvo, até pra eu ter o registro, o problema é a imagem embutida no RichText, saca? Como eu poderia inserir o id do documento no RichText e depois fazer o replace no backend? Eu até insiro, mas o problema é o replace depois no backend

---

## Resposta #5

**Willian Laynes** (@Willian_Laynes) — 12/05/2021, 09:21 | ❤️ 1

[ECMDocumentService-getDocumentContent.js](https://fluiggers.com.br/uploads/short-url/a4pLguKZJwi6AxozFuX69n6fK5g.js) (5,5,KB)

Exemplo de dataset.

---

## Resposta #6

**Willian Laynes** (@Willian_Laynes) — 12/05/2021, 09:21

Entendi o que vc quis dizer.

---

## Resposta #7

**Vinicius de Moura Silveira** (@vinny.silveira) — 12/05/2021, 09:23

No caso esse seria um trecho que precisaria trocar:

```auto
<img alt="Excel" src="https://meu-fluig/volume/stream/Rmx1aWc=/P3Q9MSZ2b2w9RGVmYXVsdCZpZD0xMDQ1JnZlcj0xMDAwJmZpbGU9JTVCMTYyMDgxNzI0NTAwNSU1RGltYWdlLnBuZyZjcmM9MTU4OTc5MTQwOCZzaXplPTAuMDAxNjU4JnVJZD0xMSZmU0lkPTEmdVNJZD0xJmQ9ZmFsc2UmdGtuPSZwdWJsaWNVcmw9ZmFsc2U=.jpg" style="width: 321px; height: 41px;" />
```

Como eu poderia trocar o link do src por um base64?

---

## Resposta #8

**Willian Laynes** (@Willian_Laynes) — 12/05/2021, 09:33

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/vinny.silveira/48/16_2.png) vinny.silveira:
>
> > `https://meu-fluig/volume/stream/Rmx1aWc=/P3Q9MSZ2b2w9RGVmYXVsdCZpZD0xMDQ1JnZlcj0xMDAwJmZpbGU9JTVCMTYyMDgxNzI0NTAwNSU1RGltYWdlLnBuZyZjcmM9MTU4OTc5MTQwOCZzaXplPTAuMDAxNjU4JnVJZD0xMSZmU0lkPTEmdVNJZD0xJmQ9ZmFsc2UmdGtuPSZwdWJsaWNVcmw9ZmFsc2U=.jpg`

Uma ideia é uma API que te devolva a base64 desse link, você só teria que isolar esse trecho de código e substituir pelo retorno da API. Da um pouco de trabalho mas acredito que é possível.

Busca na string com o indexOf(‘src="’) e recorta até o proximo ’ " ', você vai ter o link de pois utiliza uma api pre devolver o base64 e cola no lugar.

---

## Resposta #9

**Willian Laynes** (@Willian_Laynes) — 12/05/2021, 09:35

Exemplo no front, tem que ver como fazer no backend agora.

[stackoverflow.com](https://stackoverflow.com/questions/6150289/how-can-i-convert-an-image-into-base64-string-using-javascript)

[![coderslay](https://i.stack.imgur.com/CE91w.jpg?s=256&g=1)](https://stackoverflow.com/users/609387/coderslay)

#### [How can I convert an image into Base64 string using JavaScript?](https://stackoverflow.com/questions/6150289/how-can-i-convert-an-image-into-base64-string-using-javascript)

**javascript, base64**

asked by [coderslay](https://stackoverflow.com/users/609387/coderslay) on [09:26AM - 27 May 11 UTC](https://stackoverflow.com/questions/6150289/how-can-i-convert-an-image-into-base64-string-using-javascript)

---

## Resposta #10

**Vinicius de Moura Silveira** (@vinny.silveira) — 12/05/2021, 09:41 | ❤️ 1

Essa parece uma boa, vou tentar fazer um regex pra isso, porque pode conter mais de uma imagem

---

## Resposta #11

**Vinicius de Moura Silveira** (@vinny.silveira) — 12/05/2021, 11:10

Mano do céu! O Fluig usa Jsoup!! Ficaria mais ou menos assim:

```javascript
var stringHtml = new java.lang.String(stringHtml);
            var doc = org.jsoup.Jsoup.parse(stringHtml);
            var imgs = doc.select("img[data-doc-id]").iterator(); // Só pega as imgs com id de documento

            while (imgs.hasNext()) {
                let img = imgs.next();
                // Recupera a imagem e pega o base64 e seta abaixo no src
                img.attr('src', 'LINK_AKI')
            }
            var result = doc.toString();
```

---

## Resposta #12

**Vinicius de Moura Silveira** (@vinny.silveira) — 12/05/2021, 11:13

Tá dando erro pra eu baixar:

![image](https://fluiggers.com.br/uploads/default/optimized/1X/c23eb894e9955c462e37e272be86b86caead3b32_2_690x260.png)

---

## Resposta #13

**Vinicius de Moura Silveira** (@vinny.silveira) — 12/05/2021, 12:06

Mesmo usando o Jsoup, encodando para base64 as imagens, os e-mails não renderizam base64… Tô lascado :sob:

---

## Resposta #14

**Willian Laynes** (@Willian_Laynes) — 12/05/2021, 15:10

Mas se vc pega o link da imagem em base que gerou e abre em um navegador ele consegue abrir a imagem?

---

## Resposta #15

**Vinicius de Moura Silveira** (@vinny.silveira) — 12/05/2021, 15:32

Sim, mas pelo que li, Gmail, Outlook e uma pancada de clientes de e-mail não renderizam base64, precisa ser um link ou anexado ao e-mail, sem isso nada feito :cold_sweat:

---

## Resposta #16

**Sérgio Machado** (@sergio.machado) — 12/05/2021, 15:38

Hoje mais cedo quando vi esse tópico ia comentar exatamente isso, mas achei que já sabia.
Eu tive uma necessidade dessa em um projeto, depois de muitos testes vi que não funcionava na maioria dos clientes de e-mail.

Eu poderia subir para algum repositório online como por exemplo o **Firebase**, mas a empresa tinha uma politica de segurança bem restrita, com isso, tivemos que abandonar essa ideia das imagens embutidas nos emails.

---

## Resposta #17

**Daniel Cabral Santos** (@daniel.cabral) — 12/05/2021, 15:47 | ❤️ 1

Vinny, é uma limitação do fórum que ainda estamos tentando contornar - tem um outro tópico sobre isso. Provisoriamente, zipem os .js ou colem direto no corpo da postagem! :smiley:

---

## Resposta #18 ✅ RESPOSTA ACEITA

**Vinicius de Moura Silveira** (@vinny.silveira) — 12/05/2021, 16:28 | ❤️ 1

Infelizmente sem sucesso :sob:

Mas contornei pegando a URL pública do documento e colocando no src da imagem, e também coloquei logo abaixo um link que vai direto para o arquivo no Fluig caso a imagem não carregue, ficando mais ou menos assim:

```javascript
var cartaStringHtml = new java.lang.String(campoRichText);
var doc = org.jsoup.Jsoup.parse(cartaStringHtml);
var imgs = doc.select("img[data-doc-id]").iterator();

while (imgs.hasNext()) {
	let img = imgs.next();
	img.attr('alt', "Clique no link abaixo para visualizar a imagem caso não carregue")
	img.append('<br><a target="_blank" href="' + img.attr('src') + '">Ver imagem</a>');
}
```

Esse é um trecho de como fica a imagem no RichText:

```auto
<img data-doc-id="{documentId}" src="{link retornado pelo '/2.0/documents/getDownloadURL/{idDoc}' }" />
```

Aí eu apendo um link depois da imagem caso ela não carregue, não é o melhoooooooor mas já é alguma coisa.

---

## Resposta #19

**system** (@system) — 13/05/2021, 08:29

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
