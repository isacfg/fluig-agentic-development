# nextSequenceId se refere a todos os elementos do diagrama?

> **Fonte:** [https://fluiggers.com.br/t/nextsequenceid-se-refere-a-todos-os-elementos-do-diagrama/821](https://fluiggers.com.br/t/nextsequenceid-se-refere-a-todos-os-elementos-do-diagrama/821)
> **Categoria:** BPM
> **Criado em:** 10/12/2021, 10:44
> **Visualizações:** 450 | **Likes:** 2 | **Respostas:** 0

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 10/12/2021, 10:44

Eu tenho um fluxo, que estou modificando.

Estou com uma dúvida na função

```auto
beforeTaskComplete(colleagueId, nextSequenceId, userList) {
}
```

Eu gostaria de testar se a próxima sequência seria a de número 14(State14).

Entretanto, antes desta 14, tem um automático no diagrama com o nome 57(Automatic57), que testa se pode chegar até a 14 ou não.

Minha pergunta é: devo codificar assim?

```auto
beforeTaskComplete(colleagueId, nextSequenceId, userList) {
	if (nextSequenceId == 14) {
        }

}
```

ou assim (levando em consideração o automático)?

```auto
beforeTaskComplete(colleagueId, nextSequenceId, userList) {
	if (nextSequenceId == 57) {
        }

}
```

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Daniel Cabral Santos** (@daniel.cabral) — 14/12/2021, 18:16 | ❤️ 1

Se entendi bem, você precisa codificar com o 14 mesmo, a não ser que queria tratar algo na execução do gateway também.

---

## Resposta #2

**MAURO SIMOES** (@Mautresim) — 14/12/2021, 18:32 | ❤️ 1

Valeu, Daniel, foi o que intuí mesmo.

---
