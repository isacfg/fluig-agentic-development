# Dúvida para usar mecanismo customizado

> **Fonte:** [https://fluiggers.com.br/t/duvida-para-usar-mecanismo-customizado/401](https://fluiggers.com.br/t/duvida-para-usar-mecanismo-customizado/401)
> **Categoria:** BPM
> **Criado em:** 29/04/2021, 08:43
> **Visualizações:** 1234 | **Likes:** 1 | **Respostas:** 1

---

## Pergunta original

**Wasley Santos** (@Wasley_Santos) — 29/04/2021, 08:43

Galera

Acredito que eu não esteja sabendo usar o mecanismo customizado. Eu tenho uma tarefa que poderá ser executada por diferentes pessoas (mas que não são de um grupo). Os usuários serão recuperados de uma tabela pai x filho contida no formulário do processo.

function resolve(process,colleague){
log.info(“MECANISMO CUSTOMIZADO”);
log.info(process);
var userList = new java.util.ArrayList();

```
var indexes = hAPI.getChildrenIndexes("tbcontratos");

log.info("----LISTA DE USUARIOS----");
log.dir(indexes);
for (var i = 0; i < indexes.length; i++){
	log.info(indexes[i].itemresponsavel);
	userList.add(indexes[i].itemresponsavel);
}

return userList;
```

}

A atividade em questão é essa no fluxo.
![image](https://fluiggers.com.br/uploads/default/original/1X/3f572fa57a520a7e7e9521ec9d3979b52f7d0cdb.png)

Eu já coloquei log.info mas nada é apresentado no log e a tarefa esta sendo atribuída sempre ao primeiro usuário do Fluig.

Poderiam me orientar, talvez eu esteja entendo errado a lógica do mecanismo customizado

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 29/04/2021, 13:00

Essa Pai Filho é preenchida na mesma atividade que o Mecanismo Customizado é executado?

Pelo que vi na documentação, pois ainda não utilizei esse mecanismo, é que o formulário já precisa ter sido salvo (motivo pelo qual não é possível utilizá-lo na Atividade Inicial do Processo) e acredito que o formulário só é salvo após selecionar o responsável, então você não conseguiria puxar os valores dele com a hAPI.

[Nessa resposta da FAQ](https://tdn.totvs.com/pages/releaseview.action?pageId=271677851) até tem um exemplo de como utilizar campo de formulário pra selecionar a atribuição quando é a atividade inicial.

Uma coisa que acho chata com “Atribuição por campo de formulário” é quando preciso transferir um processo pra outra pessoa, mas pelo menos não dá problema pra usuário substituto. Mecanismo customizado deve ser melhor nesse quesito né.

---

## Resposta #2

**Wasley Santos** (@Wasley_Santos) — 29/04/2021, 14:30

Então [@Bruno\_Gasparetto](/u/bruno_gasparetto)

A tabela é preenchida na primeira atividade. O mecanismo é a quinta atividade. Enquanto não descubro essa questão da atribuição customizada, estou alterando o processo para fazer a criação de grupo, add de usuário no grupo e no final exclusão do grupo (que trabalhão todo) kkk

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Magno Silva Adauto** (@Magno_Silva_Adauto) — 29/04/2021, 20:00 | ❤️ 1

Está vindo a matricula do usuário nesse log.info ??

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/wasley_santos/48/77_2.png) Wasley\_Santos:
>
> > `log.info(indexes[i].itemresponsavel);`

Tente usar dessa forma:

for (var i = 0; i < indexes.length; i++){
log.info(hAPI.getCardValue(“itemresponsavel\_\_\_” + indexes\[i\]));
userList.add(hAPI.getCardValue(“itemresponsavel\_\_\_” + indexes\[i\]));
}

---

## Resposta #4

**system** (@system) — 30/04/2021, 21:09

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
