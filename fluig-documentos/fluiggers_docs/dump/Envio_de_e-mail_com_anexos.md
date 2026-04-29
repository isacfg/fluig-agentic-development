# Envio de e-mail com anexos

> **Fonte:** [https://fluiggers.com.br/t/envio-de-e-mail-com-anexos/545](https://fluiggers.com.br/t/envio-de-e-mail-com-anexos/545)
> **Categoria:** WCM
> **Criado em:** 01/07/2021, 15:58
> **Visualizações:** 3443 | **Likes:** 33 | **Respostas:** 8

---

## Pergunta original

**Vinicius de Moura Silveira** (@vinny.silveira) — 01/07/2021, 15:58 | ❤️ 13

Boa tarde pessoal!

Depois de uma conversa com o super [@fluigor.com.br](/u/fluigor.com.br), percebi que muitos colegas aqui possuem as mesmas dores que eu: Envio de e-mails com qualquer tipo de anexo no Fluig, com CO e CCO. Como já trabalhei alguns anos com Java, resolvi escrever um método fácil e simples de fazer isso.

Ilustro abaixo um caso que que preciso enviar os anexos de uma solicitação/workflow com um corpo de e-mail que possua formatação HTML em um evento de processo:

```javascript
/**
 * Método para enviar os anexos de uma solicitação
 * anexadas em um e-mail
 *
 * @param {string} assunto Assunto do e-mail
 * @param {string} conteudo Corpo do e-mail escrito em HTML
 * @param {string} to Destinatário principal
 * @param {array} cc Array com as cópias
 * @param {array} cco Array com as cópias ocultas
 *
 * @returns {void}
 */
function sendMail(assunto, conteudo, to, cc, cco) {
    var docService = fluigAPI.getDocumentService();
    var username = "login@email.com";
    var nameuser = 'Nome Completo';
    var password = "senha";
    var host = "smtp.office365.com";
    var port = "587";

    var tmpHtml = org.jsoup.Jsoup.parse(conteudo);

    var props = new java.util.Properties();
    props.put("mail.transport.protocol", "smtp");
    props.put("mail.smtp.auth", "true");
    props.put("mail.smtp.starttls.enable", "true");
    props.put("mail.smtp.host", host);
    props.put("mail.smtp.port", port);

    var attachments = hAPI.listAttachments();
    var session = javax.mail.Session.getDefaultInstance(props);
    var message = new javax.mail.internet.MimeMessage(session);
    var messageBodyPart = new javax.mail.internet.MimeBodyPart();
    var multipart = new javax.mail.internet.MimeMultipart("mixed");
    var transport = session.getTransport();

    message.setFrom(new javax.mail.internet.InternetAddress(username, nameuser));
    message.setSubject(assunto);

    message.addRecipient(
        javax.mail.Message.RecipientType.TO,
        new javax.mail.internet.InternetAddress(to)
    );

    if (cc && cc.length) {
        for (var i in cc) {
            message.addRecipient(
                javax.mail.Message.RecipientType.CC,
                new javax.mail.internet.InternetAddress(cc[i])
            );
        }
    }

    if (cco && cco.length) {
        for (var j in cco) {
            message.addRecipient(
                javax.mail.Message.RecipientType.BCC,
                new javax.mail.internet.InternetAddress(cco[j])
            );
        }
    }

    for (var i = 0; i < attachments.size(); i++) {
        var anexo = attachments.get(i);
        var publicUrl = docService.getDownloadURL(anexo.getDocumentId());

        var attachment = new javax.mail.internet.MimeBodyPart();
        attachment.setDataHandler(new javax.activation.DataHandler(new java.net.URL(publicUrl)));
        attachment.setDisposition(javax.mail.internet.MimeBodyPart.ATTACHMENT);
        attachment.setFileName(anexo.getDocumentDescription());

        multipart.addBodyPart(attachment);
    }

    messageBodyPart.setContent(tmpHtml.toString(), "text/html; charset=utf-8");
    multipart.addBodyPart(messageBodyPart);

    message.setContent(multipart);

    transport.connect(username, password);
    transport.sendMessage(message, message.getAllRecipients());
}
```

Exemplo de chamada:

```javascript
var cc = ["email_um@email.com", "email_dois@email.com"]
var cco = ["email_tres@email.com", "email_quatro@email.com"]
var corpoHtml = "<h1>Hello e-mail com anexos!</h1>"

try {
    sendMail("Assunto aqui", corpoHtml, "teste@email.com", cc, cco);
} catch (error) {
    log.info("Falha no envio!!");
    log.error(e);
}
```

Neste caso, o cliente utiliza o Office365, agora é só adaptar de acordo com o cliente de e-mail, inclusive é possível escrever este mesmo código em um dataset, para que você possa utilizar em mais lugares, mas ainda não tive tempo de fazer isso.

Espero que minha primeira contribuição seja de grande utilidade para nossa comunidade!

PS: Se alguém fizer um dataset bonitinho pra isso, por favor, compartilha aqui!!

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 01/07/2021, 16:59 | ❤️ 1

Super útil! Obrigado por compartilhar!

Vou tentar implementar.

Aqui só tive 1 situação que precisava mandar 1 anexo no e-mail e acabamos enviando o link de download mesmo.

---

## Resposta #2

**Sérgio Machado** (@sergio.machado) — 01/07/2021, 20:03 | ❤️ 1

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/vinny.silveira/48/16_2.png) vinny.silveira:
>
> > Neste caso, o cliente utiliza o Office365, agora é só adaptar de acordo com o cliente de e-mail, inclusive é possível escrever este mesmo código em um dataset, para que você possa utilizar em mais lugares, mas ainda não tive tempo de fazer isso.
> >
> > Espero que minha primeira contribuição seja de grande utilidade para nossa comunidade!
> >
> > PS: Se alguém fizer um dataset bonitinho pra isso, por favor, compartilha aqui!!

