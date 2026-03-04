# wdkAddChild em uma div

> **Fonte:** [https://fluiggers.com.br/t/wdkaddchild-em-uma-div/3207](https://fluiggers.com.br/t/wdkaddchild-em-uma-div/3207)
> **Categoria:** Formulários
> **Tags:** `form`
> **Criado em:** 19/03/2025, 12:01
> **Visualizações:** 192 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Rahyan Ramos** (@Ramos) — 19/03/2025, 12:01

Olá, pessoal!

Estou desenvolvendo um formulário no Fluig para cadastrar **múltiplos colaboradores** dinamicamente — ou seja, permitir que o usuário clique em “**Adicionar Colaborador**” e um novo bloco de campos (nome, matrícula, RG, função etc.) seja replicado abaixo do anterior.

**O que já tentei**

-   Usei um `<div id="dadosColabs" name="tbColaboradores">` contendo todos os campos de um colaborador;
-   Adicionei um botão que chama `wdkAddChild('tbColaboradores')`, mas ele **não está clonando** o bloco de campos como esperado.

**Minhas dúvidas**

1.  **Pai × Filho:** É possível usar esse recurso para replicar um conjunto de campos estruturados em `<div>` (várias linhas e colunas), ou ele só funciona para tabelas simples (linhas e colunas)?
2.  **Uso do wdkAddChild():** É viável utilizá‑lo para clonar toda a `<div>` de colaboradores? Se sim, como devo organizar corretamente os atributos `name` e `id` de cada campo para que o Fluig reconheça os novos registros?
3.  **Alternativas em JS/Fluig API:** Caso o `wdkAddChild()` não seja recomendado para esse caso, qual seria a abordagem padrão (e mais simples) para adicionar dinamicamente blocos de campos no formulário?

**Código atual**

```auto
<div id="dadosColabs" name="tbColaboradores">
  <!-- Campos do colaborador -->
</div>

<button type="button" class="btn btn-primary" onclick="wdkAddChild('tbColaboradores')">
  Adicionar Colaborador
</button>
```

Agradeço qualquer exemplo de implementação, dica de configuração ou indicação de documentação que ajude a resolver esse cenário!

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 19/03/2025, 12:52 | ❤️ 1

Pode usar uma div, sem problemas.

![image](https://fluiggers.com.br/uploads/default/optimized/2X/d/dc817538d90b00117901521e02edc799b4f3ad4c_2_690x324.png)

Você precisa ter ao menos 1 linha na `thead` com uma coluna válida e no `tbody` coloca a `div` dentro de um `td`.

Exemplo de como fiz essa tabela:

```html
<div class="panel panel-primary" id="tabela_rateio_panel">
    <div class="panel-heading">
        <h2 class="panel-title">Tabela de Rateio</h2>
    </div>
    <div class="panel-body">
        <div class="row">
            <div class="form-group col-md-6">
                <label for="responsavel_tabela">Responsável pela Tabela de Rateio</label>
                <input type="text" class="form-control" name="responsavel_tabela" id="responsavel_tabela" readonly>
            </div>
            <div class="form-group col-md-3">
                <label for="tabela_data">Data da Tabela</label>
                <input type="text" class="form-control" name="tabela_data" id="tabela_data" readonly>
            </div>
        </div>

        <div class="row" id="responsavel_percentual_row">
            <div class="form-group col-md-6">
                <label for="responsavel_percentual">Responsável pelos Percentuais</label>
                <input type="text" class="form-control" name="responsavel_percentual" id="responsavel_percentual" readonly>
            </div>
            <div class="form-group col-md-3">
                <label for="percentual_data">Data dos Percentuais</label>
                <input type="text" class="form-control" name="percentual_data" id="percentual_data" readonly>
            </div>
        </div>

        <h3>Itens do Rateio</h3>

        <table tablename="tabelaRateio" id="tabelaRateio" noaddbutton="true" nodeletebutton="true" class="table table-condensed tableItems">
            <thead>
                <tr>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div class="panel panel-primary">
                            <div class="panel-body">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Contrapartida</label>
                                            <input type="text" class="form-control" name="rat_contrapartida" id="rat_contrapartida">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Visibilidade Institucional</label>
                                            <input type="text" class="form-control" name="rat_visibilidade" id="rat_visibilidade">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label>Quantidade</label>
                                            <input type="text" class="form-control" name="rat_quantidade" id="rat_quantidade" mask="#00.000.000.000.000">
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                        <div class="form-group">
                                            <label>Percentual</label>
                                            <input type="text" class="form-control percent" name="rat_percentual" id="rat_percentual" placeholder="0,00">
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-md-offset-1">
                                        <div class="form-group">
                                            <label>Valor</label>
                                            <input type="text" class="form-control" name="rat_valor" id="rat_valor" readonly>
                                        </div>
                                    </div>
                                    <div class="col-md-1 col-md-offset-2 text-right">
                                        <button type="button" class="btn btn-danger btn-sm action removeRateio" title="Remover Item">
                                            <i class="flaticon flaticon-trash icon-sm" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>

        <p class="action">
            <button id="adicionarRateio" type="button" class="btn btn-success"><i class="flaticon flaticon-add-box icon-sm" aria-hidden="true"></i> Adicionar Item</button>
        </p>

    </div>
</div>
```

E como ficou o JS dos botões de adicionar e remover:

```javascript
$("#tabelaRateio").on("click", ".removeRateio", e => fnWdkRemoveChild(e.currentTarget));
$("#adicionarRateio").on("click", function () {
    const index = wdkAddChild("tabelaRateio");
    $(`#rat_percentual___${index}`).prop("readonly", true);
    MaskEvent.init();
});
```

---
