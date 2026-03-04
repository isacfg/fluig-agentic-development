# Organização do Fluxo do Diagrama

> **Fonte:** [https://fluiggers.com.br/t/organizacao-do-fluxo-do-diagrama/1312](https://fluiggers.com.br/t/organizacao-do-fluxo-do-diagrama/1312)
> **Categoria:** BPM
> **Tags:** `bpm`
> **Criado em:** 14/09/2022, 11:13
> **Visualizações:** 452 | **Likes:** 2 | **Respostas:** 2

---

## Pergunta original

**Leonardo** (@leonardomarthiniano) — 14/09/2022, 11:13

Estou com um problema na organização do meu fluxo do BPM. No diagrama tenho uma atividade que pode ir para 2 caminhos. Para uma aprovação e outra é cancelamento. Sendo que a seta que vai para a aprovação tem o código 230 (flow230) e a de cancelamento 232 (flow232).

Não queria que a atividade de cancelamento aparecesse primeiro, pois tem alguns gestores que não leem e acabam cancelando o processo.

O elemento de cancelamento possuí código: 232 (endcancel235)
O elemento de aprovação possuí cídigo: 87 (exclusivegateway87)

Acredito eu que aa seta 230 deveria aparecer primeiro. Segue as imagens.

![001](https://fluiggers.com.br/uploads/default/optimized/1X/1f2c4ec6442d7c01af3009e6331ac56a752801f5_2_690x360.png)

![002](https://fluiggers.com.br/uploads/default/optimized/1X/504beb8e2873ac56a3f9bf7f3ef43e50ba26d21f_2_615x500.png)

---

## Resposta #1

**Allan Reichert** (@allan.reichert) — 21/09/2022, 08:55 | ❤️ 2

Olá, pode fazer de duas formas:
1 - Apagar as setas e recriar na ordem correta, pois ele pega pela id do objeto;
2 - Preencher o campo “Ativ. Fluxo” das setas conforme ordem desejada(pega em ordem alfabética).
Eu utilizo por exemplo 1 - Próximo, 2 - Voltar
![image](https://fluiggers.com.br/uploads/default/original/1X/27f795e1616bf4c39dfb3cebd3e7a4e10762ca0a.png)

---

## Resposta #2

**Bruno Gasparetto** (@Bruno_Gasparetto) — 21/09/2022, 09:07

Eu pensava que marcar como Fluxo Padrão o colocaria em primeiro. Não tinha tentado alterar o nome do fluxo

---

## Resposta #3

**Leonardo** (@leonardomarthiniano) — 21/09/2022, 12:01

Perfeito, Allan. Fiz dessa forma e deu certo. Agradeço

---
