# Visualizar documento desde el formulario de un proceso

> **Fonte:** [https://fluiggers.com.br/t/visualizar-documento-desde-el-formulario-de-un-proceso/274](https://fluiggers.com.br/t/visualizar-documento-desde-el-formulario-de-un-proceso/274)
> **Categoria:** BPM
> **Criado em:** 31/03/2021, 13:09
> **Visualizações:** 674 | **Likes:** 5 | **Respostas:** 3

---

## Pergunta original

**Julio Kriger** (@Julio_Kriger) — 31/03/2021, 13:09

Hola!

Queria como puedo hacer para que desde un formulario de un proceso abrir el visualizador de archivos de Fluig

ECM.navigation.initDocumentView(documentId, version)

Muchas gracias!

---

## Resposta #1

**Vinicius de Moura Silveira** (@vinny.silveira) — 31/03/2021, 14:02 | ❤️ 1

Buenas tardes [@Julio\_Kriger](/u/julio_kriger)!

Desea mostrar un modal para ver un documento, ¿verdad?
Utilizo este fragmento de código para abrir cualquier documento, solo paso la ID y la versión:

```javascript
function openDoc(docId, version) {
    var urlFtl = WCMAPI.serverUR + "/ecm_documentview/documentView.ftl";
    ECM.documentView = {};
    var cfg = {
        url: urlFtl,
        width: 700,
        height: 200,
        maximized: false,
        showbtclose: false,
        title: "Buscando documento...",
        callBack: function () {
            ECM.documentView.getDocument(docId, version);
        },
        customButtons: []
    };
    ECM.documentView.panel = WCMC.panel(cfg);
    $('#ecm-documentview-toolbar').hide(); // Oculta o menu de ações
}
```

¡Espero que te haya ayudado!
Si resolvió su pregunta, marque esta respuesta como la solución, ¡gracias!

---

## Resposta #2

**Julio Kriger** (@Julio_Kriger) — 31/03/2021, 14:10

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/vinny.silveira/48/16_2.png) vinny.silveira:
>
> > `WCMAPI`

Gracias Winni por el script.

Pero que scripts tengo que incluir para que funcione? Me dice que WCMAPI es undefined.

Saludos

---

## Resposta #3

**Vinicius de Moura Silveira** (@vinny.silveira) — 31/03/2021, 14:31

¡Oh sí! Esta función se coloca en el “frontend”, en el script JS de su formulario, o directamente en el HTML de su formulario a través de la etiqueta `<script>`

---

## Resposta #4

**Julio Kriger** (@Julio_Kriger) — 31/03/2021, 15:31

Vinny,

El problema es este: **WCMAPI is not defined**. Lo tengo que importar de algún lugar de fluig a traves de script, similar a

`< script type="text/javascript" src="/webdesk/vcXMLRPC.js" /> < / script >`

pero no se cuál script importar.

Saludos

![image](https://fluiggers.com.br/uploads/default/original/1X/9e46ec3d3bfb3326e7af0912a703dafaafa50f85.png)

---

## Resposta #5 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 31/03/2021, 16:10 | ❤️ 2

No formulário precisa pegar a WCMAPI do parent.

```javascript
parent.WCMAPI.serverURL
```

---

## Resposta #6

**Vinicius de Moura Silveira** (@vinny.silveira) — 31/03/2021, 16:46

¡Hola [@Julio\_Kriger](/u/julio_kriger) !

Cambiar “WCMAPI.serverURL” a “parent.WCMAPI.serverURL” como lo corrigió [@Bruno\_Gasparetto](/u/bruno_gasparetto), gracias [@Bruno\_Gasparetto](/u/bruno_gasparetto)!

---

## Resposta #7

**Julio Kriger** (@Julio_Kriger) — 31/03/2021, 16:49 | ❤️ 2

Lo deje así y funciona perfectamente.

Muchas gracias!

```
function openDoc(docId, version) {
    var urlFtl = parent.WCMAPI.serverUR + "/ecm_documentview/documentView.ftl";
    parent.ECM.documentView = {};
    var cfg = {
        url: urlFtl,
        width: 700,
        height: 200,
        maximized: false,
        showbtclose: false,
        title: "Buscando documento...",
        callBack: function () {
            parent.ECM.documentView.getDocument(docId, version);
        },
        customButtons: []
    };
    parent.ECM.documentView.panel = parent.WCMC.panel(cfg);
    $('#ecm-documentview-toolbar').hide(); // Oculta o menu de ações
}
```

---
