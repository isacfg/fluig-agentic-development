# Mudança de formulário (documento) de um processo

> **Fonte:** [https://fluiggers.com.br/t/mudanca-de-formulario-documento-de-um-processo/2656](https://fluiggers.com.br/t/mudanca-de-formulario-documento-de-um-processo/2656)
> **Categoria:** Formulários
> **Tags:** `form`, `processo`, `bpm`
> **Criado em:** 18/03/2024, 18:46
> **Visualizações:** 313 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Cassius** (@Cassius) — 18/03/2024, 18:46

Boa tarde a todas e todos. Tudo bem?

Eu criei um processo e a ele estava associado um formulário que também era utilizado por outro processo. No entanto, por necessidade de demanda, fui obrigado a criar um novo formulário para este processo.
Até aí beleza, associei esse novo formulário ao processo e as novas solicitações passaram a reconhecer esse novo formulário.
Entretanto, eu precisava que os processos anteriores, que estavam utilizando o outro formulário, passassem também a utilizar esse novo formulário.
Converti as solicitações para a nova versão do processo mas não adiantou.
Já vi aqui no Fluiggers que tem jeito de atualização via banco de dados de atualizar a versão do formulário:
[https://fluiggers.com.br/t/alterar-versao-formulario-de-um-processo-ativo/275](https://fluiggers.com.br/t/alterar-versao-formulario-de-um-processo-ativo/275)
Porém gostaria de saber se alguém já passou por isso e se tem alguma maneira, mesmo que seja via banco de dados, de fazer com que os processos anteriores passem a reconhecer esse novo formulário.
Muito obrigado.

---

## Resposta #1

**Pablo Valle** (@pablooav) — 22/03/2024, 17:48

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/cassius/48/67_2.png) Cassius:
>
> > a todas e todos. Tudo bem?
> >
> > Eu criei um processo e a ele estava associado um formulário que também era utilizado por outro processo. No entanto, por necessidade de demanda, fui obrigado a criar um novo formulário para este processo.
> > Até aí beleza, associei esse novo formulário ao processo e as novas solicitações passaram a reconhecer esse novo formulário.
> > Entretanto, eu precisava que os processos anteriores, que estavam utilizando o outro formulário, passassem também a utilizar esse novo formulário.
> > Converti as solicitações para a n

Vish ai seu caso é bem mais crítico, nunca precisei realizar, mas imagino que isso pode dar muitos problemas pois no seu caso estamos trocando de formulário, por trás os registros estão em uma ML e terão que ser “repassados” pra outra ML, e o Fluig em si tem inúmeras amarrações entre as tabelas que podem te causar dor de cabeça em algum momento caso esqueça de alterar o vínculo então não sei se seria uma boa opção modificar isso via banco.

---

## Resposta #2

**Cassius** (@Cassius) — 22/03/2024, 21:29

Boa noite a todas e todos…

Pois é [@pablooav](/u/pablooav), realmente você tem razão. Não tinha certeza, mas imaginei que não seria algo simples. Coloquei aqui na comunidade na esperança que alguém tivesse, literalmente, uma solução mágica pra isso.
O que fiz, no meu caso, pelo formulário estar num subprocesso, eu cancelei a solicitação neste subprocesso, voltei ao processo principal e reiniciei este subprocesso já com o novo formulário.
Então fica a dica a todos que, ao desenvolver um processo, tenha bem definido um formulário individual associado a este processo.
Obrigado aí pela resposta…

---
