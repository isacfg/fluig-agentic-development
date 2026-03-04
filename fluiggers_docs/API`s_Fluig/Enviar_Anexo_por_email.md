# Enviar Anexo por email

> **Fonte:** [https://fluiggers.com.br/t/enviar-anexo-por-email/521](https://fluiggers.com.br/t/enviar-anexo-por-email/521)
> **Categoria:** API`s Fluig
> **Criado em:** 18/06/2021, 10:04
> **Visualizações:** 1799 | **Likes:** 1 | **Respostas:** 4

---

## Pergunta original

**Alexandre Pedro** (@Aline_Jaime) — 18/06/2021, 10:04

Bom dia, pessoal!

Estou com uma demanda que precisa enviar um determinado documento por email, para uma pessoa que não teria acesso ao fluig.

Sei que o padrão do fluig não me permite fazer isso, alguém sabe de alguma maneira e pode me ajudar?

---

## Resposta #1

**Sérgio Machado** (@sergio.machado) — 18/06/2021, 11:46

Já tive essa mesma necessidade, depois de pesquisar bastante e descobri que não teria essa possibilidade de enviar anexos. A solução que encontrei foi tirar essa responsabilidade do Fluig e passar para um serviço de terceiros. Nesse caso eu criei uma Api Rest e cadastrei como serviço dentro do Fluig.

Mas se o seu Fluig estiver em Cloud fica mais fácil, basta pegar o link público do anexos e enviar no email como link.

Abaixo está um exemplo

```auto
// Lista com os anexos presentes na solicitação
 var docs = hAPI.listAttachments();

// Monta a lista de links a serem enviados no E-mail
for (var i = 0; i < docs.size(); i++) {
    var doc = docs.get(i);
    if(doc.getDocumentDescription() == "meuRelatorio.pdf"){
        parametros.put("LINK_RELATORIO", fluigAPI.getDocumentService().getDownloadURL(doc.getDocumentId()));
    }
}
```

---

## Resposta #2

**Alexandre Pedro** (@Aline_Jaime) — 18/06/2021, 12:34

Entendi, o meu fluig não é em nuvem.

Você teria um exemplo de como utilizar o serviço de terceiros?

---

## Resposta #3

**Sérgio Machado** (@sergio.machado) — 18/06/2021, 12:55 | ❤️ 1

Pior que não, estou pensando em disponibilizar uma versão minimalista dessa minha solução no github e postar um vídeo no YouTube ensinando a galera a instalar e utilizar, só esta me faltando tempo rsrs

Se seu ambiente não for restrito como era meu caso, pode utilizar um serviço como **[SendGrid](https://sendgrid.com/), [SendinBlue](https://pt.sendinblue.com/), [Amazon SES](https://aws.amazon.com/pt/ses/), [MailChimp](https://mailchimp.com/pt-br/)**.

Mas nunca cheguei a testar eles.

---

## Resposta #4

**Bruno Gasparetto** (@Bruno_Gasparetto) — 22/06/2021, 09:51

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/sergio.machado/48/659_2.png) sergio.machado:
>
> > Mas se o seu Fluig estiver em Cloud fica mais fácil, basta pegar o link público do anexos e enviar no email como link.

Ele não precisa estar em Cloud. Simplesmente ser publicado, tendo acesso externo, já funciona.

Aqui tenho um processo no qual envio os links de download e mesmo não estando logado no Fluig ele permite baixar o arquivo. Então é bom ter cuidado com o tipo do documento

---

## Resposta #5

**Sérgio Machado** (@sergio.machado) — 22/06/2021, 10:09

Isso mesmo Bruno, caso tenha acesso externo também funciona.

---
