# Complementos em atividades paralelas getActualThread

> **Fonte:** [https://fluiggers.com.br/t/complementos-em-atividades-paralelas-getactualthread/1164](https://fluiggers.com.br/t/complementos-em-atividades-paralelas-getactualthread/1164)
> **Categoria:** BPM
> **Criado em:** 29/06/2022, 01:16
> **Visualizações:** 550 | **Likes:** 3 | **Respostas:** 0

---

## Pergunta original

**Thiago Brianez** (@tbrianez) — 29/06/2022, 01:16

Fala pessoal.

Alguém ai já utilizou o getActualThread pra adicionar complementos em atividades paralelas que possuem Join/Fork? Dei uma olhada na [doc](https://tdn.totvs.com/display/public/fluig/hAPI) mas não deu pra entender com os exemplos lá informados.

To usando no evento afterTaskComplete pra adicionar uma informação no complemento, com o valor 0 no campo de Thread é sucesso, mas quando tem atividade paralelo tá zoando o rolê…

Seria algo do tipo abaixo?

```auto
hAPI.setTaskComments(usuario, numSolicitacao, hAPI.getActualThread(numEmpresa, numSolicitacao, proximaAtividade), "SALVE CHEFIA"
```

Alguém poderia explicar como funciona as Threads ai? Vlw, abraços!

---

## Resposta #1

**Rogério Collonhese Santana** (@Rogerio_Collonhese_S) — 28/08/2024, 19:00

Fala [@tbrianez](/u/tbrianez) , tudo bem?
è chato mesmo esse comando, segue o que fiz em um cliente, espero que te ajude.

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/tbrianez/48/1302_2.png) tbrianez:
>
> > /\* =====- Parâmetros -==========================
> > \* data: data inicial (tipo Date);
> > \* segundos: quantidade de segundos após a meia noite ;
> > \* prazo: prazo que será aplicado em horas (tipo int);
> > \* periodId: código de expediente.
> > \* */
> > /*\* ------------- Altera o prazo do processo ---------------------------\*\*/
> > var numEmpresa = getValue(“WKCompany”);
> > var processo = getValue(“WKNumProces”);
> > var ns = getValue(“WKNextState”);
> > var colleagueId = getValue(“WKUser”);
> > var ret = hAPI.setDueDate(processo,hAPI.getActualThread(numEmpresa, processo, ns),colleagueId, dt, segundos);

---

## Resposta #2

**Pablo Valle** (@pablooav) — 29/08/2024, 09:58 | ❤️ 3

Isso mesmo, quando na solicitação existe um join após passar por essa atividade o thread muda, então em vez de passar o valor 0 vc tem que passar o valor respectivo.

Apartir da versão 1.7.1 de 22 de Novembro de 2022 foi implementado a variável WKActualThread

```auto
var numThread = getValue("WKActualThread");
```

Que te retorna sem que você precise utilizar o **hAPI.getActualThread**, esses dias mesmo implementei isso em um cliente e percebi uma peculiaridade.

O **getValue(“WKActualThread”)** funciona apenas em script’s de formulário como por exemplo afterProcessCreate, beforeTaskSave, etc.

Realizei testes utilizando ele dentro de script’s de integração e ele não retorna valor, então caso for utilizar em serviceTask, o ideal é continuar utilizando **hAPI.getActualThread** que recebe os 3 pârametros, mas fica ai outra possibilidade que é utilizando o getValue, muito mais prático, não depende de parâmetros nem nada.

---
