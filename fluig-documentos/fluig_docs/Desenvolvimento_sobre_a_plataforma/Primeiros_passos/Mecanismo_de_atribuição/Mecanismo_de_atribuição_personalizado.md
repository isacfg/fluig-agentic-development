# Mecanismo de atribuição personalizado

> **Fonte:** [https://tdn.totvs.com/pages/viewpage.action?pageId=142804157](https://tdn.totvs.com/pages/viewpage.action?pageId=142804157)

---

# Índice



# Objetivo

* * *

O objetivo deste guia é orientar como construir um *script* com a finalidade de resolver os responsáveis por uma tarefa do processo *workflow* e/ou gestor de processo.

Atenção

Para que um usuário que não é administrador da empresa possa criar, importar, editar e remover mecanismos, é necessário que ele possua a permissão **Configurar Mecanismos**. Esta permissão pode ser concedida pelo administrador através do item **Permissões** disponível no agrupador **Pessoas** do **Painel de Controle** do fluig.

Saiba como realizar esse procedimento [clicando aqui](https://tdn.totvs.com/pages/viewpage.action?pageId=269423844).

# Pré-requisitos

* * *

-   Conhecimento da linguagem JavaScript;
-   Conhecimento sobre a construção de fluxos de processo Workflow Fluig;
-   Conceitos sobre [Desenvolvimento de Datasets](https://tdn.totvs.com/display/fluig/Desenvolvimento+de+Datasets);
-   Entendimento sobre serviços da Web, Web services, SOAP e XML;
-   Familiaridade com a ferramenta de desenvolvimento, TOTVS Developer Studio ou Eclipse;
-   Instalação do Fluig Studio.

# Construindo um Mecanismo Personalizado

* * *

Em algumas situações é necessário utilizar lógicas mais complexas e específicas sobre quem será(ão) o(s) responsável(is) pela execução da atividade na solicitação de processo workflow. Para isto, existe o "Mecanismo de Atribuição Customizado".

-   Para iniciar sua construção, deve-se em um projeto existente, acesse a pasta **mechanisms** e acesse o menu **Arquivo** > **Novo** > **Outros**... (acessível pelas teclas de atalho CTRL+N)
-   Expanda o grupo (pasta) Fluig e selecione a opção **Mecanismo Customizado Fluig**, após isso, clique em **Avançar**.
-   Na tela seguinte, indique o código no campo respectivo e sua descrição igualmente, após isso, clique em **Concluir**.

O código é obrigatório e não pode ser alterado posteriormente.

Nota

O código para o mecanismo deve seguir a especificação de padronização conforme o documento [Nomenclatura e Estrutura de Formulários](https://tdn.totvs.com/pages/viewpage.action?pageId=244448460).



Com isto, será criada a função básica que deve ser implementada: 

```
function resolve(process,colleague){

	var userList = null; /* Para adicionar novos usuários, deve ser um ArrayList, conforme exemplos a seguir */

	return userList;

}
```



A função acima **não** **retorna nenhum usuário**. Sua execução não possibilitará escolher ninguém, por isto, esta função deve ser complementada.

A função **deve** retornar uma listagem, do tipo ***ArrayList*** com as **matrículas** dos usuários. A matrícula não é necessariamente igual ao login deste usuário. A matrícula corresponde ao valor existente no campo de mesmo nome no cadastro deste usuário e à coluna *colleaguePK.colleagueId* do Dataset *colleague*.

Atenção

Se ocorrer qualquer erro de sintaxe ou na execução do mecanismo, este será interrompido e, consequentemente, não devolverá nenhum responsável para próxima tarefa/atividade do processo. É importante que toda a implementação passe por um tratamento de erros e proteção de execução. Uma boa prática é utilizar as cláusulas *try catch*.

Nota

Nenhuma mensagem de erro pode ser emitida ao usuário durante sua execução, pois estes mecanismos podem ser invocados sem que haja a interação com o usuário, como por exemplo, as chamadas ao webservice *ECMWorkflowEngineService* por meio das integrações externas.



## Retornando uma Listagem de Usuários

* * *

Abaixo temos um exemplo de retorno de uma relação fixa de usuários:

```
function resolve(process,colleague){

	var userList = new java.util.ArrayList();

	userList.add('matricula_1');
	userList.add('matricula_2');
	userList.add('matricula_3');

	return userList;

}
```



## Utilizando hAPI

* * *

Atenção

A utilização da hAPI só está disponível a partir da Atualização 1.5.12

É possível obter informações da API de *Workflow* utilizando a variável global **hAPI**. Sua utilização, porém é indicada apenas para solicitações já iniciadas, uma vez que a hAPI depende dos dados do formulário gravado na solicitação. Caso contrário, os valores dos campos não serão encontrados.

Os seguintes métodos são recomendados para utilização:

Método

Especificação

getCardValue("nomeCampo")

Permite acessar o valor de um campo do formulário do processo, onde:

-   nomeCampo: nome do campo do formulário.



Dica

Campos do tipo *checkbox* retornam os valores *on* para marcado ou "" (vazio) para não marcado. Para trabalhar de uma maneira mais fácil, é possível transformá-los em booleanos.

Exemplo:

```
var campoCheckbox = hAPI.getCardValue("campoCheckbox") == "on" ? true : false;
```

getCardData(numProcesso)

Retorna um Mapa com todos os campos e valores do formulário da solicitação.

-   numProcesso: número da solicitação de processo.



Para formulários pai e filho, os campos são identificados da seguinte forma: **campo1\_\_\_1**, sendo **campo1** o nome atribuído ao campo através da tag *name* do campo HTML + **\_\_\_** (3 *underlines*) + **número sequencial do registro**.



Por exemplo, em um formulário de nota fiscal com os seguintes campos:

-   Formulário pai:
    -   Número da Nota - numNota;

-   Formulário filho:
    -   Código do item - codItem;
    -   Descrição do item - desItem;
    -   Quantidade do item - qtdItem;

O retorno do Mapa seria:

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

A hAPI dispõe de outro métodos, que são abordados na documentação de [Desenvolvimento de Workflow](https://tdn.totvs.com/display/fluig/Desenvolvimento+de+Workflow). Contudo apenas os métodos mencionados acima são recomendados para o desenvolvimento de Mecanismos de atribuição.



### Exibindo usuários conforme campo selecionado

* * *

Abaixo temos um exemplo de utilização da **hAPI**, onde será retornado um usuário considerando o campo selecionado no formulário da solicitação:

```
function resolve(process, colleague) {
	var userList = new java.util.ArrayList();
	var setor = hAPI.getCardValue("setor");
	//Criando constraints para retornar os usuário do grupo
	var cGrupo = DatasetFactory.createConstraint("colleagueGroupPK.groupId",
			setor, setor, ConstraintType.MUST);
	var constraintsGroup = new Array(cGrupo);
	//Chamando dataset "colleagueGroup" para retornar os usuários
	var colleagues = DatasetFactory.getDataset("colleagueGroup", null,
			constraintsGroup, null);

	for (var i = 0; i < colleagues.values.length; i++) {
		//Adicionando usuário como opção de responsável
		userList.add(colleagues.getValue(i, "colleagueGroupPK.colleagueId"));
	}
	return userList;
}
```



## Utilizando parâmetros

* * *

Atenção

A utilização dos Parâmetros só estão disponíveis a partir da Atualização 1.6.3

Acesse a documentação de [parâmetros](https://tdn.totvs.com/x/BuYlE) para mais detalhes.



Abaixo temos um exemplo de como exibir diferentes usuários para seleção utilizando a variável "WKIsTransfer", que permite saber se o usuário está ou não transferindo uma tarefa:

```
function resolve(process, colleague) {
	var userList = new java.util.ArrayList();
	var isTransfer = getValue("WKIsTransfer");

	if (isTransfer !== null) {
		if (JSON.parse(isTransfer)) {
			userList.add("gestor");
		} else {
			userList.add("user");
		}
	} else {
		userList.add("gestor");
		userList.add("user");
	}

	return userList;
}
```



## Utilizando Datasets

* * *

É possível realizar a consulta a um *Dataset* da plataforma, a fim de elaborar o resultado final dos usuários que poderão ser listados para escolha da execução da próxima atividade. Este procedimento pode ser realizado conforme o exemplo a seguir:

```
function resolve(process,colleague){

	var userList = new java.util.ArrayList();

	//-- CONSULTA A UM DATASET, DE GRUPO DE USUARIOS FLUIG
	var dtsGroup = DatasetFactory.getDataset('group',null,null,null);
	for(var g = 0; g < dtsGroup.values.length; g++){
		userList.add( 'Pool:Group:'+dtsGroup.getValue(g.toString(),"groupPK.groupId") );
	}

	//-- CONSULTA A UM DATASET, DE PAPEIS DE USUARIOS FLUIG
	var dtsRole = DatasetFactory.getDataset('workflowRole',null,null,null);
	for each(papel in dtsRole.values){
		userList.add( 'Pool:Role:'+papel["workflowRolePK.roleId"] );
	}

	return userList;

}
```

No exemplo acima, para que o(s) **Grupo(s)** seja(m) listado(s) é necessária a inclusão do prefixo ***"Pool:Group:"*** concatenado ao código deste Grupo. Com isto, ao selecionar o grupo, a atividade é atribuída ao Grupo e uma pessoa deste deverá assumi-la. Da mesma forma ocorre para o(s) **Papel(éis) Workflow**, porém o prefixo deve ser ***"Pool:Role:"*** mais o código do Papel.



## Utilizando Serviços / Webservices

* * *

A construção de um mecanismo ainda possibilita a utilização de um **Serviço de Integração Fluig**, que poderá consumir um **webservice** do tipo **SOAP** ou do tipo **Progress** para obter os responsáveis, de acordo com uma regra de negócio provida pelo ERP, por exemplo. Este método pode seguir o modelo abaixo:

```
function resolve(process,colleague){

	var userList = new java.util.ArrayList();

	//-- CHAMADA A UM SERVICO DE INTEGRACAO FLUIG, COM UM WEBSERVICE ESPECIFICADO
	var biblioteca = ServiceManager.getService('ECMColleagueService').getBean();
	var endpoint = biblioteca.instantiate('com.totvs.technology.ecm.foundation.ws.ECMColleagueServiceServiceLocator');
	var webservice = endpoint.getColleagueServicePort();
	var usuariosDtoArray = webservice.getSummaryColleagues(1);
	for each(usuario in usuariosDtoArray.getItem()){
		userList.add( usuario.getColleagueId().toString() );
	}

	return userList;

}
```



Em que os parâmetros "process" e "colleague" se referem, respectivamente, aos objetos WorkflowProcess process e Colleague colleague.

WorkflowProcess

Parâmetro

Tipo

workflowProcessPK

-   long companyId
-   int processInstanceId

WorkflowProcessPK

processId

String

version

Integer

requesterId

String

active

Boolean

attachmentSeqId 

Integer

sourceProcess 

Integer

sourceThreadSequence 

Integer

UUID

String

Colleague

Parâmetro

Tipo

colleaguePK 

-   long companyId
-   private String colleagueId

ColleaguePK 

userTenantId

long 

colleagueName

String

mail

String

login

String

passwd

String

active

Boolean 

adminUser

Boolean 

groupId

String



O exemplo acima utilizou o webservice ***ECMColleagueService*** da própria plataforma e o **Serviço** foi criado utilizando a **API Axis**.
