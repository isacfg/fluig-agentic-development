# Validar um campo de formulário por atividade

> **Fonte:** [https://fluiggers.com.br/t/validar-um-campo-de-formulario-por-atividade/955](https://fluiggers.com.br/t/validar-um-campo-de-formulario-por-atividade/955)
> **Categoria:** Formulários
> **Criado em:** 04/03/2022, 15:10
> **Visualizações:** 870 | **Likes:** 2 | **Respostas:** 2

---

## Pergunta original

**Marcelo Barros** (@marcelo_barros) — 04/03/2022, 15:10

Boa tarde pessoal,

Estou com uma situação onde preciso colocar um campo de formulário como obrigatório mais numa atividade que não seja a primeira (inicio).

Sei que no validatefields.js eu consigo travar isso, porém, ele já travar na primeira atividade , não aceita eu movimentar retornando que esse campo é obrigatório sendo que ele só fica visível na atividade 18.

Alguém saberia me orientar como posso fazer pra ele passar da atividade inicio e travar como obrigatório o campo apenas na atividade 18?

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Allan Reichert** (@allan.reichert) — 07/03/2022, 08:26

Bom dia

no validateForms pode capturar o número da atividade e validar a condição.

var numAtividade = getValue(“WKNumState”)

---

## Resposta #2

**Marcelo Barros** (@marcelo_barros) — 07/03/2022, 09:35 | ❤️ 1

Deu certo [@allan.reichert](/u/allan.reichert)

Obrigado!

---

## Resposta #3

**marley.andrade** (@marley.andrade) — 25/07/2022, 12:41

Boa tarde.
Como usar o validate Forms em um campo do type radio?

Grata.

---

## Resposta #4

**Eustaquio Ferreira** (@Eustaquio_Ferreira) — 25/07/2022, 14:45 | ❤️ 1

Boa tarde!
A sua pergunta não condiz com o tópico. Creio que seria melhor iniciar um novo tópico com a sua duvida.

mas de todo modo segue um exemplo:

Mesmo que tenham dois inputs do tipo radio com o atributo name igual. no validateForm o metodo **getValue(String fieldName)** busca o valor do radio que foi selecionado.

**index.html**

```auto
<div class="form-group col-md-3 col-sm-6 col-xs-12" id="div_reajuste" >
	<label>Reajuste Salarial?</label>
	<div class="custom-radio custom-radio-primary">
	     <input type="radio" name="opcao_salario" value="S" id="radio5">
	     <label for="radio5">Sim</label>
	  </div>
	  <div class="custom-radio custom-radio-primary">
		<input type="radio" name="opcao_salario" value="N" id="radio6">
		<label for="radio6">Não</label>
	</div>
</div>
```

**validateForm.js**

```auto
function validateForm(form)
{
   var atividade = getValue('WKNumState');

   //Inicio
   if(atividade == 0 || atividade == 1)
   {

      if (form.getValue('opcao_salario') == null || form.getValue('opcao_salario') == "")
      {
         throw "Selecione uma opção de salario";
      }

   }
}
```

---
