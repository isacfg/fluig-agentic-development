# Problema ao inserir retorno de uma integração em um paixfilho

> **Fonte:** [https://fluiggers.com.br/t/problema-ao-inserir-retorno-de-uma-integracao-em-um-paixfilho/1487](https://fluiggers.com.br/t/problema-ao-inserir-retorno-de-uma-integracao-em-um-paixfilho/1487)
> **Categoria:** Sem categoria
> **Criado em:** 13/11/2022, 14:42
> **Visualizações:** 325 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Gustavo** (@gustavo91) — 13/11/2022, 14:42

Boa tarde pessoal!

Estou tendo um problema ao inserir em uma tabela paixfilho os valores de retorno de uma integração via dataset.

Ao inserir o retorno no paixfilho no formulário, está ‘‘pulando’’ a primeira linha do retorno, ou seja, a primeira linha do paixfilho recebe os dados da segunda linha do retorno. A segunda linha do paixfilho recebe os valores da terceira linha do retorno e assim por diante.

\[com.datasul.technology.webdesk.customization.ScriptingLog\] (pool-480-thread-1) ###### integra\_imposto\_datasul () - Retorno Datasul: \[{“dataType”:“character”,“name”:“wsOutput”,“type”:“output”,“value”:“{"dsOutput":{"ttRetorno":\[{"codCliente":24918,"itCodigo":"00000222","vlLiquido":9.18,"vlSemIcms":10.0,"aliqICMS":12.0,"aliqIPI":0.0,"aliqPIS":1.5,"aliqCofins":6.7,"vlIPI":0.0,"vlPis":0.15,"vlCofins":0.67,"vlISS":0.0,"vlICMS":0.0,"vlICMSSt":0.0,"VlFCP":0.0},{"codCliente":24918,"itCodigo":"80001057","vlLiquido":17.42,"vlSemIcms":19.2,"aliqICMS":4.0,"aliqIPI":0.0,"aliqPIS":1.66666667,"aliqCofins":7.60416667,"vlIPI":0.0,"vlPis":0.32,"vlCofins":1.46,"vlISS":0.0,"vlICMS":0.8,"vlICMSSt":0.0,"VlFCP":0.0},{"codCliente":24918,"itCodigo":"80001057","vlLiquido":26.13,"vlSemIcms":28.8,"aliqICMS":4.0,"aliqIPI":0.0,"aliqPIS":1.66666667,"aliqCofins":7.60416667,"vlIPI":0.0,"vlPis":0.48,"vlCofins":2.19,"vlISS":0.0,"vlICMS":1.2,"vlICMSSt":0.0,"VlFCP":0.0},{"codCliente":24918,"itCodigo":"80001057","vlLiquido":34.85,"vlSemIcms":38.4,"aliqICMS":4.0,"aliqIPI":0.0,"aliqPIS":1.640625,"aliqCofins":7.60416667,"vlIPI":0.0,"vlPis":0.63,"vlCofins":2.92,"vlISS":0.0,"vlICMS":1.6,"vlICMSSt":0.0,"VlFCP":0.0}\]}}”}\]

O retorno vem completo com todas as linhas, mas os valores da primeira linha do retorno "vlLiquido":9.18,"vlSemIcms":10.0,, não são inseridos no paixfilho.

function servicetask48(attempt, message) {

```
log.info("###### Calcular Imposto - Integracao Datasul - INICIO");

try {

    var solicitacao = hAPI.getCardValue("solicitacao");

    if (solicitacao != 0 || solicitacao != '0') {


        log.info("###### Solicitacao - Imposto: " + solicitacao);

        var c1 = DatasetFactory.createConstraint('solicitacao', solicitacao, solicitacao, ConstraintType.MUST);
        var dsIntegracao = DatasetFactory.getDataset('ds_integra_impostos_ficha_comercial', null, new Array(c1), null);





            log.info("###### Houve Retorno Imposto");



            for (var i = 0; i < dsIntegracao.rowsCount; i++) {


                if (dsIntegracao.getValue(0, "erro") && dsIntegracao.getValue(0, "erro") != "") {

                    log.info("###### Não integrou - Imposto");

                    hAPI.setCardValue("codigoCliente", dsIntegracao.getValue(0, "codCliente"));
                    hAPI.setCardValue("codigoItem", dsIntegracao.getValue(0, "itCodigo"));
                    hAPI.setCardValue("precoLiquido99___" + i, dsIntegracao.getValue(i, "vlLiquido"));
                    hAPI.setCardValue("precoICMS99___" + i, dsIntegracao.getValue(i, "vlSemIcms"));
                    hAPI.setCardValue("icmsImposto", dsIntegracao.getValue(0, "aliqICMS"));
                    hAPI.setCardValue("aliqIPI", dsIntegracao.getValue(0, "aliqIPI"));
                    hAPI.setCardValue("aliqPIS", dsIntegracao.getValue(0, "aliqPIS"));
                    hAPI.setCardValue("aliqCofins", dsIntegracao.getValue(0, "aliqCofins"));
                    hAPI.setCardValue("vlIPI", dsIntegracao.getValue(0, "vlIPI"));
                    hAPI.setCardValue("vlPis", dsIntegracao.getValue(0, "vlPis"));
                    hAPI.setCardValue("vlCofins", dsIntegracao.getValue(0, "vlCofins"));
                    hAPI.setCardValue("vlISS", dsIntegracao.getValue(0, "vlISS"));
                    hAPI.setCardValue("vlICMS", dsIntegracao.getValue(0, "vlICMS"));
                    hAPI.setCardValue("vlICMSSt", dsIntegracao.getValue(0, "vlICMSSt"));
                    hAPI.setCardValue("VlFCP", dsIntegracao.getValue(0, "VlFCP"));

                } else {
                    log.info("###### Integrou - Imposto");

                    hAPI.setCardValue("codigoCliente", dsIntegracao.getValue(0, "codCliente"));
                    hAPI.setCardValue("codigoItem", dsIntegracao.getValue(0, "itCodigo"));
                    hAPI.setCardValue("precoLiquido99___" + i, dsIntegracao.getValue(i, "vlLiquido"));
                    hAPI.setCardValue("precoICMS99___" + i, dsIntegracao.getValue(i, "vlSemIcms"));
                    hAPI.setCardValue("icmsImposto", dsIntegracao.getValue(0, "aliqICMS"));
                    hAPI.setCardValue("aliqIPI", dsIntegracao.getValue(0, "aliqIPI"));
                    hAPI.setCardValue("aliqPIS", dsIntegracao.getValue(0, "aliqPIS"));
                    hAPI.setCardValue("aliqCofins", dsIntegracao.getValue(0, "aliqCofins"));
                    hAPI.setCardValue("vlIPI", dsIntegracao.getValue(0, "vlIPI"));
                    hAPI.setCardValue("vlPis", dsIntegracao.getValue(0, "vlPis"));
                    hAPI.setCardValue("vlCofins", dsIntegracao.getValue(0, "vlCofins"));
                    hAPI.setCardValue("vlISS", dsIntegracao.getValue(0, "vlISS"));
                    hAPI.setCardValue("vlICMS", dsIntegracao.getValue(0, "vlICMS"));
                    hAPI.setCardValue("vlICMSSt", dsIntegracao.getValue(0, "vlICMSSt"));
                    hAPI.setCardValue("VlFCP", dsIntegracao.getValue(0, "VlFCP"));

                }
            }




        log.info("###### Calcular Imposto - Integracao Datasul - FIM");

    } else {
        log.info("Solicitacao sem numero")
    }


} catch (err) {

    log.info('dentro do catch - imposto');

    return err.message + " at line" + err.lineNumber;

}
```

}

---

## Resposta #1

**Matheus Loreto** (@matheusl) — 16/11/2022, 12:51 | ❤️ 1

Gustavo,

O índice do campo do paixfilho começa no 1. A variável i do seu laço começa em 0., então vc está passando um campo que não existe na primeira iteração. “nomeDoCampo\_\_\_\_0”

Espero ter ajudado.

---
