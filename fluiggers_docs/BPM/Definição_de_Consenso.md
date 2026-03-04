# Definição de Consenso

> **Fonte:** [https://fluiggers.com.br/t/definicao-de-consenso/2955](https://fluiggers.com.br/t/definicao-de-consenso/2955)
> **Categoria:** BPM
> **Tags:** `processo`, `bpm`
> **Criado em:** 04/09/2024, 11:07
> **Visualizações:** 202 | **Likes:** 2 | **Respostas:** 1

---

## Pergunta original

**Uilian Fragallo** (@fragallo) — 04/09/2024, 11:07

Estou passando por uma situação pela qual alguns usuários já reportaram aqui, mas nenhum dos casos parece ter o mesmo resultado que o meu. A situação é a seguinte:

-   Criei um mecanismo customizado que percorre um papel e define a atividade X para cada um dos usuários deste papel. E isso está funcionando perfeitamente;
-   A atividade X é conjunta e precisa que todos os usuários enviem para a atividade Y para ser entendida como aprovada em um consenso de 100%;
-   Se um usuário enviar para a atividade Z, o Fluig já deve entender que houve uma reprovação e direciona o fluxo para a atividade Z automaticamente, não sendo necessário que os demais usuários aprovem a solicitação.

Encontrei informações sobre a função *calculateAgreement* que me permite fazer isso, ou seja, se o usuário enviou para atividade Z, devo definir o consenso para 100 e direcionar para esta atividade. O problema é que as informações recuperadas não condizem com minhas ações. O método *agreementData.get*, está retornando o seguinte conteúdo:

`agreementData: {currentPercentage=0, currentDestUsers=, currentDestState=0}`

Ou seja, não está me mostrando corretamente qual foi a atividade selecionada para o destino e por isso, não consigo fazer a lógica para redefinir o consenso e redirecionar a movimentação para a atividade Z.

Alguém saberia dizer o que estou fazendo de errado?

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Sérgio Machado** (@sergio.machado) — 04/09/2024, 12:20 | ❤️ 2

Fala aí rapaz, tudo bem?

Eu não sei como esta a sua implementação, mas tenho exatamente esse cenário em alguns projetos e funciona perfeitamente.

Segue abaixo o código do evento de processo **calculateAgreement** que utilizo. A atividade de id 40 é minha atividade de reprovação, você deve substituir pela sua atividade que indica a reprovação.

```auto
function calculateAgreement(currentState, agreementData) {

	var prox_ativ = getValue("WKNextState"); //Número da próxima atividade

	// Atividade de cancelamento
    if(prox_ativ == 40){
		agreementData.put("currentPercentage", 100); // Porcentagem obtida
		agreementData.put("currentDestState", prox_ativ); // Atividade destino (Reprovado)
	}

}
```

Além disso, na sua atividade de aprovação, deve esta marcado essas opções que circulei.

![image](https://fluiggers.com.br/uploads/default/original/2X/8/8521583f3c9baabd440471492795f4e868293ebe.png)

---

## Resposta #2

**Uilian Fragallo** (@fragallo) — 04/09/2024, 13:30

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/sergio.machado/48/659_2.png) sergio.machado:
>
> > `currentDestState`

Muito obrigado, Sergio! Deu certo com a sua dica para pegar a próxima atividade. Mas ainda assim, gostaria de entender o que fiz de errado, já que peguei o código da documentação do Fluig.

Eu desenvolvi um processo simples em ambiente local, apenas para testar. Agora que deu certo sei que posso aplicar no fluxo do cliente.

Antes de atualizar, minha implementação estava desta forma:

```auto
function calculateAgreement(currentState, agreementData) {
	var atividadeDestino    = agreementData.get("currentDestState");
	var atividadeReprovacao = 4;
	log.info("currentState: " + currentState);
	log.info("atividadeDestino: " + atividadeDestino);
	log.info("atividadeReprovacao: " + atividadeReprovacao);

	if (atividadeDestino === atividadeReprovacao) {
		log.info("Consenso Atual: " + agreementData.get("currentPercentage"));
		log.info("Atividade Destino Atual: " + agreementData.get("currentDestState"));
		log.info("Usuario Destino Atual: " + agreementData.get("currentDestUsers"));

		agreementData.put("currentPercentage", 100);
	}
}
```

Neste meu código, a variável *atividadeDestino* estava sempre com 0.
Com isso, ele nem entrava no IF, pois a atividade de destino era sempre 0, independente da seleção do usuário na atividade conjunta.

A imagem a seguir, ilustra o fluxo e suas etapas.

1.  Atividade marcada como conduta e com 100% de consenso configurado;
2.  Fluxo aprovado. Ou seja, segue para o fim/próxima atividade;
3.  Retorna para o início, para preencher mais detalhes ou coisas do tipo.

![SCR-20240904-lykc](https://fluiggers.com.br/uploads/default/original/2X/8/8551af79661e872117d14a65ef1697e0d121f66d.png)

Eu realmente não entendi o que houve de errado na implementação, pois as variáveis de atividade de destino e usuário de destino estavam sempre 0.

---