Parabéns cara, eu também percebi essa dor entre os colegas.

Eu tenho vários processos que utiliza envio de anexos, onde não é possível resolver com o link público, então tive que desenvolver uma aplicação em node js.

Esses dias eu estava olhando essa classe javax.mail e imaginei que fosse realmente possível, mas como meu conhecimento em java é limitado, deixei pra lá rs.

Assim que tiver um tempo vou testar essa solução.

---

## Resposta #3

**Igor Rodrigues** (@fluigor.com.br) — 02/07/2021, 19:17 | ❤️ 1

Brabissimo [@vinny.silveira](/u/vinny.silveira)

Parabens!

---

## Resposta #4

**Daniel Cabral Santos** (@daniel.cabral) — 07/07/2021, 08:53 | ❤️ 1

Xá comigo esse dataset!

---

## Resposta #5 ✅ RESPOSTA ACEITA

**Sérgio Machado** (@sergio.machado) — 11/08/2022, 10:02 | ❤️ 7

Fala aí pessoal, depois de muito tempo retornei aqui nesse tópico para agradecer a solução, agora não preciso mais desenvolver mais APIs para realizar essa tarefa.

Para quem quiser, eu fiz o dataset que pode ser encontrado aqui nesse link [Enviar e-mail com anexos no Fluig](https://github.com/sergiomachadosilva/fluig-datasets/blob/master/dsEnviarEmailComAnexos/README.md).

Aproveitei para fazer algumas melhorias, como por exemplo ao invés de usar o link público, passei a buscar o arquivo físico do anexo, pois tive problemas quando utilizei em um projeto e migrei para produção que utilizava *load balance*.

---

## Resposta #6

**Daniel Cabral Santos** (@daniel.cabral) — 12/08/2022, 09:29 | ❤️ 1

SENSACIONAL!!! Muito obrigado por compartilhar!

---

## Resposta #7

**Matheus Mósso** (@msmosso) — 07/10/2022, 07:05 | ❤️ 1

Excelente Vinny!

Apenas para destacar que no exemplo de chamada o catch recebe a variável error, mas o log.error usa a variável e.

---

## Resposta #8

**Jonatas Locateli** (@jonatas.locateli) — 10/11/2022, 18:13 | ❤️ 1

[@sergio.machado](/u/sergio.machado) se ao invés de enviar um arquivo que está publicado no GED, for um base64, como faço utilizando esse dataset?

---

## Resposta #9

**Sérgio Machado** (@sergio.machado) — 17/12/2022, 10:56

Tive essa mesma curiosidade, mas não tive tempo ainda de testar. Uma alternativa seria você salvar o arquivo no GED, e após envio do e-mail deletar este arquivo.

---

## Resposta #10

**Bruno Gasparetto** (@Bruno_Gasparetto) — 19/12/2022, 09:36 | ❤️ 1

Pelo que vi o dataset usa `javax.activation.DataHandler` para inserir o anexo e como tem acesso ao arquivo utiliza o `javax.activation.FileDataSource` como fonte.

Então talvez seja só trocar essa parte por:

```javascript
new javax.activation.DataHandler(
    new javax.mail.util.ByteArrayDataSource(
        org.apache.axiom.util.base64.decode("aqui é a string em base64")
    )
);
```

Mas só testando pra confirmar.

---

## Resposta #11

**Sérgio Machado** (@sergio.machado) — 06/01/2023, 22:41 | ❤️ 2

Fala aí [@jonatas.locateli](/u/jonatas.locateli), cara depois de alguns testes aqui encontrei a solução, irei postar aqui o trecho do código, mas depois irei adaptar este dataset para receber também base64 de arquivos.

Primeiro você terá que converter o base64 em um array de bytes:

```auto
var byteArray = java.util.Base64.getDecoder().decode(new String("BASE64-AQUI"));
```

Depois alterar este código abaixo

```auto
attachment.setDataHandler(new javax.activation.DataHandler(new javax.activation.FileDataSource(arquivo)));
```

Por este aqui

```auto
attachment.setDataHandler(new javax.activation.DataHandler(new javax.mail.util.ByteArrayDataSource(byteArray, "application/octet-stream")));
```

Testei aqui com um arquivo pdf e com uma planilha do excel, funcionou perfeitamente.

---

## Resposta #12

**Sérgio Machado** (@sergio.machado) — 13/01/2023, 10:02 | ❤️ 2

[@jonatas.locateli](/u/jonatas.locateli) eu alterei este dataset, pois tive a mesma necessidade em um projeto.

Agora é possível enviar tanto arquivos que estejam no GED, quanto arquivos que estejam em base64.

Para isso, a única coisa que irá precisar fazer quando quiser enviar em base64, é informar um objeto com as seguintes propriedades:

```auto
{stringBase64: "BASE64-AQUI", nomeArquivo: "faturamento_2023.pdf", tipo: "base64"}
```

Uma preocupação que você deve ter, é que você precisará saber a extensão do arquivo antes, pois caso informe uma extensão diferente, o arquivo será corrompido.

Procurei uma solução em que eu pudesse usar no Fluig para descobrir a extensão do arquivo através da string base64, mas não obtive sucesso.

---

## Resposta #13

**Jonatas Locateli** (@jonatas.locateli) — 13/01/2023, 11:00

[@sergio.machado](/u/sergio.machado) muito obrigado! Vou testar em um projeto e certamente será muito útil.

---

## Resposta #14

**Bruno Gasparetto** (@Bruno_Gasparetto) — 13/01/2023, 11:19 | ❤️ 1

Show!!!

Depois vou copiar esse dataset pro meu projeto. Certamente num futuro próximo terei que fazer isso de enviar anexo ao invés de somente o link de download (principalmente se for pra fornecedores/clientes).

A extensão já vi sugestão de analisar o começo da string e a partir do tipo definir a extensão.

[stackoverflow.com](https://stackoverflow.com/questions/25763533/how-to-identify-file-type-by-base64-encoded-string-of-a-image)

[![dinesh707](https://i.stack.imgur.com/E8ubp.jpg?s=256&g=1)](https://stackoverflow.com/users/393639/dinesh707)

#### [How to identify file type by Base64 encoded string of a image](https://stackoverflow.com/questions/25763533/how-to-identify-file-type-by-base64-encoded-string-of-a-image)

**java, image, mime-types**

asked by [dinesh707](https://stackoverflow.com/users/393639/dinesh707) on [10:52AM - 10 Sep 14 UTC](https://stackoverflow.com/questions/25763533/how-to-identify-file-type-by-base64-encoded-string-of-a-image)

Então seria analisar os vários tipos e colocar a extensão automaticamente.

Mas se pegou a string base64 de algum lugar provavelmente sabe também a extensão do arquivo baseado no nome né.

---

## Resposta #15

**Sérgio Machado** (@sergio.machado) — 13/01/2023, 12:30

Pois é Bruno, estou utilizando em todos os meus projetos.

Agora depois que você disse isso, eu fiquei com uma “pulga atrás da orelha”. Desconfio que se enviar um base64 com o Mime Type irá gerar um erro, principalmente se enviado pelo front-end.

Os base64 de pdf e excel que eu gero não tem o mime type no início da string. No final das contas acredito que será desnecessário isso, o desenvolvedor que se responsabilize por informar a extensão correta hahaha.

---
