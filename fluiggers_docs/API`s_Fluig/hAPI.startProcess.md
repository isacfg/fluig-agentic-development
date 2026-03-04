# hAPI.startProcess

> **Fonte:** [https://fluiggers.com.br/t/hapi-startprocess/1555](https://fluiggers.com.br/t/hapi-startprocess/1555)
> **Categoria:** API`s Fluig
> **Tags:** `fluigapi`
> **Criado em:** 29/12/2022, 15:33
> **Visualizações:** 1480 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Wanderley Junior** (@gomeswjunior) — 29/12/2022, 15:33

Pessoal, estou iniciando um processo a partir de outro e na declaração do método startProcess estou informando um responsável. O start ocorre tudo certo, porém queria entender se é possivel alterar o usuário que inicia a nova solicitação, pois em todos os testes que realizei a solicitação é criada pelo usuário logado no momento em que o método é executado. Gostaria que o usuário que recebe a nova solicitação também fosse o usuário que iniciasse a solicitação. É possível ?

A linha do método:

```auto
hAPI.startProcess("HSP-FIS-000002_LancamentoNotaFiscal", 0, responsavel, "Iniciada automaticamente pelo processo de solicitação de compra. Nº fluig: "+numProces+" ", true, formData, false);
```

---

## Resposta #1

**Igor Rodrigues** (@fluigor.com.br) — 11/01/2023, 11:06

[@gomeswjunior](/u/gomeswjunior)

Analisando a documentação, não existe métodos nesta chamada hAPI (back-end) para realizar a ação q tu precisa.

startProcess(processId, ativDest, listaColab, “obs”, completarTarefa, valoresForm, modoGestor) Inicia uma solicitação *workflow*, onde:

-   processId: código do processo;
-   ativDest: código da atividade de destino;
-   listaColab: lista (do tipo String) de usuários;
-   obs: texto da observação;
-   completarTarefa: indica se deve completar a tarefa (true) ou apenas salvar (false);
-   valoresForm: um Mapa com os valores do formulário do processo;
-   modoGestor: indica que o usuário iniciará a solicitação como gestor (true) ou que o usuário iniciará a solicitação apenas como solicitante (false).

Retorna um mapa com informações da solicitação criada. Entre elas, o iProcess que é o número da solicitação criada.

Exemplo de inicialização de uma solicitação pelo método hAPI.startProcess enviando a atividade para um papel:

`function` `beforeStateEntry(sequenceId){`

`if` `(sequenceId == 5) {`

`//A tarefa destino tem o mecanismo de atribuição para um papel, cujo o código é papelUser`

`var` `users =` `new` `java.util.ArrayList();`

`users.add(` `"Pool:Role:papelUser"` `);`

`var` `formData =` `new` `java.util.HashMap();`

`formData.put(` `"Nome_do_Campo1"` `,` `"Valor do Campo 1"` `);`

`formData.put(` `"Nome_do_Campo2"` `,` `"Valor do Campo 2"` `);`

`hAPI.startProcess(` `"pool"` `, 4, users,` `"Solicitação inicializada pela função hAPI"` `,` `true` `, formData,` `false` `);`

`}`

`}`

Acredito que o caminho mais ágil seja realizar a inicialização do processo usando uma chamada rest da API Process

[https://api.fluig.com/latest/process-management/swagger-ui/#/Processes/createSimpleProcess](https://api.fluig.com/latest/process-management/swagger-ui/#/Processes/createSimpleProcess)

---

## Resposta #2

**Karina Pinheiro** (@Kapinheiro) — 19/02/2024, 10:51

Junior, Conseguiu resolver a questão de setar o inicializado(solicitante) do processo?

---
