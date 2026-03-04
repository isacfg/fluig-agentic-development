# Zoom sem dados para usuários

> **Fonte:** [https://fluiggers.com.br/t/zoom-sem-dados-para-usuarios/3014](https://fluiggers.com.br/t/zoom-sem-dados-para-usuarios/3014)
> **Categoria:** Formulários
> **Tags:** `form`, `processo`, `bpm`, `dataset`
> **Criado em:** 10/10/2024, 09:11
> **Visualizações:** 31 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Gabriel Douglas Fernandes Barbosa** (@GabrielDouglas) — 10/10/2024, 09:11

Bom dia amigos! O zoom abaixo não carrega nenhum dado para meus usuários, só para os usuários com papel admin que funciona, os demais não carrega nenhum dado, alguém sabe oque pode ser?

```auto
<div class="form-group col-md-3">
								<label>Nome Gestor</label>
								 <input
									type="zoom"
									id = "soli_gestor"
									name="soli_gestor"
									zoomvalue="colleagueId"
									data-zoom="{
										'displayKey':'colleagueName',
										'datasetId':'colleague',
										'fields':[
											{
												'field':'colleagueId',
												'label':'Id',
												'visible' : 'false'
											},
											{
												'field':'colleagueName',
												'label':'Nome',
												'standard':'true'
											},{
												'field':'mail',
												'label':'Email',
												'visible' : 'false'
											}
										]
									}" />
```

---

## Resposta #1 ✅ RESPOSTA ACEITA

**venturelli** (@venturelli) — 11/10/2024, 09:13

Confira em painel de controle > permissões > dataset colleagues se tem permissão para o papel users

---
