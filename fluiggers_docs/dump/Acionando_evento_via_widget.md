# Acionando evento via widget

> **Fonte:** [https://fluiggers.com.br/t/acionando-evento-via-widget/701](https://fluiggers.com.br/t/acionando-evento-via-widget/701)
> **Categoria:** Widgets
> **Criado em:** 04/10/2021, 17:08
> **Visualizações:** 1321 | **Likes:** 2 | **Respostas:** 1

---

## Pergunta original

**Daniel ** (@daniel_fmartins) — 04/10/2021, 17:08 | ❤️ 1

Galera, surgiu uma necessidade e estou criando uma tela para avançar um processo para a próxima fase. A necessidade de momento, conforme a imagem é que quando eu selecione as linhas da tabela mostrada, seja mostrado na tela o montante total em relação ao valor líquido.

![image](https://fluiggers.com.br/uploads/default/optimized/1X/842541387529192d3552136c0b5c8e1125f52a0a_2_690x87.png)

Montei a tabela dinamicamente, porém quando eu marcar ou desmarcar um checkbox, é necessário que eu capture isso e refaça a soma para mostrar o valor atualizado em tela. Porém não estou conseguindo chamar essa função através do clique no checkbox determinado.

Código js

```auto
var MyWidget = SuperWidget.extend({
    //variáveis da widget
    variavelNumerica: null,
    variavelCaracter: null,

    //método iniciado quando a widget é carregada
    init: function() {
        this.initEnvia();
        this.initRb();
    },
    initEnvia: function() {
        $(".enviar").click(function() {
            var userAccess = {
                key: "consumer_key",
                secret: 'consumer_secret'
            }

            var token = {
                key: '79123d56-0a1a-4edb-86b8-afbe073f3bd5',
                secret: '079608da-2a12-406c-bd14-86beb1e215477b76c92c-5be9-4550-b7fa-1a45521ce9dd'
            }

            var oauth = OAuth({
                consumer: {
                    'key': userAccess.key, // key do aplicativo
                    'secret': userAccess.secret // secret do aplicativo
                },
                signature_method: 'HMAC-SHA1',
                hash_function(base_string, key) {
                    return CryptoJS.HmacSHA1(base_string, key).toString(CryptoJS.enc.Base64);
                },
                nonce_length: 6
            });

            var request_data = {
                url: WCMAPI.serverURL + "/process-management/api/v2/requests",
                method: "GET"
            };

            $.ajax({
                url: request_data.url,
                contentType: 'application/json',
                crossDomain: true,
                async: false,
                type: request_data.method,
                headers: oauth.toHeader(oauth.authorize(request_data, token))

            }).fail(function(e, f) {
                console.log("e:", e);
                console.log("f:", f);
                $("#retorno").val(JSON.stringify(e));
            }).done(function(data) {
                console.log("data:", data);
                var dataItems = data.items;
                console.log("dataItems:", dataItems);

                // para cada processInstanceId desse data.Items devo fazer uma consulta no dataset e trazer as informações para serem mostradas.
                for (i = 0; i < dataItems.length; i++) {
                    console.log(dataItems[i].processInstanceId);

                    var c1 = DatasetFactory.createConstraint("idFluig", dataItems[i].processInstanceId, dataItems[i].processInstanceId, ConstraintType.MUST);
                    var constraints   = new Array(c1);
                    var dataset = DatasetFactory.getDataset("DSAprovaMovimento", null, constraints, null);

                    var valor_liquido = dataset.values.length > 0 ? dataset.values[0]["valor_liquido"] : '';
                    var fornecedor = dataset.values.length > 0 ? dataset.values[0]["fornecedor"] : '';
                    var centro_custo = dataset.values.length > 0 ? dataset.values[0]["centro_custo"] : '';

                    dataItems[i].valor_liquido = valor_liquido;
                    dataItems[i].fornecedor = fornecedor;
                    dataItems[i].centro_custo = centro_custo;
                }

                var tblItmMov = FLUIGC.datatable('#tblItmMov', {
                    mobileMainColumns: [0, 2, 3],
                       dataRequest: dataItems,
                    renderContent: ['processInstanceId', 'valor_liquido', 'fornecedor', 'centro_custo'],
                         header: [{
                      'title': 'processInstanceId'
                    }, {
                      'title': 'valor_liquido'
                    }, {
                       'title': 'fornecedor'
                    }, {
                       'title': 'centro_custo'
                    }],

                      search: {
                          enabled: true,
                          onlyEnterkey: true,
                          searchAreaStyle: 'col-md-5',
                          onSearch: function(res) {
                            var t = this.tableData;
                            if (res) {
                              var data = dataItems;
                              var search = data.filter(function(el) {
                                return ( (el.prd.toUpperCase().indexOf(res.toUpperCase()) >= 0) || (el.seq.toUpperCase().indexOf(res.toUpperCase()) >= 0));
                              });
                              tblItmMov.reload(search);
                            }else
                            {
                              tblItmMov.reload(dataItems);
                            }
                          }
                      },
                      scroll: {
                          target: ".target",
                          enabled: false
                      },
                      navButtons: {
                          enabled: false
                      }
                  }, function(err, data) {});


                tblItmMov.reload(dataItems);

                // geração da coluna com os checkbox's
                $("#tblItmMov tr").append("<td><input class='teste' type='checkbox'  /></td>");
                $('.collapse').collapse();
            });
        })

    },
    // função que teoricamente captura o checkbox
    initRb: function() {
        $('input[type="radio"]').on('click change', function(e) {
            console.log(e.type);
        });
    },
    //BIND de eventos
    bindings: {
        local: {
            'execute': ['click_executeAction']
        },
        global: {
        }
    },
    handeClick: function() {
    },

    executeAction: function(htmlElement, event) {}

});
```

Código ftl

```auto
<div id="MyWidget_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide" data-params="MyWidget.instance()">
    <script type="text/javascript" src="/webdesk/vcXMLRPC.js"></script>

    <body style="margin:auto;width:80%">
        <div id="collapseItmMov" class="panel-collapse collapse">
            <div class="panel-body">
                <div id="tblItmMov"></div>
            </div>

        </div>

        <input type="text" class="enviar btn btn-default btn-block" value="INICIAR SOLICITAÇÃOs" />
    </body>

</div>
```

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 04/10/2021, 18:07 | ❤️ 1

```javascript
$('input[type="radio"]').on('click change', function(e) {
    console.log(e.type);
});
```

Esse código vai escutar os eventos somente dos input que já existem. Como você cria a tabela dinamicamente é bem provável que esteja executando esse código antes da tabela ter sido carregada.

Você pode executar o seu método `initRb` após a tabela ter sido carregada.

Mas recomendo simplesmente trocar o seu código para pegar os inputs criados dinamicamente.

A tabela fica dentro da `div#tblItmMov`? Se sim você pode usar:

```javascript
$("#tblItmMov").on('change', 'input[type="radio"]', function(e) {
    console.log(e.type);
});
```

---

## Resposta #2

**Daniel ** (@daniel_fmartins) — 05/10/2021, 08:19

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/bruno_gasparetto/48/68_2.png) Bruno\_Gasparetto:
>
> > `tblItmMov`

Boa, deu bom. Valeu.

---
