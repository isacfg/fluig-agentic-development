# Eventos no Fluig Modal

> **Fonte:** [https://fluiggers.com.br/t/eventos-no-fluig-modal/2754](https://fluiggers.com.br/t/eventos-no-fluig-modal/2754)
> **Categoria:** Formulários
> **Tags:** `form`, `modal`
> **Criado em:** 25/04/2024, 16:59
> **Visualizações:** 171 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Rodrigo de Oliveira** (@redschenko) — 25/04/2024, 16:59

Boa tarde.

Preciso utilizar o evento shown.bs.modal do Modal, porém não está sendo chamado.

Abaixo exemplo do código:

```auto
var myModal = FLUIGC.modal(
	{
		title: 'Título',
		content: 'Conteúdo',
		id: 'meuModal',
		actions: [
			{
				'label': 'fluig-modal',
				'bind': 'data-save',
			},
			{
				'label': 'Fechar',
				'autoClose': true,
			}
		]
	},
	function (err, data) {
		if (err) {
			// Tratar Erro
		} else {
			// Fazer algo com os dados (data)
		}
	}
);

$('#meuModal').on('shown.bs.modal', function () {
	console.log('Modal carregado!');
});
```

Alguém sabe o que pode estar de errado?

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 26/04/2024, 07:56

Você pode usar a callback da modal pra executar ações após a modal ser criada.

---
