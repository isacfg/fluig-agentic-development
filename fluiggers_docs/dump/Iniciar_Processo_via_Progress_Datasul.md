# Iniciar Processo via Progress Datasul

> **Fonte:** [https://fluiggers.com.br/t/iniciar-processo-via-progress-datasul/2563](https://fluiggers.com.br/t/iniciar-processo-via-progress-datasul/2563)
> **Categoria:** API`s Fluig
> **Criado em:** 06/02/2024, 10:55
> **Visualizações:** 236 | **Likes:** 1 | **Respostas:** 1

---

## Pergunta original

**Bruno Henrique** (@Bruno_Henrique) — 06/02/2024, 10:55

Bom dia pessoal, estou tentando usar a API de iniciar processo através de um programa do Datasul (progress), porém não sei como fazer a parte da autenticação OAuth 1.0 na linguagem progress, todo o resto ja esta OK, falta só a autenticação. Alguém já fez algo desse tipo?

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Afonso Uliana Neto** (@Afonso) — 23/04/2024, 20:06

Vou te passar um exemplo para voce chamar um dataset do Fluig, o conceito é o mesmo só que ao inves de instanciar WS ECMDatasetService voce vai instanciar o ECMWorkflowEngineService chamado o metodo startProcess

&GLOBAL-DEFINE empresaIntegrador 1
&GLOBAL-DEFINE usuarioIntegrador adm
&GLOBAL-DEFINE passwordIntegrador 123

RUN criaObra(INPUT tt-dados.numSeq,
INPUT i-vendedor).

RUN limpaWS.

PROCEDURE instanciaWS:

```
DEFINE OUTPUT PARAMETER pConnect AS LOGICAL     NO-UNDO.
DEFINE OUTPUT PARAMETER pErro    AS CHARACTER   NO-UNDO.

DEFINE VARIABLE lConnect AS LOGICAL     NO-UNDO.

CREATE SERVER hWSCotacao.

lConnect = hWSCotacao:CONNECT("-WSDL 'http://192.168.1.41:8080/webdesk/ECMDatasetService?wsdl'") NO-ERROR.

IF  NOT lConnect THEN DO:
    ASSIGN pConnect = NO
           pErro    = ERROR-STATUS:GET-MESSAGE(1).
    RETURN.
END.

RUN DatasetService SET hDSCotacao ON hWSCotacao.

ASSIGN iEmpresa = {&empresaIntegrador}
       cUsuario = '{&usuarioIntegrador}'
       cSenha   = '{&passwordIntegrador}'
       pConnect = YES.
```

END PROCEDURE.

PROCEDURE limpaWS:

```
IF  VALID-HANDLE(hDSCotacao) THEN DELETE OBJECT hDSCotacao.
IF  VALID-HANDLE(hWSCotacao) THEN DO:
    hWSCotacao:DISCONNECT().
    DELETE OBJECT hWSCotacao.
END.
```

END PROCEDURE.

PROCEDURE criaObra:
DEFINE INPUT PARAMETER pNumSeq AS CHARACTER NO-UNDO.
DEFINE INPUT PARAMETER i-vendedor AS INTEGER NO-UNDO.

```
DEFINE VARIABLE lConnect    AS LOGICAL     NO-UNDO.
DEFINE VARIABLE cErro       AS CHARACTER   NO-UNDO.
DEFINE VARIABLE cRetorno    AS LONGCHAR    NO-UNDO.
DEFINE VARIABLE cConstraint AS CHARACTER   NO-UNDO.
DEFINE VARIABLE obsAux      AS CHARACTER   NO-UNDO.

IF  NOT VALID-HANDLE(hWSCotacao) THEN DO:
    RUN instanciaWS (OUTPUT lConnect,
                     OUTPUT pErro).
    IF  NOT lConnect THEN RETURN pErro.
END.

FIND FIRST bf-tt-dados NO-LOCK
     WHERE bf-tt-dados.numSeq = pNumSeq NO-ERROR.
IF AVAIL bf-tt-dados THEN DO:

      ASSIGN cConstraint = "<constraints>".

      RUN piContraint(INPUT-OUTPUT cConstraint, "numSeq"         , bf-tt-dados.numSeq         , 1).
      RUN piContraint(INPUT-OUTPUT cConstraint, "numObra"        , bf-tt-dados.numObra        , 1).
      RUN piContraint(INPUT-OUTPUT cConstraint, "dataSolic"      , bf-tt-dados.dataSolic      , 2).
      RUN piContraint(INPUT-OUTPUT cConstraint, "valorVenda"     , bf-tt-dados.valorVenda     , 3).

      ASSIGN cConstraint = cConstraint + "</constraints>".

      RUN getDataset IN hDSCotacao (INPUT  iEmpresa,
                                    INPUT  cUsuario,
                                    INPUT  cSenha,
                                    INPUT  "Ds_CriaOrdemServicoViaWS",
                                    INPUT  "<fields></fields>",
                                    INPUT  cConstraint,
                                    INPUT  "<order></order>",
                                    OUTPUT cRetorno).

END.

RETURN "ok".
```

END PROCEDURE.

PROCEDURE piContraint:

DEFINE INPUT-OUTPUT PARAMETER cContraint AS CHARACTER NO-UNDO.
DEFINE INPUT PARAMETER nome AS CHARACTER NO-UNDO.
DEFINE INPUT PARAMETER valor AS CHARACTER NO-UNDO.
DEFINE INPUT PARAMETER tipo AS INTEGER NO-UNDO.

DEFINE VARIABLE d-aux AS DATE NO-UNDO.

IF tipo = 2 THEN DO:
IF valor = “” OR valor = “/ /” THEN
ASSIGN valor = “NULL”.

```
IF valor <> "NULL" THEN DO:
      ASSIGN d-aux = DATE(valor) NO-ERROR.
      IF ERROR-STATUS:ERROR = YES THEN
         ASSIGN valor = "NULL".
      ELSE
         ASSIGN valor = "'" + STRING(YEAR(d-aux)) + "-" + STRING(MONTH(d-aux)) + "-" + STRING(DAY(d-aux)) + "'".
   END.
```

END.

IF tipo = 3 THEN DO:
ASSIGN valor = REPLACE(valor,“.”,“”).
ASSIGN valor = REPLACE(valor,“,”,“.”).
END.

ASSIGN cContraint = cContraint + " “+
" MUST”+
" " + nome + “”+
" " + valor + “”+
" " + valor + “”+
" ".
END.

---

## Resposta #2

**Bruno Henrique** (@Bruno_Henrique) — 16/05/2024, 14:43 | ❤️ 1

Muito obrigado meu amigo, deu certinho… Ja estava perdendo as esperanças pra conseguir fazer isso.

---
