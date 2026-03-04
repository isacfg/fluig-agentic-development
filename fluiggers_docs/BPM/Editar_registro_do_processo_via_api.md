# Editar registro do processo via api

> **Fonte:** [https://fluiggers.com.br/t/editar-registro-do-processo-via-api/3472](https://fluiggers.com.br/t/editar-registro-do-processo-via-api/3472)
> **Categoria:** BPM
> **Criado em:** 14/10/2025, 10:56
> **Visualizações:** 42 | **Likes:** 2 | **Respostas:** 0

---

## Pergunta original

**Daniel Sales** (@Daniel_Sales) — 14/10/2025, 10:56

To tentando editar o formulario de uma solicutação via api sem movimentar apenas editar.

```javascript
FLUIGC.ajax({
                    url: `/ecm-forms/api/v2/cardindex/${kanban.formulariotask}/cards/${task}`,
                    contentType: 'application/json',
                    dataType: 'json',
                    type: 'PUT',
                    data: JSON.stringify(dados),
                    loading: true,
                    success: function (result) {
                        kanban.mtask.remove();
                    },
                    error: function(args) {
                        // Dispara um alerta com os detalhes do erro
                        WCMAPI.failHandler(args, true);
                    }
                });
```

E gerado o seguinte erro:
Unrecognized field “targetState” (class com.fluig.api.cardindex.v2.dto.CardCreateDTO), not marked as ignorable

Alguem sabe o que pode ser?

---

## Resposta #1

**Guilherme Mesquita Rocha** (@gmesquita) — 15/10/2025, 18:20

Boa tarde [@Daniel\_Sales](/u/daniel_sales)!

Me baseei bastante na sua tentativa e cheguei no seguinte resultado:

```javascript
FLUIGC.ajax({

  url: '/ecm-forms/api/v2/cardindex/22/cards/26',

  contentType: 'application/json',

  dataType: 'json',

  type: 'PUT',

  data: JSON.stringify({

    values: [{ fieldId: 'tipo_de_solicitacao', value: 'teste' }]

  }),

  success: function (result) {

    console.log(result);

  },

  error: function (err) {

    console.error('Erro ao atualizar:', err);

  }

});
```

Como não visualizei a sua variável “dados”, suponho que você estava enviando o body de maneira incorreta.

De acordo com a documentação:

![](https://api.fluig.com/latest/swagger/assets/img/favicon-32x32.png) [api.fluig.com](https://api.fluig.com/latest/ecm-forms/swagger-ui/#/Form_records/update)

### [TOTVS Fluig API](https://api.fluig.com/latest/ecm-forms/swagger-ui/#/Form_records/update)

Deve seguir o seguinte formato:

```json
{
  "values": [
    {
      "fieldId": "string",
      "value": "string"
    }
  ]
}
```

Espero ter ajudado.

---

## Resposta #2

**Daniel Sales** (@Daniel_Sales) — 16/10/2025, 09:46 | ❤️ 2

Bom dia,

```auto
Acabei conseguindo era o body errado mesmo por engano estava enviando o body de movimentação ao inves do de edição dai ele reclamava do “targetState” pois ele estava no json. De qualquer forma muito obrigado. rro de principiante kkkkkkk
```

---
