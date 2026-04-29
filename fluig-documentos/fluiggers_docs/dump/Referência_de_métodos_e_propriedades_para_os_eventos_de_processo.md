# Referência de métodos e propriedades para os eventos de processo

> **Fonte:** [https://fluiggers.com.br/t/referencia-de-metodos-e-propriedades-para-os-eventos-de-processo/824](https://fluiggers.com.br/t/referencia-de-metodos-e-propriedades-para-os-eventos-de-processo/824)
> **Categoria:** BPM
> **Criado em:** 13/12/2021, 09:42
> **Visualizações:** 420 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 13/12/2021, 09:42

Eu precisei fazer uma modificação no evento afterProcessCreate.

Eu queria forçar que o nome de cliente novo fosse modificado para caixa-alta. Se o solicitante de abertura do documento preenchesse de qualquer jeito, o código deveria pôr tudo em maiúsculas, como dito.

Eu não achei nada que fizesse referência se eu podia usar toUpperCase(), pois conheço este método do Javascript, mas não sabia se iria funcionar no evento, já que (até onde sei) é Java.

Procurei ‘upper case’ no W3Schools para Java e achei o método idêntico ao do Javascript.

Modifiquei o código assim, mas não sei se ficará correto:

```auto
if(hAPI.getCardValue("seClienteNv") == "Sim" ){
		var clienteNovo =  hAPI.getCardValue("cNvNome").toUpperCase();
		hAPI.setCardValue("cNvNome",clienteNovo);
	}//if seClienteNv
```

A minha pergunta é: posso me basear na referência do Java para aplicar métodos e propriedades nos eventos de processo?

---

## Resposta #1

**Daniel Sales** (@Daniel_Sales) — 15/12/2021, 07:45

Bom dia,

O que acontece é que o Fluig usa uma versão do javascript um pouco diferente. Ele usa o Rhino javascript. Então ele aceita algumas funções em java pois o o Rhino reescreveu o javascript em java. Se não estou enganado rsrsrsrsrs.

---

## Resposta #2

**MAURO SIMOES** (@Mautresim) — 17/12/2021, 16:48

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/daniel_sales/48/22_2.png) Daniel\_Sales:
>
> > Rhino javascript

Obrigado, Daniel. Já ajuda.

---
