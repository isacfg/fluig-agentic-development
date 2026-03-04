# Enviar E-mail - Evento de Workflow

> **Fonte:** [https://fluiggers.com.br/t/enviar-e-mail-evento-de-workflow/3533](https://fluiggers.com.br/t/enviar-e-mail-evento-de-workflow/3533)
> **Categoria:** Sem categoria
> **Criado em:** 30/12/2025, 07:50
> **Visualizações:** 27 | **Likes:** 2 | **Respostas:** 0

---

## Pergunta original

**Henrique** (@Henrique_L) — 30/12/2025, 07:50

recentemente precisei criar um afterTaskSave pra disparar um e-mail avisando que uma etapa do Fluig foi concluída. Até aí ok, funcionou normal quando deixei os e-mails chumbados direto no código.

o problema é que agora quero enviar pra um grupo/papel, e da forma que encontrei pra fazer isso, o e-mail simplesmente não chega nos usuários do grupo. Já testei, mas não está funcionando. Alguém tem alguma luz?

```auto
function afterTaskSave(colleagueId, nextSequenceId) {

    if (getValue("WKNumState") != 93) return;

    var enviar = hAPI.getCardValue("enviar_email");
    if (enviar != "1") return;

    var idFluig = getValue("WKNumProces");

    var destinatarios = new java.util.ArrayList();

    var c1 = DatasetFactory.createConstraint(
        "workflowRolePK.roleId",
        "grupo",
        "grupo",
        ConstraintType.MUST
    );

    var dsRole = DatasetFactory.getDataset(
        "workflowColleagueRole",
        null,
        [c1],
        null
    );

    if (dsRole && dsRole.rowsCount > 0) {
        for (var i = 0; i < dsRole.rowsCount; i++) {
            var userId = dsRole.getValue(
                i,
                "workflowColleagueRolePK.colleagueId"
            );
            destinatarios.add(userId);
        }
    }

    if (destinatarios.isEmpty()) return;

    var corpoEmail =
        "ola,<br><br>" +
        " fluig: <b>" +
        idFluig +
        "</b> foi finalizado com sucesso.<br>" +
        "Para visualizar os detalhes, acesse o link abaixo:<br><br>";

    var params = new java.util.HashMap();
    params.put(
        "subject",
        "titulo " + idFluig
    );
    params.put("corpo", corpoEmail);
    params.put(
        "link",
        "" + //aqui vai o link
            idFluig
    );

    notifier.notify(
        "admin",
        params,
        destinatarios,
        "text/html"
    );
}
```

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 30/12/2025, 09:16 | ❤️ 2

Passa os e-mails como destinatário ao invés do colleagueId.

---
