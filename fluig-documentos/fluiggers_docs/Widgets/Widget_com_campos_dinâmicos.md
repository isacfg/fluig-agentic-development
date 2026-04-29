# Widget com campos dinâmicos

> **Fonte:** [https://fluiggers.com.br/t/widget-com-campos-dinamicos/2268](https://fluiggers.com.br/t/widget-com-campos-dinamicos/2268)
> **Categoria:** Widgets
> **Criado em:** 11/10/2023, 10:38
> **Visualizações:** 294 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Iago** (@iago.oliveira) — 11/10/2023, 10:38

Olá pessoal, tudo joia?

Eu normalmente desenvolvo minhas automatizações através do BPM, porém, agora surgiu a necessidade de eu desenvolver algumas widgets. Como não desenvolvo sempre, estou com algumas dúvidas ainda…

A widget que eu preciso desenvolver vai precisar consultar um dataset que lista alguns usuários. Preciso que ao listar, eu possa flegar apenas 1 deles numa radio button por exemplo. Depois, vou gravar essas informações em uma base SQL.

A minha principal dificuldade hoje é como fazer com que o fluig carregue essas rádios conforme a quantidade de registros no dataset. Vi que o pai x filho não funciona nesses casos…

Alguém teria algum exemplo para me ajudar?

Vlw pessoal!

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 13/10/2023, 14:04 | ❤️ 1

Você pode usar `document.createElement` pra ir criando os campos no HTML ou usar o método append da JQuery e passar direto o HTML.

Um exemplo de como seria com Select:

```javascript
const usuariosDataset = sua_consulta_dataset;
const options = [];

for (let usuario of usuariosDataset.values) {
    options.push(`<option value="${usuario.matricula}">${usuario.nome}</option>`);
}

$("#id_do_pai_do_select")
    .append(
        '<select id="usuario" name="usuario">'
        + options.join('')
        + '</select>'
    );
```

---

## Resposta #2

**Iago** (@iago.oliveira) — 27/10/2023, 12:11

Olá Bruno,

A solução que você indicou deu certo!

Dei uma modificada no meu código mas no final consegui fazer o que estava planejando.

Estou postando o código aqui para ajudar nossos amigos que queiram fazer algo semelhante.

```javascript
var dataset = DatasetFactory.getDataset("colleague", null, null, null);

    	for (var i = 0; i < dataset.values.length; i++) {
    		//1 Cria os objetos
    	    var radioButton = document.createElement('input');
    	    radioButton.type = 'radio';
    	    radioButton.name = 'opcao';

    	    //2 Cria a label
    	    var label = document.createElement('label');
    	    label.appendChild(radioButton);
    	    label.appendChild(document.createTextNode(dataset.values[i]['login']));

    	    //3 Atribui valor
    	    radioButton.value = dataset.values[i]['mail'];

    	    // Adicione o radiobutton ao elemento pai (container)
    	    var container = document.getElementById('container');
    	    container.appendChild(label);
}
HTML
<div id="container"></div>
```

Super obrigado pela ajuda!

---
