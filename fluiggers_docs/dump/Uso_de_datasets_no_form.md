# Uso de datasets no form

> **Fonte:** [https://fluiggers.com.br/t/uso-de-datasets-no-form/468](https://fluiggers.com.br/t/uso-de-datasets-no-form/468)
> **Categoria:** Formulários
> **Criado em:** 27/05/2021, 10:56
> **Visualizações:** 1128 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**Lucas** (@Lucas) — 27/05/2021, 10:56

Bom dia pessoal,

Como lidar com dataset no script do form?

Estou fazendo da seguinte forma, mas a variável dataset retorna o datasetPrincipal compelto, ignorando completamente o filtro da constraint pelo Id.

Vi que muda algumas chamadas como o .countRows para .values.length. Em relação ao filtro e busca de valores do dataset segue a mesma ideia? Alguém teria uma mudança ou exemplo para essa situação?

var filtro = DatasetFactory.createConstraint(“CAMPO\_NOME”, id, id, ConstraintType.MUST);
var filtros = new Array(filtro);
var dataset = DatasetFactory.getDataset(“datasetPrincipal”, null, filtros, null);

---

## Resposta #1

**Daniel Cabral Santos** (@daniel.cabral) — 27/05/2021, 12:26

Boa tarde!

Pergunta besta - seu dataset tem o tratamento das constraints?

---

## Resposta #2

**Lucas** (@Lucas) — 27/05/2021, 15:18

Boa tarde Daniel,

Sim, e acompanhando pelo console consigo pegar a constraint, e capturar o dataset. O problema é que o dataset vem sem o filtro.

---

## Resposta #3

**Daniel ** (@daniel_fmartins) — 27/05/2021, 16:14

Seu “CAMPO\_NOME” é correspodente ao nome do atributo no dataset principal?

---

## Resposta #4

**Magno Silva Adauto** (@Magno_Silva_Adauto) — 31/05/2021, 23:55

Lucas,

O [@daniel.cabral](/u/daniel.cabral) perguntou se o seu dataset possuí tratamento de constraint, mas sua resposta contém a frase:

> ![](https://fluiggers.com.br/letter_avatar_proxy/v4/letter/l/ba8739/48.png) Lucas:
>
> > Sim, e acompanhando pelo console consigo pegar a constraint, e capturar o dataset.

Então da a entender que vc está olhando somente o lado client (front-end) e não o arquivo do dataset (back-end). Dentro do seu arquivo dataset possui um tratamento para receber essa constraint que vc está enviando no formulário ?

> ![](https://fluiggers.com.br/letter_avatar_proxy/v4/letter/l/ba8739/48.png) Lucas:
>
> > var filtro = DatasetFactory.createConstraint(“CAMPO\_NOME”, id, id, ConstraintType.MUST);

Segue um exemplo de como capturar as constraints enviadas ao dataset:

```auto
var dataset = DatasetBuilder.newDataset();

	dataset.addColumn("RETORNO");

	var filtroRecebido = "";

	if (constraints != null && constraints.length > 0) {
        for (var i = 0; i < constraints.length; i++) {
        	if (constraints[i].fieldName == 'CAMPO_NOME') {
        		filtroRecebido = constraints[i].initialValue;

            }
        }
    }
```

E com essa variável de exemplo “filtroRecebido” vc faz o filtro necessário.

---
