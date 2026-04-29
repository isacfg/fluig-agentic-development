# Incluir comentário no processo via hAPI

> **Fonte:** [https://fluiggers.com.br/t/incluir-comentario-no-processo-via-hapi/160](https://fluiggers.com.br/t/incluir-comentario-no-processo-via-hapi/160)
> **Categoria:** BPM
> **Tags:** `bpm`, `hapi`, `complemento`, `comentario`
> **Criado em:** 17/03/2021, 15:41
> **Visualizações:** 26737 | **Likes:** 3 | **Respostas:** 0

---

## Pergunta original

**Daniel Cabral Santos** (@daniel.cabral) — 17/03/2021, 15:41 | ❤️ 3

```auto
var atividadeAtual = getValue("WKNumState");
    var proximaAtividade = getValue("WKNextState");
    var usuario = getValue('WKUser'); //usuário logado
    var numSolicitacao = getValue("WKNumProces");

    log.info("atividade atual: " + atividadeAtual);
    log.info("proxima atividade: " + proximaAtividade);

    if ((atividadeAtual == PARECER_COMPLEMENTAR && proximaAtividade == INSTRUMENTALIZACAO) ||
        (atividadeAtual == PARECER_COMPLEMENTAR_2 && proximaAtividade == ANALISE_PRELIMINAR)) {

        log.info("Gravando Parecer Complementar nos complementos do processo...")
        var parecerComp = hAPI.getCardValue("txtParecerComp"); // obtém o parecer digitado
        log.info("Parecer complementar informado: " + parecerComp);
        var complemento = "Parecer Complementar: " + parecerComp // concatena com o prefixo
        hAPI.setTaskComments(usuario, numSolicitacao, 0, complemento);
        hAPI.setCardValue("txtParecerComp", ""); // limpa o campo de parecer complementar após o envio
    }


}
```

---
