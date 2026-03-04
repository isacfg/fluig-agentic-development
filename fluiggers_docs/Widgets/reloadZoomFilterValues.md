# reloadZoomFilterValues

> **Fonte:** [https://fluiggers.com.br/t/reloadzoomfiltervalues/3100](https://fluiggers.com.br/t/reloadzoomfiltervalues/3100)
> **Categoria:** Widgets
> **Tags:** `form`, `zoom`
> **Criado em:** 20/12/2024, 10:35
> **Visualizações:** 73 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Felipp Augusto Rodrigues Piran** (@Felipp_Augusto_Rodri) — 20/12/2024, 10:35 | ❤️ 1

É possível usar o reloadZoomFilterValues em uma widget?. Eu preciso usar categorias, subcategoria e item e para isso, preciso fazer uma filtragem na hora que seleciona determinado nível.

if(selectedItem.inputId == “categoria”){
$(‘#codigoCategoria’).val(selectedItem.codigo);
if(selectedItem.subcategoria){
reloadZoomFilterValues(‘subcategoria’, ‘codigoCategoria,’+selectedItem.codigo);
$(‘#statusSubcategoria’).val(selectedItem.subcategoria);
$(‘.div-subcategoria’).show();
}else{
$(‘#statusSubcategoria’).val(selectedItem.subcategoria);
$(‘.div-subcategoria’).hide();
}
}

```
if(selectedItem.inputId == "subcategoria"){
    $('#codigoSubcategoria').val(selectedItem.codigoSubcategoria);
    if(selectedItem.item){
        reloadZoomFilterValues('item', 'codigoSubcategoria,'+selectedItem.codigoSubcategoria);
        $('#statusItem').val(selectedItem.item);
        $('.div-item').show();
    }else{
        $('#statusItem').val(selectedItem.item);
        $('.div-item').hide();
    }
}

if(selectedItem.inputId == "item"){
    $('#codigoItem').val(selectedItem.codigoItem);
}

if(selectedItem.inputId == "filial"){
    $('#codigoFilial').val(selectedItem.codigo);
}

if(selectedItem.inputId == "departamento"){
    $('#codigoDepartamento').val(selectedItem.codigo);
}
```

---
