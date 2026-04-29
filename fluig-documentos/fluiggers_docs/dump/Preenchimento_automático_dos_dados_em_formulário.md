# Preenchimento automático dos dados em formulário

> **Fonte:** [https://fluiggers.com.br/t/preenchimento-automatico-dos-dados-em-formulario/969](https://fluiggers.com.br/t/preenchimento-automatico-dos-dados-em-formulario/969)
> **Categoria:** Formulários
> **Tags:** `form`, `bpm`
> **Criado em:** 17/03/2022, 11:06
> **Visualizações:** 1229 | **Likes:** 2 | **Respostas:** 0

---

## Pergunta original

**Rodolfo Castro e Silva** (@Rodolfo_Silva) — 17/03/2022, 11:06

Bom dia,

eu estive desenvolvendo um formulário simples com processo. Só que estou com um problema que não estou conseguindo resolver sozinho.

Problema:
Tenho 3 input fields que buscam a informação do colaborador com sessão ativa. Pois daí ele só preenche as informações que precisa preencher e não se preocupa com o cabeçalho. Enfim, depois que ele envia, alguns campos que foram preenchidos manualmente são validados e dai é direcionado para aprovação do gestor. Acontece que mesmo depois de enviado e salvo, o formulário continua mudando os dados do cabeçalho, e ai ele pega o nome do usuário atual, data atual e não os dados de quem e quando fez a solicitação.

O que estou fazendo de errado?

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 17/03/2022, 11:41 | ❤️ 2

Você tem que restringir o preenchimento dos dados somente na atividade que precisa de tal preenchimento automático.

Aqui eu faço muito isso no evento displayFields. Segue um exemplo:

```javascript
/**
 * Define os campos que serão ocultados, desabilitados e seus valores iniciais
 *
 * Função executada antes de exibir o formulário.
 *
 * @param {FormController} form
 * @param {customHTML} customHTML
 */
function displayFields(form, customHTML) {
    var ATIVIDADE_INICIO = 1; // ID da primeira atividade de acordo com o seu Workflow

    var activity = parseInt(getValue("WKNumState"));

    // Regras para quando está criando uma solicitação ou terminando de editar a atividade inicial
    if (form.getFormMode() == "ADD" || (form.getFormMode() == "MOD") && activity == ATIVIDADE_INICIO) {
        var user = fluigAPI.getUserService().getCurrent();

        form.setValue("autorNome", user.getFullName());
        form.setValue("autorId", user.getCode());

        // Como as regras são específicas pra essa parte já pode sair da função
        return;
    }

    // regras para as demais situações...
}
```

---

## Resposta #2

**Rodolfo Castro e Silva** (@Rodolfo_Silva) — 17/03/2022, 11:54

Entendi! Muito obrigado.

---
