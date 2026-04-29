# API Detran - Como usar ela?

> **Fonte:** [https://fluiggers.com.br/t/api-detran-como-usar-ela/1387](https://fluiggers.com.br/t/api-detran-como-usar-ela/1387)
> **Categoria:** API`s Fluig
> **Criado em:** 04/10/2022, 13:41
> **Visualizações:** 414 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**jonathas araujo** (@jonathas_araujo) — 04/10/2022, 13:41 | ❤️ 1

Fala DEVs fluig tudo bem? Alguém já precisou conectar a alguma API? Claro que sim né, agora chegou a minha vez e não sei como fazer isso pelo Fluig, quero usar a API do Detran, como faço aqui?

![image](https://fluiggers.com.br/uploads/default/optimized/1X/14c5246bdfa2605c21a54594c88307c70d4c2eec_2_689x288.png)

Qual tipo de autenticação?

---

## Resposta #1

**Guilherme Beranger** (@Guilherme_Beranger) — 07/10/2022, 10:28

Opa amigo, beleza?
cara eu não entendi muito bem sua dúvida,
em qual momento vc quer utilizar a API?
vc quer fazer uma consulta em algum form??
quer fazer a consulta dentro de um processo??
se for dentro de algum form, pode fazer uma consulta HTTP normal.

exemplo:

\`
$(document).ready(function () {

```
$("#documento").blur(function () {
	//Capturando o valor do campo 'pessoaJuridica' e retirando os caracateres especiais, atrelando o valor na URL e realizando a consulta<--
	$.getJSON("//publica.cnpj.ws/cnpj/" + $("#documento").val().replace(/\D/g, ''), function (dados) {

		//Capturando os valores separados
		var wsLogradouro = dados.estabelecimento.logradouro;
		var wsNumeroLogradouro = dados.estabelecimento.numero;
		var wsBairro = dados.estabelecimento.bairro;
		var wsCnpj = dados.estabelecimento.situacao_cadastral;
		var nmFantasia = dados.estabelecimento.nome_fantasia;
		if (nmFantasia == null) {

			nmFantasia = dados.razao_social
		}
		//Criando as Strings
		var enderecoCompleto = wsLogradouro + ',' + wsNumeroLogradouro + ' - ' + wsBairro;

		//Atribuindoo os valores finais das Strings
		$("#razaoSocial").val(dados.razao_social);
		$("#bairro").val(dados.estabelecimento.bairro);
		$("#nomeFantasia").val(nmFantasia);
		$("#enderecoCompleto").val(enderecoCompleto);
		$("#cep").val(dados.estabelecimento.cep);
		$("#cidade").val(dados.estabelecimento.cidade.nome);
		$("#estado").val(dados.estabelecimento.estado.sigla);
		$("#inscricaoEstadual").val(dados.estabelecimento.inscricoes_estaduais[0].inscricao_estadual);
		$("#infosCNPJ").val(wsCnpj);
	})

});
```

});
\`

---

## Resposta #2

**jonathas araujo** (@jonathas_araujo) — 07/10/2022, 10:46

Opa amigo muito obrigado, eu não vou precisar mais, no caso eu criei um dataSet com todas informações que queria, ai estou puxando por ele mesmo, eram dados sobre multas, valor das multas, pontuação.
Mais a API do Detran e paga, ai fiz manual mesmo.

---
