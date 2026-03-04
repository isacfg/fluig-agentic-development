# Processo parado em atividade de serviço

> **Fonte:** [https://fluiggers.com.br/t/processo-parado-em-atividade-de-servico/1872](https://fluiggers.com.br/t/processo-parado-em-atividade-de-servico/1872)
> **Categoria:** BPM
> **Criado em:** 19/04/2023, 15:35
> **Visualizações:** 388 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Junior Redondo** (@Junior_Redondo) — 19/04/2023, 15:35

Boa tarde pessoal tudo certo?

Estou com o seguinte problema, tenho 2 processos distintos com execuções distintas em momentos distintos com o mesmo problema: a atividade de serviço fica para o System:auto, ela não executa portanto, não cai no erro… No escript eu utilizo o try/catch e os thows para as tratativas… Mas como ela não executa eu não tenho o retorno… a única informação em comum é a mesma mensagem no Log:

> 2023-04-19 14:47:18,119 INFO \[com.datasul.technology.webdesk.workflow.business.SignalReceiverBO\] (default task-42) isSignalSender - estado.getBpmnType() 82

> 2023-04-19 14:47:18,119 INFO \[com.datasul.technology.webdesk.workflow.business.SignalReceiverBO\] (default task-42) Estado não manda sinal 315 descrição Gerar OS Recolha

Onde o que muda apenas é o numero da atividade onde uma é 315 e outra eh 30 e a descrição onde uma é Gerar OS Recolha e a outra é Gerar NF.

Alguém ja passou por isso?

Lembrando que a versão do fluig é a 1.6.5

---
