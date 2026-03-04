# hAPI

> **Fonte:** [https://tdn.totvs.com/display/fluig/hAPI](https://tdn.totvs.com/display/fluig/hAPI)

---

Em todos os eventos do processo é possível obter informações da API de *Workflow*. Cada evento possui acesso ao *handle* da API de *workflow* pela variável global **hAPI**. Os seguintes métodos estão disponíveis através da **hAPI**:

Veja o exemplo em nosso repositório [aqui](https://git.fluig.com/projects/SAMPLES/repos/projetos/browse).

Método

Especificação

getCardValue("nomeCampo")

Permite acessar o valor de um campo do formulário do processo, onde:

-   nomeCampo: nome do campo do formulário. 



Dica

Campos do tipo *checkbox* retornarem os valores on para marcado ou "" (vazio) para não marcado. Para trabalhar de uma maneira mais fácil, é possível transformá-los em booleanos.

Exemplo:

```
var campoCheckbox = hAPI.getCardValue("campoCheckbox") == "on" ? true : false;
```

setCardValue("nomeCampo", "valor")

Permite definir o valor de um campo do formulário do processo, onde:

-   nomeCampo: nome do campo do formulário;
-   valor: valor a ser definido para o campo do formulário.

setAutomaticDecision(numAtiv, listaColab, "obs")

Atenção: Depreciado

O método setAutomaticDecision encontra-se depreciado, não havendo mais suporte a partir da atualização 1.5.9 do fluig.

Recomenda-se a utilização da atividade de [Serviço](https://tdn.totvs.com/pages/viewpage.action?pageId=237397494) ou [Gateway Exclusivo](https://tdn.totvs.com/display/fluig/Gateways).

Permite definir o fluxo de saída de uma atividade de forma automática, onde:

-   numAtiv: número da atividade destino;
-   listaColab: lista (do tipo String) dos usuários que receberão a tarefa;
    -   Deve ser passada a matricula dos usuários que receberão a tarefa.
    -   Se a atividade destino for automática ou um evento intermediário que não possui usuário, deve ser informado "System:Auto" no lugar da matrícula.
-   obs: observação da tarefa;


```
function beforeStateEntry(sequenceId){
    if(sequenceId == 4){
        var users = new java.util.ArrayList();

        //Caso a próxima atividade seja uma automática utilizar users.add("System:Auto");
        users.add("adm");

        hAPI.setAutomaticDecision(7, users, "Decisao tomada automaticamente pelo Fluig");

    }
}
```

getActiveStates()

Retorna uma lista das atividades ativas do processo.

getActualThread(numEmpresa, numProcesso, numAtiv)

Atenção: Depreciado

O método getActualThread encontra-se depreciado, não havendo mais suporte a partir da atualização 1.8.0-221122 do Fluig.

Recomenda-se a utilização dos parâmetros WKCurrentMovto e WKActualThread descritos na documentação [Parâmetros](https://tdn.totvs.com/x/BuYlE).

Retorna a *thread* da atividade que está ativa, lembrando que em caso de atividades paralelas, retorna 0, 1, 2 e assim sucessivamente.

-   numEmpresa: número da empresa;
-   numProcesso: número da solicitação;
-   numAtiv: número da atividade.

Exemplo de uso para esta função:



```
function afterTaskCreate(colleagueId) {

    var nrProxAtividade = getValue("WKNextState");
    if (nrProxAtividade == "5"){ //atividade entre paralelas

        var data = new Date();
        var numEmpresa = getValue("WKCompany");

        //seta o dia, mês (Janeiro é 0) e ano
        data.setDate(20);
        data.setMonth(10);
        data.setFullYear(2010);

        // Recupera o numero da solicitação
        var numProcesso = getValue("WKNumProces");

        // Seta o prazo para as 14:00
        hAPI.setDueDate(numProcesso, hAPI.getActualThread(numEmpresa, numProcesso, nrProxAtividade), colleagueId, data, 50400);
    }
}
```

setDueDate(numProcesso, numThread, "userId", dataConclusao, tempoSeg)

Permite alterar o prazo de conclusão para uma determinada atividade do processo, onde:

-   numProcesso: número da solicitação;
-   numThread: número da *thread* (normalmente 0, quando não se utiliza atividades paralelas);
-   userId: o usuário responsável pela tarefa;
-   dataConclusao: a nova data de conclusão;
-   tempoSeg: tempo que representa a nova hora de conclusão, calculado em segundos após a meia-noite.

    Recomendamos a utilização deste método no evento afterTaskCreate, pois será executado logo após a criação da tarefa. Exemplo:

    ```
    function afterTaskCreate(colleagueId) {
    	var atividade = getValue('WKCurrentState');
    	// Atividade de sequência 5 é a da tarefa criada e que vou alterar o prazo de conclusão
    	if (atividade == 5) {
    		// Recuperando a data informada no campo do formulário
    		var prazoFormulario = hAPI.getCardValue('prazoConclusao');
    		if (prazoFormulario != undefined && prazoFormulario != '') {
    			var numeroDaSolicitacao = getValue('WKNumProces');
    			var threadDaSolicitacao = 0; // Normalmente 0, quando não for atividade paralela
    			var responsavelPelaTarefa = colleagueId;

    			/* Nesse caso o formato da data salva pelo formulário no exemplo é DD/MM/AAAA, mas isso pode variar de acordo com a formatação utilizada, 
                   mudando assim as posições das informações dentro do array */

    			/* Extrai os dados da data do formulário para um array, para posteriormente transformar em data do Javascript */
    			var arrayPrazoConclusao = prazoFormulario.split("/");
    			var dia = arrayPrazoConclusao[0]; // Posição 0 do array é o dia
    			var mes = arrayPrazoConclusao[1] - 1; // Posição 1 do array é o mês (Subtraímos 1 porque na data do Javascript o mês vai de 0 a 11)
    			var ano = arrayPrazoConclusao[2]; // Posição 2 do array é o ano

    			var horaDoPrazo = (24*60*60) - 1; /* A hora é em milisegundos, e esse cálculo tem resultado de 23:59:59, ou seja, 
                o prazo de conclusão vai ser até o último segundo do dia informado no formulário */

    			// Cria a data no Javascript
    			var dataDoPrazo = new Date();
    			dataDoPrazo.setDate(dia);
    			dataDoPrazo.setMonth(mes);
    			dataDoPrazo.setFullYear(ano);

    			// Altera o prazo de conclusão
            	hAPI.setDueDate(numeroDaSolicitacao, threadDaSolicitacao, responsavelPelaTarefa, dataDoPrazo, horaDoPrazo);
    		}
    	}
    }
    ```


startProcess(processId, ativDest, listaColab, "obs", completarTarefa, valoresForm, modoGestor)

Inicia uma solicitação *workflow*, onde:

-   processId: código do processo;
-   ativDest: código da atividade de destino;
-   listaColab: lista (do tipo String) de usuários;
-   obs: texto da observação;
-   completarTarefa: indica se deve completar a tarefa (true) ou apenas salvar (false);
-   valoresForm: um Mapa com os valores do formulário do processo;
-   modoGestor: indica que o usuário iniciará a solicitação como gestor (true) ou que o usuário iniciará a solicitação apenas como solicitante (false).

Retorna um mapa com informações da solicitação criada. Entre elas, o iProcess que é o número da solicitação criada.



Exemplo de inicialização de uma solicitação pelo método hAPI.startProcess enviando a atividade para um papel:

```
function beforeStateEntry(sequenceId){

	if (sequenceId == 5) {
		//A tarefa destino tem o mecanismo de atribuição para um papel, cujo o código é papelUser
		var users = new java.util.ArrayList();
		users.add("Pool:Role:papelUser");

		var formData = new java.util.HashMap();
 
		formData.put("Nome_do_Campo1", "Valor do Campo 1");
        formData.put("Nome_do_Campo2", "Valor do Campo 2");

		hAPI.startProcess("pool", 4, users, "Solicitação inicializada pela função hAPI", true, formData, false);
	}

}
```

setColleagueReplacement(userId)

Seta um usuário substituto, onde:

-   userId: código do usuário substituto.

setTaskComments("userId", numProcesso,  numThread, "obs")

Define uma observação para uma determinada tarefa do processo, onde:

-   userId: usuário responsável pela tarefa;
-   numProcesso: número da solicitação de processo;
-   numThread: é o número da *thread* (normalmente 0, quando não se utiliza atividades paralelas);
-   obs: a observação.



Atenção

É recomendado utilizar em eventos do tipo 'after', pois o comentário será criado no histórico da solicitação, então é necessário que já exista uma movimentação do processo para atribuir este comentário.

getCardData(numProcesso)

Retorna um Mapa com todos os campos e valores do formulário da solicitação.

-   numProcesso: número da solicitação de processo.



Para formulário pai e filho, os campos são identificados da seguinte forma: **campo1\_\_\_1,** sendo **campo1** o nome atribuído ao campo através da tag do campo HTML +\_\_\_(3 underlines) + **número sequencial do registro**.

Por exemplo, em um formulário de nota fiscal com os seguintes campos:

-   Formulário pai:
-   Número da Nota - numNota;



-   Formulário filho:
-   Código do item - codItem;
-   Descrição do item - desItem;
-   Quantidade do item - qtdItem;

O retorno do mapa seria:

-   numNota = 99999
-   codItem\_\_\_1 = 91
-   desItem\_\_\_1 = Caneta
-   qtdItem\_\_\_1 = 100
-   codItem\_\_\_2 = 92
-   desItem\_\_\_2 = Lápis
-   qtdItem\_\_\_2 = 200
-   codItem\_\_\_3 = 93
-   desItem\_\_\_3 = Borracha
-   qtdItem\_\_\_3 = 150

getAdvancedProperty("propriedade")

Retorna o valor da propriedade avançada de um processo.

-   propriedade: nome da propriedade avançada. 

calculateDeadLineHours(data, segundos, prazo, periodId)



Importante!

Este método retorna o horário com a formatação BRT, sendo necessário algumas adaptações em algumas funções do javascript, como exemplo: getFullYear().

Calcula um prazo a partir de uma data com base no expediente e feriados cadastrados no produto passando o prazo em horas:

-   data: data inicial (tipo Date);
-   segundos: quantidade de segundos após a meia noite;
-   prazo: prazo que será aplicado em horas (tipo int);
-   periodId: código de expediente.  

Retorno: Array de Objeto, onde a primeira posição do array é a data e a segunda a hora.

Exemplo:



```
function afterTaskCreate(colleagueId) {
    var data = new Date();

    //Calcula o prazo
    var obj = hAPI.calculateDeadLineHours(data, 50000, 2, "Default");
    var dt = obj[0];
    var segundos = obj[1];

    //Recupera o numero da solicitação
    var processo = getValue("WKNumProces");

    //Altera o prazo do processo
    hAPI.setDueDate(processo,0,colleagueId, dt, segundos);
}
```

calculateDeadLineTime(data, segundos, prazo, periodId)

Calcula um prazo a partir de uma data com base no expediente e feriados cadastrados no produto passando o prazo em minutos:

-   data: data inicial (tipo Date);
-   segundos: quantidade de segundos após a meia noite;
-   prazo: prazo que será aplicado em minutos (tipo int);
-   periodId: código de expediente.

Retorno: Array de Objeto, onde a primeira posição do array é a data e a segunda a hora.

Exemplo:



```
function afterTaskCreate(colleagueId) {
    var data = new Date();
    //Calcula o prazo
    var obj = hAPI.calculateDeadLineTime(data, 50000, 120, "Default");
    var dt = obj[0];
    var segundos = obj[1];

    //Recupera o numero da solicitação
    var processo = getValue("WKNumProces");

    // Altera o prazo do processo
    hAPI.setDueDate(processo,0,colleagueId, dt, segundos);
}
```

getUserTaskLink(numAtiv)

Permite buscar o *link* para movimentação de uma determinada atividade, e utilizá-lo para enviar um *e-mail* com *template* personalizado, por exemplo.

-   numAtiv: número da atividade

Retorno: *link* para movimentação da solicitação.



Atenção

Este método não retorna *link* para atividades que ainda não foram criadas, ou seja, não pode ser utilizado em eventos como afterTaskComplete(colleagueId,nextSequenceId,userList) para obter o *link* da atividade com "nextSequenceId".



Exemplo:



```
function afterTaskCreate(colleagueId) {
    var sequenceId = getValue("WKCurrentState");
    if (sequenceId == 2) {
        var destinatarios = new java.util.ArrayList();
        destinatarios.add(colleagueId);

        var parametros = new java.util.HashMap();
        parametros.put("WDK_CompanyId", getValue("WKCompany"));
        parametros.put("WDK_TaskLink", hAPI.getUserTaskLink(sequenceId));

        notifier.notify(getValue("WKUser"), "tplCustomizado", parametros, destinatarios, "text/html");
    }
}
```

createAdHocTasks(workflowProcessInstanceId, sequenceId, assunto, detalhamento, listatvidadesAhoc)

Permite a criação de atividades adhoc dentro dos eventos do fluig

-   workflowProcessInstanceId: número da solicitação *workflow* no qual se deseja criar as tarefas;
-   sequenceId: código de sequencia da atividade de SubprocessoAdhoc;
-   Assunto: assunto da listagem das tarefas que será repassado ao formulário de atividade ad-hoc;
-   Detalhe: texto com o detalhamento das atividades em questão. Esse texto também será repassado para o formulário da atividade ad-hoc;
-   listaAtividadesAdhoc: é a lista de atividades contento o que, quando e quem executará as tarefas ad-hoc.


    Atenção

    Certifique-se que o *sequenceId* é a sequência da atividade ad-hoc. Normalmente esta atividade contém o símbolo do sub-processo comum acompanhado do identificador "~", conforme exemplo abaixo :

    A sequência pode ser consultada a partir do *plugin* fluig Designer verificando o campo código ao visualizar as propriedades da atividade de subprocesso ad-hoc.


    Exemplo:




```
function beforeStateEntry(sequenceId){
    //lista das tarefas
    var adHocTasks = new Array();
    // variavel com o código da solicitação do processo.
    var process = getValue("WKNumProces");

    //criando uma tarefa
    var task = { name:"nome da tarefas", responsible:"adm", dueDate:"10/10/2014"};
    //adicionando a tarefa criada para a lista de tarefas
    adHocTasks.push(task);


    // process    = numero da solicitacao
    // sequenceId = codigo processstate da atividade que tem o processo ad-hoc
    // meeting    = nome do assunto em questao
    // detalhe    = detalhamento do assunto
    // adHocTasks   lista te tarefas

    hAPI.createAdHocTasks(process, sequenceId, "Assunto das tarefas", "Detalhamento do assunto ", adHocTasks);


}
```

listAttachments()

Retorna a lista de anexos do processo.

DocumentDto\[ \]

[Veja aqui](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto) os paramêtros do objeto DocumentDto e [aqui](https://tdn.totvs.com/display/fluig/Desenvolvimento+de+Eventos#DesenvolvimentodeEventos-DocumentDto) os métodos para acesso as variáveis.



Atenção

O formulário do processo não é retornado, apenas anexos do tipo GED e *Workflow*.



Exemplo:



```
function beforeTaskSave(colleagueId, nextSequenceId, userList) {
    var attachments = hAPI.listAttachments();
    var hasAttachment = false;

    for (var i = 0; i < attachments.size(); i++) {
        var attachment = attachments.get(i);
        if (attachment.getDocumentDescription() == "fluig.pdf") {
            hasAttachment = true;
        }
    }

    if (!hasAttachment) {
        throw "Attachment not found!";
    }
}
```

publishWorkflowAttachment(documento)

Permite publicar anexos *workflow* da solicitação no GED do fluig, onde:

-   documento: anexo *workflow* a ser publicado no GED.


    Atenção

    É obrigatório informar o id da pasta destino do documento através do método setParentDocumentId, conforme o exemplo abaixo.

    Importante

    Utiliza os parâmetros do objeto DocumentDto.


Exemplo:



```
function beforeStateEntry(sequenceId){
    if (sequenceId == 4) {
        var calendar = java.util.Calendar.getInstance().getTime();
        var docs = hAPI.listAttachments();
        for (var i = 0; i < docs.size(); i++) {
            var doc = docs.get(i);

            if (doc.getDocumentType() != "7") {
                continue;
            }

            doc.setParentDocumentId(27);
            doc.setVersionDescription("Processo: " + getValue("WKNumProces"));
            doc.setExpires(false);
            doc.setCreateDate(calendar);
            doc.setInheritSecurity(true);
            doc.setTopicId(1);
            doc.setUserNotify(false);
            doc.setValidationStartDate(calendar);
            doc.setVersionOption("0");
            doc.setUpdateIsoProperties(true);

            hAPI.publishWorkflowAttachment(doc);
        }
    }
}
```

attachDocument(documentId)



Permite anexar documentos do GED a solicitação *workflow*, onde:

-   documentId: código do documento a ser anexado a solicitação.



Exemplo:



```
function beforeStateEntry(sequenceId) {
    var docList = [44, 46, 135];

    if (sequenceId == 2) {
        for (var i = 0; i < docList.length; i++) {
            var docId = docList[i];
            hAPI.attachDocument(docId);
        };
    }
}
```

Veja o exemplo (**document-attach**) no [repositório do fluig](https://git.fluig.com/projects/SAMPLES) clicando [aqui](https://git.fluig.com/projects/SAMPLES/repos/projetos/browse/document-attach).

getAvailableStatesDetail(companyId, userId, processId, processInstanceId, threadSequence)

Retorna detalhes das atividades disponíveis para seleção.

Parâmetros:

-   companyId: código da empresa;
-   userId: id do usuário;
-   processId: código do processo;
-   processInstanceId: número da solicitação;
-   threadSequence: indica se existe atividade paralela no processo. Se não existir o valor é 0 (zero), caso exista, este valor pode ser de 1 a infinito, dependendo da quantidade de atividade paralelas existentes no processo.

Retorno: ProcessStateDto\[\].

getChildrenInstances(processInstanceId)

Retorna uma lista com os números das solicitações filhas, onde:

-   processInstanceId: número da solicitação pai.



Exemplo:



```
function beforeStateEntry(sequenceId){
if (sequenceId == 5) {
    var numProcess = getValue("WKNumProces");

    // Busca a Lista com o número da solicitação dos filhos
    var childrenProcess = hAPI.getChildrenInstances(numProcess);

    for (var i = 0; i < childrenProcess.size(); i++) {
        // Busca os dados do formulário da solicitação filha
        var childCardData = hAPI.getCardData(childrenProcess.get(i));

        // Replica um dado do formulário da solicitação filha para o formulário da solicitação pai
        var obs = childCardData.get("obs");
        hAPI.setCardValue("obs", obs );
        }
    }
}
```

getParentInstance(processInstanceId)

Retorna o número da solicitação pai, onde:

-   processInstanceId: número da solicitação filha.



Exemplo:



```
function beforeStateEntry(sequenceId) {
    if (sequenceId == 2) {
        var numProcess = getValue("WKNumProces");

        // Busca o número da solicitação pai
        var parentProcess = hAPI.getParentInstance(numProcess);

        // Busca os dados do formulário da solicitação pai
        var parentCardData = hAPI.getCardData(parentProcess);

        // Replica um dado do formulário da solicitação pai para o formulário da solicitação filha
        var cnpj = parentCardData.get("cnpj");
        hAPI.setCardValue("cnpj", cnpj);
    }
}
```

addCardChild(tableName, cardData)

Adiciona um filho no formulário pai e filho do processo, onde:

-   tableName: nome da tabela filha onde será criado o filho;
-   cardData: mapa com os campos do filho e seus valores.



Exemplo:



```
function beforeStateEntry(sequenceId) {
    if (sequenceId == 4) {
        var childData = new java.util.HashMap();
        childData.put("matricula", "0041");
        childData.put("nome", "João Silva");
        childData.put("cpf", "44455889987");
        hAPI.addCardChild("funcionarios", childData);
    }
}
```

removeCardChild

Este método estará disponível a partir da atualização **1.8.1** do TOTVS Fluig Plataforma. 



Remove uma linha de uma tabela Pai X Filho.

Utilize o método **removeCardChild**, passando o nome da tabela (valor do atributo name) e o número da linha que deseja deletar.

Exemplo:

removeCardChild(tableName, 1);



Observação

Caso queira excluir mais de uma linha e chamar o método mais de uma vez (utilizando um laço de repetição), se atente ao detalhe de que cada chamada nesse método ele irá resetar os index dos filhos da tabela por exemplo:
Uma tabela tem 3 registros(A,B,C) e você utiliza o método duas vezes para excluir as duas primeiras linhas (A,B):

removeCardChild(tableName, 1);
removeCardChild(tableName, 2);

Nesse caso ele estaria excluindo a linha A e linha C, pois quando chamou o primeiro método para excluir a linha 1(A) ele resetou os index da tabela e a linha 2(B) passou a ser 1 e a 3(C) passou a ser 2 e assim por diante.

Temos duas alternativas para esse cenário:

**1** - Excluir primeiro os últimos registros

Exemplo:

removeCardChild(tableName, 2);
removeCardChild(tableName, 1);

**2** - Antes de excluir utilizar um for para percorrer a linha de forma decrescente. Assim você garante estar excluindo sempre a linha que deseja sem interferir na próxima, por exemplo:

```
var indexes = hAPI.getChildrenIndexes("tableName");
for (var i = indexes.length-1; i >= 0; i--) {
	hAPI.removeCardChild("tableName", indexes[i]);
}
```

Ou este outro exemplo:

```
var indexes = hAPI.getChildrenIndexes("tableName");
for (var i = indexes.length-1; i >= 0; i--) {
	if (indexes[i] == 1) {
		hAPI.removeCardChild("tableName", indexes[i]);
	}
}
```

Onde a variável indexes\[i\] possui o valor do número da linha.





getChildrenIndexes

Retorna um lista com os filhos de um formulário Pai x Filho.

Utilize o método **getChildrenIndexes**, passando o nome da tabela (valor do atributo name).



**1 -** Utilize um for para percorrer cada linha e aplicar sua lógica, por exemplo:

```
var indexes = hAPI.getChildrenIndexes("tableName");
var resultado = [];

for (var i = 0; i < indexes.length; i++) {
    var campoCompleto = "seu_campo___" + indexes[i];
    var linha = hAPI.getCardValue(campoCompleto);

    resultado.push(linha);
}

log.dir(resultado)
```

Esse método está acessível a partir da segunda atividade do processo.



Este método está disponível até a versão **1.8.2** do TOTVS Fluig Plataforma. Acompanhe o [Release Notes](https://tdn.totvs.com/pages/viewpage.action?pageId=979805603) para verificar a liberação nas próximas versões.

**oculto**





Nos eventos existe a possibilidade de integração com serviços de dados. Tais serviços podem ser WebServices, AppServer Progress® e Dataset.

O acesso a WebServices ou AppServer Progress® deve ser previamente configurado no cadastro de Serviços. Para mais detalhes consulte em [Integração com aplicativos externos](https://tdn.totvs.com/pages/viewpage.action?pageId=73082260), no capítulo "Acessando WebServices a partir do fluig".

Abaixo um exemplo de como executar o WebService de Colleague para criar um usuário no fluig após executar uma tarefa:



```
function afterTaskComplete(colleagueId, nextSequenceId, userList) {

    if (nextSequenceId == 2) {
        //Busca o webservices de Colaborador
        //Servico "<url_fluig>/webdesk/ECMColleagueService?wsdl" cadastrado com o código "Colleague"
        var colleagueServiceProvider = ServiceManager.getServiceInstance("Colleague");
        var colleagueServiceLocator = colleagueServiceProvider.instantiate("com.totvs.technology.ecm.foundation.ws.ECMColleagueServiceService");
        var colleagueService = colleagueServiceLocator.getColleagueServicePort();

        //Cria o ColleagueDto – Verificar a lista de métodos na visualização do serviço
        var colleagueDto = colleagueServiceProvider.instantiate("com.totvs.technology.ecm.foundation.ws.ColleagueDto");
        colleagueDto.setCompanyId(1);
        colleagueDto.setColleagueId("teste");
        colleagueDto.setColleagueName("Usuario Teste");
        colleagueDto.setActive(true);
        colleagueDto.setVolumeId("Default");
        colleagueDto.setLogin("teste");
        colleagueDto.setMail("[email protected]");
        colleagueDto.setPasswd("teste");
        colleagueDto.setAdminUser(false);
        colleagueDto.setEmailHtml(true);
        colleagueDto.setDialectId("pt_BR");

        //Cria o colleagueDtoArray e adiciona
        var colleagueDtoArray = colleagueServiceProvider.instantiate("com.totvs.technology.ecm.foundation.ws.ColleagueDtoArray");
        colleagueDtoArray.getItem().add(colleagueDto);

        var result = colleagueService.createColleague("adm", "adm",  1, colleagueDtoArray);
        log.info("Result: " + result);
    }
}
```



Abaixo um outro exemplo utilizando o WebService ECMCardService para alterar o valor do campo de um registro de formulário após a entrada em uma nova atividade:



```
function afterStateEntry(sequenceId){
    if (sequenceId == 2) {
        //Servico "<url_fluig>/webdesk/ECMCardService?wsdl"cadastrado com o código "CardService"
        var cardServiceProvider = ServiceManager.getServiceInstance("01");
	    var cardServiceLocator = cardServiceProvider.instantiate("com.totvs.technology.ecm.dm.ws.ECMCardServiceService");
	    var cardService = cardServiceLocator.getCardServicePort();
	    var cardFieldDtoArray = cardServiceProvider.instantiate("com.totvs.technology.ecm.dm.ws.CardFieldDtoArray");
	    var cardField = cardServiceProvider.instantiate("com.totvs.technology.ecm.dm.ws.CardFieldDto");

        //Seta valor no campo com name = 'nome'
        cardField.setField("nome");
        cardField.setValue("Valor alterado via WS dentro de um evento workflow");

        var vetCardFields = new Array();
        vetCardFields.push(cardField);
        cardFieldDtoArray.getItem().addAll(vetCardFields);

        //Altera o(s) campo(s) do registro de formulário.
        //updateCardData(tenantId, login, senha, codRegistroForm, cardFieldDtoArray);
        cardService.updateCardData(1, "adm", "adm", 8, cardFieldDtoArray);
    }
}
```



Os seguintes eventos são disparados pela API de *Workflow*:

Evento

Descrição

Parâmetros

afterCancelProcess

Ocorre após o cancelamento da solicitação. É recomendado não disparar exceções neste método, pois o cancelamento já foi realizado.

-   Usuário corrente (String);
-   Número do processo (Integer).

afterProcessCreate

Ocorre logo após a criação de um novo processo.



-   Número do novo processo (Integer).

afterProcessFinish

Ocorre após finalizada a solicitação.

-   Número do processo (Integer).

afterReleaseVersion

Ocorre após a liberação de uma versão do processo.

-   XML com a definição do processo (String).

afterStateEntry

Ocorre após a entrada em uma nova atividade.

 

Este evento não retorna erros para a tela naturalmente. Caso ocorra um erro durante a execução do afterStateEntry, ele será ignorado. Se o mesmo erro resultar no encerramento da transação (por exemplo, causando o *timeout* de transação ou uma exceção que force *Rollback*) a mensagem de transação interrompida será apresentada em tela ao invés do erro esperado.

-   Sequência da atividade (Integer).

afterStateLeave

Ocorre após a saída de uma atividade.

-   Sequência da atividade (Integer).

afterTaskComplete

Ocorre após o usuário completar uma tarefa, porém as informações de próxima tarefa e usuários destino já foram salvas.

-   Usuário corrente (String);
-   Sequência da próxima atividade (Integer);
-   Lista de usuários destino (List<String>).

afterTaskCreate

Ocorre após o usuário receber uma tarefa.

-   Matrícula do usuário (String).

afterTaskSave

Ocorre após salvar as informações selecionadas pelo usuário.

-   Usuário corrente (String);
-   Sequência da próxima atividade (Integer);
-   Lista de usuários destino (List<String>).

beforeCancelProcess

Ocorre antes do cancelamento da solicitação.

-   Usuário corrente (String);
-   Número do processo (Integer).

beforeStateEntry

Ocorre antes da entrada em uma nova atividade.

Dica

 

Utilize este evento para realizar validações que ocasionalmente possam resultar no bloqueio da movimentação do processo.

Para suspender a movimentação e exibir uma mensagem de alerta para o usuário, utilize o comando 'throw', conforme exemplo abaixo:



`throw` `"Erro ao movimentar solicitação"``;`

-   Sequência da atividade (Integer).

beforeStateLeave

Ocorre antes da saída de uma atividade.

-   Sequência da atividade (Integer).

beforeTaskComplete

Ocorre antes que o usuário complete uma tarefa, porém as informações de próxima tarefa e usuários destino já foram salvas.

Observação

 

Diferente dos demais eventos do tipo **before**, este evento **não** dispara suas validações ao servidor, fazendo com que o sistema não pare a movimentação da atividade quando o mesmo lança uma exceção.

-   Usuário corrente (String);
-   Seqüência da próxima atividade (Integer);
-   Lista de usuários destino (List<String>).

beforeTaskCreate

Ocorre antes que o usuário receba uma tarefa.

-   Matrícula do usuário (String).

beforeTaskSave

Ocorre antes de salvar as informações selecionadas pelo usuário.

-   Usuário corrente (String);
-   Sequência da próxima atividade (Integer);
-   Lista de usuários destino (List<String>).

calculateAgreement

Ocorre após o cálculo do consenso (somente para atividades conjuntas) e permite alterar os dados do consenso de uma atividade.

Exemplo:



```
function calculateAgreement(currentState, agreementData) {
    log.info("Consenso Atual: " + agreementData.get("currentPercentage"));
    log.info("Atividade Destino Atual: " +  agreementData.get("currentDestState"));
    log.info("Usuario Destino Atual: " + agreementData.get("currentDestUsers"));

    //Altera o consenso
    agreementData.put("currentPercentage", 100);
    agreementData.put("currentDestState", 2);
    agreementData.put("currentDestUsers", "marcos");
}
```

-   currentState (Integer): atividade que terá o consenso alterado;
-   agreementData (Map<String, Object>): mapa de dados com o percentual calculado, a atividade destino e os usuários de destino. Para obter os valores, utilize o método "get" e para atribuir um valor, utilize o método "put".

onNotify

Se refere a um evento global que ocorre após a movimentação da solicitação e antes de enviar as notificações.

Para mais detalhes consulte a página [Desenvolvimento de eventos - On Notify](https://tdn.totvs.com/display/fluig/Desenvolvimento+de+Eventos#DesenvolvimentodeEventos-OnNotify).

subProcessCreated

Ocorre quando um sub-processo é criado.

-   Número do sub-processo (Integer).

validateAvailableStates

Ocorre após montada a lista de tarefas disponíveis para o usuário a partir da tarefa atual.



Exemplo:



```
function validateAvailableStates(iCurrentState, stateList) {
    // Código: 1 - Descrição: Atividade inicial
    // Código: 2 - Descrição: Atividade ordem 3
    // Código: 3 - Descrição: Atividade ordem 2
    // Código: 4 - Descrição: Atividade ordem 1

    // stateList atual: [2,3,4]

    var stateArray = new Array();

    if (iCurrentState == 1) {
        stateList.clear();
        stateArray.push(4,3,2);
    }

    stateArray.forEach(function(code) {
        stateList.add(new java.lang.Integer(code));
    });

    // stateList reordenado: [4,3,2]
    return stateList;
}
```

-   iCurrentState: Sequência da atividade atual (Integer);
-   stateList: Lista das sequências dapublishWorkflowAttachments atividades (List<Integer>).  

 

-   Não é necessário criar todos os eventos do processo – apenas aqueles nos quais se tem interesse.
-   Todos os eventos são executados de forma persistente.

Importante!

 

Não é possível capturar (hAPI.getCardValue) ou adicionar (hAPI.setCardValue) dados no formulário na inicialização do processo, sendo possível somente a partir da segunda tarefa.

Para isso pode ser utilizada a seguinte lógica:



```
function beforeStateEntry(sequenceId) {
    if (sequenceId  != "NUMERO_DA_ATIVIDADE_INICIAL") {
        var campo = hAPI.getCardValue("campo1");
    }
}
```
