# ID fluig para VsCode

> **Fonte:** [https://fluiggers.com.br/t/id-fluig-para-vscode/397](https://fluiggers.com.br/t/id-fluig-para-vscode/397)
> **Categoria:** IDEs (Ferramentas de Desenvolvimento)
> **Tags:** `dataset`, `formulario`, `exportar`, `vscode`, `importar`
> **Criado em:** 28/04/2021, 12:57
> **Visualizações:** 1428 | **Likes:** 11 | **Respostas:** 5

---

## Pergunta original

**Daniel Sales** (@Daniel_Sales) — 28/04/2021, 12:57 | ❤️ 6

[marketplace.visualstudio.com](https://marketplace.visualstudio.com/items?itemName=vs-fluig.vs-fluig)

![](https://vs-fluig.gallerycdn.vsassets.io/extensions/vs-fluig/vs-fluig/0.5.0/1600367528728/Microsoft.VisualStudio.Services.Icons.Default)

### [VS Code for Fluig - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=vs-fluig.vs-fluig)

Extension for Visual Studio Code - Extensão para Fluig

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 28/04/2021, 15:04

Achei muito interessante essa extensão, mas ainda não cheguei a testá-la.

Pena que a TOTVS, mesmo usando o VS Code, não se interessou em dar mais suporte a ele.

---

## Resposta #2

**Daniel Sales** (@Daniel_Sales) — 30/04/2021, 07:45 | ❤️ 1

A sim
Vou tirar tempo depois e por novos recursos tais como publicar formulários e outras funções mais.
o que mais quero fazer é o update script de processo sem ter que publicar novas versões.

---

## Resposta #3

**Daniel Sales** (@Daniel_Sales) — 22/07/2022, 11:00

bom dia,
vc que já está familiarizado com o desenvolvimento do VScode podia pegar as funcionalidades desse plugin e juntar com o seu.

---

## Resposta #4

**Bruno Gasparetto** (@Bruno_Gasparetto) — 22/07/2022, 14:20 | ❤️ 1

Então, eu até aprendi um pouco do VS Code, mas a infra do Fluig (os serviços “ocultos” dele) não conheço quase nada.

A extensão que criei só pra ter os snippets e criar arquivos de forma mais simples ( [GitHub - brunogasparetto/fluig-vscode-extension: Extensão do VS Code para facilitar o desenvolvimento na plataforma Fluig.](https://github.com/brunogasparetto/fluig-vscode-extension) ) foi muito melhorada pelo [@pedro.costa](/u/pedro.costa) e estou devendo fazer o merge da última PR dele (que é de consultar Datasets igual ao Eclipse faz, porém permitindo exibir os resultados de vários datasets ao invés de só 1 como o Eclipse).

Quero retomar umas melhorias na extensão, mas também estou apreensivo com a atualização do 1.8 ter mudado muita coisa.

---

## Resposta #5

**Bruno Gasparetto** (@Bruno_Gasparetto) — 08/09/2022, 12:57 | ❤️ 1

Só atualizando.

Finalmente finalizei a atualização com a novidade do Pedro, consultar datasets. Ainda faltam alguns detalhes, mas ao menos a consulta tá funcionando.

---

## Resposta #6

**André Timm** (@andre.timm) — 20/10/2022, 10:35 | ❤️ 1

Quando estava desenvolvendo essa extensão entrei em contato com algumas pessoas da TOTVS, e falaram que realmente a TOTVS não tinha interesse na epoca de mudar, por conta do BIRT, BPMN entre outros motivos :confused:

---

## Resposta #7

**Bruno Gasparetto** (@Bruno_Gasparetto) — 20/10/2022, 11:36

Acredito que realmente seria muito trabalhoso refazer toda a parte de BIRT (embora nunca tenha usado) e principalmente BPMN.

E acho que a parte de Widget exija Java com Maven pra compilar e enviar ao servidor.

De qualquer forma o plugin do Eclise utiliza muitos WS que não aparecem na documentação, então somente quem já trabalhou na TOTVS ou fuçou muito o código fonte do plugin consegue identificar quais são.

---

## Resposta #8

**Daniel Sales** (@Daniel_Sales) — 20/10/2022, 11:38

A maioria das funções utilizadas são publicas ou tem versões publicas.
Não seria difícil replicar. O bpmn sim é complexo de fazer

---

## Resposta #9

**André Timm** (@andre.timm) — 20/10/2022, 12:49 | ❤️ 1

Então, trabalhei la muito tempo, alguns webservices internos lembro ainda. Mas faz tempo que não dou uma olhada. Lembro que tava vendo pra fazer as exportações pelo vccode, achei os webservices e ate uns ftps que ele usa interno, (não sei se usa ainda)

---
