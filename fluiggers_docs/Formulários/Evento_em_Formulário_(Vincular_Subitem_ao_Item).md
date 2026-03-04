# Evento em Formulário (Vincular Subitem ao Item)

> **Fonte:** [https://fluiggers.com.br/t/evento-em-formulario-vincular-subitem-ao-item/868](https://fluiggers.com.br/t/evento-em-formulario-vincular-subitem-ao-item/868)
> **Categoria:** Formulários
> **Criado em:** 11/01/2022, 12:18
> **Visualizações:** 475 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Marcelo Barros** (@marcelo_barros) — 11/01/2022, 12:18

Boa tarde pessoal,

Estou com uma dificuldade que preciso acionar um evento dentro de um formulário onde ao selecionar um campo carregar apenas os subitens a ele configurados. Segue exemplo:

Campo X: Item A

Campo Y:
SubItem 1
SubItem 2

Campo X: Item B

Campo Y:
SubItem 3
SubItem 4

Pesquisei algumas coisas na Net sobre a criação de um script e fazer a chamada no formulário, porém não estou sabendo desenvolver.

Alguém teria uma sugestão pra resolução desse caso?

---

## Resposta #1 ✅ RESPOSTA ACEITA

**jonathan.nascimento** (@jonathan.nascimento) — 29/04/2022, 09:45 | ❤️ 1

[@marcelo\_barros](/u/marcelo_barros)
Aqui tenho um formulário com dois inputs, no qual no segundo Input só aparecem as opções relacionadas a opção que foi selecionada no primeiro input.
Não sei se é isso que você precisa, mas segue os arquivos abaixo.
Espero que te ajude

**HTML**

```auto
<div class="col-sm-6 col-xs-12" data-type="" data-show-properties="">
  <label>Área do Chamado</label>
  <span class="required text-danger">
  <strong>*</strong>
  </span>
  <select class="form-control" name="selCategoriaChamado" id="selCategoriaChamado" dataset="dsCategoriaChamado" datasetkey="NomeCategoria"
     datasetvalue="NomeCategoria" datasetfilter addBlankLine="false" onchange="exibeTipoChamado(this)"></select>
</div>
<div class="col-sm-6 col-xs-12" data-type="" data-show-properties="">
  <label>Tipo do Chamado</label>
  <span class="required text-danger">
  <strong>*</strong>
  </span>
  <select class="form-control" name="selTipoChamado" id="selTipoChamado" dataset="dsTipoChamado" datasetkey="NomeTipo" datasetvalue="NomeTipo"
     addBlankLine="false">
  </select>
</div>
```

**Dataset - dsCategoriaChamado**

```javascript
function createDataset(fields, constraints, sortFields) {
	//*Criar um variavel do tipo Dataset
	var dataset = DatasetBuilder.newDataset();

	//*Criar as colunas
	dataset.addColumn('NomeCategoria');

	//Insere os dados
	dataset.addRow(new Array('Selecione...'));
	dataset.addRow(new Array('Gestão de TI'));
	dataset.addRow(new Array('Rede de Dados'));
	dataset.addRow(new Array('Sistemas'));
	dataset.addRow(new Array('Sistemas Web'));
	dataset.addRow(new Array('Suporte Técnico'));
	dataset.addRow(new Array('Usuários'));
	dataset.addRow(new Array('Outro'));

	//*Retorna o dataset
	return dataset;
}
```

**Dataset - dsTipoChamado**

```javascript
function createDataset(fields, constraints, sortFields) {
	//Criar um variavel do tipo Dataset
	var dataset = DatasetBuilder.newDataset();

	//Criar as colunas
	dataset.addColumn('NomeCategoria');
	dataset.addColumn('NomeTipo');

	dataset.addRow(new Array('Selecione...', 'Selecione...'));

	//Gestão de TI
	dataset.addRow(new Array('Gestão de TI', 'Aquisição de Equips. Tecnológicos'));
	dataset.addRow(new Array('Gestão de TI', 'Aquisição de Softwares'));
	dataset.addRow(new Array('Gestão de TI', 'Auditoria de Sistemas'));
	dataset.addRow(new Array('Gestão de TI', 'Política de Segurança da Informação'));
	dataset.addRow(new Array('Gestão de TI', 'Processos/Procedimentos'));
	dataset.addRow(new Array('Gestão de TI', 'Projetos Implantação'));
	dataset.addRow(new Array('Gestão de TI', 'Treinamento Interno/Externo'));

	//Rede de Dados
	dataset.addRow(new Array('Rede de Dados', 'Equipamentos de Rede'));
	dataset.addRow(new Array('Rede de Dados', 'Infra Estrutura'));
	dataset.addRow(new Array('Rede de Dados', 'Internet'));
	dataset.addRow(new Array('Rede de Dados', 'Link de Dados'));
	dataset.addRow(new Array('Rede de Dados', 'Monitoramento'));
	dataset.addRow(new Array('Rede de Dados', 'Segurança de Rede'));

	//Sistemas
	dataset.addRow(new Array('Sistemas', 'Protheus'));
	dataset.addRow(new Array('Sistemas', 'Senior'));

	//Sistemas Web
	dataset.addRow(new Array('Sistemas Web', 'Business Intelligence - BI'));
	dataset.addRow(new Array('Sistemas Web', 'E-mail'));
	dataset.addRow(new Array('Sistemas Web', 'Fluig'));
	dataset.addRow(new Array('Sistemas Web', 'Site'));

	//Suporte Técnico
	dataset.addRow(new Array('Suporte Técnico', 'Eventos em Geral'));
	dataset.addRow(new Array('Suporte Técnico', 'Impressora'));
	dataset.addRow(new Array('Suporte Técnico', 'Manutenção/Equipamentos'));
	dataset.addRow(new Array('Suporte Técnico', 'Softwares'));

	//Usuários
	dataset.addRow(new Array('Usuários', 'Bloqueio de Acessos'));
	dataset.addRow(new Array('Usuários', 'Criar Usuário Rede/Protheus/E-mail/Fluig'));
	dataset.addRow(new Array('Usuários', 'Desbloqueio de Acessos - Retorno de Férias'));
	dataset.addRow(new Array('Usuários', 'Excluir Usuário Desligado'));
	dataset.addRow(new Array('Usuários', 'Transferência Filial/Setor'));
	dataset.addRow(new Array('Usuários', 'Transferir Arquivos'));

	dataset.addRow(new Array('Outro', 'Outro'));
	//Retorna o dataset
	return dataset;
}
```

**custom.js**

```javascript
function exibeTipoChamado(combo) {
	var categoria = combo.value;
	var quantidade = 0
	var campoTpChamado = document.getElementById('selTipoChamado');

	var c1 = DatasetFactory.createConstraint('NomeCategoria', 'Sistemas',
			'Sistemas', ConstraintType.MUST);
	var constraints = new Array(c1);
	var returnFields = new Array("NomeTipo");
	var tipo = DatasetFactory.getDataset("dsTipoChamado", returnFields,
			constraints, null);

	campoTpChamado.length = 1

	for (i = 0; i < tipo.values.length; i++) {
		if (tipo.values[i]["NomeCategoria"] == categoria
				&& categoria != "Selecione...") {
			quantidade++

			campoTpChamado.options[quantidade] = new Option(
					tipo.values[i]["NomeTipo"]);
			campoTpChamado.options[0].selected = true;
		}
	}

}
```

---
