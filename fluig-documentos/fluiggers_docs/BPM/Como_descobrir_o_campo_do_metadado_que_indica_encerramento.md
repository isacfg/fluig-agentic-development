# Como descobrir o campo do metadado que indica encerramento?

> **Fonte:** [https://fluiggers.com.br/t/como-descobrir-o-campo-do-metadado-que-indica-encerramento/983](https://fluiggers.com.br/t/como-descobrir-o-campo-do-metadado-que-indica-encerramento/983)
> **Categoria:** BPM
> **Criado em:** 24/03/2022, 09:18
> **Visualizações:** 1119 | **Likes:** 4 | **Respostas:** 4

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 24/03/2022, 09:18

![image](https://fluiggers.com.br/uploads/default/original/1X/83baa7b90bb89c5247e5312816aae3d5b16abe82.png)

Num dos processos que temos, aparece uma tarja dizendo ‘Finalizada’.

Eu já revirei os campos do dataset ‘document’ e não achei uma indicação de qual campo mostre esse ‘status’ do documento no processo.
Também, tenho um dataset que está associado ao processo, um dataset específico, que também não tem um campo (pelo menos até onde eu pesquisei) que indicasse a condição de encerrado.

Onde eu poderia obter esta informação?

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Marco Comassetto** (@marcommas) — 24/03/2022, 15:58 | ❤️ 2

Fica na tabela PROCES\_WORKFLOW, campo STATUS.

CASE PROCES\_WORKFLOW.STATUS
WHEN 0 THEN ‘Aberto’
WHEN 1 THEN ‘Cancelado’
WHEN 2 THEN ‘Finalizado’
END ‘Status Solicitação’

---

## Resposta #2

**MAURO SIMOES** (@Mautresim) — 24/03/2022, 16:40

Obrigado, [@marcommas](/u/marcommas), achei e vi a tabela.
Uma pergunta adicional: dá para a gente fazer um dataset baseado num serviço que encontre esta tabela?
Eu sempre fiz serviços só em cima de banco de dados externos.

Update: Já vi que pode. Criei um dataset em cima do FLUIGDSRO e a tabela estava lá.

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 24/03/2022, 18:44 | ❤️ 1

[@Mautresim](/u/mautresim) , aí você faz a consulta em SQL já pensando em otimização?

Aqui eu já precisei pegar todas as solicitações que não estavam canceladas e achei bem tranquilo consultando direto no dataset.

```javascript
var ds = DatasetFactory.getDataset(
    "workflowProcess",
    ["workflowProcessPK.processInstanceId", "cardDocumentId", "status"],
    [
        DatasetFactory.createConstraint(
            "processId",
            "Meta_de_Equipe",
            "Meta_de_Equipe",
            ConstraintType.MUST
        ),
        DatasetFactory.createConstraint(
            "startDateProcess",
            "01/01/" + year,
            "01/01/" + (year + 1),
            ConstraintType.MUST
        ),
        DatasetFactory.createConstraint(
            "status",
            1,
            1,
            ConstraintType.MUST_NOT
        )
    ],
    null
);
```

---

## Resposta #4

**MAURO SIMOES** (@Mautresim) — 25/03/2022, 07:12

Caro [@Bruno\_Gasparetto](/u/bruno_gasparetto), minha intenção era somente descobrir quais os processos que ainda não estavam finalizados, mesmo havendo uma consulta pronta pelo menu vertical do Fluig.
Era mais um exercício, uma fuçação nas vísceras da plataforma.

Mas, a cada enxadada uma minhoca, sempre aprendo alguma coisa nova aqui no Fluiggers: nem sabia que havia um Dataset já prontinho, de nome ‘workflowProcess’. Valeu!

---

## Resposta #5

**Bruno Gasparetto** (@Bruno_Gasparetto) — 25/03/2022, 09:29

No Eclipse dá pra visualizar Datasets e nele tem a lista de todos os datasets disponíveis na plataforma + os customizados. Então dá pra ter uma ideia do que cada um faz pelo nome, mas alguns são difíceis de entender, hehe.

---

## Resposta #6

**MAURO SIMOES** (@Mautresim) — 25/03/2022, 09:36 | ❤️ 1

Também acho útil, bastante útil, a visualização e até mesmo a desativação de datasets via Eclipse, [@Bruno\_Gasparetto](/u/bruno_gasparetto) , mas, para procurar, prefiro ir mesmo pelo Painel de Controle/Desenvolvimento/Datasets.

Agora, mesmo tendo esses dois recursos à disposição, não adianta muito se a gente não sabe o nome do dataset que nos fornece a informação do que a gente quer. Esta sempre foi minha dificuldade.

---
