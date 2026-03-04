# Radio Button customizado

> **Fonte:** [https://fluiggers.com.br/t/radio-button-customizado/219](https://fluiggers.com.br/t/radio-button-customizado/219)
> **Categoria:** BPM
> **Criado em:** 26/03/2021, 09:41
> **Visualizações:** 1443 | **Likes:** 10 | **Respostas:** 1

---

## Pergunta original

**Daniel Sales** (@Daniel_Sales) — 26/03/2021, 09:41 | ❤️ 5

Bom dia dica de estilização de componente radiobutton

`css do radio button`

```css
.flex{
	display: flex;
}

.rinput{
	-webkit-appearance:none;
}

.rlabel{
	height: 70px;
	width: 100px;
	border:2px solid #18f98d;
	position: relative;
	margin: auto;
	border-radius: 10px;
	color: #18f98d;
	transition: 0.5s;
	background-color: #f7f7f7;
}

.fa{
	position: absolute;
	top:50%;
	left: 50%;
	transform: translate(-50%,-80%);
}

label > span{
	font-size: 20px;
	position: absolute;
	top:10%;
	left: 50%;
	transform: translate(-50%,80%);
	font-family: "Poppins",sans-serif;
	font-weight: 500;
}

input[type="radio"]:checked + label{
	background-color: #18f98d !important;
	color: white;
	box-shadow: 0 15px 45px rgba(24,249,141,0.2);
}
```
```auto
<div class="row">
	<div class="col-md-12 flex">
		<input type="radio" name="revisar" id="sim" class="rinput" value="SIM">
		<label for="sim" class="rlabel">
			<i class="fa fa-check fa-2x" aria-hidden="true"></i>
			<span>Sim</span>
		</label>
		<input type="radio" name="revisar" id="nao" class="rinput" value="NAO">
		<label for="nao" class="rlabel">
			<i class="fa fa-times-circle fa-2x" aria-hidden="true"></i>
			<span>Não</span>
		</label>
	</div>
</div>
```

Como funciona o componente:

```auto
<div class="col-md-12 flex">
```

essa linha recebe a classe ***FLEX*** responsavel pelo alinhamento dos radiobutton

```auto
<input type="radio" name="revisar" id="sim" class="rinput" value="SIM">
```

Essa linha recebe a classe ***rinput*** um ***value*** e um ***id*** (muito importante esse id) ele vai ser referenciado no ***label for***

```auto
<label for="sim" class="rlabel">
```

A propriedade ***label for*** deve ser informada com o ***id*** do ***radiobutton*** caso contrario o click não vai funcionar

Com isso você passa a ter um radiobutton todo estilizado.

```auto
<i class="fa fa-times-circle fa-2x" aria-hidden="true"></i>
```

Usei aqui o ***fontawesome*** biblioteca similar ao ***fluigicon*** mas muito mais poderosa.

Qualquer duvida pergunte!!!

---

## Resposta #1

**Victor Castro** (@victorcastro) — 26/03/2021, 13:02

Posta aí um print pra gente ver como fica :joy:

---

## Resposta #2

**Daniel Sales** (@Daniel_Sales) — 26/03/2021, 13:10 | ❤️ 4

![TOTVS Fluig Plataforma - Movimentar Solicitação - Google Chrome_3](https://fluiggers.com.br/uploads/default/optimized/1X/64138edb3ae8d4888e63052ea8adacbeec930df8_2_690x103.jpeg)

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 26/03/2021, 13:29 | ❤️ 1

Muito bom!

FontAwesome, como o nome diz, é incrível! Senti falta dela no Fluig.

Ultimamente eu tenho utilizado bastante, no Fluig, Switch, Custom-Checkbox e Custom-Radio. Eles já dão uma cara muito melhor ao padrão que o navegador tem.

---

## Resposta #4

**Igor Rodrigues** (@fluigor.com.br) — 26/03/2021, 13:44

eu tenho usado bastante a SKIN FLAT nos ambientes que atuo.
acho que o form tem que ser o mais intuitivo possível pro usuario.

---

## Resposta #5

**jonathas araujo** (@jonathas_araujo) — 30/09/2022, 09:10

Muito bom. Vou aplicar isso também.

---
