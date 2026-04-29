# Como esconder mais de um campo com displayfields?

> **Fonte:** [https://fluiggers.com.br/t/como-esconder-mais-de-um-campo-com-displayfields/2772](https://fluiggers.com.br/t/como-esconder-mais-de-um-campo-com-displayfields/2772)
> **Categoria:** Formulários
> **Criado em:** 03/05/2024, 10:15
> **Visualizações:** 287 | **Likes:** 0 | **Respostas:** 2

---

## Pergunta original

**Italo** (@Italo) — 03/05/2024, 10:15

Eu tenho um grande formulário no Fluig divido em 2 quadros. O primeiro é fixo e possui um select, de acordo com esse select o segundo quadro muda dentre 12 variações (os “form” numerados de 1 a 12).

Ao encerrar o processo na plataforma (quando chega na atividade 2) quero que ele mostre APENAS o quadro com o form correspondente à seleção no select e esconda todos os outros. Consegui fazer isso com o form1 normalmente, mas a partir do else if o código não funciona, apenas o if de cima continua funcionando.

```javascript
function displayFields(form,customHTML){
var atividade = parseInt(getValue("WKMnumState"))

var checklist = getValue("checklist");

var indiceAtividadeEspecifica1 = 1;
var indiceAtividadeEspecifica2 = 2;


form.setShowDisabledFields(false);

//Para esconder todos os formulários na atividade 1

if(form.getFormMode() == "ADD" || atividade == indiceAtividadeEspecifica1 && checklist == "vazio"){
        form.setVisibleById("form1", false);
        form.setVisibleById("form2", false);
        form.setVisibleById("form3", false);
        form.setVisibleById("form4", false);
        form.setVisibleById("form5", false);
        form.setVisibleById("form6", false);
        form.setVisibleById("form7", false);
        form.setVisibleById("form8", false);
        form.setVisibleById("form9", false);
        form.setVisibleById("form10", false);
        form.setVisibleById("form11", false);
        form.setVisibleById("form12", false);
}

else {

}

                // MÉTODO PARA ESCONDER OUTROS FORMULARIOS NA ATIVIDADE 2

if(form.getFormMode() == "VIEW" || atividade == indiceAtividadeEspecifica2 && checklist == "almCentral"){


    form.setVisibleById("form2", false);
    form.setVisibleById("form3", false);
    form.setVisibleById("form4", false);
    form.setVisibleById("form5", false);
    form.setVisibleById("form6", false);
    form.setVisibleById("form7", false);
    form.setVisibleById("form8", false);
    form.setVisibleById("form9", false);
    form.setVisibleById("form10", false);
    form.setVisibleById("form11", false);
    form.setVisibleById("form12", false);

}    else if(form.getFormMode() == "VIEW" || (atividade == indiceAtividadeEspecifica2 && checklist == "almoxarifado")){

        form.setVisibleById("form1", false);

        form.setVisibleById("form3", false);
        form.setVisibleById("form4", false);
        form.setVisibleById("form5", false);
        form.setVisibleById("form6", false);
        form.setVisibleById("form7", false);
        form.setVisibleById("form8", false);
        form.setVisibleById("form9", false);
        form.setVisibleById("form10", false);
        form.setVisibleById("form11", false);
        form.setVisibleById("form12", false);
    }

}
```

---

## Resposta #1

**Daniel Sales** (@Daniel_Sales) — 03/05/2024, 10:50

Acredito que o form.getFormMode() == “VIEW” || não pode ser usado no if em cima e em baixo
o if vai sempre entrar no primeiro sempre

---

## Resposta #2

**venturelli** (@venturelli) — 03/05/2024, 15:05

Exatamente o que o [@Daniel\_Sales](/u/daniel_sales) comentou.

O segundo if, o form.getFormMode() == “VIEW” não tem utilidade. E como a solicitação vai estar encerrada, só vai ser exibido via solicitação no modo visualização então jamais vai acontecer o cenário de entrar no segundo if

E sugiro alguns ajustes no código:

```auto
function displayFields(form,customHTML){
    var atividade = parseInt(getValue("WKMnumState"))
    var checklist = getValue("checklist");

    var indiceAtividadeEspecifica1 = 1;
    var indiceAtividadeEspecifica2 = 2;

    // valida se está na atividade ou se está abrindo pela navegação de documentos:
    var finalizou = getValue("WKNumState") == null || atividade = indiceAtividadeEspecifica2;

    form.setShowDisabledFields(false);

    if (atividade == indiceAtividadeEspecifica1 && (form.getFormMode() == "ADD" || form.getFormMode() == "MOD") && checklist == "vazio") {
        // seu código quando todos os itens estão visíveis caso seja necessário
    } else {
        desabilitaTodosOsItens(form);
        switch(checklist) {
            case "almCentral":
                form.setVisibleById("form1", true);
                break;
            case "almoxarifado":
                form.setVisibleById("form2", true);
                break;
            // outros cenários..
        }
    }
}

function desabilitaTodosOsItens(form) {
    form.setVisibleById("form1", false);
    form.setVisibleById("form2", false);
    form.setVisibleById("form3", false);
    form.setVisibleById("form4", false);
    form.setVisibleById("form5", false);
    form.setVisibleById("form6", false);
    form.setVisibleById("form7", false);
    form.setVisibleById("form8", false);
    form.setVisibleById("form9", false);
    form.setVisibleById("form10", false);
    form.setVisibleById("form11", false);
    form.setVisibleById("form12", false);
}
```

Criando a função para desabilitar tudo e depois ativar só o form que deseja ajuda a reduzir código e dá clareza sobre qual div será exibida conforme o valor do checklist.

Lembre-se que o usuário pode salvar a solicitação na tarefa inicial e depois continuar, então é interessante a validação de “ADD” ou “MOD”.

E lembre-se também que o registro de formulário é acessível via navegação de documentos ou mesmo consulta de solicitações, então a ‘atividade’ não vai existir.

Eu não testei o código, sugiro que o faça e teste se acontece o esperado nesses cenários que eu citei.

---

## Resposta #3

**Italo** (@Italo) — 04/06/2024, 07:43

Olá venturelli,
Em seu código, quando finalizamos o processo, ele não mostra nenhum formulário de acordo com o select (apenas o primeiro quadro fixo).
O que poderia ser?

---

## Resposta #4

**venturelli** (@venturelli) — 04/06/2024, 09:09

Pode ser algum erro nesse switch-case, eu não cheguei a validar se o código em si.

Talvez trocar por uma estrutura de if/else-if pra garantir e coloca uns logs pra ver se está passando pelos pontos e os valores dos campos.

Uma coisa que eu reparei é que criei a variável *finalizou* que não usei no if inicial, mas provavelmente não tem relação com o teu erro em si. Pelo que descrevesse eu apostaria mais que o switch-case de fato não funcionou como o esperado.

---
