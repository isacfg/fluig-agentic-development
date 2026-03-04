# Qual o eventos de processo(workflow) para ativar um campo de formulário em uma determinada atividade?

> **Fonte:** [https://fluiggers.com.br/t/qual-o-eventos-de-processo-workflow-para-ativar-um-campo-de-formulario-em-uma-determinada-atividade/1217](https://fluiggers.com.br/t/qual-o-eventos-de-processo-workflow-para-ativar-um-campo-de-formulario-em-uma-determinada-atividade/1217)
> **Categoria:** Sem categoria
> **Criado em:** 09/08/2022, 08:59
> **Visualizações:** 1090 | **Likes:** 2 | **Respostas:** 12

---

## Pergunta original

**marley.andrade** (@marley.andrade) — 09/08/2022, 08:59

Bom dia,
Preciso que um campo do formulário aparece somente em uma determinada atividade no processo.

Grata

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 09/08/2022, 14:34

Normalmente faço isso no displayFields, mas é evento de formulário.

```javascript
function displayFields(form, customHTML) {
    var atividadeAtual = parseInt(getValue("WKNumState"));

    if (atividadeAtual == 5) {
        form.setEnabled("metaIndicador", false);
    }

}
```

---

## Resposta #2

**marley.andrade** (@marley.andrade) — 12/08/2022, 11:50

Bruno, obrigada pelo retorno
E o enableFields como usar?

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 18/08/2022, 09:30

Sinceramente não cheguei a usar o evento enableFields. Eu já faço tudo no evento displayFields pra não ter retrabalho.

---

## Resposta #4

**marley.andrade** (@marley.andrade) — 18/08/2022, 13:35

Obrigada, Bruno. Deu certo.

Grata.

---

## Resposta #5

**joaopretti** (@joaopretti) — 28/07/2023, 19:20

Olá bruno, pode me ajudar com esta duvida, por favor?

---

## Resposta #6

**Bruno Gasparetto** (@Bruno_Gasparetto) — 28/07/2023, 22:45

[@joaopretti](/u/joaopretti) , eu costumo usar exatamente como comentei aqui, no evento `displayFields`. Inclusive no exemplo eu desabilito um campo pra não permitir edição quando estou na atividade de id 5 do processo.

tem como usar o método `form. setVisible` e/ou `form.setVisibleById` se quiser ocultar.

---

## Resposta #7

**joaopretti** (@joaopretti) — 28/07/2023, 22:56

Como eu descubro qual é o ID do processo?

---

## Resposta #8

**joaopretti** (@joaopretti) — 28/07/2023, 22:57

Você utiliza discord ou telegram pra gente trocar ideia sobre o fluig? :smiley:

---

## Resposta #9

**Bruno Gasparetto** (@Bruno_Gasparetto) — 28/07/2023, 23:56

O ID/Número da Atividade você vê no editor de diagrama no Eclipse.

![image](https://fluiggers.com.br/uploads/default/original/2X/1/1e47e59094726b259d8c7df63def5dec30b3d193.png)

Você fez os cursos de Fluig no Fluig Academy? É bom pegar uma boa base do básico que eles ensinam lá.

---

## Resposta #10

**joaopretti** (@joaopretti) — 28/07/2023, 23:58 | ❤️ 1

Fiz os crusos sim!!! mas acho que eles nao mostram o ID, ai fiquei meio perdido como vê rsrsrs, vou tentar adequar a função que vc fez ali em cima com esse setvisible ai

---

## Resposta #11

**Bruno Gasparetto** (@Bruno_Gasparetto) — 29/07/2023, 00:13

O método `setVisible` só faz um `style="display: none"` no elemento.

Um exemplo:

```javascript
/**
 * Exibe os campos de acordo com a Atividade
 *
 * @param {FormController} form
 * @param {customHTML} customHTML
 */
function displayFields(form, customHTML) {
    var isEditingForm = (form.getFormMode() == "ADD" || form.getFormMode() == "MOD");
    var atividadeAtual = parseInt(getValue("WKNumState"));
    var atividades = atividadesEmisCapTec();

    hideAllPanels(form);
    disableAllFields(form);

    // Iniciando uma solicitação
    if (isEditingForm && (form.getFormMode() == "ADD" || atividadeAtual == atividades.ATIVIDADE_INICIO)) {
        var usuario = fluigAPI.getUserService().getCurrent();
        var gerenteNome = "";
        var unidadeNome = "";

        try {
            var usuarioRmDados = getUserRmData(usuario.getLogin());
            var gerenteDados = getUserFluigData(usuarioRmDados.gerenteLogin);
            gerenteNome = gerenteDados.nome;
            gerenteMatricula = gerenteDados.id;
            unidadeNome = usuarioRmDados.unidadeNome;
        } catch (error) {
            gerenteNome = "";
            gerenteMatricula = "";
            unidadeNome = "";
        }

        form.setValue("data_solicitacao", pegaDataAtual());
        form.setValue("solicitante_matricula", usuario.getCode());
        form.setValue("solicitante_nome", usuario.getFullName());
        form.setValue("solicitante_unidade", unidadeNome);
        form.setValue("gerente_nome", gerenteNome);
        form.setValue("gerente_matricula", gerenteMatricula);

        form.setVisibleById("parecer_qualidade_obs_row", false);
        form.setVisibleById("parecer_escopo_obs_row", false);
        form.setVisibleById("parecer_prazo_obs_row", false);
        form.setVisibleById("parecer_responsabilidade_obs_row", false);
        form.setVisibleById("parecer_conduta_obs_row", false);

        setEnableRequestFields(form, true);
        setEnableTechnicalAdviceFields(form, true);

        return;
    }

    if (atividadeAtual == atividades.ATIVIDADE_GERENTE_APROVAR_SOLICITACAO) {
        setEnableManagerApprovalFields(form, true);
        setVisibilityManagerApprovalPanel(form, true);

        if (isEditingForm) {
            form.setValue("aprovacao_gerente", "");
            customHTML.append('<script>$(configuraEventosAprovacaoGerente);</script>');
        }

        return;
    }

    if (atividadeAtual == atividades.ATIVIDADE_CORRIGIR_SOLICITACAO) {
        setEnableTechnicalAdviceFields(form, true);
        setVisibilityManagerApprovalPanel(form, true);
        form.setEnabled("data_entrega", true);

        if (isEditingForm) {
            customHTML.append('<script>$(function () { configuraEventosDadosSolicitacao(); configuraEventosParecerTecnico(); });</script>');
        }

        return;
    }
    // ...
}
```

Eu acabo criando funções para desabilitar os campos de acordo com os painéis/agrupamentos que faço no formulário. Exemplo:

```javascript
/**
 * Habilita/Desabilita os campos da Aprovação UAD
 *
 * @param {FormController} form Formulário
 * @param {boolean} enabled Se true habilita os campos, caso contrário são desabilitados
 */
function setEnableUadApprovalFields(form, enable) {
    form.setEnabled("analise_uad", enable);
    form.setEnabled("analise_uad_justificativa", enable);
}

/**
 * Exibe/Oculta paineil de aprovação da Unidade Administrativa
 *
 * @param {FormController} form
 * @param {boolean} visible
 */
function setVisibilityUadApprovalPanel(form, visible) {
    form.setVisibleById("panel_analise_uad", visible);
    form.setVisibleById("analise_uad_justificativa_row", form.getValue("analise_uad") == "reprovado");
}
```

E pra facilitar acessar as Atividades, em ter que ficar jogando números mágicos no código, faço uma função que me retorna os números das atividades pra ir utilizando nas condições.

```javascript
/**
 * Atividades do Processo
 *
 */
function atividadesEmisCapTec() {
    return {
        ATIVIDADE_INICIO: 5
      , ATIVIDADE_GERENTE_APROVAR_SOLICITACAO: 50
      , ATIVIDADE_CORRIGIR_SOLICITACAO: 55
      , ATIVIDADE_UAD_ANALISAR_SOLICITACAO: 6
      , ATIVIDADE_EMITIR_PARECER_JURIDICO: 12
      , ATIVIDADE_SELECIONAR_REPRESENTANTE: 58
      , ATIVIDADE_VALIDAR_MINUTA: 16
      , ATIVIDADE_APROVAR_MINUTA: 18
      , ATIVIDADE_CORRIGIR_MINUTA: 24
      , ATIVIDADE_COLETAR_ASSINATURA: 22
      , FIM_REPROVADO_UAD: 10
      , FIM_REPROVADO_JURIDICO: 41
      , FIM_REPROVADO_SOLICITANTE: 46
  };
}
```

---

## Resposta #12

**joaopretti** (@joaopretti) — 29/07/2023, 14:38

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/bruno_gasparetto/48/68_2.png) Bruno\_Gasparetto:
>
> > `setVisible`

Estou tentando entender o seu codigo, me diga uma coisa:
![image](https://fluiggers.com.br/uploads/default/original/2X/8/8182e0b2b9b25acd42cd2d549099d198fdf169b5.png)
aqui entre parênteses, esse nome que vc da é o nome do processo?
pq vc coloca \_?

---

## Resposta #13

**Bruno Gasparetto** (@Bruno_Gasparetto) — 29/07/2023, 15:14 | ❤️ 1

Sobre o evento `displayFields`
[https://tdn.totvs.com/pages/releaseview.action?pageId=270924158#EventosdeFormulário-displayFields](https://tdn.totvs.com/pages/releaseview.action?pageId=270924158#EventosdeFormul%C3%A1rio-displayFields)

Sobre os métodos que usei:
[https://tdn.totvs.com/pages/releaseview.action?pageId=662892312](https://tdn.totvs.com/pages/releaseview.action?pageId=662892312)

---

## Resposta #14

**joaopretti** (@joaopretti) — 31/07/2023, 11:04

Consegui usando: `function displayFields(form, customHTML) { form.setVisible("campoA", false); form.setVisibleById("linha___1", false); }`

porem preciso desativar um checkbox, mas nao está indo com esse tipo de função, preciso que quando chegue neste demarcado em vermelho:
![image](https://fluiggers.com.br/uploads/default/original/2X/b/b419a18f020cbe3f96e66a1c611fe92e83c5f3ed.png)
fique inativo, e apenas na aprovação de solicitaçao fique ativo, mas nao estou conseguindo desabilitar o check box

---

## Resposta #15

**joaopretti** (@joaopretti) — 01/08/2023, 12:11

Funcionou bruno, fiz um outro metodo de validação mas deu certo.

---
