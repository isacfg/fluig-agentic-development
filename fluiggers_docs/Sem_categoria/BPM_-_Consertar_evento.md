# BPM - Consertar evento

> **Fonte:** [https://fluiggers.com.br/t/bpm-consertar-evento/817](https://fluiggers.com.br/t/bpm-consertar-evento/817)
> **Categoria:** Sem categoria
> **Criado em:** 09/12/2021, 07:28
> **Visualizações:** 722 | **Likes:** 2 | **Respostas:** 1

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 09/12/2021, 07:28

Sou novato, mais que novato, em criação de fluxo de aprovação.

Nossa empresa contratou um desenvolvedor para fazer um fluxo de aprovação de um documento.
Entretanto, não queremos ficar dependentes deles.
Não nos deram o código-fonte.

Mas eu preciso de ajuda para duas perguntas:

1.  Os códigos de dois arquivos abaixo mostram onde eu preciso modificar o que está em produção (isto é o que foi importado do Fluig de produção o processo para o Eclipse Luna).

2.  Mais abaixo do texto, além dos dois códigos abaixo, eu explico minha maior dúvida.


* * *

Então, começando pelo item 1 acima, o *evento beforeTaskComplete*, tem um script (arquivo de nome **cadastro\_casos.beforeaskComplete.js**), assim…

```auto
function beforeTaskComplete(colleagueId,nextSequenceId,userList){
	var ativAtual = getValue("WKNumState");
	var numProcess =  getValue("WKNumProces");

	var template = "";

	var parametros = new java.util.HashMap();
	var destinatarios = new java.util.ArrayList();

	if(nextSequenceId == atAprovacaoScCaptador){
		template = "tpl_nova_solicitacao";
		destinatarios.add("criacaocasosnovos@meudominio.com.br");
		//destinatarios.add("worksite_mail@meudominio.com.br");

		parametros.put("Cliente", hAPI.getCardValue("seClienteNv") == "Sim" ? hAPI.getCardValue("cNvNome") : hAPI.getCardValue("nomeCliente"));
		parametros.put("Materia", hAPI.getCardValue("materiaCaso"));
		parametros.put("Assunto", hAPI.getCardValue("assuntoCaso"));
		parametros.put("SCCaptador", getUserName(hAPI.getCardValue("scCaptador")));
		parametros.put("SCEmissor", getUserName(hAPI.getCardValue("scEmissorEmissaoNH")));
		parametros.put("Coordenador", getUserName(hAPI.getCardValue("coordenadorEmissaoNH")));
		parametros.put("Origem", hAPI.getCardValue("origemCaso") == "1" ? 'RJ' : 'SP');
	}
	else if(ativAtual == atAprovacaoScCaptador){
		destinatarios.add(hAPI.getCardValue("matSolicitante"));

		if(hAPI.getCardValue("aprovacaoScCaptador") == "Sim"){
			template = "tpl_solicitacao_aprovada";

			parametros.put("Cliente", hAPI.getCardValue("seClienteNv") == "Sim" ? hAPI.getCardValue("cNvNome") : hAPI.getCardValue("nomeCliente"));
			parametros.put("Materia", hAPI.getCardValue("materiaCaso"));
			parametros.put("Assunto", hAPI.getCardValue("assuntoCaso"));
			parametros.put("SCCaptador", getUserName(hAPI.getCardValue("scCaptador")));
			parametros.put("SCEmissor", getUserName(hAPI.getCardValue("scEmissorEmissaoNH")));
			parametros.put("Coordenador", getUserName(hAPI.getCardValue("coordenadorEmissaoNH")));
			parametros.put("Origem", hAPI.getCardValue("origemCaso") == "1" ? 'RJ' : 'SP');
		}
		else{
			template = "tpl_solicitacao_reprovada";
		}
	}
	else if(ativAtual == atAproacaoComite){
		destinatarios.add(hAPI.getCardValue("matSolicitante"));

		if(hAPI.getCardValue("confidencial") == "Não"){
			destinatarios.add("notificaaberturacaso@meudominio.com.br");
			//destinatarios.add("worksite_mail@meudominio.com.br");
		}
		else{
			destinatarios.add(hAPI.getCardValue("emailScCaptador"));
			destinatarios.add(hAPI.getCardValue("emailSolicitante"));
		}

		if(hAPI.getCardValue("aprovacaoComite") == "Sim"){
			template = "tpl_solicitacao_aprovada_comite";

			parametros.put("Cliente", hAPI.getCardValue("seClienteNv") == "Sim" ? hAPI.getCardValue("cNvNome") : hAPI.getCardValue("nomeCliente"));
			parametros.put("Materia", hAPI.getCardValue("materiaCaso"));
			parametros.put("Assunto", hAPI.getCardValue("assuntoCaso"));
			parametros.put("SCCaptador", getUserName(hAPI.getCardValue("scCaptador")));
			parametros.put("SCEmissor", getUserName(hAPI.getCardValue("scEmissorEmissaoNH")));
			parametros.put("Coordenador", getUserName(hAPI.getCardValue("coordenadorEmissaoNH")));
			parametros.put("Origem", hAPI.getCardValue("origemCaso") == "1" ? 'RJ' : 'SP');
		}
		else{
			template = "tpl_solicitacao_reprovada_comite";

			parametros.put("justificativaAprovComite", hAPI.getCardValue("justificativaAprovComite"));
		}
	}
	else if(ativAtual == atAprovacaoDiretoria){
		destinatarios.add(hAPI.getCardValue("matSolicitante"));
		destinatarios.add(hAPI.getCardValue("scEmissorEmissaoNH"));
		destinatarios.add(hAPI.getCardValue("scCaptador"));

		if(hAPI.getCardValue("aprovacaoDiretoria") == "Não"){
			template = "tpl_job_client_reprovado";

			parametros.put("justificativaAprovDiretoria", hAPI.getCardValue("justificativaAprovDiretoria"));
		}
	}

	if(template != ""){
		log.info("template:"+template);
		log.info("destinatarios:"+destinatarios);

		parametros.put("subject", "Processo de Cadastro de Caso UCRG - Requisição "+numProcess);
		parametros.put("numSolicitacao", numProcess);
		parametros.put("numeroCaso", hAPI.getCardValue("numeroCaso"));

		notifier.notify("fluig", template, parametros, destinatarios, "text/html");
	}
}
```

… e outro arquivo, de nome uteis.js e que é um arquivo de *evento de formulário*, com o seguinte código:

```auto
function uteis(){}

var atRegistrarCaso = 4;
var atAprovacaoScCaptador = 14;
var atAproacaoComite = 21;
var atAprovacaoDiretoria = 27;
var atNotifArquivo = 44;
var atNotifAdm = 46;
var atValidarPreenchimento = 54;

function getDatetimeNow() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if (dd < 10) {
          dd = '0' + dd
    }

    if (mm < 10) {
          mm = '0' + mm
    }

    today = dd + '/' + mm + '/' + yyyy;

    return today;
}

function getNomeUsuario(usuario) {

    var nomeUsuario = null;

    var c1 = DatasetFactory.createConstraint("colleaguePK.colleagueId", usuario, usuario, ConstraintType.MUST);
    var c2 = DatasetFactory.createConstraint("active", "true", "true", ConstraintType.MUST);

    var constraints = new Array(c1, c2);

    var dataset = DatasetFactory.getDataset("colleague", null, constraints, null);

    if(dataset.rowsCount > 0){
        nomeUsuario = dataset.getValue(0, "colleagueName");
    }

    return nomeUsuario;
}
```

O que eu preciso modificar é o valor da variável ‘atAprovacaoScCaptador’ do bloco do primeiro arquivo. Isto é, onde tem

if(nextSequenceId == **atAprovacaoScCaptador**){
template = “tpl\_nova\_solicitacao”;
destinatarios.add(“criacaocasosnovos@meudominio.com.br”);
[//destinatarios.add](//destinatarios.add)(“worksite\_mail@meudominio.com.br”);

a variável destacada (atAprovacaoScCaptador) deveria estar com o valor 54 e não 14, como está definida nao arquivo uteis.js com o valor **var atAprovacaoScCaptador = 14;**

Com relação ao item 2, minhas preocupações são:

a) Se eu alterar o código do arquivo uteis.js para que o valor da variável/constante

**var atAprovacaoScCaptador = 14;**

se modifique para

**var atAprovacaoScCaptador = 54;**

quais os riscos de dar zebra quando eu exportar de volta para o Fluig de produção (a pergunta não é sobre o resultado da lógica, mas sim de causar mau funcionamento no Fluig)?

b) Quando eu for exportar, devo selecionar no Eclipse Luna o quê, propriamente? O ‘forms’, o ‘diagrams’ o ‘scripts’? Todos eles?

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 09/12/2021, 09:25 | ❤️ 2

Pelo que entendi esses valores indicam o número da atividade. A atividade realmente é a 54? Se sim as outras atividades estão com valores errados também? Afinal vi que tem outra atividade com o valor 54 também.

Evento de Formulário não se comunica com Evento de Processo. Então no seu processo deve ter algum outro lugar dando valor à `atAprovacaoScCaptador`.

Respondendo às perguntas em si:

1.  Aconselho muito a sempre enviar pra homologação antes. O Fluig não vai dar problema/parar de funcionar, mas você pode ter problema na execução do processo. Felizmente os processos que já foram iniciados não sofrerão problemas, pois toda vez que a gente exporta um processo é criada uma nova versão que só é válida para novas solicitações ou para as solicitações que você converter manualmente a versão.

2.  Você deve exportar primeiro o formulário e depois o processo. Quando você clica no formulário e manda exportar para o Fluig o Eclipse enviará todos os arquivos daquele formulário. Quando você clica no diagrama e manda exportar para o Fluig o Eclipse exportará todos os arquivos do processo (incluindo aí o diagrama e os scripts de evento de processo).

---

## Resposta #2

**MAURO SIMOES** (@Mautresim) — 09/12/2021, 09:37

Caro Bruno, muito obrigado.
Na verdade, não corro o risco de mau funcionamento lógico porque está funcionando errado agora. E, naquela fase de que falei, realmente não tem de estar o valor 14, não.
Eu copiei do diagrama do processo o ponto em que o teste de envio do email tem de ocorrer, está 54(State54).

E o teste que esta variável está atualmente fazendo já está assinalado mais abaixo, em
if(hAPI.getCardValue(“aprovacaoScCaptador”) == “Sim”){
que está pegando o valor do campo do formulário. Este sim é que está fazendo o papel certo da variável ‘atAprovacaoScCaptador’.

Outra coisa, eu propus errado: não vou modificar o valor da variável, mas sim usar outra variável, que seria a ‘atValidarPreenchimento’ no lugar de ’ atAprovacaoScCaptador’.

Vou exportar o formulário e o diagrama, conforme sua explicação de grande valia. (Mas, naturalmente, vou fazer uma cópia de segurança do Volume e do banco de dados do Fluig, antes, é claro.)

---
