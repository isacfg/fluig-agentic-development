# Preencher Grupo de Forma dinâmica

> **Fonte:** [https://fluiggers.com.br/t/preencher-grupo-de-forma-dinamica/801](https://fluiggers.com.br/t/preencher-grupo-de-forma-dinamica/801)
> **Categoria:** API`s Fluig
> **Criado em:** 30/11/2021, 18:15
> **Visualizações:** 970 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Vagner Duarte** (@vagner_duarte) — 30/11/2021, 18:15

Pessoal boa tarde, eu estou com um processo que me atende em diversas situações, portanto, gostaria de saber se é possível colocar um grupo responsável por uma atividade, e os usuários do grupo, ser preenchido de forma dinâmica. Alguém ja fez isso, sabe se é possível fazer, se sim, puder me ajudar?

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Daniel Sales** (@Daniel_Sales) — 02/12/2021, 08:06 | ❤️ 1

Bom dia,
Sim é possível
Você vai criar um mecanismo customizado

```auto
function resolve(process,colleague){

	var userList = new java.util.ArrayList();//Array com os usuários a serem listados

	var empresa = parseInt( hAPI.getCardValue("empresa_cod2") );

	switch(empresa){
		case 01:
			userList.add("000090"); //Adiciona o usuario a lista passando sua matricula
		break;

		case 02:
			userList.add("000084");
		break;

		case 07:
			userList.add("000097");
		break;

		default:
			userList.add("Pool:Group:TI");//Adiciona um grupo (para papel use Pool:RoleTI)
		break;
	}
	return userList;

}
```

---

## Resposta #2

**Vagner Duarte** (@vagner_duarte) — 02/12/2021, 11:39

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/daniel_sales/48/22_2.png) Daniel\_Sales:
>
> > `userList.add("Pool:Group:TI");//Adiciona um grupo (para papel use Pool:RoleTI)");/`

Eeeee Daniel, agradecido, não consegui fazer do jeito que eu queria, mas a partir do que vc me mandou, eu consegui. Obrigado!

---
