# Dados não salvos no banco do fluig

> **Fonte:** [https://fluiggers.com.br/t/dados-nao-salvos-no-banco-do-fluig/674](https://fluiggers.com.br/t/dados-nao-salvos-no-banco-do-fluig/674)
> **Categoria:** BPM
> **Criado em:** 24/09/2021, 14:38
> **Visualizações:** 460 | **Likes:** 2 | **Respostas:** 1

---

## Pergunta original

**Daniel ** (@daniel_fmartins) — 24/09/2021, 14:38

Galera, tenho uma rotina de aprovação de movimentos, em que quando é gerado uma ordem de compra no RM é automaticamente startado um processo de aprovação no fluig.

Porém o que acontece é que quando esse processo é gerado pelo RM, o processo é iniciado e destinado para a tarefa “Aprovação Movimento”. Mas quando eu consulto o banco do fluig, ele não salvou a maioria dos registros do formulário no banco. Esses dados são obtidos através de uma consulta no RM. Eu preciso desse dados nessa fase para montar um filtro personalizado. Quando é repassada a atividade de “Aprovação Movimento” para “Efeuta Pagamento”, os dados são salvos normalmente.

![image](https://fluiggers.com.br/uploads/default/original/1X/d3c93688ca877ea5e7d727759f491c2410ea27cb.png)

Qual a melhor maneira para se forçar que esse dados sejam salvos no banco já quando esteja atividade “Aprovação Movimento”?
Agradeço.

---

## Resposta #1

**Daniel ** (@daniel_fmartins) — 24/09/2021, 14:51

Pelo que entendi, na primeira vez que abro o processo(na atividade “Efetua Pagamento”),
o fomulário vai ser carregado através de uma consulta, só então que os dados serão preenchidos. Dessa forma, somente na passagem para a segunda atividade é que os dados são salvos no banco.

---

## Resposta #2

**Bruno Gasparetto** (@Bruno_Gasparetto) — 24/09/2021, 15:18 | ❤️ 1

Acredito que você pode usar o evento de processo `afterProcessCreate` para fazer a consulta ao RM e preencher as informações do formulário, assim ele já aparecerá preenchido na atividade.

Eu faço algo semelhante quando inicio um processo como um sub-processo e a simples configuração de campos do processo-pai com sub-processo não é suficiente.

---

## Resposta #3

**Daniel ** (@daniel_fmartins) — 24/09/2021, 16:25 | ❤️ 1

A parte ruim é escrever todo o js de forma que ele possa ser interpretado corretamente. :confused:

---
