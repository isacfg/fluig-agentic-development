# Request a API fluig

> **Fonte:** [https://fluiggers.com.br/t/request-a-api-fluig/1184](https://fluiggers.com.br/t/request-a-api-fluig/1184)
> **Categoria:** API`s Fluig
> **Criado em:** 12/07/2022, 22:31
> **Visualizações:** 921 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**Emmanoel Silva** (@manelzada) — 12/07/2022, 22:31

Salve Fluiggers, espero que estejam tendo um ótimo dia.

Alguém já consumiu alguma API Fluig com oAuth 1.0? Estou com dificuldade na hora de gerar o oauth\_signature. Fiz uma consulta pelo Postman e na url percebi que esse “token” é unico a cada request, assim como o timestamp, quem puder me ajudar, agradeço.

---

## Resposta #1

**Daniel Sales** (@Daniel_Sales) — 14/07/2022, 11:46

Consumir a api do fluig por outro sistema? ou pelo próprio fluig?
So for externo tenho um exemplo em node js de consumo.

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/daniel_sales/48/22_2.png) [Conversor de vídeo automático](https://fluiggers.com.br/t/conversor-de-video-automatico/47) [ECM / GED](https://fluiggers.com.br/c/ecm-ged/6)
>
> > Utilizando o handbreakcli e um script node.js converta todos os vídeos enviados para a plataforma de forma automatica. Para isto crie um arquivo script.js cole o código abaixo nele e execute. Ele vai chamar o handbrek\_cli command line e pronto; Lembre-se de trocar as chaves de oauth no script. const express = require('express'); const app = express(); const bodyParser = require('body-parser'); const port = 2221; //porta padrão const fs = require('fs'); //configurando o body parser para pega…

Talvez te de um norte.

---

## Resposta #2

**Emmanoel Silva** (@manelzada) — 14/07/2022, 13:16

Quero em node mesmo, fiz aqui, mas estou com um erro na hora de completar o request, está me retornando erro 500

---

## Resposta #3

**Daniel Sales** (@Daniel_Sales) — 15/07/2022, 15:21

Chegou a ver o fonte que postei?
e um ws rest que consome dados do fluig.

---
