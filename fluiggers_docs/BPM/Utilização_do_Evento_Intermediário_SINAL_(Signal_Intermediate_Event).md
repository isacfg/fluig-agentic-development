# Utilização do Evento Intermediário SINAL (Signal Intermediate Event)

> **Fonte:** [https://fluiggers.com.br/t/utilizacao-do-evento-intermediario-sinal-signal-intermediate-event/1442](https://fluiggers.com.br/t/utilizacao-do-evento-intermediario-sinal-signal-intermediate-event/1442)
> **Categoria:** BPM
> **Tags:** `fluig-studio`
> **Criado em:** 31/10/2022, 21:51
> **Visualizações:** 676 | **Likes:** 1 | **Respostas:** 3

---

## Pergunta original

**Guilherme A Vieira** (@Guilherme.Alves) — 31/10/2022, 21:51

Estou tentando utilizar o evento intermediário SINAL, para iniciar a nova execução de um processo auxiliar, em paralelo à execução do principal. No entanto, preciso transferir alguns dados do processo principal para o processo secundário, relativos ao escopo da solicitação.

No treinamento há um exemplo de utilização do SINAL, mas sem o transferência de dados entre o processo que envia o sinal e o processo que recebe o sinal.

A função hAPI.getParentInstance(getValue(“WKNumProces”)) retornou o valor 0 (zero). Suponho que a função getParentInstance consiga retornar o valor correto somente quando o processo filho é um subprocesso do processo pai.

Alguém teria uma sugestão sobre como recuperar os dados do formulário do processo que enviou o sinal?

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Daniel Sales** (@Daniel_Sales) — 01/11/2022, 08:14

Da uma olhada

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/wasley_santos/48/77_2.png) [Uso de Sinal em processos](https://fluiggers.com.br/t/uso-de-sinal-em-processos/148) [BPM](https://fluiggers.com.br/c/bpm/5)
>
> > Gente Quando trabalhamos com envio de sinal no Fluig, no processo que esta escutando o sinal, ele identifica de onde veio a solicitação? Pergunto, para saber se é possível via script recuperar dados da origem. Ou nesse caso a melhor coisa mesmo é iniciar o processo via script , mesmo q não fique com a conotação de BPM que existe um processo “escutando” aquele outro processo?

---

## Resposta #2

**Guilherme A Vieira** (@Guilherme.Alves) — 01/11/2022, 13:58

Obrigado pela ajuda. Vou tentar obter o ID do processo chamador no follow up de observações do processo chamado.

---

## Resposta #3

**Guilherme A Vieira** (@Guilherme.Alves) — 04/11/2022, 14:54 | ❤️ 1

O envio e a recepção do sinal não transportam a identificação do processo emissor do sinal. Analisei até o log do servidor.

O sinal é um recurso muito interessante, por estabelecer o paralelismo, sem dependência, entre dois ou mais processos. No entanto, a impossibilidade de transportar dados do emissor para o receptor torna o recurso pouco interessante.

---

## Resposta #4

**Bruno Gasparetto** (@Bruno_Gasparetto) — 05/11/2022, 10:32

Pelos comentários que já vi nos fóruns é mais comum o pessoal iniciar um novo processo por script do que com o Sinal. Talvez seja por essa dificuldade de enviar os dados.

---
