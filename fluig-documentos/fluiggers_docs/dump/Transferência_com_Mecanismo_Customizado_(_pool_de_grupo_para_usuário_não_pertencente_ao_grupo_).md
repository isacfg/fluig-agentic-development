# Transferência com Mecanismo Customizado ( pool de grupo para usuário não pertencente ao grupo )

> **Fonte:** [https://fluiggers.com.br/t/transferencia-com-mecanismo-customizado-pool-de-grupo-para-usuario-nao-pertencente-ao-grupo/2854](https://fluiggers.com.br/t/transferencia-com-mecanismo-customizado-pool-de-grupo-para-usuario-nao-pertencente-ao-grupo/2854)
> **Categoria:** BPM
> **Tags:** `mecanismoatribuicao`
> **Criado em:** 14/06/2024, 14:31
> **Visualizações:** 118 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Edgard** (@EDNC) — 14/06/2024, 14:31

Prezados, existe alguma forma de numa atividade inicialmente elencada para pool em grupo, no qual um dos usuários após assumi-la transferi-la para um usuário fora desse grupo ?

Tentei via mecanismo customizado, mas ao tentar transferir, o Fluig me informa que o usuário não está apto, pois ao que parece considera se o usuário informado está no grupo.

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 20/06/2024, 12:26

Você pode validar se é uma transferência e caso sim coloca usuários específicos pra transferência, caso não coloca os usuários do grupo.

Algo mais ou menos assim:

```javascript
function resolve(process, colleague) {

    var userList = new java.util.ArrayList();

    if (getValue("WKIsTransfer") == true) {
        adicionaTodosGerentes(userList);
    } else {
        adicionaMeuGerente(userList, colleague.login);
    }

    return userList;
}
```

---
