# Alterar estilo do dropdown no filter

> **Fonte:** [https://fluiggers.com.br/t/alterar-estilo-do-dropdown-no-filter/2935](https://fluiggers.com.br/t/alterar-estilo-do-dropdown-no-filter/2935)
> **Categoria:** Formulários
> **Tags:** `form`
> **Criado em:** 16/08/2024, 16:43
> **Visualizações:** 76 | **Likes:** 0 | **Respostas:** 2

---

## Pergunta original

**Newton Negri** (@Newton_Negri) — 16/08/2024, 16:43

Fala pessoal! boa tarde!

Implementei essa funcionalidade no meu formulário, mas, o dropdown do campo, por padrão, tem as bordas arredondadas…
Pelo que entendi na documentação, eu deveria conseguir alterar o estilo através da configuração style > tableStyle: ‘’.

Então incluí essa configuração e adicionei no meu css a classe custom-dropdown indicada na configuração, mas, não funcionou…

Alguém sabe como fazer?

```auto
.custom-dropdown .fluigc-autocomplete-result {
	border-radius: 0 !important;
}
```
```auto
function motivoDispensaZoom() {
	var source = [
		{ company: 'Wonka Industries', id: 1, location: 'London', industry: 'Confectionery', employees: 500 },
		{ company: 'Acme Corp', id: 2, location: 'New York', industry: 'Manufacturing', employees: 2000 },
		{ company: 'Stark Industries', id: 3, location: 'Los Angeles', industry: 'Technology', employees: 10000 },
		{ company: "Ollivander's Wand Shop", id: 4, location: 'Diagon Alley', industry: 'Retail', employees: 15 },
		{ company: 'Wayne Enterprises', id: 5, location: 'Gotham City', industry: 'Conglomerate', employees: 25000 },
		{ company: 'Cheers', id: 6, location: 'Boston', industry: 'Hospitality', employees: 30 },
		{ company: 'Gekko & Co', id: 7, location: 'Wall Street', industry: 'Finance', employees: 50 },
	];

	var settingsExampleArray = {
		source: source,
		displayKey: 'company',
		multiSelect: false,
		style: {
			autocompleteTagClass: 'tag-gray',
			tableSelectedLineClass: 'info',
			tableStyle: 'custom-dropdown',
		},
		table: {
			header: [
				{
					title: 'Company',
					size: 'col-xs-3',
					dataorder: 'company',
					standard: true,
				},
				{
					title: 'Location',
					size: 'col-xs-3',
					dataorder: 'location',
				},
				{
					title: 'Industry',
					size: 'col-xs-3',
					dataorder: 'industry',
				},
				{
					title: 'Employees',
					size: 'col-xs-2',
					dataorder: 'employees',
				},
			],
			renderContent: ['company', 'location', 'industry', 'employees'],
		},
		tableHeight: '250px',
	};

	var filter = FLUIGC.filter('#motivoDemissao', settingsExampleArray);
}
```

---

## Resposta #1

**Pablo Valle** (@pablooav) — 19/08/2024, 18:26

No caso vc quer retirar as bordas de um campo do tipo filter, certo ?

Adicionando estilização nessa classe aqui você consegue o resultado que deseja:

```css
.input-group-addon {
  border-radius: inherit !important;
}
```

Antes:
![image](https://fluiggers.com.br/uploads/default/original/2X/0/075127e1933abba75149b9460d2f890320aca3fb.png)

Depois:
![image](https://fluiggers.com.br/uploads/default/original/2X/9/973292b17c5f36f712f87b2ccefb5cc50dec1c89.png)

---

## Resposta #2

**Newton Negri** (@Newton_Negri) — 20/08/2024, 11:19

Olá [@pablooav](/u/pablooav) , bom dia!

![image](https://fluiggers.com.br/uploads/default/original/2X/8/825da79594fbcf6123422cbaa655a50fe8abca92.png)

Implementei sua sugestão, mas, acredito que você tenha entendido errado.
Me refiro a borda do dropdown;

Ainda não consegui alterar ela.

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Pablo Valle** (@pablooav) — 20/08/2024, 11:56

Certo, tente utilizar:

```css
.filter-panel {
  border-radius: inherit !important
}
```

Dessa forma removi a borda default que é de 4px do Fluig.
![image](https://fluiggers.com.br/uploads/default/original/2X/1/1c35ada17cc0505ae681b5ff680499a4f42a6134.png)

A sua borda está bem mais redonda do que o default, acredito que tenha mais algum css em seu código como um todo que está alterando tanto a cor quando o border-radius do seu input, da uma conferida inspecionando elemento, por lá você consegue ver todos css’s que estão atuando no na div que vc seleciona.

![image](https://fluiggers.com.br/uploads/default/optimized/2X/b/b3fa31f775d5d6377836bd954c02982122c9fff6_2_690x291.png)

---

## Resposta #4

**Newton Negri** (@Newton_Negri) — 20/08/2024, 12:03

Sim! No layout padrão que costumo utilizar nos formulários aqui da empresa estava utilizando isso:

```auto
.panel.panel-default {
 border: 1px solid #00263e !important;
 border-radius: 15px !important;
 padding: 0 !important;
}
```

Não havia percebido… agradeço muito a ajuda!! Funcinou.

---
