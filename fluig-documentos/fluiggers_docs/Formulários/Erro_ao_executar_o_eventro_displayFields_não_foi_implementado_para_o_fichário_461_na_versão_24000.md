# Erro ao executar o eventro displayFields não foi implementado para o fichário 461 na versão 24000

> **Fonte:** [https://fluiggers.com.br/t/erro-ao-executar-o-eventro-displayfields-nao-foi-implementado-para-o-fichario-461-na-versao-24000/1345](https://fluiggers.com.br/t/erro-ao-executar-o-eventro-displayfields-nao-foi-implementado-para-o-fichario-461-na-versao-24000/1345)
> **Categoria:** Formulários
> **Tags:** `form`, `bpm`
> **Criado em:** 25/09/2022, 23:35
> **Visualizações:** 503 | **Likes:** 0 | **Respostas:** 2

---

## Pergunta original

**andre luiz** (@andre_luiz) — 25/09/2022, 23:35

Boa noite galera! Sou novo quando o assunto é desenvolvimento de formulários no FLUIG e meu formulário está dando o seguinte erro do título. Tem algum erro no meu código?

function displayFields(form,customHTML){

```
var act = parseInt(getValue("WKNumState"));
var numProcesso = getValue("WKNumProces");

form.setValue("WKNumState", act);
form.setValue("WKDef", getValue("WKDef"));

form.setValue("formMode", form.getFormMode());
form.setValue("formMobile", form.getMobile());
var user = getValue('WKReplacement') != null ? getValue('WKReplacement') : getValue('WKUser');

if(form.getValue("WKNumProces") == ""){
	form.setValue("WKNumProces", numProcesso);
}

if(form.getFormMode() == "VIEW"){
	form.setShowDisabledFields(true);
}
form.setValue("WKUser", user);

form.setVisibleById("tab_aprovadores", false);
form.setVisibleById("tab_notificacao", false);

switch (act) {
	case 0:
	case SOLICITANTE__INFORMACOES:
	case SOLICITANTE__ANALISE_FISCAL:
		if(form.getValue("codFornecedor") == ""){
			form.setVisibleById("fs_Titulo", false);
		}

	break;

	case APROVACOES__GESTOR_DEMANDANTE:
    case APROVACOES__HEAD:
    case APROVACOES__DIRETOR:
    case APROVACOES__FINANCEIRO:
    	form.setValue("aprovador", getName(user));
        form.setVisibleById("tab_aprovadores", true);
    break;


    case APROVACOES__GESTOR_ORCAMENTO:
    	form.setValue("aprovador", getName(user));
        form.setVisibleById("tab_aprovadores", true);
        form.setValue("gestorOrcamentoMatr", user);
    	break;

    case SOLICITANTE__RETROCESSO_APROVACAO:
    	form.setVisibleById("tab_notificacao", true);
    	form.setVisibleById("tab_aprovadores", true);
    	form.setVisibleById("fs_aprovado", false);
    break;
    default:
    	form.setVisibleById("tab_aprovadores", true);
    	form.setVisibleById("fs_aprovado", false);
    	break;
}
```

}

function getName(matricula){
var filter = new java.util.HashMap();
filter.put(“colleaguePK.colleagueId”,matricula);
var retorno = getDatasetValues(“colleague”, filter);
return retorno.get(0).get(“colleagueName”);
}

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 26/09/2022, 10:30

O Log do Fluig indica alguma coisa? Melhor coisa é analisar o log pra ver. Pode ser coisa como variável não declarada, função que não existe, etc. Por isso analisar o log é o melhor caminho.

Até tentei olhar o código, mas ficou bagunçado.

---

## Resposta #2

**andre luiz** (@andre_luiz) — 26/09/2022, 10:34

Posso mandar o arquivo como um todo, ai você consegue ver melhor, oq acha? Mas de qualquer forma irei olhar o log!

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 26/09/2022, 11:30

Se colar o código aqui no fórum, usando a ferramenta de código (os fences), já facilita bastante, porque além de ficar na identação correta ainda faz o highlight bonitinho.

exemplo:

```javascript
function teste(itens) {
    if (!itens.length) {
        return false;
    }

    // executa a tratativa

    return true;
}
```

Mas no fim não tem muito como fugir. É melhor olhar o log pra tentar ter ideia do que pode ser e então procurar no código.

---

## Resposta #4

**andre luiz** (@andre_luiz) — 26/09/2022, 11:55

```javascript
function displayFields(form,customHTML){

	var act = parseInt(getValue("WKNumState"));
	var numProcesso = getValue("WKNumProces");

	form.setValue("WKNumState", act);
	form.setValue("WKDef", getValue("WKDef"));

	form.setValue("formMode", form.getFormMode());
	form.setValue("formMobile", form.getMobile());
	var user = getValue('WKReplacement') != null ? getValue('WKReplacement') : getValue('WKUser');

	if(form.getValue("WKNumProces") == ""){
		form.setValue("WKNumProces", numProcesso);
	}

	if(form.getFormMode() == "VIEW"){
		form.setShowDisabledFields(true);
	}
	form.setValue("WKUser", user);

	form.setVisibleById("tab_aprovadores", false);
	form.setVisibleById("tab_notificacao", false);

	switch (act) {
		case 0:
		case SOLICITANTE__INFORMACOES:
		case SOLICITANTE__ANALISE_FISCAL:
			if(form.getValue("codFornecedor") == ""){
				form.setVisibleById("fs_Titulo", false);
			}

		break;

		case APROVACOES__GESTOR_DEMANDANTE:
	    case APROVACOES__HEAD:
	    case APROVACOES__DIRETOR:
	    case APROVACOES__FINANCEIRO:
	    	form.setValue("aprovador", getName(user));
	        form.setVisibleById("tab_aprovadores", true);
	    break;


	    case APROVACOES__GESTOR_ORCAMENTO:
	    	form.setValue("aprovador", getName(user));
	        form.setVisibleById("tab_aprovadores", true);
	        form.setValue("gestorOrcamentoMatr", user);
	    	break;

	    case SOLICITANTE__RETROCESSO_APROVACAO:
	    	form.setVisibleById("tab_notificacao", true);
	    	form.setVisibleById("tab_aprovadores", true);
	    	form.setVisibleById("fs_aprovado", false);
	    break;
	    default:
	    	form.setVisibleById("tab_aprovadores", true);
	    	form.setVisibleById("fs_aprovado", false);
	    	break;
	}
}

function getName(matricula){
	var filter = new java.util.HashMap();
	filter.put("colleaguePK.colleagueId",matricula);
	var retorno = getDatasetValues("colleague", filter);
	return retorno.get(0).get("colleagueName");
}
```

---
