# Automação de login em página Angular

> **Fonte:** [https://fluiggers.com.br/t/automacao-de-login-em-pagina-angular/738](https://fluiggers.com.br/t/automacao-de-login-em-pagina-angular/738)
> **Categoria:** Identity
> **Tags:** `identity`, `script`, `login`, `angular`
> **Criado em:** 25/10/2021, 15:56
> **Visualizações:** 465 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Daniel Cabral Santos** (@daniel.cabral) — 25/10/2021, 15:56

Fala galera, blz?

Estou tentando automatizar um login de uma página feita em Angular, mas sem sucesso…com o código abaixo consigo preencher os dados nos campos do form e disparar o login, mas o formulário invalida os campos de login e senha como se eu não tivesse digitado nada:

```auto
let elementCodUsuario = document.getElementById("CodUsuario")
elementCodUsuario.value = "$(username)";
let elementSenha = document.getElementById("Senha");
elementSenha.value = "$(password)";

let event = new Event('change');
elementCodUsuario.dispatchEvent(event);
elementSenha.dispatchEvent(event);
```

Não manjo muito de angular, mas o código parece certo…existe alguma forma de disparar via código a validação desses campos, ou dar um bypass nela?

Valeu!

---
