# Obter PDF de dentro do arquivo ZIP

> **Fonte:** [https://fluiggers.com.br/t/obter-pdf-de-dentro-do-arquivo-zip/493](https://fluiggers.com.br/t/obter-pdf-de-dentro-do-arquivo-zip/493)
> **Categoria:** API`s Fluig
> **Tags:** `ged`
> **Criado em:** 02/06/2021, 13:45
> **Visualizações:** 964 | **Likes:** 0 | **Respostas:** 2

---

## Pergunta original

**Marcella Tsangos** (@marcella_tsangos) — 02/06/2021, 13:45

Boa tarde, pessoal.

Existe alguma forma de obter o PDF que está dentro de um arquivo zipado no GED?

Tentei com a API api/public/ecm/document/documentFileWithoutZip, mas ela fez o download do ZIP, eu gostaria de fazer download/exibir apenas o PDF.

Arquivo ZIP no GED

![image](https://fluiggers.com.br/uploads/default/original/1X/7f5f74e1b355d46f9b681dc815cb25aa2e77a9df.png)

PDF dentro do ZIP
![image](https://fluiggers.com.br/uploads/default/original/1X/2cf0385c64edb00d681b2656dcb09f88374b8afd.png)

---

## Resposta #1

**Jonathan Albuquerque** (@Jonathan.Albuquerque) — 02/06/2021, 16:52

Como Vai Marcella, realmente não existe uma maneira ágil de acessar este documento sem ter que baixar o arquivo zip, mas como este é um procedimento padrão criado pela vertsign, acho melhor você acionar o suporte deles e expor a sua necessidade, pois realmente, ao meu ver o acesso ao documento assinado deveria ser disponível a apenas um clique do usuário.

abç

---

## Resposta #2

**Willian Laynes** (@Willian_Laynes) — 02/06/2021, 17:00

Boa tarde Marcella,

Você pode tentar uma biblioteca externa.

[gildas-lormeau.github.io](https://gildas-lormeau.github.io/zip.js/core-api.html#full-example)

### [zip.js - Core API](https://gildas-lormeau.github.io/zip.js/core-api.html#full-example)

Core API of zip.js

Olhe o exemplo “ZipReader” “Read a zip from a Blob/File object” deste link que passei.
Você pode consumir uma API do Fluig que te devolva o Blob e vc utiliza com a biblioteca.

```javascript
// create a BlobReader to read with a ZipReader the zip from a Blob object
const reader = new zip.ZipReader(new zip.BlobReader(blob)); //<< PASSE COMO PARAMETRO AQUI O SEU RETORNO DO FLUIG

// get all entries from the zip
const entries = await reader.getEntries();
if (entries.length) {

  // get first entry content as text by using a TextWriter
  const text = await entries[0].getData(
    // writer
    new zip.TextWriter(),
    // options
    {
      onprogress: (index, max) => {
         // onprogress callback
      }
    }
  );
  // text contains the entry data as a String
  console.log(text);

}

// close the ZipReader
await reader.close();
```

Nunca usei, mas acho que pode funcionar para você.

---

## Resposta #3

**Marcella Tsangos** (@marcella_tsangos) — 04/06/2021, 08:19

Obrigada, Willian. Vou testar.

---

## Resposta #4

**Marcella Tsangos** (@marcella_tsangos) — 04/06/2021, 08:19

Verdade, Jonathan. Vou entrar em contato com eles.

---

## Resposta #5

**Marcella Tsangos** (@marcella_tsangos) — 07/06/2021, 11:24

Quando utilizo a API getDownloadURL/{documentId}, ela retorna apenas o “teste2.pdf”.

Ao utilizar o método listDocumentWithChildren, ele retorna o downloadURL como null.

![Screenshot_7](https://fluiggers.com.br/uploads/default/original/1X/fa009d8a25c9ecedcb15d56a4fcc2b80ab7eebd6.png)

Gostaria de fazer o download total dos arquivos, teria como via API?

---
