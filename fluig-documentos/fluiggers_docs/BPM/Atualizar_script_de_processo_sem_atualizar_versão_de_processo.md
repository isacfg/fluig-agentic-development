# Atualizar script de processo sem atualizar versão de processo

> **Fonte:** [https://fluiggers.com.br/t/atualizar-script-de-processo-sem-atualizar-versao-de-processo/2401](https://fluiggers.com.br/t/atualizar-script-de-processo-sem-atualizar-versao-de-processo/2401)
> **Categoria:** BPM
> **Tags:** `bpm`, `evento`, `script`
> **Criado em:** 04/12/2023, 12:41
> **Visualizações:** 242 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**Cassius** (@Cassius) — 04/12/2023, 12:41

Boa tarde a todas e todos.

Gostaria de saber se nessas novas versões do Fluig foi disponibilizada a opção de se atualizar o **Script de Evento de Processo** sem ter a necessidade de se reenviar o diagrama, ou seja, criar uma nova versão de processo.
Muitas vezes precisamos atualizar uma consistência apenas e não o fluxo de processo.
Se alguém tiver uma dica adicional, agradeço.
Obrigado.

Cassius

---

## Resposta #1

**Allan Reichert** (@allan.reichert) — 05/12/2023, 07:41

Olá,

Eu altero direto na tabela do banco de dados, Segue:
EVENT\_PROCES → Scripts de Workflow
ESTADO\_PROCES\_COND → Validações condicionais de Workflow

---

## Resposta #2

**Cassius** (@Cassius) — 05/12/2023, 17:32

Opa, boa tarde.

Uau!!! Método “HARD” de solução. Mas funciona…
Achei que nas versões novas tivesse um modo mais “SOFT”, sabe. Tipo “Exportar script de processo” puro e simples, sem precisar atualizar o diagrama.
Vou ver se consigo aqui fazer dessa forma.
Obrigado.

---
