# Criar processo a partir de widget

> **Fonte:** [https://fluiggers.com.br/t/criar-processo-a-partir-de-widget/2766](https://fluiggers.com.br/t/criar-processo-a-partir-de-widget/2766)
> **Categoria:** Widgets
> **Criado em:** 29/04/2024, 15:08
> **Visualizações:** 144 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**Henrique Cabral** (@HenriqueCabral) — 29/04/2024, 15:08

Boa tarde pessoal! Vocês poderiam me ajudar a criar um processo a partir de um widget? Eu tenho alguns valores no select de centro de custo que puxam tabelas dinâmicas, mostrando os usuários de cada setor por linha. Em cada linha dessas tem um botão “Iniciar avaliação”, pois é uma widget que puxará um processo de avaliação de desempenho. Queria verificar com vocês se seria possivel iniciar um processo já configurado com base nessa widget a partir do clique no botão, e como eu poderia fazer isso?

---

## Resposta #1

**Isaac Figueiredo** (@kngrev) — 30/04/2024, 09:40

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/henriquecabral/48/1318_2.png) HenriqueCabral:
>
> > ia possivel iniciar um processo já configurado com ba

Bom dia, Henrique

Você pode usar esse endpoint para iniciar uma solicitação através de um widget e passar os valores dos campos

[https://api.fluig.com/latest/process-management/swagger-ui/#/Processes/start](https://api.fluig.com/latest/process-management/swagger-ui/#/Processes/start)

---

## Resposta #2

**Henrique Cabral** (@HenriqueCabral) — 30/04/2024, 15:33

Boa tarde!! Perfeito! Vou dar uma olhada aqui, obrigado!!

Queria ver com você se teria algum exemplo que poderia me passar para eu entender como funciona a utilização desse endpoint. Vai ser a primeira vez que vou fazer essa aplicação de API no fluig então estou meio perdido.

---
