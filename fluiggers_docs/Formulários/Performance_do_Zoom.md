# Performance do Zoom

> **Fonte:** [https://fluiggers.com.br/t/performance-do-zoom/656](https://fluiggers.com.br/t/performance-do-zoom/656)
> **Categoria:** Formulários
> **Tags:** `form`
> **Criado em:** 16/09/2021, 12:23
> **Visualizações:** 664 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Aline Jaime** (@Aline_Jaime1) — 16/09/2021, 12:23

Boa tarde, pessoal!

Tenho um zoom que está integrado com um dataset customizado que me retorna cerca de 6000 fornecedores, o que está tornando esse campo muito lerdo.

Alguém sabe uma maneira de melhorar a performance ou até mesmo de limitar sem perder acesso?

---

## Resposta #1

**Rogério Collonhese Santana** (@Rogerio_Collonhese_S) — 16/09/2021, 15:47

Boa tarde Aline,

quando tenho que carregar uma quantidade grande de informações, carrego tudo de uma vez no front e populo, segue um código que acredito que possa te ajudar:

```javascript
var users = getDatasetUsers();
        var settings = {
            source: users,
            displayKey: 'colleagueName',
            multiSelect: false,
            minLength:3,
            style: {
                autocompleteTagClass: 'tag-gray',
                tableSelectedLineClass: 'info'
            },
            table: {
                header: [
                    {
                        'title': 'NOME',
                        'dataorder': 'colleagueName',
                        'size': 'col-xs-9',
                        'standard': true
                    },
                    {
                        'title': 'MATRICULA',
                        'size': 'col-xs-3',
                        'standard': true
                    }
                ],
               renderContent: ['colleagueName', 'colleaguePK.colleagueId']
            }
        };

        // Carregamento do campo de Pesquisa
        var selBusca = FLUIGC.filter('#txtResp', settings);

  function getDatasetUsers() {
        try {
            this.loading.show();
            var c = DatasetFactory.createConstraint("active", true, true, ConstraintType.MUST);
            var dataset = DatasetFactory.getDataset('colleague',["colleagueName","colleaguePK.colleagueId"],[c],["colleagueName"]);
            var users = dataset.values;
            this.loading.hide();
            return users;
        } catch(error) {
           console.error(error);
           return [];
        }
    }
```

---
