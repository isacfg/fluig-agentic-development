# Erro ao consumir API com fluig

> **Fonte:** [https://fluiggers.com.br/t/erro-ao-consumir-api-com-fluig/2367](https://fluiggers.com.br/t/erro-ao-consumir-api-com-fluig/2367)
> **Categoria:** API`s Fluig
> **Criado em:** 22/11/2023, 21:18
> **Visualizações:** 737 | **Likes:** 2 | **Respostas:** 1

---

## Pergunta original

**Mauricio Freitas** (@mauriciolanner) — 22/11/2023, 21:18

Boa noite pessoal, estou tentando consumir uma API REST no fluig e só retorna
**InternalError: Java class “\[Ljava.lang.reflect.Constructor;” has no public instance field or method named “toJSON”. (beforeTaskSave#96)**

esse é meu codigo

```auto
function carimbar(docid, docversion, docdesc) {

    var arquivoBase64 = null;
    try {
        log.warn("##[TOVTS BAHIA - getBase64Document]##");
        var ECMDocumentServiceProvider = ServiceManager.getServiceInstance("ECMDocumentService");
        var ECMDocumentServiceLocator = ECMDocumentServiceProvider.instantiate("com.totvs.technology.ecm.dm.ws.ECMDocumentServiceService");
        var documentService = ECMDocumentServiceLocator.getDocumentServicePort();
        //docid = new java.lang.Integer(docid);

        var documentByteArray = documentService.getDocumentContent(
            "fluig",
            "***",
            1,
            docid,
            getValue("WKUser"),
            docversion,
            docdesc
        );

        arquivoBase64 = java.util.Base64.getEncoder().encodeToString(documentByteArray);

    } catch (error) {
        throw error;
    }

    log.warn("##[TOVTS BAHIA - teste API consumo - ENTROU NA FUNCAO DE CARIMBAR]##");

    try {
        log.warn("##[TOVTS BAHIA - teste API consumo - ENTROU NO TRY]##");
        var clientService = fluigAPI.getAuthorizeClientService();
        var data = {
            companyId: getValue("WKCompany") + '',
            serviceCode: 'easydocmd',
            endpoint: 'api/uploads/bytes',
            method: 'post',
            options: {
                mediaType: "application/json",
            },
            params: {
                bytes: arquivoBase64
            }
        }

        var vo = clientService.invoke(JSON.stringify(data));
        log.warn("##[TOVTS BAHIA - teste API consumo - clientService.invoke]##");
        log.dir(vo);

        log.warn("##[TOVTS BAHIA - teste API consumo - ATÉ AQUI TUDO CERTO]##");
        log.warn(vo.getResult());
        var json = JSON.parse(vo.getResult());
        log.warn("##[TOVTS BAHIA - teste API consumo - OBJETO RETORNO]##");
        log.info(json);

        throw json;

        // if (vo.getResult() == null || vo.getResult().isEmpty()) {
        //     log.warn("##[TOVTS BAHIA - RETORNO VAZIO]##");
        // } else {
        //     var json = JSON.parse(vo.getResult());
        //     log.info("##[TOVTS BAHIA - teste API consumo RETORNO EM ARRAY]## --- " + json.length.items);
        //     for (var i = 0; i < json.length.items; i++) {
        //         log.info("##[TOVTS BAHIA - teste API consumo - " + getValue("WKUser") + "]##");
        //     }
        // }
    } catch (err) {
        log.warn("##[TOVTS BAHIA - ERRO NO RETORNO]##");
        log.warn(err);
        throw err;
    }
}
```

---

## Resposta #1

**Guilherme Mesquita Rocha** (@gmesquita) — 23/11/2023, 15:45 | ❤️ 1

Boa tarde Mauricio!

Acredito que o problema seja a utilização do `JSON.stringify` no back-end do Fluig, nestes casos, gosto de fazer do seguinte jeito:
Declare a seguinte variável antes do seu `try`:
`var gson = new com.google.gson.Gson();`

Agora substitua o `JSON.stringify(data)` por `gson.toJson(data)`.

Acredito que isso resolva o problema!

---

## Resposta #2 ✅ RESPOSTA ACEITA

**Everton Alves** (@everton) — 24/11/2023, 10:23 | ❤️ 1

Olá!

Troque as chamadas de JSON.stringify() por JSONUtil.toJSON().
Isso deve resolver o problema.

---

## Resposta #3

**Mauricio Freitas** (@mauriciolanner) — 25/11/2023, 14:34

Funcionou, obrigado.

---
