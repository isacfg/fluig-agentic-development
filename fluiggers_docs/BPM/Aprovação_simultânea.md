# Aprovação simultânea

> **Fonte:** [https://fluiggers.com.br/t/aprovacao-simultanea/2634](https://fluiggers.com.br/t/aprovacao-simultanea/2634)
> **Categoria:** BPM
> **Tags:** `form`, `bpm`
> **Criado em:** 12/03/2024, 13:56
> **Visualizações:** 309 | **Likes:** 0 | **Respostas:** 5

---

## Pergunta original

**Jose Henrique ** (@Jose) — 12/03/2024, 13:56

Boa tarde!

Gostaria de saber se tem como fazer uma aprovação simultânea em uma etapa do processo, por exemplo, se um dos aprovadores não aprovar o processo volta e só avança se tiver a aprovação dos dois aprovadores.

---

## Resposta #1

**Jorge Brigliadori** (@jorgebrigliadori) — 13/03/2024, 08:47

Olá Jose!

Voce pode usar o evento de processo ***calculateAgreement*** .

1 - No Eclipse, crie um novo evento de processo clicando em *SCRIPTS >> NOVO >> SCRIPT FLUIG*

![image](https://fluiggers.com.br/uploads/default/optimized/2X/2/2b9836c07baf3bf71ece3e18963814ee3563a246_2_689x231.jpeg)

2 - Selecione a opção *SCRIPT EVENTO WORKFLOW*
![image](https://fluiggers.com.br/uploads/default/original/2X/e/e2b427b244161bce932db1c5c2f2cc72dee7099c.png)

3 - Selecione a opção ***calculateAgreement*** , e relecione ao processo desejado.

![image](https://fluiggers.com.br/uploads/default/optimized/2X/5/5cdeb9d168701a47af326357744237f428e1f5ae_2_690x209.jpeg)

O trecho abaixo é um exemplo de como implementar o a regra. Lembrando que é necessario parametrizar na atividade, as opções ***Atividade Conjunta*** e ***%Consenso***

```auto
function calculateAgreement(currentState, agreementData) {
    log.info("Consenso Atual: " + agreementData.get("currentPercentage"));
    log.info("Atividade Destino Atual: " +  agreementData.get("currentDestState"));
    log.info("Usuario Destino Atual: " + agreementData.get("currentDestUsers"));

    //Altera o consenso
    agreementData.put("currentPercentage", 100);
    agreementData.put("currentDestState", 2);
    agreementData.put("currentDestUsers", "marcos");
}
```

---

## Resposta #2

**Jose Henrique ** (@Jose) — 13/03/2024, 11:24

Jorge, bom dia!

como no meu processo preciso da aprovação de mais de um usuário/aprovador na parte do `agreementData.put("currentDestUsers", "marcos");` preciso colocar esse código mais de uma vez para cada aprovador?

esse evento seria nessa etapa de aprovação que vou deixar abaixo

![image](https://fluiggers.com.br/uploads/default/optimized/2X/d/d4eedc9d108473a4e1d8e1c6a17f021635bd8daf_2_446x500.png)

to achando que to errando no codigo da função

```auto
function calculateAgreement(currentState, agreementData) {
	//Implementation here

	log.info("Consenso Atual: " + agreementData.get("currentPercentage"));
    log.info("Atividade Destino Atual: " +  agreementData.get("currentDestState"));
    log.info("Usuario Destino Atual: " + agreementData.get("currentDestUsers"));

    //Altera o consenso
    agreementData.put("currentPercentage", 100);
    agreementData.put("currentDestState", 22);
    agreementData.put("currentDestUsers", "1275");

}
```

---

## Resposta #3

**Eduardo Vantini Neto** (@eduardo.vantini) — 14/03/2024, 11:11

Olá, como você precisa que a tarefa seja concluída quando todos os responsáveis tome a decisão não é necessário usar o evento calculateAgreement. O Fluig passa por esse evento todas vez que uma tarefa em consenso é enviada, senda assim se você colocar o agreementData.put(“currentPercentage”, 100); você está atribuindo 100% ao consenso, então sempre vai passar no primeiro Usuário.

Tira o evento calculateAgreement e testa para ver se te atende!!

Abs

---

## Resposta #4

**Jose Henrique ** (@Jose) — 14/03/2024, 11:48

Olá, Eduardo fiz como informou é deu certo, porém aconteceu uma coisa, no meu processo temos dois aprovadores e percebi que a decisão do segundo aprovador está sendo a decisão final, no caso se o primeiro aprovador não aprovar mas o segundo sim o processo está dando continuidade, isso não deveria acontecer, saberia me informar o que poderia ser

---

## Resposta #5 ✅ RESPOSTA ACEITA

**Eduardo Vantini Neto** (@eduardo.vantini) — 14/03/2024, 13:43

José, provavelmente é por conta do mecanismo de atribuição. Como ele está configurado para o Grupo, qualquer membro do grupo que enviar a tarefa ela vai atingir o 100% requerido. Faz o seguinte, monta um mecanismo de atribuição customizado atribuindo a tarefa a todos os membros do grupo, assim todos serão responsáveis pela tarefa, fazendo assim mais sentido a parte do consenso

Vou mandar um exemplo do mecanismo:

```auto
function resolve(process,colleague){
	var userList = new java.util.ArrayList();
	var group = "CODIGO_GRUPO";

	var c1 = DatasetFactory.createConstraint('colleagueGroupPK.companyId', '1', '1', ConstraintType.MUST)
	var c2 = DatasetFactory.createConstraint('colleagueGroupPK.groupId', group, group, ConstraintType.MUST)

	var dsGroup = DatasetFactory.getDataset('colleagueGroup', null, new Array(c1, c2), null);

	if (dsGroup.rowsCount != 0) {
		for (var i = 0; i < dsGroup.rowsCount; i++) {
			userList.add(dsGroup.getValue(i, "colleagueGroupPK.colleagueId"));
		}
	} else {
		throw "Não foram encontradoes usuários no grupo.";
	}

	return userList;
}
```

Testa aí… Abs

---

## Resposta #6

**Jose Henrique ** (@Jose) — 14/03/2024, 15:50

Funcionou, agora não atinge o 100% requerido porém agora ele fica parado na etapa, não vai pra frente nem pra trás

---
