# Filtrar campo zoom

> **Fonte:** [https://fluiggers.com.br/t/filtrar-campo-zoom/2189](https://fluiggers.com.br/t/filtrar-campo-zoom/2189)
> **Categoria:** Formulários
> **Tags:** `form`, `zoom`
> **Criado em:** 06/09/2023, 11:17
> **Visualizações:** 960 | **Likes:** 0 | **Respostas:** 3

---

## Pergunta original

**João Lima** (@Joao_Lima) — 06/09/2023, 11:17

Olá pessoal! Sou novo mexendo com o fluig, então ainda não sei como posso filtra um campo zoom, verifiquei em alguns lugares que se usa o filterValues porém não está filtrando, ainda mostra todos os dados do dataset customizado, poderiam me ajudar por gentileza.

Este é oq não está funcionando, porém tenho outro que ele funciona normal

```auto
<div class="col-md-4 form-group" >
	   <label for="do" class="col-sm-4 control-label">Nome:</label>
                      <input
			  type="zoom"
			  id = "escolha"
			  name="escolha"
			  data-zoom="{
						'displayKey':'escolha',
						'datasetId':'Departamentos',
						'filterValues': 'codDepartamento,Administrativo',
						'fields':[
							{
							'field':'escolha',
							'label':'sla'
							}
							]
						  }"  />
					  </div>
```

Esse funciona normal, ai não sei oq está errado

```auto
<div class="col-md-4 form-group" >
	   <label for="do" class="col-sm-4 control-label">USUARIO:</label>
                      <input
			  type="zoom"
			  id = "login"
			  name="login"
			  data-zoom="{
						'displayKey':'login',
						'datasetId':'colleague',
						'filterValues': 'mail,testes@gmail.com.br',
						'fields':[
							{
							'field':'login',
							'label':'nomeRepresent'
							}
							]
						  }"  />
					  </div>
```

Vi que agora precisa usar constraint para filtrar porém li e não entendi como monta essa constraint

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 06/09/2023, 14:32

Se você quem construiu o Dataset é necessário que você analise as Constraints passadas ao dataset e faça o filtro de acordo com o que foi passado. Nessa [Documentação](https://tdn.totvs.com/pages/releaseview.action?pageId=412888219#Constru%C3%A7%C3%A3odoDatasetAvan%C3%A7ado-Datasetavan%C3%A7adocomutiliza%C3%A7%C3%A3odeconstraint) dá pra ter uma ideia de como percorrer as constraints.

Já se for um dataset do próprio Fluig (tanto os que já existem quanto os de formulário) o Fluig quem faz o tratamento das constraints.

---

## Resposta #2

**João Lima** (@Joao_Lima) — 06/09/2023, 15:34

Fui eu mesmo que fiz o dataset, observei a documentação que você passou porém não entendi muito bem.

Estarei colocando o código do meu dataset que fiz, ele já está com informações adicionadas nele, pela documentação que você mandou eu não entendi direito como fazer o tratamento das constraints, teria algum exemplo. To começando ainda na programação ai to perdido kkkk

```javascript
function createDataset(fields, constraints, sortFields) {
   var dataset = DatasetBuilder.newDataset();
   var filtro = getConstraints(constraints, "donatario");

    dataset.addColumn("donatario");
	dataset.addColumn("RG");
	dataset.addColumn("CPF");
	dataset.addColumn("profissao");
	dataset.addColumn("EMAIL");
	dataset.addColumn("ESTADOCIVIL");
	dataset.addColumn("TELEFONE");
	dataset.addColumn("CEP");
	dataset.addColumn("BAIRRO");
	dataset.addColumn("CIDADE");
	dataset.addColumn("ESTADO");
	dataset.addColumn("NACIONALIDADE");
	dataset.addColumn("ENDERECO");




	dataset.addRow(new Array("***********","***********","***********", "***********", "***********@gmail.com", "***********", "11 ***********", "***********", "***********", "***********", "SP", "Brasileira", "***********" ));
	dataset.addRow(new Array("***********","***********","***********", "***********", "***********@gmail.com", "***********", "11 ***********", "***********", "***********", "***********", "SP", "Brasileira", "***********" ));
	dataset.addRow(new Array("***********","***********","***********", "***********", "***********@gmail.com", "***********", "11 ***********", "***********", "***********", "***********", "SP", "Brasileira", "***********" ));
	dataset.addRow(new Array("***********","***********","***********", "***********", "***********@gmail.com", "***********", "11 ***********", "***********", "***********", "***********", "SP", "Brasileira", "***********" ));
	dataset.addRow(new Array("***********","***********","***********", "***********", "***********@gmail.com", "***********", "11 ***********", "***********", "***********", "***********", "SP", "Brasileira", "***********" ));
	dataset.addRow(new Array("***********","***********","***********", "***********", "***********@gmail.com", "***********", "11 ***********", "***********", "***********", "***********", "SP", "Brasileira", "***********" ));


	return dataset;

}
```

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 08/09/2023, 11:49

[@Joao\_Lima](/u/joao_lima) , mas já tem uma base de programação ou tá tentando aprender enquanto mexe no Fluig? Acho que aprender a programar com o Fluig pode ser um tanto complicado tá.

As constraints são os parâmetros passados pro seu dataset. Você deve olhar esses parâmetros pra determinar o que deve ser feito.

Se a intenção é filtrar então você só deve adicionar ao dataset os campos que se adequem ao filtro passado. E isso pode ser algo bem complicado dependendo de como é o seu dataset e o que você vai permitir ser filtrado.

Exemplo bem simples:

```javascript
/**
 * Exemplo de um dataset utilizando as constraints
 *
 * @param {string[]} fields Campos Solicitados
 * @param {Constraint[]} constraints Filtros
 * @param {string[]} sorts Campos da Ordenação
 * @returns {Dataset}
 */
function createDataset(fields, constraints, sorts) {
    var dadosOriginais = [
        {
            nome: "Nome 001",
            idade: 10
        },
        {
            nome: "Nome 002",
            idade: 20
        },
        {
            nome: "Nome 003",
            idade: 35
        },
        {
            nome: "Nome 004",
            idade: 50
        },
        {
            nome: "Nome 005",
            idade: 35
        },
        {
            nome: "Nome 006",
            idade: 70
        }
    ];

    var dataset = DatasetBuilder.newDataset();

    dataset.addColumn("Nome");
    dataset.addColumn("Idade");

    var idadeInicial = -1;
    var idadeFinal = -1;
    var deveSer = true;

    var i = 0;

    // Se foi passada constraint
    if (constraints && constraints.length) {

        // percorrer todas as constraints entregues
        for (i = 0; i < constraints.length; ++i) {

            // Tem filtro por idade, vamos trabalhar isso
            if (constraints[i].fieldName == "idade") {
                idadeInicial = constraints[i].initialValue;
                idadeFinal = constraints[i].finalValue;
                deveSer = (
                    constraints[i].constraintType == ConstraintType.MUST
                    || constraints[i].constraintType == ConstraintType.SHOULD
                );
            }
        }
    }

    // Foi passado filtro por idade, então temos que filtrar os dados
    if (idadeInicial != -1 && idadeFinal != -1) {
        for (i = 0; i < dadosOriginais.length; ++i) {
            if ((
                    dadosOriginais[i].idade >= idadeInicial
                    && dadosOriginais[i].idade <= idadeFinal
                ) == deveSer
            ) {
                dataset.addRow([
                    dadosOriginais[i].nome,
                    dadosOriginais[i].idade
                ]);
            }
        }

        return dataset;
    }

    // vamos só jogar os dados no dataset, já que não tem filtro
    for (i = 0; i < dadosOriginais.length; ++i) {
        dataset.addRow([
            dadosOriginais[i].nome,
            dadosOriginais[i].idade
        ]);
    }

    return dataset;
}
```

---

## Resposta #4

**João Lima** (@Joao_Lima) — 11/09/2023, 11:42

Já tenho base na programação é que o fluig me deixa todo louco, no fluig sou iniciante.

Pelo seu exemplo a montagem da constraint seria essa parte:

```javascript
// Foi passado filtro por idade, então temos que filtrar os dados
    if (idadeInicial != 30 && idadeFinal != 35) {
        for (i = 0; i < dadosOriginais.length; ++i) {
            if ((
                    dadosOriginais[i].idade >= idadeInicial
                    && dadosOriginais[i].idade <= idadeFinal
                ) == deveSer
            ) {
                dataset.addRow([
                    dadosOriginais[i].nome,
                    dadosOriginais[i].idade
                ]);
            }
        }

        return dataset;
    }
```

Mudei a idade inicial e a idade final para ter o filtro porém não funcionou, creio que fiz errado.

Referente ao meu dataset ele foi montado assim:

```javascript
function createDataset(fields, constraints, sortFields) {
	var dataset = DatasetBuilder.newDataset();

	dataset.addColumn("razaoSocial");
	dataset.addColumn("nomeFantasia");
	dataset.addColumn("cnpj");
	dataset.addColumn("iMunicipal");
	dataset.addColumn("cep");
	dataset.addColumn("iEstadual");
	dataset.addColumn("estado");
	dataset.addColumn("cidade");
	dataset.addColumn("endereco");
	dataset.addColumn("bairro");
	dataset.addColumn("nomeRepresent");
	dataset.addColumn("rgRepresent");
	dataset.addColumn("cpfRepresent");
	dataset.addColumn("profissao");
	dataset.addColumn("emailRepresent");
	dataset.addColumn("telefoneRepresent");
	dataset.addColumn("cepRepresent");
	dataset.addColumn("bairroRepresent");
	dataset.addColumn("cidadeRepresent");
	dataset.addColumn("estadoRepresent");
	dataset.addColumn("nacionaliRepresent");
	dataset.addColumn("enderecoRepresent");
	dataset.addColumn("nomeTestemunhaQuali");
	dataset.addColumn("rgTestemunhaQuali");
	dataset.addColumn("cpfTestemunhaQuali");
	dataset.addColumn("emailTestemunhaQuali");
	dataset.addColumn("valor");




	dataset.addRow(new Array("Boticário Franchising S/a","Boticario", "11.137.051/0001-86", "0000001", "29100-430", "897.532.116.655", "Espirito Santo","Vila Velha", "Rua Vinícius Torres", "Centro de Vila Velha","","", "", "", "", "", "", "", "", "","","","","","","","1"));
	dataset.addRow(new Array("Intel Semicondutores do Brasil LTDA","INTEL CORPORATION", "57.286.247/0001-33", "0000002", "58111-094", "428.441.715.226", "Paraiba", "Bayeux", "Rua Tomé de Souza", "Imaculada","","", "", "", "", "", "", "", "", "","","","","","","","1"));
	dataset.addRow(new Array("Natura &Co Holding S.A","Natura", "71.673.990/0001-77", "0000003", "69042-480", "213.175.279.670", "Amazonas", "Manaus", "Dom Pedro I", "Rua Felipe Camarão","","", "", "", "", "", "", "", "", "","","","","","","","1"));
	dataset.addRow(new Array("","", "", "", "", "", "", "", "", "","Bento Cláudio Barros","40.777.755-6","256.024.258-37","Recursos Humanos","bento_barros@muricy.com","(11) 3753-5318","08530-130","Vila Andeyara","Ferraz de Vasconcelos","SP","Brasileiro","Rua Rosa Fares","Rosângela Eloá Emilly Dias","17.472.821-9","684.168.718-33","rosangela-dias72@trietto.com.br","2"));
	dataset.addRow(new Array("","", "", "", "", "", "", "", "", "","Raul Lorenzo Santos","46.500.582-2","232.419.068-09","Gerente","raul-santos73@bzness.com.br","(11) 3680-0697","09970-230","Inamar","Diadema","SP","Brasileiro","Rua Regulo","Juan Kevin Cauê RezendeJuan Kevin Cauê Rezende","33.505.782-2","468.653.348-17","juan_kevin_rezende@planicoop.com.br","2"));
	dataset.addRow(new Array("","", "", "", "", "", "", "", "", "","Vitória Gabriela Pietra Aparício","25.663.969-3","892.046.268-28","Vendedora","vitoria.gabriela.aparicio@yahool.com","(14) 2815-4023","17026-660","Núcleo Habitacional Mary Dota","Bauru","SP","Brasileira","Rua Brasília dos Santos Wellichan","Carolina Emilly Giovana Campos","24.925.898-5","548.535.658-33","carolinaemillycampos@chalu.com.br","2"));

	return dataset;

}
```

---
