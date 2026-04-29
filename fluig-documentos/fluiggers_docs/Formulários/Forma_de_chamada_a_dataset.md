# Forma de chamada a dataset

> **Fonte:** [https://fluiggers.com.br/t/forma-de-chamada-a-dataset/385](https://fluiggers.com.br/t/forma-de-chamada-a-dataset/385)
> **Categoria:** Formulários
> **Criado em:** 23/04/2021, 08:12
> **Visualizações:** 3390 | **Likes:** 6 | **Respostas:** 5

---

## Pergunta original

**Daniel ** (@daniel_fmartins) — 23/04/2021, 08:12

No fluig eu consigo executar um dataset a partir de um evento de um botão? Por exemplo: queria buscar externamente dados de um usuário pelo CPF através de um evento onClick. É possível executar o dataset passando esse CPF como parâmetro? Ou terei que preencher esse dataset previamente recuperando todos os CPF’s e depois através de um filtro só consultar esse dataset?

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 23/04/2021, 09:21

Você pode carregar a `/webdesk/vcXMLRPC.js` no HTML do seu formulário/widget e então, no evento do click, usar a função `DatasetFactory.getDataset` que é muito parecida com a função executada em BackEnd.

[https://tdn.totvs.com/display/public/fluig/Acessando+Datasets](https://tdn.totvs.com/display/public/fluig/Acessando+Datasets)

---

## Resposta #2

**Daniel ** (@daniel_fmartins) — 23/04/2021, 09:26

Opa, Bruno. Pelo que entendi, a função `DatasetFactory.getDataset` somente faz uma consulta ao dataset em questão. Meu objetivo seria executar novamente o datatset(como se fosse criá-lo novamente, através do createDataset). Aí minha dúvida é saber se isso seria possível. Talvez eu não tenha sido claro na descrição da pergunta acima.

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 23/04/2021, 09:32 | ❤️ 2

Entendi. Você quer criar um dataset para cada consulta de CPF que executar externamente. Meio que pra manter na sua base de dados né?

Você pode usar um WS do Fluig pra criar/editar o Dataset ( [Utilização de Webservices - TOTVS Fluig - TDN](https://tdn.totvs.com/pages/releaseview.action?pageId=73084007#Utiliza%C3%A7%C3%A3odeWebservices-ECMDatasetService) )

Ou talvez analisar o caso pra ver se um Dataset Sincronizado não seria uma melhor solução ( [Sincronização de datasets - TOTVS Fluig - TDN](https://tdn.totvs.com/pages/releaseview.action?pageId=212899013) )

---

## Resposta #4

**Daniel Cabral Santos** (@daniel.cabral) — 27/04/2021, 09:06 | ❤️ 1

+1 no Dataset Sincronizado. Acho que fica mais sólido e deixa o processo todo no backend (dai ao backend o que é do backend)!

---

## Resposta #5

**Romulo Pereira** (@romuloccomp) — 05/05/2021, 09:50 | ❤️ 1

[@daniel\_fmartins](/u/daniel_fmartins) tudo bem?
Você conseguiu fazer? Vou precisar fazer algo parecido, criar um Dataset que faz um ajax para uma URL externa.

---

## Resposta #6 ✅ RESPOSTA ACEITA

**Daniel ** (@daniel_fmartins) — 05/05/2021, 15:46 | ❤️ 1

Opa, [@romuloccomp](/u/romuloccomp).
Só explicando novamente:
No meu cenário eu tive um campo de cpf e a partir do valor contido nesse campo, eu clicava em um botão para fazer uma integração com uma base externa para autopreencher outros vários campos a partir de dados provindos de lá.

Solução:
Criei um dataset que faz uma consulta na base externa de dados via JDBC passando o CPF como constraint e lá nessa consulta para montar o dataset eu filtro o CPF.

---

## Resposta #7

**Romulo Pereira** (@romuloccomp) — 05/05/2021, 15:52 | ❤️ 1

No meu caso foi resolvido aqui: [Dataset buscando de url externa - #4 por romuloccomp](https://fluiggers.com.br/t/dataset-buscando-de-url-externa/424/4)

---

## Resposta #8

**system** (@system) — 06/05/2021, 07:53

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
