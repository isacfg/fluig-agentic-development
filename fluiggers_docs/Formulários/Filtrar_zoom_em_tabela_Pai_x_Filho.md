# Filtrar zoom em tabela Pai x Filho

> **Fonte:** [https://fluiggers.com.br/t/filtrar-zoom-em-tabela-pai-x-filho/1403](https://fluiggers.com.br/t/filtrar-zoom-em-tabela-pai-x-filho/1403)
> **Categoria:** Formulários
> **Tags:** `form`, `processo`, `dataset`
> **Criado em:** 11/10/2022, 11:27
> **Visualizações:** 828 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**Rodrigo de Oliveira** (@redschenko) — 11/10/2022, 11:27

Olá.

Tenho um processo com uma tabela pai x filho sendo um dos campos dessa tabela o código do cliente.
Em uma das atividades seguintes o usuário deve preencher um campo zoom com o número do pedido daquele cliente. O dataset filtra através de constraint para exibir apenas os pedidos do cliente relacionado.

Criei um função onde faz um laço “for” para percorrer os itens e setar o reloadZoomFilterValues() de acordo com o código do cliente;

```javascript
function filtraZoomItem(){
	var totalItens  = $("#linhaItem").val();
	var item 		= 0;
	var codLoja		= "";

	for (item = 1; item <= totalItens; item++) {
		if ($('#item___' + item).length) {
			codLoja = $("#codigoClienteItem___"+item).val()

			if (codLoja != ""){
				reloadZoomFilterValues("propostasGeradasItem___"+item, "CODCLI," + codLoja);
			}
		}
	}
}
```

Adicionei a chamada desta função no $(document).ready(), porém apresenta erro:

```
forms.js?v=1.7.1-221004:1 Uncaught TypeError: Cannot set properties of undefined (setting 'filterValues')
```

Adicionei a chamada desta função no $(document).load(), porém nem executa.

Fiz um teste, removendo a chamada da função e ao fazer debug no navegador executando a função no console, funciona.

Como posso fazer o filtro do zoom de acordo com o cliente de cada linha do pai x filho?

Desde já agradeço a atenção.

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 11/10/2022, 12:11

Tenta chamar a função alguns segundos após o load do DOM terminar.

O script do Fluig também executa ao término do load do DOM e só então fará a troca dos Zoom pelo componente de select (se não me engano é utilizado o plugin select2). Então até o Fluig finalizar de aplicar essa troca não tem como fazer nada com o Zoom, afinal ele ainda não existe.

Você pode usar a setTimeout pra definir a execução após 1 segundo do término do carregamento, verificar se o Zoom existe (todos os zooms ficam salvos na window\[“nome\_do\_zoom”\]) pra então executar a sua função `filtraZoomItem`, caso contrário use a setTimeout pra definir a execução um pouco mais pra frente.

---

## Resposta #2

**Rodrigo de Oliveira** (@redschenko) — 11/10/2022, 13:45

Resolveu [@Bruno\_Gasparetto](/u/bruno_gasparetto)

Utilizei o seguinte:

window.onload = function(){
setTimeout(function () { filtraZoomItem(); }, 1000);
}

Obrigado! :slight_smile:

---
