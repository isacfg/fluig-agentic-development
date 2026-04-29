# JSON.stringify retornando erro no servicetask

> **Fonte:** [https://fluiggers.com.br/t/json-stringify-retornando-erro-no-servicetask/1603](https://fluiggers.com.br/t/json-stringify-retornando-erro-no-servicetask/1603)
> **Categoria:** BPM
> **Tags:** `processo`, `bpm`, `dataset`
> **Criado em:** 25/01/2023, 15:50
> **Visualizações:** 340 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Leticia Ingrid** (@Leticia_Ingrid) — 25/01/2023, 15:50

Boa tarde Pessoal!

Estou tentando realizar a gravação de um lançamento no RM através de uma servicetask no fluig e ao passar um objeto para string utilizando o JSON.stringify o fluig me gera o seguinte erro no log Tentativa: 1 - Erro SyntaxError: Empty JSON string.

O objeto é retornado assim:
{“CODCOLIGADA”:“2”,“IDMOV”:“1928529”,“TMOVCOMPL”:\[{“CODCOLIGADA”:“2”,“IDMOV”:“1928529”,“SOLICITANTE”:“Kenia Souza”,“DATASOLICFLUIG”:“24/01/2023”}\]}

quando deveria ser retornado assim:
‘{“CODCOLIGADA”:“2”,“IDMOV”:“1928529”,“TMOVCOMPL”:\[{“CODCOLIGADA”:“2”,“IDMOV”:“1928529”,“SOLICITANTE”:“Kenia Souza”,“DATASOLICFLUIG”:“24/01/2023”}\]}’

Poderiam me ajudar? segue o código que estou utilizando
var ordem = {
CODCOLIGADA : new String(hAPI.getCardValue(“txtCodColigada”)),
IDMOV: new String(hAPI.getCardValue(“IDMOV”)),
TMOVCOMPL: \[{
CODCOLIGADA: new String(hAPI.getCardValue(“txtCodColigada”)),
IDMOV: new String(hAPI.getCardValue(“IDMOV”)),
SOLICITANTE: new String(hAPI.getCardValue(“cpSolicitante”)),
DATASOLICFLUIG: new String(hAPI.getCardValue(“cpDataAbertura”))
}\],
}

```
log.info("retorna objeto"+ JSON.stringify(ordem));
            // cria array para enviar para o DataSet
            infoOrdem = new Array(ordem.CODCOLIGADA, 'MOVMOVIMENTOTBCDATA', [JSON.stringify(ordem)]);
```

---
