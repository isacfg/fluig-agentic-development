# Popular tabela pai x filho após o usuário assumir a tarefa

> **Fonte:** [https://fluiggers.com.br/t/popular-tabela-pai-x-filho-apos-o-usuario-assumir-a-tarefa/1650](https://fluiggers.com.br/t/popular-tabela-pai-x-filho-apos-o-usuario-assumir-a-tarefa/1650)
> **Categoria:** BPM
> **Tags:** `paixfilho`
> **Criado em:** 21/02/2023, 16:58
> **Visualizações:** 273 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Uilian Gurjon** (@Uilian_Gurjon) — 21/02/2023, 16:58

Boa tarde estou tentando popular um formulário do tipo pai x filho com dados de um array que crio baseado em um campo. O processo é iniciado por uma formula visual no RM e preenche os campos com os dados do cliente, nesse momento eu gostaria de preencher os campos do pai x filho.
OBS.: O código funciona quando eu clico no botão, somente quero deixar tudo pronto para que o usuário apenas preencha os dados sem ter que clicar no botão.

```auto
var pontovao = $('#QTDPONTOS').val();
    var a = pontovao.split("|");
	var numericPart;
	var numericPart1;
	var numericPart2;
	var letterPart;
	var primeiroCaractere;
	var tamanho;
	var max_chars = 4;
	var pad_char = 0;
	var b = [];
	var c = [];
	for (var i=0; i<a.length; i++) {
		primeiroCaractere = a[i].charAt(0);
		if (primeiroCaractere === 'P') {
		   numericPart = a[i].match(/\d+/);
		   numericPart = (new Array(max_chars + 1).join(pad_char) + numericPart).slice(-max_chars);
		   letterPart = a[i].match(/[A-z]+/);
		   b[i] = letterPart+numericPart;
		} else {
		  c = a[i].split("-");
		  tamanho = a[i].length;
		  if (tamanho <= 2) {
			  numericPart = a[i].match(/\d+/);
			numericPart = (new Array(max_chars + 1).join(pad_char) + numericPart).slice(-max_chars);
			letterPart = a[i].match(/[A-z]+/);
			b[i] = letterPart+numericPart;
		  } else {
			c = a[i].split("-");
			numericPart1 = c[0].match(/\d+/);
			numericPart2 = c[1].match(/\d+/);
			letterPart = a[i].match(/[A-z]+/);
			b[i] = letterPart+numericPart1+'-'+numericPart2;
		  }
		}
	}

	b.sort(function(a,b){
		if (a > b)
			return 1;
		if (a < b)
			return -1;
		// a must be equal to b
		return 0;
	});

	for (var j=0; j<b.length; j++) {
		b[j] = b[j].replace(/0+(?=[1-9])/, '');
	}

	for ( var i = 0; i < b.length; i++) {
		var indexpontovao = wdkAddChild('tbpontovao');
		$("#DESCRICAOPONTOVAOTBPF01___" + indexpontovao).val(b[i]);
		$("#OBSERVACAOTBPF01___" + indexpontovao).val('');
		$("#FOTOTBPF01TBPF01___" + indexpontovao).val(b[i]);
	}
```

---

## Resposta #1

**Daniel Sales** (@Daniel_Sales) — 22/02/2023, 15:33

no document ready voce pode chamar o click do botão

```auto
$(document).ready(() => {
    $("#iddobotão").click();
});
```

Funciona, mas o que pode dar erro e se depender de algum componente do fluig ser totalmente carregado.

---
