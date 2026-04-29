# Serviços rest como usá-lo

> **Fonte:** [https://fluiggers.com.br/t/servicos-rest-como-usa-lo/2786](https://fluiggers.com.br/t/servicos-rest-como-usa-lo/2786)
> **Categoria:** Ambiente Fluig
> **Criado em:** 15/05/2024, 10:11
> **Visualizações:** 592 | **Likes:** 1 | **Respostas:** 6

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 15/05/2024, 10:11

Prezado, eu tenho um serviço REST que funciona.
Entretanto, não tenho experiência com ele e preciso pôr um botão que vá provocar este serviço numa widget.
A pergunta é: para usar esse serviço sou obrigado a chamar um dataset que faça referência a este serviço?

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 15/05/2024, 11:55 | ❤️ 1

Como tudo, depende… hehehehe.

Você pode, pelo JS no front da widget, chamar diretamente o serviço REST sim. Mas o serviço tem que estar com CORS configurado e estar com HTTPS (acho que tudo publicado hoje está), porque se não estiver e o seu Fluig estiver em HTTPS, o navegador vai bloquear a chamada devido à insegurança.

Mas se o serviço REST possuir a necessidade de mandar credencias elas ficarão “visíveis” no seu front, então qualquer usuário um pouco mais esperto conseguiria inspecionar e descobrir como fazer a chamada ao serviço. Se isso não for impedimento pode chamar diretamente pelo front.

A parte boa de cadastrar o serviço no Fluig e então fazer o acesso por dataset é que você mantém as credenciais ocultas no back, enquanto que pra widget é só uma chamada a um dataset. E com isso o CORS também já não fica obrigatório no serviço REST.

---

## Resposta #2

**Gabriel Borchardt** (@Gabriel_Borchardt) — 05/06/2024, 16:49

Bruno, vc tem um exemplo de dataset personalizado que consulta um rest usando parametros?

exemplo:

eu tenho um rest semelhante a

[http://enderecoIp/endpoint](http://enderecoIp/endpoint)

esse endpoint tem um parametro ‘matricula’ para consultar na api, como eu conseguiria isso?

minha ideia é em um formulário no GED eu fazer uma função onchange no input e preencher o dado de outros inputs com o retorno da api

---

## Resposta #3

**Gabriel Borchardt** (@Gabriel_Borchardt) — 05/06/2024, 16:52

Esqueci do detalhe: esse serviço no fluig eu consegui colocar, ele usa autenticação basic e eu consigo preencher lá, consegui colocando de forma bruta a url

exemplo: [http://enderecoIp/endpoint?matricula=123](http://enderecoIp/endpoint?matricula=123)

ai consultando la retorna, mas queria isso dinamico.

obg desde ja

---

## Resposta #4

**Bruno Gasparetto** (@Bruno_Gasparetto) — 06/06/2024, 09:44

[@Gabriel\_Borchardt](/u/gabriel_borchardt) , quando cadastramos o serviços nós colocamos o Domínio, certo? Considera ele como um “basePath” do seu serviço.

Aqui eu criei um REST pra acessar um sistema e dei o nome **DOCFLOW**, e no Domínio eu deixei o seguinte: [https://meudocflow.com.br/docflow](https://meudocflow.com.br/docflow).

Na chamada ao REST usamos a propriedade `endpoint` para indicar o resto da URL e todos os PathParam e QueryParam precisamos constar nessa propriedade.

Já os parâmetros que vão no corpo são inseridos na propriedade `params`.

Aí na hora de chamar o serviço o código fica assim (nesse caso a chamada envia como x-www-form-urlencoded, mas deve-se indicar conforme o que a API aceita):

```javascript
var data = {
    companyId : "" + getValue("WKCompany")
    , serviceCode : "DOCFLOW"
    , endpoint : "/ws/include/processo/documento?response_type=json&auth=" + authToken
    , method : "POST"
    , timeoutService: "200"
    , params: {
        user_login: "" + user_login
        , codigo_unidade: "" + codigo_unidade
        , id_documento: "" + id_documento
        , protocolo_processo: "" + protocolo_processo
    }
    , options: {
        encoding : "UTF-8"
        , mediaType: "application/x-www-form-urlencoded"
    }
    , headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    }
};

var clientService = fluigAPI.getAuthorizeClientService();
var response = clientService.invoke(JSON.stringify(data));
var result = JSON.parse(response.getResult());
```

Com aquele `endpoint` a chamada será feita para [https://meudocflow.com.br/docflow/ws/include/processo/documento?response\_type=json&auth=124565787](https://meudocflow.com.br/docflow/ws/include/processo/documento?response_type=json&auth=124565787)

**Muito Importante**: Tudo que está na variável `data`, que será convertida pra JSON, deve estar em string. Por isso sempre faço um `"" + valor_a_ser_utilizado`, pois isso força a converter em string.

---

## Resposta #5

**MAURO SIMOES** (@Mautresim) — 06/06/2024, 10:38

[@Bruno\_Gasparetto](/u/bruno_gasparetto) obrigado por mais esta contribuição. Serve a todos nós.
Gostaria de saber de onde vem o conteúdo da variável ’ authToken’?

---

## Resposta #6

**Bruno Gasparetto** (@Bruno_Gasparetto) — 06/06/2024, 10:40

[@Mautresim](/u/mautresim), nesse caso da API que utilizo a autenticação é efetuada em outra etapa e na autenticação ela me fornece esse token. É algo específico do WebService disponibilizado pelo sistema.

O exemplo postado é só pra ter conhecimento do que é cada parâmetro, não representa exatamente como deve ser executada a chamada.

---

## Resposta #7

**Gabriel Borchardt** (@Gabriel_Borchardt) — 06/06/2024, 10:58

No atributo endpoint da array data, seria apenas o / que comentei ali?

Exemplo: Configuro no serviço do Fluig o http com ip até o momento que preciso usar um / para dizer o endpoint e então passar parametros se necessário

esse atributo endpoint seria esse endpoint e os params seria realmente os parametros que a api aceita?

---

## Resposta #8

**Bruno Gasparetto** (@Bruno_Gasparetto) — 06/06/2024, 11:10

O Fluig fará a chamada pra seguinte URL: `valor_do_dominio_do_servico + valor_endpoint_registrado_no_objeto_data`

Então se no seu domínio você deixou `/` no final você não colocaria o `/` no início do seu endpoint, senão a sua url ficaria com `//` na hora de fazer a concatenação.

Os params que vão em `params` dentro do objeto data são os que vão no corpo da requisição. Normalmente vai usar em chamadas POST e PUT.

E como comentei, os PathParams e QueryParams devem ir no endpoint, afinal ele que será utilizado pra gerar a URL final na qual o Fluig fará a requisição.

Na documentação [Autorização para client de Serviços REST](https://tdn.totvs.com/pages/releaseview.action?pageId=239041233) tem algumas dicas e exemplos.

---
