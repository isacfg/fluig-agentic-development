# API remover user de um grupo

> **Fonte:** [https://fluiggers.com.br/t/api-remover-user-de-um-grupo/1898](https://fluiggers.com.br/t/api-remover-user-de-um-grupo/1898)
> **Categoria:** API`s Fluig
> **Criado em:** 03/05/2023, 12:10
> **Visualizações:** 402 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Gabriel Pereira** (@gabriel.pereira) — 03/05/2023, 12:10

Boa tarde!
O Fluig tem alguma API pra remover usuário de um determinado grupo?

---

## Resposta #1

**Luis Gustavo Barbosa de Oliveira** (@gu00col) — 02/02/2024, 11:37

Tambem gostaria de saber pois não faz sentido ter um add usuario e não um remove

---

## Resposta #2

**Matheus Loreto** (@matheusl) — 06/02/2024, 10:43 | ❤️ 1

Também precisei deste recurso, e encontrei apenas via webservice. Pela API acredito que ainda não tenha.

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 07/02/2024, 00:02

Pelo SOAP tem os métodos `createColleagueGroup` e `deleteColleagueGroup` do [ECMColleagueGroupService](https://tdn.totvs.com/pages/releaseview.action?pageId=662867789#Documenta%C3%A7%C3%A3odosWebServices-ECMColleagueGroupService)

Pelo SDK até é possível criar um usuário já indicando o grupo e papel, porém pra adicionar o grupo após usuário criado é mais complicado (precisa ser serviço diferente) e não tem serviço pra remover grupo. Segue um exemplo de como fiz pra adicionar grupos usando o SDK [Fluig: exemplo de como copiar os grupos de um usuário para outro · GitHub](https://gist.github.com/brunogasparetto/9565fb49101a1b33cb3106e9e665bb10)

Pra tratar papeis é ainda pior. Estou à procura de alguma forma conseguir inserir/remover papeis (role) em um usuário já existente de uma maneira mais simples igual a essa do grupo.

Pra papel só achei o método `updateColleaguewithDependencies` da [ECMColleagueService](https://tdn.totvs.com/pages/releaseview.action?pageId=662867789#Documenta%C3%A7%C3%A3odosWebServices-ECMColleagueService) . É chato por ser uma atualização completa, mas ao menos é possível mexer nos papeis.

---
