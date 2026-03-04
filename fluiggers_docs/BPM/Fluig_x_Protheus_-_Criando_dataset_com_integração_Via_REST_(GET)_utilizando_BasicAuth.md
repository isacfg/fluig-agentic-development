# Fluig x Protheus - Criando dataset com integração Via REST (GET) utilizando BasicAuth

> **Fonte:** [https://fluiggers.com.br/t/fluig-x-protheus-criando-dataset-com-integracao-via-rest-get-utilizando-basicauth/146](https://fluiggers.com.br/t/fluig-x-protheus-criando-dataset-com-integracao-via-rest-get-utilizando-basicauth/146)
> **Categoria:** BPM
> **Criado em:** 17/03/2021, 09:21
> **Visualizações:** 1605 | **Likes:** 8 | **Respostas:** 1

---

## Pergunta original

**Julio Vitor Vaz da Rocha** (@JulioRocha) — 17/03/2021, 09:21 | ❤️ 4

```javascript
function createDataset(fields, constraints, sortFields) {
        log.info("################# INICIO INTEGRACAO DATASET #################");
        var dataset = DatasetBuilder.newDataset();


        var clientService = fluigAPI.getAuthorizeClientService();

        var data = {
            companyId: getValue("WKCompany") + '',
            serviceCode: "{NOME DO SERVICO}",
            endpoint: "/{NOME DO SERVICO}?{PAMAMETRO}={CÓDIGO}",
            method: "GET",
            timeoutService: "300"
        }

        var vo = clientService.invoke(JSON.stringify(data));

        if (vo.getResult().search("HttpHostConnectException") != -1) {
            log.info("################# Não foi possível estabelecer conexao com o servidor rest #################");
            dataset.addRow("Não foi possível estabelecer conexao com o servidor rest");

        }
        else {
            if (vo.getResult() == null || vo.getResult().isEmpty()) {
                throw new Exception("Retorno está vazio");
            }
            else {

                txt = new Array(vo.getResult());

                var json = JSON.parse(txt);

                if (json.Erro == "Nota nao encontrada") {
                    dataset.addColumn('Erro');
                    dataset.addRow(new Array(vo.getResult()));
                }
                else {
                    dataset.addColumn('{NOME COLUNA}');
                                    [...]

                    log.info(json.{NOME COLUNA});
                    [...]
                    dataset.addRow([json.{NOME COLUNA}, [...] ]);
                }
            }

            return dataset;
        }

    }
```

---

## Resposta #1

**Igor Rodrigues** (@fluigor.com.br) — 17/03/2021, 17:54 | ❤️ 1

TOPPPPPPPPPP JULIO!!! :+1: :+1: :+1: :+1: :blue_heart:

---

## Resposta #2

**Julio Vitor Vaz da Rocha** (@JulioRocha) — 17/03/2021, 17:56 | ❤️ 3

Acredito que seja algo simples, mas me ajudou bastante kkkk

Além disso, quando eu fui fazer, tive um pouco de dificuldades… Espero que ajude!

---

## Resposta #3

**Matheus Mósso** (@msmosso) — 30/07/2022, 16:43

Aproveitando a thread, alguém já fez essa mesma integração, mas com uma url que retorne um csv? A dificuldade está sendo fazer o parse do csv para retornar as linhas corretamente.

Com JSON é feito usando JSON.parse(), mas no meu caso o retorno é em csv.

---
