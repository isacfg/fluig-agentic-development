# Script para disponibilizar as variáveis direto no form/javascript

> **Fonte:** [https://fluiggers.com.br/t/script-para-disponibilizar-as-variaveis-direto-no-form-javascript/116](https://fluiggers.com.br/t/script-para-disponibilizar-as-variaveis-direto-no-form-javascript/116)
> **Categoria:** BPM
> **Tags:** `java`
> **Criado em:** 15/03/2021, 15:24
> **Visualizações:** 1545 | **Likes:** 12 | **Respostas:** 2

---

## Pergunta original

**Romulo Pereira** (@romuloccomp) — 15/03/2021, 15:24 | ❤️ 10

A ideia desse script é disponibilizar as variaveis de ambiente direto no form, sendo mais fácil criar regras, validações no front-end. Por exemplo, esconder algum campo ou div.
Me ajudou muito.

Coloque no displayFields do form:

```javascript
function displayFields(form,customHTML){

    var formVars = "";
    formVars += 'var vFormMode      = "' + form.getFormMode()        + '"; ';
    formVars += 'var vWKDef         = "' + getValue("WKNumProces")   + '"; ';
    formVars += 'var vWKVersDef     = "' + getValue("WKVersDef")     + '"; ';
    formVars += 'var vWKNumProces   = "' + getValue("WKVersDef")     + '"; ';
    formVars += 'var vWKNumState    = "' + getValue("WKNumState")    + '"; ';
    formVars += 'var vWKUser        = "' + getValue("WKUser")        + '"; ';
    formVars += 'var vWKCompletTask = "' + getValue("WKCompletTask") + '"; ';
    formVars += 'var vWKNextState   = "' + getValue("WKNextState")   + '"; ';
    formVars += 'var vWKMobile      = "' + getValue("WKMobile")      + '"; ';
    customHTML.append('<script>');
    customHTML.append(formVars);
    customHTML.append('</script>');

}
```

---

## Resposta #1

**Delcleciano Junior** (@Delcleciano) — 15/10/2021, 12:14

A função é boa , mas você não colocou um exemplo dentro do display que ocultasse alguma div, seria uma boa se tivesse um exemplo disso

---

## Resposta #2

**Bruno Gasparetto** (@Bruno_Gasparetto) — 15/10/2021, 15:18 | ❤️ 1

Mas no displayFields é só fazer `form.setVisibleById("id da div", false)`.

---

## Resposta #3

**Romulo Pereira** (@romuloccomp) — 15/10/2021, 15:41 | ❤️ 1

A ideia do exemplo é usar as variáveis no front-end.
Exemplo:

```auto
if(vWKNumState < 10){
    $(" id da div ").hide()
}
```

---

## Resposta #4

**Delcleciano Junior** (@Delcleciano) — 15/10/2021, 15:46

Vlw amigos, consegui fazer de uma forma aqui, agradeço pela atenção de vocês

---
