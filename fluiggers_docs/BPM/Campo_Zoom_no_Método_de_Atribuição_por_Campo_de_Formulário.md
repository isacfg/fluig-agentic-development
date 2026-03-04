# Campo Zoom no Método de Atribuição por Campo de Formulário

> **Fonte:** [https://fluiggers.com.br/t/campo-zoom-no-metodo-de-atribuicao-por-campo-de-formulario/2989](https://fluiggers.com.br/t/campo-zoom-no-metodo-de-atribuicao-por-campo-de-formulario/2989)
> **Categoria:** BPM
> **Tags:** `form`
> **Criado em:** 27/09/2024, 11:16
> **Visualizações:** 220 | **Likes:** 3 | **Respostas:** 2

---

## Pergunta original

**Gabriel Douglas Fernandes Barbosa** (@GabrielDouglas) — 27/09/2024, 11:16

Fala pessoal! Eu tenho o seguinte campo zoom no meu form:

```auto
<input
                                    type="zoom"
                                    id = "soli_gestor"
                                    name="soli_gestor"
                                    data-zoom="{
										'displayKey':'colleagueName',
										'datasetId':'colleague',
										'fields':[
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

E agora eu preciso passar para o método de atribuição por campo de formulário esse campo zoom. Já fui no meu bpm e fiz a parametrização, mas quando avança pra atividade que fiz essa atribuição dá erro… HELP!

---

## Resposta #1

**venturelli** (@venturelli) — 27/09/2024, 23:11 | ❤️ 1

Você vai ter duas opções pra seguir. A primeira é usar um campo com o nome padrão que o zoom vai preencher automaticamente, ou fazer isso de forma manual.

**Campo padrão**
Vai ser necessário uma pequena alteração no seu zoom, adicionando o atributo `zoomvalue` com o valor `colleagueId`:

```html
<input type="zoom"
   name="soli_gestor"
   zoomvalue="colleagueId"
   data-zoom="{...}">
```

Além disso, você vai precisar criar um campo com o mesmo nome que campo zoom, porém com o prefixo “hidden\_”

```html
<input type="hidden" name="hidden_soli_gestor" id="hidden_soli_gestor">
```

Ao renderizar, o campo `soli_gestor` foi transformado em um select pelo Fluig e armazena o campo que foi configurado no `displayKey` do atributo `data-zoom`.

Já o campo `hidden_soli_gestor` serve para armazenar um código, um cpf, um e-mail, que será usado como identificador único no dataset, neste meu caso, como usei o atributo `zoomvalue` com o campo `colleagueId`, será armazenado a matrícula do usuário:

![Formulário com campo zoom renderizado](https://fluiggers.com.br/uploads/default/optimized/2X/9/999a3fa247eba55b27675abeb5bd651f32eefeb2_2_689x267.png)

Essa explicação inteira foi necessária para a conclusão que já deves ter dito: no mecanismo de atribuição por campo de formulário não vai ser usado o campo `soli_gestor` mas sim o `hidden_soli_gestor` porque é ele quem armazena a matrícula do usuário.

**Forma manual**
Outra forma, é trazer o campo colleagueId junto no zoom (porém de forma invisível) e via a implementação do método `setSelectedZoomItem` popular um outro campo:

```html
<input type="zoom" class="form-control" id="soli_gestor" name="soli_gestor" data-zoom="
				{
					'displayKey':'colleagueName',
					'datasetId':'colleague',
					'fields':[{
						'field':'colleagueName',
						'label':'colleagueName',
						'standard':true
					},{
						'field':'colleagueId',
						'label':'colleagueId',
						'visible': 'false'
					}]
				}">
			<input type="hidden" name="soli_gestor_colleagueId" id="soli_gestor_colleagueId">
```
```javascript
function setSelectedZoomItem(item) {
   if(item.inputId == "soli_gestor") {
      $("#soli_gestor_colleagueId").val(item.colleagueId);
   }
}
```

---

## Resposta #2

**Gabriel Douglas Fernandes Barbosa** (@GabrielDouglas) — 02/10/2024, 09:05

Show irmão! Obrigado pela ajuda, mas o campo `hidden_soli_gestor` não aparece no navegador, vou compartilhar abaixo todo o trecho do meu código e depois como o navegador renderizou o campo.

Outro ponto é que no mecanismo de atribuição no bpm não aparece a opção de selecionar o campo hidden\_soli\_gestor

```auto
<div class="form-group col-md-3">
   <label>Nome Gestor</label>
   <input type="text" id="soli_gestor" name="soli_gestor" zoomvalue="colleagueId" data-zoom="{
      'displayKey':'colleagueName',
      'datasetId':'colleague',
      'fields':[
      {
      'field':'colleagueId',
      'label':'Id',
      'standard':'true'
      },
      {
      'field':'colleagueName',
      'label':'Nome'
      },{
      'field':'mail',
      'label':'Email',
      'visible' : 'false'
      }
      ]
      }" value="Fernando Lima" readonly="true" class="form-control">
</div>
```

---

## Resposta #3 ✅ RESPOSTA ACEITA

**venturelli** (@venturelli) — 02/10/2024, 23:21 | ❤️ 2

Realmente, eu errei na minha explicação anterior.

Fiz alguns testes e editei a resposta anterior pra evitar que confunda outras pessoas.

Resumidamente, vai precisar adicionar o campo a mão:

```html
<input type="hidden" name="hidden_soli_gestor" id="hidden_soli_gestor">
```

---
