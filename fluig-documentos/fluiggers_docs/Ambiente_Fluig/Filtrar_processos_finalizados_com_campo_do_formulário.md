# Filtrar processos finalizados com campo do formulário

> **Fonte:** [https://fluiggers.com.br/t/filtrar-processos-finalizados-com-campo-do-formulario/3057](https://fluiggers.com.br/t/filtrar-processos-finalizados-com-campo-do-formulario/3057)
> **Categoria:** Ambiente Fluig
> **Criado em:** 07/11/2024, 15:26
> **Visualizações:** 191 | **Likes:** 0 | **Respostas:** 8

---

## Pergunta original

**Rahyan Ramos** (@Ramos) — 07/11/2024, 15:26

Olá a todos. Tudo bem?

Surgiu uma situação em um processo que eu desenvolvi no Fluig em que um ator gostaria de visualizar o valor do campo do formulário referente ao valor solicitado ao setor financeiro sem precisar entrar em cada solicitação para encontrar o valor desejado.
Eu consegui criar um filtro que apresentasse o valor desse campo na página ‘Central de Tarefas’, através do ‘Filtros de Processos’. Porém observei que na Central de Tarefas as solicitações que aparecem filtradas são somente as que estão em aberto, eu precisava visualizar as informações dos processos finalizados também.
É possível fazer isso? Como?

---

## Resposta #1

**venturelli** (@venturelli) — 07/11/2024, 16:49

Você pode usar a API Requests

[https://api.fluig.com/latest/process-management/swagger-ui/#/Requests/findRequests](https://api.fluig.com/latest/process-management/swagger-ui/#/Requests/findRequests)

Assim como na central de tarefas, é preciso definir o `processId` e o definir os campos no `formFields` no formato `campo:valor`. Aceita mais de um campo.

```auto
/process-management/api/v2/requests?processId=ID_DO_PROCESSO&formFields=nome%3ARamos&formFields=forum%3Afluiggers&page=1&pageSize=1000
```

---

## Resposta #2

**Rahyan Ramos** (@Ramos) — 08/11/2024, 18:12

Fiz uma requisição a esse endpoint da seguinte maneira

```auto
/process-management/api/v2/requests?status=OPEN&status=FINALIZED&processId=ARF-SolicitacaodeViagem&formFields=solicitante&formFields=totalSolicitado&page=1&pageSize=1000
```

Porém o retorno tem sido esse:

> “items”: \[
> {
> “processInstanceId”: 1060,
> “processId”: “ARF-SolicitaçãodeViagem”,
> “processVersion”: 20,
> “active”: true,
> “requester”: null,
> “formRecordId”: 5055,
> “formId”: 2886,
> “startDate”: “2024-11-08T20:03:01.000+0000”,
> “periodId”: “Default”,
> “activities”: null,
> “formRecord”: null,
> “formFields”: null,
> “slaStatus”: “ON\_TIME”,
> “status”: “OPEN”,
> “processDescription”: “ARF - Solicitação de Viagem”,
> “deadlineSpecification”: null,
> “\_expandables”: \[
> “requester”,
> “formRecord”,
> “activities”,
> “formFields”,
> “deadlineSpecification”
> \]
> }(…)

Sem pontuar os campos do formulário que coloquei na requisição. Estou errando em algum ponto?

---

## Resposta #3

**venturelli** (@venturelli) — 08/11/2024, 18:29

Eu havia entendi que você queria filtrar por campo de formulário, não trazer os campos de formulário. Então o param formFields que passei antes pode ser ignorado.

As API’s normalmente possuem os parâmetros do expand. No retorno, ele diz as opções:

```auto
“_expandables”: [
   “requester”,
   “formRecord”,
   “activities”,
   “formFields”,
   “deadlineSpecification”
]
```

Então você pode usar o parâmetro `expand=formFields`

```auto
/process-management/api/v2/requests?status=OPEN&status=FINALIZED&processId=ARF-SolicitacaodeViagem&expand=formFields&page=1&pageSize=1000
```

---

## Resposta #4

**Rahyan Ramos** (@Ramos) — 08/11/2024, 18:36

Excelente!
Eu poderia pela requisição filtrar apenas os campos que eu quero que retorne?

---

## Resposta #5

**venturelli** (@venturelli) — 08/11/2024, 23:07

Não. Ele traz todos. O único que eu acho que filtra os campos é no de formulário em si. Mas pra fazer o que tu quer, teria que o formulário ter também a informação da atividade atual. O {formId} é o código do formulário que está vinculado ao processo

```auto
/ecm-forms/api/v2/cardindex/{formId}/cards?%24filter=campoPesquisavel%20eq%20'123'%20and%20outroCampo%20eq%20'456'&fields=campoRetornavel&fields=outroCampoRetornavel&page=1&pageSize=100
```

Como ficou um pouco complicado, acho interessante deixar a imagem de como ficou no swagger, pra poderes entender melhor:

![image](https://fluiggers.com.br/uploads/default/optimized/2X/6/6251bad84434d052cdd67c2025eaa3b44f506775_2_690x452.png)

Mas não vai trazer nenhum dado da solicitação. Talvez o mais interessante é fazer mesmo com dois endpoints, mas depende o que tu precisa dai.

---

## Resposta #6

**Rahyan Ramos** (@Ramos) — 11/11/2024, 09:15

Excelente. O endpoint process-management vai suprir minha necessidade.
Muito obrigado!

---

## Resposta #7

**Allan Reichert** (@allan.reichert) — 11/11/2024, 16:37

Caso nao conheça, tem tambem a opção de trabalhar com os Relatorios do Fluig, é bem interessante.

![](https://academy.fluig.com/theme/image.php/totvs_fluig_academy/theme/1723807173/favicon) [TOTVS Fluig Academy | Relatórios BIRT](https://academy.fluig.com/theme/totvs_fluig_academy/landpage.php?course=49)

![](https://academy.fluig.com/pluginfile.php/1/theme_totvs_fluig_academy/imagem_compartilhamento_link/1723807173/TOTVS-FLUIG-ACADEMY_CONECTE-SE.png)

### [TOTVS Fluig Academy | Relatórios BIRT](https://academy.fluig.com/theme/totvs_fluig_academy/landpage.php?course=49)

Aprenda a criar os seus próprios relatórios e gráficos a partir das informações do Excel, serviços SOAP, datasets do TOTVS Fluig e muito mais!

---

## Resposta #8

**Ricardo Andrade** (@rca0261) — 12/11/2024, 08:06

Bom dia [@Ramos](/u/ramos) ,

Fiz aqui de uma forma diferente.

Criei uma Widget que busca um dataset customizado e mostra todos os processos com filtros pré-determinados.
Assim o usuário além de buscar os workflows que ele precisa tem a opção de consultar todos os processos que estão em aberto, finalizados e/ou cancelados tudo em uma tela apenas.

Caso ele precise visualizar o formulário tem um botão em cada linha que abre o form em uma modal sem sair da tela e também para os anexos histórico de movimentação e subprocessos ligados ao processo pai.

Um dataset que faz a carga destes dados e a Widget que oferece todas as facilidades para o usuário.

Fica bem interessante para os usuários que acabam utilizando somente esta widget que concentra tudo que ele precisa. Tudo em uma tela.

Se quiser ver mais sobre ela é só me chamar.
Abs

---

## Resposta #9

**Rahyan Ramos** (@Ramos) — 12/11/2024, 09:10

Vou dar uma estudada nisso, parece muito interessante. Obrigado

---

## Resposta #10

**Rahyan Ramos** (@Ramos) — 12/11/2024, 09:11

Wow, isso seria perfeito. Consegue me mostrar um exemplo de como ela ficou no ambiente?

---

## Resposta #11

**Ricardo Andrade** (@rca0261) — 21/11/2024, 07:26

[@Ramos](/u/ramos) posso te mostrar sim. Me fala uma disponibilidade tua.
Me passa e-mail [rca0261.negocios@gmail.com](mailto:rca0261.negocios@gmail.com) que marcamos um horário para você conhecer esta Widget.

Abs

---
