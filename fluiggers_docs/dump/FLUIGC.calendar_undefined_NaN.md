# FLUIGC.calendar undefined NaN

> **Fonte:** [https://fluiggers.com.br/t/fluigc-calendar-undefined-nan/3470](https://fluiggers.com.br/t/fluigc-calendar-undefined-nan/3470)
> **Categoria:** Formulários
> **Tags:** `form`, `processo`
> **Criado em:** 13/10/2025, 08:40
> **Visualizações:** 18 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**matheus.jesus** (@matheus.jesus) — 13/10/2025, 08:40

Tenho dois campos no formulário onde eu passo o FLUIGC.calendar. Um deles funciona normalmente, mas o outro fica dessa forma conforme a imagem, com o dizer “undefined NaN”.
![image](https://fluiggers.com.br/images/transparent.png)

Esse é o script que inicia o campo como calendário:

> ativaCalendar: (campo) => {
> FLUIGC.calendar(‘#’ + campo, {timeZone: ‘UTC’,pickDate: true,pickTime: false,useCurrent: false});
> },

E esse o HTML dos dois campos:

> `<div class="col-md-2 form-group CTT_XDTINI">`
>
> `<label class="control-label required CTT_XDTINIReq" for="CTT_XDTINI">Data Início Contrato</label>`
>
> `<div class="input-group">`
>
> `<input type="text" class="form-control calendar" name="CTT_XDTINI" id="CTT_XDTINI">`
>
> `<span class="input-group-addon">`
>
> `<span class="fluigicon fluigicon-calendar"></span>`
>
> `</span>`
>
> `</div>`
>
> `</div>`

> `<div class="col-md-2 form-group CTT_XDTTER">`
>
> `<label class="control-label" for="CTT_XDTTER">Data Término Contrato</label>`
>
> `<div class="input-group">`
>
> `<input type="text" class="form-control calendar" name="CTT_XDTTER" id="CTT_XDTTER">`
>
> `<span class="input-group-addon">`
>
> `<span class="fluigicon fluigicon-calendar"></span>`
>
> `</span>`
>
> `</div>`
>
> `</div>`

---
