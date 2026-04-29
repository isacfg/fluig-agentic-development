# É possível bloquear o usuário comum de alterar o email no perfil?

> **Fonte:** [https://fluiggers.com.br/t/e-possivel-bloquear-o-usuario-comum-de-alterar-o-email-no-perfil/1839](https://fluiggers.com.br/t/e-possivel-bloquear-o-usuario-comum-de-alterar-o-email-no-perfil/1839)
> **Categoria:** Administração
> **Criado em:** 13/04/2023, 09:33
> **Visualizações:** 378 | **Likes:** 4 | **Respostas:** 0

---

## Pergunta original

**Portela** (@Portela) — 13/04/2023, 09:33

Bom dia pessoal. Pra deixar o ambiente mais seguro, queria tirar a permissão de alterar o email do usuário comum, mas não consigo. Já mexi muito nas permissões do painel de controle, mas nao consigo. Podem me ajudar?

---

## Resposta #1

**Marco Comassetto** (@marcommas) — 13/04/2023, 11:13 | ❤️ 2

É preciso customizar com o evento global beforeUpdateUser, colocando a regra de negócio que você precisa.
O campo ficaria ‘aberto’, mas ao salvar, vc dispara uma mensagem de erro, informando que não é possível alterar o e-mail

---

## Resposta #2 ✅ RESPOSTA ACEITA

**Giovani Hardt** (@ghardt) — 13/04/2023, 13:36 | ❤️ 2

Eu uso este código, no caso bloqueamos qq alteração por parte do usuario

function beforeUpdateUser(user) {

```
var userLogado = getValue("WKUser");

if (userLogado != "usuário-admin") {
		throw "Opsssss... Você não pode alterar seus dados !!!";
} else {
	// Adiciona um dado adicional ao usuário informando a última data de
	// atualização
	let dateFormat = new java.text.SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
	user.putData("LastUpdateDate", dateFormat.format(new Date()));

}
```

}

---
