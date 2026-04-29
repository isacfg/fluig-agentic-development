# Alterar Solicitante

> **Fonte:** [https://fluiggers.com.br/t/alterar-solicitante/3241](https://fluiggers.com.br/t/alterar-solicitante/3241)
> **Categoria:** API`s Fluig
> **Tags:** `form`, `dataset`, `fluigapi`
> **Criado em:** 09/04/2025, 09:14
> **Visualizações:** 149 | **Likes:** 9 | **Respostas:** 6

---

## Pergunta original

**Caio Racy** (@Caio_Racy) — 09/04/2025, 09:14

Olá pessoal, estou com um problema aqui e preciso ver se alguém já passou por algo parecido.

Aqui usamos o identity no FLUIG, então todas as contas da empresas estão sincronizadas.
Eu uso a API para criar solicitaçoes automáticas através de um worker externo (via rabbitMQ) nesse sentido passo algumas informações para a API, porém ele nao cria com o solicitante certo, por mais que no form eu tenha um campo de solicitante que vem ok, o solicitante interno vem como “Protheus Protheus” isso devido ao OAuth configurado.

Queria saber se tem alguma forma de trocar o solicitante, para que com isso, por mais que o worker lance, ja lance no usuário que fez por fora e com isso ja aparece como solicitação aberta por ele na central de tarefas.

Minha solução não muito ortodoxa: Eu chamo a API para começar num state especifico (35) e antes eu tenho uma etapa automática que cria um registro se for criação manual. estava pensando em nessa etapa automática, validar se o form foi criado via API e se for, eu tento alterar via dataset o solicitante. Faz sentido?

Se alguém souber de uma solução mais elegante seria de grande ajuda
Um abraço

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 09/04/2025, 09:24 | ❤️ 1

O seu usuário OAuth precisa ter a opção `Permite impersonalização` marcada. Aí quando usar a API pra iniciar a solicitação basta enviar o id/matrícula do solicitante.

Edit: agora olhando a API novamente vi que tem o `targetAssignee`, mas sinceramente não me recordo se nele altera realmente o solicitante.

Já usando SOAP é possível indicar o requisitante, usando o serviço `ECMWorkflowEngineService`, operação `startProcess`.

![image](https://fluiggers.com.br/uploads/default/original/2X/c/c2405dbe23d6e4a6655ec4313023efea61e519ac.png)

Esse userId vai ser o solicitante.

---

## Resposta #2

**Caio Racy** (@Caio_Racy) — 09/04/2025, 09:47

Entendi, hoje estou usando REST para isso, e o worker não tem é o id do user no fluig, a gente tem o email que é o que uso para encontrar o usuário, por isso pensei em fazer no after do startProcess.

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 09/04/2025, 10:04 | ❤️ 1

Fluig é “legal” que cada WS e API possuem funções diferentes com opções diferentes. Não tem uma padronização entre elas, hehehe.

A sua ideia é boa, aí você usa a API de transferir pendências e nela indica pra transferir o solicitante também.

Aqui eu fiz fiz a abertura de solicitação usando dataset. Pra facilitar pro sistema que abriria e não dar tanta permissão ao sistema externo em manipular tantas APIs do Fluig. Assim o sistema chama o Dataset passando os dados via constraint e o Dataset chama o SOAP de iniciar solicitação.

---

## Resposta #4

**Caio Racy** (@Caio_Racy) — 09/04/2025, 10:08 | ❤️ 1

ja percebi que o fluig é bem aberto mesmo! Eu vou tentar mexer aqui e volto para dizer se foi um sucesso ou uma falha total hahaha

---

## Resposta #5

**Caio Racy** (@Caio_Racy) — 10/04/2025, 11:23 | ❤️ 1

Salve galera, depois de muito apanhar tenho alguns pontos pra compartilhar disso e obter uma luz talvez. Vamos lá.

Como uso REST segui com a ideia de criar um dataset que faz um update simples de inicio na tabela WORKFLOW\_PROCES no COD\_MATR\_REQUISIT, depois iria atualizar as outras tabelas que usam ele só pra deixar sincrono, entao, no meu dataset eu busco o usuário pelo e-mail (integração com o identity) encontro e mando um executeUpdate(). até ai tava lindo.

esse dataset eu incialmente pensei em colocar dentro de um serviço que eu tenho entre o inicio e o meu targetState olhando o meu campo de origem (que define se é de API ou manual). Eu tinha certeza que ele seria chamado, mas não foi, o serviceTask foi chamado mas minha function alteraSolicitante() nao foi chamada. Já achei estranho ai, entao pensei em utilizar os eventos do proprio workflow, como o afterTaskCreate ou o afterProcessCreate. Comecei a me deparar com um problema que parece ser de transaction.

Ele me da o numero da solicitação, loga por todas as etapas que tenho no form que indicam que os campos estão sendo preenchidos por exemplo, mas quando chega no update ele trava (fica esperando acho que a transaction) porém depois de 5 minutos, acontece um rollback, de tudo e acaba não criando o processo, e ai ele tenta executar o update com 0 rows affecteds, visto que ele tinha o numero do processo, mas como teve rollback ele se perdeu…

```auto
2025-04-10 10:55:43,109 INFO  [com.datasul.technology.webdesk.customization.ScriptingLog] (default task-311) ####### AFTER PROCESS CREATE ######
2025-04-10 10:55:43,109 INFO  [com.datasul.technology.webdesk.customization.ScriptingLog] (default task-311) STATE: 5
2025-04-10 10:55:43,109 INFO  [com.datasul.technology.webdesk.customization.ScriptingLog] (default task-311) PROCES: 1731
2025-04-10 10:55:43,141 INFO  [com.datasul.technology.webdesk.customization.ScriptingLog] (default task-311) VAI ALTERAR SOLICITANTE
2025-04-10 10:55:43,141 INFO  [com.datasul.technology.webdesk.customization.ScriptingLog] (default task-311) ALTERA SOLICITANTE
2025-04-10 10:55:43,141 INFO  [com.datasul.technology.webdesk.customization.ScriptingLog] (default task-311) NUM PROCESSO: 1731
2025-04-10 10:55:43,141 INFO  [com.datasul.technology.webdesk.customization.ScriptingLog] (default task-311) SDR: caiohar
...
2025-04-10 10:55:43,250 INFO  [com.datasul.technology.webdesk.customization.ScriptingLog] (default task-311) SQL : UPDATE PROCES_WORKFLOW SET COD_MATR_REQUISIT = 'caiohar' WHERE NUM_PROCES = '1731'
```

minha matricula está simplificada para fins de teste.

Agora olha o rollback e ele voltando para update como se nada tivesse acontecido 5 minutos depois.

```auto
2025-04-10 11:00:41,954 INFO  [com.datasul.technology.webdesk.customization.ScriptingLog] (default task-311) UPDATE USUARIO
2025-04-10 11:00:41,954 INFO  [com.datasul.technology.webdesk.customization.ScriptingLog] (default task-311) 0.0
```

Pois é textão, mas foi mais ou menos isso que passei tentando solucionar e sempre que chamo o update quando é via API REST ele trava nisso.

Não sei mais o que fazer, queria forçar o commit ou conseguir chamar meu dataset depois que tenho certeza que a transaction criada pela API esteja comitada… quer dizer se for esse mesmo o problema.

---

## Resposta #6

**Bruno Gasparetto** (@Bruno_Gasparetto) — 10/04/2025, 12:07 | ❤️ 1

Alterar direto por banco de dados deve ser bem complicado, porque talvez o Fluig salve em muitos lugares a informação e você acabe tendo erros de Constraints né.

Tenta usar a API Antiga [TaskRest](https://api.fluig.com/old/resource_TasksRest.html). Nela tem o endpoint `POST /2.0/tasks/transfer`, que faz justamente a transferência de pendência de atividades. A propriedade `transferOpenWorkflow` deve indicar a troca do usuário de abertura.

Ao menos é quase certeza que o “Transferir Pendências” que temos no “Painel de Controle” utilize essa API pra executar essa ação.

Acredito que ela vai rodar de boa no evento `afterProcessCreate`.

---

## Resposta #7

**Caio Racy** (@Caio_Racy) — 10/04/2025, 17:59 | ❤️ 1

Cara sua idéia foi genial, quando eu fiz a request e alterou, falei que seria um sucesso! Ja troquei meu dataset para chamar o rest do fluig com essa url e passando os parametros certos… porem no afterProcessCreate ele ainda não tem o processo comitado de fato e quando eu executo o fluigAPI com essa rota ele diz que nao achou o processo e de fato só depois ele encontra. Estou pensando em colocar um timer de 1 ou 2 segundos só pra ele comitar e executar meu dataset. Foi na trave, mas ainda não desisti, essa foi uma boa luz

---

## Resposta #8 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 10/04/2025, 18:15 | ❤️ 1

Nossa, aprendendo cada vez mais. Na minha cabeça o evento `afterProcessCreate` acontecia depois da criação da solicitação. Inclusive na documentação diz que nem adianta disparar exceções nos eventos after porque não influenciaram em nada.

Pode ser que se no próprio evento colocar um timer o commit também aguarde, hehehe. Mas só tentando pra descobrir né.

Uma opção que imaginei é, caso não seja obrigatório que a pessoa assuma a tarefa na atividade `Início`, colocar uma atividade do tipo `Serviço` logo após a Início e quando iniciar a solicitação colocar como targetState a atividade serviço. Assim você executa a `Serviço`, que fará a troca do solicitante, e a serviço avança pra próxima atividade que será a que o usuário continuará as ações.

Porém numa situação dessas eu colocaria um campo no formulário pra salvar a matrícula do usuário que será o responsável e nessa atividade após a `Serviço` colocaria o mecanismo de atribuição como `Campo de Formulário`, pra garantir que iria pra pessoa correta.

Ou

Na sua chamada REST pra criar a Solicitação você faça uma chamada após 1 segundo pra esse dataset. Assim tiraria o peso dessa atividade serviço a toa e só teria que executar 2 chamadas sequenciais ao Fluig.

Do ponto de vista prático acho que essa opção de simplesmente executar 2 chamadas REST ao Fluig seria uma opção mais tranquila e com menos “gambiarras” de atividades no diagrama.

---

## Resposta #9

**Caio Racy** (@Caio_Racy) — 11/04/2025, 09:11 | ❤️ 2

é exatamente o que estou montando. Consegui acesso a API do meu worker que requisita o fluig, a partir dela, estou rodo o processStart e depois rodo a chamada de transfer! Só que nesse meio eu preciso fazer um get do usuário apenas e pegar sua matricula para valorar o userTo, visto que o userFrom é sempre o usuário de API que tenho, fica bem mais simples.

2 requests separadas e uma seguida da outra foi realmente o que salvou aqui! Valeu demais a ajuda nisso! Agora já tenho isso pronto para os outros fluxos que estão por vir!

---
