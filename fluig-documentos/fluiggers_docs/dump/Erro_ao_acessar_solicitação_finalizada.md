# Erro ao acessar solicitação finalizada

> **Fonte:** [https://fluiggers.com.br/t/erro-ao-acessar-solicitacao-finalizada/1117](https://fluiggers.com.br/t/erro-ao-acessar-solicitacao-finalizada/1117)
> **Categoria:** BPM
> **Criado em:** 03/06/2022, 15:59
> **Visualizações:** 470 | **Likes:** 1 | **Respostas:** 6

---

## Pergunta original

**Daniel ** (@daniel_fmartins) — 03/06/2022, 15:59

Ao tentar acessar um processo concluído, é exibida a seguinte mensagem:

![image](https://fluiggers.com.br/uploads/default/original/1X/0636deece27b09e5222992cf37e7bdd1caa0f809.png)

Alguém tem alguma ideia do que possa ser?

---

## Resposta #1

**Gabriel Franco da Rocha Nascimento** (@gabrielfrna) — 04/06/2022, 15:42

Daniel, Por onde está tentando acessar?

---

## Resposta #2

**Daniel ** (@daniel_fmartins) — 06/06/2022, 08:14

Olá [@gabrielfrna](/u/gabrielfrna),

Estou acessando por Processos → Consultar solicitações:

![image](https://fluiggers.com.br/uploads/default/optimized/1X/3feaa0ffc5a5541e8dc3ff30ab59ba9fe6186ed8_2_690x248.png)

---

## Resposta #3

**Allan Reichert** (@allan.reichert) — 06/06/2022, 09:01

o numero das solicitações deve ser maior que Zero. A solicitação que esta tentando acessar possui numeração Zero? Se sim, está ai o problema…

---

## Resposta #4

**Daniel ** (@daniel_fmartins) — 06/06/2022, 09:05

[http://fluig.aiamis.com.br/portal/p/01/pageworkflowview?app\_ecm\_workflowview\_detailsProcessInstanceID=1533](http://fluig.aiamis.com.br/portal/p/01/pageworkflowview?app_ecm_workflowview_detailsProcessInstanceID=1533)

Solicitação 1533 por exemplo neste caso. Não entendo pq ele coloca aquele zero ali.

---

## Resposta #5

**Allan Reichert** (@allan.reichert) — 06/06/2022, 10:34

se não me engano é alguma função dos scripts do formulário(normalmente no “displayfields”) incorreta. tecla F12 e veja na console da página se está gerando algum erro de script.

---

## Resposta #6

**Daniel ** (@daniel_fmartins) — 07/06/2022, 17:29

Cara pior que no console não foi mostrado nenhum erro.

---

## Resposta #7

**Daniel ** (@daniel_fmartins) — 09/06/2022, 11:20

[@allan.reichert](/u/allan.reichert) atualizei o fluig, e aparentemente resolveu o problema. Obrigado.

---

## Resposta #8

**Maxson Santana Carvalho** (@Maxson_Santana_Carva) — 29/06/2022, 13:17

Daniel, você atualizou para qual versão? pois estou na versão Crystal Lake 1.7.1-220308 513 e estou com o mesmo problema, mas apenas em um dos nossos processos…

---

## Resposta #9 ✅ RESPOSTA ACEITA

**jonathan.nascimento** (@jonathan.nascimento) — 29/06/2022, 15:45 | ❤️ 1

Depois que atualizei para a versão **Crystal Lake 1.7.1-220517 568** não tive mais problemas.

---
