# Componente AutoComplete filtrar dados

> **Fonte:** [https://fluiggers.com.br/t/componente-autocomplete-filtrar-dados/3376](https://fluiggers.com.br/t/componente-autocomplete-filtrar-dados/3376)
> **Categoria:** Formulários
> **Tags:** `form`, `dataset`, `fluigapi`
> **Criado em:** 12/08/2025, 11:52
> **Visualizações:** 75 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Caio Racy** (@Caio_Racy) — 12/08/2025, 11:52

Salve pessoal, estava montando um autocomplete padrão aqui e me deparei com algo estranho.

eu tenho um dataset que é um select no protheus na tabela de SBE, porém quero aplicar meu filtro para ele, visto que essa tabela é enorme e quero filtrar por outro campo no momento que ele é digitado.

```javascript
function loadSBE(cCampo, cCampoFilter) {
  //ENDEREÇO DE ENTRADA
  var cDataset = "dsProtheusTransfSBE";
  var searchFields = "BE_BUSCA";
  var filterFields = "";

  if (cCampoFilter) {
    var cFilter = $("#" + cCampoFilter).val();
    if (cFilter) filterFields = "BE_LOCAL," + cFilter;
  }

  if (window["AC_" + cCampo] != null) {
    window["AC_" + cCampo].destroy();
    window["AC_" + cCampo] = undefined;
  }

  setAutocomplete({
    source: {
      url:
        "/api/public/ecm/dataset/search?datasetId=" +
        cDataset +
        "&searchField=" +
        searchFields +
        "&filterFields=" +
        filterFields +
        "&",
    },
    type: "autocomplete",
    selector: "#" + cCampo,
    minLength: 0,
    displayKey: "BE_DESCRIC",
    template: ".AC_SBE",
    callbackSelected: function (event) {
      $("#id_" + cCampo).val(event.item.BE_LOCALIZ);
    },
  });
}
```

esse é meu load que fiz para atuar no meu onChange de outro componente

```javascript
function onChangeLocalAuto(el, output) {
  var row = el.id.split("___")[1];
  var $local = $(el);
  var $localiz = $("#tbZ04_BE_LOCALIZ_" + output + "___" + row);
  var valor = ($local.val() || "").trim();

  if (valor.length === 2) {
    $localiz.prop("disabled", false);
    loadSBE(
      "tbZ04_BE_LOCALIZ_" + output + "___" + row,
      "tbZ04_BE_LOCAL_" + output + "___" + row
    );
  } else {
    $localiz.val("");
    $localiz.prop("disabled", true);
  }
}
```

tudo lindo ele funciona mas aparentemente meu filterFields não está filtrando quando eu passo por exemplo o local 03 que era pra tazer apenas 27 registros do dataset.

Acho que estou errando em algo básico, mas se alguém conseguir me ajudar a entender isso. ah meu setAutoComplete está assim

```javascript
function setAutocomplete(properties) {
  // Remove eventos
  $(properties.selector).off(
    "fluig.autocomplete.selected fluig.autocomplete.opened fluig.autocomplete.closed"
  );

  // retira os tipos de selectores para pegar o name do autocomplete
  properties.name = properties.selector.replace(/[#\[\].]/g, "");

  if ($(properties.selector).val() != "") {
    $(properties.selector).data("selected", true);
    $(properties.selector).data("selected-value", $(properties.selector).val());
  }

  if (window["AC_" + properties.name] != null) {
    window["AC_" + properties.name].destroy();
    window["AC_" + properties.name] = undefined;
    $(properties.selector).val("");
  }

  window["AC_" + properties.name] = FLUIGC.autocomplete(
    properties.selector,
    {
      highlight: true,
      minLength: properties.minLength || 0,
      hint: true,
      searchTimeout: 100,
      type: "autocomplete",
      name: "ac_" + properties.name,
      tagClass: "tag-gray",
      maxTags: 1,
      allowDuplicates: false,
      displayKey: properties.displayKey,
      source:
        typeof properties.source === "function"
          ? properties.source
          : {
              url: properties.source.url,
              limit: 50,
              offset: 0,
              limitKey: "limit",
              patternKey: "searchValue",
              root: "content",
              formatData: function (data) {
                if (properties.source.formatData != undefined) {
                  if (typeof properties.source.formatData === "function")
                    data = properties.source.formatData(data);
                }

                if (data.length == 1) {
                  if (
                    data[0] != undefined &&
                    data[0][properties.displayKey] != undefined &&
                    (data[0][properties.displayKey] == "" ||
                      data[0][properties.displayKey].indexOf("%") != -1)
                  )
                    data = [];
                }
                return data;
              },
            },
      tagMaxWidth: 200,
      templates: {
        suggestion: properties.template,
      },
    },
    function (err, data) {
      if (err) {
        try {
          errMessage = JSON.parse(err.responseText.message);
          errMessage = errMessage.message
            ? err.responseText.message
            : err.responseText;
        } catch (e) {
          errMessage = "Não foi possível carregar os dados.";
        }
        FLUIGC.toast({
          message: errMessage,
          type: "danger",
        });
      }
    }
  )
    .on("fluig.autocomplete.selected", function (event) {
      if (properties.callbackSelected) {
        if (typeof properties.callbackSelected === "function")
          properties.callbackSelected(event);
      }
      $(this).data("selected", true);
      if ($(this).val() != "") $(this).data("selected-value", $(this).val());
    })
    .on("fluig.autocomplete.opened", function () {
      if (properties.callbackOpened) {
        if (typeof properties.callbackOpened === "function")
          properties.callbackOpened();
      }
      $(this).data("selected", false);
    })
    .on("fluig.autocomplete.closed", function () {
      if (
        !$(this).data("selected") &&
        $.trim($(this).val()) != $(this).data("selected-value")
      ) {
        $(this).data("selected-value", "");
        $(this).val("");
      } else {
        $(this).val($.trim($(this).val()));
      }
    });
}
```

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 16/08/2025, 11:49 | ❤️ 1

Você fez o tratamento das constraints no seu dataset customizado?

Acabei de fazer um teste, no Lab Fluig, e funcionou corretamente ao fazer consultas num dataset interno.

vou deixar o código de exemplo que utilizei:

```javascript
const datasetId = "colleague";
const filterFields = "adminUser,false";
const resultFields = "colleagueName";
const searchField = "colleagueName";

$(function() {
    FLUIGC.autocomplete("#nome", {
        source: {
            url: `/api/public/ecm/dataset/search?datasetId=${datasetId}&resultFields=${resultFields}&filterFields=${filterFields}&searchField=${searchField}&`,
            contentType: "application/json",
            root: "content",
            pattern: "",
            limit: 10,
            offset: 0,
            patternKey: "searchValue",
            limitkey: "limit",
            offsetKey: "offset"
        },
        displayKey: "colleagueName",
        type: 'autocomplete',
    });
});
```

---
