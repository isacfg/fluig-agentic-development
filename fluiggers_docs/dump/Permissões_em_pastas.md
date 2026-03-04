# Permissões em pastas

> **Fonte:** [https://fluiggers.com.br/t/permissoes-em-pastas/2841](https://fluiggers.com.br/t/permissoes-em-pastas/2841)
> **Categoria:** ECM / GED
> **Tags:** `ecm`, `pasta`
> **Criado em:** 07/06/2024, 11:31
> **Visualizações:** 228 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**Eder** (@edersat0) — 07/06/2024, 11:31

Olá a todos
Estou precisando de uma ajuda, a respeito de atribuir permissões de acesso a pastas.

Preciso atribuir as regras de acesso e leitura para certos grupos específicos, de acordo com um json, onde passo o nome do grupo, o tipo de grupo e o nível de acesso (códigos setados com o que possui na API/SDK).

Atualmente, essa função busca o id das pastas e subpastas, tratando no success um Get das permissões (que seria o json já citado), porém, ele faz a leitura do array e apenas inclui as permissões do usuário, ignorando os grupos

---

## Resposta #1

**Wanderley Junior** (@gomeswjunior) — 10/06/2024, 15:29

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/edersat0/48/1161_2.png) edersat0:
>
> > acesso

Eder, compartilhe o trecho do código onde a leitura é realizada e onde a chamada é feita

---

## Resposta #2

**Eder** (@edersat0) — 10/06/2024, 17:35

Função da permissão

```auto
function AplicaPermissaoNasPasta() {
    var idPastaObra = $("#idPastaObra").val();

    parent.WCMAPI.Create({
        method: "GET",
        url: "http://desenvolvimento.castilho.com.br:3232" + "/api/public/ecm/document/listDocument/" + idPastaObra,
        error: function (x, e) {
            console.log(x);
            console.log(e);
            if (x.status == 500) {
                // alert("Listar documentos das pastas da obra: Erro Interno do Servidor: entre em contato com o Administrador.");
            }
        },
        success: function (retorno) {
            console.log(retorno.content);

            for (var i = 0; i < retorno.content.length; i++) {
                parent.WCMAPI.Create({
                    method: "GET",
                    async: false,
                    url: "http://desenvolvimento.castilho.com.br:3232" + "/api/public/2.0/documents/getDocumentPermissions/" + retorno.content[i].id + "/1000",
                    error: function (x, e) {
                        console.log(x);
                        console.log(e);
                        if (x.status == 500) {
                            // alert("Buscar permissões das pastas da obra: Erro Interno do Servidor: entre em contato com o Administrador.");
                        }
                    },
                    success: function (retorno2) {
                        var dados = retorno2.content;

                        dados.push({ securityLevel: 2, downloadEnabled: false, showContent: true, attributionType: 2, attributionValue: grupos });
                        // dados.push({ securityLevel: 2, downloadEnabled: false, showContent: true, attributionType: 2, attributionValue: usuario });

                        var data = {
                            documentId: retorno.content[i].id,
                            documentPermissionVO: dados,
                        };

                        parent.WCMAPI.Create({
                            method: "POST",
                            url: "http://desenvolvimento.castilho.com.br:3232" + "/api/public/2.0/documents/setDocumentPermissions/",
                            contentType: "application/json",
                            data: JSON.stringify(data),
                            success: function () { },
                            error: function (x, e) {
                                console.log(x);
                                console.log(e);
                                if (x.status == 500) {
                                    //alert("Alterar permisão das pastas da obra: Erro Interno do Servidor: entre em contato com o Administrador.");
                                }
                            },
                        });
                    },
                });
            }
        },
    });
}
```

Função onde busco os detalhes das permissões

```auto
function RetornaListPermissao(list) {
    var permissao = [];
    for (var i = 0; i < list.length; i++) {
        permissao.push({ securityLevel: list[i][1], downloadEnabled: "false", showContent: "true", attributionType: list[i][2], attributionValue: list[i][0] });
    }
    return permissao;
}
```

E json que utilizo para tentar aplicar as permissões:

```auto
function CriarPastas() {
    var nomePasta = $("#nomeObra").val();
    var Regional = $("#regionalObra :selected").text();

    var json = [
        {
            //Pasta Obra
            nome: nomePasta,
            parentFolder: $("#regionalObra").val(),
            permissao: RetornaListPermissao([
                [Regional, 0, 2],
                ["Controladoria", 3, 2],
                ["Engenheiros", 0, 2],
                ["ReuniaoZero", 0, 2],
                ["RH", 0, 2],
                ["Planejamento", 0, 2],
                ["Chefes de Escritório", 0, 2],
                [$("#usuario").val(), 2, 1],
            ]),
            inheritSecurity: false,
        },
    ]

    $("#idPastaObra").val(CriaPastaObra(json));
}
```

O valor dos grupos que eu passo na primeira função é chamada com o nome do grupo presente no array, mas por algum motivo ele ignora e pega apenas o valor do usuário

---

## Resposta #3

**venturelli** (@venturelli) — 25/06/2024, 10:28

A parte de criação da pasta parece estar ok pra mim… mas não entendi a parte do `AplicaPermissaoNasPasta` . Quando é chamada? E o que é essa variável `grupos` aqui?

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/edersat0/48/1161_2.png) edersat0:
>
> > ```auto
> > dados.push({ securityLevel: 2, downloadEnabled: false, showContent: true, attributionType: 2, attributionValue: grupos });
> > ```

Eu acho que esse pode ser o erro, já que se o atributo for incorreto (ou um grupo que não existe), não vai atualizar as permissões. Gera algum log de erro?

---

## Resposta #4

**Eder** (@edersat0) — 25/06/2024, 16:21

Eu chamo esta função das permissões logo após criar as pastas.

A variável ***grupos*** ali eu atribuí ela para ser o nome do grupo, que constam dentro do JSON.
*(Acabei deixando passar enquanto mandava a função, mas no nome dela dentro do parenteses eu instancio essa var, para utilizar ela pra buscar os grupos do json)*

Sobre log, a única informação que aparece, é apenas que a thread não pode estar alocada em duplicidade. Mas isso não impede de criar as pastas, que ficam apenas com as permissões base do usuário, como já citado.

Já realizei testes sem passar nenhum parâmetro no *attributionValue*, mas o único retorno que obtive foi erro de FDN\_GROUP, dizendo que não conseguiu encontrar o id da pasta para aplicar as permissões…

---
