# Constraint fazendo like em dois campos

> **Fonte:** [https://fluiggers.com.br/t/constraint-fazendo-like-em-dois-campos/314](https://fluiggers.com.br/t/constraint-fazendo-like-em-dois-campos/314)
> **Categoria:** BPM
> **Criado em:** 08/04/2021, 14:12
> **Visualizações:** 2107 | **Likes:** 3 | **Respostas:** 1

---

## Pergunta original

**Rodrigo de Oliveira** (@redschenko) — 08/04/2021, 14:12

Boa tarde.

Preciso filtrar usando LIKE em um dataset Interno (de formulário) usando createConstraint em dois campos.
Porém não estou conseguindo.

Exemplo

![b71ce0bf-a48b-43b7-b020-81e1af63a2fe](https://fluiggers.com.br/uploads/default/original/1X/25faf0614a55769bad8ec7b53055406fb3c4871c.jpeg)

Preciso retornar todos os registros que tenham “VALOR X” em um dos campos

```
var c01 = DatasetFactory.createConstraint("campo1", cPesquisa, cPesquisa, ConstraintType.SHOULD, true);

var c02 = DatasetFactory.createConstraint("campo2", cPesquisa, cPesquisa, ConstraintType.SHOULD, true);

cFiltro.push(c01);
cFiltro.push(c02);

var dataset = DatasetFactory.getDataset("dsSolicitadosEmp", null, cFiltro, null)
```

Se eu uso SHOULD, está trazendo todos.
Se eu uso MUST retorna nenhum.

Alguém sabe como resolver?

At
Rodrigo de Oliveira.

---

## Resposta #1

**Daniel Cabral Santos** (@daniel.cabral) — 08/04/2021, 16:42 | ❤️ 2

Já tentou o `cFiltro.setLikeSearch(` `true` `);` ?

[https://tdn.totvs.com/display/public/fluig/Acessando+Datasets](https://tdn.totvs.com/display/public/fluig/Acessando+Datasets)

---

## Resposta #2

**Alef Vinicius** (@alefvinicius) — 08/04/2021, 16:56

Rodrigo, como mencionado pelo Daniel, se o filtro estiver sendo feito dentro de um outro dataset, o correto é utilizar método setLikeSearch para indicar que se trata de uma constraint like.

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/daniel.cabral/48/5_2.png) daniel.cabral:
>
> > Já tentou o `cFiltro.setLikeSearch(` `true` `);` ?

Somente quando o dataset é acessando no fonte que passamos na construção da constraint o valor de true como último parâmetro para indicar que se trata do like.

No seu caso, caso esteja tentando acessar de algum script do backend, deve ficar assim:

```
var c01 = DatasetFactory.createConstraint("campo1", cPesquisa, cPesquisa, ConstraintType.SHOULD);

    var c02 = DatasetFactory.createConstraint("campo2", cPesquisa, cPesquisa, ConstraintType.SHOULD);

   c01.setLikeSearch(true);
   c02.setLikeSearch(true);

    cFiltro.push(c01);
    cFiltro.push(c02);

    var dataset = DatasetFactory.getDataset("dsSolicitadosEmp", null, cFiltro, null)
```

Obs.: como se trata de um dataset customizado, recomendo que verifique se sua implementação está tratando o parâmetro de like para a construção dos dados. Se foi um construído a partir do próprio Fluig (Painel de Controle), já contem o padrão e por isso deveria funcionar.

---

## Resposta #3

**Rodrigo de Oliveira** (@redschenko) — 08/04/2021, 17:14

Obrigado pela resposta [@daniel.cabral](/u/daniel.cabral).
Fiz um teste conforme documentação, mas não funcionou. Apresenta erro no console do navegador:

`Uncaught TypeError: c01.setLikeSearch is not a function`

Estou executando este dataset através de uma widget.
No arquivo view.ftl tenho a chamada para o arquivo vcXMLRPC.js.

[@alefvinicius](/u/alefvinicius)
Estou fazendo o filtro em um dataset interno, não é um dataset customizado.
É um dataset criado pelo próprio sistema, depois de publicar um formulário.

Há mais alguma sugestão?

At
Rodrigo de Oliveira.

---

## Resposta #4

**Wasley Santos** (@Wasley_Santos) — 04/04/2022, 21:23 | ❤️ 1

Oi [@redschenko](/u/redschenko)

A função setLikeSearch é usado apenas quando o valor enviado possui %. Adicione o símbolo de % antes e depois da variável cPesquisa

![image](https://fluiggers.com.br/uploads/default/original/1X/56327237380543fab1a251ee3387b0196cfabadd.png)

[https://tdn.totvs.com/display/public/fluig/Acessando+Datasets](https://tdn.totvs.com/display/public/fluig/Acessando+Datasets)

---
