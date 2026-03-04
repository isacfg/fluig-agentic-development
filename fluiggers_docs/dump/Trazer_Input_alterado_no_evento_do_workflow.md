# Trazer Input alterado no evento do workflow

> **Fonte:** [https://fluiggers.com.br/t/trazer-input-alterado-no-evento-do-workflow/184](https://fluiggers.com.br/t/trazer-input-alterado-no-evento-do-workflow/184)
> **Categoria:** BPM
> **Criado em:** 19/03/2021, 16:15
> **Visualizações:** 598 | **Likes:** 7 | **Respostas:** 2

---

## Pergunta original

**Julio Cesar Campos de Andrade** (@JCANDRADE) — 19/03/2021, 16:15

Pessoal boa tarde!

Estou customizando o envio de e-mail ao encerrar uma requisição do workflow.
Essa customização precisaria pegar campos específicos que foram alterados no formulário(input) e esses campos alterados precisariam ir no HTML do e-mail de notificação de encerramento.

É possível pegar no evento do workflow apenas os valores que foram alterados no formulário?

Eu pensei em criar um input hidden apenas para salvar os valores que foram alterados e chama-los no evento, mas gostaria de saber se existe alguma solução mais inteligente.

Obrigado!

---

## Resposta #1

**Alef Vinicius** (@alefvinicius) — 19/03/2021, 17:37 | ❤️ 2

Andrade, boa tarde, já tive demandas desse tipo durante anos e a melhor solução pra mim sempre foi criar um campo hidden correspondente para ser preenchido com o antigo valor em um evento de onchange. Mesmo que houvesse algum outro mecanismo por versão de processo, acredito que o trabalho seria maior do que já buscar a informação diretamente no formulário. Vamos aguardar o relato de mais alguns colegas aqui no fórum, também fiquei curioso, sempre resolvi desta forma, com o campo hidden.

---

## Resposta #2

**Julio Cesar Campos de Andrade** (@JCANDRADE) — 19/03/2021, 19:16 | ❤️ 2

[@alefvinicius](/u/alefvinicius) boa noite!
Comecei desenvolvendo com o campo hidden mesmo e está dando certo.
Mas vamos ver se existe alguma outra solução plausível.
Obrigado!

---

## Resposta #3

**Cassius** (@Cassius) — 22/03/2021, 13:39 | ❤️ 1

Fala [@JCANDRADE](/u/jcandrade) tudo bem contigo?

Eu tentei fazer um teste aqui no evento de processo **“beforeTaskSave”**, mas não tive êxito.
Aconteceu uma coisa que, na minha opinião, é um erro no Fluig, pois fiz um **dataset** buscando a informação já gravada do formulário (já que a meu ver o **dataset** busca o que está persistido e não o que ainda será persistido no banco) para comparar com as informações que estavam no formulário. Porém, pra minha surpresa, o **dataset** trouxe o que eu havia acabado de colocar no formulário.
Se o evento tem o nome **“beforeTaskSave”** eu presumia que as informações do formulário só seriam persistidas após passar por este evento e o resultado do **dataset** traria, naquele momento, a informação anterior, para que eu pudesse comparar as duas e ver as alterações.
Enfim, fiz isso pra tentar evitar o **hidden** já que isso, em uma planilha com os dados do formulário, será apresentado e pode trazer uma certa confusão ao usuário final. Mas percebo que da maneira como está hoje, pelo menos usando o evento **“beforeTaskSave”**, não tem jeito.
É isso aí…

---

## Resposta #4

**Daniel Sales** (@Daniel_Sales) — 22/03/2021, 17:33 | ❤️ 2

Uma solução e no ***displayfields*** vc criar uma variavel json via ***.append()*** e ela vai ter todo os dados dos campo antes da alteração dai no evento do formulário ***beforesenddata*** vc coloca os dados do json num campo hide e depois recupera nos eventos de formulário. Com isto vc evita ficar criando vários campos ocultos. e ainda pode compara-los com os campos modificados e saber quem foi modificado.

Espero ter ajudado.

---
