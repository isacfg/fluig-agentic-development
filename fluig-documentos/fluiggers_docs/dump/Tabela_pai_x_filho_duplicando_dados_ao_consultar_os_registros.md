# Tabela pai x filho duplicando dados ao consultar os registros

> **Fonte:** [https://fluiggers.com.br/t/tabela-pai-x-filho-duplicando-dados-ao-consultar-os-registros/380](https://fluiggers.com.br/t/tabela-pai-x-filho-duplicando-dados-ao-consultar-os-registros/380)
> **Categoria:** Formulários
> **Criado em:** 19/04/2021, 10:54
> **Visualizações:** 1051 | **Likes:** 3 | **Respostas:** 3

---

## Pergunta original

**Daniel ** (@daniel_fmartins) — 19/04/2021, 10:54

Tenho uma tabela pai x filho:

```
<thead>

                                            <tr>

                                                <td width="2000"><b>Pergunta</b></td>

                                                <td width="1000"><b>Resposta</b></td>

                                            </tr>

                                        </thead>

                                        <tbody>

                                            <div class="row">

                                                <tr>

                                                    <td width="2000">

                                                        <input type="text" class="form-control" name="nm_pergunta"

                                                            id="nm_pergunta">

                                                    </td>

                                                    <td width="1000">

                                                        <input type="text" class="form-control" name="nm_resposta"

                                                            id="nm_resposta">

                                                    </td>

                                                </tr>

                                            </div>

                                        </tbody>

                                    </table>
```

e ao carregar a página (readyFn) eu insiro filhos nessa tabela através de dados que vem de um dataset:
…
for(var i = 0; i < arr.length; i++){

```
var obj = arr[i];



        addTableParam('tb_anamnese', 'nm_pergunta', obj[1]);

    }

}

function addTableParam(table, field, param) {

    var indexAdd = wdkAddChild(table);

    $(`#${field}___` + indexAdd).val(param);
```

}

Ao abrir o formulário ele carrega normalmente pra preecher. Porém ao consultar o registro de depois de salvo ele trás as linhas duplicadas. Como se fosse uma linha com o valor correto e outra linha com um valor em branco, sempre duplicando a quantidade de linhas. Alguém conhece essa situação?

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 20/04/2021, 10:43 | ❤️ 1

Você sempre executa essa função ao carregar a página? Porque se for assim ao visualizar o formulário em uma etapa futura ele vai trazer os registros salvos + os itens que você acabou de adicionar pelo script.

Um jeito é no evento **displayFields** você usar a variável **customHTML** pra informar no seu front-end que está só visualizando o formulário e por isso não é pra executar a função que adiciona os elementos na pai filho.

---

## Resposta #2

**Daniel ** (@daniel_fmartins) — 20/04/2021, 10:57

é exatamente isso que ocorre. Eu consigo atráves do customHTML definir para que uma função não seja executada ou preciso definir uma outra função para que limpe os valores vazios que foram inseridos?

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 20/04/2021, 11:04 | ❤️ 1

O que você pode fazer, por exemplo, é o seguinte.

No **displayFields**:

```javascript
function displayFields(form, customHTML) {
    var activity = parseInt(getValue("WKNumState"));
    var addElements = "false";

    // Se o formulário estiver no modo Adição ou for a primeira atividade do processo
    if (form.getFormMode() == "ADD" || activity == 1) {
        addElements = "true";
    }

    customHTML.append("<script>const addElements = " + addElements + ";</script>");
}
```

Aí no seu script do formulário, no front-end, você só executa a função de adicionar os itens na pai filho se a constante **addElements** for true;

---

## Resposta #4

**Daniel ** (@daniel_fmartins) — 20/04/2021, 11:08 | ❤️ 1

Fantástico, resolveu perfeitamente. Grato.

---

## Resposta #5

**system** (@system) — 21/04/2021, 03:09

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
