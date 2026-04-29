# Evento impressão

> **Fonte:** [https://fluiggers.com.br/t/evento-impressao/649](https://fluiggers.com.br/t/evento-impressao/649)
> **Categoria:** Formulários
> **Criado em:** 13/09/2021, 16:01
> **Visualizações:** 897 | **Likes:** 2 | **Respostas:** 0

---

## Pergunta original

**Mauricio Freitas** (@mauriciolanner) — 13/09/2021, 16:01

Boa tarde pessoal, existe uma forma de eu verificar se o evento que estou é o de impressão? Porque tenho alguns campos que ficar em display:none a depender o tipo de processo e conforme ele avança nas atividades, ele é exibido ou não. Eu uso uma biblioteca que me da o ID da atividade no form e assim vou tratando, porém quando chega na impressão eu não consigo saber qual o evento dela. Alguem sabe como eu recupero isso?

---

## Resposta #1

**Sérgio Machado** (@sergio.machado) — 13/09/2021, 20:07 | ❤️ 2

Se eu entendi bem você deseja saber saber em qual modo o formulário se encontra, correto?

No seu script de evento de formulário **displayFields.js** consegue retornar essa informação através do método **form.getFormMode()**

Coloque esse trecho de código abaixo no seu displayFields.js

```js
customHTML.append("<script>function getFormMode(){ return '" + form.getFormMode() + "'; }</script>");
```

Dessa forma consegue acessar os possíveis valores que são:

> **ADD**: Criação do formulário
> **MOD**: Formulário em edição
> **VIEW**: Visualização do formulário
> **NONE**: Não há comunicação com o formulário, por exemplo, ocorre no momento da validação dos campos do formulário onde este não está sendo apresentado.

Chamando a função no js do seu formulário.

```js
const modo = getFormMode();

if(modo == "VIEW"){
    // Lógica para bloquear os campos em modo de visualização do formulário
}
```

---
