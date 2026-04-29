# Definir tempo via form para temporizador

> **Fonte:** [https://fluiggers.com.br/t/definir-tempo-via-form-para-temporizador/741](https://fluiggers.com.br/t/definir-tempo-via-form-para-temporizador/741)
> **Categoria:** BPM
> **Tags:** `bpm`
> **Criado em:** 26/10/2021, 16:33
> **Visualizações:** 802 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Allan Reichert** (@allan.reichert) — 26/10/2021, 16:33

boa tarde,

Alguém sabe se tem como utilizar um tempo dinâmico para evento “Temporizador” do Fluig?

Eu queria que a etapa ficasse em espera por uma quantidade de dias especificado pelo usuário no Form antes de ir para a próxima etapa.

Obrigado!

![2021-10-26 16_26_41-Fluig - platform__resource_20211019_solic_usuario_workflow_diagrams_Solicitação%](https://fluiggers.com.br/uploads/default/original/1X/95c6ac4e7c26440333ebf2faf0ce8d94bc9f6051.png)

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Wasley Santos** (@Wasley_Santos) — 04/11/2021, 14:17 | ❤️ 1

Oi [@allan.reichert](/u/allan.reichert)

Nesse caso utilize um evento intermediário. Nele você implementa sua lógica de que ele só deverá retornar true quando atingir a data desejada.
Esse evento intermediário fica retornando false enquanto não atender a data desejada. Tenho esse exemplo onde minha tarefa intermediária fica aguardando um prazo e caso ele ultrapasse, a tarefa avança para próxima.

```auto
var prazoEdital = hAPI.getCardValue("prazoEdital");
	 var data = prazoEdital.split('/');
	 var dtPrazoEdital = new Date(data[1] + "/" + data[0] + "/" + data[2]);

	 if (agora > dtPrazoEdital){
		 return true;
	 }
```

---

## Resposta #2

**Allan Reichert** (@allan.reichert) — 04/11/2021, 15:01

Boa ideia, vou testar.

Obrigado!

---
