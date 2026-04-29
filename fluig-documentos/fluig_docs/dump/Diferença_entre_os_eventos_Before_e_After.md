# Diferença entre os eventos Before e After

> **Fonte:** [https://tdn.totvs.com/pages/viewpage.action?pageId=1022377345](https://tdn.totvs.com/pages/viewpage.action?pageId=1022377345)

---

* * *

Esta documentação visa exemplificar e contextualizar a diferença entre os eventos do tipo Before e After.



## Eventos do tipo "Before"

* * *

De forma geral, os eventos do tipo **before** são executados antes que a ação que disparou o evento seja efetivada. Isso permite filtrar os dados que são passados no evento e, se necessário, **impedir que a ação seja concluída**.

Para bloquear a ação, basta lançar uma **Exception** contendo uma mensagem de texto, que será exibida ao usuário no formato apropriado. Confira o exemplo abaixo:



EXEMPLO

```
function beforeUpdateUser(user) {
    // Verifica se foi alterada a senha do usuário
    if (user.getPassword() != null) {
        // Caso a senha tenha sido alterada verifica se ela atende os requisitos mínimos
        var passwordPattern = "((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,16})";
        if (!user.getPassword().matches(passwordPattern)) {
            throw "A senha deve ter entre 8 e 16 caracteres e conter pelo menos: uma letra maiúscula, uma minúscula, um número e um caractere especial (@, #, $ ou %).";
        }
    }

    // Adiciona um dado adicional ao usuário informando a última data de atualização
    var dateFormat = new java.text.SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
    user.putData("LastUpdateDate", dateFormat.format(new Date()));
}
```



## Eventos do tipo "After"

* * *

Os eventos do tipo **after** são executados após a efetivação da ação e **não exercem influência** sobre ela. Isso significa que qualquer dado alterado no parâmetro recebido dentro do evento **não será refletido** no conteúdo persistido pela ação.

Outra característica desse tipo de evento é que **não devem lançar Exception**. Caso isso ocorra, a Exception será ignorada pelo sistema e não produzirá efeito sobre a ação já concluída. Confira o exemplo abaixo:



EXEMPLO

```
function afterCreateUser(user) {
    // Instância um cliente da API pública do Fluig. O usuário aplicativo utilizado
    // precisa ser um administrador do Fluig
    // Documentação para criar usuário aplicativo: http://tdn.totvs.com/x/KAFlDw
    var consumer = oauthUtil.getNewAPIConsumer(
            "e3fe3d72-bfcc-4552-8c9b-93c66531dab9", //Consumer Key do OAuth App
            "6bd0591b-73d8-4a9e-a161-d54dd92d3172-5a21991e-453f-4ea1-b80c-f42d4c57759d", //Consumer Secret do OAuth App
            "11a419dd-0c8a-4388-bd32-d66319bd750b", //Access Token do Usuário Aplicativo
            "fd2b53a4-b43d-4118-9725-68abaa1b41a9ee584784-73b2-454b-942f-5e07ad114234"); //Token Secret do Usuário Aplicativo

    // Adiciona o usuário criado na comunidade RH através da utilização do método
    // addParticipants do serviço de comunidades da API Pública
    // Alterar a comunidade RH para a comunidade que deseja realizar a ação em seu ambiente
    var postJson = '{"communityAlias": "RH", "userAliases": ["' + user.getLogin() + '"]}';
    consumer.post("/public/social/community/addParticipants", postJson);
}
```
