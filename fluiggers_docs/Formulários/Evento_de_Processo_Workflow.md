# Evento de Processo Workflow

> **Fonte:** [https://fluiggers.com.br/t/evento-de-processo-workflow/3455](https://fluiggers.com.br/t/evento-de-processo-workflow/3455)
> **Categoria:** Formulários
> **Tags:** `processo`, `dataset`
> **Criado em:** 01/10/2025, 15:33
> **Visualizações:** 30 | **Likes:** 2 | **Respostas:** 0

---

## Pergunta original

**Henrique Maia Cardosa** (@Henrique_Maia_Cardos) — 01/10/2025, 15:33

Boa tarde,
Estou fazendo um formulário que necessita da seguinte regra:

Impedir que o usuário inicie um novo fluxo caso o último fluxo esteja em aberto há mais de 60 dias.
Exibir mensagem de bloqueio informando que é necessário encerrar o fluxo anterior antes de iniciar um novo.

Então, pra isso eu estou utilizando os eventos de processos e um dataset que traz a informações de todos os chamados que estão abertos a mais de 60 dias, estou tentando com o: beforeStateLeave, tentei com outros mas eles não funcionam de forma alguma, abaixo segue o código que estou usando:

```auto
function beforeStateLeave(sequenceId) {
    if (sequenceId == 0 || sequenceId == 4) {
        var matricula = getValue("WKUser");
        var tabela = "ML001424";

        var c1 = DatasetFactory.createConstraint("matricula", matricula, matricula, ConstraintType.MUST);
        var c2 = DatasetFactory.createConstraint("tabela", tabela, tabela, ConstraintType.MUST);
        var ds = DatasetFactory.getDataset("DS_chamadosAberto", null, [c1, c2], null);


        if (ds && ds.rowsCount > 0) {
            var msg = "Você possui chamados em aberto há mais de 60 dias:";
            for (var i = 0; i < ds.rowsCount; i++) {
                msg += "- Chamado nº " + ds.getValue(i, "chamado") +
                       ", aberto em " + ds.getValue(i, "dataAbertura") + "\n";
            }
            msg += "\nFinalize o(s) chamado(s) antes de abrir um novo.";
            throw msg;
        }
    }
}
```

Desde já agradeço.

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Marco Comassetto** (@marcommas) — 01/10/2025, 21:47 | ❤️ 2

Nesse caso, você pode utilizar o validateForm, no formulário mesmo, não vejo motivo para travar o processo via script de workflow.

Mas se você quiser continuar com a ideia de travar via workflow no processo, o beforeTaskSave deve te atender.
[https://tdn.totvs.com/display/public/fluig/Eventos+de+Processos#EventosdeProcessos-beforeTaskSave](https://tdn.totvs.com/display/public/fluig/Eventos+de+Processos#EventosdeProcessos-beforeTaskSave)

---
