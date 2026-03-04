# Pesquisar e criar pasta no GED e salvar anexo

> **Fonte:** [https://fluiggers.com.br/t/pesquisar-e-criar-pasta-no-ged-e-salvar-anexo/1208](https://fluiggers.com.br/t/pesquisar-e-criar-pasta-no-ged-e-salvar-anexo/1208)
> **Categoria:** BPM
> **Tags:** `form`, `bpm`, `ecm`, `ged`, `anexo`
> **Criado em:** 03/08/2022, 10:38
> **Visualizações:** 808 | **Likes:** 2 | **Respostas:** 0

---

## Pergunta original

**Victor Castro** (@victorcastro) — 03/08/2022, 10:38 | ❤️ 1

Estou com uma situação onde eu tenho um campo ID no formulário. Então, preciso primeiro checar se já existe no GED uma pasta nomeada com esse ID (em um diretório específico, por exemplo, **raiz/compras/movimentos**). Se não existir, criar a pasta dentro desse diretório. Se existir, salvar os arquivos em anexo dentro dessa pasta ID.

Alguém tem algum exemplo de como eu posso fazer isso?

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Daniel Cabral Santos** (@daniel.cabral) — 04/08/2022, 09:04 | ❤️ 1

Resposta do mestre [@Jonathan.Albuquerque](/u/jonathan.albuquerque) no grupo do skype, para registro aqui:

```auto
$.ajax({
            method: "GET",
            url: urlAPI + "/api/public/ecm/document/listDocument/" + folderId + "?&limit=9999",
            contentType: "application/json",
            data: {},
            async: false,
            success: function(result) {
                createFolder(result.content, fileName)
            },
            beforeSend: function() {},
            error: function(x, e) {}
        });

        function createFolder(content, fileName) {
            var contractType = $("#tipo").val()
            for (var i = 0; i < content.length; i++) {
                if (content[i].description == contractType) {
                    folder = true
                    folderId = content[i].id
                    $("#folderId").val(folderId);
                    break;
                }
            }

            if (!folder) {
                var dados = {
                    "description": contractType,
                    "parentId": folderId,
                };

                $.ajax({
                    url: urlAPI + '/api/public/ecm/document/createFolder/',
                    async: false,
                    contentType: 'application/json;charset=utf-8',
                    dataType: 'json',
                    method: 'POST',
                    data: JSON.stringify(dados),

                    success: function(data) {
                        folderId = data.content.id
                        $("#folderId").val(folderId);
                    },

                    error: function(x, e, s) {

                    }
                });
            }
        }
```

---
