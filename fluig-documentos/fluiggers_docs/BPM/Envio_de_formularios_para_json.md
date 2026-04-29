# Envio de formularios para json

> **Fonte:** [https://fluiggers.com.br/t/envio-de-formularios-para-json/2174](https://fluiggers.com.br/t/envio-de-formularios-para-json/2174)
> **Categoria:** BPM
> **Tags:** `form`, `processo`, `bpm`
> **Criado em:** 01/09/2023, 12:16
> **Visualizações:** 211 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**joaopretti** (@joaopretti) — 01/09/2023, 12:16

Bom dia pessoal!

estou com uma duvida.

![image](https://fluiggers.com.br/uploads/default/optimized/2X/8/8e7cd24bf4d59b8325675b8c5619789d4fdc36bd_2_690x288.png)

Conforme print, eu preciso fazer com que ao clicar no botão “enviar” ele pegue todos estes pedidos que estão checkados passe para um arquivo JSON

```javascript
var beforeSendValidate = function(numState,nextState){
    console.log(numState)
    alert("foi")
    if (nextState == 9){
    console.log("Antes do WebSocket")
    const socket = new WebSocket('ws://localhost:1234');
    console.log("Depois do webSocket")
    socket.onopen = function () {
     socket.send("teste");
    };
   socket.onmessage = function (event) {
     alert(event.data)
     socket.close();
   };
   socket.onerror = function (error) {
       socket.close();

    };
  }
}
```

para este serviço basico para fazer alguns testes de integração.

Alguem consegue me ajudar por favor?

---

## Resposta #1

**Jonathan Albuquerque** (@Jonathan.Albuquerque) — 05/09/2023, 18:09

João, veja se este escopo te atende:

```auto
<table class="table" id="table">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
      </tr>
    </tbody>
  </table>
</div>
<div id="target"></div>
<script>
function capturarTabela(idDaTabela) {
  const tabela = document.getElementById(idDaTabela);
  const cabecalho = tabela.querySelector('thead tr');
  const linhas = tabela.querySelectorAll('tbody tr');
  const dados = [];

  linhas.forEach((linha) => {
    const objeto = {};

    linha.querySelectorAll('td').forEach((celula, indice) => {
      const chave = cabecalho.children[indice].textContent;
      const valor = celula.textContent;
      objeto[chave] = valor;
    });

    dados.push(objeto);
  });

  return dados;
}

const tabelaId = 'table';
const dadosDaTabela = capturarTabela(tabelaId);
const div = document.getElementById('target');
div.textContent = JSON.stringify(dadosDaTabela);
</script>
```

basta adaptar conforme a sua necessidade

---
