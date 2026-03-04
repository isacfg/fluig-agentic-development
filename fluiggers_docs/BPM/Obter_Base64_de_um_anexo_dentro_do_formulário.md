# Obter Base64 de um anexo dentro do formulário

> **Fonte:** [https://fluiggers.com.br/t/obter-base64-de-um-anexo-dentro-do-formulario/220](https://fluiggers.com.br/t/obter-base64-de-um-anexo-dentro-do-formulario/220)
> **Categoria:** BPM
> **Tags:** `form`
> **Criado em:** 26/03/2021, 11:25
> **Visualizações:** 1203 | **Likes:** 3 | **Respostas:** 0

---

## Pergunta original

**Roberto Ramos Redondo Junior** (@juniorredondo) — 26/03/2021, 11:25

Bom dia senhores

A minha situação é a seguinte, preciso obter o base64 de um anexo da solicitação para fazer uma chamada rest. Porem o problema é que o usuário ira anexar o arquivo pela chamada do metodo showcamera e fazer a chamada rest na mesma atividade, portanto não consigo utilizar os scripts de processo.

Alguem teria uma forma de fazer isso?

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 26/03/2021, 12:05 | ❤️ 2

Não sei como o showcamera funciona pra indicar que o anexo foi adicionado pra então poder recuperar esse anexo (na verdade ainda não trabalhei com eventos envolvendo os anexos).

Mas um jeito simples de pegar o base64 de um arquivo no JS seria o seguinte.

Pegar a URL de download do arquivo com o endpoint [/2.0/documents/getDownloadURL/{documentId}](https://api.fluig.com/old/resource_DocumentRest.html#resource_DocumentRest_getDownloadURL_GET)

De posse da URL você consegue o Base64 assim:

```javascript
fetch(urlDoArquivo)
.then(response => response.blob())
.then(blob => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);

    reader.onloadend = function() {
        // reader.result é o base64
        console.log(reader.result);
    }
})
```

Caso você consiga pegar diretamente o arquivo no navegador, após adicionar o anexo, você nem precisaria pegar a URL, pois bastaria utilizar o FileReader direto nesse arquivo.

```javascript
const attachment = document.querySelector('input[type=file]').files[0];
const reader = new FileReader();

reader.readAsDataURL(attachment);

reader.onloadend = function() {
    // reader.result é o base64
    console.log(reader.result);
}
```

---

## Resposta #2

**Flaviane Rodrigues** (@flavianetania) — 27/09/2023, 21:23 | ❤️ 1

Obrigado pessoal por manter a comunidade ativa. Top dms o conteúdo.

---
