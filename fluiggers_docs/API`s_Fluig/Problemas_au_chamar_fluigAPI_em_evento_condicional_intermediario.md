# Problemas au chamar fluigAPI em evento condicional intermediario

> **Fonte:** [https://fluiggers.com.br/t/problemas-au-chamar-fluigapi-em-evento-condicional-intermediario/3419](https://fluiggers.com.br/t/problemas-au-chamar-fluigapi-em-evento-condicional-intermediario/3419)
> **Categoria:** API`s Fluig
> **Tags:** `processo`, `bpm`, `fluigapi`
> **Criado em:** 15/09/2025, 11:30
> **Visualizações:** 38 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Daniel Sales** (@Daniel_Sales) — 15/09/2025, 11:30

```javascript
function intermediateconditional241() {//NEGATE
	try {
		log.warn("hAPI.aqui");
		var clientService = fluigAPI.getAuthorizeClientService();
		var data = {
			companyId : '1',
			serviceCode : 'FluigRest',
			endpoint : "/process-management/api/v2/requests/"+getValue("WKNumProces")+"/tasks?status=NOT_COMPLETED&page=1&pageSize=1000",
			method : 'GET',
			timeoutService: '100'
		}
```

Recebo o seguinte erro no log:
sun.org.mozilla.javascript.internal.JavaScriptException: java.lang.Exception: Retorno com erroReferenceError: “fluigAPI” is not defined. (intermediateconditional241#51) in intermediateconditional241 at line number 51: javax.script.ScriptException: sun.org.mozilla.javascript.internal.JavaScriptException: java.lang.Exception: Retorno com erroReferenceError: “fluigAPI” is not defined. (intermediateconditional241#51) in intermediateconditional241 at line number 51

![image](https://fluiggers.com.br/uploads/default/original/2X/6/66660a6b8f93aacfc897188871a2f1404bd5d371.png)

Alguem sabe o que pode ser?

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 15/09/2025, 11:47

Super estranho. Não imaginei que num evento back-end teria problemas em chamar a fluigAPI.

Ou pode ser que tenha algo no código que esteja impedindo a interpretação. Afinal tem umas 50 linhas antes de chegar nessa definição né.

Aqui eu não usei a fluigAPI diretamente na atividade intermediária. Eu tenho um dataset que faz a consulta num REST. Aí na intermediária eu chamo o dataset.

---

## Resposta #2

**Daniel Sales** (@Daniel_Sales) — 15/09/2025, 11:53 | ❤️ 1

Muito estrasnho essa linha 50 e a do throw. Tetei com um fluxo simples so com a linha da chamada e o erro persiste.

```javascript
function intermediateconditional10() {
	var clientService = fluigAPI.getAuthorizeClientService();
	return true;
}
```

sun.org.mozilla.javascript.internal.EcmaError: ReferenceError: “fluigAPI” is not defined. (intermediateconditional10#2) in intermediateconditional10 at line number 2: javax.script.ScriptException: sun.org.mozilla.javascript.internal.EcmaError: ReferenceError: “fluigAPI” is not defined. (intermediateconditional10#2) in intermediateconditional10 at line number 2

---

## Resposta #3

**Pietro** (@pietro) — 15/09/2025, 13:29

Acho que seria o ideal até jogar pra um DS isso, se der problema é mais fácil dar manutenção.

Mas realmente não vejo motivos pra não estar disponível, experimenta puxar direto do java:
[FluigAPI (Javadoc for Fluig - SDK - API 2.0.0)](https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigAPI.html)

---
