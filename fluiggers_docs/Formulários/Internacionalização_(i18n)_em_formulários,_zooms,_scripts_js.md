# Internacionalização (i18n) em formulários, zooms, scripts js

> **Fonte:** [https://fluiggers.com.br/t/internacionalizacao-i18n-em-formularios-zooms-scripts-js/3421](https://fluiggers.com.br/t/internacionalizacao-i18n-em-formularios-zooms-scripts-js/3421)
> **Categoria:** Formulários
> **Tags:** `i18n`
> **Criado em:** 15/09/2025, 21:13
> **Visualizações:** 64 | **Likes:** 2 | **Respostas:** 2

---

## Pergunta original

**Pablo Valle** (@pablooav) — 15/09/2025, 21:13

Salve pessoal, estou utilizando o i18n para internacionalizar um processo BPM, está funcionando para o nome dos campos, labels e tudo mais. Só que não estou conseguindo utilizar nos textos dos meus campos zooms conforme o print abaixo:

![image](https://fluiggers.com.br/uploads/default/optimized/2X/e/edd44bdde1a4e4b24c2f10f568a27a0bacf6cb51_2_690x296.png)

Alguem já conseguiu fazer funcionar e consegue dar uma luz ?

De documentação só consegui encontrar esta aqui [Internacionalização (i18n) - TOTVS Fluig - TDN](https://tdn.totvs.com/pages/releaseview.action?pageId=185738869#Internacionaliza%C3%A7%C3%A3o\(i18n\)-Arquivo.js:m) e não me ajudou muito, não funcionou.

E também tentei utilizar dentro de arquivos javascript, queria utilizar por exemplo em modais, no beforeSendValidate e etc. Alguem sabe informar se é possível utilizar o i18n nesses scripts do “front” do fluig ?

---

## Resposta #1

**Matheus Mósso** (@msmosso) — 16/09/2025, 10:02

Bom dia Pablo,

Tente usar no seguinte formato: `i18n.translate("text.zoom.tipoSolicitacao.placeholder")`

---

## Resposta #2

**Pablo Valle** (@pablooav) — 16/09/2025, 10:22

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/msmosso/48/727_2.png) msmosso:
>
> > i18n.translate(“text.zoom.tipoSolicitacao.placeholder”)

Tentei também, :smiling_face_with_tear:, no campo zoom Aprovador ali ao lado está com este formato.

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Pablo Pádua** (@Pablo_Padua) — 16/09/2025, 13:36 | ❤️ 1

Segue exemplo de utilização do i18n em type zoom:

```auto
<input type="zoom" class="form-control" id="idCampo" name="idCampo"
									data-zoom="{
										'displayKey':'COLUNA_DATASET',
										'maximumSelectionLength':'1',
										'datasetId':'ID_DATASET',
										'fields':[
										{
											'field':'COLUNA_DATASET',
											'label': 'i18n.translate("label_desejado")',
											'visible':'true',
											'standard':'false'
										},
										{
											'field':'COLUNA_DATASET',
											'label': 'i18n.translate("label_desejado")',
											'visible':'true',
											'standard':'true'
										}
										]
									}" />
```

---

## Resposta #4

**Pablo Valle** (@pablooav) — 16/09/2025, 15:51 | ❤️ 1

Funcionou !

Já sei onde eu errei, o vsCode quando eu colocava: `'label': 'i18n.translate("label_desejado")',` a formatação bugava, por conta dessa aspas no meio, então eu estava tratando ela colocando `\"` e não funciona quando coloca a barra.

O ideal é colocar desse jeito mesmo que vc informou, mesmo que o Eclipse ou VSCode informe que está errado. Valeeeu o apoio pessoal. :oncoming_fist:

---
