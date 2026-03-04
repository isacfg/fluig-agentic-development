# Carregando documento do Form para uma pasta no GED (ECM)

> **Fonte:** [https://fluiggers.com.br/t/carregando-documento-do-form-para-uma-pasta-no-ged-ecm/3260](https://fluiggers.com.br/t/carregando-documento-do-form-para-uma-pasta-no-ged-ecm/3260)
> **Categoria:** ECM / GED
> **Criado em:** 25/04/2025, 16:30
> **Visualizações:** 64 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Iago** (@iago.oliveira) — 25/04/2025, 16:30

Olá pessoal. Estou tentando utilizar uma API para que em um formulário de um processo, o usuário possa anexar o arquivo em uma pasta no GED. Preciso publicar esse arquivo antes do usuário enviar a solicitação pois irei usar o arquivo publicado no GED para carregar uma “cotação” dos itens desse arquivo. Porém, ao enviar, no console apresenta esse erro: 500 (Internal Server Error)

![image](https://fluiggers.com.br/uploads/default/original/2X/c/c9e1e0d277b95f0c38ac422f4e2028cfcd90281f.png)

A pasta está com permissão para todos.

html:

```auto
<h2>Upload para Pasta no Fluig</h2>
            <div class="form-group">
                <label for="fileDesc">Descrição do Arquivo</label>
                <input type="text" id="fileDesc" name="fileDesc" class="form-control" placeholder="Informe a descrição">
            </div>
            <div class="form-group">
                <label for="fileInput">Escolha o Arquivo</label>
                <input type="file" id="fileInput" name="fileInput" class="form-control">
            </div>
            <button class="btn btn-primary" onclick="enviarArquivo()">Enviar</button>
```

JS:

```javascript
function enviarArquivo() {
            var fileInput = document.getElementById("fileInput");
            var description = document.getElementById("fileDesc").value;
            var parentFolderId = 7043;

            var file = fileInput.files[0];

            if (!file) {
                FLUIGC.toast({ title: 'Erro', message: 'Selecione um arquivo.', type: 'danger' });
                return;
            }

            var formData = new FormData();
            formData.append("description", description);
            formData.append("parentId", parentFolderId);
            formData.append("attachments", file);
            formData.append("documentType", "1"); // Documento interno
            formData.append("privateDocument", "false");

            $.ajax({
                url: "/api/public/ecm/document/createDocument",
//            	url: '/ecm/upload',
                type: "POST",
                data: formData,
                contentType: false,
                processData: false,
                success: function (data) {
                    FLUIGC.toast({ title: 'Sucesso', message: 'Arquivo enviado com sucesso!', type: 'success' });
                    console.log("Documento criado:", data);
                },
                error: function (xhr, status, error) {
                    console.error("Erro ao enviar:", xhr.responseText); // Detalha a resposta do erro do servidor
                    FLUIGC.toast({ title: 'Erro', message: 'Falha ao enviar o arquivo.', type: 'danger' });
                }
            });
        }
```

Até vi alguns tópcos aqui no fórum mas ainda não consegui chegar na solução. Alguém poderia me ajudar?

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 30/04/2025, 11:48

Nessa nova API ainda não tentei enviar arquivo. Aqui acabei fazendo na antiga e nela continua até hoje, hehehe.

[gist.github.com](https://gist.github.com/brunogasparetto/b8f48535c1a0d43a6c6bc418acc22684)

#### [https://gist.github.com/brunogasparetto/b8f48535c1a0d43a6c6bc418acc22684](https://gist.github.com/brunogasparetto/b8f48535c1a0d43a6c6bc418acc22684)

##### criar\_documento\_fluig.js

```JavaScript
// Foram usadas as bibliotecas blob-stream e pdfkit

async function generatePdf() {
    const usuario = "login",
          senha = "senha",
          matricula_usuario = 'admin',
          pdf = new PDFDocument(),
          stream = pdf.pipe(blobStream()),
          fileName = 'Nome_Do_Arquivo.pdf',
          folderId = await findOrCreateFolderId("nova_pasta");
```
Este arquivo está truncado. [exibir original](https://gist.github.com/brunogasparetto/b8f48535c1a0d43a6c6bc418acc22684)

---
