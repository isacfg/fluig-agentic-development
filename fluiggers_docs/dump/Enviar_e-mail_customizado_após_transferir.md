# Enviar e-mail customizado após transferir

> **Fonte:** [https://fluiggers.com.br/t/enviar-e-mail-customizado-apos-transferir/1431](https://fluiggers.com.br/t/enviar-e-mail-customizado-apos-transferir/1431)
> **Categoria:** BPM
> **Tags:** `bpm`
> **Criado em:** 25/10/2022, 15:30
> **Visualizações:** 304 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Rodrigo de Oliveira** (@redschenko) — 25/10/2022, 15:30

Boa tarde.

Preciso enviar um e-mail com template personalizado quando uma tarefa for transferida.
Personalizar o e-mail é tranquilo utilizando notifier.notify().
O problema é identificar quando é uma transfêrencia.
Há alguma forma, variável ou evento onde seja possível saber que é uma transfêrencia de tarefa?

Exemplo:
Usuário tem uma tarefa e clica no botão transferir. Após isto, preciso enviar um e-mail personalizado.

At
Rodrigo de Oliveira

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 26/10/2022, 09:36

Sei que dá pra usar a função getValue(“WKIsTransfer”) pra saber se é uma transferência, mas não sei em qual evento você teria que fazer isso.

---
