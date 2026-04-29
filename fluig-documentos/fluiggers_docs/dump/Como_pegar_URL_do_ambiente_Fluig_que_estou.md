# Como pegar URL do ambiente Fluig que estou?

> **Fonte:** [https://fluiggers.com.br/t/como-pegar-url-do-ambiente-fluig-que-estou/157](https://fluiggers.com.br/t/como-pegar-url-do-ambiente-fluig-que-estou/157)
> **Categoria:** BPM
> **Criado em:** 17/03/2021, 13:57
> **Visualizações:** 2396 | **Likes:** 12 | **Respostas:** 2

---

## Pergunta original

**Julio Vitor Vaz da Rocha** (@JulioRocha) — 17/03/2021, 13:57

Olá pessoal, boa tarde!

Estou tentando pegar a URL do link do ambiente Fluig que eu estou através da função javascript abaixo, mas está dando erro na hora de exportar para o servidor.

`var url = document.URL;`

Estou fazendo essa chamada através do evento de Workflow BeforeStateEntry.

A mensagem aparece o erro especificamente nesse ponto, mas não me da detalhes sobre o erro.

---

## Resposta #1

**Romulo Pereira** (@romuloccomp) — 17/03/2021, 14:21

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/juliorocha/48/107_2.png) JulioRocha:
>
> > document

O BeforeStateEntry executa pelo servidor, a função que você está tentando fazer é para o font-end.
Se tiver um formulário, colocar a informação do document.URL em um campo oculto e dentro do BeforeStateEntry você faz as tratativas necessárias.
Exemplo:
´form.getValue(‘nm\_url’)´

---

## Resposta #2

**Julio Vitor Vaz da Rocha** (@JulioRocha) — 17/03/2021, 14:34 | ❤️ 1

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/romuloccomp/48/73_2.png) romuloccomp:
>
> > Se tiver um formulário, colocar a informação do document.URL em um campo oculto e dentro do BeforeStateEntry você faz as tratativas necessárias.

Olá, boa tarde!!

Consegui resolver criando um Dataset e consultando o mesmo.

Link da documentação do dataset:

[gist.github.com](https://gist.github.com/msmosso/11ddae550648bb1fd46ffdb9ce56757f)

#### [https://gist.github.com/msmosso/11ddae550648bb1fd46ffdb9ce56757f](https://gist.github.com/msmosso/11ddae550648bb1fd46ffdb9ce56757f)

##### DS\_CONSULTA\_AMBIENTE.js

```JavaScript
function createDataset(fields, constraints, sortFields) {

    log.info("DS_CONSULTA_AMBIENTE - INÍCIO");

    try {
        var contextWD = new javax.naming.InitialContext();
        var dataSourceWD = contextWD.lookup("java:/jdbc/AppDS");
        var connectionWD = dataSourceWD.getConnection();
    } catch (e) {
        log.info("DS_CONSULTA_AMBIENTE - ERRO 1: " + e.message + "(#" + e.lineNumber + ")");
```
This file has been truncated. [show original](https://gist.github.com/msmosso/11ddae550648bb1fd46ffdb9ce56757f)

---

## Resposta #3

**Romulo Pereira** (@romuloccomp) — 17/03/2021, 14:54 | ❤️ 1

Que massa!
Fiz coloquei aqui no ambiente para ver funcionando, ficou massa.

---

## Resposta #4

**Bruno Gasparetto** (@Bruno_Gasparetto) — 17/03/2021, 15:31 | ❤️ 3

Eu já pensei em usar o campo oculto de formulário pra salvar a URL, mas estávamos planejando trocar a URL e isso traria problemas em processos já abertos.

Então nos eventos de backend eu prefiro pegar a URL atual.

```javascript
fluigAPI.getPageService().getServerURL();
```

---

## Resposta #5

**Igor Rodrigues** (@fluigor.com.br) — 17/03/2021, 16:01 | ❤️ 1

[@Bruno\_Gasparetto](/u/bruno_gasparetto) é mais profissional possível é isso! usar as Variáveis globais que o Fluig proporciona.

---

## Resposta #6 ✅ RESPOSTA ACEITA

**Alef Vinicius** (@alefvinicius) — 18/03/2021, 05:11 | ❤️ 5

Fala, Julio, tudo tranquilo? Só para complementar a resposta dos colegas:

Para ter acesso a URL do ambiente Fluig, acredito que essas duas formas sejam as mais eficientes:

**No Front**
Se quiser fazer o uso já no script do formulário pode usar a seguinte propriedade: **WCMAPI.serverURL** da api (WCMAPI - documentada aqui: [WCMAPI - TOTVS Fluig - TDN](https://tdn.totvs.com/display/public/fluig/WCMAPI)), com ela no próprio script você poderia utilizar da seguinte forma:

***var url = top.WCMAPI.serverURL;***

O contexto de top precisa ser referenciado já que os scripts são chamados do contexto do formulário.

**No Back**
Como mencionado pelo [@Bruno\_Gasparetto](/u/bruno_gasparetto) e pelo [@fluigor.com.br](/u/fluigor.com.br) o método de

***fluigAPI.getPageService().getServerURL();***

já é mais que suficiente!

Espero ter agregado a resposta dos colegas. Boa sorte!

---

## Resposta #7

**Julio Vitor Vaz da Rocha** (@JulioRocha) — 18/03/2021, 08:48 | ❤️ 1

Obrigado a todos que ajudaram.

---
