# Remover mensagem de ERRO

> **Fonte:** [https://fluiggers.com.br/t/remover-mensagem-de-erro/2818](https://fluiggers.com.br/t/remover-mensagem-de-erro/2818)
> **Categoria:** ECM / GED
> **Tags:** `fluigapi`, `evento`
> **Criado em:** 28/05/2024, 17:51
> **Visualizações:** 194 | **Likes:** 1 | **Respostas:** 1

---

## Pergunta original

**Gabriel Martins** (@Gabriel_Martins) — 28/05/2024, 17:51

Ola Pessoal, sou novo por aqui e gostaria de saber se existe uma possibilidade de remover a mensagem de erro que aparece abaixo do meu alert no meu evento beforeDocumentPublisher

```auto
function beforeDocumentPublisher() {

    var state = getValue("WKState");

    if(state == "PUBLISH"){

        var doc = getValue("WKDocument");

        if(doc.getParentDocumentId() == 215362 && doc.getVersionOption() == 0){

            // Reduz o retorno de registros para reduzir impacto em performance.
            var constraintDocument1 = DatasetFactory.createConstraint('sqlLimit', '0', '1', ConstraintType.MUST);

            // Passando código da pasta pai para o Dataset
            var constraintDocument2 = DatasetFactory.createConstraint('parentDocumentId', doc.getParentDocumentId(), doc.getParentDocumentId(), ConstraintType.MUST);

            // Consultando apenas registros de documentos ativos.
            var constraintDocument3 = DatasetFactory.createConstraint('activeVersion', 'true', 'true', ConstraintType.MUST);

            // Consultando apenas nos documentos que não foram removidos.
            var constraintDocument4 = DatasetFactory.createConstraint('deleted', 'false', 'false', ConstraintType.MUST);

            // Consultando documentos que tenham a mesma descrição informada na
            // publicação
            var constraintDocument5 = DatasetFactory.createConstraint(
                    'documentDescription', doc.getDocumentDescription(), doc
                            .getDocumentDescription(), ConstraintType.MUST);

            var datasetDocumentActive = DatasetFactory.getDataset('document', null,
                    new Array(constraintDocument1, constraintDocument2,
                            constraintDocument3, constraintDocument4,
                            constraintDocument5), null);

             var isExistDoc = datasetDocumentActive != null && datasetDocumentActive.rowsCount > 0
             && (datasetDocumentActive.getValue(0, "documentDescription") == doc.getDocumentDescription());

             var erro = "<div class='alert alert-danger' role='alert'>Já existe um documento com a mesma descrição informada!</div>";


            if(isExistDoc){
                throw erro;

            }

        }

    }
```

![Screenshot_1](https://fluiggers.com.br/uploads/default/original/2X/c/c3107d30ca8adbc3e6b16bfccadfcf9b45787c6b.png)

---

## Resposta #1

**Gabriel Borchardt** (@Gabriel_Borchardt) — 05/06/2024, 16:44

não é esse if que da o throw?

---

## Resposta #2 ✅ RESPOSTA ACEITA

**venturelli** (@venturelli) — 07/06/2024, 09:54 | ❤️ 1

Hoje, infelizmente, não tem como remover. Acho que vale um chamado de melhoria pra isso porque de fato tem alguns tipos de erros como esse seu que não faz sentido.

Mas procure evitar o uso de html em mensagens porque a tendência é um dia parar de funcionar devido a atualizações de segurança.

---

## Resposta #3

**Gabriel Martins** (@Gabriel_Martins) — 11/06/2024, 15:31

Vou fazer isso [@venturelli](/u/venturelli), Muito obrigado pelo retorno

---
