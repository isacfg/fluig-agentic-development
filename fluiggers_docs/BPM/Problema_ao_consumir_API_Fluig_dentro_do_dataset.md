# Problema ao consumir API Fluig dentro do dataset

> **Fonte:** [https://fluiggers.com.br/t/problema-ao-consumir-api-fluig-dentro-do-dataset/740](https://fluiggers.com.br/t/problema-ao-consumir-api-fluig-dentro-do-dataset/740)
> **Categoria:** BPM
> **Criado em:** 26/10/2021, 15:53
> **Visualizações:** 1399 | **Likes:** 2 | **Respostas:** 2

---

## Pergunta original

**Mauricio Freitas** (@mauriciolanner) — 26/10/2021, 15:53

Boa tarde pessoal, estou tendo dificuldade em consumir uma API Fluig dentro de um dataset, sim, preciso mesmo fazer um insert em um dataset, usando a execução de outro dataset. Tentei usar o Ajax, mas o consumo interno não aceita Ajax, é obvio, então tentei consumir da seguinte forma:

```auto
try {
                var clientService = fluigAPI.getAuthorizeClientService();
                var data = {
                    endpoint: '/api/public/2.0/cards/create',
                    method: 'post',// 'delete', 'patch', 'put', 'get'
                    timeoutService: '100', // segundos
                    params: {
                        documentDescription: "Notificação de férias 60 dias " + nomeFunc,
                        version: 1000,
                        parentDocumentId: 11670,
                        inheritSecurity: false,
                        formData: [
                            {
                                name: "funcionario",
                                value: nomeFunc + ' - ' + funcaoFunc
                            },
                            {
                                name: "dataFerias",
                                value: dataFerias
                            },
                            {
                                name: "dataNotificacao",
                                value: dataFinal
                            },
                            {
                                name: "gestorNotificado",
                                value: eMailGestor
                            },
                            {
                                name: "aprovado",
                                value: ''
                            },
                            {
                                name: "dataAprovacao",
                                value: ''
                            }
                        ]
                    },
                    options: {
                        encoding: 'UTF-8',
                        mediaType: 'application/json',
                        useSSL: true
                    },
                    headers: {
                        ContentType: 'application/json;charset=UTF-8'
                    }
                }

                var vo = clientService.invoke(JSON.stringify(data));

                if (vo.getResult() == null || vo.getResult().isEmpty()) {
                    throw new Exception("Retorno está vazio");
                } else {
                    log.info(vo.getResult());
                }
            } catch (err) {
                throw new Exception(err);
            }
```

Mas não roda, pelo que estou vendo na documentação pode estar faltando o serviceCode, mas que lógica teria eu me autenticar no fluig dentro do próprio fluig? Alguem consegue me dar uma luz aí?
Link da documentação: [https://tdn.totvs.com/pages/releaseview.action?pageId=239041233](https://tdn.totvs.com/pages/releaseview.action?pageId=239041233)

---

## Resposta #1

**Willian Laynes** (@Willian_Laynes) — 26/10/2021, 17:00 | ❤️ 1

Você mesmo se respondeu, tem que criar no Fluig mesmo, cria o serviço do tipo REST e seleciona autenticação do tipo FLUIG\_API.
Depois adiciona o código na sua chamada com o parâmetro “serviceCode”.

Eles até tem essa autenticação própria pra esses casos.

![image](https://fluiggers.com.br/uploads/default/original/1X/3a34e793ba92a089523af91eba93c9ef4a391164.png)

---

## Resposta #2

**Mauricio Freitas** (@mauriciolanner) — 26/10/2021, 18:35 | ❤️ 1

Valeu [@Willian\_Laynes](/u/willian_laynes) vou testar amanhã e dou um retorno aqui

---

## Resposta #3

**Samuel ** (@SamuelBruing) — 09/11/2021, 15:07

Opa, Mauricio! Conseguiu resolver? Estou com o mesmo problema

---

## Resposta #4

**Mauricio Freitas** (@mauriciolanner) — 19/11/2021, 08:29

Não consegui, eu criei um dataset que consulta por sql as informações que eu preciso e eresolveu o problema

---
