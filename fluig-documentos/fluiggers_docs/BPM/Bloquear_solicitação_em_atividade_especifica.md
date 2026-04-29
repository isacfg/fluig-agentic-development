# Bloquear solicitação em atividade especifica

> **Fonte:** [https://fluiggers.com.br/t/bloquear-solicitacao-em-atividade-especifica/2907](https://fluiggers.com.br/t/bloquear-solicitacao-em-atividade-especifica/2907)
> **Categoria:** BPM
> **Tags:** `processo`, `bpm`, `dataset`
> **Criado em:** 30/07/2024, 08:28
> **Visualizações:** 52 | **Likes:** 1 | **Respostas:** 1

---

## Pergunta original

**Daniel Costa** (@DevDan99) — 30/07/2024, 08:28

Olá pessoal do fórum,
Estou com uma demanda e preciso de ajuda. Eu preciso bloquear a abertura de nova solicitação se caso alguma das solicitações abertas da quele processo esteja em uma atividade especifica.
Ex: Tenho o processo, Empréstimo, se o usuário possui uma das solicitações desse processo parado na atividade 03, o mesmo não poderá abrir outra solicitação. (o processo e a atividade devem estar ativas, devo ignorar os processo encerradas e finalizados)

Eu já pesquisei bastante mas todos os exemplos que consegui não deram certo, já tentei algumas coisas em eventos de processos mas sem sucesso, estou usando a versão do Fluig 1.8. Alguém já fez algo parecido com isso e poderia me ajudar?

---

## Resposta #1 ✅ RESPOSTA ACEITA

**venturelli** (@venturelli) — 30/07/2024, 10:56 | ❤️ 1

Você pode usar a API do Fluig pra isso.

[https://api.fluig.com/latest/process-management/swagger-ui/#/Requests/findRequests](https://api.fluig.com/latest/process-management/swagger-ui/#/Requests/findRequests)

/process-management/api/v2/requests?processId=`id do processo`&assigneeName=`usuário`&stateSequence=`código da atividade`&page=1&pageSize=2

Após cadastrar o serviço com autenticação fluig API, você consegue fazer uma atividade de serviço que faça a consulta, grave a informação no campo de formulário e usar um gateway pra encerrar a solicitação automaticamente dependendo da informação no campo. Ou via código, pode usar esse como base: [Source of afterDocumentPublisher.js - Exemplos-Avancados-de-Processos - fluig Stash](https://git.fluig.com/projects/SAMPLES/repos/exemplos-avancados-de-processos/browse/publicacao-de-documento-iniciando-processo/events/afterDocumentPublisher.js)

---

## Resposta #2

**Daniel Costa** (@DevDan99) — 30/07/2024, 16:01

[@venturelli](/u/venturelli), obrigado por responder,
Eu fiz o registro do serviço no Fluig, com a autenticação fluig\_API, porem está dando erro de autenticação, já tentei trocar o nome do processo, o usuário e a atividade, porem da o mesmo erro.
Erro:

![image](https://fluiggers.com.br/uploads/default/original/2X/3/367dfefc58e0741932c3e1fdf2e56dcc51b7c690.png)

Serviço Fluig:
![image](https://fluiggers.com.br/uploads/default/optimized/2X/9/9699a19edc53c4d4d93a5ad85c968f605d7a970e_2_690x321.png)

Poderia me ajudar com esse erro?

---

## Resposta #3

**venturelli** (@venturelli) — 30/07/2024, 18:10

Eu normalmente uso o **base url** informado no rest, isso ajuda no mapeamento dos endpoints pela tela.

![image](https://fluiggers.com.br/uploads/default/optimized/2X/f/f780939cb17bcca269d4a3d1395298f38bf86538_2_690x490.png)

Pelo erro que tá no teu log, parece que o teu servidor Fluig não tem acesso ao ip que tu informou ou porta. Consegue via terminal no servidor ver se essa url é acessível de fato para ele?

---

## Resposta #4

**Daniel Costa** (@DevDan99) — 30/07/2024, 18:36

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/venturelli/48/1286_2.png) venturelli:
>
> > ssigneeName=`usuário`&stateSequence=`código da atividade`&page=1&pageSize=2

[@venturelli](/u/venturelli) Eu tentei desse modo, porem da esse erro no teste:

![image](https://fluiggers.com.br/uploads/default/optimized/2X/a/aa9ffe6aa2728e8f01c4686b603b683d3532ca08_2_600x500.png)

Eu tentei também pela autenticação Rest OAuth 1, nela até deu certo, consegui consultar o v2/processes, porem quando eu tento consultar a requests ele sempre retorna vazio, mesmo eu usando os parâmetros ou não usando.

![image](https://fluiggers.com.br/uploads/default/optimized/2X/5/50e879f3852f8529dc3adabaeb4fa570c5a4d74b_2_661x500.png)

Eu de fato estava usando a porta errada do servidor, corrigir e me apareceu esse primeiro erro, ai tentei autenticar pelo metodo OAuth 1 e como eu disse ate deu certo a autenticação mas o retorno está sendo vazio não importa o parâmetro, e eu tenho solicitações em aberto.
Você saberia o por que? Ou já passou por algo parecido?

Nota:
Como estou no servidor de desenvolvimento aqui da empresa, ele não é https por isso acho que na autenticação fluig API está com erro.

---

## Resposta #5

**Daniel Costa** (@DevDan99) — 02/08/2024, 15:40

O Erro que estava apresentando era erro da atualização do Fluig, após atualizar para versão 1.8.2, Consegui chamar a API
Obrigado [@venturelli](/u/venturelli) pela ajuda!

---
