# Exclusivo não funciona

> **Fonte:** [https://fluiggers.com.br/t/exclusivo-nao-funciona/1311](https://fluiggers.com.br/t/exclusivo-nao-funciona/1311)
> **Categoria:** BPM
> **Criado em:** 13/09/2022, 15:41
> **Visualizações:** 627 | **Likes:** 0 | **Respostas:** 2

---

## Pergunta original

**Rafael** (@Adevogado) — 13/09/2022, 15:41

Boa tarde, Tudo bem? Gostaria de uma ajuda n fluig, sou iniciante, e construí um fluxo no Eclipse, na segunda atividade tem um RADIO onde o gestor aprova ou reprova, porém os exclusivos estão apresentando erro, com a mensagem "Não foi possível resolver as condições da atividade automática ", tem outro RADIO que coloquei em um Exclusivo para verificar se a solicitação de equipamento é para novo equipamento ou substituição, mas creio que o problema esteja no exclusivo do Gestor.
Segue abaixo os códigos e prints.

![fluxo 1](https://fluiggers.com.br/uploads/default/original/1X/103b139f83b5a7efdf35620d6b15c3aec3b17757.png)

![fluxo 2](https://fluiggers.com.br/uploads/default/optimized/1X/49254fe62bc242730904f26e0323b4528da841a4_2_469x500.png)

código do Exclusivo do gestor:
hAPI.getCardValue(“AprovacaoGestor”) == “aprovado”
hAPI.getCardValue(“AprovacaoGestor”) == “reprovado”

HTML da Aprovação do Gestor:

Aprovado

Reprovado

Código para verificar se a requisição é para equipamento é novo ou para substituição:

```
<label>
													<input type="radio" name="rbMotivo" value="novo" required="required"
														onchange="showOptions(this);">Novo Equipamento</label>
											</div>
											<div class="radio">
												<label>
													<input type="radio" name="rbMotivo" value="substituicao" required="required"
														onchange="showOptions(this);">Substituição de Equipamento</label>
											</div>
										</div>
									</div>
```

Exclusivo que verifica se solicitação de equipamento é para novo equipamento ou para substituição:
hAPI.getCardValue(“rbMotivo”) == “substituicao” (vai para task configurar equipamento)
hAPI.getCardValue(“rbMotivo”) == “novo” (vai para a task aprovação da diretoria)

---

## Resposta #1

**Allan Reichert** (@allan.reichert) — 13/09/2022, 16:01

Olá,

Este erro é porque nenhuma das condições foram atendidas, como se eu tivesse condição para resposta “A” e “B” e estiver passando uma resposta “C”. Como não é “A” nem “B” retorna o erro informado.

da uma verificada nos values e se os radios estão marcados.

Pode utilizar validateForm para notificar se algum campo obrigatório não está de acordo

---

## Resposta #2

**Marco Comassetto** (@marcommas) — 13/09/2022, 17:25

É possível verificar também se em determinada atividade você não deu um ‘disabled’ nesse radiobutton.
O ‘disabled’ limpa o campo, e grava como vazio o campo no banco de dados.

---

## Resposta #3

**Allan Reichert** (@allan.reichert) — 14/09/2022, 08:07

bem observado. No momento em que o campo será validado não deve ser usado disabled. Eu uso uma função para setar o atributo “readonly” quando vou realizar uma validação do campo mas não quero que seja alterado.

---

## Resposta #4

**Rafael** (@Adevogado) — 14/09/2022, 11:38

agradeço a ajuda de todos, ao configurar o ValidateForm do campo gestor, vi que ele não está funcionando no RADIO de aprovação do gestor quando está na atividade 5 (atividade do gestor), e que o problema deve estar nisso. Fiz o ValidateForm da seguinte forma abaixo, está errado?

function validateForm(form){
var atividade = getValue(“WKNumState”);
var msg = “”;
var fluxo\_gestor = 5

```
// Aprovação do Gestor
if((atividade == fluxo_gestor) || (atividade == 5)){
    if(form.getValue("AprovacaoGestor") == "" ){
        msg+= "Você precisa aprovar ou reprovar a solicitação para continuar. ";
    }
    if(form.getValue("justificativa2") == ""){
        msg+= "Campo JUSTIFICATIVA não foi preenchido. ";
    }
}
```

---

## Resposta #5

**Allan Reichert** (@allan.reichert) — 21/09/2022, 08:46

Utiliza throw(“sua mensagem”) para a mensagem. Este gera uma exception e para a execução.

---
