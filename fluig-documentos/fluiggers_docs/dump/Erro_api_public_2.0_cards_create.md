# Erro /api/public/2.0/cards/create

> **Fonte:** [https://fluiggers.com.br/t/erro-api-public-2-0-cards-create/2338](https://fluiggers.com.br/t/erro-api-public-2-0-cards-create/2338)
> **Categoria:** API`s Fluig
> **Criado em:** 01/11/2023, 16:55
> **Visualizações:** 372 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Guilherme Carvalho** (@guiza1carvalho) — 01/11/2023, 16:55

Galera sou novo no Fluig e estou tentando consumir minha primeira API, estou usando a “/api/public/2.0/cards/create/” e estou tentando da seguinte maneira no evento “afterStateLeave” porém está com erro alguém pode me ajudar? Segue abaixo erro e código:

2023-11-01 16:24:08,730 INFO \[com.datasul.technology.webdesk.customization.ScriptingLog\] (pool-1691-thread-1) ##ERROR\## - Process AGR001 - ##ERROR##

2023-11-01 16:24:08,730 ERROR \[com.datasul.technology.webdesk.customization.ScriptingLog\] (pool-1691-thread-1) InternalError: Java class “\[Ljava.lang.reflect.Constructor;” has no public instance field or method named “toJSON”. (#388)

```
try {

              var clientService = fluigAPI.getAuthorizeClientService();
              var farmData = {
                companyId : getValue("WKCompany") + "",
                serviceCode : "FluigInternalAPI",
                endpoint : "/api/public/2.0/cards/create/",
                method : "POST",
                timeoutService : "100",
                params : {
                  documentDescription: cardData.get("farmName") + " - " + cardData.get("prodName") + " - " + cardData.get("farmCity") + " - " + cardData.get("farmState"),
                  version: 1000,
                  parentDocumentId: 47887,
                  inheritSecurity: true,
                  formData: [
                    {
                      name: "farmName", value: cardData.get("farmName")
                    },
                    {
                      name: "farmCity", value: cardData.get("farmCity")
                    },
                    {
                      name: "prodName", value: cardData.get("prodName")
                    },
                    {
                      name: "farmState", value: cardData.get("farmState")
                    }
                  ]
                },
                options: {
                  encoding: "UTF-8",
                  mediaType: "application/json",
                  useSSL: true
                },
                headers: {
                  ContentType: "application/json;charset=UTF-8"
                }
              }
              var farmVo = clientService.invoke(JSON.stringify(farmData));

              if (farmVo.getResult() == null || farmVo.getResult().isEmpty()) {

                log.info("##EMPTY## - Process AGR001 - ##EMPTY##");

              } else {

                log.info("##SUCCESS## - Process AGR001 - ##SUCCESS##");
                log.info(farmVo.getResult());

              }

            } catch(error) {

              log.info("##ERROR## - Process AGR001 - ##ERROR##");
              log.error(error);

              throw error;

            }
```

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Guilherme Carvalho** (@guiza1carvalho) — 01/11/2023, 21:07

Recebi uma ajuda em um grupo e a solução é que tiver que colocar todos cardData.get dentro de “String()”. Com isso funcionou certinho!

---

## Resposta #2

**Matheus Loreto** (@matheusl) — 16/11/2023, 17:04

Outra alternativa seria usar “hAPI.getCardValue(“nomedocampo”)” para retornar o valor do campo nos eventos.

---
