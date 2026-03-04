# Demonstrar várias colunas no componente filter em widget

> **Fonte:** [https://fluiggers.com.br/t/demonstrar-varias-colunas-no-componente-filter-em-widget/1506](https://fluiggers.com.br/t/demonstrar-varias-colunas-no-componente-filter-em-widget/1506)
> **Categoria:** Widgets
> **Criado em:** 20/11/2022, 11:03
> **Visualizações:** 521 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Wasley Santos** (@Wasley_Santos) — 20/11/2022, 11:03

Galera

Estou fazendo uso FLUIGC.filter em uma widget, porém não estou conseguindo fazer com que ela apresente as colunas criadas no momento da seleção. Alguém consegue identificar o que está errado.

```auto
getZoom: function() {

        var unidades = this.getDatasetUsers();
        //console.dir(unidades);
        var unidadesDataset = {
            source: unidades,
            displayKey: 'filial',
            multiSelect: true,
            minLength: 0,
            style: {
                autocompleteTagClass: 'tag-gray',
                tableSelectedLineClass: 'info'
            },
            table: {
                header: [{
                    'title': 'Codigo',
                    'size': 'col-xs-3'
                },
                {
                    'title': 'Unidade',
                    'size': 'col-xs-6',
                    'dataorder': 'nomeloja'
                }
                ],
                renderContent: ['filial','nomeloja']
            }
        };

        var filter = FLUIGC.filter('#busca_'+ this.instanceId, unidadesDataset);
        //filter.open();
    },

    getDatasetUsers: function() {

        try {
                // Busca o dataset
                var dataset = DatasetFactory.getDataset('DSLojas');
                var unidades = dataset.values;
                return unidades;
        } catch(error) {
                console.error(error);
                return [];
        }
    }
```

![image](https://fluiggers.com.br/uploads/default/optimized/1X/36d59d49534eac6bd4c293edb53aba412d912a6e_2_690x136.png)

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Wasley Santos** (@Wasley_Santos) — 20/11/2022, 11:53

Descobri que essa lista com apenas uma coluna é do filtro a ser digitado, mas o botão de lupa disparada a tabela criada com as colunas

---
