# Filtrar Input Zoom Conforme Dataset

> **Fonte:** [https://fluiggers.com.br/t/filtrar-input-zoom-conforme-dataset/3153](https://fluiggers.com.br/t/filtrar-input-zoom-conforme-dataset/3153)
> **Categoria:** Formulários
> **Tags:** `form`, `dataset`, `formulario`
> **Criado em:** 05/02/2025, 10:17
> **Visualizações:** 83 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Arthur Moreira** (@Arthur_Moreira) — 05/02/2025, 10:17

Como faço para passar um filtro no input zoom para filtrar os valores de um determinado dataset?
Atualmente eu tenho um input zoom:

<‘input type=“zoom” id=“nm\_local\_conduzido\_teste” name=“nm\_local\_conduzido\_teste” data-zoom=“{
‘displayKey’:‘des\_setor\_sgq’,
‘datasetId’:‘DS\_TESTE\_SGQ’,
‘filterValues’:‘cod\_empresa\_sgq,’,
‘fields’:\[
{
‘field’:‘des\_setor\_sgq’,
‘label’:‘Setor’,
‘standard’:‘true’
},
{
‘field’:‘cod\_empresa\_sgq’,
‘label’:‘Empresa’,
‘standard’: ‘true’
}
\]
}” /’>

Onde estou tentando passar como parâmetro como filtro o código da empresa que meu usuário me informar, esse código da empresa está nesse select:

<\`select class=“form-control” name=“nm\_teste\_emp” id=“nm\_teste\_emp”>
<‘option data-default value=“”></option’>
<‘option value=“1”>Empresa 1</option’>
<‘option value=“4”>Empresa 4</option’>
</select '>

Então com base nesse select com o valor da minha empresa, eu preciso trazer no meu input zoom um primeiro filtro com os locais correspondentes aquela empresa.

Estou tentando fazer um reloadZoomFilterValues com o valor do meu nm\_teste\_emp mas ele não esta sendo filtrado

---

## Resposta #1

**Daniel Sales** (@Daniel_Sales) — 05/02/2025, 13:10

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/arthur_moreira/48/1572_2.png) Arthur\_Moreira:
>
> > filterValues’

Tem duas formas
Uma vc já esta usando 'filterValues’
A outra e usar o reloadzoomfiltervalues

```javascript
reloadZoomFilterValues(“tbVariedadeEstimada”, “tipoCultura,Tomate”);
```

Onde tbVariedadeEstimada e o nome do zoom e o próximo parâmetro e um par de chamves contraint1, valorcontraint1,constraint2,valorconstraint2

---

## Resposta #2 ✅ RESPOSTA ACEITA

**Arthur Moreira** (@Arthur_Moreira) — 13/02/2025, 09:47

Obrigado Daniel, consegui resolver.
Estava errando na função reload mesmo.

---
