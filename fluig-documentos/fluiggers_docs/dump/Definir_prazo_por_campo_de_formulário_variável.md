# Definir prazo por campo de formulário variável

> **Fonte:** [https://fluiggers.com.br/t/definir-prazo-por-campo-de-formulario-variavel/3112](https://fluiggers.com.br/t/definir-prazo-por-campo-de-formulario-variavel/3112)
> **Categoria:** Formulários
> **Criado em:** 09/01/2025, 18:29
> **Visualizações:** 163 | **Likes:** 3 | **Respostas:** 3

---

## Pergunta original

**Rahyan Ramos** (@Ramos) — 09/01/2025, 18:29

Olá a todos!

Estou desenvolvendo um processo onde preciso aplicar o prazo de conclusão de uma atividade de forma dinâmica, dependendo de valores de uma atividade anterior.

![image](https://fluiggers.com.br/uploads/default/original/2X/4/43fe48a9f9bc15b64d5ad7e8d7ea7040197b0e00.png)

O trecho do fluxo em questão é esse, onde o prazo da atividade ‘Levantar os Fatos (task15)’ será variável com os valores passados no campo da atividade ‘Classificar Irregularidade (task13)’.

Tentei pelo displayFields, afterProcessing e beforeProcessing, porém sempre esbarro no problema de a atividade já estiver passado a etapa antes de definir o valor no campo ou dos campos necessários para calcular o prazo não estiver preenchido ainda.

Esse é um exemplo do código que eu tenho tentado usar:

```auto
const numAtvdd = getValue("WKNumState");

	if(numAtvdd == 13){
		const idxIrregularidade = form.getChildrenIndexes("irregularidade");
		const gravidadeMaxima = form.getValue("gravidadeMaxima");
		let prazo = '000:00';

		for (var i = 0; i < idxIrregularidade.length; ++i) {
	    	let index = idxIrregularidade[i];
	    	let irregSelect = form.getValue("tbIrregularidade___"+index);

	    	if(irregSelect == 'indefinido_outra'){
	    		if(gravidadeMaxima.includes('grave')){
	    			prazo = '048:00';
	    		}else{
	    			prazo = '014:24';
	    		}
	    	}else{
	    		if(gravidadeMaxima.includes('grave')){
	    			prazo = '024:00';
	    		}else{
	    			prazo = '004:48';
	    		}
	    	}
		}

		form.setValue("prazo", prazo);
	}
```

Qual o melhor evento eu posso usar para essa questão?

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 10/01/2025, 12:40 | ❤️ 1

Como você tá colocando pra pegar de um campo do formulário talvez dê pra usar o evento de processo `beforeTaskCreate`.

Ou talvez nos eventos de formulário `inputFields` (já que serve pra formatar os campos antes de prosseguir o processo) ou no javascript do formulário usando a função `beforeSendValidate`, pois já que executa o js antes de enviar o formulário talvez usar ali pra mudar o campo do formulário dê certo, bastando transferir a lógica do horário pro JS do formulário.

Aqui eu precisei fazer algo parecido, mas ao invés de deixar as horas de conclusão eu tinha uma data específica no formulário e o prazo tinha que ser baseado nela. Nesse caso eu fiz no evento de processo `afterTaskCreate` usando o método `hAPI.setDueDate`.

Segue o fonte pra ter uma ideia:

```javascript
/**
 * Configura o prazo das atividades de registrar reserva e de reservado
 *
 * @param {string} colleagueId Matrícula do Usuário
 */
function afterTaskCreate(colleagueId) {
    var proximaAtividade = getValue("WKNextState");
    var atividades = atividadesSoliVeiculo();

    if (proximaAtividade != atividades.ATIVIDADE_RESERVADO && proximaAtividade != atividades.ATIVIDADE_REGISTRAR_RESERVA) {
        return;
    }

    var dateString = "";
    var toleranceInMinutes = 0;

    if (proximaAtividade == atividades.ATIVIDADE_REGISTRAR_RESERVA) {
        dateString = hAPI.getCardValue("data_saida_iso");
        toleranceInMinutes = -120;
    } else {
        dateString = hAPI.getCardValue("data_retorno_iso");
        toleranceInMinutes = 15;
    }

    try {
        var dateFormat = new java.text.SimpleDateFormat("yyyy-MM-dd");
        var dueDate = dateFormat.parse(dateString.substring(0, 10));
        var hours = java.lang.Integer.parseInt(dateString.substring(11, 13));
        var minutes = java.lang.Integer.parseInt(dateString.substring(14, 16)) + toleranceInMinutes;
        var dueTimeInSeconds = ((hours * 60) + minutes) * 60;

        hAPI.setDueDate(getValue("WKNumProces"), 0, colleagueId, dueDate, dueTimeInSeconds);
    } catch (err) {
        log.error("Erro ao configurar Prazo de Conclusão. " + err);
    }
}
```

---

## Resposta #2

**Rahyan Ramos** (@Ramos) — 13/01/2025, 15:37 | ❤️ 1

Excelente Bruno.

Consegui através do evento inputFields, usando a mesma lógica porém com alguns ajustes, por fim meu código ficou assim:

```auto
function inputFields(form){
	try {
	    const idxIrregularidade = form.getChildrenIndexes("irregularidade");
	    const gravidadeMaxima = form.getValue("gravidadeMaxima").toString();
	    let prazo = "000:00";

	    for (let i = 0; i < idxIrregularidade.length; ++i) {
	        let index = idxIrregularidade[i];
	        let irregSelect = form.getValue("tbIrregularidade___" + index);

	        if (irregSelect == 'indefinido_outra') {
	            if (gravidadeMaxima.indexOf("grave") !== -1) {
	                prazo = '048:00';
	            } else {
	                prazo = '014:24';
	            }
	        } else {
	            if (gravidadeMaxima.indexOf("grave") !== -1) {
	                prazo = '024:00';
	            } else {
	                prazo = '004:48';
	            }
	        }
	    }

	    form.setValue("prazo", prazo);
	} catch (error) {
	    // Caso haja alguma exceção, ela será registrada no campo "prazo"
	    form.setValue("prazo", 'Erro: ' + error.message);
	}
}
```

Obrigado pelo apoio

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 13/01/2025, 18:24

O Fluig não deu erro por ter usado `const` e `let` no evento do formulário?

Ao menos até a versão 1.8.1 (que uso atualmente) o Fluig não consegue reconhecer esses identificadores, forçando a suar sempre `var`.

---

## Resposta #4

**Rahyan Ramos** (@Ramos) — 13/01/2025, 18:43 | ❤️ 1

Não, aqui funcionou sem problemas. O único problema que eu estava tendo referente a versão da linguagem é que eu estava usando `.include` e precisei alterar para `indexOf()`

Mas tenho usado `const` e `let` sem problemas em todos meus projetos no Fluig

---
