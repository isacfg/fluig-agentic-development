# Carroséis (carousels)

> **Fonte:** [https://fluiggers.com.br/t/carroseis-carousels/3086](https://fluiggers.com.br/t/carroseis-carousels/3086)
> **Categoria:** Widgets
> **Tags:** `form`, `widget`
> **Criado em:** 13/12/2024, 16:26
> **Visualizações:** 77 | **Likes:** 2 | **Respostas:** 1

---

## Pergunta original

**Artur Alves** (@artur.alves) — 13/12/2024, 16:26

Boa tarde, pessoal!

Alguém já utilizou o **carousels** do Style guide do Fluig?

Tentei utilizar ele na Widget, mas não deu certo…

Inseri o código **application.resource.component.1=fluigcarousel** no application.info conforme orienta a documentação, porém, da a impressão de quando ele executa o código:
`var` `carousel = FLUIGC.carousel(` `'#carousel-example-generic'` `, settings);`

Ele não acha o **carousel** dentro do **FLUIGC**

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 13/12/2024, 17:43 | ❤️ 1

Carousel não tentei, mas recentemente fui tentar usar os gráficos e desisti da versão que vem no Fluig. Preferi baixar uma lib nova e atualizada pra fazer algo bem feito.

---

## Resposta #2

**venturelli** (@venturelli) — 16/12/2024, 23:11 | ❤️ 1

Nunca usei… olhando a doc que comentasse ([TOTVS Fluig Developer](https://style.fluig.com/miscellaneous.html#carousel)), adicionou o script?

```auto
<link rel="stylesheet" type="text/css" href="/style-guide/css/fluig-style-guide-carousel.min.css">
<script src="/style-guide/js/fluig-style-guide-carousel.min.js"></script>
```

É ele quem cria o `carousel` no objeto `FLUIGC`

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Artur Alves** (@artur.alves) — 17/12/2024, 08:26

Coloquei sim, mas mesmo assim quando depura ele pelo console ele não identifica o carousel.

No final das contas acabei criando um básico personalizado, vou mandar aqui pra caso vocês queiram utilizar:

Como é Widget, então trabalhei muito com eventos, para quando carregar o documento e etc.

Primeiro cria as varíaveis globais:

```auto
var images = []
var settings = {}
var urlImagem = "";
var urlImagem2 = "";
var version = 0
```

Depois uma função Async, para trabalhar API sem que uma carregue antes de outra.

```auto
$(document).ready(async function() {
	try {
		const version = await buscaImagem1();
		await buscaImagem2(version);
		carregaVariaveis()
		createCarousel(settings)
	} catch (error) {
		console.log(error);
	}
});
```

Trouxe duas API, uma que busca a imagem do documento atual, e outra que busca a imagem da versão anterior do mesmo documento. Para manter como se fosse um histórico de alterações no mural.

```auto
async function buscaImagem1() {
	return new Promise(function(resolve, reject) {
		$.ajax({
			async: true,
			type: "GET",
			contentType: "application/json",
			url: "/api/public/ecm/document/activedocument/211444",
			success: function (retorno) {
				urlImagem = retorno.content.fileURL;
				version  = retorno.content.version;

				if ($("#imagem1").length > 0) {
					$("#imagem1").attr("src", urlImagem);
				}

				resolve(version);
			},
			error: function (error) {
				reject("Erro ao buscar a imagem 1: " + error);
			}
		});
	});
}

async function buscaImagem2(version) {
	return new Promise(function(resolve, reject) {
		version = version - 1;
		$.ajax({
			async: true,
			type: "GET",
			contentType: "application/json",
			url: "/api/public/ecm/document/211444/" + version,
			success: function (retorno) {
				urlImagem2 = retorno.content.fileURL;

				if ($("#imagem2").length > 0) {
					$("#imagem2").attr("src", urlImagem2);
				}

				resolve();
			},
			error: function (error) {
				reject("Erro ao buscar a imagem 2: " + error);
			}
		});
	});
}
```

Agora eu carrego as variáveis do array e do Objeto

```auto
function carregaVariaveis() {
	images = [
		{
			src: urlImagem,
			alt: 'First image',
			templateTitle: 'Caption template first image'
		},
		{
			src: urlImagem2,
			alt: 'Second image',
			templateTitle: 'Caption template second image'
		}
	];

	settings = {
		id: 'myFluigCarouselExample2',
		images: images,
		indicators: true,
		startIndex: 0,
		interval: 5000,
		template: '.my_caption_template_carousel'
	};
}
```

E por fim, eu chamo a função que cria o carrosél

```auto
function createCarousel(settings) {
	var carouselContainer = $('#' + settings.id);
	var carouselInner = carouselContainer.find('.carousel-inner');
	var carouselIndicators = carouselContainer.find('.carousel-indicators');
	var images = settings.images;
	var currentIndex = settings.startIndex || 0;
	var intervalTime = settings.interval || 5000;
	var interval;

	// Inicializ o carrosél
	function initializeCarousel() {
		// Adiciona as imagens no carrossel
		images.forEach(function(image, index) {
			var imageElement = $('<img>')
				.attr('src', image.src)
				.attr('alt', image.alt)
				.attr('data-index', index)
				.addClass(index === currentIndex ? 'active' : '');
			carouselInner.append(imageElement);

			// Adiciona indicadores
			if (settings.indicators) {
				var indicatorButton = $('<button>')
					.attr('data-index', index)
					.on('click', function(event) {
						event.preventDefault();
						goToImage(index);
					})
					.addClass(index === currentIndex ? 'active' : '');
				carouselIndicators.append(indicatorButton);
			}
		});

		// Inicia o intervalo para trocar as imagens automaticamente
		startInterval();

		// Adiciona eventos de navegação
		carouselContainer.find('.prev').on('click', function(event) {
			event.preventDefault();  // Impede o comportamento padrão do clique
			prevImage();
		});

		carouselContainer.find('.next').on('click', function(event) {
			event.preventDefault();  // Impede o comportamento padrão do clique
			nextImage();
		});
	}

	// Função para ir para uma imagem específica
	function goToImage(index) {
		currentIndex = index;
		updateCarousel();
	}

	// Função para atualizar o carrossel
	function updateCarousel() {
		var images = carouselInner.find('img');
		var indicators = carouselIndicators.find('button');

		// Atualiza as imagens
		images.removeClass('active').eq(currentIndex).addClass('active');

		// Atualiza os indicadores
		indicators.removeClass('active').eq(currentIndex).addClass('active');
	}

	// Ir para a imagem anterior
	function prevImage() {
		currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
		updateCarousel();
	}

	// Ir para a próxima imagem
	function nextImage() {
		currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
		updateCarousel();
	}

	// Função para iniciar o intervalo de navegação
	function startInterval() {
		interval = setInterval(function() {
			nextImage();
		}, intervalTime);
	}

	// Função para parar o intervalo
	function stopInterval() {
		clearInterval(interval);
	}

	// Inicializa o carrossel
	initializeCarousel();
}
```

Código CSS.

```auto
.carousel-container {
    position: relative;
    width: 100%;
    max-width: 600px;
    margin: auto;
    overflow: hidden;
}

.carousel-inner img {
    width: 100%;
    display: none; /* Inicialmente ocultamos todas as imagens */
}

.carousel-inner .active {
    display: block;
}

.carousel-indicators {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 5px;
}

.carousel-indicators button {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #fff;
    border: none;
    opacity: 0.5;
    transition: opacity 0.3s;
}

.carousel-indicators button.active {
    opacity: 1;
}

button.prev, button.next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    z-index: 10;
}

button.prev {
    left: 10px;
}

button.next {
    right: 10px;
}
```

Código HTML:

```auto
<div class="row">
    <div id="myFluigCarouselExample2" class="carousel-container">
        <div class="carousel-inner">
        </div>
        <div class="carousel-indicators">
        </div>
        <button class="prev">‹</button>
        <button class="next">›</button>
    </div>
</div>
```

---
