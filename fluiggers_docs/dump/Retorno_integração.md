# Retorno integração

> **Fonte:** [https://fluiggers.com.br/t/retorno-integracao/2836](https://fluiggers.com.br/t/retorno-integracao/2836)
> **Categoria:** API`s Fluig
> **Tags:** `form`, `fluigapi`, `integração`
> **Criado em:** 04/06/2024, 17:07
> **Visualizações:** 196 | **Likes:** 2 | **Respostas:** 4

---

## Pergunta original

**Artur Alves** (@artur.alves) — 04/06/2024, 17:07

Boa tarde!

Estou realizando um processo de integração via FLUIG x PROTHEUS.
O mesmo já está realizando a integração normalmente, porém, gostaria de obter o retorno do PROTHEUS e exibir na página do FLUIG ao finalizar a solicitação;

Abaixo segue dados do código:

```auto
var vo = clientService.invoke(JSON.stringify(data));

		if (vo.getResult() == null || vo.getResult().isEmpty()) {

			log.info("<<< INCLUSÃO DE PEDIDO ESTRATÉGICO. ERRO: Resultado da integração não encontrado. Informe o administrador do sistema");
			throw "Resultado da integração não encontrado. Informe o administrador do sistema";

		} else {

			log.info(vo.getResult());
			var oRetorno = vo.getResult();
			log.info("<<< TESTE VO: " + vo)
			log.info("<<< TESTE RETORNO: " + oRetorno)
			log.info("<<< TESTE: " + oRetorno.CMESSAGE)

			if (oRetorno.errorMessage != null) {
				throw oRetorno.errorMessage;
			}
			if (oRetorno.CTYPEMSG != null) {
				if (oRetorno.CTYPEMSG == "S") {
					log.info("<<< INCLUSÃO DE PEDIDO ESTRATÉGICO - Resultado: " + oRetorno.CMESSAGE);
				} else {
					throw oRetorno.CMESSAGE;
				}
			} else {
				throw "Falha no retorno das informações. Informe ao administrador do sistema. (RESPONSE WS nulo) ";
			}
		}
```

![image](https://fluiggers.com.br/uploads/default/optimized/2X/6/648e7ae54767f8090987a1ad99ace35d33734974_2_690x105.png)

Como podemos ver no log “<<<TESTE RETORNO:”
Ele retorna como se fosse um objeto.
Mas ao tentar acessar ele no log abaixo, ele retorna indefinido

Tentei acessar ele no código como sendo um Objeto, porém, não deu certo.
Já tentei realizar o parse dele com o JSON, porém, ele retorna \[object Object\], provavelmente, porque já vem como Objeto mesmo, mas não consigo acessar.

Alguém já passou por isso?

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 04/06/2024, 18:30 | ❤️ 1

Precisa fazer o parse. Ao menos sempre fiz nas minhas requisições.

E pra ver o que o objeto contém use o `log.dir`.

```javascript
var result = JSON.parse(response.getResult());

log.dir(result);
```

---

## Resposta #2

**Artur Alves** (@artur.alves) — 05/06/2024, 08:07

Bom dia, Bruno!

Já havia testado essa opção, descartei ela pois identifiquei que o retorno dele já nos traz como se estivesse formatado no Parse.

Vou te enviar como ele retorna no log:

![image](https://fluiggers.com.br/uploads/default/optimized/2X/a/ac7e7e937cb84249f373c2321212cbc3e5096210_2_690x114.png)

Linha azul em destaque;

Abaixo o código com a alteração:

```auto
var vo = clientService.invoke(JSON.stringify(data));

		if (vo.getResult() == null || vo.getResult().isEmpty()) {

			log.info("<<< INCLUSÃO DE PEDIDO ESTRATÉGICO. ERRO: Resultado da integração não encontrado. Informe o administrador do sistema");
			throw "Resultado da integração não encontrado. Informe o administrador do sistema";

		} else {

			var result = JSON.parse(vo.getResult()); //TESTE FLUIG

			log.info(vo.getResult());
			var oRetorno = vo.getResult();
			log.info("<<< TESTE RESULT: " + result)
			log.info("<<< TESTE VO: " + vo)
			log.info("<<< TESTE RETORNO: " + oRetorno)
			log.info("<<< TESTE: " + oRetorno.CMESSAGE)

			if (oRetorno.errorMessage != null) {
				throw oRetorno.errorMessage;
			}
			if (oRetorno.CTYPEMSG != null) {
				if (oRetorno.CTYPEMSG == "S") {
					log.info("<<< INCLUSÃO DE PEDIDO ESTRATÉGICO - Resultado: " + oRetorno.CMESSAGE);
				} else {
					throw oRetorno.CMESSAGE;
				}
			} else {
				throw "Falha no retorno das informações. Informe ao administrador do sistema. (RESPONSE WS nulo) ";
			}
		}
```

Podemos identificar também que ele não cai nem no ***if (oRetorno.CTYPEMSG != null)*** tendo em vista que, logo na linha acima do log ***TESTE RESULT*** ele retorna o ***CTYPEMSG*** como ***S***, ou seja, é diferente de vazio, e logo abaixo tem outro if que trata se o retorno dele for igual a ***S***

---

## Resposta #3

**Artur Alves** (@artur.alves) — 05/06/2024, 09:15

Bom dia!

Atualização: Alterei o código, consegui acessar a variável, porém, quando envio um throw ele não realiza a finalização do fluig…
Tem alguma outra função que possa usar para aparecer a mensagem na tela final?

Segue o código:

```auto
var vo = clientService.invoke(JSON.stringify(data));

		if(vo.getResult()== null || vo.getResult().isEmpty()){

			log.info("<<< INCLUSÃO DE PEDIDO ESTRATÉGICO. ERRO: Resultado da integração não encontrado. Informe o administrador do sistema");
			throw "Resultado da integração não encontrado. Informe o administrador do sistema";

		} else {

			log.info(vo.getResult());

			var oRetorno = JSON.parse(vo.getResult());

			if( oRetorno.errorMessage != null ){
				throw oRetorno.errorMessage;
			}
			if( oRetorno.CTYPEMSG != null ){
				if( oRetorno.CTYPEMSG == "S" ){
					log.info("<<< INCLUSÃO DE PEDIDO ESTRATÉGICO - Resultado: " + oRetorno.CMESSAGE);
					throw "<br>" + oRetorno.CMESSAGE; //***ELE PARA AQUI***
				}else{
					throw oRetorno.CMESSAGE;
				}
			}else{
				throw "Falha no retorno das informações. Informe ao administrador do sistema. (RESPONSE WS nulo) ";
			}
		}
```

Ele para onde informei no código, como se o throw fosse um return false;

![image](https://fluiggers.com.br/uploads/default/optimized/2X/b/bb851d27044e6b13ec9d6a79c85c5a7c35993b40_2_690x161.png)

Como podemos ver, ele realiza a integração no protheus, mas não finaliza o fluig.
Detalhe: Caso eu exclua a linha do código ***throw “
” + oRetorno.CMESSAGE;*** ele finaliza o fluig pós integração…

---

## Resposta #4 ✅ RESPOSTA ACEITA

**venturelli** (@venturelli) — 05/06/2024, 09:49 | ❤️ 1

o throw vai servir justamente para que seja considerado que houve um erro na integração. Então sim, ele é um return false.

A mensagem de sucesso é fixa na modelagem, mas o que se pode fazer é adicionar um comentário via hAPI.setTaskComments

---

## Resposta #5

**Artur Alves** (@artur.alves) — 05/06/2024, 11:01

Deu certo, muito obrigado!

![image](https://fluiggers.com.br/uploads/default/original/2X/3/34f1ceee65dceb2d96b76d1cbef0c39ed275ff3d.png)

---
