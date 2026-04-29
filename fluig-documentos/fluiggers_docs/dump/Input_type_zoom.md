# Input type zoom

> **Fonte:** [https://fluiggers.com.br/t/input-type-zoom/3378](https://fluiggers.com.br/t/input-type-zoom/3378)
> **Categoria:** Sem categoria
> **Tags:** `dataset`, `zoom`
> **Criado em:** 14/08/2025, 12:42
> **Visualizações:** 92 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Artur Alves** (@artur.alves) — 14/08/2025, 12:42

Boa tarde!

Estou tentando utilizar um input do tipo zoom em uma widget, porém, ele não está funcionando…

Tentei identificar o problema, mas não consegui;
Tenho outros inputs em alguns formulários e eles funcionam corretamente.

```auto
<input type="zoom" name="itemCtb" id="itemCtb" data-zoom="{
								    'datasetId':'dsConsultaItemCTB',
								    'displayKey':'CTD_ITEM',
								    'maximumSelectionLength':'10',
								    'placeholder':'Selecione os centro de trab.',
								    'fields':[
								        {
								            'field':'CTD_ITEM',
								            'label':'Código',
								            'standard':'true'
								        },
								        {
								            'field':'CTD_DESC01',
								            'label':'Descrição',
								        }
								    ]
								}" class="form-control table-field opcional" autocomplete="off">
```

Está basicamente assim, sem nenhuma função de **reloadZoomFilterValues** porque esse dataset não precisará de filtros.

Quando abro a Widget, ele retorna sendo um campo de input normal.

Será que na widget ele trata esses campos de forma diferente?

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Guilherme Mesquita Rocha** (@gmesquita) — 14/08/2025, 13:48 | ❤️ 1

Boa tarde.
Infelizmente não funciona campo Zoom em widget de maneira nativa, algumas opções que podem te ajudar:

![](https://style.fluig.com/images/favicon.ico) [style.fluig.com](https://style.fluig.com/miscellaneous.html#filter)

### [TOTVS Fluig Developer](https://style.fluig.com/miscellaneous.html#filter)

![](https://style.fluig.com/images/favicon.ico) [style.fluig.com](https://style.fluig.com/javascript.html#fluig-autocomplete)

### [TOTVS Fluig Developer](https://style.fluig.com/javascript.html#fluig-autocomplete)

E se eu não me engano, o zoom via modal funciona também, abaixo tem um tópico com exemplo:

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/romuloccomp/48/73_2.png) [Modal Zoom em Form](https://fluiggers.com.br/t/modal-zoom-em-form/154) [BPM](https://fluiggers.com.br/c/bpm/5)
>
> > Pessoal, vocês já fizeram algum zoom que funciona modal no Formulário? Sem ser a (window.open("/webdesk/zoom.jsp... ") ou se o Fluig tem algum padrão.

---
