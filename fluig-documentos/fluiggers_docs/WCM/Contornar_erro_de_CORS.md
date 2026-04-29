# Contornar erro de CORS

> **Fonte:** [https://fluiggers.com.br/t/contornar-erro-de-cors/104](https://fluiggers.com.br/t/contornar-erro-de-cors/104)
> **Categoria:** WCM
> **Criado em:** 15/03/2021, 08:23
> **Visualizações:** 653 | **Likes:** 5 | **Respostas:** 0

---

## Pergunta original

**William Kiefer** (@bokrs) — 15/03/2021, 08:23 | ❤️ 5

Tempos atrás, após atualização de alguns navegadores, me ocorreu erros e falhas com CORS ao realizar uma chamada AJAX, essa dica foi do mestre [@fluigor.com.br](/u/fluigor.com.br) .

Esse trecho no código, na chamada do AJAX, resolveu meu problema:

```
beforeSend(req) {
			req.setRequestHeader("Accept", "text/xml");
			},
```

---
