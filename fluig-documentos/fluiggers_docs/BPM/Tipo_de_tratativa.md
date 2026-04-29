# Tipo de tratativa

> **Fonte:** [https://fluiggers.com.br/t/tipo-de-tratativa/1632](https://fluiggers.com.br/t/tipo-de-tratativa/1632)
> **Categoria:** BPM
> **Tags:** `bpm`
> **Criado em:** 08/02/2023, 11:41
> **Visualizações:** 331 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Danilo Mariano** (@Danilo_Mariano) — 08/02/2023, 11:41

Bom dia.
Tenho uma duvida em qual caminho tomar em um processo que estou montando.
Em uma necessidade já criada tenho que fazer uma consulta SQL em meu banco e o retorno dela o resultado “valor liberado ou não” será se sigo o fluxo para a atividade Diretor ou para a atividade Serviço.
Qual seria a melhor forma forma para este problema.

Um Exclusivo, uma atividade serviço ou script.
E como faria essa tomada de decisão neste local o " if "

Agradeço.

![Screenshot_4](https://fluiggers.com.br/uploads/default/optimized/1X/5b3953d3a0d0dc2c6ca9bef546823362a107e064_2_690x289.png)

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 09/02/2023, 12:44

Acho que você pode fazer um “evento” no seu workflow, declarando uma função nele, e usar isso no Exclusivo dentro do Fluxo, no botão “Adicionar Avançado” pra definir pra onde irá.

![image](https://fluiggers.com.br/uploads/default/optimized/1X/f01cb6d88f4f162e4636da9563fc58d02ec28022_2_690x259.png)

![image](https://fluiggers.com.br/uploads/default/original/1X/39ac76d492376b38334f3b9f4f4638a19ecc3ac0.png)

---

## Resposta #2

**Daniel Sales** (@Daniel_Sales) — 10/02/2023, 08:21

A abordagem do [@Bruno\_Gasparetto](/u/bruno_gasparetto) está correta e é a mais eficiente.

---
