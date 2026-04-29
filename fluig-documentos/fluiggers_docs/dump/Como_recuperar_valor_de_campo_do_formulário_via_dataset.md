# Como recuperar valor de campo do formulário via dataset

> **Fonte:** [https://fluiggers.com.br/t/como-recuperar-valor-de-campo-do-formulario-via-dataset/3436](https://fluiggers.com.br/t/como-recuperar-valor-de-campo-do-formulario-via-dataset/3436)
> **Categoria:** BPM
> **Criado em:** 25/09/2025, 00:01
> **Visualizações:** 47 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Júlio Aguiar** (@Julio_Aguiar) — 25/09/2025, 00:01

Olá,

Estou com uma dúvida no Fluig relacionada à leitura de dados de formulário via dataset.
Preciso recuperar, através de um dataset customizado, o valor de um campo salvo no formulário de um processo.
Porém, quando tento buscar pelo dataset customizado, não consigo recuperar o valor:

Usando workflowProcess, consigo o cardDocumentId mas o cardVersion vem null.
Usando cardData com processInstanceId, retorna vazio.

Alguém já passou por isso e poderia compartilhar a forma correta de buscar esse valor?

---

## Resposta #1

**Pietro** (@pietro) — 25/09/2025, 10:51

Opa,

Teria como mandar o código que você faz essa chamada? e retorno que ele traz?

Um exemplo que tenho aqui, caso já te ajude, é esse que preciso passar por todas solicitações abertas de um processo:

```javascript
var c1_processWork = DatasetFactory.createConstraint("active", 'true', 'true', ConstraintType.MUST);
var c2_processWork = DatasetFactory.createConstraint("processId", 'solicitacao-compra', 'solicitacao-compra', ConstraintType.MUST);
var ds_processWork = DatasetFactory.getDataset('workflowProcess', null, [c1_processWork, c2_processWork], null);

for (var i = 0; i < ds_processWork.values.length; i++) {
    var solicitacao = ds_processWork.getValue(i, "workflowProcessPK.processInstanceId");
    var documentid = ds_processWork.getValue(i, "cardDocumentId");
}
```

---

## Resposta #2

**Pablo Valle** (@pablooav) — 25/09/2025, 12:13

Boa tarde, não sei se entendi errado, mas se sua necessidade é buscar um valor de um campo preenchido em um formulário, vc não vai encontrar essa informação dentro do workflowProcess, você precisa consumir o dataset interno deste formulário pra resgatar os campos.

Sua chamada seria dessa forma:

```auto
var c1 = DatasetFactory.createConstraint("metadata#active", 'true', 'true', ConstraintType.MUST); //Constraint para retornar apenas a versão ativa (ultima versão)
var c2 = DatasetFactory.createConstraint("documentId", '999', '999', ConstraintType.MUST); //Aqui vc passa um identificador único pra encontrar a solicitação que vc quer, se vc tiver em algum campo do formulário salvo o número da solicitação pode utilizar ele aqui como constraint também pra não precisar resgatar o documentId.
var retorno = DatasetFactory.getDataset('DATASET_FORMULARIO', null, [c1, c2], null);

var campo = retorno.getValue('0', 'CAMPO_QUE_DESEJA')
```

---
