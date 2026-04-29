# Automatização de Campos do Formulário

> **Fonte:** [https://fluiggers.com.br/t/automatizacao-de-campos-do-formulario/3265](https://fluiggers.com.br/t/automatizacao-de-campos-do-formulario/3265)
> **Categoria:** Formulários
> **Tags:** `form`
> **Criado em:** 29/04/2025, 08:49
> **Visualizações:** 32 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Henrique Maia Cardosa** (@HenriqueMCard) — 29/04/2025, 08:49

Estou fazendo um formulário, e preciso automatizar alguns campos. O nome por exemplo, quando o usuário inicia o processo e abre o formulário o nome dele já precisa estar preenchido. Achei algo relacionado aqui, porém quando eu utilizo a função ela retorna a matrícula e não o nome.

```auto
function displayFields(form, customHTML) {
    var nome = getValue("WKUser");
    form.setValue("requisitante", nome);
}
```
```auto
<div id="inicio">
		<div class="panel panel-primary">
			<div class="panel-heading">
				<h3 class="panel-title">Formulário Inicial Vendas</h3>
			</div>
			<div class="panel-body">
				<div class="row">
					<div class="form-group col-md-6">
						<label for="requisitante">Requisitante</label>
						<input type="text" name="requisitante" id="requisitante" class="form-control">
					</div>
				</div>
			</div>
		</div>
	</div>
```

![Captura de tela 2025-04-29 085026](https://fluiggers.com.br/uploads/default/original/2X/c/c1a01c016416771a164f8f850f10582fb7e9dbc6.png)

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Marco Comassetto** (@marcommas) — 29/04/2025, 09:41 | ❤️ 1

No próprio displayFields, você consegue pegar e setar o nome completo, conforme abaixo:

```auto
var usuarioCorrente = fluigAPI.getUserService().getCurrent();
form.setValue("requisitante",  usuarioCorrente.getFullName() );
```

---
