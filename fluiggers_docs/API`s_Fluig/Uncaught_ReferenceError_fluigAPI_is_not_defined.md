# Uncaught ReferenceError: fluigAPI is not defined

> **Fonte:** [https://fluiggers.com.br/t/uncaught-referenceerror-fluigapi-is-not-defined/3033](https://fluiggers.com.br/t/uncaught-referenceerror-fluigapi-is-not-defined/3033)
> **Categoria:** API`s Fluig
> **Tags:** `fluigapi`
> **Criado em:** 21/10/2024, 08:44
> **Visualizações:** 97 | **Likes:** 0 | **Respostas:** 3

---

## Pergunta original

**Otácio Barbosa** (@Otacio_Barbosa) — 21/10/2024, 08:44

Estou tentando pegar o usuario logado e passar para um input em um widget, porem não estou consingo usar o fluigAPI.

Já tentei também:

```auto
var codUsuario    = WCMAPI.userCode;
		console.log("codUsuario >>> "+codUsuario);
```
```auto
// Adiciona informações da API
var usuario = fluigAPI.getUserService().getCurrent();
form.setValue("usuarioMatricula", usuario.getCode());
form.setValue("usuarioLogin", usuario.getLogin());
document.getElementById("filter-solicitante").value = usuario.getLogin();
```
```auto
<div class="row">
						<div class="col-md-12">
							<label for="requerente" style="margin-top:10px;">Requerente</label>
							<input type="text" class="form-control"
								placeholder="Requerente" name="requerente" id="requerente">
						</div>
					</div>
```
```auto
utils_pt_BR.js:18 Uncaught ReferenceError: customHTML is not defined
```

![image](https://fluiggers.com.br/uploads/default/original/2X/8/8ea344d59df9f185befe637f5771e53678157e6b.png)

---

## Resposta #1

**venturelli** (@venturelli) — 21/10/2024, 08:55

Esse objeto só está disponível nos eventos que rodam no servidor como os eventos de processo e os eventos de formulário. Não dá pra usar no frontEnd diretamente.

Você pode criar um evento pro formulário, que puxe os dados da fluigAPI e introduza no formulário via customHTML.

Aqui tem um exemplo: [Source of displayFields.js - Exemplos-Avancados-de-Processos - fluig Stash](https://git.fluig.com/projects/SAMPLES/repos/exemplos-avancados-de-processos/browse/atendimento-chamados/forms/pesquisa_satisfacao/events/displayFields.js)

---

## Resposta #2

**Otácio Barbosa** (@Otacio_Barbosa) — 21/10/2024, 08:59

[@venturelli](/u/venturelli) mas eu posso usar o displayFields também em widget ?

---

## Resposta #3 ✅ RESPOSTA ACEITA

**venturelli** (@venturelli) — 21/10/2024, 09:04

Não tinha visto a parte de “widget”. De fato, não.

Vai ter que consultar via API pública ([TOTVS Fluig API](https://api.fluig.com/latest/collaboration/swagger-ui/#/Users/find)).

Só confere se no WCMAPI não tem as informações que precisas… tem a matrícula, o nome, o email e o login (`WCMAPI.userLogin`)

---

## Resposta #4

**Otácio Barbosa** (@Otacio_Barbosa) — 21/10/2024, 10:19

Deu certo com o WCMAPI:

![image](https://fluiggers.com.br/uploads/default/original/2X/3/3f5dfc17a8df1a6adcf3f89f70918f833ffc1b54.jpeg)

---
