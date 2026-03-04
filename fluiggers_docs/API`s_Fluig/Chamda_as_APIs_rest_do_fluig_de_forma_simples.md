# Chamda as APIs rest do fluig de forma simples

> **Fonte:** [https://fluiggers.com.br/t/chamda-as-apis-rest-do-fluig-de-forma-simples/68](https://fluiggers.com.br/t/chamda-as-apis-rest-do-fluig-de-forma-simples/68)
> **Categoria:** API`s Fluig
> **Criado em:** 12/03/2021, 10:44
> **Visualizações:** 1523 | **Likes:** 4 | **Respostas:** 0

---

## Pergunta original

**Daniel Sales** (@Daniel_Sales) — 12/03/2021, 10:44 | ❤️ 3

Para fazer uma chamada post:

```javascript
// Instância um cliente da API pública do Fluig. O usuário aplicativo utilizado
	// precisa ser um administrador do Fluig
	var consumer = oauthUtil.getNewAPIConsumer(
			"consumer key",
			"secret key",
			"access token",
			"secretoken");

	// chamada do ws
	// json esperado pelo ws
	var postJson = '{"communityAlias": "RH"}';
	consumer.post("/url/do/ws", postJson);


Para fazer uma chamada get


	// Instância um cliente da API pública do Fluig. O usuário aplicativo utilizado
	// precisa ser um administrador do Fluig
	var consumer = oauthUtil.getNewAPIConsumer(
			"consumer key",
			"secret key",
			"access token",
			"secretoken");

//chamada do ws
	consumer.get("/url/do/ws");
```

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 26/08/2025, 09:54

Essa variável `oauthUtil` você instanciou como? Ela é global do Fluig?

---

## Resposta #2

**Daniel Sales** (@Daniel_Sales) — 26/08/2025, 09:56 | ❤️ 1

So usar. Já é global / padrão do fluig.
O detalhe é que so serve nas apis antigas pois /api ja vem embutido nela.

---
