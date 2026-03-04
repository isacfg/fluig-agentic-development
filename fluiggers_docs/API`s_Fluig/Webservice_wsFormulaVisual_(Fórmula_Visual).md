# Webservice wsFormulaVisual (Fórmula Visual)

> **Fonte:** [https://fluiggers.com.br/t/webservice-wsformulavisual-formula-visual/533](https://fluiggers.com.br/t/webservice-wsformulavisual-formula-visual/533)
> **Categoria:** API`s Fluig
> **Criado em:** 25/06/2021, 11:47
> **Visualizações:** 1309 | **Likes:** 2 | **Respostas:** 0

---

## Pergunta original

**Tatiane Paula** (@Tatiane_Paula) — 25/06/2021, 11:47

Bom dia pessoal!

Alguém já conseguiu executar uma fórmula visual criado no RM, através do webservice wsFormulaVisual?

---

## Resposta #1

**Alessandro Lorençone** (@alorenco) — 28/06/2021, 15:20 | ❤️ 1

Tatiane.

Sempre que preciso executar uma FV no RM eu uso o **wsProcess**.
Obtenho uma cópia do XML da chamada SOAP no RM e monto ele dentro do Javascript no Fluig.

Consigo passar parâmetros normalmente, porém tenho uma dificuldade ao obter retorno pois a FV não disponibiliza recurso para isso.

Como contorno eu gero uma exceção no código da FV e na mensagem envio um texto com o conteúdo que quero, no formato Json por exemplo.

---

## Resposta #2

**Mauricio Freitas** (@mauriciolanner) — 06/10/2021, 13:39

Se você estiver ainda com essa duvida, eu consegui.

---

## Resposta #3

**EVANDRO DE CAMPOS BUSCOFF** (@EVANDRO_DE_CAMPOS_BU) — 20/06/2023, 11:49

Boa tarde eu estou com essa mesma dificuldade

---

## Resposta #4

**Eduardo Vantini Neto** (@eduardo.vantini) — 20/06/2023, 13:42 | ❤️ 1

Olá, vou colocar um exemplo para executar uma fórmula visual para executar uma fórmula da folha.
**Fórmula:**

![image](https://fluiggers.com.br/uploads/default/original/1X/c5b6907f1075463d7b1ee216a8d268f5d3ee4348.png)

**Fórmula Visual**
![image](https://fluiggers.com.br/uploads/default/optimized/1X/b8f536e00d94bbed41c9a5681fd2f93bb57e74e7_2_690x266.png)

**Parâmetros Fórmula Visual**
![image](https://fluiggers.com.br/uploads/default/original/1X/1d37b56fa5ff12b8f8a2030dfa5616353b45b380.png)

**Propriedades da Atividade para Executar a fórmula**
![image](https://fluiggers.com.br/uploads/default/original/1X/a8b3946254e05a0eb11fa72291b6d72003d1d5bb.png)

**Propriedades do Throw**
![image](https://fluiggers.com.br/uploads/default/original/1X/722b41dd796d2de044fdae951d487875840b00d1.png)

**Contexto Fórmula Visual:** FopFuncData
**Envelope SOAPUI**

```auto
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tot="http://www.totvs.com/">
   <soapenv:Header/>
   <soapenv:Body>
      <tot:Execute>
         <!--Optional:-->
         <tot:codColigada>{Coligada_FV}</tot:codColigada>
         <!--Optional:-->
         <tot:idFormula>{Id_FV}</tot:idFormula>
         <!--Optional:-->
         <tot:context>CODCOLIGADA={Coligada_Funcionario};CODAPLICACAO=P</tot:context>
         <!--Optional:-->
         <tot:dataSetXML></tot:dataSetXML>
         <!--Optional:-->
         <tot:parametersXML><![CDATA[<Parameters>
			    <Parametros>
			        <CODCOLIGADA>{Coligada_Funcionario}</CODCOLIGADA>
			        <CHAPA>{Chapa}</CHAPA>
			    </Parametros>
			</Parameters>]]></tot:parametersXML>
         <!--Optional:-->
         <tot:ownerData></tot:ownerData>
      </tot:Execute>
   </soapenv:Body>
</soapenv:Envelope>
```

**Exemplo de implementação em Dataset**

```auto
function createDataset(fields, constraints, sortFields) {
    var Dataset = DatasetBuilder.newDataset();
    try {
        // SERVICO CADASTRADO NO PAINEL DE CONTROLE DO FLUIG
        var NOME_SERVICO = "wsFormulaVisual";
        var CAMINHO_SERVICO = "com.totvs.WsFormulaVisual";

        var servico = ServiceManager.getServiceInstance(NOME_SERVICO);
        var serviceHelper = servico.getBean();
        var instancia = servico.instantiate(CAMINHO_SERVICO);
        var ws = instancia.getRMIwsFormulaVisual();

        //#region RM Authenticaton
        var rm_user = "mestre";
        var rm_pass = "Totvs";
        //#endregion

        var authService = serviceHelper.getBasicAuthenticatedClient(ws, "com.totvs.IwsFormulaVisual", rm_user, rm_pass)

        var codcoligada = {Coligada_Funcionario};
        var chapa = {Chapa};
        var codColFormulaVisual = {Coligada_FV};
        var idFormulaVisual = {Id_FV};

        var context = "CODCOLIGADA=" + codcoligada + ";CODAPLICACAO=P;CODUSUARIO=" + rm_user

        var parameters = "<Parameters> " +
                        "     <Parametros> " +
                        "         <CODCOLIGADA> " + codcoligada.replace(' ', '') + "</CODCOLIGADA> " +
                        "         <CHAPA>" + chapa.replace(' ', '') + "</CHAPA> " +
                        "     </Parametros> " +
                        "</Parameters>"

        var result = authService.execute(codColFormulaVisual, idFormulaVisual, context, '',  parameters, '');
        var r = result.getErrorMessage().getValue();

        Dataset.addRow( r );

    } catch (e) {
        log.error("ERRO==============> " + e.message);
    }

    return Dataset;
}
```

Assim funciona… testa aí

Abs.

---
