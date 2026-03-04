# Chamar função em wigdet depois de preenchido FLUIG.Filter

> **Fonte:** [https://fluiggers.com.br/t/chamar-funcao-em-wigdet-depois-de-preenchido-fluig-filter/1512](https://fluiggers.com.br/t/chamar-funcao-em-wigdet-depois-de-preenchido-fluig-filter/1512)
> **Categoria:** Widgets
> **Criado em:** 22/11/2022, 16:29
> **Visualizações:** 651 | **Likes:** 1 | **Respostas:** 1

---

## Pergunta original

**Wasley Santos** (@Wasley_Santos) — 22/11/2022, 16:29

Galera

Estou tentando chamado uma função na minha widget dentro do evento de gatilho do FLUIG.Filter mas ele não reconhece a função this.getListaAgendas sendo que essa função eu chamo no init antes mesmo do cara preencher o filter na widget. Porque será o erro?

```auto
var filtro = FLUIGC.filter('#busca_'+ this.instanceId, unidadesDataset);
        filtro.on('fluig.filter.item.added', function(ev) {
            var items = filtro.getSelectedItems();
            this.filtroUnidade = items;
            this.getListaAgendas();
        });
```

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 22/11/2022, 17:45

Se não me engano esse evento é disparado via JQuery e essa biblioteca força o `this` a referenciar o elemento que gerou o disparo do evento.

Uma solução que acredito que funcione é declarar uma variável auxiliar pra ser a referência à widget e usá-la dentro do evento disparado. Ou talvez simplesmente usar arrow function, já que elas não possuem this instanciado (mas não sei se funcionaria).

```javascript
const self = this;

filtro.on('fluig.filter.item.added', function(ev) {
    var items = filtro.getSelectedItems();
    self.filtroUnidade = items;
    self.getListaAgendas();
});
```

ou talvez assim, mas precisaria testar.

```javascript
filtro.on('fluig.filter.item.added', ev => {
    var items = filtro.getSelectedItems();
    this.filtroUnidade = items;
    this.getListaAgendas();
});
```

---

## Resposta #2

**Wasley Santos** (@Wasley_Santos) — 22/11/2022, 19:30 | ❤️ 1

Ambas alternativas funcionaram, obrigado!

---
