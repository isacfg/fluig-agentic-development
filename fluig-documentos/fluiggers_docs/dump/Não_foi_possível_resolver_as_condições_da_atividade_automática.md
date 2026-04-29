# Não foi possível resolver as condições da atividade automática

> **Fonte:** [https://fluiggers.com.br/t/nao-foi-possivel-resolver-as-condicoes-da-atividade-automatica/3256](https://fluiggers.com.br/t/nao-foi-possivel-resolver-as-condicoes-da-atividade-automatica/3256)
> **Categoria:** BPM
> **Tags:** `form`, `processo`, `bpm`
> **Criado em:** 23/04/2025, 09:48
> **Visualizações:** 54 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Henrique Maia Cardosa** (@HenriqueMCard) — 23/04/2025, 09:48

Olá, sou estagiário de TI a pouco tempo em uma empresa, e estou trabalhando com Fluig, agora estou em um projeto de um processo:
Fiz o Diagrama e o formulário, porém não estou conseguindo avançar no diagrama, no gateway, sigo o formulário e quando chega na atividade dele, não avança aparece um erro:
Não foi possível resolver as condições da atividade automática

Mais específico eu seleciono uma opção que se Sim deve me levar para uma atividade e se não para outra.

```
<div id="entradaMaterial">
      <div class="panel panel-primary">
        <div class="panel-heading">
          <h3 class="panel-title">Entrada de Material</h3>
        </div>
        <div class="panel-body">
          <div class="row">
            <div class="form-group col-md-4">
              <label for="descricao_material">Nome Material</label>
              <input type="text" name="descricao_material" id="descricao_material" class="form-control">
            </div>
            <div class="form-group col-md-2">
              <label for="data_envio">Data de envio</label>
              <input type="text" name="data_envio" id="data_envio" class="form-control">
            </div>
            <div class="form-group col-md-2">
              <label for="data_recebimento_material">Data de Recebimento</label>
              <input type="text" class="form-control" name="data_recebimento_material" id="data_recebimento_material">
            </div>
          </div>

           <div class="row">
            <div class="form-group col-md-2">
              <label for="valor_orcamento">Valor Orçamento</label>
              <input type="number" name="valor_orcamento" id="valor_orcamento" placeholder="R$" class="form-control">
            </div>
            <div class="form-group col-md-1">
              <label for="orcamento_recebimento">Possui Orçamento?</label>
              <select name="orcamento_recebimento" id="orcamento_recebimento" class="form-control">
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
              </select>
            </div>
          </div>

          <div class="row">
            <div class="form-group col-md-4">
              <label for="recebido">Quem Recebeu</label>
              <input type="text" class="form-control" name="recebido" id="recebido">
            </div>
          </div>

          <div class="row">
            <div class="form-group col-md-6">
              <label for="especificacao">Descrição do Problema</label>
              <textarea class="form-control" rows="3" name="especificacao" id="especificacao" placeholder="Descreva o problema"></textarea>
            </div>
            <div class="form-group col-md-6">
              <label for="anexo">Anexo</label>
              <input type="file" id="anexo" name="anexo" class="form-control">
              <p class="help-block">Anexe uma foto ou documento.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
```

![Captura de tela 2025-04-23 094837](https://fluiggers.com.br/uploads/default/original/2X/7/759e4d268f906b23f93e1c2926a606ca5cd5a41f.png)

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 23/04/2025, 10:04 | ❤️ 1

Não foi possível visualizar a expressão do gateway.

Quando uso campos do formulário eu deixo a expressão básica do gateway pra ele pegar o campo do formulário mesmo ao invés de digitar uma expressão com hAPI.

Outro detalhe, o seu gateway envia para outro gateway quando a expressão 1 é verdadeira, pode ser que o erro esteja nesse próximo gatewawy.

---
