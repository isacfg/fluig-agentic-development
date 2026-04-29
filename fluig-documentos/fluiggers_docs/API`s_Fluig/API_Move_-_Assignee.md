# API Move - Assignee

> **Fonte:** [https://fluiggers.com.br/t/api-move-assignee/992](https://fluiggers.com.br/t/api-move-assignee/992)
> **Categoria:** API`s Fluig
> **Tags:** `fluigapi`
> **Criado em:** 29/03/2022, 12:22
> **Visualizações:** 1311 | **Likes:** 1 | **Respostas:** 2

---

## Pergunta original

**Guilherme Diogo Gesualdo** (@GuilhermeGesualdo) — 29/03/2022, 12:22

Bom dia Fluiggers!

Estou com uma dúvida na API move.

Estava tentando utilizar a mesma para movimentar um processo que está parado em uma tarefa que está atribuída para um grupo. Havia entendido que passando o MovementSequence e o Assignee conseguiria atribuir a tarefa para o usuário que pertence ao grupo e já movimentar a tarefa.

O retorno que recebo é de erro: Verifique se a tarefa está devidamente registrada em nome do usuário informado ou se não está ativa em nome de outro usuário.

Se o Assignee nessa API move não serve para isso, para o que serve então?

Estou tendo que chamar antes disso a API AssumeProcessTask para primeiro atribuir para depois usar o Move.

É a Totvs complicando a vida de quem desenvolve!

Alguém passou por isso e pode me auxiliar tirando essa dúvida?

PS: Não quero voltar ao bom e velho SOAP

Atenciosamente,

Guilherme D. Gesualdo

---

## Resposta #1

**Jonathan Albuquerque** (@Jonathan.Albuquerque) — 23/08/2022, 18:01 | ❤️ 1

Você pode testar desta maneira, mas não sei se o usuário destino nesta situação suporta enviar para um grupo… creio que poderia haver um gateway exclusivo após esta atividade que poderá movimentar a atividade para um grupo de acordo com as suas regras:

```auto
`/process-management/api/v2/requests/${procesId}/move`
```

Params:

```auto
{
  "movementSequence": 1, // atv atual
  "assignee": "fluig",
  "targetState": 2, // atv destino
  "targetAssignee": "Pool:Group:"+grupo, // grupo destino
  "subProcessTargetState": 0,
  "comment": "movimentado via REST",
  "asManager": false, // gestor
  "formFields": {
    "consultorResponsavel": "jonathan" // campos do formulário
  }
```

---

## Resposta #2

**Julio** (@Julio_Rocha) — 20/09/2022, 11:45

Oi Guilherme, tudo bem!

Tenho uma widget que movimenta demissões em bloco, que vinha dando o mesmo problema. No meu caso eu preciso movimentar para a atividade “Fim” e mesmo preenchendo conforme indicado na documentação, não rolou.

Deixei da forma abaixo e funcionou: Só com as TAGs “Comment”, “asManager” e os campos do formulário.

data : JSON.stringify(
{
“comment” : “MOVIMENTADO AUTOMATICAMENTE”,
“asManager” : false, // gestor
“formFields” : {
“vDtPagamento” : $(“#dtintegra”).val(),
“vAprovado” : “sim”,
“vPeriodo” : “4”
}
}
),

---

## Resposta #3

**Guilherme Beranger** (@Guilherme_Beranger) — 20/09/2022, 15:20

Man, verifica se vc está passando os parametros como String, pois se vc passar em formato de numero ele nao reconhece mesmo.

TargetState = Numero da atividade no fluxo BPM;
TargetAssignee = Matrícula do USER Destino
“targetState”: “03”,
“targetAssignee”: “12345”,

---

## Resposta #4

**Fernando ** (@FernandoHenrique) — 04/10/2022, 13:27

Oie Guilherme, estou com o mesmo problema que você, poderia me dá um exemplo de como fez com a api AssumeProcessTask? Pq acredito que ela já resolva o meu problema.

---

## Resposta #5

**Guilherme Beranger** (@Guilherme_Beranger) — 07/10/2022, 10:25

Eai man, então eu tenho no meu git o modo que eu utilizei

![](https://github.githubassets.com/favicons/favicon.svg) [github.com](https://github.com/guilhermeberanger/fluigapi/tree/master)

### [GitHub - guilhermeberanger/fluigapi](https://github.com/guilhermeberanger/fluigapi/tree/master)

[master](https://github.com/guilhermeberanger/fluigapi/tree/master)

Contribute to guilhermeberanger/fluigapi development by creating an account on GitHub.

se nao conseguir me manda um whats

11-952066445

---
