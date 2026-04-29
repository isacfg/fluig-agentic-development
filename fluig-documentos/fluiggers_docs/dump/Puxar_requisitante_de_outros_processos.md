# Puxar requisitante de outros processos

> **Fonte:** [https://fluiggers.com.br/t/puxar-requisitante-de-outros-processos/1992](https://fluiggers.com.br/t/puxar-requisitante-de-outros-processos/1992)
> **Categoria:** BPM
> **Tags:** `processo`, `bpm`, `fluigapi`
> **Criado em:** 30/06/2023, 10:05
> **Visualizações:** 415 | **Likes:** 3 | **Respostas:** 7

---

## Pergunta original

**Rafael** (@Adevogado) — 30/06/2023, 10:05

Bom dia pessoal, estou enfrentando a seguinte incógnita:

Existe o processo 1 e processo 2

Na segunda atividade da requisição Y do processo 2, o responsável por ela deve ser o solicitante da requisição X do processo 1, como eu posso fazer isso?

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Eduardo Vantini Neto** (@eduardo.vantini) — 30/06/2023, 10:39 | ❤️ 1

Olá, tudo bem? Vou colocar um exemplo aqui considerando que você tenha o número da solicitação do processo 1.
Cria um mecanismo customizado assim

```auto
function resolve(process,colleague){
	var userList = new java.util.ArrayList();

	var task = "CODIGO DA REQUISICAO X";
    var numSolicitacao = "NUMERO DA SOLICITACAO";

    /* processTask => DATA SET PARA PEGAR USUARIO QUE EXECUTOU A TASK */
    var c1 = DatasetFactory.createConstraint("choosedSequence", task, task, ConstraintType.MUST);
	var c2 = DatasetFactory.createConstraint("processTaskPK.processInstanceId", numSolicitacao, numSolicitacao, ConstraintType.MUST);

	var ds = DatasetFactory.getDataset("processTask", null, [c1, c2], null);

	userList.add(ds.getValue(0, 'processTaskPK.colleagueId'));

	return userList;
}
```

Assim você consegue atribuir. Testa aí.

Abs

---

## Resposta #2

**Rafael** (@Adevogado) — 30/06/2023, 11:02

obrigado, outra dúvida, este código eu devo usar nos eventos do form ou em um script específico do workflow?

---

## Resposta #3

**Eduardo Vantini Neto** (@eduardo.vantini) — 30/06/2023, 11:14

Coloca em um mecanismo customizado, e atribuí ele a tarefa (requisição Y do processo 2).

Para criar o mecanismo customizado segue a doc [Mecanismo de atribuição personalizado - TOTVS Fluig - TDN](https://tdn.totvs.com/pages/releaseview.action?pageId=142804157)

Abs

---

## Resposta #4

**Rafael** (@Adevogado) — 30/06/2023, 11:48

Valeu! Consegui criar o mecanismo customizado.
Fiz um teste colocando os valores abaixo nas variaveis citadas:

var task = “592”;
var numSolicitacao = getValue(“WKNumProces”);

e retornou o erro:
Não existem colaboradores em comum para os mecanismos de atribuição da tarefa e da condição.

tentei colocar na task o número inteiro sem ser string e deu o mesmo erro :confused:

---

## Resposta #5

**Eduardo Vantini Neto** (@eduardo.vantini) — 30/06/2023, 12:35

Então… o número da solicitação é do processo 1, se você pegar com o WKNumProcess ele vai pegar o a solicitação do processo 2, que é de onde você está executando… e a task é o código da tarefa do processo 1 tipo a imagem
![image](https://fluiggers.com.br/uploads/default/original/1X/a54cfc9f4c4f72ff67a8e7b2fca8dc9f040eeb15.png)

Por que vocês está pegando quem executou a tarefa específica do processo 1

---

## Resposta #6

**Rafael** (@Adevogado) — 30/06/2023, 13:32

ah saquei! Realmente não fazia sentido kkk
atualizei os valores para a forma certa agora:
var task = 1;
var numSolicitacao = 592;
porém o erro persistiu, sabe o que pode ser?

---

## Resposta #7

**Eduardo Vantini Neto** (@eduardo.vantini) — 30/06/2023, 13:46 | ❤️ 1

Testei aqui e funcionou… vamos ver o que está retornando do dataset
Faz assim… executa o dataset pelo eclipse e coloca essa solicitação 592 no filtro.

![image](https://fluiggers.com.br/uploads/default/original/1X/501206ebd1f5226a37c1782756c2aa942857e12f.png)

![image](https://fluiggers.com.br/uploads/default/original/1X/c3a84111140a352c92f8333c8592f7ddb0e09c7d.png)
![image](https://fluiggers.com.br/uploads/default/original/1X/39c833eb5c74232f361998ca7f08b2e98003a889.png)

![image](https://fluiggers.com.br/uploads/default/original/1X/b0dfb00ef524cd1986aec59c0ef7a6abd7385270.png)
![image](https://fluiggers.com.br/uploads/default/original/1X/c63393da9dfe5ca6e9d030df9c8802d85b295c3c.png)

No campo choosedSequence procura o número 1 e no processTaskPK.colleagueId vê que usuário está… se puder manda um print com todos os resultados.

Abs

---

## Resposta #8

**Rafael** (@Adevogado) — 30/06/2023, 14:50 | ❤️ 1

Após eu analisar o dataset, observei que estranhamente a solicitação 592 não tinha o choosedSequence 1 e nem 0, e todas as outras tinham, ao tentar com outra solicitação deu certo!
Agradeço pelo apoio e paciência

---
