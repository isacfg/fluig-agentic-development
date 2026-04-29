# Uso de Promise dentro de dataset

> **Fonte:** [https://fluiggers.com.br/t/uso-de-promise-dentro-de-dataset/2777](https://fluiggers.com.br/t/uso-de-promise-dentro-de-dataset/2777)
> **Categoria:** WCM
> **Tags:** `dataset`
> **Criado em:** 08/05/2024, 12:44
> **Visualizações:** 136 | **Likes:** 4 | **Respostas:** 0

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 08/05/2024, 12:44

Prezado, é possível usar ‘Promise’ dentro de datasets?

Codifiquei (um trecho) assim:

```javascript
if (operacao == "5") {
        // DANDO operação 5 provocar procedure
        return new Promise(function(resolve, reject) {
            chamarProcedure(resolve);
        });
    }
```

e no log.info aparece o erro 'ReferenceError: “Promise” is not defined. ’

---

## Resposta #1

**venturelli** (@venturelli) — 08/05/2024, 15:36 | ❤️ 4

Não. O Promise foi introduzido no ecma 6 enquanto as personalizações do Fluig aceitam apenas ecma 5

---
