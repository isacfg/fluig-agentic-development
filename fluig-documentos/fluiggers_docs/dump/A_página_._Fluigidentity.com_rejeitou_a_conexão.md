# A página *****. Fluigidentity.com rejeitou a conexão

> **Fonte:** [https://fluiggers.com.br/t/a-pagina-fluigidentity-com-rejeitou-a-conexao/706](https://fluiggers.com.br/t/a-pagina-fluigidentity-com-rejeitou-a-conexao/706)
> **Categoria:** Sem categoria
> **Criado em:** 05/10/2021, 08:18
> **Visualizações:** 700 | **Likes:** 0 | **Respostas:** 5

---

## Pergunta original

**Ulises Magario** (@Agustin_Welschen) — 05/10/2021, 08:18

Olá boa tarde, estou com um problema, quero apresentar um \_dashboard do Analytics no widget do fluig e de vez em quando ele fica mal configurado. Que pode ser?

---

## Resposta #1

**Mauricio Freitas** (@mauriciolanner) — 05/10/2021, 14:28

Tem que dar mais detalhes, assim não consigo entender o que exatamente você quer

---

## Resposta #2

**Ulises Magario** (@Agustin_Welschen) — 06/10/2021, 08:31

![image](https://fluiggers.com.br/uploads/default/optimized/1X/c2d3eab7f6679e2c5c6302802cf5751ddc42d765_2_690x387.png)

Me perdoe Mauricio e obrigado por responder. Em um widget do \_Analytics dentro da home do fluig, coloquei o código de identidade e o link gráfico que funciona bem. Agora quando entro de outra conta dentro do fluig ou anônima isso aparece para mim. Nas configurações do \_dashboard, eles são como o que aconteceu abaixo

![image](https://fluiggers.com.br/uploads/default/optimized/1X/ba001c4bcd425884187e29e5903bf839a09d1a37_2_690x387.png)

---

## Resposta #3

**Mauricio Freitas** (@mauriciolanner) — 06/10/2021, 08:51

Desculpa amigo, não faço a mínima ideia do que pode estar havendo, mas creio que seja algo com a autenticação, meio obvio isso, porém não sei onde configurar. Desculpa não poder ajudar.

---

## Resposta #4

**Ulises Magario** (@Agustin_Welschen) — 07/10/2021, 08:09

Nenhum problema. Obrigado pelo seu tempo

---

## Resposta #5

**Daniel Cabral Santos** (@daniel.cabral) — 11/10/2021, 10:13

Bom dia!

Pode provocar o erro novamente, com o Chrome Dev Tools aberto na aba “Rede” para que possamos ver a requisição? Desconfio que seja problema de CORS, mas não tenho certeza.

---

## Resposta #6

**Ulises Magario** (@Agustin_Welschen) — 12/10/2021, 08:43

Olá, bom dia, não entendo o que está perguntando mas acho que se refere a isso. Obrigado

![image](https://fluiggers.com.br/uploads/default/optimized/1X/3c03a92b3350f15b39724ca3254e806afcdb0612_2_690x388.png)

---

## Resposta #7

**Daniel Cabral Santos** (@daniel.cabral) — 05/11/2021, 14:19

Como você está rodando a página do identity dentro de um iFrame, terá problemas de CORS. Essa documentação da TOTVS trata sobre isso:

[https://tdn.totvs.com/pages/releaseview.action?pageId=372552180](https://tdn.totvs.com/pages/releaseview.action?pageId=372552180)

…e no cabeçalho da requisição da página que está no Fluig, deve haver um meio de enviar este header: XFrameOptions = ALLOW-FROM … (página de origem, seu fluig)

![image](https://fluiggers.com.br/uploads/default/optimized/1X/b895a31ce417dc1ea0ff123f5a89f7df841184d9_2_690x144.png)

---
