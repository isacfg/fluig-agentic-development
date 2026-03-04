# Dúvida sobre dataset, constraint e campo zoom

> **Fonte:** [https://fluiggers.com.br/t/duvida-sobre-dataset-constraint-e-campo-zoom/2922](https://fluiggers.com.br/t/duvida-sobre-dataset-constraint-e-campo-zoom/2922)
> **Categoria:** Formulários
> **Tags:** `dataset`
> **Criado em:** 12/08/2024, 14:14
> **Visualizações:** 217 | **Likes:** 2 | **Respostas:** 1

---

## Pergunta original

**Newton Negri** (@Newton_Negri) — 12/08/2024, 14:14

Olá pessoal! boa tarde!

Vou tentar contextualizar para que vocês entendam o que estou tentando fazer e talvez possam me ajudar:

Meu formulário possuí dois campos zoom, o primeiro, utilizo um dataset com serviço jdbc para trazer dados do Protheus onde o usuário seleciona uma filial ativa no sistema, ex.: ‘031001’:

```auto
<div class="form-group col-sm-3">
	<label for="filial">Filial</label>
	<span style="color: red; font-weight: bold;">*</span>
	<input class="form-control" type="hidden" name="numeroFilial" id="numeroFilial" />
	<input class="form-control" name="filial" id="filial" type="zoom" data-zoom="{
		'displayKey':'M0_FILIAL',
		'datasetId':'ds_gtb_jdbc_empresas',
		'maximumSelectionLength':'1',
		'resultLimit':'300',
		'placeholder':'Selecionar',
		'fields':[
			{'field':'M0_CODFIL', 'label':'Código', 'visible':'true'},
			{'field':'M0_FILIAL', 'label':'Filial', 'visible':'true', 'standard':'true'}
		]
	}" />
</div>
```

Criei um input hidden ‘numeroFilial’ para popular com o número do código da filial;
Depois que o usuário selecionar a filial, o segundo campo zoom, utilizo um outro dataset com serviço jdbc que retorna uma query com a matricula de todos os funcionários. Mas, preciso aplicar um filtro nesse retorno com base no código da filial, para que apenas as matriculas da filial selecionada sejam apresentadas ao usuário quando ele clicar no campo zoom para selecionar um colaborador;

```auto
<div class="form-group col-sm-3">
	<label for="numeroMatricula">N° da Matrícula</label>
	<span style="color: red; font-weight: bold;">*</span>
	<input class="form-control" name="numeroMatricula" id="numeroMatricula" type="zoom" data-zoom="{
		'maximumSelectionLength':'1',
		'resultLimit':'300',
		'datasetId':'ds_gtb_jdbc_desenvolvimento',
		'displayKey':'RA_MAT',
		'placeholder':'Selecionar',
		'fields':[
			{'field':'RA_FILIAL', 'label':'Filial', 'visible':'true'},
			{'field':'RA_MAT', 'label':'Matrícula', 'visible':'true','standard':'true'},
			{'field':'RA_NOMECMP', 'label':'Nome Completo', 'visible':'true'},
			{'field':'RA_SITFOLH', 'label':'Situação', 'visible':'false'},
			{'field':'RA_CC', 'label':'Centro de Custo', 'visible':'false'},
			{'field':'CTT_DESC01', 'label':'Desc. Centro de Custo', 'visible':'false'},
			{'field':'RA_ADMISSA', 'label':'Data de Admissão', 'visible':'false'},
			{'field':'RA_VCTOEXP', 'label':'Venc. Exp. 1', 'visible':'false'},
			{'field':'RA_VCTEXP2', 'label':'Venc. Exp. 2', 'visible':'false'},
			{'field':'RA_CATEFD', 'label':'Categoria', 'visible':'false'},
			{'field':'RCC_CONTEU', 'label':'Desc. da Categoria', 'visible':'false'},
			{'field':'RA_CODFUNC', 'label':'Cod. da Função', 'visible':'false'},
			{'field':'RJ_DESC', 'label':'Desc. da Função', 'visible':'false'},
			{'field':'RFX_DATAI', 'label':'Controle 1', 'visible':'false'},
			{'field':'RFX_DATAF', 'label':'Controle 2', 'visible':'false'},
			{'field':'RFX_TPESTB', 'label':'Controle 3', 'visible':'false'},
			{'field':'R8_TIPOAFA', 'label':'Cod. Tipo Afastamento', 'visible':'false'},
			{'field':'RCM_DESCRI', 'label':'Desc. Afastamento', 'visible':'false'},
			{'field':'R8_DATAINI', 'label':'Controle 4', 'visible':'false'},
			{'field':'R8_DATAFIM', 'label':'Controle 5', 'visible':'false'}
		]
	}" />
</div>
```

Implementei o seguinte dataset no campo numeroMatricula, mas quando clico nele, ele está detectando um contranint com valor 300, que não sei nem de onde está vindo…

```auto
function createDataset(fields, constraints, sortFields) {
	log.info('::::::::::::::::::::::::::INICIO | CRIANDO DATASET - @@GRUPO TB');
	var newDataset = DatasetBuilder.newDataset();
	var dataSource = '/jdbc/prdJDBC';
	var myQuery = 'SELECT * FROM MSIGA.FLUIG_014_MATRICULA';
	var filter = ''; // Inicia sem filtro

	try {
		// Verifica as constraints e define o filtro
		if (constraints !== null && constraints.length) {
			log.info('Constraints detectadas.');
			if (constraints[0].constraintType == ConstraintType.MUST) {
				for (var i = 0; i < constraints.length; i++) {
					if (constraints[i]) {
						filter = constraints[i].initialValue;
						log.info('Filtro aplicado: ' + filter);
					}
				}
			}
		} else {
			log.info('Nenhuma constraint detectada.');
		}

		// Aplica o filtro à query se existir
		if (filter) {
			myQuery += " WHERE RA_FILIAL = '" + filter + "'";
			log.info('Query com filtro: ' + myQuery);
		} else {
			log.info('Query sem filtro: ' + myQuery);
		}

		var ic = new javax.naming.InitialContext();
		var ds = ic.lookup(dataSource);
		var conn = ds.getConnection();
		var stmt = conn.createStatement();
		var rs = stmt.executeQuery(myQuery);
		var columnCount = rs.getMetaData().getColumnCount();
		var created = false;
		var dateFormat = new java.text.SimpleDateFormat('dd/MM/yyyy');

		while (rs.next()) {
			if (!created) {
				for (var i = 1; i <= columnCount; i++) {
					newDataset.addColumn(rs.getMetaData().getColumnName(i));
				}
				created = true;
				log.info('Colunas adicionadas ao dataset.');
			}
			var Arr = [];
			for (var i = 1; i <= columnCount; i++) {
				var obj = rs.getObject(i);
				if (obj instanceof java.sql.Date || obj instanceof java.sql.Timestamp) {
					Arr.push(dateFormat.format(obj));
				} else {
					Arr.push(obj !== null ? obj.toString() : 'null');
				}
			}
			newDataset.addRow(Arr);
			log.info('Linha adicionada ao dataset: ' + Arr);
		}

		if (!created) {
			log.info('Nenhum dado encontrado para a query executada.');
		}
	} catch (e) {
		log.error('ERRO==============> ' + e.message);
	} finally {
		try {
			if (rs !== null) rs.close();
			if (stmt !== null) stmt.close();
			if (conn !== null) conn.close();
		} catch (e) {
			log.error('ERRO no finally ==============> ' + e.message);
		}
	}

	log.info('::::::::::::::::::::::::::FIM | CRIANDO DATASET - @@GRUPO TB');

	return newDataset;
}
```

![Screenshot_1](https://fluiggers.com.br/uploads/default/original/2X/c/ca53afb35dfb249cef1d98d6f888f932f21c1176.png)

Eu consigo passar uma constraint para o dataset ds\_gtb\_jdbc\_desenvolvimento, via javascript, no momento em que o usuário seleciona a filial, ou talvez no momento em que ele clica no campo zoom para selecionar a matricula, de forma que os dados carreguem filtrados?

Sou novo no fluig, não sei a forma que estou tentando fazer é a melhor opção, mas gostaria de fazer esse filtro, tratando a query direto no dataset;

---

## Resposta #1 ✅ RESPOSTA ACEITA

**venturelli** (@venturelli) — 12/08/2024, 14:17 | ❤️ 1

Você deve fazer o filtro das constraints considerando o nome da variável (‘fieldName’). O 300 é o valor configurado em ‘resultLimit’ no zoom. Essa informação é enviada via param como ‘sqlLimit’ normalmente.

Um exemplo contido nesta documentação:
[https://tdn.totvs.com/pages/releaseview.action?pageId=412888219](https://tdn.totvs.com/pages/releaseview.action?pageId=412888219)

```auto
if (constraints != null) {
        for (var i = 0; i < constraints.length; i++) {
            if (constraints[i].fieldName == "company") {
                company = constraints[i].initialValue;
            }
            else if (constraints[i].fieldName == "date") {
                initialDate = constraints[i].initialValue;
                finalDate = constraints[i].finalValue;
            }
        }
    }
```

E para usar dois campos zooms, onde um influencia o valor do outro, você pode usar o evento js *setSelectedZoomItem*. Ele é um pouco chato de usar, mas a documentação caso lhe ajude é essa [Personalização de formulários - TOTVS Fluig - TDN](https://tdn.totvs.com/pages/releaseview.action?pageId=663066946#Personaliza%C3%A7%C3%A3odeformul%C3%A1rios-Definirvalorbaseadonatrocadevalordeoutrocampo/zoom)

---

## Resposta #2

**Newton Negri** (@Newton_Negri) — 13/08/2024, 13:33 | ❤️ 1

[@venturelli](/u/venturelli) , agradeço muito a ajuda! Consegui fazer funcionar.

---
