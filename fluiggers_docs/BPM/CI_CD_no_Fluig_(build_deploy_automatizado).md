# CI/CD no Fluig (build/deploy automatizado)

> **Fonte:** [https://fluiggers.com.br/t/ci-cd-no-fluig-build-deploy-automatizado/1903](https://fluiggers.com.br/t/ci-cd-no-fluig-build-deploy-automatizado/1903)
> **Categoria:** BPM
> **Criado em:** 04/05/2023, 16:54
> **Visualizações:** 499 | **Likes:** 5 | **Respostas:** 1

---

## Pergunta original

**Daniel Cabral Santos** (@daniel.cabral) — 04/05/2023, 16:54 | ❤️ 2

Galera, ainda é um sonho muito distante fazer CI/CD com Fluig? A única forma de fazer deploy é via eclipse (salvo datasets com uma extensão da comunidade pro VSCode), gera muito trabalho manual fora a chance de erros e falhas…

Alguém já conseguiu automatizar alguma etapa do deploy de artefatos pro Fluig a ponto de ter de fato uma esteira de CI/CD?

Valeeeeu!

---

## Resposta #1

**Daniel Sales** (@Daniel_Sales) — 05/05/2023, 09:37 | ❤️ 2

Quando eu crio minha widget se mpassar pela gerencia do fluig eu subo direto no no painel de controle do fluig e compilo via maven.
Isto pode te dar um norte

---

## Resposta #2

**Daniel Cabral Santos** (@daniel.cabral) — 09/05/2023, 14:11

Queria deploy de formulários, datasets e diagramas na mesma esteira - não vejo outra forma ainda senão fazer engenharia reversa no eclipse, ou monitorar o tráfego do eclipse para o servidor fluig, ou alguma outra forma de rastrear toda a comunicação. Jeito tem, mas se o fornecedor nos oferecesse algo, como em sistemas recentes…seria ótimo. Mas valeu a dica, já é um norte pra começar!

---

## Resposta #3

**Daniel Sales** (@Daniel_Sales) — 09/05/2023, 14:58

Você quer subir tudo de uma vez?
Se for acho que rola sim.

---

## Resposta #4

**Daniel Sales** (@Daniel_Sales) — 09/05/2023, 16:13

Carrega o eclipse com o parametro -debug que ele loga tudo que ele ta rodando por traz.

![image](https://fluiggers.com.br/uploads/default/original/1X/0dc02ada7bd1fd7bea10ef672aa6f61d17f8620c.png)

---

## Resposta #5

**Bruno Gasparetto** (@Bruno_Gasparetto) — 10/05/2023, 00:34 | ❤️ 1

Acho muito difícil a TOTVS investir nessa ideia de facilitar deploy, já que o Fluig é anunciado como uma ferramenta low-code (e até no-code).

Em alguns meet-ups vi os dev da TOTVS fazendo deploy de widget simplesmente compilando com o Maven e então jogando na pasta de apps do Fluig. Então dá pra tentar fazer algum script pra fazer isso diretamente. Ou compilar e então enviar por WS.

Mas no geral o que percebi é que todo o deploy é feito por WS, só precisa estudar/descobrir quais são.

Pelo que olhei rapidamente dá pra compactar os formulários num zip e enviar por WS, mas precisa preencher alguns parâmetros pra indicar o nome, dataset, se tem nova versão. Eu até tinha começado a estudar pra tentar implementar na extensão do VSCode, mas o tempo ficou escasso, aí dei uma pausa.

---
