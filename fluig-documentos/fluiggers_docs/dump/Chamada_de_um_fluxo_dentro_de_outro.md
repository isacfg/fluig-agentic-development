# Chamada de um fluxo dentro de outro

> **Fonte:** [https://fluiggers.com.br/t/chamada-de-um-fluxo-dentro-de-outro/1534](https://fluiggers.com.br/t/chamada-de-um-fluxo-dentro-de-outro/1534)
> **Categoria:** BPM
> **Criado em:** 07/12/2022, 15:37
> **Visualizações:** 260 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Marcão Silveira** (@Marcao_Silveira) — 07/12/2022, 15:37

Boa Tarde
Tenho um fluxo para cotacao de preço para compras, no mesmo quando é informado o item e o mesmo indicado como novo será necessário chamar o fluxo de cadastro automaticamente para preenchimento ou fazer a criação do fluxo com as variaveis já informadas no fluxo de cotação (cod item, nome, unidade de medida).
Como fazer ??

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 08/12/2022, 09:45

Como são os fluxos?

No processo de Cotação você seleciona só 1 item?
No processo de Cadastrado você cadastra só 1 item?

Se for só 1 item em cada processo você pode colocar o processo de cadastro como sub-processo do processo de cotação.

Se na Cotação pode ter vários itens e o de Cadastro também pode ter vários itens então ainda poderia inserir como sub-processo, mas provavelmente teria que criar um evento de processo no processo de Cadastro para inserir todos os itens (porque provavelmente estará usando pai filho pra isso e não sei se dá pra passar os itens de pai filho de um processo para o outro).

Agora, se na cotação são vários itens e o de Cadastro só aceita 1 item por vez o trabalho será grande, porque terá que instanciar as solicitações em uma atividade serviço e pensar em como deixar o processo de cotação travado até que os cadastros sejam realizados.

---
