# Tabela pai x filho dentro de outra

> **Fonte:** [https://fluiggers.com.br/t/tabela-pai-x-filho-dentro-de-outra/417](https://fluiggers.com.br/t/tabela-pai-x-filho-dentro-de-outra/417)
> **Categoria:** Formulários
> **Tags:** `form`
> **Criado em:** 03/05/2021, 15:55
> **Visualizações:** 1630 | **Likes:** 2 | **Respostas:** 2

---

## Pergunta original

**Lucas** (@Lucas) — 03/05/2021, 15:55

Boa tarde pessoal,

To com uma situação onde preciso de uma tabela pai x filho dentro de outra. Já vi que isso não funciona no Fluig. Existe alguma alternativa para esses casos?

---

## Resposta #1

**Daniel Cabral Santos** (@daniel.cabral) — 03/05/2021, 16:43

Boa tarde, [@Lucas](/u/lucas) !

Já resolvi fazendo o seguinte…o ‘neto’ é montado num campo oculto em formato JSON, e trabalhei o neto de cada filho num modalzinho.

---

## Resposta #2

**Lucas** (@Lucas) — 03/05/2021, 17:10

No caso como meu formulário faz parte de um processo preciso gravar esses dados no banco de dados. Essa solução serve pra esse caso? Teria algum exemplo para disponibilizar?

---

## Resposta #3

**Daniel Sales** (@Daniel_Sales) — 04/05/2021, 08:15 | ❤️ 2

Bom dia,

Cuidado porque o campo no FLUIG quando se usa MYSQL como SGDB tem limite de tamanho. Uma boa alternativa e criar uma tabela pai x filho oculta que receba os netos + um campo onde se coloque o índice do pai. Dai quando você for criar um neto vc faz um add nessa tabela passando o id do pai.

---

## Resposta #4

**Daniel Cabral Santos** (@daniel.cabral) — 04/05/2021, 09:44

[@Lucas](/u/lucas) , que nem o [@Daniel\_Sales](/u/daniel_sales) disse…meu contexto era para coisas pequenas, o limite de campo no contexto que trabalhamos era de 3000 caracteres - suficiente, mas pode não ser no seu caso. A ideia do Daniel é boa e também já precisei implementar…você cria um pai-filho oculto com uma chave e exibe esse neto de alguma forma (modal, campo só com id…).

De toda forma, a implementação via JSON foi a seguinte: Um botão no filho abria um modal, cujos campos ficavam em um campo oculto com os dados em formato JSON - exemplo:

{
data: “”,
consultor: “”,
checkbox: false
(etc etc etc)
}

E aí você cria toda a lógica pra ler/gravar esse campo nas ações do usuário.

---
