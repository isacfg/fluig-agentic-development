# Mecanismos de atribuição

> **Fonte:** [https://fluiggers.com.br/t/mecanismos-de-atribuicao/2961](https://fluiggers.com.br/t/mecanismos-de-atribuicao/2961)
> **Categoria:** Formulários
> **Tags:** `mecanismoatribuicao`
> **Criado em:** 05/09/2024, 14:34
> **Visualizações:** 84 | **Likes:** 2 | **Respostas:** 1

---

## Pergunta original

**Artur Alves** (@artur.alves) — 05/09/2024, 14:34

Boa tarde!

Estou com uma certa dificuldade em relação a mecanismo de atribuição.
Se alguém passou por isso, pode me ajudar?

É a seguinte situação, tenho essas etapas em um fluxo:

![image](https://fluiggers.com.br/uploads/default/optimized/2X/4/47e8dc150ce4bb7881d879337eb4cdff66650d1f_2_690x405.png)

O primeiro decisor, ele verifica o TIPO de solicitação, logo, se for transferência, ele cai pro segundo decisor;
O segundo, ele verifica o SUBTIPO da solicitação, nesse caso, temos 4 opções apenas;
O segundo decisor está direcionando corretamente para a etapa de “Autorização de Transf.” porém, não direciona corretamente para “Gerar Pedido Emitir NF”;

Só que, quando direcionar para etapa de “Autorização de Transf.”, no momento que ele for enviar para “Gerar Pedido Emitir NF”, ele tem que ter o método de atribuição como “executor de atividade (início)”; Até ai ele faz.

Mas quando tentamos com o decisor para ir para etapa de “Gerar Pedido Emitir NF” ele informa a seguinte mensagem:
Mas preciso que quando ele vá direto para etapa de “Gerar Pedido Emitir NF” o mecanismo de atribuíção não seja mais por executor, e sim para um grupo.

![image](https://fluiggers.com.br/uploads/default/optimized/2X/d/d6a1a21d9dc148623836f67ac3035aae1dffe192_2_690x154.png)

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 05/09/2024, 15:05 | ❤️ 1

Está usando mecanismo tanto nas atividades quanto nos gateways?

Dá uma olhada nesse tópico que tá muito parecido com o seu problema.

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/mautresim/48/511_2.png) [Processos - Não existem colaboradores em comum](https://fluiggers.com.br/t/processos-nao-existem-colaboradores-em-comum/2942/1) [BPM](https://fluiggers.com.br/c/bpm/5)
>
> > Um dos documentos de BPM que requer aprovação está dando uma mensagem de erro: Não existem colaboradores em comum para os mecanismos de atribuição da tarefa e da condição. Tem ideia de como posso resolver isto? Está me dando uma dor de cabeça danada. O erro acontece logo na primeira aprovação. \[image\]

---

## Resposta #2

**Artur Alves** (@artur.alves) — 05/09/2024, 15:13 | ❤️ 1

Boa tarde, Bruno!

Consegui resolver assim:

![image](https://fluiggers.com.br/uploads/default/optimized/2X/9/9459da326944fc24d8c80fa3969060354b89e3c2_2_690x438.png)

Tive que inserir mais um decisor, porque a etapa de gerar pedido, dependendo do subtipo pode ter mecanismos diferentes, agora deu certo…

Mas vou dar uma olhada no tópico!

---
