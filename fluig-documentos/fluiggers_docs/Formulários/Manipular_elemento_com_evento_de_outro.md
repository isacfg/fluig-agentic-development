# Manipular elemento com evento de outro

> **Fonte:** [https://fluiggers.com.br/t/manipular-elemento-com-evento-de-outro/2979](https://fluiggers.com.br/t/manipular-elemento-com-evento-de-outro/2979)
> **Categoria:** Formulários
> **Tags:** `form`
> **Criado em:** 23/09/2024, 10:41
> **Visualizações:** 36 | **Likes:** 6 | **Respostas:** 1

---

## Pergunta original

**Gabriel Douglas Fernandes Barbosa** (@GabrielDouglas) — 23/09/2024, 10:41 | ❤️ 1

Tenho um input number"salario" e um input checkbox “combinado”, quero que o input “salario” fique desabilitado caso o input “combinado” esteja marcado, como faço isso? tentei o código abaixo e não consegui:

```auto
<script>
		$('#salarioCombinado').on('change',function(){
			console.log('Entrou')
			alert('Status do checkbox: ' + $(this).val())
			if($(this).checked) {
				$('#salarioInicial').prop('disabled', true);
			}else{
				$('#salarioInicial').prop('disabled', false);
			}
		})
	</script>
```

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Eduardo Vantini Neto** (@eduardo.vantini) — 23/09/2024, 12:26 | ❤️ 1

Faz assim

```auto
$('#salarioCombinado').on('change',function(){
  if($(this).is(":checked")) {
    $('#salarioInicial').prop('disabled', true);
  }else{
    $('#salarioInicial').prop('disabled', false);
  }
})
```

Assim deve funcionar.

Abs

---

## Resposta #2

**Gabriel Douglas Fernandes Barbosa** (@GabrielDouglas) — 23/09/2024, 13:43 | ❤️ 1

Deu certo meu irmão, muito obrigado.

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 23/09/2024, 14:14 | ❤️ 3

Dá pra simplificar um pouco mais e evitar criar um novo objeto JQuery, afinal dá pra ver se tá checked direto no elemento input.

```javascript
$('#salarioCombinado').on('change', function() {
    $('#salarioInicial').prop('disabled', this.checked);
});
```

---
