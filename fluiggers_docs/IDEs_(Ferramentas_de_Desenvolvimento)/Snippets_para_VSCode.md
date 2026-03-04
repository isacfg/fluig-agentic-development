# Snippets para VSCode

> **Fonte:** [https://fluiggers.com.br/t/snippets-para-vscode/396](https://fluiggers.com.br/t/snippets-para-vscode/396)
> **Categoria:** IDEs (Ferramentas de Desenvolvimento)
> **Tags:** `vscode`
> **Criado em:** 28/04/2021, 12:04
> **Visualizações:** 796 | **Likes:** 24 | **Respostas:** 12

---

## Pergunta original

**Daniel Cabral Santos** (@daniel.cabral) — 28/04/2021, 12:04 | ❤️ 5

![](https://fluiggers.com.br/uploads/default/original/1X/bad3e5f9ad67c1ddf145107ce7032ac1d7b22563.svg) [GitHub](https://github.com/brunogasparetto/fluig-vscode-extension)

![](https://opengraph.githubassets.com/368a6b8d597be852870cee970b5dc8a2f8fff718072044a60a0f397fff5d6063/brunogasparetto/fluig-vscode-extension)

### [GitHub - brunogasparetto/fluig-vscode-extension: Extensão do VS Code para...](https://github.com/brunogasparetto/fluig-vscode-extension)

Extensão do VS Code para facilitar o desenvolvimento na plataforma Fluig. - GitHub - brunogasparetto/fluig-vscode-extension: Extensão do VS Code para facilitar o desenvolvimento na plataforma Fluig.

Cortesia do [@Bruno\_Gasparetto](/u/bruno_gasparetto) ! :smiley:

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 28/04/2021, 16:21 | ❤️ 3

Eu quero muito conseguir colocar o auto complete do Fluig no VS Code, mas até agora, pelo que entendi das extensões, precisa criar regra de linguagem, aí complica bastante.

Mas ao menos essa parte de criar arquivos já está me ajudando bastante.

---

## Resposta #2

**Bruno Gasparetto** (@Bruno_Gasparetto) — 07/06/2021, 09:40 | ❤️ 1

O projeto que era só pra facilitar a criação dos arquivos e ter alguns snippets para agilizar no código (seguindo o auto-complete que eu tinha criado) tá sendo melhorado incrivelmente pelo [@pedro.costa](/u/pedro.costa) .

Ele já adicionou gerenciamento de servidores e a possibilidade de Importar e Exportar Datasets.

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 11/10/2022, 10:56

Estou tentando melhorar a parte visual para se adequar ao tema do VS Code.

Qualquer feedback ajuda bastante, pois testei em uns 15 temas que tenho instalado e o resultado até foi satisfatório.

---

## Resposta #4

**Matheus Mósso** (@msmosso) — 12/10/2022, 08:08

Acho que seria interessante adicionar os 2 snippets da extensão que o [@andre.timm](/u/andre.timm) criou. Aliás, que tal se a gente unisse os dois projetos e colocasse na organização fluiggers, que criamos recentemente?

Link pro arquivo de snippets:

[github.com](https://github.com/andretimm/vscode-fluig/blob/master/snippets/js/snippets.json)

#### [andretimm/vscode-fluig/blob/master/snippets/js/snippets.json](https://github.com/andretimm/vscode-fluig/blob/master/snippets/js/snippets.json)

```json
{
    "fdsasync": {
        "prefix": "fdsasync",
        "body": [
            "var callback = ({",
            "\tsuccess: function (data) {",
            "\t\tif (data != undefined && data.values.length > 0) {",
            "\t\t\tfor (var i = 0; i < data.values.length; i++) {",
            "\t\t\t\tconsole.log(\"data.values[i]\");",
            "\t\t\t}",
            "\t\t} else {",
            "\t\t\t//Empty",
            "\t\t}",
            "\t},",
            "\terror: function (jqXHR, textStatus, errorThrown) {",
            "\t\t//Erro",
            "\t}",
            "});",
            "var c1 = DatasetFactory.createConstraint('${1:constraint}', '${2:initialValue}', '${3:finalValue}', ConstraintType.MUST);",
            "var constraints = new Array(c1);",
```
This file has been truncated. [show original](https://github.com/andretimm/vscode-fluig/blob/master/snippets/js/snippets.json)

---

## Resposta #5

**Bruno Gasparetto** (@Bruno_Gasparetto) — 12/10/2022, 11:06 | ❤️ 1

[@msmosso](/u/msmosso) , gosto bastante dessa ideia de juntar os projetos e colocar na organização. Inclusive até dá pra ver como funcionaria fazer isso no vscode marketplace, pra dar uma melhorada na parte de atualizações (não sei como funciona direito lá, pois meu único contato foi pra criar essa extensão).

Ainda precisa melhorar a extensão na questão de facilitar o uso de dependências. Hoje os recursos externos (bootstrap, jquery e plugins) estão inseridos muito manualmente. Quero melhorar tudo pra ser mantido pelo npm (ou yarn) pra facilitar na parte do deploy.

Quanto aos snippets dá pra adicionar tranquilamente, só alterando o nome pra manter um padrão. Na minha extensão eu sempre coloco o prefixo `fluig-`.

Eu tinha até esquecido que a getDataset da vcXMLRPC.js trabalha com callback pra fazer consulta assíncrona. Logo que conheci o Fluig eu odiei a forma de consulta de dataset, dava muita dor de cabeça, e então fiz um wrapper pra trabalhar com Promise e desde então só usei a minha função, hehehe.

[gist.github.com](https://gist.github.com/brunogasparetto/278d1ad433c392e4a0eafe512017c858)

#### [https://gist.github.com/brunogasparetto/278d1ad433c392e4a0eafe512017c858](https://gist.github.com/brunogasparetto/278d1ad433c392e4a0eafe512017c858)

##### fluig-requests.js

```JavaScript
/**
 * Pega um dataset
 *
 * Wrapper para tornar a DatasetFactory.getDataset (da lib vcXMLRPC.js) em Promise.
 *
 * @param {string} dataset Nome do Dataset
 * @param {string[]} fields Campos para retornar (pode ser null pra retornar todos)
 * @param {Constraint[]} constraints Os filtros a aplicar ou null se não filtrar nada
 * @param {string[]} sorters Campos para ordenar ou null para não ordenar. Pode colocar ;desc no campo para ordenar decrescente
 * @returns {Promise<{columns: string[], values: object[]}>}
```
This file has been truncated. [show original](https://gist.github.com/brunogasparetto/278d1ad433c392e4a0eafe512017c858)

---

## Resposta #6

**Mauricio Freitas** (@mauriciolanner) — 13/10/2022, 11:23 | ❤️ 1

Muito bom o projeto, parabéns

---

## Resposta #7

**Bruno Gasparetto** (@Bruno_Gasparetto) — 20/10/2022, 08:12 | ❤️ 2

Coloquei as sugestões de snippets.

Quando tiver um tempo livre vou estudar como é o envio de formulários e de widgets.

Mas widgets acredito que precisa do maven instalado pra gerar o .war antes. O plugin do Eclipse já é em Java e já deve ter algo pra fazer essa compilação. No vscode teria que analisar muito bem como fazer algo parecido.

---

## Resposta #8

**Matheus Mósso** (@msmosso) — 20/10/2022, 08:34 | ❤️ 1

Boa, Bruno! Eu fiz o fork do seu repositório na organização fluiggers. Que tal mantermos lá?

---

## Resposta #9

**Bruno Gasparetto** (@Bruno_Gasparetto) — 20/10/2022, 09:37

Opa, muito bom!

Vou conferir como é. Acho que dá pra transferir o repositório pra lá ao invés de só fazer o fork.

Mas confesso que nem corri atrás pra ver como é criar uma organização no Marketplace do VS Code pra facilitar as atualizações.

---

## Resposta #10

**André Timm** (@andre.timm) — 20/10/2022, 10:37 | ❤️ 2

O que daria pra fazer é registrar uma nova extensão no vscode com o nome da comunidade, ai nas duas extensões que ja temos, colocamos avisos falando que migramos para a nova. Nessa nova criamos com as funcionalidades juntas.
Não sei se seria viavel, mas é uma ideia

---

## Resposta #11

**Matheus Mósso** (@msmosso) — 20/10/2022, 11:38 | ❤️ 1

Verdade Bruno, melhor transferir mesmo. Vou apagar o repositório na organização e você tenta transferir.

Settings > Transfer ownership (fica na Danger zone)

![image](https://fluiggers.com.br/uploads/default/original/1X/95fda9ac77a84f1c69424d02d90e4c84989aa915.png)

![image](https://fluiggers.com.br/uploads/default/original/1X/61c8e8652fd43f87c1d031eda8683c3b40bac5c1.png)

---

## Resposta #12

**Bruno Gasparetto** (@Bruno_Gasparetto) — 20/10/2022, 12:19

Já transferi.

Depois vou transferir a de declaração de tipos (que ainda quero fazer alguma integração mais simples pra instalar ela no workspace) e alterar os links pra apontar pro repositório correto.

---

## Resposta #13

**Bruno Gasparetto** (@Bruno_Gasparetto) — 30/10/2022, 15:45 | ❤️ 3

Depois de ver a extensão do [@andre.timm](/u/andre.timm) percebi que eu nem tinha me preocupado com Atalhos.

Criei alguns atalhos pra facilitar a vida e como eu fiz a extensão muito integrada com a biblioteca de declarações de tipo que eu criei, aproveitei também para colocar um comando que baixa a biblioteca para o workspace/diretório aberto.

Agora falta mesmo as partes difíceis: exportar formulário e toda a parte de tratar widgets.

Criar o layout de pastas da widgets, assim como já faz pra formulário, é até tranquilo. Mas a parte de importação e exportação não tenho ideia de como seria.

---

## Resposta #14

**Matheus Mósso** (@msmosso) — 02/11/2022, 10:35 | ❤️ 1

Excelente, Bruno! Acho que a próxima coisa a se fazer seria unir as duas extensões no market do VSCode. Hoje tem a que você registrou e a do [@andre.timm](/u/andre.timm). Talvez criar uma única em nome da organização Fluiggers. Você se importa?

---

## Resposta #15

**Bruno Gasparetto** (@Bruno_Gasparetto) — 02/11/2022, 10:57 | ❤️ 1

Por mim sem problemas.

Depois de criar a conta da comunidade e nos colocar como membros dá pra já alterar as informações de repositório do package.json e atualizar a extensão.

Aí só conversar pra ver o que dá pra mesclar a mais nas extensões.

---

## Resposta #16

**Bruno Gasparetto** (@Bruno_Gasparetto) — 28/11/2022, 12:17 | ❤️ 2

Atualizando a todos que agora jogamos de vez a Extensão para a Fluiggers, então a extensão antiga vai parar de ter suporte e agora somente utilizando a nova, que segue na conta Fluiggers.

[marketplace.visualstudio.com](https://marketplace.visualstudio.com/items?itemName=Fluiggers.fluiggers-fluig-vscode-extension)

![](https://fluiggers.gallerycdn.vsassets.io/extensions/fluiggers/fluiggers-fluig-vscode-extension/1.22.3/1687836243532/Microsoft.VisualStudio.Services.Icons.Default)

### [Fluig - Extensão para Desenvolvimento - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=Fluiggers.fluiggers-fluig-vscode-extension)

Extension for Visual Studio Code - Extensão para agilizar o desenvolvimento para o TOTVS Fluig no VS Code

---

## Resposta #17

**Matheus Mósso** (@msmosso) — 29/11/2022, 06:32

Excelente! Vamos que vamos :rocket:

---
