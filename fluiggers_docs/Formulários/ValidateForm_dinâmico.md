# ValidateForm dinâmico

> **Fonte:** [https://fluiggers.com.br/t/validateform-dinamico/670](https://fluiggers.com.br/t/validateform-dinamico/670)
> **Categoria:** Formulários
> **Criado em:** 22/09/2021, 10:39
> **Visualizações:** 1319 | **Likes:** 6 | **Respostas:** 2

---

## Pergunta original

**Luan Alves** (@akaluan) — 22/09/2021, 10:39

Estou fazendo o curso do fluig pelo fluig academy e me deparei com um código c uma quantidade grande de linhas de códigos e IF’s.
Tentei mudar esse algoritmo pra algo mais dinâmico, porém quando acesso o formulário ele fica todo em branco!
Algoritmo usado: ![image](https://fluiggers.com.br/uploads/default/original/1X/961cdcae33e9395966e012454de410ba99cd4e27.png)

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 22/09/2021, 11:16 | ❤️ 1

Todos os eventos de formulário que ficam na pasta `events` são executados no servidor, não no navegador.

Para serem executados no servidor esse código JS é convertido para Java e o sistema que faz isso (Rhino) não possui suporte para o ES 6. Acredito que no máximo o suporte é até ES 4.

Então nesses eventos você não pode usar `let`, interpolação de strings com \`, arrow functions etc.

Precisa fazer o seu código JS o mais simples possível nas funcionalidades pensando que ele será convertido para Java.

A parte “boa” disso é que você tem acesso a várias funcionalidades de Java no processo, mas em alguns casos é obrigatório usar essas funcionalidades e pra quem não tem familiaridade com a linguagem pode sofrer um pouco mais.

---

## Resposta #2 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 22/09/2021, 11:50 | ❤️ 5

[@akaluan](/u/akaluan) , mas isso não impede de agilizar agilizar algumas coisas. Só precisa se preocupar em como fazer isso.

Por exemplo, tenho uma validação mais ou menos assim:

```javascript
/**
 * Validação dos dados do formulário
 *
 * @param {FormController} form
 * @throws {string}
 */
function validateForm(form) {
    var requiredFields = [
        {
              field: "descricaoObjeto",
              message: "Preencha a Descrição do Objeto."
        },
        {
            field: "parecerTecnico",
            message: "Preencha o Parecer Técnico / Justificativa"
        },
        {
            field: "fornecedorNomeRazaoSocial",
            message: "Preencha o Nome / Razão Social do Fornecedor."
        },
        {
            field: "fornecedorCnpj",
            message: "Preencha o CNPJ do Fornecedor"
        }
    ];

    for (var i = 0; i < requiredFields.length; ++i) {
        if (valueIsEmpty(form.getValue(requiredFields[i].field))) {
            throw requiredFields[i].message;
        }
    }
}

/**
 * Verifica se o valor é vazio
 *
 * @param {string} value
 * @returns {boolean}
 */
 function valueIsEmpty(value) {
    return value == null || value == "";
}
```

---

## Resposta #3

**Luan Alves** (@akaluan) — 22/09/2021, 11:54

Interessante! Obrigado pelo esclarecimento, Bruno!

---

## Resposta #4

**system** (@system) — 23/09/2021, 03:55

Este tópico foi fechado automaticamente 16 horas depois da última resposta. Novas respostas não são mais permitidas.

---
