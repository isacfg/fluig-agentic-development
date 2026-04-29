# Erro em um método de ECMColleagueService

> **Fonte:** [https://fluiggers.com.br/t/erro-em-um-metodo-de-ecmcolleagueservice/3203](https://fluiggers.com.br/t/erro-em-um-metodo-de-ecmcolleagueservice/3203)
> **Categoria:** Sem categoria
> **Tags:** `dataset`, `fluigapi`
> **Criado em:** 19/03/2025, 08:24
> **Visualizações:** 35 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Luiz Eduardo Brito Gomes** (@luiz.eduardo) — 19/03/2025, 08:24

Estou tentando arrumar um dataset que foi criado com o intuito de criar usuários no Fluig (com classes e papéis) usando as classes do serviço ECMColleagueService.

```auto
var requestProvider = ServiceManager.getServiceInstance("ECMColleagueService");
	var serviceHelper = requestProvider.getBean();
	var requestServiceLocator = requestProvider.instantiate("com.totvs.technology.ecm.foundation.ws.ECMColleagueServiceService");
        var requestService = requestServiceLocator.getColleagueServicePort();
//ORGANIZO E FORMATO AS INFORMAÇÕES DO USUÁRIO
        var criarUsuarioWS = requestService.createColleaguewithDependencies(usuario,senha,codigoEmpresa,colleagueDtoArray,groupDtoArray,roleDtoArray);
        dataset.addRow(new Array(criarUsuarioWS));
        return dataset
```

o log acusa este erro(175= linha da var criarUsuarioWS):

```auto
RuntimeException invoking https://URLFLUIG/webdesk/ECMColleagueService: HostnameVerifier, socket reset for TTL (Model#175) in Model at line number 175
```

Não encontrei uma maneira de contornar essa situação. Vocês conhecem?

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Luiz Eduardo Brito Gomes** (@luiz.eduardo) — 19/03/2025, 14:31

Encontrei o erro, era necessário declarar o endpoint no contexto da requisição e adiciona-lo antes da chamada do método

```auto
var requestContext = requestService.getRequestContext();
	requestContext.put(javax.xml.ws.BindingProvider.ENDPOINT_ADDRESS_PROPERTY, "http://URLFLUIG/webdesk/ECMColleagueService");
```

---
