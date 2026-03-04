# Limite de caracteres banco fluig em chamada soap

> **Fonte:** [https://fluiggers.com.br/t/limite-de-caracteres-banco-fluig-em-chamada-soap/2205](https://fluiggers.com.br/t/limite-de-caracteres-banco-fluig-em-chamada-soap/2205)
> **Categoria:** Sem categoria
> **Criado em:** 14/09/2023, 10:25
> **Visualizações:** 399 | **Likes:** 1 | **Respostas:** 1

---

## Pergunta original

**Wanderley Junior** (@gomeswjunior) — 14/09/2023, 10:25

Estou recebendo este retorno em uma chamada soap no ECMWorkflowEngineService, em especifico no startprocess. Um dos campos preenchido possui 1610 caracteres.

```auto
$(data).find("result").text(): ERROR Não foi possível salvar as alterações, a quantidade de caracteres inserida excede a limitação permitida pelo banco de dados.
```

Queria entender se é possivel alterar o limite do banco que o retorno menciona. E qual banco é esse ?

---

## Resposta #1

**Guilherme Mesquita Rocha** (@gmesquita) — 14/09/2023, 11:36

Acredito que se o campo for do tipo ***textarea*** resolva seu problema…

---

## Resposta #2

**Wanderley Junior** (@gomeswjunior) — 14/09/2023, 11:41

Já são campos textarea… essa é a questão.

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Wanderley Junior** (@gomeswjunior) — 14/09/2023, 14:06 | ❤️ 1

Pessoal, se por acaso alguém passar pela mesma situação, a solução foi aumentar o tamanho dos campos na tabela do formulário no banco do fluig. Nesse banco em especifico os campos estavam com tamanho 250.

---
