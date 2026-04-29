# Adicionar vários usuários a um grupo via dataset

> **Fonte:** [https://fluiggers.com.br/t/adicionar-varios-usuarios-a-um-grupo-via-dataset/768](https://fluiggers.com.br/t/adicionar-varios-usuarios-a-um-grupo-via-dataset/768)
> **Categoria:** API`s Fluig
> **Tags:** `fluigapi`
> **Criado em:** 09/11/2021, 14:34
> **Visualizações:** 972 | **Likes:** 9 | **Respostas:** 1

---

## Pergunta original

**Samuel ** (@SamuelBruing) — 09/11/2021, 14:34

Boa tarde, Pessoal! Alguém sabe alguma maneira de adicionar vários usuários a um grupo no fluig através via dataset? Utilizando API. Fiz alguns testes mas sem sucesso.

Se alguém souber alguma forma ficarei grato!

---

## Resposta #1

**Samuel ** (@SamuelBruing) — 09/11/2021, 14:34

[@Willian\_Laynes](/u/willian_laynes) Mestre! Boa tarde! Já fez algo parecido?

---

## Resposta #2

**Pablo Valle** (@pablooav) — 30/11/2021, 12:18 | ❤️ 6

Fiz um teste com o seguinte trecho e funcionou, o usuário foi inserido no grupo corretamente, ai basta você adaptar ai e adicionar no array todos os usuários que deseja. :wink:

```auto
function createDataset(fields, constraints, sortFields) {
	var newDataset = DatasetBuilder.newDataset();
    try {
        newDataset.addColumn("TESTE");
        var groupService = fluigAPI.getGroupService();
        var users = new java.util.ArrayList();
        users.add('matriculaUsuario'); //Matricula do usuário que deseja adicionar no grupo

        groupService.addUsers('grupo_teste', users); // Nome do grupo, arrayList com os usuários
        newDataset.addRow(['Usuario inserido!']);


    } catch (err) {
    	newDataset.addRow([err.toString()]);
        //throw new Exception(err);
    }
    return newDataset;
}
```

Segue a documentação deste serviço de grupos caso queira ver as demais funcionalidades do mesmo: [https://api.fluig.com/old/sdk/com/fluig/sdk/service/GroupService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/GroupService.html)

Da um checked ai caso tenha resolvido seu problema. :grin:

---

## Resposta #3

**MAURO SIMOES** (@Mautresim) — 07/03/2022, 11:32 | ❤️ 3

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/pablooav/48/247_2.png) pablooav:
>
> > ```auto
> > var newDataset = DatasetBuilder.newDataset();
> >     try {
> >         newDataset.addColumn("TESTE");
> >         var groupService = fluigAPI.getGroupService();
> >         var users = new java.util.ArrayList();
> >         users.add('matriculaUsuario'); //Matricula do usuário que deseja adicionar no grupo
> >
> >         groupService.addUsers('grupo_teste', users); // Nome do grupo, arrayList com os usuários
> >         newDataset.addRow(['Usuario inserido!']);
> >
> >
> >     } catch (err) {
> >     	newDataset.addRow([err.toString()]);
> >         //throw new Exception(err);
> >     }
> >     return newDataset;
> > ```

Testei aqui, caro [@pablooav](/u/pablooav), e funcionou perfeitamente. Fiz uns ajustes apenas para melhorar o meu lado, mas seu código é 100%. :+1:

---

## Resposta #4

**Patrick Cavalcante Moraes** (@Patrick_Cavalcante) — 23/08/2023, 10:21

Bom dia, ao utilizar a API getGroupService com usuário comum apresenta o seguinte erro:

“Usuário não tem permissão de administrador para executar.”

Alguém já conseguiu executar a API com um usuário comum, ou passar o usuário admin fixo nos parâmetros do dataset?

---
