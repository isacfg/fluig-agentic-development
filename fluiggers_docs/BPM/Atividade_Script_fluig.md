# Atividade Script fluig

> **Fonte:** [https://fluiggers.com.br/t/atividade-script-fluig/547](https://fluiggers.com.br/t/atividade-script-fluig/547)
> **Categoria:** BPM
> **Criado em:** 02/07/2021, 08:44
> **Visualizações:** 1127 | **Likes:** 5 | **Respostas:** 1

---

## Pergunta original

**Daniel ** (@daniel_fmartins) — 02/07/2021, 08:44 | ❤️ 1

Bom dia.

Pessoal, alguém já teve problemas ao utilizar a atividade de script do fluig?

Por exemplo, ao declarar uma função javascript que faz chamada a uma API na tarefa de script, ao exportar o processo, é retornado uma mensagem apontando um “erro de sintaxe”.

---

## Resposta #1

**Vinicius de Moura Silveira** (@vinny.silveira) — 02/07/2021, 19:37 | ❤️ 1

Fala [@daniel\_fmartins](/u/daniel_fmartins) !!

Compartilha com a gente esse trecho do código com a função da chamada da API pra gente entender melhor o seu problema.

---

## Resposta #2

**Daniel ** (@daniel_fmartins) — 05/07/2021, 08:40

```auto
function uploadECM(fileName, doc, parentId) {
    fetch(
        `/api/public/2.0/contentfiles/upload/?fileName=${fileName}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/octet-stream",
            },
            cache: "no-cache",
            body: doc.output('blob')
        }
    ).then(function (response) {
        if (!response.ok) {
            throw "Erro ao enviar o arquivo.";
        }
    }).then(function () {
        // Criação o Documento no GED
        let document = {
            companyId: window.parent.WCMAPI.organizationId,
            description: fileName,
            immutable: true,
            parentId: parentId, // ID da pasta onde salvar o PDF
            isPrivate: false,
            downloadEnabled: true,
            attachments: [{
                fileName: fileName,
            }],
        };

        return fetch(
            "/api/public/ecm/document/createDocument",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                cache: "no-cache",
                body: JSON.stringify(document)
            }
        )
        .then(function (response) {
            if (!response.ok) {
                throw "Erro ao Salvar documento na Pasta Indicada";
            }
            return response.json();
        })
        .then(response => response.content);
    });
}
```

Basicamente, é esse trecho de código.

O adicional seria uma outra função que chama essa passando os parâmetros requeridos.

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 05/07/2021, 12:04 | ❤️ 3

Pelo que entendi a Script Task roda no servidor (assim como a Service Task), então você não consegue usar nenhuma feature “nova” do JS (fetch, por exemplo) e precisa fazer seu script nos moldes de qualquer evento de servidor (assim como beforeStateEntry etc) e usando ECMA anterior a 2015 (devido ao suporte de conversão de JS para Java pelo Rhino).

---

## Resposta #4

**system** (@system) — 06/07/2021, 04:05

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
