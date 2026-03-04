# Tabela pai-filho-neto

> **Fonte:** [https://fluiggers.com.br/t/tabela-pai-filho-neto/2241](https://fluiggers.com.br/t/tabela-pai-filho-neto/2241)
> **Categoria:** Formulários
> **Tags:** `paixfilho`, `formulario`
> **Criado em:** 01/10/2023, 08:58
> **Visualizações:** 350 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**João Felipe Soares Barreto** (@jfsbarreto) — 01/10/2023, 08:58

Já tiveram que fazer um formulário que tenha tabela pai-filho e neto?

Aqui preciso fazer um que eu seleciono um contrato, aí esse contrato pode ter mais de um produto e pra cada produto um rateio de vários centro de custos.

Alguma ideia de como eu criar essa tabela de rateio de centro de custos pra cada produto, o produto já é uma tabela pai-filho?

---

## Resposta #1

**Daniel Cabral Santos** (@daniel.cabral) — 02/10/2023, 08:27

E aí!

Aqui resolvi assim: No filho, criei um campo string que na verdade continha os dados do neto em formato JSON. É chatão porque você precisa criar toda a administração desses dados, mas é um trabalho de uma fez. Cria as funções modulares e reusa.

Agora, você também pode criar uma segunda tabela pai-filho oculta e conectar as duas por chaves, montando na tela o visual final como precisal.

---

## Resposta #2

**João Felipe Soares Barreto** (@jfsbarreto) — 02/10/2023, 09:17

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/daniel.cabral/48/5_2.png) daniel.cabral:
>
> > Agora, você também pode criar uma segunda tabela pai-filho oculta e conectar as duas por chaves, montando na tela o visual final como precisal.

Eu pensei exatamente nesse lance do JSON, mas no Modal que chamei pra alimentar o json não consegui fazer 1 tabela pai-filho com zoom.

Agora esse de segunda tabela pai-filho não entendi bem como eu faria pra funcionar, porque qual é a idéia na tela:

1.  a Pessoa seleciona o Contrato
2.  Eu carrego 1 tabela pai-filho com os produtos do contrato
3.  A partir desse produto, eu preciso carregar 1 tabela pai filho pra preencher os centro de custos e o percentual de Rateio.

Obs: posso ter N produtos e para cada produto N Centro de custos.

---

## Resposta #3

**Allan Reichert** (@allan.reichert) — 03/10/2023, 09:40

Olá, eu penso sempre em simplificar para facilitar a manutenção futura pois, dependendo do processo, fico meses sem alterar

Poderia fazer duas tabelas pai e filho separadas, uma com os contratos e uma com os produtos de todos os contratos(esta oculta), conforme seleciona a linha da tabela do contrato exibe as linhas da tabela de produtos do contrato selecionado.

---

## Resposta #4

**Pablo Valle** (@pablooav) — 05/10/2023, 14:13

Eu já fiz utilizando o segundo método que o daniel disse.

Seguinte, ficaria da seguinte forma:

Vc criaria o pai-filho para os contratos e um pai filho oculto que será dos itens.

No PF de contratos, vc colocaria um campo de ID que será utilizado para saber de dentro da tabela de produtos quais produtos são de cada contrato.

No seu PF de contrato vc pode fazer um botão ou algo do tipo que abre um modal e ai esse modal ele vai fazer uma busca lá dentro da tabela oculta de produtos e irá pegar todos os produtos respectivos a esse contrato. Dentro desse modal vc faz um botão pra adicionar nova linha, um pra excluir, faz um CRUD ali.

Um exemplo de como ficaria no final das contas:

Tabela Pai filho de de Contratos

```auto
ID |  CONTRATO   | COD CONTRATO |
1  | Contrato 1  |      999     |
2  | Contrato 2  |      888     |
```

Tabela Pai filho de de Itens (Oculta)

```auto
ID  |IDCONTRATO | PRODUTO   |
1   |     1     | Produto 1 |
2   |     1     | Produto 2 |
3   |     1     | Produto 3 |
4   |     2     | Produto 1 |
5   |     2     | Produto 2 |
```

Nesse exemplo ai que citei, seu primeiro contrato possui 3 itens e o segundo contrato possui 2 itens. Dai toda lógica de pegar quais itens são do 1 ou do segundo contrato vc consegue atráves da coluna IDCONTRATO

---
