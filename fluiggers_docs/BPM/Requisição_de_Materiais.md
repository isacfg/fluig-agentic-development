# Requisição de Materiais

> **Fonte:** [https://fluiggers.com.br/t/requisicao-de-materiais/2033](https://fluiggers.com.br/t/requisicao-de-materiais/2033)
> **Categoria:** BPM
> **Tags:** `form`, `dataset`, `rm`
> **Criado em:** 12/07/2023, 11:49
> **Visualizações:** 318 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Marcelo Carneiro** (@mscarneiro) — 12/07/2023, 11:49

Tenho uma processo de requisição de materiais em um sistema que eu mesmo desenvolvi, porem estamos migrando o mesmo para o Fluig.

Ja criei todo o processo e o formulario no fluig mas estou tendo dificuldade de enviar esses dados para o RM

No sistema que eu fiz eu enviava para a tabela TMOV a requisição e para TITMOV (utilizando o idmov como chave estrangeira) enviava os itens desta requisição.

Utilizando o fluig como faço esse processo de criar a requisição pegar o idmov e enviar os itens para o banco? utiliando o SOAP

---

## Resposta #1

**Eduardo Vantini Neto** (@eduardo.vantini) — 12/07/2023, 15:54

Olá, ao criar a requisição SOAP, você manda tudo junto os dados para a TMOV e para a TITMMOV. Você vai usar o dataserver MovMovimentoTBCData ([View](https://api.totvs.com.br/legado/devrm/bo_rm/MOVMOVIMENTOTBCDATA.html?Objeto=MOVMOVIMENTOTBCDATA)).

Eu tenho um exemplo de dataset aqui, modifica os dados para sua necessidade aí.

```auto
function createDataset(fields, constraints, sortFields) {
    var newDataset = DatasetBuilder.newDataset();

    var NOME_DATASERVER = "MovMovimentoTBCData";

    var usuario = "{USUARIO_RM}";
    var senha = "{SENHA_USUARIO_RM}";

    var context = "CODCOLIGADA=" + codcoligada + ";EXERCICIOFISCAL=" + idexerciciofiscal

    try{
        var authService = getWebService(usuario, senha);

        var movimento = getXml(id, codcoligada, idmov, codmunservico, codetdmunserv.replace("[", "").replace("]", ""), codservico, idnat, idnat2, chaveacessonfe, valordesc, serie, numeromov, dataemissao)

        var result = new String(authService.saveRecord(NOME_DATASERVER, movimento, context));

        var codcolresult = result.substring(0, result.indexOf(";"));

        if(codcoligada == codcolresult) {
            newDataset.addColumn("Erro")

            newDataset.addRow(new Array("0"))
        } else {
            log.info("::::::::::::::> ERRO AO SALVAR <::::::::::::::")

            var err = String(result)

            newDataset.addColumn("Erro")
            newDataset.addRow(new Array(err))
        }

        return newDataset;

    }
    catch (e) {
        if (e == null)  e = "Erro desconhecido!";
        var mensagemErro = "Ocorreu um erro ao salvar dados no RM: " + e;
        throw mensagemErro;
    }
}

function getXml(id, codcoligada, idmov, codmunservico, codetdmunserv, codservico, idnat, idnat2, chaveacessonfe, valordesc, serie, numeromov, dataemissao)  {
    var xmlItem = ""
    var tipoentrada = ""

    for (var i = 0; i < ds.rowsCount; i++) {

        xmlItem += "<TITMMOV> " +
                    "   <CODCOLIGADA>" + codcoligada + "</CODCOLIGADA> " +
                    "   <IDMOV>" + idmov + "</IDMOV> " +
                    "   <NSEQITMMOV>" + nseqitmmov + "</NSEQITMMOV> " +
                    "   <IDNAT>" + idnat  + "</IDNAT> " +
                    "   <CODTB5FAT>" + tipoentrada + "</CODTB5FAT> " +
                    "   <CODMUNSERVICO>" + codmunservico + "</CODMUNSERVICO> " +
                    "   <CODETDMUNSERV>" + codetdmunserv + "</CODETDMUNSERV> " +
                    "   <CODIGOSERVICO>" + codservico + "</CODIGOSERVICO> " +
                    "</TITMMOV>"
    }

    /* MOVIMENTO */
    var xmlSerie = serie == "" ? "":"<SERIE>" + serie + "</SERIE>"

    var xmlMovimento =  "<TMOV> " +
                        "  <CODCOLIGADA>" + codcoligada + "</CODCOLIGADA> " +
                        "  <IDMOV>" + idmov + "</IDMOV> " +
                        "  <IDNAT>" + idnat + "</IDNAT> " +
                        "  <IDNAT2>" + idnat2 + "</IDNAT2> " +
                        "  <CODMUNSERVICO>" + codmunservico + "</CODMUNSERVICO> " +
                        "  <NUMEROMOV>" + numeromov + "</NUMEROMOV> " +
                        "  <DATAEMISSAO>" + dataemissao + "</DATAEMISSAO> " +
                        "  <CODETDMUNSERV>" + codetdmunserv + "</CODETDMUNSERV> " +
                        "  <CODIGOSERVICO>" + codservico + "</CODIGOSERVICO> " +
                        "  <CHAVEACESSONFE>" + chaveacessonfe + "</CHAVEACESSONFE> " +
                        "  <VALORDESC>" + valordesc + "</VALORDESC> " + serie +
                        "</TMOV>"

    var completeXml = "<MovMovimento>" + xmlMovimento + xmlItem + "</MovMovimento>"

    return completeXml
}

function getWebService(Usuario, Senha) {
    var Nome_Servico = Cem == "S" ? "wsDataServerCem":"wsDataServer";
    var Caminho_Servico = "com.totvs.WsDataServer";

    var dataServerService = ServiceManager.getServiceInstance(Nome_Servico);

    if(dataServerService == null){
        throw "Servico nao encontrado: " + Nome_Servico;
    }

    var serviceLocator = dataServerService.instantiate(Caminho_Servico);
    if(serviceLocator == null){
        throw "Instancia do servico nao encontrada: " + Nome_Servico + " - " + Caminho_Servico;
    }

    var service = serviceLocator.getRMIwsDataServer();
    if(service == null){
        throw "Instancia do dataserver do invalida: " + Nome_Servico + " - " + Caminho_Servico;
    }

    var serviceHelper = dataServerService.getBean();
    if(serviceHelper == null){
        throw "Instancia do service helper invalida: " + Nome_Servico + " - " + Caminho_Servico;
    }

    var authService = serviceHelper.getBasicAuthenticatedClient(service, "com.totvs.IwsDataServer", Usuario, Senha);
    if(serviceHelper == null){
        throw "Instancia do auth service invalida: " + Nome_Servico + " - " + Caminho_Servico;
    }

    return authService;
}
```

Testa aí. Boa sorte

Abs

---
