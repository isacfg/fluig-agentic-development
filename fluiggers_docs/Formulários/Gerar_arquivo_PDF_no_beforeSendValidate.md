# Gerar arquivo PDF no beforeSendValidate

> **Fonte:** [https://fluiggers.com.br/t/gerar-arquivo-pdf-no-beforesendvalidate/3352](https://fluiggers.com.br/t/gerar-arquivo-pdf-no-beforesendvalidate/3352)
> **Categoria:** Formulários
> **Tags:** `form`
> **Criado em:** 23/07/2025, 14:50
> **Visualizações:** 46 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Jose William Dos Anjos Meneses** (@Jose_William_Dos_Anj) — 23/07/2025, 14:50

Estou gerando um arquivo .pdf com imagens no beforeSendValidate usando a lib jsPDF, mas estou tendo problemas de acessar as imagens .png que estão na mesma pasta do script e do formuário.

Preciso acessar essas imagens no beforeSendValidate para gerar o base64 e usar na criação do arquivo.

Estou passando o caminho relativo da imagem mas o script não “enxerga” a imagem. Sabem como posso fazer isso?

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 28/07/2025, 10:25

Quase sempre essas bibliotecas precisam do endereço completo pro recurso.

No Fluig é meio complicado pegar a URL.

Fiz um teste e consegui acessar os recursos dessa forma. Testa se aí funciona também.

```javascript
const formBaseURL = location.href.replace(/([^?]+).*/, '$1');

// Quero o form.js
const formJs = formBaseURL + 'form.js';
```

---
