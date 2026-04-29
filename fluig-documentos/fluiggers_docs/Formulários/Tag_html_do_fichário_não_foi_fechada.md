# Tag <html> do fichário não foi fechada

> **Fonte:** [https://fluiggers.com.br/t/tag-html-do-fichario-nao-foi-fechada/1887](https://fluiggers.com.br/t/tag-html-do-fichario-nao-foi-fechada/1887)
> **Categoria:** Formulários
> **Tags:** `form`
> **Criado em:** 27/04/2023, 14:28
> **Visualizações:** 163 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Wanderley Junior** (@gomeswjunior) — 27/04/2023, 14:28

Alguém sabe como resolver esse problema ? meu arquivo displayFields não html

```auto
function displayFields(form,customHTML){
	try {
		var usuario = fluigAPI.getUserService().getCurrent();
		var current_date = getDayDate();
		var activity = parseInt(getValue("WKNumState"));

		if (activity != 0 || activity != 5){
			form.setValue("soli_numero", getValue("WKNumProces"));
		}

		if (activity == 0 || activity == 5){
			form.setValue("soli_data", current_date);
			form.setValue("soli_nome", usuario.getFullName());

			form.setVisibleById("panel_avaliacao", false);
			form.setVisibleById("panel_analise", false);
			form.setVisibleById("panel_registro", false);
		}

		if (activity == 6){
			form.setValue("avaliacao_resp", usuario.getFullName());
			form.setValue("avaliacao_data", current_date);

			form.setVisibleById("panel_analise", false);
			form.setVisibleById("panel_registro", false);
		}

		if (activity == 8){
			form.setValue("analise_resp", usuario.getFullName());
			form.setValue("analise_data", current_date);

			form.setVisibleById("panel_registro", false);
		}

		if (activity == 10){
			form.setValue("registro_resp", usuario.getFullName());
			form.setValue("registro_data", current_date);
		}
	} catch (error) {
		log.warn("displayFields - catch error: " + error)
	}

}

function getDayDate(){
	var today = new Date();
	var year = today.getFullYear();
	var month = (today.getMonth() + 1) < 10 ? '0' + (today.getMonth() + 1)	: (today.getMonth() + 1);
	var day = today.getDate() < 10 ? '0' + today.getDate() : today.getDate();
	var hour = today.getHours() < 10 ? '0' + today.getHours() : today.getHours();
	var minute = today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes();
	var second = today.getSeconds() < 10 ? '0' + today.getSeconds() : today.getSeconds();
	var currentHour = hour + ":" + minute + ":" + second;
	var currentDate = day + '/' + month + '/' + year;
	//var currentTime = currentDate + " - " + currentHour;

	return currentDate;
}
```

print do ERRO

![image](https://fluiggers.com.br/uploads/default/optimized/1X/533d3a6ee86d77c1d0f4be09fb1b4e3e668bf0c3_2_690x140.png)

---

## Resposta #1

**Jonathas** (@JothurInformatica) — 27/04/2023, 14:43

Boa tarde, analisei aqui e parece estar tudo ok com o fechamento nesse arquivo. Estranho.

---
