# Dúvida da funcionalidade reloadZoomFilterValues

> **Fonte:** [https://fluiggers.com.br/t/duvida-da-funcionalidade-reloadzoomfiltervalues/1368](https://fluiggers.com.br/t/duvida-da-funcionalidade-reloadzoomfiltervalues/1368)
> **Categoria:** BPM
> **Tags:** `form`, `bpm`, `zoom`
> **Criado em:** 29/09/2022, 10:47
> **Visualizações:** 1293 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**Guilherme Carvalho** (@guiza1carvalho) — 29/09/2022, 10:47

Pessoal

Seguinte, sou iniciante no Fluig e pesquisei sobre reloadZoomFilterValues mas não consegui entender muito bem como implementar ela. Gostaria de saber se alguém pode me passar uma explicação para a seguinte necessidade:

Eu tenho o seguinte campo zoom que retorna esse dataset:

```
<td class="col-md-2 col-sm-2" id="divTbVariedadeEstimada">
                  <input type="zoom" id ="tbVariedadeEstimada" name="tbVariedadeEstimada" class="form-control"
                  data-zoom="{
                    'displayKey':'variedadeCultura',
                    'datasetId':'dsVariedadesCulturasOffline',
                    'fields':[
                    {
                      'field':'variedadeCultura',
                      'label':'Variedade',
                      'standard':'true'
                    },{
                      'field':'tipoCultura',
                      'label':'Cultura',
                      'visible':'false'
                    }
                    ]
                    }"
                    />
                </td>
```

![image](https://fluiggers.com.br/uploads/default/original/1X/0cfa5cda075243f8cea59e3423af751c981ae6b4.png)

E eu quero usar o reloadZoomFilterValues para filtrar e mostar somente as variedades de tomate ou milho com base nesse campo radio:

```
<div class="form-group col-md-2" id="divTipoCultura">
		<form action="#">
		<strong><p>Cultura do plantio<span class="required text-danger">*</span></p></strong>

			<div class="custom-radio custom-radio-inline custom-radio-primary">
				<input type="radio" name="tipoCultura" value="Milho" id="Milho" onclick="acertaVariedade();">
				<label for="Milho">Milho</label>
			</div>
			<div class="custom-radio custom-radio-inline custom-radio-primary">
				<input type="radio" name="tipoCultura" value="Tomate" id="Tomate" onclick="acertaVariedade();">
				<label for="Tomate">Tomate</label>
			</div>
		</form>
	</div>
```

Eu fiz a seguinte função em cima de alguns exemplos que encontrei:

```
function acertaVariedade() {

		  var tipoCultura = document.querySelector('input[name="tipoCultura"]:checked').value;

		  if (tipoCultura == "Tomate") {

			reloadZoomFilterValues(“tbVariedadeEstimada”, “tipoCultura,Tomate”);

		  }

		  if (tipoCultura == "Milho") {

			reloadZoomFilterValues(“tbVariedadeEstimada”, “tipoCultura,Milho”);

		  }

		}
```

Alguém poderia me ajudar com a maneira correta de fazer essa função. Obrigado!

---

## Resposta #1

**Carlos Magno Sousa Vieira** (@Carlos_Magno_Sousa_V) — 30/09/2022, 08:42

boa tarde,

Estive replicando baseado nas informações que vc mandou:
alterei apenas a parte do javascript e retirei o onclick dos radios, simplificando o seu codigo ficaria assim:

```
$('input:radio[name="tipoCultura"]').click(function() {
      	reloadZoomFilterValues("tbVariedadeEstimada", "tipoCultura,"+$("input[type=radio][name=tipoCultura]:checked").val());

  })
```

Agora quanto ao filtro não ser executado, lembrei que o DataSet com zoom possui um defeito, por questões de desempenho o zoom não filtra mais diretamente um dataset(antigamente funcionava), até aonde eu sei a unica forma de funciona os filtros em zoom com DataSet é configurar o Dataset para ser sincronizado, as demais opções vc deve manualmente implantar as regras de filtro, segue orientação sobre o assunto:
[https://tdn.totvs.com/pages/releaseview.action?pageId=412888219#ConstruçãodoDatasetAvançado-Datasetavançadocomutilizaçãodeconstraint](https://tdn.totvs.com/pages/releaseview.action?pageId=412888219#Constru%C3%A7%C3%A3odoDatasetAvan%C3%A7ado-Datasetavan%C3%A7adocomutiliza%C3%A7%C3%A3odeconstraint)

---

## Resposta #2

**Wasley Santos** (@Wasley_Santos) — 09/09/2025, 08:24

Na verdade não é um defeito. Dataset avançados devem usar constraint. Apenas dataset internos e sincronizados filtram sem implementar constraint.
Ou seja, o reloadZoomFilterValues só vai funcionar se o dataset tiver constraint implementada

---
