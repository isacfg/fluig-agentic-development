# Método addUsers num grupo

> **Fonte:** [https://fluiggers.com.br/t/metodo-addusers-num-grupo/1141](https://fluiggers.com.br/t/metodo-addusers-num-grupo/1141)
> **Categoria:** API`s Fluig
> **Criado em:** 17/06/2022, 12:57
> **Visualizações:** 633 | **Likes:** 2 | **Respostas:** 10

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 17/06/2022, 12:57

Estou tentando inserir um usuário num grupo.

Eu não tenho um número para identificar o grupo (segundo a página de documentação, sugere-se um número), mas um nome ‘avalestsp\_admins’.

Tentei com o seguinte código sob um evento de ‘click’ numa Widget (O usuário tem a matrícula ‘afer’):

```auto
let arrayNomes=['afer'];
    jQuery.ajax({
        method: 'POST',
        url: '/api/public/2.0/groups/addUsers/avalestsp_admins',
        data: arrayNomes,
        success: function(data) {
        alert(data);
        },
        error: function(err) {
        alert("ERRO:  "+err);
        }
});//ajax
```

Mas vem um erro, que diz Object Object.

---

## Resposta #1

**Everton Alves** (@everton) — 17/06/2022, 13:47

Troque o “alert(err)” por um console.log(err), vai facilitar para vc ver o erro retornado.

---

## Resposta #2

**MAURO SIMOES** (@Mautresim) — 17/06/2022, 13:59

[@everton](/u/everton) , não ajudou muito. O console mostra

responseText: “{“code”:“NotSupportedException”,“message”:“NotSupportedException”,“detailedMessage”:“NotSupportedException”,“helpUrl”:null,“details”:\[\]}”

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Everton Alves** (@everton) — 17/06/2022, 14:32 | ❤️ 2

Fiz um teste pelo console do navegador com o código abaixo, retornou normal, faça um testa aí:

```javascript
fetch('/api/public/2.0/groups/addUsers/avalestsp_admins', {
    method: 'POST',
    headers: {"Content-type": "application/json;charset=UTF-8"},
    body: JSON.stringify(['afer'])
})
.then(response => response.json())
.then(json => console.log(json))
.catch(err => console.error(err));
```

---

## Resposta #4

**MAURO SIMOES** (@Mautresim) — 17/06/2022, 15:22

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/everton/48/656_2.png) everton:
>
> > ```auto
> > fetch('/api/public/2.0/groups/addUsers/avalestsp_admins', {
> >     method: 'POST',
> >     headers: {"Content-type": "application/json;charset=UTF-8"},
> >     body: JSON.stringify(['afer'])
> > })
> > .then(response => response.json())
> > .then(json => console.log(json))
> > .catch(err => console.err(err));
> > ```

Funcionou, [@everton](/u/everton) . Muito obrigado.

---

## Resposta #5

**MAURO SIMOES** (@Mautresim) — 17/06/2022, 15:48

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/everton/48/656_2.png) everton:
>
> > `.then(json => console.log(json))`

[@everton](/u/everton), deixa eu te perguntar uma coisa a mais, por favor. A linha

.then(json => console.log(json))

está retornando ‘undefined’. Deveria retornar com o quê?

---

## Resposta #6

**Everton Alves** (@everton) — 17/06/2022, 15:53

Segundo a documentação da API deveria retornar um JSON conforme baixo:

```javascript
{
 	content: null
 	message: {
 		message: "Usuários adicionados com sucesso ao grupo 99."
 		detail: "Usuários adicionados com sucesso ao grupo 99."
 		type: "INFO"
 	}
 }
```

---

## Resposta #7

**Everton Alves** (@everton) — 17/06/2022, 15:56

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/mautresim/48/511_2.png) Mautresim:
>
> > ```auto
> > let arrayNomes=['afer'];
> >     jQuery.ajax({
> >         method: 'POST',
> >         url: '/api/public/2.0/groups/addUsers/avalestsp_admins',
> >         data: arrayNomes,
> >         success: function(data) {
> >         alert(data);
> >         },
> >         error: function(err) {
> >         alert("ERRO:  "+err);
> >         }
> > });//ajax
> > ```

Acho que o seu código anterior deve funcionar assim:

```javascript
let arrayNomes=['afer'];
    jQuery.ajax({
        method: 'POST',
        url: '/api/public/2.0/groups/addUsers/avalestsp_admins',
        data: JSON.stringify(arrayNomes),
        success: function(data) {
        alert(data);
        },
        error: function(err) {
        alert("ERRO:  "+err);
        }
});//ajax
```

---

## Resposta #8

**MAURO SIMOES** (@Mautresim) — 17/06/2022, 16:01

Esquisito, porque insere no grupo, mas a variável ‘json’ retorna undefined.

---

## Resposta #9

**Everton Alves** (@everton) — 17/06/2022, 16:05

No console do navegador também está assim?
No teste que eu fiz retornou o json no padrão da API.

---

## Resposta #10

**MAURO SIMOES** (@Mautresim) — 17/06/2022, 16:17

Está no console como ‘undefined’.

---

## Resposta #11

**Everton Alves** (@everton) — 17/06/2022, 16:47

O primeiro .then() usa o método .json() para converter a resposta, vc poderia colocar um console.log nele para ver como está vindo a resposta do fluig.

Exemplo:

```javascript
.then(response => {
    console.log(response);
    response.json();
})
```

Coloque um ponto de parada no “console.log” e dê uma analisada na resposta.

---

## Resposta #12

**MAURO SIMOES** (@Mautresim) — 17/06/2022, 17:21

Vou fazer isto no fim de semana, [@everton](/u/everton). Agora fiquei enrolado. Muito obrigado pela ajuda.

---
