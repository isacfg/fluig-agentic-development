# Qual a preferencia de serviço da comunidade?

> **Fonte:** [https://fluiggers.com.br/t/qual-a-preferencia-de-servico-da-comunidade/2765](https://fluiggers.com.br/t/qual-a-preferencia-de-servico-da-comunidade/2765)
> **Categoria:** API`s Fluig
> **Tags:** `dataset`, `webservice`
> **Criado em:** 29/04/2024, 14:33
> **Visualizações:** 122 | **Likes:** 5 | **Respostas:** 0

---

## Pergunta original

**Gabriel Douglas Fernandes Barbosa** (@GabrielDouglas) — 29/04/2024, 14:33

Pessoal, qual o serviço mais usado por aqui? REST, SOAP ou JDBC?

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Daniel Cabral Santos** (@daniel.cabral) — 03/05/2024, 10:20 | ❤️ 1

Se estivermos falando dos serviços do Fluig, na minha opinião, REST é o preferencial.

Mas há casos em que fica mais convieniente/viável usar o SOAP.

Depende de cada caso. JDBC por exemplo quando não temos APIs para consumir no sistema externo é a solução.

No final, acho que vai depender das suas necessidades específicas, cada um vai ter vantagens e desvantagens e também as possibilidades.

---

## Resposta #2

**Bruno Gasparetto** (@Bruno_Gasparetto) — 03/05/2024, 13:42 | ❤️ 2

Eu usei muito mais os serviços SOAP até agora e mais o REST na versão antiga.

Agora em alguns processos para enviar dados para o Fluig, principalmente pra iniciar processos, estamos começando a usar o REST na versão mais nova.

Isso com o Fluig e TOTVS RM.

Já nos outros sistemas praticamente tudo é RESTFull.

Acesso direto ao banco só em situações muito específicas. Até pra pegar os dados direto do Fluig só faço consulta no banco quando é de tabelas “fixas” do sistema e por algum motivo muito específico.

---

## Resposta #3

**Gabriel Douglas Fernandes Barbosa** (@GabrielDouglas) — 07/05/2024, 08:21 | ❤️ 1

Obrigado pessoal! Cada dia que passa, cada linha de código, fica mais claro o que fazer e como fazer no Fluig, a ajuda de vocês aqui deu um pump absurdo no conhecimento.

---

## Resposta #4

**Mendes** (@andersonma) — 07/05/2024, 14:20 | ❤️ 1

Para as integrações Protheus x Fluig, desenvolvi uma classe em ADVPL para usar os serviços SOAP que utilizo até hoje. Para essas integrações como já tenho essa classe desenvolvida ainda não precisei utiliza as API’s REST, mas acredito que elas são mais práticas principalmente quando há necessidade de se utilizar em conjunto com datasets ou Widgets.

Mas como os colegas informaram, depende muito da sua necessidade.

At.te,

---
