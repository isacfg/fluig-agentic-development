# Capturar resultado do modal

> **Fonte:** [https://fluiggers.com.br/t/capturar-resultado-do-modal/1514](https://fluiggers.com.br/t/capturar-resultado-do-modal/1514)
> **Categoria:** BPM
> **Tags:** `form`, `bpm`
> **Criado em:** 23/11/2022, 13:21
> **Visualizações:** 477 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Portela** (@Portela) — 23/11/2022, 13:21

Gente, como faço para prosseguir o processo a partir do resultado de um modal? Ou pegar qualquer respostar a partir dele?

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Eduardo Vantini Neto** (@eduardo.vantini) — 01/12/2022, 14:39

Olá, tenta assim

```auto
FLUIGC.modal({
	title: 'Modal Title',
	content: modalContent,
	id: 'modal-id',
	actions: [{
		'label': 'Sim',
		'bind': 'data-add-sim',
		'autoClose': true
	},{
		'label': 'Não',
		'bind': 'data-add-nao',
		'autoClose': true
	}]
}, function() {
	$("#modal-id").find("button[data-add-sim]").on("click", function() {

            //Código para o botão Sim

	});
	$("#modal-id").find("button[data-add-nao]").on("click", function() {

            //Código para o botão Não

	});
});
```

Veja se te atende!

Abs

---
