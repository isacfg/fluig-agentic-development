# Sincronização de datasets

> **Fonte:** [https://tdn.totvs.com/pages/viewpage.action?pageId=212899013](https://tdn.totvs.com/pages/viewpage.action?pageId=212899013)

---

Atenção!

Este recurso está disponível a partir da **atualização 1.5.5** do TOTVS Fluig Plataforma.



Atenção!

A partir das atualizações **1.6.5 Liquid**, **1.7.0 Lake** e **1.7.1 Crystal Lake**, os *select* passados por *constraint* em dataset serão bloqueados pelo serviço. Orientamos a leitura da documentação [Datasets acessando banco de dados externo](https://tdn.totvs.com/x/OgFlDw) que contém um exemplo da correta utilização do procedimento.



# Conceito

* * *

A sincronização de datasets tem como objetivo reduzir o número de acessos a serviços de dados fornecidos por produtos externos à plataforma TOTVS Fluig. É uma prática comum trazer dados de sistemas externos para complementar informações do formulário de um processo ou realizar validações em eventos com base nas informações retornadas por este dataset.

## Exemplificando

Em um exemplo mais específico, vamos supor que o usuário precisa informar no formulário de seu processo o centro de custo e que a lista dos centros de custo válidos está disponível em um sistema externo. Para que este usuário consiga informar um centro de custo válido, será necessário:

1.  o usuário acessar o campo com pesquisas, através de um formulário;
2.  esse campo solicita informações para o dataset;
3.  o dataset, quando executado através da plataforma, faz acesso ao serviço de dados do sistema externo. 

Se este workflow possuir uma média de cinco mil aberturas de processo por dia, teremos pelo menos cinco mil acessos a este sistema externo que, em muitos casos, acaba retornando sempre as mesmas informações ou tendo uma variação muito pequena de informações entre uma consulta e outra.

O desenho abaixo ilustra como funciona o ciclo de acesso do usuário a uma informação externa à plataforma.

**Figura 1 - Ciclo de acesso do usuário a uma informação externa à plataforma**



Contudo, como tratam-se de sistemas externos não é possível garantir tanto a performance quanto a disponibilidade desses serviços de dados. Eventuais problemas de performance ou disponibilidade impactarão o desempenho da plataforma TOTVS Fluig e podem até mesmo inviabilizar o uso de determinado processo workflow. 



# Sincronização de Datasets

* * *

No modelo de dados sincronizados, por meio de uma tarefa agendada é possível realizar a consulta do sistema externo e copia os dados retornados para uma tabela espelho criada dentro do banco de dados da plataforma.

**Figura 2 - Tarefa agendada para consulta ao sistema externo**



Uma vez que a primeira sincronização tenha sido concluída com sucesso, todas as consultas realizadas neste dataset não irão mais consultar o sistema externo, mas sim a tabela que foi espelhada pela tarefa agendada. Em nosso cenário hipotético caso o administrador do sistema opte por agendar a tarefa que atualiza a lista de centros de custo uma vez por dia. Após a sincronização a performance e a disponibilidade do sistema externo não afetarão mais a performance da plataforma e dos sistemas workflow. 

Observação

A Sincronização de datasets em tabelas da plataforma não pode ser utilizada em datasets do tipo **interno**.



# Tipos de sincronização de datasets

* * *

Atenção!

Para que a sincronização de datasets ocorra corretamente, é necessário que a chave do banco seja configurada antes da sincronização para que não duplique os resultados. Essa configuração pode ser feita via tela no Painel de controle, selecionar a opção *[Plataforma ❙ Datasets](https://tdn.totvs.com/pages/viewpage.action?pageId=235598394) > Escolher o dataset a ser sincronizado > Editar dataset > Tabela > Configurar > Campo chave para a tabela.*

Ou via código passando o *setKey* na function *defineStructure*.


Existem três tipos de sincronização com datasets:

-   **Sincronização Comum:** Este tipo de sincronização pode ser feita com qualquer dataset já implementado na plataforma. Neste modelo de sincronização toda vez que a tarefa agendada de sincronização de datasets for executada será criada uma nova tabela e todos os registros retornados pelo método *createDataset* serão copiados para esta nova tabela. A tabela anterior será removida do banco. Esse modelo não é recomendado para datasets que retornam muitos registros.


-   **Sincronização Jornalizada:** Este tipo de sincronização permite a atualização e cópia incremental de registros de acordo com o retorno do método *onSync* do dataset. Através do método *defineStructure* é possível definir de forma mais detalhada quais são os campos da tabela bem como seus tipos. Também é possível criar índices e uma chave principal para obter ainda mais performance durante as consultas aos dados do *dataset.* No método *OnSync* é possível determinar quais são as linhas novas a serem adicionadas na tabela como na sincronização comum. Com os métodos *updateRow* e *deleteRow* através da configuração da chave é possível atualizar registros já existentes bem como eliminar registros. Esse modelo é o recomendado para situações em que há uma grande quantidade de dados.


-   **Sincronização mobile:** Este modelo de sincronização pode ser utilizado com qualquer dataset, seja ele sincronizado no servidor ou não, e permite a cópia local dos registros de um dataset em um dispositivo mobile que sincronize de forma offline com a plataforma. Os prazos de sincronização são configurados no aplicativo fluig Mobile.

    Atenção

    Novos dados criados em dispositivos móveis, quando utilizando o modo offline, só estarão disponíveis para consulta em outros formulários depois que o aplicativo móvel passar por um processo de sincronização com o servidor da plataforma. Para entender mais sobre este processo, acesse nesta página o passo [Configurando sincronização de datasets](#Sincronizaçãodedatasets-Configurandoasincroniza%C3%A7%C3%A3odedatasets).


# Desenvolvendo um dataset com sincronização jornalizada

* * *

### Definindo a estrutura do dataset

Para definir a estrutura de um dataset jornalizado é necessário definir a estrutura fixa da tabela no código do dataset. Para isso no código do dataset deverá ser criado o método *defineStructure*.

Exclusivamente dentro desta função estão disponíveis os seguintes métodos para definição da tabela:

Retorno

Método | Descrição

AddColumn

`AddColumn(String field, DatasetFieldType type)`

Cria um campo na tabela com o nome e tipo informados. O nome sempre deve ser informado em caracteres maiúsculos. O tipo de campo pode ser omitido e neste caso o campo será criado com o tipo String. Os tipos disponíveis são: 

`DatasetFieldType.NUMBER`  

`DatasetFieldType.DATE` 

`DatasetFieldType.BOOLEAN`

`DatasetFieldType.STRING`

`DatasetFieldType.TEXT`

setKey

`setKey(Object[] fields)` 

Determina quais são os campos chaves para o dataset. No banco de dados será criado um índice utilizando os campos informados neste método. Esses campos serão utilizados na localização dos registros para atualização ou remoção das linhas através dos métodos *updateRow* e *deleteRow*. Importante informar apenas campos que foram previamente definidos com a função *addColumn*. Devem ser informados em caracteres maiúsculos.

addIndex

`addIndex(Object[] fields)` 

Permite adicionar mais índices para obtenção de maior performance nas consultas do dataset. Devem ser informados em caracteres maiúsculos.

Atenção!

Bancos de dados Oracle possuem limitação de tamanho para chaves. Caso o número de caracteres ultrapasse o limite permitido, poderá ocorrer o erro **“ORA-01450: maximum key length (6397) exceeded”**. Considere essa restrição ao definir campos e estruturas, a fim de evitar falhas de criação ou atualização no banco de dados.

Quando um campo é definido como **chave** (*setKey*) o mesmo é definido automaticamente como **índice**. Neste caso, o campo não poderá ser utilizado para criação de um índice único, entretanto é permitido utilizar em um índice composto.

No exemplo abaixo o campo 'CE\_CODIGO' foi configurado como chave, portanto não pode ser utilizado como índice único 'addIndex("CE\_CODIGO")'. Não há impedimento, porém, se usar em um índice composto, como está sendo utilizado no exemplo 'addIndex(\[ "CE\_CODIGO", "CE\_LOJA", "CE\_NUMTIT" \])'.



**Exemplo:**

```
function defineStructure() {
	addColumn("CE_CODIGO", DatasetFieldType.NUMBER);
	addColumn("CE_LOJA");
	addColumn("CE_NUMTIT", DatasetFieldType.NUMBER);
	addColumn("CE_PARCELA");
	addColumn("CE_PEFIXO");
	addColumn("CE_TIPO");
	addColumn("CE_VALOR", DatasetFieldType.NUMBER);
	addColumn("CE_INSS");
	addColumn("CE_ISS");
	addColumn("CE_IRRF");
	addColumn("DT_TITULO", DatasetFieldType.DATE);
	addColumn("CE_PIS");
	addColumn("CE_COFINS");
	addColumn("LOGICO", DatasetFieldType.BOOLEAN);
	setKey([ "CE_CODIGO", "CE_NUMTIT" ]);
	addIndex([ "CE_CODIGO" ]);
	addIndex([ "CE_CODIGO", "CE_LOJA", "CE_NUMTIT" ]);
}
```

Importante

-   A função *defineStructure* é obrigatória para configuração do dataset *offline*. Dentro do *defineStructure,* os nomes informados nos métodos coluna (*addColumn*), chave (*setKey*) e índice (*addIndex*) devem ser sempre em maiúsculo. Para visualizar os exemplos [clique aqui.](https://tdn.totvs.com/pages/viewpage.action?pageId=315906495)

-   O tipo de campo DatasetFieldType.TEXT foi introduzido na atualização 1.6.1 da plataforma. Este tipo foi desenvolvido especificamente para sincronização de datasets em ambientes que utilizam o banco de dados Oracle, onde o tipo DatasetFieldType.STRING é limitado a apenas 255 caracteres. O tipo de campo TEXT em Oracle suporta até 4000 caracteres. Em ambientes MySQL e SQL Server, não há distinção no comportamento dos tipos TEXT e STRING.

-   Na atualização do dataset, caso ocorra qualquer alteração neste método que indique alteração da estrutura da tabela, ocorrerá o drop da tabela antiga e todos os dados anteriores a esta alteração serão perdidos. A alteração de estrutura da tabela ocorrerá na próxima execução da tarefa agendada de sincronização do dataset.


-   Lembre-se que os nomes das colunas dos datasets serão os nomes das colunas criadas em banco. Lembre-se de considerar as regras de nomenclatura de campos do seu banco. Não utilizar espaços em branco no nome ou caracteres especiais como (!@#$%-+=, etc) ou palavras reservadas do banco. Caso utilize a nomenclatura não permitida, não será possível sincronizar os dados na tabela.


-   Não definir um campo com o nome ID. Internamente a sincronização cria um campo com este nome para fins de paginação e gerenciamento de registros. Ao criar uma metalista com este nome ocorrerá um erro de campo duplicado ao tentar criar a tabela de sincronização.

-   Os comandos AddIndex e AddKey não irão gerar índices nas tabelas de bancos de dados SQL Server. Os comandos podem ser implementados no código do porém os índices de tabela deverão ser criados via ferramenta de administração do banco. Os campos informados no comando addKey serão utilizados como campos para controle de registros duplicados e nas operação de adição, remoção e modificação de registros.



### Sincronização de informações

Para a transferência de dados do dataset para a tabela, deverá ser definida a função *onSync* que será chamada a cada execução da tarefa agendada.

Para que a sincronização aconteça deve ser criada uma tarefa no [Plataforma ❙ Agendador de tarefas](https://tdn.totvs.com/pages/viewpage.action?pageId=234455387) com o tipo 'Sincronização de dataset', selecionando qual dataset deverá ser sincronizado e em que período.

Dentro da função *onSync* deverá ser criado um objeto do tipo dataset onde as novas linhas deverão ser adicionadas pelo método *addRow* e linhas a serem atualizadas ou removidas pelos métodos *updateRow* e *deleteRow*, respectivamente.

Os métodos *updateRow* e *deleteRow* recebem uma lista de objetos que são os valores das linhas (da mesma forma que já ocorre com o método *addRow*). 

**Exemplo:**

```
function onSync(lastSyncDate) {
	var dataset = DatasetBuilder.newDataset();
	var integracao = ServiceManager.getService('FLUIG3');
	var serviceLocator = integracao
			.instantiate('pkgWkfSolicPagamento.FLUIGLocator');
	var service = serviceLocator.getFLUIGSOAP();
	var cdEmp = 1; // código empresa pagadora
	var cdFilial = 0; // todas as filiais
	var cdTitulo = 0; // todos os titulos
	var cdPrefixo = ""
	var cnpj = 0; // cnpj fornecedor
	var codForn = 0; // cod universal para todos os fornecedores
	var lojaForn = 0; // loja fornecedor
	// Invocando o servico passando a data da ultima sincronização com a plataforma.
	// O webservice foi preparado para trazer apenas os dados desde a ultima
	// sincronização.
	var retorno = service.CONSPAG(cdEmp, cdFilial, cdTitulo, cdPrefixo, cnpj,
			codForn.toString(), lojaForn.toString(), lastSyncDate);
	var arrayListaTitulo = retorno.getLISTACPAG();
	for (var i = 0; i < arrayListaTitulo.length; i++) {
		var r = arrayListaTitulo[i];
		if (r.getCE_TIPO() == "ADD") {
			dataset.addRow(new Array(r.getCE_CODIGO(), r.getCE_LOJA(), r
					.getCE_NUMTIT(), r.getCE_PARCELA(), r.getCE_PEFIXO(), r
					.getCE_TIPO(), r.getCE_VALOR(), r.getCE_INSS(), r
					.getCE_ISS(), r.getCE_IRRF(), new java.util.Date(r.getDT_TITULO()), r
					.getCE_PIS(), r.getCE_COFINS()));
		} else if (r.getCE_TIPO() == "MOD") {

			dataset.updateRow(new Array(r.getCE_CODIGO(), r.getCE_LOJA(), r
					.getCE_NUMTIT(), r.getCE_PARCELA(), r.getCE_PEFIXO(), r
					.getCE_TIPO(), r.getCE_VALOR(), r.getCE_INSS(), r
					.getCE_ISS(), r.getCE_IRRF(), new java.util.Date(r.getDT_TITULO()), r
					.getCE_PIS(), r.getCE_COFINS()));

		} else if (r.getCE_TIPO() == "DEL") {

			dataset.deleteRow(new Array(r.getCE_CODIGO(), r.getCE_LOJA(), r
					.getCE_NUMTIT(), r.getCE_PARCELA(), r.getCE_PEFIXO(), r
					.getCE_TIPO(), r.getCE_VALOR(), r.getCE_INSS(), r
					.getCE_ISS(), r.getCE_IRRF(), new java.util.Date(r.getDT_TITULO()), r
					.getCE_PIS(), r.getCE_COFINS()));

		} else {
			// Estado do registro é desconhecido no cache
			dataset.addOrUpdateRow(new Array(r.getCE_CODIGO(), r.getCE_LOJA(), r
					.getCE_NUMTIT(), r.getCE_PARCELA(), r.getCE_PEFIXO(), r
					.getCE_TIPO(), r.getCE_VALOR(), r.getCE_INSS(), r
					.getCE_ISS(), r.getCE_IRRF(), new java.util.Date(r.getDT_TITULO()), r
					.getCE_PIS(), r.getCE_COFINS()));


		}
	}

	return dataset;
}
```

Quando for necessário salvar no banco os dados do código, o corpo do método deve ser preenchido como abaixo.

```
function onSync(lastSyncDate) {
	var dataset = DatasetBuilder.newDataset();
	dataset.addRow(new Array(2256, "SÃO PAULO", 1058, "6", "ESPORTE"));
    dataset.addRow(new Array(1874, "RECIFE", 1258, "1247690",  "2", "CALÇADOS"));
    dataset.addRow(new Array(1205, "RIO DE JANEIRO", 2594, "10", "MOVEIS"));
    dataset.addRow(new Array(985, "FLORIANOPOLIS", 2269, "10", , "ELETRONICOS"));

	return dataset;
}
```



#### Como funciona a sincronização das informações

A forma como os dados são inseridos na base de dados é gerida pela plataforma TOTVS Fluig e desta forma o momento em que os registros são inseridos, editados ou excluídos no código do dataset, não é exatamente o mesmo momento em que, na prática, essas operações serão realizadas. Com isso, a importância em saber como funciona a sincronização e gravação de informações do dataset para tabelas de banco de dados é de utilidade geral.

Ao executar os métodos *createDataset* ou *OnSync* nas tarefas de sincronização a plataforma irá montar inicialmente em memória quatro coleções de registros que serão alimentadas de acordo com o comando utilizado pelo desenvolvedor.

**Coleção**

**Método**

Registros novos

addRow

Eliminados 

deleteRow

Modificados 

updateRow

Modificados ou Criados

addOrUpdateRow



Com as coleções montadas, a ordem que a plataforma utiliza para fazer a efetivação no banco é a seguinte.

**1**

Registros eliminados

**2**

Linhas alteradas

**3**

Linhas alteradas ou criadas

**4**

Novas linhas

Isso é necessário para que as alterações e efetivações de registros no banco sejam gerenciadas pela plataforma, afim de garantir melhor performance e obter um tempo reduzido na sincronização de informações.



### Cache de dados no mobile

Quando se tem em mente um dispositivo móvel, imediatamente surge a questão do espaço ocupado por uma aplicação. A função onMobileSync é chamada apenas durante a atualização de um dataset *offline* já existente. 

Este método serve para que os dados já sincronizados através do método onSync sejam ainda mais restritos adicionando uma nova *constraint*, por exemplo, ou definindo que somente algumas das colunas do dataset estejam disponíveis *offline* no dispositivo, evitando uso desnecessário de armazenamento.

Quando o aplicativo realiza a primeira sincronização, ao fazer o carregamento inicial dos dados, esta função não será executada.

Esta função recebe o usuário autenticado no dispositivo como parâmetro e deve retornar um objeto contendo as colunas a salvar, filtros e ordenação específicos para a Sincronização Mobile, conforme exemplo abaixo. Lembre-se de que todas as colunas informadas no código devem estar em caracteres maiúsculos.

**Exemplo:**

```
function onMobileSync(user) {
	var sortFields = new Array();
	var constraintTitulo1 = DatasetFactory.createConstraint('CE_CODIGO',
			'1', '1', ConstraintType.MUST);
	var constraints = new Array(constraintTitulo1);

	var colunastitulo = new Array('CE_CODIGO', 'CE_LOJA', 'CE_NUMTIT', 'CE_PARCELA',
			'CE_PARCELA');
	var result = {
		'fields' : colunastitulo,
		'constraints' : constraints,
		'sortFields' : sortFields
	};
	return result;
}
```



# Acessando um Dataset com sincronização

* * *

O acesso a datasets sincronizados, seja ele jornalizado ou não, permanece exatamente igual ao [acesso de qualquer dataset](https://tdn.totvs.com/display/fluig/Acessando+Datasets), não sendo necessário passar nenhum parâmetro extra.

# Configurando a sincronização de datasets

* * *

A partir da **atualização 1.6.2** o Painel de controle disponibiliza a opção **Datasets**, com uma listagem de todos os datasets cadastrados na plataforma. Nessa tela é possível:

-   Ligar ou desligar a sincronização de datasets em tabelas do servidor.
-   Ligar ou desligar cache de informações de datasets em dispositivos mobile.
-   Editar agendamentos para os datasets sincronizados.
-   Consultar o dataset - consulta do código fonte do dataset.
-   Consultar os dados do dataset
-   Apagar todos os dados - Permite apagar os dados sincronizados para reiniciar a sincronização.



**Figura 3 - Tela de dataset na atualização 1.6.5**

### Configurando comportamento de acesso a datasets em dispositivos mobile

É possível definir como será o comportamento do dispositivo mobile para realização do cache de informações, bem como o acesso a essas informações de acordo com o estado do dispositivo. Para isso, acione o link da coluna ***Offline mobile***.



**Figura 4 - Tela de Comportamento Mobile do dataset**



Nesta tela temos as seguintes opções:

-   **Utilizar cache em dispositivos móveis:** Define se o dataset terá ou não cache em dispositivos móveis.
-   **Tempo de expiração do cache mobile:** Determina o período em que o cache será considerado válido desde a ultima sincronização de dispositivo.
-   **Não utilizar cache quando o dispositivo móvel estive online:** Determina se o dispositivo consultará os dados do cache do dataset mesmo que o dispositivo esteja online através de redes wifi ou 3g/4g.

Utilize os botão salvar para confirmar as alterações. 

### Configurando sincronização de dados para o servidor da plataforma

Para definir que determinado dataset irá sincronizar as linhas obtidas para dentro de uma tabela da plataforma, é preciso clicar no link da coluna **Sincronização**, que abre a tela abaixo.

**Figura 5 - Tela de Sincronização do dataset com o servidor**

A opção **Sincronizar com o servidor?** irá ativar o modo de sincronia de dados no servidor.

Ao desligar a sincronização de um dataset que estava sendo sincronizado e jornalizado, lembre-se que as tabelas que abrigam os dados e as tarefas de sincronização serão removidas e que, por consequência, todos os dados sincronizados até aquele momento serão perdidos. Com a sincronização desligada, os dados que serão listados para este dataset são os dados obtidos pelo método *createDataset*.

### Apagar dados

Essa opção permite ao administrador remover a tabela que contém os dados sincronizados com o servidor. É importante notar que os dados não serão apagados imediatamente após a confirmação da mensagem, e sim, na próxima execução da tarefa de sincronização. A próxima tarefa de sincronização criará uma nova tabela gravando os dados daquela execução. A tabela que abrigava os dados antes da ordem de eliminação de dados será removida junto com seus registros.

Para apagar os dados, é preciso acionar o link da coluna **Sincronização**, que abre a tela de Sincronização (Figura 5), e então acionar a opção **Apagar dados**.

### Editar agendamentos

Após definir que determinado dataset é sincronizado no servidor da plataforma, é preciso agendar pelo menos uma execução da tarefa de sincronia do dataset. Para acessar essa opção, é preciso acionar o link da coluna **Sincronização**, que abre a tela de Sincronização (Figura 5), e acionar a opção **Editar agendamento**.



**Figura 6 - Tela de configuração do agendamento da sincronização**



Nesta tela deverão ser preenchidos obrigatoriamente os seguintes campos:

-   **Descrição:** Descrição obrigatória que irá identificar a tarefa na lista de tarefa agendadas.
-   **Tipo:** Tipo da tarefa (o valor sincronização de datasets virá selecionado por padrão).
-   **Dataset:** O dataset que será sincronizado (o dataset selecionado na tela anterior virá selecionado por padrão) . 

As outras informações se referem a frequência e horário de execução da tarefa e segue o mesmo padrão dos outros tipos de tarefa agendada existentes. Para mais informações, consulte a documentação de usuário do [Plataforma ❙ Agendador de tarefas](https://tdn.totvs.com/pages/viewpage.action?pageId=234455387).

### Consultando dataset

Essa opção possibilita a consulta dos resultados do dataset no banco de dados da plataforma. Qualquer tipo de dataset pode ser consultado, mesmo aqueles que não tenham sincronização.

Para realizar a consulta, acione o ícone ![barras horizontais](/download/thumbnails/212899013/fluigicon-list-dropdown%20%281%29.png?version=1&modificationDate=1535719970000&api=v2) presente na coluna **Mais ações** e, em seguida, a opção **Consultar**.



**Figura 7 - Consulta aos dados do dataset**
