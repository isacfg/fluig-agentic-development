# Problemas ao obter relatório do RM via Fluig

> **Fonte:** [https://fluiggers.com.br/t/problemas-ao-obter-relatorio-do-rm-via-fluig/1741](https://fluiggers.com.br/t/problemas-ao-obter-relatorio-do-rm-via-fluig/1741)
> **Categoria:** API`s Fluig
> **Tags:** `bpm`, `rm`
> **Criado em:** 15/03/2023, 11:47
> **Visualizações:** 792 | **Likes:** 4 | **Respostas:** 2

---

## Pergunta original

**Cassius** (@Cassius) — 15/03/2023, 11:47

Bom dia a todas e todos.

Estou com a seguinte situação:
Estou tentando gerar um relatório no RM e exibi-lo pelo Fluig utilizando o “wsReport/MEX?wsdl”.
(documentação da TOTVS: [https://tdn.totvs.com/display/public/LRM/Web+Service+do+RM+Reports+no+Fluig](https://tdn.totvs.com/display/public/LRM/Web+Service+do+RM+Reports+no+Fluig))
Utilizando o exemplo passado pela TOTVS, o arquivo de dataset (WsFuigDataSet.js) vai bem até a linha em que ele utiliza como parâmetro o XML do relatório no RM (geração do GUID).
Ele apresenta a seguinte mensagem:
**End element ‘parameters’ from namespace ‘[http://www.totvs.com/](http://www.totvs.com/)’ expected. Found element ‘parametersSet’ from namespace ‘’. Line 13, position 19.**
Bom, aí parti pra tentar executar esse webservice via SoapUI. O mesmo erro apareceu.
Entretanto, como vi lá que ele apresentava o erro em “parameters”, troquei o nome da tag de tot:parameters para tot:Parameters (ou seja, apenas coloquei o “P” maiúsculo).
*Voilà*, retornou o GUID.
Aí copiei o GUID pra dentro do dataset no Fluig, inibi a execução do processo (permiti apenas a autenticação que é necessária) e seguindo o exemplo da TOTVS o relatório foi exibido perfeitamente no browser.
Aí minha pergunta, isso é um erro no webservice da TOTVS para integração com o RM? Tem como eu corrigi-lo? Ou apenas abrindo um chamado pra TOTVS?
Alguém já passou por algo similar?

Muito obrigado.

---

## Resposta #1

**Igor Rodrigues** (@fluigor.com.br) — 17/03/2023, 09:07

Neste caso acredito que somente um ajuste pela fábrica, pois o erro está no método.

---

## Resposta #2

**Victor Castro** (@victorcastro) — 28/03/2023, 16:15 | ❤️ 1

Fala [@Cassius](/u/cassius),

Eu estou desenvolvendo a mesma chamada, mas retorna o erro **Can’t find method com.sun.proxy.$Proxy1050.generateReport(number,number,string,string,string).**

Fiz seguindo a documentação. Não descobri ainda o que fiz de errado. Tem como você postar o código que você fez pra eu poder ver o que tá diferente?

---

## Resposta #3

**Afonso Uliana Neto** (@Afonso) — 23/04/2023, 22:37 | ❤️ 1

Boa Noite Pessoal,

Abaixo a chamada implementada em um Dataset.

```auto
function createDataset(fields, constraints, sortFields) {

	var newDataset = DatasetBuilder.newDataset();
	var ARQUIVO = "";

	newDataset.addColumn("HASHARQUIVO");

	var ARQUIVO = geraRelatorio();

	newDataset.addRow(new Array(ARQUIVO));

	return newDataset;
}

function geraRelatorio(){

	var usuario = "XXXXXXXXXXXXXX";
    var senha = "YYYYYYYYYYYYYYYYY";

    try{
		var authService = getWebService("WSREPORTE", "com.totvs.WsReport", usuario, senha, "com.totvs.IwsReport");
        var text;

        var resultado = authService.getReportInfo(1,63);

        var filtr = resultado.string.get(0);
        var param = resultado.string.get(1);

        var GUID = authService.generateReport(1,63, filtr, param, 'pedidoCompra.pdf');
        var offset = 0;

        var len = parseInt(authService.getGeneratedReportSize(GUID));
        var result = authService.getFileChunk(GUID, offset, len);

        return result;
	 } catch (e){
    	if (e == null)  e = "Erro desconhecido!";
        var mensagemErro = "Ocorreu um erro ao salvar dados no RM: " + e;
        return mensagemErro;
    }
}


function getWebService(Nome_Servico, Caminho_Servico, Usuario, Senha, Autenticacao){

	var dataServerService = ServiceManager.getServiceInstance(Nome_Servico);
	if(dataServerService == null){
		throw "Servico nao encontrado: " + Nome_Servico;
	}

	var serviceLocator = dataServerService.instantiate(Caminho_Servico);
	if(serviceLocator == null){
		throw "Instancia do servico nao encontrada: " + Nome_Servico + " - " + Caminho_Servico;
	}

	var service = serviceLocator.getRMIwsReport();

	if(service == null){
		throw "Instancia do dataserver do invalida: " + Nome_Servico + " - " + Caminho_Servico;
	}

	var serviceHelper = dataServerService.getBean();
	if(serviceHelper == null){
		throw "Instancia do service helper invalida: " + Nome_Servico + " - " + Caminho_Servico;
	}

	var authService = serviceHelper.getBasicAuthenticatedClient(service, Autenticacao , Usuario, Senha);
	if(serviceHelper == null){
		throw "Instancia do auth service invalida: " + Nome_Servico + " - " + Caminho_Servico;
	}

	return authService;
}
```

---

## Resposta #4

**gian lucas** (@gian_lucas) — 04/12/2023, 09:43

Gostaria de saber se conseguiu arrumar, se sim como, estou enfretando o mesmo problema a dias, testando no meu SOAP Ui funciona corretamente.

---

## Resposta #5

**Cassius** (@Cassius) — 18/03/2024, 18:50

Até agora não consegui arrumar não :disappointed:

---

## Resposta #6

**Felipe Galdino** (@FelipeGaldino) — 19/03/2024, 16:59 | ❤️ 2

Boa tarde pessoal!

Hoje me deparei com a necessidade de consumir o wsReport e encontrei esta publicação útil.

No entanto, observei que a documentação da Totvs no link: [Web Service do RM Reports no Fluig - Linha RM - TDN](https://tdn.totvs.com/display/public/LRM/Web+Service+do+RM+Reports+no+Fluig) está incorreta. O método `generateReport` espera receber seis parâmetros, conforme descrito abaixo:

```auto
generateReport(codColigada, idRelatorio, filtro, param, nomeArquivo, contexto);
```

Ao tentar fazer uma chamada sem especificar os seis parâmetros necessários, um erro é retornado. O erro indica o seguinte: Ocorreu um erro ao salvar dados no RM: InternalError: Can’t find method com.sun.proxy.$Proxy2175.generateReport(number,number,string,java.lang.String,string).

Segue o exemplo citado pelo [@Afonso](/u/afonso) com esse ajuste simples.

```auto
function createDataset(fields, constraints, sortFields) {

	var newDataset = DatasetBuilder.newDataset();
	var ARQUIVO = "";

	newDataset.addColumn("HASHARQUIVO");

	var ARQUIVO = geraRelatorio();

	newDataset.addRow(new Array(ARQUIVO));

	return newDataset;
}

function geraRelatorio(){

	var usuario = "xxxxx";
    var senha = "xxxxx";

    try{
		var authService = getWebService("wsReport", "com.totvs.WsReport", usuario, senha, "com.totvs.IwsReport");
        var resultado = authService.getReportInfo(0,0); //coligada // id relatorio
        log.dir(resultado);
		var filtro = resultado.string.get(0);
		log.dir(filtro)
        var param = resultado.string.get(1);
		log.dir(param)

        var GUID = authService.generateReport(0,0, filtro, param, 'teste.pdf','');
        var offset = 0;

        var len = parseInt(authService.getGeneratedReportSize(GUID));
        var result = authService.getFileChunk(GUID, offset, len);

        return result;
	 } catch (e){
    	if (e == null)  e = "Erro desconhecido!";
        var mensagemErro = "Ocorreu um erro ao salvar dados no RM: " + e;
        return mensagemErro;
    }
}


function getWebService(Nome_Servico, Caminho_Servico, Usuario, Senha, Autenticacao){

	var dataServerService = ServiceManager.getServiceInstance(Nome_Servico);
	if(dataServerService == null){
		throw "Servico nao encontrado: " + Nome_Servico;
	}

	var serviceLocator = dataServerService.instantiate(Caminho_Servico);
	if(serviceLocator == null){
		throw "Instancia do servico nao encontrada: " + Nome_Servico + " - " + Caminho_Servico;
	}

	var service = serviceLocator.getRMIwsReport();

	if(service == null){
		throw "Instancia do dataserver do invalida: " + Nome_Servico + " - " + Caminho_Servico;
	}

	var serviceHelper = dataServerService.getBean();
	if(serviceHelper == null){
		throw "Instancia do service helper invalida: " + Nome_Servico + " - " + Caminho_Servico;
	}

	var authService = serviceHelper.getBasicAuthenticatedClient(service, Autenticacao , Usuario, Senha);
	if(serviceHelper == null){
		throw "Instancia do auth service invalida: " + Nome_Servico + " - " + Caminho_Servico;
	}

	return authService;
}
```

Já solicitei a totvs para corrigir a documentação.

Espero que tenha ajudado.

---
