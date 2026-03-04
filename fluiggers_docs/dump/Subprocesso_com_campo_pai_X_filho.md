# Subprocesso com campo pai X filho

> **Fonte:** [https://fluiggers.com.br/t/subprocesso-com-campo-pai-x-filho/1135](https://fluiggers.com.br/t/subprocesso-com-campo-pai-x-filho/1135)
> **Categoria:** ECM / GED
> **Criado em:** 13/06/2022, 14:53
> **Visualizações:** 544 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**Daniel Sales** (@Daniel_Sales) — 13/06/2022, 14:53

Boa tarde,
É possível usar o subprocesso do BPMN 2.0 e passar para ele campos pai filho ou seja quando for iniciado o subprocesso ele receber os campos pai X filho de uma tabela?

---

## Resposta #1

**Afonso Uliana Neto** (@Afonso) — 20/06/2022, 22:06

Boa Noite Daniel tudo bem? Não entendi muito bem, Voce quer passar o pai-filho inteiro para o subprocesso (10 linhas quer passar as 10 linhas)? ou para cada linha do pai e filho voce quer iniciar um sub-processo? se for a primeira alternativa eu acredito que seja mais facil no processo filho, voce consultar o processo pai e criar o pai e filho do processo filho. Se voce a 2 opção voce nao vai conseguir fazer utilizando a atividade de subprocesso do Fluig, ai neste caso voce teria que ter 1 atividade de serviço no processo pai que le o pai-filho e criar um outro processo para cada registro utilizado o hAPI.StarProcess

---

## Resposta #2

**Daniel Sales** (@Daniel_Sales) — 21/06/2022, 08:02

Exato a primeira opção vai resolver.
Achei que teria uma forma melhor de fazer isso.

---

## Resposta #3

**Jonathan Albuquerque** (@Jonathan.Albuquerque) — 21/06/2022, 10:03

Você também pode fazer um dataset para o pai filho e carregar em um [fluig datatable](https://style.fluig.com/javascript.html#fluig-datatable) ou em uma [bootstrap datatable](https://datatables.net/examples/styling/bootstrap4)

---
