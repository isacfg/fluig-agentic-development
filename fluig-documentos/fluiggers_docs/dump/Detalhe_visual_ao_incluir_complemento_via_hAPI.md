# Detalhe visual ao incluir complemento via hAPI

> **Fonte:** [https://fluiggers.com.br/t/detalhe-visual-ao-incluir-complemento-via-hapi/543](https://fluiggers.com.br/t/detalhe-visual-ao-incluir-complemento-via-hapi/543)
> **Categoria:** BPM
> **Criado em:** 30/06/2021, 13:43
> **Visualizações:** 1216 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Daniel ** (@daniel_fmartins) — 30/06/2021, 13:43

Galera,

estou adicionando um complemento no processo com hAPI.

porém tem um detalhe que não consegui resolver:

queria quebrar linhas… não sei se isso é possível.

```auto
function afterStateEntry(sequenceId){

    if (sequenceId == 18) {

        var atividadeAtual = getValue("WKNumState");

        var proximaAtividade = getValue("WKNextState");

        var usuario = getValue('WKUser'); //usuário logado

        var numSolicitacao = getValue("WKNumProces");

        var complemento = 'Prazo para início: ' + hAPI.getCardValue("parecer_prazo_inicio");

        complemento += 'Resumo: ' + hAPI.getCardValue("parecer_resumo") + '\r\n';

        complemento += 'Objetivos: ' + hAPI.getCardValue("parecer_objetivos") + '\r\n';

        hAPI.setTaskComments(usuario, numSolicitacao, 0, complemento);

    }

}
```

\`
A forma que fica:

![image](https://fluiggers.com.br/uploads/default/original/1X/b7f8a25fe180c3a95f10900ff247a361d03a625d.png)

No caso, onde tem ‘\\r\\n’ no código seria o comando para quebrar a linha.

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 30/06/2021, 15:24

Eu percebi que ele salva como HTML, então passei a colocar os comentários formatados em HTML, usando `<p></p>` para parágrafos e só um `<br>` para quebra de linha.

Tenho uma situação na qual o usuário informa o motivo de devolver a atividade e precisei gravar isso como comentário para ficar registrado (já que no futuro ele pode devolver novamente e mudar o motivo) e fiz isso:

```javascript
hAPI.setTaskComments(
        getValue("WKUser"),
        getValue("WKNumProces"),
        0,
        "<p>Justificativa da Devolução:</p><p>" + feedback.replace("\n", "<br>") + "</p>"
    );
```

---

## Resposta #2

**system** (@system) — 01/07/2021, 09:35

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
