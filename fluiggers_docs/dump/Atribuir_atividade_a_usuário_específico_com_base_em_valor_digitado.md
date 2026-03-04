# Atribuir atividade a usuário específico com base em valor digitado

> **Fonte:** [https://fluiggers.com.br/t/atribuir-atividade-a-usuario-especifico-com-base-em-valor-digitado/1986](https://fluiggers.com.br/t/atribuir-atividade-a-usuario-especifico-com-base-em-valor-digitado/1986)
> **Categoria:** BPM
> **Tags:** `form`, `processo`, `bpm`
> **Criado em:** 27/06/2023, 17:09
> **Visualizações:** 432 | **Likes:** 5 | **Respostas:** 3

---

## Pergunta original

**kaue menezes salgado** (@kaue) — 27/06/2023, 17:09

Boa tarde! alguém poderia me ajudar nessa duvida. Tenho que através de um gateway enviar para um usuário se o valor no campo for menor que 5000 e se for maior enviar para outro usuário. Já tentei de varias maneiras e nenhuma da certo.

![image](https://fluiggers.com.br/uploads/default/original/1X/d93ec07b93b60bd6141cd3a8f8a202c1e1f96723.png)

![image](https://fluiggers.com.br/uploads/default/original/1X/a253380db9fee6312faa40698ce89e7e7852a6cd.png)

![image](https://fluiggers.com.br/uploads/default/original/1X/d2a3b628fa3634b2f069e4420637d9735537bfd6.png)

Estou quebrando a cabeça já faz um tempo e até agora não achei como resolver, prfv se alguém puder me dar uma luz só pra eu entender como faço ou se tem outra maneira eu agradeço

---

## Resposta #1

**Eduardo Vantini Neto** (@eduardo.vantini) — 27/06/2023, 18:38 | ❤️ 2

Olá [@kaue](/u/kaue) tudo bem? Para fazer isso tem que criar um mecanismo de atribuição customizado. Segue um exemplo rápido que acredito que te atenda

Clique com o botão direito no projeto e escolha as opções New>Other. Depois selecione Fluig > Mecanismo Customizado Fluig
![image](https://fluiggers.com.br/uploads/default/original/1X/004d50a2152f93a5dc8934dbba9b888d88badb40.png)

Aperte Next, crie um código e uma descrição e Finish. O arquivo vai ser criado na pasta **mechanisms** no projeto

No código coloca o seguinte:

```auto
function resolve(process,colleague){
	var userList = new java.util.ArrayList();
	var value = hAPI.getCardValue("processoValidado");

	if (value < 5000) {
		userList.add('matricula_usuario_1');
	} else {
		userList.add('matricula_usuario_2');
	}

	return userList;

}
```

Envia o mecanismo para o servidor, depois relaciona ele a atividade.

Para mais detalhes, da uma olhada da documentação [Mecanismo de atribuição personalizado - TOTVS Fluig - TDN](https://tdn.totvs.com/pages/releaseview.action?pageId=142804157)

Testa aí… Abraço.

---

## Resposta #2

**kaue menezes salgado** (@kaue) — 28/06/2023, 10:21

Muito obrigado pela dica, me ajudou demais :smile:

---

## Resposta #3 ✅ RESPOSTA ACEITA

**kaue menezes salgado** (@kaue) — 28/06/2023, 11:05 | ❤️ 1

Outra duvida aqui kkkk

O campo que quero pegar o valor do preenchimento pra ativar esse mecanismo é esse aqui:

```auto
<div class="col-md-1">
					      <label for="valor" >Previsão Orçamentária</label>
	  					  <input type="text" id="valor" class="form-control" name="valor" readonly="readonly">
					  </div>
```

Quero que quando eu preencher esse campo no formulário, esse mecanismo de atribuição veja se o valor foi > 5000 ou <5000.

ai deixei assim:

```javascript
function resolve(process,colleague){
	var userList = new java.util.ArrayList();
	var value = hAPI.getCardValue("valor");

	if (value < 5000) {
		userList.add('matricula_usuario_1'); // matricula demonstrativa
	} else {
		userList.add('matricula_usuario_2');  // matricula demonstrativa
	}

	return userList;

}
```

Porém ainda não está funcionando, tenho que mudar algo no html?

---

## Resposta #4

**Allan Reichert** (@allan.reichert) — 28/06/2023, 11:09 | ❤️ 1

Utilizo de outra forma, bem simples:
parseFloat(hAPI.getCardValue(“valor”))>10000

![2023-06-28 11_09_19-Fluig - platform__resource_20230201_compra_imobilizado(Desenvolvimento)_workflow](https://fluiggers.com.br/uploads/default/original/1X/6ef1c04f9003bfbaf64d40964140a67b207d364d.png)

---

## Resposta #5

**kaue menezes salgado** (@kaue) — 28/06/2023, 11:24

Tentei seu método porém ainda não manda para nenhum dos usuários que seria para encaminhar .

![image](https://fluiggers.com.br/uploads/default/original/1X/ef8704a434121d11e43720b2152ae1e18a009f77.png)

Fiz algo errado? O valor que estou querendo pegar para verificar se é > 5000 seria esse aqui:

```auto
<div class="col-md-1">
					      <label for="valor" >Previsão Orçamentária</label>
	  					  <input type="text" id="valor" class="form-control" name="valor" readonly="readonly">
					  </div>
```

---

## Resposta #6

**Allan Reichert** (@allan.reichert) — 28/06/2023, 14:17

o problema pode ser o valor que está tentando passar,

o parseFloat() converte a string em numero (converte “5000” em 5000),
também pode ser casas decimais, estas devem ser separadas por ponto,
ex:
certo: 5000.00 ou 5000
errado: 5000,00 ou 5.000

---

## Resposta #7

**kaue menezes salgado** (@kaue) — 29/06/2023, 10:33 | ❤️ 1

Obrigado a todos! não sei o motivo mas hoje funcionou os dois métodos e olha que não mudei nada kkkkkk.

Vlw pela ajuda.

---
