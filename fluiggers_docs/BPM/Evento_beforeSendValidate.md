# Evento beforeSendValidate

> **Fonte:** [https://fluiggers.com.br/t/evento-beforesendvalidate/363](https://fluiggers.com.br/t/evento-beforesendvalidate/363)
> **Categoria:** BPM
> **Criado em:** 14/04/2021, 15:02
> **Visualizações:** 1930 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Vagner Duarte** (@vagner_duarte) — 14/04/2021, 15:02

Pessoal,

preciso usar o beforeSendValidate, e estou utiizando desta forma:

```
var beforeSendValidate = function(numState,nextState){


  		    if(numState == 4){

		    	var colaborador = $('[name="rd_colaborador"]:checked').val();
		    	var supervisor = $('#txt_supervisorEstagio').text();
		    	var origemVaga = $('[name="rd_origemVaga"]:checked').val();


		    	if (colaborador == undefined){
			    		FLUIGC.toast({
			    			title: 'Atenção:',
			    			message: 'Informe qual a função do colaborador que será Contratado!',
			    			type: 'warning'
			    		});
			    return false;

			    }
```

Se eu deixar da forma acima, ele funcionar, porém, se eu colocar um segundo IF, ele não funciona mais tipo:

var beforeSendValidate = function(numState,nextState){

```
if(numState == 4){

		    	var colaborador = $('[name="rd_colaborador"]:checked').val();
		    	var supervisor = $('#txt_supervisorEstagio').text();
		    	var origemVaga = $('[name="rd_origemVaga"]:checked').val();


		    	if (colaborador == undefined){
			    		FLUIGC.toast({
			    			title: 'Atenção:',
			    			message: 'Informe qual a função do colaborador que será Contratado!',
			    			type: 'warning'
			    		});
			    return false;

			    }
                   if(numState == 17){
                     console.log('Faça algo');
      }
```

}

Se eu colocar desta forma, não funciona!

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 14/04/2021, 15:53 | ❤️ 1

o seu segundo `if` não pode estar dentro do primeiro `if`, pois nunca executará mesmo.

```javascript
var beforeSendValidate = function(numState,nextState) {
	if (numState == 4) {
		var colaborador = $('[name="rd_colaborador"]:checked').val();
		var supervisor = $('#txt_supervisorEstagio').text();
		var origemVaga = $('[name="rd_origemVaga"]:checked').val();

		if (colaborador == undefined) {
			FLUIGC.toast({
				title: 'Atenção:',
				message: 'Informe qual a função do colaborador que será Contratado!',
				type: 'warning'
			});

			return false;
		}
	}

	if (numState == 17) {
		console.log('Faça algo');
	}
}
```

---

## Resposta #2

**Vagner Duarte** (@vagner_duarte) — 15/04/2021, 11:25

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/bruno_gasparetto/48/68_2.png) Bruno\_Gasparetto:
>
> > unca executará mesm

Bruno bom dia,

Veja o meu código completo. Não consigo ver, onde o meu segundo if está dentro do primeiro:

```
<script>

		var beforeSendValidate = function(numState,nextState){

			console.log('Tarefa Atual ' +numState);
			console.log('Próxima Tarefa ' +nextState);

  		    if(numState == 4){

		    	var colaborador = $('[name="rd_colaborador"]:checked').val();
		    	var supervisor = $('#txt_supervisorEstagio').text();
		    	var origemVaga = $('[name="rd_origemVaga"]:checked').val();


		    	if (colaborador == undefined){
			    		FLUIGC.toast({
			    			title: 'Atenção:',
			    			message: 'Informe qual a função do colaborador que será Contratado!',
			    			type: 'warning'
			    		});
			    return false;

			    }
		    	else if(colaborador != 'funcionario' && supervisor == ''){
			    		FLUIGC.toast({
			    			title: 'Atenção:',
			    			message: 'Informe o Supervisor do Estágio!',
			    			type: 'warning'
			    		});
			    return false;
			    	}

		    	else if(origemVaga == undefined){
	    		FLUIGC.toast({
	    			title: 'Atenção:',
	    			message: 'Informe a Origem da vaga!',
	    			type: 'warning'
		    		});
	    		return false;
		    	}

		    	if($('#txt_loginUsuario').val() == $('#txt_loginGerente').val()){
		    		$("#txt_fluxo").val('sup');
		    		console.log('Login do Usuário ' + $('#txt_loginUsuario').val());
		    	}
		     }

  		    if(numstate == 17){
  		    	console.log('Entrou na atividade 17');
  		    }

		}

		</script>
```

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 15/04/2021, 17:55

[@vagner\_duarte](/u/vagner_duarte), nesse script está correto. No que você postou no primeiro post estava estranho e parecia que o segundo if, numState == 17, estava dentro do primeiro if, numState == 4.

Ele deixa de funcionar totalmente? Não exibe erro no console dizendo que tem algo errado? Ou é um erro de lógica que não está executando algo específico?

---

## Resposta #4

**Willian Laynes** (@Willian_Laynes) — 15/04/2021, 21:54

Pelo que você esta relatando parece que tem algo no evento de formulário “validateForm” para essa atividade, se tiver o Fluig irá ignorar essa validação pelo “beforeSendValidate” para essa atividade.
![image](https://fluiggers.com.br/uploads/default/original/1X/01941701ee0e1bf09a09c9ee9af774ccceed48b0.png)

---

## Resposta #5

**Bruno Gasparetto** (@Bruno_Gasparetto) — 17/04/2021, 09:09

[@Willian\_Laynes](/u/willian_laynes), mas a beforeSendValidate ocorre no front antes de submeter o formulário pro back, que então executará a validateForm. Então é possível ter os dois eventos.

---
