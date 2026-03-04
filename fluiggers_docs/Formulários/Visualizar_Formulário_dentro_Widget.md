# Visualizar Formulário dentro Widget

> **Fonte:** [https://fluiggers.com.br/t/visualizar-formulario-dentro-widget/1114](https://fluiggers.com.br/t/visualizar-formulario-dentro-widget/1114)
> **Categoria:** Formulários
> **Tags:** `form`, `dataset`, `fluigapi`
> **Criado em:** 01/06/2022, 11:08
> **Visualizações:** 744 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**William** (@will060690) — 01/06/2022, 11:08

Ola pessoal!

Estou desenvolvendo um Widget, onde preciso trazer um formulário com seus dados, mas pode ter a possibilidade deste usuário não ter participado do fluxo, tem como fazer isso?
Tentei utilizar a api “/ecm-forms/api/v2/cardindex/html?processInstanceId=”, mas quando o usuário não participou ele fala que não tem permissão.

---

## Resposta #1

**Jonathan Albuquerque** (@Jonathan.Albuquerque) — 16/06/2022, 12:09

Desde que o usuário tenha ao menos permissão de leitura na pasta, você pode apresentar no iframe em um modal passando a pasta, o documento a versão do seu formulário:

```javascript
viewModal : function(formFolder, documentId, version){
				var myModal = FLUIGC.modal({
					title: 'Visualizar Formulário',
					content: `<iframe height="${$(window).height() * 0.6}" width="100%" src="/webdesk/streamcontrol/${formFolder}/${documentId}/${version}//?edit=false" title="iframe"></iframe>`,
					id: 'fluig-modal',
					size: 'large',
					actions: [{
						'label': 'Voltar',
						'autoClose': true
					}]
				}, function(err, _data) {
					if(err) {

					} else {

					}
				});
			}
```

---
