# Fluxograma para envio de Email pelo REST

> **Fonte:** [https://fluiggers.com.br/t/fluxograma-para-envio-de-email-pelo-rest/2235](https://fluiggers.com.br/t/fluxograma-para-envio-de-email-pelo-rest/2235)
> **Categoria:** Sem categoria
> **Criado em:** 28/09/2023, 11:52
> **Visualizações:** 312 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**Felipe Pasianot Rodrigues** (@Felipe_Pasianot_Rodr) — 28/09/2023, 11:52

Bom dia,

Quando vou criar a atividade (executor automático) ele fica com esse erro:

![image](https://fluiggers.com.br/uploads/default/original/2X/4/488f04cdb8192665be66fcd94b75d8de525d1b54.png)

Propiedades:

![image](https://fluiggers.com.br/uploads/default/original/2X/f/f853d0c14e9ef96b0737a94cc4cf638b5a4a9640.png)

Você poderiam me ajudar em como ajustar?

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 28/09/2023, 16:18

Toda atividade de Serviço precisa ter uma captura de erro.

![image](https://fluiggers.com.br/uploads/default/optimized/2X/7/792ac6d41ce893f33dccf0a3c834526013c5505d_2_690x89.png)

Basta arrastar o elemento “Captura de Erro” para dentro da atividade de serviço e definir o fluxo que o processo seguirá caso dê erro nesse serviço.

Sendo que pro processo considerar que deu erro ele precisa ter atingindo o limite de tentativas definido na atividade serviço.

Assim a atividade de serviço só tem 1 fluxo de saída pro caso de ter tido sucesso e o fluxo de erro para o caso de falha.

---

## Resposta #2

**Felipe Pasianot Rodrigues** (@Felipe_Pasianot_Rodr) — 29/09/2023, 08:54

Obrigado Bruno pela ajuda.

---
