# Widgets - Binding de eventos

> **Fonte:** [https://fluiggers.com.br/t/widgets-binding-de-eventos/793](https://fluiggers.com.br/t/widgets-binding-de-eventos/793)
> **Categoria:** WCM
> **Criado em:** 25/11/2021, 12:01
> **Visualizações:** 899 | **Likes:** 3 | **Respostas:** 0

---

## Pergunta original

**Danilo Marinho** (@danilo.marinho) — 25/11/2021, 12:01

Dentro do objeto bindings temos duas propriedades onde podemos registrar eventos: local e global. Qual a diferença dos eventos registrados em cada uma delas?

bindings: {
local: {
‘execute’: \[‘click\_executeAction’\]
},
global: {
}
},

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 25/11/2021, 12:36 | ❤️ 2

Conceitualmente não sei explicar o que o Fluig faz, mas na prática já usei o binding global para eventos em elementos que são criados dinamicamente pelo JS. Meu único caso foi para pegar eventos disparados por botões de Modais criadas com o FLUIGC.modal.

Exemplo:

```javascript
bindings: {
    local: {
        // Ouve o botão de devolução na Widget
        "give-back": ["click_giveBack"],
    },
    global: {
        // Ouve o botão de ação da Modal na Widget
        // Se não for Global ele não consegue pegar o evento disparado pela modal
        "giveback-modal": ["click_modalGiveback"]
    }
},

// Essa função Cria a Modal e no botão de ação de Devolver a Pauta faz um bind
giveBack: function () {
       widgetElements.giveBackModal = FLUIGC.modal({
           title: "Justificativa de Devolução",
           content: `<div class="form-group">
                <label for="${widgetElements.giveBackModalFeedbackId}">Explique o motivo da devolução da pauta</label>
                <textarea class="form-control" rows="5" id="${widgetElements.giveBackModalFeedbackId}"></textarea>
            </div>`,
           size: "large",
           actions: [
                {
                    label: `Devolver Pauta${totalSelected > 1 ? "s" : ""}`,
                    bind: "data-giveback-modal",
                },
                {
                    label: "Cancelar",
                    autoClose: true,
                }
           ]
    });
},
```

---

## Resposta #2 ✅ RESPOSTA ACEITA

**Marcos DePeder** (@Marcos_DePeder) — 25/11/2021, 17:56 | ❤️ 1

Levando em consideração que uma widget gera uma instância (instanceId), que a gente consegue rastrear pelo DOM, o binding local fica restrito a esta instância da widget, seus filhos no DOM, e só. Isso é importante quando várias instâncias “irmãs” precisam ser gerenciadas sem conflitar com as outras, como numa lista, seletores com mesmas características, porém, em outros contextos da página. O controle de efeitos colaterais no local é mais fácil de gerenciar.
O binding global é como no caso citado pelo [@Bruno\_Gasparetto](/u/bruno_gasparetto), quando você cria modal e precisa refletir uma ação “fora” da instância desse modal, como uma instância “irmã”, ou “pai” (novamente, olhando pela estrutura do DOM. E aqui, no global, é preciso tomar mais cuidado para não ter efeitos colaterais inesperados, em especial quando você gerencia uma página muito complexa.
Resumindo em termos mais simples : binding local “olha para dentro” da instância e binding global “olha para fora” da instância.

---
