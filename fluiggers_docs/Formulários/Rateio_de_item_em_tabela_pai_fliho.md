# Rateio de item em tabela pai fliho

> **Fonte:** [https://fluiggers.com.br/t/rateio-de-item-em-tabela-pai-fliho/813](https://fluiggers.com.br/t/rateio-de-item-em-tabela-pai-fliho/813)
> **Categoria:** Formulários
> **Tags:** `form`, `paixfilho`
> **Criado em:** 07/12/2021, 13:37
> **Visualizações:** 522 | **Likes:** 6 | **Respostas:** 1

---

## Pergunta original

**Mauricio Freitas** (@mauriciolanner) — 07/12/2021, 13:37

Pessoal, estou com um dilema terrível. Preciso por rateio em um item que fica numa tabela pai filho, detalhe, o rateio precisa ser n para n itens. Isso complica, pois a tabela pai filho, não aceita uma tabela pai filho. Tentei algumas estratégias que não deram certo, como por exemplo rateio e item em pais filho diferente. Alguém já fez e consegue me explicar qual a melhor estratégia para esse problema?

---

## Resposta #1

**Sérgio Machado** (@sergio.machado) — 07/12/2021, 16:10 | ❤️ 1

Rapaz ainda não precisei dessa situação. mas daria pra criar um array de itens e salvar em um campo. Já fiz isso uma vez para criar um histórico de movimentações de atividades. tu só precisa ter alguma informação para amarrar cada item a sua respectiva linha da tabela pai e filho.

Mas acredito que trabalhar com duas tabelas pai e filho seria melhor.

---

## Resposta #2

**Mauricio Freitas** (@mauriciolanner) — 07/12/2021, 16:27 | ❤️ 2

Eu acho que o grande problema é amarrar tudo certinho e sem dificultar a vida do usuário. Eu fiz uma tabela do lado da outra e criei uma função que amarre o item ao rateio, aí é só escolher o centro de custo e a porcentagem, não é o cenário ideal, mas foi o melhor que consegui fazer.

![image](https://fluiggers.com.br/uploads/default/optimized/1X/6ea8e84865a78e6568b7c6278a23cec40285a6e3_2_690x285.png)

---

## Resposta #3

**Daniel Cabral Santos** (@daniel.cabral) — 07/12/2021, 18:20 | ❤️ 2

Pai-filho-neto sempre foi encrenquinha no Fluig. Você poderia tratar de dois jeitos, pelo menos:

-   Cria um campo oculto armazenando os dados do neto (em JSON por ex.). Nesse caso há um risco de estourar o limite do campo no BD, dependendo dos dados, ou…

-   Dois pai-filho relacionados com uma chave.


Pessoalmente acho a primeira opção mais prática. Um modal lendo/gravando os dados no campo oculto resolve bem, e daria pra criar algo reutilizável.

---

## Resposta #4

**Mauricio Freitas** (@mauriciolanner) — 10/12/2021, 08:46 | ❤️ 1

Obrigado pela dica, eu resolvi usando essa estratégia que apresentei, o cliente aceitou.

---
