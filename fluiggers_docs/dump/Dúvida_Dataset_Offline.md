# Dúvida Dataset Offline

> **Fonte:** [https://fluiggers.com.br/t/duvida-dataset-offline/1294](https://fluiggers.com.br/t/duvida-dataset-offline/1294)
> **Categoria:** Mobile
> **Tags:** `dataset`, `mobile`
> **Criado em:** 01/09/2022, 09:31
> **Visualizações:** 802 | **Likes:** 3 | **Respostas:** 0

---

## Pergunta original

**Guilherme Carvalho** (@guiza1carvalho) — 01/09/2022, 09:31

Pessoal, bom dia.
Tudo bem?

Estou criando meu primeiro Dataset offline seguindo alguns que encontrei e a documentação ([Sincronização de datasets - TOTVS Fluig - TDN](https://tdn.totvs.com/pages/releaseview.action?pageId=212899013)) também.

Eu consegui finalizar ele, colocar como offline, sincronizar ele funciona 100% online mas offline não carrega, alguém poderia me ajudar?

Segue informações do Dataset:

```
function defineStructure() {

      addColumn("NOME");
      addColumn("LOGIN");
      addColumn("EMAIL");
      setKey([ "NOME" ]);
      addIndex([ "NOME" ]);

     }

  function onSync(lastSyncDate) {

   var dataset = DatasetBuilder.newDataset();

   dataset.addColumn("NOME");
   dataset.addColumn("LOGIN");
   dataset.addColumn("EMAIL");

  var datasetProdutores = DatasetFactory.getDataset("dsProdutores", null, null, null);

  for(j = 0; j < datasetProdutores.rowsCount; j++) {

     var produtorNome = datasetProdutores.getValue(j, "nome");
     var produtorLogin = datasetProdutores.getValue(j, "login");
     var produtorEmail = datasetProdutores.getValue(j, "email");

      dataset.addRow(new Array(produtorNome, produtorLogin, produtorEmail));

       }

              return dataset;

       }

      function createDataset(fields, constraints, sortFields) {

       var dataset = DatasetBuilder.newDataset();

       dataset.addColumn("NOME");
       dataset.addColumn("LOGIN");
       dataset.addColumn("EMAIL");

       var datasetProdutores = DatasetFactory.getDataset("dsProdutores", null, null, null);

       for(j = 0; j < datasetProdutores.rowsCount; j++) {

          var produtorNome = datasetProdutores.getValue(j, "nome");
          var produtorLogin = datasetProdutores.getValue(j, "login");
          var produtorEmail = datasetProdutores.getValue(j, "email");

         dataset.addRow(new Array(produtorNome, produtorLogin, produtorEmail));

         }

        return dataset;

         }

         function onMobileSync(user) {

          var sortFields = new Array();
          var constraints = new Array();
          var produtoresNomes = new Array('NOME');
          var result = { 'fields' : produtoresNomes, 'constraints' : constraints, 'sortFields' :
          sortFields };

          return result;

           }
```

![Sincronização](https://fluiggers.com.br/uploads/default/optimized/1X/62c353a6d1e7b2f7d14d012d84157ea3129569cc_2_690x308.jpeg)

![Mobile](https://fluiggers.com.br/uploads/default/original/1X/1954b3d35327080c2f3984a699d936f963cd8df7.jpeg)

![Dataset](https://fluiggers.com.br/uploads/default/optimized/1X/54af6fee2b30667a090cc9fe6b993abb41d29ec2_2_690x222.jpeg)

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Guilherme Carvalho** (@guiza1carvalho) — 01/09/2022, 10:33 | ❤️ 3

Me ajudaram na solução do problema aqui, como era meu primeiro eu não tinha usado a associação de dataset offline ainda, fiz a exportação do formulario associando o Dataset e funcionou normal.

![image](https://fluiggers.com.br/uploads/default/original/1X/4e5ebd97e1c38480e7358016ac53369d04917d9d.png)

---

## Resposta #2

**Daniel Sales** (@Daniel_Sales) — 01/09/2022, 11:44


---
