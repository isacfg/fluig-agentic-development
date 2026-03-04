# Salvar relatórios do RM dentro do GED de forma automática

> **Fonte:** [https://fluiggers.com.br/t/salvar-relatorios-do-rm-dentro-do-ged-de-forma-automatica/1916](https://fluiggers.com.br/t/salvar-relatorios-do-rm-dentro-do-ged-de-forma-automatica/1916)
> **Categoria:** ECM / GED
> **Tags:** `rm`, `integração`
> **Criado em:** 12/05/2023, 09:43
> **Visualizações:** 273 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**William Anjos** (@William_Anjos) — 12/05/2023, 09:43

Alguém conhece uma forma de salvar os relatórios gerados no RM de forma automática no GED?

Eu sei que dar para integrar o RM ao GED para que o GED seja o gerenciador de arquivos do RM. Fiz essa integração mas percebi que, aparentemente, a única forma de enviar os arquivos para o GED é selecionado de forma manual o arquivo que será enviado, mas estou tentando adicionar esses arquivos de forma automática.

Segui essa documentação para integrar RM x GED: [https://tdn.totvs.com/pages/releaseview.action?pageId=270899168](https://tdn.totvs.com/pages/releaseview.action?pageId=270899168)

Alguém teria uma sugestão de como automatizar esse arquivamento?

---

## Resposta #1

**Sérgio Machado** (@sergio.machado) — 12/05/2023, 10:30

Opa William, beleza?

Você pode usar o serviço [wsReport](https://tdn.totvs.com/display/public/LRM/TBC+-+Web+Services+Reports) do RM, e executar a partir do fluig, este serviço irá te retornar o base64 relatório, com isso você consegue usar esse base64 e gravar em uma pasta especifica do GED usando a [docAPI](https://tdn.totvs.com/display/public/fluig/docAPI) do fluig.

Aqui mais abaixo tem um exemplo de uso dela, procure pela função **salvarArquivo**

[Gerando um arquivo PDF a partir de um template de e-mail no Fluig](https://github.com/sergiomachadosilva/fluig-datasets/blob/master/gerarPdfTemplateEmail/gerarPdfTemplateEmail.js)

---
