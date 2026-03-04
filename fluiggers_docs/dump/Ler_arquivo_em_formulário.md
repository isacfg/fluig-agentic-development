# Ler arquivo em formulário

> **Fonte:** [https://fluiggers.com.br/t/ler-arquivo-em-formulario/1091](https://fluiggers.com.br/t/ler-arquivo-em-formulario/1091)
> **Categoria:** ECM / GED
> **Criado em:** 19/05/2022, 10:02
> **Visualizações:** 655 | **Likes:** 0 | **Respostas:** 2

---

## Pergunta original

**Eustaquio Ferreira** (@Eustaquio_Ferreira) — 19/05/2022, 10:02

Bom dia galera

Estou trabalhando em um fluxo onde os usuários preenchem um formulário e no fim da ultima tarefa pretendo buscar um arquivo xlsx e modificar ele com as informações do formulário. e salvar o novo arquivo como anexo na solicitação.

após o contexto básico minha duvida é a seguinte: podem me dizer uma forma fácil de ter acesso ao blob de um arquivo salvo em →

> /ecmnavigation?app\_ecm\_navigation\_doc=0000

---

## Resposta #1

**Daniel Sales** (@Daniel_Sales) — 20/05/2022, 09:17

Bom dia,

Um arquivo vai ser modificado por vários usuários ou é tipo um template?

---

## Resposta #2

**Eustaquio Ferreira** (@Eustaquio_Ferreira) — 20/05/2022, 09:48

Bom dia Daniel

Basicamente sim mas o formulário vai ser preenchido por todas essas pessoas nas primeiras atividades. e na ultima atividade preciso abrir um arquivo xlsx com a lib: [GitHub - SheetJS/sheetjs: 📗 SheetJS Spreadsheet Data Toolkit -- New home https://git.sheetjs.com/SheetJS/sheetjs](https://github.com/SheetJS/sheetjs).
e modificar a segunda aba como o que foi preenchido.

---

## Resposta #3

**Daniel Sales** (@Daniel_Sales) — 20/05/2022, 10:17

Da uma olhada
![image](https://fluiggers.com.br/uploads/default/original/1X/e33c4ad402aa7a23bf7a5918b6194b8fabea6816.png)

![image](https://fluiggers.com.br/uploads/default/original/1X/391a8b649a576cf6e12ad93fad2a2c5cba2000bd.png)

![image](https://fluiggers.com.br/uploads/default/original/1X/44c650e95debe43871a0222fb6da49eb941d40c6.png)

o arquivo .xlsx do excel é apenas um zip com vários arquivos dentro.
Pode te dar uma luz nisso.

---

## Resposta #4

**Eustaquio Ferreira** (@Eustaquio_Ferreira) — 20/05/2022, 17:07

Consegui gerar o xlsx usando uma das rotas da api ecm.

```auto
${baseUrl}:${porta}/api/public/ecm/document/${item.documentId}/${item.version}
```

segue exemplo de código abaixo:

```auto
function gerarXlsx (){
  parent.ECM.attachmentTable.getData().forEach( function (item) {
    console.log(item);
    fetch(`${baseUrl}:${porta}/api/public/ecm/document/${item.documentId}/${item.version}`).then((response) => {
      console.log(response);
      return response.json();
    }).then((body) => {

      var fileUrl = body.content.fileURL;
      console.log(fileUrl);
      fetch(fileUrl).then((response) => {

        return response.arrayBuffer();
      }).then( (blob) => {
        console.log(blob);
        var workbook = XLSX.read(new Uint8Array(blob), {
          type: 'array'
        });

        var sheetNames = workbook.SheetNames;
        var wsMatriz = workbook.Sheets["MATRIZ"];
        var row1 = ["a","b","c" ... ]
        XLSX.utils.sheet_add_aoa(wsMatriz, [ row1], {origin: "E12"});

        XLSX.writeFile(workbook, "Teste Inicial.xlsx");
      })

    })
  });
}
```

se alguém souber uma forma melhor para lidar com essa edição de arquivo. em um dataset ou algo assim. por favor sinta-se avontade em compartilhar aqui. sei que fazer isso no client-side não foi a melhor das ideias então adoraria uma sugestão melhor.

---
