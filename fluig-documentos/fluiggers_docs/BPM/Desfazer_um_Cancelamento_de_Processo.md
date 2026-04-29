# Desfazer um Cancelamento de Processo

> **Fonte:** [https://fluiggers.com.br/t/desfazer-um-cancelamento-de-processo/448](https://fluiggers.com.br/t/desfazer-um-cancelamento-de-processo/448)
> **Categoria:** BPM
> **Criado em:** 18/05/2021, 12:32
> **Visualizações:** 707 | **Likes:** 8 | **Respostas:** 0

---

## Pergunta original

**Bruno Gasparetto** (@Bruno_Gasparetto) — 18/05/2021, 12:32 | ❤️ 3

Alguém já conseguiu desfazer um cancelamento de processo, mesmo que mexendo diretamente na base de dados?

Se sim, compartilharia o que alterar e remover no banco?

No Fluig não tem essa opção e já vi outras perguntas (no outro fórum) cuja resposta foi somente “não é possível”, mas como foram posts antigos tenho a esperança de alguém ter achado a solução :slight_smile:

---

## Resposta #1

**Antonio Nascimento** (@Antonio_Nascimento) — 26/09/2023, 09:50 | ❤️ 5

Pode ser que isso de algumas respostas
Tive um problema num processo que não ia para frente nem para traz, ao abrir o chamado foi sugerido a finalização do processo via banco.
Esse foi o script encaminhado pelo time de produto do Fluig:

UPDATE TAR\_PROCES SET IDI\_STATUS = 2, END\_DATE = ‘2023-09-25 00:00:00’ WHERE NUM\_SEQ\_MOVTO = 9 AND NUM\_SEQ\_ESCOLHID = 76 AND NUM\_PROCES = 474289;
UPDATE PROCES\_WORKFLOW SET LOG\_ATIV = 0, END\_DATE = ‘2023-09-25 00:00:00’, STATUS = 2 WHERE NUM\_PROCES = 474289 AND LOG\_ATIV = 1;
UPDATE HISTOR\_PROCES SET LOG\_ATIV = 0 WHERE NUM\_SEQ\_MOVTO = 9 AND NUM\_PROCES = 474289 AND COD\_EMPRESA = 1;
UPDATE TAR\_CTRAL SET IDI\_STATUS = 2, DAT\_CONCLUS\_TAR = ‘2023-09-25’, NUM\_HRS\_CONCLUS\_TAR = 52360 WHERE COD\_TAREFA = 1576694;

Estou compartilhando porque quase ninguém tem essa informação e se tem não passa.

---
