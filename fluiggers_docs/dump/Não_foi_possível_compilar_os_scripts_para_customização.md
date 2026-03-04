# Não foi possível compilar os scripts para customização

> **Fonte:** [https://fluiggers.com.br/t/nao-foi-possivel-compilar-os-scripts-para-customizacao/2946](https://fluiggers.com.br/t/nao-foi-possivel-compilar-os-scripts-para-customizacao/2946)
> **Categoria:** Formulários
> **Tags:** `form`, `processo`, `bpm`, `beforetasksave`
> **Criado em:** 29/08/2024, 15:13
> **Visualizações:** 61 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Ariany G** (@Ariany_G) — 29/08/2024, 15:13

Boa tarde!

Estou tendo um erro no log e gostaria de uma ajuda.

Erro:
2:08:58 PM - \[com.datasul.technology.webdesk.customization.CustomizationManager\] (default task-5622) \[Solicitação: 47850\] - Processo: solicitacao\_devolucao\_vendas - versão: 23 - Usuário Executor : fluig - Gestor : Não - Substituto : Não - Executando evento : Erro durante registro de eventos implementados para esta SolicitaçãoFalha na compilação do script log.info(‘# 1 criando a função beforeTaskSave’);function beforeTaskSave(colleagueId, nextSequenceId, userList){log.info('# 1 acessando a função beforeTaskSave com os parâmetros:\\n param \\‘colleagueId\\’ = ’ + colleagueId + '\\n param \\‘nextSequenceId\\’ = ’ + nextSequenceId + '\\n param \\‘userList\\’ = ’ + userList + ‘’);

log.info(‘# 2 executando: var task = getValue(\\‘WKNumState\\’);’);var task = getValue(‘WKNumState’);,log.info(‘# 4 validando o IF (task == 5)’);if(task == 5){log.info(‘# 4 executando bloco IF (task == 5)’);,log.info(‘# 5 validando o IF (hAPI.getCardValue(\\‘motivo\_devolucao\\’) == \\‘8\\’)’);if(hAPI.getCardValue(‘motivo\_devolucao’) == ‘8’){log.info(‘# 5 executando bloco IF (hAPI.getCardValue(\\‘motivo\_devolucao\\’) == \\‘8\\’)’);,log.info(‘# 6 executando: var anexos = hAPI.listAttachments();’);var anexos = hAPI.listAttachments();,log.info(‘# 7 validando o IF (anexos.size() == 0)’);if(anexos.size() == 0){log.info(‘# 7 executando bloco IF (anexos.size() == 0)’);log.info(‘# 7 executando: throw \\‘Inserir anexo da autorização\\’;’); throw ‘Inserir anexo da autorização’;;\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000log.info(‘# 7 finalizando bloco IF ((anexos.size() == 0))’);};,log.info(‘# 8 finalizando bloco IF ((hAPI.getCardValue(\\‘motivo\_devolucao\\’) == \\‘8\\’))’);};,log.info(‘# 9 finalizando bloco IF ((task == 5))’);},log.info(‘# 10 saindo da função beforeTaskSave’);}

ERROR

2:08:58 PM - \[com.datasul.technology.webdesk.workflow.engine.WorkflowEngine\] (default task-5622) Não foi possível compilar os scripts para customização com.datasul.technology.webdesk.workflow.customization.WorkflowCustomizationImpl.: com.datasul.technology.webdesk.workflow.customization.WorkflowCustomizationException: Não foi possível compilar os scripts para customização com.datasul.technology.webdesk.workflow.customization.WorkflowCustomizationImpl.

código do beforeTask:
function beforeTaskSave(colleagueId, nextSequenceId, userList) {
var task = getValue(‘WKNumState’);

if (task == 5) {
if (hAPI.getCardValue(‘motivo\_devolucao’) == ‘8’) {
var anexos = hAPI.listAttachments();
if (anexos.size() == 0) throw ‘Inserir anexo da autorização’;
}
}
}

Mesmo alterando o script apenas para log.info, e convertendo a solicitação do processo, não está dando certo.

Poderiam me ajudar por gentileza?

---

## Resposta #1 ✅ RESPOSTA ACEITA

**venturelli** (@venturelli) — 29/08/2024, 15:32

Pode ser que foi um erro aqui na hora de colar, mas está com as aspas incorretas. Use aspas duplas pra evitar falhas. E parece ter problema no throw.

Faça um teste simples digitando o código totalmente no navegador, sem usar nenhuma IDE. tente também evitar a omissão de chaves.

```auto
function beforeTaskSave(colleagueId, nextSequenceId, userList) {
  var task = getValue("WKNumState");
  if (task == 5) {
    if (hAPI.getCardValue("motivo_devolucao") == ‘8’) {
      var anexos = hAPI.listAttachments();
      if (anexos.size() == 0) {
         throw "Inserir anexo da autorização";
      }
    }
  }
}
```

---
