# Como dispara um formulário para mais de um usuário responder em simultâneo

> **Fonte:** [https://fluiggers.com.br/t/como-dispara-um-formulario-para-mais-de-um-usuario-responder-em-simultaneo/2566](https://fluiggers.com.br/t/como-dispara-um-formulario-para-mais-de-um-usuario-responder-em-simultaneo/2566)
> **Categoria:** BPM
> **Tags:** `form`, `processo`, `bpm`
> **Criado em:** 06/02/2024, 19:01
> **Visualizações:** 196 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**Daniel Costa** (@DevDan99) — 06/02/2024, 19:01

Olá comunidade,
Sou iniciante em desenvolver no fluig, e gostaria de uma ajuda, pois estou sem Idea de como fazer o que vou apresentar.

Recebi uma tarefa na empresa, onde tenho que montar um processo. Nesse processo quando o solicitante inicia-lo, é preciso que 3 setores distintos preencha a parte deles no formulário em simultâneo, porem a parte que o setor A vai preencher não pode ser vista pelo setor B e nem C, e assim sucessivamente. O formulário só dará continuidade quando os 3 setores responder e quando for respondido o processo se repete para mais 2 setores e assim vai te o final do processo.

Obs: O setor A não Precisa do setor B para responder, mas o aprovador por exemplo, precisa das duas informações preenchidas pelo setor A e B.

2- O formulário é único ate o fim do processo, porem deve ser preenchido em momentos diferente por mais de um setor em determinado caso.

Eu fiz os cursos da Fluig Academy e o que tenho de noção é isso, venho do Desenvolvimento Web e eu percebi que o fluig tem classes e funções próprias, o que esta me fazendo ficar um pouco perdido no desenvolvimento.

Quem puder me ajudar por favor, ficarei muito grato.

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 07/02/2024, 00:22

Acho que pra essa situação você usaria um Paralelo e pelo número da Atividade você pode configurar no evento de formulário displayFields pra exibir os campos.

![image](https://fluiggers.com.br/uploads/default/original/2X/6/642b205d2af8ee6ccfaf24f41d306a3e6b5c4026.png)

---

## Resposta #2

**Daniel Costa** (@DevDan99) — 07/02/2024, 08:11

Multo obrigado pelo retorno.
Irei testar a solução apresentada.

---

## Resposta #3

**Mendes** (@andersonma) — 07/02/2024, 10:26

Vale ressaltar o que você disse:

> é preciso que 3 setores distintos preencha a parte deles no formulário em simultâneo, porem a parte que o setor A vai preencher não pode ser vista pelo setor B e nem C, e assim sucessivamente.

Neste caso, deixo a sugestão utilizar Abas separadamente para cada setor A,B,C e adicionar uma validação para não exibir as informações das respectivas abas se o colaborador for do outro setor.

At.Te,

---

## Resposta #4

**Daniel Costa** (@DevDan99) — 26/02/2024, 09:19

Bom dia! Obrigado pelo retorno.
Quando você fala em abas, você diz fazer um formulário diferente para cada setor?
Se sim, eu consigo unir as respostas destes formulários com o Join?
E para validação destas abas qual evento poderia usar?

---

## Resposta #5

**Mendes** (@andersonma) — 26/02/2024, 09:52

1 - Da uma olhada neste link, com exemplo de nav-tabs
[https://style.fluig.com/components.html#nav](https://style.fluig.com/components.html#nav)

2 - O formulário é único como qualquer outro, a forma de captura é via javascript

3 - A validação você vai fazer normalmente em javascript para validação de campo.

> Obs.: Essa forma que te informei é para casos em que é necessário dentro de um mesmo processo cada setor possa preencher somente as informações que ela são responsáveis de forma mais organizada e individual, agora se o que você quer é ter vários processos separados por setor e unir tudo em um processo macro, neste caso vai ter que trabalhar com Subprocessos

At.te,

---
