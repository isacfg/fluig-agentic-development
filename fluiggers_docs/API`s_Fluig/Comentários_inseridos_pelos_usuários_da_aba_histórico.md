# Comentários inseridos pelos usuários da aba histórico

> **Fonte:** [https://fluiggers.com.br/t/comentarios-inseridos-pelos-usuarios-da-aba-historico/3262](https://fluiggers.com.br/t/comentarios-inseridos-pelos-usuarios-da-aba-historico/3262)
> **Categoria:** API`s Fluig
> **Tags:** `dataset`
> **Criado em:** 28/04/2025, 07:46
> **Visualizações:** 73 | **Likes:** 1 | **Respostas:** 5

---

## Pergunta original

**Léo Souza** (@Leo_Souza) — 28/04/2025, 07:46

Olá pessoal, alguém sabe se existe alguma forma de recuperar somente os comentários inseridos pelos usuários da aba histórico com os detalhes da solicitação? Estou utilizando o fluig 1.8.1.

Identifiquei o dataset e a coluna onde ficam os comentários, mas não vi nenhum coluna que indique a diferença entre um comentário inserido pelo usuário e as demais observações do processo:
dataset: processTask
coluna: taskObservation

Obrigado.

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 28/04/2025, 09:25

Pelo que reparei esse dataset não traz os comentários. Ele retorna somente o histórico mesmo.

Não vi nenhum dataset com essa informação.

Sugestão: crie um dataset simples usando o serviço `AppDS` e apontando pra tabela `PROCESS_OBSERVATION`.

O campo `NUM_PROCESS` é o instanceID da solicitação e o campo `OBSERVATION` é o comentário (em HTML).

![image](https://fluiggers.com.br/uploads/default/optimized/2X/a/a85e9fc9c9f0b7902ab39936963e02adb975d2a1_2_375x499.png)

---

## Resposta #2

**Léo Souza** (@Leo_Souza) — 29/04/2025, 14:49

> ![](https://fluiggers.com.br/letter_avatar_proxy/v4/letter/l/f9ae1b/48.png) Leo\_Souza:
>
> > processTask

Bruno, o dataset processTask contém todo o histórico das solicitações, inclusive os comentários, na coluna taskObservation. O problema é que não identifiquei nenhuma outra coluna que diferencie os comentários dos outros registros de histórico. Vou tentar implantar a sua sugestão. Obrigado.

---

## Resposta #3

**Léo Souza** (@Leo_Souza) — 29/04/2025, 15:00

Bruno, funcionou. Obrigado.

---

## Resposta #4

**Bruno Gasparetto** (@Bruno_Gasparetto) — 29/04/2025, 15:02

Estranho.

Aqui estou na versão 1.8.1 e no dataset processTask não vieram os comentários. Nele só vi o histórico de movimentação.

Mas que bom que do outro jeito deu certo.

---

## Resposta #5

**Léo Souza** (@Leo_Souza) — 29/04/2025, 17:13 | ❤️ 1

Estão lá. Também uso 0 1.8.1. A única diferença que vi nos comentários do processTask é que eles aparecem com um tag de fechamento e abertura de parágrafo:

comentário

.

![image](https://fluiggers.com.br/uploads/default/original/2X/5/53c73de99dd3013a7a13e77d3cc82b0b1d99057c.png)

---

## Resposta #6

**Bruno Gasparetto** (@Bruno_Gasparetto) — 29/04/2025, 19:03

Pode ser alguma coisa referente à atualização do Fluig.

Aqui comecei no 1.6.5 e fui migrando até o 1.8.1. Talvez isso influencie.

Ao pesquisar no processTask:

![image](https://fluiggers.com.br/uploads/default/original/2X/0/03ab4c8db91963f6c68e557dd3555b58676940fc.png)

No Fluig:

![image](https://fluiggers.com.br/uploads/default/original/2X/d/d98d9a80b5564659b2d5c6dd2e8713be35f0aef0.png)

---

## Resposta #7

**Léo Souza** (@Leo_Souza) — 29/04/2025, 21:53

Sim pode ser. De qualquer forma a procura pelo PROCESS\_OBSERVATION supre a necessidade.

---
