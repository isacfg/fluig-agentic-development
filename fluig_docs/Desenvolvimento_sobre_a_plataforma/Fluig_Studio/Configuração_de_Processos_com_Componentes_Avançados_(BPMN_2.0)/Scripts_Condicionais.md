# Scripts Condicionais

> **Fonte:** [https://tdn.totvs.com/display/fluig/Scripts+Condicionais](https://tdn.totvs.com/display/fluig/Scripts+Condicionais)

---

# Índice

# Objetivo

O objetivo desta página é esclarecer o uso de um script condicional do fluig.

# Script Condicional

O objetivo de um script condicional é verificar alguma informação que não pertence ao fluig que foi disponibilizada em algum webservice externo. Essa informação é dinâmica logo os eventos condicionais poderão ser programados para periodicamente executarem o script e verificarem se uma informação atingiu um determinado valor ou atingiu algum patamar estabelecido pelo negócio.

### Exemplo de utilização do script condicional

Um exemplo de uso de negócio seria criar um processo com uma atividade inicial condicional cujo script verifica o preço do dólar para compra. O preço do dólar pode variar durante o dia e neste caso poderíamos ter um processo workflow de compra de dólares que seria iniciado apenas se o preço do dólar atingisse um patamar aceitável para o negócio do cliente.

Os scripts condicionais são scripts javascript que possuem basicamente todos os recursos dos eventos de processo do fluig podendo combinar a consulta de webservices externos com dados do formulário. Quando este script conseguir retornar *true* então a solicitação workflow será iniciada ou movimentada de acordo com o elemento utilizado na modelagem.



**Exemplo de script acessando um webservice:**

```
function intermediateconditional2() {

	var adminUser = "adm";
	var adminPass = "adm";
	var colleagueId = hAPI.getCardValue("cbuser")
	var companyId = 1;
	var solic = hAPI.getCardValue("nmSol");
	var NOME_SERVICO = "fluigDashBoardService";
	var CAMINHO_SERVICO = "com.totvs.technology.ecm.dm.ws.ECMDashBoardServiceService";
	var servico = ServiceManager.getService(NOME_SERVICO);
	var instancia = servico.instantiate(CAMINHO_SERVICO);
	var ws = instancia.getDashBoardServicePort();
	var summaryRequests = ws.getSummaryRequests(companyId, adminUser, adminPass, colleagueId);
	var pendingRequests = summaryRequests.getNumberOfWorkflowPendingRequests();
	log.info("pendingRequests " + pendingRequests);
	if (pendingRequests > solic) {
		return true;
	}
}
```

Observação

Embora seja possível realizar a alteração de dados e consulta de webservices internos do fluig dentro de um script condicional, alertamos que esta prática não é recomendada.

Em nossos exemplos estamos utilizando os próprios webservices do fluig apenas para facilitar a compreensão e implantação destes exemplos em ambientes de desenvolvimento do fluig.

### Processo Exemplo monitoramento de solicitações

Para este processo exemplo iremos monitorar a lista de tarefas pendentes de um usuário fluig escolhido no formulário do processo. Caso o número de solicitações pendentes seja superior ao número tolerado informado no formulário então será encaminhada para o administrador uma tarefa de "Aviso" em que o administrador poderá atuar com este usuário.

**Figura 1 - Diagrama do processo de exemplo com script condicional.**

### Procedimento para implantação do exemplo

-   Cadastre o DashBoardService utilizando o código fluigDashBoardService . A URL informada será a seguinte:


[https://(servidor): porta /webdesk/DashBoardService?wsdl](https://envinc.fluig.com/webdesk/DashBoardService?wsdl)

-   Importar o processo exemplo.

-   Cadastrar o servidor destino no studio.

-   Verificar a frequência de checagem do Job nas propriedades da atividade condicional no fluxo.



-   Exportar e liberar o processo junto com o formulário que está neste projeto.
-   Iniciar uma solicitação e mover para a atividade condicional.

Após os procedimentos realizados acima você terá um exemplo de script condicional funcionando no seu ambiente. [Clique aqui](https://tdn.totvs.com/download/attachments/201732539/ScriptCondicional.zip?version=1&modificationDate=1442268598000&api=v2) e faça o download do projeto que contém o exemplo acima mencionado.

# Variáveis e funções suportadas em scripts condicionais

Segue a lista de variáveis e funções suportadas em scripts condicionais :

Variável

Função

**log**

Impressão de mensagens dentro do log do Fluig.

**ServiceManager**

Objeto que permite a instância de objetos é métodos de webservices soap

**DatasetManager**

Objeto que permite carregar datasets entro das customizações.

**DatasetFactory**

O objeto **DatasetFactory** é a "porta de entrada" para o acesso a qualquer Dataset Maiores detalhes sobre este item se encontram no artigo sobre [construção de datasets.](https://tdn.totvs.com/display/fluig/Desenvolvimento+de+Datasets) 

**DatasetBuilder**

Permite a criação de datasets. Maiores detalhes sobre este item se encontram no artigo sobre [construção de datasets.](https://tdn.totvs.com/display/fluig/Desenvolvimento+de+Datasets) 

**ConstraintType**

Determina o tipo de constraint a ser utilizada em uma condição do dataset. Maiores detalhes sobre este item se encontram no artigo sobre [construção de datasets.](https://tdn.totvs.com/display/fluig/Desenvolvimento+de+Datasets)

**notifier**

Permite realizar notificações extras em eventos e scripts.

**WKParams**

Coleção de parâmetros que podem ser utilizados dentro dos scripts como o WKCompany e WKUser. As outras variáveis e o que elas retornam podem ser encontradas no artigo sobre [desenvolvimento de processos workflow](https://tdn.totvs.com/display/fluig/Desenvolvimento+de+Workflow) .

**hAPI**

Contém operações relacionadas a solicitação workflow em andamento. Está disponível apenas para os scripts de eventos intermediários condicionais. Maiores detalhes sobre as funções da hAPI podem ser encontradas no artigo sobre [desenvolvimento de processos workflow](https://tdn.totvs.com/display/fluig/Desenvolvimento+de+Workflow).
