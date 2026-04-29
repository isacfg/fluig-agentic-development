# Erro solcitaçao de Compra - integração Fluig X rm

> **Fonte:** [https://fluiggers.com.br/t/erro-solcitacao-de-compra-integracao-fluig-x-rm/2915](https://fluiggers.com.br/t/erro-solcitacao-de-compra-integracao-fluig-x-rm/2915)
> **Categoria:** BPM
> **Criado em:** 05/08/2024, 16:26
> **Visualizações:** 38 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**F7lu!g@2838sd** (@Daia) — 05/08/2024, 16:26

Olá pessoal. Segue erro ao tentar gerar um OC no RM que integra com o workflow doo Fluig. ALguém já viu isso?
![image](https://fluiggers.com.br/uploads/default/original/2X/b/b59e7cfa16e514580bc1a5232e0702f77e9bc36d.png)

---

## Resposta #1

**Pablo Valle** (@pablooav) — 20/08/2024, 12:37

Vamos lá, essa mensagem de erro “Could not send Message” costuma ser timeout, mas pra identificar o que causou isso tem que analisar todo código como um todo, é algo bem genérico.

No print de erro, ele cita que o erro aconteceu no script beforeStateEntry o que já é um ótimo lugar pra começarmos a debuggar, de uma conferida no que este script de workflow está fazendo, confira a linha 120 a qual reportou o erro que lá você conseguirá mais detalhes do que pode estar ocorrendo.

Qualquer coisa se ficar sem ideia do que pode ser mesmo após essa análise, envia pra gente aqui o código que ajudo a dar uma olhada

---
