# Movimentar atividade automaticamente sem expirar o prazo

> **Fonte:** [https://fluiggers.com.br/t/movimentar-atividade-automaticamente-sem-expirar-o-prazo/3067](https://fluiggers.com.br/t/movimentar-atividade-automaticamente-sem-expirar-o-prazo/3067)
> **Categoria:** BPM
> **Tags:** `processo`
> **Criado em:** 18/11/2024, 16:52
> **Visualizações:** 175 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Iago** (@iago.oliveira) — 18/11/2024, 16:52

Olá pessoal,

Hoje, tenho alguns usuários que estão assumindo a tarefa e não estão movimentando (enviando). Sei que temos esse recurso de movimentar a tarefa quando estiver vencida: [BPM 002 - Como movimentar automaticamente uma atividade com o Fluxo Automático? - TOTVS Fluig - TDN](https://tdn.totvs.com/pages/releaseview.action?pageId=189308862) porém, a tarefa ainda não está vencida, mas, está “presa” com a pessoa que não movimentou.

Teria como criar alguma funcionalidade em que se ele assumiu mas não movimentou em 1h por exemplo a tarefa seja devolvida para o grupo novamente?

---

## Resposta #1

**Daniel Cabral Santos** (@daniel.cabral) — 19/11/2024, 18:21

Olá [@iago.oliveira](/u/iago.oliveira) !

Realmente não é possível trabalhar com o fluxo automático neste caso? Você pode criar uma saída para uma atividade “dummy” e seguir com o fluxo de volta para sua atividade.

Ou…pensando já em algo mais complexo, manipular a solicitação via dataset agendado, mas me parece que vai ser mais trabalhoso dessa forma.

O que acha?

---

## Resposta #2

**venturelli** (@venturelli) — 21/11/2024, 09:52

Regra de negócio interessante. O Fluig não tem isso por padrão. Poucas rotinas tiram a atividade de quem já está executando ela, porque não tem muito como saber se a pessoa só esqueceu de movimentar ou se a atividade demandou mais tempo do que o previsto.

Acho que o dataset agendado é a solução que eu iria também inicialmente. Mas tem a opção de tentar fazer via hAPI.setDueDate para definir um prazo de conclusão de 1 hora ao assumir e ai movimentar automaticamente. Eu não sei se daria pra movimentar pra mesma atividade.

Usar o setDueDate ao invés de uma data fixa vai evitar que a atividade fique em loop se ninguém assumir ela.

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 21/11/2024, 09:56

Então, nessa situação eu penso em 3 situações:

1.  Orientar os usuários a assumirem a atividade somente se vão dar continuidade a ela;
2.  Ter um gestor que faça esse monitoramento e então transfira a atividade;
3.  Ter um dataset jornalizado que verifique o processo, procurando na atividade em questão e fazendo a transferência automaticamente;

No caso do dataset jornalizado teria que fazer ele olhar o dataset `processTask`, pesquisando pelo `processTaskPK.processInstanceId` (que já pegou de outra forma), pra ver se o `processTaskPK.colleagueId` é diferente do pool do grupo e aí fazer do tempo decorrido usando o `assignDate` e aí transferir de volta ao grupo.

Nessa questão de transferir de volta ao grupo confesso que nunca tentei. Vi que tem na API REST (ao menos na versão antiga) e no SDK. Mas nunca testei usar.

---
