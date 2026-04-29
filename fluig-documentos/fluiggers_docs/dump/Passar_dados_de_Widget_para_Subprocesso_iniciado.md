# Passar dados de Widget para Subprocesso iniciado

> **Fonte:** [https://fluiggers.com.br/t/passar-dados-de-widget-para-subprocesso-iniciado/2808](https://fluiggers.com.br/t/passar-dados-de-widget-para-subprocesso-iniciado/2808)
> **Categoria:** Widgets
> **Criado em:** 23/05/2024, 10:54
> **Visualizações:** 62 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Henrique Cabral** (@HenriqueCabral) — 23/05/2024, 10:54

Pessoal, bom dia!

Estou criando um widget que puxa uma API e cria um subprocesso pelo botão iniciar avaliação. Esse botão aparece de forma dinâmica pois a quantidade de usuários na tabela é de acordo com o centro de custo selecionado no select (Esses valores vem de um dataset puxados direto do banco). Gostaria de saber como posso puxar os valores da linha do usuário da tabela, por exemplo o Nome do colaborador, o ID no banco e mais alguns dados que aparecem, do widget para o subprocesso criado a partir do botão. Isso seria possível?

---

## Resposta #1

**Leonardo Masera** (@Leonardo_Masera) — 23/05/2024, 12:26

Não sei se entendi bem sua pergunta, mas se quer iniciar um processo com dados do widget pode fazer assim:

users = quem for o responsavel pode adicionar grupo, papel, usuario …
no formData você passa todos os dados que precisar passar mesmo que seja um numero diferente de usuario na tabela

```javascript
var formData = new java.util.HashMap();

    formData.put("ID_CAMPO_NO_NOVO_PROCESSO", valor que vai para o campo pode ser fixo ou de um campo da widget);
var processInstance = hAPI.startProcess("ID_DO_PROCESSO", 0, users, "Processo Iniciado", true, formData, false);
```

e para pegar o valor da tabela depende da estrutura da tabela, mas normalmente seria algo assim:

ex se for tabela pai x filho:

```javascript
$.each($("#idTabela > tbody > tr"), function (index, value) {
				if ( index > 0 ) {

					var linhaTabela = $(this);
					var idCampo = linhaTabela.find("select[name^='slc_']").attr("name");
					linha = idCampo.split('___')[1];
					console.log(linha);
					fnChangeSocio( document.getElementById('slc_categoria_socio___'+linha) )
				}
			});
```

ex ser for DataTable:

```javascript
var tabela = $('#idTabela').DataTable();
var dadosTabela = tabela.rows().data().toArray();
```

OBS: Lembrando que são exemplos tem que mudar de acordo com a necessidade, e se tiver alguma duvida sobre pode perguntar.

---
