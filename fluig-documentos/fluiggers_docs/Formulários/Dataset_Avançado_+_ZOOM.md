# Dataset Avançado + ZOOM

> **Fonte:** [https://fluiggers.com.br/t/dataset-avancado-zoom/353](https://fluiggers.com.br/t/dataset-avancado-zoom/353)
> **Categoria:** Formulários
> **Tags:** `zoom`
> **Criado em:** 13/04/2021, 11:22
> **Visualizações:** 1747 | **Likes:** 1 | **Respostas:** 2

---

## Pergunta original

**Vladimir Banow Jr.** (@Vladimir) — 13/04/2021, 11:22

Pessoal, tenho um DATASET com constraints que executa uma consulta SQL de acordo com a matricula do usuário logado. Para o evento displayFields está funcionando normalmente, minha duvida é: Como exibir o retorno da consulta SQL no input ZOOM?
EX: Sou chefe de uma seção, gostaria de saber quais são os meus subordinados (a consulta já retorna os funcionários, baseado na matricula) e escolher um deles para que seja exibidos os dados cadastrais do funcionário selecionado.

Obrigado desde já!

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 13/04/2021, 21:21

Se o Dataset funciona e retorna os valores normalmente então é só fazer o Zoom chamando ele que deveria funcionar.

Ou tem algum detalhe que está complicando usá-lo no Zoom?

---

## Resposta #2

**Vladimir Banow Jr.** (@Vladimir) — 13/04/2021, 21:53

[@Bruno\_Gasparetto](/u/bruno_gasparetto) Também pensei que a lógica seria essa. Porém, ele não retorna nenhuma informação. Se no lugar da variável matricula (`var usuarioId = fluigAPI.getUserService().getCurrent().getLogin();` ) eu colocar um valor fixo, o zoom volta a funcionar.

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 13/04/2021, 23:50

Se você consultar o Dataset pelo Eclipse ele funciona?

Pelo seu relato parece que o Dataset não conseguiu pegar o usuário logado (até onde sei deveria funcionar). No log do Fluig informa algum erro?

Caso ele realmente não consiga pegar o usuário logado o único jeito seria fazer seu Dataset receber o login do usuário nas Constraints pra então repassar na sua SQL.

---

## Resposta #4

**Vladimir Banow Jr.** (@Vladimir) — 14/04/2021, 14:58

\[quote=“Bruno\_Gasparetto, post:4, topic:353”\]
Se você consultar o Dataset pelo Eclipse ele funciona?
\[/quote\] Não funciona Bruno, pois a consulta SQL reque um parâmetro que só é passado quando o usuário fizer login no fluig.

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/bruno_gasparetto/48/68_2.png) Bruno\_Gasparetto:
>
> > Caso ele realmente não consiga pegar o usuário logado o único jeito seria fazer seu Dataset receber o login do usuário nas Constraints pra então repassar na sua SQL.

Posso estar enganado, devido ao meu pouco tempo de FLUIG, mas acredito que seja isso que eu fiz, veja um trecho do dataset.

```
var chapa = "";

for (var i = 0; i < constraints.length; i++) {
		if (constraints[i].fieldName == "chapa")  {
			chapa = constraints[i].getInitialValue().toString();
		}

	}


 var myQuery =  "SELECT PFUNC.NOME, PFUNC.CHAPA, GDEPTO.NOME AS DEPARTAMENTO, PSECAO.DESCRICAO AS SECAO, CASE WHEN PFUNC.INTEGRCONTABIL = '02' THEN 'IDL' ELSE 'DL' END INDIRETO, PFUNCAO.NOME AS FUNCAO,/* CASE WHEN VPCOMPL.TURNO = '01' THEN 'Adm' WHEN VPCOMPL.TURNO = '02' THEN '1º Turno' WHEN VPCOMPL.TURNO = '03' THEN '2º Turno' ELSE '3º Turno' end*/ '' as TURNO, PFUNC.SALARIO, CONVERT(VARCHAR,PFUNC.DATAADMISSAO,103) AS DATAADMISSAO, CONVERT(VARCHAR,PFHSTSAL.DTMUDANCA,103) MUDSALARIO, PMOTMUDSAL.DESCRICAO AS MOTIVO FROM PFUNC "+
                "INNER JOIN PSECAO ON PFUNC.CODSECAO = PSECAO.CODIGO AND PFUNC.CODCOLIGADA = PSECAO.CODCOLIGADA "+
                "INNER JOIN GDEPTO ON PSECAO.CODCOLIGADA = GDEPTO.CODCOLIGADA AND PSECAO.CODDEPTO = GDEPTO.CODDEPARTAMENTO "+
                "INNER JOIN PFUNCAO ON PFUNC.CODCOLIGADA = PFUNCAO.CODCOLIGADA AND PFUNC.CODFUNCAO = PFUNCAO.CODIGO "+
                "LEFT JOIN PFHSTSAL ON PFUNC.CHAPA = PFHSTSAL.CHAPA AND PFUNC.CODCOLIGADA = PFHSTSAL.CODCOLIGADA and PFHSTSAL.MOTIVO NOT IN ('01','04') AND PFHSTSAL.DTMUDANCA >= GETDATE() - 500 "+
                "LEFT JOIN PMOTMUDSAL ON PFHSTSAL.MOTIVO = PMOTMUDSAL.CODCLIENTE AND PFHSTSAL.CODCOLIGADA = PMOTMUDSAL.CODCOLIGADA "+
                "WHERE CODSITUACAO <> 'D' AND REPLACE(PFUNC.CODEQUIPE,'FX-','') = '"+chapa+"' "+
                "ORDER BY PFUNC.NOME";
```

---

## Resposta #5 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 14/04/2021, 15:49

Sim, você está utilizando constraint.

Mas a parte de estar logado que achei estranho.

Fiz um teste rapidamente criando um dataset pegando valores do usuário logado tanto com a UserService quanto com a função getValue e ambos retornaram corretamente o usuário que eu estava utilizando (testei com o admin e com o meu, ambos no Eclipse).

```javascript
var user = fluigAPI.getUserService().getCurrent();

dataset.addRow([
    user.getLogin(),
    user.getCode(),
    getValue("WKUser")
]);
```

Por isso achei estranho o seu Dataset não recuperar a informação do usuário logado nem pelo Eclipse.

---

## Resposta #6

**Vladimir Banow Jr.** (@Vladimir) — 14/04/2021, 17:23 | ❤️ 1

Depois do que me falou do dataset que criou, comecei a pensar em coisas mais óbvias e menos complexas.
Resolvi o problema apontando o usuário logado dentro do próprio dataset, assim:

`var chapa = fluigAPI.getUserService().getCurrent().getLogin();`

Muito obrigado pela ajuda e disposição [@Bruno\_Gasparetto](/u/bruno_gasparetto)

---

## Resposta #7

**system** (@system) — 15/04/2021, 09:23

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
