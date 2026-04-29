# oAuth 2.0 no fluig

> **Fonte:** [https://fluiggers.com.br/t/oauth-2-0-no-fluig/3304](https://fluiggers.com.br/t/oauth-2-0-no-fluig/3304)
> **Categoria:** API`s Fluig
> **Tags:** `dataset`, `fluigapi`
> **Criado em:** 11/06/2025, 17:50
> **Visualizações:** 111 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Caio Racy** (@Caio_Racy) — 11/06/2025, 17:50

Olá pessoal estou, tava sumido por aqui, fazendo novos fluxo e tudo mais e tenho uma aplicação interna nossa que está mudando a autenticação usando o Entra ID da microsoft que utiliza o oAuth 2.0. Até ai vi que na criação do serviço o fluig tem suporte a oAuth 2.0, fui tentar usar e lá vamos nós para ver se alguém me ajuda.

Na configuração que a Microsoft da ela tem a URL de Access Token, o Client ID e o Client Secret até ai OK, só que não vi a informação que preciso mandar do Scope. Até tentei gerar um AccessToken pelo postman e colocar la no serviço pra ver se ele se virava… porém nada

estou tomando isso (estava tomando a mesma coisa no postman porém quando ajustei o Scope melhorou)

> HttpResponseProxy{HTTP/1.1 404 Not Found \[Cache-Control: private, Set-Cookie: x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly, Strict-Transport-Security: max-age=31536000; includeSubDomains, X-Content-Type-Options: nosniff, P3P: CP=“DSP CUR OTPi IND OTRi ONL FIN”, x-ms-request-id: 24b0824e-ef0a-43c3-bc5f-f0d1a95a0f00, x-ms-ests-server: 2.1.20899.4 - NCUS ProdSlices, x-ms-srs: 1.P, Content-Security-Policy-Report-Only: object-src ‘none’; base-uri ‘self’; script-src ‘self’ ‘nonce-HQt3fD58HetCkzSZdC11zQ’ ‘unsafe-inline’ ‘unsafe-eval’ https://*.msauth.net https://*.msftauth.net https://*.msftauthimages.net https://*.msauthimages.net https://*.msidentity.com https://*.microsoftonline-p.com https://*.microsoftazuread-sso.com https://*.azureedge.net https://*.outlook.com https://*.office.com https://*.office365.com https://*.microsoft.com https://\*.bing.com ‘report-sample’; report-uri [https://csp.microsoft.com/report/ESTS-UX-All](https://csp.microsoft.com/report/ESTS-UX-All), X-XSS-Protection: 0, Date: Wed, 11 Jun 2025 20:40:06 GMT, Content-Length: 0\] \[Content-Length: 0,Chunked: false\]}

Estou fazendo mais alguns testes mas só para contextualizar, essa aplicação interna também autentica via oAuth 2.0 da Microsoft e eu preciso acessar ela para fazer uns downloads especificos, então a idea é ter um serviço só para autenticar nessa EntraID e usar os tokens gerados via código e conseguir requisitar nessa minha API ja conectado mandando o token correto.

Ai não sei se é preferível usar um dataset para isso, e ter um form generico para armazenar as informações de token e tal, ou se eu estou fazendo algo errado no cadastro do serviço mesmo.

---
