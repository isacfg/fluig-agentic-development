# Dúvida sobre API IBGE (select de Estados e Cidades)

> **Fonte:** [https://fluiggers.com.br/t/duvida-sobre-api-ibge-select-de-estados-e-cidades/1289](https://fluiggers.com.br/t/duvida-sobre-api-ibge-select-de-estados-e-cidades/1289)
> **Categoria:** BPM
> **Tags:** `form`, `fluigapi`
> **Criado em:** 31/08/2022, 11:23
> **Visualizações:** 779 | **Likes:** 4 | **Respostas:** 1

---

## Pergunta original

**Guilherme Carvalho** (@guiza1carvalho) — 31/08/2022, 11:23 | ❤️ 1

Pessoal, bom dia, boa tarde, boa noite.

Alguém poderia me ajudar em um preenchimento de Estados e Cidades, peguei a API do IBGE e implementei ela ao meu código, ficando dessa maneira:

HTML

```
<div class="form-group col-md-2">
     <label for="estados">Estado</label><span class="required text-danger"><strong>*</strong></span>
     <select id="estados" name="estados" class="form-control">
        <option value=""></option>
     </select>
  </div>

  <div class="form-group col-md-3">
     <label for="cidades">Cidade</label><span class="required text-danger"><strong>*</strong></span>
     <select id="cidades" name="cidades" class="form-control">
        <option value=""></option>
     </select>
  </div>
```

JS

```
const urlEstados = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
const estadosHTML = document.getElementById("estados");
const cidadesHTML = document.getElementById("cidades");

  window.addEventListener('load', async function(){

     const request = await fetch(urlEstados);
     const response = await request.json();

     const options = document.createElement("optgroup");
     options.setAttribute('label','Selecione o estado')
     response.forEach(function(estadosHTML){
        options.innerHTML += '<option>'+estadosHTML.sigla+'</option>';
     });

     estadosHTML.append(options);

  });

     estadosHTML.addEventListener('change', async function(){

        const urlCidades = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'+estadosHTML.value+'/municipios';
        const request = await fetch(urlCidades);
        const response = await request.json();
        var options = '';

        response.forEach(function(cidadesHTML){
           options += '<option>'+cidadesHTML.nome+'</option>';
        });

        cidadesHTML.innerHTML = options;

     });
```

* * *

A API está funcionando normalmente mas a minha dúvida é a seguinte: Ao imprimir o formulário, ele sai o estado que foi escolhido e abaixo sai a listagem de todos os estados, como poderia alterar o código para na impressão sair apenas o estado selecionado?

![image](https://fluiggers.com.br/uploads/default/original/1X/61e5bfd275118b8882064cec74f3a4a783b4e54d.png)

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 31/08/2022, 12:26 | ❤️ 2

A impressão que tenho é que a sua função está sendo executada mesmo durante a visualização/impressão e assim ela faz um append no HTML jogando direto na tela.

Tenta restringir a execução da função pra somente quando o formulário estiver em modo de edição pra ver se o erro persiste.

---

## Resposta #2

**Guilherme Carvalho** (@guiza1carvalho) — 31/08/2022, 14:55

Bruno, sou novo na parte de programação em geral (não só Fluig).

Estava pesquisando aqui e tentei fazer com as funções break e event.preventDefault(), porém sem sucesso.

O que poderia usar para fazer essa restrição?
para eu pesquisar aqui e entender a funcionalidade

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 31/08/2022, 15:12 | ❤️ 1

Você pode colocar toda essa parte de fazer o carregamento numa função no seu JS do formulário:

```javascript
function carregaLocalidades() {
    // seu código aqui
}
```

Então cria um evento `displayFields` pro seu formulário. Nesse evento você valida se o formulário está em modo de edição. Se sim executa a função.

```javascript
/**
 * Define os campos que serão ocultados, desabilitados e seus valores iniciais
 *
 * Função executada antes de exibir o formulário.
 *
 * @param {FormController} form
 * @param {customHTML} customHTML
 */
function displayFields(form, customHTML) {
    if (form.getFormMode() == "ADD" || form.getFormMode() == "MOD") {
        customHTML.append('<script>$(() => carregaLocalidades());</script>');
    }
}
```

---

## Resposta #4

**Guilherme Carvalho** (@guiza1carvalho) — 31/08/2022, 15:24

Entendi, muito obrigado pela explicação Bruno :clap: :clap: :clap:

---
