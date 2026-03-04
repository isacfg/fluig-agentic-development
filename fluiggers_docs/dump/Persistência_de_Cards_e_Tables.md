# Persistência de Cards e Tables

> **Fonte:** [https://fluiggers.com.br/t/persistencia-de-cards-e-tables/3526](https://fluiggers.com.br/t/persistencia-de-cards-e-tables/3526)
> **Categoria:** Formulários
> **Tags:** `form`, `processo`, `bpm`
> **Criado em:** 17/12/2025, 08:31
> **Visualizações:** 50 | **Likes:** 12 | **Respostas:** 4

---

## Pergunta original

**Leonardoo** (@Leonardoo) — 17/12/2025, 08:31 | ❤️ 1

Bom dia! Estou procurando alguma referencia de estudo sobre **Tables** e **Cards**. Lendo sobre formulários notei que existe certo padrão de construção nas **tags HTML** para que os dados sejam persistido, mas não consegue achar nada falando sobre como fazer as tabelas dinâmicas. segue as seguintes dúvidas:

1 - Como eu devo construir uma tabela dinâmica?
2 - É possível fazer isso também com o componente do Fluig Style Cards?

```xml
<div class="panel panel-primary">
    <div class="panel-heading">
        Cotação dos Produtos
    </div>
 <div class="panel-body">
    <div class="row">
        <table class="table table-striped">
        </table>
    </div>
 </div>
</div>
```
```xml
<div class="card">
    <div class="card-body">
        ...
    </div>
</div>
```

Obs: Em alguns testes que fiz ao adicionar os cards eles “apareciam“ apenas no preenchimento do formulário após salvo eles não eram persistidos.

---

## Resposta #1

**Igor Rodrigues** (@fluigor.com.br) — 17/12/2025, 09:32 | ❤️ 2

Bom dia Leonardo,

Atualmente o conceito de Tabela dinâmica no Fluig é chamado de [PaixFilho](https://tdn.totvs.com/pages/releaseview.action?pageId=668198714#Personaliza%C3%A7%C3%A3odeformul%C3%A1riosNovavers%C3%A3o-PaixFilho). (mais detalhes no link)
Como sabemos, todo formulário criado no FLUIG, vira uma tabela! quando um formulário possui campos(tabelas) dinâmicas, uma tabela adicional é criada que utilizará como indice a coluna documentID.

tudo que tu precisa saber sobre TABELAS NO FLUIG, está no link abaixo

[https://tdn.totvs.com/pages/releaseview.action?pageId=668198714#PersonalizaçãodeformuláriosNovaversão-PaixFilho](https://tdn.totvs.com/pages/releaseview.action?pageId=668198714#Personaliza%C3%A7%C3%A3odeformul%C3%A1riosNovavers%C3%A3o-PaixFilho)

abraçoes

---

## Resposta #2

**Bruno Gasparetto** (@Bruno_Gasparetto) — 17/12/2025, 09:37 | ❤️ 2

Quando você exporta um formulário para o Fluig o servidor faz um parse do seu HTML e todos os inputs, select e textarea que possuem a propriedade name são identificados (se não tiver o name o Fluig dará erro na exportação). Então o servidor cria uma tabela, dinamicamente, no banco de dados com todos esses campos identificados, e de acordo com o tipo do campo ele cria como varchar ou text no banco de dados.

Então os únicos dados persistidos no banco são os identificados no HTML no momento que você exporta o formulário. Por isso os campos criados dinamicamente por JS não são persistidos.

A única exceção para os campos dinamicamente criados é utilizando o recurso “Tabela Pai Filho” que o Fluig possuí. Com ele podemos criar uma tabela que pode crescer dinamicamente com campos já estabelecidos na primeira linha. Embora seja uma tabela nada impede que use só uma TD e nela faça um layout personalizados, ao invés de só trabalhar com o visual de uma tabela.

Por exemplo, eu tenho uma tabela Pai Filho com esse layout:

![image](https://fluiggers.com.br/uploads/default/optimized/2X/4/4b8d4b550fc563f172f47757f0780e9450e921c8_2_617x500.png)

Uma limitação “chata” da Tabela Pai Filho é que não existe o “Neto”. Então, nativamente, não tem como você ter mais uma tabela dinâmica dentro de outra tabela dinâmica.

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 17/12/2025, 16:00 | ❤️ 2

Peguei um caso mais simples.

O HTML desse trecho do formulário:

```html
<div class="panel panel-primary" id="acompanhamento_panel">
    <div class="panel-heading">
        <h2 class="panel-title">Histórico de Acompanhamento</h2>
    </div>
    <div class="panel-body">
        <table tablename="tableAcompanhamento" id="tableAcompanhamento" noaddbutton="true" nodeletebutton="true" class="table table-condensed tableItems">
            <thead><tr><th></th></tr></thead>
            <tbody>
                <tr>
                    <td>
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h3 class="panel-title"><span class="fluigicon fluigicon-user fluigicon-md"></span> Acompanhamento</h3>
                            </div>
                            <div class="panel-body">
                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label>Data</label>
                                            <input type="text" class="form-control" name="acompanhamento_data" id="acompanhamento_data" readonly>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="required">Ações Realizadas</label>
                                    <textarea class="form-control" name="acompanhamento" id="acompanhamento" rows="10"></textarea>
                                </div>
                                <p class="action">
                                    <button type="button" class="btn btn-danger btnRemove">Remover</button>
                                 </p>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>

        <p class="action">
            <button id="btnAddInfo" type="button" class="btn btn-success">Incluir</button>
        </p>
    </div>
</div>
```

Mas aí fica uma borda chata atrapalhando, então coloco esse CSS pra remover a borda:

```css
#tableAcompanhamento th, #tableAcompanhamento td {
    border: none !important;
}
```

E por usar botão de Adicionar/Remover customizado preciso fazer as funções `wdkAddChild` e `fnWdkRemoveChild` no JS carregado no formulário.

```javascript
$(function () {
    $("#btnAddInfo").on("click", function () {
        const index = wdkAddChild("tableAcompanhamento");
        $(`#acompanhamento_data___${index}`).val(moment().format(completeDateFormat));
    });

    $("#tableAcompanhamento").on("click", ".btnRemove", e => fnWdkRemoveChild(e.currentTarget));
});
```

Normalmente coloco essas classes `action` nos elementos pais dos botões pra facilitar ocultar os botões quando estamos em atividades que não deve permitir inserir/remover.

---

## Resposta #4

**Daniel Cabral Santos** (@daniel.cabral) — 23/12/2025, 10:45 | ❤️ 3

Pra fazer o neto faço uma gambiarra com limitações, e pra ficar seguro você precisa saber o tamanho máximo de campo que seu banco de dados suporta. Uso um campo do filho pra guardar a estrutura do dado dos netos em alguma estrutura (normalmente JSON). Também daria pra criar um segundo pai-filho oculto e ajustar a visualização deles usando campos-chave para manter o vínculo.

---

## Resposta #5

**Bruno Gasparetto** (@Bruno_Gasparetto) — 24/12/2025, 09:55 | ❤️ 2

Eu ia fazer a solução do json uma vez, porém entre as informações precisava da data inicial e final do item e usaria isso num filtro. Então a solução do json me traria alguns problemas. Nesse caso fiz com outra pai filho e vinculando os itens “netos” a um uuid na filho.

Dependendo da situação a opção do json atenderia.

Se o seu banco de dados possuí o tipo json você pode alterar a tabela e aproveitar um pouco mais de performance para algumas consultas.

---
