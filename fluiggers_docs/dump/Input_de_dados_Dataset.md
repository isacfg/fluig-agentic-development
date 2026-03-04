# Input de dados Dataset

> **Fonte:** [https://fluiggers.com.br/t/input-de-dados-dataset/3570](https://fluiggers.com.br/t/input-de-dados-dataset/3570)
> **Categoria:** BPM
> **Tags:** `form`, `processo`, `dataset`
> **Criado em:** 20/02/2026, 13:11
> **Visualizações:** 11 | **Likes:** 0 | **Respostas:** 4

---

## Pergunta original

**Leonardoo** (@Leonardoo) — 20/02/2026, 13:11

Boa tarde, preciso de uma ajuda para entender a seguinte situação:

Resolvi criar um processo para solicitar manutenção de alguns equipamentos que temos em comodato. Por ser algo mais simples a para fins de aprender e praticar eu cheguei uma barreira que ainda não consegui entender a lógica para fazer funcionar…

Eu tenho um dataset avançado que consome uma Aplicação REST que estamos desenvolvendo para se comunicar com nosso ERP..

A dúvida é a seguinte qual a melhor maneira para pegar uma informação selecionada ou preenchida em um campo para ser passado nesse dataset para realizar a consulta. A minha necessidade seria no caso o dataset que está vinculado ao Agente Comercial servir de apoio para para o Dataset do Cliente eu tentei usar a hAPI e descobri que o lugar dela não é no dataset hehe.

![image](https://fluiggers.com.br/uploads/default/optimized/2X/c/ccfacbafae47e19d07f9cf5b2fd621db94fbc308_2_690x262.png)

Aqui seria aonde o valor deveria ser inputado, porém não consegui imaginar como ainda…

![image](https://fluiggers.com.br/uploads/default/original/2X/5/521e2dd631411590149d1694b7f1a31e64cdeee3.png)

---

## Resposta #1

**Leonardoo** (@Leonardoo) — 20/02/2026, 13:13

Lembrando, nesse caso em especifico tudo foi desenvolvido fora do ambiente do eclipse…. Desde o workflow até o formulário….

---

## Resposta #2

**Bruno Gasparetto** (@Bruno_Gasparetto) — 20/02/2026, 15:06

O Dataset não vai conseguir pegar os dados do processo/formulário normalmente.

Em geral a gente passa os dados pro dataset via constraints. Até podemos usar alguma API/WS no dataset para buscar os dados de algum lugar, mas ainda é mais comum passar a constraint.

Nessa [Documentação de Dataset Avançado](https://tdn.totvs.com/pages/releaseview.action?pageId=412888219#Constru%C3%A7%C3%A3odoDatasetAvan%C3%A7ado-Datasetavan%C3%A7adocomutiliza%C3%A7%C3%A3odeconstraint) mostra como percorrer/recuperar os valores enviados por Constraints. Então o que sempre faço é um dataset avançado receber as informações e a partir delas executar algo, retornando os dados necessários.

---

## Resposta #3

**Leonardoo** (@Leonardoo) — 20/02/2026, 15:27

Bruno, obrigado. A uma outra dúvida como eu fiz pelo Web e não pelo Eclise é possível passar essas constraints também?

---

## Resposta #4

**Bruno Gasparetto** (@Bruno_Gasparetto) — 20/02/2026, 17:11

É possível sim. Você fez pelo Editor de Datasets no próprio Fluig, certo?

Imagina esse dataset criado por lá, com o código `teste0001`. Ele espera receber uma constraint com o nome `nomeDaConstraintEsperada`.

![image](https://fluiggers.com.br/uploads/default/original/2X/9/945465dd52d15e78517ce6dff90874479fc3389d.png)

Aí, no evento de formulário ou de processo, você chama esse dataset.

Exemplo num evento de processo:

```javascript
function beforeStateEntry(sequenceId) {
    if (sequenceId != NUMERO_ATIVIDADE_PRA_EXECUTAR) {
        return;
    }

    var dataset = DatasetFactory.getDataset(
        'teste0001',
        null, // pega todos os campos. Mas no nosso caso é irrelevante, porque não tratamos isso no dataset
        [
            // O final value é irrelevante nesse caso, porque no dataset só pegamos o initial value
            // O mesmo com relação ao constraint type, porém ele é obrigatório enviar
            DatasetFactory.createConstraint(
                "nomeDaConstraintEsperada",
                hAPI.getCardValue("campo_do_formulario"),
                null,
                ConstraintType.MUST
            )
        ],
        null
    );

    if (dataset.rowsCount == 0) {
        // não retornou nada
        return;
    }

    var valorRetornado = dataset.getValue(0, "campoRetornado");

    // continua o código
}
```

---

## Resposta #5

**Leonardoo** (@Leonardoo) — 20/02/2026, 17:28

Certo, a noite vou fazer uns teste…. Você faz mentoria?

---

## Resposta #6

**Bruno Gasparetto** (@Bruno_Gasparetto) — 23/02/2026, 09:19

Infelizmente ainda não trabalho com mentoria.

O tempo tá bem escasso devido ao trabalho + cursos externos, aí o tempo pra fazer algo extra tá muito curto pra fazer algo com qualidade.

Mas sempre que possível tento colaborar com algumas respostas :slight_smile:

---
