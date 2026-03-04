# Incluir Linha em determinada posição Tabela PaiXfilho

> **Fonte:** [https://fluiggers.com.br/t/incluir-linha-em-determinada-posicao-tabela-paixfilho/1118](https://fluiggers.com.br/t/incluir-linha-em-determinada-posicao-tabela-paixfilho/1118)
> **Categoria:** Formulários
> **Tags:** `form`
> **Criado em:** 06/06/2022, 09:13
> **Visualizações:** 410 | **Likes:** 1 | **Respostas:** 2

---

## Pergunta original

**Allan Reichert** (@allan.reichert) — 06/06/2022, 09:13

Olá,

Hoje utilizo a função wdkAddChild(‘minhatabela’) para adicionar itens a minha tabela do formulário.

Tem alguma forma de adicionar uma linha em uma determinada posição?

Segue o exemplo do formulário que quero adicionar:

![image](https://fluiggers.com.br/uploads/default/optimized/1X/90c7dbb4af96833c3ec962d40f1cf3b77b8f5b01_2_690x373.png)

---

## Resposta #1

**Afonso Uliana Neto** (@Afonso) — 06/06/2022, 22:35

[@allan.reichert](/u/allan.reichert) desconheço uma função que faça isso, mas o que voce pode fazer é trabalhar com 2 tabelas uma escondida onde os dados serão gravados e outra apenas para apresentar os dados de acordo com a sua necessidade.

---

## Resposta #2 ✅ RESPOSTA ACEITA

**Daniel Sales** (@Daniel_Sales) — 07/06/2022, 17:02 | ❤️ 1

Allan uma solução e adicionar uma linha em branco. E pegar o índice da linha onde vc quer adicionar o item e mover tudo para baixo. Depois limpar esses itens desse índice e gravar nele os dados.EX:
Se vc tem uma tabela pai filho com 5 itens e que inserir um item na quarta posição, vc insere um sexto item em branco copia os dados do item 5 para o sexto, do 4 para o quinto e limpa o quarto item, depois adiciona os dados no quarto item.

---

## Resposta #3

**Allan Reichert** (@allan.reichert) — 30/06/2022, 15:36

Implementei essa ideia mesmo de mover os valores para os campos abaixo. Entendo ser mais fácil de fazer a manutenção do formulário, uma pena não ter isso nativo.

Obrigado

---

## Resposta #4

**Daniel Sales** (@Daniel_Sales) — 30/06/2022, 15:37

Bem vindo ao mundo fluig…

---

## Resposta #5

**Bruno Gasparetto** (@Bruno_Gasparetto) — 04/07/2022, 11:16

Acho até normal o Fluig não ter isso nativamente, afinal é algo bem custoso de executar, não pelo append no meio da tabela, mas isso de alterar todos os índices seguintes já é mais chato e teria que estudar também no caso de exclusão, por exemplo. E até onde vi parece que o Fluig usa os índices pra saber o que deve excluir ou não dos filhos. Não sei o quão importante realmente são os índices, mas já vi que a ordem de inserção influencia quando queremos remover um filho usando o WS.

---
