# Enviar dados entre processos

> **Fonte:** [https://fluiggers.com.br/t/enviar-dados-entre-processos/2917](https://fluiggers.com.br/t/enviar-dados-entre-processos/2917)
> **Categoria:** BPM
> **Tags:** `form`, `processo`, `bpm`, `dataset`, `fluigapi`
> **Criado em:** 06/08/2024, 14:33
> **Visualizações:** 64 | **Likes:** 2 | **Respostas:** 3

---

## Pergunta original

**Fabio Leal Schmitz** (@fabiolealsc) — 06/08/2024, 14:33

Boa tarde pessoal tudo bem?

Quero saber se alguém ja fez ou conhece algo sobre o assunto, quero enviar dados entre dois processos, tenho o número desses processos.

O meu problema está no fato que consegui enviar dados para o processo atravez do startProcess(), porém queria retornar dados para o formulário do processo que disparou esse startProcess, alguém pode me ajuda?

---

## Resposta #1

**Mendes** (@andersonma) — 07/08/2024, 09:27

Fabio, bom dia.

Utilizando um subprocesso é possível enviar os dados do formulário entre os dois processos sem a necessidade de customização.

At.te,

---

## Resposta #2

**Fabio Leal Schmitz** (@fabiolealsc) — 07/08/2024, 09:33

Bom dia andersonma, entendo, porém pela regra de negócio do requisito o subprocesso não é suficiente, pois utilizo tabela paiXfilho para disparar o processo. Certamente o subprocesso facilita na troca de dados entre os formulários, mas no meu caso não deu pra utilizar. Mas obrigado pela sugestão.

---

## Resposta #3

**Mendes** (@andersonma) — 07/08/2024, 09:38 | ❤️ 1

Entendi,

Neste caso você terá que utilizar a API do fluig ou o WS ECMWorkflowEngineService para passar as informações entre os processos.

At.te,

---

## Resposta #4

**Fabio Leal Schmitz** (@fabiolealsc) — 07/08/2024, 09:44

Okay, vou dar uma lida sobre isso. Muito obrigado dês de já. :smiley:

---

## Resposta #5 ✅ RESPOSTA ACEITA

**Daniel Cabral Santos** (@daniel.cabral) — 08/08/2024, 17:06 | ❤️ 1

Usando a API, você pode armazenar o número da solicitação após a criação do processo “auxiliar”, com este número você usa a API para consulta do que precisar sobre o processo.

---
