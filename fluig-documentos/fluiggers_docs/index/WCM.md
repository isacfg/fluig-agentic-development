# WCM

> **35 tópicos**

---

## Sumário

- [Ao selecionar um layout customizado na página inicial, o layout criado não permite a exibição do menu](#ao-selecionar-um-layout-customizado-na-pgina-inicial-o-layout-criado-no-permite-a-exibio-do-menu)
- [Campo checkbox e radio em pai x filho](#campo-checkbox-e-radio-em-pai-x-filho)
- [Como descobrir papeis/grupos utilizados em widgets e processos](#como-descobrir-papeisgrupos-utilizados-em-widgets-e-processos)
- [Como desenvolver novas páginas internas no fluig?](#como-desenvolver-novas-pginas-internas-no-fluig)
- [Consumindo API Legaldesk via Fluig](#consumindo-api-legaldesk-via-fluig)
- [Contornar erro de CORS](#contornar-erro-de-cors)
- [Criei um Formulário na Widget e quero deixar alguns campos obrigatório como faço?](#criei-um-formulrio-na-widget-e-quero-deixar-alguns-campos-obrigatrio-como-fao)
- [DatasetFactory is not defined](#datasetfactory-is-not-defined)
- [Dataset/ Serviço Rest com parametros](#dataset-servio-rest-com-parametros)
- [Datasets Avançados não consideram constraints. Seria boa prática este 'workaround'?](#datasets-avanados-no-consideram-constraints-seria-boa-prtica-este-workaround)
- [Desativar Style Guide em página específica](#desativar-style-guide-em-pgina-especfica)
- [Duvida - Link externo e possivel visualizar em pdf](#duvida-link-externo-e-possivel-visualizar-em-pdf)
- [Envio de e-mail com anexos](#envio-de-e-mail-com-anexos)
- [Erro ao criar Widget - Eclipse Luna](#erro-ao-criar-widget-eclipse-luna)
- [Erro na integração](#erro-na-integrao)
- [Erros em Promises ao aplicar oAuth em widgets](#erros-em-promises-ao-aplicar-oauth-em-widgets)
- [Exibir valor vindo da API do fluig](#exibir-valor-vindo-da-api-do-fluig)
- [Fluig API para anexar documentos a uma solicitação](#fluig-api-para-anexar-documentos-a-uma-solicitao)
- [Importar para o Eclipse uma Widget existente numa página](#importar-para-o-eclipse-uma-widget-existente-numa-pgina)
- [Inserção em banco de dados Oracle através de uma widget](#insero-em-banco-de-dados-oracle-atravs-de-uma-widget)
- [Intranet "pública"](#intranet-pblica)
- [Modificar elementos visuais nas páginas do Fluig](#modificar-elementos-visuais-nas-pginas-do-fluig)
- [Mudar Fonte Original do Fluig](#mudar-fonte-original-do-fluig)
- [Navbar do wcm não aparecer para usuários não logados](#navbar-do-wcm-no-aparecer-para-usurios-no-logados)
- [Paginação de Datasets](#paginao-de-datasets)
- [Problema com botão em tabela pix x filho](#problema-com-boto-em-tabela-pix-x-filho)
- [Problema na visualização de PDF's](#problema-na-visualizao-de-pdfs)
- [Página publica fluig em incorporada em iframe](#pgina-publica-fluig-em-incorporada-em-iframe)
- [Qualificação de Fornecedor](#qualificao-de-fornecedor)
- [Referenciar imagens em layout](#referenciar-imagens-em-layout)
- [Sobre a categoria WCM](#sobre-a-categoria-wcm)
- [Uso de Promise dentro de dataset](#uso-de-promise-dentro-de-dataset)
- [WCM API para primeiro login na sessão](#wcm-api-para-primeiro-login-na-sesso)
- [Widget Angular com rotas dentro do fluig](#widget-angular-com-rotas-dentro-do-fluig)
- [Widgets - Binding de eventos](#widgets-binding-de-eventos)

---

# Ao selecionar um layout customizado na página inicial, o layout criado não permite a exibição do menu

> **Fonte:** [https://fluiggers.com.br/t/ao-selecionar-um-layout-customizado-na-pagina-inicial-o-layout-criado-nao-permite-a-exibicao-do-menu/2147](https://fluiggers.com.br/t/ao-selecionar-um-layout-customizado-na-pagina-inicial-o-layout-criado-nao-permite-a-exibicao-do-menu/2147)
> **Categoria:** WCM
> **Criado em:** 24/08/2023, 12:27
> **Visualizações:** 297 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Matheus** (@matheusassed) — 24/08/2023, 12:27

editei a página, selecionei o novo layout, não cheguei a salvar, esse erro acontece somente no modo de edição. A tela fica assim:

![image](https://fluiggers.com.br/uploads/default/optimized/2X/f/f047e368be623cd02a74a513a7a0a710655ba456_2_690x334.png)

o código é esse:

```auto
<#import "/wcm.ftl" as wcm />
<@wcm.header authenticated="true"/>
<!-- WCM Wrapper content -->
<div class="wcm-wrapper-content">

  <@wcm.menu/>

  <!-- Wrapper -->
  <div class="wcm-all-content">
    <div id="wcm-content" class="clearfix wcm-background">

      <body>
        <div class="fluig-style-guide">
          <div class="container">
            <div class="jumbotron">
              <h1>Hello World</h1>
              <p>Exemplo de texto para exibição em tela</p>
            </div>

            <div class="row">
              <div class="col-xs-6 col-lg-4">
                <h2>Heading</h2>
                <div class="editable-slot slotfull layout-1-1" id="slotContainer001">
                  <@wcm.renderSlot id="Slot001" decorator="false" editableSlot="true" />
                </div>
              </div>
              <div class="col-xs-6 col-lg-4">
                <h2>Heading</h2>
                <div class="editable-slot slotfull layout-1-1" id="slotContainer002">
                  <@wcm.renderSlot id="Slot002" decorator="false" editableSlot="true" />
                </div>
              </div>
              <div class="col-xs-6 col-lg-4">
                <h2>Heading</h2>
                <div class="editable-slot slotfull layout-1-1" id="slotContainer003">
                  <@wcm.renderSlot id="Slot003" decorator="false" editableSlot="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>

      <@wcm.footer layoutuserlabel="wcm.layoutdefault.user" />
    </div>
  </div>
</div>
```

Alguma forma de resolver esse problema?

---

---

# Campo checkbox e radio em pai x filho

> **Fonte:** [https://fluiggers.com.br/t/campo-checkbox-e-radio-em-pai-x-filho/472](https://fluiggers.com.br/t/campo-checkbox-e-radio-em-pai-x-filho/472)
> **Categoria:** WCM
> **Criado em:** 28/05/2021, 10:28
> **Visualizações:** 457 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Vagner Duarte** (@vagner_duarte) — 28/05/2021, 10:28

fala pessoal,

preciso colocar campo do tipo checkbox e radio em um pai x filho, porém, eles não aplicam a formatação css nesses campos, e quando aplicam o campo não ficam desabilitados para click. Tem alguma técnica para que as classes css funcionem em campos do tipo radio e checkbox em tabela pai x filho?

---

---

# Como descobrir papeis/grupos utilizados em widgets e processos

> **Fonte:** [https://fluiggers.com.br/t/como-descobrir-papeis-grupos-utilizados-em-widgets-e-processos/3231](https://fluiggers.com.br/t/como-descobrir-papeis-grupos-utilizados-em-widgets-e-processos/3231)
> **Categoria:** WCM
> **Tags:** `papeis`, `grupos`
> **Criado em:** 03/04/2025, 16:29
> **Visualizações:** 23 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Pablo Valle** (@pablooav) — 03/04/2025, 16:29

Salve pessoal, surgiu uma demanda aqui de realizar uma limpeza nos grupos e papeis desnecessários, queria saber se alguem já passou por isso e tem alguma query ou já consegue me adiantar as principais tabelas que guardam esse tipo de informação sobre os mecanismos de atribuições de processos, permissões em widgets, documentos, etc pra facilitar esse tipo de análise.

Entendo que mesmo assim é importante fazer um pente fino em cada widget/processo pra ver se não há grupos/papeis sendo preenchidos em campos ocultos mas de qualquer forma uma busca no banco já ajuda bastante pra pegar essas atribuições fixas.

---

---

# Como desenvolver novas páginas internas no fluig?

> **Fonte:** [https://fluiggers.com.br/t/como-desenvolver-novas-paginas-internas-no-fluig/1538](https://fluiggers.com.br/t/como-desenvolver-novas-paginas-internas-no-fluig/1538)
> **Categoria:** WCM
> **Criado em:** 13/12/2022, 16:06
> **Visualizações:** 292 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Portela** (@Portela) — 13/12/2022, 16:06

Boa tarde, pessoal!
Preciso desenvolver uma FAQ dentro do Fluig, mas não faço ideia de como desenvolver novas páginas de forma interna. Como vocês costumam fazer?

---

---

# Consumindo API Legaldesk via Fluig

> **Fonte:** [https://fluiggers.com.br/t/consumindo-api-legaldesk-via-fluig/3456](https://fluiggers.com.br/t/consumindo-api-legaldesk-via-fluig/3456)
> **Categoria:** WCM
> **Tags:** `dataset`
> **Criado em:** 01/10/2025, 15:40
> **Visualizações:** 53 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 01/10/2025, 15:40

Prezado/Prezada, estou tentando fazer um ‘post’ numa API do Legaldesk, mas dá sempre um erro, que é meio obscuro. Como sempre no caso do Fluig, não tem documentação. O interessante é que, via POSTMAN ou via Python, meu colega consegue com a estrutura igual, mas com autenticação via ‘key’, enquanto que, no Fluig, sendo Basic, tenho de fazer com o login meu.

Meu Dataset está assim:

```auto
function createDataset(fields, constraints, sortFields) {
    // ds_ucrg_qivresp_legaldesk_ins
    let endpoint ="/SolicitacaoDespesaViews";
    let dataset = DatasetBuilder.newDataset();
    dataset.addColumn("Resultado_post");
    //-----
let idDespesa = fields[0];
 let dataDespesaFormatada = fields[1];
 let idProf = fields[2];
 let idRevisor = fields[3];
 let idPresta = fields[4];
 let idEscritorio = fields[5];
 let despesa = fields[6];
 let idGrupoJuridico = fields[7];
 let idCaso = fields[8];
 let casoCodigo = fields[9];
 let casoCodigoNumerico = fields[10];
 let materia = fields[11];
 let casoSituacaoJuridica = fields[12];
 let casoClienteId = fields[13];
 let casoClienteCodigo = fields[14];
 let idTipoDespesa = fields[15];
 let idMoeda = fields[16];
 let moedaCodigo = fields[17];
 let moedaSigla = fields[18];
 let moedaDescricao = fields[19];
 let valor = fields[20];
 let descricao = fields[21];
 let obs = fields[22];

    //-----
        var clientService = fluigAPI.getAuthorizeClientService();
        var data = {
            companyId: getValue("WKCompany") + '',
            serviceCode: "UCRG_REST_LEGALDESK", // o nome do serviço REST cadastrado no Fluig HOMOLOGAÇÃO
            endpoint: endpoint,
            method: "post",
            timeoutService: "100",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json" // <-- Adicione esta linha
            },
            body:{
    "Data": "2025-10-01T00:00:00",
    "ProfissionalId": "9DC50DAD-8DEC-46F1-A55B-E4FA23A225B4",
    "ProfissionalRevisorId": "46E9B6E3-42D9-42B4-B3F6-88D8138F67F1",
    "Tipo": "PC",
    "TipoPrestacaoContasId": "08D306E3-8012-F695-67FB-4059A3F3B502",
    "Despesa": "C",
    "GrupoJuridicoId": "08D31B6B-8012-F695-B904-AC74B382FD9A",
    "CasoId": "AAABAD5F-256F-4A7C-B66E-34A6475DDBBD",
    "CasoClienteId": "8B4BCA84-344C-4B80-96FB-E1825A3B0468",
    "TipoDespesaId": "08D315EF-8012-F695-09ED-14AD9EF94403",
    "Quilometragem": "1.00",
    "Quantidade": "1.00",
    "MoedaId": "C9080636-8C44-4D0A-A48D-8F1697F10163",
    "Valor": "1000.00",
    "Descricao": "teste de despesa de correio",
    "Observacao": "observação de teste",
    "Situacao": "P",
    "Revisada": "N",
    "Cobravel": "S"
}
        };
        //log.info("o que será que tem em data");
        //log.info(JSON.stringify(data.body));
        log.info("Payload enviado: " + JSON.stringify(data.body))
        var vo = clientService.invoke(JSON.stringify(data));
        if (vo.getResult() == null || vo.getResult().isEmpty()) {
            dataset.addRow(["Erro", "Retorno vazio", "", ""]);
        } else {
   // 1. Logue o retorno BRUTO como string para ver o que realmente veio da API
    log.info("Retorno Bruto da API: " + vo.getResult());

    // Tente fazer o parsing
    try {
        var resp = JSON.parse(vo.getResult());
        log.info("O QUE SERÁ QUE FOI? (JSON Parsed)");
        log.info(JSON.stringify(resp));
        dataset.addRow(["deu certo?"]);
    } catch (e) {
        // 2. Se falhar o JSON.parse(), retorne a string bruta para o dataset
        // Isso fará o resultado bruto aparecer na tabela do Fluig para depuração
        dataset.addRow(["ERRO AO PARSEAR JSON: " + vo.getResult()]);
    }
}



    return dataset;
}
```

Eu engessei o ‘body’ porque o erro (abaixo) diz que há campo nulo, e, engessado, não tem como ter campo nulo. Diz que é um parâmetro ‘entity’, mas que não sei de onde veio isto.

> 2025-10-01 15:32:18,948 INFO \[com.datasul.technology.webdesk.customization.ScriptingLog\] (default task-7712) Retorno Bruto da API: {
> “result”: {
> “error”: true,
> “type”: “general”,
> “message”: “Valor não pode ser nulo.\\r\\nNome do parâmetro: entity”,
> “stackTrace”: "ControllerName: SolicitacaoDespesaViews\\r\\nActionName: Post\\r\\nODataPath: SolicitacaoDespesaViews\\r\\nRequestUri: /API/v1/ODataGERALW/SolicitacaoDespesaViews\\r\\nStackTrace: "
> },
> “controllerName”: “SolicitacaoDespesaViews”,
> “actionName”: “Post”
> }

---

## Resposta #1

**Pablo Pádua** (@Pablo_Padua) — 10/10/2025, 15:50

O retorno provavelmente está ocorrendo porque de fato o **body** do request enviado está nulo.
No objeto de envio, você está utilizando a propriedade **body**, quando na verdade deveria usar **params**.

**Seu exemplo:**

```javascript
var data = {

body: {}

}
```

**O correto seria:**

```javascript
var data = {

params: {}

}
```

---

## Resposta #2

**MAURO SIMOES** (@Mautresim) — 16/10/2025, 06:47 | ❤️ 1

Muito obrigado, [@Pablo\_Padua](/u/pablo_padua) e desculpa a demora em responder. Eu testei tantas coisas que acabei desistindo e, como tenho acesso direto ao banco de dados alvo, fiz a inserção/update direto via dataset pelos métodos clássicos do Fluig. Mas, testei, como sua boa sugestão, de todas as formas possíveis, mas não funcionou de jeito nenhum. Mas, para mim, está resolvido. Obrigado.

---

---

# Contornar erro de CORS

> **Fonte:** [https://fluiggers.com.br/t/contornar-erro-de-cors/104](https://fluiggers.com.br/t/contornar-erro-de-cors/104)
> **Categoria:** WCM
> **Criado em:** 15/03/2021, 08:23
> **Visualizações:** 653 | **Likes:** 5 | **Respostas:** 0

---

## Pergunta original

**William Kiefer** (@bokrs) — 15/03/2021, 08:23 | ❤️ 5

Tempos atrás, após atualização de alguns navegadores, me ocorreu erros e falhas com CORS ao realizar uma chamada AJAX, essa dica foi do mestre [@fluigor.com.br](/u/fluigor.com.br) .

Esse trecho no código, na chamada do AJAX, resolveu meu problema:

```
beforeSend(req) {
			req.setRequestHeader("Accept", "text/xml");
			},
```

---

---

# Criei um Formulário na Widget e quero deixar alguns campos obrigatório como faço?

> **Fonte:** [https://fluiggers.com.br/t/criei-um-formulario-na-widget-e-quero-deixar-alguns-campos-obrigatorio-como-faco/1207](https://fluiggers.com.br/t/criei-um-formulario-na-widget-e-quero-deixar-alguns-campos-obrigatorio-como-faco/1207)
> **Categoria:** WCM
> **Tags:** `form`
> **Criado em:** 02/08/2022, 14:00
> **Visualizações:** 530 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Leandro** (@leandrojldp) — 02/08/2022, 14:00

Olá!

Criei um Formulário na Widget e quero deixar alguns campos obrigatório como faço ?

---

## Resposta #1

**Albert** (@Albert) — 02/08/2022, 15:48

boa tarde Leandro, dá uma olhada nesses topicos:

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/victorcastro/48/12_2.png) [Validação de formulário no front](https://fluiggers.com.br/t/validacao-de-formulario-no-front/221) [Formulários](https://fluiggers.com.br/c/form-fluig-html/15)
>
> > Já vi várias vezes pessoas com algumas dúvidas ou dificuldades pra fazer validação do formulário. Resolvi criar esse tópico pra demonstrar a forma que eu faço e deixar de exemplo pra quem se precisar. Quem quiser compartilhar o jeito que faz, fique a vontade. Bom, primeiramente, a estrutura do HTML é a seguinte: <div class="row"> <div class="form-field col-md-6"> <div class="form-input"> <div class="form-group"> <label for="campo1">Campo 1</label> <input type="text" name="campo1…
> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/akaluan/48/438_2.png) [ValidateForm dinâmico](https://fluiggers.com.br/t/validateform-dinamico/670) [Formulários](https://fluiggers.com.br/c/form-fluig-html/15)
>
> > Estou fazendo o curso do fluig pelo fluig academy e me deparei com um código c uma quantidade grande de linhas de códigos e IF’s. Tentei mudar esse algoritmo pra algo mais dinâmico, porém quando acesso o formulário ele fica todo em branco! Algoritmo usado: \[image\]

s

---

---

# DatasetFactory is not defined

> **Fonte:** [https://fluiggers.com.br/t/datasetfactory-is-not-defined/818](https://fluiggers.com.br/t/datasetfactory-is-not-defined/818)
> **Categoria:** WCM
> **Criado em:** 09/12/2021, 13:01
> **Visualizações:** 1237 | **Likes:** 2 | **Respostas:** 1

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 09/12/2021, 13:01

Eu tenho uma widget que foi desenvolvida por mim.

Entretanto, estou obtendo o erro apresentado no ‘Assunto’ acima, mesmo tendo declarado o script

`<script type="text/javascript" src="/webdesk/vcXMLRPC.js"></script>`

Alguém já passou por isto?

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 09/12/2021, 15:42 | ❤️ 1

Quando isso acontece normalmente é por tentar usar a o objeto antes dele ter sido carregado.

Você tentou usar a `DatasetFactory` dentro de `SuperWidget.extend((function () {})`?

---

## Resposta #2

**MAURO SIMOES** (@Mautresim) — 09/12/2021, 16:34 | ❤️ 1

Caro Bruno, mais uma vez, obrigado.
Não, não está dentro da Superwidget.
Está de fora, mas eu carrego dentro de

jQuery(document).ready(function (){
…
});

Eu experimentei pôr as funções que estavam provocando o Dataset dentro do ini: da SuperWidget e parece que funcionou. O estranho é que em outras widgets que tinha a mesma situação isto não acontece. Só em duas widgets dentre dezenas que tenho.
Mas, valeu!

---

## Resposta #3

**Gabriel Franco da Rocha Nascimento** (@gabrielfrna) — 10/12/2021, 16:14

Mautresim, Boa tarde!

Qual a sequência que colocou o apontamento dos scripts no seu HTML?

---

## Resposta #4

**MAURO SIMOES** (@Mautresim) — 10/12/2021, 16:52

Caro Gabriel,
eu nem faço referência a arquivos javascript no meu html, porque eu uso o embutido na widget.

Eu abro a pasta ‘resources\\web’ e ele já está lá.
Mas ponho, por exemplo, jQuery(document).ready(function (){
…
});

antes de

SuperWidget.extend({});

E, no arquivo view.ftl, a declaração do arquivo vcXMLRPC.js fica logo abaixo do div inicial.

---

---

# Dataset/ Serviço Rest com parametros

> **Fonte:** [https://fluiggers.com.br/t/dataset-servico-rest-com-parametros/2654](https://fluiggers.com.br/t/dataset-servico-rest-com-parametros/2654)
> **Categoria:** WCM
> **Tags:** `dataset`, `fluigapi`, `api`
> **Criado em:** 18/03/2024, 08:52
> **Visualizações:** 309 | **Likes:** 0 | **Respostas:** 2

---

## Pergunta original

**Gabriel Borchardt** (@borchardt) — 18/03/2024, 08:52

Pessoal, sabem como criar um dataset/serviço no fluig que é um rest e comunica via parametros? Tenho um caso que preciso bater em uma api http com uma matricula e logo em seguida me retorna alguns dados, porém ao utilizar no fluig via frontend num formulário ele da erro de CORS, como esperado… O problema é que não é viável para nós aplicar um SSL nesse momento no endereço, levando em consideração que outras aplicações web com stack diferentes usam via backend com http e não ocorre o cors por isso, sabem como fazer um serviço com parametros na url pelo fluig?

---

## Resposta #1

**Eduardo Vantini Neto** (@eduardo.vantini) — 18/03/2024, 10:25

Olá, para isso crie um serviço no Painel de Controle Fluig com o url e autenticação. No dataset chama assim:

```auto
var filter = encodeURIComponent('["GCOLIGADA.CODCOLIGADA != :CODCOLIGADA AND GCOLIGADA.ATIVO = :ATIVO", "0", "T"]');
        log.info(filter)

        var getColigada = fluigAPI.getAuthorizeClientService();
        var data = {
            companyId : getValue("WKCompany") + '',
            serviceCode : 'RM',
            endpoint : "GlbColigadaDataBR?filter=" + filter,
            method : 'get',
        };

        var obj = getColigada.invoke(JSON.stringify(data));
```

serviceCode = Serviço cadastrado no Painel de Controle.
endpoit = Parametros da url.

Esse é um exemplo para chamar a api de coligadas do RM. Mais segue esse caminho que da certo.

Abs.

---

## Resposta #2

**Gabriel Borchardt** (@borchardt) — 18/03/2024, 16:35

o que seria esse parametro do encode que vc passou gcoligada?

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Eduardo Vantini Neto** (@eduardo.vantini) — 19/03/2024, 11:39

Eu vi nessa doc [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4402117244311-Cross-Segmentos-Backoffice-RM-Integração-API-Requisição-REST-GetAll-e-Exemplo-de-Utilização-do-Filtro](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4402117244311-Cross-Segmentos-Backoffice-RM-Integra%C3%A7%C3%A3o-API-Requisi%C3%A7%C3%A3o-REST-GetAll-e-Exemplo-de-Utiliza%C3%A7%C3%A3o-do-Filtro) que o filtro precisava estar nesse formato de URL, e só funcionou assim.

---

---

# Datasets Avançados não consideram constraints. Seria boa prática este 'workaround'?

> **Fonte:** [https://fluiggers.com.br/t/datasets-avancados-nao-consideram-constraints-seria-boa-pratica-este-workaround/909](https://fluiggers.com.br/t/datasets-avancados-nao-consideram-constraints-seria-boa-pratica-este-workaround/909)
> **Categoria:** WCM
> **Criado em:** 04/02/2022, 12:10
> **Visualizações:** 1091 | **Likes:** 4 | **Respostas:** 1

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 04/02/2022, 12:10

A pergunta que desejo fazer sobre o assunto abaixo é a seguinte: isto que fiz para resolver é uma aberração, não é uma boa prática?
Há soluções mais elegantes?

Como iniciante, vivo em busca de conceitos apalpando às cegas. Tento uma coisa, dá certo; tento outra e não dá e vou procurando documentação.

Fiz algumas consultas usando Dataset Avançado para acessar banco de dados externo e estava crente que estava sendo aplaudido, quando, numa situação diferente, vi que eu merecia era vaia.

Isto porque o array constraints que é recebido na assinatura da função createDataset(fields,constraints,sortFields) eu usei na cláusula WHERE anotada nesta função.

Enquanto o ‘constraint’ fosse comparação por igualdade, beleza, funcionava bem, capturando os valores com que eu passava no Javascript na chamada do tal Dataset.
No loop de busca por constraints, alimentava a variável e a concatenava na cláusula WHERE.
Assim a sequência era:

No Javascript:

```auto
let c1 = DatasetFactory.createConstraint("ANO_MES",'2022-01','2022-01',ConstraintType.MUST);
let arrayConstraints=[];
arrayConstraints.push(c1);
let arrayOrdenacao=[];
arrayOrdenacao.push('NOME');
let resultado = DatasetFactory.getDataset("meu_dataset",null,arrayConstraints,arrayOrdenacao);
console.log(resultado);
```

No dataset:

```auto
function createDataset(fields,constraints,sortFields){

 if(constraints !== null){
        for (var i = 0; i < constraints.length; i++) {
            if (constraints[i].fieldName == "ANO_MES") {
                anoMes = constraints[i].initialValue; //para ser usado na cláusula WHERE
            }//if constraints ==

        }//for
    }//if constraints !==

[...]

var myQuery = "select * from CUSTOM.VW_CST_TS_ATRASO where ESCRITORIO 'RJ' AND ANO_MES='"+anoMes+"'  AND CATEGORIA='CONS' AND TIPO_PROF='ADV' ORDER BY "+sortFields.join();

[...]

return dataset;
}//createDataset
```

O problema começou quando eu queria que a cláusula WHERE NÃO SELECIONASSE um tipo de informação, fazendo uma condição do tipo MUST\_NOT:

> let c1 = DatasetFactory.createConstraint(“ANO\_MES”,‘2022-01’,2022-01’,ConstraintType.MUST);
> let c2 = DatasetFactory.createConstraint(“CATEGORIA”,‘CONS’,‘CONS’,ConstraintType.MUST\_NOT);
> let arrayConstraints=;
> arrayConstraints.push(c1);
> arrayConstraints.push(c2);
> let arrayOrdenacao=;
> arrayOrdenacao.push(‘NOME’);
> let resultado = DatasetFactory.getDataset(“meu\_dataset”,null,arrayConstraints,arrayOrdenacao);
> console.log(resultado);

mas, de cara percebi que a SQL abaixo ia ficar estranha, pois a igualdade conforme à direita *AND CATEGORIA **\=** ’ "+cat+ "’* iria conflitar com o MUST\_NOT.
O Fluig iria, magicamente, trocar o ‘=’ por ‘<>’?

```auto
[...]

var myQuery = "select * from CUSTOM.VW_CST_TS_ATRASO where ESCRITORIO 'RJ' AND ANO_MES='"+anoMes+"'  AND CATEGORIA = '"+cat+"' AND TIPO_PROF='ADV' ORDER BY "+sortFields.join();

[...]
```

Claro que não.
Mesmo assim, teimei e, claro, a resposta veio listando todos os CONS.

Aí, procurando a documentação, li algo que deveria ter entendido antes, mas, como iniciante, muita coisa passa por não ser a hora certa de entender, que [dizia](https://tdn.totvs.com/pages/releaseview.action?pageId=412888219):

> Atenção!
>
> As constraints podem ser utilizadas apenas para Datasets internos. Datasets avançados não aceitam constraints, pelo fato de os dados serem externos, não sendo possível aplicar o filtro em sua origem. Para Datasets avançados o tratamento de filtros deve ser feito na codificação do Dataset, manipulando o objeto retornado e retirando as informações desnecessárias.

Como franco-atirador, eu pensei, então por que não burlar o que já vem preparado e fazer um jeitinho brasileiro?

Mãos à obra, pensei em pôr toda a sequência SQL já montada.
Teria a exceção desejada, os campos, cláusulas, ordenação tudo numa única tripa.
Passaria essa tripa no primeiro parâmetro da função createDataset e jogaria tudo na myQuery.

Para isto fiz o seguinte no Javacript:

```auto
jQuery("#idBtnSuplementarTeste").on("click",function (){
//aqui uso CATEGORIA <> 'CONS'

		let meuSQL = "SELECT * from CUSTOM.VW_CST_TS_ATRASO where ESCRITORIO ='RJ' "+
		"AND ANO_MES='2022-01'  AND CATEGORIA <> 'CONS' AND TIPO_PROF='ADV' " +
		"ORDER BY NOME,CATEGORIA";

		let arrayCampos=[];
		arrayCampos.push(meuSQL);
		let resultado = DatasetFactory.getDataset("ds_ucrg_adv_atrasado_mauro",arrayCampos,null,null);
		console.log("resultado",resultado);
	});//idBtnTeste
```

e a função no dataset recebendo todo o primeiro elemento do array ‘fields’ assim:

```auto
function createDataset(fields,constraints,sortField){
[...]
  var ds = ic.lookup(dataSource);
            var myQuery = fields[0];
            log.info("LINHA QUERY : "+myQuery);
    try {
[...]
}//createDataset
```

Seria uma má prática, repito?

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 04/02/2022, 13:56 | ❤️ 1

Pra mim a sua solução é bem ruim, pois você está montando um SQL que é facilmente encontrado no código e alguém com conhecimento pode criar qualquer SQL e passar pro seu dataset pra obter o que quiser. É uma grande falha de segurança.

Quanto ao seu problema você precisa validar o tipo da Constraint e tratar os casos.

```javascript
let arrayConstraints = [
    DatasetFactory.createConstraint(
        "ANO_MES",
        "2022-01",
        "2022-01",
        ConstraintType.MUST
    ),
    DatasetFactory.createConstraint(
        "CATEGORIA",
        "CONS",
        "CONS",
        ConstraintType.MUST_NOT
    )
];

let arrayOrdenacao= ["NOME"];

let resultado = DatasetFactory.getDataset(
        "meu_dataset",
        null,
        arrayConstraints,
        arrayOrdenacao
);
```

No seu código você indicou que a Constraint ANO\_MES é MUST e a Constraint CATEGORIA é MUST\_NOT.

No seu Dataset você precisa tratar isso.

Exemplo:

```javascript
var clausulas = [];
var comparacao = "";

if (constraints !== null) {
    for (var i = 0; i < constraints.length; i++) {
        comparacao = constraints[i].constraintType == ConstraintType.MUST ? " = " : " <> ";

        if (constraints[i].fieldName == "ANO_MES") {
            clausulas.push("anoMes " + comparacao + "'" + constraints[i].initialValue + "'");
        }

        if (constraints[i].fieldName == "CATEGORIA ") {
            clausulas.push("CATEGORIA " + comparacao + "'" + constraints[i].initialValue + "'");
        }
}

var sql = "SELECT * FROM TABELA WHERE " + clausulas.join(" AND ");
```

É uma atividade bem complicada em Dataset Avançado tratar todas as possibilidades de Constraints, então é bom analisar bem cada caso.

Por exemplo, se a pessoa colocar uma constraint SHOULD você teria que tratar com um OR na consulta e pode ir complicando cada vez mais.

Por isso é interessante definir bem a regra de negócio para o uso do Dataset pra não deixar a implementação complicada demais.

---

## Resposta #2

**Bruno Gasparetto** (@Bruno_Gasparetto) — 04/02/2022, 14:19 | ❤️ 1

Mas já vi algumas soluções parecidas com a sua quando quem chama o dataset de consulta é outro dataset, pois assim fica tudo em chamadas no servidor, sem chance de um usuário simplesmente inspecionar o JS do navegador e se aproveitar da situação.

Aqui fizeram uma consulta a banco que a pessoa passa todos os campos numa constraint, mas como disse, é de uso interno de um dataset (e depois que eu vi isso fui lá e troquei o código, hehe)

---

## Resposta #3

**Allan Reichert** (@allan.reichert) — 17/02/2022, 17:49 | ❤️ 2

Olá,

Eu uso via serviço do processo “servicetask”. Lá eu leio os campos e monto os SQLs. e executo passando meu comando como constraint

![](https://fluiggers.com.br/uploads/default/original/1X/bad3e5f9ad67c1ddf145107ce7032ac1d7b22563.svg) [GitHub](https://github.com/nicolauale/fluig-custom-dataset)

![](https://opengraph.githubassets.com/523617dd88f07006f5bfb5d37988800b1ed8f4dbf08835b5d40f452aaa4f21db/nicolauale/fluig-custom-dataset)

### [GitHub - nicolauale/fluig-custom-dataset: Execute queries diretamente em sua...](https://github.com/nicolauale/fluig-custom-dataset)

Execute queries diretamente em sua base do ERP através do Fluig - GitHub - nicolauale/fluig-custom-dataset: Execute queries diretamente em sua base do ERP através do Fluig

Espero ter ajudado

---

---

# Desativar Style Guide em página específica

> **Fonte:** [https://fluiggers.com.br/t/desativar-style-guide-em-pagina-especifica/2872](https://fluiggers.com.br/t/desativar-style-guide-em-pagina-especifica/2872)
> **Categoria:** WCM
> **Criado em:** 02/07/2024, 08:46
> **Visualizações:** 63 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Gabriel Borchardt** (@Gabriel_Borchardt) — 02/07/2024, 08:46

Olá pessoal! Tenho uma dúvida a respeito de desenvolvimento de páginas dentro do Fluig… É possível desativar para uma página específica o fluig style guide? Percebo que ele usa um bootstrap muito antigo, e para essa minha página em específico será uma widget angular que na prática servirá como um sistema… Tudo isso utilizando TailwindCSS, porém umas classes do tailwind principalmente de margin, padding e outras coisas pequenas porém essenciais, acabam ficando bugadas devido ao Style Guide. Consigo desativar? Sou admin do ambiente e tenho acesso a pastas no servidor, se existir essa possibilidade irá me salvar muito, pois nessa página não usarei nem navbar nem sidebar do Fluig, então acredito que não será util esse estilo que a plataforma aplica…

---

## Resposta #1

**Gabriel Borchardt** (@Gabriel_Borchardt) — 05/07/2024, 09:20

olá pessoal, alguém conhece alguma maneira?

---

---

# Duvida - Link externo e possivel visualizar em pdf

> **Fonte:** [https://fluiggers.com.br/t/duvida-link-externo-e-possivel-visualizar-em-pdf/3337](https://fluiggers.com.br/t/duvida-link-externo-e-possivel-visualizar-em-pdf/3337)
> **Categoria:** WCM
> **Tags:** `fluig`
> **Criado em:** 04/07/2025, 17:34
> **Visualizações:** 64 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**Nathalia Gomes** (@Nathalia_Maria) — 04/07/2025, 17:34

Boa tarde, Pessoal! Estamos subindo algumas documentações para fluido em .xlsx, existe alguma possibilidade de abrir a visualização em PDF apartir do link externo? Temos alguma automaçoes na linha de produção que abrem direto esse link para visualizar as ITs só que tem que ser em PDF.

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 10/07/2025, 15:39

sei que é possível gerar uma URL pública pra baixar o arquivo, mas convertendo de .xlsx pra .pdf não conheço.

sei que o Fluig tem uma opção de fazer download de cópia controlada e nisso ele gera um pdf, mas nunca tentei fazer de um excel pra testar e também não pesquisei API pra isso.

---

## Resposta #2

**Nathalia Gomes** (@Nathalia_Maria) — 29/07/2025, 09:34

Eu cheguei entrar contato com totvs sobre, realmente eles não tem nada do tipo. Mas acabamos por gerar manualmente os pdf e publicar. Obrigada pela colaboração.

---

---

# Envio de e-mail com anexos

> **Fonte:** [https://fluiggers.com.br/t/envio-de-e-mail-com-anexos/545](https://fluiggers.com.br/t/envio-de-e-mail-com-anexos/545)
> **Categoria:** WCM
> **Criado em:** 01/07/2021, 15:58
> **Visualizações:** 3443 | **Likes:** 33 | **Respostas:** 8

---

## Pergunta original

**Vinicius de Moura Silveira** (@vinny.silveira) — 01/07/2021, 15:58 | ❤️ 13

Boa tarde pessoal!

Depois de uma conversa com o super [@fluigor.com.br](/u/fluigor.com.br), percebi que muitos colegas aqui possuem as mesmas dores que eu: Envio de e-mails com qualquer tipo de anexo no Fluig, com CO e CCO. Como já trabalhei alguns anos com Java, resolvi escrever um método fácil e simples de fazer isso.

Ilustro abaixo um caso que que preciso enviar os anexos de uma solicitação/workflow com um corpo de e-mail que possua formatação HTML em um evento de processo:

```javascript
/**
 * Método para enviar os anexos de uma solicitação
 * anexadas em um e-mail
 *
 * @param {string} assunto Assunto do e-mail
 * @param {string} conteudo Corpo do e-mail escrito em HTML
 * @param {string} to Destinatário principal
 * @param {array} cc Array com as cópias
 * @param {array} cco Array com as cópias ocultas
 *
 * @returns {void}
 */
function sendMail(assunto, conteudo, to, cc, cco) {
    var docService = fluigAPI.getDocumentService();
    var username = "login@email.com";
    var nameuser = 'Nome Completo';
    var password = "senha";
    var host = "smtp.office365.com";
    var port = "587";

    var tmpHtml = org.jsoup.Jsoup.parse(conteudo);

    var props = new java.util.Properties();
    props.put("mail.transport.protocol", "smtp");
    props.put("mail.smtp.auth", "true");
    props.put("mail.smtp.starttls.enable", "true");
    props.put("mail.smtp.host", host);
    props.put("mail.smtp.port", port);

    var attachments = hAPI.listAttachments();
    var session = javax.mail.Session.getDefaultInstance(props);
    var message = new javax.mail.internet.MimeMessage(session);
    var messageBodyPart = new javax.mail.internet.MimeBodyPart();
    var multipart = new javax.mail.internet.MimeMultipart("mixed");
    var transport = session.getTransport();

    message.setFrom(new javax.mail.internet.InternetAddress(username, nameuser));
    message.setSubject(assunto);

    message.addRecipient(
        javax.mail.Message.RecipientType.TO,
        new javax.mail.internet.InternetAddress(to)
    );

    if (cc && cc.length) {
        for (var i in cc) {
            message.addRecipient(
                javax.mail.Message.RecipientType.CC,
                new javax.mail.internet.InternetAddress(cc[i])
            );
        }
    }

    if (cco && cco.length) {
        for (var j in cco) {
            message.addRecipient(
                javax.mail.Message.RecipientType.BCC,
                new javax.mail.internet.InternetAddress(cco[j])
            );
        }
    }

    for (var i = 0; i < attachments.size(); i++) {
        var anexo = attachments.get(i);
        var publicUrl = docService.getDownloadURL(anexo.getDocumentId());

        var attachment = new javax.mail.internet.MimeBodyPart();
        attachment.setDataHandler(new javax.activation.DataHandler(new java.net.URL(publicUrl)));
        attachment.setDisposition(javax.mail.internet.MimeBodyPart.ATTACHMENT);
        attachment.setFileName(anexo.getDocumentDescription());

        multipart.addBodyPart(attachment);
    }

    messageBodyPart.setContent(tmpHtml.toString(), "text/html; charset=utf-8");
    multipart.addBodyPart(messageBodyPart);

    message.setContent(multipart);

    transport.connect(username, password);
    transport.sendMessage(message, message.getAllRecipients());
}
```

Exemplo de chamada:

```javascript
var cc = ["email_um@email.com", "email_dois@email.com"]
var cco = ["email_tres@email.com", "email_quatro@email.com"]
var corpoHtml = "<h1>Hello e-mail com anexos!</h1>"

try {
    sendMail("Assunto aqui", corpoHtml, "teste@email.com", cc, cco);
} catch (error) {
    log.info("Falha no envio!!");
    log.error(e);
}
```

Neste caso, o cliente utiliza o Office365, agora é só adaptar de acordo com o cliente de e-mail, inclusive é possível escrever este mesmo código em um dataset, para que você possa utilizar em mais lugares, mas ainda não tive tempo de fazer isso.

Espero que minha primeira contribuição seja de grande utilidade para nossa comunidade!

PS: Se alguém fizer um dataset bonitinho pra isso, por favor, compartilha aqui!!

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 01/07/2021, 16:59 | ❤️ 1

Super útil! Obrigado por compartilhar!

Vou tentar implementar.

Aqui só tive 1 situação que precisava mandar 1 anexo no e-mail e acabamos enviando o link de download mesmo.

---

## Resposta #2

**Sérgio Machado** (@sergio.machado) — 01/07/2021, 20:03 | ❤️ 1

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/vinny.silveira/48/16_2.png) vinny.silveira:
>
> > Neste caso, o cliente utiliza o Office365, agora é só adaptar de acordo com o cliente de e-mail, inclusive é possível escrever este mesmo código em um dataset, para que você possa utilizar em mais lugares, mas ainda não tive tempo de fazer isso.
> >
> > Espero que minha primeira contribuição seja de grande utilidade para nossa comunidade!
> >
> > PS: Se alguém fizer um dataset bonitinho pra isso, por favor, compartilha aqui!!

Parabéns cara, eu também percebi essa dor entre os colegas.

Eu tenho vários processos que utiliza envio de anexos, onde não é possível resolver com o link público, então tive que desenvolver uma aplicação em node js.

Esses dias eu estava olhando essa classe javax.mail e imaginei que fosse realmente possível, mas como meu conhecimento em java é limitado, deixei pra lá rs.

Assim que tiver um tempo vou testar essa solução.

---

## Resposta #3

**Igor Rodrigues** (@fluigor.com.br) — 02/07/2021, 19:17 | ❤️ 1

Brabissimo [@vinny.silveira](/u/vinny.silveira)

Parabens!

---

## Resposta #4

**Daniel Cabral Santos** (@daniel.cabral) — 07/07/2021, 08:53 | ❤️ 1

Xá comigo esse dataset!

---

## Resposta #5 ✅ RESPOSTA ACEITA

**Sérgio Machado** (@sergio.machado) — 11/08/2022, 10:02 | ❤️ 7

Fala aí pessoal, depois de muito tempo retornei aqui nesse tópico para agradecer a solução, agora não preciso mais desenvolver mais APIs para realizar essa tarefa.

Para quem quiser, eu fiz o dataset que pode ser encontrado aqui nesse link [Enviar e-mail com anexos no Fluig](https://github.com/sergiomachadosilva/fluig-datasets/blob/master/dsEnviarEmailComAnexos/README.md).

Aproveitei para fazer algumas melhorias, como por exemplo ao invés de usar o link público, passei a buscar o arquivo físico do anexo, pois tive problemas quando utilizei em um projeto e migrei para produção que utilizava *load balance*.

---

## Resposta #6

**Daniel Cabral Santos** (@daniel.cabral) — 12/08/2022, 09:29 | ❤️ 1

SENSACIONAL!!! Muito obrigado por compartilhar!

---

## Resposta #7

**Matheus Mósso** (@msmosso) — 07/10/2022, 07:05 | ❤️ 1

Excelente Vinny!

Apenas para destacar que no exemplo de chamada o catch recebe a variável error, mas o log.error usa a variável e.

---

## Resposta #8

**Jonatas Locateli** (@jonatas.locateli) — 10/11/2022, 18:13 | ❤️ 1

[@sergio.machado](/u/sergio.machado) se ao invés de enviar um arquivo que está publicado no GED, for um base64, como faço utilizando esse dataset?

---

## Resposta #9

**Sérgio Machado** (@sergio.machado) — 17/12/2022, 10:56

Tive essa mesma curiosidade, mas não tive tempo ainda de testar. Uma alternativa seria você salvar o arquivo no GED, e após envio do e-mail deletar este arquivo.

---

## Resposta #10

**Bruno Gasparetto** (@Bruno_Gasparetto) — 19/12/2022, 09:36 | ❤️ 1

Pelo que vi o dataset usa `javax.activation.DataHandler` para inserir o anexo e como tem acesso ao arquivo utiliza o `javax.activation.FileDataSource` como fonte.

Então talvez seja só trocar essa parte por:

```javascript
new javax.activation.DataHandler(
    new javax.mail.util.ByteArrayDataSource(
        org.apache.axiom.util.base64.decode("aqui é a string em base64")
    )
);
```

Mas só testando pra confirmar.

---

## Resposta #11

**Sérgio Machado** (@sergio.machado) — 06/01/2023, 22:41 | ❤️ 2

Fala aí [@jonatas.locateli](/u/jonatas.locateli), cara depois de alguns testes aqui encontrei a solução, irei postar aqui o trecho do código, mas depois irei adaptar este dataset para receber também base64 de arquivos.

Primeiro você terá que converter o base64 em um array de bytes:

```auto
var byteArray = java.util.Base64.getDecoder().decode(new String("BASE64-AQUI"));
```

Depois alterar este código abaixo

```auto
attachment.setDataHandler(new javax.activation.DataHandler(new javax.activation.FileDataSource(arquivo)));
```

Por este aqui

```auto
attachment.setDataHandler(new javax.activation.DataHandler(new javax.mail.util.ByteArrayDataSource(byteArray, "application/octet-stream")));
```

Testei aqui com um arquivo pdf e com uma planilha do excel, funcionou perfeitamente.

---

## Resposta #12

**Sérgio Machado** (@sergio.machado) — 13/01/2023, 10:02 | ❤️ 2

[@jonatas.locateli](/u/jonatas.locateli) eu alterei este dataset, pois tive a mesma necessidade em um projeto.

Agora é possível enviar tanto arquivos que estejam no GED, quanto arquivos que estejam em base64.

Para isso, a única coisa que irá precisar fazer quando quiser enviar em base64, é informar um objeto com as seguintes propriedades:

```auto
{stringBase64: "BASE64-AQUI", nomeArquivo: "faturamento_2023.pdf", tipo: "base64"}
```

Uma preocupação que você deve ter, é que você precisará saber a extensão do arquivo antes, pois caso informe uma extensão diferente, o arquivo será corrompido.

Procurei uma solução em que eu pudesse usar no Fluig para descobrir a extensão do arquivo através da string base64, mas não obtive sucesso.

---

## Resposta #13

**Jonatas Locateli** (@jonatas.locateli) — 13/01/2023, 11:00

[@sergio.machado](/u/sergio.machado) muito obrigado! Vou testar em um projeto e certamente será muito útil.

---

## Resposta #14

**Bruno Gasparetto** (@Bruno_Gasparetto) — 13/01/2023, 11:19 | ❤️ 1

Show!!!

Depois vou copiar esse dataset pro meu projeto. Certamente num futuro próximo terei que fazer isso de enviar anexo ao invés de somente o link de download (principalmente se for pra fornecedores/clientes).

A extensão já vi sugestão de analisar o começo da string e a partir do tipo definir a extensão.

[stackoverflow.com](https://stackoverflow.com/questions/25763533/how-to-identify-file-type-by-base64-encoded-string-of-a-image)

[![dinesh707](https://i.stack.imgur.com/E8ubp.jpg?s=256&g=1)](https://stackoverflow.com/users/393639/dinesh707)

#### [How to identify file type by Base64 encoded string of a image](https://stackoverflow.com/questions/25763533/how-to-identify-file-type-by-base64-encoded-string-of-a-image)

**java, image, mime-types**

asked by [dinesh707](https://stackoverflow.com/users/393639/dinesh707) on [10:52AM - 10 Sep 14 UTC](https://stackoverflow.com/questions/25763533/how-to-identify-file-type-by-base64-encoded-string-of-a-image)

Então seria analisar os vários tipos e colocar a extensão automaticamente.

Mas se pegou a string base64 de algum lugar provavelmente sabe também a extensão do arquivo baseado no nome né.

---

## Resposta #15

**Sérgio Machado** (@sergio.machado) — 13/01/2023, 12:30

Pois é Bruno, estou utilizando em todos os meus projetos.

Agora depois que você disse isso, eu fiquei com uma “pulga atrás da orelha”. Desconfio que se enviar um base64 com o Mime Type irá gerar um erro, principalmente se enviado pelo front-end.

Os base64 de pdf e excel que eu gero não tem o mime type no início da string. No final das contas acredito que será desnecessário isso, o desenvolvedor que se responsabilize por informar a extensão correta hahaha.

---

---

# Erro ao criar Widget - Eclipse Luna

> **Fonte:** [https://fluiggers.com.br/t/erro-ao-criar-widget-eclipse-luna/2780](https://fluiggers.com.br/t/erro-ao-criar-widget-eclipse-luna/2780)
> **Categoria:** WCM
> **Criado em:** 09/05/2024, 09:11
> **Visualizações:** 249 | **Likes:** 2 | **Respostas:** 4

---

## Pergunta original

**Igor Davanço** (@igordavanco) — 09/05/2024, 09:11

Pessoal, bom dia!

Alguém já se deparou com o erro abaixo ao criar uma Widget? O que pode ser?

![ERRO WIDGET](https://fluiggers.com.br/uploads/default/original/2X/2/20a5f7f94f2ffbc6b75255f2f942e26f337e39d3.png)

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 09/05/2024, 12:07

Pela descrição do erro tem caractere inválido no caminho onde sua widget será criada. Talvez esteja implicando com os espaços que tem no caminho.

Mas nunca tive erro parecido.

---

## Resposta #2 ✅ RESPOSTA ACEITA

**Leonardo Masera** (@Leonardo_Masera) — 09/05/2024, 12:22

Provavelmente é porque esta tentando salvar no OneDrive (o caminho para ele tem espaços e -) tenta criar em uma pasta padrão em seu computador.

---

## Resposta #3

**Igor Davanço** (@igordavanco) — 10/05/2024, 10:52

Sim, o estranho é que sempre criei meus projetos e componentes nessa pasta e nunca tive nenhum problema. Começou ontem. Mas já alterei para uma outra pasta e funcionou. Obrigado.

---

## Resposta #4

**Igor Davanço** (@igordavanco) — 10/05/2024, 10:52 | ❤️ 1

Era isso mesmo, o estranho é que sempre criei meus projetos e componentes nessa pasta e nunca tive nenhum problema. Começou ontem. Mas já alterei para uma outra pasta e funcionou. Obrigado.

---

## Resposta #5

**Filipe Miranda** (@Filipe_Miranda) — 27/06/2025, 09:58 | ❤️ 1

Igor, como muda o caminho da pasta?
Isso está acontecendo comigo.

---

## Resposta #6

**Igor Davanço** (@igordavanco) — 30/06/2025, 08:27

Olá Filipe.

Na verdade, vc apenas copia a pasta inteira da sua Workspace para um outro diretório, por exemplo a pasta de “Documentos”, e dentro do Eclipse vc seleciona esse novo diretório (é recomendável que o diretório não possua nenhum espaço ou caracteres especiais para evitar esses problemas), conforme exemplo abaixo:

![FLUIG_01](https://fluiggers.com.br/uploads/default/original/2X/c/ca169c39b1f52c9f93b071ae4b8fa4a3af556798.png)

![FLUIG_02](https://fluiggers.com.br/uploads/default/original/2X/d/d61e3ed23f6ebb6e305a0baeb6256ec015cd1b94.png)

---

## Resposta #7

**Bruno Gasparetto** (@Bruno_Gasparetto) — 30/06/2025, 12:33

Agora fiquei curioso se a Extensão do VS Code tem esse mesmo problema. Nunca imaginei usar caminho de pasta com nome acentuado e espaços (sou muito das antigas que qualquer coisa diferente dava problema, hehehe).

---

---

# Erro na integração

> **Fonte:** [https://fluiggers.com.br/t/erro-na-integracao/634](https://fluiggers.com.br/t/erro-na-integracao/634)
> **Categoria:** WCM
> **Criado em:** 31/08/2021, 12:37
> **Visualizações:** 894 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**RobertoCarlos** (@RobertoCarlos) — 31/08/2021, 12:37

Boa Tarde,
Alguem ja viu este erro, e como corrigir.

ERROR \[com.datasul.technology.webdesk.foundation.servlet.StreamControlWCM\] (default task-9518) StreamControlWCM failed: java.lang.RuntimeException: java.lang.IllegalStateException: UT010019: Response already commited
at io.undertow.servlet@2.0.27.Final//io.undertow.servlet.spec.RequestDispatcherImpl.forwardImpl(RequestDispatcherImpl.java:251)
at io.undertow.servlet@2.0.27.Final//io.undertow.servlet.spec.RequestDispatcherImpl.forwardImplSetup(RequestDispatcherImpl.java:149)
at io.undertow.servlet@2.0.27.Final//io.undertow.servlet.spec.RequestDispatcherImpl.forward(RequestDispatcherImpl.java:111)
at deployment.fluig-server.ear.ecmvoldemort.war//com.datasul.technology.webdesk.foundation.servlet.StreamControlWCM.service(StreamControlWCM.java:284)
at javax.servlet.api@2.0.0.Final//javax.servlet.http.HttpServlet.service(HttpServlet.java:590)

---

## Resposta #1

**Herick Freitas** (@herickfreitas) — 04/11/2024, 16:18

Boa tarde
Tive o mesmo problema, resolvemos assim!

[https://tdninterno.totvs.com/pages/releaseview.action?pageId=419529562](https://tdninterno.totvs.com/pages/releaseview.action?pageId=419529562)

ARQ - Problemas com caracteres especiais na publicação em ambiente Linux

---

---

# Erros em Promises ao aplicar oAuth em widgets

> **Fonte:** [https://fluiggers.com.br/t/erros-em-promises-ao-aplicar-oauth-em-widgets/2662](https://fluiggers.com.br/t/erros-em-promises-ao-aplicar-oauth-em-widgets/2662)
> **Categoria:** WCM
> **Tags:** `dataset`
> **Criado em:** 22/03/2024, 09:57
> **Visualizações:** 151 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**Gabriel Borchardt** (@borchardt) — 22/03/2024, 09:57

Olá pessoal, estou com um problema que não estou identificando a razão, tenho duas funções que usam uma biblioteca de oAuth para eu conseguir exibir widgets que usam datasets em páginas publicas… Porém existem vários casos que em algumas widgets carregam e outras não… As que naõ dão aparece isso

```auto
Uncaught (in promise) Error
    at Object.consultarDataset (graphic_planoVendas_pt_BR.js?v=1.8.1-240206:126:13)
```

Como eu consulto é assim

```auto
this.consultarDataset("dataSet", null, null, null).then((ds) => {
//lógica da widget ao consultar
}
```

as funções para trazer a consulta são essas

```auto
async consultarDataset(name, fields, constraints, order) {
        const url = "/api/public/ecm/dataset/datasets/";
        const method = "POST";
        const body = JSON.stringify({ name, fields, constraints, order });

        const headers = new Headers(this.getOAuthHeaders({ url, method }));
        headers.set("Content-Type", "Application/JSON");

        const response = await fetch(url, {
            method,
            body,
            headers
        });

        if (!response.ok) {
            const error = await response.text();
            throw new Error(error);
        }

        const data = await response.json();
        return data.content;
    },

    getOAuthHeaders({ url, method }) {
        const userCredentials = {
            consumer: {
                key: "consumerKey",
                secret: "segredo"
            },
            signature_method: "PLAINTEXT"
        };

        const token = {
            key: "keySecreta",
            secret: "segredoToken"
        };

        const oauth = OAuth(userCredentials);
        return oauth.toHeader(oauth.authorize({ url, method }, token));
    }
```

Alguém tem uma luz? acontece que carregam várias e algumas não, mas quase nunca todas.

---

## Resposta #1

**Pablo Valle** (@pablooav) — 22/03/2024, 17:22

Vamos lá, nessa mensagem de erro não da pra identificar muito bem o que está acontecendo, pode ser um erro de sintax no seu código ou a requisição do fetch deu erro e não está bem tratado.
Uma primeira análise que vc pode fazer seguindo a mesma estrutura que vc criou, é conferir no console na aba NETWORK se ao menos houve a requisição POST e por lá você consegue resgatar a mensagem de erro que pode te dar um norte.

Uma maneira que gosto de desenvolver chamadas em páginas publicas utilizando promises é com o async/await acho que o código fica top em questão de organização e bem tratado. Se quiser fazer um teste utilizando meu modelo é desta forma:

```auto
function consultarDataset(datasetName) {
    return new Promise((resolve, reject) => {
      try {
        const url = '/api/public/ecm/dataset/datasets/';
        $.ajax({
          type: 'POST',
          url: url,
          contentType: 'application/json',
          headers: getOAuthHeaders(url,'POST'),
          data: JSON.stringify({
            name: datasetName,
            fields: null,
            constraints: null,
            order: null,
          }),
          success: function (result) {
            const { values } = result.content
            if(!values) return reject('Dataset não retornou nada.') //Caso não retorne nada, irá retornar um reject com a mensagem (Este cenário costuma acontecer quando o dataset não está tratando erros e ocorre algum problema dentro dele, dai ele retorna "{}")
            if(!values.length) return resolve([]); //Caso o dataset não retorne nenhuma linha, irá retornar vazio
            return resolve(values); //Caso o dataset retorne linhas, irá retornar o array com os valores
          },
          error: function (jqXHR, textStatus, errorThrown) {
            console.error('RESPOSTA vcXMLRPC com erro', jqXHR, textStatus, errorThrown);
            return reject(new Error(jqXHR.responseText ? jqXHR.responseText : jqXHR.statusText)); //Caso der erro irá retornar um reject que irá cair dentro do catch
          },
        });
      } catch (err) {
        return reject(new Error(err));
      }
    });
  }

  var suaWidget = SuperWidget.extend({
    //Importante adicionar o async pra conseguir trabalhar com async/await na função pai que irá chamar a função que consulta dataset
    async init() {

      try {
         //Aqui é onde você vai chamar a função que consulta o dataset
        const users = await consultarDataset('colleague');

        //Aqui você pode fazer o que quiser com o resultado da consulta
        console.log(users);
      } catch (error) {
        //Adicionar aqui o tratamento de erro seja um modal, alert, console.log, etc
        console.log('ERROR: ', error);
      }



    }
  })
```

A lógica é bem proxima da sua, se quiser utilizar o .then() no lugar do async/await também é possível basta vc adaptar, mas dessa forma que te mandei está bem tratado os erros, então independente onde ocorrer o erro (que pode ser na chamada ajax, pode ser syntax da sua função, retorno de erro do dataset, etc) no catch você conseguirá resgatar a mensagem de erro e poder tratar da forma que quiser.

No meu caso ai estou chamando o dataset colleague padrão do Fluig, faz um teste no seu cenário e me informa se deu bom. :wink:

---

## Resposta #2

**Gabriel Borchardt** (@borchardt) — 25/03/2024, 09:00

Obrigado pela resposta Pablo.

O grande problema é que ao recarregar a página as mesmas widgets com erro podem funcionar o request. Todas widgets usam essa função de consultarDataset para trazer seus dados, porém ao deixar a página publica algumas se perdem, mas ao recarregar a página podem funcionar ou não, parece aleatório… Quando está com um usuário logado todas funcionam normalmente…

Testei aqui o seu código e foi praticamente o mesmo resultado, ta bem confuso essa situação.

---

---

# Exibir valor vindo da API do fluig

> **Fonte:** [https://fluiggers.com.br/t/exibir-valor-vindo-da-api-do-fluig/1001](https://fluiggers.com.br/t/exibir-valor-vindo-da-api-do-fluig/1001)
> **Categoria:** WCM
> **Criado em:** 01/04/2022, 10:29
> **Visualizações:** 390 | **Likes:** 1 | **Respostas:** 1

---

## Pergunta original

**Daniel ** (@daniel_fmartins) — 01/04/2022, 10:29

Construi uma widget que lista informações de processos do fluig.
Filtrei para que a API retorne o código(processInstanceId, um valor inteiro) e o objeto requester. É retornado tudo ok, quando executei o console.log no navegador.

Dessa forma o objeto DataItems é composto por um inteiro e um objeto.

Porém ao exibir isso no datatable esse valor não é encontrado. Tentei acessá-lo normalmente através do “.” como acesso um objeto. Isso é possível?

![image](https://fluiggers.com.br/uploads/default/original/1X/0ecbe7a9c403290f736f4ea487c3ffff99d51fe4.png)

---

## Resposta #1

**Sérgio Machado** (@sergio.machado) — 01/04/2022, 10:37 | ❤️ 1

Tenta assim:

```auto
'requester\\.code'
```

---

## Resposta #2

**Daniel ** (@daniel_fmartins) — 01/04/2022, 11:35

Não consegui :confused:

Pesquisando outra forma, se encontrar retorno aqui.

---

---

# Fluig API para anexar documentos a uma solicitação

> **Fonte:** [https://fluiggers.com.br/t/fluig-api-para-anexar-documentos-a-uma-solicitacao/2816](https://fluiggers.com.br/t/fluig-api-para-anexar-documentos-a-uma-solicitacao/2816)
> **Categoria:** WCM
> **Tags:** `dataset`, `fluigapi`
> **Criado em:** 27/05/2024, 10:54
> **Visualizações:** 97 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Isaac Figueiredo** (@kngrev) — 27/05/2024, 10:54

Bom dia,

Alguém sabe informar se existe algum endpoint no fluig api rest para anexar documentos a uma solicitação aberta.

---

---

# Importar para o Eclipse uma Widget existente numa página

> **Fonte:** [https://fluiggers.com.br/t/importar-para-o-eclipse-uma-widget-existente-numa-pagina/924](https://fluiggers.com.br/t/importar-para-o-eclipse-uma-widget-existente-numa-pagina/924)
> **Categoria:** WCM
> **Criado em:** 14/02/2022, 07:54
> **Visualizações:** 1140 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 14/02/2022, 07:54

Uma pergunta recorrente, mas que não vejo resposta para o que eu preciso: eu baixei uma página que tem uma widget que preciso.

Mas, e agora, como faço para incorporar essa widget num dos projetos do meu Eclipse Luna?

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 14/02/2022, 10:09 | ❤️ 1

[gist.github.com](https://gist.github.com/brunogasparetto/e68e82f3d310d8b24f2048ccc6fef48a)

#### [https://gist.github.com/brunogasparetto/e68e82f3d310d8b24f2048ccc6fef48a](https://gist.github.com/brunogasparetto/e68e82f3d310d8b24f2048ccc6fef48a)

##### importar\_widget\_fluig.md

```Markdown
# Importar Widget do Fluig no Eclipse (Fluig Studio)

Você pode baixar a Widget pelo **Painel de Controle** exportando a página onde a Widget está
ou indo no diretório do Fluig (no computador onde ele está instalado) e copiar o `.war` da pasta `appserver/apps`.

O arquivo .war nada mais é do que um arquivo compactado. Você pode usar qualquer descompactador
(e se quiser até renomear pra .zip pro Windows reconhecer).

Pra editar eu aconselho a fazer o seguinte procedimento:
```
This file has been truncated. [show original](https://gist.github.com/brunogasparetto/e68e82f3d310d8b24f2048ccc6fef48a)

---

---

# Inserção em banco de dados Oracle através de uma widget

> **Fonte:** [https://fluiggers.com.br/t/insercao-em-banco-de-dados-oracle-atraves-de-uma-widget/898](https://fluiggers.com.br/t/insercao-em-banco-de-dados-oracle-atraves-de-uma-widget/898)
> **Categoria:** WCM
> **Criado em:** 29/01/2022, 13:11
> **Visualizações:** 419 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 29/01/2022, 13:11

É possível provocar um dataset avançado via javascript numa widget?

Sei que posso fazer isto num evento de processo, mas consigo fazer via javascript atrelado a uma widget?
O código abaixo me dá erro

> [http://meufluig.com.br:8080/api/public/ecm/dataset/datasets/](http://meufluig.com.br:8080/api/public/ecm/dataset/datasets/) 500 (Internal Server Error)

e sequer o server.log do servidor mostra log.info(“===dataset ds\_ucrg\_insere\_ma”);

Ou seja, nem chegar a entrar, aparentemente, no código do dataset.

Será que o código abaixo só funcionaria se fosse adaptado para um evento de processo? Em widget não funciona?

```auto
let numFile=0;
	let txtResumo ='Resumo inserido';
	let numValor=12345.00;
	let numMoeda=1;
	let txtSC = 'AMMF,MMS,MF';
	let txtOutros='AGV,AHS,ASO';
	let txtEscr ='Escritorio 1,Escritorio 2';
	let txtLink = 'http://qualquer.com.br';
	let numTimeStamp = 1643471763431;
	let txtCartaHono = 'http://link-para-carta-hono.com.br';
	let numHonoEfet = 100000.00;
	let numUTs = 100;
	let arrayCampos=[
	            numFile,
	            txtResumo,
	            numValor,
	            numMoeda,
	            txtSC,
	            txtOutros,
	            txtEscr,
	            txtLink,
	            numTimeStamp,
	            txtCartaHono,
	            numHonoEfet,
	            numUTs
	            ];//arrayCampos
	console.log(arrayCampos);
	let insercao = DatasetFactory.getDataset("ds_ucrg_insere_ma", arrayCampos, null, null);
		console.log("Retornado do dataset: ",insercao);
```

O dataset avançado indicado acima tem o código

```auto
function createDataset(fields, constraints, sortFields) {
	log.info("===dataset ds_ucrg_insere_ma");

    var dataset = DatasetBuilder.newDataset();
    dataset.addColumn("resultado");

    var dataSource = "/jdbc/homologacao-sisjuri-p02";
    var ic = new javax.naming.InitialContext();
    var ds = ic.lookup(dataSource);
  var myQuery = "insert into RCR.Z_UCRG_MA (CASO_MA,RESUMO_MA,VALOR_MA,"+
   "MOEDA_MA,SOCIOS_MA,OUTROS_MA,ESCR_MA,LINK_MA,"+
		"DATA_MA,CARTAHONO_MA,HONOEFET_MA,UTS_MA) values ("+
    	fields[0]+","+
    	"'"+fields[1]+"',"+
    	fields[2]+","+
    	fields[3]+","+
    	"'"+fields[4]+"',"+
    	"'"+fields[5]+"',"+
    	"'"+fields[6]+"',"+
    	"'"+fields[7]+"',"+
    	fields[8]+","+
    	"'"+fields[9]+"',"+
    	fields[10]+","+
    	fields[11]+
    	")";

    log.info("===myQuery: "+myQuery);

    try {
        var conn = ds.getConnection();
        var stmt = conn.createStatement();

        var rs = stmt.executeQuery(myQuery);

    } catch (e) {
        log.error("ERRO==============> " + e.message);

        dataset.addRow([e.message]);
    } finally {
        if (stmt != null) {
            stmt.close();
        }
        if (conn != null) {
            conn.close();
        }

        dataset.addRow(["Ok"]);
    }

    return dataset;
}
```

---

## Resposta #1

**MAURO SIMOES** (@Mautresim) — 29/01/2022, 16:37

Eu descobri que o erro acontece quando, na chamada do Dataset no código do javascript da Widget, eu passo o arrayCampos.
Para teste, seu eu passar nulo no array de campos, como abaixo…

`let insercao = DatasetFactory.getDataset("ds_ucrg_insere_ma",null,null,null);`

…e, no Dataset, eu engessar os valores a serem inseridos, conforme abaixo, funciona.

```auto
function createDataset(fields, constraints, sortFields) {

    var dataset = DatasetBuilder.newDataset();
    dataset.addColumn("resultado");

    var dataSource = "/jdbc/homologacao-sisjuri-p02";
    var ic = new javax.naming.InitialContext();
    var ds = ic.lookup(dataSource);

    var myQuery = "insert into RCR.Z_UCRG_MA (CASO_MA,RESUMO_MA,VALOR_MA,"+
   "MOEDA_MA,SOCIOS_MA,OUTROS_MA,ESCR_MA,LINK_MA,DATA_MA,CARTAHONO_MA,"+
   "HONOEFET_MA,UTS_MA) values (4,'resumo do 4',4000.00,4,'xpto4,xptu4',"+
   "'zeb4,zec4','escritorio 4, escritorio 44','http://xxx4.com',"+
   "TO_DATE('24/01/2022'),'enderec carta hono 4',4000.00,400)";

    log.info("===myQuery: "+myQuery);

    try {
        var conn = ds.getConnection();
        var stmt = conn.createStatement();

        var rs = stmt.executeQuery(myQuery);

    } catch (e) {
        log.error("ERRO==============> " + e.message);

        dataset.addRow([e.message]);
    } finally {
        if (stmt !== null) {
            stmt.close();
        }
        if (conn !== null) {
            conn.close();
        }

        dataset.addRow(["Ok"]);
    }

    return dataset;

}//createDataset
```

Então, o problema acontece quando passo o array de campos.
Passando o array na chamada, o Dataset não consegue executar.

---

## Resposta #2 ✅ RESPOSTA ACEITA

**MAURO SIMOES** (@Mautresim) — 29/01/2022, 17:19

O problema foi resolvido.

Eu estava construindo um array com valores mistos, entre strings e numéricos.
Por alguma razão, o Fluig não aceita isto. Então, no desespero, quando eu pus aspas em torno do valores numéricos tudo funcionou perfeitamente.
Assim,

```auto
let arrayCampos=[
	            numFile,
	            txtResumo,
	            numValor,
	            numMoeda,
	            txtSC,
	            txtOutros,
	            txtEscr,
	            txtLink,
	            numTimeStamp,
	            txtCartaHono,
	            numHonoEfet,
	            numUTs
	            ];//arrayCampos
	console.log(arrayCampos);
	let insercao = DatasetFactory.getDataset("ds_ucrg_insere_ma", arrayCampos, null, null);
```

deveria ser

```auto
let arrayCampos=[
	            "'"+numFile+"'",
	              "'"+txtResumo+"'",
	              "'"+numValor+"'",
	              "'"+numMoeda+"'",
	              "'"+txtSC+"'",
	              "'"+txtOutros+"'",
	              "'"+txtEscr+"'",
	             "'"+ txtLink+"'",
	             "'"+ numTimeStamp+"'",
	              "'"+txtCartaHono+"'",
	              "'"+numHonoEfet+"'",
	             "'"+ numUTs+"'"
	            ];//arrayCampos
	console.log(arrayCampos);
	let insercao = DatasetFactory.getDataset("ds_ucrg_insere_ma", arrayCampos, null, null);
```

---

## Resposta #3

**Igor Rodrigues** (@fluigor.com.br) — 31/01/2022, 11:55

que lokuraaaaaaaaaaaaaaaaa O.o

---

---

# Intranet "pública"

> **Fonte:** [https://fluiggers.com.br/t/intranet-publica/2269](https://fluiggers.com.br/t/intranet-publica/2269)
> **Categoria:** WCM
> **Criado em:** 11/10/2023, 15:50
> **Visualizações:** 472 | **Likes:** 1 | **Respostas:** 4

---

## Pergunta original

**Gabriel Borchardt** (@borchardt) — 11/10/2023, 15:50

Olá, alguém aqui sabe como funciona a configuração de deixar páginas “públicas”? Eu inseri a opção PUBLIC na minha página mas sempre que tento acessar ela, pede autenticação, a ideia é nossa intranet ser publica no contexto da nossa rede…

---

## Resposta #1

**Guilherme Mesquita Rocha** (@gmesquita) — 17/10/2023, 14:28

Boa tarde!
Para acessar de maneira pública, você precisa retirar da sua URL o `portal/p/codEmpresa`, ex:
`https:/endereco.fluig.com/widget_code`

---

## Resposta #2

**Gabriel Borchardt** (@borchardt) — 17/10/2023, 15:53

Deu certo amigo… Porém uma coisa que não funcionou foi os widgets que utilizam datasets vindo do ERP, pois como ficou publico ele nao está logado ainda, só funciona depois de logado, como posso fazer com que o dataset apareça mesmo nao estando logado?

---

## Resposta #3

**Guilherme Mesquita Rocha** (@gmesquita) — 17/10/2023, 16:02

Cara, tem um tópico referente à isso…
É meio chatinho, rs, vou te passar pra você dar uma boa analisada, caso você não consiga, me avisa!

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/victorcastro/48/12_2.png) [Cliente externo sem usuário Fluig startar um processo e anexar documentos](https://fluiggers.com.br/t/cliente-externo-sem-usuario-fluig-startar-um-processo-e-anexar-documentos/307) [BPM](https://fluiggers.com.br/c/bpm/5)
>
> > Surgiu um cenário aqui onde um cliente externo (que não tem usuário no fluig) precisaria entrar em uma página pública, preencher um formulário, anexar alguns documentos e assim startar um processo levando essas informações e os anexos. Dá pra fazer isso? Como eu poderia fazer?

Apenas complementando, a ideia é que ao invés de utilizar o método `getDataset` do DatasetFactory, você faça via requisição ajax, passando as propriedades (consumer-key, consumer-secret e etc) das configurações do oAuth do seu ambiente.

Qualquer dúvida, me chame!

---

## Resposta #4

**Gabriel Borchardt** (@borchardt) — 18/10/2023, 07:55

Entendi, vi aqui o tópico e talvez isso seja mais complexo do que realmente eu precisaria, basicamente essa página é de acesso em rede da empresa, não de acesso de externos (a não ser com VPN), vc teria um exemplo de requisição ajax pra dataset? seria como se fosse um endpoint?

---

## Resposta #5

**Eduardo Vantini Neto** (@eduardo.vantini) — 19/10/2023, 09:34 | ❤️ 1

E ae [@borchardt](/u/borchardt) tudo certo? Segue um exemplo executando um dataset interno.

```auto
let result = "";

        //#region TODKEN OAUTH
            const oauth = OAuth({
                consumer: {
                    'key': `${_oauth.consumerKey}`,
                    'secret': `${_oauth.consumerSecret}`
                },
                signature_method: 'HMAC-SHA1',
                hash_function: function (base_string, key) {
                    return CryptoJS.HmacSHA1(base_string, key).toString(CryptoJS.enc.Base64);
                },
                nonce_length: 6
            });

            const token = {
                'key': `${_oauth.tokenKey}`,
                'secret': `${_oauth.tokenSecret}`
            };
        //#endregion

        //#region REQUEST API
            var request_data = {
                url: WCMAPI.getServerURL() + '/api/public/ecm/dataset/datasets',
                method: 'POST',
                data: {}
            };
        //#endregion

        //#region CONSTRAINTS
            let constraints = [];
            const processId = "wfTeste";

            constraints = [{
                _field: "workflowProcessPK.processInstanceId",
                _initialValue: numProcess,
                _finalValue: numProcess,
                _type: 1,
                _likeSearch: false
            },{
                _field: "processId",
                _initialValue: processId,
                _finalValue: processId,
                _type: 1,
                _likeSearch: false
            }];
        //#endregion

        //#region DATA
            let data = "";
            data = {
                "name": "workflowProcess",
                "fields": [],
                "constraints": constraints,
                "order": []
            };

        //#endregion

        $.ajax({
            url: request_data.url,
            type: request_data.method,
            contentType: "application/json",
            data: JSON.stringify(data),
            headers: oauth.toHeader(oauth.authorize(request_data, token)),
            async: false,
        }).done(function(data) {
            if (data.content.values.length > 0) {

                result = data.content.values;

            } else {
                FLUIGC.toast({
                    title: 'Erro: ',
                    message: 'Informações não encontradas',
                    type: 'danger'
                });
            }
        });
```

Você substituí as informações do OAUTH pelo seus tokens aí e adapta para o dataset que você precisa. Vê se te atende aí… boa sorte.

Abs

---

---

# Modificar elementos visuais nas páginas do Fluig

> **Fonte:** [https://fluiggers.com.br/t/modificar-elementos-visuais-nas-paginas-do-fluig/1564](https://fluiggers.com.br/t/modificar-elementos-visuais-nas-paginas-do-fluig/1564)
> **Categoria:** WCM
> **Criado em:** 05/01/2023, 10:53
> **Visualizações:** 307 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Portela** (@Portela) — 05/01/2023, 10:53

Pessoal, como faço pra modificar alguns elementos visuais nas páginas do fluig?

![pastas ecm](https://fluiggers.com.br/uploads/default/optimized/1X/3ff6958b6a8a8abe0173caafa9622cf8f1b54865_2_690x64.png)

Por exemplo, modificar a cor desses ícones da página de documentos

---

---

# Mudar Fonte Original do Fluig

> **Fonte:** [https://fluiggers.com.br/t/mudar-fonte-original-do-fluig/2261](https://fluiggers.com.br/t/mudar-fonte-original-do-fluig/2261)
> **Categoria:** WCM
> **Criado em:** 10/10/2023, 11:25
> **Visualizações:** 277 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Gabriel Borchardt** (@borchardt) — 10/10/2023, 11:25

Bom dia, alguém sabe a maneira de mudar a fonte principal do fluig? Atualmente quando eu coloco uma widget e no css dela eu coloco
\*{
font-´family: minha fonte;
}

toda a página fica com a fonte, mas gostaria de deixar ela padrão para todas as páginas do Fluig, porém isso não é possível no painel de controle, alguém sabe se tem algum arquivo que eu possa acessar e alterar a fonte?

---

---

# Navbar do wcm não aparecer para usuários não logados

> **Fonte:** [https://fluiggers.com.br/t/navbar-do-wcm-nao-aparecer-para-usuarios-nao-logados/2402](https://fluiggers.com.br/t/navbar-do-wcm-nao-aparecer-para-usuarios-nao-logados/2402)
> **Categoria:** WCM
> **Criado em:** 04/12/2023, 14:59
> **Visualizações:** 242 | **Likes:** 2 | **Respostas:** 3

---

## Pergunta original

**Gabriel Borchardt** (@borchardt) — 04/12/2023, 14:59

Olá pessoal, estou com um caso onde preciso ter o wcm.header do fluig quando o usuário está logado mas quando a página estiver pública (sem o /p/ na url) ele deve sumir, porém é o mesmo layout, tem como isso?

```auto
<@wcm.header authenticated="true"/>
```

Eu vejo que ele tem a propriedade authenticated mas quando troco para false ou retiro ele ainda continua aparecendo para quem não está logado, a ideia é ter uma navbar personalizada apenas para quando o usuário não estiver logado e vendo a página, e usar esse componente de header quando estiver logado.

---

## Resposta #1

**Guilherme Mesquita Rocha** (@gmesquita) — 04/12/2023, 15:25

Boa tarde!
Desconheço essa possibilidade… seria viável fazer uma tratativa tentando pegar alguma classe/id do elemento que há o cabeçalho do ambiente do Fluig? E aí, através do código: `WCMAPI.getUser()` você verifica se for `Guest` (isso significa que o usuário não está autenticado no Fluig), esconde o cabeçalho, caso contrário, mostre…

Ex:
![image](https://fluiggers.com.br/uploads/default/original/2X/e/efed98d9c509c542b3830e3a97d7aa07f868f399.png)

---

## Resposta #2

**Gabriel Borchardt** (@borchardt) — 04/12/2023, 15:38 | ❤️ 1

Entendi, parece um pouco fora da curva mas funcionaria sim… Pensei que existiria alguma opção nativa da plataforma para não ter que fazer algo do tipo, de qualquer forma, obrigado!

---

## Resposta #3

**Gabriel Borchardt** (@borchardt) — 04/12/2023, 15:45

[@gmesquita](/u/gmesquita) vc tem algum conhecimento sobre esse tópico?

> ![](https://fluiggers.com.br/letter_avatar_proxy/v4/letter/b/439d5e/48.png) [Integrar Formulário do Fluig com Sharepoint](https://fluiggers.com.br/t/integrar-formulario-do-fluig-com-sharepoint/2399/1) [Formulários](https://fluiggers.com.br/c/form-fluig-html/15)
>
> > Olá, alguém já fez integração de documentos enviados em forms do fluig para pastar do microsoft sharepoint?

---

## Resposta #4

**Guilherme Mesquita Rocha** (@gmesquita) — 04/12/2023, 15:46

Não tenho… também tenho curiosidade nisso hahaha! Vou aguardar a interação de alguém nesse tópico.

---

## Resposta #5 ✅ RESPOSTA ACEITA

**Gabriel Borchardt** (@borchardt) — 05/12/2023, 11:55 | ❤️ 1

pessoal, consegui com esse código abaixo, ele espera o conteúdo carregar para não bugar e seleciona o elemento com appcode do header do wcm e então verifica se o usuário é o guest, se sim deixa a nativa oculta e exibe a customizada!

```auto
document.addEventListener('DOMContentLoaded', function() {
  var nav = document.querySelectorAll('[appcode="responsive_header"]');
  var userAuth = WCMAPI.getUser();
  var guestNavbar = document.querySelectorAll('guest-navbar');

  nav.forEach(navbar => {
    if (userAuth === 'Guest') {
      navbar.style.display = 'none';
    } else {
      guestNavbar.style.display = 'none';
      navbar.style.display = 'block';
    }
  });

  console.log(userAuth);
});
```

---

---

# Paginação de Datasets

> **Fonte:** [https://fluiggers.com.br/t/paginacao-de-datasets/527](https://fluiggers.com.br/t/paginacao-de-datasets/527)
> **Categoria:** WCM
> **Criado em:** 24/06/2021, 08:03
> **Visualizações:** 1636 | **Likes:** 2 | **Respostas:** 3

---

## Pergunta original

**Vinicius de Moura Silveira** (@vinny.silveira) — 24/06/2021, 08:03

Bom dia galera! Tudo certo?

Queria saber se existe algo pronto no Fluig mesmo que faça a paginação dos registros de um dataset, assim como fazemos em querys SQL triviais com LIMIT e OFFSET.

Valeu!!

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 24/06/2021, 09:20

Sei que pela DatasetFactory.getDataset é possível enviar a constraint sqlLimit ([documentação](https://tdn.totvs.com/display/public/fluig/Acessando+Datasets#AcessandoDatasets-ConstraintsAvan%C3%A7adas))

Pela API REST /ecm/dataset/search também é possível passar o limite de resultados.

Porém em nenhum deles vi a opção (ao menos não achei na documentação) dizendo que é possível passar o offset. Então teria que ordenar pelo ID, por exemplo, e na próxima chamada solicitar somente os resultados com o ID maior do que o último recebido.

---

## Resposta #2

**Vinicius de Moura Silveira** (@vinny.silveira) — 24/06/2021, 09:55

Bom dia [@Bruno\_Gasparetto](/u/bruno_gasparetto) !! Valeu pelo retorno, esse lance de ordenar pelo ID e fazer um where não é tão performático quanto o offset, que vai direto na fatia correta de dados, mas a ideia é muito boa mesmo.

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 24/06/2021, 15:23 | ❤️ 1

Pode ser que tenha um jeito de mandar o offset. Já percebi que o o Fluig tem muita documentação oculta.

Mas a questão da performance do where é meio relativo. Teria que estudar bem isso. Em teoria a pesquisa pelo ID ocorreria em uma chave primária, então seriam menos resultados encontrados e o banco só limitaria em X a quantidade de registros retornados. Já com offset o banco encontra sempre todos os resultados e então precisa correr até o registro Y e retornar X resultados.

Pode ser que o Fluig não tenha implementado isso porque o SQL Server e Oracle não davam suporte, mas agora que ambos possuem LIMIT e OFFSET seria uma ótima a TOTVS acrescentar essa opção aos Datasets.

---

## Resposta #4

**Vinicius de Moura Silveira** (@vinny.silveira) — 25/06/2021, 16:33 | ❤️ 1

Valeu a dica [@Bruno\_Gasparetto](/u/bruno_gasparetto) !! Como estou construindo querys complexas, acabei optando por enviar o LIMIT e OFFSET pelas constraints quando consulta o dataset via REST, e faço a paginação no front com o Datatables.

---

---

# Problema com botão em tabela pix x filho

> **Fonte:** [https://fluiggers.com.br/t/problema-com-botao-em-tabela-pix-x-filho/3180](https://fluiggers.com.br/t/problema-com-botao-em-tabela-pix-x-filho/3180)
> **Categoria:** WCM
> **Tags:** `form`
> **Criado em:** 27/02/2025, 11:02
> **Visualizações:** 62 | **Likes:** 4 | **Respostas:** 2

---

## Pergunta original

**lucaslamb** (@lucaslamb) — 27/02/2025, 11:02 | ❤️ 1

Alguém já conseguiu lidar com botões em uma tabela pai x filho? Estou com um problema onde, o botão funciona normalmente está tudo correto, e um botão para adicionar imagem e outro que apresenta a imagem em um modal.

![image](https://fluiggers.com.br/uploads/default/original/2X/d/d81403e2594809814c97a27a2e8b18706a6fff0f.png)

Porém quando passo a atividade o index é perdido no button de visualizar a imagem e não consigo mais encontrar ele para apresentar a imagem.

Esse é o campo na atividade ativo

```auto
<div class="btn-group">
    <a class="file-input-wrapper btn btn-primary btn-md">
        <input type="file" name="img_btn_m___2" id="img_btn_m___2" data-toggle="tooltip" data-placement="left" title="Adicionar Foto" onclick="uploadFile(this)">
        <i class="flaticon flaticon-camera icon-md" aria-hidden="true" name="img_btn_m___2___2" id="img_btn_m___2___2" value=""></i>
        <input type="hidden" name="obrigafotom___2" id="obrigafotom___2" value="Sim">
    </a>
    <button class="btn btn-info" id="data_modal_img_m___2" onclick="fnAbreFoto(this)" value="" name="data_modal_img_m___2">
        <i class="flaticon flaticon-view icon-md" aria-hidden="true"></i>
    </button>
</div>
```

Esse é o campo em outra atividade

```auto
<div class="btn-group">
    <a class="file-input-wrapper btn btn-primary btn-md">
        <input type="file" name="img_btn_m___2" id="img_btn_m___2" data-toggle="tooltip" data-placement="left" title="" onclick="uploadFile(this)" value="" disabled="" data-original-title="Adicionar Foto">
        <i class="flaticon flaticon-camera icon-md" aria-hidden="true"></i>
        <input type="hidden" name="obrigafotom___2" id="obrigafotom___2" value="Sim">
    </a>
    <button class="btn btn-info btn-md" id="data_modal_img_m" onclick="fnAbreFoto(this)" >
        <i class="flaticon flaticon-view icon-md" aria-hidden="true"></i>
    </button>
</div>
```

E eu preciso desse index pois é como eu busco o url da imagem:

```auto
function fnAbreFoto(campo){
  var tab = campo.id.split("_")[3];
  var index = campo.id.split("___")[1];
  let url = document.getElementById("img_url_"+tab+"___"+index).value;
  document.getElementById('modal_img').innerHTML = `
  <div class="fs-align-items-center fs-display-flex fs-flex-direction-column fs-md-gap fs-sm-padding-vertical">
    <img src="${url}" id="foto_modal"></img>
    <button class="btn btn-default" data-dismiss="modal">Close</button>
  </div>
  `;
  var template = $('#modal_img').html();
  FLUIGC.modal({
    content: Mustache.render(template),
    id: 'fluig_dialog',
    size: "full",
    showHeader: false,
    showFooter: false
  });
}
```

---

## Resposta #1

**Eduardo Vantini Neto** (@eduardo.vantini) — 27/02/2025, 15:56

Olá, tudo bem? O botão não fica com o índice mesmo, teria que procurar um input pelo elemento do botão para pegar o índice. Tipo assim:

```auto
$("#data_modal_img_m").parent("div").find("input[value^=img_btn_m___]").split("___")[1];
```

Abs

---

## Resposta #2

**lucaslamb** (@lucaslamb) — 27/02/2025, 16:51

Boa tarde Eduardo, obrigado pelo retorno.
Problema com essa busca é que buscando pelo parent ou querySelector ele entra sempre no td que é gerado sem o índice, aquele “padrão” de toda tabela e por conta disso não consigo encontrar em lugar nenhum o índice do botão que é clicado. E é nesse problema que estou preso.

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 27/02/2025, 17:17 | ❤️ 1

Acredito que assim funcionaria, usando JQuery :

```javascript
function fnAbreFoto(campo){
    const url = $(campo).closest("tr").find('[id*="img_url____"]').val()
    // ...
}
```

---

## Resposta #4

**lucaslamb** (@lucaslamb) — 03/03/2025, 08:29

Tive que fazer uma gambiarra mas funcionou

```auto
url = $(campo).closest("tr").children().eq(4).find("input").eq(2).val();
```

Obrigado pelo apoio.

---

## Resposta #5 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 03/03/2025, 12:03 | ❤️ 2

> ![](https://fluiggers.com.br/letter_avatar_proxy/v4/letter/l/90ced4/48.png) lucaslamb:
>
> > `"img_url_"+tab+"___"+index`

Eu não tinha reparado bem que tem um `tab` antes dos `___`, por isso que o código não deve ter funcionado.

Talvez trocar pra esse funcione.

```javascript
// coloquei o input pra reduzir consultas e no id deixei só o início antes do tab
const url = $(campo).closest("tr").find('input[id*="img_url_"]').val();
```

Do jeito que você fez tá indo mais direto ao input correto também. Tá valendo.

---

---

# Problema na visualização de PDF's

> **Fonte:** [https://fluiggers.com.br/t/problema-na-visualizacao-de-pdfs/392](https://fluiggers.com.br/t/problema-na-visualizacao-de-pdfs/392)
> **Categoria:** WCM
> **Tags:** `fluig`
> **Criado em:** 26/04/2021, 14:15
> **Visualizações:** 1345 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Samuel ** (@SamuelBruing) — 26/04/2021, 14:15

Ao tentar visualizar PDFs em pastas no fluig é exibido o erro “Erro ao gerar a visualização do arquivo. Caso possua permissão, utilize a opção de download do documento.”. Já o download é feito tranquilamente.

Alguém tem uma ideia do que pode ser?

Obrigado!!

---

## Resposta #1

**Daniel Cabral Santos** (@daniel.cabral) — 27/04/2021, 09:05

[@SamuelBruing](/u/samuelbruing) , bem-vindo!

Por acaso o console do navegador ou o server.log dão algum erro adicional? Nunca vi/tive problema com isso, alguma outra pista poderia ajudar!

---

## Resposta #2

**William** (@will060690) — 06/12/2021, 15:50

[@SamuelBruing](/u/samuelbruing) você conseguiu resolver o problema?

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Samuel ** (@SamuelBruing) — 07/12/2021, 07:19 | ❤️ 1

Bom dia! Sim, consegui resolver. Creio que era algum problema nos arquivos, upei novamente e funcionou!

---

## Resposta #4

**Igor Rodrigues** (@fluigor.com.br) — 09/12/2021, 15:27

Vou Complementar o POST do colega com um pouco de conhecimento.

Quando publicamos arquivos do tipo PDF, obrigatoriamente o Fluig utiliza o render de PDF do próprio navegador, quando marcamos dentro das propriedades do Documento a opção de utilizar visualizador interno marcada, obrigatoriamente o PDF vai ser renderizado com o Fluig Viewer ([api.accusoft.com](http://api.accusoft.com))
Caso a mensagem comentada acima seja apresentado, os fortes indicios são de que tens um problema com o Visualizador.

Abrass

---

## Resposta #5

**Wanderley Junior** (@gomeswjunior) — 04/03/2024, 15:31

Conteúdo que pode ajudar
[https://tdn.totvs.com/pages/releaseview.action?pageId=235327464](https://tdn.totvs.com/pages/releaseview.action?pageId=235327464)

---

## Resposta #6

**Matheus Mósso** (@msmosso) — 11/03/2024, 00:51

Tive esse problema ao tentar baixar arquivos que continham caracteres especiais no nome. No meu caso específico, o caractere era o travessão (—)

---

---

# Página publica fluig em incorporada em iframe

> **Fonte:** [https://fluiggers.com.br/t/pagina-publica-fluig-em-incorporada-em-iframe/1914](https://fluiggers.com.br/t/pagina-publica-fluig-em-incorporada-em-iframe/1914)
> **Categoria:** WCM
> **Tags:** `form`
> **Criado em:** 10/05/2023, 15:31
> **Visualizações:** 310 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Wanderley Junior** (@gomeswjunior) — 10/05/2023, 15:31

Pessoal, tenho uma página publica e estou tentando incorpora-la dentro de um iframe no html para que o conteúdo dessa pagina seja exibido internamente em outro local, porém estou tendo o seguinte erro: **fused to display ‘[https://meuenderecofluig.com.br:8443/](https://meuenderecofluig.com.br:8443/)’ in a frame because it set ‘X-Frame-Options’ to ‘sameorigin’**. Pesquisei sobre e vi que há um cabeçalho a ser informado mas é do lado do servidor e não no front. Alguém tem mais detalhes em como corrigir essa situação ?

```auto
<iframe src="https://meuenderecofluig.com.br:8443/portal/1/recursosLogistica_devProduto" height="600" width="800" title="Iframe Example"></iframe>
```

---

---

# Qualificação de Fornecedor

> **Fonte:** [https://fluiggers.com.br/t/qualificacao-de-fornecedor/1150](https://fluiggers.com.br/t/qualificacao-de-fornecedor/1150)
> **Categoria:** WCM
> **Tags:** `form`
> **Criado em:** 23/06/2022, 08:34
> **Visualizações:** 370 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**Leandro** (@leandrojldp) — 23/06/2022, 08:34

Olá!

Estou desenvolvendo processo, onde iremos qualificar nossos fornecedores.
Iremos criar formulário publico e quando for necessário cadastrar novo fornecedor iremos encaminhar link e após preenchimento do formulário será encaminhado de volta para nossa área de compras analisar e estando tudo certo, as informações serão gravadas no Protheus e os anexos ficaram no Ged.

Alguém teria algum projeto de exemplo similar ao que precisamos, para compartilhar ?

---

## Resposta #1

**Daniel Sales** (@Daniel_Sales) — 24/06/2022, 08:27

Bom dia,

O forms resolve bem isso que você quer é só criar um formulário que ele já é publico. Dai manda o link pro seu fornecedor preencher e depois é só consultar o dataset com os dados.

---

## Resposta #2

**Leandro** (@leandrojldp) — 24/06/2022, 16:44

No inicio do processo, usuário irá acessar fluig e irá acessar processo de qualificação adicionar e-mail do fornecedor e enviar.

Chegar para fornecedor, formulário para preenchimento e irá adicionar os anexos e nós enviar.

Após área responsável receber irá analisar estando tudo certo os anexos serão salvos no Ged e as informações no Protheus, caso as informações não estejam corretas irá retornar para fornecedor corrigir.

Assim será nosso processo.

Tem algum exemplo próximo disso que precisamos ?

---

## Resposta #3

**Daniel Sales** (@Daniel_Sales) — 24/06/2022, 18:51

Agora ta mais claro.
Você vai precisar de uma widget publica com a parte de envio de documento e um update de formulário.
Vou ver o que tenho aqui se tem algo do tipo.

---

## Resposta #4

**Leandro** (@leandrojldp) — 02/08/2022, 13:57

Boa tarde, Daniel!

Maravilha consegui avançar com projeto. Obrigado pelo apio.

---

---

# Referenciar imagens em layout

> **Fonte:** [https://fluiggers.com.br/t/referenciar-imagens-em-layout/2292](https://fluiggers.com.br/t/referenciar-imagens-em-layout/2292)
> **Categoria:** WCM
> **Criado em:** 19/10/2023, 10:53
> **Visualizações:** 180 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Gabriel Borchardt** (@borchardt) — 19/10/2023, 10:53

Olá, alguém sabe como referenciar imagens da pasta images em LAYOUTS? Eu vi um tópico aqui sobre imagens em widgets e isso funciona perfeitamente, porém para uma imagem que está dentro de um layout isso não funcionou para mim

```auto
<img src="layout_intranet/images/maquinas-inovavacao.jpg" alt="Image 1">
```

E também tentei

```auto
<img src="layout_intranet/src/main/webapp/images/politica.jpeg" alt="Image 3">
```

Porém sem sucesso.

---

## Resposta #1

**Sérgio Machado** (@sergio.machado) — 19/10/2023, 11:33 | ❤️ 1

O caminho é este aqui:

```auto
<img src="/layout_intranet/resources/images/maquinas-inovavacao.jpg" alt="Image 1">
```

---

---

# Sobre a categoria WCM 

> **Fonte:** [https://fluiggers.com.br/t/sobre-a-categoria-wcm/29](https://fluiggers.com.br/t/sobre-a-categoria-wcm/29)
> **Categoria:** WCM
> **Criado em:** 11/03/2021, 13:48
> **Visualizações:** 339 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Igor Rodrigues** (@fluigor.com.br) — 11/03/2021, 13:48

(Substitua este primeiro parágrafo por uma breve descrição de sua nova categoria. Esta orientação aparecerá na área de seleção da categoria, então tente mantê-la abaixo de 200 caracteres.)

Use os parágrafos a seguir para uma descrição mais longa, ou para estabelecer as instruções ou regras da categoria:

-   Por que as pessoas devem usar essa categoria? Para que ela serve?

-   Como exatamente ela é diferente das outras categorias que já existem?

-   O que os tópicos nessa categoria devem conter, em geral?

-   Precisamos dessa categoria? Podemos juntá-la com outra categoria ou subcategoria?

---

---

# Uso de Promise dentro de dataset

> **Fonte:** [https://fluiggers.com.br/t/uso-de-promise-dentro-de-dataset/2777](https://fluiggers.com.br/t/uso-de-promise-dentro-de-dataset/2777)
> **Categoria:** WCM
> **Tags:** `dataset`
> **Criado em:** 08/05/2024, 12:44
> **Visualizações:** 136 | **Likes:** 4 | **Respostas:** 0

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 08/05/2024, 12:44

Prezado, é possível usar ‘Promise’ dentro de datasets?

Codifiquei (um trecho) assim:

```javascript
if (operacao == "5") {
        // DANDO operação 5 provocar procedure
        return new Promise(function(resolve, reject) {
            chamarProcedure(resolve);
        });
    }
```

e no log.info aparece o erro 'ReferenceError: “Promise” is not defined. ’

---

## Resposta #1

**venturelli** (@venturelli) — 08/05/2024, 15:36 | ❤️ 4

Não. O Promise foi introduzido no ecma 6 enquanto as personalizações do Fluig aceitam apenas ecma 5

---

---

# WCM API para primeiro login na sessão

> **Fonte:** [https://fluiggers.com.br/t/wcm-api-para-primeiro-login-na-sessao/2524](https://fluiggers.com.br/t/wcm-api-para-primeiro-login-na-sessao/2524)
> **Categoria:** WCM
> **Tags:** `fluigapi`
> **Criado em:** 24/01/2024, 13:48
> **Visualizações:** 99 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Gabriel Borchardt** (@borchardt) — 24/01/2024, 13:48

Boa tarde pessoal, alguém sabe a utilidade e como usar esse metodo do objeto wcmapi?

```auto
WCMAPI.isFirstLoginInThisSession();
```

---

---

# Widget Angular com rotas dentro do fluig

> **Fonte:** [https://fluiggers.com.br/t/widget-angular-com-rotas-dentro-do-fluig/2807](https://fluiggers.com.br/t/widget-angular-com-rotas-dentro-do-fluig/2807)
> **Categoria:** WCM
> **Tags:** `widget`, `wcmapi`, `angular`
> **Criado em:** 23/05/2024, 08:09
> **Visualizações:** 156 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Gabriel Borchardt** (@Gabriel_Borchardt) — 23/05/2024, 08:09

Bom dia pessoal! Estou com umas dúvidas aqui, estamos fazendo um projeto onde terá uma widget feita com angular dentro do Fluig, até então beleza, conseguimos fazer ela, criar serviços que usam oauth para consultar datasets e tudo mais, porém para casos onde a widget precise mostrar uma tela diferente (uma rota dentro do angular), ao executar e ir para a rota não muda a tela dentro da widget, mas sim adiciona o nome da rota no endereço do navegador, logo, o fluig não entende pois não existe uma rota com aquele nome nas páginas do sistema, ocasionando em nenhuma execução.

Alguém ja passou por isso?

```auto
this.router.navigate('home');
```

Exemplo: isso deveria ir para a rota home da widget, mas se sua página tem por exemplo: \[TOTVS [https://seuendereco.com/portal/p/suaempresa/paginaangular](https://seuendereco.com/portal/p/suaempresa/paginaangular)

ele adicionará no fim do endpoint um /home, ocasianando um 404…

---

## Resposta #1

**Sérgio Machado** (@sergio.machado) — 23/05/2024, 10:05 | ❤️ 1

Olá Gabriel, tudo bem?

Você chegou a configurar sua base\_url? se não, dá uma olhada neste vídeo que eu fiz.

[![](https://img.youtube.com/vi/9aeAYEIOWJg/hqdefault.jpg "Executando uma aplicação Angular dentro de uma Widget do Fluig")](https://www.youtube.com/watch?v=9aeAYEIOWJg&t=15s)

Uma outra coisa que você pode observar é no log do navegador, já tive problemas semelhantes que ao verificar o log percebi que eu não tinha importado alguns dependencias obrigátorias.

---

## Resposta #2

**Isaac Figueiredo** (@kngrev) — 27/05/2024, 10:09

Tive um problema semelhante ao utilizar Vue e Vue router para gerenciar as rotas. Utilizei uma estrategia de history um pouco mais antiga, o createWebHashHistory, talvez exista algo semelhante no Angular, talvez HashLocationStrategy e LocationStrategy

---

---

# Widgets - Binding de eventos

> **Fonte:** [https://fluiggers.com.br/t/widgets-binding-de-eventos/793](https://fluiggers.com.br/t/widgets-binding-de-eventos/793)
> **Categoria:** WCM
> **Criado em:** 25/11/2021, 12:01
> **Visualizações:** 899 | **Likes:** 3 | **Respostas:** 0

---

## Pergunta original

**Danilo Marinho** (@danilo.marinho) — 25/11/2021, 12:01

Dentro do objeto bindings temos duas propriedades onde podemos registrar eventos: local e global. Qual a diferença dos eventos registrados em cada uma delas?

bindings: {
local: {
‘execute’: \[‘click\_executeAction’\]
},
global: {
}
},

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 25/11/2021, 12:36 | ❤️ 2

Conceitualmente não sei explicar o que o Fluig faz, mas na prática já usei o binding global para eventos em elementos que são criados dinamicamente pelo JS. Meu único caso foi para pegar eventos disparados por botões de Modais criadas com o FLUIGC.modal.

Exemplo:

```javascript
bindings: {
    local: {
        // Ouve o botão de devolução na Widget
        "give-back": ["click_giveBack"],
    },
    global: {
        // Ouve o botão de ação da Modal na Widget
        // Se não for Global ele não consegue pegar o evento disparado pela modal
        "giveback-modal": ["click_modalGiveback"]
    }
},

// Essa função Cria a Modal e no botão de ação de Devolver a Pauta faz um bind
giveBack: function () {
       widgetElements.giveBackModal = FLUIGC.modal({
           title: "Justificativa de Devolução",
           content: `<div class="form-group">
                <label for="${widgetElements.giveBackModalFeedbackId}">Explique o motivo da devolução da pauta</label>
                <textarea class="form-control" rows="5" id="${widgetElements.giveBackModalFeedbackId}"></textarea>
            </div>`,
           size: "large",
           actions: [
                {
                    label: `Devolver Pauta${totalSelected > 1 ? "s" : ""}`,
                    bind: "data-giveback-modal",
                },
                {
                    label: "Cancelar",
                    autoClose: true,
                }
           ]
    });
},
```

---

## Resposta #2 ✅ RESPOSTA ACEITA

**Marcos DePeder** (@Marcos_DePeder) — 25/11/2021, 17:56 | ❤️ 1

Levando em consideração que uma widget gera uma instância (instanceId), que a gente consegue rastrear pelo DOM, o binding local fica restrito a esta instância da widget, seus filhos no DOM, e só. Isso é importante quando várias instâncias “irmãs” precisam ser gerenciadas sem conflitar com as outras, como numa lista, seletores com mesmas características, porém, em outros contextos da página. O controle de efeitos colaterais no local é mais fácil de gerenciar.
O binding global é como no caso citado pelo [@Bruno\_Gasparetto](/u/bruno_gasparetto), quando você cria modal e precisa refletir uma ação “fora” da instância desse modal, como uma instância “irmã”, ou “pai” (novamente, olhando pela estrutura do DOM. E aqui, no global, é preciso tomar mais cuidado para não ter efeitos colaterais inesperados, em especial quando você gerencia uma página muito complexa.
Resumindo em termos mais simples : binding local “olha para dentro” da instância e binding global “olha para fora” da instância.

---

---
