# Excluir no datatable

> **Fonte:** [https://fluiggers.com.br/t/excluir-no-datatable/348](https://fluiggers.com.br/t/excluir-no-datatable/348)
> **Categoria:** Formulários
> **Tags:** `form`
> **Criado em:** 13/04/2021, 08:40
> **Visualizações:** 725 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Marcella Tsangos** (@marcella_tsangos) — 13/04/2021, 08:40

Bom dia, pessoal.

Possuo um datatable em um modal que lista produtos.
Quando o botão de adicionar é acionado, o produto é adicionado na tabela Pai x Filho.
Gostaria de fazer a mesma lógica para o botão de excluir, ou seja, excluir na Pai x Filho, mas não estou conseguindo referenciar.

Alguém poderia ajudar?

```auto
$('[data-delete-promo]').on('click', function (e) {
  let index = myTable.selectedRows();
  let selected = myTable.getRow(index);

  if (index.length > 0) {
    for (var i = 0; i <= index.length; i++) {

      myTable.removeRow(myTable.selectedRows()[0]); // remove do datatable
    }

    showAlert(`O produto <strong>${selected.descricao}</strong> foi removido.`, 'success');

    $($(this)).prop("disabled", true);
    // deleteRowCanal(selected);
  }
});

// Função que utilizo para excluir na tabela pai x filho
function deleteRowCanal(oElement) {
  let campoRemovido = $(oElement).closest('tr').find("input[id^='normalDescProduto']").val();
  console.log('### campoRemovido: ' + campoRemovido);
  fnWdkRemoveChild(oElement);
}
```

---

## Resposta #1

**Daniel Cabral Santos** (@daniel.cabral) — 13/04/2021, 10:05

Bom dia!

Acredito que o código não esteja capturando o elemento correto pra exclusão - como vem o campoRemovido no deleteRowCanal()?

---

## Resposta #2

**Marcella Tsangos** (@marcella_tsangos) — 13/04/2021, 10:13

```auto
function deleteRowCanal(oElement) {
  let campoRemovido = $(oElement).closest('tr').find("input[id^='normalDescProduto']").val();
  console.log('### oElement: ' + oElement);
  console.log('### campoRemovido: ' + campoRemovido);
  fnWdkRemoveChild(oElement);
}
```

Se eu excluir direto pela pai x filho:

```auto
### oElement: [object HTMLButtonElement]
### campoRemovido: Leite Po Itambe Inst. Integral 400g Sc - (550000)
```

Se eu excluir pelo datatable:

```auto
### oElement: [object Object]
### campoRemovido: undefined
```

---
