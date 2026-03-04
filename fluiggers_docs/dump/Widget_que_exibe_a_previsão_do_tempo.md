# Widget que exibe a previsão do tempo

> **Fonte:** [https://fluiggers.com.br/t/widget-que-exibe-a-previsao-do-tempo/2175](https://fluiggers.com.br/t/widget-que-exibe-a-previsao-do-tempo/2175)
> **Categoria:** Widgets
> **Tags:** `widget`
> **Criado em:** 01/09/2023, 13:59
> **Visualizações:** 568 | **Likes:** 1 | **Respostas:** 4

---

## Pergunta original

**Caue Silva Jesus** (@Caue_Silva_Jesus) — 01/09/2023, 13:59

Verifiquei no GitHub do Fluig que eles tem uma widget de previsão do tempo porém mesmo importando o widget que deixaram no Git ele não funciona. Basicamente ele pega a informação que você coloca no campo de busca e junta com a url de uma api.

```javascript
var weather = SuperWidget.extend({
    city: null,
	instanceId: null,

    editMode: false,
    viewMode: false,

    bindings: {
        local: {
        	'save': ['click_save'],
            'search-city': ['click_searchCity']
        }
    },

    configView: function() {
    	var $this = this;

    	$this.searchWeather($this.city, function(data) {
    		var prefix = 'wi wi-';
    		var code = data.weather[0].id;
    		var icon = weatherIcons[code].icon;

    		// If we are not in the ranges mentioned above, add a day/night prefix.
    		if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
				icon = 'day-' + icon;
    		}

    		// Finally tack on the prefix.
    		icon = prefix + icon;
    		$("#icon", $this.getContext()).addClass(icon);

    		$("#description", $this.getContext()).text(data.weather[0].description);

    		$("#temp", $this.getContext()).text(parseInt(data.main.temp - 273) + "º C");
    		$("#temp_min", $this.getContext()).text(parseInt(data.main.temp_min - 273) + "º C");
    		$("#temp_max", $this.getContext()).text(parseInt(data.main.temp_max - 273) + "º C");
    		$("#humidity", $this.getContext()).text(data.main.humidity + "%");
    		$("#wind", $this.getContext()).text(parseInt(data.wind.speed * 3.6) + " km/h");
    	},
    	function() {
    		$this.fluigcToast("", "${i18n.getTranslation('js.error.loadwidget')}", "danger");
    	});
    },

    /**
     * Build an alert element
     * @message Message to user
     * @type Success, info, warning or danger
     */
    fluigcAlert: function(message, type) {
    	return $("<div>", {
    		"class": "alert alert-" + type,
    		"role": "alert",
    		"html": message
    	});
    },

    /**
     * Show a toast message
     * @title Title of message
     * @message Message
     * @type Succes, info, warning or danger
     */
    fluigcToast: function(title, message, type) {
    	FLUIGC.toast({
    		title: title,
    		message: message,
    		type: type
    	});
    },

    getContext: function() {
    	if (!this.context) {
    		this.context = $("#weather_" + this.instanceId);
    	}
    	return this.context;
    },

    init: function () {
        if (this.viewMode) {
        	this.configView();
        }
    },

    save: function() {
    	var $this = this;
    	var result = WCMSpaceAPI.PageService.UPDATEPREFERENCES({async: false}, this.instanceId, {
    		'city': $("#city", $this.getContext()).val(),
    		'panel_style': $('#panel_style', $this.getContext()).val()
    	});

		if (result) {
			$this.fluigcToast('', "${i18n.getTranslation('js.toast.save.message')}", 'success');
		}
		else {
			$this.fluigcToast("${i18n.getTranslation('js.toast.error.title')}", "${i18n.getTranslation('js.toast.error.message')}", 'danger');
		}
    },

    searchCity: function() {
    	var $this = this;
    	var city = $("#city", $this.getContext()).val();
    	var $searchCityResult = $("#search_city_result", $this.getContext());

    	$searchCityResult.empty();

    	$this.searchWeather(city, function(data) {
    		var $alert = $this.fluigcAlert("${i18n.getTranslation('js.cityfounded')}", "success");
    		$searchCityResult.append($alert);
    	},
    	function() {
    		var $alert = $this.fluigcAlert("${i18n.getTranslation('js.citynotfounded')}", "warning");
    		$searchCityResult.append($alert);
    	});
    },

    searchWeather: function(city, callbackSuccess, callbackError) {
    	$.ajax({
    		error: function() {
    			if (typeof callback != "undefined") {
    				callbackError();
    			}
    		},
    		success: function(data) {
    			if (data.cod == 404) {
    				callbackError();
    			}
    			else {
    				callbackSuccess(data);
    			}
    		},
    		url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=ec937db3bb7ebc85e1a7fea96cdcb91e"
    	});
    },
});
```

Porém não está funcionando e não sei o motivo, alguém poderia me ajudar

---

## Resposta #1

**Caue Silva Jesus** (@Caue_Silva_Jesus) — 05/09/2023, 11:49

Alguém saberia como fazer uma widget de previsão do tempo???

---

## Resposta #2 ✅ RESPOSTA ACEITA

**Jonathan Albuquerque** (@Jonathan.Albuquerque) — 05/09/2023, 17:35

Caue

Como uma boa alternativa, você pode incluir uma widget de edição de conteúdo e no código fonte dentro do body incluir o seguinte iframe deste site [aqui](https://www.climaeradar.com.br/widget-do-tempo):

```auto
<iframe src="https://api.wo-cloud.com/content/widget/?geoObjectKey=15936458&language=pt&region=BR&timeFormat=HH:mm&windUnit=kmh&systemOfMeasurement=metric&temperatureUnit=celsius" name="CW2" scrolling="no" width="290" height="318" frameborder="0" style="border-radius: 8px"></iframe>
```

Aparecerá desta maneira no slot da sua página:
![Untitled](https://fluiggers.com.br/uploads/default/original/2X/1/130e5782b5789a98002c9dc291127ab82289d897.png)

Por fim, aparecerá a widget da previsão do tempo sem a necessidade de desenvolvimento.

---

## Resposta #3

**Caue Silva Jesus** (@Caue_Silva_Jesus) — 06/09/2023, 16:36

Muito obrigado, funcionou

---

## Resposta #4

**MAURO SIMOES** (@Mautresim) — 07/09/2023, 10:43 | ❤️ 1

Eu fiz uma assim, do site [https://www.tempo.com](https://www.tempo.com):

```auto
<div class="container-fluid">
<h3>PREVISÃO DO TEMPO</h3>
<!--  -------------------A -->
<img src="https://www.tempo.com/wimages/fotof2a752f7db3fe1ead63df501686d18f0.png">
<!--  -----------------/A -->
<!--  -------------------B -->
<img src="https://www.tempo.com/wimages/foto48dcb8b1f5d343e8d6aa45ea7ad3bd2b.png">
<!--  -----------------/B -->
<!--  -------------------C -->
<img src="https://www.tempo.com/wimages/foto06cad46b8102b5a878159ce25e895d50.png">
<!--  -----------------/C -->
<!--  -----------------D -->
<img src="https://www.tempo.com/wimages/foto02205f031edc87dc07cabdbc4afb8bd0.png">
<!--  -----------------/D -->
<!--  -----------------E -->
<img src="https://www.tempo.com/wimages/fotob097e235dd24d9c2e4c3589093a10756.png">
<!--  -----------------/E -->
</div><!-- container-fluid -->
```

---
