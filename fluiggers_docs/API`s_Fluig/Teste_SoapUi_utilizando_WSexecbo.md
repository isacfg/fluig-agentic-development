# Teste SoapUi utilizando WSexecbo

> **Fonte:** [https://fluiggers.com.br/t/teste-soapui-utilizando-wsexecbo/758](https://fluiggers.com.br/t/teste-soapui-utilizando-wsexecbo/758)
> **Categoria:** API`s Fluig
> **Criado em:** 03/11/2021, 12:04
> **Visualizações:** 752 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Gilmar Honorato** (@Gilmar_Honorato) — 03/11/2021, 12:04

Pessoal tudo bem? Me ajudem em um teste que preciso fazer via soapui, nunca utilizei este e alguns testes que via nas documentações que encontrei e teste de calculadora.
Utilizamos o WebServiceExecBO para retornar algumas informações do DATASUL, utilizamos ele no Fluig, só que estamos com problema de comunicação da ferramenta fluig com o DATASUL.

O teste que gostaria de fazer é utilizar uma pi-profissao que temos dentro do totvs, consumir ela utilizando EXECBO.

![image](https://fluiggers.com.br/uploads/default/original/1X/8b677c923975be0fc392ed7637f0553f4ea4142f.png)

Cheguei até nessa parte, onde consegui pegar o Token de usuário, passei o nome do programa .p e também no argumento n° 2 passei o nome da pi que tem dentro do .p travado no arg3, eu deixei ele aberto achando que ia passar e retornar todas as informações cadastradas na tabela mas nao acredito que tenha que passar algum parametro.

## [](#p-2036-esta-a-logica-do-nosso-p-1)Esta é a logica do nosso .p

DEFINE TEMP-TABLE tt-profissao NO-UNDO
FIELD cod\_profissao AS CHAR
FIELD nome\_profissao AS CHAR.

PROCEDURE pi-profissao:
DEFINE OUTPUT PARAM TABLE FOR tt-profissao.

```
/*************************************************************
*************************** LOGICA ***************************
*************************************************************/

FOR EACH escc_profissao NO-LOCK:
    CREATE tt-profissao.
    BUFFER-COPY escc_profissao TO tt-profissao.
END.

RETURN "OK".
```

END PROCEDURE.

## [](#p-2036-return-ok-2)RETURN “OK”.

Como poderia passar o parâmetro dentro do argumento 3 e retornar o cadastro que tenho no Datasul?

---

## Resposta #1

**Romulo Pereira** (@romuloccomp) — 03/11/2021, 17:25

Gilmar, blz?
Você sabe que o ExecBO foi substituído pelo THF? E ele tem um falhar sinistra de segurança.
Enfim, no seu teste, tente colocar o arg3 com: xsi:nil=“true”, e deixe o nó vázio.

---
