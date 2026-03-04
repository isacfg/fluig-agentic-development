# Fechar Modal com ESC

> **Fonte:** [https://fluiggers.com.br/t/fechar-modal-com-esc/1132](https://fluiggers.com.br/t/fechar-modal-com-esc/1132)
> **Categoria:** Widgets
> **Criado em:** 13/06/2022, 09:59
> **Visualizações:** 930 | **Likes:** 2 | **Respostas:** 1

---

## Pergunta original

**Marcella Tsangos** (@marcella_tsangos) — 13/06/2022, 09:59

Pessoal,

Alguém já teve a demanda de fechar o modal com a tecla ESC? Fiz alguns testes, mas sem sucesso.

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Everton Alves** (@everton) — 13/06/2022, 14:07 | ❤️ 2

Olá,

Supondo que vc tenha um modal igual o exemplo do style-guide ([TOTVS Fluig Developer](https://style.fluig.com/javascript.html#modals)), tente o seguinte:

```javascript
this.myModal = FLUIGC.modal({
    		title: 'Title',
    		content: 'Modal Content',
    		id: 'fluig-modal',
    		actions: [{
    			'label': 'Save',
    			'bind': 'data-open-modal',
    		},{
    			'label': 'Close',
    			'autoClose': true
    		}]
    	}, (err, data) => {
    		if(err) {
    			console.error(err);
    		} else {
    			$('#fluig-modal').keyup(event => {
    				if (event.key == 'Escape') {
    					this.myModal.remove();
    				}
    			})
    		}
    	});
```

---

## Resposta #2

**Marcella Tsangos** (@marcella_tsangos) — 13/06/2022, 17:17

Funcionou, obrigada!

---
