# Modal de Confirmação ao enviar a solicitação

> **Fonte:** [https://fluiggers.com.br/t/modal-de-confirmacao-ao-enviar-a-solicitacao/2930](https://fluiggers.com.br/t/modal-de-confirmacao-ao-enviar-a-solicitacao/2930)
> **Categoria:** Formulários
> **Tags:** `form`, `modal`
> **Criado em:** 13/08/2024, 11:40
> **Visualizações:** 153 | **Likes:** 5 | **Respostas:** 0

---

## Pergunta original

**Karina Pinheiro** (@Kapinheiro) — 13/08/2024, 11:40 | ❤️ 5

Solução para adicionar um modal de confirmação antes do envio da solicitação para próxima atividade:

```auto
$(document).ready(function () {
	 // Defina o evento de clique no botão Enviar
	parent.$('[data-send]').eq(0).on('click', function(event) {
	    event.preventDefault(); // Impede o comportamento padrão

	    // Desabilita o botão para evitar múltiplos cliques
	    var $button = parent.$('[data-send]').eq(0);
	    $button.prop('disabled', true);

	    // Mostrar o modal de confirmação
	    showConfirmationModal(() => {
	        // Reenvia o evento padrão para que o Fluig possa processar o envio
	        $button.prop('disabled', false); // Reabilita o botão
	        parent.$('[data-send]').eq(0).off('click').trigger('click'); // Dispara o clique novamente
	    }, () => {
	        // Caso o usuário clique em "Não", reabilita o botão
	        $button.prop('disabled', false);
	    });
	});

});

//Função para mostrar o modal de confirmação
function showConfirmationModal(onConfirm, onCancel) {
    // Supondo que você esteja usando o modal padrão do Fluig
    FLUIGC.message.confirm({
        message: 'Você tem certeza que deseja enviar?',
        title: 'Confirmação',
        size: 'small',
        labelYes: 'Sim',
        labelNo: 'Não'
    }, function(result) {
        if (result) {
            onConfirm();
        } else {
            onCancel();
        }
    });
}
```

---
