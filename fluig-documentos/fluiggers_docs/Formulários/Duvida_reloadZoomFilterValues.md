# Duvida reloadZoomFilterValues

> **Fonte:** [https://fluiggers.com.br/t/duvida-reloadzoomfiltervalues/2170](https://fluiggers.com.br/t/duvida-reloadzoomfiltervalues/2170)
> **Categoria:** Formulários
> **Tags:** `form`
> **Criado em:** 30/08/2023, 16:53
> **Visualizações:** 230 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**victor ferreira** (@nikof) — 30/08/2023, 16:53

Senhores, bom dia.

Consigo passar um filtro MUST NOT via a função reloadZoomFilterValues ?

Exemplo: tenho um dataset de produtos que possui o campo ‘bloqueado’, que fica setado como ‘on’ em casos de produtos bloqueados.

Queria tentar fazer um filtro parecido com “produtos com bloqueado diferente de on”, via reloadZoomFilterValues.

Teria que ser algo do tipo:

reloadZoomFilterValues(id, ‘tipoProdutoList,’ + documentid + ‘,produtoBloqueado,’ + ‘!on’)

é possivel eu negar esse ‘on’ de algum jeito ? Pois tentei assim e não foi

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Jonathan Albuquerque** (@Jonathan.Albuquerque) — 05/09/2023, 18:21

É bem provável que este on seja referente a um campo do tipo checkbox. O melhor seria criar um campo auxiliar para realizar essa validação, se o campo for marcado voce coloca um valor true, senão false, e aí sim você irá realizar com melhor controle esta verificação no realoadZoomFilterValues

---
