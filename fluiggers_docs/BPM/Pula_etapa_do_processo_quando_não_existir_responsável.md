# Pula etapa do processo quando não existir responsável

> **Fonte:** [https://fluiggers.com.br/t/pula-etapa-do-processo-quando-nao-existir-responsavel/3092](https://fluiggers.com.br/t/pula-etapa-do-processo-quando-nao-existir-responsavel/3092)
> **Categoria:** BPM
> **Criado em:** 17/12/2024, 10:32
> **Visualizações:** 49 | **Likes:** 2 | **Respostas:** 2

---

## Pergunta original

**Fernando Ricardo de Almeida** (@feralm) — 17/12/2024, 10:32

Bo dia tenho um processo que requer aprovação de um gerente, diretor e gerente de RH os responsáveis são atribuídos por campos de formulário (cpfGerente, cpf\_Diretor, cpf\_GerenteRh) mais dependendo do departamento não tem um gerente apenas diretor ao esse ao o campo cpfGerente fica em branco e a etapa é atribuída para o Gestor do processo, gostaria que quando o campo cpfGestor não estivesse preenchido e etapa de gerente fosse pulada indo diretor para o a etapa de aprovação do diretor.

---

## Resposta #1

**Daniel Cabral Santos** (@daniel.cabral) — 20/12/2024, 15:26

Boa tarde!

Talvez você resolva isso de forma simples em um gateway, testando as condições em combinação e direcionando o fluxo para a respectiva aprovação.

---

## Resposta #2

**Fernando Ricardo de Almeida** (@feralm) — 20/12/2024, 16:47

Olá Daniel Obrigado pelo retorno, gostaria de fazer essa validação forma customizada
talvez utilizando em alguma função de script de evento em conjunto, estou testando a função abaixo acho que vai dar certo.

function beforeTaskSave(colleagueId,nextSequenceId,userList){

```
var user = getValue("WKUser");
var numProcesso = getValue('WKNumProces');
var atividadeAtual = getValue("WKNumState");
var proximaAtv = getValue("WKNextState");
var cpfGerente = hAPI.getCardValue("cpfgerente");
var cpfDiretor = hAPI.getCardValue("cpfdiretor");
var tipoSolicitante = hAPI.getCardValue("tiposolicitante");
```

// PROXIMA ATIVIDADE VALIDAÇÃO DO RH (EXCLUSIVEGATEWAY)
// VERIFICA SE EXITE APROVADOR PARA TAREFA CASO NÃO EXISTA PREENCHE CAMPO HIDEN “destinoTarefa” com valor da tarefa de destino
// O CAMPO “destinoTarefa” É VALIDADO NO DIAGRAMA NA ETAPA SEGUINTE “APROVAÇÕES” (EXCLUSIVEGATEWAY)
if (nextSequenceId == 19) {

```
log.info("Entrou na validação da próxima tarefa VALIDAÇÃO DO RH: " + nextSequenceId);

    // VALIDA GERENTE
    if (cpfGerente == "" || tipoSolicitante == "GERENTE") {
        log.info("Entrou tarefa Sem aprovação Gerente !!" + cpfGerente);
        hAPI.setCardValue("destinoTarefa", "DIRETOR"); // seta valor do campo para DIRETOR
    }else{
        log.info("Entrou tarefa Com aprovação Gerente !!" + cpfGerente);
        hAPI.setCardValue("destinoTarefa", "GERENTE"); // seta valor do campo para GERENTE
    }

    // VALIDA DIRETOR
    if (cpfDiretor == "" || tipoSolicitante == "DIRETOR") {
        log.info("Entrou tarefa Sem aprovação Diretor" + cpfDiretor);
        hAPI.setCardValue("destinoTarefa", "OUTRO"); // seta valor do campo para OUTRO
    }else{
        log.info("Entrou tarefa Com aprovação Gerente de RH" + cpfDiretor);
        hAPI.setCardValue("destinoTarefa", "DIRETOR"); // seta valor do campo para DIRETOR
    }

    log.info("Fim da validação da próxima tarefa VALIDAÇÃO DO RH: " + nextSequenceId);

}
```

}

---

## Resposta #3

**venturelli** (@venturelli) — 14/01/2025, 14:00 | ❤️ 1

Esse código tem uma falha ao separar os ifs… nunca o “destinoTarefa” vai ficar com o valor “GERENTE” da forma como foi feito, Vai ser “OUTRO” ou “DIRETOR” sempre.

A dica do [@daniel.cabral](/u/daniel.cabral) é realmente mais interessante, consegue resolver sem nenhuma codificação de forma mais elegante. Uma exemplo de como ficaria, se eu entendi mais ou menos a sua lógica.

Por padrão, se não atender nenhuma condição, vai para atividade aprovação gerente (fluxo padrão).

![image](https://fluiggers.com.br/uploads/default/optimized/2X/6/668245862fb0078949e8c87e2bfbcabae42b3bab_2_553x500.png)

---

## Resposta #4

**Fernando Ricardo de Almeida** (@feralm) — 14/01/2025, 14:22 | ❤️ 1

Obrigado pelo retorno Gabriel deu certo aqui!

---
