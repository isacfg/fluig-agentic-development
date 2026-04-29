# Iniciar processo com formulário pré-cadastrado

> **Fonte:** [https://fluiggers.com.br/t/iniciar-processo-com-formulario-pre-cadastrado/290](https://fluiggers.com.br/t/iniciar-processo-com-formulario-pre-cadastrado/290)
> **Categoria:** Formulários
> **Tags:** `fluigapi`
> **Criado em:** 05/04/2021, 14:33
> **Visualizações:** 1221 | **Likes:** 1 | **Respostas:** 3

---

## Pergunta original

**Odair Batista** (@odair.batista) — 05/04/2021, 14:33

Saudações!!

Criei um formulário que a princípio será apenas um rascunho, mas que poderá se transformar em um processo. A pergunta então seria: Existe uma forma de iniciar uma solicitação, onde o formulário seja o que já está previamente preenchido, ou terei que passar os dados do formulário para API, gerando assim outro formulário relacionado ao processo iniciado?

---

## Resposta #1

**Daniel Cabral Santos** (@daniel.cabral) — 06/04/2021, 09:50

Acredito que, como você precisará iniciar o processo via API, precisa passar o cardData com os valores do formulário.

Mas, e se você deixar valores default no formulário do seu processo?

---

## Resposta #2

**Odair Batista** (@odair.batista) — 06/04/2021, 10:22 | ❤️ 1

Ou seja, tenho que passar os dados do formulário para a API e o processo irá gerar um novo formulário vinculado. Obrigado pelo retorno Daniel. Abraços!

---

## Resposta #3

**Daniel Cabral Santos** (@daniel.cabral) — 06/04/2021, 10:41

Exato, Odair! Desconheço outra forma no momento…você até poderia tentar algo mais robusto, como por exemplo um formulário ‘rascunho’ mesmo, mas na hora de inicializar o processo, você resgata os dados de exemplo e os insere no cardData. Não vai escapar da API, de toda forma :slight_smile:

---

## Resposta #4

**Odair Batista** (@odair.batista) — 06/04/2021, 10:44

O processo é exatamente este, o usuário digita os dados em um formulário rascunho que pode se transformar em um oficial iniciando o processo. No caso terei que, após a inicialização do processo, descartar este formulário de rascunho.

---

## Resposta #5

**Julio Cesar Campos de Andrade** (@JCANDRADE) — 06/04/2021, 15:55

Boa tarde [@odair.batista](/u/odair.batista) blz?

Você pode utilizar o formulário de “rascunho” para iniciar um processo VIA API e Dataset Sincronizado.

Por exemplo, quando o usuário preencher o formulário, o dataset ira verificar se existe um novo formulário e chamar a API do Fluig ( /v2/processes/{processId}/start\]) para iniciar o processo. Você também pode pegar os campos da rascunho e passar nos parâmetros da API para iniciar o processo.

Segue um exemplo de um dataset sincronizado que inicia o processo:

```javascript
{
						companyId : ''+info_server.company,
						serviceCode : 'servico_rest_fluig',
						endpoint : '/process-management/api/v2/processes/processId/start',
						method : 'post',
						timeoutService: '100',
						params : {
							"targetState": 1,
							"subProcessTargetState": 0,
							"comment": "Inicio automatico.",
							"formFields": {
								"nome": ""+nome,
								"idade": ""+idade,

							}
						}
				}
```

---
