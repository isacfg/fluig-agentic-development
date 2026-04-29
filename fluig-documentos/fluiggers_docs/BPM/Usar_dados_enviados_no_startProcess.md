# Usar dados enviados no startProcess

> **Fonte:** [https://fluiggers.com.br/t/usar-dados-enviados-no-startprocess/2906](https://fluiggers.com.br/t/usar-dados-enviados-no-startprocess/2906)
> **Categoria:** BPM
> **Tags:** `bpm`
> **Criado em:** 29/07/2024, 11:35
> **Visualizações:** 197 | **Likes:** 2 | **Respostas:** 3

---

## Pergunta original

**Fabio Leal Schmitz** (@fabiolealsc) — 29/07/2024, 11:35

Olá pessoal, estou com dúvidas quanto ao método starProcess do hAPI.

Quero utilizar os dados de um processo em outro. Vou colocar os codigos abaixo e o resultado no Log. Alguém pode me ajudar me mostrando no que estou errando?

Processo Pai

```auto
function afterTaskComplete(colleagueId, nextSequenceId, userList){
    // Definindo variáveis
    var dadosFormulario = new java.util.HashMap();

    if(nextSequenceId == '9'){
        dadosFormulario.put("responsavel", "fabio.schmitz");

        try{
            log.info("################# INICIANDO PROCESSO:");
            hAPI.startProcess('WF_ACAO_RAC', 0, ["fabio.schmitz"], "Iniciado pela RAC", false, dadosFormulario, false);
        } catch(e){
            log.error("################# AKI DEU O ERRO: " + e);
        }
    }
}
```

Processo Filho:

```auto
function afterTaskSave(colleagueId,nextSequenceId,userList){
	if(nextSequenceId == 0 || nextSequenceId == 4){
        try{
            var resp = hAPI.getCardValue("responsavel");
            log.info("################# VALOR DE RESPONSAVEL: " + resp);
            hAPI.setCardValue("responsavel_area", resp);
        } catch(error){
            log.error("################# ERRO AO LER OU DEFINIR O CAMPO: " + error);
        }
    }
	if(nextSequenceId == 5){
        try{
            var resp = hAPI.getCardValue("responsavel");
            log.info("################# VALOR DE RESPONSAVEL NA 5: " + resp);
            hAPI.setCardValue("responsavel_area", resp);
        } catch(error){
            log.error("################# ERRO AO LER OU DEFINIR O CAMPO: " + error);
        }
    }
}
```

Testei em diversos eventos de processo como: (afterStateEntry, afterProcessCreate, beforeStateEntry) e em todos está como nulo.

Log:

```auto
2024-07-29 11:32:49,344 INFO  [com.datasul.technology.webdesk.customization.ScriptingLog] (default task-4828) ################# INICIANDO PROCESSO:
2024-07-29 11:32:49,370 INFO  [com.datasul.technology.webdesk.workflow.business.WorkflowBO] (default task-4828) Iniciando o processo 'WF_ACAO_RAC' ativ destino '5' usuario 'fabio.schmitz' empresa '1'
2024-07-29 11:32:49,585 INFO  [com.datasul.technology.webdesk.customization.ScriptingLog] (default task-4828) ################# VALOR DE RESPONSAVEL: null
2024-07-29 11:32:49,588 ERROR [com.datasul.technology.webdesk.customization.ScriptingLog] (default task-4828) ################# ERRO AO LER OU DEFINIR O CAMPO: JavaException: java.lang.NullPointerException: null
2024-07-29 11:32:50,185 WARN  [com.datasul.technology.webdesk.workflow.engine.WorkflowEngine] (default task-4828) Não existe nenhum anexo definido como principal.
2024-07-29 11:32:50,186 WARN  [com.datasul.technology.webdesk.workflow.engine.WorkflowEngine] (default task-4828) Não existe nenhum anexo definido como principal.
2024-07-29 11:32:50,186 INFO  [com.datasul.technology.webdesk.workflow.business.WorkflowBO] (default task-4828) # Saving card. Process: WF_ACAO_RAC, Instance: 20189, Sequence: 5, Dados: {responsavel=fabio.schmitz}
2024-07-29 11:32:50,245 WARN  [com.datasul.technology.webdesk.workflow.engine.WorkflowEngine] (default task-4828) O campo da ficha não foi encontrado: 91718 responsavel
2024-07-29 11:32:50,245 INFO  [com.datasul.technology.webdesk.customization.ScriptingLog] (default task-4828) ################# VALOR DE RESPONSAVEL NA 5: null
2024-07-29 11:32:50,373 INFO  [com.fluig.monitoring.jschronos.JSChronos] (default task-4828) CustomizationManagerImpl.invokeFunction.afterTaskComplete executou por 1 segundo
2024-07-29 11:32:50,696 WARN  [org.apache.activemq.artemis.core.client] (EJB ASYNC - 33) AMQ212051: Invalid concurrent session usage. Sessions are not supposed to be used by more than one thread concurrently.: java.lang.Exception: trace
```

---

## Resposta #1 ✅ RESPOSTA ACEITA

**venturelli** (@venturelli) — 29/07/2024, 15:03 | ❤️ 1

Existe um formulário neste subprocesso e caso exista, ele realmente tem um campo chamado “responsavel”?

---

## Resposta #2

**Fabio Leal Schmitz** (@fabiolealsc) — 30/07/2024, 09:43

Bom dia Venturelli, no processo filho eu não tenho esse campo. Provavelmente estou utilizando errado a função startProcess(). Como funciona os dados do formulário enviados nela?

Dês de já muito obrigado pela resposta, estou apanhando um pouquinho com fluig, mas vou pegar o jeito. :smiley:

---

## Resposta #3

**Fabio Leal Schmitz** (@fabiolealsc) — 30/07/2024, 10:09

Consegui, a pergunta que você fez me fez deduzir que o nome do parâmetro colocado no startProcess() tem que ser o nome do campo do formulário filho, testei e deu certo. Muito obrigado mesmo.

---

## Resposta #4

**venturelli** (@venturelli) — 30/07/2024, 10:15 | ❤️ 1

Certo. Só pra garantir, definindo os temos:

> Processo pai: processo que vai iniciar uma solicitação de outro processo
> Processo filho: processo que terá uma solicitação iniciada a partir de uma outra solicitação

E a única troca de informações entre estes dois processos, de forma simplificada, é o formulário. Claro que existem outras, mas exigem muito mais codificação pra isso.

**Recomendável**
Para iniciar um subprocesso, o recomendável é usar uma atividade de subprocesso em si. É mais claro no desenho que será feito e com ela fica mais fácil fazer o mapeamento de campos.

[https://tdn.totvs.com/pages/releaseview.action?pageId=233763197#Plataforma❙Configuraratividadesefluxos-ConfigurarSubprocesso](https://tdn.totvs.com/pages/releaseview.action?pageId=233763197#Plataforma%E2%9D%99Configuraratividadesefluxos-ConfigurarSubprocesso)

No mapeamento de campos, você pode fazer visualmente a configuração de passar a informação do campo `responsável` do processo pai para o campo `responsavel_area` do processo filho. Inclusive, permite voltar alguma informação após a finalização (ou seja, pegar o dado do processo filho e alterar o formulário do processo pai).

**Via código**
Claro que podemos fazer via código, já que tem situações um pouco mais complexas ou que precisam de um tratamento a mais. Neste caso, os dados do formulário podem ser enviados também (mas a parte do retorno dos dados não é simples).

Os dados de formulário precisam respeitar a estrutura do formulário do processo filho. No teu caso específico, supondo que exista o campo `responsavel_area`:

```auto
dadosFormulario.put("responsavel_area", "fabio.schmitz");
```

Ou, pensando vai passar um campo do formulário (`responsavel`) do processo pai:

```auto
dadosFormulario.put("responsavel_area", hAPI.getCardValue("responsavel"));
```

**Exemplo**
O Fluig tem um exemplo com codificação que você pode testar: [Browse Samples / Exemplos-Avancados-de-Processos - fluig Stash](https://git.fluig.com/projects/SAMPLES/repos/exemplos-avancados-de-processos/)

Ou se quiser o código mais direto só da abertura via hAPI: [Source of atendimento\_chamados.iniciarSolicitacaoFeedback.js - Exemplos-Avancados-de-Processos - fluig Stash](https://git.fluig.com/projects/SAMPLES/repos/exemplos-avancados-de-processos/browse/atendimento-chamados/workflow/scripts/atendimento_chamados.iniciarSolicitacaoFeedback.js)

---

## Resposta #5

**Fabio Leal Schmitz** (@fabiolealsc) — 30/07/2024, 10:25

Valeu mesmo. Tenho que fazer por código pois tenho algumas tabelas paiXfilho que tem diversos usário e tenho que disparar processos para cada um. Inclusive com envio de emails personalizados e condições expecíficas. Ficou possível somente com código devido a complexidade das regras de negócio.

**Agradecimento**
Estou iniciando em BPM2.0, mas já observei o poder que a ferramenta tem e as possibilidades que a plataforma me disponibiliza, porém como estou aprendendo literalmente sozinho acabo me barrando em problemas pequenos. Mas obrigado por trazer o auxílio, creio que com a comunidade ajudando vamos longe. :sunglasses:

---
