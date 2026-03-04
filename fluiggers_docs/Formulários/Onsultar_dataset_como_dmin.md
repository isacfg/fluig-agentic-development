# Onsultar dataset como dmin

> **Fonte:** [https://fluiggers.com.br/t/onsultar-dataset-como-dmin/3386](https://fluiggers.com.br/t/onsultar-dataset-como-dmin/3386)
> **Categoria:** Formulários
> **Criado em:** 22/08/2025, 13:25
> **Visualizações:** 35 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**Daniel Sales** (@Daniel_Sales) — 22/08/2025, 13:25

[@Bruno\_Gasparetto](/u/bruno_gasparetto) lembor de vc comentar de uma tecnica para consultar o dataset como admin. como era mesmo?

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 22/08/2025, 13:33

Alguns datasets, como o de formulários e documentos, permitem personificação.

Nesses casos é só passar uma constraint especial, chamada `userSecurityId` e nela indicar o código do usuário que será personificado (normalmente o admin).

```javascript
DatasetFactory.createConstraint(
    "userSecurityId",
    "admin",
    "admin",
    ConstraintType.MUST
)
```

---

## Resposta #2

**Daniel Sales** (@Daniel_Sales) — 22/08/2025, 13:37

workflowProcess sabe se esse permite?

---
