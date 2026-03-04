# Download simultâneo de arquivos

> **Fonte:** [https://fluiggers.com.br/t/download-simultaneo-de-arquivos/508](https://fluiggers.com.br/t/download-simultaneo-de-arquivos/508)
> **Categoria:** API`s Fluig
> **Criado em:** 10/06/2021, 10:31
> **Visualizações:** 756 | **Likes:** 1 | **Respostas:** 1

---

## Pergunta original

**Marcella Tsangos** (@marcella_tsangos) — 10/06/2021, 10:31

Pessoal, consumo a API da vertsign para realizar o download de arquivos zipados.
Acontece que ao ter +1 arquivo, ela só baixa o último.
Alguém saberia o que modificar para fazer o download de todos os arquivos?

```auto
function getDownloadZIP() {
  let arrChave = returnChave() // ['123', '456']

  arrChave.forEach(chave => {
    let params = {
      "includeOriginal": "True",
      "includeManifest": "True",
      "zipped": "True",
    }

    $.ajax({
      method: "GET",
      url: `https://api-sbx.portaldeassinaturas.com.br/api/v2/document/package?key=${chave}&` + $.param(params),
      headers: {
        "token": "xxxxxxxxxxxxxxxxxxxxxxxxx"
      },
      async: false,
      error: function (x, e) {
        console.log('error')
      },

      success: function (data) {
        console.log('sucess')

        let base64 = data.bytes
        let name = data.name
        let link = document.querySelector('#linkDownloadZIP')
        link.setAttribute('href', 'data:text/plain;base64,' + base64)
        link.setAttribute('download', name)
      }
    })
  })
}
```

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Romulo Pereira** (@romuloccomp) — 11/06/2021, 11:12

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/marcella_tsangos/48/74_2.png) marcella\_tsangos:
>
> > `document.querySelector('#linkDownloadZIP')`

Marcela, o trecho abaixo vai ficar com o conteudo do utltimo apenas:

```javascript
let link = document.querySelector('#linkDownloadZIP')
link.setAttribute('href', 'data:text/plain;base64,' + base64)
```

Se quiser manter esse código, considere ter mais de um botão.

No seu lugar, eu colocaria o download para ser feito no click do botão, chamando uma função que faz os downloads.

Algo assim:

```javascript
$('#linkDownloadZIP').click(function(e) {
    e.preventDefault();
    urls = getURLsDownload(); //busca a url ou conteudo
    urls.forEach(url => {
      window.open(url);
    }
});
```

---

## Resposta #2

**Marcella Tsangos** (@marcella_tsangos) — 14/06/2021, 09:45

Eu tentei dessa forma, mas acaba abrindo página em branco e não faz o download. Eu recebo base64 de um zip.

`window.open('data:text/plain;base64,' + url);`

---

## Resposta #3

**Marcella Tsangos** (@marcella_tsangos) — 14/06/2021, 10:04 | ❤️ 1

Oi Rômulo, consegui da seguinte forma:

```auto
function getDownloadZIP() {
  $('#linkDownloadZIP').click(function (e) {
    e.preventDefault();
    urls = getURLsDownload(); //busca a url ou conteudo

    urls.forEach(url => {
      var link = document.createElement('a');
      link.href = 'data:text/plain;base64,' + url;
      link.download = 'test.zip'
      link.click();
    })
  });
}
```

Obrigada pela ajuda!

---

## Resposta #4

**system** (@system) — 15/06/2021, 02:05

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
