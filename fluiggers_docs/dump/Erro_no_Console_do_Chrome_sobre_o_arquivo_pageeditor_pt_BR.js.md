# Erro no Console do Chrome sobre o arquivo pageeditor_pt_BR.js

> **Fonte:** [https://fluiggers.com.br/t/erro-no-console-do-chrome-sobre-o-arquivo-pageeditor-pt-br-js/894](https://fluiggers.com.br/t/erro-no-console-do-chrome-sobre-o-arquivo-pageeditor-pt-br-js/894)
> **Categoria:** Ambiente Fluig
> **Criado em:** 26/01/2022, 07:41
> **Visualizações:** 364 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 26/01/2022, 07:41

Toda a vez que carrego o Fluig, aparece o seguinte erro no console do Chrome:

> pageeditor\_pt\_BR.js?v=1.7.1-211222:41 Uncaught TypeError: Cannot read properties of undefined (reading ‘trim’)
> at Object.limitNameSizeIfTooLarge (pageeditor\_pt\_BR.js?v=1.7.1-211222:41:50)
> at Object.init (pageeditor\_pt\_BR.js?v=1.7.1-211222:36:18)
> at Object.instance (wcm\_global\_pt\_BR.js?v=1.7.1-211222:10:22105)
> at liquid\_header\_pt\_BR.js?v=1.7.1-211222:37:42
> at Object. (fluig-style-guide.min.js?v=1.7.1-211222:21:24165)
> at c (jquery-3.5.1.min.js?v=1.7.1-211222:2:28504)
> at Object.fireWith \[as resolveWith\] (jquery-3.5.1.min.js?v=1.7.1-211222:2:29254)
> at l (jquery-3.5.1.min.js?v=1.7.1-211222:2:80295)
> at XMLHttpRequest. (jquery-3.5.1.min.js?v=1.7.1-211222:2:82760)

Clicando-se na linha do erro, fica destacado o seguinte

**var userName = userNameElement.html().trim();**

no bloco abaixo:

```auto
limitNameSizeIfTooLarge: function() {
            var userNameElement = $(".profile-title");
            var userName = userNameElement.html().trim();
            var MAX_USERNAME_LENGTH = 40;

            if (userName.length > MAX_USERNAME_LENGTH) {
                userNameElement.html(userName.substring(0, MAX_USERNAME_LENGTH) + "[...]");
            }
        },
```

Não consegui ter uma pista. Alguém já passou por isto, pode me dar uma dica?

---

## Resposta #1 ✅ RESPOSTA ACEITA

**MAURO SIMOES** (@Mautresim) — 14/02/2022, 07:14

O problema, não detectado qual seria exatamente, foi localizado num layout customizado que eu mesmo tinha feito.
Foi só substituí-lo por um dos preparados no Fluig e o erro sumiu.

---
