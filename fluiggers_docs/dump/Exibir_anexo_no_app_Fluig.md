# Exibir anexo no app Fluig

> **Fonte:** [https://fluiggers.com.br/t/exibir-anexo-no-app-fluig/1700](https://fluiggers.com.br/t/exibir-anexo-no-app-fluig/1700)
> **Categoria:** Widgets
> **Tags:** `anexo`, `modal`
> **Criado em:** 09/03/2023, 16:33
> **Visualizações:** 521 | **Likes:** 4 | **Respostas:** 0

---

## Pergunta original

**Marcella Tsangos** (@marcella_tsangos) — 09/03/2023, 16:33 | ❤️ 1

Preciso exibir um anexo no modal em uma Widget.
Pela web funciona, mas quando tento ver o anexo pelo app, ele não é exibido.
Alguém consegue ajudar?

Parte do código:

```auto
var base64 = btoa(doc.output());
  var pdfUrl = "data:application/pdf;base64," + base64;

  var html = "<div id='divModalPDF'>"
  html += "     <iframe src='" + pdfUrl + "'  width='100%' height='100%' />"
  html += "   </div>"

  if (html) {
    this.myModal = FLUIGC.modal({
      title: 'Document',
      content: html,
      id: 'modalAFFSMobile',
      size: 'full',
      actions: [{
        'label': 'Close',
        'autoClose': true
      }]
    }, function (err, data) {
      if (err) {
        console.error(err)
      } else {

        $('#modalAFFSMobile').keyup(event => {
          if (event.key == 'Escape') {
            this.myModal.remove()
          }
        })
      }
    })
  }
```

---

## Resposta #1

**Afonso Uliana Neto** (@Afonso) — 23/04/2023, 22:56 | ❤️ 1

Boa Noite. Não sei se desta forma vai funcionar porque o aplicativo esta rodando em android ou IOS. Voce ja tentou abrir um arquivo PDF que esteja publicado no GED ?

var url = WCMAPI.getServerURL()+“/portal/p/1/ecmnavigation?app\_ecm\_navigation\_doc=numIDDOCTO”;
window.open(url, ‘\_blank’);

---

## Resposta #2 ✅ RESPOSTA ACEITA

**Marcella Tsangos** (@marcella_tsangos) — 24/04/2023, 12:40 | ❤️ 2

Consegui como solução:

```auto
function initDocumentView(docId) {
  window.location.href = "fluig://" + WCMAPI.getServerURL() + WCMAPI.getProtectedContextPath() + "/" + WCMAPI.getTenantCode() + "/ecmnavigation?app_ecm_navigation_doc=" + docId
}
```

---
