# Gerar PDF de relatório em JOB

> **Fonte:** [https://fluiggers.com.br/t/gerar-pdf-de-relatorio-em-job/409](https://fluiggers.com.br/t/gerar-pdf-de-relatorio-em-job/409)
> **Categoria:** Sem categoria
> **Tags:** `form`
> **Criado em:** 30/04/2021, 11:24
> **Visualizações:** 773 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Dener_Lemos** (@Dener_Lemos) — 30/04/2021, 11:24

Preciso gerar um arquivo PDF do meu relatório HTML em JOB, onde deverão ser impressos ‘n’ relatórios conforme seleção do usuário. Como eu poderia estar gerando estes relatórios em JOB sem utilizar bibliotecas pagas? Caso não exista outra maneira, quais são as bibliotecas pagas que poderiam atender essa necessidade?

---

## Resposta #1

**Willian Laynes** (@Willian_Laynes) — 30/04/2021, 16:32

Nunca cheguei a desenvolver, mas uma saída é você criar uma API em Java(Maven) aonde poderá utilizar qualquer biblioteca Java no backend só precisa declarar no pom.xml, exportar como componente do Fluig e executar pelos endpoints.

Segue link de um exemplo de uma API Rest customizada da totvs.

[https://git.fluig.com/projects/SAMPLES/repos/widgets/browse/rest-oauth](https://git.fluig.com/projects/SAMPLES/repos/widgets/browse/rest-oauth)

---
