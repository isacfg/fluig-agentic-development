# Mais de um aprovador na atividade

> **Fonte:** [https://fluiggers.com.br/t/mais-de-um-aprovador-na-atividade/1336](https://fluiggers.com.br/t/mais-de-um-aprovador-na-atividade/1336)
> **Categoria:** BPM
> **Tags:** `bpm`
> **Criado em:** 22/09/2022, 11:45
> **Visualizações:** 443 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Wanderley Junior** (@gomeswjunior) — 22/09/2022, 11:46

Bom dia pessoal.
Gostaria de utilizar os usuários definidos em uma tabela pai e filho como aprovadores de uma determinada atividade. É possível? Considerando que vou ter um array com mais de um usuário.

---

## Resposta #1

**Eustaquio Ferreira** (@Eustaquio_Ferreira) — 23/09/2022, 12:19

Você pode desenvolver um mecanismo de atribuição customizado e buscar os códigos de usuários nele segue abaixo um exemplo de um mecanismo customizado

```auto
function resolve(process,colleague){
			log.info('Mecanismo de teste de anexo 0002');
			var userList = new java.util.ArrayList();
			var atividade = process.workflowProcessPK.processInstanceId;
			var userRequester = process.requesterId;
			if(atividade == 0 || atividade == 18){
				userList.add(userRequester);
			}
			var solicitante = hAPI.getCardValue("codSolic")
			var aprov_1 = hAPI.getCardValue("codAprov_1");
			var aprov_2 = hAPI.getCardValue("codAprov_2");
			var aprov_3 = hAPI.getCardValue("codAprov_3");
			var aprov_4 = hAPI.getCardValue("codAprov_4");

			userList.add(solicitante);
			userList.add(aprov_1);
			userList.add(aprov_2);
			userList.add(aprov_3);
			userList.add(aprov_4);

			return userList;
		}
```

para mais detalhes segue a documentação [`Mecanismo de atribuição personalizado`](https://tdn.totvs.com/pages/releaseview.action?pageId=142804157)

---
